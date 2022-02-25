"use strict";

const registrar_encargado_parqueo_user = async (newEncParUser) => {
  let result;
  await axios({
    method: "post",
    url: `http://localhost:3000/api/encargado-parqueo/registrar/`,
    responseType: "json",
    data: newEncParUser,
  })
    .then((response) => {
      result = true;
    })
    .catch((error) => {
      result = false;
    });

  return result;
};
