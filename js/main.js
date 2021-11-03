// Get the modal
var modal = document.getElementById("request");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

window.onload = function() {
    const navMenu = document.querySelector(".navMenu");
    const toggleMenu = document.querySelector(".toggle-menu");

    toggleMenu.addEventListener("click", () => {
        navMenu.classList.toggle("nav-active");
        toggleMenu.classList.toggle("change");
    });
};

(() => {})();