
//Stwórz program, który przyjmie od użytkownika przez prompt imię, a następnie 15 nazwisko, na końcu wiek (3 prompt-y). Tylko jeżeli wiek to min. 18 to wyświetl w konsoli imię i nazwisko.

function startzad1() {
    const name = prompt("podaj swoje Imię");
    const surname = prompt("podaj swoje nazwisko");
    const age = prompt("Podaj swój wiek w latach");

    if (age >= 18) {
        console.log(name + ' ' + surname);
    }
    else {
        console.log("za mało lat");
    }
};

function startzad2() {
    let numberOne = Number(prompt("wpisz pierwszą liczbę"));
    let numberTwo = Number(prompt("podaj drugą liczbę:"));
    let mathOperator = prompt("wpisz jeden z dostępnych operatorów(+,-,*,/):");
    let result = null;
    if (mathOperator === "+") {
        result = numberOne + numberTwo;
    }
    if (mathOperator === "-") {
        result = numberOne - numberTwo;
    }
    if (mathOperator === "*") {
        result = numberOne * numberTwo;
    }
    if (mathOperator === "/") {
        result = numberOne / numberTwo;
    }
    console.log(result)
};

function startzad3() {
    let textToConvert = prompt("podaj tekst który ma oszaleć:");
    let dlugoscTekstu = textToConvert.length;
    let convertedTekst = [];

    for (let i = 0; i < dlugoscTekstu; i++) {
        if (i % 2 === 0) {
            convertedTekst[i] = textToConvert[i].toUpperCase();
        }
        else {
            convertedTekst[i] = textToConvert[i].toLowerCase();
        }
    }

    convertedTekst = String(convertedTekst).replaceAll(",", " ");

    console.log(convertedTekst);
};

/* Napisz kod który odwraca tworzy nowego stringa odwracając kolejność stringa na którym wykonywane jest zadanie */
/* Nie używamy własnych ani wbudowanych funkcji (na to za wcześnie), używamy tylko pętli.*/

function different() {
    const startText = "Jestem tutaj";
    let reverseText = "";

    for (let i = 0; i < startText.length; i++) {

        reverseText += startText[startText.length - 1 - i]
    }

    console.log(reverseText);

    /* zmieniłem sobie na tablcę bo chciałem :p a potem skonwertowałem na tekst */
    const startText3 = "Jestem tutaj";
    let reverseText3 = [];

    for (let i = 0; i < startText3.length; i++) {
        reverseText3[i] = startText3[startText3.length - 1 - i]
    }

    console.log(String(reverseText3).replaceAll(",", ""));



    /* Napisz kod który zmienia wszystkie a w tekście na x, a b (małe i duże) na z. Mozesz użyć tylko pętli i instrukcji warunkowej */

    const startText2 = "Hejka, tutaj Beata 'betka' Kowalska!";
    let reverseText2 = "";

    for (let i = 0; i < startText2.length; i++) {
        if (startText2[i] === 'a') {
            reverseText2 += 'x'
        }
        else if (startText2[i] === 'b' || startText2[i] === 'B') {
            reverseText2 += 'z'
        }
        else {
            reverseText2 += startText2[i]
        }
    }
    console.log(startText2);
    console.log(reverseText2);
}


function piramidInConsole() {
    const sizeOfPiramid = Number(prompt("Podaj wysokość piramidy:"));
    const sign = prompt("Podaj znak do użycia:");
    let display = "";
    const whiteSpace = " ";
    for (let i = 0; i < sizeOfPiramid; i++) {
        let whiteSpaceForRow = "";
        display = display + sign;
        for (let j = sizeOfPiramid; j > i / 2; j--) {
            whiteSpaceForRow = whiteSpaceForRow + whiteSpace;
        }
        console.log(whiteSpaceForRow + display);
    }
}

// part functions 

function calculator() {
    const nbr1 = Number(prompt("Podaj pierwszą liczbę:"));
    const nbr2 = Number(prompt("Podaj drugą liczbę:"));
    const sign = prompt("Podaj znak (+,-,/,*):")
    calculate(nbr1, nbr2, sign);
}

function calculate(firstNumber, secondNumber, whatToDo) {
    validateNumber(firstNumber);
    validateNumber(secondNumber);
    validateMathsign(whatToDo);
    const text = "wynik twojego działania = "
    var result = "";
    if (whatToDo === '+') {
        result = result + sum2args(firstNumber, secondNumber)
    }
    if (whatToDo === '-') {
        result = result + substraction2args(firstNumber, secondNumber)
    }
    if (whatToDo === '*') {
        result = result + multiplication2args(firstNumber, secondNumber)
    }
    if (whatToDo === '/') {
        result = result + devide2args(firstNumber, secondNumber)
    }
    alert(text + result);
}

const sum2args = (arg1, arg2) => {
    return arg1 + arg2;
}
const devide2args = (arg1, arg2) => {
    return arg1 / arg2;
}
const substraction2args = (arg1, arg2) => {
    return arg1 - arg2;
}
const multiplication2args = (arg1, arg2) => {
    return arg1 * arg2;
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

//objects trening
//stwórz obiekt który pobiera poprzez prompt imiona i nazwiska osób i zapisuje w tablicy.

function Person(firstName, surName) {
    this.firstName = firstName;
    this.surName = surName;
}

const addListOfPeople = () => {
    const numberOfPeopleToAdd = prompt("Podaj ile osób chcesz dodać");
    const arrayOfPeople = [];
    for (let i = 0; i < numberOfPeopleToAdd; i++) {
        const personName = prompt("podaj imię osoby nr: " + (i + 1) + " na liście:");
        const personSurname = prompt("podaj nazwisko osoby nr: " + (i + 1) + " na liście:");
        arrayOfPeople[i] = new Person(personName, personSurname);
    }
    alert(JSON.stringify(arrayOfPeople));
    console.log(arrayOfPeople)
}
//wersja bez zmiennych.
const addListOfPeople2 = () => {
    const numberOfPeopleToAdd = prompt("Podaj ile osób chcesz dodać"), arrayOfPeople = [];
    for (let i = 0; i < numberOfPeopleToAdd; i++) {
        arrayOfPeople[i] = new Person(
            prompt("podaj imię osoby nr: " + (i + 1) + " na liście:"),
            prompt("podaj nazwisko osoby nr: " + (i + 1) + " na liście:"));
    }

    console.log(arrayOfPeople)
}
