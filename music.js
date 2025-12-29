const audioPlayer = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");

// Play/Pause functionality
playPauseButton.addEventListener("click", function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.classList.replace("bi-play-circle", "bi-pause-circle");
  } else {
    audioPlayer.pause();
    playPauseButton.classList.replace("bi-pause-circle", "bi-play-circle");
  }
});