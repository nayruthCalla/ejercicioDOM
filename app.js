// Función para agregar una nueva tarea a la lista
function agregarTarea() {
  const nuevaTareaInput = ...;
  const nuevaTareaTexto = ...;

  if (nuevaTareaTexto !== "") {
    const listaTareas = ...;
    const nuevaTareaElemento = ...;
    nuevaTareaElemento.textContent = ...;

    const completarBoton = ...;
    completarBoton.textContent = "Completar";
    completarBoton.onclick = function () {
      nuevaTareaElemento.classList.toggle("completada");
    };

    const eliminarBoton = ...;
    eliminarBoton.textContent = "Eliminar";
    eliminarBoton.onclick = function () {
      listaTareas.removeChild(nuevaTareaElemento);
    };

    // nuevaTareaElemento agregar elementos completarBoton y eliminarBoton a la nueva tarea


    listaTareas.appendChild(nuevaTareaElemento);
    nuevaTareaInput.value = "";
  }
}
