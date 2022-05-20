//(1.0) Cree un ciclo que se repita n veces (pregunte al usuario) y en cada repetición imprima si el número de la repetición es o no múltiplo de 5. Ejemplo: Si el ciclo va hasta el 10, debe imprimir para los números 1, 2, 3, 4, 6, 7, 8 y 9 que no son múltiplos de 5; para 0, 5 y 10 debe mostrar que sí es múltiplo de 5.

console.log("punto 1")

var max=prompt("ingese el numero hasta donde quiere los multiplos de 5")//le pide al usuario que hasta cual numero quiere que aplique esta funcion

var contador=0//el contador empieza desde 0

while(contador <= max){//el contador debe ser menor e igal que el max

    if(contador%5==0){//funcion que nos ayuda a descubrir cual es el multiplo

       console.log("el " + contador+ "si es multiplo de 5")//nos dice que si es el multiplo de 5

    }else{//sirve para abrir el campo de la otra respuesta

        console.log("el " + contador+ "no es multiplo de 5")// nos avisa que no es el multiplo de 5
    }
    contador++//este tiene la misma funcion que contador+=1
}




//(0.8) Pregunte al cajero de la tienda cuántos artículos va a registrar, a partir de eso diseñe un ciclo while que pida el precio de cada artículo y al final muestre un mensaje que diga el total a pagar por el cliente.
console.log("punto 2")
var cajero=prompt("porfavor ingrese la cantidad de objetos que van a comprar")
var acomulador=0
var compra=1
var precio
while(compra<=cajero){
    precio=parseInt(prompt("porfavor ingrese el precio de cada uno"))
    acomulador= precio+ acomulador
    compra+=1

}
console.log("el precio total a pagar es " + acomulador)

//(0.5) Copie y pegue el algoritmo anterior, pero esta vez, el cajero debe tener la opción de continuar o no registrando artículos. Una vez deje de hacerlo, se muestra el mensaje con el total a pagar.
console.log("punto 3")
var cajero
var acomulador=0
var compra=1
var precio
var respuesta ="si";
 
while(respuesta=="si"){
    
    
    precio=parseInt(prompt("porfavor ingrese el precio de cada uno"))
    acomulador= precio+ acomulador
    compra+=1
    respuesta=prompt("ingrese si quiere seguir con mas objetos ");
}

console.log("el precio total a pagar es " + acomulador)
//1.0) Modifique el código anterior (copie y pegue) para que ahora le aplique un descuento del 10% si la cantidad de artículos fue mayor a 8, 15% si es mayor que 15 y 20% si la cantidad de artículos es mayor a 25. El total a pagar debe mostrarse con el descuento aplicado.
console.log("punto 4")
var cajero
var acomulador=0
var compra=1
var precio
var respuesta ="si";
 var porcentaje=100
while(respuesta=="si"){
    
    precio=parseInt(prompt("porfavor ingrese el precio de cada uno"))
    acomulador= precio+ acomulador
    compra+=1
    respuesta=prompt("ingrese si quiere seguir con mas objetos ");
    
}
if(cajero>=8||cajero<=14) {
    console.log("se aplica el 10%");
acomulador=precio+acomulador*0,9
console.log("el precio total a pagar es ", acomulador)
}else if(cajero>=15||cajero<=24) {
  console.log("se aplica el 15%");
  acomulador=precio+acomulador*0.85
  console.log("el precio total a pagar es ", acomulador)
}else if(cajero>=25) {
  console.log("se aplica el 25%");
  acomulador=precio+acomulador*0.8
  console.log("el precio total a pagar es ", acomulador)

}
    
console.log("el precio total a pagar es " + acomulador)
//(1.7) Diseñe un ciclo while cuyo límite es la cantidad de notas que el docente requiera digitar. Solicite una a una las notas y verifique si el estudiante perdió o no la asignatura (lleve conteo de ambos). Al finalizar el ciclo, si el número de estudiantes reprobados es igual o mayor que los aprobados, debe mostrar un mensaje que diga “Debe abrirse el curso de verano”, sino, “La cantidad de estudiantes no es suficiente para curso de verano”.
console.log("quinto punto")
var numE=prompt("porfavor ingrese el numero de estudiantes")
var contadorEst=1
while(contadorEst<=numE){
var nomE=prompt("ingrese el nombre de el estudiante")
var nuemN=prompt("ingrese el numero de notas")
var notas=0
var not
var prom 
var contador=1
var estudianteA=0
var estudiantesR=0
while(contador<=nuemN){
    notas=parseFloat(prompt("dijite las notas de el estudiante"))
    if(notas>5||notas<1){
        console.log("la nota e incorrecta esta debe ser entre 1 y 5")
        
    }else{ notas=not+notas
        prom= not/nuemN
        contador+=1
    }
}
    if(prom>=3.5){
        console.log("el estudiante",nomE,"gano la materia y su nota final es ", prom)
        estudiantesA+=1
    }else{
        console.log("el estudiante ", nomE,"perdio la materia y su nota final es ",prom)
        estudiantesR+=1
    }
contadorEst+=1
}
if(estudiantesR>=estudianteA){
    console.log("tiene que abrirse un curso de verano")
}else{
    console.log("la cantidad de estudiantes no es mucha para el curso de verano")
}
