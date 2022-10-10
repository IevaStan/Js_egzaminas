/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

function makeRequest() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      showResults(data);
    });
  document.getElementById("message").style.visibility = "hidden";
  document.getElementById("btn").style.visibility = "hidden";
}

function showResults(responseItems) {
  // console.table(responseItems);
  const output = document.getElementById("output");
  output.innerHTML = "";
  responseItems.forEach((item) => {
    const mainCard = document.createElement("div");
    mainCard.style =
      "border: 1px solid black; padding: 2rem; margin-bottom: 1rem ";

    const dataLogin = document.createElement("div");
    dataLogin.innerText = "Login: " + item.login;
    mainCard.appendChild(dataLogin);

    const avatarContainer = document.createElement("div");
    avatarContainer.innerText = "Full size avatar: ";
    const a = document.createElement("a");
    avatarContainer.appendChild(a);
    const link = document.createTextNode("click here to open in New Tab");
    a.appendChild(link);
    a.href = item.avatar_url;
    a.target = "_blank";
    mainCard.appendChild(avatarContainer);

    const avatar = document.createElement("img");
    avatar.src = item.avatar_url;
    avatar.style = "width: 100px";
    mainCard.appendChild(avatar);

    output.appendChild(mainCard);
  });
}

document.getElementById("btn").addEventListener("click", makeRequest);
