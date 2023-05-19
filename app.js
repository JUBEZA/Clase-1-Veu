const saludar = () => {
    console.log("hola!")
}

saludar();

class Persona {
  constructor(nom, ape, edad, pais) {
    this.nombre = nom;
    this.apellido = ape;
    this.edad = edad;
    this.pais = pais;
  }
}

const per1 = new Persona("Juan", "Beza", 30, "Chile")
console.log(per1)
