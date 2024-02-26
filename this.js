// la keyword THIS nel contesto di un METODO (funzione legata ad una proprietà di oggetto) acquisisce il riferimento all'oggetto di appartenenza

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

person.sayHello();
person2.sayHello();

// il this usato su una funzione qualunque acqusirà come valore quello dell'oggetto globale (perché l'ambito di esecuzione è differente)
function anyFn() {
  console.log("THIS: ANY FN", this);
}

anyFn();

const object1 = {
  name: "Stefano",
  surname: "Miceli",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  myMethod: function () {
    console.log("THIS object1:", this);

    // const innerFn = function () {
    //   console.log(this);
    //   console.log("Ciao mi chiamo " + this.name + " " + this.surname);
    // }.bind(this); // in questo modo sovrascrivo il this di base che avrebbe avuto Window come valore, e lo sovrascrivo con il this attuale in questo contesto
    // // ovvero object1

    // const innerFn = () => {
    //   console.log(this);
    //   console.log("Ciao mi chiamo " + this.name + " " + this.surname);
    // }; // una arrow function EREDITA automaticamente il this dal suo contesto lessicale (lexical context) ovvero il contesto in cui è scritta
    // innerFn();

    // this.skills.forEach(skill => {
    //   console.log(this);
    //   console.log("Ciao mi chiamo " + this.name + " " + this.surname + " e sono specializzato in: " + skill);
    // });

    // la funzione arrow ci permette di avere già il this del contesto esterno che è quello giusto, così quando questa funzione si eseguirà avrà già object1 come valore del this

    setTimeout(() => {
      console.log("Ciao mi chiamo " + this.name + " " + this.surname);

      const newArrow = () => console.log("inner fn: ", this.name);
      newArrow();
    }, 1000);
  }
};

// ESEMPIO DI UTILIZZO DI METODO SBAGLIATO
// da prestare attenzione a NON CREARE un metodo inizialmente con una arrow function, che, ereditando il this dal contesto esterno,
// ci farebbe già uscire dal contesto dell'oggetto di appartenenza
const object2 = {
  name: "Alessandro",
  myMethod: () => {
    // un metodo andrebbe sempre creato con una funzione classica function(){}
    console.log("THIS", this); // Window

    console.log("name", "il mio nome è " + this.name); // undefined, come se fosse Window.name
  }
};
