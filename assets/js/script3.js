const valor1 = (document.getElementById("valor1"))
const valor2 = document.getElementById("valor2")
const btnSum = document.getElementById("btn-sumar")
const btnRestar = document.getElementById("btn-restar")
const result = document.getElementById("resultado")


btnSum.addEventListener("click", (event)=> {
    result.textContent  =Number(valor1.value) + Number(valor2.value)
    event.preventDefault()
})
btnRestar.addEventListener("click", (event)=> {
    result.textContent = (Number(valor1.value) - Number(valor2.value) <= 0)? 0 : Number(valor1.value) - Number(valor2.value)
    event.preventDefault()
})
