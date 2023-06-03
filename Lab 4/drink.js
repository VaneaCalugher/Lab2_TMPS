// Strategy Pattern
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

// Command Pattern
class BuyDrinkCommand {
    constructor(strategy) {
        this.strategy = strategy;
    }

    execute() {
        this.strategy.buyDrink();
    }
}

// Usage
const alcoholicStrategy = new AlcoholicDrinkStrategy();
const softStrategy = new SoftDrinkStrategy();

const drinkStore = new DrinkStore();
const buyer1 = new DrinkBuyer('Buyer 1');
const buyer2 = new DrinkBuyer('Buyer 2');

drinkStore.subscribe(buyer1);
drinkStore.subscribe(buyer2);

const buyAlcoholicDrinkCommand = new BuyDrinkCommand(alcoholicStrategy);
buyAlcoholicDrinkCommand.execute();
drinkStore.notify();

const buySoftDrinkCommand = new BuyDrinkCommand(softStrategy);
buySoftDrinkCommand.execute();
drinkStore.notify();

drinkStore.unsubscribe(buyer2);

buyAlcoholicDrinkCommand.execute();
drinkStore.notify();