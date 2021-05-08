var defaults = function (nombre, apellido, edad, profesion) {
    if (profesion === void 0) { profesion = "estudiante"; }
    return console.log("se llama " + nombre + " " + apellido + " y tiene una edad de " + edad + " y es " + profesion);
};
defaults("Juan", "martin", 45);
defaults("Juan", "martin", 45, "profesor");
