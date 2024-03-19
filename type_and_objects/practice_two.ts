enum Diet {
  CARNIVORE = "Representing carnivorous animals",
  HERBIVORE = "Representing herbivorous animals",
  OMNIVORE = "Representing omnivorous animals",
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
    console.log(`
          ROAR LIONS DIET ${Diet.CARNIVORE}`);
  },
};

const jungle: Habitat = {
  type: "Jungle",
  location: "Amazon Rainforest",
  temperature: 25,
  displayDetails() {
    console.log(`
            HABITAT TYPE: ${jungle.type}
            LOCATION: ${jungle.location}
            TEMPERATURE: ${jungle.temperature}
        `);
  },
};

type ZooItem = Animal | Habitat;

function interactWithHabitat(zooitem: ZooItem): void {
  zooitem.displayDetails();
}

interactWithHabitat(lion);
interactWithHabitat(jungle);
