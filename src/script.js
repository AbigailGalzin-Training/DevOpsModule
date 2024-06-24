const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');

let count = 0;

function setCounter(value) {
    if (value == 0) {
        count = 0;
    } else {
        count += value;
    }
    
    countDisplay.textContent = count;
}

