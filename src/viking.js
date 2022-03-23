// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health; // todos los soliders tienen una propiedad que se llama 'health'
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  // receiveDamage(7). Tengo que restar 7 puntos a mi vida
  receiveDamage(damage) {
    this.health -= damage;
  }


}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength); // inicializar la clase padre
    this.name = name; // los Vikingos además tienen 'name'
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }

    return `${this.name} has died in act of combat`;

  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon { }

// War
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
