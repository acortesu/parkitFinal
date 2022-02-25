"use strict";

const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// iniciacion del server
const app = express();
// configuracion del server
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

let db;

mongoose.connect(
    process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, database) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        db = database;
        console.log("Se estableció la conexión con la base datos.");

        const server = app.listen(process.env.PORT || 8000, () => {
            let port = server.address().port;
            console.log("La aplicación está levantada en el puerto: ", port);
        });
    }
);

//Error general en caso de que falle un "endpoint".
const handleError = (res, reason, message, code) => {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ error: message });
};

// Conexión a todas la rutas

app.use("/api", require("./routes/user.route"));
app.use("/api", require("./routes/tarjetas.route"));
app.use("/api", require("./routes/convenios.route"));
app.use("/api", require("./routes/empresas.route"));
app.use("/api", require("./routes/parqueos.route"));