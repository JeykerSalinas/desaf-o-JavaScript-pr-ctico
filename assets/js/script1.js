const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const botton = document.getElementById("botton");

botton.addEventListener("click",(event)=>{
    console.log(document.getElementById("nombre").value)
    event.preventDefault()
})




// const cadena = "sds d";
// const regex = /[^a-z|\s]/ig
// result = regex.test(cadena)
// console.log('result: ', result);
