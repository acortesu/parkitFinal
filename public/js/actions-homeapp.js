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

const listarParqueosActivos = async (fromServer = false, overWriteParqueo) => {
  // DOM elements
  const containerDOM = document.querySelector("#result");
  // clear content
  containerDOM.innerHTML = "";
  // get datos
  let allParqueos = [];
  if (fromServer) {
    lista_parqueos = await get_parqueos_activos();
  }
  if (overWriteParqueo) {
    allParqueos = overWriteParqueo;
  } else {
    allParqueos = lista_parqueos;
  }
  let allParqueosString = "";
  if (allParqueos.length > 0) {
    clearMapPoints();
    allParqueos.forEach((parqueo) => {
      allParqueosString += returnParqueoActivo(parqueo);
      let parqueoPoint = L.marker([parqueo.geo_lat, parqueo.geo_long])
        .addTo(map)
        .bindPopup(`<div class="">
            <h3 style="font-weigth: bold; font-size: 24px; margin-bottom: 10px">${parqueo.nombre_parqueo}</h3>
            <a href="profile-parqueos.html?${parqueo._id}" class="btn orange">reservar</a>
        </div>`
        );
      mapPoints.push(parqueoPoint);
    });

    containerDOM.innerHTML = allParqueosString;
  }
};

const clearMapPoints = () => {
  for (i = 0; i < mapPoints.length; i++) {
    map.removeLayer(mapPoints[i]);
  }
  mapPoints = [];
};

const initBuscarParqueo = () => {
  const domInput = document.querySelector("#input-find-parqueo");
  domInput.onkeyup = (event) => {
    const userInput = new RegExp(event.target.value);
    let search = [];
    lista_parqueos.forEach((el) => {
      if (el.nombre_parqueo.match(userInput)) {
        search.push(el);
      }
    });
    listarParqueosActivos(false, search);
  };
};

// all oarqueos
let lista_parqueos;
let mapPoints = [];

// start de home app;
window.onload = function init() {
  initNavController();
  listarParqueosActivos(true);
  initBuscarParqueo();
};

const tarifaEuros = (colones) => (colones / 700).toFixed(2);
const tarifaDolares = (colones) => (colones / 600).toFixed(2);

const returnParqueoActivo = (parqueo) => {
  return `<div class="park-card">
<div class="two-colum park-card-container">
    <div class="col-photo" style="background-image: url('./img/Parqueos/Parqueo1.jpg"></div>
    <div class="col-info">
        <div class="titular">
            <h2>
                ${parqueo.nombre_parqueo}
            </h2>
        </div>
        <div class="precios">
            <div class="colones">
                <p>‎₡${parqueo.tarifa_carros}</p>
            </div>
            <div class="dol-euro">
                <p>$${tarifaEuros(parqueo.tarifa_carros)}</p>
                <p>€${tarifaDolares(parqueo.tarifa_carros)}</p>
            </div>
        </div>
        <div class="direccion">
            <span class="fas fa-map-marker-alt"></span>
            <p>${parqueo.direccion}</p>
        </div>

        <div class="registrar">
            <a href="profile-parqueos.html?${
              parqueo._id
            }" class="btn orange">reservar</a>
        </div>

        <div class="sct-reviews">
            <div class="stars">
                <span class="fas fa-star"></span
><span class="fas fa-star"></span
><span class="fas fa-star"></span
><span class="fas fa-star"></span
><span class="fas fa-star"></span>
            </div>
            <div class="reviews">
                <p>1500 reviews</p>
            </div>
        </div>
        <div class="vehiculos">
            <div class="ley">
                <span class="fas fa-wheelchair"></span>
            </div>
            <p>${parqueo.numero_esp_discapacitados}</p>
            <div class="car">
                <span class="fas fa-car"></span>
            </div>
            <p>${parqueo.numero_esp_carros}</p>
            <div class="motorcycle">
                <span class="fas fa-motorcycle"></span>
            </div>
            <p>${parqueo.numero_esp_motos}</p>
            <div class="bike">
                <span class="fas fa-bicycle"></span>
            </div>
            <p>${parqueo.numero_esp_bicis}</p>
        </div>
    </div>
</div>
</div>`;
};
