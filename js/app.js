// MARSICARE · lógica de la web (navegación por pasos, cuestionarios con registro, diapositivas narradas,
// escala ERLAM, tratamiento por lesión, estadísticas y progreso).
(function () {
  const M = window.MODULOS, S = window.SITIO, C = window.CONFIG;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const pasosEl = $("#pasos"), mainEl = $("#contenido"), progEl = $("#prog"), progTxt = $("#prog-txt");
  const asideEl = $("aside");
  const CLAVE = "marsicare.vistos";
  const NUMEROS = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
  const enLetras = n => NUMEROS[n] || String(n);
  const mayus = t => t.charAt(0).toUpperCase() + t.slice(1);
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── Almacenamiento local seguro ─────────────────────────────────
  const leer = (k, def) => { try { const v = localStorage.getItem(k); return v === null ? def : JSON.parse(v); } catch (e) { return def; } };
  const guardar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

  // ── Progreso (se guarda en este navegador) ─────────────────────
  const vistos = () => leer(CLAVE, []);
  function marcarVisto(id) { const v = vistos(); if (!v.includes(id)) { v.push(id); guardar(CLAVE, v); } }
  function pintarProgreso() {
    const v = vistos().filter(id => M.some(m => m.id === id));
    progEl.style.width = Math.round(v.length / M.length * 100) + "%";
    progTxt.textContent = v.length === 0 ? "Aún no has comenzado" : v.length === M.length ? "¡Recorrido completo!" : `${v.length} de ${M.length} pasos vistos`;
  }

  // ── Registro en la hoja de Google (visitas, pretest, postest) ──
  function visitante() {
    let id = leer("marsicare.visitante", "");
    if (!id) { id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8); guardar("marsicare.visitante", id); }
    return id;
  }
  function registrar(datos) {
    if (!C.registro) return Promise.resolve(false);
    const cuerpo = JSON.stringify(Object.assign({ visitante: visitante(), fecha: new Date().toISOString() }, datos));
    return fetch(C.registro, { method: "POST", mode: "no-cors", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: cuerpo })
      .then(() => true).catch(() => false);
  }
  function contarVisita() {
    let nueva = true;
    try { nueva = !sessionStorage.getItem("marsicare.sesion"); sessionStorage.setItem("marsicare.sesion", "1"); } catch (e) {}
    if (nueva) registrar({ tipo: "visita", pagina: location.hash || "#inicio", dispositivo: matchMedia("(max-width: 760px)").matches ? "Teléfono" : "Computador o tableta" });
  }

  // ── Barra lateral ───────────────────────────────────────────────
  function pintarPasos(actual) {
    const v = vistos();
    pasosEl.innerHTML =
      `<a class="paso inicio ${actual === "inicio" ? "activo" : ""}" href="#inicio"><span class="d">🏠</span><span><b>Inicio</b><small>Presentación</small></span></a>` +
      M.map(m => `<a class="paso ${m.eval ? "eval" : ""} ${v.includes(m.id) ? "visto" : ""} ${actual === m.id ? "activo" : ""}" href="#${m.id}"><span class="d">${m.ico}</span><span><b>${m.n}. ${m.titulo}</b><small>${m.formato} · ${m.tiempo}</small></span></a>`).join("");
  }

  // ── Video ───────────────────────────────────────────────────────
  function bloqueVideo(claveVideo, titulo) {
    const id = C[claveVideo];
    if (id) return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${titulo}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
    return `<div class="video"><div><div class="play">▶</div><b>Video en preparación</b><p>Aquí se mostrará el video "${titulo}".</p><p>Mientras tanto, puedes leer el contenido completo más abajo.</p></div></div>`;
  }

  // ── Cuestionarios (pretest y postest) con registro ──────────────
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function renderQuiz(m) {
    const q = m.quiz, datos = leer("marsicare.participante", { nombre: "", profesion: "" });
    const preguntas = q.preguntas.map((p, i) => `
      <div class="preg" data-i="${i}">
        <h4><span>${i + 1}.</span>${p.p}</h4>
        <div class="opc">${p.o.map((o, j) => `<button type="button" data-j="${j}">${String.fromCharCode(97 + j)}) ${o}</button>`).join("")}</div>
        <div class="retro"></div>
      </div>`).join("");
    return `
<div class="card">
  <span class="etiqueta">${m.titulo}</span>
  <h2>${m.n === 1 ? "Antes de empezar, ¿qué sabes sobre las MARSI?" : "¿Cuánto aprendiste?"}</h2>
  <p class="intro">${q.intro}</p>
  <form class="participante" id="participante" autocomplete="on">
    <div class="campo"><label for="p-nombre">Nombre completo</label><input id="p-nombre" name="name" required minlength="3" maxlength="80" value="${esc(datos.nombre)}" placeholder="Escribe tu nombre y apellido"></div>
    <div class="campo"><label for="p-prof">Profesión o cargo <small>(opcional)</small></label><input id="p-prof" name="organization-title" maxlength="80" value="${esc(datos.profesion)}" placeholder="Por ejemplo: enfermera, auxiliar, estudiante"></div>
    <button class="btn rosa" type="submit">Comenzar el ${m.titulo.toLowerCase()} →</button>
    <p class="aviso">Tus respuestas se guardan con tu nombre para el registro académico de la autora. Así puedes comparar tu pretest con tu postest.</p>
  </form>
  <div class="quiz oculto" id="quiz">${preguntas}<div id="resultado"></div></div>
</div>`;
  }

  function activarQuiz(m) {
    const quiz = $("#quiz"), form = $("#participante"); if (!quiz || !form) return;
    let persona = null;
    form.addEventListener("submit", e => {
      e.preventDefault();
      persona = { nombre: $("#p-nombre").value.trim().replace(/\s+/g, " "), profesion: $("#p-prof").value.trim() };
      if (persona.nombre.length < 3) { $("#p-nombre").focus(); return; }
      guardar("marsicare.participante", persona);
      form.classList.add("oculto"); quiz.classList.remove("oculto");
      const hola = document.createElement("p"); hola.className = "saludo";
      hola.innerHTML = `Respondiendo como <b>${esc(persona.nombre)}</b>. <button type="button" class="enlace" id="cambiar-nombre">Cambiar</button>`;
      quiz.before(hola);
      $("#cambiar-nombre").onclick = () => navegar(m.id, true);
      quiz.querySelector(".preg").scrollIntoView({ behavior: reducido ? "auto" : "smooth", block: "center" });
    });
    const total = m.quiz.preguntas.length, elegidas = [];
    let respondidas = 0, aciertos = 0;
    quiz.addEventListener("click", e => {
      const btn = e.target.closest(".opc button"); if (!btn || btn.disabled) return;
      const preg = btn.closest(".preg"), i = +preg.dataset.i, j = +btn.dataset.j, r = m.quiz.preguntas[i].r;
      elegidas[i] = String.fromCharCode(97 + j);
      preg.querySelectorAll("button").forEach(b => { b.disabled = true; if (+b.dataset.j === r) b.classList.add("ok"); });
      const retro = preg.querySelector(".retro");
      if (j === r) { aciertos++; retro.textContent = "✓ Correcto."; retro.className = "retro ok"; }
      else { btn.classList.add("mal"); retro.textContent = `✗ La respuesta correcta es la ${String.fromCharCode(97 + r)}).`; retro.className = "retro mal"; }
      respondidas++;
      const sig = preg.nextElementSibling;
      if (sig && sig.classList.contains("preg")) setTimeout(() => sig.scrollIntoView({ behavior: reducido ? "auto" : "smooth", block: "center" }), 450);
      if (respondidas === total) terminar();
    });
    function terminar() {
      const pct = Math.round(aciertos / total * 100);
      const msj = pct === 100 ? "¡Excelente! Dominas el tema." : pct >= 70 ? "¡Muy bien! Repasa las que fallaste." : m.n === 1 ? "Buen punto de partida. El recorrido te ayudará a mejorar." : "Te recomendamos repasar los módulos y volver a intentarlo.";
      const previo = m.quiz.tipo === "postest" ? leer("marsicare.resultado.pretest", null) : null;
      const comparar = previo ? `<p class="comparar">En el pretest obtuviste <b>${previo.aciertos} / ${previo.total}</b>. ${aciertos > previo.aciertos ? "¡Mejoraste! 🎉" : aciertos === previo.aciertos ? "Mantuviste tu resultado." : "Vale la pena repasar los módulos."}</p>` : "";
      guardar(`marsicare.resultado.${m.quiz.tipo}`, { aciertos, total, fecha: Date.now() });
      $("#resultado").innerHTML = `<div class="resultado"><b>${aciertos} / ${total}</b><p>${msj}</p>${comparar}<p class="estado-registro" id="estado-registro">${C.registro ? "Guardando tu resultado…" : ""}</p><button class="btn suave" type="button" id="reintentar">Volver a responder</button></div>`;
      $("#reintentar").onclick = () => navegar(m.id, true);
      $("#resultado").scrollIntoView({ behavior: reducido ? "auto" : "smooth", block: "center" });
      registrar({ tipo: m.quiz.tipo, nombre: persona.nombre, profesion: persona.profesion, aciertos, total, respuestas: elegidas.join(",") })
        .then(ok => { const e = $("#estado-registro"); if (e && C.registro) e.textContent = ok ? "✓ Tu resultado quedó registrado." : "No se pudo guardar el resultado. Revisa tu conexión y vuelve a responder."; });
    }
  }

  // ── Narración de diapositivas (audio grabado o voz del navegador) ──
  const Voz = {
    token: 0, audio: null,
    disponible() { return "speechSynthesis" in window; },
    voz() {
      const vs = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang));
      const pref = ["es-CO", "es-419", "es-MX", "es-US", "es-ES"];
      const lang = v => v.lang.replace("_", "-");
      const puntos = v => (/natural|online|neural/i.test(v.name) ? 10 : 0) + (/google/i.test(v.name) ? 4 : 0) + (pref.includes(lang(v)) ? pref.length - pref.indexOf(lang(v)) : 0);
      return vs.sort((a, b) => puntos(b) - puntos(a))[0] || null;
    },
    detener() {
      this.token++;
      if (this.audio) { this.audio.pause(); this.audio = null; }
      if (this.disponible()) speechSynthesis.cancel();
    },
    // Lee un texto; llama a alTerminar() solo si terminó sin que lo interrumpieran.
    decir(texto, archivo, alTerminar) {
      this.detener();
      const t = this.token;
      const fin = () => { if (t === this.token && alTerminar) alTerminar(); };
      if (archivo) {
        this.audio = new Audio(archivo);
        this.audio.onended = fin;
        this.audio.play().catch(() => {});
        return;
      }
      if (!this.disponible()) return;
      // Chrome corta los textos largos: se lee por frases.
      const frases = texto.match(/[^.!?;:]+[.!?;:]?/g).map(s => s.trim()).filter(Boolean);
      const voz = this.voz();
      frases.forEach((f, i) => {
        const u = new SpeechSynthesisUtterance(f);
        u.lang = voz ? voz.lang : "es-CO"; if (voz) u.voice = voz;
        u.rate = 1; u.pitch = 1;
        if (i === frases.length - 1) u.onend = fin;
        speechSynthesis.speak(u);
      });
    }
  };
  if (Voz.disponible()) { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices(); }

  // ── Mazo de diapositivas ────────────────────────────────────────
  let teclaMazo = null;
  function armarMazo(m) {
    const cont = $(`#diapos-${m.id}`); if (!cont) return;
    const cfg = m.mazo || { etiqueta: "DIAPOSITIVA" };
    const lista = m.diapos.slice();
    if (cfg.cierreFinal) lista.push({ cierre: true, ico: "💡", sec: "Para recordar", t: S.cierre,
      html: `<p style="margin:14px 0 6px;font-weight:800">Beneficios de prevenir las MARSI</p>
        <div class="d-chips claro"><span>🧴 Preserva la integridad de la piel</span><span>😌 Disminuye el dolor y el malestar</span><span>🦠 Reduce infecciones y complicaciones</span><span>🩹 Favorece una cicatrización adecuada</span><span>🏥 Disminuye la estancia hospitalaria y los costos</span><span>⭐ Promueve una atención segura, basada en la evidencia y centrada en el paciente</span></div>` });
    const n = lista.length;
    const narrada = cfg.narrada && (Voz.disponible() || (C.narracionMarsi || []).length);
    const cuerpo = s => s.html || `<ul class="d-lista">${(s.b || []).map(b => `<li>${b}</li>`).join("")}</ul>${s.d ? `<details><summary>Más detalle</summary>${s.d}</details>` : ""}`;
    cont.innerHTML = `
      <div class="mazo">
        <div class="mazo-barra"><i id="mazo-prog"></i></div>
        <div class="mazo-cab">
          <span class="mazo-cuenta" id="mazo-cuenta"></span>
          ${narrada ? `<div class="mazo-voz"><button class="btn-voz" type="button" id="btn-voz" aria-pressed="false"><span class="ondas" aria-hidden="true"><i></i><i></i><i></i></span><span class="txt">Escuchar</span></button>
          <label class="auto"><input type="checkbox" id="voz-auto" checked> Avanzar solo</label></div>` : ""}
        </div>
        <div class="mazo-escena" id="mazo-escena">
          ${lista.map((s, i) => `
          <article class="diapo ${s.cierre ? "cierre" : ""}" data-i="${i}" aria-hidden="true">
            <div class="diapo-cab"><span class="ico">${s.ico || ""}</span><div>${s.sec ? `<span class="sec">${s.sec}</span>` : ""}<h3>${s.t}</h3></div></div>
            <div class="diapo-cuerpo">${cuerpo(s)}</div>
          </article>`).join("")}
        </div>
        <div class="diapo-nav">
          <button class="btn borde" type="button" id="d-ant">← Anterior</button>
          <div class="puntos">${lista.map((_, i) => `<button type="button" data-i="${i}" aria-label="Ir a la diapositiva ${i + 1}"></button>`).join("")}</div>
          <button class="btn teal" type="button" id="d-sig">Siguiente →</button>
        </div>
      </div>`;
    const diapos = $$(".diapo", cont), puntos = $$(".puntos button", cont), btnVoz = $("#btn-voz", cont), auto = $("#voz-auto", cont);
    let act = -1, hablando = false;
    const textoVoz = i => lista[i].voz || (lista[i].t + ". " + (lista[i].b || []).join(" "));
    function marcarVoz(on) {
      hablando = on;
      if (!btnVoz) return;
      btnVoz.setAttribute("aria-pressed", on ? "true" : "false");
      btnVoz.querySelector(".txt").textContent = on ? "Detener" : "Escuchar";
    }
    function narrar() {
      marcarVoz(true);
      Voz.decir(textoVoz(act), (C.narracionMarsi || [])[act], () => {
        if (auto && auto.checked && act < n - 1) ir(act + 1, true);
        else marcarVoz(false);
      });
    }
    function ir(i, desdeVoz) {
      i = Math.max(0, Math.min(n - 1, i));
      if (i === act) return;
      const dir = i > act ? "der" : "izq";
      diapos.forEach((d, k) => {
        const on = k === i;
        d.classList.toggle("activa", on); d.setAttribute("aria-hidden", on ? "false" : "true");
        d.classList.remove("desde-der", "desde-izq");
        if (on && act >= 0 && !reducido) { void d.offsetWidth; d.classList.add("desde-" + dir); }
      });
      act = i;
      puntos.forEach((p, k) => { p.classList.toggle("activo", k === act); p.classList.toggle("hecho", k < act); });
      $("#mazo-cuenta", cont).textContent = `${cfg.etiqueta} ${act + 1} DE ${n}`;
      $("#mazo-prog", cont).style.width = ((act + 1) / n * 100) + "%";
      $("#d-ant", cont).disabled = act === 0;
      $("#d-sig", cont).textContent = act === n - 1 ? "Volver al inicio ↺" : "Siguiente →";
      if (hablando) narrar(); else if (!desdeVoz) Voz.detener();
    }
    $("#d-ant", cont).onclick = () => ir(act - 1);
    $("#d-sig", cont).onclick = () => ir(act === n - 1 ? 0 : act + 1);
    puntos.forEach(p => p.onclick = () => ir(+p.dataset.i));
    if (btnVoz) btnVoz.onclick = () => { if (hablando) { Voz.detener(); marcarVoz(false); } else narrar(); };
    // Deslizar en el teléfono
    const escena = $("#mazo-escena", cont); let x0 = null, y0 = 0;
    escena.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    escena.addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) ir(act + (dx < 0 ? 1 : -1));
    }, { passive: true });
    // Misma altura para todas las diapositivas en pantallas anchas: los botones no saltan.
    function igualar() {
      escena.style.minHeight = "";
      if (!escena.isConnected || document.documentElement.clientWidth < 760) return;
      let max = 0;
      diapos.forEach(d => { const antes = d.style.display; d.style.display = "block"; max = Math.max(max, d.offsetHeight); d.style.display = antes; });
      escena.style.minHeight = (max + 22) + "px";
    }
    igualar();
    if (document.fonts) document.fonts.ready.then(igualar);
    window.addEventListener("resize", igualar);
    // Flechas del teclado
    teclaMazo = e => {
      if (/input|textarea|select/i.test((e.target.tagName || "")) || $("#modal")) return;
      if (e.key === "ArrowRight") ir(act + 1); else if (e.key === "ArrowLeft") ir(act - 1);
    };
    document.addEventListener("keydown", teclaMazo);
    ir(0);
  }

  // ── Escala ERLAM ────────────────────────────────────────────────
  function armarErlam(m) {
    const cont = $("#erlam"); if (!cont || !m.erlam) return;
    const E = m.erlam; let k = 0;
    const total = E.dominios.reduce((s, d) => s + d.items.length, 0);
    cont.innerHTML = `
      <div class="erlam">${E.dominios.map((d, di) => `
        <fieldset class="dominio" style="--c:${d.c}">
          <legend><span>Dominio ${di + 1}</span>${d.t}<b class="cuenta" data-d="${di}">0 / ${d.items.length}</b></legend>
          ${d.items.map(it => { k++; return `<label class="item"><input type="checkbox" data-d="${di}"><span class="n">${k}</span><span class="t">${it}</span></label>`; }).join("")}
        </fieldset>`).join("")}
      </div>
      <div class="erlam-total" id="erlam-total" aria-live="polite">
        <div class="marcador"><b id="erlam-pts">0</b><span>/ ${total} puntos</span></div>
        <div class="riesgo" id="erlam-riesgo"><b>Riesgo bajo</b><span>Menos de 11 puntos</span></div>
        <div class="acciones"><button type="button" class="btn borde" id="erlam-borrar">Reiniciar</button><button type="button" class="btn suave" id="erlam-ver">Ver la escala original</button></div>
      </div>
      <div class="erlam-guia"><span class="bajo"><b>&lt; 11 puntos</b> Riesgo bajo</span><span class="alto"><b>≥ 11 puntos</b> Riesgo alto</span></div>
      <p class="fuente">Fuente: ${E.fuente} <a href="https://doi.org/${E.doi}" target="_blank" rel="noopener">doi: ${E.doi}</a></p>`;
    const cajas = $$("input", cont);
    function contar() {
      const pts = cajas.filter(c => c.checked).length, alto = pts >= 11;
      $("#erlam-pts").textContent = pts;
      $$(".cuenta", cont).forEach(c => { const di = +c.dataset.d; c.textContent = `${cajas.filter(x => +x.dataset.d === di && x.checked).length} / ${E.dominios[di].items.length}`; });
      const r = $("#erlam-riesgo"); r.classList.toggle("alto", alto);
      r.innerHTML = alto ? "<b>Riesgo alto</b><span>11 puntos o más: extrema las medidas de prevención</span>" : "<b>Riesgo bajo</b><span>Menos de 11 puntos</span>";
      $("#erlam-total").classList.toggle("alto", alto);
    }
    cont.addEventListener("change", contar);
    $("#erlam-borrar").onclick = () => { cajas.forEach(c => c.checked = false); contar(); };
    $("#erlam-ver").onclick = () => abrirModal(`<img class="lamina-grande" src="img/escala-erlam.png" alt="Escala ERLAM completa con sus 48 ítems en 8 dominios">`, "Escala ERLAM");
  }

  // ── Tratamiento por tipo de lesión ──────────────────────────────
  function armarLesiones(m) {
    const cont = $("#lesiones"); if (!cont || !m.lesiones) return;
    const todas = [];
    m.lesiones.forEach(g => g.items.forEach(it => todas.push(Object.assign({ grupo: g.grupo, color: g.color, tinta: g.tinta }, it))));
    cont.innerHTML = `
      <div class="lesiones">
        <div class="les-menu" role="tablist" aria-label="Tipos de lesión">${m.lesiones.map(g => `
          <div class="les-grupo"><span class="k" style="color:${g.tinta}">${g.grupo}</span>
          ${g.items.map(it => { const i = todas.findIndex(x => x.t === it.t); return `<button type="button" role="tab" class="les-btn" data-i="${i}" style="--c:${g.color};--t:${g.tinta}"><img src="img/lesiones/${it.img}.jpg" alt=""><span>${it.t}</span></button>`; }).join("")}</div>`).join("")}
        </div>
        <div class="les-panel" id="les-panel" role="tabpanel"></div>
      </div>`;
    const botones = $$(".les-btn", cont), panel = $("#les-panel");
    function ver(i) {
      const l = todas[i];
      botones.forEach(b => b.setAttribute("aria-selected", +b.dataset.i === i ? "true" : "false"));
      panel.style.setProperty("--c", l.color); panel.style.setProperty("--t", l.tinta);
      panel.innerHTML = `
        <div class="les-cab"><img src="img/lesiones/${l.img}.jpg" alt="${l.t}"><div><span class="k">${l.grupo}</span><h3>${l.t}</h3>${l.en ? `<small>${l.en}</small>` : ""}</div></div>
        <ol class="les-pasos">${l.pasos.map(p => `<li>${p}</li>`).join("")}</ol>`;
      if (!reducido) { panel.classList.remove("entra"); void panel.offsetWidth; panel.classList.add("entra"); }
    }
    botones.forEach(b => b.onclick = () => {
      ver(+b.dataset.i);
      if (matchMedia("(max-width: 760px)").matches) panel.scrollIntoView({ behavior: reducido ? "auto" : "smooth", block: "start" });
    });
    ver(0);
  }

  // ── Comparativa de adhesivos: fichas embebidas + tabla en pantalla completa ──
  const COLS = [["ventajas", "Ventajas", "✅"], ["desventajas", "Desventajas", "⚠️"], ["clinica", "Implicaciones clínicas", "🩺"]];
  function renderComparativa(m) {
    const cont = $("#tabla-adhesivos"); if (!cont || !m.tabla) return;
    const fichas = m.tabla.map(f => `
      <article class="adh" style="--c:${f.color}">
        <header><span class="ico">${f.ico}</span><div><h4>${f.tipo}</h4><small><b>Base:</b> ${f.base}</small></div></header>
        <div class="adh-cols">${COLS.map(([k, t, i]) => `<section><h5>${i} ${t}</h5><ul>${f[k].map(x => `<li>${x}</li>`).join("")}</ul></section>`).join("")}</div>
      </article>`).join("");
    cont.innerHTML = `<div class="comparativa">${fichas}</div>
      <div style="text-align:center;margin-top:16px"><button class="btn borde" type="button" id="abrir-tabla">⛶ Ver como tabla en pantalla completa</button></div>`;
    $("#abrir-tabla").onclick = () => abrirModal(`
      <table class="comparativa-tabla">
        <thead><tr><th>Tipo de adhesivo</th><th>Base</th>${COLS.map(([, t]) => `<th>${t}</th>`).join("")}</tr></thead>
        <tbody>${m.tabla.map(f => `<tr style="--c:${f.color}"><td data-col="Tipo de adhesivo"><span class="ico">${f.ico}</span> ${f.tipo}</td><td data-col="Base">${f.base}</td>${COLS.map(([k, t]) => `<td data-col="${t}"><ul>${f[k].map(x => `<li>${x}</li>`).join("")}</ul></td>`).join("")}</tr>`).join("")}</tbody>
      </table>
      <p class="fuente" style="text-align:center">La selección del adhesivo adecuado depende del tipo de piel, del dispositivo que se va a fijar, del tiempo de uso y del estado clínico del paciente.</p>`, "Comparativa de adhesivos médicos");
  }

  // Láminas que se abren en grande
  function armarLaminas() {
    $$(".lamina").forEach(b => b.onclick = () => abrirModal(`<img class="lamina-grande" src="${b.dataset.img}" alt="${b.dataset.t}">`, b.dataset.t));
  }

  function abrirModal(html, titulo) {
    cerrarModal(true);
    const modal = document.createElement("div");
    modal.className = "modal"; modal.id = "modal"; modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true"); modal.setAttribute("aria-label", titulo);
    modal.innerHTML = `<div class="modal-caja"><div class="modal-cab"><h3>${titulo}</h3><button class="modal-cerrar" type="button" aria-label="Cerrar">✕</button></div><div class="modal-cuerpo">${html}</div></div>`;
    document.body.appendChild(modal); document.body.classList.add("sin-scroll");
    requestAnimationFrame(() => modal.classList.add("abierto"));
    modal.addEventListener("click", e => { if (e.target === modal || e.target.closest(".modal-cerrar")) cerrarModal(); });
    document.addEventListener("keydown", escModal);
    modal.querySelector(".modal-cerrar").focus();
  }
  function escModal(e) { if (e.key === "Escape") cerrarModal(); }
  function cerrarModal(ya) {
    const modal = $("#modal"); if (!modal) return;
    modal.id = ""; modal.classList.remove("abierto"); document.body.classList.remove("sin-scroll");
    document.removeEventListener("keydown", escModal);
    if (ya) modal.remove(); else setTimeout(() => modal.remove(), 260);
  }

  // ── Vistas ──────────────────────────────────────────────────────
  function tarjetaAutora() {
    const a = S.autora;
    return `<div class="b autora"><span class="k">Autora</span>
      <b class="nombre">${a.nombre}</b>
      <ul>${a.titulos.map(t => `<li>${t}</li>`).join("")}</ul>
      <a class="correo" href="mailto:${a.correo}">✉️ ${a.correo}</a></div>`;
  }

  function renderInicio() {
    const primero = M[0], medios = M.length - 2;
    mainEl.innerHTML = `
<section class="portada">
  <div class="p-texto">
    <img class="escudo" src="img/univalle.svg" alt="Universidad del Valle">
    <span class="tag">RUTA DE APRENDIZAJE · ${M.length} PASOS</span>
    <h1>Un lugar para aprender y <span>transformar el cuidado de la piel</span></h1>
    <blockquote>“${S.cita}”</blockquote>
    <div class="acciones"><a class="btn rosa" href="#${primero.id}">Comenzar con el ${primero.titulo.toLowerCase()} →</a><a class="btn suave" href="#recorrido">Ver el recorrido</a></div>
  </div>
  <div class="p-logo"><img src="img/logo-transparente.png" alt="Logo de MARSICARE: una curita sobre una mano, con el lema Aprende, Previene, Protege la piel"></div>
</section>
<div class="bento inicio-bento">
  <div class="b bienvenida"><span class="k">Bienvenida</span><p>${S.bienvenida}</p></div>
  ${tarjetaAutora()}
  <div class="b stat"><b>20–41,9 %</b><span>de incidencia de MARSI en entornos hospitalarios</span></div>
  <div class="b stat"><b>30 min</b><span>de eritema tras el retiro definen una MARSI</span></div>
  <div class="b stat"><b>54,2 %</b><span>en neonatos, niños y adultos mayores</span></div>
</div>
<div class="card" id="recorrido" style="margin-top:24px">
  <h2>El recorrido</h2>
  <p class="intro">${mayus(enLetras(M.length))} pasos en orden: empieza con el pretest, aprende en los ${enLetras(medios)} módulos del medio y cierra con el postest.</p>
  <div class="bento" style="margin-top:12px">
    ${M.map(m => `<a class="b mod ${m.eval ? "eval" : ""}" href="#${m.id}" style="background:${m.color}"><span class="ico">${m.ico}</span><span class="paso-n">PASO ${m.n} DE ${M.length}</span><h3>${m.titulo}</h3><p>${m.resumen}</p></a>`).join("")}
  </div>
</div>`;
    document.title = `${S.nombre} · ${S.lema}`;
  }

  function renderEstadisticas() {
    mainEl.innerHTML = `
<div class="card estad">
  <span class="etiqueta">Registro</span>
  <h2>Estadísticas de MARSICARE</h2>
  <p class="intro">Visitas a la web y resultados del pretest y del postest. El detalle con cada nombre está en la hoja de Google de la autora.</p>
  <div id="estad-cuerpo"><p>Cargando…</p></div>
</div>`;
    document.title = `Estadísticas · ${S.nombre}`;
    const cuerpo = $("#estad-cuerpo");
    if (!C.registro) { cuerpo.innerHTML = `<div class="nota rosa">El registro todavía no está conectado. Cuando se agregue la dirección de la hoja de Google en la configuración, aquí aparecerán las cifras.</div>`; return; }
    const pct = v => v === null || v === undefined ? "—" : Math.round(v * 100) + " %";
    fetch(C.registro + (C.registro.includes("?") ? "&" : "?") + "accion=resumen")
      .then(r => r.json())
      .then(d => {
        const mejora = d.pretest.promedio !== null && d.postest.promedio !== null ? Math.round((d.postest.promedio - d.pretest.promedio) * 100) : null;
        cuerpo.innerHTML = `
          <div class="tarjetas">
            <div class="tarjeta c-celeste"><div class="ico">👀</div><h4 class="cifra">${d.visitas}</h4><p>visitas a la web</p></div>
            <div class="tarjeta c-menta"><div class="ico">🧑‍⚕️</div><h4 class="cifra">${d.visitantes}</h4><p>personas distintas</p></div>
            <div class="tarjeta c-rosa"><div class="ico">🎯</div><h4 class="cifra">${d.pretest.n}</h4><p>pretest respondidos · promedio ${pct(d.pretest.promedio)}</p></div>
            <div class="tarjeta c-amarillo"><div class="ico">🏁</div><h4 class="cifra">${d.postest.n}</h4><p>postest respondidos · promedio ${pct(d.postest.promedio)}</p></div>
          </div>
          ${mejora !== null ? `<p class="destacado">${mejora >= 0 ? "El promedio mejoró" : "El promedio cambió"} ${mejora >= 0 ? "+" : ""}${mejora} puntos porcentuales del pretest al postest.</p>` : ""}
          <p class="fuente">Actualizado: ${new Date(d.actualizado).toLocaleString("es-CO")}</p>`;
      })
      .catch(() => { cuerpo.innerHTML = `<div class="nota rosa">No se pudieron cargar las cifras. Revisa la conexión e intenta de nuevo.</div>`; });
  }

  function renderModulo(m) {
    const ant = M[m.n - 2], sig = M[m.n];
    const ficha = m.quiz ? renderQuiz(m) : m.html;
    mainEl.innerHTML = `
<div class="bento">
  <div class="b hero" style="background:${m.color}"><span class="ico">${m.ico}</span>
    <span class="n" style="color:${m.tinta}">PASO ${m.n} DE ${M.length} · ${m.eval ? "EVALUACIÓN" : "APRENDIZAJE"}</span>
    <h1>${m.titulo}</h1><p style="color:${m.tinta}">${m.resumen}</p>
  </div>
  <div class="b dato"><span class="k">Formato</span><b>${m.formato}</b><p>cómo se presenta</p></div>
  <div class="b dato"><span class="k">Duración</span><b>${m.tiempo}</b><p>tiempo estimado</p></div>
  <div class="b lista"><span class="k">Qué vas a encontrar</span><ul>${m.puntos.map(p => `<li>${p}</li>`).join("")}</ul></div>
  <a class="b sig ${sig ? "" : "fin"}" href="#${sig ? sig.id : "inicio"}"><span class="k">${sig ? "Siguiente paso" : "Fin de la ruta"}</span><b>${sig ? sig.ico + " " + sig.titulo : "🎉 ¡Completaste MARSICARE!"}</b><p>${sig ? "Clic para avanzar" : "Vuelve al inicio cuando quieras"}</p></a>
</div>
<div class="ficha">${ficha}</div>
<div class="nav-pasos">
  <a class="btn borde" href="#${ant ? ant.id : "inicio"}">← ${ant ? ant.n + ". " + ant.titulo : "Inicio"}</a>
  <a class="btn teal" href="#${sig ? sig.id : "inicio"}">${sig ? sig.n + ". " + sig.titulo : "Volver al inicio"} →</a>
</div>`;
    if (m.video) { const cont = $(`#video-${m.video === "videoPiel" ? "piel" : "tecnica"}`); if (cont) cont.innerHTML = bloqueVideo(m.video, m.titulo); }
    if (m.quiz) activarQuiz(m);
    if (m.diapos) armarMazo(m);
    if (m.erlam) armarErlam(m);
    if (m.lesiones) armarLesiones(m);
    if (m.tabla) renderComparativa(m);
    armarLaminas();
    document.title = `${m.n}. ${m.titulo} · ${S.nombre}`;
  }

  // ── Navegación ──────────────────────────────────────────────────
  function navegar(id, forzar) {
    cerrarModal(true); Voz.detener();
    if (teclaMazo) { document.removeEventListener("keydown", teclaMazo); teclaMazo = null; }
    const m = M.find(x => x.id === id);
    if (m) { renderModulo(m); marcarVisto(m.id); }
    else if (id === "estadisticas") renderEstadisticas();
    else { id = "inicio"; renderInicio(); }
    pintarPasos(id); pintarProgreso();
    if (document.documentElement.clientWidth < 960) asideEl.classList.add("plegado");
    if (forzar || !location.hash.includes("recorrido")) window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }
  function desdeHash() {
    const h = (location.hash || "#inicio").slice(1);
    if (h === "recorrido") { navegar("inicio"); const r = $("#recorrido"); if (r) r.scrollIntoView({ behavior: reducido ? "auto" : "smooth" }); return; }
    navegar(h);
  }
  window.addEventListener("hashchange", desdeHash);

  // Menú lateral en móvil
  $("#btn-menu").onclick = () => asideEl.classList.toggle("plegado");

  // Pie de página
  $("#pie-creditos").innerHTML = `${S.autora.nombre} · <a href="mailto:${S.autora.correo}">${S.autora.correo}</a><br>${C.creditos}`;
  if (C.registro) $("#pie-estadisticas").classList.remove("oculto");
  else if (C.goatcounter) {
    const s = document.createElement("script"); s.async = true; s.src = "//gc.zgo.at/count.js"; s.setAttribute("data-goatcounter", `https://${C.goatcounter}.goatcounter.com/count`); document.head.appendChild(s);
    const a = $("#pie-estadisticas"); a.href = `https://${C.goatcounter}.goatcounter.com`; a.target = "_blank"; a.classList.remove("oculto");
  }

  desdeHash();
  contarVisita();
})();
