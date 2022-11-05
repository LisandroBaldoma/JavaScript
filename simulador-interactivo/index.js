let accion = parseInt(
  prompt(
    "Ingrese la accion que desea realizar 1-Solicitar turno 2-Modificar turno 3-Eliminar turno"
  )
);

let usuarioRegisrado = false;
let tratamientoRegistrado = false;
let fechaRegistrada = false;

while (accion != 1) {
  if (accion === 2) {
    alert("NO HAY TURNO PARA MODIFICAR");
    accion = parseInt(prompt("Ingrese una accion correcta 1-Solicitar turno"));
  } else if (accion == 3) {
    alert("NO HAY TURNO PARA ELIMINAR");
    accion = parseInt(prompt("Ingrese una accion correcta 1-Solicitar turno"));
  } else {
    alert("LA OPCION INGRESADA NO ES CORRECTA");
    accion = parseInt(prompt("Ingrese una accion correcta 1-Solicitar turno"));
  }
}

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("ingrese su apelido");
let mail = prompt("ingrese mail");

usuarioRegisrado = validarDatos(nombre, apellido, mail);

if (usuarioRegisrado) {
  alert("los daatos personales fueron ingresado con exito");
  let tratamiento = parseInt(
    prompt(
      "Que tratamiento desea solicitar? 1-Fisioterapia 2-Radiofrecuencia 3-Lampara"
    )
  );
  if (tratamiento == 1 || tratamiento == 2 || tratamiento == 3) {
    tratamientoRegistrado = true;
  } else {
    while (tratamientoRegistrado == false) {
      tratamiento = parseInt(
        prompt(
          "Ingrese una opcion correcta, 1-Fisioterapia 2-Radiofrecuencia 3-Lampara"
        )
      );
      if (tratamiento == 1 || tratamiento == 2 || tratamiento == 3) {
        tratamientoRegistrado = true;
      }
    }
  }
  let fecha = parseInt(
    prompt(
      "en que fecha quiere solicitar el turno? 1-22/11/2022 2-23/11/2022 3-24/11/2022"
    )
  );
  if (fecha == 1 || fecha == 2 || fecha == 3) {
    fechaRegistrada = true;
  } else {
    while (fechaRegistrada == false) {
      fecha = parseInt(
        prompt(
          "Solo tenemos disponibles las sguientes fechas 1-22/11/2022 2-23/11/2022 3-24/11/2022"
        )
      );
      if (fecha == 1 || fecha == 2 || fecha == 3) {
        fechaRegistrada = true;
      }
    }
  }

  if (tratamiento == 1) {
    tratamiento = "Fisioterapia";
    fecha = transformarFecha(fecha);
    confirmarTurno(nombre, apellido, mail, tratamiento, fecha);
  } else if (tratamiento == 2) {
    tratamiento = "Radiofrecuencia";
    fecha = transformarFecha(fecha);
    confirmarTurno(nombre, apellido, mail, tratamiento, fecha);
  } else if (tratamiento == 3) {
    tratamiento = "Lampara";
    fecha = transformarFecha(fecha);
    confirmarTurno(nombre, apellido, mail, tratamiento, fecha);
  }
}

function validarDatos(nombre, apellido, mail) {
  if (nombre === "") {
    while (nombre === "") {
      nombre = prompt("El campo esta vacio Ingrese, un nombre");
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
  return (usuarioRegisrado = true);
}
function confirmarTurno(nombre, apellido, mail, tratamiento, fecha) {
  alert(
    `LOS DATOS DEL TURNO REGISTRADOS SON Nombre: ${nombre} Apellido: ${apellido} Mail:${mail} Fecha: ${fecha} Tratamiento: ${tratamiento}`
  );
}
function transformarFecha(fecha) {
  if (fecha == 1) {
    return (fecha = "22/11/2022");
  } else if (fecha == 2) {
    return (fecha = "23/11/2022");
  } else {
    return (fecha = "24/11/2022");
  }
}
