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
