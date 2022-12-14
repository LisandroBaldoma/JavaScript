const consultarDatos = async () => {
  const response = await fetch("./json/datos.json");
  const responsables = await response.json();
  return responsables;
};
const responsableNuevo = [];
const pacienteNuevo = [];
// SECCION MENU-PRINCIPAL DONDE VOY AGREGANDO ELEMENTOS AL DOM
const menuPrincipal = document.querySelector("#menuPrincipal");

menuPrincipal.innerHTML = `<div id="sectionLogin" class="mostrarFormulario ">
<div class="row">
  <div class="col-md-4 mx-auto">
    <div class="card mt-4 text-center">
      <div class="card-header">
        <h1>Ingresar</h1>
      </div>
      <div class="card-body bg-light">
        <form id="formularioLogin">
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label"
              >Email</label
            >
            <div class="col-sm-10">
              <input type="email" class="form-control" id="emailIngresar" value="baldomalisandro@hotmail.com" required />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label"
              >Password</label
            >
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="password"
                value="1234"
              />
            </div>
          </div>
          <fieldset class="row mb-3">
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="usuarioRegistradoIngresar"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="gridRadios1">
                  Usuario Registrado
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="usuarioNuevoIngresar"
                  value="option2"
                />
                <label class="form-check-label" for="gridRadios2">
                  Nuevo Usuario
                </label>
              </div>
            </div>
          </fieldset>

          <button type="submit" class="btn btn-primary" id="btnIngresar">Ingresar</button>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
<div id="sectionSignin" class="ocultarFormulario">
  <div class="row">
    <div class="col-md-4 mx-auto">
      <div class="card mt-4 text-center">
          <div class="card-header">
          <h1>Registrarse</h1>
        </div>
        <div class="card-body">
          <form id="formularioSigin">
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label"
                >Nombre</label
              >
              <div class="col-sm-10">
                <input type="text" class="form-control" id="nombreRegistrar" value="Lisandro" required />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label"
                >Apellido</label
              >
              <div class="col-sm-10">
                <input type="text" class="form-control" id="apellido" value="Baldoma"/>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label"
                >Email</label
              >
              <div class="col-sm-10">
                <input type="email" class="form-control" id="emailRegistrar" value="bald2omalisandro@hotmail.com" required />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label"
                >telefono</label
              >
              <div class="col-sm-10">
                <input type="number" class="form-control" id="telefono" value="3146864621" />
              </div>
            </div>
            <fieldset class="row mb-3">
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="usuarioRegistradoRegistrar"
                    value="option1"
                    
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Usuario Registrado
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="usuarioNuevoRegistrar"
                    value="option2"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Nuevo Usuario
                  </label>
                </div>
              </div>
            </fieldset>  
            <button type="submit" class="btn btn-primary" id="btnRgistrar">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`;
// EVENTOS PARA CAMBIO DE FORMULARIO INGRESAR - REGISTRAR
const seccionLogin = menuPrincipal.querySelector("#sectionLogin");
const seccionSigin = menuPrincipal.querySelector("#sectionSignin");

const formLogin = document.querySelector("#formularioLogin");
const formSigin = document.querySelector("#formularioSigin");

let ingresarUsuarioReg = formLogin.querySelector("#usuarioRegistradoIngresar");
let ingresarUsuarioNue = formLogin.querySelector("#usuarioNuevoIngresar");
let registroUsuarioReg = formSigin.querySelector("#usuarioRegistradoRegistrar");
let registroUsuarioNue = formSigin.querySelector("#usuarioNuevoRegistrar");

ingresarUsuarioReg.addEventListener("change", cambiarFormulario);
ingresarUsuarioNue.addEventListener("change", cambiarFormulario);
registroUsuarioReg.addEventListener("change", cambiarFormulario);
registroUsuarioNue.addEventListener("change", cambiarFormulario);

// EVENTO BLUR-FOCUS PARA VALIDAR CLASES CAMPOS FORMLOGIN

