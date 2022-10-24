



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

