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

