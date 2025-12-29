let musicStarted = false;

function startMusic() {
  if (musicStarted) return;

  const audio = document.getElementById("bgMusic");
  if (!audio) return;

  audio.volume = 0.6;

  audio.play().then(() => {
    musicStarted = true;

    window.removeEventListener("scroll", startMusic);
    window.removeEventListener("click", startMusic);
    window.removeEventListener("touchstart", startMusic);
    window.removeEventListener("keydown", startMusic);
  }).catch(() => {
    // ignore
  });
}

window.addEventListener("scroll", startMusic, { passive: true });
window.addEventListener("click", startMusic);
window.addEventListener("touchstart", startMusic);
window.addEventListener("keydown", startMusic);