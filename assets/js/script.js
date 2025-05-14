// Obtener el botón
const btnSubir = document.getElementById('btnSubir');

// Mostrar el botón cuando se haga scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        btnSubir.classList.add('mostrar');
    } else {
        btnSubir.classList.remove('mostrar');
    }
});

// Función para subir al inicio de la página
btnSubir.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});