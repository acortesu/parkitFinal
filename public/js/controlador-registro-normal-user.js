"use strict";

const btn_enviar = document.querySelector("#btn-send");
const input_nombre_encargado = document.querySelector("#txt-nombre");
const input_segundo_nombre_encargado = document.querySelector(
    "#txt-segundo_nombre"
);
const input_primer_apellido_encargado = document.querySelector(
    "#txt-primer_apellido"
);
const input_segundo_apellido_encargado = document.querySelector(
    "#txt-segundo_apellido"
);
const lista_nacionalidades = document.querySelector("#lst-nacionalidades");
const fecha_nacimiento = document.querySelector("#date-nacimiento");
const input_identificacion = document.querySelector("#txt-identificacion");
const txt_password = document.querySelector("#txtContrasena");
const txt_password_check = document.querySelector("#txtConfirmacion");
const input_email = document.querySelector("#txt-email");

let validar = () => {
    let inputs_requeridos = document.querySelectorAll(
        "#registro-encargado-parqueo [required]"
    );
    let error = false;
    let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    let letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

    // VALIDAR INPUTS REQUERIDOS
    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == "") {
            inputs_requeridos[i].classList.add("input-error");
            error = true;
        } else {
            inputs_requeridos[i].classList.remove("input-error");
        }
    }

    // VALIDAR PRIMER NOMBRE ENCARGADO
    if (letters.test(input_nombre_encargado.value) == false) {
        input_nombre_encargado.classList.add("input-error");
        error = true;
    } else {
        input_nombre_encargado.classList.remove("input-error");
    }

    // VALIDAR MAIL
    if (mailformat.test(input_email.value) == false) {
        input_email.classList.add("input-error");
        error = true;
    } else {
        input_email.classList.remove("input-error");
    }

    // VALIDAR SEGUNDO NOMBRE ENCARGADO
    if (
        input_segundo_nombre_encargado.value != "" &&
        letters.test(input_segundo_nombre_encargado.value) == false
    ) {
        input_segundo_nombre_encargado.classList.add("input-error");
        error = true;
    } else {
        input_segundo_nombre_encargado.classList.remove("input-error");
    }

    // VALIDAR PRIMER APELLIDO ENCARGADO
    if (letters.test(input_primer_apellido_encargado.value) == false) {
        input_primer_apellido_encargado.classList.add("input-error");
        error = true;
    } else {
        input_primer_apellido_encargado.classList.remove("input-error");
    }

    // VALIDAR SEGUNDO APELLIDO ENCARGADO
    if (
        input_segundo_apellido_encargado.value != "" &&
        letters.test(input_segundo_apellido_encargado.value) == false
    ) {
        input_segundo_apellido_encargado.classList.add("input-error");
        error = true;
    } else {
        input_segundo_apellido_encargado.classList.remove("input-error");
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

    return error;
};

// LIMPIAR CAMPOS

let limpiar = () => {
    input_nombre_encargado.value = "";
    input_segundo_nombre_encargado.value = "";
    input_primer_apellido_encargado.value = "";
    input_segundo_apellido_encargado.value = "";
    lista_nacionalidades.value = "";
    fecha_nacimiento.value = "";
    input_identificacion.value = "";
    txt_password.value = "";
    txt_password_check.value = "";
};

// FUNCION CALCULAR EDAD

const calcular_edad = (pfecha_nacimiento) => {
    let fecha_actual = new Date();
    let edad = 0;

    edad = fecha_actual.getFullYear() - pfecha_nacimiento.getFullYear();

    if (fecha_actual.getMonth() < pfecha_nacimiento.getMonth()) {
        edad -= 1;
    } else {
        if (
            fecha_actual.getMonth() == pfecha_nacimiento.getMonth() &&
            fecha_actual.getUTCDate() < pfecha_nacimiento.getUTCDate()
        ) {
            edad -= 1;
        }
    }

    return edad;
};

let obtener_datos = () => {

    let error = validar();

    if (error) {
        Swal.fire({
            title: "Sus datos no se pudieron registrar",
            text: "Por favor revise los campos resaltados",
            icon: "warning",
        });
    } else {
        const newUser = {
            nombre: input_nombre_encargado.value,
            segundo_nombre: input_segundo_nombre_encargado.value,
            apellido: input_primer_apellido_encargado.value,
            segundo_apellido: input_segundo_apellido_encargado.value,
            tipo_id: lista_nacionalidades.value,
            numero_id: input_identificacion.value,
            fecha_nacimiento: fecha_nacimiento.value,
            correo: input_email.value,
            password: txt_password.value,
            tipo_user: 'regular',
            user_photo: getUserPhoto(),
        }
        registrar_normal_user(newUser);
    }
};

const getUserPhoto = () => document.querySelector("#user-photo").src;

btn_enviar.addEventListener("click", obtener_datos);