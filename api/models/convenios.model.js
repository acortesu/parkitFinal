'use strict';

const mongoose = require('mongoose');

const schema_convenio = new mongoose.Schema({
    empresa: { type: String, required: true, unique: false },
    nombre_convenio: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false },
    espacio_total: { type: Number, required: true, unique: false },
    fecha_creacion: { type: Date, required: true, unique: false },
    num_descuento_discapacitado: { type: Number, require: true, unique: false },
    num_espacios_discapacitado: { type: Number, require: true, unique: false },
    num_descuento_carro: { type: Number, require: true, unique: false },
    num_espacios_carro: { type: Number, require: true, unique: false },
    num_descuento_moto: { type: Number, require: true, unique: false },
    num_espacios_moto: { type: Number, require: true, unique: false },
    num_descuento_bici: { type: Number, require: true, unique: false },
    num_espacios_bici: { type: Number, require: true, unique: false },

});

module.exports = mongoose.model('Convenio', schema_convenio, 'convenios');