
// ANCHOR ---> copia por valor vs copia por referencia 

let a = 1 
let b = a 

console.log( b )

a = 5 

console.log( b )

let persona = {
    nombre: "pepito",
    edad: 12,
    altura: 178
}

let copiaPersona = persona 

// console.log( copiaPersona )

// persona.nombre = "juancito"

// console.log( copiaPersona )

copiaPersona.edad = 15 

console.log( persona )

let numeros = [1, 5, 2] 
let copiaNumeros = numeros 

copiaNumeros.push( 12 )

console.log( numeros )


let personita = {
    nombre: "pepito",
    edad: 12,
    altura: 178
}


let copiaPersonita = {...personita}

personita.edad = 22 

console.log( copiaPersonita )

let numeritos = [ 1, 5 ,2, 7 ]

let copiaNumeritos = [...numeritos ]