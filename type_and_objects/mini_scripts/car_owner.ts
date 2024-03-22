enum DistanceUnit {
  KILOMETER = "KM",
  MILE = "M",
}

type Vehicle = {
  plate_no: string;
  owner_name: string;
  speed: number;
  printSpeed(): void;
};

type Person = {
  full_name: string;
  birthday: Date;
  speed: number;
  printSpeed(): void;
};

const myCar: Vehicle = {
  plate_no: "ABCD 1234",
  owner_name: "John Doe",
  speed: 50,
  printSpeed() {
    console.log(`
      THE CURRENT SPEED OF ${myCar.plate_no}
      IS ${myCar.speed} ${DistanceUnit.KILOMETER}
    `);
  },
};

const janeDee: Person = {
  full_name: "Jane Dee",
  birthday: new Date("2002-03-25"),
  speed: 6.5,
  printSpeed() {
    console.log(`
      THE CURRENT SPEED OF ${janeDee.full_name}
      IS ${janeDee.speed} ${DistanceUnit.MILE}
    `);
  },
};

type contestant = Person | Vehicle;

function speedTest(contestant: contestant): void {
  contestant.printSpeed();
}

speedTest(myCar);
speedTest(janeDee);
