// =========================== Client Class ===================================
var Client = function (id, name) {
    this.id = id
    this.name = name
}


// =========================== Dish Class =====================================
var Dish = function (dish, ingredients, price) {
    this.dish = dish
    this.ingredients = ingredients
    this.price = price
}

// not required
// if you want to print the dish and it's ingredients
Dish.prototype.printDish = function () {
    console.log(`Dish: ${this.dish}`)
    console.log("Ingredients:")
    this.ingredients.forEach(ingredient => {
        console.log(`- ${ingredient.name}`)
    })
}

Dish.prototype.cost = function () {
    var totalCost = 10
    // console.log("this.ingredient ", this.ingredients)
    this.ingredients.forEach(ingredient => {
        totalCost += ingredient.cost
    })
    return totalCost
}

Dish.prototype.profit = function () {
    var profit = parseInt(this.price) - parseInt(this.cost())
    console.log(`The profit is: ${profit}`)
}


// =========================== Restaurant Class ==============================


var Restaurant = function () {
    this.orders = {}
}

Restaurant.prototype.orderDish = function (dish, client) {
    if (!this.orders[client.id]) {
        this.orders[client.id] = [dish]
    } else {
        this.orders[client.id].push(dish);
    }
}

Restaurant.prototype.printOrders = function (client) {
    var clientID = client.id
    console.log(`Your orders are: `)
    this.orders[clientID].forEach(dish => {
        console.log(`- ${dish.dish}`)
    })
}

Restaurant.prototype.check = function (client) {
    var clientID = client.id
    var balance = 0;
    this.orders[clientID].forEach(dish => {
        balance += dish.price
    })
    console.log(`The balance of you check is: ${balance} CHF`)
    return balance;
}



// =========================== Ingredient Class ===============================


var Ingredient = function (name, cost) {
    this.name = name
    this.cost = cost
}

// not required
// to print all the contents of the ingredient 
Ingredient.prototype.printIngredient = function () {
    console.log(`Ingredient Name: ${this.name}`)
    console.log(`Ingredient Cost: ${this.cost}`)
}



// =========================== Instantiation and calling =======================

var goofy = new Client(1, 'goofy');
var pluto = new Client(2, 'pluto');


var cheese = new Ingredient("Cheese", 5);
var pepperoni = new Ingredient("Pepperoni", 10);
var dough = new Ingredient("Dough", 2);
var lettuce = new Ingredient("Lettuce", 3);
var tomato = new Ingredient("Tomato", 4);

// cheese.printIngredient()


var pizza = new Dish('pizza', [cheese, dough, tomato], 35);
var salad = new Dish("salad", [lettuce, cheese, tomato], 30);
// pizza.printDish()

pizza.cost()
pizza.profit()

var restaurant = new Restaurant()
restaurant.orderDish(pizza, goofy)
restaurant.orderDish(salad, goofy)
restaurant.orderDish(salad, goofy)
restaurant.printOrders(goofy)
restaurant.check(goofy)