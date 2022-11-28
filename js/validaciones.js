///////////////////////////////////////////////////////////
/* Este trozo de código (A) será reemplazado por el próximo bloque (B)*/
    /* para no usar el ID del tags (por si cambian de nombre) sino para reeutilizar este trozo de código*/
    
    //const inputNacimiento = document.querySelector("#birth");
    /*
    inputNacimiento.addEventListener("blur", (evento)=>{
        validarNacimiento(evento.target);
    }); */

/////////////////////////////////////////////////////////////
    /* Este es el bloque de código (B): */
    export function valida(input){
        const tipoDeInput = input.dataset.tipo;

        if(validadores[tipoDeInput]){
            validadores[tipoDeInput](input);
        }

        // La "ValidityState" es una interfaz que representa los estados de validez en los que puede estar un elemento, con respecto a la validación de restricciones.
        //"validity" es una propiedad del input que contiene la interfaz: ValidityState, que a su vez encontramos la propiedad que es "valid" (con valor booleano).
        if(input.validity.valid){
            input.parentElement.classList.remove("input-container--invalid");
            input.parentElement.querySelector(".input-message-error").innerHTML="";
            
        }else{
            input.parentElement.classList.add("input-container--invalid");
            input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        }
    }
    
    const tipoDeErrores = [
        "valueMissing",
        "typeMismatch",
        "patternMismatch",
        "customError"
    ];

    const mensajesDeError = {
        nombre: {
            valueMissing: "El campo nombre no puede estar vacio"
        },
        email: {
            valueMissing: "El campo correo no puede estar vacio",
            typeMismatch: "El correo no es válido"
        },
        password: {
            valueMissing: "El campo contraseña no puede estar vacio",
            patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales"
        },
        nacimiento: {
            valueMissing: "El campo  fecha no puede estar vacio",
            customError: "Debes tener al menos 18 años de edad"
        },
        numero: {
            valueMissing: "Este campo no puede estar vacio",
            patternMismatch: "El formato requerido es XXXXXXXXXX Nº números"
        },
        ciudad: {
            valueMissing: "Este campo no puede estar vacio",
            patternMismatch: "El formato requerido es XXXXXXXXXX Nº números"
        },
        estado: {
            valueMissing: "Este campo no puede estar vacio",
            patternMismatch: "El formato requerido es XXXXXXXXXX Nº números"
        }
    };

    
    const validadores = {
        nacimiento: (input) => validarNacimiento(input)
    };

    function mostrarMensajeDeError(tipoDeInput,input){
        let mensaje = "";
        tipoDeErrores.forEach( (error) => {
            if(input.validity[error]){
                console.log(tipoDeInput, error);
                console.log(input.validity[error]);
                console.log(mensajesDeError[tipoDeInput][error]);
                mensaje = mensajesDeError[tipoDeInput][error];
            }
        });

        return mensaje;
    };


////////////////////////////////////////////////////////////

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";

    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad";
    }
    
    input.setCustomValidity(mensaje);
    console.log(prueba);
};

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
};