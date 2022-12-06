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
const sectionDatosPacientes = document.querySelector("#modificarDatosPaciente");
const sectionUsuarioRegistrado = document.querySelector("#UsuarioRegistrado");
const datosPacientes = obtenerDatosPacientes();
const obtenerTurnos = obtenerDatosTurnos2();
console.log(datosPacientes)
console.log(sectionDatosPacientes)

mostrarPacientes();
crearEventosmodificarPaciente()
//mostrarTurnos();
//crearEventos();
function crearEventosmodificarPaciente(){
  const botonesModificarDatos = document.querySelectorAll(".btn-secondary");
  
  botonesModificarDatos.forEach((boton) =>{
    boton.onclick = () =>{
      const pacienteSeleccionado = datosPacientes.find((paciente) => paciente.id === parseInt(boton.id) )
      
      let tratamiento = prompt("Ingresar Tratamiento")
      let fecha = prompt ("ingresar Fecha DD/MM/AAAA")
      let id = obtenerTurnos.length
      let nuevoTurno = new Turno(id, pacienteSeleccionado.nombre, pacienteSeleccionado.paciente.nombre, tratamiento, fecha )
      obtenerTurnos.push(nuevoTurno)
      alert("Elturno fue asignado con exito")      
    }    
  });  
  
}
function mostrarPacientes(){
  datosPacientes.forEach((responsable) => {
    sectionDatosPacientes.innerHTML += `
    <div id=${responsable.id} class="card" style="width: 18rem;">
      <div class="card-body">    
        <p class="card-text">Nombre del Responsable:${responsable.nombre}</p>  
        <p class="card-text">Nombre del paciente:${responsable.paciente.nombre}</p>      
        <p class="card-text">Raza:${responsable.paciente.raza}</p>
        <p class="card-text">Especie:${responsable.paciente.especie}</p>
        <p class="card-text">Edad:${responsable.paciente.edad}</p>
        <button id=${responsable.id} type="button" class="btn btn-secondary">Asignar Turno</button>      
      </div>
    </div>
     `
  })
  
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

