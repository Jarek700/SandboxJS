
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
    const convertedTekstString = convertedTekst.join("");
    convertedTekst = String(convertedTekst).replaceAll(",", " ");

    console.log(convertedTekst);
    console.log(convertedTekstString);
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


///////////////////////   Objects , spread , rest , template string ////////////////////////////////////////////////////

const logOrNot = () => {
    const mineObject = {
        identificator: 'identificator',
        ammount: 'ammount',
        something: 'something',
    }

    // const identificator = mineObject.identificator;
    // const ammount = mineObject.ammount;
    // const something = mineObject.something;

    // console.log(identificator, ammount, something);

    //a to ci destrukturyzacja obiektu//////////////////////////////////////////
    const { identificator, ammount, something: somethingNewVarName } = mineObject;

    console.log(identificator, ammount, somethingNewVarName);


    //spread ... operator dokładanie zawartosci tablicy do nowej tablicy, każdy ma swoją referencję w ten sposób
    const array = ['a', 'b', 'c'];
    const array2 = ['z', 'x', ...array, 'b', 'b', 'q']
    console.log(array2);

    const liczby = [1, 2, 3];
    const liczby2 = [...liczby];
    const liczby3 = liczby2;

    //zabawy z referencjami
    liczby.push(4);
    liczby2.push(5);
    liczby3.push(6);
    console.log(liczby)
    console.log(liczby2)
    console.log(liczby3)

    //spread ... z obiektem, dokładanie zawartosci jednego obiektu do nowego obiektu, każdy ma swoją referencję w ten sposób
    // można też skopiować obiekt i nadpisać częśc jego wartości.
    const mineObject2 = {
        ...mineObject,
        identificator: 'updated Identificator',
        value: 12345,
    }
    console.log(mineObject2);

    //operator reszty ... ,rest operator //taki trochę for each dla podanych argumentów (przekazanych pod postacią tablicy), pozwala dodać dowolną ilość argumentów ale TYLKO do funkcji
    //przykład bez:
    const dodaj = (a, b, c, d, e, f) => {
        return a + b + c + d + e + f;
    }
    console.log(dodaj(2, 3, 4, 1, 2, 3));
    // zawsze musi być jako ostatni argument
    const dodaj2 = (...args) => {
        let sum = 0;
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'number') {
                console.log("któraś dana nie jest liczbą, a powinna");
                return;
            }
            else {
                sum += args[i];
            }
        }
        return sum;
    }
    console.log(dodaj2(2, 3, 4, 1, 2, 3));
    console.log(dodaj2(2, 2, 3));

    //można np dołączyć sobie jakąś wartośc na początek tablicy ...values
    function noName(someValue, ...values) {
        console.log(someValue, values);             //tu zwraca Number 1 i potem tablice values
        values.unshift(someValue);
        console.log(values);                        //a tu juz tylko tablice values ale z dodanym 1 jako pierwszym recordem 
    }
    noName(1, 5, 5, 5, 5, 5, 5)

    uselessFunction();
}

//funkcja filtered ma zwóricić id,name,hasPicture;
const getUser = () => {

    const user = {
        id: 1,
        fullname: "Ala",
        token: "asdfdsfv838324fvh",
        role: "buyer",
        hasPicture: true,
    };

    const filtered1 = (user) => {
        const filteredUser = {
            id: user.id,
            fullname: user.fullname,
            hasPicture: user.hasPicture,
        }
        return filteredUser;
    };

    const filtered2 = (user) => {
        const { id, fullname, hasPicture } = user;
        const filteredUser = {
            id,
            fullname,
            hasPicture,
        }
        return filteredUser;
    };

    const filtered3 = (user) => {
        const { id, fullname, hasPicture } = user;
        return { id, fullname, hasPicture };
    };
    console.log(filtered1(user));
    console.log(filtered2(user));
    console.log(filtered3(user));
};

//zrób template stringa
const uselessFunction = () => {
    const name = "Johny";
    const age = "77";
    const role = "Rambo Pierwsza krew!"

    const data = name + " has a lot to do with " + role + " and is born in year " + (new Date().getFullYear() - age);
    const data2 = `${name} has a lot to do with ${role} and is born in year ${new Date().getFullYear() - age}`;
    console.log(data);
    console.log(data2);
}

