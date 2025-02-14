document.addEventListener("DOMContentLoaded", function () {
    
    const departamentosSelect = document.getElementById("departamentoSelect");
    const provinciasSelect = document.getElementById("provinciaSelect");
    const distritosSelect = document.getElementById("distritoSelect");
    let departamentos, provincias, distritos;

    // UBIGEO!!!!

    // Cargar los datos desde los JSON
    fetch('assets/1_ubigeo_departamentos.json')
        .then((response) => response.json())
        .then((data) => {
            departamentos = data.ubigeo_departamentos;
            cargarDepartamentos();
        });
    fetch('assets/2_ubigeo_provincias.json')
        .then((response) => response.json())
        .then((data) => {
            provincias = data.ubigeo_provincias;
        });
    fetch('assets/3_ubigeo_distritos.json')
        .then((response) => response.json())
        .then((data) => {
            distritos = data.ubigeo_distritos;
        });
    // Función para cargar los departamentos en el select
    function cargarDepartamentos() {
        departamentos.forEach((departamento) => {
            const option = document.createElement("option");
            option.value = departamento.id;
            option.textContent = departamento.departamento;
            departamentosSelect.appendChild(option);
        });
    }
    // Función para cargar las provincias según el departamento seleccionado
    function cargarProvincias(departamentoId) {
        const provinciasFiltradas = provincias.filter(
            (provincia) => provincia.departamento_id == departamentoId
        );
        provinciasFiltradas.forEach((provincia) => {
            const option = document.createElement("option");
            option.value = provincia.id;
            option.textContent = provincia.provincia;
            provinciasSelect.appendChild(option);
        });
    }
    // Función para cargar los distritos según la provincia seleccionada
    function cargarDistritos(provinciaId) {
        const distritosFiltrados = distritos.filter(
            (distrito) => distrito.provincia_id == provinciaId
        );
        distritosFiltrados.forEach((distrito) => {
            const option = document.createElement("option");
            option.value = distrito.distrito;
            option.textContent = distrito.distrito;
            distritosSelect.appendChild(option);
        });
    }
    // Eventos para los cambios en los selects
    departamentosSelect.addEventListener("change", function () {
        provinciasSelect.value = distritosSelect.value = ''
        provinciaSelect.innerHTML = '<option value="" disabled selected>PROVINCIA</option>';
        distritoSelect.innerHTML = '<option value="" disabled selected>DISTRITO</option>'
        cargarProvincias(this.value);
    });
    provinciasSelect.addEventListener("change", function () {
        
        distritosSelect.value = ''
        distritoSelect.innerHTML = '<option value="" disabled selected>DISTRITO</option>'
        cargarDistritos(this.value);
    });


    // FIN UBIGEO!!!!

    // Mostrar Formulario Checks

    const form_menor = document.getElementById("form-menor");
    const form_menor_checkbox = document.getElementById("form-menor-checkbox");
    const producto_entregado_form = document.getElementById("producto-entregado-form");
    const producto_entregado_checkbox = document.getElementById("producto-entregado-checkbox");
    
    // Función para actualizar clases
    function toggleClass(element, checkbox) {
        if (!checkbox.checked) {
            element.classList.add("unselected");
        } else {
            element.classList.remove("unselected");
        }
    }
    
    // Inicialización al cargar
    toggleClass(form_menor, form_menor_checkbox);
    toggleClass(producto_entregado_form, producto_entregado_checkbox);
    
    // Agregar eventos para detectar cambios en los checkboxes
    form_menor_checkbox.addEventListener("change", () => {
        toggleClass(form_menor, form_menor_checkbox);
    });
    
    producto_entregado_checkbox.addEventListener("change", () => {
        toggleClass(producto_entregado_form, producto_entregado_checkbox);
    });


    // FECHA ACTUAL

    const fecha_actual = document.getElementById("fechaReclamoInput");
    fecha_actual.valueAsDate = new Date();

});