// Your code here
let input = document.querySelector("#addToDo");
let current;
var li = document.getElementsByTagName("li");

// Funcion para asignar el evento click para eliminar
let eliminarElemento = () => {
  // Se hace un loop en la lista "li" para poder agregar la funcion a cada li automaticamente
  for (let i = 0; i < li.length; i++) {
    // Se crea el eveneto usando una funcion de flecha
    li[i].addEventListener("click", () => {
      {
        //Se le asigna un display none a ese elemento.
        li[i].style.display = "none";
      }
    });
  }
};

eliminarElemento();

// Se utiliza current para seguir la modificacion del texto
input.addEventListener("change", (e) => {
  current = e.target.value;
});

input.addEventListener("keyup", (e) => {
  //keycode 13 === enter
  if (e.keyCode === 13) {
    //e.preventdefault = evita que se envie vacio
    e.preventDefault();

    // Crear nuevo elemento
    let nuevo = document.createElement("li");

    // Insertar texto al elemento usandpo template string
    nuevo.innerHTML = `<span><i class="fa fa-trash"></i></span>${current}`;

    // Encontrando UL por hijos del container
    let todosElementos = document.querySelector("#container").children;
    let ul = todosElementos[2];

    // Se agrega nuevo elemento a la lista
    ul.appendChild(nuevo);

    // Se Reasigna la funcion de "Eliminar" para que incluya a los elementos nuevos
    eliminarElemento();
  }
});
