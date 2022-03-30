/*LOS ARREGLOS  son estructuras que almazenan informacion de cualquier tipo de dato, es decir, STRING, DOUBLE, ARRAY, OBJETOS ENTRE OTROS
LOS ARREGLOS tienen operaciones tales como consultar, modificar, insertar y eliminar
*/
//Los arreglos se declaran con corchetes []



//Creacion de arreglos 

var arreglo=["juan",14]; 
console.log(arreglo);
//Arreglo de arreglos 

var notasEST=[["sofia",4.8],["isa",4.6]];
console.log(notasEST)
//Consultar contenido  de arreglo
console.log(notasEST[0]);
    console.log(notasEST[1])
    console.log(notasEST[1][1]);
//Modificar elemento
console.log(arreglo[0] + "tiene " + arreglo[1]);
arreglo[1]=[15];
console.log(arreglo[0] + "tiene " + arreglo[1] + "años")


notasEST[1][1]=5;
//mostrar mensaje
console.log( [1][0] + "obtuvo" [1][1] + "de nota final" )
//agregar alementos a un arreglo
console.log(" sin agregar " + arreglo)
arreglo.push("10A")
console.log(" agregado "  + arreglo);

// agregar elementos al arreglo desde el inicio
arreglo.unshift("perez");
console.log(" agregado "  + arreglo);

//eliminar elementos del arreglo

console.log("sin eliminar " + arreglo)
arreglo.pop();
console.log("eliminado " + arreglo)
arreglo.shift(); //elimina el primer elemento
console.log("elimina shift" + arreglo)
/* ajercicio
crear un arreglo con los valores
-analisis
-tecnologia
-desarrollo
*/
//cambiar desarrollo por BBDD
//convertir vector en 
/*
-introduccion
-analisis
-tecnologia
*/
//SOLUCION 1
var arreglo=["analisis", "tecnologia", "desarrollo" ]
console.log(arreglo[0])
//SOLUCION 2
arreglo[2]="BBDD"
console.log(arreglo)
//SOLUCION3
arreglo.unshift("introduccion");
console.log(arreglo)