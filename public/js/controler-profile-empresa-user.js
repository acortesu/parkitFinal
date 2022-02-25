'use strict';

// VALIDACIONES SECCIÓN MIS RESERVAS

const btn_mis_reservas = document.querySelector("#btn-send_reservas");
const fecha_desde = document.querySelector("#date-desde");
const fecha_hasta = document.querySelector("#date-hasta");

let validar_mis_reservas = () => {
    let inputs_requeridos = document.querySelectorAll('#sct-reservas [required]');
    let error = false;

    // VALIDAR INPUTS REQUERIDOS
    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('input-error');
        }
    }

    // VALIDAR FECHA DESDE
    if (new Date(fecha_desde.value) >= new Date(fecha_hasta.value)) {
        fecha_desde.classList.add('input-error');
        error = true;
    }

    // VALIDAR FECHA HASTA
    if (new Date(fecha_hasta.value) <= new Date(fecha_desde.value)) {
        fecha_hasta.classList.add('input-error');
        error = true;
    }

    return error;

};

let limpiar_mis_reservas = () => {
    fecha_hasta.value = '';
    fecha_desde.value = '';
}

let obtener_datos_mis_reservas = () => {
    let error = validar_mis_reservas();

    if (error) {
        Swal.fire({
            'title': 'Fechas incorrectas',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(fecha_desde.value);
        console.log(fecha_hasta.value);
        Swal.fire({
            'title': 'Listado correcto',
            'icon': 'success'
        }).then(() => {
            limpiar_mis_reservas();
        });
    }
};

btn_mis_reservas.addEventListener('click', obtener_datos_mis_reservas);