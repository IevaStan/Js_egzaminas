/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("search").type = "number"
document.querySelector("form").addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();
  let kilos = document.getElementById("search").value;
  console.log(kilos);
  let lbs = (kilos * 2.2046).toFixed(0);
  let grams = (kilos / 0.001).toFixed(0);
  let ozs = (kilos * 35.274).toFixed(0);
  document.getElementById("output").innerHTML = `${kilos}kg
  is equal to ${lbs} lbs or  ${grams} grams or ${ozs} ouces
  `;
}
document.getElementById("output").style.paddingLeft = "10%"
document.getElementById("output").style.fontSize = "2rem"

