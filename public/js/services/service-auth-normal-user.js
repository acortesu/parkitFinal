"use strict";

const API_URL = "http://localhost:3000/api";

const registrar_normal_user = async(newUser) => {
    await axios({
            method: "post",
            url: `${API_URL}/regular-user/registrar/`,
            responseType: "json",
            data: newUser,
        })
        .then((response) => {
            Swal.fire({
                title: "Registro realizado con éxito",
                text: "Sus datos se registraron correctamente",
                icon: "success",
            }).then(() => {
                window.location.href = "index.html";
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

const log_in = async(user) => {
    await axios({
            method: "post",
            url: `${API_URL}/login`,
            response: "json",
            data: user,
        })
        .then((response) => {
            if (response.data.resultado == false) {
                alert("usuario o contraseña incorrectos");
            } else {
                const userFromDB = response.data.userFromDB;
                session_set_user(userFromDB);
                /***************************
                 *   CONTROL DE VENTANAS   *
                 * LUEGO DE INICIAR SESION *
                 ***************************/
                // ADMIN
                if (userFromDB.tipo_user == "admin") {
                    window.location.href = "profile-admin.html";
                }
                // REGULAR
                if (userFromDB.tipo_user == "regular") {
                    window.location.href = "homeapp-user-final.html";
                }
                // ENCARGADO EMPRESA
                if (userFromDB.tipo_user == "enc-empresa") {
                    window.location.href = "profile-encargado-empresa-user.html";
                }
                // ENCARGADO PARQUEO
                if (userFromDB.tipo_user == "enc-parqueo") {
                    window.location.href = "profile-encargado-parqueo-user.html";
                }
                // EMPRESA USER
                if (userFromDB.tipo_user == "empresa-user") {
                    window.location.href = "profile-empresa-user.html";
                }

            }
        })
        .catch((error) => {});
};