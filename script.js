const words = [
  "ART",
  "NEO",
  "SHALALA",
  "TAP",
  "VISIONARY",
  "WYLD"
];

let index = 0;

const changingWord = document.getElementById("changing-word");

const interval = setInterval(() => {

  index++;

  changingWord.textContent = words[index];

  if(index === words.length - 1){
    clearInterval(interval);
  }

}, 1500);
