import Ship from "./ships";
interface ShipInterface {
    length: number,
    name: string,
}
class Gameboard {
    board: any | Function
    // takeAttack(location: number[]): boolean have this contain both hit and miss methods 
    ships: ShipInterface[] | Function
    shipsLeft: number

    constructor() {
        this.board = this.#makeBoard();
        this.ships = this.#makeShips();
        this.shipsLeft = 5

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
    #makeShips():ShipInterface[] {
        let ships: ShipInterface[] = []

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
    placeShip(location: number[], ship: ShipInterface) {
        if(this.#checkValidPLacement(location, ship) !== true) {
            throw new Error('Invalid Placement!');
        }

        for(let i = 0; i < ship.length; i++) {
            this.board[location[i]] = {Ship: ship, position: i+1, isSpotHit: false,};
        }
    }
    #checkValidPLacement(location: number[], ship: ShipInterface) {
        if(ship.length !== location.length) {
            return false
        }
        return true;
    }
    takeAttack(location: number) {
        if(this.board[location] === '') {
            this.board[location] = 'miss';
            return this.board[location]
        }
        else {
            if(this.#checkValidHit(location) === true) {

                this.board[location].isSpotHit = true;
                this.board[location].Ship.hitShip(this.board[location].position);
            }
            else {
                return 'invalid attack'
            }
        }
    }
    #checkValidHit(location: number): boolean {
        if(typeof this.board[location] !== 'object') {
            return false
        }
        else {
            return true 
        }
    }
}
// on the board when a ship is put in an index have that index contain both what part of the ship it is and the ship variable itself
/* checkIfIndexIsEmpty(index: number): boolean {
        for
} */
// have a math .random that determines random ships placement orientation 
// maybe make a helper method that takes the indexes and spits out a bool on weather its allowed or not??
// for rows if the random generated ends in 10 minus ship length or less let it go through and append the ship so it doesnt go over the line
// ^ also add that number onto a another number genetated by 1-9 * 10 to get a random row that is placed on
//when generating a number generate 0-9, if that number plus ship length would be over 9 subtract ship length from the number then send it, otherwise just send it anyways
// for columns set it to random generate any number from 10 minus ship length (check if that works for placing on last cords) times 10 ()..math.rnadom times 10?) and below and append ship down 10 at a time
// ^ also add a number generated 1-9 to that number to get a random row placemnet
// also run a function inside of it, that checks all the indexes and return a bool if all are clear (ie no ship in the way) or not then push the ship object and what part it is into the cords
// add a isHit property to the space to disallow the same spot to be hit twice
// when a ship returns true from is sunk on it subtract that nunber from ships left on board
// place ship function takes cords and ship and places ship in the cords, from left to right incrementing what part is is by one for each placed
// make random ship place function call on that and feed it random cordenates it generates
// when interacting with the dom check how many cords are being passes into shipPlace method and compare it with ship length, if it isnt equal throw an error

// this is what places ship randomly
/* 
    for(let i = 0 i < this.ships.length; i++) {
        
        randomShipPlace(genetrateRandomCords(), this.ships[i]); this calls itself recursevly if cords are bad inside and keeps trying till it can place ship
    }
*/

// TODO FIGURE OUT HOW TO PLACE EACH OT THE SHIPS IN THE GAMEBOARD SEPERATLELY... maybe add a placed variable inside of the ship?

export default Gameboard