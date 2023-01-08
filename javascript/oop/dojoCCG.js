//? Dojo Collectible Card Game

//TODO: Implement Card class
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    showCard(){
        console.log(`====================||====================`) 
        console.log(`💎: ${this.cost}`);
    }
}

//TODO: Implement Unit class that extends Card
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if( target instanceof Unit ) {
            console.log(`\"${this.name}\" attacked \"${target.name}\"!\n`);
            this.showUnit();
            target.showUnit();
            target.res -= this.power;
            console.log(`Updated Card:\n`);
            target.showUnit();
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

    showUnit(){
        super.showCard();
        console.log(`👥: ${this.name}`);
        console.log(`⚔️: ${this.power} power`)
        console.log(`🛡️: ${this.res} resilience`)
        console.log(`====================||====================\n`) 
    }
}

//TODO: Implement Effect class that extends Card
class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play(target) {
        if( target instanceof Unit ) {
            console.log(`\"${this.name}\" was played on \"${target.name}\"!\n`);
            this.showEffect();
            target.showUnit();
            this.stat === "res" ? target.res += this.mag : target.power += this.mag;
            console.log(`Updated Card:\n`);
            target.showUnit();
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

    showEffect(){
        super.showCard();
        console.log(`🌀: ${this.name}`);
        console.log(`Text: ${this.text}`)
        console.log(`====================||====================\n`) 
    }
}

//!============/
//! Duel Zone  /
//!============/

console.log(`Turn 1:\n`);
// Turn 1: Make an instance of "Red Belt Ninja"
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
// Turn 1: Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const effect1 = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3.", "res", 3);
effect1.play(unit1);
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>\n`);

console.log(`Turn 2:\n`);
// Turn 2: Make an instance "Black Belt Ninja"
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);
// Turn 2: Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
const effect2 = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2.", "res", -2);
effect2.play(unit1);
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>\n`);

console.log(`Turn 3:\n`);
// Turn 3: Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
const effect3 = new Effect("Pair Programming", 3, "Increase target's power by 2.", "power", 2);
effect3.play(unit1);
// Turn 3: "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
unit1.attack(unit2);
console.log(`~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>~>\n`);
