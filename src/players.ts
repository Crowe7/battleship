import Gameboard from "./gameboard"

class Player {
    name: string
    constructor(name: string) {
        this.name = name
    }

    attackOpponent(cordinates: number, gameboard: Gameboard) {
        try {
            let attack = gameboard.takeAttack(cordinates);
            return attack;

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
