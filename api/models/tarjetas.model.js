'use strict';

const mongoose = require('mongoose');

const schema_tarjetas = new mongoose.Schema({
    nombre_completo: { type: String, required: true, unique: false },
    numero: { type: Number, required: true, unique: false },
    fecha_vencimiento: { type: Date, required: true, unique: false },
    codigo: { type: Number, required: true, unique: false },
    estado: { type: String, require: false, unique: false },
    user_ref: { type: String, require: true, unique: false },
});

module.exports = mongoose.model('Tarjeta', schema_tarjetas, 'tarjetas');