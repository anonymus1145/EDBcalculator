let firstNumber;
let operator;
let secondNumber;
let result;
let lastOperatorPress = null;

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            if (firstNumber > secondNumber) {
                return firstNumber - secondNumber;
            } else {
                return secondNumber - firstNumber;
            }
        case "*":
            return firstNumber * secondNumber;
        case "/":
            if (firstNumber > secondNumber) {
                return firstNumber / secondNumber;
            } else {
                return secondNumber / firstNumber;
            }
    }
}

function handleButtonClick(number) {

    let displayElement = document.getElementById("currentResult");

    if (displayElement.innerHTML === "0") {
        displayElement.innerHTML = "";
        displayElement.innerHTML = number;
        firstNumber = parseFloat(displayElement.innerHTML);

    } else if (displayElement.innerHTML !== "0" && displayElement.innerHTML !== ".") {
        displayElement.innerHTML += number;
        firstNumber = parseFloat(displayElement.innerHTML);

        if (firstNumber >= 100000000000) {
            alert("Number too large");
            firstNumber = "";
            displayElement.innerHTML = "0";
        }
    }
}

function handleOperatorClick(clickOperator) {

    let displayElement = document.getElementById("currentResult");
    let nextDisplayElement = document.getElementById("nextResult");
    operator = clickOperator;

    if (lastOperatorPress === clickOperator) {
        undoNumber2 = secondNumber;
        secondNumber = operate(operator, firstNumber, secondNumber);
        nextDisplayElement.innerHTML = secondNumber + " " + operator;
        displayElement.innerHTML = "0";

    } else if (nextDisplayElement.innerHTML === "") {
        undoNumber2 = secondNumber;
        secondNumber = parseFloat(displayElement.innerHTML);
        nextDisplayElement.innerHTML = firstNumber + " " + operator;
        displayElement.innerHTML = "0";

    } else {
        undoNumber2 = secondNumber;
        secondNumber = operate(lastOperatorPress, firstNumber, secondNumber);
        nextDisplayElement.innerHTML = secondNumber + " " + operator;
        displayElement.innerHTML = "0";
    }
    lastOperatorPress = clickOperator;
}

function handleEqualClick() {

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    if ((operator === "+") || (operator === "-") || (operator === "*") || (operator === "/")) {
        if (firstNumber === 0) {
            alert("Cannot divide by zero");
            firstNumber = "";
            displayElement.innerHTML = "0";
        }
        result = operate(operator, firstNumber, secondNumber);
        document.getElementById("currentResult").innerHTML = result.toFixed(2);
        document.getElementById("nextResult").innerHTML = "";
    }
}

function handleClearClick() {
    let displayElement = document.getElementById("currentResult");
    let nextDisplayElement = document.getElementById("nextResult");
    nextDisplayElement.innerHTML = "";
    displayElement.innerHTML = "0";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    result = "";
}

function handleDeleteClick() {
    let displayElement = document.getElementById("currentResult");
    displayElement.innerHTML = "0";
    firstNumber = displayElement.innerHTML;
}

function handleUndoClick() {
    let displayElement = document.getElementById("currentResult");
    let nextDisplayElement = document.getElementById("nextResult");
    displayElement.innerHTML = firstNumber;
    nextDisplayElement.innerHTML = secondNumber + " " + operator;
}