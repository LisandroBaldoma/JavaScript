class Turno{
  constructor(id, responsable, paciente, tratamiento, fecha) {
    (this.id = id),
      (this.responsable = responsable),
      (this.paciente = paciente),
      (this.tratamiento = tratamiento),
      (this.fecha = fecha);
  }
}
class Responsable {
  constructor(id, nombre, apellido, mail, telefono) {
    this.id = id;
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.mail = mail),
      (this.telefono = telefono);
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
class Tratamientos {
  constructor(id, nombre) {
    (this.id = id), (this.nombre = nombre);
  }
}
class TurnosLibres{
  constructor(id,fecha){
    this.id = id,
    this.fecha = fecha
  }

}
class Razas{
  constructor(id, raza){
    this.id=id,
    this.nombre=raza
  }
}
class Especie{
  constructor(id,especie){
    this.id=id,
    this.especie=especie
  }
}
class Sexo{
  constructor(id,sexo){
    this.id=id,
    this.sexo=sexo
  }
}

const tratamiento0 = new Tratamientos(0, "Fisioterapia");
const tratamiento1 = new Tratamientos(1, "Radioterapia");
const tratamiento2 = new Tratamientos(2, "Lampara");

const paciente0 = new Paciente(0, "Zaira", "canino", "hembra", "callejero", 3);
const paciente1 = new Paciente(1, "Negra", "canino", "hembra", "cocker", 6);
const paciente2 = new Paciente(2, "Emir", "canino", "macho", "ovejero-aleman", 9);
const paciente3 = new Paciente(3, "Dalma", "canino", "hembra", "dalmata", 7);
const paciente4 = new Paciente(4, "Pedro", "felino", "hembra", "siames", 3);
const paciente5 = new Paciente(5, "Zaira", "felino", "macho", "siames", 8);
const paciente6 = new Paciente(6, "Rabit", "no-tradicional", "hembra","callejero", 1);

const responsable0 = new Responsable(0, "Lisandro", "Baldoma", "baldomalisandro@hotmail.com", "3416864621" );
const responsable1 = new Responsable(1, "Florencia", "Tiberti", "flortiberti@hotmail.com", "3415678578" );
const responsable2 = new Responsable(2, "Andres", "alonzo", "baldomalisandro@hotmail.com", "3416864621" );
const responsable3 = new Responsable(3, "Julieta", "messi", "flortiberti@hotmail.com", "3415678578" );
const responsable4 = new Responsable(4, "Leandro", "paredes", "baldomalisandro@hotmail.com", "3416864621" );
const responsable5 = new Responsable(5, "pedro", "tiburon", "flortiberti@hotmail.com", "3415678578" );
const responsable6 = new Responsable(6, "Julian", "lopez", "flortiberti@hotmail.com", "3415678578" );

const turno0 = new Turno(0, "Lisandro", "Zaira","fisioterapia", "15/11/2022" );
const turno1 = new Turno(1, "Florencia", "Dalma","Radioterapia", "16/11/2022" );

const turnoLibre0 = new TurnosLibres(0,"15/11/2022")
const turnoLibre1 = new TurnosLibres(1,"16/11/2022")
const turnoLibre2 = new TurnosLibres(2,"17/11/2022")
const turnoLibre3 = new TurnosLibres(3,"18/11/2022")
const turnoLibre4 = new TurnosLibres(4,"19/11/2022")
const turnoLibre5 = new TurnosLibres(5,"20/11/2022")

const sexo0 = new Sexo(0,"Hembra")
const sexo1 = new Sexo(1,"Macho")

const pacientes = [paciente0, paciente1, paciente2, paciente3, paciente4, paciente5, paciente6,];
const responsables = [responsable0, responsable1,responsable2,responsable3,responsable4,responsable5,responsable6];
const tratamientos = [tratamiento0, tratamiento1, tratamiento2,];
const turnosLibres=[turnoLibre0,turnoLibre1,turnoLibre2,turnoLibre3,turnoLibre4,turnoLibre5]
const turnos = [turno0, turno1];
const sexoPaciente = [sexo0,sexo1];

let listadoTurnosLibres = "Elija uno de los turnos disponibles"
let listadoTratamientos = "Elija uno de los trataminetos disponibles"
let mostrarTurnoAsigando = "LOS DATOS DEL TURNO ASIGNADO SON: "

alert("COMPLETE LOS SIGUIENTES DATOS PARA ASIGNARLE UN TURNO")
pedirDatosTurnos();

function pedirDatosTurnos() {
  let responsable = pedirDatosResponsable()
  let paciente = pedirDatosPaciente()
  fechaSeleccionada = mostrarFechasTurnosLibres();
  tratamientoSeleccionado = mostrarTratamientos();
  let idTurnoNuevo = turnos.length
  //console.log(turnos)
  
  let datosTurnoGuardar = new Turno(idTurnoNuevo,responsable[0],paciente[0],tratamientoSeleccionado.nombre,fechaSeleccionada.fecha)
  
  turnos.push(datosTurnoGuardar);
  
    
  alert("DATOS DEL TURNO ASIGNADO SON" + "Nombre Responsable: " + responsable[0] + "apellido del responsable: " + responsable[1] + "Nombre del paciente: " + paciente[0] 
  + "Tratamiento: " + tratamientoSeleccionado.nombre + "Fecha del turno: " + fechaSeleccionada.fecha);
 //console.log(turnos)
}
function pedirDatosResponsable(){
  let responsableValido =[];
  let validarResponsable = false;
  let nombreResponsable = prompt("ingrese su nombre");
  let apellido = prompt("ingrese su apellido");
  let mail = prompt("ingrese su mail");
  let telefono = prompt("ingrese su telefono");
  validarResponsable = validarDatosResponsable(nombreResponsable, apellido, mail, telefono);
  if(validarResponsable){
    responsableValido = [nombreResponsable, apellido, mail, telefono]
  }
  return responsableValido
}
function pedirDatosPaciente(){
  let pacienteValido = [];
  let validarPaciente = false;
  let nombrePaciente = prompt("ingrese el nombre del paciente");
  
  let especie = prompt(
    "ingrese la especie del paciente 1-felino 2-canino 3-no-tradicional"
  );
  let raza = prompt("ingrese la raza del paciente");
  let sexo = prompt("ingrese el sexo del paciente 1-hembra 2-macho");
  let edad = prompt("ingrese la edad del paciente");
  validarPaciente = validarDatosPaciente(
    nombrePaciente,
    especie,
    raza,
    sexo,
    edad
  );
  if (especie == 1) {
    especie = "felino";
  } else if (especie == 2) {
    especie = "canino";
  } else if (especie == 3) {
    especie = "no-tradicional";
  }  
  if (sexo == 1) {
    sexo = "hembra";
  } else if(sexo==2){
    sexo = "macho";
  }  

  if(validarPaciente){
    pacienteValido = [nombrePaciente, especie, raza, sexo, edad]
  }
  return pacienteValido;

  
}
function mostrarFechasTurnosLibres(){    
  for(item of turnosLibres){
    listadoTurnosLibres += `\n ${item.id} - ${item.fecha}`
  }
  let respuesta = parseInt(prompt(listadoTurnosLibres))
  fechaSeleccionada = validarFechaTurno(respuesta); 
  return turnosLibres[fechaSeleccionada]; 
}
function validarFechaTurno(respuesta){
  while(isNaN(respuesta)){
    alert("ingrese una opcion correcta")
    respuesta = parseInt(prompt(listadoTurnosLibres))
  }
  return respuesta
}
function mostrarTratamientos(){    
  for(item of tratamientos){
    listadoTratamientos += `\n ${item.id} - ${item.nombre}`
  }
  let respuesta = parseInt(prompt(listadoTratamientos))
  tratamientoSeleccionado = validarTratamiento(respuesta); 
  return tratamientos[tratamientoSeleccionado]; 
}
function validarTratamiento(respuesta){
  while(isNaN(respuesta)){
    alert("ingrese una opcion correcta")
    respuesta = parseInt(prompt(listadoTratamientos))
  }
  return respuesta
}
function validarDatosPaciente(nombrePaciente, especie, raza, sexo, edad) {
  while (!isNaN(nombrePaciente) || nombrePaciente === "") {
    nombrePaciente = prompt("ingrese el nombre del paciente");
  }
  while (nombrePaciente.length <= 2) {
    nombrePaciente = prompt("el nombre debe contener mas de dos letras");
  }
  while (isNaN(especie) || especie === "" || especie < 1 || especie > 3) {
    alert("ingrese una especie correcta");
    especie = prompt(
      "ingrese la especie del paciente 1-felino 2-canino 3-no-tradicional"
    );
  }
  while (!isNaN(raza) || raza === "") {
    raza = prompt("ingrese la raza del paciente");
  }
  while (raza.length <= 2) {
    raza = prompt("el campo raza debe contener mas de 4 letras");
  }
  while (isNaN(sexo) || sexo === "" || sexo < 1 || sexo > 2) {
    alert("ingrese una opcion correcta en el campo sexo del paciente");
    sexo = prompt("ingrese el sexo del paciente 1-hembra 2-macho");
  }
  while (isNaN(edad) || edad === "" || edad < 0) {
    alert("ingrese una edad mayor a 0");
    edad = prompt("ingrese la edad del paciente");
  }
  return true;
}
function validarDatosResponsable(nombreResponsable, apellido, mail, telefono) {
  if (nombreResponsable === "") {
    while (nombreResponsable === "") {
      nombreResponsable = prompt("El campo esta vacio Ingrese, un nombre");
    }
  }
  if (apellido === "") {
    while (apellido === "") {
      apellido = prompt("El campo esta vacio, Ingrese un apellido");
    }
  }
  if (mail === "") {
    while (mail === "") {
      mail = prompt("El campo esta vacio, Ingrese un mail");
    }
  }
  if (telefono === "") {
    while (telefono === "") {
      telefono = prompt("El campo esta vacio, Ingrese un telefono");
    }
  }
  return true;
}
function agregarTratamiento() {
  let indice = tratamientos.length;
  tratamientos.forEach((element) => {
    console.log(element.nombre);
  });
  let nombreTratamiento = prompt("ingrese el nombre del nuevo tratamiento");
  let nuevoTratamiento = new Tratamientos(indice, nombreTratamiento);
  tratamientos.push(nuevoTratamiento);
  console.log(tratamientos);
}

