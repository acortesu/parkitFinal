'use strict';

const btn_enviar = document.querySelector("#btn-send");
const txt_password = document.querySelector('#txtContrasena');
const txt_password_check = document.querySelector('#txtConfirmacion');

let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#res-contrasena [required]');
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

    // VALIDAR PASSWORD
    if (txt_password.value == txt_password_check.value) {
        txt_password.classList.remove('input-error');
    } else {
        txt_password.classList.add('input-error');
        error = true;
    }

    return error;

};

let limpiar = () => {
    txt_password.value = '';
    txt_password_check.value = '';
}

let obtener_nuevo_pass = () => {
    let error = validar();

    if (error) {
        Swal.fire({
            'title': 'Su contraseña no coincide',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(txt_password.value);
        Swal.fire({
            'title': 'Contraseña actualizada con éxito',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btn_enviar.addEventListener('click', obtener_nuevo_pass);