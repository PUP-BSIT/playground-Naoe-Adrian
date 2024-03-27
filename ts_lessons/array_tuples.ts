let stringArr: string[] = ["one", "hey", "Naoe"];
let guitars: (string | number)[] = ["Strat", "Les Paul", 5150];
let mixedData: (string | number | boolean)[] = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test: any[] = [];
let bands: string[] = [];
bands.push("Van Halen");

const arrays: any[][] = [stringArr, guitars, mixedData, test, bands];

for (let i = 0; i < arrays.length; i++) {
  console.log(`Array ${i + 1}:`, arrays[i]);
}

// Tuple
let myTuple: [string, number, boolean] = ["Naoe", 42, true];
let mixed: (string | number | boolean)[] = ["John", 1, false];
myTuple[1] = 42;

// Objects
let myObj: any;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const ExampleObj: { prop1: string; prop2: boolean } = {
  prop1: "Naoe",
  prop2: true,
};

ExampleObj.prop1 = "Naoe";

let evh: { name: string; active: boolean; albums: (string | number)[] } = {
  name: "Naoe",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: { name?: string; active: boolean; albums: string[] } = {
  name: "Adrian Naoe", // Adding a name property
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: { name?: string }): string => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};

console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to
//  JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D = 2,
  C = 3,
  B = 4,
  A = 5,
}

console.log(Grade.U);
