import { valida } from "./validaciones.js";

const input = document.querySelectorAll("input"); //este metodo regresara todos los tags del tipo Input, y en forma de array!

//Entonces este Input debería ser un Array, por lo que podemos aplicar el metodo ".forEach" para recorrerla
input.forEach( input => {
    //el input de abajo corresponde al input de nuestro array que está siendo recorrido c/u
    input.addEventListener("blur", (input)=>{
        valida(input.target);
    })
});
