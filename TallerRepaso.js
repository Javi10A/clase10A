//Cree un ciclo while que se repita 5 veces y en cada iteración imprima el número 2
var Saludos = 0; 
 
while(Saludos < 5){
    console.log("2 ");
    Saludos += 1
}
//Desarrolle un ciclo while que itere 8 veces e imprima el número del ciclo en el que se encuentra

var CantSaludos = 0; 
 
while(CantSaludos < 8){
    console.log("va en la interaccion " + CantSaludos);
    CantSaludos += 1
}
//Diseñe un ciclo while que itere 10 veces, pero su incremento debe ser de 2 en 2
var CantSaludos = 0; 
 
while(CantSaludos < 20){
    console.log("2 en 2");
    CantSaludos += 2
}
//Diseñe un ciclo while que se itere hasta que el usuario escriba la palabra ok
var respuesta=prompt("ingrese ok para parar");
while(respuesta != "ok"){;
console.log("dijo" + respuesta);
respuesta=prompt("ingrese ok para parar")
}
//Desarrolle un ciclo while que pida un valor numérico y se detenga hasta que ese valor sea negativo
var ciclo=prompt("ingrese un negativo para detenerse")
while(ciclo>=0){
    console.log("dijo" + ciclo)
    ciclo=prompt("ingrese un negativo para detenerse")
}

//Elabore un ciclo while que reciba dos números, los sume y si el resultado es mayor a 20 debe detenerse. De lo contrario, debe pedir nuevamente dos valores.
var suma=0
var numero1
var numero2
while(suma <=20){
    num1=parseInt(prompt("ingrese un valor"))
    nume2=parseInt(prompt("ingrese otro valor"))
    suma=num1+num2;
}