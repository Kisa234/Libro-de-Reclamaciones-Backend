document.addEventListener("DOMContentLoaded", function () {
    // VALIDADORES

    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex_number = /^[0-9]+$/;
    const regex_letters = /^[A-Za-z]+$/;
    const regex_alphanumeric = /^[A-Za-z0-9\s]+$/;
    const regex_document = /^(10|20|15|17)\d{8}$|^\d{8}$|^\d{9,12}$/;
    const regex_fecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    const celularPeruRegex = /^9\d{8}$/;

    const validation = (input, regex, errorText) =>{
        if(input.value.trim() === "" || input.value === "0" || input.value === null){
            errorText.style.visibility = "visible";
            {console.log(`Error en ${input.id} vacio`)}
            return false;
        }
        else if(!regex.test(input.value)){
            errorText.style.visibility = "visible";
            {console.log(`Error en ${input.id}`)}
            return false;
        }
        errorText.style.visibility = "hidden";
        return true;
    }
    
    const validarTextos = (input, error) => {
        return validation(input, regex_letters, error);
    };
    
    const validarNumeros = (input, error) => {
        return validation(input, regex_number, error);
    };
    
    const validarSelect = (select, error) => {
        if(select.selectedIndex === 0){
            error.style.visibility = "visible";
            return false;
        }
        return true;
    };
    
    const validarEmail = (input, error) =>{
        return validation(input, regex_email, error);
    };

    const validarDocumento = (input, error) => {
        return validation (input, regex_document, error);
    }

    const validarCelular = (input, error) => {
        return validation(input, celularPeruRegex, error);
    }

    const validarFecha = (input, error) => {
        return validation(input, regex_fecha, error);
    }

    const validarAlfanumerico = (input, error) => {
        return validation(input, regex_alphanumeric, error);
    }
    
    


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
    const identificacionEror = document.querySelector(".form-campos-error.identificacion.input");
    const nombreError = document.querySelector(".form-campos-error.nombre");
    const apellidoError = document.querySelector(".form-campos-error.apellidos");
    const departamentoError = document.querySelector(".form-campos-error.departamento");
    const provinciaError = document.querySelector(".form-campos-error.provincia");
    const distritoError = document.querySelector(".form-campos-error.distrito");
    const direccionError = document.querySelector(".form-campos-error.direccion");
    const celularError = document.querySelector(".form-campos-error.celular");
    const emailError = document.querySelector(".form-campos-error.email");

    
    // 1er formulario opcional
    const menorCheckbox = document.getElementById("form-menor-checkbox");
    const nombresPadresInput = document.getElementById("nombresPadresInput");
    const addressPadresInput = document.getElementById("addressPadresInput");
    const celularPadresInput = document.getElementById("celularPadresInput");
    const emailPadresInput   = document.getElementById("emailPadresInput");

    const nombresPadresError = document.querySelector(".form-campos-error.nombre.padres");
    const direccionPadresError = document.querySelector(".form-campos-error.direccion.padres");
    const celularPadresError = document.querySelector(".form-campos-error.celular.padres"); 
    const emailPadresError = document.querySelector(".form-campos-error.email.padres");

  



    // 2do formulario opcional
    const productoCheckbox = document.getElementById("producto-entregado-checkbox");
    const boletaInput = document.getElementById("boletaInput");
    const fechaBoletaInput = document.getElementById("fechaBoletaInput");

    const boletaError = document.querySelector(".form-campos-error.boleta");
    const fechaBoletaError = document.querySelector(".form-campos-error.fecha.boleta");

   
    

    // 2do formulario
    const pedidoInput = document.getElementById("pedidoInput");
    const bienSelect = document.getElementById("bienSelect");
    const montoInput = document.getElementById("montoInput");
    const productoInput = document.getElementById("productoInput");

    const bienSelectError = document.querySelector(".form-campos-error.bien.select");
    const pedidoError = document.querySelector(".form-campos-error.pedido");
    const montoError = document.querySelector(".form-campos-error.monto");
    const productoError = document.querySelector(".form-campos-error.producto");



    // 3er formulario
    const reclamoSelect = document.getElementById("reclamoSelect");
    const reclamoInput = document.getElementById("reclamoInput");
    const pedidoInputReclamo = document.getElementById("pedidoInputReclamo");     


    const reclamoSelectError = document.querySelector(".form-campos-error.reclamo.select");
    const reclamoError = document.querySelector(".form-campos-error.reclamo.input");
    const pedidoReclamoError = document.querySelector(".form-campos-error.pedido.reclamo");

   


    const politicsCheckbox = document.getElementById("politics");
    

    // VALIDAR FORMUARIO 
    let validacion = true;
    const validarFormulario = (e) => {
        e.preventDefault();
        
        validacion = true;

        // Validar 1er formulario
        if(!validarSelect(identificacionSelect, identificacionSelectEror)){
            validacion = false;
        }
        
        if(!validarDocumento(identificacionInput, identificacionEror)){
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
        
        if(!validarAlfanumerico(addressInput, direccionError)){
            validacion = false;
        }
        
        if(!validarCelular(celularInput, celularError)){
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
            
            if(!validarAlfanumerico(addressPadresInput, direccionPadresError)){
                validacion = false;
            }
            
            if(!validarCelular(celularPadresInput, celularPadresError)){
                validacion = false;
            }
            
            if(!validarEmail(emailPadresInput, emailPadresError)){
                validacion = false;
            }
        }
        
        // Validar 2do formulario opcional 
        if(productoCheckbox.checked){
            if(!validarAlfanumerico(boletaInput, boletaError)){
                validacion = false;
            }
            
            if(!validarFecha(fechaBoletaInput, fechaBoletaError)){
                validacion = false;
            }
        }
        
        
        
        // Validar 2do formulario
        
        if(!validarAlfanumerico(pedidoInput, pedidoError)){
            validacion = false;
        }
        if(!validarSelect(bienSelect, bienSelectError)){
            validacion = false;
        }
        if(!validarNumeros(montoInput, montoError)){
            validacion = false;
        }
        if(!validarAlfanumerico(productoInput, productoError)){
            validacion = false;
        }
        
        // Validar 3er formulario
        
        if(!validarSelect(reclamoSelect, reclamoSelectError)){
            validacion = false;
        }
        if(!validarAlfanumerico(reclamoInput, reclamoError)){
            validacion = false;
        }
        if(!validarAlfanumerico(pedidoInputReclamo, pedidoReclamoError)){
            validacion = false;
        }
        if (!politicsCheckbox.checked) {
            alert("Debe aceptar las políticas de privacidad");
            validacion = false;
        }
        
        if (validacion) {
            console.log("Formulario enviado correctamente");
        }else{
            console.log("Formulario con errores");
        }

        
        
        if (validacion){
            const menorValue = menorCheckbox.checked;
            const productoEntregadoValue = productoCheckbox.checked;

            console.log(
                "LA INFORMACIÓN DEL FORMULARIO ES CORRECTA",
                {
                    "TipoDocumento": identificacionSelect.value,
                    "NumeroDocumento": identificacionInput.value,
                    "Nombres": nombresInput.value,
                    "Apellidos": apellidosInput.value,
                    "Departamento": departamentoSelect.value,
                    "Provincia": provinciaSelect.value,
                    "Distrito": distritoSelect.value,
                    "Direccion": addressInput.value,
                    "Telefono": celularInput.value, 
                    "Correo": emailInput.value,
                    "EsMenorEdad": menorValue,
                    "NombrePadre": nombresInput.value,
                    "DireccionPadre": addressPadresInput.value,
                    "TelefonoPadre": celularPadresInput.value,
                    "CorreoPadre": emailPadresInput.value,
                    "EsProductoEntregado": productoEntregadoValue,
                    "NumeroBoleta": boletaInput.value,
                    "FechaCompra": fechaBoletaInput.value,
                    "TipoBien":           bienSelect.value,
                    "MontoReclamado"      :montoInput.value,
                    "NroPedido"           :pedidoInput.value,
                    "ProductoAdquirido"   :productoInput.value,
                    "TipoReclamo": reclamoSelect.value,
                    "FechaReclamo": Date.now(),
                    "DetalleReclamo": pedidoInputReclamo.value,
                    "PedidoReclamo": pedidoInputReclamo.value
                }
            )
        }
        
    }

    

    const button = document.getElementById("subtmitButton");
    button.addEventListener("click", validarFormulario);
    
});

