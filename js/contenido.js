// Contenido de MARSICARE. Todo el texto de la web vive aquí para poder corregirlo en un solo lugar.
// Cada módulo tiene: datos de la ficha (ico, color, formato, tiempo, resumen, puntos) y su contenido en HTML.

window.SITIO = {
  nombre: "MARSICARE",
  lema: "Aprende · Previene · Protege la piel",
  titulo: "Un lugar para aprender y transformar el cuidado de la piel",
  bienvenida: "Te damos la bienvenida a un espacio de aprendizaje diseñado para fortalecer el cuidado de la piel. Aquí encontrarás información clara, recursos educativos y evidencia científica sobre la prevención de las lesiones cutáneas asociadas al uso de adhesivos médicos (MARSI), para transformar el conocimiento en una práctica clínica más segura.",
  cita: "Cada intervención sobre la piel deja una huella. Que nuestras decisiones reflejen conocimiento, evidencia y compromiso, para que cada adhesivo sea una herramienta de cuidado y nunca una causa de daño.",
  cierre: "Las lesiones cutáneas asociadas a adhesivos médicos (MARSI) son eventos adversos prevenibles. Su prevención mejora la seguridad del paciente y la calidad de la atención."
};

window.MODULOS = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    id: "pretest", n: 1, ico: "🎯", color: "#fde2ec", tinta: "#a52a4b", eval: true,
    titulo: "Pretest", formato: "Kahoot", tiempo: "5 min",
    resumen: "Siete preguntas para conocer tu punto de partida antes de comenzar el recorrido.",
    puntos: ["Qué significa la sigla MARSI", "Cuándo se considera una lesión MARSI", "Quiénes tienen mayor riesgo", "Qué adhesivo se recomienda en piel frágil"],
    quiz: {
      kahoot: "kahootPretest",
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
    puntos: ["Definición y beneficios", "Silicona, hidrocoloides, acrilatos y tela", "Tabla comparativa de los tipos de adhesivo", "Por qué importa elegir bien"],
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
  <h2>Tabla comparativa</h2>
  <p class="intro">Ventajas, desventajas e implicaciones clínicas de cada tipo de adhesivo.</p>
  <div class="tabla-scroll">
  <table>
    <thead><tr><th>Tipo de adhesivo</th><th>Base</th><th>Ventajas</th><th>Desventajas</th><th>Implicaciones clínicas</th></tr></thead>
    <tbody>
      <tr><td>Látex de caucho natural (tela)</td><td>Tela elástica tradicional</td>
        <td><ul><li>Se utiliza desde hace más de 100 años.</li><li>Alta fuerza de adhesión, combinada con soporte de tela tejida.</li></ul></td>
        <td><ul><li>Puede presentar una adhesión muy agresiva sobre la piel.</li><li>Puede causar daño cutáneo si se aplica o retira incorrectamente.</li></ul></td>
        <td><ul><li>Buena fuerza para fijar sondas, drenajes y dispositivos pesados.</li><li>Debe usarse de forma selectiva, en dispositivos que requieran una fijación muy firme.</li></ul></td></tr>
      <tr><td>Acrilato</td><td>Espuma elástica, papel, plástico, seda y tela tradicional</td>
        <td><ul><li>Se utiliza ampliamente desde hace más de 50 años.</li><li>Generalmente hipoalergénico.</li></ul></td>
        <td><ul><li>Aunque es seguro, una selección, aplicación o retiro inadecuados pueden provocar dolor y daño cutáneo.</li></ul></td>
        <td><ul><li>Seleccionar el adhesivo con el nivel de adhesión apropiado.</li><li>Una adhesión mayor a la necesaria aumenta el riesgo de lesión.</li><li>Considerar su uso en dispositivos temporales y fijaciones de corta duración.</li></ul></td></tr>
      <tr><td>Silicona</td><td>Papel o plástico</td>
        <td><ul><li>Tecnología de adhesivo más reciente.</li><li>Muy suave con la piel.</li><li>Baja sensibilización cutánea.</li><li>Tolera aplicaciones repetidas con menor daño cutáneo.</li></ul></td>
        <td><ul><li>No se recomienda como fijación primaria de sistemas críticos o tubos.</li></ul></td>
        <td><ul><li>Excelente elección para fijar apósitos livianos y dispositivos en pacientes con piel frágil.</li><li>Disminuye el riesgo de lesiones por retiro del adhesivo.</li></ul></td></tr>
      <tr><td>Hidrocoloides</td><td>Película (film)</td>
        <td><ul><li>Se adhieren inicialmente a superficies secas.</li><li>La adhesión aumenta con el tiempo debido al contenido de agua del hidrocoloide.</li></ul></td>
        <td><ul><li>Se han reportado traumatismos cutáneos similares a los producidos por adhesivos acrílicos cuando permanecen más de 24 horas.</li></ul></td>
        <td><ul><li>Se utilizan como apósitos para heridas y como plataformas adhesivas para sondas o dispositivos médicos.</li></ul></td></tr>
      <tr><td>Hidrogeles y poliuretanos</td><td>No se utilizan con frecuencia; seguir las instrucciones del fabricante</td>
        <td><ul><li>Indicados principalmente para el manejo de heridas.</li></ul></td>
        <td><ul><li>Su uso depende de las indicaciones específicas del fabricante.</li></ul></td>
        <td><ul><li>Se emplean como apósitos para heridas y como plataforma adhesiva para sondas o dispositivos médicos.</li></ul></td></tr>
    </tbody>
  </table>
  </div>
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
    titulo: "MARSI", formato: "Infografía", tiempo: "8 min",
    resumen: "Qué son las lesiones cutáneas asociadas a adhesivos médicos y cómo se clasifican.",
    puntos: ["Definición: eritema que persiste 30 minutos o más", "Cómo se produce la lesión", "Qué tan frecuentes son", "Clasificación: mecánicas, dermatitis y otras"],
    html: `
<div class="card">
  <span class="etiqueta">Definición</span>
  <h2>¿Qué es una MARSI?</h2>
  <p class="intro">Es el daño en la piel en el que aparece eritema (enrojecimiento) u otra alteración cutánea que <strong>persiste 30 minutos o más</strong> después de retirar el adhesivo.</p>
  <p>La lesión ocurre cuando la fuerza de adhesión del producto a la piel supera la fuerza de cohesión entre las células cutáneas. Como resultado, se desprenden capas de la epidermis o la epidermis se separa de la dermis.</p>
  <div class="nota">MARSI viene del inglés <em>Medical Adhesive-Related Skin Injury</em>: lesión cutánea relacionada con adhesivos médicos.</div>
</div>

<div class="card">
  <h2>Una complicación frecuente y poco reconocida</h2>
  <p>Las lesiones por adhesivos médicos ocurren en todos los entornos de atención en salud. Aunque suelen asociarse a las edades extremas, pueden presentarse en <strong>cualquier grupo de edad</strong> si no se utiliza la técnica adecuada.</p>
  <p>Al retirar el adhesivo, se eliminan capas superficiales de la piel junto con el producto. Esto no solo afecta la integridad de la piel: puede causar dolor, aumentar el riesgo de infección, ampliar el tamaño de la herida y retrasar la cicatrización, lo que reduce la calidad de vida del paciente.</p>
  <div class="tarjetas">
    <div class="tarjeta c-azul"><div class="ico">📊</div><h4>20 % a 41,9 %</h4><p>Incidencia de MARSI reportada en entornos hospitalarios.</p></div>
    <div class="tarjeta c-rosa"><div class="ico">👶👵</div><h4>Hasta 54,2 %</h4><p>En poblaciones vulnerables como neonatos, niños y adultos mayores.</p></div>
    <div class="tarjeta c-menta"><div class="ico">✅</div><h4>Prevenibles</h4><p>En gran medida, mediante guías clínicas basadas en la evidencia.</p></div>
  </div>
</div>

<div class="card">
  <h2>Clasificación de las MARSI</h2>
  <p class="intro">Se agrupan en tres categorías según el mecanismo que las produce.</p>

  <h3>1. Lesiones mecánicas</h3>
  <div class="tarjetas">
    <div class="tarjeta c-azul"><h4>Desprendimiento cutáneo (epidérmico)</h4><p>Remoción de una o más capas del estrato córneo al retirar una cinta o un apósito adhesivo. Las lesiones suelen ser poco profundas e irregulares; la piel puede verse brillante y acompañarse de eritema y ampollas.</p></div>
    <div class="tarjeta c-azul"><h4>Ampolla por tensión</h4><p>Separación de la epidermis y la dermis por una fuerza de cizallamiento: la piel se distiende bajo una cinta o un apósito rígido, o una articulación en movimiento queda cubierta con una cinta no flexible.</p></div>
    <div class="tarjeta c-azul"><h4>Desgarro cutáneo</h4><p>Herida causada por cizallamiento, fricción o un golpe, que separa las capas de la piel. Puede ser de espesor parcial o completo.</p></div>
  </div>

  <h3>2. Dermatitis</h3>
  <div class="tarjetas">
    <div class="tarjeta c-lila"><h4>Dermatitis por contacto irritante</h4><p>Reacción no alérgica a un irritante químico. El área afectada está bien delimitada y coincide con la zona de exposición; puede verse enrojecida, hinchada y con vesículas. Suele ser de corta duración.</p></div>
    <div class="tarjeta c-lila"><h4>Dermatitis alérgica</h4><p>Respuesta inmunológica a un componente de la cinta o del soporte. Aparece como una zona enrojecida, con vesículas y picazón, que puede extenderse más allá del área de exposición y durar hasta una semana.</p></div>
  </div>

  <h3>3. Otras lesiones</h3>
  <div class="tarjetas">
    <div class="tarjeta c-celeste"><h4>Maceración</h4><p>Cambios por humedad atrapada contra la piel durante un tiempo prolongado. La piel se ve arrugada y de color blanco o gris; al ablandarse, se vuelve más permeable y susceptible a la fricción y a los irritantes.</p></div>
    <div class="tarjeta c-celeste"><h4>Foliculitis</h4><p>Inflamación del folículo piloso causada por el afeitado o por bacterias atrapadas. Se ve como pequeñas elevaciones inflamadas, sin pus (pápulas) o con pus (pústulas).</p></div>
  </div>

  <details style="margin-top:16px">
    <summary style="cursor:pointer;font-weight:700;color:var(--teal2)">Ver la clasificación ilustrada con imágenes clínicas</summary>
    <img src="img/clasificacion-marsi.png" alt="Clasificación de las MARSI con fotografías clínicas de cada tipo de lesión" style="margin-top:12px;border-radius:12px;border:1px solid var(--borde)">
    <p class="fuente">Material aportado por la autora.</p>
  </details>
</div>`
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    id: "factores-de-riesgo", n: 5, ico: "⚠️", color: "#f3e6fb", tinta: "#6b2f9e",
    titulo: "Factores de riesgo", formato: "Infografía", tiempo: "5 min",
    resumen: "Lo que aumenta la probabilidad de una lesión: características del paciente y condiciones del entorno.",
    puntos: ["Factores intrínsecos (propios del paciente)", "Factores extrínsecos (del entorno y del cuidado)", "Edad, enfermedades y estado nutricional", "Humedad, medicamentos y técnica"],
    html: `
<div class="card">
  <span class="etiqueta">Infografía</span>
  <h2>Factores que pueden aumentar el riesgo de MARSI</h2>
  <p class="intro">Identificarlos antes de aplicar un adhesivo permite elegir mejor el producto y la técnica.</p>
  <div class="dos-col">
    <div class="col c-azul">
      <h4>🧍 Factores intrínsecos <small style="font-weight:500;color:var(--gris)">(del paciente)</small></h4>
      <ul>
        <li><strong>Extremos de edad:</strong> neonatos, prematuros y adultos mayores.</li>
        <li><strong>Raza o etnia.</strong></li>
        <li><strong>Condiciones dermatológicas:</strong> eccema, dermatitis, úlceras exudativas crónicas, epidermólisis bullosa.</li>
        <li><strong>Enfermedades de base:</strong> diabetes, infección, insuficiencia renal, inmunosupresión, insuficiencia venosa, hipertensión, várices periestomales.</li>
        <li><strong>Desnutrición.</strong></li>
        <li><strong>Deshidratación.</strong></li>
      </ul>
    </div>
    <div class="col c-celeste">
      <h4>🌦️ Factores extrínsecos <small style="font-weight:500;color:var(--gris)">(del entorno y del cuidado)</small></h4>
      <ul>
        <li><strong>Sequedad de la piel</strong> por limpiadores fuertes, baño excesivo o baja humedad ambiental.</li>
        <li><strong>Exposición prolongada a la humedad.</strong></li>
        <li><strong>Ciertos medicamentos:</strong> antiinflamatorios, anticoagulantes, quimioterapia y corticoides de uso prolongado.</li>
        <li><strong>Radioterapia.</strong></li>
        <li><strong>Fotodaño</strong> (daño por el sol).</li>
        <li><strong>Aplicación y retiro reiterados</strong> de apósitos en la misma zona.</li>
        <li><strong>Técnica de adhesión inadecuada o repetida.</strong></li>
      </ul>
    </div>
  </div>
  <div class="nota">Cuantos más factores se combinen, mayor es el riesgo. En estos pacientes, la valoración de la piel y la elección del adhesivo deben ser especialmente cuidadosas.</div>
</div>`
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    id: "prevencion", n: 6, ico: "🛡️", color: "#fff4c9", tinta: "#8a6a00",
    titulo: "Prevención", formato: "Diapositivas", tiempo: "12 min",
    resumen: "Ocho medidas basadas en la evidencia para que la lesión no llegue a ocurrir.",
    puntos: ["Valorar y preparar la piel", "Elegir el adhesivo adecuado", "Aplicar y retirar con la técnica correcta", "Vigilar, rotar y educar"],
    diapos: [
      { ico: "🔍", t: "Valoración previa de la piel", b: ["Evaluar el estado de la piel antes de aplicar cualquier adhesivo: fragilidad, humedad e irritación.", "Identificar los factores de riesgo intrínsecos y extrínsecos.", "No aplicar adhesivos sobre piel lesionada o irritada."] },
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
  <span class="etiqueta">Diapositivas</span>
  <h2>Ocho medidas para prevenir las MARSI</h2>
  <p class="intro">Avanza con las flechas o toca los puntos. Algunas medidas tienen un apartado "Más detalle" con la explicación completa.</p>
  <div id="diapos-prevencion"></div>
</div>`
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    id: "aplicacion-y-retiro", n: 7, ico: "🎬", color: "#dcf0f7", tinta: "#1a6a8a",
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

  // 8 ─────────────────────────────────────────────────────────────
  {
    id: "tratamiento", n: 8, ico: "🩺", color: "#ece7e0", tinta: "#5c4a3a",
    titulo: "Tratamiento", formato: "Flujograma", tiempo: "8 min",
    resumen: "Qué hacer cuando la lesión ya ocurrió: valorar, eliminar la causa, limpiar, proteger y vigilar.",
    puntos: ["Identificar y valorar la lesión y al paciente", "Retirar la causa y limpiar con solución salina", "¿Hay pérdida de piel? Barrera o apósito", "Controlar el dolor, vigilar la infección y documentar"],
    html: `
<div class="card">
  <span class="etiqueta">Flujograma</span>
  <h2>Manejo de una lesión MARSI</h2>
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

  // 9 ─────────────────────────────────────────────────────────────
  {
    id: "postest", n: 9, ico: "🏁", color: "#fde2ec", tinta: "#a52a4b", eval: true,
    titulo: "Postest", formato: "Kahoot", tiempo: "5 min",
    resumen: "Siete preguntas para comprobar cuánto aprendiste en el recorrido.",
    puntos: ["Lesiones MARSI de tipo mecánico", "Adhesivo para piel frágil durante 72 horas", "Técnica segura de retiro", "Objetivo de la película barrera"],
    quiz: {
      kahoot: "kahootPostest",
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
