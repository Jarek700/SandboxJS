
////////////////////Array reduce  uruchamiać w node.js
const array = [1, 2, 3];
//reduce może przyjąć 4 parametry: poprzednia zwrócona wartośc, elementTablicy, indekselementu, oryginalnaTablica
//metoda jest callbackowana tyle razy ile jest elementów w tablicy
const sum = array.reduce((previous, element, i, arr) => {                    // 1sza iteracja bierze wartość początkową 0 i dodaje 1 z tablicy
    return previous + element;                                              // 2sza iteracja zwróconą wartość z poprzedniej iteracji 1 i dodaje 2 z tablicy
}, 0);  //przekazujemy 2gi argument reduce - jest to wartość początkowa         // 3sza iteracja zwróconą wartość z poprzedniej iteracji 3 i dodaje 3 z tablicy
//                                                                              // na końcu cały reduce zwraca wynik z ostatniej iteracji czyli 6

console.log(sum);

const sum2 = array.reduce((a, b) => {
    console.log("a", a, "b", b);
    return a + b;
}, 55);
console.log(sum2);

const sum3 = array.reduce((a, b) => a + b, 0);                 //taki ładny zapis :)
console.log(sum3);                                              //można też zapisać bez wartości początkowej 0 ,ale może się coś popsuć przy obiektach :p


const namesArray = ['Ania', 'Andju', 'Koko', 'Loko'];           //wyświetl imiona na A urzywając reduce
const names = namesArray.reduce((prev, curr) => {
    if (curr[0] === 'A') {
        return `${prev} ${curr}`;
    } else {
        return prev;
    }
}, '');
console.log(names);

const names2 = namesArray                               //wyświetl imiona na A urzywając filter
    .filter(name => name[0] === 'A')
    .join(' ')
console.log(names2);


const namesLenght = namesArray.reduce((prev, curr) => {                 //policz wszystkie znaki w z tablicy imiona
    return prev + curr.length;
}, 0)
console.log(namesLenght);

const namesLenght2 = namesArray.reduce((prev, curr) => {                 //jw przykład popsuty bez wartości startowej
    return prev + curr.length;
})
console.log(namesLenght2);