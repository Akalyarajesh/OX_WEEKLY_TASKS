// Creatin an Array

const fruits = ["apple", "orange", "banana"];

console.log(fruits.length);

// Reading an Array

console.log(fruits[2]);

// forEach()
fruits.forEach((fruit) => {
  console.log(fruit);
});

// it give like string(comma seperate)

console.log(fruits.toString());

// Updating/Pushing elements to Array

// end of the array

fruits.push("Grapes", "Peach");

// Starting of the array

fruits.unshift("Custurd Apple");

console.log(fruits);

// Deleting elements in array

// fruits.pop();

// fruits.shift();

// slice()

// const myFruits=fruits.slice(1,5);
// console.log(myFruits);

// fruits.splice(1,2);
// console.log(fruits);

// toSpliced()-it don't affect original array

const splicedarr = fruits.toSpliced(1, 3);
console.log(splicedarr);

// ARRAY METHODS(map,filter,reduce,find)

const modifiedArray = fruits.map((fruit) => {
  return fruit.toUpperCase();
});
console.log(modifiedArray);

const nums = [1, 2, 3, 4];

const doubleNum = nums.map((num) => {
  return num * num;
});

console.log(nums, doubleNum);

// filter()

const names = ["abi", "Iniyazh", "sathana"];

const result = names.filter((name) => name.length > 3);
console.log(result);

const users = [
  {
    id: 1,
    name: "Akalya",
    active: true,
  },
  {
    id: 2,
    name: "Rajesh",
    active: true,
  },
  {
    id: 3,
    name: "Ramesh",
    active: false,
  },
];

const activeUsers = users.filter((user) => {
  return user.active == true;
});

activeUsers.forEach((act) => {
  console.log(act);
});

// find()

const numbers = [5, 40, 62, 4];

const numberResult = numbers.find((num) => num > 10);

console.log(numberResult);

// reduce()

const userSpendAmount = [450, 85, 64, 78, 1257];

const totalSpendingAmount = userSpendAmount.reduce((prevVal, curval) => {
  return prevVal + curval;
}, 0);
console.log(totalSpendingAmount);
