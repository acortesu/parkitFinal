"use strict";

// VALIDACIÓN REGISTRO PARQUEOS ACEPTADOS

const btn_enviar = document.querySelector("#btn-send");
const input_nombre_dueno = document.querySelector("#txt-nombre_dueno");
const input_nombre_parqueo = document.querySelector("#txt-nombre_parqueo");
const lista_nacionalidades = document.querySelector("#lst-nacionalidades");
const lista_provincia = document.querySelector("#lst-provincia");
const lista_canton = document.querySelector("#lst-canton");
const lista_distrito = document.querySelector("#lst-distrito");
const input_email = document.querySelector("#txt-email");
const input_identificacion = document.querySelector("#txt-identificacion");
const checkbox_centro_com = document.querySelector("#cbx-centro_comercial");
const input_direccion = document.querySelector("#ipt_direccion");
const hora_apertura_l = document.querySelector("#lunes-apertura");
const hora_cierre_l = document.querySelector("#lunes-cierre");

const hora_cierre_k = document.querySelector("#martes-cierre");
const hora_apertura_k = document.querySelector("#martes-apertura");
const hora_cierre_m = document.querySelector("#miercoles-cierre");
const hora_apertura_m = document.querySelector("#miercoles-apertura");
const hora_cierre_j = document.querySelector("#jueves-cierre");
const hora_apertura_j = document.querySelector("#jueves-apertura");
const hora_cierre_v = document.querySelector("#viernes-cierre");
const hora_apertura_v = document.querySelector("#viernes-apertura");
const hora_cierre_s = document.querySelector("#sabado-cierre");
const hora_apertura_s = document.querySelector("#sabado-apertura");
const hora_cierre_d = document.querySelector("#domingo-cierre");
const hora_apertura_d = document.querySelector("#domingo-apertura");
const fecha_apaertura = document.querySelector("#txt-fecha");

let markerLat = 9.9287927;
let markerLong = -84.0952556;

let validar = () => {
    let inputs_requeridos = document.querySelectorAll(
        "#sign-in-parqueo [required]"
    );
    let error = false;
    let letters = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    let letters_numbers = /^[0-9a-zA-Z]+$/;
    let mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    let idnumber = /^[0-9]+$/;

    // VALIDAR INPUTS REQUERIDOS
    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == "") {
            inputs_requeridos[i].classList.add("input-error");
            error = true;
        } else {
            inputs_requeridos[i].classList.remove("input-error");
        }
    }

    // VALIDAR NOMBRE DUEÑO
    if (letters.test(input_nombre_dueno.value) == false) {
        input_nombre_dueno.classList.add("input-error");
        error = true;
    } else {
        input_nombre_dueno.classList.remove("input-error");
    }

    // VALIDAR NOMBRE PARQUEO
    if (letters.test(input_nombre_parqueo.value) == false) {
        input_nombre_parqueo.classList.add("input-error");
        error = true;
    } else {
        input_nombre_parqueo.classList.remove("input-error");
    }

    // VALIDAR MAIL
    if (mailformat.test(input_email.value) == false) {
        input_email.classList.add("input-error");
        error = true;
    } else {
        input_email.classList.remove("input-error");
    }

    // VALIDAR IDENTIFICACIÓN
    if (idnumber.test(input_identificacion.value) == false) {
        input_identificacion.classList.add("input-error");
        error = true;
    } else {
        input_identificacion.classList.remove("input-error");
    }

    // VALIDAR HORA APERTURA
    if (hora_apertura_l.value < hora_cierre_l.value) {
        hora_apertura_l.classList.remove("input-error");
    } else {
        hora_apertura_l.classList.add("input-error");
        error = true;
    }
    //   if (hora_apertura_k.vakue < hora_cierre_k.value) {
    //     hora_apertura_k.classList.remove("input-error");
    //   } else {
    //     hora_apertura_k.classList.add("input-error");
    //     error = true;
    //   }
    if (hora_apertura_m.value < hora_cierre_m.value) {
        hora_apertura_m.classList.remove("input-error");
    } else {
        hora_apertura_m.classList.add("input-error");
        error = true;
    }
    if (hora_apertura_j.value < hora_cierre_j.value) {
        hora_apertura_j.classList.remove("input-error");
    } else {
        hora_apertura_j.classList.add("input-error");
        error = true;
    }
    if (hora_apertura_v.value < hora_cierre_v.value) {
        hora_apertura_v.classList.remove("input-error");
    } else {
        hora_apertura_v.classList.add("input-error");
        error = true;
    }
    if (hora_apertura_s.value < hora_cierre_s.value) {
        hora_apertura_s.classList.remove("input-error");
    } else {
        hora_apertura_s.classList.add("input-error");
        error = true;
    }
    if (hora_apertura_d.value < hora_cierre_d.value) {
        hora_apertura_d.classList.remove("input-error");
    } else {
        hora_apertura_d.classList.add("input-error");
        error = true;
    }

    // VALIDAR HORA CIERRE
    if (hora_cierre_l.value > hora_apertura_l.value) {
        hora_cierre_l.classList.remove("input-error");
    } else {
        hora_cierre_l.classList.add("input-error");
        error = true;
    }

    if (hora_cierre_k.value > hora_apertura_k.value) {
        hora_cierre_k.classList.remove("input-error");
    } else {
        hora_cierre_k.classList.add("input-error");
        error = true;
    }

    if (hora_cierre_m.value > hora_apertura_m.value) {
        hora_cierre_m.classList.remove("input-error");
    } else {
        hora_cierre_m.classList.add("input-error");
        error = true;
    }

    if (hora_cierre_j.value > hora_apertura_j.value) {
        hora_cierre_j.classList.remove("input-error");
    } else {
        hora_cierre_j.classList.add("input-error");
        error = true;
    }

    if (hora_cierre_v.value > hora_apertura_v.value) {
        hora_cierre_v.classList.remove("input-error");
    } else {
        hora_cierre_v.classList.add("input-error");
        error = true;
    }

    if (hora_cierre_s.value > hora_apertura_s.value) {
        hora_cierre_s.classList.remove("input-error");
    } else {
        hora_cierre_s.classList.add("input-error");
        error = true;
    }

    if (hora_cierre_d.value > hora_apertura_d.value) {
        hora_cierre_d.classList.remove("input-error");
    } else {
        hora_cierre_d.classList.add("input-error");
        error = true;
    }

    return error;
};

