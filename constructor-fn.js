// gli oggetti in JS sono semplici da realizzare --> notazione lettarele: const nomevar = {}
// fin tanto che ne creiamo pochi...
// il problema arriva quando abbiamo l'esigenza di crearne tanti "in serie", magari anonimi, indipendenti e con le stesse proprietà

const method = function () {
  console.log("THIS", this);
  console.log("Ciao sono, " + this.name + " " + this.surname);
};

const person = {
  name: "Gianni",
  surname: "Morandi",
  sayHello: method
};

const person2 = {
  name: "Maria",
  surname: "Rossi",
  sayHello: method
};

// per aiutarci a scrivere oggetti in serie e con la stessa struttura
// entrano in gioco le funzioni costruttrici (o constructur functions)

// vanno create con una nomeclatura in PascalCase !== camelCase

// PascalCase ==> con tutte le iniziali maiuscole (inclusa la prima)

// SOLO le funzioni classiche possono essere anche costruttrici (NON LE ARROW!)

// la funzione costruttrice ci genererà un NUOVO OGGETTO per ogni volta che la avviamo

// servirà creare uno "stampo" che creerà tanti oggetti simili che chiameremo ISTANZE

const Person = function () {
  this.name = "";
  this.surname = "";
  this.email = "";
  this.address = "";
  this.showName = function () {
    console.log(this.name);
  };
};

// una funzione costruttrice va usata solo e solamente con una chiave "new" prima della sua chiamata
// il nome in PascalCase comunica questa esigenza dell'utilizzo della keyword new
const giuseppeVerdi = new Person();
console.log(giuseppeVerdi);

giuseppeVerdi.name = "Giuseppe";
giuseppeVerdi.surname = "Verdi";

console.log(giuseppeVerdi);

const DynamicPerson = function (_name, _surname, _email, _address, _showName) {
  this.name = _name;
  this.lastName = _surname;
  this.email = _email;
  this.address = _address;
  this.showName = _showName;
};

const marioSuper = new DynamicPerson("Mario", "Super", "mario@super.com", "Yoshi Island", function () {
  console.log(this.name + " " + this.lastName);
});

const warioSuper = new DynamicPerson("Wario", "Super", "wario@super.com", "Wario Land", function () {
  console.log(this.name + " " + this.lastName);
});

console.log(marioSuper);
console.log(warioSuper);

DynamicPerson.prototype.sayHello = function () {
  console.log("hello boys and girls, I'm " + this.name + " " + this.lastName);
};

marioSuper.sayHello();
warioSuper.sayHello();

console.log(marioSuper.hasOwnProperty("email"));
