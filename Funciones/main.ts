//author je0azul5

//creacion de funcion suma sin tipado de retorno
function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(2, 55));

//creacion de funcion suma sin tipado de retorno
function sum2(a: number, b: number): number {
  return a + b;
}
console.log(sum(2, 65));

//formas de funciones----------------
function mostrar(): void {
  console.log('funcion 1');
}

//funcion flecha
const mostrar2 = ():void => console.log('Funcion 2');

mostrar()
mostrar2()