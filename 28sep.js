let cROJO = document.getElementById("rojo")

let cAZUL = document.getElementById("azul")

let parrafo1= document.getElementById("p1")

let ConteoRojo= document.getElementById("conteoR")

let ConteoAzul= document.getElementById("conteoA")

let ContarR= 0;

let ContarA= 0;
cROJO.addEventListener("click",function(){
    parrafo1.innerHTML = "Hiciste click sobre el circulo Rojo "
    ContarR++
    ConteoRojo.innerHTML = "Numero de clicks Rojo: " + ContarR
})
cAZUL.addEventListener("click",function(){
    parrafo1.innerHTML = "Hiciste click sobre el circulo Azul"
    ContarA++
    ConteoAzul.innerHTML = "Numero de clicks Azul: " + ContarR
})
let input = document.querySelector("input")
let btonValidar  = document.querySelector("button")
let intentos =0
btonValidar.addEventListener("click",function(){
    const contraseña = 407;
    intentos++
    if(input.value == contraseña){
        input.style.background="green"
        input.placeholder="correcto"
    }
    else{
        input.style.backgroundColor="red"
        input.placeholder="incorrecto"
        input.value=""

    }
    if(intentos >=5){
        input.placeholder="Muchos intentos"
        input.readOnly=true
    }
})