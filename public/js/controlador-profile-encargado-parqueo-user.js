'use strict';

// VALIDACIONES REGISTRAR CONVENIO

const btn_registrar_convenio = document.querySelector('#btn-registrar-convenio');

const lst_empresas = document.querySelector('#lst-empresas');
const txt_nombre_convenio = document.querySelector("#txt-nombre-convenio");
const rdo_activo_desactivo = document.querySelector('#rdo-activo');
const nbr_espacio_total = document.querySelector('#num-espacios-totales');
const dte_creacion_convenio = document.querySelector('#date-creacion');
const num_descuento_discapacitado = document.querySelector('#num-descuentos-discapacitados');
const num_espacio_discapacitado = document.querySelector('#num-espacios-discapacitados');
const num_descuento_carro = document.querySelector('#num-descuentos-carro');
const num_espacio_carro = document.querySelector('#num-espacios-carro');
const num_descuento_moto = document.querySelector('#num-descuentos-moto');
const num_espacio_moto = document.querySelector('#num-espacios-moto');
const num_descuento_bici = document.querySelector('#num-descuentos-bici');
const num_espacio_bici = document.querySelector('#num-espacios-bici');


let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#sct-enc-parqueo [required]');
    let error = false;
    let idnumber = /^[0-9]+$/;
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
    if (letters.test(txt_nombre_convenio.value) == false) {
        txt_nombre_convenio.classList.add('input-error');
        error = true;
    } else {
        txt_nombre_convenio.classList.remove('input-error');
    }

    // VALIDAR PORCENTAJE
    if (new Number(num_descuento_discapacitado.value) <= 100) {
        num_descuento_discapacitado.classList.remove('input-error');
        error = true;
    } else {
        num_descuento_discapacitado.classList.add('input-error');
    }

    if (new Number(num_descuento_carro.value) <= 100) {
        num_descuento_carro.classList.remove('input-error');
        error = true;
    } else {
        num_descuento_carro.classList.add('input-error');
    }

    if (new Number(num_descuento_moto.value) <= 100) {
        num_descuento_moto.classList.remove('input-error');
        error = true;
    } else {
        num_descuento_moto.classList.add('input-error');
    }

    if (new Number(num_descuento_bici.value) <= 100) {
        num_descuento_bici.classList.remove('input-error');
        error = true;
    } else {
        num_descuento_bici.classList.add('input-error');
    }

    // VALIDAR FECHA
    if (new Date(dte_creacion_convenio.value) > new Date()) {
        dte_creacion_convenio.classList.add('input-error');
        error = true;
    }

    // VALIDAR SUMA DE ESPACIOS CONTRA ESPACIO TOTAL
    if (calcular_suma_espacios(num_espacio_discapacitado.value, num_espacio_carro.value, num_espacio_moto.value, num_espacio_bici.value) == (new Number(nbr_espacio_total.value))) {
        nbr_espacio_total.classList.remove('input-error');
    } else {
        nbr_espacio_total.classList.add('input-error');
        error = true;
    }

    return error;

};


// FUNCION CALCULAR SUMA DE LOS ESPACIOS

const calcular_suma_espacios = (pnum_espacio_discapacitado, pnum_espacio_carro, pnum_espacio_moto, pnum_espacio_bici) => {

    let espacios_sumados = 0;

    espacios_sumados = new Number(pnum_espacio_bici) + new Number(pnum_espacio_moto) + new Number(pnum_espacio_carro) + new Number(pnum_espacio_discapacitado);


    return espacios_sumados;
};


let limpiar = () => {

    lst_empresas.value = '';
    txt_nombre_convenio.value = '';
    rdo_activo_desactivo.value = '';
    nbr_espacio_total.value = '';
    dte_creacion_convenio.value = '';
    num_descuento_discapacitado.value = '';
    num_espacio_discapacitado.value = '';
    num_descuento_carro.value = '';
    num_espacio_carro.value = '';
    num_descuento_moto.value = '';
    num_espacio_moto.value = '';
    num_descuento_bici.value = '';
    num_espacio_bici.value = '';
}

