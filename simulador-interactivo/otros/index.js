class Responsable {
  constructor(id, nombre, apellido, mail, telefono, password, paciente) {
    this.id = id,
      this.nombre = nombre,
      this.apellido = apellido,
      this.mail = mail,
      this.telefono = telefono,
      this.password = password;
    this.paciente = paciente;
  }
  definirPasword() {
    // const nuevoPasword = prompt("ingrese su nueva contraseña")
    //codigo para que el usuario defina la contraseña
    this.pasword = nuevoPasword;
  }
}
class Paciente {
  constructor(id, nombre, especie, sexo, raza, edad) {
    this.id = id,
      this.nombre = nombre,
      this.especie = especie,
      this.sexo = sexo,
      this.raza = raza,
      this.edad = edad;
  }
}
class Turno {
  constructor(id, responsable, paciente, tratamiento, fecha) {
    this.id = id,
      this.responsable = responsable,
      this.paciente = paciente,
      this.tratamiento = tratamiento,
      this.fecha = fecha;
  }
  cambiarTratamiento(tratamientoNuevo) {
    this.tratamiento = tratamientoNuevo;
  }
}
// traer datos responsables y turnos signados
const datosPacientes = obtenerDatosPacientes();
const obtenerTurnos = obtenerDatosTurnos2();

const titulos = document.querySelector("#titulos");
const formulario = document.querySelector("#formInicio")
const sectionUsuarioRegistrado = document.querySelector("#UsuarioRegistrado");

titulos.innerHTML = definirTitulos("SISTEMA DE GESTION DE TURNOS","VETERINARIO FISIOTERAPIA","Bienvenido")
formulario.innerHTML = definirFormnulario();

const opcionRegistrado = document.querySelector("#pacienteRegistrado");
const opcionNoRegistrado = document.querySelector("#pacienteNuevo");
const botonRegistrar = formulario.querySelector("#botonRegistrar");
const inputPacienteNuevo = formulario.querySelector("#inputPacienteNuevo")

opcionNoRegistrado.addEventListener("change", definirFormnulario);
opcionRegistrado.addEventListener("change",  definirFormnulario);

formulario.addEventListener("submit", validarDatos);


let nodoEmail = inputPacienteRegistrado.querySelector("#emailRegistrado");
let nodoPassword = inputPacienteRegistrado.querySelector("#password");

let nodoNombre = formulario.querySelector('#nombreNuevoPaciente')
let nodoApellido = formulario.querySelector('#apellidoNuevoPaciente')
let nodoEmailPaciente = formulario.querySelector('#emailNuevoPaciente')
let nodoTelefono = formulario.querySelector('#telefonoNuevoPaciente')

//eventos
nodoEmail.addEventListener("blur", validarEmail);
nodoPassword.addEventListener("blur", validarPassword);
nodoEmail.addEventListener("focus", limpiar);
nodoPassword.addEventListener("focus", limpiar);

const botonesModificarTratamineto = document.querySelectorAll(".btn-primary");
console.log(botonesModificarTratamineto)

function validarDatos(e){
  e.preventDefault();
  console.log(e.target.querySelector('#botonRegistrar'))
  nodoAuxiliar = e.target;
  let boton = e.target.querySelector('#botonRegistrar')    

  if(boton.innerHTML === "Registrar"){        
      // codigo para validar formnulario de registro

    }else if(boton.innerHTML === "ingresar"){
    nodoAuxiliar = e.target;
    nodoEmail = nodoAuxiliar.querySelector("#emailRegistrado")
    nodoPassword = nodoAuxiliar.querySelector("#password")
    let nodospanEmail = nodoAuxiliar.querySelector('#spanEmail')
    let nodospanpassword = nodoAuxiliar.querySelector('#spanPassword')
          
    const responsableValido = validarResponsable(nodoEmail.value,nodoPassword.value)
    
    if(responsableValido){
        formulario.hidden = true;
        titulos.innerHTML = definirTitulos("SISTEMA DE GESTION DE TURNOS", "MODIFICAR TRATAMIENTO", " ")
        mostrarTurnos();
        crearEventos();   
        
    }else{
        nodospanEmail.innerHTML="Usuario o contraseña incorrecto"
        nodospanEmail.classList.add("invalid-feedback")        
        nodospanpassword.innerHTML="Usuario o contraseña incorrecto"
        nodospanpassword.classList.add("invalid-feedback")
        nodoEmail.className = "form-control is-invalid"
        nodoPassword.className = "form-control is-invalid"
    }    
    }  
  }  
  function validarResponsable(mail,pasword){
    //const responsablesRecuperados = obtenerDatosClientes();
      
    //let resultado = responsablesRecuperados.find(element => element.mail === mail )
    let resultado = datosPacientes.find(element => element.mail === mail ) 
    if(resultado !== undefined){
      if(resultado.password === pasword){
        return true
      }else return false 
    }else return false  
    
  }
