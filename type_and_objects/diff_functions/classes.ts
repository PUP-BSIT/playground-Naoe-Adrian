//Basic Class, Larger Class, Visibility Modifiers
class Coder {
  secondLang!: string;
  constructor(
    public name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Naoe = new Coder("Adrian", "Hip-Hop", 20);
console.log(Naoe.getAge());

//Extends for subclasses
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Yumul = new WebDev("Windows", "Hev", "K-Pop", 20);
console.log(Yumul.getLang());
//////////////////////////////////////////////////////
//Implementation of Interfaces
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Mark", "Guitar");
console.log(Page.play("strums"));
////////////////////////////////////////////////////
//Static Class Members
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Go = new Peeps("Naoe");
const Galope = new Peeps("Galope");

//Id's
console.log(Go.id);
console.log(Galope.id);
console.log(Peeps.count);
///////////////////////////////////////////
//Getters and Setters
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public;
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of things.");
  }
}

const myBands = new Bands();
myBands.data = ["Nirvana", "E-Heads"];
console.log(myBands.data);
myBands.data = [...myBands.data, "Parokya Ni Edgar"];
console.log(myBands.data);
myBands.data = ["Muni-Muni"];
console.log(myBands.data);
