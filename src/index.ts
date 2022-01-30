import {Computer, Human, endGame, attack, returnWhoseTurn, isPlayerBoardsSetup, resetGame} from "./game";
let message: string = 'Hello World';
function log(message: string) {
    console.log(message);
    return message;
}

initStart();

function makeStartingGrid() {
    let start = document.getElementById('start');
    for(let i = 0; i < 100; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.setAttribute('id', i.toString());
        start.appendChild(gridSpace);

    }
}

function changePlaceShipText() {
    let placeShipText = document.getElementById('placeShipText');
    placeShipText.innerText = `Place Your ${Human.board.ships[Human.board.shipsLeft].name}!`;
}

function initStart() {
    makeStartingGrid();
    changePlaceShipText();
}

// ON HOVER ADD A CLASS TO GRID THAT COLORS IN THE SPACES IF THEY CHECK OUT PROPERLY IN checkValidPlacement AND REMOVES ALL OTHER INSTANCES OF HOVER CLASS FROM GRID

// WHEN YOU CLICK AND PLACE A SHIP JUST SEND THE CORDS TO THE PLACE SHIP FUNCTION! AND THEN RUN A SEPERATE FUNTION THAT UPDATES THE DOM GRID RIGHT AFTER!

export {log};