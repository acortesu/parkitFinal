"use strict";

const registrar_tarjeta = async(
    pnombre_completo,
    pnumero,
    pfecha_vencimiento,
    pcodigo,
    pestado,
    puser_id
) => {
    await axios({
            method: "post",
            url: "http://localhost:3000/api/tarjeta/registrar",
            responseType: "json",
            data: {
                nombre_completo: pnombre_completo,
                numero: pnumero,
                fecha_vencimiento: pfecha_vencimiento,
                codigo: pcodigo,
                estado: pestado,
                user_ref: puser_id,
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

const get_lista_tarjetas = async(user_ref) => {
    let lista_tarjetas;
    await axios({
            method: "post",
            url: "http://localhost:3000/api/listar-tarjetas",
            responseType: "json",
            data: {
                user_ref: user_ref,
            },
        })
        .then((response) => {
            lista_tarjetas = response.data.lista_cards_from_bd;
        })
        .catch((error) => {
            console.log(error);
        });
    return lista_tarjetas;
};