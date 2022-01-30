import Ship from "./ships";
interface ShipInterface {
    length: number,
    name: string,
    isSunk(): boolean,
}
class Gameboard {
    board: any // index signiture stuff im not sure how to type it but it has something to do with the objects inside of it :(
    ships: ShipInterface[]
    shipsLeft: number

    constructor() {
        this.board = this.#makeBoard();
        this.ships = this.#makeShips();
        this.shipsLeft = 0 // 

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
        if(this.checkValidPLacement(location, ship) !== true) {
            throw new Error('Invalid Placement!');
        }
        for(let i = 0; i < ship.length; i++) {
            this.board[location[i]] = {Ship: ship, position: i+1, isSpotHit: false,};
        }
        this.shipsLeft = this.shipsLeft + 1;
    }

    undoLastShipPlace() {
        this.board.forEach((element: any, i: any, board: any) => {
            if(element !== '') {
                if(element.Ship.name === this.ships[this.shipsLeft - 1].name) {
                    board[i] = '';

                }
            }
        });
        if(this.shipsLeft > 0 ) {
            this.shipsLeft -= 1;
        }
    }

    checkValidPLacement(location: number[], ship: ShipInterface) {
        if(ship.length !== location.length ) {
            return false
        }
        for(let i = 0; i < location.length; i++) { // checks if another ship is in the spot
            if(this.board[location[i]] !== '') {
                return false
            }
        }

        if(location[0] % 10 === location[1] % 10 ) { // this is a hard check to test if player cords for vert before checking if horizontal is bad
            return true
        }

        if(this.#checkHorizontalCords(location).length !== 1) {
            return false;
        }

        return true;
    }
    
    #checkHorizontalCords(array: number[]) {
        let firstNumberArray: number[] = [];

        if(array[0] < 10 && array[1] < 10) {
            firstNumberArray.push(0);
            return firstNumberArray;
        }
        for(let i = 0; i < array.length; i++) {
            let stringifiedNum: string = array[i].toString();
            let firstNum = parseInt(stringifiedNum.charAt(0));
            if(firstNum !== firstNumberArray[0]) {
                firstNumberArray.push(firstNum);
            }
        }
        return firstNumberArray
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
                this.#updateAndReportSunkShip(this.board[location].Ship);
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

    #updateAndReportSunkShip(boat:ShipInterface) {
        if(boat.isSunk() === true) {
            this.#reportSunkShip(boat);
            this.#updateBoatCounterWhenSunk(boat);
            return true;
        }
    } 

    #reportSunkShip(boat:ShipInterface) : string {
            return `${boat.name} has Sunk!`
    }

    #updateBoatCounterWhenSunk(boat: ShipInterface) {
            this.shipsLeft = this.shipsLeft - 1;
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
            if(this.shipsLeft > 5) { // stops overplacing of ships on board
                console.log(this.shipsLeft);
                this.shipsLeft = 5;
            }

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