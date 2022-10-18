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
