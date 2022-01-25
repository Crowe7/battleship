import {Computer, Human} from "../game";

test('computer places all ships', () => {
    Computer.cpuPlaceShips();
    expect(Computer.board.shipsLeft).toBe(5);
});

