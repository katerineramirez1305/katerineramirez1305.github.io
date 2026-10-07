// Contenido de MARSICARE. Todo el texto de la web vive aquí para poder corregirlo en un solo lugar.
// Cada módulo tiene: datos de la ficha (ico, color, formato, tiempo, resumen, puntos) y su contenido en HTML.

window.SITIO = {
  nombre: "MARSICARE",
  lema: "Aprende · Previene · Protege la piel",
  titulo: "Un lugar para aprender y transformar el cuidado de la piel",
  bienvenida: "Te damos la bienvenida a un espacio de aprendizaje diseñado para fortalecer el cuidado de la piel. Aquí encontrarás información clara, recursos educativos y evidencia científica sobre la prevención de las lesiones cutáneas asociadas al uso de adhesivos médicos (MARSI), para transformar el conocimiento en una práctica clínica más segura.",
  cita: "Cada intervención sobre la piel deja una huella. Que nuestras decisiones reflejen conocimiento, evidencia y compromiso, para que cada adhesivo sea una herramienta de cuidado y nunca una causa de daño.",
  cierre: "Las lesiones cutáneas asociadas a adhesivos médicos (MARSI) son eventos adversos prevenibles. Su prevención mejora la seguridad del paciente y la calidad de la atención.",
  autora: {
    nombre: "Katherine Bernate Ramírez",
    correo: "katherine.bernate@correounivalle.edu.co",
    titulos: [
      "Enfermera · Universidad Santiago de Cali",
      "Estudiante de la Especialización en Cuidado a Personas con Heridas y Ostomías · Universidad del Valle"
    ]
  }
};

