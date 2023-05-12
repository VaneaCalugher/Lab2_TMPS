export class DrinkFacade {
    constructor(drinks) {
      this.drinkStore = new DrinkStore(drinks);
    }
  
    getDrinks() {
      return this.drinkStore.getDrinks();
    }
  
    sellDrink(drinkName) {
      const drink = this.drinkStore.sellDrink(drinkName);
      if (drink) {
        console.log(`|Selling ${drink.name}|Price: $${drink.price}|`);
      } else {
        console.log(`Sorry, we don't have ${drinkName}`);
      }
    }
  }
  
//facade