//1. Factorial using recursive function

function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}
console.log("Factorial Value is:" + " " + fact(5));

//2. Swap two numbers without third variable

let a = 10;
let b = 20;

console.log(a, b);

[a, b] = [b, a];

console.log(a, b);

//3. sum of two numbers using arrow function

const sum = (x, y) => x + y;
console.log(sum(a, b));

//4. Find even numbers

const nums = [1, 2, 5, 4, 8, 32];

const evenNumbers = nums.filter((num) => {
  return num % 2 == 0;
});

console.log(evenNumbers);

// 5.Anagram

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");

  return str1.split("").sort().join("") == str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));

// 6. sum of the given array

const sumOfNumbers = nums.reduce((preval, currval) => {
  return preval + currval;
}, 0);

console.log(sumOfNumbers);

// 7.Remove Duplicate value

const originalArr = [1, 2, 2, 3, 4, 5, 8, 9, 9];

const nonDuplicate = [...new Set(originalArr)];

console.log(nonDuplicate);

// 8.Vowels and Consonants
