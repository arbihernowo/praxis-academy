let hamster = {
    stomach: [],

    eat(food) {
        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Speedy one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// Lazy one's stomach is empty
console.log(lazy.stomach); // <nothing>