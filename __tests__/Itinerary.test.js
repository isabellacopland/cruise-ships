const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Itinerary.js');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has a port property', () => {
        const dover = jest.fn();
        const calais = jest.fn();

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toStrictEqual([dover, calais]);
    });
});