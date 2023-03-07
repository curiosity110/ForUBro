// ES6 version

// =========================== Client Class =======================================
class Client {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}


// =========================== Dish Class =========================================
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
        // console.log("this.ingredient ", this.ingredients)
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

// =========================== Restaurant Class ==================================


class Restaurant {
    constructor() {
        this.orders = {}
    }

    orderDish(dish, client) {
        if (!this.orders[client.id]) {
            this.orders[client.id] = [dish]
        } else {
            this.orders[client.id].push(dish);
        }
    }

    printOrders(client) {
        let clientID = client.id
        console.log(`Your orders are: `)
        this.orders[clientID].forEach(dish => {
            console.log(`- ${dish.dish}`)
        })
    }

    check(client) {
        let clientID = client.id
        let balance = 0;
        this.orders[clientID].forEach(dish => {
            balance += dish.price
        })
        console.log(`The balance of you check is: ${balance} CHF`)
        return balance;
    }
}


// =========================== Ingredient Class ==================================


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


// =========================== Instantiation and Calling =======================

const goofy = new Client(1, 'goofy');
const pluto = new Client(2, 'pluto');


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
restaurant.orderDish(pizza, goofy)
restaurant.orderDish(salad, goofy)
restaurant.orderDish(salad, goofy)
restaurant.printOrders(goofy)
restaurant.check(goofy)