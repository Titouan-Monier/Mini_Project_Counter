let colorInput = document.getElementById('color');
let countLabel = document.getElementById('countLabel');

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    countLabel.style.color = color;
});

// Add functionality for the buttons
let baisserBtn = document.getElementById('baisser');
let reinitialiserBtn = document.getElementById('reinitialiser');
let augmenterBtn = document.getElementById('augmenter');

let count = 0;

baisserBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

reinitialiserBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

augmenterBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

function updateDisplay() {
    countLabel.textContent = count;
}