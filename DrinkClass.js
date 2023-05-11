
class Drink {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    clone() {
        return new Drink(this.name, this.price);
    }
}// Prototype pattern


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