window.MODULOS = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    id: "pretest", n: 1, ico: "🎯", color: "#fde2ec", tinta: "#a52a4b", eval: true,
    titulo: "Pretest", formato: "Cuestionario", tiempo: "5 min",
    resumen: "Siete preguntas para conocer tu punto de partida antes de comenzar el recorrido.",
    puntos: ["Qué significa la sigla MARSI", "Cuándo se considera una lesión MARSI", "Quiénes tienen mayor riesgo", "Qué adhesivo se recomienda en piel frágil"],
    quiz: {
      tipo: "pretest",
      intro: "Responde con sinceridad: el objetivo es saber qué conoces hoy. Al final del recorrido volverás a evaluarte y podrás comparar tus resultados.",
      preguntas: [
        { p: "¿Qué significa la sigla MARSI?", o: ["Lesión por humedad asociada a vendajes.", "Lesión cutánea asociada al uso de adhesivos médicos.", "Infección de la piel por adhesivos.", "Reacción alérgica causada por medicamentos."], r: 1 },
        { p: "Se considera una lesión MARSI cuando:", o: ["Existe cualquier enrojecimiento inmediatamente después de retirar el adhesivo.", "Hay eritema u otra alteración cutánea que persiste 30 minutos o más después del retiro del adhesivo.", "Existe dolor al retirar el apósito.", "Se presenta únicamente una ampolla."], r: 1 },
        { p: "¿Cuál de los siguientes pacientes tiene mayor riesgo de desarrollar MARSI?", o: ["Adulto joven sano.", "Paciente con piel íntegra y sin comorbilidades.", "Adulto mayor y neonato.", "Adolescente."], r: 2 },
        { p: "¿Cuál es uno de los principales mecanismos de producción de una MARSI?", o: ["Infección bacteriana.", "Presión prolongada.", "La fuerza de adhesión supera la cohesión entre las células de la epidermis.", "Hipoperfusión tisular."], r: 2 },
        { p: "¿Cuál adhesivo suele ser el más recomendado para pacientes con piel frágil?", o: ["Acrilato.", "Silicona.", "Látex.", "Hidrocoloide."], r: 1 },
        { p: "Una medida efectiva para prevenir MARSI es:", o: ["Retirar rápidamente el adhesivo.", "Cambiar el adhesivo diariamente aunque no sea necesario.", "Valorar la piel antes de colocar y retirar el adhesivo.", "Colocar mayor cantidad de adhesivo."], r: 2 },
        { p: "¿Cuál de las siguientes lesiones pertenece a la clasificación de MARSI?", o: ["Dermatitis por contacto.", "Úlcera arterial.", "Pie diabético.", "Celulitis."], r: 0 }
      ]
    }
  },

  // 2 ─────────────────────────────────────────────────────────────
  {
    id: "la-piel", n: 2, ico: "🧬", color: "#ffe9d6", tinta: "#9a4b12",
    titulo: "La piel", formato: "Video", tiempo: "6 min",
    resumen: "El primer escudo del cuerpo: conocer su anatomía y sus funciones es el primer paso para protegerla.",
    puntos: ["Las tres capas: epidermis, dermis e hipodermis", "Funciones de barrera, regulación y sensibilidad", "Cerca de 2 m² y el 15 % del peso corporal", "Por qué algunas pieles son más frágiles"],
    video: "videoPiel",
    html: `
<div class="card">
  <span class="etiqueta">Video</span>
  <h2>La piel: el primer escudo del cuerpo</h2>
  <p class="intro">Comprender su anatomía y sus funciones es el primer paso para protegerla.</p>
  <div id="video-piel"></div>
</div>

<div class="card">
  <h2>¿Por qué empezar por la piel?</h2>
  <p>Cada día usamos adhesivos médicos para fijar dispositivos. Sin embargo, antes de hablar de las lesiones que pueden causar, es fundamental conocer el órgano que estamos protegiendo: la piel.</p>
  <p>La piel es el órgano más grande del cuerpo humano. En un adulto puede alcanzar aproximadamente <strong>dos metros cuadrados</strong> de superficie y representa cerca del <strong>15 % del peso corporal</strong>. Su función va mucho más allá de cubrir el cuerpo: es la primera línea de defensa frente al medio ambiente.</p>
</div>

<div class="card">
  <h2>Anatomía: tres capas que trabajan juntas</h2>
  <div class="piel">
    <svg viewBox="0 0 400 300" role="img" aria-label="Esquema de las tres capas de la piel">
      <rect width="400" height="300" fill="#fff7f0"/>
      <rect x="0" y="40" width="400" height="60" fill="#f6c9a8"/>
      <rect x="0" y="100" width="400" height="110" fill="#f1a98a"/>
      <rect x="0" y="210" width="400" height="90" fill="#f7dc9c"/>
      <path d="M0 40 Q 50 28 100 40 T 200 40 T 300 40 T 400 40" fill="#f6c9a8" stroke="#e5a983" stroke-width="2"/>
      <path d="M0 100 Q 40 92 80 100 T 160 100 T 240 100 T 320 100 T 400 100" fill="none" stroke="#e08a6a" stroke-width="2" stroke-dasharray="4 3"/>
      <ellipse cx="110" cy="150" rx="18" ry="10" fill="#d9534f" opacity=".8"/>
      <ellipse cx="290" cy="170" rx="18" ry="10" fill="#4d7fd9" opacity=".8"/>
      <path d="M180 100 v70 q0 18 18 18" fill="none" stroke="#c96c4c" stroke-width="3"/>
      <circle cx="60" cy="250" r="18" fill="#f3cf6e"/><circle cx="130" cy="262" r="22" fill="#f3cf6e"/><circle cx="220" cy="248" r="16" fill="#f3cf6e"/><circle cx="310" cy="262" r="24" fill="#f3cf6e"/><circle cx="370" cy="245" r="14" fill="#f3cf6e"/>
      <text x="14" y="76" font-size="15" font-weight="700" fill="#7a3b12">Epidermis</text>
      <text x="14" y="160" font-size="15" font-weight="700" fill="#7a2a10">Dermis</text>
      <text x="14" y="290" font-size="15" font-weight="700" fill="#7a5a10">Hipodermis</text>
    </svg>
    <div>
      <div class="capa" style="background:#fbe6d6;border-color:#e5a983"><b>Epidermis</b><span>La capa más externa. Actúa como barrera protectora frente a microorganismos, sustancias químicas y pérdida de agua.</span></div>
      <div class="capa" style="background:#fbdcd0;border-color:#e08a6a"><b>Dermis</b><span>Debajo de la epidermis. Contiene vasos sanguíneos, fibras de colágeno y elastina, terminaciones nerviosas y anexos cutáneos. Aporta resistencia, elasticidad y nutrición.</span></div>
      <div class="capa" style="background:#fdf1cf;border-color:#e3c15a"><b>Hipodermis</b><span>Formada principalmente por tejido adiposo. Amortigua impactos, almacena energía y ayuda a regular la temperatura corporal.</span></div>
    </div>
  </div>
</div>

<div class="card">
  <h2>Funciones de la piel</h2>
  <div class="tarjetas">
    <div class="tarjeta c-naranja"><div class="ico">🛡️</div><h4>Barrera protectora</h4><p>Frente a microorganismos, agentes químicos, lesiones mecánicas (fricción y traumatismos) y radiación.</p></div>
    <div class="tarjeta c-celeste"><div class="ico">🌡️</div><h4>Regulación de la temperatura</h4><p>Ayuda a mantener la temperatura corporal estable.</p></div>
    <div class="tarjeta c-lila"><div class="ico">✋</div><h4>Función sensorial</h4><p>Sus receptores nerviosos permiten percibir dolor, presión, tacto, vibración, frío y calor.</p></div>
    <div class="tarjeta c-menta"><div class="ico">🧫</div><h4>Defensa inmunológica</h4><p>Participa en la respuesta del organismo frente a agentes externos.</p></div>
    <div class="tarjeta c-azul"><div class="ico">⚖️</div><h4>Homeostasis</h4><p>Contribuye al equilibrio interno, con funciones de secreción y excreción.</p></div>
    <div class="tarjeta c-amarillo"><div class="ico">🔋</div><h4>Reserva energética</h4><p>El tejido adiposo de la hipodermis almacena energía.</p></div>
  </div>
</div>

<div class="card">
  <h2>No todas las pieles resisten igual</h2>
  <ul>
    <li><strong>Adultos mayores:</strong> la piel pierde grosor, elasticidad y tejido adiposo. La unión entre la epidermis y la dermis se vuelve más frágil.</li>
    <li><strong>Neonatos:</strong> la piel aún es inmadura y, por lo tanto, más vulnerable.</li>
    <li><strong>Pacientes críticamente enfermos:</strong> la piel suele estar alterada por la enfermedad y los tratamientos.</li>
  </ul>
  <div class="nota">Estas características aumentan el riesgo de sufrir lesiones durante la aplicación o el retiro de adhesivos médicos.</div>
  <p class="destacado">Cada centímetro de piel trabaja de forma permanente para mantenernos sanos, protegidos y en equilibrio. Conservar su integridad favorece el bienestar y la calidad de vida, y es un componente esencial de la salud.</p>
</div>`
  },

  // 3 ─────────────────────────────────────────────────────────────
  {
    id: "adhesivos-medicos", n: 3, ico: "🩹", color: "#e0f3ee", tinta: "#0b6b67",
    titulo: "Adhesivos médicos", formato: "Infografía", tiempo: "8 min",
    resumen: "Qué son, para qué sirven y cómo se clasifican según su fuerza de adhesión.",
    puntos: ["Definición y beneficios", "Silicona, hidrocoloides, acrilatos y tela", "Comparativa de los tipos de adhesivo", "Por qué importa elegir bien"],
    tabla: [
      { tipo: "Látex de caucho natural (tela)", ico: "🧻", color: "#ffe9d6", base: "Tela elástica tradicional",
        ventajas: ["Se utiliza desde hace más de 100 años.", "Alta fuerza de adhesión, combinada con soporte de tela tejida."],
        desventajas: ["Puede presentar una adhesión muy agresiva sobre la piel.", "Puede causar daño cutáneo si se aplica o retira incorrectamente."],
        clinica: ["Buena fuerza para fijar sondas, drenajes y dispositivos pesados.", "Debe usarse de forma selectiva, en dispositivos que requieran una fijación muy firme."] },
      { tipo: "Acrilato", ico: "🩹", color: "#e4ecfb", base: "Espuma elástica, papel, plástico, seda y tela tradicional",
        ventajas: ["Se utiliza ampliamente desde hace más de 50 años.", "Generalmente hipoalergénico."],
        desventajas: ["Aunque es seguro, una selección, aplicación o retiro inadecuados pueden provocar dolor y daño cutáneo."],
        clinica: ["Seleccionar el adhesivo con el nivel de adhesión apropiado.", "Una adhesión mayor a la necesaria aumenta el riesgo de lesión.", "Considerar su uso en dispositivos temporales y fijaciones de corta duración."] },
      { tipo: "Silicona", ico: "🟢", color: "#e0f3ee", base: "Papel o plástico",
        ventajas: ["Tecnología de adhesivo más reciente.", "Muy suave con la piel.", "Baja sensibilización cutánea.", "Tolera aplicaciones repetidas con menor daño cutáneo."],
        desventajas: ["No se recomienda como fijación primaria de sistemas críticos o tubos."],
        clinica: ["Excelente elección para fijar apósitos livianos y dispositivos en pacientes con piel frágil.", "Disminuye el riesgo de lesiones por retiro del adhesivo."] },
      { tipo: "Hidrocoloides", ico: "🟡", color: "#fff4c9", base: "Película (film)",
        ventajas: ["Se adhieren inicialmente a superficies secas.", "La adhesión aumenta con el tiempo debido al contenido de agua del hidrocoloide."],
        desventajas: ["Se han reportado traumatismos cutáneos similares a los producidos por adhesivos acrílicos cuando permanecen más de 24 horas."],
        clinica: ["Se utilizan como apósitos para heridas y como plataformas adhesivas para sondas o dispositivos médicos."] },
      { tipo: "Hidrogeles y poliuretanos", ico: "💧", color: "#dcf0f7", base: "No se utilizan con frecuencia; seguir las instrucciones del fabricante",
        ventajas: ["Indicados principalmente para el manejo de heridas."],
        desventajas: ["Su uso depende de las indicaciones específicas del fabricante."],
        clinica: ["Se emplean como apósitos para heridas y como plataforma adhesiva para sondas o dispositivos médicos."] }
    ],
    html: `
<div class="card">
  <span class="etiqueta">Definición</span>
  <h2>¿Qué son los adhesivos médicos?</h2>
  <p class="intro">Los adhesivos médicos son materiales diseñados para adherirse a la piel con el fin de fijar dispositivos médicos, proteger heridas o mantener apósitos en su lugar, garantizando estabilidad y seguridad sin causar daño significativo al tejido cutáneo.</p>
  <p>Además de dar estabilidad a los tratamientos, cumplen un papel importante en la protección de la piel frente a la fricción, la presión y la humedad.</p>
  <div class="nota rosa"><strong>Pero su uso no está libre de riesgos.</strong> Una aplicación inadecuada, la elección incorrecta del tipo de adhesivo o un retiro inapropiado pueden generar lesiones cutáneas asociadas a adhesivos médicos (MARSI). Estas lesiones aumentan los costos del tratamiento, el riesgo de infección y los días de hospitalización, y retrasan la recuperación del paciente.</div>
  <p>Por eso es necesario fortalecer los conocimientos del personal asistencial, promover el uso seguro de los adhesivos e integrar prácticas basadas en la evidencia científica que protejan la integridad de la piel.</p>
</div>

<div class="card">
  <h2>Tipos de adhesivos según su fuerza de adhesión</h2>
  <div class="tarjetas">
    <div class="tarjeta c-menta"><div class="ico">🟢</div><h4>Silicona</h4><p><strong>Baja adherencia.</strong> Atraumáticos: son los más suaves con la piel.</p></div>
    <div class="tarjeta c-amarillo"><div class="ico">🟡</div><h4>Hidrocoloides</h4><p><strong>Adherencia intermedia.</strong> Su adhesión aumenta con el tiempo por su contenido de agua.</p></div>
    <div class="tarjeta c-rosa"><div class="ico">🔴</div><h4>Acrilatos y tela</h4><p><strong>Alta adherencia.</strong> Firmes; requieren mayor cuidado al aplicarlos y retirarlos.</p></div>
  </div>
</div>

<div class="card">
  <h2>Comparativa de adhesivos</h2>
  <p class="intro">Base, ventajas, desventajas e implicaciones clínicas de cada tipo. Puedes verla también como tabla en pantalla completa.</p>
  <div id="tabla-adhesivos"></div>
  <div class="nota">La selección del adhesivo adecuado depende del tipo de piel, del dispositivo que se va a fijar, del tiempo de uso y del estado clínico del paciente.</div>
</div>

<div class="card">
  <h2>La importancia de elegir bien</h2>
  <p>No todos los adhesivos médicos son iguales. Seleccionar el más apropiado según el estado de la piel, el tipo de dispositivo y el tiempo de uso puede prevenir las MARSI, disminuir el dolor y favorecer una recuperación más segura.</p>
  <h3>Beneficios de una buena elección</h3>
  <div class="tarjetas">
    <div class="tarjeta"><div class="ico">🧴</div><h4>Protege la integridad de la piel</h4></div>
    <div class="tarjeta"><div class="ico">😌</div><h4>Reduce el dolor durante el retiro</h4></div>
    <div class="tarjeta"><div class="ico">🦠</div><h4>Disminuye el riesgo de infección</h4></div>
    <div class="tarjeta"><div class="ico">🩹</div><h4>Favorece una adecuada cicatrización</h4></div>
    <div class="tarjeta"><div class="ico">🏥</div><h4>Reduce complicaciones, costos y días de hospitalización</h4></div>
    <div class="tarjeta"><div class="ico">⭐</div><h4>Mejora la calidad y la seguridad de la atención</h4></div>
  </div>
</div>`
  },

  // 4 ─────────────────────────────────────────────────────────────
  {
    id: "marsi", n: 4, ico: "🔬", color: "#e4ecfb", tinta: "#2c4f9e",
    titulo: "MARSI", formato: "Diapositivas narradas", tiempo: "15 min",
    resumen: "Qué son las lesiones por adhesivos médicos, qué tan frecuentes son, cómo se clasifican y qué aumenta el riesgo.",
    puntos: ["Definición y cómo se produce la lesión", "Epidemiología en adultos, niños y neonatos", "Clasificación: mecánicas, dermatitis y otras", "Factores de riesgo intrínsecos y extrínsecos"],
    mazo: { etiqueta: "DIAPOSITIVA", narrada: true },
    diapos: [
      { ico: "🔬", sec: "Definición", t: "¿Qué es una MARSI?",
        html: `<div class="d-par">
          <div><p class="d-grande">Daño en la piel en el que el <strong>eritema</strong> u otra alteración cutánea <strong>persiste 30 minutos o más</strong> después de retirar el adhesivo.</p>
          <p>MARSI viene del inglés <em>Medical Adhesive-Related Skin Injury</em>: lesión cutánea relacionada con adhesivos médicos.</p></div>
          <div class="d-cifra rosa"><b>30</b><span>minutos o más</span><small>de eritema tras el retiro definen una MARSI</small></div>
        </div>`,
        voz: "Una MARSI es el daño en la piel en el que el eritema, u otra alteración cutánea, persiste treinta minutos o más después de retirar el adhesivo. La sigla viene del inglés: Medical Adhesive-Related Skin Injury, es decir, lesión cutánea relacionada con adhesivos médicos." },

      { ico: "🧲", sec: "Definición", t: "¿Cómo se produce la lesión?",
        html: `<div class="d-par">
          <div><p class="d-grande">La lesión ocurre cuando la <strong>fuerza de adhesión</strong> del producto a la piel <strong>supera la fuerza de cohesión</strong> entre las células cutáneas.</p>
          <p>Como resultado, se desprenden capas de la epidermis o la epidermis se separa de la dermis.</p></div>
          <div class="d-balanza" aria-hidden="true">
            <div class="fila"><span>Adhesión del producto</span><i style="--v:92%" class="rosa"></i></div>
            <div class="fila"><span>Cohesión entre células</span><i style="--v:58%"></i></div>
            <p>Cuando la primera barra gana, la piel cede.</p>
          </div>
        </div>`,
        voz: "La lesión ocurre cuando la fuerza de adhesión del producto a la piel supera la fuerza de cohesión entre las células cutáneas. Como resultado, se desprenden capas de la epidermis, o la epidermis se separa de la dermis." },

      { ico: "⚠️", sec: "Definición", t: "Una complicación frecuente y poco reconocida",
        html: `<p class="d-grande">Ocurre en todos los entornos de atención en salud y en <strong>cualquier grupo de edad</strong> si no se usa la técnica adecuada.</p>
        <p>Al retirar el adhesivo se eliminan capas superficiales de la piel junto con el producto. Esto puede:</p>
        <div class="d-chips"><span>😣 Causar dolor</span><span>🦠 Aumentar el riesgo de infección</span><span>↔️ Ampliar el tamaño de la herida</span><span>⏳ Retrasar la cicatrización</span><span>💔 Reducir la calidad de vida</span></div>`,
        voz: "Las lesiones por adhesivos médicos son una complicación frecuente, pero poco reconocida, que ocurre en todos los entornos de atención en salud. Aunque suelen asociarse a las edades extremas, pueden presentarse en cualquier grupo de edad si no se usa la técnica adecuada. Al retirar el adhesivo se eliminan capas superficiales de la piel junto con el producto. Esto puede causar dolor, aumentar el riesgo de infección, ampliar el tamaño de la herida y retrasar la cicatrización, lo que reduce la calidad de vida de los pacientes." },

      { ico: "📊", sec: "Epidemiología", t: "Panorama general",
        html: `<div class="d-cifras">
          <div class="d-cifra"><b>20–41,9 %</b><small>Incidencia de MARSI reportada en entornos hospitalarios</small></div>
          <div class="d-cifra rosa"><b>hasta 54,2 %</b><small>En poblaciones vulnerables: neonatos, niños y adultos mayores</small></div>
          <div class="d-cifra menta"><b>Prevenibles</b><small>En gran medida, con guías clínicas basadas en la evidencia</small></div>
        </div>`,
        voz: "Las MARSI se pueden prevenir en gran medida mediante guías clínicas basadas en la evidencia. Sin embargo, los estudios han reportado incidencias de entre el veinte y el cuarenta y uno coma nueve por ciento en entornos hospitalarios. En poblaciones vulnerables, como neonatos, niños y adultos mayores, pueden llegar hasta el cincuenta y cuatro coma dos por ciento." },

      { ico: "🏥", sec: "Epidemiología", t: "Adultos hospitalizados",
        html: `<p>Son frecuentes en distintos contextos sanitarios, con amplia variación entre poblaciones y países.</p>
        <div class="d-barras">
          <div><span>UCI</span><i style="--v:39.2%"></i><b>39,2 %</b></div>
          <div><span>Unidades coronarias</span><i style="--v:22.7%"></i><b>22,7 %</b></div>
          <div><span>China · pacientes con PICC</span><i style="--v:19.7%"></i><b>19,7 %</b></div>
          <div><span>Servicios no intensivos</span><i style="--v:13%"></i><b>13 %</b></div>
          <div><span>Estados Unidos · dos UCI</span><i style="--v:13%"></i><b>≈13 %</b></div>
          <div><span>China · dos UCI de Beijing (incidencia)</span><i style="--v:10.96%"></i><b>10,96 %</b></div>
        </div>
        <p class="fuente">Fuente: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9728873/" target="_blank" rel="noopener">PMC9728873</a></p>`,
        voz: "En adultos hospitalizados se han descrito prevalencias del veintidós coma siete por ciento en unidades coronarias, del treinta y nueve coma dos por ciento en unidades de cuidado intensivo y del trece por ciento en servicios no intensivos. En China se reportó una incidencia del diez coma noventa y seis por ciento en dos unidades de cuidado intensivo de Beijing, y una prevalencia del diecinueve coma siete por ciento en pacientes con catéter PICC. En Estados Unidos, la prevalencia media fue de aproximadamente el trece por ciento en dos unidades de cuidado intensivo." },

      { ico: "🇧🇷", sec: "Epidemiología", t: "Estudios en Brasil",
        html: `<div class="d-cifras">
          <div class="d-cifra"><b>25,9 %</b><small>Adultos en UCI. La maceración representó el 39,4 % de las lesiones y la dermatitis de contacto irritativa el 24,2 %</small></div>
          <div class="d-cifra"><b>31 %</b><small>Adultos y adultos mayores con cáncer, críticamente enfermos</small></div>
          <div class="d-cifra"><b>42 %</b><small>Cohorte de dos hospitales universitarios</small></div>
          <div class="d-cifra rosa"><b>60,3 %</b><small>Niños sometidos a cirugía cardíaca congénita</small></div>
        </div>
        <p class="fuente">Fuente: <a href="https://pubmed.ncbi.nlm.nih.gov/41370537/" target="_blank" rel="noopener">PubMed 41370537</a></p>`,
        voz: "En Brasil se encontró una prevalencia del veinticinco coma nueve por ciento en adultos de cuidado intensivo. La maceración representó el treinta y nueve coma cuatro por ciento de las lesiones, y la dermatitis de contacto irritativa, el veinticuatro coma dos por ciento. Otros estudios brasileños reportaron un treinta y uno por ciento en adultos y adultos mayores con cáncer críticamente enfermos, un cuarenta y dos por ciento en una cohorte de dos hospitales universitarios, y un sesenta coma tres por ciento en niños sometidos a cirugía cardíaca congénita." },

      { ico: "👶", sec: "Epidemiología", t: "Niños y neonatos",
        html: `<p>La población pediátrica presenta algunas de las frecuencias más elevadas.</p>
        <div class="d-barras">
          <div><span>Incidencia en otro estudio pediátrico (72,1 % fueron <em>skin stripping</em>)</span><i style="--v:61.1%" class="rosa"></i><b>61,1 %</b></div>
          <div><span>Brasil · cirugía cardíaca infantil</span><i style="--v:60.3%" class="rosa"></i><b>60,3 %</b></div>
          <div><span>Corea del Sur · UCI pediátrica</span><i style="--v:58.3%" class="rosa"></i><b>58,3 %</b></div>
          <div><span>China · UCI pediátrica, prevalencia diaria media (rango 23,53–54,17 %)</span><i style="--v:37.15%" class="rosa"></i><b>37,15 %</b></div>
          <div><span>UCI neonatales · metaanálisis de 2026 (IC95 %: 6–26 %)</span><i style="--v:15%" class="rosa"></i><b>15 %</b></div>
        </div>
        <div class="nota rosa">En pacientes de <strong>12 meses o menos</strong>, el riesgo de MARSI fue cerca de <strong>cinco veces mayor</strong> (OR 5,3; IC95 %: 1,6–17,6).</div>
        <p class="fuente">Fuentes: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9728873/" target="_blank" rel="noopener">PMC9728873</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/40459034/" target="_blank" rel="noopener">PubMed 40459034</a></p>`,
        voz: "La población pediátrica presenta algunas de las frecuencias más elevadas. En una unidad de cuidado intensivo pediátrico de China, la prevalencia diaria fue de entre el veintitrés y el cincuenta y cuatro por ciento, con una media del treinta y siete por ciento. Otro estudio encontró una incidencia del sesenta y uno coma uno por ciento, y el setenta y dos por ciento de esas lesiones fueron desprendimientos epidérmicos. En niños sometidos a cirugía cardíaca en Brasil, la incidencia fue del sesenta coma tres por ciento, y en una unidad pediátrica de Corea del Sur, del cincuenta y ocho coma tres por ciento. En las unidades neonatales, un metaanálisis de dos mil veintiséis estimó una incidencia agrupada del quince por ciento. Y en pacientes de doce meses o menos, el riesgo fue cerca de cinco veces mayor." },

      { ico: "📈", sec: "Epidemiología", t: "Factores asociados en adultos críticos",
        html: `<p>Cuántas veces aumenta la probabilidad de MARSI (razón de probabilidades, OR) en adultos críticamente enfermos:</p>
        <div class="d-barras or">
          <div><span>Edema</span><i style="--v:100%"></i><b>8,14</b></div>
          <div><span>Sedación</span><i style="--v:74%"></i><b>6,02</b></div>
          <div><span>Hipoalbuminemia</span><i style="--v:53%"></i><b>4,32</b></div>
          <div><span>Riesgo nutricional</span><i style="--v:52%"></i><b>4,24</b></div>
          <div><span>Ventilación mecánica</span><i style="--v:45%"></i><b>3,70</b></div>
          <div><span>Estancia en UCI (por cada día)</span><i style="--v:13%"></i><b>1,07</b></div>
        </div>
        <p class="fuente">Fuente: <a href="https://pubmed.ncbi.nlm.nih.gov/39792523/" target="_blank" rel="noopener">PubMed 39792523</a></p>`,
        voz: "En adultos críticamente enfermos, los principales factores asociados a las MARSI fueron el edema, con una razón de probabilidades de ocho coma catorce; la sedación, de seis coma cero dos; la hipoalbuminemia, de cuatro coma treinta y dos; el riesgo nutricional, de cuatro coma veinticuatro; la ventilación mecánica, de tres coma setenta; y cada día adicional de estancia en cuidado intensivo, de uno coma cero siete." },

      { ico: "🩹", sec: "Clasificación", t: "Lesiones mecánicas",
        html: `<div class="d-lesiones">
          <figure><img src="img/lesiones/desprendimiento.jpg" alt="Desprendimiento epidérmico" loading="lazy"><figcaption><b>Desprendimiento cutáneo (epidérmico)</b>Remoción de una o más capas del estrato córneo al retirar una cinta o un apósito. Lesiones poco profundas e irregulares; la piel puede verse brillante, con eritema y ampollas.</figcaption></figure>
          <figure><img src="img/lesiones/ampolla.jpg" alt="Ampolla por tensión" loading="lazy"><figcaption><b>Ampolla por tensión</b>Separación de la epidermis y la dermis por cizallamiento: la piel se distiende bajo una cinta rígida o una articulación en movimiento queda cubierta con una cinta no flexible.</figcaption></figure>
          <figure><img src="img/lesiones/desgarro.jpg" alt="Desgarro cutáneo" loading="lazy"><figcaption><b>Desgarro cutáneo</b>Herida por cizallamiento, fricción o un golpe, que separa las capas de la piel. Puede ser de espesor parcial o completo.</figcaption></figure>
        </div>`,
        voz: "Las MARSI se clasifican en tres grupos. El primero son las lesiones mecánicas. El desprendimiento epidérmico es la remoción de una o más capas del estrato córneo al retirar una cinta o un apósito; las lesiones suelen ser poco profundas e irregulares, y la piel puede verse brillante. La ampolla por tensión es la separación de la epidermis y la dermis por una fuerza de cizallamiento, cuando la piel se distiende bajo una cinta rígida. Y el desgarro cutáneo es una herida causada por cizallamiento, fricción o un golpe, que separa las capas de la piel y puede ser de espesor parcial o completo." },

      { ico: "🔥", sec: "Clasificación", t: "Dermatitis",
        html: `<div class="d-lesiones dos">
          <figure><img src="img/lesiones/irritante.jpg" alt="Dermatitis por contacto irritante" loading="lazy"><figcaption><b>Dermatitis por contacto irritante</b>Reacción no alérgica a un irritante químico. Área bien delimitada que coincide con la zona de exposición; puede verse enrojecida, hinchada y con vesículas. Suele durar poco.</figcaption></figure>
          <figure><img src="img/lesiones/alergica.jpg" alt="Dermatitis alérgica" loading="lazy"><figcaption><b>Dermatitis alérgica</b>Respuesta inmunológica a un componente de la cinta o del soporte. Zona enrojecida, con vesículas y picazón, que puede extenderse más allá del área expuesta y durar hasta una semana.</figcaption></figure>
        </div>`,
        voz: "El segundo grupo son las dermatitis. La dermatitis por contacto irritante es una reacción no alérgica a un irritante químico: el área está bien delimitada, coincide con la zona de exposición y suele durar poco. La dermatitis alérgica es una respuesta inmunológica a un componente de la cinta o del soporte; produce enrojecimiento, vesículas y picazón, puede extenderse más allá del área expuesta y durar hasta una semana." },

      { ico: "💧", sec: "Clasificación", t: "Otras lesiones",
        html: `<div class="d-lesiones dos">
          <figure><img src="img/lesiones/maceracion.jpg" alt="Maceración" loading="lazy"><figcaption><b>Maceración</b>Cambios por humedad atrapada contra la piel durante mucho tiempo. La piel se ve arrugada y blanca o gris; al ablandarse, se vuelve más permeable y vulnerable a la fricción y a los irritantes.</figcaption></figure>
          <figure><img src="img/lesiones/foliculitis.jpg" alt="Foliculitis" loading="lazy"><figcaption><b>Foliculitis</b>Inflamación del folículo piloso por el afeitado o por bacterias atrapadas. Pequeñas elevaciones inflamadas, sin pus (pápulas) o con pus (pústulas).</figcaption></figure>
        </div>`,
        voz: "El tercer grupo reúne otras lesiones. La maceración aparece cuando la humedad queda atrapada contra la piel durante mucho tiempo: la piel se ve arrugada, blanca o gris, y se vuelve más vulnerable a la fricción y a los irritantes. La foliculitis es la inflamación del folículo piloso por el afeitado o por bacterias atrapadas, y se ve como pequeñas elevaciones inflamadas, con o sin pus." },

      { ico: "🧍", sec: "Factores de riesgo", t: "Factores intrínsecos: del paciente",
        html: `<div class="d-chips grande">
          <span>👶👵 Extremos de edad: neonatos, prematuros y adultos mayores</span>
          <span>🧬 Raza o etnia</span>
          <span>🩺 Condiciones dermatológicas: eccema, dermatitis, úlceras exudativas crónicas, epidermólisis bullosa</span>
          <span>🏥 Enfermedades de base: diabetes, infección, insuficiencia renal, inmunosupresión, insuficiencia venosa, hipertensión, várices periestomales</span>
          <span>🍽️ Desnutrición</span>
          <span>💧 Deshidratación</span>
        </div>`,
        voz: "Ahora, los factores de riesgo. Los factores intrínsecos son propios del paciente: los extremos de edad, como neonatos, prematuros y adultos mayores; la raza o etnia; las condiciones dermatológicas, como el eccema, la dermatitis, las úlceras exudativas crónicas o la epidermólisis bullosa; enfermedades de base como la diabetes, las infecciones, la insuficiencia renal, la inmunosupresión, la insuficiencia venosa o la hipertensión; la desnutrición y la deshidratación." },

      { ico: "🌦️", sec: "Factores de riesgo", t: "Factores extrínsecos: del entorno y del cuidado",
        html: `<div class="d-chips grande celeste">
          <span>🧴 Sequedad de la piel por limpiadores fuertes, baño excesivo o baja humedad ambiental</span>
          <span>💦 Exposición prolongada a la humedad</span>
          <span>💊 Medicamentos: antiinflamatorios, anticoagulantes, quimioterapia, corticoides de uso prolongado</span>
          <span>☢️ Radioterapia</span>
          <span>☀️ Fotodaño (daño por el sol)</span>
          <span>🔁 Aplicación y retiro reiterados de apósitos</span>
          <span>✋ Técnica de adhesión inadecuada o repetida</span>
        </div>`,
        voz: "Los factores extrínsecos dependen del entorno y del cuidado: la sequedad de la piel por limpiadores fuertes, baño excesivo o baja humedad; la exposición prolongada a la humedad; algunos medicamentos, como antiinflamatorios, anticoagulantes, quimioterapéuticos y corticoides de uso prolongado; la radioterapia; el daño por el sol; y la aplicación y el retiro reiterados de apósitos con una técnica inadecuada." },

      { ico: "✅", sec: "Para recordar", t: "Identificar el riesgo es el primer paso", cierre: true,
        html: `<p class="d-grande">Cuantos más factores se combinan, mayor es el riesgo. En esos pacientes, la valoración de la piel y la elección del adhesivo deben ser especialmente cuidadosas.</p>
        <p>En el siguiente paso, <strong>Prevención</strong>, encontrarás la <strong>escala ERLAM</strong> para medir ese riesgo y las ocho medidas para evitar la lesión.</p>`,
        voz: "Cuantos más factores se combinan, mayor es el riesgo. En esos pacientes, la valoración de la piel y la elección del adhesivo deben ser especialmente cuidadosas. En el siguiente paso, Prevención, encontrarás la escala ERLAM para medir ese riesgo, y las ocho medidas para evitar la lesión." }
    ],
    html: `
<div class="card">
  <span class="etiqueta">Diapositivas narradas</span>
  <h2>MARSI: definición, epidemiología, clasificación y factores de riesgo</h2>
  <p class="intro">Toca <strong>Escuchar</strong> para oír la explicación de cada diapositiva. Avanza con las flechas, los puntos o deslizando en el teléfono.</p>
  <div id="diapos-marsi"></div>
</div>

<div class="card">
  <h2>Material de apoyo</h2>
  <p class="intro">Las láminas originales, para consultarlas o imprimirlas.</p>
  <div class="laminas">
    <button type="button" class="lamina" data-img="img/clasificacion-marsi.png" data-t="Clasificación de las MARSI"><img src="img/clasificacion-marsi.png" alt="" loading="lazy"><span>Clasificación de las MARSI</span></button>
    <button type="button" class="lamina" data-img="img/factores-riesgo.jpg" data-t="Factores de riesgo de MARSI"><img src="img/factores-riesgo.jpg" alt="" loading="lazy"><span>Factores de riesgo</span></button>
  </div>
</div>`
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    id: "prevencion", n: 5, ico: "🛡️", color: "#fff4c9", tinta: "#8a6a00",
    titulo: "Prevención", formato: "Escala y diapositivas", tiempo: "15 min",
    resumen: "Mide el riesgo con la escala ERLAM y aplica ocho medidas basadas en la evidencia para que la lesión no llegue a ocurrir.",
    puntos: ["Escala ERLAM: calcula el riesgo de MARSI", "Valorar y preparar la piel", "Elegir el adhesivo adecuado", "Aplicar y retirar con la técnica correcta", "Vigilar, rotar y educar"],
    mazo: { etiqueta: "MEDIDA", cierreFinal: true },
    erlam: {
      fuente: "Lucena AF, et al. Development and validation of a risk assessment scale for medical adhesive-related skin injuries in hospitalized adults (ERLAM). Rev. Latino-Am. Enfermagem. 2025.",
      doi: "10.1590/1518-8345.7403.4128",
      dominios: [
        { t: "Aspectos epidemiológicos y clínicos", c: "#e4ecfb", items: ["50 años o más", "Uso de tabaco", "Temperatura corporal de 37,5 °C o más", "Alergia previa a adhesivos", "Dermatitis de contacto", "Diabetes mellitus", "Paciente oncológico", "Hipoalbuminemia (albúmina sérica < 3,5 g/dL)", "Posoperatorio de cirugía mayor", "Antecedente de lesión por adhesivos", "Insuficiencia vascular", "Desnutrición", "En tratamiento con radioterapia"] },
        { t: "Características de la piel en el sitio de fijación", c: "#e0f3ee", items: ["Edema moderado a grave (3+ o 4+)", "Disminución del turgor o la elasticidad de la piel", "Descamación de la piel", "Equimosis o hematomas previos", "Piel fina o sensible", "Sudoración frecuente"] },
        { t: "Medicamentos en uso", c: "#f3e6fb", items: ["Antibiótico", "Corticoide", "Inmunosupresor", "Anticoagulante"] },
        { t: "Dispositivos médicos en uso", c: "#fff4c9", items: ["Catéter venoso periférico", "Acceso venoso central", "Bolsa colectora de ostomía", "Tubo endotraqueal", "Drenaje", "Sonda enteral o nasogástrica", "Sonda vesical permanente", "Electrodo adhesivo"] },
        { t: "Tipos de adhesivos en uso", c: "#fde2ec", items: ["Película transparente de poliuretano", "Cinta adhesiva de acrilato (p. ej., Medipore®, Durapore®)", "Cinta adhesiva de tela", "Esparadrapo", "Cinta microporosa", "Vendaje adhesivo elástico (p. ej., Tensoplast®)"] },
        { t: "Sitio de fijación del adhesivo", c: "#dcf0f7", items: ["Región cervical", "Cara", "Abdomen", "Miembro superior", "Miembro inferior", "Región inguinal", "Región supralabial"] },
        { t: "Uso del adhesivo", c: "#e0f3ee", items: ["Adhesivo que genera tensión sobre la piel", "Adhesivo colocado en un sitio recurrente"] },
        { t: "Hospitalización", c: "#f3e6fb", items: ["Hospitalización de 16 días o más", "Procedimiento anestésico-quirúrgico de 2 horas o más en las últimas 24 horas"] }
      ]
    },
    diapos: [
      { ico: "🔍", t: "Valoración previa de la piel", b: ["Evaluar el estado de la piel antes de aplicar cualquier adhesivo: fragilidad, humedad e irritación.", "Identificar los factores de riesgo intrínsecos y extrínsecos. La escala ERLAM, más arriba, ayuda a medirlos.", "No aplicar adhesivos sobre piel lesionada o irritada."] },
      { ico: "🧼", t: "Preparación de la piel", b: ["Limpiar la piel con productos suaves, sin alcohol.", "Secar completamente antes de colocar el adhesivo.", "Aplicar una barrera protectora cutánea cuando la piel sea vulnerable."],
        d: "<p>Los productos de barrera cutánea forman una capa protectora entre la piel y el adhesivo. Se recomiendan para reducir el riesgo de MARSI y protegen la piel de fluidos corporales, exudados, orina y heces.</p><p>Suelen presentarse como películas de barrera líquidas (espumas, toallitas o aerosoles). Al aplicarlas, el disolvente se evapora y deja una capa transparente y transpirable. Los estudios clínicos han demostrado que reducen el eritema y la descamación tras el retiro de adhesivos, incluso en neonatos.</p><p>La humedad y los residuos (cremas, sudor) afectan la adherencia y aumentan el riesgo de daño al retirar el adhesivo. Por eso se recomiendan limpiadores suaves y evitar productos irritantes.</p>" },
      { ico: "🎯", t: "Selección adecuada del adhesivo", b: ["Elegir el producto según su finalidad, la zona anatómica y las condiciones del sitio de aplicación.", "Evitar adhesivos muy agresivos o con más adherencia de la necesaria.", "Usar el tamaño adecuado: no más grande de lo necesario."],
        d: "<p>Al seleccionar un adhesivo se consideran factores del paciente y del producto: el uso previsto, el tiempo de uso, la ubicación anatómica, el grosor de la piel y las condiciones del sitio (si es liso o con contornos, si hay movimiento o fricción, humedad, transpiración, exudados o fluidos corporales).</p><p>Propiedades del adhesivo a tener en cuenta: cohesión en el tiempo y suavidad. Propiedades de la cinta o del apósito: transpirabilidad, elasticidad, adaptabilidad, flexibilidad y resistencia.</p><p><strong>Adhesivos de silicona.</strong> Son más suaves y se asocian con menor riesgo de lesión. A diferencia de los adhesivos convencionales, cuya adhesión aumenta con el tiempo, la silicona contacta rápidamente toda la superficie de la piel y su adhesión se mantiene constante. Esto significa menor fuerza de despegue, menor pérdida de células epidérmicas y menos molestias al retirarla.</p><p><strong>Dispositivos críticos.</strong> Son aquellos cuyo desplazamiento puede tener un impacto clínico importante: accesos vasculares, tubos endotraqueales, sondas nasogástricas de alimentación y catéteres urinarios permanentes. Cuanto más crítico sea el dispositivo, mayor será la necesidad de un producto con más adhesión o un soporte más resistente. Los adhesivos de silicona se adhieren mal a otros productos de silicona y no se han evaluado como fijación principal de tubos críticos; si se usan, es esencial vigilar con frecuencia que la fijación se mantenga.</p><p><strong>Movimiento y tensión.</strong> Tener en cuenta los cambios de la piel y el movimiento de las articulaciones tras una lesión, una cirugía u otro procedimiento. Las ampollas por tensión son más probables cuando la piel se estira debajo de una cinta rígida o cuando una articulación se cubre con una cinta no flexible.</p>" },
      { ico: "🖐️", t: "Técnica correcta de aplicación", b: ["No estirar la piel al colocar el adhesivo.", "Aplicar sin tensión ni presión excesiva: la tensión puede provocar ampollas.", "Asegurar una buena adherencia, sin fricción."] },
      { ico: "🐢", t: "Técnica segura de retiro", b: ["Retirar lentamente, en dirección paralela a la piel.", "Sostener la piel mientras se retira el adhesivo.", "Usar removedores de adhesivo si es necesario.", "Nunca arrancar de forma brusca."],
        d: "<p>El retiro de adhesivos médicos puede dañar las capas del estrato córneo y causar lesiones y dolor. Los removedores de adhesivo facilitan el retiro y eliminan los residuos de adhesivo y de película protectora.</p><p>Como segunda opción, se puede humedecer continuamente la unión entre el adhesivo y la piel con bolitas de algodón empapadas en agua. También puede usarse aceite mineral o vaselina para aflojar la cinta, siempre que no sea necesario volver a pegar en la misma zona.</p>" },
      { ico: "🦠", t: "Prevención de infecciones", b: ["Vigilar las zonas expuestas a adhesivos para detectar signos de infección: los adhesivos pueden favorecer el crecimiento de microorganismos.", "Almacenar y usar los productos adhesivos de manera que se evite su contaminación.", "Recordar que los productos adhesivos pueden ser reservorios de microorganismos patógenos."] },
      { ico: "🔄", t: "Rotación y vigilancia", b: ["Inspeccionar la piel en cada cambio de adhesivo.", "Cambiar el sitio de fijación cuando sea posible.", "Suspender el uso si aparecen signos de lesión: eritema, ampollas o desgarro."] },
      { ico: "🎓", t: "Educación y capacitación", b: ["Capacitar al personal de salud en el uso adecuado de los adhesivos.", "Educar a pacientes y cuidadores.", "Promover protocolos de cuidado de la piel."] }
    ],
    html: `
<div class="card">
  <span class="etiqueta">Escala de valoración</span>
  <h2>Escala ERLAM: ¿qué tan alto es el riesgo?</h2>
  <p class="intro">Escala de Evaluación del Riesgo para el Desarrollo de Lesiones Cutáneas Relacionadas con Adhesivos Médicos, desarrollada para adultos hospitalizados. Marca cada factor presente en tu paciente: cada uno suma 1 punto.</p>
  <div id="erlam"></div>
</div>

<div class="card">
  <span class="etiqueta">Diapositivas</span>
  <h2>Ocho medidas para prevenir las MARSI</h2>
  <p class="intro">Avanza con las flechas o toca los puntos. Algunas medidas tienen un apartado "Más detalle" con la explicación completa.</p>
  <div id="diapos-prevencion"></div>
</div>`
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    id: "aplicacion-y-retiro", n: 6, ico: "🎬", color: "#dcf0f7", tinta: "#1a6a8a",
    titulo: "Aplicación y retiro", formato: "Video", tiempo: "6 min",
    resumen: "La técnica correcta, paso a paso, para colocar y retirar adhesivos sin dañar la piel.",
    puntos: ["Piel limpia, seca y sin tensión", "Retiro lento y paralelo a la piel", "Sostener la piel mientras se retira", "Removedores, agua o vaselina cuando hagan falta"],
    video: "videoTecnica",
    html: `
<div class="card">
  <span class="etiqueta">Video</span>
  <h2>Aplicación y retiro correcto de adhesivos médicos</h2>
  <p class="intro">Ver la técnica en movimiento ayuda a incorporarla en la práctica diaria.</p>
  <div id="video-tecnica"></div>
</div>

<div class="card">
  <h2>Procedimiento recomendado</h2>
  <div class="dos-col">
    <div class="col c-menta">
      <h4>✅ Aplicación</h4>
      <ul>
        <li>Asegurarse de que la zona esté <strong>limpia y seca</strong>. Recortar el vello si es necesario.</li>
        <li>Aplicar una <strong>película protectora cutánea sin alcohol</strong> para proteger la piel vulnerable.</li>
        <li>Dejar que todas las superficies se <strong>sequen por completo</strong> antes de aplicar el adhesivo.</li>
        <li>Aplicar el adhesivo <strong>sin tensar, tirar ni estirar</strong>. Se puede doblar un borde para formar una pestaña que facilite el retiro.</li>
        <li>Alisar el producto sobre su lugar con una <strong>presión firme pero suave</strong>, evitando huecos y arrugas.</li>
        <li>Usar productos <strong>suaves y elásticos</strong> si hay edema o se prevé movimiento, teniendo en cuenta la dirección del estiramiento.</li>
        <li>Si se necesita compresión, estirar el adhesivo <strong>solo sobre el apósito</strong> y presionar el resto de la cinta sobre la piel sin tensión.</li>
      </ul>
    </div>
    <div class="col c-celeste">
      <h4>🐢 Retiro</h4>
      <ul>
        <li><strong>Aflojar los bordes</strong> del producto. Si no hay una pestaña, se puede pegar un pequeño trozo de cinta en un borde para formarla.</li>
        <li>Con los dedos de la mano contraria, <strong>empujar la piel hacia abajo</strong> y apartarla del adhesivo.</li>
        <li>Retirar el producto <strong>lentamente</strong>, doblándolo sobre sí mismo en la dirección del crecimiento del vello, manteniéndolo horizontal y cerca de la superficie de la piel.</li>
        <li>A medida que se retira, <strong>seguir dando soporte</strong> con la otra mano a la piel recién expuesta.</li>
        <li>Los apósitos de película transparente se pueden retirar aflojando una esquina y <strong>estirándolos horizontalmente</strong> en dirección opuesta a la herida (técnica de estiramiento y relajación), repitiendo alrededor del apósito.</li>
        <li>Las tiras adhesivas se despegan lentamente <strong>desde cada lado hacia la herida</strong>; cuando ambos lados estén sueltos, se levanta la tira desde el centro.</li>
        <li>Si es necesario, usar un <strong>removedor de adhesivo médico</strong>. Considerar loción, vaselina o aceite mineral si no se volverá a aplicar adhesivo en la misma zona.</li>
      </ul>
    </div>
  </div>
  <div class="nota rosa"><strong>Nunca arrancar de forma brusca.</strong> Un retiro rápido y perpendicular a la piel es una de las causas más frecuentes de lesión.</div>
</div>`
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    id: "tratamiento", n: 7, ico: "🩺", color: "#ece7e0", tinta: "#5c4a3a",
    titulo: "Tratamiento", formato: "Infografía", tiempo: "10 min",
    resumen: "Qué hacer cuando la lesión ya ocurrió: el manejo de cada tipo de MARSI y la ruta general de atención.",
    puntos: ["Manejo de las lesiones mecánicas", "Manejo de las dermatitis", "Manejo de la maceración", "Ruta general: valorar, limpiar, proteger y vigilar"],
    lesiones: [
      { grupo: "Lesiones mecánicas", color: "#e4ecfb", tinta: "#2c4f9e", items: [
        { t: "Desprendimiento epidérmico", en: "Skin stripping", img: "desprendimiento", pasos: [
          "Retirar el adhesivo con removedor, en dirección paralela a la piel y sin tracción.", "No repetir la aplicación del mismo adhesivo sobre la zona lesionada.", "Inspeccionar la zona lesionada.", "Evaluar el dolor y la presencia de exudado o signos de infección.", "Proteger la piel lesionada con apósitos atraumáticos: malla siliconada, apósitos lipocoloides o espumas de silicona.", "Manejar el dolor."] },
        { t: "Lesión por tensión y ampolla", en: "Tension injury / blister", img: "ampolla", pasos: [
          "Retirar el adhesivo con removedor, en dirección paralela a la piel y sin tracción.", "No retirar la capa superior de la ampolla: aumenta el riesgo de infección.", "Controlar el dolor.", "Usar apósitos atraumáticos, con técnicas correctas de aplicación y retiro.", "Si la ampolla está rota, realizar la higiene de la herida.", "Proteger la piel perilesional.", "Ampolla dolorosa o en zonas donde limite la movilidad: drenarla y conservar el techo, que funciona como apósito y favorece la cicatrización.", "Vigilar los signos de infección."] },
        { t: "Desgarro cutáneo", en: "Skin tear", img: "desgarro", pasos: [
          "Controlar el sangrado.", "Realizar la higiene de la herida.", "Reposicionar el colgajo cutáneo si es viable.", "Cubrir con apósitos atraumáticos: malla siliconada, apósitos lipocoloides o espumas de silicona.", "Elegir el apósito según el exudado.", "Manejar el dolor.", "Vigilar los signos de infección.", "Proteger la piel perilesional."] }
      ] },
      { grupo: "Dermatitis", color: "#f3e6fb", tinta: "#6b2f9e", items: [
        { t: "Dermatitis de contacto irritativa", img: "irritante", pasos: [
          "Retirar el adhesivo con removedor, en dirección paralela a la piel y sin tracción.", "Tratar el agente causal.", "Restaurar la barrera cutánea: emolientes, óxido de zinc y protectores cutáneos.", "Corticoide tópico de acción baja (hidrocortisona, dexametasona) cuando haya inflamación clínicamente significativa.", "Evitar nuevos irritantes."] },
        { t: "Dermatitis alérgica de contacto", img: "alergica", pasos: [
          "Identificar y retirar el alérgeno.", "Tratamiento antiinflamatorio tópico: corticoide de acción baja (hidrocortisona, dexametasona) cuando haya inflamación clínicamente significativa.", "Restaurar la barrera cutánea: emolientes, óxido de zinc y protectores cutáneos.", "Evitar la reexposición."] }
      ] },
      { grupo: "Otras lesiones", color: "#dcf0f7", tinta: "#1a6a8a", items: [
        { t: "Maceración", img: "maceracion", pasos: [
          "Retirar el adhesivo con removedor, en dirección paralela a la piel y sin tracción.", "Mantener la piel limpia y seca.", "Proteger la piel con protectores cutáneos."] }
      ] }
    ],
    html: `
<div class="card">
  <span class="etiqueta">Infografía</span>
  <h2>Tratamiento según el tipo de lesión</h2>
  <p class="intro">Toca cada lesión para ver los pasos de su manejo.</p>
  <div id="lesiones"></div>
</div>

<div class="card">
  <span class="etiqueta">Flujograma</span>
  <h2>Ruta general de manejo de una MARSI</h2>
  <p class="intro">Sigue el flujo de arriba hacia abajo. Los recuadros amarillos son preguntas de decisión: elige el camino SÍ o NO.</p>
  <div class="flujo">
    <div class="nodo inicio">Inicio</div><div class="flecha"></div>
    <div class="nodo">Identificar la lesión cutánea (MARSI)</div><div class="flecha"></div>
    <div class="nodo">Valorar la lesión y al paciente</div>
    <div class="nodo detalle"><ul><li>Tipo de MARSI</li><li>Localización y extensión</li><li>Dolor</li><li>Exudado</li><li>Signos de infección</li><li>Factores de riesgo del paciente</li></ul></div><div class="flecha"></div>
    <div class="nodo">Eliminar la causa de la lesión</div>
    <div class="nodo detalle"><ul><li>Retirar cuidadosamente el adhesivo</li><li>Evitar recolocarlo sobre la lesión</li></ul></div><div class="flecha"></div>
    <div class="nodo">Limpiar la lesión</div>
    <div class="nodo detalle"><ul><li>Solución salina</li><li>Agua estéril o limpiador no citotóxico</li><li>Evitar sustancias con alcohol</li></ul></div><div class="flecha"></div>
    <div class="nodo decision">¿Existe pérdida de la piel?</div><div class="flecha"></div>
    <div class="rama">
      <div><span class="no">NO</span><div class="nodo">Proteger la piel con película barrera</div></div>
      <div><span class="si">SÍ</span><div class="nodo">Seleccionar el apósito según las características de la lesión</div>
        <div class="nodo detalle"><ul><li>Según tamaño, profundidad, exudado, lecho, dolor, signos de infección, piel perilesional y ubicación anatómica</li><li>Apósitos hidrocelulares de silicona</li><li>Mallas</li><li>Hidrofibras</li><li>Hidrocoloide (si está indicado)</li></ul></div></div>
    </div>
    <div class="flecha"></div>
    <div class="nodo">Valorar y controlar el dolor</div>
    <div class="nodo detalle"><ul><li>Retiro lento del adhesivo</li><li>Removedor de adhesivos</li><li>Analgesia cuando esté indicada</li></ul></div><div class="flecha"></div>
    <div class="nodo decision">¿Hay signos de infección?</div><div class="flecha"></div>
    <div class="rama">
      <div><span class="no">NO</span><div class="nodo">Continuar los cuidados locales</div></div>
      <div><span class="si">SÍ</span><div class="nodo">Valoración médica</div><div class="nodo detalle"><ul><li>Cultivo si está indicado</li><li>Tratamiento antimicrobiano</li></ul></div></div>
    </div>
    <div class="flecha"></div>
    <div class="nodo">Seguimiento y documentación</div>
    <div class="nodo detalle"><ul><li>Evolución de la lesión</li><li>Tamaño</li><li>Exudado</li><li>Dolor</li><li>Respuesta al tratamiento</li></ul></div><div class="flecha"></div>
    <div class="nodo fin">Fin</div>
  </div>
</div>

<div class="card">
  <h2>Beneficios de prevenir las MARSI</h2>
  <div class="tarjetas">
    <div class="tarjeta c-menta"><div class="ico">🧴</div><h4>Preserva la integridad de la piel</h4></div>
    <div class="tarjeta c-menta"><div class="ico">😌</div><h4>Disminuye el dolor y el malestar del paciente</h4></div>
    <div class="tarjeta c-menta"><div class="ico">🦠</div><h4>Reduce el riesgo de infecciones y otras complicaciones</h4></div>
    <div class="tarjeta c-menta"><div class="ico">🩹</div><h4>Favorece una cicatrización adecuada</h4></div>
    <div class="tarjeta c-menta"><div class="ico">🏥</div><h4>Disminuye la estancia hospitalaria y los costos en salud</h4></div>
    <div class="tarjeta c-menta"><div class="ico">⭐</div><h4>Promueve una atención segura, basada en la evidencia y centrada en el paciente</h4></div>
  </div>
  <p class="destacado">Las lesiones cutáneas asociadas a adhesivos médicos (MARSI) son eventos adversos prevenibles. Su prevención mejora la seguridad del paciente y la calidad de la atención.</p>
</div>`
  },

  // 8 ─────────────────────────────────────────────────────────────
  {
    id: "postest", n: 8, ico: "🏁", color: "#fde2ec", tinta: "#a52a4b", eval: true,
    titulo: "Postest", formato: "Cuestionario", tiempo: "5 min",
    resumen: "Siete preguntas para comprobar cuánto aprendiste en el recorrido.",
    puntos: ["Lesiones MARSI de tipo mecánico", "Adhesivo para piel frágil durante 72 horas", "Técnica segura de retiro", "Objetivo de la película barrera"],
    quiz: {
      tipo: "postest",
      intro: "Llegaste al final del recorrido. Responde las siete preguntas y compara tu resultado con el del pretest.",
      preguntas: [
        { p: "¿Cuál de las siguientes lesiones corresponde a una MARSI de tipo mecánico?", o: ["Dermatitis alérgica.", "Desprendimiento epidérmico (skin stripping).", "Maceración.", "Foliculitis."], r: 1 },
        { p: "Un paciente requiere la fijación de un apósito durante 72 horas y presenta piel muy frágil. ¿Cuál sería el adhesivo más apropiado?", o: ["Látex.", "Acrilato de alta adherencia.", "Silicona.", "Óxido de zinc."], r: 2 },
        { p: "Antes de colocar un adhesivo médico, ¿qué aspecto debe valorarse primero?", o: ["El color del apósito.", "El costo del producto.", "El estado de la piel y los factores de riesgo del paciente."], r: 2 },
        { p: "Durante la aplicación del adhesivo se debe:", o: ["Estirar el adhesivo para aumentar la fijación.", "Aplicarlo sobre piel húmeda.", "Colocarlo sin tensión y sobre piel limpia y seca.", "Humedecer el adhesivo antes de fijarlo."], r: 2 },
        { p: "¿Cuál es la técnica más segura para retirar un adhesivo médico?", o: ["Tirar rápidamente en dirección perpendicular.", "Retirarlo lentamente, manteniéndolo paralelo a la piel mientras se sostiene el tejido.", "Retirar el adhesivo desde el centro.", "Aplicar alcohol antes del retiro."], r: 1 },
        { p: "¿Cuál es el objetivo principal de utilizar una película barrera?", o: ["Incrementar la adherencia del adhesivo.", "Proteger la piel perilesional frente al daño.", "Desinfectar la piel.", "Favorecer el crecimiento bacteriano."], r: 1 },
        { p: "¿Cuál de las siguientes acciones contribuye a prevenir la recurrencia de una MARSI?", o: ["Colocar nuevamente el adhesivo sobre la misma zona.", "Cambiar el sitio de fijación cuando sea posible.", "Utilizar siempre adhesivos de alta adherencia.", "Retirar el adhesivo rápidamente."], r: 1 }
      ]
    }
  }
];
