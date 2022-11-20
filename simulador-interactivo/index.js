class Turno {
  constructor(id, responsable, paciente, tratamiento, fecha) {
    this.id = id,
      this.responsable = responsable,
      this.paciente = paciente,
      this.tratamiento = tratamiento,
      this.fecha = fecha
  }
  imprimirTurno() {
    let parrafo = "Comprobante Turno Asigando";
    parrafo += `\n Fecha: ${this.fecha} \n Horario: 15:00 hs\n Datos del Paciente:\n Nombre: ${this.paciente}\n Tratamiento: ${this.tratamiento}\n \nDatos del responsable:\n Nombre: ${this.responsable}`;
    alert(parrafo);
  }
  cambiarTratamiento(tratamientoNuevo) {
    this.tratamiento = tratamientoNuevo
  }
}
class Responsable {
  constructor(id, nombre, apellido, mail, telefono) {
    this.id = id,
      this.nombre = nombre,
      this.apellido = apellido,
      this.mail = mail,
      this.telefono = telefono
  }
}
class Paciente {
  constructor(id, nombre, especie, sexo, raza, edad) {
    this.id = id,
      this.nombre = nombre,
      this.especie = especie,
      this.sexo = sexo,
      this.raza = raza,
      this.edad = edad
  }
}
class Tratamientos {
  constructor(id, nombre) {
    this.id = id, 
    this.nombre = nombre
  }
}
class TurnosLibres {
  constructor(id, fecha) {
    this.id = id,
    this.fecha = fecha
  }
}
const tratamiento0 = new Tratamientos(0, "Fisioterapia");
const tratamiento1 = new Tratamientos(1, "Radioterapia");
const tratamiento2 = new Tratamientos(2, "Lampara");

const paciente0 = new Paciente(0, "Zaira", "canino", "hembra", "callejero", 3);
const paciente1 = new Paciente(1, "Negra", "canino", "hembra", "cocker", 6);
const paciente2 = new Paciente(
  2,
  "Emir",
  "canino",
  "macho",
  "ovejero-aleman",
  9
);
const paciente3 = new Paciente(3, "Dalma", "canino", "hembra", "dalmata", 7);
const paciente4 = new Paciente(4, "Pedro", "felino", "hembra", "siames", 3);
const paciente5 = new Paciente(5, "Zaira", "felino", "macho", "siames", 8);
const paciente6 = new Paciente(
  6,
  "Rabit",
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
  "3416864621"
);
const responsable1 = new Responsable(
  1,
  "Florencia",
  "Tiberti",
  "flortiberti@hotmail.com",
  "3415678578"
);
const responsable2 = new Responsable(
  2,
  "Andres",
  "alonzo",
  "baldomalisandro@hotmail.com",
  "3416864621"
);
const responsable3 = new Responsable(
  3,
  "Julieta",
  "messi",
  "flortiberti@hotmail.com",
  "3415678578"
);
const responsable4 = new Responsable(
  4,
  "Leandro",
  "paredes",
  "baldomalisandro@hotmail.com",
  "3416864621"
);
const responsable5 = new Responsable(
  5,
  "pedro",
  "tiburon",
  "flortiberti@hotmail.com",
  "3415678578"
);
const responsable6 = new Responsable(
  6,
  "Julian",
  "lopez",
  "flortiberti@hotmail.com",
  "3415678578"
);

const turno0 = new Turno(0, "Lisandro", "Zaira", "fisioterapia", "15/11/2022");
const turno1 = new Turno(1, "Florencia", "Dalma", "Radioterapia", "15/11/2022");
const turno2 = new Turno(2, "facundo", "Dalma", "Radioterapia", "16/11/2022");
const turno3 = new Turno(3, "Leandro", "Dalma", "Radioterapia", "17/11/2022");

