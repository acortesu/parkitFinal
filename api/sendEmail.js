'use strict'

const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviar_mail_usuario = (email, pnombre) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "codify.parkit@gmail.com",
            pass: "codify123!"
        }
    });

    let mail_options = {
        from: 'Pabs',
        to: email,
        subject: 'Bienvenido a la aplicación',
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${pnombre}</span> 
                            a la aplicación
                        </p>
                    </td>
                </tr>
                <tr bgcolor="#fff">
                    <td style="text-align:center">
                        <p style="color: #000">¡Un mundo de servicios a su disposición!</p>
                    </td>
                </tr>
            </table>
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};


this.enviar_mail_admin = () => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "codify.parkit@gmail.com",
            pass: "codify123!"
        }
    });

    let mail_options = {
        from: 'PARKIT',
        to: 'parkitgeneral@gmail.com',
        subject: 'Bienvenido a la aplicación',
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">Administrador</span> 
                            <a href="http://127.0.0.1:5500/public/profile-admin.html"> Ingresa aqui para mas informacion</a>
                            Para aprobar o rechazar la nueva solicitud
                        </p>
                    </td>
                </tr>
               
            </table>
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};

module.export = this;

this.enviar_mail_rechazar = () => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "codify.parkit@gmail.com",
            pass: "codify123!"
        }
    });

    let mail_options = {
        from: 'PARKIT',
        to: 'parkitgeneral@gmail.com',
        subject: 'Bienvenido a la aplicación',
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">Administrador</span> 
                            <a href="http://127.0.0.1:5500/public/solicitud-ingreso-parqueos.html"> Ingresa aqui para mas informacion</a>
                            Para aprobar o rechazar la nueva solicitud
                        </p>
                    </td>
                </tr>
               
            </table>
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};

this.enviar_mail_aprobar = (parqueoEmail, parqueoDueno, parqueoNombre, pid) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "codify.parkit@gmail.com",
            pass: "codify123!"
        }
    });

    let mail_options = {
        from: 'PARKIT',
        to: parqueoEmail,
        subject: 'Su solicitud fue aceptada',
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">Su solicitud fue aceptada</h1>
                        <p style="color: #fff; text-align:center">Solicitud aceptada para: ${parqueoNombre}</p>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">Representante: ${parqueoDueno}</span> 
                            <a href="http://127.0.0.1:5500/public/registro-parqueos-aceptados.html?${pid}"> Ingresa en este link para completar sus datos</a>
                            Para aprobar o rechazar la nueva solicitud
                        </p>
                    </td>
                </tr>
               
            </table>
        `
    };
    transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};

module.export = this;