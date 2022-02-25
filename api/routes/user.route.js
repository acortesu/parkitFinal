"use strict";
const express = require("express");
const router = express.Router();
const User = require("../models/users.model");

/*********
 * LOGIN *
 *********/

router.post("/login", (req, res) => {
  User.findOne({ correo: req.body.correo }, (err, userFromDB) => {
    if (err || userFromDB === null) {
      res.json({
        resultado: false,
        msj: "El usuario no se encontró",
        err,
      });
    } else {
      if (userFromDB.password !== req.body.password) {
        res.json({
          resultado: false,
          msj: "La contraseña que ingreso es incorrecta",
          err,
        });
      } else {
        res.json({
          userFromDB,
        });
      }
    }
  });
});

/****************
 * REGULAR USER *
 ****************/
// create
router.post("/regular-user/registrar", (req, res) => {
  let nuevo_user = new User({
    nombre: req.body.nombre,
    segundo_nombre: req.body.segundo_nombre,
    apellido: req.body.apellido,
    segundo_apellido: req.body.segundo_apellido,
    tipo_id: req.body.tipo_id,
    numero_id: req.body.numero_id,
    fecha_nacimiento: req.body.fecha_nacimiento,
    correo: req.body.correo,
    password: req.body.password,
    tipo_user: req.body.tipo_user,
    user_photo: req.body.user_photo,
  });

  nuevo_user.save((err, new_user_from_db) => {
    if (err) {
      res.json({
        resultado: false,
        msj: "El usuario no se pudo registrar correctamente",
        err,
      });
    } else {
      res.json({
        resultado: true,
        msj: "El usuario se registró correctamente",
        new_user_from_db,
      });
    }
  });
});

/**************************
 * ENCARGADO EMPRESA USER *
 **************************/
// create
router.post("/encargado-empresa/registrar", (req, res) => {
  let nuevo_enc_empresa = new User({
    nombre: req.body.nombre,
    segundo_nombre: req.body.segundo_nombre,
    apellido: req.body.apellido,
    segundo_apellido: req.body.segundo_apellido,
    tipo_id: req.body.tipo_id,
    numero_id: req.body.numero_id,
    fecha_nacimiento: req.body.fecha_nacimiento,
    correo: req.body.correo,
    password: req.body.password,
    tipo_user: "enc-empresa",
    user_photo:
      "https://res.cloudinary.com/alocortesu/image/upload/v1597975674/frdmba5ootrs1lhs3bnw.png",
    fecha_contratacion: req.body.fecha_contratacion,
    puesto: req.body.puesto,
    id_parqueo: req.body.id_parqueo,
  });

  nuevo_enc_empresa.save((err, new_enc_empresa_from_db) => {
    if (err) {
      res.json({
        resultado: false,
        msj: "El usuario no se pudo registrar correctamente",
        err,
      });
    } else {
      res.json({
        resultado: true,
        msj: "El usuario se registró correctamente",
        new_enc_empresa_from_db,
      });
    }
  });
});

/**************************
 * ENCARGADO PARQUEOS *
 **************************/
// create
router.post("/encargado-parqueo/registrar", (req, res) => {
  let nuevo_enc_parqueo = new User({
    nombre: req.body.nombre,
    segundo_nombre: req.body.segundo_nombre,
    apellido: req.body.apellido,
    segundo_apellido: req.body.segundo_apellido,
    tipo_id: req.body.tipo_id,
    numero_id: req.body.numero_id,
    fecha_nacimiento: req.body.fecha_nacimiento,
    correo: req.body.correo,
    password: req.body.password,
    tipo_user: "enc-parqueo",
    user_photo: req.body.user_photo,
    fecha_contratacion: req.body.fecha_contratacion,
    puesto: req.body.puesto,
    id_parqueo: req.body.id_parqueo,
  });

  nuevo_enc_parqueo.save((err, new_enc_parqueo_from_db) => {
    if (err) {
      res.json({
        resultado: false,
        msj: "El usuario no se pudo registrar correctamente",
        err,
      });
    } else {
      res.json({
        resultado: true,
        msj: "El usuario se registró correctamente",
        new_enc_parqueo_from_db,
      });
    }
  });
});

module.exports = router;
