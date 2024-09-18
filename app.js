document.querySelector(".advice-button").addEventListener("click", function () {
  const dice = document.querySelector(".dice");

  // Ajoute la classe d'animation
  dice.classList.add("dice-roll");

  // Supprime la classe après la fin de l'animation pour réactiver l'animation au prochain clic
  dice.addEventListener(
    "animationend",
    function () {
      dice.classList.remove("dice-roll");
    },
    { once: true }
  );
});

url = "https://api.adviceslip.com/advice";
let adviceNumber = 1;

async function showAdvice() {
  const reponse = await fetch(url);
  const data = await reponse.json();
  const advice = data.slip.advice;

  document.getElementById("advice-text").textContent = advice;
  document.getElementById("advice-number").textContent = adviceNumber;
  adviceNumber++;
}

showAdvice();

document.querySelector(".advice-button").addEventListener("click", showAdvice);
