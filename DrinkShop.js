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
//singleton