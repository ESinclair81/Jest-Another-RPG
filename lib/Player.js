// const Potion = require('/Users/soulprosinclair/Desktop/Assigns/Jest-Another-RPG/lib/Potion')
const Potion = require('./Potion')
const Character = require('./Character');

class Player extends Character {
  constructor(name = '') {
    // call parent constructor here:
    super(name);
    this.inventory - [new Potion('health'), new Potion()];
  }

  //   this.name = name;

  //   this.health = Math.floor(Math.random() * 10 + 95);
  //   this.strength = Math.floor(Math.random() * 5 + 7);
  //   this.agility = Math.floor(Math.random() * 5 + 7);

  //   this.inventory = [new Potion('health'), new Potion()];
  // }


// function Player(name = '') {
//     this.name = name;
  
//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);
  
//     this.inventory = [new Potion('health'), new Potion()];
//   }
  

//* IHERIT PROTOTYPE METHODS FROM CHARACTER *//
// Player.prototype = Object.create(Character.prototype);

  //*  GET STATS METHOD  *//
  // Player.prototype.getStats = function() {
  //   return {
  //     potions: this.inventory.length,
  //     health: this.health,
  //     strength: this.strength,
  //     agility: this.agility
  //   };
  // };
  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }

  //*   GET INVENTORY METHOD *//
  // Player.prototype.getInventory = function() {
  //   if (this.inventory.length) {
  //     return this.inventory;
  //   }
  //   return false;
  // };
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  //*   GET HEALTH METHOD *//
  // Player.prototype.getHealth = function() {
  //   return `${this.name}'s health is now ${this.health}!`;
  // };


  //* IS ALIVE METHOD  *//
  // Player.prototype.isAlive = function() {
  //   if (this.health === 0) {
  //     return false;
  //   }
  //   return true;
  // };


  //*   REDUCE HEALTH METHOD  *//
  // Player.prototype.reduceHealth = function(health) {
  //   this.health -= health;
  //   if (this.health < 0) {
  //     this.health = 0;
  //   }
  // };


  //*   GET PLAYER ATTACK VALUE METHOD  *//
  // Player.prototype.getAttackValue = function() {
  //   const min = this.strength - 5;
  //   const max = this.strength + 5;
  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  //*   ADD POTION METHOD  *//
  // Player.prototype.addPotion = function(potion) {
  //   this.inventory.push(potion);
  // };
  addPotion(potion) {
    this.inventory.push(potion);
  }

  

  //*  USE POTION METHOD   *//
  // Player.prototype.usePotion = function(index) {
  //   const potion = this.getInventory().splice(index, 1)[0];
  
  //   switch (potion.name) {
  //     case 'agility':
  //       this.agility += potion.value;
  //       break;
  //     case 'health':
  //       this.health += potion.value;
  //       break;
  //     case 'strength':
  //       this.strength += potion.value;
  //       break;
  //   }
  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
      }
    }

    
};
  
  module.exports = Player;