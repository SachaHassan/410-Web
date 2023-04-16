
function onLoad() {
    console.log('Processus de chargement du document terminé…');
    //
    // All your JavaScript code goes here !
    //
    afficherMessage();

}


function afficherMessage() {
    // Exercice 1.1
    console.log("Exercice 1.1");
    const personne = {
        nom: "Monkey D.",
        prenom: "Luffy",
        age: 19,
        taille: 1.75,
    };

    const personne2 = {
        nom : personne.nom,
        prenom : personne.prenom,
        age : personne.age,
        taille : personne.taille
    }

    const x = personne;
    x.age = 31;

    console.log("Personne :"+personne.age);
    console.log("X :"+x.age);
    console.log("Personne 2 :"+personne2.age);

    // Exercice 1.2
    console.log("Exercice 1.2");
    console.log(personne.nom);
    console.log(personne['age']);
    Object.keys(personne).forEach(function(propriete) {
        console.log(propriete + ': ' + personne[propriete]);
    });

    console.log("For in");
    for(let propriete in personne) {
        console.log(propriete + ': ' + personne[propriete]);
    }

    personne.poids = 70;
    console.log(personne.poids +"kg");

    delete personne.poids;
    console.log(personne.poids);

    // Exercice 1.3
    console.log("Exercice 1.3");
    personne.sports = {
        sport1: 'Football',
        sport2: 'Tennis',
        sport3: 'Basketball'
    };

    console.log(personne.sports.sport1);
    console.log(personne.sports['sport2']);
    console.log(personne.sports.sport3);

    for (let sport in personne.sports) {
        console.log(`${sport}: ${personne.sports[sport]}`);
    }

    personne.sports = [
        { nom: 'Football', equipements: ['ballon', 'crampons', 'maillot'] },
        { nom: 'Tennis', equipements: ['raquette', 'balle', 'filet'] },
        { nom: 'Basketball', equipements: ['ballon', 'panier', 'chaussures'] }
    ];

    for (let i in personne.sports) {
        console.log(`${personne.sports[i].nom}:`);
        for (let j in personne.sports[i].equipements) {
            console.log(`- ${personne.sports[i].equipements[j]}`);
        }
    }

    // Exercice 1.4

    const personne3 = {
        nom: "Monkey D.",
        prenom: "Luffy",
        age: 19,
        taille: 1.75,
        qui: function() {
            console.log(`Je m'appelle ${this.prenom} ${this.nom}.`);
        },
        quimaj: function() {
            console.log(`Je m'appelle ${this.prenom.toUpperCase()} ${this.nom.toUpperCase()}.`);
        },
        dateNaissance : new Date('1999-10-20'),
        age: function() {
            const now = new Date();
            const diff = now.getTime() - this.dateNaissance.getTime();
            const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            return age;
        }
    };
    personne3.qui();
    personne3.quimaj();

    // Exercice 1.5
    const div = document.createElement('div');
    div.textContent = Object.values(personne).join(', ');
    document.body.appendChild(div);

    const div2 = document.createElement('div');
    div2.textContent = JSON.stringify(personne);
    document.body.appendChild(div2);

    personne.dateNaissance = new Date('1999-10-20'); // 20 octobre 1999 ;)

    const div3 = document.createElement('div');
    div3.textContent = JSON.stringify(personne);
    document.body.appendChild(div3);

    const div4 = document.createElement('div');
    div4.textContent = JSON.stringify(personne3);
    document.body.appendChild(div4);

    div4.textContent = JSON.stringify(personne3, (key, value) => {
        if (key === 'dateNaissance') {
            return value.toString();
        }
        return value;
    });

    console.log(personne3.age());

    Object.defineProperty(personne, 'lang', {
        get: function() {
            return this.langue;
        }
    });
    personne.langue = 'fr';
    console.log(personne.lang);

    Object.defineProperty(personne, 'lang', {
        set: function(newLang) {
            this.langue = newLang;
        }
    });
    console.log(personne.lang);
}


window.onload = onLoad;