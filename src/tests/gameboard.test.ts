import Gameboard from "../gameboard";

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
});