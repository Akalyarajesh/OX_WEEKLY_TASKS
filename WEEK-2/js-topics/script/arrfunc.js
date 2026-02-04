// 1. Function Declaration

function sayHello() {
  console.log("Hello There!");
}
sayHello();

// 2. Function Expression

const greet = function hello() {
  console.log("Hello i'm from Function Expression");
};
greet();

// 3.Anonymous Function

const greet1 = function hello() {
  console.log("I'm from Anonymous function");
};

greet1();

// 4. IIF

(function sayHello1() {
  console.log("i'm Imediately Invoked Function");
})();

// 5.ARROW FUNCTION

const sum = (a, b) => a + b;

console.log("Arrow Function sum: " + sum(5, 5));

// Arrow Function in Object
const person = {
  firstName: "Akalya",
  lastName: "Ravichandran",

  // getFullName:()=>{
  //     return person.firstName +" " + person.lastName;
  // },

  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.getFullName());

// () => {}
// () => ({})

const objArr = () => ({
  id: 1,
  name: "Akalya",
});

console.log(objArr());
