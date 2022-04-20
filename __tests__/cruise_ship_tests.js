const Ship = require('../src/cruise_ships.js')
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let dover;
        let calais;
        let itinerary;
        let ship; 

        beforeEach(() => {
            dover = new Port('Dover');
            calais = new Port('Calais');
            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
        });

        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it('has a starting port', () => {
            expect(ship.currentPort).toBe(dover);
        });

        it('gets added to port on initiation', () => {
            expect(dover.ships).toContain(ship);
        });

        it('can set sail', () => {
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
            expect(dover.ships).not.toContain(ship);
        });

        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toBe(calais);
            expect(calais.ships).toContain[ship];
        });
        
        it('can\'t sail further than its itinerary', () => {
            ship.setSail();
            ship.dock();
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
    });
});


