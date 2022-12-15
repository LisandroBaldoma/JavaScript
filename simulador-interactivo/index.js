let arrayTurnos = [];
let arrayResponsables = [];
let tratamientos = [
  {
    id: 0,
    nombre: "Fisioterapia",
  },
  {
    id: 1,
    nombre: "Radioterapia",
  },
  {
    id: 2,
    nombre: "Lampara",
  },
  {
    id: 3,
    nombre: "Masajes",
  },
];

const usuario = localStorage.getItem("usuario");
const sectionGestionTurnos = document.getElementById("contenedorMenuApp");
const sectionLogin = document.getElementById("Login");
const inputRecordarUsuario = document.getElementById("checkRecordarUsuario");

if (usuario || inputRecordarUsuario.checked) {
  let usuarios = JSON.parse(usuario);  
  renderMenu("menuApp", usuarios.nombre);
} else {
  renderMenu("menuLogin");
}
const consultarDatos = async (tipo) => {
  const response = await fetch(`./json/${tipo}.json`);
  const datos = await response.json();
  return datos;
};
const formularioLogin = document.getElementById("formLogin");
formularioLogin.onsubmit = (e) => {
  e.preventDefault();
  inputEmail.onfocus = (e) => {
    inputEmail.classList.remove("is-valid", "is-invalid");
    inputEmail.value = "";
  };
  inputPasword.onfocus = (e) => {
    inputPasword.classList.remove("is-valid", "is-invalid");
    inputPasword.value = "";
  };

  let patronEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

  if (patronEmail.test(inputEmail.value)) {
    consultarDatos("usuarios").then((usuario) => {
      let usuarioValido = usuario.find(
        (usua) => usua.usuario === inputEmail.value
      );
      if (usuarioValido != undefined) {
        inputEmail.classList.add("is-valid");
        inputEmail.classList.remove("is-invalid");
        spanUsuario.innerHTML = "";
        if (usuarioValido.password === inputPasword.value) {
          const usuario = {
            usuario: inputEmail.value,
            password: inputPasword.value,
            nombre: usuarioValido.nombre,
          };
          if (!inputRecordarUsuario.checked) {
            inputPasword.classList.remove("is-invalid");
            inputPasword.classList.add("is-valid");
            renderMenu("menuApp", usuario.nombre);
          } else {
            localStorage.setItem("usuario", JSON.stringify(usuario));

            inputPasword.classList.remove("is-invalid");
            inputPasword.classList.add("is-valid");
            renderMenu("menuApp", usuario.nombre);
          }
        } else {
          inputPasword.classList.add("is-invalid");
        }
      } else {
        inputEmail.classList.add("is-invalid");
        spanUsuario.innerHTML = "";
        spanUsuario.innerHTML = "El email ingresado no se encuentra registrado";
      }
    });
  } else if (inputEmail.value === "") {
    inputEmail.classList.add("is-invalid");
    spanUsuario.innerHTML = "";
    spanUsuario.innerHTML = "El campo no debe estar vacio";
  } else {
    inputEmail.classList.add("is-invalid");
    spanUsuario.innerHTML = "";
    spanUsuario.innerHTML = "Ingrese un email valido xxx@xxx.xxx";
  }
};
const inputPasword = document.getElementById("passwordLogin");
const spanUsuario = document.getElementById("spanUsuario");
const inputEmail = document.getElementById("emailLogin");

const formModalEditTurno = document.getElementById("formEditTurno");
const datoTurno = document.getElementById("datosTurnos");
const datosPaciente = document.getElementById("datosPacientes");

const btnBuscarRespon = document.getElementById("buscarResponsable");
const btnAsignar = document.getElementById("btnAsignarTurno");

const inputNombrePaciente = document.querySelector("#nombreBuscar");
inputNombrePaciente.addEventListener("click", cambiarVista);

