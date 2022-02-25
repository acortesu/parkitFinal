'use strict';

const mongoose = require('mongoose');

const schema_user = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    segundo_nombre: { type: String, required: false, unique: false },
    apellido: { type: String, required: true, unique: false },
    segundo_apellido: { type: String, required: false, unique: false },
    tipo_id: { type: String, required: false, unique: false },
    numero_id: { type: Number, required: false, unique: false },
    fecha_nacimiento: { type: Date, required: false, unique: false },
    correo: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
    tipo_user: { type: String, required: true, unique: false },
    user_photo: { type: String, required: false, unique: false },
    fecha_contratacion: { type: String, required: false, unique: false },
    puesto: { type: String, required: false, unique: false },
    id_parqueo: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('User', schema_user, 'users');