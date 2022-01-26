import Gameboard from "./gameboard";
import Player from "./players";

let whichTurn: number = 1; // sets the starting turn as p1 


let Computer: {board: Gameboard, player: Player, cpuPlaceShips: Function, cpuAttack: Function} = {
    board:  new Gameboard,
    player:  new Player("Computer"),
    cpuPlaceShips: () => {
        Computer.board.placeAllShipsRandomly(); // run this when player board is setup
    },
    cpuAttack: () => {
        try {
            Computer.player.randomAttack(Human.board);
        } catch(error) {
            Computer.cpuAttack();
        }
    }

}

let Human: {board: Gameboard, player: Player, placeShip: Function, humanAttack: Function, changePlayerName: Function} = {
    board: new Gameboard,
    player: new Player("Player"),   
    placeShip(cords: number[]) {// these are got from event listener, put this on event listener probably
        try{
            let shipNumber: number = Human.board.shipsLeft;
            let ship = Human.board.ships[shipNumber];
            Human.board.placeShip(cords, ship);
        } catch(error) {
            throw new Error (error);
        }
    },
    humanAttack(location: number) { 
        try {
            Computer.board.takeAttack(location)
        } catch(error) {
            throw new Error (error);
        }      
    },

    changePlayerName(name: string) { // append this to a name text box on the dom
        if(name === "Computer" || name === '') {
            throw new Error ('Invalid Name')
        }
        Human.player.name = name;
    }
}

function isPlayerBoardsSetup(): boolean { // after player places ship check with this and when its true append the event listeners to opponents board?
    if(Human.board.shipsLeft === 5) {
        return true
    }
    return false
}

function endGame(): string | boolean { // check this after every attack in dom if returns not false pop a modal up with winner
    if(Human.board.checkForWin() === true) {
        return Human.player.name
    }
    if(Computer.board.checkForWin() === true) {
        return Computer.player.name
    }
    return false
}

function attack(location: number) { // use if statment, if returnWhoseturn() is 2 then run attack again to do cpu attack
    if(returnWhoseTurn() === 1) {
        try{
            Human.humanAttack(location)
            whichTurn++
        } catch(error) {
            throw new Error(error)
        }
    }
    else if(returnWhoseTurn() === 2) {
        Computer.cpuAttack();
        whichTurn--
    }

}

function returnWhoseTurn(): number {
    if(whichTurn === 1) {
        return 1
    }
    else if(whichTurn === 2) {
        return 2
    }
}



export {Computer, Human, endGame, attack, returnWhoseTurn}


