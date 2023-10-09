function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "×":
            return multiply(firstNumber, secondNumber);
        case "÷":
            return divide(firstNumber, secondNumber);
    }
}

function handleButtonClick(number) {
    let displayElement = document.getElementById("currentResult");
    let currentNumber = displayElement.innerHTML;
    let displayElement2 = document.getElementById("nextResult");
    let nextNumber = displayElement2.innerHTML;
    

        if (displayElement.innerHTML === "0") {
            displayElement.innerHTML = "";
            displayElement.innerHTML = number;

        }else if (displayElement.innerHTML !== "0") {
            displayElement.innerHTML += number;
        }
  }

