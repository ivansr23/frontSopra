//VAR,LET,CONST
var a = 1;
let b = 2;

if(true){
    var a = 3;
    let b = 4;
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)

//FOR IN
let colores = ['blanco', 'negro', 'gris']
for(var i=0; i<colores.length; i++){
    console.log(colores[i])
}

for (let i in colores){
    console.log(colores[i])
}

//FOR OF (ES6)
for (let color of colores){
    console.log(color);
}

//FOREACH
function muestraColor(color,pos){
    console.log(pos, color)
}
colores.forEach(muestraColor)

colores.forEach(function(color,pos){
    console.log(pos, color)
})

//funciones flecha (arrow functions) es6

colores.forEach((color,pos)=>{
    console.log(pos, color)
})

let suma = (n1,n2) => n1+n2
let suma1 = (n1,n2)=>{
    return n1+n2;
} 
let res = suma(1, 2)
let res1 = suma1(1, 2)
console.log(res, res1)

//funciones recursivas
function factorial(num) {
    if(num === 1){
        return 1;
    }else{
        return (num*factorial(num-1))
    }
}
let f5 = factorial(5)
console.log(f5);

//Objetos y arrays

let mascotas = ['pez','perro','gato']

let pelicula = {
    titulo: "the expendables",
    duracion: 120,
    descripcion: "hola soy yo..."
}

console.log(pelicula.titulo);
console.log(pelicula['titulo']);

//Añadir un nuevo elemento al final del array
mascotas.push('ninfa')

//sacar el ultimo elemento
let ultima_mascota = mascotas.pop()

console.log(mascotas)
console.log(ultima_mascota)

//Añadir un elemento al principio del array

mascotas.unshift(ultima_mascota)


let mascotasDelMundo= mascotas.splice(1,2,ultima_mascota)
console.log(mascotasDelMundo)

let copiaMascotas = mascotas;
copiaMascotas.push('perrooo')
console.log(copiaMascotas)
console.log(mascotas)

let copiaMascotas1 = [].concat(mascotas)
copiaMascotas1.push('serpiente')
console.log(mascotas)
console.log(copiaMascotas1)


// Metodo 2 para copiar un array sin apuntar a la misma referencia

let copiaMascotas2 = [...mascotas]
ultimaMascota = mascotas.pop()
console.log(mascotas)
console.log(copiaMascotas2)


///Desestructuracion de arrays y objetos

let{titulo: t,descripcion,duracion}=pelicula;

console.log('titulo: '+ t + ', descripcion '+ descripcion +', duracion '+ duracion)












//Funciones constructoras y prototype

function Pelicula(titulo, descripcion,duracion, estreno){
    this.titulo=titulo;
    this.descripcion=descripcion;
    this.duracion=duracion;
    this.estreno=estreno;
  
}
Pelicula.prototype.estaEstrenada=function(){
    return new Date().getFullYear()>=this.estreno
}
let peli100 = new Pelicula('Pelicula 100','Una descripcion',100,2000)
let peli101 = new Pelicula('Pelicula 101','Una descripcion',101,2020)

console.log(peli100);
console.log(peli100.estaEstrenada());
console.log(peli101);
console.log(peli101.estaEstrenada());

String.prototype.repeat= function(numero){
    let repeat='';
    for (let index = 0; index < numero; index++) {
        repeat+= this;
    }
    return repeat
}
console.log('toc toc penny...'.repeat(3))