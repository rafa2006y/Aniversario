function updateProgressBar(progressValue) {
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = progressValue + '%';
}

function simulateProgress() {
  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      window.location.href="./pagina1.html";
    }
    
    else {
      progress++;
      updateProgressBar(progress);
    }
  }, 75);
}

simulateProgress();

let musica = document.querySelector(".music"); 

function playAudio() { 
  
  musica.play().catch(error => { console.log('La reproducción automática fue bloqueada. Iniciando manualmente...'); }); 

} 

playAudio(); 

document.body.addEventListener('click', () => { 
  
  if (musica.paused) { 
    
    playAudio(); 
  
} 
});
