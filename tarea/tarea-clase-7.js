/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *
 * */
const d = document;

function validarFormulario(e) {
  e.preventDefault();

  const $formulario = d.querySelector("#carta-a-santa");
  const nombre = $formulario.nombre.value;
  const ciudad = $formulario.ciudad.value;
  const descripcionRegalo = $formulario["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorRegalo,
  };

  borrarErrores();
  const esExito = manejarErrores(errores) === 0;
  if (esExito) {
    $formulario.className = "oculto";
    d.querySelector("#exito").className = "";
    redireccionar();
  }
}

function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  const $errores = d.querySelector("#errores");
  let cantidadErrores = 0;

  llaves.forEach(function (llave) {
    const error = errores[llave];

    if (error) {
      cantidadErrores++;
      $formulario[llave].className = "error";

      const $error = d.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      $formulario[llave].className = "";
    }
  });

  return cantidadErrores;
}

const borrarErrores = () => {
  let $errores = d.querySelectorAll("#errores li");
  console.log($errores);

  if ($errores.length > 0) {
    for (let i = 0; i < $errores.length; i++) {
      $errores[i].remove();
    }
  }
};

const redireccionar = () => {
  setTimeout(() => {
    window.location.href = "wishlist.html";
  }, 2000);
};

function validarCiudad(ciudad) {
  if (ciudad.length === 0) return "el campo ciudad no puede estar vacio";
  return "";
}

function validarDescripcionRegalo(regalo) {
  if (regalo.length >= 100) return "el campo descripcion es muy largo";
  if (regalo.length === 0) return "el campo descripcion no puede estar vacio";
  if (!/^[a-z0-9]+$/i.test(regalo))
    return "El campo regalo solo puede tener numeros y letras";
  return "";
}
function validarNombre(nombre) {
  if (nombre.length === 0) return "Este campo debe tener al menos 1 caracter";

  if (nombre.length >= 50)
    return "Este campo debe tener menos  de 50 caracteres";

  if (!/^[a-z]+$/i.test(nombre)) return "El campo nombre solo acepta letras";
  return "";
}

const $formulario = d.querySelector("#carta-a-santa");
$formulario.onsubmit = validarFormulario;
