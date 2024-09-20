// scripts.js
function filtrar(tipo) {
    let recursos = document.querySelectorAll('.recurso');
    recursos.forEach(function(recurso) {
        recurso.style.display = 'none'; // Oculta todos los recursos
        if (recurso.dataset.categoria === tipo || recurso.dataset.area === tipo || recurso.dataset.grado === tipo) {
            recurso.style.display = 'block'; // Muestra solo los que coinciden con el filtro
        }
    });
}