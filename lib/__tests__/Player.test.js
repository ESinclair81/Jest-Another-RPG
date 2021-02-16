const Potion = require('/Users/soulprosinclair/Desktop/Assigns/Jest-Another-RPG/lib/Potion');

jest.mock('/Users/soulprosinclair/Desktop/Assigns/Jest-Another-RPG/lib/Potion');

console.log(new Potion());

const Player = require('/Users/soulprosinclair/Desktop/Assigns/Jest-Another-RPG/lib/Player');

test('creates a player object', () => {
    const player = new Player('Joyce');
  
    expect(player.name).toBe('Joyce');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
  );
    });


    //*    TEST TP RETIRVE PLAYER STATS AND DISPLAY *//
    test("gets player's stats as an object", () => {
        const player = new Player('Joyce');
      
        expect(player.getStats()).toHaveProperty('potions');
        expect(player.getStats()).toHaveProperty('health');
        expect(player.getStats()).toHaveProperty('strength');
        expect(player.getStats()).toHaveProperty('agility');
      });

      //*   TEST TO CHECK INVENTORY   *//

      test('gets inventory from player or returns false', () => {
        const player = new Player('Joyce');
      
        expect(player.getInventory()).toEqual(expect.any(Array));
      
        player.inventory = [];
      
        expect(player.getInventory()).toEqual(false);
      });


      //*   TEST TO GET PLAYERS HEALTH  *//

      test("gets player's health value", () => {
        const player = new Player('Dave');
      
        expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
      });
      
      
      //*   CHECK IF USER IS ALIVE    *//
      test('checks if player is alive or not', () => {
        const player = new Player('Dave');
      
        expect(player.isAlive()).toBeTruthy();
      
        player.health = 0;
      
        expect(player.isAlive()).toBeFalsy();
      });


      //* TEST REDUCE HEALTH  METHOD  *//
      test("subtracts from player's health", () => {
        const player = new Player('Dave');
        const oldHealth = player.health;
      
        player.reduceHealth(5);
      
        expect(player.health).toBe(oldHealth - 5);
      
        player.reduceHealth(99999);
      
        expect(player.health).toBe(0);
      });
