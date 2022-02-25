'use strict';


// VALIDAR MODIFICAR DATOS NORMAL USER

const btn_modificar_datos_empresa = document.querySelector("#btn-guardar");
const input_nombre = document.querySelector("#txt-nombre");
const razon_social = document.querySelector("#razon-social");


// const parqueo_pics = document.querySelector("#fotos_parqueo");

let validar_modificar_datos = () => {
    let inputs_requeridos = document.querySelectorAll('#modal-modificar_datos_empresas [required]');
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

    // VALIDAR  NOMBRE ENCARGADO
    if (letters.test(input_nombre.value) == false) {
        input_nombre.classList.add('input-error');
        error = true;
    } else {
        input_nombre.classList.remove('input-error');
    }

    return error;

}


// LIMPIAR CAMPOS

let limpiar_modificar_datos = () => {
    input_nombre.value = '';
    razon_social.value = '';
}


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
        console.log(razon_social.value);
        Swal.fire({
            'title': 'Datos modificados con éxito',
            'text': 'Sus datos se modificaron correctamente',
            'icon': 'success'
        }).then(() => {
            limpiar_modificar_datos();
        });
    }
};

btn_modificar_datos_empresa.addEventListener('click', obtener_nuevos_datos);