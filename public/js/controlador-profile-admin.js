'use strict';

// VALIDACIONES MODIFICAR DATOS IFAM

const btn_actualizar_ifam = document.querySelector("#btn-actualizar-ifam");
const btn_actualizar_tc_porcentaje = document.querySelector("#btn-actualizar-tipo-cambio-porcentaje");
const txt_nombre_ifam = document.querySelector("#txt-nombre-IFAM");
const txt_tel_ifam = document.querySelector("#txt_tel");
const txt_email_ifam = document.querySelector('#txt-email');
const txt_fb_ifam = document.querySelector('#txt-url-fb');
const txt_ig_ifam = document.querySelector('#txt-url-ig');
const txt_web_ifam = document.querySelector('#txt-url-web');
const fle_logo_ifam = document.querySelector('#file-logo');
const tipo_cambio_dolar = document.querySelector('#tipo-cambio-dolar');
const tipo_cambio_euro = document.querySelector('#tipo-cambio-euro');
const porcentaje_ifam = document.querySelector('#porcentaje_ifam');



let validar_datos_ifam = () => {
    let error = false;
    let letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

    // VALIDAR NOMBRE IFAM
    if (letters.test(txt_nombre_ifam.value) == false) {
        txt_nombre_ifam.classList.add('input-error');
        error = true;
    } else {
        txt_nombre_ifam.classList.remove('input-error');
    }

    // VALIDAR MAIL
    if (mailformat.test(txt_email_ifam.value) == false) {
        txt_email_ifam.classList.add('input-error');
        error = true;
    } else {
        txt_email_ifam.classList.remove('input-error');
    }

    return error;

};


