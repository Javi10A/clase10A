// Javier zapata angela delgado
// 23/03/22


/* 1 Una manguera arroja 145 litros de agua en una hora. 
Dada la cantidad de litros de agua que caben en una piscina, 
retorne el tiempo en horas que tarda en llenarse con el agua de la manguera.
*/
var litrosPsc;
var tiempoH;
var totalote;

litrosPsc=prompt("porfavor diga cuantos litros le caben a la piscina");
/*
1hora        145L
tiempH       litrosPsc
 */
tiempoH= litrosPsc*1;
totalote=   tiempoH/145;
console.log("la picina se llenara en " + totalote);
/* 2 Dada una longitud en metros, conviértala en milímetros
*/
var longM ;
var total;
longM=prompt("porfavor ingrese la longitud en metros");
total= longM*1000;
console.log("el total a milimetros es " + total);
/* 3 Convierta el resultado del punto anterior en decímetros.
*/
var totalito ;
totalito= total*0.01;
console.log("el total es decimetros es "+ totalito);
/*4 Convierta el resultado en decímetros del punto anterior a kilómetros.
*/
var result ;
result= totalito*0.0001;
console.log("el resultade en kilometros es " + result);
/* 5 El minuto de una llamada telefónica cuesta 120 pesos. Dada una duración de llamada en horas, 
calcule qué costo tiene la llamada.
*/
var tiempoHo;
var totalteto;
var resultado;
tiempoHo=prompt("porfavor ingrese el tiempo en horas que se demoro en la llamada");
totalteto= tiempoHo*1;
resultado= totalteto/120;
/* 6 Un profesor de música requiere un algoritmo que le ayude a calcular rápidamente cuánto debe 
cobrar por cada clase. La manera en que cobra es la siguiente. La primera hora cuesta $40.000, 
cada hora adicional cuesta $25.000. Dado el número de horas que duró la clase, retorne el total a 
cobrar por el alumno. (cada hora se cobra a partir del primer minuto, es decir, la cantidad de 
horas es un número entero)
*/
var horas;
var cobro;
var total;
horas=prompt("porfavor ingrese el total de horas que demoro la clase");
cobro= horas-1

