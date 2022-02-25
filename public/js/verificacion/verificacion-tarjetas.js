// VALIDAR REGISTRAR TARJETA

const btn_registrar_card = document.querySelector('#btn-registrar-card');
const txt_nombre_titular = document.querySelector("#nombre_titular");
const num_card_number = document.querySelector("#num_card");
const dte_fecha_vencimiento = document.querySelector("#date-fecha-vencimiento");
const num_cod_seguridad = document.querySelector("#num-cod-seguridad");
const estado = "Activo";

let validar_registrar_tarjeta = () => {
    let inputs_requeridos = document.querySelectorAll('#modal-registrar_tarjeta [required]');
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
    if (letters.test(txt_nombre_titular.value) == false) {
        txt_nombre_titular.classList.add('input-error');
        error = true;
    } else {
        txt_nombre_titular.classList.remove('input-error');
    }

    // VALIDAR FECHA DE VENCIMIENTO
    if (new Date(dte_fecha_vencimiento.value) < new Date()) {
        dte_fecha_vencimiento.classList.add('input-error');
        error = true;
    }


    //CVV codes are a 3-digit number for Visa, Mastercard, and Discover cards, and a 4-digit number for Amex.

    // Visa cards – Begin with a 4 and have 16 digits. 
    // Mastercard cards – Begin with a 5 and has 16 digits. 
    // American Express cards – Begin with a 3 and has 15 digits.

    // VALIDAR AMEX, VISA Y MASTERCARD 


    if (num_card_number.value.charAt(0) == 4 || num_card_number.value.charAt(0) == 5) {
        if (num_card_number.value.length == 16) {
            if (num_cod_seguridad.value.length == 3) {
                num_cod_seguridad.classList.remove('input-error');
                num_card_number.classList.remove('input-error');
            } else {
                num_cod_seguridad.classList.add('input-error');
                error = true;
            }
        } else {
            num_card_number.classList.add('input-error');
            error = true;
        }
    } else if (num_card_number.value.charAt(0) == 3) {
        if (num_card_number.value.length == 15) {
            if (num_cod_seguridad.value.length == 4) {
                num_cod_seguridad.classList.remove('input-error');
                num_card_number.classList.remove('input-error');
            } else {
                num_cod_seguridad.classList.add('input-error');
                error = true;
            }
        } else {
            num_card_number.classList.add('input-error');
            error = true;
        }
    } else {
        num_card_number.classList.add('input-error');
        error = true;
    }

    return error;

};

let limpiar_registrar_tarjeta = () => {
    txt_nombre_titular.value = '';
    num_card_number.value = '';
    dte_fecha_vencimiento.value = '';
    num_cod_seguridad.value = '';

};

let obtener_datos_tarjeta_registrada = () => {
    let error = validar_registrar_tarjeta();

    if (error) {
        Swal.fire({
            'title': 'Datos incorrectos',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {

        const activeUser = session_get_user();

        let nombre_completo = txt_nombre_titular.value;
        let numero = num_card_number.value;
        let fecha_vencimiento = dte_fecha_vencimiento.value;
        let codigo = num_cod_seguridad.value;
        let estado = 'Activo';
        let user_id = activeUser._id;

        registrar_tarjeta(nombre_completo, numero, fecha_vencimiento, codigo, estado, user_id);

        Swal.fire({
            'title': 'Registro correcto',
            'icon': 'success'
        }).then(() => {
            // update del UI
            const activeUser = session_get_user();
            listarTarjetas(activeUser._id);
            limpiar_registrar_tarjeta();
        });
    }
};

btn_registrar_card.addEventListener('click', obtener_datos_tarjeta_registrada);


// VALIDAR MODIFICAR TARJETA

const btn_modificar_card = document.querySelector('#btn-modificar-tarjeta');
const txt_nombre_titular_modif = document.querySelector("#nombre_titular_modif");
const num_card_number_modif = document.querySelector("#num_card_modif");
const rdio_estado_modif = document.querySelector('#rdio_estado_modif')
const dte_fecha_vencimiento_modif = document.querySelector("#date-fecha-vencimiento_modif");
const num_cod_seguridad_modif = document.querySelector("#num-cod-seguridad_modif");

let validar_modificar_tarjeta = () => {
    let inputs_requeridos = document.querySelectorAll('#modal-modificar_tarjeta [required]');
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
    if (letters.test(txt_nombre_titular_modif.value) == false) {
        txt_nombre_titular_modif.classList.add('input-error');
        error = true;
    } else {
        txt_nombre_titular_modif.classList.remove('input-error');
    }

    // VALIDAR FECHA DESDE
    if (new Date(dte_fecha_vencimiento_modif.value) > new Date()) {
        dte_fecha_vencimiento_modif.classList.add('input-error');
        error = true;
    }


    //CVV codes are a 3-digit number for Visa, Mastercard, and Discover cards, and a 4-digit number for Amex.

    // Visa cards – Begin with a 4 and have 16 digits. 
    // Mastercard cards – Begin with a 5 and has 16 digits. 
    // American Express cards – Begin with a 3 and has 15 digits.

    // VALIDAR AMEX, VISA Y MASTERCARD 


    if (num_card_number_modif.value.charAt(0) == 4 || num_card_number_modif.value.charAt(0) == 5) {
        if (num_card_number_modif.value.length == 16) {
            if (num_cod_seguridad_modif.value.length == 3) {
                num_cod_seguridad_modif.classList.remove('input-error');
                num_card_number_modif.classList.remove('input-error');
            } else {
                num_cod_seguridad_modif.classList.add('input-error');
                error = true;
            }
        } else {
            num_card_number_modif.classList.add('input-error');
            error = true;
        }
    } else if (num_card_number_modif.value.charAt(0) == 3) {
        if (num_card_number_modif.value.length == 15) {
            if (num_cod_seguridad_modif.value.length == 4) {
                num_cod_seguridad_modif.classList.remove('input-error');
                num_card_number_modif.classList.remove('input-error');
            } else {
                num_cod_seguridad_modif.classList.add('input-error');
                error = true;
            }
        } else {
            num_card_number_modif.classList.add('input-error');
            error = true;
        }
    } else {
        num_card_number_modif.classList.add('input-error');
        error = true;
    }

    return error;

};

let limpiar_modificar_tarjeta = () => {
    txt_nombre_titular_modif.value = '';
    num_card_number_modif.value = '';
    dte_fecha_vencimiento_modif.value = '';
    num_cod_seguridad_modif.value = '';
    rdio_estado_modif.value = "";

};

let obtener_datos_tarjeta_modificada = () => {
    let error = validar_modificar_tarjeta();

    if (error) {
        Swal.fire({
            'title': 'Datos incorrectos',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(txt_nombre_titular_modif.value);
        console.log(num_card_number_modif.value);
        console.log(dte_fecha_vencimiento_modif.value);
        console.log(num_cod_seguridad_modif.value);
        console.log(rdio_estado_modif.value);
        Swal.fire({
            'title': 'Registro correcto',
            'icon': 'success'
        }).then(() => {
            limpiar_modificar_tarjeta();
        });
    }
};

btn_modificar_card.addEventListener('click', obtener_datos_tarjeta_modificada);