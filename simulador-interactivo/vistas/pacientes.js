let arrayTurnos = [];
let arrayResponsables = [];

const consultarDatos = async (tipo) => {
  const response = await fetch(`./json/${tipo}.json`);
  const datos = await response.json();
  return datos;
};

const modal = new bootstrap.Modal(document.getElementById("modalTurnos"));
const modalResponsable = new bootstrap.Modal(
  document.getElementById("modalResponsables")
);

const bodyTurnos = document.getElementById("bodyTurnos");
const bodyResponsables = document.getElementById("bodyResponsables");
const formModalEditTurno = document.getElementById("formEditTurno");

const btnEdit = document.getElementsByName("editar");
const btnDeleted = document.getElementsByName("deleted");
const btnEditRespon = document.getElementsByName("editarResponsable");
const btnDeletedRespon = document.getElementsByName("deletedResponsbale");

const btnGuardar = document.getElementById("guardarEditar");
const nombrePaciente = document.getElementById("nombrePaciente");
const fechaTurno = document.getElementById("fechaTurno");
const tratamientoTurno = document.getElementById("tratamientoTurno");

const btnAsignar = document.getElementById("btnAsignarTurno");
const nuevoNombre = document.getElementById("nuevoNombre");
const nuevaFecha = document.getElementById("nuevaFecha");
const nuevoTratamiento = document.getElementById("nuevoTratamiento");

const datoTurno = document.getElementById("datosTurnos");
const datosPaciente = document.getElementById("datosPacientes");

const inputNombrePaciente = document.querySelector("#nombreBuscar");

const btnGuardarRespon = document.getElementById("guardarEditarRespon");
const nombreRespon = document.getElementById("nombreResponsable");
const apellidoRespon = document.getElementById("apellidoResponsable");
const emailRespon = document.getElementById("emailResponsable");

inputNombrePaciente.addEventListener("focus", cambiarVista);
//inputNombrePaciente.addEventListener("keypress", buscarPaciente);
nuevoNombre.addEventListener("focus", cambiarVista);

function cambiarVista(e) {
  if (e.target.id === "nuevoNombre") {
    datoTurno.hidden = false;
    datosPaciente.hidden = true;
  } else {
    datoTurno.hidden = true;
    datosPaciente.hidden = false;
  }
}
/*
function buscarPaciente(e){
  console.log(e.target.value)
}
*/

consultarDatos("responsables").then((responsables) => {
  responsables.forEach((responsable) => {
    arrayResponsables.push(responsable);
  });
  mostrarPacientes(responsables);
  asignarEventoEditRes();
  asignarEventoDeleted();

  function mostrarPacientes(responsables) {
    bodyResponsables.innerHTML = "";
    responsables.forEach((responsable) => {
      //todosUsuarios.push(turno)
      bodyResponsables.innerHTML += `<tr id="respon${responsable.id}">
      <th scope="row">${responsable.id + 1}</th>
      <td>${responsable.nombre}</td>
      <td>${responsable.apellido}</td>
      <td>${responsable.email}</td>
      <td>${responsable.telefono}</td>
      <td>${responsable.paciente.nombre}</td>
      <td class="d-flex">
        <button
        id="${responsable.id}"
        type="button"
        name="editarResponsable"
        class="btn btn-primary btn-sm"           
      >
        Editar
      </button>
      
      <button
        id="${responsable.id}"
        type="button"
        name="deletedResponsbale" href="#" }
        class="btn btn-danger btn-sm"
      >
      Eliminar</a>
      </button>
      </td>
    </tr>`;
    });
  }
  function asignarEventoEditRes() {
    btnEditRespon.forEach((btn) => {
      let trResponsEdit = document.getElementById(`respon${btn.id}`);
      let nodos = trResponsEdit.querySelectorAll("td");
      btn.onclick = () => {
        const turnoSelect = arrayResponsables.find(
          (respon) => respon.id === parseInt(btn.id)
        );
        modalResponsable.show();

        nombreRespon.value = nodos[0].innerHTML;
        apellidoRespon.value = nodos[1].innerHTML;
        emailRespon.value = nodos[2].innerHTML;

        btnGuardarRespon.onclick = () => {
          modalResponsable.hide();
          nodos[0].innerHTML = nombreRespon.value;
          nodos[1].innerHTML = apellidoRespon.value;
          nodos[2].innerHTML = emailRespon.value;
        };
      };
    });
  }
  function asignarEventoDeleted() {
    btnDeletedRespon.forEach((btn) => {
      btn.onclick = () => {
        let trResponsable = document.getElementById(`respon${btn.id}`);
        bodyResponsables.removeChild(trResponsable);
        arrayResponsables = arrayResponsables.filter(
          (respon) => respon.id != btn.id
        );
      };
    });
  }
});

consultarDatos("turnos").then((turnos) => {
  turnos.forEach((turno) => {
    arrayTurnos.push(turno);
  });
  mostrarTurnos(turnos);
  asignarEventoEdit();
  asignarEventoDeleted();

  btnAsignar.onclick = () => {
    id = arrayTurnos.length;
    nuevoTurno = {
      id: id,
      paciente: nuevoNombre.value,
      fecha: nuevaFecha.value,
      tratamiento: nuevoTratamiento.value,
    };
    arrayTurnos.push(nuevoTurno);
    mostrarTurnos(arrayTurnos);
    asignarEventoEdit();
    asignarEventoDeleted();
  };
  function asignarEventoEdit() {
    btnEdit.forEach((btn) => {
      let turnoEditar = document.getElementById(`turno${btn.id}`);
      let nodos = turnoEditar.querySelectorAll("td");
      btn.onclick = () => {
        const turnoSelect = arrayTurnos.find(
          (turno) => turno.id === parseInt(btn.id)
        );
        modal.show();
        nombrePaciente.value = nodos[0].innerHTML;
        fechaTurno.value = nodos[1].innerHTM;
        tratamientoTurno.value = nodos[2].innerHTML;

        btnGuardar.onclick = () => {
          modal.hide();
          nodos[0].innerHTML = nombrePaciente.value;
          nodos[1].innerHTML = fechaTurno.value;
          nodos[2].innerHTML = tratamientoTurno.value;
        };
      };
    });
  }
  function asignarEventoDeleted() {
    btnDeleted.forEach((btn) => {
      btn.onclick = () => {        
        let turno = document.getElementById(`turno${btn.id}`);
        bodyTurnos.removeChild(turno);
        arrayTurnos = arrayTurnos.filter((turno) => turno.id != btn.id);        
      };
    });
  }
  function mostrarTurnos(turnos) {
    bodyTurnos.innerHTML = "";
    turnos.forEach((turno) => {
      //todosUsuarios.push(turno)
      bodyTurnos.innerHTML += `<tr id="turno${turno.id}">
        <th scope="row">${turno.id + 1}</th>
        <td>${turno.paciente}</td>
        <td>${turno.fecha}</td>
        <td>${turno.tratamiento}</td>
        <td>
          <button
            id="${turno.id}"
            type="button"
            name="editar"
            class="btn btn-primary"           
          >
            Editar
          </button>
          <a id="${
            turno.id
          }" name="deleted" href="#" class="btn btn-danger card-link">Eliminar</a>
        </td>
      </tr>`;
    });
  }
});
