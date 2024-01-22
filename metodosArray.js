let libros = [
  {
    nombre: "historiasInconscientes",
    autor: "Gabriel Rolón",
    paginas: 352,
    precio: 150,
    cantidad: 5,
  },
  {
    nombre: "operacionMasacre",
    autor: "Rodolfo Walsh",
    paginas: 236,
    precio: 120,
    cantidad: 3,
  },
  {
    nombre: "elAlquimista",
    autor: "Paulo Coehlo",
    paginas: 192,
    precio: 170,
    cantidad: 2,
  },
  {
    nombre: "elCampamento",
    autor: "Blue Jeans",
    paginas: 70,
    precio: 190,
    cantidad: 3,
  },
];

// MAP ---> devuelve un nuevo array y siempre es de la misma longitud que el original

// let nuevosLibros = libros.map((elemento) => {
//   return { nombre: elemento.nombre, autor: elemento.autor };
// }); // []

let nuevosLibros = libros.map((libro, i) => {
  return { ...libro, id: i + 1 };
}); // []

console.log(nuevosLibros); // [{}, {}, {}, {} ]

// FILTER ---> devuelve un nuevo array con todos los elementos que cumplan la condicion

let librosFiltrados = libros.filter((libro) => libro.paginas > 200); // []
console.log(librosFiltrados);

// FIND ---> devuelve el elemento encontrado o undefined si no encuentra ninguno
// en base a una condicion

let elementoEncontrado = libros.find((libro) => {
  return libro.nombre === "elAlquimista";
});

console.log(elementoEncontrado);

// SOME ---> Siempre devuelve un booleano

let existe = libros.some((libro) => {
  return libro.paginas === 12;
});
console.log(existe);

// reduce ---> reduce un array a su minima expresion

let numeros = [1, 6, 2, 7, 1]; // 17

let total = numeros.reduce((acc, elemento) => {
  return acc + elemento;
}); // 1

console.log(total);

let totalGanciaLibros = libros.reduce((acc, libro) => {
  return acc + (libro.cantidad * libro.precio);
}, 0 );

console.log( totalGanciaLibros )
