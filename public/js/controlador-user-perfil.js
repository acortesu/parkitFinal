"use strict";

// add nombre to nav profile
function updateProfileName(name, user_photo) {
  const domElement = document.querySelector("#nav-user-name");
  const domImage = document.querySelector("#nav-user-img");
  domImage.src = user_photo;
  domElement.innerHTML = name;
}

function activeCerrarSesion() {
  const domBTN = document.querySelector("#btn-cerrar-sesion");
  domBTN.onclick = () => {
    window.location.href = "index.html";
  };
}

function initNavController() {
  //init nav data
  const activeUser = session_get_user();

  updateProfileName(activeUser.nombre, activeUser.user_photo);
  // cerrar sesion
  // activeCerrarSesion()
  // active dropdown de nav -> perfil
  const activeUserContainer = document.querySelector(".active-user");
  const dropdown = document.querySelector(".drop-down-options");

  activeUserContainer.onclick = (e) => {
    dropdown.classList.toggle("active");
  };

  window.onclick = function (event) {
    if (event.target == activeUserContainer) {
      dropdown.classList.remove("active");
    }
  };
}