const turnoLibre0 = new TurnosLibres(0, "15/11/2022");
const turnoLibre1 = new TurnosLibres(1, "16/11/2022");
const turnoLibre2 = new TurnosLibres(2, "16/11/2022");
const turnoLibre3 = new TurnosLibres(3, "15/11/2022");
const turnoLibre4 = new TurnosLibres(4, "17/11/2022");
const turnoLibre5 = new TurnosLibres(5, "18/11/2022");

const pacientes = [
  paciente0,
  paciente1,
  paciente2,
  paciente3,
  paciente4,
  paciente5,
  paciente6
];
const responsables = [
  responsable0,
  responsable1,
  responsable2,
  responsable3,
  responsable4,
  responsable5,
  responsable6
];
const tratamientos = [tratamiento0, tratamiento1, tratamiento2];
const turnosLibres = [
  turnoLibre0,
  turnoLibre1,
  turnoLibre2,
  turnoLibre3,
  turnoLibre4,
  turnoLibre5
];
const turnos = [turno0, turno1, turno2, turno3];
const sexoPaciente = ["hembra", "macho"];
const razaPaciente = ["canino", "felino", "no-tradicional"];

let listadoTurnosLibres = "Elija uno de los turnos disponibles";
let listadoTratamientos = "Elija uno de los trataminetos disponibles";
let parrafoOpcioneMenu = `Que accion desea Realizar? \n 1- Registrar un Turno \n 2-Ver turnos siganado X fecha \n 3-Cambiar tratamiento del turno \n 4-Salir `;

mostrarMenu();

