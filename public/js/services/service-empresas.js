'use strict';

const registro_empresa = async(pnombre, prazon_social, pestado, plogo) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/empresa/registrar',
            responseType: 'json',
            data: {
                'nombre': pnombre,
                'razon_social': prazon_social,
                'estado': pestado,
                'logo': plogo
            }
        })
        .then(response => {
            console.log(response);

        })
        .catch(error => {
            console.log(error);
        });
};

const get_lista_empresas = async() => {
    let lista_empresas;
    await axios({
            method: "get",
            url: "http://localhost:3000/api/listar-empresas",
            responseType: "json",

        })
        .then((response) => {
            lista_empresas = response.data.lista_empresas_bd;
        })
        .catch((error) => {
            console.log(error);
        });
    return lista_empresas;
};