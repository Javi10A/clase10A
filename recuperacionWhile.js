console.log("punto 1")
var producto=0
var cant=prompt("cuantos productos va a comprar")
var acomulador=0
var acomulador3=0
while( producto < cant) {
    cosas=prompt("porfavor escriba las cosas que va a comprar")
    cantidad=parseInt(prompt("cuantos va a comprar?"))
    precios=parseInt(prompt("porfavor digite el precio de el producto"))
    console.log("va por el producto", cosas, "con un precio de", precios,"$", "con una cantidad de ", cantidad)
    total = precios
    acomulador= acomulador + precios
    totalCan= cantidad
    acomulador3= cantidad+ acomulador3

    producto+=1
}
console.log(" el total  que hay que pagar es ", acomulador,"con una cantidad de ", acomulador3,"de productos")