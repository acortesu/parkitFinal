'use strict';

// VALIDACIÓN MODIFICAR DATOS PARQUEO


const btn_modificar = document.querySelector("#btn-modificar");
const input_nombre_dueno = document.querySelector("#txt-nombre_dueno");
const lista_nacionalidades = document.querySelector("#lst-nacionalidades");
const input_nombre_parqueo = document.querySelector("#txt-nombre_parqueo");
const lista_provincia = document.querySelector("#lst-provincia");
const lista_canton = document.querySelector("#lst-canton");
const lista_distrito = document.querySelector("#lst-distrito");
const input_permiso = document.querySelector("#file-permiso");
const input_email = document.querySelector("#txt-email");
const input_identificacion = document.querySelector("#txt-identificacion");
const checkbox_centro_com = document.querySelector("#cbx-centro_comercial");
const input_direccion = document.querySelector("#ipt_direccion");
const hora_apertura = document.querySelector("#ipt_apertura");
const hora_cierre = document.querySelector("#ipt_apertura");
const input_fecha_apertura = document.querySelector("#txt_fecha");
const parqueo_pics = document.querySelector("#fotos_parqueo");



let validar_modificar_datos_parqueo = () => {
    let inputs_requeridos = document.querySelectorAll('#sign-in-parqueo [required]');
    let error = false;
    let letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    let letters_numbers = /^[0-9a-zA-Z]+$/;
    let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    let idnumber = /^[0-9]+$/;

    // VALIDAR NOMBRE DUEÑO
    if (letters.test(input_nombre_dueno.value) == false) {
        input_nombre_dueno.classList.add('input-error');
        error = true;
    } else {
        input_nombre_dueno.classList.remove('input-error');
    }

    // VALIDAR NOMBRE PARQUEO
    if (letters.test(input_nombre_parqueo.value) == false) {
        input_nombre_parqueo.classList.add('input-error');
        error = true;
    } else {
        input_nombre_parqueo.classList.remove('input-error');
    }

    // VALIDAR MAIL
    if (mailformat.test(input_email.value) == false) {
        input_email.classList.add('input-error');
        error = true;
    } else {
        input_email.classList.remove('input-error');
    }

    // VALIDAR IDENTIFICACIÓN
    if (idnumber.test(input_identificacion.value) == false) {
        input_identificacion.classList.add('input-error');
        error = true;
    } else {
        input_identificacion.classList.remove('input-error');
    }

    // VALIDAR HORA APERTURA
    if (hora_apertura.value > hora_cierre.value) {
        hora_apertura.classList.remove('input-error');
    } else {
        hora_apertura.classList.add('input-error');
        error = true;
    }

    // VALIDAR HORA CIERRE
    if (hora_cierre.value < hora_apertura.value) {
        hora_cierre.classList.remove('input-error');
    } else {
        hora_cierre.classList.add('input-error');
        error = true;
    }

    return error;

};

let limpiar = () => {
    input_nombre_dueno.value = '';
    lista_nacionalidades.value = '';
    input_nombre_parqueo.value = '';
    lista_provincia.value = '';
    lista_canton.value = '';
    lista_distrito.value = '';
    input_permiso.value = '';
    input_email.value = '';
    input_identificacion.value = '';
    checkbox_centro_com.value = '';
    input_direccion.value = '';
    hora_apertura.value = '';
    hora_cierre.value = '';
    input_fecha_apertura.value = '';
    parqueo_pics.value = '';
}

let obtener_datos_modificados = () => {
    let error = validar_modificar_datos_parqueo();

    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron modificar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(input_nombre_dueno.value);
        console.log(lista_nacionalidades.value);
        console.log(input_nombre_parqueo.value);
        console.log(lista_provincia.value);
        console.log(lista_canton.value);
        console.log(lista_distrito.value);
        console.log(input_permiso.value);
        console.log(input_email.value);
        console.log(input_identificacion.value);
        console.log(checkbox_centro_com.value);
        console.log(input_direccion.value);
        console.log(hora_apertura.value);
        console.log(hora_cierre.value);
        console.log(input_fecha_apertura.value);
        console.log(parqueo_pics.value);
        Swal.fire({
            'title': 'Datos modificados con éxito',
            'text': 'Sus datos se modificaron correctamente',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btn_modificar.addEventListener('click', obtener_datos_modificados);