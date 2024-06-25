let count = 0;

function setCounter(value) {
    if (value == 0) {
        count = 0;
    } else {
        count += value;
    }
    const countDisplay = document.getElementById('count');
    countDisplay.textContent = count;
}

module.exports = {
    setCounter
};