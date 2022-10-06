/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */

import composition from "./modules/math/composition.js";
import division from "./modules/math/division.js";
import substraction from "./modules/math/subtraction.js";
import multiplication from "./modules/math/multiplication.js";
import { one, two, three, four, five } from "./modules/numbers/numbers.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

document.querySelector("body").innerText = `Pateiktų skaičių suma lygi ${a}, dalmuo lygus ${b}, skirtumas lygus ${c}, o sandauga lygi ${d}.`
