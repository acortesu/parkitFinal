'use strict';

// VALIDACIONES RESERVAS REALIZADAS

const btn_listar = document.querySelector("#btn-listar");
const fecha_desde = document.querySelector("#date-desde");
const fecha_hasta = document.querySelector("#date-hasta");



let validar_reservas_realizadas = () => {
    let inputs_requeridos = document.querySelectorAll('#ltr-reservas [required]');
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

let limpiar_reservas_realizadas = () => {
    fecha_hasta.value = '';
    fecha_desde.value = '';
}

let obtener_datos_reservas_realizadas = () => {
    let error = validar_reservas_realizadas();

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
            limpiar_reservas_realizadas();
        });
    }
};

btn_listar.addEventListener('click', obtener_datos_reservas_realizadas);




// VALIDAR MODIFICAR DATOS NORMAL USER

const btn_modificar_datos = document.querySelector("#btn-send");
const input_nombre = document.querySelector("#txt-nombre");
const input_segundo_nombre = document.querySelector("#txt-segundo_nombre");
const input_primer_apellido = document.querySelector("#txt-primer_apellido");
const input_segundo_apellido = document.querySelector("#txt-segundo_apellido");
const lista_nacionalidades = document.querySelector("#lst-nacionalidades");
const fecha_nacimiento = document.querySelector("#date-nacimiento");
const input_identificacion = document.querySelector("#txt-identificacion");

// const parqueo_pics = document.querySelector("#fotos_parqueo");

let validar_modificar_datos = () => {
    let inputs_requeridos = document.querySelectorAll('#modal-modificar-datos-user [required]');
    let error = false;
    let letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;


    // VALIDAR INPUTS REQUERIDOS
    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('input-error');
        }
    }

    // VALIDAR PRIMER NOMBRE ENCARGADO
    if (letters.test(input_nombre.value) == false) {
        input_nombre.classList.add('input-error');
        error = true;
    } else {
        input_nombre.classList.remove('input-error');
    }

    // VALIDAR SEGUNDO NOMBRE ENCARGADO
    if (letters.test(input_segundo_nombre.value) == false) {
        input_segundo_nombre.classList.add('input-error');
        error = true;
    } else {
        input_segundo_nombre.classList.remove('input-error');
    }

    // VALIDAR PRIMER APELLIDO ENCARGADO
    if (letters.test(input_primer_apellido_.value) == false) {
        input_primer_apellido.classList.add('input-error');
        error = true;
    } else {
        input_primer_apellido_.classList.remove('input-error');
    }

    // VALIDAR SEGUNDO APELLIDO ENCARGADO
    if (letters.test(input_segundo_apellido_.value) == false) {
        input_segundo_apellido_.classList.add('input-error');
        error = true;
    } else {
        input_segundo_apellido.classList.remove('input-error');
    }

    // VALIDAR FECHA DE NACIMIENTO

    if (new Date(fecha_nacimiento.value) > new Date()) {
        fecha_nacimiento.classList.add('input-error');
        error = true;
    } else {
        fecha_nacimiento.classList.remove('input-error');
    }

    // VALIDAR EDAD

    if (calcular_edad(new Date(fecha_nacimiento.value)) < 18) {
        fecha_nacimiento.classList.add('input-error');
        error = true;
    } else {
        fecha_nacimiento.classList.remove('input-error');
    }

    return error;

};

// LIMPIAR CAMPOS

let limpiar_modificar_datos = () => {
    input_nombre_encargado.value = '';
    input_segundo_nombre.value = '';
    input_primer_apellido.value = '';
    input_segundo_apellido.value = '';
    lista_nacionalidades.value = '';
    fecha_nacimiento.value = '';
    input_identificacion.value = '';
}


// FUNCION CALCULAR EDAD

const calcular_edad = (pfecha_nacimiento) => {
    let fecha_actual = new Date();
    let edad = 0;

    edad = fecha_actual.getFullYear() - pfecha_nacimiento.getFullYear();

    if (fecha_actual.getMonth() < pfecha_nacimiento.getMonth()) {
        edad -= 1;
    } else {
        if (fecha_actual.getMonth() == pfecha_nacimiento.getMonth() && fecha_actual.getUTCDate() < pfecha_nacimiento.getUTCDate()) {
            edad -= 1;
        }
    }

    return edad;
};


let obtener_nuevos_datos = () => {
    let error = validar_modificar_datos();

    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron modificar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(input_nombre.value);
        console.log(input_segundo_nombre.value);
        console.log(input_primer_apellido.value);
        console.log(input_segundo_apellido.value);
        console.log(lista_nacionalidades.value);
        console.log(fecha_nacimiento.value);
        console.log(input_identificacion.value);
        Swal.fire({
            'title': 'Datos modificados con éxito',
            'text': 'Sus datos se modificaron correctamente',
            'icon': 'success'
        }).then(() => {
            limpiar_modificar_datos();
        });
    }
};

btn_modificar_datos.addEventListener('click', obtener_nuevos_datos);