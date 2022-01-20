import Gameboard from "../gameboard";
import Ship from "../ships"

describe('Gameboard', () => {
    let gameboard: any

    beforeEach(() => {
         gameboard = new Gameboard
    });

    test('makes board', () => {
        expect(gameboard.board.length).toBe(100);
    });

    test('has each boat', () => {
        expect(gameboard.ships.length).toBe(5);
    });

    test('can log missed shot', () => {
        expect(gameboard.takeAttack(0)).toEqual('miss');
    });

    test('doesnt allow same shot twice', () => {
        gameboard.takeAttack(0);
        expect(gameboard.takeAttack(0)).toEqual('invalid attack');
    });

    test('can place valid ship', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        expect(gameboard.board.filter((index: string) => index !== '')). toEqual([{Ship: ship, isSpotHit: false, position: 1}, {Ship: ship, isSpotHit: false, position: 2}]);
    });

    test('doesnt allow ship smaller than index given', () => {
        let ship = new Ship(2, 'sub');
        expect( () => {gameboard.placeShip([0], ship)}).toThrow(Error);
    });

    test('doesnt allow ship larger than index given', () => {
        let ship = new Ship(2, 'sub');
        expect( () => {gameboard.placeShip([0], ship)}).toThrow(Error);
    });
    // for testing random number placement. just test that the random numbers that it wouod put out all would align properly on the grid ie [1,2,3] not [9,10,11]
    // pass in ships length for that
    // test placing od ships by feeding the place ship function specified cordiantes and the ship in question and make sure that the output indexes match what they should be


});