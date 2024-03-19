enum Diet {
  CARNIVORE = "Representing CARNIVORE animals",
  HEBIVORE = "Representing HEBIVORE animals",
  OMNIVORE = "Representing OMNIVORE animals",
}

type Animal = {
  species: string;
  name: string;
  age: number;
  displayDetails(): void;
};

type Habitat = {
  type: string;
  location: string;
  temperature: number;
  displayDetails(): void;
};

const lion: Animal = {
  species: "Lion",
  name: "Simba",
  age: 5,
  displayDetails() {
    console.log(`ROAR`);
  },
};

const jungle: Habitat = {
  type: "Jungle",
  location: "Amazaon Rain Forest",
  temperature: 25,
  displayDetails() {
    console.log(`
      TYPE: ${jungle.type}
      LOCATION: ${jungle.location}
      TEMPERATURE: ${jungle.temperature}
      DIET:  ${Diet.CARNIVORE}
    `);
  },
};

type Catcher = Animal | Habitat;

function interactWithHabitat(catcher: Catcher, catcher1: Catcher) {
  catcher.displayDetails();
  catcher1.displayDetails();
}

interactWithHabitat(lion, jungle);
