import {Computer, Human} from "../game";
import Gameboard from "../gameboard";

beforeEach( () => {
    Human.board = new Gameboard
    Computer.board = new Gameboard
});


test('computer places all ships', () => {
    Computer.cpuPlaceShips();
    expect(Computer.board.shipsLeft).toBe(5);
});

test('computer can attack player', () => {
    Computer.cpuAttack();
    expect(Human.board.board.filter((index: string) => index != '')).toEqual(['miss'])
});

test('computer trys attacking until an attack lands', () => {
    for(let i = 1; i < Human.board.board.length; i++) {
        Human.board.board[i] = 'miss';
    }
    Computer.cpuAttack();
    expect(Human.board.board.filter((index: string) => index != 'miss')).toEqual([]);
});

test('player can place correct ship', () => {
    Human.placeShip([0,1,2,3,4]);
    expect(Human.board.board[0].Ship.name).toEqual('Carrier');
});

test('player can place ships in correct order', () => {
    Human.placeShip([0,1,2,3,4]);
    Human.placeShip([10,11,12,13]);
    expect(Human.board.board[10].Ship.name).toEqual('Battleship');
});

test('player can attack Computer', () => {
    Human.humanAttack(0);
    expect(Computer.board.board[0]).toEqual('miss');
});