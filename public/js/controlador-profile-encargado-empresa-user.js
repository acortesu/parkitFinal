'use strict';

// VALIDACIONES SECCIÓN MIS RESERVAS

const btn_mis_reservas = document.querySelector("#btn-send_reservas");
const fecha_desde = document.querySelector("#date-desde");
const fecha_hasta = document.querySelector("#date-hasta");

let validar_mis_reservas = () => {
    let inputs_requeridos = document.querySelectorAll('#sct-reservas [required]');
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

    // VALIDAR FECHA DESDE
    if (new Date(fecha_desde.value) >= new Date(fecha_hasta.value)) {
        fecha_desde.classList.add('input-error');
        error = true;
    }

    // VALIDAR FECHA HASTA
    if (new Date(fecha_hasta.value) <= new Date(fecha_desde.value)) {
        fecha_hasta.classList.add('input-error');
        error = true;
    }

    return error;

};

let limpiar_mis_reservas = () => {
    fecha_hasta.value = '';
    fecha_desde.value = '';
}

let obtener_datos_mis_reservas = () => {
    let error = validar_mis_reservas();

    if (error) {
        Swal.fire({
            'title': 'Fechas incorrectas',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(fecha_desde.value);
        console.log(fecha_hasta.value);
        Swal.fire({
            'title': 'Listado correcto',
            'icon': 'success'
        }).then(() => {
            limpiar_mis_reservas();
        });
    }
};

btn_mis_reservas.addEventListener('click', obtener_datos_mis_reservas);

// VALIDACIONES REGISTRAR EMPLEADO

const btn_registrar_empleado = document.querySelector("#btn_registrar_empleado");
const input_nombre_empleado = document.querySelector("#txt-nombre");
const input_segundo_nombre_empleado = document.querySelector("#txt-segundo_nombre");
const input_primer_apellido_empleado = document.querySelector("#txt-primer_apellido");
const input_segundo_apellido_empleado = document.querySelector("#txt-segundo_apellido");
const lista_nacionalidades = document.querySelector("#lst-nacionalidades");
const fecha_nacimiento = document.querySelector("#date-nacimiento");
const input_identificacion = document.querySelector("#txt-identificacion");
const fecha_contratacion = document.querySelector("#date_contratacion");
const input_puesto = document.querySelector("#txt_puesto");
const txt_password = document.querySelector('#txtContrasenna');
const txt_password_check = document.querySelector('#txtConfirmacion');
const correo_empleado = document.querySelector("#input-correo");
const foto_empleado = "https://res.cloudinary.com/alocortesu/image/upload/v1597975674/frdmba5ootrs1lhs3bnw.png";
const parqueo_asociado = document.querySelector('#lst-parqueos');

let validar_registrar_empleado = () => {
    let inputs_requeridos = document.querySelectorAll('#rgt-empleados [required]');
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

    // VALIDAR PRIMER NOMBRE
    if (letters.test(input_nombre_empleado.value) == false) {
        input_nombre_empleado.classList.add('input-error');
        error = true;
    } else {
        input_nombre_empleado.classList.remove('input-error');
    }

    // VALIDAR SEGUNDO NOMBRE
    if (
        input_segundo_nombre_empleado.value != "" &&
        letters.test(input_segundo_nombre_empleado.value) == false) {
        input_segundo_nombre_empleado.classList.add('input-error');
        error = true;
    } else {
        input_segundo_nombre_empleado.classList.remove('input-error');
    }

    // VALIDAR PRIMER APELLIDO
    if (letters.test(input_primer_apellido_empleado.value) == false) {
        input_primer_apellido_empleado.classList.add('input-error');
        error = true;
    } else {
        input_primer_apellido_empleado.classList.remove('input-error');
    }

    // VALIDAR SEGUNDO APELLIDO
    if (
        input_segundo_apellido_empleado.value != "" &&
        letters.test(input_segundo_apellido_empleado.value) == false) {
        input_segundo_apellido_empleado.classList.add('input-error');
        error = true;
    } else {
        input_segundo_apellido_empleado.classList.remove('input-error');
    }


    // VALIDAR PASSWORD
    if (
        txt_password.value != "" &&
        txt_password.value == txt_password_check.value) {
        txt_password.classList.remove('input-error');
    } else {
        txt_password.classList.add('input-error');
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

let limpiar_registrar_empleado = () => {
    input_nombre_empleado.value = '';
    input_segundo_nombre_empleado.value = '';
    input_primer_apellido_empleado.value = '';
    input_segundo_apellido_empleado.value = '';
    lista_nacionalidades.value = '';
    fecha_nacimiento.value = '';
    input_identificacion.value = '';
    fecha_contratacion.value = '';
    input_puesto.value = '';
    txt_password.value = '';
}

let obtener_datos_registrar_empleado = async() => {
    let error = validar_registrar_empleado();

    if (error) {
        Swal.fire({
            'title': 'Fechas incorrectas',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        const newEmpUser = {
            nombre: input_nombre_empleado.value,
            segundo_nombre: input_segundo_nombre_empleado.value,
            apellido: input_primer_apellido_empleado.value,
            segundo_apellido: input_segundo_apellido_empleado.value,
            tipo_id: lista_nacionalidades.value,
            numero_id: input_identificacion.value,
            fecha_nacimiento: fecha_nacimiento.value,
            correo: correo_empleado.value,
            password: txt_password.value,
            tipo_user: 'empresa-user',
            user_photo: 'https://res.cloudinary.com/alocortesu/image/upload/v1597975674/frdmba5ootrs1lhs3bnw.png',
            fecha_contratacion: fecha_contratacion.value,
            puesto: input_puesto.value,
            id_parqueo: parqueo_asociado.value,
        }

        const response = await registro_empresa_user(newEmpUser);
        if (response == true) {
            Swal.fire({
                'title': 'Listado correcto',
                'icon': 'success'
            }).then(() => {
                limpiar_registrar_empleado();
            });
        } else {

        }
    }
};

btn_registrar_empleado.addEventListener('click', obtener_datos_registrar_empleado);

// VALIDAR REGISTRAR TARJETA

const btn_registrar_card = document.querySelector('#btn-registrar-card');
const txt_nombre_titular = document.querySelector("#nombre_titular");
const num_card_number = document.querySelector("#num_card");
const dte_fecha_vencimiento = document.querySelector("#date-fecha-vencimiento");
const num_cod_seguridad = document.querySelector("#num-cod-seguridad");

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
        console.log(txt_nombre_titular.value);
        console.log(num_card_number.value);
        console.log(dte_fecha_vencimiento.value);
        console.log(num_cod_seguridad.value);
        Swal.fire({
            'title': 'Registro correcto',
            'icon': 'success'
        }).then(() => {
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