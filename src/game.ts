import Gameboard from "./gameboard";
import Player from "./players";

let Computer: {board: Gameboard, player: Player, cpuPlaceShips: Function} = {
    board:  new Gameboard,
    player:  new Player("Computer"),
    cpuPlaceShips: () => {
        Computer.board.placeAllShipsRandomly();
    }

}

let Human: {board: Gameboard, player: Player} = {
    board: new Gameboard,
    player: new Player("Player"),
}




export {Computer, Human}