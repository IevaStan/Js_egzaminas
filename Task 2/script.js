/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let count = 0;

function countFunction(event) {
  event.preventDefault();
  count++;
  document.getElementById("btn__state").innerHTML = count;
//   console.log(count)
}

document
  .getElementById("btn__element")
  .addEventListener("click", countFunction);
