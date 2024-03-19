var Diet;
(function (Diet) {
    Diet["CARNIVORE"] = "Representing carnivorous animals";
    Diet["HERBIVORE"] = "Representing herbivorous animals";
    Diet["OMNIVORE"] = "Representing omnivorous animals";
})(Diet || (Diet = {}));
var lion = {
    species: "Lion",
    name: "Simba",
    age: 5,
    displayDetails: function () {
        console.log("ROAR LIONS DIET ".concat(Diet.CARNIVORE));
    },
};
var jungle = {
    type: "Jungle",
    location: "Amazon Rainforest",
    temperature: 25,
    displayDetails: function () {
        console.log("\n            HABITAT TYPE: ".concat(jungle.type, "\n            LOCATION: ").concat(jungle.location, "\n            TEMPERATURE: ").concat(jungle.temperature, "\n        "));
    },
};
function interactWithHabitat(zooitem) {
    zooitem.displayDetails();
}
interactWithHabitat(lion);
interactWithHabitat(jungle);
