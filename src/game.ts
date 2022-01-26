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

let Human: {board: Gameboard, player: Player, placeShip: Function, humanAttack: Function} = {
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
    }
}




export {Computer, Human}


