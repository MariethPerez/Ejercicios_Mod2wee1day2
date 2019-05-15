class Animal {
  energy = 100;

  constructor(specie) {
    this.specie = specie;
  }

  eat(food) {
    console.log("Eating %s", food.name);
    this.energy += food.energy;
  }
}

const animal = new Animal();

animal.eat({ name: "ricocan", energy: -5 });