function validarEmail(e) {
    limpiar(e);
    let input = e.target.parentElement;
    let nodoSpan = input.querySelector("span");
    let patronEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
  
    if (!patronEmail.test(e.target.value)) {
      nodoSpan.innerHTML = "Ingrese un e-mail valido xxx@xxx.xxx";
      nodoSpan.classList.add("invalid-feedback");
      e.target.className = "form-control is-invalid";
    } else {
      e.target.className = "form-control is-valid";
    }
    validarBotton();
  }
  function limpiar(e) {
    e.target.className = "form-control";
    let input = e.target.parentElement;
    let nodoSpan = input.querySelector("span");
    nodoSpan.innerHTML = "";
  }
  function validarPassword(e) {
    limpiar(e);
    let input = e.target.parentElement;
    let nodoSpan = input.querySelector("span");
  
    let password = e.target.value;
  
    if (password.length < 4 || password.length > 4 || isNaN(password)) {
      nodoSpan.innerHTML = "La contraseña debe ser numerica y de 4 digitos";
      nodoSpan.classList.add("invalid-feedback");
      e.target.className = "form-control is-invalid";
    } else {
      e.target.className = "form-control is-valid";
    }
    validarBotton();
  }
  function validarBotton() {  
    if (
      nodoEmail.className === "form-control is-valid" &&
      nodoPassword.className === "form-control is-valid"
    ) {
      botonRegistrar.disabled = false;
    } else {
      botonRegistrar.disabled = true;
    }
  }
