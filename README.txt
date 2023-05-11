Calugher Ion
TI-204

Subiect: Modele de design creațional
Autor: Calugher Ion
Obiective:
    1. Studiați și înțelegeți modelele de design creațional.
    2. Alegeți un domeniu, definiți-i principalele clase/modele/entități și alegeți mecanismele de instanțiere adecvate.
    3. Utilizați câteva modele de design creațional pentru instanțierea obiectelor într-un proiect exemplu.
Cateva teorie:
    Modelele de design creațional sunt o categorie de modele de design care se concentrează pe procesul de creare a obiectelor. Ele oferă o modalitate de a crea obiecte într-o manieră flexibilă și controlată, în timp ce decuplează codul client de specificul creării obiectelor. Modelele de proiectare creațională abordează problemele comune întâlnite în crearea obiectelor, cum ar fi cum să creați obiecte cu parametri de inițializare diferiți, cum să creați obiecte pe baza anumitor condiții sau cum să vă asigurați că este creată doar o singură instanță a unui obiect. Există mai multe modele de design creațional care au propriile lor puncte forte și puncte slabe. Fiecare dintre ele este cel mai potrivit pentru rezolvarea problemelor specifice legate de crearea obiectelor. Prin utilizarea modelelor de design creațional, dezvoltatorii pot îmbunătăți flexibilitatea, mentenabilitatea și scalabilitatea codului lor.
    Câteva exemple de acest tip de modele de design sunt:
•	Singleton
•	Builder
•	Prototype
•	Object Pooling
•	Factory Method
•	Abstract Factory


Realizarea lucrarii:
In aceasta lucrare de laborator am implimentat in javascript un magazine de bauturi.
Am folosit 4 modele de design creational. 

•	Prototype pattern
class Drink {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    clone() {
        return new Drink(this.name, this.price);
    }
•	Builder

export class DrinkBuilder {
    constructor(name) {
        this.drink = new Drink(name);
    }

    addPrice(price) {
        this.drink.price = price;
        return this;
    }

    build() {
        return this.drink;
    }
}
•	Factory

class DrinkFactory {
    static createDrink(name, price) {
        const builder = new DrinkBuilder(name);
        builder.addPrice(price);
        return builder.build();
    }

•	Singleton
export class DrinkShop {
    constructor() {
        if (!DrinkShop.instance) {
            DrinkShop.instance = this;
            this.drinks = [];
        }

        return DrinkShop.instance;
    }

    addDrink(drink) {
        this.drinks.push(drink);
    }

    removeDrink(drink) {
        const index = this.drinks.indexOf(drink);
        if (index !== -1) {
            this.drinks.splice(index, 1);
        }
    }

    getDrinks() {
        return this.drinks;
    }
}


