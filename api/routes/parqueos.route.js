"use strict";
const express = require("express");
const email = require("../sendEmail");

const router = express.Router();
const Parqueo = require("../models/parqueos.model");

/****************
 * PARQUEOS *
 ****************/
// create
router.post("/parqueo/registrar", (req, res) => {
    let nuevo_parqueo = new Parqueo(req.body);

    nuevo_parqueo.save((err, nuevo_parqueo_db) => {
        if (err) {
            res.json({
                resultado: false,
                msj: "El parqueo no se pudo registrar correctamente",
                err,
            });
        } else {
            res.json({
                resultado: true,
                msj: "El parqueo se registró correctamente",
                nuevo_parqueo_db,
            });
        }
    });
});

// listar
router.get("/listar-parqueo", (req, res) => {
    Parqueo.find((err, lista_parqueos_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: "Los parqueos no se pudieron listar",
                err,
            });
        } else {
            res.json({
                lista_parqueos_bd,
            });
        }
    });
});

// listar por estado
router.get("/listar-parqueos-pendientes", (req, res) => {
    Parqueo.find({ estado: "pendiente" }, (err, lista_parqueos_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: "Los parqueos no se pudieron listar",
                err,
            });
        } else {
            res.json({
                lista_parqueos_bd,
            });
        }
    });
});

// listar activos
router.get("/listar-parqueos-activos", (req, res) => {
    Parqueo.find({ estado: "activo" }, (err, lista_parqueos_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: "Los parqueos no se pudieron listar",
                err,
            });
        } else {
            res.json({
                lista_parqueos_bd,
            });
        }
    });
});


// aceptar parqueo
router.post("/aceptar-parqueo", (req, res) => {
    Parqueo.updateOne({ _id: req.body._id }, {
            $set: {
                estado: "activo",
            },
        },
        (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: "El parqueo no se pudo modificar",
                    err,
                });
            } else {
                email.enviar_mail_aprobar(req.body.email, req.body.nombre_propietario, req.body.nombre_parqueo, req.body._id);
                email.enviar_mail_admin();
                res.json({
                    info,
                });
            }
        }
    );
});

router.get("/buscar-parqueo-id", (req, res) => {
    Parqueo.findOne({ _id: req.query._id }, (err, parqueo_bd) => {
        if (err) {
            res.json({
                resultado: false,
                msj: "El parqueo no se encontró",
                err,
            });
        } else {
            res.json({
                parqueo_bd,
            });
        }
    });
});

router.put("/actualizar-tarifas-parqueo", (req, res) => {
    Parqueo.updateOne({ _id: req.body.id_parqueo }, {
            $set: {
                numero_esp_discapacitados: req.body.numero_esp_discapacitados,
                numero_esp_carros: req.body.numero_esp_carros,
                numero_esp_motos: req.body.numero_esp_motos,
                numero_esp_bicis: req.body.numero_esp_bicis,
                tarifa_discapacitados: req.body.tarifa_discapacitados,
                tarifa_carros: req.body.tarifa_carros,
                tarifa_motos: req.body.tarifa_motos,
                tarifa_bicis: req.body.tarifa_bicis,
            },
        },
        (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: "El parqueo no se pudo modificar",
                    err,
                });
            } else {
                res.json({
                    info,
                });
            }
        }
    );
});

router.post("/modificar-parqueo", (req, res) => {
    Parqueo.updateOne({ _id: req.body._id }, {
            $set: {
                nombre_propietario: req.body.nombre_propietario,
                nombre_parqueo: req.body.nombre_parqueo,
                tipo_id: req.body.tipo_id,
                numero_id: req.body.numero_id,
                provincia: req.body.provincia,
                canton: req.body.canton,
                distrito: req.body.distrito,
                permiso: req.body.permiso,
                email: req.body.email,
                centro_comercial: req.body.centro_comercial,
                direccion: req.body.direccion,
                fecha_apertura: req.body.fecha_apertura,
                fotos: req.body.fotos,
                lunes_hora_cierre: req.body.lunes_hora_cierre,
                lunes_hora_apertura: req.body.lunes_hora_apertura,
                martes_hora_cierre: req.body.martes_hora_cierre,
                martes_hora_apertura: req.body.martes_hora_apertura,
                miercoles_hora_cierre: req.body.miercoles_hora_cierre,
                miercoles_hora_apertura: req.body.miercoles_hora_apertura,
                jueves_hora_cierre: req.body.jueves_hora_cierre,
                jueves_hora_apertura: req.body.jueves_hora_apertura,
                viernes_hora_cierre: req.body.viernes_hora_cierre,
                viernes_hora_apertura: req.body.viernes_hora_apertura,
                sabado_hora_cierre: req.body.sabado_hora_cierre,
                sabado_hora_apertura: req.body.sabado_hora_apertura,
                domingo_hora_cierre: req.body.domingo_hora_cierre,
                domingo_hora_apertura: req.body.domingo_hora_apertura,
                geo_lat: req.body.geo_lat,
                geo_long: req.body.geo_long,
                numero_esp_discapacitados: req.body.numero_esp_discapacitados,
                numero_esp_carros: req.body.numero_esp_carros,
                numero_esp_motos: req.body.numero_esp_motos,
                numero_esp_bicis: req.body.numero_esp_bicis,
                tarifa_discapacitados: req.body.tarifa_discapacitados,
                tarifa_carros: req.body.tarifa_carros,
                tarifa_motos: req.body.tarifa_motos,
                tarifa_bicis: req.body.tarifa_bicis,
                estado: req.body.estado,
            },
        },
        (err, info) => {
            if (err) {
                res.json({
                    resultado: false,
                    msj: "El parqueo no se pudo modificar",
                    err,
                });
            } else {
                res.json({
                    info,
                });
            }
        }
    );
});


module.exports = router;