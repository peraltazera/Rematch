const player = require('play-sound')();
const path = require('path');

const audioFiles = [
  '1.mp3',
  '2.mp3',
  '3.mp3'
];

function tocarSomAleatorio() {
  const audio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
  const audioPath = path.join(__dirname, audio);
  player.play(audioPath, function(err) {
    if (err) console.error('Erro ao tocar o som:', err);
  });
}

function iniciarLoop() {
  const intervalo = Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000;

  setTimeout(() => {
    tocarSomAleatorio();
    iniciarLoop(); // chama novamente para continuar o loop
  }, intervalo);
}

console.log('Iniciando... Aperte CTRL+C para parar.');
iniciarLoop();