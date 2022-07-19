
var currentNumberLike = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberLike.innerHTML = currentNumber;
}

function decrement() {
    if (currentNumber  > 0){ 
        currentNumber = currentNumber - 1;
        currentNumberLike.innerHTML = currentNumber;
    }
}
