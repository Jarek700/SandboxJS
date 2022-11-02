const par2 = document.querySelector('.par2');
const par3 = document.querySelector('#id3');
par2.style.fontSize = '22px';
par2.style.backgroundColor = 'black';
par2.style.color = 'red';
par2.innerText = 'test updated by Java Script';

par2.classList.add('classFromJs');
par2.classList.contains('secondTestClass');   //zwraca true lub false
par2.classList.remove('secondTestClass');

par3.innerHTML = '<div>tekst w dive z JS</div>'
par3.classList.toggle('jakNiemaToDodaAJakJestToUsunie');


const btn = document.querySelector('#btn-toggle-color');
const body = document.body;

btn.addEventListener('click', () => {
    const isDarkmode = body.classList.toggle('darkMode')

    if (isDarkmode) {
        btn.innerText = 'zmień na tryb jasny'
    } else {
        btn.innerText = 'zmień na tryb ciemny'
    }
});

//zrób guzik który zwiększa ilość wyświetleń o 1;

const resetBtn = document.querySelector('#resetCount-btn')
const countBtn = document.querySelector('#increaseCount-btn')
const counter = document.querySelector('#counter');
var sumOfCounts = 0;
const updateCount = () => { counter.innerText = sumOfCounts; }
countBtn.addEventListener('click', () => {
    sumOfCounts++;
    updateCount();
});

resetBtn.addEventListener('click', () => {
    sumOfCounts = 0;
    updateCount();
});

//local storage//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
localStorage.setItem('itemOId1', 'pierwsza rzecz w local storage');
localStorage.getItem('itemOId1');

//get last visit date 
const lastSavedVisitDate = localStorage.getItem('lastVisit');
if (lastSavedVisitDate === null) {
    console.log("welcome for the first time")
} else {
    console.log(`hello again, your last visit was: ${lastSavedVisitDate}`)
}
//set last visit date
const date = new Date();
const dateString = date.toString();

localStorage.setItem('lastVisit', dateString);

//localStorage.removeItem('lastVisit'); //żeby usunąć


//zrób guzik który zwiększa ilość wyświetleń o 1 i przechowuje w localStorage;

const resetBtnSave = document.querySelector('#resetCountsave-btn')
const countBtnSave = document.querySelector('#increaseCountsave-btn')
const counterSave = document.querySelector('#counterSaved');
var sumOfCountsSave = Number(localStorage.getItem('sumOfCountsSave'));
const updateCountSave = () => { counterSave.innerText = String(sumOfCountsSave); }
const saveUpdatedCount = () => { localStorage.setItem('sumOfCountsSave', sumOfCountsSave.toString()) }
updateCountSave();

const updateAndSave = () => {
    updateCountSave();
    saveUpdatedCount();
}

countBtnSave.addEventListener('click', () => {
    sumOfCountsSave++;
    updateAndSave();
});

resetBtnSave.addEventListener('click', () => {
    sumOfCountsSave = 0;
    updateAndSave();
});


//JSON ///////////////////////////////////////
const myObject = {
    name: 'blablaB',
    color: 'hakunaBlue',
    tableOfChoices: ['pln', 'eur', '$'],
    hasIt: true,
}
console.log(JSON.stringify(myObject));

const stringUpdatedObject = '{"name":"bla123laB","color":"ha123naBlue","tableOfChoices":["chi","eur","baksy"],"hasIt":true}'
JSON.parse(stringUpdatedObject);                    //bierze JSONa (stringa) i zwraca objekt w JS
console.log(JSON.parse(stringUpdatedObject));


//JSON + local storage
const h2localStorageData = document.querySelector('#localStorageData');
const informations = localStorage.getItem('info')
if (informations === null) {
    const someInfo = prompt('what is first Info: ');
    const someInfo2 = prompt('what is second Info: ');

    const informationsObject = {
        someInfo,
        someInfo2,
    };
    localStorage.setItem('info', JSON.stringify(informationsObject));
} else {
    // const existinginformationsObject = JSON.parse(informations);
    // h2localStorageData.innerText = `${existinginformationsObject.someInfo} ${existinginformationsObject.someInfo2} `;

    const existinginformationsObject = JSON.parse(informations);
    const { someInfo, someInfo2 } = existinginformationsObject;                    //to samo co wyżej tylko z destrukturyzacją
    h2localStorageData.innerText = `${someInfo} ${someInfo2}`;                       //to samo co wyżej tylko z destrukturyzacją
}


