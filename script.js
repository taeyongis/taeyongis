window.onload = function () {

  /* WORD ANIMATION */

  const words = [
    "ART",
    "VISIONARY",
    "NEO",
    "SHALALA",
    "TAP",
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

  /* CAROUSEL */

  const avatarsContainer = document.querySelector(".avatars");

  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  rightArrow.addEventListener("click", () => {

    const firstAvatar = avatarsContainer.firstElementChild;

    avatarsContainer.appendChild(firstAvatar);

  });

  leftArrow.addEventListener("click", () => {

    const avatars = avatarsContainer.children;

    const lastAvatar = avatars[avatars.length - 1];

    avatarsContainer.prepend(lastAvatar);

  });

};
