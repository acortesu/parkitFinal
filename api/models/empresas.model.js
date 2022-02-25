'use strict';

const mongoose = require('mongoose');

const schema_empresas = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    razon_social: { type: String, required: true, unique: false },
    estado: { type: String, required: false, unique: false },
    logo: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('Empresa', schema_empresas, 'empresas');