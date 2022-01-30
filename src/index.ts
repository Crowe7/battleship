import {Computer, Human, endGame, attack, returnWhoseTurn, isPlayerBoardsSetup, resetGame} from "./game";
import Gameboard from "./gameboard";

initStart();
makeRandomBtn();
makeUndoBtn();

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
    if(Human.board.shipsLeft === 5) {
        placeShipText.innerText = 'Click Ready To Begin!';
    }
    else {
        placeShipText.innerText = `Place Your ${Human.board.ships[Human.board.shipsLeft].name}!`;
    }
}

function makeRandomBtn() {
    let randomBtn = document.getElementById('random');
    randomBtn.addEventListener('click', () => {
        Human.board.placeShipRandomly(Human.board.ships[Human.board.shipsLeft]);
        changePlaceShipText();
        renderGameBoard(Human.board, 'start');
    });
}



function initStart() {
    makeStartingGrid();
    changePlaceShipText();
}



function renderGameBoard(gameboard: Gameboard, grid: string) {
    let DOMboard = document.getElementById(grid);

    for(let i = 0; i < 100; i++) {
        if(gameboard.board[i] === '') {
            if(DOMboard.children[i].classList.contains('ship')) {
                DOMboard.children[i].classList.remove('ship');
            }
        }
        else if(gameboard.board[i] === 'miss') {
            DOMboard.children[i].classList.add('miss');
        }
        else {
            if(gameboard.board[i].isSpotHit === false) {
                DOMboard.children[i].classList.add('ship');
            }
            else {
                DOMboard.children[i].classList.add('hit');
            }
        }
    }
}

// PUT A SPOT ON THE BOARD THAT HAS TEXT AFTER EVERY ATTACK THAT SHOWS WHAT HAPPENED LAST TURN!

// ON HOVER ADD A CLASS TO GRID THAT COLORS IN THE SPACES IF THEY CHECK OUT PROPERLY IN checkValidPlacement AND REMOVES ALL OTHER INSTANCES OF HOVER CLASS FROM GRID

// WHEN YOU CLICK AND PLACE A SHIP JUST SEND THE CORDS TO THE PLACE SHIP FUNCTION! AND THEN RUN A SEPERATE FUNTION THAT UPDATES THE DOM GRID RIGHT AFTER!