//create class that keeps table of results & method that allows to add new results to the table.
const arrayOfResults = () => {
    class SportsMan {
        constructor(name, ...results) {
            this.name = name;
            this.results = [...results];
            this.cos = 100;
        }
        addResult(resultToAdd) {
            return this.results.push(resultToAdd);
        }
        checkIfEverWon() {
            let wins = 0
            for (let i = 0; i < this.results.length; i++) {
                if (this.results[i] === 1) {
                    wins += 1;
                }
            }
            if (wins > 0) {
                console.log(this.name + " you are a champion!")
            } else {
                console.log(this.name + " you mf loooooooooserrrrr af !")
            }
        }

    }
    const aMalysz = new SportsMan('Adam', [1, 2, 3]);
    aMalysz.addResult('olimpiada');
    aMalysz.addResult(1);
    aMalysz.addResult('PŚ');
    aMalysz.addResult('4Skocznie');
    console.log(aMalysz);

    const team = new SportsMan('ZespółWLidze');
    team.addResult(15);
    team.addResult(3);
    team.addResult(30);
    console.log(team);
    // * 5.* Dodaj metodę, która sprawdzi czy kraj posiada jakiekolwiek pierwsze miejsce i jeżeli tak to wyświetl "Brawo!".
    aMalysz.checkIfEverWon();
    team.checkIfEverWon();
}

/**
 * Używaj w zadaniach metod tablicowych!
 * 1. Wylicz średnią ocen.
 * 2. Następnie wypisz wszystkie oceny min. 4.
 */

const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];


// 3. Napisz kod, który za pomocą jednego ciągu (możesz skorzystać z programowania funkcyjnego i rozdzielić na funkcje) osiągnie następujący efekt:
// Wyświetli pojedynczo każdą nazwę miasta, która ma parzystą liczbę znaków. Nazwy miast powinny być pisane wielkimi literami.
const cityscritp = () => {
    const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];

    const filteredCities = cities.filter(city => city.length % 2 === 0);
    const filteredCitiesToUpper = filteredCities.map(city => city.toUpperCase());
    const displayfilteredCitiesToUpper = filteredCitiesToUpper.forEach(city => console.log(city));

    const filteredCitiesSolutionB = cities.filter(city => city.length % 2 === 0).map(city => city.toUpperCase()).forEach(city => console.log(city));

    const evenCities2 = city => city.length % 2 === 0;
    const cityToUpper2 = city => city.toUpperCase();
    const displayCities2 = city => console.log(city);
    cities
        .filter(evenCities2)
        .map(cityToUpper2)
        .forEach(displayCities2);
}


//////////////////////Asynchroniczność ///////////////////////////
const askyncscript = () => {
    console.log("1 wyświetl odrazu");
    setTimeout(() => {
        console.log("wyświetl po 1s")
    }, 1000);    //ciało funkcji wykona się za 1s  
    console.log("2 wyświetl odrazu");

    setInterval(() => {
        console.log("wyświetlaj wielokrotnie co 1s")
    }, 1000);        //ciało funkcji będzie wykonywanie co sekundę 

}
const askyncOrder = () => {
    setTimeout(() => {                      ///jako że jest timeout, nawet najmniejszy wykonanie tej funkcji będzie po funkcjach tkóre nie muszą czekać.
        console.log("wyświetl po 1/1000 s")     //ta funkcja jest już gotowa ale musi czekać
    }, 1);
    for (let i = 0; i < 5000; i++) {
        console.log(i);
    }
    console.log("wyświetli odrazu")
}