const inputFormSigin = formSigin.getElementsByClassName("form-control");
let inputEmail = formLogin.querySelector("#emailIngresar");
let inputPassword = formLogin.querySelector("#password");
inputEmail.addEventListener("blur", validarCampo);
inputPassword.addEventListener("blur", validarCampo);
inputEmail.addEventListener("focus", limpiarCampos);
inputPassword.addEventListener("focus", limpiarCampos);

//EVENTOS PARA CONTROLAR EL ESTADO DEL BOTON FORMSIGIN

let inputNombre = inputFormSigin[0];
let inputApellido = inputFormSigin[1];
let inputEmailNuevo = inputFormSigin[2];
let inputtelefono = inputFormSigin[3];

// EVENTO BLUR-FOCUS PARA VALIDAR CLASES CAMPOS FORMSIGIN PACIENTES

inputNombre.addEventListener("blur", validarCampo);
inputApellido.addEventListener("blur", validarCampo);
inputEmailNuevo.addEventListener("blur", validarCampo);
inputtelefono.addEventListener("blur", validarCampo);
inputNombre.addEventListener("focus", limpiarCampos);
inputApellido.addEventListener("focus", limpiarCampos);
inputEmailNuevo.addEventListener("focus", limpiarCampos);
inputtelefono.addEventListener("focus", limpiarCampos);

// BOTONES REGISTRAR - INGRESAR
let bottonFormLogin = formLogin.querySelector("#btnIngresar");
let bottonFormSigin = formSigin.querySelector("#btnRgistrar");

formLogin.addEventListener("submit", ingresarForm);
formSigin.addEventListener("submit", ingresarForm);

