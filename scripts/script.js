

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

