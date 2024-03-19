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
  plate_no: "ABC 1234",
  owner_name: "John Doe",
  speed: 50,
  printSpeed() {
    console.log(`
            THE CURRENT OF: ${myCar.plate_no}
            IS : ${myCar.speed} ${DistanceUnit.MILE}
        `);
  },
};

const janeDee: Person = {
  full_name: "Jane Dee",
  birthday: new Date("2002-03-25"),
  speed: 6.5,
  printSpeed() {
    console.log(`
            FULL NAME:  ${janeDee.full_name}
            BIRTHDAY:  ${janeDee.birthday}
            SPEED:  ${janeDee.speed} ${DistanceUnit.KILOMETER}
          `);
  },
};

enum DistanceUnit {
  KILOMETER = "KM",
  MILE = "M",
}

type Contestant = Vehicle | Person;

function speedTest(contestant: Contestant) {
  contestant.printSpeed();
}

speedTest(myCar);
speedTest(janeDee);
