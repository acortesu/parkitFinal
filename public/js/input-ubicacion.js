'use strict';

// 
const provincias = { "1": "San José", "2": "Alajuela", "3": "Cartago", "4": "Heredia", "5": "Guanacaste", "6": "Puntarenas", "7": "Limón" };

const input_provincia = document.querySelector("#slc-provincia");
const input_canton = document.querySelector("#slc-canton");
const input_distrito = document.querySelector("#slc-distrito");

const get_cantones = (provincia) => {
    axios.get(`https://ubicaciones.paginasweb.cr/provincia/${provincia}/cantones.json`)
        .then(function(response) {
            // handle success
            return response.data;
        })
}

// EVENTO ON CHANGE DE PROVINCIA
input_provincia.onchange = function(event) {
    console.log(event.target.value)
    const cantones = get_cantones(event.target.value);
    console.log(cantones);

}