//1punto
var saludar;

if(saludar=="si"){
    saludar="hola"
}
    console.log("Hola, soy un condicional simple");

//2punto
var x=20;
 
if(x<=30){
    console.log("La condición es verdadera");
}
//3punto
var edad;
 
if(edad>=18){	

    console.log("Bienvenido, puede ingresar");

}else{
edad = 15
console.log("Lo siento, no tiene edad suficiente para entrar aquí");
}

//4punto
var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if( numero1!==numero2) {
  console.log("numero2 es positivo");
}
if(numero1!==0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1<=numero2 ) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
//5punto
var numerito = 100;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>50 && numerito<80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else if(numerito>100){
    console.log("numerito es estrictamente mayor a 100");
}
//6punto
numerito = 40;
if(numerito<50) {
    console.log("numerito sí es estrictamente menor que 50");
} 
//7punto
 numerito = 70;
 if(numerito>50 && numerito<80) {
    console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
  }
//8punto
 numerito = 110;
 if(numerito>100){
    console.log("numerito es estrictamente mayor a 100");
}
//9punto
var diaActual="jueves";
if(diaActual=="jueves"){
    console.log("valla al poli");
}else{
    console.log("no puede ir al poli")
}
//10punto
var valor1=2
var valor2=4
if (valor2==0){
    console.log("no se puede dividir");
}else{
    console.log(valor1/valor2)
}   

//11punto
var dia="lunes"
if(dia=="lunes"){
    console.log("hoy se come arroz con pollo")
}else if(dia=="martes"){ 
    console.log("hoy se come chuleta")
}else if(dia=="miercoles") { 
    console.log("hoy se come frijoles")
}else if(dia=="jueves"){
    console.log("hoy se come sancocho")
}else if(dia=="viernes"){
    console.log("hoy se come badeja paisa")
}else if(dia=="sabado"){
  console.log("hoy se come ajiaco") 
}else if(dia=="domingo"){
  console.log("hoy se come sancocho de gallina")
}
  //12punto
  var letra="a";
  if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
    console.log("la letra es una vocal")
  } 
