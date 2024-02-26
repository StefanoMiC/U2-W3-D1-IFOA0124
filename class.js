// con ES6 in JavaScript si sono aggiunte le classi!
// questo ha reso di più facile adozione il linguaggio anche a sviluppatori provenienti da altri linguaggi

class Person {
  // qui dentro definiamo la classe...
  // a partire dal suo costruttore
  constructor(_name, _surname, _email, _address) {
    this.name = _name;
    this.surname = _surname;
    this.email = _email;
    this.address = _address;
  }
}

const marioRossi = new Person("Mario", "Rossi", "mario.rossi@gmail.com", "via delle rose 42");

console.log(marioRossi);

class House {
  constructor(squareMeters, numberOfRooms) {
    this.squareMeters = squareMeters;
    this.numberOfRooms = numberOfRooms;
  }

  generateReport() {
    return `Ciao! sono una casa isolata e ho queste dimensioni: ${this.squareMeters}mq e ho ${this.numberOfRooms} stanze`;
  }
}

const bigHouse = new House(500, 12);
const tinyHouse = new House(50, 2);

console.log(bigHouse);
console.log(tinyHouse);

console.log(bigHouse.generateReport());
console.log(tinyHouse.generateReport());

class Developer extends Person {
  constructor(_name, _surname, _email, _address, _knownLanguages) {
    // super invoca il costruttore della classe da cui Developer si estende (Person)
    // Person è definita la SUPERCLASSE di Developer
    super(_name, _surname, _email, _address);
    this.knownLanguages = _knownLanguages;
  }
}

const stefanoDev = new Developer("Stefano", "Miceli", "stefano@gmail.com", "via della faula 45", ["CSS", "JS", "React", "TS"]);
console.log(stefanoDev);

class SeniorDeveloper extends Developer {
  constructor(_name, _surname, _email, _address, _knownLanguages, _specialty) {
    super(_name, _surname, _email, _address, _knownLanguages);
    this.specialty = _specialty;
  }

  showOff() {
    console.log("I'm " + this.name + " and I am an experienced developer! My specialty is " + this.specialty + "!!!");
  }
}

const stefanoSeniorDev = new SeniorDeveloper("Stefano", "Miceli", "stefano@gmail.com", "via della faula 45", ["CSS", "JS", "React", "TS"], "React");
stefanoSeniorDev.showOff();
