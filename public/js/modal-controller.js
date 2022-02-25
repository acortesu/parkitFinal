"use strict";

// HELPERS
// init a modal
function initModal(modal, btnActive, btnClose) {
    btnActive.onclick = function() {
        document.querySelector('body').classList.add('modal-active');
        modal.classList.add("active");
    };

    btnClose.onclick = function() {
        document.querySelector('body').classList.remove('modal-active');
        modal.classList.remove("active");
    }
}

// clear window modal
window.onclick = function(event) {
    // if (event.target == modal_login) {
    //     modal_login.classList.remove("active");
    //     document.querySelector('body').classList.remove('modal-active');
    // }
};