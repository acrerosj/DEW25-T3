const spanUsuario = document.getElementById('usuario');
const inputNombre = document.getElementById('nombre');

if (localStorage.usuario) {
    spanUsuario.textContent = localStorage.usuario;
}

inputNombre.addEventListener('input', (event) => {
    localStorage.usuario = inputNombre.value;
    spanUsuario.textContent = localStorage.usuario;
});