import Ship from "../ships";

describe('Ship', () => {
    let ship: Ship

    beforeEach(() => {
         ship = new Ship(2, 'sub');
    });

    test('sets length', () => {
        expect(ship.length).toBe(2);
    });

    test('object is made correct', () => {
        expect(ship).toEqual ({
            hit: [],
            length: 2,
            name: 'sub',
        })
    });

    test('can update hit array', () => {
        expect(ship.hitShip(1)).toEqual([1]);
    });

    test('can hit multiple times', () => {
        ship.hit = [2];
        expect(ship.hitShip(1)).toEqual([2,1]);
    });

    test('cant hit same spot', () => {
        ship.hit = [1];
        expect(ship.hitShip(1)).toEqual([1]);
    });

    test('sinks when all parts are hit', () => {
        ship.hit = [1,2];
        expect(ship.isSunk()).toBe(true);
    });
    
});