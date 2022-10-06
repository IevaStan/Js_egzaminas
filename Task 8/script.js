/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
    function sum(a, b) {
      console.log("skaičių suma lygi " + (a + b));
      return a + b;
    }
    sum(a, b);
  
    function subtraction(a, b) {
      console.log("skaičių skirtumas lygus " + (a - b));
      return a - b;
    }
    subtraction(a, b);
  
    function multiplication(a, b) {
      console.log("skaičių sandauga lygi " + a * b);
      return a * b;
    }
    multiplication(a, b);
  
    function division(a, b) {
      console.log("skaičių dalyba lygi " + a / b);
      return a / b;
    }
    division(a, b);
  }
  Calculator(10, 2);
  