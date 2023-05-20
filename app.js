// createApp
const {createApp} = Vue;

import { Persona } from "./Persona.js";

const saludar = () => {
    console.log("Hola!")
}

saludar();

const  per1 = new Persona("Juan", "Bezanilla", 30, "BraChile")
console.log(per1)

const nombre = "Juanito";
const phrase = `hola ${nombre}`
console.log(phrase)
