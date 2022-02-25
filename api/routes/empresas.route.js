"use strict";
const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();
const Empresa = require("../models/empresas.model");


/****************
 * EMPRESAS *
 ****************/
// create
router.post("/empresa/registrar", (req, res) => {
    let nueva_empresa = new Empresa({

        nombre: req.body.nombre,
        razon_social: req.body.razon_social,
        estado: req.body.estado,
        logo: req.body.logo,
    });

    nueva_empresa.save((err, nueva_empresa_db) => {
        if (err) {
            res.json({
                resultado: false,
                msj: "La empresa no se pudo registrar correctamente",
                err,
            });
        } else {
            res.json({
                resultado: true,
                msj: "La empresa se registró correctamente",
                nueva_empresa_db,
            });
        }
    });
});


// listar
router.get('/listar-empresas', (req, res) => {
    Empresa.find((err, lista_empresas_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Las empresas no se pudieron listar',
                err
            })
        } else {
            res.json({
                lista_empresas_bd
            });
        }
    });
});


router.get('/buscar-empresa-id', (req, res) => {
    Empresa.findOne({ _id: req.query._id }, (err, empresa_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'La empresa no se encontró',
                err
            })
        } else {
            res.json({
                empresa_bd
            });
        }
    });
});


router.put('/modificar-empresa', (req, res) => {
    Empresa.updateOne({ _id: req.body._id }, {
        $set: {
            nombre: req.body.nombre,
            razon_social: req.body.razon_social,
            estado: req.body.estado,
            logo: req.body.logo,
        }
    }, (err, info) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'La empresa no se pudo modificar',
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