let obtener_datos = () => {
    let error = validar();

    if (error) {
        Swal.fire({
            'title': 'Datos incorrectos',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {

        let empresa = lst_empresas.value;
        let nombre_convenio = rdo_activo_desactivo.value;
        let estado = txt_nombre_convenio.value;
        let espacio_total = nbr_espacio_total.value;
        let fecha_creacion = dte_creacion_convenio.value;
        let num_descuento_discapacitado = num_descuento_discapacitado.value;
        let num_espacios_discapacitado = num_espacio_discapacitado.value;
        let num_descuento_carro = num_descuento_carro.value;
        let num_espacios_carro = num_espacio_carro.value;
        let num_descuento_moto = num_descuento_moto.value;
        let num_espacios_moto = num_espacio_moto.value;
        let num_descuento_bici = num_descuento_bici.value;
        let num_espacios_bici = num_espacio_bici.value;

        registrar_convenio(empresa, nombre_convenio, estado, espacio_total, fecha_creacion, num_descuento_discapacitado, num_espacios_discapacitado, num_descuento_carro, num_espacios_carro, num_descuento_moto, num_espacios_moto, num_descuento_bici, num_espacios_bici);

        Swal.fire({
            'title': 'Convenio registrado correctamente',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btn_registrar_convenio.addEventListener('click', obtener_datos);


// VALIDACIONES MODIFICAR CONVENIOS

const btn_modificar_convenio = document.querySelector('#btn-modificar-convenio');


let validar_convenio_modificado = () => {
    let inputs_requeridos = document.querySelectorAll('#modal-modificar-convenios [required]');
    let error = false;
    let idnumber = /^[0-9]+$/;
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
    if (letters.test(txt_nombre_convenio.value) == false) {
        txt_nombre_convenio.classList.add('input-error');
        error = true;
    } else {
        txt_nombre_convenio.classList.remove('input-error');
    }

    // VALIDAR PORCENTAJE
    if (new Number(num_descuento_discapacitado.value) <= 100) {
        num_descuento_discapacitado.classList.remove('input-error');
        error = true;
    } else {
        num_descuento_discapacitado.classList.add('input-error');
    }

    if (new Number(num_descuento_carro.value) <= 100) {
        num_descuento_carro.classList.remove('input-error');
        error = true;
    } else {
        num_descuento_carro.classList.add('input-error');
    }

    if (new Number(num_descuento_moto.value) <= 100) {
        num_descuento_moto.classList.remove('input-error');
        error = true;
    } else {
        num_descuento_moto.classList.add('input-error');
    }

    if (new Number(num_descuento_bici.value) <= 100) {
        num_descuento_bici.classList.remove('input-error');
        error = true;
    } else {
        num_descuento_bici.classList.add('input-error');
    }

    // VALIDAR FECHA
    if (new Date(dte_creacion_convenio.value) > new Date()) {
        dte_creacion_convenio.classList.add('input-error');
        error = true;
    }

    // VALIDAR SUMA DE ESPACIOS CONTRA ESPACIO TOTAL
    if (calcular_suma_espacios(num_espacio_discapacitado.value, num_espacio_carro.value, num_espacio_moto.value, num_espacio_bici.value) == (new Number(nbr_espacio_total.value))) {
        nbr_espacio_total.classList.remove('input-error');
    } else {
        nbr_espacio_total.classList.add('input-error');
        error = true;
    }

    return error;

};


let obtener_datos_modificar_convenio = () => {
    let error = validar_convenio_modificado();

    if (error) {
        Swal.fire({
            'title': 'Datos incorrectos',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {

        console.log(lst_empresas.value);
        console.log(rdo_activo_desactivo.value);
        console.log(txt_nombre_convenio.value);
        console.log(nbr_espacio_total.value);
        console.log(dte_creacion_convenio.value);
        console.log(num_descuento_discapacitado.value);
        console.log(num_espacio_discapacitado.value);
        console.log(num_descuento_carro.value);
        console.log(num_espacio_carro.value);
        console.log(num_descuento_moto.value);
        console.log(num_espacio_moto.value);
        console.log(num_descuento_bici.value);
        console.log(num_espacio_bici.value);
        Swal.fire({
            'title': 'Convenio modificado correctamente',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btn_modificar_convenio.addEventListener('click', obtener_datos_modificar_convenio);


// REGISTRAR TARIFAS Y ESPACIOS
// PENDIENTE LIGAR A TIPOS DE CAMBIOS PARA EUROS Y DOLARES


const btn_registrar_espacio_tarifa = document.querySelector('#btn-registrar-esp_tar');

const num_registro_espacio_discapacitados = document.querySelector('#num-espacios-discapacitados');
const num_registro_espacio_carros = document.querySelector('#num-espacios-carros');
const num_registro_espacio_motos = document.querySelector('#num-espacios-motos');
const num_registro_espacio_bicis = document.querySelector('#num-espacios-bicis');
const num_registro_tarifa_discapacitados = document.querySelector('#num-tarifa-discapacitados');
const num_registro_tarifa_carros = document.querySelector('#num-tarifa-carros');
const num_registro_tarifa_motos = document.querySelector('#num-tarifa-motos');
const num_registro_tarifa_bicis = document.querySelector('#num-tarifa-bicis');

let obtener_datos_registrar_tarifas_espacios = () => {

    const activeUser = session_get_user();

    const newDataParqueo = {

        numero_esp_discapacitados: new Number(num_registro_espacio_discapacitados.value),
        numero_esp_carros: new Number(num_registro_espacio_carros.value),
        numero_esp_motos: new Number(num_registro_espacio_motos.value),
        numero_esp_bicis: new Number(num_registro_espacio_bicis.value),
        tarifa_discapacitados: new Number(num_registro_tarifa_discapacitados.value),
        tarifa_carros: new Number(num_registro_tarifa_carros.value),
        tarifa_motos: new Number(num_registro_tarifa_motos.value),
        tarifa_bicis: new Number(num_registro_tarifa_bicis.value),
    }
    actualizar_tarifas_parqueos(newDataParqueo, activeUser.id_parqueo);
};

btn_registrar_espacio_tarifa.addEventListener('click', obtener_datos_registrar_tarifas_espacios);


// MODIFICAR TARIFAS Y ESPACIOS

const btn_modificar_espacio_tarifa = document.querySelector('#btn-modificar-esp_tar');

let obtener_datos_modificar_tarifas_espacios = () => {

    console.log(num_registro_espacio_discapacitados.value);
    console.log(num_registro_espacio_carros.value);
    console.log(num_registro_espacio_motos.value);
    console.log(num_registro_espacio_bicis.value);
    console.log(num_registro_tarifa_discapacitados.value);
    console.log(num_registro_tarifa_carros.value);
    console.log(num_registro_tarifa_motos.value);
    console.log(num_registro_tarifa_bicis.value);

    Swal.fire({
        'title': 'Modificaciones de espacios y tarifas realizado correctamente',
        'icon': 'success'
    })
};

btn_modificar_espacio_tarifa.addEventListener('click', obtener_datos_modificar_tarifas_espacios);



// VALIDAR MODIFICAR DATOS ENCARGADO DE PARQUEO USER

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