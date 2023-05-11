import { DrinkShop } from "./DrinkShop.js";
import { DrinkBuilder } from "./DrinkClass.js";


class DrinkFactory {
    static createDrink(name, price) {
        const builder = new DrinkBuilder(name);
        builder.addPrice(price);
        return builder.build();
    }
}//factory

const shop = new DrinkShop();

const tea = DrinkFactory.createDrink("TeaDas", 2.5);
shop.addDrink(tea);

const coffee = tea.clone();
coffee.name = "CoffeeArabica";
coffee.price = 5;
shop.addDrink(coffee);

console.log(shop.getDrinks());
