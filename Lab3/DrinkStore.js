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