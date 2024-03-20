var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["KILOMETER"] = "KM";
    DistanceUnit["MILE"] = "M";
})(DistanceUnit || (DistanceUnit = {}));
var myCar = {
    plate_no: "ABC 123",
    owner_name: "ADRIAN NAOE",
    speed: 50,
    printSpeed: function () {
        console.log("\n   THE CURRENT SPEED OF ".concat(myCar.plate_no, " IS ").concat(myCar.speed));
    },
};
var janeDee = {
    full_name: "Jane Dee",
    birthday: new Date("2003-20-03"),
    speed: 6.5,
    printSpeed: function () {
        console.log("   THE CURRENT SPEED OF ".concat(janeDee.full_name, " IS ").concat(janeDee.speed, "\n    "));
    },
};
function speedTest(contestant) {
    contestant.printSpeed();
}
speedTest(myCar);
speedTest(janeDee);
