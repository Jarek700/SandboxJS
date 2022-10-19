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


