let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let imageSource1 = "./images/" + "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let imageSource2 = "./images/" + "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2)
  document.querySelector("h1").textContent = "Player 1 wins";
else if (randomNumber1 < randomNumber2)
  document.querySelector("h1").textContent = "Player 2 wins";
else document.querySelector("h1").textContent = "Draw!";
