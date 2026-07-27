let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Si bajamos más de 100px y el scroll es mayor al anterior, ocultamos
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('ocultar');
    } else {
        // Si subimos, mostramos
        navbar.classList.remove('ocultar');
    }
    
    lastScrollTop = scrollTop;
});
// Crear el elemento modal en el body si no existe
const modal = document.createElement('div');
modal.id = 'modal-imagen';
modal.innerHTML = '<img src="">';
document.body.appendChild(modal);

// Función para abrir
function abrirImagen(src) {
    const modalImg = document.querySelector('#modal-imagen img');
    modalImg.src = src;
    modal.style.display = 'flex';
}

// Cerrar el modal al hacer clic en cualquier parte
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});