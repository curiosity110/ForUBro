// ES6 version

// =========================== Dish Class ===================================
class Dish {
    constructor(dish, ingredients, price) {
        this.dish = dish
        this.ingredients = ingredients
        this.price = price
    }


    // not required
    // if you want to print the dish and it's ingredients
    printDish() {
        console.log(`Dish: ${this.dish}`)
        console.log("Ingredients:")
        this.ingredients.forEach(ingredient => {
            console.log(`- ${ingredient.name}`)
        })
    }

    cost() {
        let totalCost = 10
        this.ingredients.forEach(ingredient => {
            totalCost += ingredient.cost
        })
        return totalCost
    }

    profit() {
        let profit = parseInt(this.price) - parseInt(this.cost())
        console.log(`The profit is: ${profit}`)
    }
}


// =========================== Restaurant Class =========================


class Restaurant {
    constructor() {
        this.orders = []
    }

    orderDish(dish) {
        this.orders.push(dish)
    }
    printOrders() {
        console.log(`Your orders are: `)
        this.orders.forEach((order, index) => {
            console.log(`- #${index}: ${order.dish}`)
        })
    }

    check() {
        let balance = 0;
        this.orders.forEach(dish => {
            balance += dish.price
        })
        console.log(`The balance of you check is: ${balance}`)
        return balance;
    }
}



// =========================== Ingredient Class ===============================


class Ingredient {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }

    // not required
    // to print all the contents of the ingredient 
    printIngredient() {
        console.log(`Ingredient Name: ${this.name}`)
        console.log(`Ingredient Cost: ${this.cost}`)
    }
}


// =========================== Instantiation and calling =======================


const cheese = new Ingredient("Cheese", 5);
const pepperoni = new Ingredient("Pepperoni", 10);
const dough = new Ingredient("Dough", 2);
const lettuce = new Ingredient("Lettuce", 3);
const tomato = new Ingredient("Tomato", 4);

// cheese.printIngredient()


const pizza = new Dish('pizza', [cheese, dough, tomato], 35);
const salad = new Dish("salad", [lettuce, cheese, tomato], 30);
// pizza.printDish()

pizza.cost()
pizza.profit()

const restaurant = new Restaurant()
restaurant.orderDish(pizza)
restaurant.orderDish(salad)
restaurant.printOrders()
restaurant.check()