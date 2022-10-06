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
    this.wasExpensive = function () {
      return this.budget >= 100000000;
    };
  }
}

const baubas = new Movie("Baubas", "Ilja Bereznickas", 3347);
console.table(baubas);
console.log(baubas.wasExpensive());

const godFather = new Movie("The Godfather", "Francis Ford Coppola", 6000000);
console.table(godFather);
console.log(godFather.wasExpensive());
