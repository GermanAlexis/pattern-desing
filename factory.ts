import { COLORS } from "../helpers/colors";

interface Hambuger {
  prepare(): void;
}

class ChickenBurger implements Hambuger {
  prepare(): void {
    console.log("%cpreparing Chicken buger:\n", COLORS.yellow);
  }
}

class BeefBurger implements Hambuger {
  prepare(): void {
    console.log("%cpreparing Beef burger:\n", COLORS.blue);
  }
}

class BeansBurger implements Hambuger {
  prepare(): void {
    console.log("%cpreparing Beans burger:\n", COLORS.brown);
  }
}

abstract class Resturant {
  abstract createHambuger(): Hambuger;

  orderBuger(): void {
    const burger = this.createHambuger();
    burger.prepare();
  }
}

class ChickendRestaurant extends Resturant {
  override createHambuger(): Hambuger {
    return new ChickenBurger();
  }
}

class BeefRestaurant extends Resturant {
  override createHambuger(): Hambuger {
    return new BeefBurger();
  }
}

class BeansRestaurant extends Resturant {
  override createHambuger(): Hambuger {
    return new BeansBurger();
  }
}

function main() {
  let restaurant: Resturant;

  const restaurantType = prompt("What is choose buger (beef/chicken/beans)");

  switch (restaurantType) {
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    case "chicken":
      restaurant = new ChickendRestaurant();
      break;
    case "beans":
      restaurant = new BeansRestaurant();
      break;
    default:
      throw new Error("invalid options");
  }

  restaurant.orderBuger();
}

main();
