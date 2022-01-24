import Gameboard from "./gameboard"

class Player {
    name: string
    constructor(name: string) {
        this.name = name
    }

    attackOpponent(cordinates: number, gameboard: Gameboard) {
        try {
            gameboard.takeAttack(cordinates);

        } catch(error) {
            throw new Error (error);
        }
    }

    randomAttack(gameboard: Gameboard) {
        let location = Math.floor(Math.random() * 100);
        try {
            gameboard.takeAttack(location) 
        } catch(error) {
            throw new Error (error)
        }
    }
}

export default Player
