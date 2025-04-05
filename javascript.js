function updateProgressBar(progressValue) {
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = progressValue + '%';
}

function simulateProgress() {
  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      window.location.href = "./pagina1.html";
    }
    
    else {
      progress++;
      updateProgressBar(progress);
    }
  }, 75);
}

simulateProgress();
