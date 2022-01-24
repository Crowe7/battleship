import Gameboard from "../gameboard";
import Player from "../players"
describe('Player Setup', () => {
    let gameboard: Gameboard
    let gameboardCPU: Gameboard
    let Computer: Player
    let Person: Player

    beforeEach(() => {
         gameboard = new Gameboard;
         gameboardCPU = new Gameboard;
         Computer = new Player("Computer");
         Person = new Player("Person");
    });

    test('can attack opponents ship', () => {
        gameboardCPU.placeShip([0,1], gameboardCPU.ships[4]);
        Person.attackOpponent(0, gameboardCPU);
        expect(gameboardCPU.board[0]).toEqual({Ship: gameboardCPU.ships[4], isSpotHit: true, position: 1})
    });

    test('cant perform invalid attack', () => {
        gameboardCPU.placeShip([0,1], gameboardCPU.ships[4]);
        Person.attackOpponent(0, gameboardCPU);
        expect( () => {Person.attackOpponent(0, gameboardCPU)}).toThrow(Error);
    });

    test('can attack at random', () => {
        Person.randomAttack(gameboardCPU);
        expect(gameboardCPU.board.filter((index: string) => index !== '').length).toBe(1);
    });
});