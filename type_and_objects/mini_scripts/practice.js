var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["KILOMETER"] = "km";
    DistanceUnit["MILE"] = "m";
})(DistanceUnit || (DistanceUnit = {}));
var myCar = {
    plate_no: "NBA 1234",
    owner_name: "Adrian Naoe",
    speed: 50,
    printSpeed: function () {
        console.log("The current speed of ".concat(this.plate_no, " is ").concat(this.speed, " ").concat(DistanceUnit.MILE));
    },
};
var aNaoe = {
    full_name: "Adrian Bico naoe",
    birthday: new Date("2003-24-25"),
    speed: 6.5,
    printSpeed: function () {
        console.log("The current speed of ".concat(this.full_name, " is ").concat(this.speed, " ").concat(DistanceUnit.KILOMETER));
    },
};
function speedTest(contestant) {
    contestant.printSpeed();
}
speedTest(myCar);
speedTest(aNaoe);
