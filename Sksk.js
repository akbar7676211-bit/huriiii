const songs = {
  lagu1: {
    lines: [
      ["di antara kau dan dana", 0.07],
      ["cuma kamu tiada yang lain", 0.08],
      ["ku bilang aku gak main main", 0.09],
      ["apa yang kau mau kuturutin", 0.08],
      ["sekarang kamu sama yang lain", 0.08],
      ["awalnya ku cuma cobain", 0.09],
      ["tapi ku ketagihan", 0.05],
      ["ku bilang amin", 0.05],
      ["sampai ke pelaminan", 0.08],
      ["jangan di samaain", 0.08],
      ["sama mantan mu bajingan", 0.08],
      ["ulang lagi ku cari yang lain", 0.08]
    ],
    delays: [0.1, 1.6, 1.1, 1.34, 1.45, 0.6, 1.5, 1.1, 0.1, 0.1, 0.5, 0.1]
  },

  lagu2: {
    lines: [
      ["bunga di bulan sepi", 0.10],
      ["jatuh tersampar", 0.07],
      ["tersasar", 0.07],
      ["alasan masi bersama", 0.07],
      ["bukan kerena terlanjur lama", 0.07],
      ["tapi rasanya", 0.08],
      ["yang masih sama", 0.09],
      ["seperti sejak pertama jumpa", 0.08],
      ["diri mu di kala senja", 0.08],
      ["duduk berdua", 0.09],
      ["tanpa suara......", 0.05]
    ],
    delays: [6.2, 4.45, 5.2, 2.55, 2.68, 3.59, 5.55, 3.34, 1.45, 2.45, 4.5]
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function playSong(key) {
  const song = songs[key];
  const lyricsBox = document.getElementById("lyricsBox");
  lyricsBox.textContent = "";

  for (let i = 0; i < song.lines.length; i++) {
    const [line, charDelay] = song.lines[i];
    for (let c of line) {
      lyricsBox.textContent += c;
      await sleep(charDelay * 1000);
    }
    lyricsBox.textContent += "\n";
    await sleep(song.delays[i] * 1000);
  }
}
