let firstNumber;
let operator;
let secondNumber;
let result;

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

let lastOperatorPress = null;

function handleOperatorClick(clickOperator) {

    let displayElement = document.getElementById("currentResult");
    let nextDisplayElement = document.getElementById("nextResult");
    operator = clickOperator;

    if (lastOperatorPress === clickOperator) {
        secondNumber = operate(operator, firstNumber, secondNumber);
        nextDisplayElement.innerHTML = secondNumber +" "+ operator;
        displayElement.innerHTML = "0";

    } else if (nextDisplayElement.innerHTML === "") {
        secondNumber = parseFloat(displayElement.innerHTML);
        nextDisplayElement.innerHTML = firstNumber +" "+ operator;
        displayElement.innerHTML = "0";

    } else {
        secondNumber = operate(lastOperatorPress, firstNumber, secondNumber);
        nextDisplayElement.innerHTML = secondNumber +" "+ operator;
        displayElement.innerHTML = "0";
    }
    lastOperatorPress = clickOperator;
}

function handleEqualClick() {

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    if ((operator === "+") || (operator === "-") || (operator === "*") || (operator === "/")) {
        result = operate(operator, firstNumber, secondNumber);
        document.getElementById("currentResult").innerHTML = result.toFixed(2);
        document.getElementById("nextResult").innerHTML = "";
    }
}