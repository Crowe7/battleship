/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Computer": () => (/* binding */ Computer),
/* harmony export */   "Human": () => (/* binding */ Human),
/* harmony export */   "endGame": () => (/* binding */ endGame),
/* harmony export */   "attack": () => (/* binding */ attack),
/* harmony export */   "returnWhoseTurn": () => (/* binding */ returnWhoseTurn),
/* harmony export */   "isPlayerBoardsSetup": () => (/* binding */ isPlayerBoardsSetup),
/* harmony export */   "resetGame": () => (/* binding */ resetGame)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.ts");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/players.ts");


let whichTurn = 1; // sets the starting turn as p1 
let Computer = {
    board: new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"],
    player: new _players__WEBPACK_IMPORTED_MODULE_1__["default"]("Computer"),
    cpuPlaceShips: () => {
        Computer.board.placeAllShipsRandomly(); // run this when player board is setup
    },
    cpuAttack: () => {
        try {
            Computer.player.randomAttack(Human.board);
        }
        catch (error) {
            Computer.cpuAttack();
        }
    }
};
let Human = {
    board: new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"],
    player: new _players__WEBPACK_IMPORTED_MODULE_1__["default"]("Player"),
    placeShip(cords) {
        try {
            let shipNumber = Human.board.shipsLeft;
            let ship = Human.board.ships[shipNumber];
            Human.board.placeShip(cords, ship);
        }
        catch (error) {
            throw new Error(error);
        }
    },
    humanAttack(location) {
        try {
            let attackResult = Human.player.attackOpponent(location, Computer.board);
            return attackResult;
        }
        catch (error) {
            throw new Error(error);
        }
    },
    changePlayerName(name) {
        if (name === "Computer" || name === '') {
            throw new Error('Invalid Name');
        }
        Human.player.name = name;
    }
};
function isPlayerBoardsSetup() {
    if (Human.board.shipsLeft === 5) {
        return true;
    }
    return false;
}
function endGame() {
    if (Human.board.checkForWin() === true) {
        return Human.player.name;
    }
    if (Computer.board.checkForWin() === true) {
        return Computer.player.name;
    }
    return false;
}
function attack(location) {
    if (returnWhoseTurn() === 1) {
        try {
            Human.humanAttack(location);
            whichTurn++;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    else if (returnWhoseTurn() === 2) {
        Computer.cpuAttack();
        whichTurn--;
    }
}
function returnWhoseTurn() {
    if (whichTurn === 1) {
        return 1;
    }
    else if (whichTurn === 2) {
        return 2;
    }
}
function resetGame() {
    whichTurn = 1;
    Human.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"];
    Human.player = new _players__WEBPACK_IMPORTED_MODULE_1__["default"]("Player");
    Computer.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"];
    Computer.player = new _players__WEBPACK_IMPORTED_MODULE_1__["default"]("Computer");
}



/***/ }),

