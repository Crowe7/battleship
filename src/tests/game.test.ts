import {Computer, Human} from "../game";

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