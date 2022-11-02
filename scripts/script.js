
//uruchamiać w node.js
arr = [1, 2, 3];
//dla każdego numeru z tablicy arr
for (const number of arr) {                 //lepsze dla async
    console.log(number);
}

const obj = {
    name: 'janusz',
    surname: 'gąbka',
    age: '34',
}
const keys = Object.keys(obj);
console.log(keys);
const values = Object.values(obj);
console.log(values);
const entries = Object.entries(obj);
console.log(entries);

for (const entry of entries) {
    const [keyezmienna, valuezmienna] = entry;         //zdestrukturyzowałem sobie tablice w tablicy
    console.log(keyezmienna + "  *  " + valuezmienna)
}

for (const [keyez, valuez] of entries) {                 //można zdestrukturyzować już tutaj
    console.log(keyez + "  ^  " + valuez);
}

for (const keye of keys) {
    console.log(keye + "  v  " + obj[keye]);            //można się odnieść do value używając obiektu i klucza w []
}

//dla klucza w obiekcie                                 // for in loop
for (const key in obj) {
    console.log(key + "  x  " + obj[key]);
}