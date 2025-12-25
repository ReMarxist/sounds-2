var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.load();

function play() {
  audio.play();
}

function stop() {
  audio.pause();
  audio.load();
}