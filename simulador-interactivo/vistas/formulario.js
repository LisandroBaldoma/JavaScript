//clases
class Responsable {
  constructor(id, nombre, apellido, mail, telefono, password) {
    this.id = id,
      this.nombre = nombre,
      this.apellido = apellido,
      this.mail = mail,
      this.telefono = telefono,
      this.password = password
  }
  definirPasword(){
  // const nuevoPasword = prompt("ingrese su nueva contraseña")   
  //codigo para que el usuario defina la contraseña
  this.pasword = nuevoPasword;
  }    
}

const formularioInicio = document.querySelector("#formInicio");
const titulos = formularioInicio.querySelector("#titulos");
const secundario = formularioInicio.querySelector("#secundario");
const terciario = formularioInicio.querySelector("#terciario");
const nodoMenuUsuario = document.querySelector("#menuUsuario");

const inputPacienteNuevo = document.querySelector("#inputPacienteNuevo");
const inputPacienteRegistrado = document.querySelector("#inputPacienteRegistrado");
//selectores
const opcionRegistrado = formularioInicio.querySelector("#pacienteRegistrado");
const opcionNoRegistrado = formularioInicio.querySelector("#pacienteNuevo");
const botonRegistrar = formularioInicio.querySelector("#botonRegistrar");

let nodoEmail = inputPacienteRegistrado.querySelector("#emailRegistrado");
let nodoPassword = inputPacienteRegistrado.querySelector("#password");

//Capturas de eventos
formularioInicio.addEventListener("submit", validarDatos);

opcionNoRegistrado.addEventListener("change", pacienteRegistrado);
opcionRegistrado.addEventListener("change", pacienteNuevo);

nodoEmail.addEventListener("blur", validarEmail);
nodoPassword.addEventListener("blur", validarPassword);
nodoEmail.addEventListener("focus", limpiar);
nodoPassword.addEventListener("focus", limpiar);




function validarDatos(e){  
  e.preventDefault();
  //var evento_blur = new Event("blur");  

  nodoAuxiliar = e.target;
  nodoEmail = nodoAuxiliar.querySelector("#emailRegistrado")
  nodoPassword = nodoAuxiliar.querySelector("#password")  

  const responsableValido = validarResponsable(nodoEmail.value,nodoPassword.value)

  if(responsableValido){
    menuUsuario();
  }else{
    alert ("usuario o contraseña incorrecta")
  }
  //console.log(responsablesRecuperados)
  console.log(responsableValido)

}
function obtenerDatosClientes(){
  miStorage = window.localStorage;
  let responsablesStorage = JSON.parse(miStorage.getItem('responsables'))
  
  
  if(responsablesStorage != null){
      return responsablesStorage;
  }else{
      const responsable0 = new Responsable(
          0,
          "Lisandro",
          "Baldoma",
          "baldomalisandro@hotmail.com",
          "3416864621",
          "1234"
        );
        const responsable1 = new Responsable(
          1,
          "Florencia",
          "Tiberti",
          "flortiberti@hotmail.com",
          "3415678578",
          "1234"
        );
        const responsable2 = new Responsable(
          2,
          "Andres",
          "alonzo",
          "baldomalisandro@hotmail.com",
          "3416864621",
          "1234"
        );
        const responsable3 = new Responsable(
          3,
          "Julieta",
          "messi",
          "flortiberti@hotmail.com",
          "3415678578",
          "1234"
        );
        const responsable4 = new Responsable(
          4,
          "Leandro",
          "paredes",
          "baldomalisandro@hotmail.com",
          "3416864621",
          "1234"
        );
        const responsable5 = new Responsable(
          5,
          "pedro",
          "tiburon",
          "flortiberti@hotmail.com",
          "3415678578",
          "1234"
        );
        const responsable6 = new Responsable(
          6,
          "Julian",
          "lopez",
          "flortiberti@hotmail.com",
          "3415678578",
          "1234"
        );
        const responsables = [
          responsable0,
          responsable1,
          responsable2,
          responsable3,
          responsable4,
          responsable5,
          responsable6
        ];
      miStorage.setItem('responsables', JSON.stringify(responsables))

      responsablesStorage = JSON.parse(miStorage.getItem('responsables')) 
      
      return responsablesStorage
  }  

  

}
function validarResponsable(mail,pasword){
  const responsablesRecuperados = obtenerDatosClientes();
    
  let resultado = responsablesRecuperados.find(element => element.mail === mail )
   
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
function pacienteNuevo(e) {  
  inputPacienteRegistrado.hidden = false;
  inputPacienteNuevo.hidden = true;
  secundario.innerHTML = "VETERINARIA FISIOTERAPIA";
  terciario.innerHTML = "Bienvenidos";
  botonRegistrar.innerHTML = "ingresar"; 
}
function pacienteRegistrado(e) {
  inputPacienteNuevo.hidden = false;
  inputPacienteRegistrado.hidden = true;
  secundario.innerHTML =
    "Vamos a comenzar con el registro, en 3 simples pasos vas a poder solicitar su turno.";
  terciario.innerHTML = "Ingrese los datos del Responsable del paciente";
  botonRegistrar.innerHTML = "Registrarse";
}
function menuUsuario() {
  nodoMenuUsuario.hidden = false;
  inputPacienteRegistrado.hidden = true;
  inputPacienteNuevo.hidden = true;
  //secundario.innerHTML = "VETERINARIA FISIOTERAPIA";
  //terciario.innerHTML = "Vamos a programar su cita";
  //botonRegistrar.hidden = false;

}
