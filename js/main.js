(function(){
    
    //Variables
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");

    //Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value;
        var nuevaTarea = document.createElement("li");
        var enlace = document.createElement("a");
        var contenido = document.createTextNode(tarea);

        if (tarea == "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            tareaInput.className = "error";
            return false;
        }

        //agregamos el contenido al enlace
        enlace.appendChild(contenido);
        //le agregamos un atributo href (sin esto, no sería linkeable)
        enlace.setAttribute("href","#");
        //agrega el enlace a la nueva tarea
        nuevaTarea.appendChild(enlace);
        //agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
        //limpiar el input automáticamente
        tareaInput.value = "";

        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
    };
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };
    var eliminarTarea = function(){
        this.parentNode.removeChild(child);
    };

    //Eventos
    //agrega tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    //comprueba input
    tareaInput.addEventListener("click", comprobarInput);

    //ejecuta un ciclo para eliminar elementos de la lista
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    };
}())

