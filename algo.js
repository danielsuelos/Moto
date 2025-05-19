document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('sonidoClick');
  const btnPlay = document.getElementById('sonar');
  const btnStop = document.getElementById('parar');

  btnPlay.addEventListener('click', () => {
    audio.currentTime = 0; // Reinicia desde el inicio
    audio.play().catch(err => {
      console.error("Error al reproducir audio:", err);
    });
  });

  btnStop.addEventListener('click', () => {
    audio.pause();         // Pausa la reproducción
    audio.currentTime = 0; // Reinicia el audio a 0
  });
});

