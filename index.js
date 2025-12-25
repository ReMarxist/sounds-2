var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.load();

function play(event) {
  audio.play();
  document.getElementById("status").textContent = "play";

  event.preventDefault();
}

function stop_sound() {
  audio.pause();
  audio.load();
  document.getElementById("status").textContent = "stop";
}