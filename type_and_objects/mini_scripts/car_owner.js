var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["KILOMETER"] = "KM";
    DistanceUnit["MILE"] = "M";
})(DistanceUnit || (DistanceUnit = {}));
var myCar = {
    plate_no: "ABCD 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed: function () {
        console.log("\n      THE CURRENT SPEED OF ".concat(myCar.plate_no, "\n      IS ").concat(myCar.speed, " ").concat(DistanceUnit.KILOMETER, "\n    "));
    },
};
var janeDee = {
    full_name: "Jane Dee",
    birthday: new Date("2002-03-25"),
    speed: 6.5,
    printSpeed: function () {
        console.log("\n      THE CURRENT SPEED OF ".concat(janeDee.full_name, "\n      IS ").concat(janeDee.speed, " ").concat(DistanceUnit.MILE, "\n    "));
    },
};
function speedTest(contestant) {
    contestant.printSpeed();
}
speedTest(myCar);
speedTest(janeDee);
