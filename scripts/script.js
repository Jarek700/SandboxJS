const bookByIdasync = () => {
    const idOfBookISBN = 9781312173705;
    //const idOfBookISBN = Number(prompt('podaj numer ISBN książki:'));

    (async () => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${idOfBookISBN}`)
        const data = await response.json()
        if (!data.items || data.items.length === 0) {
            console.log('Book not found!');
        } else {
            const { authors, title } = data.items[0].volumeInfo
            console.log(`${title} by ${authors}`);
        }
    })();


    (async () => {
        const response = await fetch('https://swapi.dev/api/people/3');
        const data = await response.json();
        console.log(data.name);

    })();

    async function lukeskywakeru() {
        const reponse = await fetch('https://swapi.dev/api/people/1')
        const data = await reponse.json();
        console.log(data.name)
    }
    lukeskywakeru()
}