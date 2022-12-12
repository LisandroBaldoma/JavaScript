var todosUsuarios

ejecutarCodigo()

async function ejecutarCodigo() {
  traerYMostrarUsuarios()
  configurarBotonAgregar()
}

async function traerYMostrarUsuarios() {
  const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
  todosUsuarios = respuesta.data

  mostrarListadoClientes(todosUsuarios.reverse())
}

function configurarBotonAgregar() {
  var boton = document.getElementById('agregar');
  boton.addEventListener("click", agregar);
}


function mostrarListadoClientes(usuarios) {
  // selecciona el elemento con id "listado" del HTML
  var tabla = document.querySelector("#listado")
  var tbody = tabla.querySelector("tbody")
  // borra las filas para no duplicarlas si la función se llama más de una vez
  tbody.innerHTML = ""
  // recorre la lista de clientes y agrega una fila con sus
  // correspondientes celdas por cada uno

  for (var i = 0; i < usuarios.length; i++) {

    var usuario = usuarios[i]
    var name = usuario.name
    var username = usuario.username
    var email = usuario.email
    var calle = usuario.address.street
    var id = usuario.id

    var filafinal = '<tr><td>' + name + '</td><td>' + username + '</td><td>' + email +
      '</td><td>' + calle + '</td><td>' + '<button onclick="bajaCliente(' + id + ')">' +
      "eliminar" + "</button>" + '</td></tr>';

    tbody.insertAdjacentHTML('beforeend', filafinal);

  }

  // cambia la visibilidad de la tabla que estaba oculta
  tabla.style.display = "block"

}

async function agregar() {

  var inputNombre = document.querySelector('#nombre')
  var inputUsuario = document.querySelector('#usuario')
  var inputMail = document.querySelector('#mail')
  var inputDireccion = document.querySelector('#direccion')
  var nuevoUsuario = [];
  //var ultimoId = todosUsuarios.length + 1

  var nuevoUsuarioDatos = {
    "name": inputNombre.value,
    "username": inputUsuario.value,
    "email": inputMail.value,
    "address": {
      "street": inputDireccion.value,
    }

  }

  const respuestaDelPost = await axios.post('https://jsonplaceholder.typicode.com/users', nuevoUsuarioDatos)

  var nuevoUsuario = respuestaDelPost.data


  todosUsuarios.push(nuevoUsuario)



  //});
  //console.log(todosUsuarios.id)
  // todosUsuarios.push(nuevoUsuarioConId)     

  mostrarListadoClientes(todosUsuarios)

  //console.log(respuestaDelPost.data.id)
  //console.log(nuevoUsuarioConId)
  //console.log(nuevoUsuario)
  console.log(todosUsuarios)


  // limpia el formulario para poder ingresar otro
  inputNombre.value = ''
  inputUsuario.value = ''
  inputMail.value = ''
  inputDireccion.value = ''
}

async function bajaCliente(id) {
  // var tabla = document.querySelector("#listado");
  // tabla.deleteRow(posicion)
  // splice se para en el indice y elimina la cantidad de elementos especificada por el segundo argumento
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#sintaxis
  
  await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)

  todosUsuarios = todosUsuarios.filter(function(usuario) {
    return usuario.id !== id
  })

  mostrarListadoClientes(todosUsuarios)
}