function definirFormnulario(e){
    
    let inputPacienteNuevo = document.querySelector('#inputPacienteNuevo')
    let inputPacienteRegistrado = document.querySelector("#inputPacienteRegistrado");
    let parrafo;
       
    if(inputPacienteRegistrado === null && e===undefined){
        parrafo = `<div class="col-6 justify-content-around m-auto p-2" id="inputPacienteNuevo" hidden>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="nombreNuevoPaciente"
            placeholder="Ingrese su nombre"            
          />
          <label for="floatingInput">Nombre</label>
          <span></span>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="apellidoNuevoPaciente"
            placeholder="Ingrese su nombre"           
          />
          <label for="floatingInput">Apellido</label>
          <span></span>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="emailNuevoPaciente"
            placeholder="name@example.com"            
          />
          <label for="floatingInput">Email address</label>
          <span></span>
        </div>
        <div class="form-floating mb-3">
          <input
            type="telefono"
            class="form-control"
            id="telefonoNuevoPaciente"
            placeholder="telefono"            
          />
          <label for="floatingPassword">Telefono</label>
          <span></span>
        </div>
      </div>
      <div class="col-6 justify-content-around m-auto p-2" id="inputPacienteRegistrado" show>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="emailRegistrado"
            placeholder="direccion de e-mail"
            
          />
          <label for="floatingInput">Email address</label>
          <span id="spanEmail"></span>
          
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Contraseña"
            
          />
          <label for="floatingPassword">Contraseña</label>
          <span id="spanPassword"></span>
        </div>        
      </div>
      <div class="col-6 justify-content-around m-auto p-2" id="inputSeleccion">
        <div class="form-check" id="pacienteRegistrado">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="pacienteRegistrado"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Paciente Registrado
          </label>
        </div>
        <div class="form-check" id="pacienteNuevo">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="pacienteNuevo"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Registrar Paciente
          </label>
        </div>
      </div>
      <div class="col-6 justify-content-around m-auto p-2" id="botton">
        <button
          type="submit"
          class="btn btn-primary"
          id="botonRegistrar"
          disabled          
        >ingresar</button>
      </div>      
        `
        return parrafo;
    }
    
    if(e.target.id === "pacienteNuevo"){
        
        titulos.innerHTML = definirTitulos("SISTEMA DE GESTION DE TURNOS","Vamos a comenzar con el registro, en 3 simples pasos vas a poder solicitar su turno.","Ingrese los datos del Responsable del paciente")
        inputPacienteNuevo.hidden = false
        inputPacienteRegistrado.hidden = true
        botonRegistrar.hidden = false
        botonRegistrar.disabled = true 
        botonRegistrar.innerHTML = "Registrar";
               

    }else{        
        titulos.innerHTML = definirTitulos("SISTEMA DE GESTION DE TURNOS","Ingrese su usuario y contraseña","Bienvenidos")
        inputPacienteNuevo.hidden = true
        inputPacienteRegistrado.hidden = false
        botonRegistrar.hidden = false
        botonRegistrar.disabled = true              
        botonRegistrar.innerHTML = "ingresar";
        
    }
    
}
function definirTitulos(principal,secundario,terciario){
    let titulo = `<h1 id="principal">${principal}</h1>
 <h2 id="secundario">${secundario}</h2>
 <h3 id="terciario">${terciario}</h3>`
 return titulo;
}
function mostrarTurnos() {
  obtenerTurnos.forEach((element) => {
    sectionUsuarioRegistrado.innerHTML += `<div id=${element.id}class="card w-25 p-3">
        <div class="card-body ">
          <p>Nombre : ${element.responsable}</p>
          <p>Paciente : ${element.paciente}</p>
          <p>Tratamiento : ${element.tratamiento}</p>
          <p>Fecha : ${element.fecha}</p>
          <button id=${element.id} type="button" class="btn btn-primary">Cambiar Tratamiento</button>
        </div>
      </div>`;
  });
}
function crearEventos() {
  const botonesModificarTratamineto = document.querySelectorAll(".btn-primary");
  botonesModificarTratamineto.forEach((boton) => {
    boton.onclick = () => {
      const turnoSeleccionado = obtenerTurnos.find(
        (turno) => turno.id === parseInt(boton.id)
      );
      //turnoSeleccionado = obtenerTurnos.find(turno => turno.id === parseInt(boton.id) )
      const nuevoTratamiento = prompt("Ingrese el nuevo tratamiento");
      obtenerTurnos[parseInt(boton.id)].cambiarTratamiento(nuevoTratamiento);

      sectionUsuarioRegistrado.innerHTML = "";
      mostrarTurnos();
      crearEventos();

      //console.log(obtenerTurnos[parseInt(boton.id)].tratamiento)
      //console.log(turnoSeleccionado)
    };
  });
}
function obtenerDatosTurnos2() {
  const turno0 = new Turno(
    0,
    "Lisandro",
    "Zaira",
    "fisioterapia",
    "15/11/2022"
  );
  const turno1 = new Turno(1, "Florencia", "Emir", "Lampara", "16/11/2022");
  const turno2 = new Turno(2, "Julian", "Zafiro", "Masajes", "17/11/2022");
  const turno3 = new Turno(
    3,
    "Leandro",
    "egra",
    "RadioFrecuencia",
    "18/11/2022"
  );
  const turno4 = new Turno(
    4,
    "Josefina",
    "Argentina",
    "fisioterapia",
    "18/11/2022"
  );
  const turno5 = new Turno(5, "Fausto", "Zaira", "fisioterapia", "18/11/2022");
  const turno6 = new Turno(
    6,
    "Evangelina",
    "Zaira",
    "fisioterapia",
    "16/11/2022"
  );

  const turnos = [turno0, turno1, turno2, turno3, turno4, turno5, turno6];

  return turnos;
}
function obtenerDatosPacientes() {
  const paciente0 = new Paciente(0, "Dalma", "canino", "hembra", "dalmata", 7);
  const paciente1 = new Paciente(1, "Pedro", "felino", "macho", "siames", 3);
  const paciente2 = new Paciente(
    2,
    "Zaira",
    "felino",
    "hembra",
    "callejero",
    8
  );
  const paciente3 = new Paciente(3, "Emir", "canino", "macho", "Ovejero", 12);
  const paciente4 = new Paciente(4, "Zara", "felino", "hembra", "cocker", 3);
  const paciente5 = new Paciente(
    5,
    "cerdito",
    "no-tradicional",
    "macho",
    "siames",
    8
  );
  const paciente6 = new Paciente(
    6,
    "conejito",
    "no-tradicional",
    "hembra",
    "callejero",
    1
  );

  const responsable0 = new Responsable(
    0,
    "Lisandro",
    "Baldoma",
    "baldomalisandro@hotmail.com",
    "3416864621",
    "1234",
    paciente0
  );
  const responsable1 = new Responsable(
    1,
    "Florencia",
    "Tiberti",
    "flortiberti@hotmail.com",
    "3415678578",
    "1234",
    paciente1
  );
  const responsable2 = new Responsable(
    2,
    "Andres",
    "alonzo",
    "baldomalisandro@hotmail.com",
    "3416864621",
    "1234",
    paciente2
  );
  const responsable3 = new Responsable(
    3,
    "Julieta",
    "messi",
    "flortiberti@hotmail.com",
    "3415678578",
    "1234",
    paciente3
  );
  const responsable4 = new Responsable(
    4,
    "Leandro",
    "paredes",
    "baldomalisandro@hotmail.com",
    "3416864621",
    "1234",
    paciente4
  );
  const responsable5 = new Responsable(
    5,
    "pedro",
    "tiburon",
    "flortiberti@hotmail.com",
    "3415678578",
    "1234",
    paciente5
  );
  const responsable6 = new Responsable(
    6,
    "Julian",
    "lopez",
    "flortiberti@hotmail.com",
    "3415678578",
    "1234",
    paciente6
  );
  const datos = [
    responsable0,
    responsable1,
    responsable2,
    responsable3,
    responsable4,
    responsable5,
    responsable6,
  ];

  return datos;
}


