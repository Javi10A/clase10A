console.log("punto 1")


var num1=prompt("ingrese un numero")
var num2=prompt("ingrese otro numero")

if(num1>num2){
    for(var i=num2;i<=num1; i++){
      console.log(i)
    }

}else if (num2>num1){
    for(var i=num1;i<=num2;i++){
      console.log(i)
    }
 }

 console.log("segundo punto")
 num=prompt("Por favor digite un numero par")
     console.log("La tabla del ", num)  
     for(i=0; i<=10; i++){
         console.log(num, " x ", i, " = ", num*i)     
}
 console.log("punto 3")
 var nume=prompt("porfavor ingrese un numero")
 var nume2=prompt("ingrese un numero para multiplicar")
 for (var i = 0; i <= nume2; i++) {
     console.log(nume  + " X " + i + " =" + nume*i)
 }
console.log("punto 4")

console.log("Por favor ingrese 10 numeros")
arreglo=[]
for(i=0; i<=9; i++){
    numer=prompt("Numero ", i+1)
    console.log("Numero", i+1)
    arreglo[i]=numer
}
numMayor= arreglo[0]
for(i=1;i<arreglo.length; i++){
    if(arreglo[0] > numMayor){
        numMayor= arreglo[i]
    }
}
console.log("El numero mayor es ", numMayor)

console.log("punto 5")
var arregloProductos=[]
var nombreProductos
var arregloPrecios=[]
for(var i=1;i<=5;i++){
  nombreProductos=prompt("ingrese los productos que comprara " + i)
  arregloProductos.push(nombreProductos)
}
console.log(arregloProductos)
for(var i=0; i<arregloProductos.length; i++){
  var precioProducto=prompt("ingrese el precio de el producto " + arregloProductos[i])
  arregloPrecios.push(precioProducto)
}