let obtener_datos_modificados_ifam = () => {
    let error = validar_datos_ifam();

    if (error) {
        Swal.fire({
            'title': 'Datos incorrectos',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        let txt_nombre_ifam = txt_nombre_ifam.value;
        let txt_tel_ifam = txt_tel_ifam.value;
        let txt_email_ifam = txt_email_ifam.value;
        let txt_fb_ifam = txt_fb_ifam.value;
        let txt_ig_ifam = txt_ig_ifam.value;
        let txt_web_ifam = txt_web_ifam.value;
        let fle_logo_ifam = fle_logo_ifam.value;

        actualizar_datos_ifam(txt_nombre_ifam, txt_tel_ifam, txt_email_ifam, txt_fb_ifam, txt_ig_ifam, txt_web_ifam, fle_logo_ifam);

        Swal.fire({
            'title': 'Modificación realizada',
            'icon': 'success'
        });
    }
};

btn_actualizar_ifam.addEventListener('click', obtener_datos_modificados_ifam);

// VALIDACIONES MODIFICAR DATOS TIPO DE CAMBIO Y PORCENTAJE

let validar_datos_tipo_cambio_porcentaje = () => {
    let error = false;

    // VALIDAR PORCENTAJE
    if (porcentaje_ifam.value > 100) {
        porcentaje_ifam.classList.add('input-error');
        error = true;
    } else {
        porcentaje_ifam.classList.remove('input-error');
    }

    return error;

};


let obtener_datos_modificados_tipo_cambio_porcentaje = () => {
    let error = validar_datos_tipo_cambio_porcentaje();

    if (error) {
        Swal.fire({
            'title': 'Datos incorrectos',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        let tipo_cambio_dolar = tipo_cambio_dolar.value;
        let tipo_cambio_euro = tipo_cambio_euro.value;
        let porcentaje_ifam = porcentaje_ifam.value;

        actualizar_datos_tipo_cambio_porcentaje(tipo_cambio_dolar, tipo_cambio_euro, porcentaje_ifam);

        Swal.fire({
            'title': 'Modificación realizada',
            'icon': 'success'
        });
    }
};

btn_actualizar_tc_porcentaje.addEventListener('click', obtener_datos_modificados_tipo_cambio_porcentaje);


// VALIDACIONES REGISTRO DE ENCARGADO DE EMPRESA

const btn_registrar_enc_emp = document.querySelector("#btn_registrar_enc_emp");
const input_nombre = document.querySelector("#txt-nombre_enc_emp");
const input_segundo_nombre = document.querySelector("#txt-segundo_nombre_enc_emp");
const input_primer_apellido = document.querySelector("#txt-primer_apellido_enc_emp");
const input_segundo_apellido = document.querySelector("#txt-segundo_apellido_enc_emp");
const input_tipo_id = document.querySelector("#lst-tipo_id");
const fecha_nacimiento = document.querySelector("#date-nacimiento_enc_emp");
const input_identificacion = document.querySelector("#txt-identificacion_enc_emp");
const input_correo_enc_emp = document.querySelector("#txt-correo");
const txt_password = document.querySelector('#txtContrasenna_enc_emp');
const txt_password_check = document.querySelector('#txtConfirmacion_enc_emp');
const foto_enc_emp = "https://res.cloudinary.com/alocortesu/image/upload/v1597975674/frdmba5ootrs1lhs3bnw.png";
const input_fecha_contratacion = document.querySelector('#date_contratacion_enc_emp');
const input_puesto_enc_emp = document.querySelector("#txt_puesto_enc_emp");
const parqueo_asociado = document.querySelector("#lst-parqueos");

let validar_registro_enc_emp = () => {
    let inputs_requeridos = document.querySelectorAll('#rgt-empleados [required]');
    let error = false;
    let letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;


    // VALIDAR INPUTS REQUERIDOS
    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('input-error');
        }
    }

    // VALIDAR PRIMER NOMBRE 
    if (letters.test(input_nombre.value) == false) {
        input_nombre.classList.add('input-error');
        error = true;
    } else {
        input_nombre.classList.remove('input-error');
    }

    // VALIDAR SEGUNDO NOMBRE ENCARGADO
    if (
        input_segundo_nombre.value != "" &&
        letters.test(input_segundo_nombre.value) == false) {
        input_segundo_nombre.classList.add('input-error');
        error = true;
    } else {
        input_segundo_nombre.classList.remove('input-error');
    }

    // VALIDAR PRIMER APELLIDO ENCARGADO
    if (letters.test(input_primer_apellido.value) == false) {
        input_primer_apellido.classList.add('input-error');
        error = true;
    } else {
        input_primer_apellido.classList.remove('input-error');
    }

    // VALIDAR SEGUNDO APELLIDO ENCARGADO
    if (
        input_segundo_apellido.value != "" &&
        letters.test(input_segundo_apellido.value) == false) {
        input_segundo_apellido.classList.add('input-error');
        error = true;
    } else {
        input_segundo_apellido.classList.remove('input-error');
    }

    // VALIDAR PASSWORD
    if (
        txt_password.value != "" &&
        txt_password.value == txt_password_check.value
    ) {
        txt_password.classList.remove("input-error");
    } else {
        txt_password.classList.add("input-error");
        error = true;
    }

    // VALIDAR EDAD

    if (fecha_nacimiento.value == "" || calcular_edad(new Date(fecha_nacimiento.value)) < 18) {
        fecha_nacimiento.classList.add("input-error");
        error = true;
    } else {
        fecha_nacimiento.classList.remove("input-error");
    }


    // VALIDAR MAIL
    if (mailformat.test(input_correo_enc_emp.value) == false) {
        input_correo_enc_emp.classList.add('input-error');
        error = true;
    } else {
        input_correo_enc_emp.classList.remove('input-error');
    }


    return error;

};

// LIMPIAR CAMPOS

let limpiar_registro_enc_emp = () => {
    input_nombre.value = '';
    input_segundo_nombre.value = '';
    input_primer_apellido.value = '';
    input_segundo_apellido.value = '';
    input_tipo_id.value = '';
    fecha_nacimiento.value = '';
    input_identificacion.value = '';
    input_correo_enc_emp.value = '';
    txt_password.value = '';
    txt_password_check.value = '';
    foto_enc_emp.value = '';
    input_fecha_contratacion.value = '';
    input_puesto_enc_emp.value = '';
    parqueo_asociado.value = '';
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


let obtener_datos_registro_enc_emp = () => {
    let error = validar_registro_enc_emp();

    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron registrar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        const newEncEmp = {
            nombre: input_nombre.value,
            segundo_nombre: input_segundo_nombre.value,
            apellido: input_primer_apellido.value,
            segundo_apellido: input_segundo_apellido.value,
            tipo_id: input_tipo_id.value,
            numero_id: input_identificacion.value,
            fecha_nacimiento: fecha_nacimiento.value,
            correo: input_correo_enc_emp.value,
            password: txt_password.value,
            tipo_user: 'enc-empresa',
            user_photo: 'https://res.cloudinary.com/alocortesu/image/upload/v1597975674/frdmba5ootrs1lhs3bnw.png',
            fecha_contratacion: input_fecha_contratacion.value,
            puesto: input_puesto_enc_emp.value,
            id_parqueo: parqueo_asociado.value,
        }

        registrar_encargado_empresa(newEncEmp);

        Swal.fire({
            'title': 'Registro realizado con éxito',
            'text': 'Sus datos se registraron correctamente',
            'icon': 'success'
        }).then(() => {
            limpiar_registro_enc_emp();
        });
    }
};

btn_registrar_enc_emp.addEventListener('click', obtener_datos_registro_enc_emp);


// VALIDACIONES REGISTRO DE EMPRESA

const btn_registrar_empresa = document.querySelector("#btn_registrar_empresa");
const input_nombre_empresa = document.querySelector("#txt-nombre-empresa");
const input_razon_social = document.querySelector('#txt-razon-social');
const estado = 'Activo';
const logo_empresa = document.querySelector("#file-logo-empresa");


let validar_registro_empresa = () => {
    let inputs_requeridos = document.querySelectorAll('#rgt-empresas [required]');
    let error = false;
    let letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;


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
    if (letters.test(input_nombre_empresa.value) == false) {
        input_nombre_empresa.classList.add('input-error');
        error = true;
    } else {
        input_nombre_empresa.classList.remove('input-error');
    }

    // VALIDAR RAZÓN SOCIAL
    if (letters.test(input_razon_social.value) == false) {
        input_razon_social.classList.add('input-error');
        error = true;
    } else {
        input_razon_social.classList.remove('input-error');
    }

    return error;

};

// LIMPIAR CAMPOS

let limpiar_registro_empresa = () => {
    input_nombre_empresa.value = '';
    input_razon_social.value = '';
    logo_empresa.value = '';

}


let obtener_datos_registro_empresa = () => {
    let error = validar_registro_empresa();

    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron registrar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        let nombre = input_nombre_empresa.value;
        let razon_social = input_razon_social.value;
        let estado = 'Activo';
        let logo = logo_empresa.value;

        registro_empresa(nombre, razon_social, estado, logo);

        Swal.fire({
            'title': 'Registro realizado con éxito',
            'text': 'Sus datos se registraron correctamente',
            'icon': 'success'
        }).then(() => {
            limpiar_registro_empresa();
        });
    }
};

btn_registrar_empresa.addEventListener('click', obtener_datos_registro_empresa);