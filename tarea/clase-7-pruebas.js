function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no funciono con un string vacio"
  );
  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos  de 50 caracteres",
    "Validar nombre no valido que el nombre sea menor a 50 caracteres"
  );
  console.assert(
    validarNombre("123123") === "El campo nombre solo acepta letras",
    "Validar nombre no valido que el nombre solo tenga letras"
  );
  console.assert(
    validarNombre("cristian") === "",
    "No se pudo validar con un nombre valido"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("buenos aires") === "",
    "No se pudo validar con una ciudad valida"
  );
  console.assert(
    validarCiudad("") === "el campo ciudad no puede estar vacio",
    "validar ciudad no mostro un error con ciudad vacia"
  );
}

function probarValidarRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "el campo descripcion no puede estar vacio",
    "No se pudo validar que el campo no este vacio"
  );
  console.assert(
    validarDescripcionRegalo(
      "aadsdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
    ) === "el campo descp es muy largo",
    "validar regalo no valido que el campo no sea muy largo"
  );
  console.assert(
    validarDescripcionRegalo("Bicicleta") === "",
    "No se pudo validar con un nombre valido"
  );
  console.assert(
    validarDescripcionRegalo(".,.,.,.,") ===
      "El campo regalo solo puede tener numeros y letras",
    "descripcion regalo no valida que solo fuera numeros y letras"
  );
}
probarValidarNombre();
probarValidarCiudad();
