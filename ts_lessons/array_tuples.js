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
