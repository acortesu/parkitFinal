"use strict";

// CONSTANTES REGISTRAR RESERVA
const btn_reservar = document.querySelector("#btn-reservar");
const input_date_reserva = document.querySelector("#date_reserva");
const input_time_reserva = document.querySelector("#time_reserva");

// VALIDACIÓN REGISTRAR RESERVA
let validar_registrar_reserva = () => {
  let inputs_requeridos = document.querySelectorAll("#sct-reservas [required]");
  let error = false;

  // VALIDAR INPUTS REQUERIDOS
  for (let i = 0; i < inputs_requeridos.length; i++) {
    if (inputs_requeridos[i].value == "") {
      inputs_requeridos[i].classList.add("input-error");
      error = true;
    } else {
      inputs_requeridos[i].classList.remove("input-error");
    }
  }

  // VALIDAR FECHA
  if (
    input_date_reserva.value !== "" ||
    new Date(input_date_reserva.value) < new Date()
  ) {
    input_date_reserva.classList.add("input-error");
    error = true;
  } else {
    input_date_reserva.classList.remove("input-error");
  }

  return error;
};

let limpiar_registrar_reserva = () => {
  input_date_reserva.value = "";
  input_time_reserva.value = "";
};

let obtener_reserva_registrada = () => {
  let error = validar_registrar_reserva();

  if (error) {
    Swal.fire({
      title: "Fechas incorrectas",
      text: "Por favor revise los campos resaltados",
      icon: "warning",
    });
  } else {
    console.log(input_date_reserva.value);
    console.log(input_time_reserva.value);
    Swal.fire({
      title: "Listado correcto",
      icon: "success",
    }).then(() => {
      limpiar_registrar_reserva();
    });
  }
};

btn_reservar.addEventListener("click", obtener_reserva_registrada);

// start de perfil parqueo app;

const nombreParqueoDOM = document.querySelector("#parqueo-nombre");

const lunesAptDOM = document.querySelector("#lunes-apertura");
const lunesCierDOM = document.querySelector("#lunes-cierre");
const martesAptDOM = document.querySelector("#martes-apertura");
const martesCierDOM = document.querySelector("#martes-cierre");
const miercolesAptDOM = document.querySelector("#miercoles-apertura");
const miercolesCierDOM = document.querySelector("#miercoles-cierre");
const juevesAptDOM = document.querySelector("#jueves-apertura");
const juevesCierDOM = document.querySelector("#jueves-cierre");
const viernesAptDOM = document.querySelector("#viernes-apertura");
const viernesCierDOM = document.querySelector("#viernes-cierre");
const sabadoAptDOM = document.querySelector("#sabado-apertura");
const sabadoCierDOM = document.querySelector("#sabado-cierre");
const domingoAptDOM = document.querySelector("#domingo-apertura");
const domingoCierDOM = document.querySelector("#domingo-cierre");

const MAP_LAYER =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const MAP_INITIAL_LOCATION = [9.9287927, -84.0952556];
const MAP_INITIAL_ZOOM = 14;
const MAP_DOM_ID = "mapid";
const MAP_ATRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

// inicializar mapa
const map = L.map(MAP_DOM_ID).setView(MAP_INITIAL_LOCATION, MAP_INITIAL_ZOOM);
L.tileLayer(MAP_LAYER, {
  attribution: MAP_ATRIBUTION,
  scrollWheelZoom: false,
}).addTo(map);

// ---- CODIGO RESERVAS ---- //
// constantes del DOM
const reservasContainer = document.querySelector("#espacios-reserva");

// helpers
const iconElement = (icon) => {
  return `<div class="icono-vehiculo">
    <span class="fas ${getVehiculoIcon(icon)} icon-orange circleIcon"></span>
</div>`;
};

const precioElement = (precio) => {
  return `<div class="precio-colones">
    <p>‎₡${precio}</p>
</div>`;
};

const getSpacioElement = (numero, isOcupied, type) => {
  return `<div data-pk="${numero}" data-type="${type}" class="ps-ley espacio-parqueo ps ${
    isOcupied ? "occupied" : ""
  }">${numero}</div>`;
};

const getEspacios = (total, ocupados, type) => {
  let espaciosResult = "";
  for (let i = 1; i <= total; i++) {
    espaciosResult += getSpacioElement(i, ocupados.includes(i), type);
  }
  return espaciosResult;
};

