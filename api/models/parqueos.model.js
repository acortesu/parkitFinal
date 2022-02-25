'use strict';

const mongoose = require('mongoose');

const schema_parqueos = new mongoose.Schema({

    nombre_propietario: { type: String, required: true, unique: false },
    nombre_parqueo: { type: String, required: true, unique: false },
    tipo_id: { type: String, required: true, unique: false },
    numero_id: { type: Number, required: true, unique: false },
    provincia: { type: String, required: true, unique: false },
    canton: { type: String, required: true, unique: false },
    distrito: { type: String, required: true, unique: false },
    permiso: { type: String, required: false, unique: false },
    email: { type: String, required: true, unique: false },
    centro_comercial: { type: String, required: false, unique: false },
    direccion: { type: String, required: false, unique: false },
    fecha_apertura: { type: Date, required: false, unique: false },
    fotos: { type: String, required: false, unique: false },
    lunes_hora_cierre: { type: String, required: false, unique: false },
    lunes_hora_apertura: { type: String, required: false, unique: false },
    martes_hora_cierre: { type: String, required: false, unique: false },
    martes_hora_apertura: { type: String, required: false, unique: false },
    miercoles_hora_cierre: { type: String, required: false, unique: false },
    miercoles_hora_apertura: { type: String, required: false, unique: false },
    jueves_hora_cierre: { type: String, required: false, unique: false },
    jueves_hora_apertura: { type: String, required: false, unique: false },
    viernes_hora_cierre: { type: String, required: false, unique: false },
    viernes_hora_apertura: { type: String, required: false, unique: false },
    sabado_hora_cierre: { type: String, required: false, unique: false },
    sabado_hora_apertura: { type: String, required: false, unique: false },
    domingo_hora_cierre: { type: String, required: false, unique: false },
    domingo_hora_apertura: { type: String, required: false, unique: false },
    geo_lat: { type: Number, require: false, unique: false },
    geo_long: { type: Number, require: false, unique: false },
    numero_esp_discapacitados: { type: Number, required: false, unique: false },
    numero_esp_carros: { type: Number, required: false, unique: false },
    numero_esp_motos: { type: Number, required: false, unique: false },
    numero_esp_bicis: { type: Number, required: false, unique: false },
    tarifa_discapacitados: { type: Number, required: false, unique: false },
    tarifa_carros: { type: Number, required: false, unique: false },
    tarifa_motos: { type: Number, required: false, unique: false },
    tarifa_bicis: { type: Number, required: false, unique: false },
    estado: { type: String, required: false, unique: false },
});

module.exports = mongoose.model('Parqueo', schema_parqueos, 'parqueos');