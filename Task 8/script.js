/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
let a = Number(prompt("Įveskite pirmą skaičių:"));
let b = Number(prompt("Įveskite antrą skaičių:"));

function Calculator(a, b) {
  this.sum = function () {
    console.log(`Pateiktų skaičių suma lygi ${a + b}`);
    return a + b;
  };
  this.subtraction = function () {
    console.log(`Pateiktų skaičių skirtumas lygus ${a - b}`);
    return a - b;
  };
  this.multiplication = function () {
    console.log(`Pateiktų skaičių sandauga lygi ${a * b}`);
    return a * b;
  };
  this.division = function () {
    console.log(`Pateiktų skaičių dalmuo lygus ${(a / b).toFixed(2)}`);
    return (a / b).toFixed(2);
  };

  // ------------------------
  // TEKSTAS Į HTML
  // ------------------------

  document.querySelector(
    "body"
  ).innerText = `Pateiktų skaičių ${a} ir ${b} suma lygi ${this.sum()}, skirtumas
  lygus ${this.subtraction()}, sandauga lygi ${this.multiplication()}, o dalmuo lygus ${this.division()}.`;
}

new Calculator(a, b);
