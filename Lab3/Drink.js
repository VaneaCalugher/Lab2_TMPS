export class Drink {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

export class ColdDrink extends Drink {
    constructor(name, price) {
        super(name, price);
        this.isCold = true;
    }
}

export class HotDrink extends Drink {
    constructor(name, price) {
        super(name, price);
        this.isCold = false;
    }
}