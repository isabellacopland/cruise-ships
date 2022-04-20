const Port = require('../src/Port.js');
const Ship = require('../src/cruise_ships.js')

describe('Port', () => {
    describe('with ships and a name', () => {
        let port;
        let ship;
        let titanic;
        let queenMary;

        beforeEach(() => {
            port = new Port('Dover');
            ship = jest.fn();
            titanic = jest.fn();
            queenMary = jest.fn();
        });

        it('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });

        it('has a name property', () => {
            expect(port.name).toBe('Dover');
        });

        it('can add a ship to the port', () => {
            port.addShip(ship);
            expect(port.ships).toContain(ship);
        });

        it('can remove the ship from the port', () => {
            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);

            expect(port.ships).toEqual([titanic]);
        });
    });
});