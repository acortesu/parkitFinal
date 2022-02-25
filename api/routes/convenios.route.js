"use strict";
const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();
const Convenio = require("../models/convenios.model");


/****************
 * CONVENIOS *
 ****************/
// create
router.post("/convenio/registrar", (req, res) => {
    let nuevo_convenio = new Convenio({

        empresa: req.body.empresa,
        nombre_convenio: req.body.nombre_convenio,
        estado: req.body.estado,
        espacio_total: req.body.espacio_total,
        fecha_creacion: req.body.fecha_creacion,
        num_descuento_discapacitado: req.body.num_descuento_discapacitado,
        num_espacios_discapacitado: req.body.num_espacios_discapacitado,
        num_descuento_carro: req.body.num_descuento_carro,
        num_espacios_carro: req.body.num_espacios_carro,
        num_descuento_moto: req.body.num_descuento_moto,
        num_espacios_moto: req.body.num_espacios_moto,
        num_descuento_bici: req.body.num_descuento_bici,
        num_espacios_bici: req.body.num_espacios_bici,
    });

    nuevo_convenio.save((err, nuevo_convenio_db) => {
        if (err) {
            res.json({
                resultado: false,
                msj: "El convenio no se pudo registrar correctamente",
                err,
            });
        } else {
            res.json({
                resultado: true,
                msj: "El convenio se registró correctamente",
                nuevo_convenio_db,
            });
        }
    });
});


// listar
router.get('/listar-convenios', (req, res) => {
    Convenio.find((err, lista_convenios_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Los convenios no se pudieron listar',
                err
            })
        } else {
            res.json({
                lista_convenios_bd
            });
        }
    });
});


router.get('/buscar-convenio-id', (req, res) => {
    Convenio.findOne({ _id: req.query._id }, (err, convenio_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'El convenio no se encontró',
                err
            })
        } else {
            res.json({
                convenio_bd
            });
        }
    });
});


router.put('/modificar-convenio', (req, res) => {
    Convenio.updateOne({ _id: req.body._id }, {
        $set: {
            empresa: req.body.empresa,
            nombre_convenio: req.body.nombre_convenio,
            estado: req.body.estado,
            espacio_total: req.body.espacio_total,
            fecha_creacion: req.body.fecha_creacion,
            num_descuento_discapacitado: req.body.num_descuento_discapacitado,
            num_espacios_discapacitado: req.body.num_espacios_discapacitado,
            num_descuento_carro: req.body.num_descuento_carro,
            num_espacios_carro: req.body.num_espacios_carro,
            num_descuento_moto: req.body.num_descuento_moto,
            num_espacios_moto: req.body.num_espacios_moto,
            num_descuento_bici: req.body.num_descuento_bici,
            num_espacios_bici: req.body.num_espacios_bici
        }
    }, (err, info) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'El convenio no se pudo modificar',
                err
            })
        } else {
            res.json({
                info
            });
        }
    });
});


module.exports = router;