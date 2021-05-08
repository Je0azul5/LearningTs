//optiene un parametro rest, el cual recolecta n datos
var postresCarta = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("Esta es la carta de postres " + postre + " y tene estas frutas " + frutas);
};
postresCarta("p1", "q", "v", "w", "f", "s", "as");
