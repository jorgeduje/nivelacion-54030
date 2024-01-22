

// ANCHOR ---> Objetos

let persona = {
    nombre: "pepito",
    edad: 12,
    altura: 178
}

{/* <h1>{persona.nombre}</h1> */}

// NO IMPORTA EL ORDEN , SI IMPORTA EL NOMBRE 
let { edad, nombre } = persona

console.log( nombre )

console.log( edad )



// ANCHOR ---> Array 
// NO IMPORTA EL NOMBRE , SI IMPORTA EL ORDEN 

let personas = [ "maria", "pepito", "juancito", "carmen" ]


console.log( personas[0] )
console.log( personas[1] )

let [ , , p3 ] = personas 
console.log( p3 )