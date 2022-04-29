x=5;
console.log(x>7);//false
console.log(x<7);//true
console.log(x=="5");//true
console.log(x==="5");//false
console.log(x>=4);//true
console.log(x!=10);//false


console.log(2 < 12);//true
console.log(2 < "12");	// true
console.log(2 < "John");// false
console.log(2 > "John");//false
console.log(2 == "John");//false
console.log("John" == "John");//true
console.log("john" == "John");// false		
console.log("2" < "12");//false	
console.log("2" > "12");// true	
console.log("2" == "12");//false

//holas
x=12; 
y=7;
console.log(x<15 && y!=7);//F
console.log(y>8 && x<20);//F
console.log(x==12 && x<18);//T
console.log("lunes" == "Lunes" || y!=9);//TRUE
console.log(!(x==10) && y>=6);//TRUE
console.log(x>6 && y==12 && 2>3);//F
console.log((x*2)>22 && y<(2*4));//F
console.log((x>10 || x<10) && !(y!=7 && y<21));//T

var tocaEduFisica= "no";
var uniforme = "diario";
 
if(tocaEduFisica == "si"){
    uniforme = "edu. física";
}
 
console.log("Mañana debe vestir el uniforme de " + uniforme);