function mostrarMenu() {
  let finalizar = false;

  while (!finalizar) {
    let opcionMenu = parseInt(prompt(parrafoOpcioneMenu));

    let opcionMenuValida = validarDato(opcionMenu);

    switch (opcionMenuValida) {
      case 1:
        let responsableNuevo = pedirDatosResponsable();
        let pacienteNuevo = pedirDatosPaciente();
        let tratamientoNuevo = mostrarTratamientos()
        let fechaNuevo = mostrarFechasTurnosLibres()
        guardarTurno(responsableNuevo,pacienteNuevo,fechaNuevo.fecha,tratamientoNuevo.nombre)
        alert("El turno fue registrado con exito");
        break;
      case 2:
        buscarTurnosTratamiento();
        break;
      case 3:
        agregarTratamiento();
        break;
      case 4:
        finalizar = true;
        break;
    }
  }
  alert("sesion finalizada");
}
function agregarTratamiento() {
  let pacienteModificar = prompt("Ingrese el nombre del paciente a modificar");

  const findPaciente = turnos.find(
    (elemento) => elemento.paciente.toLocaleLowerCase() === pacienteModificar.toLocaleLowerCase()
  );

  if (findPaciente === undefined) {
    alert("No existe un paciente con ese nombre");
    agregarTratamiento();
  } else {
    let tratamientoNuevo = prompt("Que Nuevo tratamiento le desea asignar?");
    turnos[findPaciente.id].cambiarTratamiento(tratamientoNuevo);
    alert("El tratamiento ha sido modificado");
    findPaciente.imprimirTurno();
    mostrarMenu();
  }
}
function buscarTurnosTratamiento() {
  let fechaConsulta = prompt("Ingrese la fecha a consultar FORMATO DD/MM/AA");

  const turnosFecha = turnos.filter(
    (elemento) => elemento.fecha === fechaConsulta
  );

  if (turnosFecha.length == 0) {
    alert("No hay turnos reservados para esa fecha");
    mostrarMenu();
  } else {
    for (elemento of turnosFecha) {
      elemento.imprimirTurno();
    }
  }
}
function guardarTurno(responsable, paciente, fecha, tratamiento) {
  let id = turnos.length;
  let turno = new Turno(
    id,
    responsable.nombre,
    paciente.nombre,
    tratamiento,
    fecha
  );
  turnos.push(turno);
  turno.imprimirTurno();
}
function validarDato(opcion) {
  while (opcion < 0 || opcion > 4 || isNaN(opcion)) {
    alert("Ingrese solo opciones ofrecidas a continuacion");
    opcion = parseInt(prompt(parrafoOpcioneMenu));
  }
  return opcion;
}
function pedirDatosResponsable() {
  let datosResponsable = [];

  let nombre = prompt("ingrese su nombre");
  while (nombre === "" || nombre.length < 4) {
    nombre = prompt("El campo nombre debe se mayor a 4 caracteres");
  }
  let apellido = prompt("ingrese su apellido");
  while (apellido === "" || apellido.length < 4) {
    apellido = prompt("El campo apellido debe se mayor a 4 caracteres");
  }
  let mail = prompt("ingrese su mail");
  while (mail === "" || mail.length < 4) {
    mail = prompt("El campo apellido debe se mayor a 4 caracteres");
  }
  let telefono = prompt("ingrese su telefono");
  while (telefono === "" || telefono.length < 4 || isNaN(telefono)) {
    telefono = prompt("el campo solo admite numeros");
  }

  let id = responsables.length;

  datosResponsable = new Responsable(id, nombre, apellido, mail, telefono);

  responsables.push(datosResponsable);

  return datosResponsable;
}
function pedirDatosPaciente() {
  let pacienteValido = [];

  let nombre = prompt("ingrese el nombre del paciente");
  while (nombre === "" || nombre.length < 4) {
    nombre = prompt("El campo nombre debe ser mayor a 4 letras");
  }
  let especie = prompt(
    "ingrese la especie del paciente 1-felino 2-canino 3-no-tradicional"
  );
  while (isNaN(especie) || especie === "" || especie < 1 || especie > 3) {
    alert("ingrese una especie correcta");
    especie = prompt(
      "ingrese la especie del paciente 1-felino 2-canino 3-no-tradicional"
    );
  }
  especie = razaPaciente[especie - 1];

  let raza = prompt("ingrese la raza del paciente");
  while (!isNaN(raza) || raza === "" || raza.length < 4) {
    raza = prompt("El campo raza debe ser mayor a 4 letras");
  }
  let sexo = prompt("ingrese el sexo del paciente 1-hembra 2-macho");
  while (isNaN(sexo) || sexo === "" || sexo < 1 || sexo > 2) {
    alert("ingrese una opcion correcta en el campo sexo del paciente");
    sexo = prompt("ingrese el sexo del paciente 1-hembra 2-macho");
  }
  sexo = sexoPaciente[sexo - 1];

  let edad = prompt("ingrese la edad del paciente");
  while (isNaN(edad) || edad === "" || edad < 0) {
    alert("ingrese una edad mayor a 0");
    edad = prompt("ingrese la edad del paciente");
  }
  let id = pacientes.length;

  pacienteValido = new Paciente(id, nombre, especie, raza, sexo, edad);

  pacientes.push(pacienteValido);  

  return pacienteValido;
}
function mostrarFechasTurnosLibres() {
  
  for (item of turnosLibres) {
    listadoTurnosLibres += `\n ${item.id} - ${item.fecha}`;
  }
  let respuesta = parseInt(prompt(listadoTurnosLibres));
  fechaSeleccionada = validarFechaTurno(respuesta);
  return turnosLibres[fechaSeleccionada];
}
function validarFechaTurno(respuesta) {
  while (isNaN(respuesta) || respuesta > turnosLibres.length) {
    alert("ingrese una opcion correcta");
    respuesta = parseInt(prompt(listadoTurnosLibres));
  }
  return respuesta;
}
function mostrarTratamientos() {
  for (item of tratamientos) {
    listadoTratamientos += `\n ${item.id} - ${item.nombre}`;
  }
  let respuesta = parseInt(prompt(listadoTratamientos));
  tratamientoSeleccionado = validarTratamiento(respuesta);
  return tratamientos[tratamientoSeleccionado];
}
function validarTratamiento(respuesta) {
  while (isNaN(respuesta)) {
    alert("ingrese una opcion correcta");
    respuesta = parseInt(prompt(listadoTratamientos));
  }
  return respuesta;
}
