const inputTarea = document.getElementById('tarea');
const ulTareas = document.getElementById('tareas');

// Cuando cargo la página, leo las tareas que había.

// let tareas = []; // Se inicia vacío si no hay tareas en local.
// if (localStorage.tareas) {
//     // Convierto el string obtenido de local a la estructura que contiene (array)
//     tareas = JSON.parse(localStorage.tareas);
// }

let tareas = localStorage.tareas ? JSON.parse(localStorage.tareas) : [];

function mostrarTareas() {
    ulTareas.innerHTML = '';
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea;
        ulTareas.append(li);
    });
}

mostrarTareas();

inputTarea.addEventListener('keypress', (event) => {
    //console.log(event.key);
    if (event.key === "Enter") {
        //console.log("has pulsado enter");
        let tarea = inputTarea.value.trim();
        if ( tarea.length > 0 ) {
            tareas.push(tarea);
            inputTarea.value = '';
            mostrarTareas();
            actualizarStorage();
        }
    }
});

function actualizarStorage() {
    // El array se convierte en string y se guarda en local.
    localStorage.tareas = JSON.stringify(tareas);
}

ulTareas.addEventListener('click', (event) => {
    //console.log(event.target.tagName);
    if (event.target.tagName === 'LI') {
        tareas = tareas.filter(tarea => tarea != event.target.textContent);
        mostrarTareas();
        actualizarStorage();
    }
});


