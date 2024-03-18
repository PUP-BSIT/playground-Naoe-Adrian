enum DistanceUnit {
  KILOMETER = "km",
  MILE = "m",
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
  plate_no: "NBA 1234",
  owner_name: "Adrian Naoe",
  speed: 50,
  printSpeed() {
    console.log(
      `The current speed of ${this.plate_no} is ${this.speed} ${DistanceUnit.MILE}`
    );
  },
};

const aNaoe: Person = {
  full_name: "Adrian Bico naoe",
  birthday: new Date("2003-24-25"),
  speed: 6.5,
  printSpeed() {
    console.log(
      `The current speed of ${this.full_name} is ${this.speed} ${DistanceUnit.KILOMETER}`
    );
  },
};

type Contestant = Person | Vehicle;

function speedTest(contestant: Contestant): void {
  contestant.printSpeed();
}

speedTest(myCar);
speedTest(aNaoe);
