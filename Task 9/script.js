/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = Number(budget);
  }
  wasExpensive() {
    return this.budget >= 100000000;
  }
}

const baubas = new Movie("Baubas", "Ilja Bereznickas", 3347);
const godFather = new Movie("The Godfather", "Francis Ford Coppola", 6000000);

// ------------------------
// TEKSTAS Į CONSOLE:
// ------------------------

console.table(baubas);
if (baubas.wasExpensive()) {
  console.log("was espensive");
} else {
  console.log("was not expesive");
}
console.table(godFather);
console.log(godFather.wasExpensive());

// ------------------------
// TEKSTAS Į HTML:
// ------------------------

document.querySelector("body").innerText = `Movie "${
  baubas.title
}" was created by ${
  baubas.director
} and it's ${baubas.wasExpensive()}, that its budget was expensive. The budget was $${
  baubas.budget
}.`;

document.querySelector("body").innerHTML += `<br> Movie "${
  godFather.title
}" was created by ${
  godFather.director
} and it's ${baubas.wasExpensive()}, that its budget was expensive. The budget was $${
  godFather.budget
}.`;
