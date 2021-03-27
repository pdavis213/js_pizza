var pizza0 = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses:   ["mozzarella"],
    toppings:  ["pepperoni", "sausage"]
};

var pizza1 = {
    crustType: "hand tossed",
    sauceType: "marinara",
    cheeses:   ["mozzarella","feta"],
    toppings:  ["mushroom", "olives", "onions"]
};

var pizza2 = {
    crustType: "stuffed crust",
    sauceType: "barbecue",
    cheeses:   ["cheddar","gouda"],
    toppings:  ["hot sauce", "peppers", "onions"]
};

var pizza3 = {
    crustType: "pretzel",
    sauceType: "cajun mustard",
    cheeses:   ["munster"],
    toppings:  ["schzitzel", "capers", "arugala"]
};

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
        pizza.crustType = crustType;
        pizza.sauceType = sauceType;
        pizza.cheeses = cheeses;
        pizza.toppings= toppings;
        console.log (pizza);
        return pizza;
    }
    
    pizzaOven(pizza0.crustType, pizza1.sauceType, pizza2.cheeses, pizza3.toppings);
