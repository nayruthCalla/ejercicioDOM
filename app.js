// Función para agregar una nueva tarea a la lista
function agregarTarea() {

  // Obetenemos el id nuevaTarea y la asignamos a la variable nuevaTareaInput para realizar operaciones despues
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const nuevaTareaTexto = nuevaTareaInput.value; // Obtenemos el valor del input, es decir obtenemos el texto que se ingreserá por el input

  if (nuevaTareaTexto !== "") { // Validamos que el input no este vacio
    const listaTareas = document.getElementById("listaTareas"); // Obtenemos el id del contenedor de la lista de tareas
    const nuevaTareaElemento = document.createElement("li"); // creamos una etiqueta li en html desde javascript
    
    nuevaTareaElemento.textContent = nuevaTareaTexto; // asigna el contenido de texto especificado en nuevaTareaTexto al elemento HTML representado por nuevaTareaElemento.

    const completarBoton = document.createElement("button"); // creamos un button 
    completarBoton.textContent = "Completar"; // Asignamos el texto de Completar
    completarBoton.classList.add("btn-completar"); // Le asignamos una clase para darle estilos posteriormente al button creado
    completarBoton.onclick = function () { // función que cuando haga un click agregue la clase completada al elemento li
      nuevaTareaElemento.classList.toggle("completada");
    };

    const eliminarBoton = document.createElement("button"); // creamos un button  
    eliminarBoton.textContent = "Eliminar"; // Asignamos el texto de Eliminar
    eliminarBoton.classList.add("btn-eliminar");// Le asignamos una clase para darle estilos posteriormente al button creado
    eliminarBoton.onclick = function () {// función que cuando haga un click elimine el elemento li
      listaTareas.removeChild(nuevaTareaElemento);
    };

    // nuevaTareaElemento agregar elementos completarBoton y eliminarBoton a la nueva tarea
    nuevaTareaElemento.appendChild(completarBoton); // Agrega como hijos los elementos creados
    nuevaTareaElemento.appendChild(eliminarBoton);
    listaTareas.appendChild(nuevaTareaElemento);
    nuevaTareaInput.value = "";
  }
}
