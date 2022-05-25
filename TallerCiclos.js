//Cree un ciclo while que se repita 7 veces, en cada vez debe imprimir el número de repeticiones que lleva.
var CantR = 0; 
 
while(CantR < 7){
    console.log("va en la repeticion " + CantR);
    CantR += 1
}
//Diseñe un ciclo while cuyo incremento vaya de tres en tres e imprima los múltiplos de 3 desde el 0 hasta el 30.
var Cant = 0; 

while(Cant < 11){
    console.log("3 en 3");
    Cant += 3
}
//Escriba un ciclo que imprima los números pares hasta el 50.

var CantSaludos = 0; 
 
while(CantSaludos < 25 ){
    console.log("has llegado a "+ CantSaludos);
    CantSaludos += 2
}
//El usuario desea ver la lista de números impares desde uno (1) hasta determinado número, el algoritmo debe recibir el límite e imprimir solo los números impares.
/*Ejemplo: El usuario digita el 10, el algoritmo debe imprimir:
1
3
5
7
9
*/
var nums=prompt("porfavor imprima un numero")
while(CantSaludos < nums ){
    console.log("has llegado al lo maximo");
    CantSaludos += 3
}
//Consulte en internet ¿cómo saber si un número es par en javascript? Y diseñe un ciclo que se detenga cuando el usuario escriba un número impar, mientras el número sea par, debe imprimir un mensaje que diga El número # es par.
var ciclo=prompt("ingrese un impar para detenerse")
while(ciclo %2==0){
   console.log("el numero"+ ciclo+" es par")
    ciclo=prompt("ingrese un impar para detenerse")
  
}
//Lea en la guía sobre acumuladores en ciclos. Cree un ciclo cuyo límite sea la cantidad de estudiantes de su salón y retorne la suma(acumulado) de todas las edades de los estudiantes.

var acumulador = 0; 
var valorAsumar;
var ciclo6=1
var CantP=prompt("porfavor ingrese la cantidad de personas que hay en su salon")



 
while(ciclo6 <= CantP){

    valorAsumar=parseInt(prompt("ingrese la edad de el estudiante"))
    
   acumulador =valorAsumar + acumulador  
   ciclo6+=1;
   
}
console.log("El total del acumulador es "+ acumulador )
//en una reunión se juega una rifa, escoja usted la categoría y la palabra u objeto a adivinar. Diseñe un ciclo while que le pregunte a cada persona sobre cuál cree que es la respuesta, el ciclo se detiene una vez alguien haya dicho la respuesta correcta. Al finalizar, se debe mostrar un mensaje felicitando a la persona ganadora así como también imprimir cuántos intentos hubo antes de acertar
var rifa
var BoletaG=9
var personas=10
 var intentos= 0
 
while(personas < 10 ){
    personas=prompt("cual cree que es el numero ganador ")
    CantSaludos += 0
}

while(rifa == BoletaG)
  if(rifa=="0"||rifa=="1"||rifa=="2"||rifa=="3"||rifa=="4"||rifa=="5"||rifa=="6"||rifa=="7"||rifa=="8"||rifa=="9") {
  console.log("el ganador es "+rifa)
  }else{console.log("no ganaste la rifa :(")
}
var CantR = 0; 
 
while(intentos < 10){
    console.log("va en el intento  " + intentos);
    CantR += 1
}
//Punto Bonus(1.0) Diseñe un algoritmo para los maestros que reciba el nombre y n cantidad de notas de un estudiante. Halle el promedio de esas notas y, según el resultado, muestre un mensaje indicando que el estudiante nombreEstudiante ganó o perdió la asignatura y su nota final.
var notaES=prompt("porfavor ingrese la nota de el estudiante")
var estu=prompt("porfavor ingrese el nombre de el estudiante")
var promedio
while(notaES < 5){
    console.log("vamos por la nota "+ notaES)
    notaES+=1
}
while(estu < 10){
    console.log("la nota de el estudiante es "+ notaES)
    promedio= notaES
    estu+=1
}
