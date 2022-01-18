import Ship from "./ships";
interface ShipInterface {
    length: number,
    name: string,
}
class Gameboard {
    board: any[] | Function
    // takeAttack(location: number[]): boolean have this contain both hit and miss methods 
    ships: ShipInterface[] | Function


    constructor() {
        this.board = this.#makeBoard();
        this.ships = this.#makeShips();

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
    #makeShips() {
        let ships = []

        let Carrier = new Ship(5, 'Carrier');
        ships.push(Carrier);
        let Battleship = new Ship(4, 'Battleship');
        ships.push(Battleship);
        let Destroyer = new Ship(3, 'Destroyer');
        ships.push(Destroyer);
        let Submarine = new Ship(3, 'Submarine');
        ships.push(Submarine)
        let PatrolBoat = new Ship(2, 'Patrol Boat');
        ships.push(PatrolBoat);

        return ships

    }

}
// on the board when a ship is put in an index have that index contain both what part of the ship it is and the ship variable itself
/* checkIfIndexIsEmpty(index: number): boolean {
        for
} */
export default Gameboard