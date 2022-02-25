"use strict";

const input_email = document.querySelector("#txt-email-login");
const btn_enviar = document.querySelector("#btn-ingresar");
const txt_password = document.querySelector("#txt-contrasenna-login");

let limpiar = () => {
  txt_password.value = "";
  btn_enviar.value = "";
  input_email.value = "";
};

let validar = () => {
  let inputs_requeridos = document.querySelectorAll(
    "#registro-encargado-parqueo [required]"
  );
  let error = false;
  let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

  // VALIDAR INPUTS REQUERIDOS
  for (let i = 0; i < inputs_requeridos.length; i++) {
    if (inputs_requeridos[i].value == "") {
      inputs_requeridos[i].classList.add("input-error");
      error = true;
    } else {
      inputs_requeridos[i].classList.remove("input-error");
    }
  }

  // VALIDAR MAIL
  if (mailformat.test(input_email.value) == false) {
    input_email.classList.add("input-error");
    error = true;
  } else {
    input_email.classList.remove("input-error");
  }

  // VALIDAR PASSWORD
  if (txt_password.value != "") {
    txt_password.classList.remove("input-error");
  } else {
    txt_password.classList.add("input-error");
    error = true;
  }
  return error;
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
    const user = {
      correo: input_email.value,
      password: txt_password.value,
    };
    log_in(user);
  }
};

btn_enviar.addEventListener("click", obtener_datos);
