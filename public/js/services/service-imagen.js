'use strict';

const btn_foto = document.querySelector('#btn-foto');
const imagen = document.querySelector('#user-photo')

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'alocortesu',
    uploadPreset: 'preset_alocortesu',
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('// Imagen subida correctamente //')
        imagen.src = result.info.secure_url;
    }
});


btn_foto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);