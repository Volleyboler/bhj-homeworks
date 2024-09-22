const timerElement = document.getElementById('timer');

let timeRemaining = parseInt(timerElement.textContent, 10);

function updateTimer() {

  timeRemaining--;

  timerElement.textContent = timeRemaining;

  if (timeRemaining <= 0) {
    clearInterval(timerInterval); 
    alert('Вы победили в конкурсе!'); 
    }
}

const timerInterval = setInterval(updateTimer, 1000);