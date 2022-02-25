'use strict';


// VALIDACIÓN MODIFICAR DATOS PARQUEO

// REPORTE 1 INGRESOS RECIBIDOS

const btn_rep_ingresos_recibidos = document.querySelector("#btn-ingresos-recibidos");
const dte_fecha_desde_rep1 = document.querySelector("#dte-desde_rep1");
const dte_fecha_hasta_rep1 = document.querySelector("#dte-hasta_rep1");

let validar_reporte_ingresos_recibidos = () => {
    let inputs_requeridos = document.querySelectorAll('#reporte-ingresos-recibidos [required]');
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

    // VALIDAR FECHA DESDE
    if (dte_fecha_desde_rep1.value > dte_fecha_hasta_rep1.value) {
        dte_fecha_desde_rep1.classList.remove('input-error');
    } else {
        dte_fecha_desde_rep1.classList.add('input-error');
        error = true;
    }

    // VALIDAR FECHA HASTA
    if (dte_fecha_hasta_rep1.value < dte_fecha_desde_rep1.value) {
        dte_fecha_hasta_rep1.classList.remove('input-error');
    } else {
        dte_fecha_hasta_rep1.classList.add('input-error');
        error = true;
    }

    return error;

};

let limpiar = () => {
    dte_fecha_desde_rep1.value = '';
    dte_fecha_hasta_rep1.value = '';
}

let obtener_reporte_ingresos = () => {
    let error = validar_reporte_ingresos_recibidos();

    if (error) {
        Swal.fire({
            'title': 'Error con las fechas',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(dte_fecha_desde_rep1.value);
        console.log(dte_fecha_hasta_rep1.value);
        Swal.fire({
            'title': 'Listado correcto',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btn_rep_ingresos_recibidos.addEventListener('click', obtener_reporte_ingresos);


// REPORTE 2 INGRESOS RECIBIDOS POR UN CLIENTE

const btn_rep_ingresos_cliente = document.querySelector("#btn-reporte-ingresos-cliente");
const txt_nombre_cliente_rep2 = document.querySelector('#txt-nombre-cliente_rep2');
const dte_fecha_desde_rep2 = document.querySelector("#dte-desde_rep2");
const dte_fecha_hasta_rep2 = document.querySelector("#dte-hasta_rep2");

let validar_reporte_ingresos_cliente = () => {
    let inputs_requeridos = document.querySelectorAll('#reporte-historial-ingresos-cliente [required]');
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

    // VALIDAR NOMBRE
    if (letters.test(txt_nombre_cliente_rep2.value) == false) {
        txt_nombre_cliente_rep2.classList.add('input-error');
        error = true;
    } else {
        txt_nombre_cliente_rep2.classList.remove('input-error');
    }

    // VALIDAR FECHA DESDE
    if (dte_fecha_desde_rep2.value > dte_fecha_hasta_rep2.value) {
        dte_fecha_desde_rep2.classList.remove('input-error');
    } else {
        dte_fecha_desde_re2.classList.add('input-error');
        error = true;
    }

    // VALIDAR FECHA HASTA
    if (dte_fecha_hasta_rep2.value < dte_fecha_desde_rep2.value) {
        dte_fecha_hasta_rep2.classList.remove('input-error');
    } else {
        dte_fecha_hasta_rep2.classList.add('input-error');
        error = true;
    }

    return error;

};


let obtener_reporte_ingresos_cliente = () => {
    let error = validar_reporte_ingresos_cliente();

    if (error) {
        Swal.fire({
            'title': 'Error con los datos',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(txt_nombre_cliente_rep2.value);
        console.log(dte_fecha_desde_rep2.value);
        console.log(dte_fecha_hasta_rep2.value);
        Swal.fire({
            'title': 'Listado correcto',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btn_rep_ingresos_cliente.addEventListener('click', obtener_reporte_ingresos_cliente);


// REPORTE 3 HISTORIAL INGRESOS RECIBIDOS POR UN CLIENTE

const btn_rep_historial_ingresos_cliente = document.querySelector("#btn-reporte-historial-ingresos");
const txt_nombre_cliente_rep3 = document.querySelector('#txt-nombre-cliente_rep3');
const dte_fecha_desde_rep3 = document.querySelector("#dte-desde_rep3");
const dte_fecha_hasta_rep3 = document.querySelector("#dte-hasta_rep3");

let validar_reporte_historial_ingresos_cliente = () => {
    let inputs_requeridos = document.querySelectorAll('#reporte-ingresos-cliente [required]');
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

    // VALIDAR NOMBRE
    if (letters.test(txt_nombre_cliente_rep3.value) == false) {
        txt_nombre_cliente_rep3.classList.add('input-error');
        error = true;
    } else {
        txt_nombre_cliente_rep3.classList.remove('input-error');
    }

    // VALIDAR FECHA DESDE
    if (dte_fecha_desde_rep3.value > dte_fecha_hasta_rep3.value) {
        dte_fecha_desde_rep3.classList.remove('input-error');
    } else {
        dte_fecha_desde_re3.classList.add('input-error');
        error = true;
    }

    // VALIDAR FECHA HASTA
    if (dte_fecha_hasta_rep3.value < dte_fecha_desde_rep3.value) {
        dte_fecha_hasta_rep3.classList.remove('input-error');
    } else {
        dte_fecha_hasta_rep3.classList.add('input-error');
        error = true;
    }

    return error;

};


let obtener_reporte_historial_ingresos_cliente = () => {
    let error = validar_reporte_historial_ingresos_cliente();

    if (error) {
        Swal.fire({
            'title': 'Error con los datos',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(txt_nombre_cliente_rep3.value);
        console.log(dte_fecha_desde_rep3.value);
        console.log(dte_fecha_hasta_rep3.value);
        Swal.fire({
            'title': 'Listado correcto',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btn_rep_historial_ingresos_cliente.addEventListener('click', obtener_reporte_historial_ingresos_cliente);