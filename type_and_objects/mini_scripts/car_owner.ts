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
  plate_no: "ABC 123",
  owner_name: "ADRIAN NAOE",
  speed: 50,
  printSpeed() {
    console.log(`
   THE CURRENT SPEED OF ${myCar.plate_no} IS ${myCar.speed}`);
  },
};

const janeDee: Person = {
  full_name: "Jane Dee",
  birthday: new Date("2003-20-03"),
  speed: 6.5,
  printSpeed() {
    console.log(`   THE CURRENT SPEED OF ${janeDee.full_name} IS ${janeDee.speed}
    `);
  },
};

type Contestant = Person | Vehicle;

function speedTest(contestant: Contestant): void {
  contestant.printSpeed();
}

speedTest(myCar);
speedTest(janeDee);
