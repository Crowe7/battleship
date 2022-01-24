import Ship from "./ships";
interface ShipInterface {
    length: number,
    name: string,
    isSunk(): boolean,
}
class Gameboard {
    board: any // index signiture stuff im not sure how to type it but it has something to do with the objects inside of it :(
    ships: ShipInterface[]
   private shipsLeft: number

    constructor() {
        this.board = this.#makeBoard();
        this.ships = this.#makeShips();
        this.shipsLeft = 5 // could probablt do this better with getters and setters maybe?

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
            return false
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
                throw new Error ('invalid attack');
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

    #updateBoatCounterWhenSunk(boat: ShipInterface) : boolean {
        if(boat.isSunk() === true) {
            this.shipsLeft = this.shipsLeft - 1;
            return true
        }
    }

    checkForWin(): boolean {
        if(this.shipsLeft === 0) {
            return true
        }
        return false
    }
    returnValidRandomCords(length: number, orientation: string) {
        if(orientation === 'random') {
            orientation = this.#generateRandomOrientation();
        }
        if(orientation === 'horizontal') {
            let horizontalCords: number[] = this.#generateLegalHorizontalCords(length);
            return horizontalCords;
        }
        if(orientation === 'vertical') {
            let verticalCords: number[] = this.#generateLegalVerticalCords(length);
            return verticalCords;
        }
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
            randomFinal = randomFinal + 10; // adds to to the number to simulate moving down a row in the grid
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

export default Gameboard