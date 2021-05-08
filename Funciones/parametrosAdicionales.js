var opciones = function (nombre, apellido, edad, profesion) {
    if (profesion != null) {
        console.log("se llama " + nombre + " " + apellido + " y tiene una edad de " + edad);
    }
    else {
        console.log("se llama " + nombre + " " + apellido + " y tiene una edad de " + edad + " y su profesion es " + profesion);
    }
};
opciones("Juan", "martin", 45);
opciones("Juan", "martin", 45, "Mechamico");
