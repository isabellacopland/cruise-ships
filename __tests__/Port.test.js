const Port = require('../src/Port.js');
const Ship = require('../src/cruise_ships.js')

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name property', () => {
        const port = new Port('Dover');

        expect(port.name).toBe('Dover');
    });
})

describe('addShip', () => {
    it('can add a ship to the port', () => {
    const port = new Port('Dover');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
    });
});

describe('removeShip', () => {
    it('can remove the ship from the port', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};

   port.addShip(titanic);
   port.addShip(queenMary);
   port.removeShip(queenMary);

   expect(port.ships).toEqual([titanic]);
    });
});