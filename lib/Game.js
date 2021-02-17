const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

//*   PROPERTIES FOR GAME FUNCTION  *//

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

      //*   INITIALIZE GAME METHOD   *//
  Game.prototype.initializeGame = function() {
  
    //*  KEEP TRACK OF WHICH ENEMY OBJECT IS FIGHTING   *//
        this.currentEnemy = this.enemies[0];
        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('obeah man', 'cricket bat'));
        this.enemies.push(new Enemy('jumbee', 'cutlass'));
    };

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
  console.log(this.currentEnemy, this.player);
  }
);

module.exports = Game;