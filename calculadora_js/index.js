const displayValorAnterior = document.getElementById("valor-anterior"),
    displayValorActual = document.getElementById("valor-actual"),
    botonesNumeros = document.querySelectorAll(".numero"),
    botonesOperadores = document.querySelectorAll(".operadores");



const display = new Display(displayValorAnterior, displayValorActual)

/* botonesNumeros.forEach(boton => {
    boton.addEventListener("click", ()=> {
        display.agregarNumero(boton.innerHTML)
    })
}) */

document.addEventListener("click", (e)=> {
    if (e.target.matches(".numero")) {
        display.agregarNumero(e.target.innerHTML)
    }

    if (e.target.matches(".borrar")) {
        display.borrar();
    }

    if (e.target.matches(".borrarTodo")) {
        display.borrarTodo();
    }

    if (e.target.matches(".operador")) {
        display.computar(e.target.value);
    }

})