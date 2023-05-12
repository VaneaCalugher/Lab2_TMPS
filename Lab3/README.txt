TI-204
Calugher Ion
Subiect: Modele de proiectare structurală
________________________________________
Obiective:
    1. Studiați și înțelegeți modelele de proiectare structurală.
    2. Ca o continuare a lucrărilor anterioare de laborator, gândiți-vă la funcționalitățile pe care sistemul dumneavoastră va trebui să le ofere utilizatorului.
    3. Implementați unele funcționalități suplimentare sau creați un nou proiect folosind modele de proiectare structurală.
Context teoretic:
    Modelele de proiectare structurală sunt o categorie de modele de proiectare care se concentrează pe compoziția claselor și a obiectelor pentru a forma structuri și sisteme mai mari. Ele oferă o modalitate de a organiza obiectele și clasele într-un mod flexibil și eficient, permițând în același timp reutilizarea și modificarea codului existent. Modelele de proiectare structurală abordează probleme comune întâlnite în compoziția claselor și a obiectelor, cum ar fi modul de a crea noi obiecte care moștenesc funcționalitatea de la obiectele existente, cum să creeze obiecte care partajează funcționalitatea fără a duplica codul sau cum să definești relațiile dintre obiecte într-un mod flexibil. și modul extensibil.
    Câteva exemple din această categorie de modele de design sunt:
•	Adapter
•	Bridge
•	Composite
•	Decorator
•	Facade
•	Flyweight
•	Proxy

Implimentarea:
În această lucrare de laborator am continuat implimentarea magazinului de bauturi folosind deja unele modele de proiectare structurala.
Mai exact am folosit urmatoarele design pattern structurale: adapter, decorator si facade.


•	Adapter
class ColdDrinkAdapter extends Drink {
      constructor(name, price) {
          super(name, price);
          this.isCold = true;
      }
  }//adapter

•	Decorator
class HotDrinkDecorator extends Drink {
      constructor(drink) {
          super(`${drink.name} (hot)`, drink.price + 0.5);
          this.drink = drink;
          this.isCold = false;
      }
  }//decorator

•	Facade
export class DrinkStore {
    constructor(drinks) {
        this.drinks = drinks;
    }

    getDrinks() {
        return this.drinks;
    }

    sellDrink(drinkName) {
        const drink = this.drinks.find(drink => drink.name === drinkName);
        if (drink) {
            console.log(`|Selling ${drink.name}|Price: $${drink.price}|`);
        } else {
            console.log(`Sorry, we don't have ${drinkName}`);
        }
    }
}//facade
  
//facade

Concluzie:
Proiectul reprezintă o aplicație care simulează vânzarea de băuturi, implementând diverse concepte de design patterns, precum Decorator, Adapter și Facade.
Clasele de bază sunt reprezentate de Drink, ColdDrink și HotDrink, care extind clasa Drink. Clasa DrinkStore se ocupă de stocarea și vânzarea băuturilor. Clasa HotDrinkDecorator reprezintă un decorator care adaugă funcționalitatea de "hot" la o băutură, în timp ce clasa ColdDrinkAdapter convertește o băutură rece într-o băutură generală, adăugând astfel funcționalitatea de adaptare.
Clasa DrinkFacade oferă o interfață simplificată pentru utilizarea aplicației, ascunzând detaliile de implementare. Aceasta încapsulează funcționalitatea de obținere a listei de băuturi și de vânzare a băuturilor, permițând utilizatorului să acceseze aceste funcționalități printr-o singură metodă.
În final, proiectul demonstrează cum diverse concepte de design patterns pot fi utilizate pentru a îmbunătăți structura și funcționalitatea unei aplicații, oferind astfel o soluție mai modulară, mai ușor de extins și de întreținut.

