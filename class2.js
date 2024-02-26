class Computer {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    return "Il computer è un: " + this.brand;
  }
}

const xps = new Computer("Dell");
const surface = new Computer("Microsoft");
const macbook = new Computer("Apple");

console.log(xps.showBrand());
console.log(surface.showBrand());
console.log(macbook.showBrand());

class ComputerModel extends Computer {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  showComplete() {
    return super.showBrand() + ", con modello: " + this.model;
  }
}

const xps17 = new ComputerModel("Dell", "XPS 17");

console.log(xps17);
