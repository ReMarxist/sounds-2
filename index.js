const links = [
  "https://cdn.mp3zvuki.net/?h=JGraYpdVSLU9JPjqBbikkBie3znw2qh3n_3tvNxvUd22d0Gj-6Xbl8t6XermuK6QG5-vOsDZ5ieIee2o3HNR27Z6Qaz7rdudfNsNzyZpwHowhvMiWNnGKE8p19fBjALwZ8fxDvuC3GZ7CQ6bJabBTjCF8yYIx_gKnxc916yLMe-Zxim-6RDbfcsk4-oKuK2R4p-jOejZ4yhbKdrXyos076MWQZD7pdugewkNzCWgwHQwg_MmCMH55u-GPdeejAHvmsYtv7ocK7U9JPzqCrlwkfGe14pyKX7A_Xntmd07UdS1skJ9VxDbd3sTDc8maMFRMIJJ0pxGl6oWnpaAPQOxYCoc5GKMZIBY6Kivj7o\\",
  "https://storage9.lightaudio.ru/dm/3992242d/4c6415b/Max%20Payne%202%20%E2%80%94%20Max%27s%20Choice%20Duty%20vs%20Passion.mp3",
  "https://storage1.lightaudio.ru/dm/399224d7/4ffab94/OST%20BBC%20Sherlock%20Holmes%20%E2%80%94%2002.%20The%20Game%20Is%20On%20%28Soundtrack%20Season%201%29.mp3?d=220&v=d529d1379d",
  "https://storage9.lightaudio.ru/dm/3992450a/1191f6b3c/Directed%20by%20%E2%80%94%20Robert%20B.%20Weide.mp3?d=171&v=425ec83210",
  "https://storage1.lightaudio.ru/dm/39922435/2a41c2ab/%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%20%D0%B8%D0%B7%20%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B0%20%E2%80%94%20X-files.mp3?d=204&v=9054e10ee3",
  "https://storage9.lightaudio.ru/dm/3992247f/4165af57/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%2020%20%D0%B2%D0%B5%D0%BA%20%E2%80%94%20%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0..mp3?d=24&v=d2a4e8f6bb",
  "https://storage6.lightaudio.ru/dm/399236a5/23964fd7/%D0%A4%D0%B0%D0%BD%D1%84%D0%B0%D1%80%D1%8B%20%D0%BE%D1%84.%20%E2%80%94%20%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D0%B5%D0%B5%20%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%D0%B0.mp3?d=46&v=cd9d6ecf92",
  "https://storage1.lightaudio.ru/dm/399a0d86/3bb509cb/North%20Hollywood%20Holiday%20Choir%20%E2%80%94%20Hallelujah%20Chorus%20%28No%20Organ%29.mp3?d=172&v=9aa5e82df4",
  "https://storage4.lightaudio.ru/dm/3999cc5e/3bb509b1/Dieter%20Weber%20%E2%80%94%20Toccata%20in%20D%20Minor%2C%20BWV%20565.mp3?d=163&v=5e89fa4e34",
  "https://storage6.lightaudio.ru/dm/399245ed/1191d6250/%D0%97%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%20%E2%80%94%20%D0%9C%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%B8%D0%B3%D0%BE%D0%B2%D0%BE%D1%80.mp3?d=67&v=20527fb7df"
];

let audios = links.map(link => new Audio(link));
audios.forEach(audio => {
  audio.load();
  
})

/**
 * @param {number} audioI
 */
function play (audioI) {
  audios[audioI].play();
}

/**
 * @param {number} audioI
 */
function stop_sound (audioI) {
  audios[audioI].load();
}