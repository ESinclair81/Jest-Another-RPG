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

    test("gets player's stats as an object", () => {
        const player = new Player('Joyce');
      
        expect(player.getStats()).toHaveProperty('potions');
        expect(player.getStats()).toHaveProperty('health');
        expect(player.getStats()).toHaveProperty('strength');
        expect(player.getStats()).toHaveProperty('agility');
      });

      test('gets inventory from player or returns false', () => {
        const player = new Player('Joyce');
      
        expect(player.getInventory()).toEqual(expect.any(Array));
      
        player.inventory = [];
      
        expect(player.getInventory()).toEqual(false);
      });

