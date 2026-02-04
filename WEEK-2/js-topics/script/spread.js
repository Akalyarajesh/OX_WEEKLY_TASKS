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

////////////////////////////////////////////
// SPREAD OPERATORS(...)

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // 1,2,7,8,9

// Adding values
const newMenu = [...restaurant.mainMenu, "Dossa"];
console.log(newMenu);
console.log(restaurant.mainMenu);

// Shallow copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: Arrays,Strings,maps,sets, NOT Objects

const string = ["A", ..."EIO", "U"];
console.log(string);

const str = "Akalya";
// console.log(`${...str} Rajesh`);  This is wrong we can't use spread operators in template literals

// Spread operators with function
// real world example

const ingredients = [
  prompt("Let's make biryani! ingredients 1?"),
  prompt(" ingredients 2?"),
  prompt(" ingredients 3?"),
];
console.log(ingredients);
restaurant.orderBiryani[(ingredients[0], ingredients[1], ingredients[2])];
restaurant.orderBiryani(...ingredients);

// es 2018 spread operators also work with object-even though objects are not iterables

// Object
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Akalya" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.nameR = "Rajesh";
console.log(restaurantCopy.nameR);
console.log(restaurant.nameR);
