const defaults = (
    nombre: string,
    apellido: string,
    edad: number,
    profesion:string="estudiante"
  ) => {
    return console.log(`se llama ${nombre} ${apellido} y tiene una edad de ${edad} y es ${profesion}`);
  };
  

 defaults("Juan", "martin", 45)
defaults("Juan", "martin", 45,"profesor")