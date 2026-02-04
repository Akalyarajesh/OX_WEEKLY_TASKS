"use strict";

const restaurant = {
  nameR: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // function destructuring the object immediately
  orderDelivery: function ({
    starterIndex,
    mainIndex = 0,
    time = "22:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
  // for spread operators
  orderBiryani: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious Biryani with ${ing1},${ing2},${ing3}`);
  },
};

///////////////////////////////////
// Destructuring Object {} - order of the elements doesn't matter

const { nameR, openingHours, categories } = restaurant;

console.log(nameR, openingHours, categories);

// different variable name from property name
const {
  nameR: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Set default values -it really helpfull when we create real project
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// menu.push('Burger');
// console.log(menu);

// Mutating variable-switching variable like array

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested object
const {
  fri: { open: o, close },
} = restaurant.openingHours;
console.log(o, close);

// passing object to the function
restaurant.orderDelivery({
  time: "22:30",
  address: "west street",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "East Street",
  starterIndex: 3,
});

restaurant.orderBiryani(
  prompt("Enter Your ingredient1"),
  prompt("Enter Your ingredient2"),
  prompt("Enter Your ingredient3"),
);
