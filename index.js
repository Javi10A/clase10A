console.log("Hola mundo");
// comentarios en linea
/*comentarios
de 
varias
lineas*/ 
// variables
var primerVariable;
let edadUsuario;
//declarar variables
var nombreVariable;
//crear variable sin asignar valor
/*inicializar variables:
asignar un valor al momento de crear la variable 
*/
var gradoEstudiante="10A";
/*asignar un valor:
igualar una variable existente a un nuevo valor
*/
edadUsuario=16;
//asignar valor desde otra variable
console.log(edadUsuario);
var edad=17;
edadUsuario=edad;
console.log(edadUsuario);
/*asignar valor desde el teclado: Existen 2 maneras de hacerlo, la primera es por ventana emergente y la segunda es por medio de un formulario de html
*/
var valor=prompt("ingrese un valor:");
console.log("la variable vale " + valor);
/* constantes: son valores que no pueden ser cambiados durante la ejecusion de el codigo. Las constantes siempre deben ser inicializadas
*/
const PI=3.1416;
//imprimir por consola 
//simple
console.log("...");
console.log(valor);
//concatenado
console.log("..."+ valor);



//operadores
//suma 
var suma;
suma=5+4;
console.log(suma);
var a=12;
suma=a+8;
console.log(suma);
var b=20;
suma=a+b;
console.log(suma);
//resta
var resultado;
resultado=a-b;
console.log(resultado);
resultado=a-b;
console.log(resultado);
//multiplicacion
var producto;
producto=a*b;
console.log(producto);
//divicion
var divicion;
divicion= a/b;
console.log(divicion);
//orden de operaciones
var result;
result=a*b;//240
console.log(result);
result=a*b-10;
console.log(result);
result=a*(b-10);
console.log(result);
//exponente/potencia
var exp=3**2;
console.log(exp);
exp=3**3
console.log(exp);
//Cadenas o string
var cadenita1="3";
var cadenita2="5";
var sumaCadena=cadenita1 + cadenita2;
console.log (sumaCadena);

var nombrecito="Angela";
var apellidito= "zapata";
var nomCompleto= nombrecito +" "+ apellidito;
console.log (nomCompleto);

var logintud= nombrecito.length;
console.log (logintud);
console.log (nomCompleto.length)

//encontrar caracteres dada la pocision en el vector 
var primeraLetra;
primeraLetra=nombrecito [0];
console.log(primeraLetra);
console.log (nombrecito[1]);
// encontrar la ultima posicion deuna cadena o vector
logintud -1 
console.log(nombrecito[nombrecito.length-1]);

// se debe buscar la longitud de la cadena y restarle 1 para encontrar la ultima letra 
// valores inmutables 
//las posiciones de una cadena se pueden consultar pero no se pueden reasignar su valor
nombrecito[0]="p";
console.log (nombrecito);
nombrecito="mauricio"
console.log (nombrecito);