"use strict";

// GET PARQUEOS PENDIENTES
const get_parqueos_pendientes = async() => {
    let parqueoFromDB;
    await axios({
            method: "get",
            url: `http://localhost:3000/api/listar-parqueos-pendientes`,
            response: "json",
        })
        .then((response) => {
            if (response.data.resultado == false) {
                alert("usuario o contraseña incorrectos");
            } else {
                parqueoFromDB = response.data.lista_parqueos_bd;
            }
        })
        .catch((error) => {});
    return parqueoFromDB;
};

const set_aprobar_parqueo = async(
    parqueo_id,
    email,
    propietario,
    nombre_parqueo
) => {
    let response;
    await axios({
            method: "post",
            url: `http://localhost:3000/api/aceptar-parqueo`,
            response: "json",
            data: {
                _id: parqueo_id,
                email: email,
                nombre_propietario: propietario,
                nombre_parqueo: nombre_parqueo,
            },
        })
        .then((response) => {
            if (response.data.resultado == false) {
                response = false;
            } else {
                console.log(response);
                response = true;
            }
        })
        .catch((error) => {});
    return response;
};

// GET PARQUEO
const get_parqueo = async(parqueoId) => {
    let parqueoFromDB;
    await axios({
            method: "get",
            url: `http://localhost:3000/api/buscar-parqueo-id`,
            response: "json",
            params: { _id: parqueoId },
        })
        .then((response) => {
            if (response.data.resultado == false) {
                alert("usuario o contraseña incorrectos");
            } else {
                parqueoFromDB = response.data.parqueo_bd;
            }
        })
        .catch((error) => {});
    return parqueoFromDB;
};

const modificar_parqueo = async(newParqueo) => {
    let response;
    await axios({
            method: "post",
            url: `http://localhost:3000/api/modificar-parqueo`,
            response: "json",
            data: newParqueo,

        })
        .then((response) => {
            if (response.data.resultado == false) {
                response = false;
            } else {
                response = true;
            }
        })
        .catch((error) => {
            response = false;
        });
    return response;
};



const actualizar_tarifas_parqueos = async(newDataParqueo, id_parqueo) => {
    let response;
    await axios({
            method: "put",
            url: `http://localhost:3000/api/actualizar-tarifas-parqueo`,
            response: "json",
            data: {...newDataParqueo, id_parqueo },

        })
        .then((response) => {
            if (response.data.resultado == false) {
                response = false;
            } else {
                response = true;
            }
        })
        .catch((error) => {
            response = false;
        });
    return response;
};




// GET PARQUEOS ACTIVOS
const get_parqueos_activos = async() => {
    let parqueoFromDB;
    await axios({
            method: "get",
            url: `http://localhost:3000/api/listar-parqueos-activos`,
            response: "json",
        })
        .then((response) => {
            if (response.data.resultado == false) {
                alert("error al listar parqueos");
            } else {
                parqueoFromDB = response.data.lista_parqueos_bd;
            }
        })
        .catch((error) => {});
    return parqueoFromDB;
};