//FUNCION PARA CARGAR EL MENU PRINCIPAL Y FOMRULARIO REGISTRO DE PACIENTES
function ingresarForm(e) {
  e.preventDefault();
  let input = e.target;

  if (input.id === "formularioLogin") {
    let emailIngresar = document.querySelector("#emailIngresar");
    let passwordIngresar = document.querySelector("#password");
    let span = input.querySelector("#span");

    consultarDatos().then((responsable) => {
      let mailValidar = responsable.find(
        (elemento) => elemento.email === emailIngresar.value
      );

      if (mailValidar == undefined) {
        if (span.classList.contains("valid-feedback")) {
          span.classList.replace("valid-feedback", "invalid-feedback");
          emailIngresar.classList.replace("is-valid", "is-invalid");
          span.innerHTML =
            "El mil ingresado no esta registrado en nuestra base de datos";
        }
      } else if (mailValidar.password === passwordIngresar.value) {
        mostrarMenu();
        seccionLogin.classList.replace(
          "mostrarFormulario",
          "ocultarFormulario"
        );        
      } else {
        span.classList.replace("valid-feedback", "invalid-feedback");
        passwordIngresar.classList.replace("is-valid", "is-invalid");
        span.innerHTML =
          "La contraseña ingresada no coincide con la registrada en nuestra base de datos";
      }
      console.log(emailIngresar.value);
      console.log(mailValidar);
    });
  } else {
    let nombreRegistrar = input.querySelector("#nombreRegistrar");
    let apellidoRegistrar = input.querySelector("#apellido");
    let emailRegistrar = input.querySelector("#emailRegistrar");
    let telefonoRegistrar = input.querySelector("#telefono");

    consultarDatos().then((responsable) => {
      let mailValidar = responsable.find(
        (elemento) => elemento.email === emailRegistrar.value
      );
      
      if (mailValidar == undefined) {       
        let seccionSiginPacientes = obtenerSeccion("seccionSiginPacientes");
        renderMenu("section", "sectionSigninPaciente", seccionSiginPacientes);

        seccionSigin.classList.replace(
          "mostrarFormulario",
          "ocultarFormulario"
        );

        let registrarPaciente = menuPrincipal.querySelector(
          "#formularioSigninPaciente"
        );
        // EVENTO SUBMIT FORM REGISTRAR PACIENTE
        registrarPaciente.addEventListener("submit", ingresarPaciente);

        let select = registrarPaciente.querySelectorAll("select");
        let input = registrarPaciente.querySelectorAll("input");

        select[0].addEventListener("blur", validarCampoPaciente);
        select[1].addEventListener("blur", validarCampoPaciente);
        select[2].addEventListener("blur", validarCampoPaciente);

        input[0].addEventListener("blur", validarCampoPaciente);
        input[1].addEventListener("blur", validarCampoPaciente);
        input[0].addEventListener("focus", limpiarCampos);
        input[1].addEventListener("focus", limpiarCampos);
      } else {
        let span = emailRegistrar.parentElement.querySelector("#span");
        span.classList.replace("valid-feedback", "invalid-feedback");
        emailRegistrar.classList.replace("is-valid", "is-invalid");
        span.innerHTML = "El email ingresado ya se encuentra registrado";
        console.log("El usuiario existe");
        // 1° ofrecer recuperar contraseña
      }
    });    
    let nuevoResponsable = {
      nombre: nombreRegistrar.value,
      apellido: apellidoRegistrar.value,
      email: emailRegistrar.value,  
      telefono: telefonoRegistrar.value,
    };
    //Registrar Usuario
    responsableNuevo.push(nuevoResponsable);    
  }
}
function validarCampoPaciente(e) {
  let input = e.target;
  let nodoPadre = input.parentElement;
  let nodoSpan = nodoPadre.querySelector("#span");
  let span = document.createElement("div");
  span.id = "span";

  if (nodoPadre.querySelector("#span") === null) {
    span.innerHTML = "";
    nodoPadre.appendChild(span);
  } else {
    nodoSpan.classList.remove("invalid-feedback", "valid-feedback");
    nodoSpan.innerHTML = "";
  }
  if (input.type === "text") {
    if (input.value.length === 0) {
      nodoSpan = nodoPadre.querySelector("#span");
      nodoSpan.innerHTML = "El campo nombre no debe estar vacio";
      nodoSpan.classList.add("invalid-feedback");
      input.classList.add("is-invalid");
    } else if (input.classList.contains("is-invalid")) {
      input.classList.replace("is-invalid", "is-valid");
      let nodoSpan = nodoPadre.querySelector("#span");
      nodoSpan.innerHTML = "El campo es valido";
      nodoSpan.classList.add("valid-feedback");
    } else {
      input.classList.add("is-valid");
      let nodoSpan = nodoPadre.querySelector("#span");
      nodoSpan.innerHTML = "El campo es valido";
      nodoSpan.classList.add("valid-feedback");
    }
  } else if (input.type === "number") {
    if (input.value == 0 || input.value > 30 || input.value === "") {
      nodoSpan = nodoPadre.querySelector("#span");
      nodoSpan.innerHTML =
        "La edad debe ser entre 0 y 30 y no debe estar vacia";
      nodoSpan.classList.add("invalid-feedback");
      input.classList.add("is-invalid");
    } else if (input.classList.contains("is-invalid")) {
      input.classList.replace("is-invalid", "is-valid");
      let nodoSpan = nodoPadre.querySelector("#span");
      nodoSpan.innerHTML = "El campo es valido";
      nodoSpan.classList.add("valid-feedback");
    } else {
      input.classList.add("is-valid");
      let nodoSpan = nodoPadre.querySelector("#span");
      nodoSpan.innerHTML = "El campo es valido";
      nodoSpan.classList.add("valid-feedback");
    }
  }
}
//FUNCION PARA VALIDAR Y REGISTRAR PACIENTE
function ingresarPaciente(e) {
  e.preventDefault();
  mostrarMenu()
  let seccionRegistrarPaciente = document.querySelector(
    "#sectionSigninPaciente"
  );
  /* DATOS DEL FORMNULARIO SIGIN PACIENTE
   let registrarPaciente = document.querySelector("#formularioSigninPaciente");
  let select = registrarPaciente.querySelectorAll("select");
  let input = registrarPaciente.querySelectorAll("input");

  let nombrePaciente = input[0].value;
  let edadPaciente = input[1].value;
  
  let raza = select[0].selectedIndex;
  let especie = select[1].selectedIndex;
  let sexo = select[2].selectedIndex;

  let nuevoPaciente = {
    nombre: nombrePaciente,
    edad: edadPaciente,
    raza: raza,
    especie: especie,
    sexo: sexo,
  };

  

  pacienteNuevo.push(nuevoPaciente);
  console.log("agregar paciente a la bd ");
  console.log(pacienteNuevo);
  console.log(responsableNuevo);
  */
  
  seccionRegistrarPaciente.classList.add("ocultarFormulario"); 
  
  //let seccionBuscarPaciente = obtenerSeccion("buscarPacientes")
  //renderMenu("section", "buscarPacientes", seccionBuscarPaciente)
  // agregar datos para la busqueda  
  
}
function mostrarMenu(){
  let menuPrincipal = obtenerSeccion("menuPrincipal");
  renderMenu("section", "menuRegistrado", menuPrincipal);  
  let btnPacientes = document.getElementById("btnPacientes")  
  btnPacientes.addEventListener('click', mostrarOpcion)
}
function mostrarOpcion (e){
  let sectionBuscarPaciente = document.getElementById("buscarPacientes")
    console.log(sectionBuscarPaciente)
  
  if(e.target.id === "btnPacientes"){
    let sectionBuscarPaciente = document.getElementById("buscarPacientes")
    //console.log(sectionBuscarPaciente)
    if(sectionBuscarPaciente == null){
      let seccionBuscarPaciente = obtenerSeccion("buscarPacientes")
      renderMenu("section", "buscarPacientes", seccionBuscarPaciente)
    }
    let headLista = document.getElementById("headLista")
    let bodyLista = document.getElementById("bodyLista")
    let responsablesBackup = []  
    
    consultarDatos().then((responsable) => {
      responsable.forEach((element) => {
        bodyLista.innerHTML += `<tr id="${element.id}">
        <th scope="row">${element.id}</th>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.email}</td> 
        <td>${element.telefono}</td>     
        <td><button id="btnEditar${element.id}" type="button" class="btn btn-outline-primary">Pacientes</button></td>
        <td><button id="btnDeleted${element.id}"type="button" class="btn btn-outline-primary">Pacientes</button></td>
        </tr>`
            
      });
    });
    
    
    
    
   
  }// continuas con el else y programar el siguiente boton
}
function resultadoBusqueda(e){
  e.preventDefault()
  console.log(e.target)
}
//FUNCION PARA EL FOCUS PARA LIMPIAR LAS CLASES
function limpiarCampos(e) {
  let input = e.target;
  //let span = e.target.parentElement.querySelector("#span");
  let nodoPadre = input.parentElement;
  let nodoSpan = nodoPadre.querySelector("#span");
  let span = document.createElement("div");
  span.id = "span";

  if (nodoPadre.querySelector("#span") === null) {
    span.innerHTML = "";
    nodoPadre.appendChild(span);
  } else {
    input.classList.remove("is-valid", "is-invalid");
    span.classList.remove("valid-feedback", "invalid-feedback");
    span.innerHTML = "";
  }
}
//FUNCION PARA EL EVENTO BLUR VALIDAR CAMPOS FORMULARIOS
function validarCampo(e) {
  let input = e.target;
  let nodoPadre = input.parentElement;
  let nodoSpan = nodoPadre.querySelector("#span");
  let span = document.createElement("div");
  span.id = "span";
  if (nodoPadre.querySelector("#span") === null) {
    span.innerHTML = "";
    nodoPadre.appendChild(span);
  } else {
    nodoSpan.classList.remove("invalid-feedback", "valid-feedback");
    nodoSpan.innerHTML = "";
  }
  if (input.type === "email") {
     let patronEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
    if (!patronEmail.test(input.value)) {
      if (input.classList.contains("form-control")) {
        input.classList.add("is-invalid");
        nodoSpan = nodoPadre.querySelector("#span");
        nodoSpan.innerHTML = "Ingrese un Email Valido xxx@zzz.xxx";
        nodoSpan.classList.add("invalid-feedback");
      }
    } else if (input.classList.contains("form-control", "is-invalid")) {
      e.target.classList.replace("is-invalid", "valid");
      nodoSpan = nodoPadre.querySelector("#span");
      nodoSpan.classList.add("valid-feedback");
      nodoSpan.innerHTML = "Email Correcto";
    }
    input.classList.add("is-valid");
  } else if (input.type === "password") {
    limpiarCampos;
    let passworIngresado = input.value;
    if (
      passworIngresado.length < 4 ||
      passworIngresado.length > 4 ||
      isNaN(passworIngresado)
    ) {
      if (input.classList.contains("form-control")) {
        input.classList.add("is-invalid");
        nodoSpan = nodoPadre.querySelector("#span");
        nodoSpan.innerHTML = "Password debe ser numerico y de 4 digitos";
        nodoSpan.classList.add("invalid-feedback");
      }
    } else if (input.classList.contains("form-control", "is-invalid")) {
      input.classList.replace("is-invalid", "is-valid");
      nodoSpan = nodoPadre.querySelector("#span");
      nodoSpan.classList.add("valid-feedback");
      nodoSpan.innerHTML = "Pasword Valido";
    }
    input.classList.add("is-valid");
  } else if (input.type === "text") {
    if (input.value.length < 4 || input.length === 0) {
      if (input.classList.contains("form-control")) {
        input.classList.add("is-invalid");
        if (input.id === "apellido") {
          nodoSpan = nodoPadre.querySelector("#span");
          nodoSpan.innerHTML =
            "El compo Apellido debe contener 4 caracteres como minimo";
          nodoSpan.classList.add("invalid-feedback");
        } else {
          nodoSpan = nodoPadre.querySelector("#span");
          nodoSpan.innerHTML =
            "El compo Nombre debe contener 4 caracteres como minimo";
          nodoSpan.classList.add("invalid-feedback");
        }
      }
    } else if (input.classList.contains("form-control", "is-invalid")) {
      e.target.classList.replace("is-invalid", "valid");
      if (input.id === "apellido") {
        nodoSpan = nodoPadre.querySelector("#span");
        nodoSpan.innerHTML = "El compo Apellido es valido";
        nodoSpan.classList.add("valid-feedback");
      } else {
        nodoSpan = nodoPadre.querySelector("#span");
        nodoSpan.innerHTML = "El compo Nombre es valido";
        nodoSpan.classList.add("valid-feedback");
      }
    }
    input.classList.add("is-valid");
  } else if (input.type === "number") {
    if (input.value.length > 10 || input.value.length < 4) {
      if (input.classList.contains("form-control")) {
        input.classList.add("is-invalid");
        nodoSpan = nodoPadre.querySelector("#span");
        nodoSpan.innerHTML =
          "El campo Telefono debe contener 10 caracteres como maximo";
        nodoSpan.classList.add("invalid-feedback");
      }
    } else if (input.classList.contains("form-control", "is-invalid")) {
      input.classList.replace("is-invalid", "is-valid");
      nodoSpan = nodoPadre.querySelector("#span");
      nodoSpan.innerHTML = "El compo Telefono es valido";
      nodoSpan.classList.add("valid-feedback");
    }
    input.classList.add("is-valid");
  }
}
//FUNCION PARA EL EVENTO CHANGE DE SELECCION DE FORMULARIOS
function cambiarFormulario(e) {
  if (e.target.id === "usuarioNuevoIngresar") {
    if (seccionLogin.classList.contains("mostrarFormulario")) {
      seccionLogin.classList.remove("mostrarFormulario");
      seccionLogin.classList.add("ocultarFormulario");
      seccionSigin.classList.remove("ocultarFormulario");
      seccionSigin.classList.add("mostrarFormulario");
      registroUsuarioNue.checked = true;
    }
  } else if (e.target.id === "usuarioRegistradoRegistrar") {
    if (seccionSigin.classList.contains("mostrarFormulario")) {
      seccionSigin.classList.remove("mostrarFormulario");
      seccionSigin.classList.add("ocultarFormulario");

      seccionLogin.classList.remove("ocultarFormulario");
      seccionLogin.classList.add("mostrarFormulario");
      ingresarUsuarioReg.checked = true;
    }
  }
}
function obtenerSeccion(opcion) {
  if (opcion === "menuPrincipal") {
    menuPrincipalSection = `<div class="row">
    <div class="col-md-4 mx-auto">
      <div class="card mt-4 text-center">
        <div class="card-header">
          <h1>Bienvenido</h1>
          <h2>Sistema Gestion de Turnos</h2>
        </div>
        <div class="card-body bg-light">
          <div class="container">
            <div class="row">
              <button id="btnPacientes" type="button" class="btn btn-outline-primary">Pacientes</button>
              <button id="btnResponsables" type="button" class="btn btn-outline-primary">Responsables</button>
              <button id="btnConsultarTurnos" type="button" class="btn btn-outline-primary">Consultar Turnos</button>
              <button id="btnSolicitarTurno" type="button" class="btn btn-outline-primary">Solicitar turno</button>
            </div>                  
          </div>
      </div>
    </div>
  </div>`;
    return menuPrincipalSection;
  } else if (opcion === "seccionSiginPacientes") {
    seccionSiginPacientes = `<div class="row">
      <div class="col-md-4 mx-auto">
        <div class="card mt-4 text-center">
            <div class="card-header">
            <h1>Registrarse Paciente</h1>
          </div>
          <div class="card-body">
            <form id="formularioSigninPaciente" action="registrarPaciente" method="get">
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label"
                  >Nombre</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="nombrePaciente" required/>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label"
                  >Edad</label
                >
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="edadPaciente"/>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label"
                  >Raza</label
                >                    
                <div class="col-sm-10">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Selecciones Raza</option>
                        <option value="1">Ovejero</option>
                        <option value="2">Salchicha</option>
                        <option value="3">Caniche</option>
                      </select>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label"
                  >Especie</label
                >                    
                <div class="col-sm-10"> 
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Seleccione Especie</option>
                        <option value="1">Canino</option>
                        <option value="2">Felino</option>
                        <option value="3">No-Tradicional</option>
                      </select>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label"
                  >Sexo</label
                >
                <div class="col-sm-10">
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Seleccione Sexo</option>
                        <option value="1">Macho</option>
                        <option value="2">Hembra</option>                            
                      </select>
                </div>
              </div>
               
              <button type="submit" class="btn btn-primary" id="btnRgistrarPaciente">Registrar Paciente</button>
            </form>
          </div>
        </div>
      </div>
    </div>`;
    return seccionSiginPacientes;
  }else if (opcion === "buscarPacientes") {
    seccionBuscarPaciente = `<div class="row">
            <div class="col-md-4 mx-auto">
              <div class="card mt-4 text-center">
                <div class="card-header">
                  <h1>Buscador</h1>
                  <h2>Pacientes</h2>
                </div>
                <div class="card-body bg-light">
                  <div class="container">
                    <div class="row">
                      <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                          <form id="formBuscador"class="d-flex">
                            <input id="inputBuscarPaciente" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                          </form>
                        </div>
                      </nav>
                    </div>
                    <div class="row table-responsive">
                      <table class="table">
                        <thead id="headLista">
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Accion</th>
                        <th scope="col">Accion</th>
                      </tr>
                        </thead>
                        <tbody id="bodyLista" >
                                                                          
                        </tbody>
                      </table>
                    </div>                
                  </div>
              </div>
            </div>
          </div>`
    return seccionBuscarPaciente
  }

}
function renderMenu(tipoSeccion, nombreSeccion, innerSeccion) {
  let nuevoElemento = document.createElement(tipoSeccion);
  nuevoElemento.id = nombreSeccion;
  nuevoElemento.innerHTML = innerSeccion;
  menuPrincipal.appendChild(nuevoElemento);
}