// Zadanie 1
// Na stronie jest pytanie „Jak się czujesz?”. Są dwa przyciski „dobrze” i „źle”. Pod spodem wyświetlaj informację ile razy kliknięto dotychczas który przycisk.
const btnGood = document.querySelector('#good');
const countGood = document.querySelector('#countGood');
const btnBad = document.querySelector('#bad');
const countBad = document.querySelector('#countBad');

var sumOfGood = Number(localStorage.getItem('saveSumOfGood'));
var sumOfBad = Number(localStorage.getItem('saveSumOfBad'));
const updateSumOfGood = () => { countGood.innerText = String(sumOfGood) };
const updateSumOfBad = () => { countBad.innerText = String(sumOfBad) };
const saveSumOfGood = () => { localStorage.setItem('saveSumOfGood', sumOfGood.toString()) };
const saveSumOfBad = () => { localStorage.setItem('saveSumOfBad', sumOfBad.toString()) };
if (sumOfGood === null) {
    localStorage.setItem('saveSumOfGood', '0');
}
if (sumOfBad === null) {
    localStorage.setItem('saveSumOfBad', '0');
}
updateSumOfGood();
updateSumOfBad();

btnGood.addEventListener('click', () => {
    sumOfGood++;
    saveSumOfGood();
    updateSumOfGood();
});
btnBad.addEventListener('click', () => {
    sumOfBad++;
    saveSumOfBad();
    updateSumOfBad();
});


// Zadanie 2
// Zapisuj dane z zadania 1 w obiekcie.
const buttonGood = document.querySelector('#btn-good');
const moodCounter = document.querySelector('#h-count');
const buttonBad = document.querySelector('#btn-bad');

const moodInfo = localStorage.getItem('moood')
if (moodInfo === null) {
    mood = {
        good: 0,
        bad: 0,
    }
    localStorage.setItem('moood', JSON.stringify(mood));
}
else {
    mood = JSON.parse(moodInfo);
}

const updatePage = () => {
    const { good, bad } = mood;
    moodCounter.innerText = `good = ${good} and bad = ${bad}`
};

const updateMood = () => {
    localStorage.setItem('moood', JSON.stringify(mood))
};
updatePage();

buttonGood.addEventListener('click', () => {
    mood.good++;
    updateMood();
    updatePage();
})

buttonBad.addEventListener('click', () => {
    mood.bad++;
    updateMood();
    updatePage();
})


// Zadanie 3
// Klikasz na przycisk to pyta o liczbę.
// Zapisuje w tablicy, która jest przechowywana w localStorage.
// Na stronie wyświetla sumę elementów tej tablicy.

const tablebtn = document.querySelector('#tableOfNum-btn');
const sumOfItems = document.querySelector('#sumFromTable');

const tableInfo = localStorage.getItem('values')
if (tableInfo === null) {
    table = [];
    localStorage.setItem('values', JSON.stringify(table))
} else {
    table = JSON.parse(tableInfo);
}

tablebtn.addEventListener('click', () => {
    const nbr = Number(prompt('Podaj liczbę do doadnia:'));
    table.push(nbr);
    saveTable();
    updateSum(table);
})

const saveTable = () => {
    localStorage.setItem('values', JSON.stringify(table));
}

const updateSum = (table) => {
    let sum = 0;
    table.forEach(element => {
        sum += element;
    });
    sumOfItems.innerText = sum.toString();
}

// Zadanie 3 v2
const addBtn = document.querySelector('.btn-add-number');
const numbersP = document.querySelector('.p-numbers');
const sumH1Span = document.querySelector('.span-sum');

let numbers = localStorage.getItem('numbers');
if (numbers === null) {
    numbers = [];
} else {
    numbers = JSON.parse(numbers); // Nie zapominaj o tym!
}

const showNumbersAndSum = () => {
    numbersP.innerText = numbers.join(', '); // Połącz tablicę w tekst
    sumH1Span.innerText = numbers.reduce((prev, curr) => prev + curr, 0); // Jest o tym w lekcji o zaawansowanych pętlach i reduce
};

showNumbersAndSum();

addBtn.addEventListener('click', () => {
    const userNumber = Number(prompt('Podaj liczbę:'));
    if (Number.isNaN(userNumber)) {
        alert('Nieprawidłowa liczba!');
        return; // Wyjdź,  nie dodawaj
    }

    numbers.push(userNumber);
    localStorage.setItem('numbers', JSON.stringify(numbers));
    showNumbersAndSum();
});