let limpiar = () => {
    input_nombre_dueno.value = "";
    lista_nacionalidades.value = "";
    input_nombre_parqueo.value = "";
    lista_provincia.value = "";
    lista_canton.value = "";
    lista_distrito.value = "";
    input_email.value = "";
    input_identificacion.value = "";
    checkbox_centro_com.value = "";
    input_direccion.value = "";
    hora_cierre_l.value = "";
    hora_apertura_l.value = "";
    hora_cierre_k.value = "";
    hora_apertura_k.value = "";
    hora_cierre_m.value = "";
    hora_apertura_m.value = "";
    hora_cierre_j.value = "";
    hora_apertura_j.value = "";
    hora_cierre_v.value = "";
    hora_apertura_v.value = "";
    hora_cierre_s.value = "";
    hora_apertura_s.value = "";
    hora_cierre_d.value = "";
    hora_apertura_d.value = "";
};
const getParqueoPhoto = () => document.querySelector("#user-photo").src;
let obtener_datos = async() => {
    let error = validar();

    console.log(markerLat, markerLong)
    if (error) {
        Swal.fire({
            title: "Sus datos no se pudieron registrar",
            text: "Por favor revise los campos resaltados",
            icon: "warning",
        });
    } else {
        const parqueoActualizado = {
            _id: window.location.search.substr(1),
            nombre_propietario: input_nombre_dueno.value,
            nombre_parqueo: input_nombre_parqueo.value,
            tipo_id: lista_nacionalidades.value,
            numero_id: input_identificacion.value,
            provincia: lista_provincia.value,
            canton: lista_canton.value,
            distrito: lista_distrito.value,
            email: input_email.value,
            centro_comercial: checkbox_centro_com.value ? "on" : "off",
            direccion: input_direccion.value,
            fecha_apertura: fecha_apaertura.value,
            fotos: getParqueoPhoto(),
            lunes_hora_cierre: hora_cierre_l.value,
            lunes_hora_apertura: hora_apertura_l.value,
            martes_hora_cierre: hora_cierre_k.value,
            martes_hora_apertura: hora_apertura_k.value,
            miercoles_hora_cierre: hora_cierre_m.value,
            miercoles_hora_apertura: hora_apertura_m.value,
            jueves_hora_cierre: hora_cierre_j.value,
            jueves_hora_apertura: hora_apertura_j.value,
            viernes_hora_cierre: hora_cierre_v.value,
            viernes_hora_apertura: hora_apertura_v.value,
            sabado_hora_cierre: hora_cierre_s.value,
            sabado_hora_apertura: hora_apertura_s.value,
            domingo_hora_cierre: hora_cierre_d.value,
            domingo_hora_apertura: hora_apertura_d.value,
            geo_lat: markerLat,
            geo_long: markerLong,
            numero_esp_discapacitados: 0,
            numero_esp_carros: 0,
            numero_esp_motos: 0,
            numero_esp_bicis: 0,
            tarifa_discapacitados: 0,
            tarifa_carros: 0,
            tarifa_motos: 0,
            tarifa_bicis: 0,
            estado: "activo",
        };

        const response = await modificar_parqueo(parqueoActualizado);
        console.log(parqueoActualizado)
        console.log(response)

        Swal.fire({
            title: "Registro realizado con éxito",
            text: "Sus datos se registraron correctamente",
            icon: "success",
        }).then(() => {
            limpiar();
            window.location.href = `registro-encargado-parqueo.html?${window.location.search.substr(
              1
            )}`;
        });
    }
};

btn_enviar.addEventListener("click", obtener_datos);

// VALIDACIÓN MODAL LOGIN

const btn_ingresar = document.querySelector("#btn-ingresar");
const input_email_login = document.querySelector("#txt-email-login");
const input_contrasenna_login = document.querySelector(
    "#txt-contrasenna-login"
);

const llenarDatosDeParqueo = (parqueo) => {
    input_nombre_parqueo.value = parqueo.nombre_parqueo;
    input_nombre_dueno.value = parqueo.nombre_propietario;
    input_identificacion.value = parqueo.numero_id;
    lista_nacionalidades.value = parqueo.tipo_id;
    lista_provincia.value = parqueo.provincia;
    lista_canton.value = parqueo.canton;
    lista_distrito.value = parqueo.distrito;
    checkbox_centro_com.checked = parqueo.centro_comercial == "on";
    input_email.value = parqueo.email;
};

const initMap = () => {
    // constantes de configuracion
    const MAP_LAYER =
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
    const MAP_INITIAL_LOCATION = [9.9287927, -84.0952556];
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

    var marker = L.marker([9.9287927, -84.0952556], {
        draggable: true,
    }).addTo(map);

    marker.on("dragend", function(e) {
        markerLat = marker.getLatLng().lat;
        markerLong = marker.getLatLng().lng;
    });
};

window.onload = async function init() {
    initMap();
    const parqueoId = window.location.search.substr(1);
    const currentParqueo = await get_parqueo(parqueoId);
    console.log(currentParqueo);
    llenarDatosDeParqueo(currentParqueo);
};