"use strict";

const select_card = document.getElementById("pago-reserva");
const btn_pagar = document.getElementById("btn-pagar");

let validar_pagos = () => {

    var value_card = select_card.options[select_card.selectedIndex].text;
    console.log(value_card);

    if (value_card === "Seleccione su tarjeta") {
        Swal.fire({
            'title': 'Ingrese su tarjeta',
            'icon': 'error'
        }).then(() => {
            console.log("error");
        });
    } else {
        Swal.fire({
            'title': 'Su pago fue realizado exitosamente',
            'icon': 'success'
        }).then(() => {
            console.log("success");
        });
    }

}

btn_pagar.addEventListener('click', validar_pagos);