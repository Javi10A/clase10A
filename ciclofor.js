console.log("punto2")
for(var i=10;i>=1; i--){
    console.log(i)
}
console.log("punto3")
var limite=parseInt(prompt("ingrese un limite"))
var sumatoria=0
for(var i=0; i<=limite; i++){
    sumatoria+=1
}
console.log(sumatoria)

console.log("punto 4")
var inicio=prompt("ingrese el inicio")
var final=prompt("ingrese el final")
for(var i=inicio; i<=final; i++){
    if(i%2==0){
        console.log(i)
  
}
}
console.log("punto 5")
var arregloNombre=[]
for(var i=0; i<5; i++){
    var nombre=prompt("ingrese un nombre"
)
arregloNombre.push(nombre)
}
for(var i=0; i<arregloNombre.length;i++)
console.log("el nombre"+i+"es"+ arregloNombre[i])
console.log(arregloNombre)


console.log("punto 6")
var cantNotas=parseInt(promp("ingrese la cantidas"))
var arregloNotas=[]
for(var i=0; i<cantNotas; i++){
    var nota=parseFloat(prompt("nota "+ (i+1)))
    arregloNotas.push(nota)
}
console.log("punto 7")
var sumatoria=0
for(var i=0; i<cantNotas; i++){
sumatoria+= arreglo[i]
}
var promedio=sumatoria/cantNotas