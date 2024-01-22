
let clima = "soleado"

const salgoConParaguas = (tipoClima)=>{
    return tipoClima === "lluvioso" ? "si, llevalo" : "No, no hace falta"
}

salgoConParaguas( clima )

// ANCHOR ---> EL OR devuelve el primer truty o el ultimo falsy

console.log( false || null || "" || "" )

 let carrito = undefined

 carrito || "no hay elementos"


// ANCHOR ---> EL AND devuelve el primer falsy o el ultimo truty 
console.log( "hola" && 0 && "" && [])

estaLogueado && tienePermisos && "Tenes acceso"
 