const callBackHell = () => {
    console.log('sprawdź instrukcję jak zrobić Yerbę');
    console.log('zagotuj wodę do 80 stopni celcliusza');
    setTimeout(() => {
        console.log('woda jest gotowa');
        console.log('dodaj Yerbe');

        setTimeout(() => {
            console.log('yerba sie parzy');
            console.log('poczekaj na odpowiednią temperaturę do picia');
            setTimeout(() => {
                console.log('Yerba gotowa możesz pić');
            }, 5000);
        }, 1000);
    }, 1000);
};
//Stany promissów pending/filfulled/rejected
//fetch() wysyła żądanie o informację zwrotną
const stateOfPromiss = () => {
    const joke = fetch('https://official-joke-api.appspot.com/random_joke')
        .then(() => {                                                        //jak promiss filfulled to wykonaj then
            console.log('api zwróciło dane')
        })
        .catch(() => {                                                        //jak promiss jest rejected to wykonaj catch
            console.log('coś się sypło')
        })


    const c3po = fetch('https://swapi.dev/api/people/2/')
        .then(response => {                                                        //jak promiss filfulled to wykonaj then
            const blabla = response.json()
                .then(data => {
                    console.log(data);
                    console.log(data.name);
                });
        })
        .catch(() => {                                                        //jak promiss jest rejected to wykonaj catch
            console.log('coś się sypło')
        });

    const luck = fetch('https://swapi.dev/api/people/1/')
        .then(response => {
            return undefined;                                               //tu jeszcze promiss  spełniony
        })
        .then(data => {
            console.log(data);                                                  //ale tu juz próbuje się dobrać do obiektu jako unidfined i sie sypie
            console.log(data.name);
        })
        .catch(error => {                                                       //mozemy sobie tez pobrać rodzaj błędu
            console.log('coś się sypło', error)
        });

    const r2d2 = fetch('https://swapi.dev/api/people/3/')
        .then(response => response.json())                                                      //lepsza forma zapisu 
        .then(data => console.log(data.name, data))
        .catch(error => console.log('coś się sypło', error))
}

const bookById = () => {
    //const idOfBookISBN = 9781312173705;
    const idOfBookISBN = Number(prompt('podaj numer ISBN książki:'));
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${idOfBookISBN}`)
        .then(response => response.json())
        .then(data => {
            const { authors, title } = data.items[0].volumeInfo;
            console.log({ title }, { authors });
            console.log(data.items[0].volumeInfo.title);
            console.log(data.items[0].volumeInfo.authors);
            console.log(data)
        })
        .catch(error => console.log(error))

    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${idOfBookISBN}`)
        .then(res => res.json())
        .then(data => {
            if (!data.items || data.items.length === 0) {
                console.log('Book not found!');
            } else {
                const { authors, title } = data.items[0].volumeInfo
                console.log(`${title} by ${authors}`);
            }
        })
        .catch(err => console.log('Błąd!', err));
}




const asyncAwait = async () => {
    //async function someFunction() { };                 //asynk przed słowem kluczowym function
    //const someFunction2 = async (a, b) => { return a + b; };    //asynk przed parametrami w funkcji strzałkowej

    async function doSomething() {
        const response = await fetch('https://swapi.dev/api/people/3');
        const data = await response.json();
        console.log(data);
    }
    doSomething();

    (async function doSomething2() {
        const response = await fetch('https://swapi.dev/api/people/4');
        const data = await response.json();
        console.log(data);
    })();                                                               //zapis dla funkcji samowywołującej się wkładamy ją w nawiasy a potem jeszcze ();

    (async () => {                                    //lepszy zapis, oraz bez nazwy
        const response = await fetch('https://swapi.dev/api/people/5');
        const data = await response.json();
        console.log(data);
    })();

    (async () => {                                    //brzydko ale szybko
        const data = await (await fetch('https://swapi.dev/api/people/1')).json();
        console.log(data);
    })();
};


const aRequire = () => {
    //const { setTimeout } = require('timers/promises');

    const invervalId = setInterval(() => console.log('C'), 100);

    (async () => {
        console.log('A');
        await setTimeout(2000);
        console.log('B');
        clearInterval(invervalId);
    })();

    async function brewYerba() {                        //uzycie async automatycznie tworzy promisa
        console.log("zacznij parzyć yerbe");
        await setTimeout(2000);
        console.log("yerba gotowa")
    }
    async function brewTea() {
        console.log("zacznij parzyć herbate");
        await setTimeout(1000);
        console.log("herbata gotowa")
    }
    (async () => {
        await Promise.all([brewYerba(), brewTea()]);  //w ten sposób zapisujemy jeżeli chcemy poczekać na spełnienie obu promisów zanim przejdziemy dalej
        console.log("napoje gotowe");
    })();
}

