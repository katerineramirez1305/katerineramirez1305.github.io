// Ajustes que se completan cuando la autora entregue los enlaces.
// Dejar una cadena vacía "" mientras el recurso no exista: la web muestra un aviso en su lugar.
window.CONFIG = {
  // Registro de visitas, pretest y postest en una hoja de Google (Apps Script).
  // Pegar aquí la URL de la aplicación web publicada, que termina en "/exec".
  // Mientras esté vacío, los cuestionarios funcionan pero no se guardan.
  registro: "",

  // Videos de YouTube: solo el identificador del video (lo que va después de "v=").
  // Ejemplo: para https://www.youtube.com/watch?v=dQw4w9WgXcQ el identificador es "dQw4w9WgXcQ".
  videoPiel: "",
  videoTecnica: "",

  // Narración grabada de las diapositivas del paso MARSI (opcional).
  // Una ruta de audio por diapositiva, en orden, por ejemplo "audio/marsi-01.mp3".
  // Mientras esté vacío, la web lee el texto con la voz del navegador.
  narracionMarsi: [],

  // Contador de visitas alternativo (GoatCounter). Solo si no se usa el registro de arriba.
  goatcounter: "",

  // Créditos del pie de página. Los datos de la autora están en contenido.js (SITIO.autora).
  creditos: "Universidad del Valle · Especialización en Cuidado a Personas con Heridas y Ostomías"
};