/***/ "./src/gameboard.ts":
/*!**************************!*\
  !*** ./src/gameboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Gameboard_instances, _Gameboard_makeBoard, _Gameboard_makeShips, _Gameboard_checkHorizontalCords, _Gameboard_checkValidHit, _Gameboard_checkIfBoatSunk, _Gameboard_reportSunkShip, _Gameboard_updateBoatCounterWhenSunk, _Gameboard_generateRandomOrientation, _Gameboard_generateLegalHorizontalCords, _Gameboard_generateLegalVerticalCords;

class Gameboard {
    constructor() {
        _Gameboard_instances.add(this);
        this.board = __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_makeBoard).call(this);
        this.ships = __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_makeShips).call(this);
        this.shipsLeft = 0; // 
    }
    placeShip(location, ship) {
        if (this.checkValidPLacement(location, ship) !== true) {
            throw new Error('Invalid Placement!');
        }
        for (let i = 0; i < ship.length; i++) {
            this.board[location[i]] = { Ship: ship, position: i + 1, isSpotHit: false, };
        }
        this.shipsLeft = this.shipsLeft + 1;
    }
    undoLastShipPlace() {
        this.board.forEach((element, i, board) => {
            if (element !== '') {
                if (element.Ship.name === this.ships[this.shipsLeft - 1].name) {
                    board[i] = '';
                }
            }
        });
        if (this.shipsLeft > 0) {
            this.shipsLeft -= 1;
        }
    }
    checkValidPLacement(location, ship) {
        if (ship.length !== location.length) {
            return false;
        }
        for (let i = 0; i < location.length; i++) { // checks if another ship is in the spot
            if (this.board[location[i]] !== '') {
                return false;
            }
        }
        if (location[0] % 10 === location[1] % 10) { // this is a hard check to test if player cords for vert before checking if horizontal is bad
            return true;
        }
        if (__classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_checkHorizontalCords).call(this, location).length !== 1) {
            return false;
        }
        return true;
    }
    takeAttack(location) {
        if (this.board[location] === '') {
            this.board[location] = 'miss';
            return this.board[location];
        }
        else {
            if (__classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_checkValidHit).call(this, location) === true) {
                this.board[location].isSpotHit = true;
                this.board[location].Ship.hitShip(this.board[location].position);
                if (__classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_checkIfBoatSunk).call(this, this.board[location].Ship) === true) {
                    __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_updateBoatCounterWhenSunk).call(this, this.board[location].Ship);
                    return __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_reportSunkShip).call(this, this.board[location].Ship);
                }
                return 'hit';
            }
            else {
                throw new Error('invalid attack');
            }
        }
    }
    checkForWin() {
        if (this.shipsLeft === 0) {
            return true;
        }
        return false;
    }
    returnValidRandomCords(length, orientation) {
        if (orientation === 'random') {
            orientation = __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_generateRandomOrientation).call(this);
        }
        if (orientation === 'horizontal') {
            let horizontalCords = __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_generateLegalHorizontalCords).call(this, length);
            return horizontalCords;
        }
        if (orientation === 'vertical') {
            let verticalCords = __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_generateLegalVerticalCords).call(this, length);
            return verticalCords;
        }
    }
    generateCordsFromStartingPosition(start, orientation, ship) {
        let cords = [];
        if (orientation === 'X') {
            for (let i = 0; i < ship.length; i++) {
                cords.push(start + i);
            }
            return cords;
        }
        else {
            for (let i = 0; i < ship.length; i++) {
                cords.push(start + (i * 10));
            }
            return cords;
        }
    }
    placeShipRandomly(ship) {
        try {
            this.placeShip(this.returnValidRandomCords(ship.length, 'random'), ship);
            if (this.shipsLeft > 5) { // stops overplacing of ships on board
                console.log(this.shipsLeft);
                this.shipsLeft = 5;
            }
        }
        catch (error) {
            this.placeShipRandomly(ship);
        }
    }
    placeAllShipsRandomly() {
        let i;
        for (i in this.ships) {
            this.placeShipRandomly(this.ships[i]);
        }
    }
}
_Gameboard_instances = new WeakSet(), _Gameboard_makeBoard = function _Gameboard_makeBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            board.push('');
        }
    }
    return board;
}, _Gameboard_makeShips = function _Gameboard_makeShips() {
    let ships = [];
    let Carrier = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](5, 'Carrier');
    ships.push(Carrier);
    let Battleship = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](4, 'Battleship');
    ships.push(Battleship);
    let Destroyer = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](3, 'Destroyer');
    ships.push(Destroyer);
    let Submarine = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](3, 'Submarine');
    ships.push(Submarine);
    let PatrolBoat = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](2, 'Patrol Boat');
    ships.push(PatrolBoat);
    return ships;
}, _Gameboard_checkHorizontalCords = function _Gameboard_checkHorizontalCords(array) {
    let firstNumberArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[0] < 10) {
            if (array[0] < 10 && array[i] > 9) {
                firstNumberArray.push(0, 1);
                return firstNumberArray;
            }
        }
    }
    if (array[0] < 10 && array[1] < 10) {
        firstNumberArray.push(0);
        return firstNumberArray;
    }
    for (let i = 0; i < array.length; i++) {
        let stringifiedNum = array[i].toString();
        let firstNum = parseInt(stringifiedNum.charAt(0));
        if (firstNum !== firstNumberArray[0]) {
            firstNumberArray.push(firstNum);
        }
    }
    return firstNumberArray;
}, _Gameboard_checkValidHit = function _Gameboard_checkValidHit(location) {
    if (typeof this.board[location] !== 'object') {
        return false;
    }
    else {
        if (this.board[location].isSpotHit === true) {
            return false;
        }
    }
    return true;
}, _Gameboard_checkIfBoatSunk = function _Gameboard_checkIfBoatSunk(boat) {
    if (boat.isSunk() === true) {
        return true;
    }
}, _Gameboard_reportSunkShip = function _Gameboard_reportSunkShip(boat) {
    return `${boat.name} has Sunk!`;
}, _Gameboard_updateBoatCounterWhenSunk = function _Gameboard_updateBoatCounterWhenSunk(boat) {
    this.shipsLeft = this.shipsLeft - 1;
}, _Gameboard_generateRandomOrientation = function _Gameboard_generateRandomOrientation() {
    let orientation = Math.floor(Math.random() * 2);
    if (orientation === 0) {
        return 'vertical';
    }
    else if (orientation === 1) {
        return 'horizontal';
    }
}, _Gameboard_generateLegalHorizontalCords = function _Gameboard_generateLegalHorizontalCords(length) {
    let cords = [];
    let randomVertical = Math.floor(Math.random() * 10) * 10;
    let randomHorizontal = Math.floor(Math.random() * 10);
    if (randomHorizontal + length > 9) {
        randomHorizontal = randomHorizontal - length;
    }
    let randomFinal = randomVertical + randomHorizontal;
    for (let i = 0; i < length; i++) {
        cords.push(randomFinal + i);
    }
    return cords;
}, _Gameboard_generateLegalVerticalCords = function _Gameboard_generateLegalVerticalCords(length) {
    let cords = [];
    let randomVertical = Math.floor(Math.random() * 10);
    let randomHorizontal = Math.floor(Math.random() * 10);
    if (randomVertical + length > 9) {
        randomVertical = randomVertical - length;
    }
    randomVertical = randomVertical * 10;
    let randomFinal = randomVertical + randomHorizontal;
    for (let i = 0; i < length; i++) {
        cords.push(randomFinal);
        randomFinal = randomFinal + 10; // adds to to the number to simulate moving down a row in the grid
    }
    return cords;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/players.ts":
/*!************************!*\
  !*** ./src/players.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
    constructor(name) {
        this.name = name;
    }
    attackOpponent(cordinates, gameboard) {
        try {
            let attack = gameboard.takeAttack(cordinates);
            return attack;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    randomAttack(gameboard) {
        let location = Math.floor(Math.random() * 100);
        try {
            gameboard.takeAttack(location);
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/ships.ts":
/*!**********************!*\
  !*** ./src/ships.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ship_instances, _Ship_checkForValidHit;
class Ship {
    constructor(length, name) {
        _Ship_instances.add(this);
        this.length = length;
        this.hit = [];
        this.name = name; // maybe add a way to tell what a ship is based on length as a method maybe??
    }
    isSunk() {
        if (this.hit.length === this.length) {
            return true;
        }
        else {
            return false;
        }
    }
    hitShip(index) {
        if (__classPrivateFieldGet(this, _Ship_instances, "m", _Ship_checkForValidHit).call(this, index) === false) {
            return this.hit;
        }
        this.hit.push(index);
        return this.hit;
    }
}
_Ship_instances = new WeakSet(), _Ship_checkForValidHit = function _Ship_checkForValidHit(index) {
    for (let i = 0; i < this.hit.length; i++) {
        if (index === this.hit[i]) {
            return false;
        }
    }
    return true;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.ts");

let axis = 'X';
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
function makeGrid(eventListeners, appendLocation) {
    let start = document.getElementById(appendLocation);
    for (let i = 0; i < 100; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.setAttribute('id', i.toString());
        eventListeners(gridSpace);
        start.appendChild(gridSpace);
    }
}
function startingGridEventlistners(gridSpace) {
    gridSpace.addEventListener('mouseover', () => {
        if ((0,_game__WEBPACK_IMPORTED_MODULE_0__.isPlayerBoardsSetup)() === false) {
            showShipPlacementOnHover(gridSpace.id);
        }
    });
    gridSpace.addEventListener('mouseout', clearHoverStyles);
    gridSpace.addEventListener('click', () => {
        placeHoveredShip(gridSpace.id);
        renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board, 'start');
        changePlaceShipText();
        if ((0,_game__WEBPACK_IMPORTED_MODULE_0__.isPlayerBoardsSetup)() === true) {
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
function getHoverCords(hoverID) {
    let cords = _game__WEBPACK_IMPORTED_MODULE_0__.Human.board.generateCordsFromStartingPosition(parseInt(hoverID), axis, _game__WEBPACK_IMPORTED_MODULE_0__.Human.board.ships[_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft]);
    return cords;
}
function placeHoveredShip(hoverID) {
    let cords = getHoverCords(hoverID);
    try {
        _game__WEBPACK_IMPORTED_MODULE_0__.Human.placeShip(cords);
    }
    catch (error) {
        throw new Error(error);
    }
}
function showShipPlacementOnHover(hoverID) {
    let grid = document.getElementById('start').children;
    let cords = getHoverCords(hoverID);
    if (_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.checkValidPLacement(cords, _game__WEBPACK_IMPORTED_MODULE_0__.Human.board.ships[_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft]) === true) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < cords.length; j++) {
                if (parseInt(grid[i].id) === cords[j]) {
                    grid[i].classList.add('ship-hover');
                }
            }
        }
    }
    else {
        grid[parseInt(hoverID)].classList.add('disabled');
    }
}
function clearHoverStyles() {
    let grid = document.getElementById('start').children;
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].classList.contains('ship-hover')) {
            grid[i].classList.remove('ship-hover');
        }
        if (grid[i].classList.contains('disabled')) {
            grid[i].classList.remove('disabled');
        }
    }
}
function changePlaceShipText() {
    let placeShipText = document.getElementById('placeShipText');
    if ((0,_game__WEBPACK_IMPORTED_MODULE_0__.isPlayerBoardsSetup)() === true) {
        placeShipText.innerText = 'Click Ready To Begin!';
    }
    else {
        placeShipText.innerText = `Place Your ${_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.ships[_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft].name}!`;
    }
}
function makeRandomBtn() {
    let randomBtn = document.getElementById('random');
    randomBtn.addEventListener('click', () => {
        if ((0,_game__WEBPACK_IMPORTED_MODULE_0__.isPlayerBoardsSetup)() === false) {
            _game__WEBPACK_IMPORTED_MODULE_0__.Human.board.placeShipRandomly(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.ships[_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft]);
            changePlaceShipText();
            renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board, 'start');
            if ((0,_game__WEBPACK_IMPORTED_MODULE_0__.isPlayerBoardsSetup)() === true) {
                makeReadybtn();
            }
        }
    });
}
function makeUndoBtn() {
    let undoBtn = document.getElementById('undo');
    undoBtn.addEventListener('click', () => {
        if ((0,_game__WEBPACK_IMPORTED_MODULE_0__.isPlayerBoardsSetup)() === true) {
            let readyBtn = document.getElementById('ready');
            readyBtn.remove();
        }
        _game__WEBPACK_IMPORTED_MODULE_0__.Human.board.undoLastShipPlace();
        changePlaceShipText();
        renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board, 'start');
    });
}
function makeRotationBtn() {
    let rotationBtn = document.getElementById('rotation');
    rotationBtn.addEventListener('click', changeAxis);
}
function changeAxis() {
    if (axis === 'X') {
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
            <h2>Player ships remaining: 0</h2>
        </div>
        <div class="gameplay-grid">
            <div id="computerGrid" class="grid start">

            </div>
            <h2>Computer ships remaining: 0</h2>
        </div>
    </div>
</div>`;
}
function makePlayerGameBoard() {
    makeGrid(playerBoardEvents, 'playerGrid');
    renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board, 'playerGrid');
}
function playerBoardEvents() {
}
function makeComputerGameBoard() {
    _game__WEBPACK_IMPORTED_MODULE_0__.Computer.cpuPlaceShips();
    makeGrid(computerBoardEvents, 'computerGrid');
    renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Computer.board, 'computerGrid');
}
function computerBoardEvents() {
}
function renderGameBoard(gameboard, grid) {
    let DOMboard = document.getElementById(grid);
    for (let i = 0; i < 100; i++) {
        if (gameboard.board[i] === '') {
            if (DOMboard.children[i].classList.contains('ship')) {
                DOMboard.children[i].classList.remove('ship');
            }
        }
        else if (gameboard.board[i] === 'miss') {
            DOMboard.children[i].classList.add('miss');
        }
        else { // might need to set this to not show ship if is computer player
            if (gameboard.board[i].isSpotHit === false) {
                if (DOMboard.id === 'playerGrid' || DOMboard.id === 'start') { // only shows ship if its on a players grid or starting grid
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pCLElBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqRDtTQUNKO2FBQ0ksSUFBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUNuQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUM7YUFDSSxFQUFFLGdFQUFnRTtZQUNuRSxJQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtnQkFDdkMsSUFBRyxRQUFRLENBQUMsRUFBRSxLQUFLLFlBQVksSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBRSxFQUFFLDREQUE0RDtvQkFDdEgsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM5QzthQUNKO2lCQUNJO2dCQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QztTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBRUQsK0ZBQStGO0FBRS9GLG9LQUFvSztBQUVwSyx5SkFBeUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5sZXQgd2hpY2hUdXJuOiBudW1iZXIgPSAxOyAvLyBzZXRzIHRoZSBzdGFydGluZyB0dXJuIGFzIHAxIFxuXG5sZXQgQ29tcHV0ZXI6IHtib2FyZDogR2FtZWJvYXJkLCBwbGF5ZXI6IFBsYXllciwgY3B1UGxhY2VTaGlwczogRnVuY3Rpb24sIGNwdUF0dGFjazogRnVuY3Rpb259ID0ge1xuICAgIGJvYXJkOiAgbmV3IEdhbWVib2FyZCxcbiAgICBwbGF5ZXI6ICBuZXcgUGxheWVyKFwiQ29tcHV0ZXJcIiksXG4gICAgY3B1UGxhY2VTaGlwczogKCkgPT4ge1xuICAgICAgICBDb21wdXRlci5ib2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTsgLy8gcnVuIHRoaXMgd2hlbiBwbGF5ZXIgYm9hcmQgaXMgc2V0dXBcbiAgICB9LFxuICAgIGNwdUF0dGFjazogKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgQ29tcHV0ZXIucGxheWVyLnJhbmRvbUF0dGFjayhIdW1hbi5ib2FyZCk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIENvbXB1dGVyLmNwdUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmxldCBIdW1hbjoge2JvYXJkOiBHYW1lYm9hcmQsIHBsYXllcjogUGxheWVyLCBwbGFjZVNoaXA6IEZ1bmN0aW9uLCBodW1hbkF0dGFjazogRnVuY3Rpb24sIGNoYW5nZVBsYXllck5hbWU6IEZ1bmN0aW9ufSA9IHtcbiAgICBib2FyZDogbmV3IEdhbWVib2FyZCxcbiAgICBwbGF5ZXI6IG5ldyBQbGF5ZXIoXCJQbGF5ZXJcIiksICAgXG4gICAgcGxhY2VTaGlwKGNvcmRzOiBudW1iZXJbXSkgey8vIHRoZXNlIGFyZSBnb3QgZnJvbSBldmVudCBsaXN0ZW5lciwgcHV0IHRoaXMgb24gZXZlbnQgbGlzdGVuZXIgcHJvYmFibHlcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgbGV0IHNoaXBOdW1iZXI6IG51bWJlciA9IEh1bWFuLmJvYXJkLnNoaXBzTGVmdDtcbiAgICAgICAgICAgIGxldCBzaGlwID0gSHVtYW4uYm9hcmQuc2hpcHNbc2hpcE51bWJlcl07XG4gICAgICAgICAgICBIdW1hbi5ib2FyZC5wbGFjZVNoaXAoY29yZHMsIHNoaXApO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaHVtYW5BdHRhY2sobG9jYXRpb246IG51bWJlcik6c3RyaW5nIHsgLy8gc2V0IGEgdmFyaWFibGUgdG8gdGhpcyBhbmQgdGhlbiBhc3NpZ24gdGhhdCB0byB0aGUgZG9tIHNvIGl0IGNhbiByZXBvcnQgdGhhdCBhdHRhY2tcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQ6IHN0cmluZyA9IEh1bWFuLnBsYXllci5hdHRhY2tPcHBvbmVudChsb2NhdGlvbiwgQ29tcHV0ZXIuYm9hcmQpO1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH0gICAgICBcbiAgICB9LFxuXG4gICAgY2hhbmdlUGxheWVyTmFtZShuYW1lOiBzdHJpbmcpIHsgLy8gYXBwZW5kIHRoaXMgdG8gYSBuYW1lIHRleHQgYm94IG9uIHRoZSBkb21cbiAgICAgICAgaWYobmFtZSA9PT0gXCJDb21wdXRlclwiIHx8IG5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdJbnZhbGlkIE5hbWUnKVxuICAgICAgICB9XG4gICAgICAgIEh1bWFuLnBsYXllci5uYW1lID0gbmFtZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzUGxheWVyQm9hcmRzU2V0dXAoKTogYm9vbGVhbiB7IC8vIGFmdGVyIHBsYXllciBwbGFjZXMgc2hpcCBjaGVjayB3aXRoIHRoaXMgYW5kIHdoZW4gaXRzIHRydWUgYXBwZW5kIHRoZSBldmVudCBsaXN0ZW5lcnMgdG8gb3Bwb25lbnRzIGJvYXJkP1xuICAgIGlmKEh1bWFuLmJvYXJkLnNoaXBzTGVmdCA9PT0gNSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSgpOiBzdHJpbmcgfCBib29sZWFuIHsgLy8gY2hlY2sgdGhpcyBhZnRlciBldmVyeSBhdHRhY2sgaW4gZG9tIGlmIHJldHVybnMgbm90IGZhbHNlIHBvcCBhIG1vZGFsIHVwIHdpdGggd2lubmVyXG4gICAgaWYoSHVtYW4uYm9hcmQuY2hlY2tGb3JXaW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gSHVtYW4ucGxheWVyLm5hbWVcbiAgICB9XG4gICAgaWYoQ29tcHV0ZXIuYm9hcmQuY2hlY2tGb3JXaW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gQ29tcHV0ZXIucGxheWVyLm5hbWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGF0dGFjayhsb2NhdGlvbjogbnVtYmVyKSB7IC8vIHVzZSBpZiBzdGF0bWVudCwgaWYgcmV0dXJuV2hvc2V0dXJuKCkgaXMgMiB0aGVuIHJ1biBhdHRhY2sgYWdhaW4gdG8gZG8gY3B1IGF0dGFja1xuICAgIGlmKHJldHVybldob3NlVHVybigpID09PSAxKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIEh1bWFuLmh1bWFuQXR0YWNrKGxvY2F0aW9uKVxuICAgICAgICAgICAgd2hpY2hUdXJuKytcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYocmV0dXJuV2hvc2VUdXJuKCkgPT09IDIpIHtcbiAgICAgICAgQ29tcHV0ZXIuY3B1QXR0YWNrKCk7XG4gICAgICAgIHdoaWNoVHVybi0tXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5XaG9zZVR1cm4oKTogbnVtYmVyIHtcbiAgICBpZih3aGljaFR1cm4gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgZWxzZSBpZih3aGljaFR1cm4gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIDJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICB3aGljaFR1cm4gPSAxO1xuXG4gICAgSHVtYW4uYm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xuICAgIEh1bWFuLnBsYXllciA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXJcIik7XG5cbiAgICBDb21wdXRlci5ib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG4gICAgQ29tcHV0ZXIucGxheWVyID0gbmV3IFBsYXllcihcIkNvbXB1dGVyXCIpO1xufVxuXG5leHBvcnQge0NvbXB1dGVyLCBIdW1hbiwgZW5kR2FtZSwgYXR0YWNrLCByZXR1cm5XaG9zZVR1cm4sIGlzUGxheWVyQm9hcmRzU2V0dXAsIHJlc2V0R2FtZX1cblxuXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwc1wiO1xuaW50ZXJmYWNlIFNoaXBJbnRlcmZhY2Uge1xuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpc1N1bmsoKTogYm9vbGVhbixcbn1cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgYm9hcmQ6IGFueSAvLyBpbmRleCBzaWduaXR1cmUgc3R1ZmYgaW0gbm90IHN1cmUgaG93IHRvIHR5cGUgaXQgYnV0IGl0IGhhcyBzb21ldGhpbmcgdG8gZG8gd2l0aCB0aGUgb2JqZWN0cyBpbnNpZGUgb2YgaXQgOihcbiAgICBzaGlwczogU2hpcEludGVyZmFjZVtdXG4gICAgc2hpcHNMZWZ0OiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy4jbWFrZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLiNtYWtlU2hpcHMoKTtcbiAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSAwIC8vIFxuXG4gICAgfVxuICAgICNtYWtlQm9hcmQoKTogc3RyaW5nW10ge1xuICAgICAgICBsZXQgYm9hcmQ6IHN0cmluZ1tdID0gW11cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmQucHVzaCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG4gICAgI21ha2VTaGlwcygpOlNoaXBJbnRlcmZhY2VbXSB7XG4gICAgICAgIGxldCBzaGlwczogU2hpcEludGVyZmFjZVtdID0gW11cblxuICAgICAgICBsZXQgQ2FycmllciA9IG5ldyBTaGlwKDUsICdDYXJyaWVyJyk7XG4gICAgICAgIHNoaXBzLnB1c2goQ2Fycmllcik7XG4gICAgICAgIGxldCBCYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcbiAgICAgICAgc2hpcHMucHVzaChCYXR0bGVzaGlwKTtcbiAgICAgICAgbGV0IERlc3Ryb3llciA9IG5ldyBTaGlwKDMsICdEZXN0cm95ZXInKTtcbiAgICAgICAgc2hpcHMucHVzaChEZXN0cm95ZXIpO1xuICAgICAgICBsZXQgU3VibWFyaW5lID0gbmV3IFNoaXAoMywgJ1N1Ym1hcmluZScpO1xuICAgICAgICBzaGlwcy5wdXNoKFN1Ym1hcmluZSlcbiAgICAgICAgbGV0IFBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyLCAnUGF0cm9sIEJvYXQnKTtcbiAgICAgICAgc2hpcHMucHVzaChQYXRyb2xCb2F0KTtcbiAgICAgICAgcmV0dXJuIHNoaXBzXG4gICAgfVxuICAgIHBsYWNlU2hpcChsb2NhdGlvbjogbnVtYmVyW10sIHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYodGhpcy5jaGVja1ZhbGlkUExhY2VtZW50KGxvY2F0aW9uLCBzaGlwKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYWNlbWVudCEnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gPSB7U2hpcDogc2hpcCwgcG9zaXRpb246IGkrMSwgaXNTcG90SGl0OiBmYWxzZSx9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gdGhpcy5zaGlwc0xlZnQgKyAxO1xuICAgIH1cblxuICAgIHVuZG9MYXN0U2hpcFBsYWNlKCkge1xuICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogYW55LCBib2FyZDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuU2hpcC5uYW1lID09PSB0aGlzLnNoaXBzW3RoaXMuc2hpcHNMZWZ0IC0gMV0ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPiAwICkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrVmFsaWRQTGFjZW1lbnQobG9jYXRpb246IG51bWJlcltdLCBzaGlwOiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmKHNoaXAubGVuZ3RoICE9PSBsb2NhdGlvbi5sZW5ndGggKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYXRpb24ubGVuZ3RoOyBpKyspIHsgLy8gY2hlY2tzIGlmIGFub3RoZXIgc2hpcCBpcyBpbiB0aGUgc3BvdFxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihsb2NhdGlvblswXSAlIDEwID09PSBsb2NhdGlvblsxXSAlIDEwICkgeyAvLyB0aGlzIGlzIGEgaGFyZCBjaGVjayB0byB0ZXN0IGlmIHBsYXllciBjb3JkcyBmb3IgdmVydCBiZWZvcmUgY2hlY2tpbmcgaWYgaG9yaXpvbnRhbCBpcyBiYWRcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLiNjaGVja0hvcml6b250YWxDb3Jkcyhsb2NhdGlvbikubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgI2NoZWNrSG9yaXpvbnRhbENvcmRzKGFycmF5OiBudW1iZXJbXSkge1xuICAgICAgICBsZXQgZmlyc3ROdW1iZXJBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmKGFycmF5WzBdIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCAmJiBhcnJheVtpXSA+IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaCgwLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihhcnJheVswXSA8IDEwICYmIGFycmF5WzFdIDwgMTApIHtcbiAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaCgwKTtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdE51bWJlckFycmF5O1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN0cmluZ2lmaWVkTnVtOiBzdHJpbmcgPSBhcnJheVtpXS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IGZpcnN0TnVtID0gcGFyc2VJbnQoc3RyaW5naWZpZWROdW0uY2hhckF0KDApKTtcbiAgICAgICAgICAgIGlmKGZpcnN0TnVtICE9PSBmaXJzdE51bWJlckFycmF5WzBdKSB7XG4gICAgICAgICAgICAgICAgZmlyc3ROdW1iZXJBcnJheS5wdXNoKGZpcnN0TnVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheVxuICAgIH1cblxuICAgIHRha2VBdHRhY2sobG9jYXRpb246IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jYXRpb25dID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0gPSAnbWlzcyc7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtsb2NhdGlvbl1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuI2NoZWNrVmFsaWRIaXQobG9jYXRpb24pID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0uaXNTcG90SGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwLmhpdFNoaXAodGhpcy5ib2FyZFtsb2NhdGlvbl0ucG9zaXRpb24pOyAgIFxuICAgICAgICAgICAgICAgIGlmKHRoaXMuI2NoZWNrSWZCb2F0U3Vuayh0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVCb2F0Q291bnRlcldoZW5TdW5rKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVwb3J0U3Vua1NoaXAodGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoJ2ludmFsaWQgYXR0YWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjY2hlY2tWYWxpZEhpdChsb2NhdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLmJvYXJkW2xvY2F0aW9uXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbl0uaXNTcG90SGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAjY2hlY2tJZkJvYXRTdW5rKGJvYXQ6U2hpcEludGVyZmFjZSkge1xuICAgICAgICBpZihib2F0LmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICAjcmVwb3J0U3Vua1NoaXAoYm9hdDpTaGlwSW50ZXJmYWNlKSA6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gYCR7Ym9hdC5uYW1lfSBoYXMgU3VuayFgXG4gICAgfVxuXG4gICAgI3VwZGF0ZUJvYXRDb3VudGVyV2hlblN1bmsoYm9hdDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSB0aGlzLnNoaXBzTGVmdCAtIDE7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JXaW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm5WYWxpZFJhbmRvbUNvcmRzKGxlbmd0aDogbnVtYmVyLCBvcmllbnRhdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAncmFuZG9tJykge1xuICAgICAgICAgICAgb3JpZW50YXRpb24gPSB0aGlzLiNnZW5lcmF0ZVJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgbGV0IGhvcml6b250YWxDb3JkczogbnVtYmVyW10gPSB0aGlzLiNnZW5lcmF0ZUxlZ2FsSG9yaXpvbnRhbENvcmRzKGxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbENvcmRzO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBsZXQgdmVydGljYWxDb3JkczogbnVtYmVyW10gPSB0aGlzLiNnZW5lcmF0ZUxlZ2FsVmVydGljYWxDb3JkcyhsZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsQ29yZHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZ2VuZXJhdGVSYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG9yaWVudGF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICBnZW5lcmF0ZUNvcmRzRnJvbVN0YXJ0aW5nUG9zaXRpb24oc3RhcnQ6IG51bWJlciwgb3JpZW50YXRpb246IHN0cmluZywgc2hpcDogU2hpcEludGVyZmFjZSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IGNvcmRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ1gnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvcmRzLnB1c2goc3RhcnQgKyBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3Jkc1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3Jkcy5wdXNoKHN0YXJ0ICsgKGkgKiAxMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGg6IG51bWJlcikge1xuICAgICAgICBsZXQgY29yZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCByYW5kb21WZXJ0aWNhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICogMTA7IFxuICAgICAgICBsZXQgcmFuZG9tSG9yaXpvbnRhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBpZihyYW5kb21Ib3Jpem9udGFsICsgbGVuZ3RoID4gOSkge1xuICAgICAgICAgICAgcmFuZG9tSG9yaXpvbnRhbCA9IHJhbmRvbUhvcml6b250YWwgLSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmRvbUZpbmFsOiBudW1iZXIgPSByYW5kb21WZXJ0aWNhbCArIHJhbmRvbUhvcml6b250YWw7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29yZHMucHVzaChyYW5kb21GaW5hbCArIGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3Jkc1xuICAgIH1cblxuICAgICNnZW5lcmF0ZUxlZ2FsVmVydGljYWxDb3JkcyhsZW5ndGg6IG51bWJlcikge1xuICAgICAgICBsZXQgY29yZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCByYW5kb21WZXJ0aWNhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgbGV0IHJhbmRvbUhvcml6b250YWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgaWYocmFuZG9tVmVydGljYWwgKyBsZW5ndGggPiA5KSB7XG4gICAgICAgICAgICByYW5kb21WZXJ0aWNhbCA9IHJhbmRvbVZlcnRpY2FsIC0gbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgKiAxMDtcbiAgICAgICAgbGV0IHJhbmRvbUZpbmFsOiBudW1iZXIgPSByYW5kb21WZXJ0aWNhbCArIHJhbmRvbUhvcml6b250YWw7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29yZHMucHVzaChyYW5kb21GaW5hbCk7XG4gICAgICAgICAgICByYW5kb21GaW5hbCA9IHJhbmRvbUZpbmFsICsgMTA7IC8vIGFkZHMgdG8gdG8gdGhlIG51bWJlciB0byBzaW11bGF0ZSBtb3ZpbmcgZG93biBhIHJvdyBpbiB0aGUgZ3JpZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3Jkc1xuICAgIH1cblxuICAgIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHRoaXMucmV0dXJuVmFsaWRSYW5kb21Db3JkcyhzaGlwLmxlbmd0aCwgJ3JhbmRvbScpLCBzaGlwKTtcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID4gNSkgeyAvLyBzdG9wcyBvdmVycGxhY2luZyBvZiBzaGlwcyBvbiBib2FyZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcHNMZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IDU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seShzaGlwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5KCkge1xuICAgICAgICBsZXQgaToga2V5b2YgdHlwZW9mIHRoaXMuc2hpcHM7XG4gICAgICAgIGZvcihpIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwUmFuZG9tbHkodGhpcy5zaGlwc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZCIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCJcblxuY2xhc3MgUGxheWVyIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGF0dGFja09wcG9uZW50KGNvcmRpbmF0ZXM6IG51bWJlciwgZ2FtZWJvYXJkOiBHYW1lYm9hcmQpOnN0cmluZyB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrID0gZ2FtZWJvYXJkLnRha2VBdHRhY2soY29yZGluYXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrO1xuXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9tQXR0YWNrKGdhbWVib2FyZDogR2FtZWJvYXJkKSB7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnYW1lYm9hcmQudGFrZUF0dGFjayhsb2NhdGlvbikgXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllclxuIiwiaW50ZXJmYWNlIFNoaXBJbnRlcmZhY2Uge1xuICAgICBsZW5ndGg6IG51bWJlcixcbiAgICAgaGl0OiBudW1iZXJbXSxcbiAgICAgbmFtZT86IHN0cmluZyAvLyB0aGF0cyBmb3Igb3B0aW9uYWxcbiAgICAgaXNTdW5rKCk6IGJvb2xlYW5cbiAgICAgaGl0U2hpcChpbmRleDogbnVtYmVyKTogbnVtYmVyW10gXG4gfVxuXG4gY2xhc3MgU2hpcCBpbXBsZW1lbnRzIFNoaXBJbnRlcmZhY2Uge1xuICAgICBsZW5ndGg6IG51bWJlclxuICAgICBoaXQ6IG51bWJlcltdXG4gICAgIG5hbWU6IHN0cmluZ1xuXG4gICAgIGNvbnN0cnVjdG9yKGxlbmd0aDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICAgdGhpcy5oaXQgPSBbXTtcbiAgICAgICAgIHRoaXMubmFtZSA9IG5hbWUgLy8gbWF5YmUgYWRkIGEgd2F5IHRvIHRlbGwgd2hhdCBhIHNoaXAgaXMgYmFzZWQgb24gbGVuZ3RoIGFzIGEgbWV0aG9kIG1heWJlPz9cbiAgICAgfVxuXG4gICAgIGlzU3VuaygpIHtcbiAgICAgICAgIGlmKHRoaXMuaGl0Lmxlbmd0aCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgfVxuICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICB9XG4gICAgIH1cblxuICAgICBoaXRTaGlwKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgIGlmKHRoaXMuI2NoZWNrRm9yVmFsaWRIaXQoaW5kZXgpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5oaXRcbiAgICAgICAgIH0gXG4gICAgICAgICB0aGlzLmhpdC5wdXNoKGluZGV4KTtcbiAgICAgICAgIHJldHVybiB0aGlzLmhpdFxuICAgICB9XG4gICAgICNjaGVja0ZvclZhbGlkSGl0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihpbmRleCA9PT0gdGhpcy5oaXRbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICB9XG4gfVxuIGV4cG9ydCBkZWZhdWx0IFNoaXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Q29tcHV0ZXIsIEh1bWFuLCBlbmRHYW1lLCBhdHRhY2ssIHJldHVybldob3NlVHVybiwgaXNQbGF5ZXJCb2FyZHNTZXR1cCwgcmVzZXRHYW1lfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5sZXQgYXhpczogc3RyaW5nID0gJ1gnOyBcblxuaW5pdFN0YXJ0KCk7XG5mdW5jdGlvbiBpbml0U3RhcnQoKSB7XG4gICAgaW5pdFN0YXJ0aW5nSFRNTCgpO1xuICAgIG1ha2VHcmlkKHN0YXJ0aW5nR3JpZEV2ZW50bGlzdG5lcnMsICdzdGFydCcpO1xuICAgIGNoYW5nZVBsYWNlU2hpcFRleHQoKTtcbiAgICBpbml0U3RhcnRCdG5zKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRTdGFydEJ0bnMoKSB7XG4gICAgbWFrZVJhbmRvbUJ0bigpO1xuICAgIG1ha2VVbmRvQnRuKCk7XG4gICAgbWFrZVJvdGF0aW9uQnRuKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VHcmlkKGV2ZW50TGlzdGVuZXJzOiBGdW5jdGlvbiwgYXBwZW5kTG9jYXRpb246IHN0cmluZykge1xuICAgIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZExvY2F0aW9uKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgbGV0IGdyaWRTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkU3BhY2Uuc2V0QXR0cmlidXRlKCdpZCcsIGkudG9TdHJpbmcoKSk7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJzKGdyaWRTcGFjZSk7XG4gICAgICAgIHN0YXJ0LmFwcGVuZENoaWxkKGdyaWRTcGFjZSk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHN0YXJ0aW5nR3JpZEV2ZW50bGlzdG5lcnMoZ3JpZFNwYWNlOiBIVE1MRWxlbWVudCkge1xuICAgIGdyaWRTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNob3dTaGlwUGxhY2VtZW50T25Ib3ZlcihncmlkU3BhY2UuaWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBncmlkU3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBjbGVhckhvdmVyU3R5bGVzKTtcblxuICAgIGdyaWRTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcGxhY2VIb3ZlcmVkU2hpcChncmlkU3BhY2UuaWQpO1xuICAgICAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdzdGFydCcpO1xuICAgICAgICBjaGFuZ2VQbGFjZVNoaXBUZXh0KCk7XG4gICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWFrZVJlYWR5YnRuKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufVxuXG5cbmZ1bmN0aW9uIGluaXRTdGFydGluZ0hUTUwoKSB7XG4gICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtYW5kLWJ1dHRvbnMtd3JhcHBlclwiPlxuICAgICAgICA8aDEgaWQ9XCJwbGFjZVNoaXBUZXh0XCI+UGxhY2UgWW91ciBTaGlwPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtYW5kLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGFydFwiIGNsYXNzPVwic3RhcnQgZ3JpZFwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJidG5Db250YWluZXJcIiBjbGFzcz1cInNoaXAtbWVudS1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInVuZG9cIj5VbmRvPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJvdGF0aW9uXCI+Um90YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmFuZG9tXCI+UmFuZG9tPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbn1cblxuZnVuY3Rpb24gZ2V0SG92ZXJDb3Jkcyhob3ZlcklEOiBzdHJpbmcpIHtcbiAgICBsZXQgY29yZHM6bnVtYmVyW10gPSBIdW1hbi5ib2FyZC5nZW5lcmF0ZUNvcmRzRnJvbVN0YXJ0aW5nUG9zaXRpb24ocGFyc2VJbnQoaG92ZXJJRCksIGF4aXMsIEh1bWFuLmJvYXJkLnNoaXBzW0h1bWFuLmJvYXJkLnNoaXBzTGVmdF0pO1xuICAgIHJldHVybiBjb3Jkc1xufVxuXG5mdW5jdGlvbiBwbGFjZUhvdmVyZWRTaGlwKGhvdmVySUQ6IHN0cmluZykge1xuICAgIGxldCBjb3JkczpudW1iZXJbXSA9IGdldEhvdmVyQ29yZHMoaG92ZXJJRCk7XG4gICAgdHJ5IHtcbiAgICAgICAgSHVtYW4ucGxhY2VTaGlwKGNvcmRzKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93U2hpcFBsYWNlbWVudE9uSG92ZXIoaG92ZXJJRDogc3RyaW5nKSB7XG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5jaGlsZHJlbjtcbiAgICBsZXQgY29yZHM6bnVtYmVyW10gPSBnZXRIb3ZlckNvcmRzKGhvdmVySUQpO1xuICAgIGlmKEh1bWFuLmJvYXJkLmNoZWNrVmFsaWRQTGFjZW1lbnQoY29yZHMsIEh1bWFuLmJvYXJkLnNoaXBzW0h1bWFuLmJvYXJkLnNoaXBzTGVmdF0pID09PSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludChncmlkW2ldLmlkKSA9PT0gY29yZHNbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFtpXS5jbGFzc0xpc3QuYWRkKCdzaGlwLWhvdmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBncmlkW3BhcnNlSW50KGhvdmVySUQpXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFySG92ZXJTdHlsZXMoKSB7XG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5jaGlsZHJlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihncmlkW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1ob3ZlcicpKSB7XG4gICAgICAgICAgICBncmlkW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtaG92ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZihncmlkW2ldLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgZ3JpZFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY2hhbmdlUGxhY2VTaGlwVGV4dCgpIHtcbiAgICBsZXQgcGxhY2VTaGlwVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZVNoaXBUZXh0Jyk7XG4gICAgaWYoaXNQbGF5ZXJCb2FyZHNTZXR1cCgpID09PSB0cnVlKSB7XG4gICAgICAgIHBsYWNlU2hpcFRleHQuaW5uZXJUZXh0ID0gJ0NsaWNrIFJlYWR5IFRvIEJlZ2luISc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwbGFjZVNoaXBUZXh0LmlubmVyVGV4dCA9IGBQbGFjZSBZb3VyICR7SHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XS5uYW1lfSFgO1xuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIG1ha2VSYW5kb21CdG4oKSB7XG4gICAgbGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIEh1bWFuLmJvYXJkLnBsYWNlU2hpcFJhbmRvbWx5KEh1bWFuLmJvYXJkLnNoaXBzW0h1bWFuLmJvYXJkLnNoaXBzTGVmdF0pO1xuICAgICAgICAgICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKEh1bWFuLmJvYXJkLCAnc3RhcnQnKTtcbiAgICAgICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1ha2VSZWFkeWJ0bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VVbmRvQnRuKCkge1xuICAgIGxldCB1bmRvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuZG8nKTtcbiAgICB1bmRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihpc1BsYXllckJvYXJkc1NldHVwKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCByZWFkeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkeScpO1xuICAgICAgICAgICAgcmVhZHlCdG4ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgSHVtYW4uYm9hcmQudW5kb0xhc3RTaGlwUGxhY2UoKTtcbiAgICAgICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xuICAgICAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdzdGFydCcpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlUm90YXRpb25CdG4oKSB7XG4gICAgbGV0IHJvdGF0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uJyk7XG4gICAgcm90YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQXhpcygpIHtcbiAgICBpZihheGlzID09PSAnWCcpIHtcbiAgICAgICAgYXhpcyA9ICdZJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF4aXMgPSAnWCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUmVhZHlidG4oKSB7XG4gICAgbGV0IHJlYWR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVhZHlCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdyZWFkeScpO1xuICAgIHJlYWR5QnRuLmlubmVyVGV4dCA9ICdSZWFkeSc7XG5cbiAgICByZWFkeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgICAgbWFrZUdhbWVwbGF5RE9NKCk7XG4gICAgICAgIGluaXRHYW1lcGxheSgpO1xuICAgICAgICAvLyBwdXQgdGhlIGFib3V2ZSBmdW5jdGlvbiBpbiBhbiBpbml0IGdhbWVwbGF5IGZ1bmN0aW9uIHdyYXBwZXIgXG4gICAgfSk7XG5cbiAgICBsZXQgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkNvbnRhaW5lcicpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWFkeUJ0bik7XG59XG5cbmZ1bmN0aW9uIGluaXRHYW1lcGxheSgpIHtcbiAgICBtYWtlUGxheWVyR2FtZUJvYXJkKCk7XG4gICAgbWFrZUNvbXB1dGVyR2FtZUJvYXJkKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBtYWtlR2FtZXBsYXlET00oKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9XCJnYW1lLWJveFwiPlxuICAgIDxoMT5UaGlzIHNob3dzIHN0YXR1cyBvZiB5b3VyIGxhc3QgYXR0YWNrITwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImdyaWRzLWFuZC10ZXh0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lcGxheS1ncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGxheWVyR3JpZFwiIGNsYXNzPVwiZ3JpZCBzdGFydFwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMj5QbGF5ZXIgc2hpcHMgcmVtYWluaW5nOiAwPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lcGxheS1ncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29tcHV0ZXJHcmlkXCIgY2xhc3M9XCJncmlkIHN0YXJ0XCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyPkNvbXB1dGVyIHNoaXBzIHJlbWFpbmluZzogMDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcbn1cblxuZnVuY3Rpb24gbWFrZVBsYXllckdhbWVCb2FyZCgpIHtcbiAgICBtYWtlR3JpZChwbGF5ZXJCb2FyZEV2ZW50cywgJ3BsYXllckdyaWQnKTtcbiAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdwbGF5ZXJHcmlkJyk7XG59XG5cbiBmdW5jdGlvbiBwbGF5ZXJCb2FyZEV2ZW50cygpIHtcblxuIH1cblxuIGZ1bmN0aW9uIG1ha2VDb21wdXRlckdhbWVCb2FyZCgpIHtcbiAgICBDb21wdXRlci5jcHVQbGFjZVNoaXBzKCk7XG4gICAgbWFrZUdyaWQoY29tcHV0ZXJCb2FyZEV2ZW50cywgJ2NvbXB1dGVyR3JpZCcpO1xuICAgIHJlbmRlckdhbWVCb2FyZChDb21wdXRlci5ib2FyZCwgJ2NvbXB1dGVyR3JpZCcpO1xuIH1cblxuIGZ1bmN0aW9uIGNvbXB1dGVyQm9hcmRFdmVudHMoKSB7XG5cbiB9XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVCb2FyZChnYW1lYm9hcmQ6IEdhbWVib2FyZCwgZ3JpZDogc3RyaW5nKSB7XG4gICAgbGV0IERPTWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ3JpZCk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgaWYoZ2FtZWJvYXJkLmJvYXJkW2ldID09PSAnJykge1xuICAgICAgICAgICAgaWYoRE9NYm9hcmQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgICAgICAgICAgICBET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihnYW1lYm9hcmQuYm9hcmRbaV0gPT09ICdtaXNzJykge1xuICAgICAgICAgICAgRE9NYm9hcmQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAvLyBtaWdodCBuZWVkIHRvIHNldCB0aGlzIHRvIG5vdCBzaG93IHNoaXAgaWYgaXMgY29tcHV0ZXIgcGxheWVyXG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV0uaXNTcG90SGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmKERPTWJvYXJkLmlkID09PSAncGxheWVyR3JpZCcgfHwgRE9NYm9hcmQuaWQgPT09ICdzdGFydCcpIHsgLy8gb25seSBzaG93cyBzaGlwIGlmIGl0cyBvbiBhIHBsYXllcnMgZ3JpZCBvciBzdGFydGluZyBncmlkXG4gICAgICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUFVUIEEgU1BPVCBPTiBUSEUgQk9BUkQgVEhBVCBIQVMgVEVYVCBBRlRFUiBFVkVSWSBBVFRBQ0sgVEhBVCBTSE9XUyBXSEFUIEhBUFBFTkVEIExBU1QgVFVSTiFcblxuLy8gT04gSE9WRVIgQUREIEEgQ0xBU1MgVE8gR1JJRCBUSEFUIENPTE9SUyBJTiBUSEUgU1BBQ0VTIElGIFRIRVkgQ0hFQ0sgT1VUIFBST1BFUkxZIElOIGNoZWNrVmFsaWRQbGFjZW1lbnQgQU5EIFJFTU9WRVMgQUxMIE9USEVSIElOU1RBTkNFUyBPRiBIT1ZFUiBDTEFTUyBGUk9NIEdSSURcblxuLy8gV0hFTiBZT1UgQ0xJQ0sgQU5EIFBMQUNFIEEgU0hJUCBKVVNUIFNFTkQgVEhFIENPUkRTIFRPIFRIRSBQTEFDRSBTSElQIEZVTkNUSU9OISBBTkQgVEhFTiBSVU4gQSBTRVBFUkFURSBGVU5USU9OIFRIQVQgVVBEQVRFUyBUSEUgRE9NIEdSSUQgUklHSFQgQUZURVIhXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==