consultarDatos("responsables").then((responsables) => {
  btnBuscarRespon.classList.add("disabled");
  responsables.forEach((responsable) => {
    arrayResponsables.push(responsable);
  });
  const bodyResponsables = document.getElementById("bodyResponsables");
  const btnEditRespon = document.getElementsByName("editarResponsable");
  const btnDeletedRespon = document.getElementsByName("deletedResponsbale");
  const btnGuardarRespon = document.getElementById("guardarEditarRespon");

  const nombrePaciente = document.getElementById("nombrePacienteEditar");
  const razaPaciente = document.getElementById("razaPaciente");
  const especiePaciente = document.getElementById("EspeciePaciente");

  const modalResponsable = new bootstrap.Modal(
    document.getElementById("modalResponsables")
  );
  mostrarPacientes(responsables);
  asignarEventoEditRes();
  asignarEventoDeleted();

  inputNombrePaciente.onfocus = (e) => {
    inputNombrePaciente.value = "";
    mostrarPacientes(arrayResponsables);
    asignarEventoEditRes();
    asignarEventoDeleted();
  };

  btnBuscarRespon.onclick = () => {
    let buscarPaciente = inputNombrePaciente.value;

    const resultado = arrayResponsables.filter(
      (respon) =>
        respon.paciente.nombre.toLowerCase() === buscarPaciente.toLowerCase()
    );
    if (resultado.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Lo siento",
        text: "No encontramos Pacientes registrados con ese nombre",
      });
      Swal.getConfirmButton().onclick = (e) => {
        mostrarPacientes(arrayResponsables);
        asignarEventoEditRes();
        asignarEventoDeleted();
        Swal.close();
      };
    } else {
      mostrarPacientes(resultado);
      asignarEventoEditRes();
      asignarEventoDeleted();
    }
  };
  function mostrarPacientes(responsables) {
    bodyResponsables.innerHTML = "";
    responsables.forEach((responsable) => {
      //todosUsuarios.push(turno)
      bodyResponsables.innerHTML += `<tr id="respon${responsable.id}">
      <th scope="row">${responsable.id + 1}</th>
      <td>${responsable.paciente.nombre}</td>
      <td>${responsable.paciente.raza}</td>
      <td>${responsable.paciente.especie}</td>
      <td>${responsable.paciente.sexo}</td>
      <td>${responsable.paciente.edad}</td>
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

        nombrePaciente.value = nodos[0].innerHTML;
        razaPaciente.value = nodos[1].innerHTML;
        especiePaciente.value = nodos[2].innerHTML;

        btnGuardarRespon.onclick = () => {
          modalResponsable.hide();
          nodos[0].innerHTML = nombrePaciente.value;
          nodos[1].innerHTML = razaPaciente.value;
          nodos[2].innerHTML = especiePaciente.value;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "El Paciente ha sido Modificado",
            showConfirmButton: false,
            timer: 1500,
          });
        };
      };
    });
  }
  function asignarEventoDeleted() {
    btnDeletedRespon.forEach((btn) => {
      btn.onclick = () => {
        Swal.fire({
          icon: "warning",
          titleText: "Seguro que quiere elimina el paciente?",
          showCancelButton: true,
        });
        Swal.getConfirmButton().onclick = () => {
          if (arrayResponsables.length < btn.id) {
            arrayResponsables.pop();
          } else {
            idEliminar = btn.id - 1;
            arrayResponsables.splice(idEliminar, 1);
          }
          mostrarPacientes(arrayResponsables);
          asignarEventoEditRes();
          asignarEventoDeleted();
          Swal.close();
        };
      };
    });
  }
});

consultarDatos("turnos").then((turnos) => {
  turnos.forEach((turno) => {
    arrayTurnos.push(turno);
  });

  const modal = new bootstrap.Modal(document.getElementById("modalTurnos"));
  const btnGuardar = document.getElementById("guardarEditar");
  const nombrePaciente = document.getElementById("nombrePaciente");
  const fechaTurno = document.getElementById("fechaTurno");
  const tratamientoTurno = document.getElementById("tratamientoTurno");
  
  const nuevoNombre = document.getElementById("nuevoNombre");
  nuevoNombre.addEventListener("click", cambiarVista);
  const nuevaFecha = document.getElementById("nuevaFecha");
  
  const bodyTurnos = document.getElementById("bodyTurnos");
  const btnEdit = document.getElementsByName("editar");
  const btnDeleted = document.getElementsByName("deleted");
  const btnLimpiar = document.getElementById("limpiarCampos");

  const selectTratamientos = document.getElementById("selectTratamientos");

  mostrarTurnos(turnos);
  asignarEventoEdit();
  asignarEventoDeleted();
  cargarTratamientos();

  btnLimpiar.onclick = (e) => {
    selectTratamientos.classList.remove("is-invalid");
    nuevoNombre.classList.remove("is-invalid");
    nuevaFecha.classList.remove("is-invalid");
  };
  btnAsignar.onclick = (e) => {    
    if (selectTratamientos.value === "Seleccione un Tratamiento") {
      selectTratamientos.classList.add("is-invalid");
    } else if (nuevoNombre.value === "") {
      nuevoNombre.classList.add("is-invalid");
    } else if (nuevaFecha.value === "") {
      nuevaFecha.classList.add("is-invalid");
    } else {
      id = arrayTurnos.length;
      nuevoTurno = {
        id: id,
        paciente: nuevoNombre.value,
        fecha: nuevaFecha.value,
        tratamiento: selectTratamientos.value,
      };
      arrayTurnos.push(nuevoTurno);
      mostrarTurnos(arrayTurnos);
      asignarEventoEdit();
      asignarEventoDeleted();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El turno ha sido asignado",
        showConfirmButton: false,
        timer: 1500,
      });
      limpiarCampos();
    }
  };
  function limpiarCampos() {
    nuevoNombre.value = "";
    nuevaFecha.value = "";
    selectTratamientos.value = "Seleccione un Tratamiento";
    selectTratamientos.classList.remove("is-invalid");
    nuevoNombre.classList.remove("is-invalid");
    nuevaFecha.classList.remove("is-invalid");
  }
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
        fechaTurno.value = nodos[1].innerHTML;
        tratamientoTurno.value = nodos[2].innerHTML;

        btnGuardar.onclick = () => {
          modal.hide();
          nodos[0].innerHTML = nombrePaciente.value;
          nodos[1].innerHTML = fechaTurno.value;
          nodos[2].innerHTML = tratamientoTurno.value;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "El turno ha sido asignado",
            showConfirmButton: false,
            timer: 1500,
          });
        };
      };
    });
  }
  function asignarEventoDeleted() {
    btnDeleted.forEach((btn) => {
      btn.onclick = () => {
        Swal.fire({
          title: "ESTA SEGURO QUE DESEA ELMINAR EL REGISTRO",
          showConfirmButton: true,
          showCancelButton: true,
          icon: "warning",
        });
        Swal.getConfirmButton().onclick = () => {
          let turno = document.getElementById(`turno${btn.id}`);
          bodyTurnos.removeChild(turno);
          arrayTurnos = arrayTurnos.filter((turno) => turno.id != btn.id);
          Swal.close();
        };
      };
    });
  }
  function mostrarTurnos(turnos) {
    bodyTurnos.innerHTML = "";
    turnos.forEach((turno) => {
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
  function cargarTratamientos() {
    tratamientos.forEach((tratamiento) => {
      selectTratamientos.innerHTML += `<option id="trata${tratamiento.id}" value="${tratamiento.nombre}">${tratamiento.nombre}</option>`;
    });
  }
});

function cambiarVista(e) {
  if (e.target.id === "nuevoNombre") {
    datoTurno.hidden = false;
    datosPaciente.hidden = true;
    btnAsignar.classList.remove("disabled");
    btnBuscarRespon.classList.add("disabled");
  } else {
    datoTurno.hidden = true;
    datosPaciente.hidden = false;
    btnAsignar.classList.add("disabled");
    btnBuscarRespon.classList.remove("disabled");
  }
}
function renderMenu(menu, nombreLogin) {
  if (menu === "menuApp") {
    let datosLogin = document.getElementById("datosLoginUsuario");
    datosLogin.hidden = false;
    datosLogin.innerHTML = `Bienvenido, ${nombreLogin}`;
    sectionGestionTurnos.hidden = false;
    sectionLogin.hidden = true;
  } else if (menu === "menuLogin") sectionLogin.hidden = false;
}
