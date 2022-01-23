import Ship from "./ships";
interface ShipInterface {
    length: number,
    name: string,
    isSunk(): boolean,
}
class Gameboard {
    board: any
    // takeAttack(location: number[]): boolean have this contain both hit and miss methods 
    ships: ShipInterface[]
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
        if(ship.length !== location.length ) {
            return false // NEEDS FULLY IMPLEMENTED
        }
        for(let i = 0; i < location.length; i++) { // checks if another ship is in the spot
            if(this.board[location[i]] !== '') {
                return false
            }
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
                this.#updateBoatCounterWhenSunk(this.board[location].Ship);
            }
            else {
                return 'invalid attack' // maybe make this throw an error instead
            }
        }
    }

    #checkValidHit(location: number): boolean {
        if(typeof this.board[location] !== 'object') {
            return false
        }
        else {
            if(this.board[location].isSpotHit === true) {
                return false
            }
        }
        return true
    }

    #updateBoatCounterWhenSunk(boat: ShipInterface) {
        if(boat.isSunk() === true) {
            this.shipsLeft = this.shipsLeft - 1;
        }
    }

    returnValidRandomCords(length: number, orientation: string) {
        if(orientation === 'random') { // THIS WORKS!
            orientation = this.#generateRandomOrientation();
        }
        if(orientation === 'horizontal') {
            let horizontalCords = this.#generateLegalHorizontalCords(length);
            return horizontalCords;
        }
        if(orientation === 'vertical') {
            let verticalCords = this.#generateLegalVerticalCords(length);
            return verticalCords;
        }
        //TODO ADD VALID VERTICAL CORDS

    }

    #generateRandomOrientation() {
        let orientation: number = Math.floor(Math.random() * 2);

        if(orientation === 0) {
            return 'vertical'
        }
        else if(orientation === 1) {
            return 'horizontal'
        }
    }
    
    #generateLegalHorizontalCords(length: number) {
        let cords: number[] = [];
        let randomVertical: number = Math.floor(Math.random() * 10) * 10; 
        let randomHorizontal: number = Math.floor(Math.random() * 10);
        if(randomHorizontal + length > 9) {
            randomHorizontal = randomHorizontal - length;
        }
        let randomFinal: number = randomVertical + randomHorizontal;
        for(let i = 0; i < length; i++) {
            cords.push(randomFinal + i);
        }
        return cords
    }

    #generateLegalVerticalCords(length: number) {
        let cords: number[] = [];
        let randomVertical: number = Math.floor(Math.random() * 10); 
        let randomHorizontal: number = Math.floor(Math.random() * 10);
        if(randomVertical + length > 9) {
            randomVertical = randomVertical - length;
        }
        randomVertical = randomVertical * 10;
        let randomFinal: number = randomVertical + randomHorizontal;
        for(let i = 0; i < length; i++) {
            cords.push(randomFinal);
            randomFinal = randomFinal + 10; // adds to to the number to simukate moving down a row in the grid
        }
        return cords
    }

    placeShipRandomly(ship: ShipInterface) {
        try {
            this.placeShip(this.returnValidRandomCords(ship.length, 'random'), ship);
        } catch(error) {
            this.placeShipRandomly(ship)
        }
    }

    placeAllShipsRandomly() {
        let i: keyof typeof this.ships;
        for(i in this.ships) {
            this.placeShipRandomly(this.ships[i]);
        }
    }
}

// TODO MAKE PLACE SHIP AT RANDOM FUNCTION THAT RECUSEVELY CALLS ITSELF IF placeShip THROWS!



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