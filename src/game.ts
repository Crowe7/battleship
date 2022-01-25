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
            let attackSpot: number = Math.floor(Math.random() * 10);
            Human.board.takeAttack(attackSpot);
        } catch(error) {
            Computer.cpuAttack();
        }
    }

}

let Human: {board: Gameboard, player: Player} = {
    board: new Gameboard,
    player: new Player("Player"),
}




export {Computer, Human}


