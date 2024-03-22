//A function without arguments that does not return a value
function helloWorld() {
    console.log("Hellow World");
}
helloWorld();
//A function with arguments that return a value
function add(x, y) {
    return x + y;
}
console.log("TOTAL SUM: ".concat(add(10, 50)));
//Anonymous function
var multiply = function (x, y) {
    var product = x * y;
    console.log("TOTAL PRODUCT OF : ".concat(x, " and ").concat(y, " is : ").concat(product));
    return product;
};
multiply(10, 50);
//A Function with Operational Parameters
function greetOptional(name) {
    if (name) {
        console.log("Hello, " + name + "!");
    }
    else {
        console.log("Hello!");
    }
}
greetOptional();
greetOptional("Naoe");
//Rest parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log("TOTAL SUM: ".concat(sum(1, 2, 3, 4, 5)));
function display(value) {
    console.log(value);
}
display("Hello");
display(42);
