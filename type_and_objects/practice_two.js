var Diet;
(function (Diet) {
    Diet["CARNIVORE"] = "Representing CARNIVORE animals";
    Diet["HEBIVORE"] = "Representing HEBIVORE animals";
    Diet["OMNIVORE"] = "Representing OMNIVORE animals";
})(Diet || (Diet = {}));
var lion = {
    species: "Lion",
    name: "Simba",
    age: 5,
    displayDetails: function () {
        console.log("ROAR");
    },
};
var jungle = {
    type: "Jungle",
    location: "Amazaon Rain Forest",
    temperature: 25,
    displayDetails: function () {
        console.log("\n      TYPE: ".concat(jungle.type, "\n      LOCATION: ").concat(jungle.location, "\n      TEMPERATURE: ").concat(jungle.temperature, "\n      DIET:  ").concat(Diet.CARNIVORE, "\n    "));
    },
};
function interactWithHabitat(catcher, catcher1) {
    catcher.displayDetails();
    catcher1.displayDetails();
}
interactWithHabitat(lion, jungle);
