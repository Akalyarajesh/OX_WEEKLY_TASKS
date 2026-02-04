// Arrow function
// () => {}
// () => ({})

const sum = (a, b) => a + b;

console.log(sum(5, 5));

const isEligible = (age) => {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Wait few more Years");
  }
};

isEligible(15);

// Array Destructuring

const numbers = [10, 20, 30];

const [a, b, c] = numbers;
console.log(a, b, c);

const [x, , z] = numbers;
console.log(z);

// Object Destructuring

const user = {
  name: "Akalya",
  age: 22,
  role: "Developer",
};

const { name, role } = user;
console.log(name, role);
// rename

const { role: job } = user;
console.log(job);

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// Rest Operator

const [num1, num2, ...others] = [1, 2, 6, 8, 9, 4];
console.log(others);
