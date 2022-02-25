"use strict";

// helpers relacionados a usuarios
const session_set_user = (user) => {
  localStorage.setItem("activeUser", JSON.stringify(user));
};

const session_get_user = () => {
  const stringUser = localStorage.getItem("activeUser");
  return JSON.parse(stringUser);
};

// HELPERS
const user_get_full_name = (nombre, apellido) => {
  return `${nombre} ${apellido}`
}
