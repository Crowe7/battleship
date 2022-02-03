import {Computer, Human, endGame, attack, returnWhoseTurn, isPlayerBoardsSetup, resetGame} from "./game";
import Gameboard from "./gameboard";

let axis: string = 'X'; 

initStart();
function initStart() {
    initStartingHTML();
    makeGrid(startingGridEventlistners, 'start');
    changePlaceShipText();
    initStartBtns();
}

function initStartBtns() {
    makeRandomBtn();
    makeUndoBtn();
    makeRotationBtn();
}

function makeGrid(eventListeners: Function, appendLocation: string) {
    let start = document.getElementById(appendLocation);
    for(let i = 0; i < 100; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.setAttribute('id', i.toString());
        eventListeners(gridSpace);
        start.appendChild(gridSpace);
    }

}

function startingGridEventlistners(gridSpace: HTMLElement) {
    gridSpace.addEventListener('mouseover', () => {
        if(isPlayerBoardsSetup() === false) {
            showShipPlacementOnHover(gridSpace.id);
        }
    });

    gridSpace.addEventListener('mouseout', () => {
        clearHoverStyles('start');
    });

    gridSpace.addEventListener('click', () => {
        placeHoveredShip(gridSpace.id);
        renderGameBoard(Human.board, 'start');
        changePlaceShipText();
        if(isPlayerBoardsSetup() === true) {
            makeReadybtn();
        }
    });

}


function initStartingHTML() {
     let content = document.getElementById('content');

     content.innerHTML = `
        <div class="grid-and-buttons-wrapper">
        <h1 id="placeShipText">Place Your Ship</h1>
        <div class="grid-and-buttons">
            <div id="start" class="start grid">

            </div>
            <div id="btnContainer" class="ship-menu-buttons">
                <button id="undo">Undo</button>
                <button id="rotation">Rotation</button>
                <button id="random">Random</button>
            </div>
        </div>
    </div>`;
}

function getHoverCords(hoverID: string) {
    let cords:number[] = Human.board.generateCordsFromStartingPosition(parseInt(hoverID), axis, Human.board.ships[Human.board.shipsLeft]);
    return cords
}

function placeHoveredShip(hoverID: string) {
    let cords:number[] = getHoverCords(hoverID);
    try {
        Human.placeShip(cords);
    } catch(error) {
        throw new Error(error);
    }
}

function showShipPlacementOnHover(hoverID: string) {
    let grid = document.getElementById('start').children;
    let cords:number[] = getHoverCords(hoverID);
    if(Human.board.checkValidPLacement(cords, Human.board.ships[Human.board.shipsLeft]) === true) {
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < cords.length; j++) {
                if(parseInt(grid[i].id) === cords[j]) {
                    grid[i].classList.add('ship-hover');
                }
            }
        }
    }
    else {
        grid[parseInt(hoverID)].classList.add('disabled');
    }
}
function clearHoverStyles(gridID: string) {
    let grid = document.getElementById(gridID).children;
    for(let i = 0; i < grid.length; i++) {
        if(grid[i].classList.contains('ship-hover')) {
            grid[i].classList.remove('ship-hover');
        }
        if(grid[i].classList.contains('disabled')) {
            grid[i].classList.remove('disabled');
        }
    }
}
function changePlaceShipText() {
    let placeShipText = document.getElementById('placeShipText');
    if(isPlayerBoardsSetup() === true) {
        placeShipText.innerText = 'Click Ready To Begin!';
    }
    else {
        placeShipText.innerText = `Place Your ${Human.board.ships[Human.board.shipsLeft].name}!`;
    }
}



function makeRandomBtn() {
    let randomBtn = document.getElementById('random');
    randomBtn.addEventListener('click', () => {
        if(isPlayerBoardsSetup() === false) {
            Human.board.placeShipRandomly(Human.board.ships[Human.board.shipsLeft]);
            changePlaceShipText();
            renderGameBoard(Human.board, 'start');
            if(isPlayerBoardsSetup() === true) {
                makeReadybtn();
            }
        }
    });
}

function makeUndoBtn() {
    let undoBtn = document.getElementById('undo');
    undoBtn.addEventListener('click', () => {
        if(isPlayerBoardsSetup() === true) {
            let readyBtn = document.getElementById('ready');
            readyBtn.remove();
        }
        Human.board.undoLastShipPlace();
        changePlaceShipText();
        renderGameBoard(Human.board, 'start');
    });
}

function makeRotationBtn() {
    let rotationBtn = document.getElementById('rotation');
    rotationBtn.addEventListener('click', changeAxis);
}

function changeAxis() {
    if(axis === 'X') {
        axis = 'Y';
    }
    else {
        axis = 'X';
    }
}

function makeReadybtn() {
    let readyBtn = document.createElement('button');
    readyBtn.setAttribute('id', 'ready');
    readyBtn.innerText = 'Ready';

    readyBtn.addEventListener('click', () => {
        clearDOM();
        makeGameplayDOM();
        initGameplay();
        // put the abouve function in an init gameplay function wrapper 
    });

    let btnContainer = document.getElementById('btnContainer');
    btnContainer.appendChild(readyBtn);
}

function initGameplay() {
    makePlayerGameBoard();
    makeComputerGameBoard();
    updateRemainingShipsDisplay();
}

function clearDOM() {
    let content = document.getElementById('content');
    content.innerHTML = '';
}

function makeGameplayDOM() {
    let content = document.getElementById('content');
    content.innerHTML = 
    `<div class="game-box">
    <h1>This shows status of your last attack!</h1>
    <div class="grids-and-text">
        <div class="gameplay-grid">
            <div id="playerGrid" class="grid start">

            </div>
            <h2 id="pRemaining">Player ships remaining: 0</h2>
        </div>
        <div class="gameplay-grid">
            <div id="computerGrid" class="grid start">

            </div>
            <h2 id="cRemaining">Computer ships remaining: 0</h2>
        </div>
    </div>
</div>`;
}
function updateRemainingShipsDisplay() {
    let playerShipsRemaining = document.getElementById('pRemaining');
    let computerShipsRemaining = document.getElementById('cRemaining');

    playerShipsRemaining.innerText = `Player ships remaining: ${Human.board.shipsLeft}`;
    computerShipsRemaining.innerText = `Computer ships remaining: ${Computer.board.shipsLeft}`;
}

function makePlayerGameBoard() {
    makeGrid(playerBoardEvents, 'playerGrid');
    renderGameBoard(Human.board, 'playerGrid');
}

 function playerBoardEvents() {
    // make an on hover affect for somthing maybe?
 }

 function makeComputerGameBoard() {
    Computer.cpuPlaceShips();
    makeGrid(computerBoardEvents, 'computerGrid');
    renderGameBoard(Computer.board, 'computerGrid');
 }

 function computerBoardEvents(computerGrid: HTMLElement) {
    computerGrid.addEventListener('mouseover', () => {
        computerGrid.classList.add('ship-hover');
    });
    computerGrid.addEventListener('mouseout', () => {
        computerGrid.classList.remove('ship-hover');
    });
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
        else { // might need to set this to not show ship if is computer player
            if(gameboard.board[i].isSpotHit === false) {
                if(DOMboard.id === 'playerGrid' || DOMboard.id === 'start') { // only shows ship if its on a players grid or starting grid
                    DOMboard.children[i].classList.add('ship');
                }
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

