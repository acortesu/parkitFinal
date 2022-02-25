// constantes de configuracion
const MAP_LAYER =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const MAP_INITIAL_LOCATION = [9.9287927, -84.0952556];
const listaLugares = [
  [9.9282611, -84.0993939],
  [9.9421499, -84.1242296],
  [9.9517136, -84.1062732],
  [9.9526977, -84.1412808],
  [10.0007723, -84.1209299],
  [9.9665373, -84.1223679],
  [9.9729815, -84.1098195],
  [10.0074697, -84.1255127],
  [10.0046256, -84.2166355],
  [10.0250936, -84.2033392],
  [10.0356135, -84.2428387],
  [10.0286751, -84.2752983],
];
const MAP_INITIAL_ZOOM = 14;
const MAP_DOM_ID = "mapid";
const MAP_ATRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

// inicializar mapa
const map = L.map(MAP_DOM_ID).setView(MAP_INITIAL_LOCATION, MAP_INITIAL_ZOOM);

// set de layer (render)
L.tileLayer(MAP_LAYER, {
  attribution: MAP_ATRIBUTION,
  scrollWheelZoom: false,
}).addTo(map);

for (let i = 0; i < listaLugares.length; i++) {
  L.marker(listaLugares[i]).addTo(map);
}
