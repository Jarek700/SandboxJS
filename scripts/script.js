



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
            console.log(data.items[0].volumeInfo.title);
            console.log(data.items[0].volumeInfo.authors);
            console.log(data)
        })
        .catch(error => console.log(error))

    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${idOfBookISBN}`)
        .then(res => res.json())
        .then(data => {
            if (!data.items || data.items.length === 0) { // Zauważ, że dodaję tu walidację. Zauważyłem - debuggując console.log-iem, że kiedy książka nie istnieje to nie dostaję data.items lub jest ono pustą tablicą.
                console.log('Book not found!');
            } else {
                const { authors, title } = data.items[0].volumeInfo
                console.log(`${title} by ${authors}`);
            }
        })
        .catch(err => console.log('Błąd!', err));
}