const getVehiculoIcon = (vehiculo) => {
  switch (vehiculo) {
    case "discapacitados":
      return "fa-wheelchair";
    case "carros":
      return "fa-car";
    case "motos":
      return "fa-motorcycle";
    case "bike":
      return "fa-bicycle";
  }
};

const createInputReservas = (inputReserva) => {
  return `<div class="container-ley">
    <div class="two-cols">
        <div class="col-izq">
            ${precioElement(inputReserva.precio)}
            <div class="precio-dolares-euros">
                <div class="precio-dolares">
                    <p>$ 1.50</p>
                </div>
                <div class="precio-euros">
                    <p>€ 2.10</p>
                </div>
            </div>
  
            <div class="texto_horas">
                <p>/hora</p>
            </div>
        </div>
        <div class="col-der container-ps">
            ${iconElement(inputReserva.type)}
            <div class="cuadro-orange">
                ${getEspacios(
                  inputReserva.totalEspacios,
                  inputReserva.ocupados,
                  inputReserva.type
                )}
            </div>
        </div>
    </div>
  </div>`;
};

// Config inicial (datos del backend)
const generateConfigReservas = (p) => [
  {
    precio: p.tarifa_carros,
    totalEspacios: p.numero_esp_carros,
    ocupados: [1, 4],
    type: "carros",
  },
  {
    precio: p.tarifa_bicis,
    totalEspacios: p.numero_esp_bicis,
    ocupados: [6, 7],
    type: "discapacitados",
  },
  {
    precio: p.tarifa_discapacitados,
    totalEspacios: p.numero_esp_discapacitados,
    ocupados: [9, 4, 7, 1],
    type: "motos",
  },
  {
    precio: p.tarifa_motos,
    totalEspacios: p.numero_esp_bicis,
    ocupados: [6],
    type: "bike",
  },
];

// ININT de reservas
function initReservas(parqueo) {
  let reservasResult = "";
  const configReservas = generateConfigReservas(parqueo);
  for (let i = 0; i < configReservas.length; i++) {
    reservasResult += createInputReservas(configReservas[i]);
  }
  reservasContainer.innerHTML = reservasResult;

  const allInputs = document.querySelectorAll(".espacio-parqueo");

  const clearAllActive = () => {
    const elements = document.querySelectorAll(".espacio-parqueo");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("selected");
    }
  };
  // Evento de click en una reserva
  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].onclick = (event) => {
      clearAllActive();
      const element = event.target;
      if (!element.classList.contains("occupied")) {
        element.classList.add("selected");
      }
    };
  }
}

const llenarDatosDeParqueo = (parqueo) => {
  nombreParqueoDOM.classList.contains;
  nombreParqueoDOM.innerHTML = parqueo.nombre_parqueo;
  lunesAptDOM.innerHTML = parqueo.lunes_hora_apertura;
  lunesCierDOM.innerHTML = parqueo.lunes_hora_apertura;
  martesAptDOM.innerHTML = parqueo.lunes_hora_apertura;
  martesCierDOM.innerHTML = parqueo.lunes_hora_apertura;
  miercolesAptDOM.innerHTML = parqueo.lunes_hora_apertura;
  miercolesCierDOM.innerHTML = parqueo.lunes_hora_apertura;
  juevesAptDOM.innerHTML = parqueo.lunes_hora_apertura;
  juevesCierDOM.innerHTML = parqueo.lunes_hora_apertura;
  viernesAptDOM.innerHTML = parqueo.lunes_hora_apertura;
  viernesCierDOM.innerHTML = parqueo.lunes_hora_apertura;
  sabadoAptDOM.innerHTML = parqueo.lunes_hora_apertura;
  sabadoCierDOM.innerHTML = parqueo.lunes_hora_apertura;
  domingoAptDOM.innerHTML = parqueo.lunes_hora_apertura;
  domingoCierDOM.innerHTML = parqueo.lunes_hora_apertura;
  initReservas(parqueo);
  L.marker([parqueo.geo_lat, parqueo.geo_long]).addTo(map);
  map.panTo([parqueo.geo_lat, parqueo.geo_long]);
};

window.onload = async function init() {
  initNavController();
  const parqueoId = window.location.search.substr(1);
  const currentParqueo = await get_parqueo(parqueoId);
  llenarDatosDeParqueo(currentParqueo);
  // listarParqueosActivos(true);
  // initBuscarParqueo();
};
