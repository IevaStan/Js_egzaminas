/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const output = document.getElementById("output");
function getCars() {
  return fetch(ENDPOINT).then((response) => response.json());
}

getCars().then((data) => {
  data.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "card";
    carCard.style = "width: 80%; margin: 0 auto 10px auto";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title card-header bg-primary text-light";
    cardTitle.innerText = car.brand;
    carCard.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.className = "card-text text-muted p-3";
    cardText.innerText = car.models.join(", ");
    carCard.appendChild(cardText);

    output.appendChild(carCard);
  });
});
