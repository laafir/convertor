//F = °C × (9/5) + 32
function convert(){
var inputCelcius= Number(document.querySelector(".input-box").value);

var outputFaren= inputCelcius*(9/5)+32;

var result= document.querySelector("#result-far").innerHTML=outputFaren.toFixed(2)+"°F";
}