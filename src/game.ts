import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import Gameboard from "./gameboard";
import Player from "./players";

let Computer: {board: Gameboard, player: Player, cpuPlaceShips: Function, cpuAttack: Function} = {
    board:  new Gameboard,
    player:  new Player("Computer"),
    cpuPlaceShips: () => {
        Computer.board.placeAllShipsRandomly();
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
    humanAttack(location: number) { // put this on opponents board in dom
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

function isPlayerBoardsSetuo(): boolean { // after player places ship check with this and when its true append the event listeners to opponents board?
    if(Human.board.shipsLeft === 5) {
        return true
    }
    return false
}

function endGame(): string | boolean {
    if(Human.board.checkForWin() === true) {
        return Human.player.name
    }
    if(Computer.board.checkForWin() === true) {
        return Computer.player.name
    }

    return false
}







export {Computer, Human, endGame}


