// Función para mostrar/ocultar el menú hamburguesa
function toggleMenu() {
    const headerButtons = document.getElementById('header-buttons');
    headerButtons.classList.toggle('active');
}

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    const headerButtons = document.getElementById('header-buttons');
    const menuIcon = document.querySelector('.menu-icon');

    // Si el clic no fue en el ícono del menú ni en los botones, cerrar el menú
    if (!menuIcon.contains(event.target) && !headerButtons.contains(event.target)) {
        headerButtons.classList.remove('active');
    }
});