"use strict";

const registrar_parqueo_solicitud = async (
  pnombre_propietario,
  pnombre_parqueo,
  ptipo_id,
  pnumero_id,
  pprovincia,
  pcanton,
  pdistrito,
  ppermiso,
  pemail,
  pcentro_comercial
) => {
  await axios({
    method: "post",
    url: "http://localhost:3000/api/parqueo/registrar",
    responseType: "json",
    data: {
      nombre_propietario: pnombre_propietario,
      nombre_parqueo: pnombre_parqueo,
      tipo_id: ptipo_id,
      numero_id: pnumero_id,
      provincia: pprovincia,
      canton: pcanton,
      distrito: pdistrito,
      permiso: ppermiso,
      email: pemail,
      centro_comercial: pcentro_comercial,
      estado: "pendiente",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      Î;
      console.log(error);
    });
};
