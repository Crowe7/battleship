import {Computer, Human, endGame, attack, returnWhoseTurn, isPlayerBoardsSetup} from "../game";
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

test('computer attacks after player', () => {
    attack(0);
    if(returnWhoseTurn() === 2) {
        attack(0);
    }
    expect(Human.board.board.filter((index: string) => index != '')).toEqual(['miss']);
});

test('player can place correct ship', () => {
    Human.placeShip([0,1,2,3,4]);
    expect(Human.board.board[0].Ship.name).toEqual('Carrier');
});

test('player can place ships in correct order', () => {
    Human.placeShip([0,1,2,3,4]);
    Human.placeShip([20,21,22,23]);
    expect(Human.board.board[20].Ship.name).toEqual('Battleship');
});

test('player can attack Computer', () => {
    Human.humanAttack(0);
    expect(Computer.board.board[0]).toEqual('miss');
});

test('player can change name', () => {
    Human.changePlayerName('Jacob');
    expect(Human.player.name).toEqual('Jacob');
});

test('game reports winner', () => {
    Human.placeShip([0,1,2,3,4]);
    expect(endGame()).toEqual('Computer');
});

test('checks if player board is setup', () => {
    Human.board.placeAllShipsRandomly();
    expect(isPlayerBoardsSetup()).toBe(true);
});