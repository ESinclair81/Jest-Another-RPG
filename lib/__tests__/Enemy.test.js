const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
  const enemy = new Enemy('goblin', 'sword');

  expect(enemy.name).toBe('goblin');
  expect(enemy.weapon).toBe('sword');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});


    //*   TEST TO GET ENEMY HEALTH  *//

    test("gets enemy's health value", () => {
        const enemy = new Enemy('goblin', 'sword');
      
        expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
      });
      
      
      //*   CHECK IF USER IS ALIVE    *//
      test('checks if player is alive or not', () => {
        const enemy = new Enemy('goblin', 'sword');
      
        expect(enemy.isAlive()).toBeTruthy();
      
        enemy.health = 0;
      
        expect(enemy.isAlive()).toBeFalsy();
      });


      //* TEST REDUCE HEALTH  METHOD  *//
      test("subtracts from player's health", () => {
        const enemy = new Enemy('goblin', 'sword');
        const oldHealth = enemy.health;
      
        enemy.reduceHealth(5);
      
        expect(enemy.health).toBe(oldHealth - 5);
      
        enemy.reduceHealth(99999);
      
        expect(enemy.health).toBe(0);
      });

      //*  TEST TO CHECK FOR DESCRIPTION OF ENEMY   *//
      test('gets a description of the enemy', () => {
        const enemy = new Enemy('goblin', 'sword');
      
        expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
        expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
      });
