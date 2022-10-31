let accion = parseInt(prompt(
  "Indique que accion desea realizar 1-Solicitar turno 2-Modificar Turno 3-Eiminar turno"
));

let nombre = "";
let apellido = "";
let profesional = "";
let fecha = "";
let especialidad = "";
let turnosAsignados = false;

if (accion === 1) {
  nombre = prompt("Ingrese su Nombre");
  apellido = prompt("Ingrese su Apellido");
  profesional = parseInt(prompt("Seleccione el profesional 1- Evangelina 2-Josefina"));
  fecha = parseInt(prompt(
    "Seleccione uno de los turnos disponibles 1-fecha: 22/11/2022 2-fecha: 23/11/2022 3-fecha: 24/11/2022"
  ));
  especialidad = parseInt(prompt(
    "Seleccione el tratamiento a realizar 1-Fisioterapia 2-Magnetoterapia 3-Electrodos"
  ));
  turnosAsignados = true;

  alert("su turno ha sido registrado con exito");

 
} else if (accion===2 & turnosAsignados === false) {
    alert("Usted no tiene asignado ningun turno para modificar");
  }
  
else {
  if (turnosAsignados === false) {
    alert("Usted no tiene asignado ningun turno para eliminar");
  }
}

if(turnosAsignados===false){
    accion = parseInt(prompt(
        "Indique que accion desea realizar 1-Solicitar turno"
      ));
      nombre = prompt("Ingrese su Nombre");
      apellido = prompt("Ingrese su Apellido");
      profesional = parseInt(prompt("Seleccione el profesional 1- Evangelina 2-Josefina"));
      fecha = parseInt(prompt(
        "Seleccione uno de los turnos disponibles 1-fecha: 22/11/2022 2-fecha: 23/11/2022 3-fecha: 24/11/2022"
      ));
      especialidad = parseInt(prompt(
        "Seleccione el tratamiento a realizar 1-Fisioterapia 2-Magnetoterapia 3-Electrodos"
      ));
      turnosAsignados = true;
      alert("su turno ha sido registrado con exito");
    } 

    if(turnosAsignados===true){
        if (fecha == 1) {
            fecha = "22/11/2022";
          } else if (fecha == 2) {
            fecha = "23/11/2022";
          } else {
            fecha = "24/11/2022";
          }
          if (profesional == 1) {
            profesional = "Evangelina";
          } else {
            profesional = "Josefina";
          }
          if (especialidad == 1) {
            especialidad = "Fisioterapia";
          } else if (especialidad == 2) {
            especialidad = "Magnetoterapia";
          } else {
            especialidad = "Electrodos";
          }
        }
    
        alert(`LOS DATOS DEL TURNO REGISTRADOS SON Nombre: ${nombre} Apellido: ${apellido} Fecha: ${fecha} Profesional: ${profesional} Especialidad ${especialidad}`)

        
      
    





  



