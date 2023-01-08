class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}!\n`);
    }

    showStats() {
        console.log(`Ninja Stats\n==============`)
        console.log(`Name: ${this.name}\nStrength: ${this.strength}`)
        console.log(`Speed: ${this.speed}\nHealth: ${this.health}\n`)
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank a bottle of sake and now has ${this.health} Health!\n`);
    }
}

//! Tests
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();