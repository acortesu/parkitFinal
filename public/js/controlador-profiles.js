"use strict";

// TARJETAS DE CREDITO

// llenar datos header
function updateHeaderData(nombre, apellido, numero_id, correo, user_photo) {
    const nombreDOM = document.querySelector("#profile-user-nombre");
    const numero_idDOM = document.querySelector("#profile-user-numero_id");
    const correoDOM = document.querySelector("#profile-user-correo");
    const photoDOM = document.querySelector('#profile-user-photo');
    nombreDOM.innerHTML = user_get_full_name(nombre, apellido);
    numero_idDOM.innerHTML = numero_id;
    correoDOM.innerHTML = correo;
    photoDOM.src = user_photo;
}

const returnCardElement = (numberType) => {
    let type;
    switch (numberType) {
        case "3":
            type = "amex";
            break;
        case "4":
            type = "visa";
            break;
        case "5":
            type = "mastercard";
            break;
    }

    return `<div class="card-type">
    <span class="fab fa-cc-${type}"></span>
  </div>`;
};

const returnCardEdit = () => {
    return `<div class="arrow-icon ">
    <span class="fas fa-arrow-circle-right" id="btn-modificar-tarjeta"></span>
  </div>`;
};

const listarTarjetas = async(userRef) => {
    // DOM elements
    const tableDOM = document.querySelector("#table-tarjetas tbody");
    // clear content
    tableDOM.innerHTML = "";
    // get datos
    let lista_tarjetas = await get_lista_tarjetas(userRef);

    lista_tarjetas.forEach((tarjeta) => {
        let row = tableDOM.insertRow();
        // primer columna iconos
        let numeroTarjetaString = String(tarjeta.numero);
        row.insertCell().innerHTML = returnCardElement(
            numeroTarjetaString.charAt(0)
        );
        row.insertCell().innerHTML = tarjeta.numero;
        row.insertCell().innerHTML = returnCardEdit();
    });
};

// cuando se carga la pagina
window.onload = function init() {
    // init nav
    initNavController();
    // get user
    const activeUser = session_get_user();
    updateHeaderData(
        activeUser.nombre,
        activeUser.apellido,
        activeUser.numero_id,
        activeUser.correo,
        activeUser.user_photo,
    );
    
    if (activeUser.tipo_user == "admin") {
        adminActions();
    }
    // Este código solo se ejecuta para el usuario tipo regular
    if (activeUser.tipo_user == "regular") {
        listarTarjetas(activeUser._id);
    }

};

// // LISTAR EMPRESAS

// // llenar datos header
// function updateHeaderData(nombre, razon_social, estado) {
//     const nombreDOM = document.querySelector("#profile-user-nombre");
//     const numero_idDOM = document.querySelector("#profile-user-numero_id");
//     const correoDOM = document.querySelector("#profile-user-correo");
//     nombreDOM.innerHTML = user_get_full_name(nombre, apellido);
//     numero_idDOM.innerHTML = numero_id;
//     correoDOM.innerHTML = correo;
// }

// const returnCardElement = (numberType) => {
//     let type;
//     switch (numberType) {
//         case "3":
//             type = "amex";
//             break;
//         case "4":
//             type = "visa";
//             break;
//         case "5":
//             type = "mastercard";
//             break;
//     }

//     return `<div class="card-type">
//     <span class="fab fa-cc-${type}"></span>
//   </div>`;
// };

// const returnCardEdit = () => {
//     return `<div class="arrow-icon ">
//     <span class="fas fa-arrow-circle-right" id="btn-modificar-tarjeta"></span>
//   </div>`;
// };

// const listarTarjetas = async(userRef) => {
//     // DOM elements
//     const tableDOM = document.querySelector("#table-tarjetas tbody");
//     // clear content
//     tableDOM.innerHTML = "";
//     // get datos
//     let lista_tarjetas = await get_lista_tarjetas(userRef);

//     lista_tarjetas.forEach((tarjeta) => {
//         let row = tableDOM.insertRow();
//         // primer columna iconos
//         let numeroTarjetaString = String(tarjeta.numero);
//         row.insertCell().innerHTML = returnCardElement(
//             numeroTarjetaString.charAt(0)
//         );
//         row.insertCell().innerHTML = tarjeta.numero;
//         row.insertCell().innerHTML = returnCardEdit();
//     });
// };

// // cuando se carga la pagina
// window.onload = function init() {
//     // init nav
//     initNavController();
//     // get user
//     const activeUser = session_get_user();
//     updateHeaderData(
//         activeUser.nombre,
//         activeUser.apellido,
//         activeUser.numero_id,
//         activeUser.correo
//     );

//     // Este código solo se ejecuta para el usuario tipo regular
//     if (activeUser.tipo_user == "regular") {
//         listarTarjetas(activeUser._id);
//     }
// };