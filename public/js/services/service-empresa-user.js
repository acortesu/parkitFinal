"use strict";

const registro_empresa_user = async(newEmpUser) => {
    let response;

    await axios({
            method: "post",
            url: `http://localhost:3000/api/empresa-user/registrar/`,
            responseType: "json",
            data: newEmpUser,
        })
        .then((response) => {
            response = true;
        })
        .catch((error) => {
            response = false;
        });

    return response;
};