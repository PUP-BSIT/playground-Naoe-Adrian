var myCar = {
    plate_no: "ABC 1234",
    owner_name: "John Doe",
    speed: 50,
    printSpeed: function () {
        console.log("\n            THE CURRENT OF: ".concat(myCar.plate_no, "\n            IS : ").concat(myCar.speed, " ").concat(DistanceUnit.MILE, "\n        "));
    },
};
var janeDee = {
    full_name: "Jane Dee",
    birthday: new Date("2002-03-25"),
    speed: 6.5,
    printSpeed: function () {
        console.log("\n            FULL NAME:  ".concat(janeDee.full_name, "\n            BIRTHDAY:  ").concat(janeDee.birthday, "\n            SPEED:  ").concat(janeDee.speed, " ").concat(DistanceUnit.KILOMETER, "\n          "));
    },
};
var DistanceUnit;
(function (DistanceUnit) {
    DistanceUnit["KILOMETER"] = "KM";
    DistanceUnit["MILE"] = "M";
})(DistanceUnit || (DistanceUnit = {}));
function speedTest(contestant) {
    contestant.printSpeed();
}
speedTest(myCar);
speedTest(janeDee);
