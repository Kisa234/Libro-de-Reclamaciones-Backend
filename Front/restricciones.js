document.addEventListener("DOMContentLoaded", function () {
    // VALIDADORES

    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex_number = /^[0-9]+$/;
    const regex_letters = /^[A-Za-z]+$/;
    const regex_alphanumeric = /^[A-Za-z0-9]+$/;
    
    const agregarRestricciones = (input, regex) =>{
        input.addEventListener("keydown", (e) => {
            if (!regex.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
                e.preventDefault();
            }
        });
    }

    // RESTRICCIONES!!!!!


    // 1er formulario
    const identificacionInput = document.getElementById("identificacionInput");
    const nombresInput = document.getElementById("nombresInput");
    const apellidosInput = document.getElementById("apellidosInput")
    const addressInput = document.getElementById("addressInput");
    const celularInput = document.getElementById("celularInput")

    agregarRestricciones(identificacionInput, regex_number);
    agregarRestricciones(nombresInput, regex_letters);
    agregarRestricciones(apellidosInput, regex_letters);
    agregarRestricciones(addressInput, regex_alphanumeric);
    agregarRestricciones(celularInput, regex_number);   


    // 1er formulario opcional
    const nombresPadresInput = document.getElementById("nombresPadresInput");
    const addressPadresInput = document.getElementById("addressPadresInput");
    const celularPadresInput = document.getElementById("celularPadresInput");

    agregarRestricciones(nombresPadresInput, regex_letters);
    agregarRestricciones(addressPadresInput, regex_alphanumeric);
    agregarRestricciones(celularPadresInput, regex_number);



    // 2do formulario opcional
    const boletaInput = document.getElementById("boletaInput");
   
    agregarRestricciones(boletaInput, regex_number);



    // 2do formulario
    const pedidoInput = document.getElementById("pedidoInput");
    const montoInput = document.getElementById("montoInput");
    const productoInput = document.getElementById("productoInput");
    
    agregarRestricciones(productoInput, regex_alphanumeric);
    agregarRestricciones(pedidoInput, regex_number);
    agregarRestricciones(montoInput, regex_number);



    // 3er formulario
    const reclamoInput = document.getElementById("reclamoInput");
    const pedidoReclamoInput = document.getElementById("pedidoInputReclamo");     

    agregarRestricciones(reclamoInput, regex_alphanumeric);
    agregarRestricciones(pedidoReclamoInput, regex_alphanumeric); 

    
    
});

