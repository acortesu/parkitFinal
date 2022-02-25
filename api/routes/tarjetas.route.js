"use strict";
const express = require("express");
const router = express.Router();
const Tarjeta = require("../models/tarjetas.model");


/****************
 * TARJETAS *
 ****************/
// create
router.post("/tarjeta/registrar", (req, res) => {
    let nueva_tarjeta = new Tarjeta({
        nombre_completo: req.body.nombre_completo,
        numero: req.body.numero,
        fecha_vencimiento: req.body.fecha_vencimiento,
        codigo: req.body.codigo,
        estado: req.body.estado,
        user_ref: req.body.user_ref,
    });

    nueva_tarjeta.save((err, new_card_from_db) => {
        if (err) {
            res.json({
                resultado: false,
                msj: "La tarjeta no se pudo registrar correctamente",
                err,
            });
        } else {
            res.json({
                resultado: true,
                msj: "La tarjeta se registró correctamente",
                new_card_from_db,
            });
        }
    });
});


// listar
router.post('/listar-tarjetas', (req, res) => {
    console.log(req.body.user_ref)
    Tarjeta.find({ user_ref: req.body.user_ref }, (err, lista_cards_from_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Las tarjetas no se pudieron listar',
                err
            })
        } else {
            res.json({
                lista_cards_from_bd
            });
        }
    });
});


router.get('/buscar-tarjeta-id', (req, res) => {
    Tarjeta.findOne({ _id: req.query._id }, (err, tarjeta_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'La tarjeta no se encontró',
                err
            })
        } else {
            res.json({
                tarjeta_bd
            });
        }
    });
});


router.put('/modificar-tarjeta', (req, res) => {
    Tarjeta.updateOne({ _id: req.body._id }, {
        $set: {
            nombre_completo: req.body.nombre_completo,
            numero: req.body.numero,
            fecha_vencimiento: req.body.fecha_vencimiento,
            codigo: req.body.codigo,
            estado: req.body.estado,
            user_ref: req.body.user_ref,

        }
    }, (err, info) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'La tarjeta no se pudo modificar',
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