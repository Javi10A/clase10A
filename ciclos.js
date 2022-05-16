var CantSaludos = 0; 
 
while(CantSaludos < 5){//1 se debe cambiar el num 5
    console.log("Hola ");
    CantSaludos += 1;//2 este saludaria 2 veces si lo cambiamos porque es menor a 5 la cant de saludos y le vamos a sumar 2 saludos a la vez
}
//3 saludaria sin parar porque esta linea indica la cantidad de saludos que irian a aumentar y si la eliminamos serian muchos saludos sin parar
var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}
var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}
