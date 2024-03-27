var stringArr = ["one", "hey", "Naoe"];
var guitars = ["Strat", "Les Paul", 5150];
var mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
var test = [];
var bands = [];
bands.push("Van Halen");
var arrays = [stringArr, guitars, mixedData, test, bands];
for (var i = 0; i < arrays.length; i++) {
    console.log("Array ".concat(i + 1, ":"), arrays[i]);
}
// Tuple
var myTuple = ["Naoe", 42, true];
var mixed = ["John", 1, false];
myTuple[1] = 42;
// Objects
var myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
var ExampleObj = {
    prop1: "Naoe",
    prop2: true,
};
ExampleObj.prop1 = "Naoe";
var evh = {
    name: "Naoe",
    active: false,
    albums: [1984, 5150, "OU812"],
};
var jp = {
    name: "Adrian Naoe", // Adding a name property
    active: true,
    albums: ["I", "II", "IV"],
};
var greetGuitarist = function (guitarist) {
    if (guitarist.name) {
        return "Hello ".concat(guitarist.name.toUpperCase(), "!");
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to
//  JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
