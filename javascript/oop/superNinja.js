class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}!`);
    }

    showStats() {
        console.log(`Ninja Stats\n==============`)
        console.log(`Name: ${this.name}\nStrength: ${this.strength}`)
        console.log(`Speed: ${this.speed}\nHealth: ${this.health}`)
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank a bottle of sake and now has ${this.health} Health!`);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    showStats() {
        super.showStats();
        console.log(`Wisdom: ${this.wisdom}`)
    }

    speakWisdom() {
        super.drinkSake();
        console.log(`\"A week of coding can save you a few hours of planning.\" -${this.name}`)
    }
}

//! Tests
const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
console.log()
superSensei.speakWisdom();
console.log()
superSensei.showStats();