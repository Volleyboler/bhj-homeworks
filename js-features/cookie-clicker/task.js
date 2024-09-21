let clicks = 0;
let lastClickTime = 0;

const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('clicker__speed');

cookie.onclick = function() {
    
    clicks++;
    clickCounter.textContent = clicks;

    cookie.style.width = (clicks % 2 === 0) ? '180px' : '220px';

    const currentTime = new Date().getTime();
    if (lastClickTime !== 0) {
        const timeDiff = (currentTime - lastClickTime) / 1000;
        var Speed = (1 / timeDiff).toFixed(2);
        clickSpeed.textContent = Speed
    }
    lastClickTime = currentTime;
};