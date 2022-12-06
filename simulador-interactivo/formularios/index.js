class Responsable {
  constructor(id, nombre, apellido, mail, telefono, password, paciente) {
    (this.id = id),
      (this.nombre = nombre),
      (this.apellido = apellido),
      (this.mail = mail),
      (this.telefono = telefono),
      (this.password = password);
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
    (this.id = id),
      (this.nombre = nombre),
      (this.especie = especie),
      (this.sexo = sexo),
      (this.raza = raza),
      (this.edad = edad);
  }
}
class Turno {
  constructor(id, responsable, paciente, tratamiento, fecha) {
    (this.id = id),
      (this.responsable = responsable),
      (this.paciente = paciente),
      (this.tratamiento = tratamiento),
      (this.fecha = fecha);
  }
  cambiarTratamiento(tratamientoNuevo) {
    this.tratamiento = tratamientoNuevo;
  }
}
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
                value="1233"
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
  let datosResponsables = obtenerDatos(); //obtener datos pacientes

  if (e.target.id === "formularioLogin") {
    let emailIngresar = document.querySelector("#emailIngresar");
    let passwordIngresar = document.querySelector("#password");
    let span = input.querySelector("#span");
    
        
    consultarDatos().then(responsable => {
         
        let mailValidar = responsable.find((elemento) => elemento.email === emailIngresar.value)
      
        console.log(emailIngresar.value)
        console.log(mailValidar)
      
    }) 
    
    

    let mailValidar = datosResponsables.find(
      (responsable) => responsable.mail === emailIngresar.value
    );

    if (mailValidar == undefined) {
      if (span.classList.contains("valid-feedback")) {
        span.classList.replace("valid-feedback", "invalid-feedback");
        emailIngresar.classList.replace("is-valid", "is-invalid");
        span.innerHTML =
          "El mil ingresado no esta registrado en nuestra base de datos";
      }
    } else if (mailValidar.password === passwordIngresar.value) {
     /*
     let menuPrincipalSection = `<div class="row">
      <div class="col-md-4 mx-auto">
        <div class="card mt-4 text-center">
          <div class="card-header">
            <h1>Bienvenido</h1>
            <h2>Sistema Gestion de Turnos</h1>
          </div>
        <div class="card-body bg-light">  
      </div>
    </div>`;
    
      let nuevoElemento = document.createElement("section");
      nuevoElemento.id = "menuRegistrado";
      nuevoElemento.innerHTML = menuPrincipalSection;
      menuPrincipal.appendChild(nuevoElemento);
      */ 
      let menuPrincipal = obtenerSeccion("menuPrincipal")
      renderMenu("section", "menuRegistrado", menuPrincipal)
      seccionLogin.classList.replace("mostrarFormulario", "ocultarFormulario");
    } else {
      span.classList.replace("valid-feedback", "invalid-feedback");
      passwordIngresar.classList.replace("is-valid", "is-invalid");
      span.innerHTML =
        "La contraseña ingresada no coincide con la registrada en nuestra base de datos";
    }
  } else {
    let nombreRegistrar = input.querySelector("#nombreRegistrar");
    let apellidoRegistrar = input.querySelector("#apellido");
    let emailRegistrar = input.querySelector("#emailRegistrar");
    let telefonoRegistrar = input.querySelector("#telefono");

    
    let mailValidar = datosResponsables.find(
      (responsable) => responsable.mail === emailRegistrar.value
    );

    if (mailValidar == undefined) {
      //Registrar Usuario
      //console.log("Usuario registrado")
      /*
      let seccionSiginPacientes = `<div class="row">
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
                  <input type="text" class="form-control" id="nombrePaciente" />
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
      */
      
    
    let seccionSiginPacientes = obtenerSeccion("seccionSiginPacientes")
    renderMenu("section", "sectionSigninPaciente", seccionSiginPacientes)
    /*
    let nuevoElemento = document.createElement("section");
      nuevoElemento.id = "sectionSigninPaciente";
      nuevoElemento.innerHTML = seccionSiginPacientes;
      menuPrincipal.appendChild(nuevoElemento);
    */  
    
      
      seccionSigin.classList.replace("mostrarFormulario", "ocultarFormulario");

      let registrarPaciente = menuPrincipal.querySelector(
        "#formularioSigninPaciente"
      );
      // EVENTO SUBMIT FORM REGISTRAR PACIENTE
      registrarPaciente.addEventListener("submit", validarPaciente);

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
    // guardar referencia nuevo usuario para poder cargarlo con los datos del paiente
    let nuevoResponsable={
      nombre:nombreRegistrar.value,
      apellido:apellidoRegistrar.value,
      email:emailRegistrar.value,
      telefono:telefonoRegistrar.value
    }
    responsableNuevo.push(nuevoResponsable)
    console.log(responsableNuevo)
    //console.log(apellidoRegistrar.value)
    //console.log(emailRegistrar.value)
    //console.log(telefonoRegistrar.value)
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
function validarPaciente(e) {
  e.preventDefault();
  let menuPrincipal = obtenerSeccion("menuPrincipal")
  renderMenu("section", "menuRegistrado", menuPrincipal)
  let seccionRegistrarPaciente = document.querySelector("#sectionSigninPaciente") 
  seccionRegistrarPaciente.classList.add("ocultarFormulario");

  // AGREGAR Y CONFIRMAR EL REGISTRO A LA BD
  let registrarPaciente = document.querySelector(
    "#formularioSigninPaciente")
  let select = registrarPaciente.querySelectorAll("select");
  let input = registrarPaciente.querySelectorAll("input");
  
  let nombrePaciente = input[0].value
  let edadPaciente = input[1].value
  let raza = select[0].selectedIndex
  let especie = select[1].selectedIndex
  let sexo = select[2].selectedIndex
  
  let nuevoPaciente={
    nombre:nombrePaciente,
    edad:edadPaciente,
    raza:raza,
    especie:especie,
    sexo:sexo,
  }
  pacienteNuevo.push(nuevoPaciente)
  console.log(pacienteNuevo)
  console.log(responsableNuevo)
  
  consultarDatos().then(responsable => {
    console.log(responsable)
  })  
  //console.log(edadPaciente)
  //console.log(raza)
  //console.log(especie)
  //console.log(sexo)
  
  console.log("agregar paciente a la bd ");
  //console.log(e.target);
  //console.log(seccionRegistrarPaciente);
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
    //span.classList.remove("valid-feedback", "invalid-feedback");
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
    limpiarCampos
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
// FUNCIONES PARA OBTENER LOS DATOS DE LOS PACIENTES RESPONSABLES Y TURNOS
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
function obtenerDatos() {
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
function obtenerSeccion(opcion){
  if(opcion === "menuPrincipal"){
    
    menuPrincipalSection = `<div class="row">
    <div class="col-md-4 mx-auto">
      <div class="card mt-4 text-center">
        <div class="card-header">
          <h1>Bienvenido</h1>
          <h2>Sistema Gestion de Turnos</h1>
        </div>
      <div class="card-body bg-light">  
    </div>
  </div>`;
  return menuPrincipalSection
  }else if(opcion === "seccionSiginPacientes"){
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
    return seccionSiginPacientes
  } 

}
function renderMenu(tipoSeccion, nombreSeccion, innerSeccion){
  let nuevoElemento = document.createElement(tipoSeccion);
      nuevoElemento.id = nombreSeccion;
      nuevoElemento.innerHTML = innerSeccion;
      menuPrincipal.appendChild(nuevoElemento);
      
}
const consultarDatos = async () =>{
  const response = await fetch("./json/datos.json")
  const responsables = await response.json()
  return responsables
  }
  
  /*
  consultarDatos().then(responsable => {
    console.log(responsable)
  })
  
  */

  

  

