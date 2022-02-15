const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const formulario = document.getElementById("formulario");
const errorNombre = document.querySelector(".errorNombre");
const errorAsunto = document.querySelector(".errorAsunto");
const errorMensaje = document.querySelector(".errorMensaje");
const resultado = document.querySelector(".resultado");

const regex = /[^a-z|\s]|^\s|^$/gi;

const myFunction = (event) => {
  event.preventDefault();
  errorNombre.textContent = "";
  errorAsunto.textContent = "";
  errorMensaje.textContent = "";
  resultado.textContent = "";
  const nombreTrim = nombre.value.trim();
  const asuntoTrim = asunto.value.trim();
  const mensajeTrim = mensaje.value.trim();

  if (regex.test(nombreTrim)) {
    errorNombre.textContent = "El nombre es requerido";
  }
  if (regex.test(asuntoTrim)) {
    errorAsunto.textContent = "El asunto es requerido";
  }
  if (regex.test(mensajeTrim)) {
    errorMensaje.textContent = "El mensaje es requerido";
  }
  if (
    !regex.test(nombreTrim) &&
    !regex.test(asuntoTrim) &&
    !regex.test(mensajeTrim)
  ) {
    resultado.textContent = "Mensaje enviado con éxito¡¡¡";
  }
  nombre.value = nombreTrim;
  asunto.value = asuntoTrim;
  mensaje.value = mensajeTrim;
};

formulario.addEventListener("submit", myFunction);
