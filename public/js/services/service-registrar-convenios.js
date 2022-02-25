"use strict";

const registrar_convenio = async (
  pempresa,
  pnombre_convenio,
  pestado,
  pespacio_total,
  pfecha_creacion,
  pnum_descuento_discapacitado,
  pnum_espacios_discapacitado,
  pnum_descuento_carro,
  pnum_espacios_carro,
  pnum_descuento_moto,
  pnum_espacios_moto,
  pnum_descuento_bici,
  pnum_espacios_bici
) => {
  await axios({
    method: "post",
    url: "http://localhost:3000/api/convenio/registrar",
    responseType: "json",
    data: {
      nombre_completo: pnombre_completo,
      numero: pnumero,
      fecha_vencimiento: pfecha_vencimiento,
      codigo: pcodigo,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
