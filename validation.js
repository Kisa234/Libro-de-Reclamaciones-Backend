document.addEventListener("DOMContentLoaded", function () {
    // VALIDADORES

    const regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regex_number = /^[0-9]+$/;
    const regex_letters = /^[a-zA-Z\s]+$/;
    const regex_alphanumeric = /^[a-zA-Z0-9\s]+$/;
    
    const delayValidation = (callback, delay = 1000) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => callback(...args), delay);
        };
    };
    
    const validarTextos = delayValidation((texto, error) => {
        if (!texto.value.trim()) {
            error.style.display = "block";
            return false;
        }
        if (!regex_letters.test(texto.value)) {
            error.style.display = "block";
            return false;
        }
        error.style.display = "none";
        return true;
    });
    
    const validarNumeros = delayValidation((numero, error) => {
        if (!numero.value.trim()) {
            error.style.display = "block";
            return false;
        }
        if (!regex_number.test(numero.value)) {
            error.style.display = "block";
            return false;
        }
        error.style.display = "none";
        return true;
    });
    
    const validarSelect = delayValidation((select, error) => {
        if (!select.value.trim()) {
            error.style.display = "block";
            return false;
        }
        error.style.display = "none";
        return true;
    });
    
    const validarEmail = (email, error) =>{
        if(!regex_email.test(email.value)){
            error.style.display = "block";
            return false;
        }
        error.style.display = "none";
        return true;
    }
    
    const agregarRestricciones = (input, regex) =>{
        input.addEventListener("keydown", (e) => {
            if (!regex.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
                e.preventDefault();
            }
        });
    }


 
    

    // RESTRICCIONES!!!!!


    // 1er formulario
    const identificacionSelect = document.getElementById("identificacionSelect")
    const identificacionInput = document.getElementById("identificacionInput");
    const nombresInput = document.getElementById("nombresInput");
    const apellidosInput = document.getElementById("apellidosInput")
    const provinciaSelect = document.getElementById("provinciaSelect");
    const distritoSelect = document.getElementById("distritoSelect");
    const departamentoSelect = document.getElementById("departamentoSelect");
    const addressInput = document.getElementById("addressInput");
    const celularInput = document.getElementById("celularInput")
    const emailInput = document.getElementById("emailInput");

    const identificacionSelectEror = document.querySelector(".form-campos-error.identificacion.select");
    const identificacionEror = document.querySelector(".form-campos-error.identificacion");
    const nombreError = document.querySelector(".form-campos-error.nombre");
    const apellidoError = document.querySelector(".form-campos-error.apellidos");
    const departamentoError = document.querySelector(".form-campos-error.departamento");
    const provinciaError = document.querySelector(".form-campos-error.provincia");
    const distritoError = document.querySelector(".form-campos-error.distrito");
    const direccionError = document.querySelector(".form-campos-error.direccion");
    const celularError = document.querySelector(".form-campos-error.celular");
    const emailError = document.querySelector(".form-campos-error.email");

    agregarRestricciones(identificacionInput, regex_number);
    agregarRestricciones(nombresInput, regex_letters);
    agregarRestricciones(apellidosInput, regex_letters);
    agregarRestricciones(addressInput, regex_alphanumeric);
    agregarRestricciones(celularInput, regex_number);   

    // 1er formulario opcional
    const menorCheckbox = document.getElementById("form-menor-checkbox");
    const nombresPadresInput = document.getElementById("nombresPadresInput");
    const addressPadresInput = document.getElementById("addressPadresInput");
    const celularPadresInput = document.getElementById("celularPadresInput");
    const emailPadresInput   = document.getElementById("emailPadresInput");

    const nombresPadresError = document.querySelector(".form-campos-error.nombres.padres");
    const direccionPadresError = document.querySelector(".form-campos-error.direccion.padres");
    const celularPadresError = document.querySelector(".form-campos-error.celular.padres"); 
    const emailPadresError = document.querySelector(".form-campos-error.email.padres");

    agregarRestricciones(nombresPadresInput, regex_letters);
    agregarRestricciones(addressPadresInput, regex_alphanumeric);
    agregarRestricciones(celularPadresInput, regex_number);




    // 2do formulario opcional
    const productoCheckbox = document.getElementById("producto-entregado-checkbox");
    const boletaInput = document.getElementById("boletaInput");
    const fechaBoletaInput = document.getElementById("fechaBoletaInput");

    const boletaError = document.querySelector(".form-campos-error.boleta");
    const fechaBoletaError = document.querySelector(".form-campos-error.fecha.boleta");

   
    agregarRestricciones(boletaInput, regex_number);
    agregarRestricciones(fechaBoletaInput, regex_letters);



    // 2do formulario
    const pedidoInput = document.getElementById("pedidoInput");
    const bienSelect = document.getElementById("bienSelect");
    const montoInput = document.getElementById("montoInput");

    const bienSelectError = document.querySelector(".form-campos-error.bien.select");
    const pedidoError = document.querySelector(".form-campos-error.pedido");
    const montoError = document.querySelector(".form-campos-error.monto");

    agregarRestricciones(pedidoInput, regex_number);
    agregarRestricciones(montoInput, regex_number);


    // 3er formulario
    const reclamoSelect = document.getElementById("reclamoSelect");
    const fechaReclamoInput = document.getElementById("fechaReclamoInput");
    const reclamoInput = document.getElementById("reclamoInput");
    const pedidoInputReclamo = document.getElementById("pedidoInputReclamo");     


    const reclamoSelectError = document.querySelector(".form-campos-error.reclamo.select");
    const fechaReclamoError = document.querySelector(".form-campos-error.fecha.reclamo");
    const reclamoError = document.querySelector(".form-campos-error.reclamo");
    const pedidoReclamoError = document.querySelector(".form-campos-error.pedido.reclamo");

    agregarRestricciones(reclamoInput, regex_alphanumeric);
    agregarRestricciones(pedidoInputReclamo, regex_alphanumeric);



    const politicsCheckbox = document.getElementById("politics");
    

    // VALIDAR FORMUARIO 

    const validarFormulario = (e) => {
        e.preventDefault();
        let validacion = true;

        // Validar 1er formulario
        if(!validarSelect(identificacionSelect, identificacionSelectEror)){
            validacion = false;
        }

        if(!validarNumeros(identificacionInput, identificacionEror)){
            validacion = false;
        }

        if(!validarTextos(nombresInput, nombreError)){
            validacion = false;
        }

        if(!validarTextos(apellidosInput, apellidoError)){
            validacion = false;
        }

        if(!validarSelect(departamentoSelect, departamentoError)){
            validacion = false;
        }

        if(!validarSelect(provinciaSelect, provinciaError)){
            validacion = false;
        }

        if(!validarSelect(distritoSelect, distritoError)){
            validacion = false;
        }

        if(!validarTextos(addressInput, direccionError)){
            validacion = false;
        }

        if(!validarNumeros(celularInput, celularError)){
            validacion = false;
        }

        if(!validarEmail(emailInput, emailError)){
            validacion = false;
        }

        // Validar 1er formulario opcional
        if(menorCheckbox.checked){
            if(!validarTextos(nombresPadresInput, nombresPadresError)){
                validacion = false;
            }

            if(!validarTextos(addressPadresInput, direccionPadresError)){
                validacion = false;
            }

            if(!validarNumeros(celularPadresInput, celularPadresError)){
                validacion = false;
            }

            if(!validarEmail(emailPadresInput, emailPadresError)){
                validacion = false;
            }
        }

        // Validar 2do formulario opcional 
        if(productoCheckbox.checked){
            if(!validarNumeros(boletaInput, boletaError)){
                validacion = false;
            }

            if(!validarTextos(fechaBoletaInput, fechaBoletaError)){
                validacion = false;
            }
        }

       

        // Validar 2do formulario

        if(!validarTextos(pedidoInput, pedidoError)){
            validacion = false;
        }
        if(!validarSelect(bienSelect, bienSelectError)){
            validacion = false;
        }
        if(!validarNumeros(montoInput, montoError)){
            validacion = false;
        }

        // Validar 3er formulario

        if(!validarSelect(reclamoSelect, reclamoSelectError)){
            validacion = false;
        }
        if(!validarTextos(reclamoInput, reclamoError)){
            validacion = false;
        }
        if(!validarTextos(pedidoInputReclamo, pedidoReclamoError)){
            validacion = false;
        }
        if (!politicsCheckbox.checked) {
            alert("Debe aceptar las políticas de privacidad");
            validacion = false;
        }



    }


});

