let deadCount = 0;
let lostCount = 0;
let moleTimer;
let currentMoleIndex;


function getHole(index) {
  return document.getElementById(`hole${index}`);
}


function randomMole() {

  for (let i = 1; i <= 9; i++) {
    getHole(i).classList.remove('hole_has-mole');
  }

  currentMoleIndex = Math.floor(Math.random() * 9) + 1;
  getHole(currentMoleIndex).classList.add('hole_has-mole');

  moleTimer = setTimeout(() => {
    getHole(currentMoleIndex).classList.remove('hole_has-mole');
    randomMole();
  }, 1000);
}


for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (this.classList.contains('hole_has-mole')) {
      deadCount++;
      document.getElementById('dead').textContent = deadCount;

      if (deadCount === 10) {
        alert('Вы победили! Убито кротов: ' + deadCount);
        resetGame();
      }
    } else {
      lostCount++;
      document.getElementById('lost').textContent = lostCount;

      if (lostCount === 5) {
        alert('Вы проиграли! Промахов: ' + lostCount);
        resetGame();
      }
    }

    clearTimeout(moleTimer); 
    randomMole(); 
  };
}

function resetGame() {
  deadCount = 0;
  lostCount = 0;
  document.getElementById('dead').textContent = deadCount;
  document.getElementById('lost').textContent = lostCount;

  for (let i = 1; i <= 9; i++) {
    getHole(i).classList.remove('hole_has-mole');
  }

  clearTimeout(moleTimer);
}

randomMole();