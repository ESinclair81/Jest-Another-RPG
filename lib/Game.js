const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

//*   PROPERTIES FOR GAME FUNCTION  *//

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    enemies = [
        
        this.enemies.push(new Enemy('goblin', 'sword')),
        this.enemies.push(new Enemy('orc', 'baseball bat')),
        this.enemies.push(new Enemy('skeleton', 'axe')),
        ]

    this.currentEnemy;
    this.player;
}

      //*   INITIALIZE GAME METHOD   *//
  Game.prototype.initializeGame = function() {
    
  
    //*  KEEP TRACK OF WHICH ENEMY OBJECT IS FIGHTING   *//
        this.currentEnemy = this.enemies[0];
            //*    ADD INQUIRER TO TRACK PLAYER NAME   *//
            
inquirer
.prompt({
  type: 'text',
  name: 'name',
  message: 'What do they call you?'
})
// destructure name from the prompt object
.then(({ name }) => {
  this.player = new Player(name);

  // test the object creation
  this.startNewBattle();
    console.log(this.currentEnemy, this.player);
    console.log('Your stats are as follows:');
    console.table(this.player.getStats());
    console.log(this.currentEnemy.getDescription());
    return this.battle();

});


//*    START NEW BATTLE FUNCTION    *//
    Game.prototype.startNewBattle = function() {
        if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
        } else {
        this.isPlayerTurn = false;
        }
    
  };

  //*   BASIC BATTLE METHOD TEMPLATE *//
  Game.prototype.battle = function() {
        if (this.isPlayerTurn) {
            inquirer
              .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ['Attack', 'Use potion']
              })
              .then(({ action }) => {
                if (action === 'Use potion') {
                  // follow-up prompt will go here
                } else {
                  const damage = this.player.getAttackValue();
                  this.currentEnemy.reduceHealth(damage);
          
                  console.log(`You attacked the ${this.currentEnemy.name}`);
                  console.log(this.currentEnemy.getHealth());
                }
              });
          
            } 
        else {
        const damage = this.currentEnemy.getAttackValue();
        this.player.reduceHealth(damage);
    
        console.log(`You were attacked by the ${this.currentEnemy.name}`);
        console.log(this.player.getHealth());
        }
    }
  };



module.exports = Game;