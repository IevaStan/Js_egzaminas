/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];
console.table(users);

let dogOwners = users.filter(filterDogs);
function filterDogs(data) {
  return data.hasDog;
}
console.table(dogOwners);

let adultUsers = users.filter(filterAdults);
function filterAdults(data) {
  return data.age >= 18;
}
console.table(adultUsers);

// ------------------------
// TEKSTAS Į HTML
// ------------------------

document.querySelector("body").innerHTML +=
  "Šunis turi šie vartotojai:" + "<br>" + "<br>";
for (let i = 0; i < dogOwners.length; i++) {
  document.querySelector("body").innerHTML +=
    i + 1 + ". " + dogOwners[i].name + "<br>";
}

document.querySelector("body").innerHTML +=
  "<br>" + "Pilnamečiai yra šie vartotojai:" + "<br>" + "<br>";
for (let i = 0; i < adultUsers.length; i++) {
  document.querySelector("body").innerHTML +=
    i + 1 + ". " + adultUsers[i].name + "<br>";
}
