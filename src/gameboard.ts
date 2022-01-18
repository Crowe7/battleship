import Ship from "./ships";
interface ShipInterface {
    length: number,
    name: string,
}
class Gameboard {
    board: any[] | Function
    // takeAttack(location: number[]): boolean
    ships: ShipInterface[]

    constructor() {
        this.board = this.#makeBoard();
    }
    #makeBoard(): string[] {
        let board: string[] = []
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                board.push('');
            }
        }
        return board
    }

}
// on the board when a ship is put in an index have that index contain both what part of the ship it is and the ship variable itself

export default Gameboard