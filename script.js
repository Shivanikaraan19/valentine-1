function startSurprise() {
  document.getElementById("specialMessage").classList.remove("hidden");
  
  // Play music
  document.getElementById("bgMusic").play();

  // Start hearts animation
  setInterval(createHeart, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

window.onload = function () {
  const music = document.getElementById("bgMusic");
  music.muted = false;
  music.play();
};
music.play();