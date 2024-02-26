// in JS è possibile assegnare ad una variabile un valore tra i tipi primitivi: string, number, boolean, undefined, null

// qualsiasi valore NON PRIMITIVO entra a far parte della categoria degli OGGETTI

// copiare una NON PRIMITIVA ci farà copiare solo la sua REFERENZA (indirizzo in memoria)

// un oggetto contiene un gruppo di proprietà espresse come chiave-valore e metodi che ne rappresentano le abilità, il tutto racchiuso da parentesi graffe {}

// al suo interno può contenere un numero potenzialmente illimitato di coppie chiave-valore e metodi

const obj = {}; // <-- NOTAZIONE LETTERALE di un oggetto, è una peculiarità di JavaScript

const dog = {
  breed: "Labrador",
  age: 2,
  bark: function () {
    // metodo dell'oggetto dog
    console.log("bau.");
  },
  angryBark: function () {
    console.log("WOOOOFFF!!!!");
  }
};

dog.bark();
dog.bark();
dog.angryBark();
dog.bark();

// document.body.innerHTML += dog;
console.log(dog.__proto__); // Object
console.log(dog.__proto__.__proto__); // null (non c'è niente più alto di Object)

console.log(dog.hasOwnProperty("age")); // hasOwnProperty è stato ereditato dal costruttore Object, lo possiamo usare per via del meccanismo interno
// che ha JavaScript: cercherà in prima battuta il metodo sul NOSTRO oggetto, se non lo troverà andrà a guardare nella sua catena prototipale.
// se trova un metodo chiamato con lo stesso nome attraverso la catena di prototipi, lo eseguirà come se fosse suo.

// STRING

const str = "Epicode";
console.log(str.__proto__); // String
console.log(str.__proto__.__proto__); // Object
console.log(str.__proto__.__proto__.__proto__); // null

// ARRAY
const a = [1, 2, 3, 4];
console.log(a.__proto__); // Array
console.log(a.__proto__.__proto__); // Object
console.log(a.__proto__.__proto__.__proto__); // null

console.log("ARRAY FROM", Array.from(a));

//FUNCTION
const fn = function () {};
console.log(fn.__proto__); // Function
console.log(fn.__proto__.__proto__); // Object
console.log(fn.__proto__.__proto__.__proto__); // null

const dynamicProp = "jump/height";

const cat = {
  // se le chiavi non rispecchiano lo standard "camelCase", occorrerà utilizzare gli apici anche per le proprietà
  "fur-type": "long and fluffy",
  "date.of.adoption": "01/01/2021",
  age: 3,
  [dynamicProp]: "3mt"
};

const semiProp1 = "jump";
const semiProp2 = "height";

console.log(cat);
console.log(cat["fur-type"]);
console.log(cat["date.of.adoption"]);
console.log(cat[semiProp1 + "/" + semiProp2]);

console.log(Object.keys(cat).length); // array di sole chiavi
console.log(Object.values(cat)); // array di soli valori
console.log(Object.entries(cat)); // array di array con coppie chiave, valore [[chiave, valore], [chiave, valore]]

const myArr = ["primo", "secondo", "terzo"];

// const primo = myArr[0]
// const secondo = myArr[1]
// const terzo = myArr[2]

// destrutturazione degli array
const [p, s, t] = myArr;

console.log(p);
console.log(s);
console.log(t);

const catEntries = Object.entries(cat);
console.log(catEntries);

// for (let i = 0; i < catEntries.length; i++) {
//   const subArr = catEntries[i];
//   console.log(subArr);
// }

// for (let subArr of catEntries) {
//   const [key, value] = subArr;

//   console.log(typeof key, typeof value);
// }

// metodo valido di clonazione di oggetto
let newObj = {};

for (let [key, value] of catEntries) {
  console.log(key, value);

  newObj[key] = value;
}

// metodo moderno di clonazione profonda (deep clone) di un oggetto
const clonedObj = structuredClone(cat); // structuredClone è un metodo nativo in JS
