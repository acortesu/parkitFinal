"use strict";

// VALIDACIÓN SOLICITUD DE INGRESO PARQUEOS

const btn_enviar = document.querySelector("#btn-send");
const input_nombre_dueno = document.querySelector("#txt-nombre_dueno");
const lista_nacionalidades = document.querySelector("#lst-nacionalidades");
const input_nombre_parqueo = document.querySelector("#txt-nombre_parqueo");
const lista_provincia = document.querySelector("#lst-provincia");
const lista_canton = document.querySelector("#lst-canton");
const lista_distrito = document.querySelector("#lst-distrito");
const input_email = document.querySelector("#txt-email");
const input_identificacion = document.querySelector("#txt-identificacion");
const checkbox_centro_com = document.querySelector("#cbx-centro_comercial");

let validar_solicitud = () => {
  let inputs_requeridos = document.querySelectorAll(
    "#sign-in-parqueo [required]"
  );
  let error = false;
  let letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
  let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
  let idnumber = /^[0-9]+$/;

  // VALIDAR INPUTS REQUERIDOS
  for (let i = 0; i < inputs_requeridos.length; i++) {
    if (inputs_requeridos[i].value == "") {
      inputs_requeridos[i].classList.add("input-error");
      error = true;
    } else {
      inputs_requeridos[i].classList.remove("input-error");
    }
  }

  // VALIDAR NOMBRE DUEÑO
  if (letters.test(input_nombre_dueno.value) == false) {
    input_nombre_dueno.classList.add("input-error");
    error = true;
  } else {
    input_nombre_dueno.classList.remove("input-error");
  }

  // VALIDAR NOMBRE PARQUEO
  if (letters.test(input_nombre_parqueo.value) == false) {
    input_nombre_parqueo.classList.add("input-error");
    error = true;
  } else {
    input_nombre_parqueo.classList.remove("input-error");
  }

  // VALIDAR MAIL
  if (mailformat.test(input_email.value) == false) {
    input_email.classList.add("input-error");
    error = true;
  } else {
    input_email.classList.remove("input-error");
  }

  // VALIDAR IDENTIFICACIÓN
  if (idnumber.test(input_identificacion.value) == false) {
    input_identificacion.classList.add("input-error");
    error = true;
  } else {
    input_identificacion.classList.remove("input-error");
  }

  return error;

  // PENDIENTE VERIFICAR SI SE SUBIÓ EL PERMISO
};

let limpiar_solicitud = () => {
  input_nombre_dueno.value = "";
  lista_nacionalidades.value = "";
  input_nombre_parqueo.value = "";
  lista_provincia.value = "";
  lista_canton.value = "";
  lista_distrito.value = "";
  input_email.value = "";
  input_identificacion.value = "";
  checkbox_centro_com.value = "";
};

let obtener_datos_solicitud = () => {
  let error = validar_solicitud();

  if (error) {
    Swal.fire({
      title: "Sus datos no se pudieron registrar",
      text: "Por favor revise los campos resaltados",
      icon: "warning",
    });
  } else {
    let nombre_propietario = input_nombre_dueno.value;
    let nombre_parqueo = input_nombre_parqueo.value;
    let tipo_id = lista_nacionalidades.value;
    let numero_id = input_identificacion.value;
    let provincia = lista_provincia.value;
    let canton = lista_canton.value;
    let distrito = lista_distrito.value;
    let permiso = getUserPermiso();
    let email = input_email.value;
    let centro_comercial = checkbox_centro_com.value;

    registrar_parqueo_solicitud(
      nombre_propietario,
      nombre_parqueo,
      tipo_id,
      numero_id,
      provincia,
      canton,
      distrito,
      permiso,
      email,
      centro_comercial
    );

    Swal.fire({
      title: "Solicitud enviada con éxito",
      text: "Sus datos se registraron correctamente",
      icon: "success",
    }).then(() => {
      limpiar_solicitud();
    });
  }
};

const getUserPermiso = () => document.querySelector("#user-photo").src;

btn_enviar.addEventListener("click", obtener_datos_solicitud);
