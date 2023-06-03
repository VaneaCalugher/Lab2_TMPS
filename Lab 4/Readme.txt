Subiect: Modele de design comportamental
Student: Calugher Ion
Grupa: TI-204
Obiective:
    1. Studiați și înțelegeți modelele de design comportamental.

    2. Ca o continuare a lucrărilor anterioare de laborator, gândiți-vă la ce comunicare între entitățile software ar putea fi implicată în sistemul dumneavoastră.

    3. Creați un proiect nou sau adăugați câteva funcționalități suplimentare folosind modele de design comportamental.

Context teoretic:
    Modelele de design comportamental sunt o categorie de modele de design care se concentrează pe interacțiunea și comunicarea dintre obiecte și clase. Ele oferă o modalitate de a organiza comportamentul obiectelor într-un mod flexibil și reutilizabil, separând în același timp responsabilitățile obiectelor de detaliile specifice de implementare. Tiparele de proiectare comportamentală abordează problemele comune întâlnite în comportamentul obiectelor, cum ar fi modul de definire a interacțiunilor dintre obiecte, modul de control al fluxului de mesaje între obiecte sau modul de definire a algoritmilor și politicilor care pot fi reutilizate în diferite obiecte și clase.

    Câteva exemple din această categorie de modele de design sunt:

-Lanțul de responsabilitate
-Comanda
-Interpret
-Iterator
-Mediator
-Observator
-Strategie

Implimentarea:

În această lucrare de laborator am continuat implimentarea magazinului de bauturi folosind deja unele modele de design comportamental. Mai exact am folosit 3 modele:
-Strategy
-Observer
-Command

•	Strategy Pattern:

/ Strategy Pattern
class DrinkStrategy {
    buyDrink() {
        throw new Error('buyDrink() method must be implemented');
    }
}

class AlcoholicDrinkStrategy extends DrinkStrategy {
    buyDrink() {
        console.log('Buying alcoholic drink...');
    }
}

class SoftDrinkStrategy extends DrinkStrategy {
    buyDrink() {
        console.log('Buying soft drink...');
    }
}


Acesta este reprezentat prin clasele DrinkStrategy, AlcoholicDrinkStrategy și SoftDrinkStrategy.
Clasa abstractă DrinkStrategy definește o metodă buyDrink() care trebuie implementată în clasele derivate.
Clasele derivate AlcoholicDrinkStrategy și SoftDrinkStrategy suprascriu metoda buyDrink() pentru a defini comportamentul specific achiziționării unei băuturi alcoolice sau a unei băuturi nealcoolice.
Acest model permite schimbarea strategiei de cumpărare a băuturii fără a modifica codul consumatorului.


•	Observer Pattern:

// Observer Pattern
class DrinkStore {
    constructor() {
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter(
            (subscriber) => subscriber !== observer
        );
    }

    notify() {
        this.subscribers.forEach((subscriber) => subscriber.update());
    }
}

class DrinkBuyer {
    constructor(name) {
        this.name = name;
    }

    update() {
        console.log(${this.name}: Drink is available for purchase.);
    }
}

	Acesta este reprezentat prin clasele DrinkStore și DrinkBuyer.
Clasa DrinkStore servește ca subiect observabil și menține o listă de abonați (subscribers).
Metodele subscribe(observer) și unsubscribe(observer) permit abonaților să se înregistreze și să se dezaboneze la notificări.
Metoda notify() parcurge lista de abonați și apelează metoda update() pentru fiecare observator.
Clasa DrinkBuyer reprezintă un observator și implementează metoda update() care este apelată atunci când este notificat că o băutură este disponibilă pentru achiziție.
Acest model permite obiectelor observatoare să fie notificate automat despre evenimente din obiectul subiect, evitând astfel dependențele strânse între subiect și observatori.

•	Command Pattern:

// Command Pattern
class BuyDrinkCommand {
    constructor(strategy) {
        this.strategy = strategy;
    }

    execute() {
        this.strategy.buyDrink();
    }
}

	Acesta este reprezentat prin clasa BuyDrinkCommand.
Clasa BuyDrinkCommand are o metodă execute() care apelează metoda buyDrink() pe obiectul de strategie asociat.
Acest model desparte invocarea unei acțiuni de obiectul care o execută, permițând astfel configurarea și parametrizarea acțiunilor fără a cunoaște detaliile concrete ale implementării acțiunii.
În acest caz, BuyDrinkCommand permite cumpărarea unei băuturi utilizând o strategie specifică (băutură alcoolică sau băutură nealcoolică).

Concluzie:
	Acest cod exemplifică o implementare eficientă a trei tipare de proiectare: Strategy Pattern, Observer Pattern și Command Pattern. Aceste tipare sunt utile în proiectarea și dezvoltarea software-ului pentru a obține modularitate, flexibilitate și extensibilitate.
Prin utilizarea Strategy Pattern, se separă comportamentul specific în clase separate și se permite schimbarea strategiilor de cumpărare a băuturilor fără a modifica codul consumatorului. Acest lucru oferă un nivel ridicat de flexibilitate și modularitate în gestionarea diferitelor tipuri de băuturi.
Observer Pattern este folosit pentru a permite obiectelor observatoare să fie notificate automat atunci când o băutură devine disponibilă în magazin. Acesta reduce cuplarea strânsă între subiect și observatori și permite gestionarea flexibilă a abonaților la evenimente.
Command Pattern separă invocarea unei acțiuni de obiectul care o execută. În acest caz, obiectul BuyDrinkCommand acționează ca o comandă care realizează achiziția unei băuturi folosind o strategie specifică. Acesta permite parametrizarea și configurarea acțiunilor fără a cunoaște detaliile concrete ale implementării.
	În concluzie, acest cod demonstrează utilizarea eficientă a celor trei tipare de proiectare, îmbunătățind modularitatea, flexibilitatea și extensibilitatea aplicației. Prin separarea responsabilităților și utilizarea interacțiunilor flexibile între obiecte, acest cod poate fi ușor de întreținut și de extins în viitor.