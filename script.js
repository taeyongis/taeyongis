const words = [
  "ART",
  "NEO",
  "SHALALA",
  "TAP",
  "VISIONARY",
  "EXPERIMENTAL",
  "WYLD"
];

let index = 0;

const changingWord = document.getElementById("changing-word");

setInterval(() => {

  index = (index + 1) % words.length;

  changingWord.textContent = words[index];

}, 2000);
