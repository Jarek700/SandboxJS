

//create class that keeps table of results & method that allows to add new results to the table.
const arrayOfResults = () => {
    class SportsMan {
        constructor(name, results = []) {
            this.name = name;
            this.results = results;
        }
        addResult(resultToAdd) {
            return this.results.push(resultToAdd);
        }
        checkIfEverWon() {
            let wins = 0
            for (let i = 0; i < this.results.length; i++) {
                if (this.results[i] == 1) {
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

    const aMalysz = new SportsMan('Adam', ['1', '2', '3']);
    aMalysz.addResult('olimpiada');
    console.log(aMalysz);
    aMalysz.addResult('1');
    aMalysz.addResult('PŚ');
    aMalysz.addResult('4Skocznie');
    console.log(aMalysz);

    const legia = new SportsMan('LegiaWLidze');
    legia.addResult("15");
    legia.addResult("3");
    legia.addResult("30");
    console.log(legia);
    // * 5.* Dodaj metodę, która sprawdzi czy kraj posiada jakiekolwiek pierwsze miejsce i jeżeli tak to wyświetl "Brawo!".
    aMalysz.checkIfEverWon();
    legia.checkIfEverWon();
}