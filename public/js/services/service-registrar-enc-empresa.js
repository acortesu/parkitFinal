"use strict";

const registrar_encargado_empresa = async(newEncEmp) => {
    await axios({
            method: "post",
            url: `http://localhost:3000/api/encargado-empresa/registrar/`,
            responseType: "json",
            data: newEncEmp,
        })
        .then((response) => {
            Swal.fire({
                title: "Registro realizado con éxito",
                text: "Sus datos se registraron correctamente",
                icon: "success",
            }).then(() => {
                console.log(response);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};