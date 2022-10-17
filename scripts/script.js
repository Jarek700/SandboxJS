
function calculator() {
    let nbr1 = Number(prompt("Podaj pierwszą liczbę:"));
    let nbr2 = Number(prompt("Podaj drugą liczbę:"));
    let sign = prompt("Podaj znak (+,-,/,*):")
    calculate(nbr1, nbr2, sign);
}

function calculate(firstNumber, secondNumber, whatToDo) {
    validateNumber(firstNumber);
    validateNumber(secondNumber);
    validateMathsign(whatToDo);
    const text = "wynik twojego działania = "
    if (whatToDo === '+') {
        alert(text + (firstNumber + secondNumber))
    }
    if (whatToDo === '-') {
        alert(text + (firstNumber - secondNumber))
    }
    if (whatToDo === '*') {
        alert(text + (firstNumber * secondNumber))
    }
    if (whatToDo === '/') {
        alert(text + (firstNumber / secondNumber))
    }

}

function validateNumber(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        alert("musisz podać numer aby dokonać obliczeń")
        return;
    }
    return value;
}

function validateMathsign(sign) {
    if (!(sign === '+' || sign === '-' || sign === '/' || sign === '*')) {
        alert("musisz podać prawidłowy znak do obliczeń")
        return;
    }
    return sign;
}


function oddOrNot() {
    let valueToBeVerified = Number(prompt("podaj liczbe"));
    const comebackValue = checkNumber(valueToBeVerified);
    alert(comebackValue);
}

function checkNumber(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        alert("musisz podać prawidłowy numer")
        return;
    }
    if (value % 2 == 0) {
        return value;
    }
    return value * 2;
}


const oddOrNot2 = () => {
    oddOrNot();
}

const checkNumber2 = (value) => {
    checkNumber(value);
}

const calculator2 = () => {
    calculator();
}