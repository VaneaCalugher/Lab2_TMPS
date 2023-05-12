import { Drink } from "./Drink.js";
import { ColdDrink } from "./Drink.js";
import { HotDrink } from "./Drink.js";
import { DrinkStore } from "./DrinkStore.js";


class ColdDrinkAdapter extends Drink {
    constructor(name, price) {
        super(name, price);
        this.isCold = true;
    }
}//adapter

class HotDrinkDecorator extends Drink {
    constructor(drink) {
        super(`${drink.name} (hot)`, drink.price + 0.5);
        this.drink = drink;
        this.isCold = false;
    }
}//decorator

let cocaCola = new ColdDrink('CocaCola', 7);
let pepsi = new ColdDrink('Pepsi', 8);
let coffee = new HotDrink('Coffee', 2);
let tea = new HotDrink('Tea', 2);

//dupa categorii
const hotCoke = new HotDrinkDecorator(new ColdDrinkAdapter('Cola', 7));
const hotPepsi = new HotDrinkDecorator(new ColdDrinkAdapter('Pepsi', 8));

const drinkStore = new DrinkStore([cocaCola, pepsi, coffee, tea, hotCoke, hotPepsi]);//crearea store

//vanzare
drinkStore.sellDrink('Coffee');
drinkStore.sellDrink('CocaCola');
drinkStore.sellDrink('Baban');
drinkStore.sellDrink('Pepsi');
drinkStore.sellDrink('Tea');
drinkStore.sellDrink('Sprite');
