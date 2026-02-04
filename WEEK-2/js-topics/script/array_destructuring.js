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

//////////////////////////////////////////////
//1. Destructuring Arrays[]

const arr = [2, 3, 4];
const a = arr;
const b = arr[1];
[0];
const c = arr[2];

const [x, y, z] = arr; // must declare in const
console.log(x, y, z);
console.log(arr);

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from a function

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array one array with an another array

const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

// const [p, q, r] = [8, 9];
// console.log(p, q, r);

const [p = 1, q = 1, r = 1] = [8, 9]; //this will helpful when we get data from API
console.log(p, q, r);
