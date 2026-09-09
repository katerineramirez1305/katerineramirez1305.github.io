// MARSICARE · lógica de la web (navegación por pasos, fichas, cuestionarios, diapositivas, progreso).
(function () {
  const M = window.MODULOS, S = window.SITIO, C = window.CONFIG;
  const $ = (s, r = document) => r.querySelector(s);
  const pasosEl = $("#pasos"), mainEl = $("#contenido"), progEl = $("#prog"), progTxt = $("#prog-txt");
  const asideEl = $("aside");
  const CLAVE = "marsicare.vistos";

  // ── Progreso (se guarda en este navegador) ─────────────────────
  function vistos() { try { return JSON.parse(localStorage.getItem(CLAVE) || "[]"); } catch (e) { return []; } }
  function marcarVisto(id) {
    try { const v = vistos(); if (!v.includes(id)) { v.push(id); localStorage.setItem(CLAVE, JSON.stringify(v)); } } catch (e) {}
  }
  function pintarProgreso() {
    const v = vistos().filter(id => M.some(m => m.id === id));
    const pct = Math.round(v.length / M.length * 100);
    progEl.style.width = pct + "%";
    progTxt.textContent = v.length === 0 ? "Aún no has comenzado" : v.length === M.length ? "¡Recorrido completo!" : `${v.length} de ${M.length} pasos vistos`;
  }

  // ── Barra lateral ───────────────────────────────────────────────
  function pintarPasos(actual) {
    const v = vistos();
    pasosEl.innerHTML =
      `<a class="paso inicio ${actual === "inicio" ? "activo" : ""}" href="#inicio"><span class="d">🏠</span><span><b>Inicio</b><small>Presentación</small></span></a>` +
      M.map(m => `<a class="paso ${m.eval ? "eval" : ""} ${v.includes(m.id) ? "visto" : ""} ${actual === m.id ? "activo" : ""}" href="#${m.id}"><span class="d">${m.ico}</span><span><b>${m.n}. ${m.titulo}</b><small>${m.formato} · ${m.tiempo}</small></span></a>`).join("");
  }

  // ── Ayudas de render ────────────────────────────────────────────
  function bloqueVideo(claveVideo, titulo) {
    const id = C[claveVideo];
    if (id) return `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${titulo}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
    return `<div class="video"><div><div class="play">▶</div><b>Video en preparación</b><p>Aquí se mostrará el video "${titulo}".</p><p>Mientras tanto, puedes leer el contenido completo más abajo.</p></div></div>`;
  }

  function botonKahoot(clave, titulo) {
    const url = C[clave];
    if (url) return `<a class="btn rosa" href="${url}" target="_blank" rel="noopener">🎮 Abrir ${titulo} en Kahoot</a>`;
    return `<span class="btn rosa" aria-disabled="true" title="El enlace de Kahoot se agregará próximamente">🎮 Kahoot: enlace próximamente</span>`;
  }

  function renderQuiz(m) {
    const q = m.quiz;
    const preguntas = q.preguntas.map((p, i) => `
      <div class="preg" data-i="${i}">
        <h4><span>${i + 1}.</span>${p.p}</h4>
        <div class="opc">${p.o.map((o, j) => `<button type="button" data-j="${j}">${String.fromCharCode(97 + j)}) ${o}</button>`).join("")}</div>
        <div class="retro"></div>
      </div>`).join("");
    return `
<div class="card">
  <span class="etiqueta">${m.titulo}</span>
  <h2>${m.eval && m.n === 1 ? "Antes de empezar, ¿qué sabes sobre las MARSI?" : "¿Cuánto aprendiste?"}</h2>
  <p class="intro">${q.intro}</p>
  <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">${botonKahoot(q.kahoot, m.titulo)}<span style="font-size:13.5px;color:var(--gris)">o responde aquí mismo, en la página:</span></div>
  <div class="quiz" id="quiz">${preguntas}<div id="resultado"></div></div>
</div>`;
  }

  function activarQuiz(m) {
    const quiz = $("#quiz"); if (!quiz) return;
    const total = m.quiz.preguntas.length; let respondidas = 0, aciertos = 0;
    quiz.addEventListener("click", e => {
      const btn = e.target.closest(".opc button"); if (!btn || btn.disabled) return;
      const preg = btn.closest(".preg"), i = +preg.dataset.i, j = +btn.dataset.j, r = m.quiz.preguntas[i].r;
      preg.querySelectorAll("button").forEach(b => { b.disabled = true; if (+b.dataset.j === r) b.classList.add("ok"); });
      const retro = preg.querySelector(".retro");
      if (j === r) { aciertos++; retro.textContent = "✓ Correcto."; retro.className = "retro ok"; }
      else { btn.classList.add("mal"); retro.textContent = `✗ La respuesta correcta es la ${String.fromCharCode(97 + r)}).`; retro.className = "retro mal"; }
      respondidas++;
      if (respondidas === total) {
        const pct = Math.round(aciertos / total * 100);
        const msj = pct === 100 ? "¡Excelente! Dominas el tema." : pct >= 70 ? "¡Muy bien! Repasa las que fallaste." : m.n === 1 ? "Buen punto de partida. El recorrido te ayudará a mejorar." : "Te recomendamos repasar los módulos y volver a intentarlo.";
        $("#resultado").innerHTML = `<div class="resultado"><b>${aciertos} / ${total}</b><p>${msj}</p><button class="btn suave" type="button" id="reintentar">Volver a responder</button></div>`;
        $("#reintentar").onclick = () => navegar(m.id, true);
        $("#resultado").scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  function renderDiapos(m) {
    const cont = $("#diapos-prevencion"); if (!cont) return;
    const d = m.diapos;
    const slides = d.map((s, i) => `
      <div class="diapo ${i === 0 ? "activa" : ""}">
        <span class="ico">${s.ico}</span>
        <div class="num">MEDIDA ${i + 1} DE ${d.length}</div>
        <h3>${s.t}</h3>
        <ul>${s.b.map(b => `<li>${b}</li>`).join("")}</ul>
        ${s.d ? `<details><summary>Más detalle</summary>${s.d}</details>` : ""}
      </div>`).join("") + `
      <div class="diapo cierre">
        <div class="num">PARA RECORDAR</div>
        <h3>${S.cierre}</h3>
        <p style="margin:10px 0 4px;font-weight:700">Beneficios de prevenir las MARSI</p>
        <ul><li>Preserva la integridad de la piel.</li><li>Disminuye el dolor y el malestar del paciente.</li><li>Reduce el riesgo de infecciones y otras complicaciones.</li><li>Favorece una cicatrización adecuada.</li><li>Disminuye la estancia hospitalaria y los costos en salud.</li><li>Promueve una atención segura, basada en la evidencia y centrada en el paciente.</li></ul>
      </div>`;
    const n = d.length + 1;
    cont.innerHTML = `<div class="diapos">${slides}
      <div class="diapo-nav">
        <button class="btn borde" type="button" id="d-ant">← Anterior</button>
        <div class="puntos">${Array.from({ length: n }, (_, i) => `<button type="button" data-i="${i}" class="${i === 0 ? "activo" : ""}" aria-label="Diapositiva ${i + 1}"></button>`).join("")}</div>
        <button class="btn teal" type="button" id="d-sig">Siguiente →</button>
      </div></div>`;
    let act = 0;
    const diapos = cont.querySelectorAll(".diapo"), puntos = cont.querySelectorAll(".puntos button");
    const ir = i => { act = (i + n) % n; diapos.forEach((x, k) => x.classList.toggle("activa", k === act)); puntos.forEach((x, k) => x.classList.toggle("activo", k === act)); $("#d-sig").textContent = act === n - 1 ? "Volver al inicio ↺" : "Siguiente →"; };
    $("#d-ant").onclick = () => ir(act - 1); $("#d-sig").onclick = () => ir(act + 1);
    puntos.forEach(p => p.onclick = () => ir(+p.dataset.i));
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

  function abrirModal(html, titulo) {
    cerrarModal();
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
  function cerrarModal() {
    const modal = $("#modal"); if (!modal) return;
    modal.classList.remove("abierto"); document.body.classList.remove("sin-scroll");
    document.removeEventListener("keydown", escModal);
    setTimeout(() => modal.remove(), 260);
  }

  // ── Vistas ──────────────────────────────────────────────────────
  function renderInicio() {
    const primero = M[0];
    mainEl.innerHTML = `
<div class="bento">
  <div class="b portada"><span class="tag">RUTA DE APRENDIZAJE · ${M.length} PASOS</span>
    <h1>Un lugar para aprender y <span>transformar el cuidado de la piel</span></h1>
    <p>Información clara, recursos educativos y evidencia científica sobre la prevención de las lesiones cutáneas asociadas a adhesivos médicos (MARSI).</p>
    <div class="acciones" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px"><a class="btn teal" href="#${primero.id}">Comenzar el paso 1 · ${primero.titulo}</a><a class="btn suave" href="#recorrido">Ver el recorrido</a></div>
  </div>
  <div class="b logo"><img src="img/logo.png" alt="Logo de MARSICARE: una curita sobre una mano, con el lema Aprende, Previene, Protege la piel"></div>
  <div class="b cita"><p>"${S.cita}"</p><small>MARSICARE</small></div>
  <div class="b stat"><b>20–42 %</b><span>de incidencia de MARSI en entornos hospitalarios</span></div>
  <div class="b stat"><b>30 min</b><span>de eritema tras el retiro definen una MARSI</span></div>
  <div class="b stat"><b>54 %</b><span>en neonatos, niños y adultos mayores</span></div>
  <div class="b stat"><b>${M.length} pasos</b><span>del pretest al postest, a tu ritmo</span></div>
  <div class="b bienvenida"><span class="k">Bienvenida</span><p>${S.bienvenida}</p></div>
</div>
<div class="card" id="recorrido" style="margin-top:24px">
  <h2>El recorrido</h2>
  <p class="intro">Nueve pasos en orden: empieza con el pretest, aprende en los siete módulos del medio y cierra con el postest.</p>
  <div class="bento" style="margin-top:12px">
    ${M.map(m => `<a class="b mod ${m.eval ? "eval" : ""}" href="#${m.id}" style="background:${m.color}"><span class="ico">${m.ico}</span><span class="paso-n">PASO ${m.n} DE ${M.length}</span><h3>${m.titulo}</h3><p>${m.resumen}</p></a>`).join("")}
  </div>
</div>`;
    document.title = `${S.nombre} · ${S.lema}`;
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
    if (m.diapos) renderDiapos(m);
    if (m.tabla) renderComparativa(m);
    document.title = `${m.n}. ${m.titulo} · ${S.nombre}`;
  }

  // ── Navegación ──────────────────────────────────────────────────
  function navegar(id, forzar) {
    cerrarModal();
    const m = M.find(x => x.id === id);
    if (m) { renderModulo(m); marcarVisto(m.id); } else { id = "inicio"; renderInicio(); }
    pintarPasos(id); pintarProgreso();
    if (window.innerWidth < 960) asideEl.classList.add("plegado");
    if (forzar || !location.hash.includes("recorrido")) window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }
  function desdeHash() { const h = (location.hash || "#inicio").slice(1); if (h === "recorrido") { navegar("inicio"); const r = $("#recorrido"); if (r) r.scrollIntoView({ behavior: "smooth" }); return; } navegar(h); }
  window.addEventListener("hashchange", desdeHash);

  // Menú lateral en móvil
  $("#btn-menu").onclick = () => asideEl.classList.toggle("plegado");

  // Pie de página
  $("#pie-creditos").textContent = (C.autora ? C.autora + " · " : "") + C.creditos;
  if (C.goatcounter) {
    const s = document.createElement("script"); s.async = true; s.src = "//gc.zgo.at/count.js"; s.setAttribute("data-goatcounter", `https://${C.goatcounter}.goatcounter.com/count`); document.head.appendChild(s);
    const a = $("#pie-estadisticas"); a.href = `https://${C.goatcounter}.goatcounter.com`; a.classList.remove("oculto");
  }

  desdeHash();
})();
