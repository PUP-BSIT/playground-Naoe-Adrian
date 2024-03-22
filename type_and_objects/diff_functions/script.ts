//A function without arguments that does not return a value
function helloWorld(): void {
  console.log("Hellow World");
}

helloWorld();

//A function with arguments that return a value
function add(x: number, y: number): number {
  return x + y;
}

console.log(`TOTAL SUM: ${add(10, 50)}`);

//Anonymous function
let multiply = function (x: number, y: number): number {
  let product = x * y;
  console.log(`TOTAL PRODUCT OF : ${x} and ${y} is : ${product}`);
  return product;
};

multiply(10, 50);

//A Function with Operational Parameters
function greetOptional(name?: string): void {
  if (name) {
    console.log("Hello, " + name + "!");
  } else {
    console.log("Hello!");
  }
}
greetOptional();
greetOptional("Naoe");

//Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(`TOTAL SUM: ${sum(1, 2, 3, 4, 5)}`);

//A function overloading
function display(value: string): void;
function display(value: number): void;
function display(value: any): void {
  console.log(value);
}

display("Hello");
display(42);
