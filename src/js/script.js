let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber > 0) {
        document.getElementById('currentNumber').style.color = '#00089E';
    }else if (currentNumber === 0) {
        document.getElementById('currentNumber').style.color = '#000000';
    }else if (currentNumber < 0) {
        document.getElementById('currentNumber').style.color = '#EB0A00';
    }
}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber > 0) {
        document.getElementById('currentNumber').style.color = '#00089E';
    }else if (currentNumber === 0) {
        document.getElementById('currentNumber').style.color = '#000000';
    }else if (currentNumber < 0) {
        document.getElementById('currentNumber').style.color = '#EB0A00';
    }

}