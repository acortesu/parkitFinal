"use strict";

const aceptarParqueo = async (
  parqueo_id,
  email,
  propietario,
  nombre_parqueo
) => {
  await set_aprobar_parqueo(parqueo_id, email, propietario, nombre_parqueo);
  listarParqueosPendientes();
};

const rechazarParqueo = (parqueo_id) => {
  console.log("rechazar", parqueo_id);
};

// listar parqueos pendientes

const returnParqueoPendiente = (parqueo, indice) => {
  return `
    <div class="agregar-parqueos">
      <div class="simbolo">${indice}</div>
      <p class="leyenda">${parqueo.nombre_parqueo}</p>

      <button onclick="aceptarParqueo('${parqueo._id}', '${parqueo.email}', '${parqueo.nombre_propietario}', '${parqueo.nombre_parqueo}')" class="btn orange par">
        Aprobar
      </button>

      <button onclick="rechazarParqueo('${parqueo._id}')" class="btn orange par">
        Rechazar
      </button>
</div>`;
};

const listarParqueosPendientes = async () => {
  // DOM elements
  const containerDOM = document.querySelector("#listado-parqueos-pendientes");
  // clear content
  containerDOM.innerHTML = "";
  // get datos
  let lista_parqueos = await get_parqueos_pendientes();
  let allParqueosString = "";
  lista_parqueos.forEach((parqueo, indice) => {
    allParqueosString += returnParqueoPendiente(parqueo, indice + 1);
  });

  containerDOM.innerHTML = allParqueosString;
};

// listar parqueos activos

const returnParqueoActivo = (parqueo) => {
  return `<option value="${parqueo._id}">${parqueo.nombre_parqueo}</option>`;
};

const listarParqueosActivos = async () => {
  // DOM elements
  const containerDOM = document.querySelector("#lst-parqueos");
  // clear content
  containerDOM.innerHTML = "";
  // get datos
  let lista_parqueos = await get_parqueos_activos();
  let allParqueosString = "";
  lista_parqueos.forEach((parqueo) => {
    allParqueosString += returnParqueoActivo(parqueo);
  });

  containerDOM.innerHTML = allParqueosString;
};

function adminActions() {
  listarParqueosPendientes();
  listarParqueosActivos();
}
