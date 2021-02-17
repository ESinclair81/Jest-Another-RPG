const Potion = require('./Potion');
const Character = require('./Character');

// function Enemy(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
//   this.potion = new Potion();

//   this.health = Math.floor(Math.random() * 10 + 85);
//   this.strength = Math.floor(Math.random() * 5 + 5);
//   this.agility = Math.floor(Math.random() * 5 + 5);
// }

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);
        // this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();
  }

//****** THE FOLLOWING HASHED SECTION IS REPLECED BY const CHARACTER IMPORT AT TOP  *****/
//* GET HEALTH METHOD  *//
// Enemy.prototype.getHealth = function() {
//     return `The ${this.name}'s health is now ${this.health}!`;
//   };


//* IS ALIVE METHOD  *//
//   Enemy.prototype.isAlive = function() {
//     if (this.health === 0) {
//       return false;
//     }
//     return true;
//   };


//*  GET ATTACK VALUE METHOD  *//
//   Enemy.prototype.getAttackValue = function() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
//   };


//*  REDUCE HEALTH METHOD  *//
//   Enemy.prototype.reduceHealth = function(health) {
//     this.health -= health;

//     if (this.health < 0) {
//       this.health = 0;
//     }
//   }


//* INHERIT PROTOTYPE METHODS FROM CHARACTER  *//
// Enemy.prototype = Object.create(Character.prototype);

//   *    GET ENEMY DESCRIPTION METHOD  *//
 getDescription() {
    return `A ${this.name} holding a ${this.weapon} is in your face...and looking VEX!`;
  }
}
module.exports = Enemy;