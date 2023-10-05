let input1 = document.querySelector("#resp1")
let input2 = document.querySelector("#resp2")
let input3 = document.querySelector("#resp3")
let btonRespuestas = document.querySelector("#buttom1")
let btonVer = document.querySelector("#buttom2")

btonRespuestas.addEventListener("click",function(){
    if(input1.value == 3){
        input1.style.background="green"
        input1.placeholder="correcto"
    }else{
        input1.style.backgroundColor="red"
        input1.placeholder="incorrecto"
        input1.value=""     
    }
    if(input2.value == 36){
        input2.style.background="green"
        input2.placeholder="correcto"
    }else{
        input2.style.backgroundColor="red"
        input2.placeholder="incorrecto"
        input2.value=""
    }
    if(input3.value == 6){
        input3.style.background="green"
        input3.placeholder="correcto"
    }else{
        input3.style.backgroundColor="red"
        input3.placeholder="incorrecto"
        input3.value=""
    }
    
})
let res1 = document.querySelector("#r1")
let res2 = document.querySelector("#r2")
let res3 = document.querySelector("#r3")
btonVer.addEventListener("click", function (){
    if(res1){
    res1.innerHTML="3" 
    }
    if(res2){   
    res2.innerHTML="36"
    }
    if(res3){
        res3.innerHTML="6"
    }

})
