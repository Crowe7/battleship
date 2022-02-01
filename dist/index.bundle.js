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
        showShipPlacementOnHover(gridSpace.id);
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
        // put the load function here for game dom
    });
    let btnContainer = document.getElementById('btnContainer');
    btnContainer.appendChild(readyBtn);
}
function clearDOM() {
    let content = document.getElementById('content');
    content.innerHTML = '';
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
        else {
            if (gameboard.board[i].isSpotHit === false) {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDTDtBQUUvQixJQUFJLFNBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7QUFFM0QsSUFBSSxRQUFRLEdBQXFGO0lBQzdGLEtBQUssRUFBRyxJQUFJLGtEQUFTO0lBQ3JCLE1BQU0sRUFBRyxJQUFJLGdEQUFNLENBQUMsVUFBVSxDQUFDO0lBQy9CLGFBQWEsRUFBRSxHQUFHLEVBQUU7UUFDaEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsc0NBQXNDO0lBQ2xGLENBQUM7SUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ1osSUFBSTtZQUNBLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztRQUFDLE9BQU0sS0FBSyxFQUFFO1lBQ1gsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztDQUVKO0FBRUQsSUFBSSxLQUFLLEdBQStHO0lBQ3BILEtBQUssRUFBRSxJQUFJLGtEQUFTO0lBQ3BCLE1BQU0sRUFBRSxJQUFJLGdEQUFNLENBQUMsUUFBUSxDQUFDO0lBQzVCLFNBQVMsQ0FBQyxLQUFlO1FBQ3JCLElBQUc7WUFDQyxJQUFJLFVBQVUsR0FBVyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEM7UUFBQyxPQUFNLEtBQUssRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBQ0QsV0FBVyxDQUFDLFFBQWdCO1FBQ3hCLElBQUk7WUFDQSxJQUFJLFlBQVksR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pGLE9BQU8sWUFBWSxDQUFDO1NBQ3ZCO1FBQUMsT0FBTSxLQUFLLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLElBQVk7UUFDekIsSUFBRyxJQUFJLEtBQUssVUFBVSxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBRSxjQUFjLENBQUM7U0FDbkM7UUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBRUQsU0FBUyxtQkFBbUI7SUFDeEIsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUU7UUFDNUIsT0FBTyxJQUFJO0tBQ2Q7SUFDRCxPQUFPLEtBQUs7QUFDaEIsQ0FBQztBQUVELFNBQVMsT0FBTztJQUNaLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbkMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7S0FDM0I7SUFDRCxJQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3RDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJO0tBQzlCO0lBQ0QsT0FBTyxLQUFLO0FBQ2hCLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxRQUFnQjtJQUM1QixJQUFHLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRTtRQUN4QixJQUFHO1lBQ0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDM0IsU0FBUyxFQUFFO1NBQ2Q7UUFBQyxPQUFNLEtBQUssRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3pCO0tBQ0o7U0FDSSxJQUFHLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRTtRQUM3QixRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsU0FBUyxFQUFFO0tBQ2Q7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3BCLElBQUcsU0FBUyxLQUFLLENBQUMsRUFBRTtRQUNoQixPQUFPLENBQUM7S0FDWDtTQUNJLElBQUcsU0FBUyxLQUFLLENBQUMsRUFBRTtRQUNyQixPQUFPLENBQUM7S0FDWDtBQUNMLENBQUM7QUFFRCxTQUFTLFNBQVM7SUFDZCxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBRWQsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGtEQUFTLENBQUM7SUFDNUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLGdEQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFcEMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLGtEQUFTLENBQUM7SUFDL0IsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdEQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUV5Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHL0Q7QUFNM0IsTUFBTSxTQUFTO0lBS1g7O1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRywyQkFBSSxrREFBVyxNQUFmLElBQUksQ0FBYSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsMkJBQUksa0RBQVcsTUFBZixJQUFJLENBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxHQUFHO0lBRTFCLENBQUM7SUEwQkQsU0FBUyxDQUFDLFFBQWtCLEVBQUUsSUFBbUI7UUFDN0MsSUFBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNsRCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDekM7UUFDRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxHQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxHQUFFLENBQUM7U0FDNUU7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxpQkFBaUI7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQVksRUFBRSxDQUFNLEVBQUUsS0FBVSxFQUFFLEVBQUU7WUFDcEQsSUFBRyxPQUFPLEtBQUssRUFBRSxFQUFFO2dCQUNmLElBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtvQkFDMUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFFakI7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRztZQUNwQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxRQUFrQixFQUFFLElBQW1CO1FBQ3ZELElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFHO1lBQ2pDLE9BQU8sS0FBSztTQUNmO1FBQ0QsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSx3Q0FBd0M7WUFDL0UsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0IsT0FBTyxLQUFLO2FBQ2Y7U0FDSjtRQUVELElBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFHLEVBQUUsNkZBQTZGO1lBQ3RJLE9BQU8sSUFBSTtTQUNkO1FBRUQsSUFBRywyQkFBSSw2REFBc0IsTUFBMUIsSUFBSSxFQUF1QixRQUFRLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTBCRCxVQUFVLENBQUMsUUFBZ0I7UUFDdkIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQzlCO2FBQ0k7WUFDRCxJQUFHLDJCQUFJLHNEQUFlLE1BQW5CLElBQUksRUFBZ0IsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRSxJQUFHLDJCQUFJLHdEQUFpQixNQUFyQixJQUFJLEVBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO29CQUMxRCwyQkFBSSxrRUFBMkIsTUFBL0IsSUFBSSxFQUE0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzRCxPQUFPLDJCQUFJLHVEQUFnQixNQUFwQixJQUFJLEVBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFEO2dCQUNELE9BQU8sS0FBSyxDQUFDO2FBQ2hCO2lCQUNJO2dCQUNELE1BQU0sSUFBSSxLQUFLLENBQUUsZ0JBQWdCLENBQUMsQ0FBQzthQUN0QztTQUNKO0lBQ0wsQ0FBQztJQTRCRCxXQUFXO1FBQ1AsSUFBRyxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRTtZQUNyQixPQUFPLElBQUk7U0FDZDtRQUNELE9BQU8sS0FBSztJQUNoQixDQUFDO0lBQ0Qsc0JBQXNCLENBQUMsTUFBYyxFQUFFLFdBQW1CO1FBQ3RELElBQUcsV0FBVyxLQUFLLFFBQVEsRUFBRTtZQUN6QixXQUFXLEdBQUcsMkJBQUksa0VBQTJCLE1BQS9CLElBQUksQ0FBNkIsQ0FBQztTQUNuRDtRQUNELElBQUcsV0FBVyxLQUFLLFlBQVksRUFBRTtZQUM3QixJQUFJLGVBQWUsR0FBYSwyQkFBSSxxRUFBOEIsTUFBbEMsSUFBSSxFQUErQixNQUFNLENBQUMsQ0FBQztZQUMzRSxPQUFPLGVBQWUsQ0FBQztTQUMxQjtRQUNELElBQUcsV0FBVyxLQUFLLFVBQVUsRUFBRTtZQUMzQixJQUFJLGFBQWEsR0FBYSwyQkFBSSxtRUFBNEIsTUFBaEMsSUFBSSxFQUE2QixNQUFNLENBQUMsQ0FBQztZQUN2RSxPQUFPLGFBQWEsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFjRCxpQ0FBaUMsQ0FBQyxLQUFhLEVBQUUsV0FBbUIsRUFBRSxJQUFtQjtRQUNyRixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7UUFDekIsSUFBRyxXQUFXLEtBQUssR0FBRyxFQUFFO1lBQ3BCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QjtZQUNELE9BQU8sS0FBSztTQUNmO2FBQ0k7WUFDRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUNELE9BQU8sS0FBSztTQUNmO0lBQ0wsQ0FBQztJQWdDRCxpQkFBaUIsQ0FBQyxJQUFtQjtRQUNqQyxJQUFJO1lBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6RSxJQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEVBQUUsc0NBQXNDO2dCQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDdEI7U0FFSjtRQUFDLE9BQU0sS0FBSyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCxxQkFBcUI7UUFDakIsSUFBSSxDQUEwQixDQUFDO1FBQy9CLEtBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7Q0FDSjs7SUE3T08sSUFBSSxLQUFLLEdBQWEsRUFBRTtJQUN4QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsQjtLQUNKO0lBRUQsT0FBTyxLQUFLO0FBQ2hCLENBQUM7SUFFRyxJQUFJLEtBQUssR0FBb0IsRUFBRTtJQUUvQixJQUFJLE9BQU8sR0FBRyxJQUFJLDhDQUFJLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsSUFBSSxVQUFVLEdBQUcsSUFBSSw4Q0FBSSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksU0FBUyxHQUFHLElBQUksOENBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QixJQUFJLFNBQVMsR0FBRyxJQUFJLDhDQUFJLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3JCLElBQUksVUFBVSxHQUFHLElBQUksOENBQUksQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QixPQUFPLEtBQUs7QUFDaEIsQ0FBQyw2RUE4Q3FCLEtBQWU7SUFDakMsSUFBSSxnQkFBZ0IsR0FBYSxFQUFFLENBQUM7SUFDcEMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFHLEVBQUU7UUFDL0IsSUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2QsSUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sZ0JBQWdCO2FBQzFCO1NBQ0o7S0FDUjtJQUNELElBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQy9CLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLGdCQUFnQixDQUFDO0tBQzNCO0lBQ0QsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxjQUFjLEdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBRyxRQUFRLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO0tBQ0o7SUFDRCxPQUFPLGdCQUFnQjtBQUMzQixDQUFDLCtEQXVCYyxRQUFnQjtJQUMzQixJQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDekMsT0FBTyxLQUFLO0tBQ2Y7U0FDSTtRQUNELElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3hDLE9BQU8sS0FBSztTQUNmO0tBQ0o7SUFDRCxPQUFPLElBQUk7QUFDZixDQUFDLG1FQUVnQixJQUFrQjtJQUMvQixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDdkIsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUMsaUVBRWUsSUFBa0I7SUFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLFlBQVk7QUFDdkMsQ0FBQyx1RkFFMEIsSUFBbUI7SUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUM1QyxDQUFDO0lBdUJHLElBQUksV0FBVyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXhELElBQUcsV0FBVyxLQUFLLENBQUMsRUFBRTtRQUNsQixPQUFPLFVBQVU7S0FDcEI7U0FDSSxJQUFHLFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFDdkIsT0FBTyxZQUFZO0tBQ3RCO0FBQ0wsQ0FBQyw2RkFtQjZCLE1BQWM7SUFDeEMsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQ3pCLElBQUksY0FBYyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqRSxJQUFJLGdCQUFnQixHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlELElBQUcsZ0JBQWdCLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM5QixnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxNQUFNLENBQUM7S0FDaEQ7SUFDRCxJQUFJLFdBQVcsR0FBVyxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFDNUQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMvQjtJQUNELE9BQU8sS0FBSztBQUNoQixDQUFDLHlGQUUyQixNQUFjO0lBQ3RDLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUN6QixJQUFJLGNBQWMsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1RCxJQUFJLGdCQUFnQixHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlELElBQUcsY0FBYyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDNUIsY0FBYyxHQUFHLGNBQWMsR0FBRyxNQUFNLENBQUM7S0FDNUM7SUFDRCxjQUFjLEdBQUcsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUNyQyxJQUFJLFdBQVcsR0FBVyxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFDNUQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFdBQVcsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsa0VBQWtFO0tBQ3JHO0lBQ0QsT0FBTyxLQUFLO0FBQ2hCLENBQUM7QUF1QkwsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDL1B4QixNQUFNLE1BQU07SUFFUixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO0lBQ3BCLENBQUM7SUFFRCxjQUFjLENBQUMsVUFBa0IsRUFBRSxTQUFvQjtRQUNuRCxJQUFJO1lBQ0EsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QyxPQUFPLE1BQU0sQ0FBQztTQUVqQjtRQUFDLE9BQU0sS0FBSyxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsU0FBb0I7UUFDN0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSTtZQUNBLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDO1FBQUMsT0FBTSxLQUFLLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFFLEtBQUssQ0FBQztTQUMxQjtJQUNMLENBQUM7Q0FDSjtBQUVELGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCcEIsTUFBTSxJQUFJO0lBS04sWUFBWSxNQUFjLEVBQUUsSUFBWTs7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFBQyw2RUFBNkU7SUFDbEcsQ0FBQztJQUVELE1BQU07UUFDRixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEMsT0FBTyxJQUFJO1NBQ2Q7YUFDSTtZQUNELE9BQU8sS0FBSztTQUNmO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhO1FBQ2pCLElBQUcsMkJBQUksK0NBQWtCLE1BQXRCLElBQUksRUFBbUIsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFHO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLEdBQUc7U0FDbEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHO0lBQ25CLENBQUM7Q0FTSjswRkFScUIsS0FBYTtJQUM1QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixPQUFPLEtBQUs7U0FDZjtLQUNKO0lBQ0QsT0FBTyxJQUFJO0FBQ2QsQ0FBQztBQUVMLGlFQUFlLElBQUk7Ozs7Ozs7VUM1Q3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUc7QUFHekcsSUFBSSxJQUFJLEdBQVcsR0FBRyxDQUFDO0FBRXRCLFNBQVMsRUFBRSxDQUFDO0FBQ2IsU0FBUyxTQUFTO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixRQUFRLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixhQUFhLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxhQUFhO0lBQ2xCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsZUFBZSxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLGNBQXdCLEVBQUUsY0FBc0I7SUFDOUQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0MsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDaEM7QUFFTCxDQUFDO0FBRUQsU0FBUyx5QkFBeUIsQ0FBQyxTQUFzQjtJQUNyRCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtRQUN6Qyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFekQsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDckMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLGVBQWUsQ0FBQyw4Q0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLG1CQUFtQixFQUFFLENBQUM7UUFDdEIsSUFBRywwREFBbUIsRUFBRSxLQUFLLElBQUksRUFBRTtZQUMvQixZQUFZLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQztBQUdELFNBQVMsZ0JBQWdCO0lBQ3BCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFakQsT0FBTyxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7OztXQWFkLENBQUM7QUFDWixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsT0FBZTtJQUNsQyxJQUFJLEtBQUssR0FBWSxnRkFBNkMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLG9EQUFpQixDQUFDLHdEQUFxQixDQUFDLENBQUMsQ0FBQztJQUN0SSxPQUFPLEtBQUs7QUFDaEIsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsT0FBZTtJQUNyQyxJQUFJLEtBQUssR0FBWSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsSUFBSTtRQUNBLGtEQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7SUFBQyxPQUFNLEtBQUssRUFBRTtRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7QUFDTCxDQUFDO0FBRUQsU0FBUyx3QkFBd0IsQ0FBQyxPQUFlO0lBQzdDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3JELElBQUksS0FBSyxHQUFZLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxJQUFHLGtFQUErQixDQUFDLEtBQUssRUFBRSxvREFBaUIsQ0FBQyx3REFBcUIsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQzFGLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDdkM7YUFDSjtTQUNKO0tBQ0o7U0FDSTtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JEO0FBQ0wsQ0FBQztBQUNELFNBQVMsZ0JBQWdCO0lBQ3JCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3JELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0o7QUFDTCxDQUFDO0FBQ0QsU0FBUyxtQkFBbUI7SUFDeEIsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3RCxJQUFHLDBEQUFtQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQy9CLGFBQWEsQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7S0FDckQ7U0FDSTtRQUNELGFBQWEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxvREFBaUIsQ0FBQyx3REFBcUIsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQzVGO0FBQ0wsQ0FBQztBQUlELFNBQVMsYUFBYTtJQUNsQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3JDLElBQUcsMERBQW1CLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDaEMsZ0VBQTZCLENBQUMsb0RBQWlCLENBQUMsd0RBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLG1CQUFtQixFQUFFLENBQUM7WUFDdEIsZUFBZSxDQUFDLDhDQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdEMsSUFBRywwREFBbUIsRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDL0IsWUFBWSxFQUFFLENBQUM7YUFDbEI7U0FDSjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsV0FBVztJQUNoQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ25DLElBQUcsMERBQW1CLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRCxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDckI7UUFDRCxnRUFBNkIsRUFBRSxDQUFDO1FBQ2hDLG1CQUFtQixFQUFFLENBQUM7UUFDdEIsZUFBZSxDQUFDLDhDQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3BCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEQsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRUQsU0FBUyxVQUFVO0lBQ2YsSUFBRyxJQUFJLEtBQUssR0FBRyxFQUFFO1FBQ2IsSUFBSSxHQUFHLEdBQUcsQ0FBQztLQUNkO1NBQ0k7UUFDRCxJQUFJLEdBQUcsR0FBRyxDQUFDO0tBQ2Q7QUFDTCxDQUFDO0FBRUQsU0FBUyxZQUFZO0lBQ2pCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsUUFBUSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFFN0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDcEMsUUFBUSxFQUFFLENBQUM7UUFDWCwwQ0FBMEM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELFNBQVMsUUFBUTtJQUNiLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakQsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDM0IsQ0FBQztBQUlELFNBQVMsZUFBZSxDQUFDLFNBQW9CLEVBQUUsSUFBWTtJQUN2RCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsSUFBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMxQixJQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDaEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2pEO1NBQ0o7YUFDSSxJQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQ25DLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QzthQUNJO1lBQ0QsSUFBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7Z0JBQ3ZDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QztpQkFDSTtnQkFDRCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0M7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQUVELCtGQUErRjtBQUUvRixvS0FBb0s7QUFFcEsseUpBQXlKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllcnNcIjtcblxubGV0IHdoaWNoVHVybjogbnVtYmVyID0gMTsgLy8gc2V0cyB0aGUgc3RhcnRpbmcgdHVybiBhcyBwMSBcblxubGV0IENvbXB1dGVyOiB7Ym9hcmQ6IEdhbWVib2FyZCwgcGxheWVyOiBQbGF5ZXIsIGNwdVBsYWNlU2hpcHM6IEZ1bmN0aW9uLCBjcHVBdHRhY2s6IEZ1bmN0aW9ufSA9IHtcbiAgICBib2FyZDogIG5ldyBHYW1lYm9hcmQsXG4gICAgcGxheWVyOiAgbmV3IFBsYXllcihcIkNvbXB1dGVyXCIpLFxuICAgIGNwdVBsYWNlU2hpcHM6ICgpID0+IHtcbiAgICAgICAgQ29tcHV0ZXIuYm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7IC8vIHJ1biB0aGlzIHdoZW4gcGxheWVyIGJvYXJkIGlzIHNldHVwXG4gICAgfSxcbiAgICBjcHVBdHRhY2s6ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIENvbXB1dGVyLnBsYXllci5yYW5kb21BdHRhY2soSHVtYW4uYm9hcmQpO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBDb21wdXRlci5jcHVBdHRhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5sZXQgSHVtYW46IHtib2FyZDogR2FtZWJvYXJkLCBwbGF5ZXI6IFBsYXllciwgcGxhY2VTaGlwOiBGdW5jdGlvbiwgaHVtYW5BdHRhY2s6IEZ1bmN0aW9uLCBjaGFuZ2VQbGF5ZXJOYW1lOiBGdW5jdGlvbn0gPSB7XG4gICAgYm9hcmQ6IG5ldyBHYW1lYm9hcmQsXG4gICAgcGxheWVyOiBuZXcgUGxheWVyKFwiUGxheWVyXCIpLCAgIFxuICAgIHBsYWNlU2hpcChjb3JkczogbnVtYmVyW10pIHsvLyB0aGVzZSBhcmUgZ290IGZyb20gZXZlbnQgbGlzdGVuZXIsIHB1dCB0aGlzIG9uIGV2ZW50IGxpc3RlbmVyIHByb2JhYmx5XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGxldCBzaGlwTnVtYmVyOiBudW1iZXIgPSBIdW1hbi5ib2FyZC5zaGlwc0xlZnQ7XG4gICAgICAgICAgICBsZXQgc2hpcCA9IEh1bWFuLmJvYXJkLnNoaXBzW3NoaXBOdW1iZXJdO1xuICAgICAgICAgICAgSHVtYW4uYm9hcmQucGxhY2VTaGlwKGNvcmRzLCBzaGlwKTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGh1bWFuQXR0YWNrKGxvY2F0aW9uOiBudW1iZXIpOnN0cmluZyB7IC8vIHNldCBhIHZhcmlhYmxlIHRvIHRoaXMgYW5kIHRoZW4gYXNzaWduIHRoYXQgdG8gdGhlIGRvbSBzbyBpdCBjYW4gcmVwb3J0IHRoYXQgYXR0YWNrXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0OiBzdHJpbmcgPSBIdW1hbi5wbGF5ZXIuYXR0YWNrT3Bwb25lbnQobG9jYXRpb24sIENvbXB1dGVyLmJvYXJkKTtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpO1xuICAgICAgICB9ICAgICAgXG4gICAgfSxcblxuICAgIGNoYW5nZVBsYXllck5hbWUobmFtZTogc3RyaW5nKSB7IC8vIGFwcGVuZCB0aGlzIHRvIGEgbmFtZSB0ZXh0IGJveCBvbiB0aGUgZG9tXG4gICAgICAgIGlmKG5hbWUgPT09IFwiQ29tcHV0ZXJcIiB8fCBuYW1lID09PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnSW52YWxpZCBOYW1lJylcbiAgICAgICAgfVxuICAgICAgICBIdW1hbi5wbGF5ZXIubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1BsYXllckJvYXJkc1NldHVwKCk6IGJvb2xlYW4geyAvLyBhZnRlciBwbGF5ZXIgcGxhY2VzIHNoaXAgY2hlY2sgd2l0aCB0aGlzIGFuZCB3aGVuIGl0cyB0cnVlIGFwcGVuZCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIG9wcG9uZW50cyBib2FyZD9cbiAgICBpZihIdW1hbi5ib2FyZC5zaGlwc0xlZnQgPT09IDUpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUoKTogc3RyaW5nIHwgYm9vbGVhbiB7IC8vIGNoZWNrIHRoaXMgYWZ0ZXIgZXZlcnkgYXR0YWNrIGluIGRvbSBpZiByZXR1cm5zIG5vdCBmYWxzZSBwb3AgYSBtb2RhbCB1cCB3aXRoIHdpbm5lclxuICAgIGlmKEh1bWFuLmJvYXJkLmNoZWNrRm9yV2luKCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIEh1bWFuLnBsYXllci5uYW1lXG4gICAgfVxuICAgIGlmKENvbXB1dGVyLmJvYXJkLmNoZWNrRm9yV2luKCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIENvbXB1dGVyLnBsYXllci5uYW1lXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBhdHRhY2sobG9jYXRpb246IG51bWJlcikgeyAvLyB1c2UgaWYgc3RhdG1lbnQsIGlmIHJldHVybldob3NldHVybigpIGlzIDIgdGhlbiBydW4gYXR0YWNrIGFnYWluIHRvIGRvIGNwdSBhdHRhY2tcbiAgICBpZihyZXR1cm5XaG9zZVR1cm4oKSA9PT0gMSkge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBIdW1hbi5odW1hbkF0dGFjayhsb2NhdGlvbilcbiAgICAgICAgICAgIHdoaWNoVHVybisrXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKHJldHVybldob3NlVHVybigpID09PSAyKSB7XG4gICAgICAgIENvbXB1dGVyLmNwdUF0dGFjaygpO1xuICAgICAgICB3aGljaFR1cm4tLVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmV0dXJuV2hvc2VUdXJuKCk6IG51bWJlciB7XG4gICAgaWYod2hpY2hUdXJuID09PSAxKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGVsc2UgaWYod2hpY2hUdXJuID09PSAyKSB7XG4gICAgICAgIHJldHVybiAyXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgd2hpY2hUdXJuID0gMTtcblxuICAgIEh1bWFuLmJvYXJkID0gbmV3IEdhbWVib2FyZDtcbiAgICBIdW1hbi5wbGF5ZXIgPSBuZXcgUGxheWVyKFwiUGxheWVyXCIpO1xuXG4gICAgQ29tcHV0ZXIuYm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xuICAgIENvbXB1dGVyLnBsYXllciA9IG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiKTtcbn1cblxuZXhwb3J0IHtDb21wdXRlciwgSHVtYW4sIGVuZEdhbWUsIGF0dGFjaywgcmV0dXJuV2hvc2VUdXJuLCBpc1BsYXllckJvYXJkc1NldHVwLCByZXNldEdhbWV9XG5cblxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcHNcIjtcbmludGVyZmFjZSBTaGlwSW50ZXJmYWNlIHtcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaXNTdW5rKCk6IGJvb2xlYW4sXG59XG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGJvYXJkOiBhbnkgLy8gaW5kZXggc2lnbml0dXJlIHN0dWZmIGltIG5vdCBzdXJlIGhvdyB0byB0eXBlIGl0IGJ1dCBpdCBoYXMgc29tZXRoaW5nIHRvIGRvIHdpdGggdGhlIG9iamVjdHMgaW5zaWRlIG9mIGl0IDooXG4gICAgc2hpcHM6IFNoaXBJbnRlcmZhY2VbXVxuICAgIHNoaXBzTGVmdDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuI21ha2VCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy4jbWFrZVNoaXBzKCk7XG4gICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gMCAvLyBcblxuICAgIH1cbiAgICAjbWFrZUJvYXJkKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgbGV0IGJvYXJkOiBzdHJpbmdbXSA9IFtdXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2goJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvYXJkXG4gICAgfVxuICAgICNtYWtlU2hpcHMoKTpTaGlwSW50ZXJmYWNlW10ge1xuICAgICAgICBsZXQgc2hpcHM6IFNoaXBJbnRlcmZhY2VbXSA9IFtdXG5cbiAgICAgICAgbGV0IENhcnJpZXIgPSBuZXcgU2hpcCg1LCAnQ2FycmllcicpO1xuICAgICAgICBzaGlwcy5wdXNoKENhcnJpZXIpO1xuICAgICAgICBsZXQgQmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQsICdCYXR0bGVzaGlwJyk7XG4gICAgICAgIHNoaXBzLnB1c2goQmF0dGxlc2hpcCk7XG4gICAgICAgIGxldCBEZXN0cm95ZXIgPSBuZXcgU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gICAgICAgIHNoaXBzLnB1c2goRGVzdHJveWVyKTtcbiAgICAgICAgbGV0IFN1Ym1hcmluZSA9IG5ldyBTaGlwKDMsICdTdWJtYXJpbmUnKTtcbiAgICAgICAgc2hpcHMucHVzaChTdWJtYXJpbmUpXG4gICAgICAgIGxldCBQYXRyb2xCb2F0ID0gbmV3IFNoaXAoMiwgJ1BhdHJvbCBCb2F0Jyk7XG4gICAgICAgIHNoaXBzLnB1c2goUGF0cm9sQm9hdCk7XG4gICAgICAgIHJldHVybiBzaGlwc1xuICAgIH1cbiAgICBwbGFjZVNoaXAobG9jYXRpb246IG51bWJlcltdLCBzaGlwOiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tWYWxpZFBMYWNlbWVudChsb2NhdGlvbiwgc2hpcCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQbGFjZW1lbnQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25baV1dID0ge1NoaXA6IHNoaXAsIHBvc2l0aW9uOiBpKzEsIGlzU3BvdEhpdDogZmFsc2UsfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IHRoaXMuc2hpcHNMZWZ0ICsgMTtcbiAgICB9XG5cbiAgICB1bmRvTGFzdFNoaXBQbGFjZSgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKChlbGVtZW50OiBhbnksIGk6IGFueSwgYm9hcmQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LlNoaXAubmFtZSA9PT0gdGhpcy5zaGlwc1t0aGlzLnNoaXBzTGVmdCAtIDFdLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV0gPSAnJztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID4gMCApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0IC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1ZhbGlkUExhY2VtZW50KGxvY2F0aW9uOiBudW1iZXJbXSwgc2hpcDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICBpZihzaGlwLmxlbmd0aCAhPT0gbG9jYXRpb24ubGVuZ3RoICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2F0aW9uLmxlbmd0aDsgaSsrKSB7IC8vIGNoZWNrcyBpZiBhbm90aGVyIHNoaXAgaXMgaW4gdGhlIHNwb3RcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jYXRpb25baV1dICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobG9jYXRpb25bMF0gJSAxMCA9PT0gbG9jYXRpb25bMV0gJSAxMCApIHsgLy8gdGhpcyBpcyBhIGhhcmQgY2hlY2sgdG8gdGVzdCBpZiBwbGF5ZXIgY29yZHMgZm9yIHZlcnQgYmVmb3JlIGNoZWNraW5nIGlmIGhvcml6b250YWwgaXMgYmFkXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy4jY2hlY2tIb3Jpem9udGFsQ29yZHMobG9jYXRpb24pLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgICNjaGVja0hvcml6b250YWxDb3JkcyhhcnJheTogbnVtYmVyW10pIHtcbiAgICAgICAgbGV0IGZpcnN0TnVtYmVyQXJyYXk6IG51bWJlcltdID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZihhcnJheVswXSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFycmF5WzBdIDwgMTAgJiYgYXJyYXlbaV0gPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE51bWJlckFycmF5LnB1c2goMCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdE51bWJlckFycmF5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCAmJiBhcnJheVsxXSA8IDEwKSB7XG4gICAgICAgICAgICBmaXJzdE51bWJlckFycmF5LnB1c2goMCk7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdHJpbmdpZmllZE51bTogc3RyaW5nID0gYXJyYXlbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBmaXJzdE51bSA9IHBhcnNlSW50KHN0cmluZ2lmaWVkTnVtLmNoYXJBdCgwKSk7XG4gICAgICAgICAgICBpZihmaXJzdE51bSAhPT0gZmlyc3ROdW1iZXJBcnJheVswXSkge1xuICAgICAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaChmaXJzdE51bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyQXJyYXlcbiAgICB9XG5cbiAgICB0YWtlQXR0YWNrKGxvY2F0aW9uOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uXSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dID0gJ21pc3MnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbbG9jYXRpb25dXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLiNjaGVja1ZhbGlkSGl0KGxvY2F0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dLmlzU3BvdEhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcC5oaXRTaGlwKHRoaXMuYm9hcmRbbG9jYXRpb25dLnBvc2l0aW9uKTsgICBcbiAgICAgICAgICAgICAgICBpZih0aGlzLiNjaGVja0lmQm9hdFN1bmsodGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlQm9hdENvdW50ZXJXaGVuU3Vuayh0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3JlcG9ydFN1bmtTaGlwKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdpbnZhbGlkIGF0dGFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2NoZWNrVmFsaWRIaXQobG9jYXRpb246IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5ib2FyZFtsb2NhdGlvbl0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jYXRpb25dLmlzU3BvdEhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgI2NoZWNrSWZCb2F0U3Vuayhib2F0OlNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYoYm9hdC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgI3JlcG9ydFN1bmtTaGlwKGJvYXQ6U2hpcEludGVyZmFjZSkgOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIGAke2JvYXQubmFtZX0gaGFzIFN1bmshYFxuICAgIH1cblxuICAgICN1cGRhdGVCb2F0Q291bnRlcldoZW5TdW5rKGJvYXQ6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gdGhpcy5zaGlwc0xlZnQgLSAxO1xuICAgIH1cblxuICAgIGNoZWNrRm9yV2luKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aGlzLnNoaXBzTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuVmFsaWRSYW5kb21Db3JkcyhsZW5ndGg6IG51bWJlciwgb3JpZW50YXRpb246IHN0cmluZykge1xuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3JhbmRvbScpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gdGhpcy4jZ2VuZXJhdGVSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIGhvcml6b250YWxDb3JkcztcbiAgICAgICAgfVxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgbGV0IHZlcnRpY2FsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbFZlcnRpY2FsQ29yZHMobGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbENvcmRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2dlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKSB7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbjogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJ1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgZ2VuZXJhdGVDb3Jkc0Zyb21TdGFydGluZ1Bvc2l0aW9uKHN0YXJ0OiBudW1iZXIsIG9yaWVudGF0aW9uOiBzdHJpbmcsIHNoaXA6IFNoaXBJbnRlcmZhY2UpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICdYJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3Jkcy5wdXNoKHN0YXJ0ICsgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29yZHNcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29yZHMucHVzaChzdGFydCArIChpICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3Jkc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2dlbmVyYXRlTGVnYWxIb3Jpem9udGFsQ29yZHMobGVuZ3RoOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNvcmRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBsZXQgcmFuZG9tVmVydGljYWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSAqIDEwOyBcbiAgICAgICAgbGV0IHJhbmRvbUhvcml6b250YWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgaWYocmFuZG9tSG9yaXpvbnRhbCArIGxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgIHJhbmRvbUhvcml6b250YWwgPSByYW5kb21Ib3Jpem9udGFsIC0gbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCByYW5kb21GaW5hbDogbnVtYmVyID0gcmFuZG9tVmVydGljYWwgKyByYW5kb21Ib3Jpem9udGFsO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvcmRzLnB1c2gocmFuZG9tRmluYWwgKyBpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29yZHNcbiAgICB9XG5cbiAgICAjZ2VuZXJhdGVMZWdhbFZlcnRpY2FsQ29yZHMobGVuZ3RoOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNvcmRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBsZXQgcmFuZG9tVmVydGljYWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgIGxldCByYW5kb21Ib3Jpem9udGFsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGlmKHJhbmRvbVZlcnRpY2FsICsgbGVuZ3RoID4gOSkge1xuICAgICAgICAgICAgcmFuZG9tVmVydGljYWwgPSByYW5kb21WZXJ0aWNhbCAtIGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByYW5kb21WZXJ0aWNhbCA9IHJhbmRvbVZlcnRpY2FsICogMTA7XG4gICAgICAgIGxldCByYW5kb21GaW5hbDogbnVtYmVyID0gcmFuZG9tVmVydGljYWwgKyByYW5kb21Ib3Jpem9udGFsO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvcmRzLnB1c2gocmFuZG9tRmluYWwpO1xuICAgICAgICAgICAgcmFuZG9tRmluYWwgPSByYW5kb21GaW5hbCArIDEwOyAvLyBhZGRzIHRvIHRvIHRoZSBudW1iZXIgdG8gc2ltdWxhdGUgbW92aW5nIGRvd24gYSByb3cgaW4gdGhlIGdyaWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29yZHNcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBSYW5kb21seShzaGlwOiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcCh0aGlzLnJldHVyblZhbGlkUmFuZG9tQ29yZHMoc2hpcC5sZW5ndGgsICdyYW5kb20nKSwgc2hpcCk7XG4gICAgICAgICAgICBpZih0aGlzLnNoaXBzTGVmdCA+IDUpIHsgLy8gc3RvcHMgb3ZlcnBsYWNpbmcgb2Ygc2hpcHMgb24gYm9hcmRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNoaXBzTGVmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSA1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwUmFuZG9tbHkoc2hpcClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlQWxsU2hpcHNSYW5kb21seSgpIHtcbiAgICAgICAgbGV0IGk6IGtleW9mIHR5cGVvZiB0aGlzLnNoaXBzO1xuICAgICAgICBmb3IoaSBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHRoaXMuc2hpcHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiXG5cbmNsYXNzIFBsYXllciB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICBhdHRhY2tPcHBvbmVudChjb3JkaW5hdGVzOiBudW1iZXIsIGdhbWVib2FyZDogR2FtZWJvYXJkKTpzdHJpbmcge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGF0dGFjayA9IGdhbWVib2FyZC50YWtlQXR0YWNrKGNvcmRpbmF0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFjaztcblxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJhbmRvbUF0dGFjayhnYW1lYm9hcmQ6IEdhbWVib2FyZCkge1xuICAgICAgICBsZXQgbG9jYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnRha2VBdHRhY2sobG9jYXRpb24pIFxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJcbiIsImludGVyZmFjZSBTaGlwSW50ZXJmYWNlIHtcbiAgICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgIGhpdDogbnVtYmVyW10sXG4gICAgIG5hbWU/OiBzdHJpbmcgLy8gdGhhdHMgZm9yIG9wdGlvbmFsXG4gICAgIGlzU3VuaygpOiBib29sZWFuXG4gICAgIGhpdFNoaXAoaW5kZXg6IG51bWJlcik6IG51bWJlcltdIFxuIH1cblxuIGNsYXNzIFNoaXAgaW1wbGVtZW50cyBTaGlwSW50ZXJmYWNlIHtcbiAgICAgbGVuZ3RoOiBudW1iZXJcbiAgICAgaGl0OiBudW1iZXJbXVxuICAgICBuYW1lOiBzdHJpbmdcblxuICAgICBjb25zdHJ1Y3RvcihsZW5ndGg6IG51bWJlciwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgIHRoaXMuaGl0ID0gW107XG4gICAgICAgICB0aGlzLm5hbWUgPSBuYW1lIC8vIG1heWJlIGFkZCBhIHdheSB0byB0ZWxsIHdoYXQgYSBzaGlwIGlzIGJhc2VkIG9uIGxlbmd0aCBhcyBhIG1ldGhvZCBtYXliZT8/XG4gICAgIH1cblxuICAgICBpc1N1bmsoKSB7XG4gICAgICAgICBpZih0aGlzLmhpdC5sZW5ndGggPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgIH1cbiAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgaGl0U2hpcChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgICBpZih0aGlzLiNjaGVja0ZvclZhbGlkSGl0KGluZGV4KSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGl0XG4gICAgICAgICB9IFxuICAgICAgICAgdGhpcy5oaXQucHVzaChpbmRleCk7XG4gICAgICAgICByZXR1cm4gdGhpcy5oaXRcbiAgICAgfVxuICAgICAjY2hlY2tGb3JWYWxpZEhpdChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhpdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoaW5kZXggPT09IHRoaXMuaGl0W2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgfVxuIH1cbiBleHBvcnQgZGVmYXVsdCBTaGlwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0NvbXB1dGVyLCBIdW1hbiwgZW5kR2FtZSwgYXR0YWNrLCByZXR1cm5XaG9zZVR1cm4sIGlzUGxheWVyQm9hcmRzU2V0dXAsIHJlc2V0R2FtZX0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxubGV0IGF4aXM6IHN0cmluZyA9ICdYJzsgXG5cbiBpbml0U3RhcnQoKTtcbmZ1bmN0aW9uIGluaXRTdGFydCgpIHtcbiAgICBpbml0U3RhcnRpbmdIVE1MKCk7XG4gICAgbWFrZUdyaWQoc3RhcnRpbmdHcmlkRXZlbnRsaXN0bmVycywgJ3N0YXJ0Jyk7XG4gICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xuICAgIGluaXRTdGFydEJ0bnMoKTtcbn1cblxuZnVuY3Rpb24gaW5pdFN0YXJ0QnRucygpIHtcbiAgICBtYWtlUmFuZG9tQnRuKCk7XG4gICAgbWFrZVVuZG9CdG4oKTtcbiAgICBtYWtlUm90YXRpb25CdG4oKTtcbn1cblxuZnVuY3Rpb24gbWFrZUdyaWQoZXZlbnRMaXN0ZW5lcnM6IEZ1bmN0aW9uLCBhcHBlbmRMb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgbGV0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXBwZW5kTG9jYXRpb24pO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgZ3JpZFNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWRTcGFjZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaS50b1N0cmluZygpKTtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMoZ3JpZFNwYWNlKTtcbiAgICAgICAgc3RhcnQuYXBwZW5kQ2hpbGQoZ3JpZFNwYWNlKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gc3RhcnRpbmdHcmlkRXZlbnRsaXN0bmVycyhncmlkU3BhY2U6IEhUTUxFbGVtZW50KSB7XG4gICAgZ3JpZFNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgc2hvd1NoaXBQbGFjZW1lbnRPbkhvdmVyKGdyaWRTcGFjZS5pZCk7XG4gICAgfSk7XG5cbiAgICBncmlkU3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBjbGVhckhvdmVyU3R5bGVzKTtcblxuICAgIGdyaWRTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcGxhY2VIb3ZlcmVkU2hpcChncmlkU3BhY2UuaWQpO1xuICAgICAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdzdGFydCcpO1xuICAgICAgICBjaGFuZ2VQbGFjZVNoaXBUZXh0KCk7XG4gICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWFrZVJlYWR5YnRuKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufVxuXG5cbmZ1bmN0aW9uIGluaXRTdGFydGluZ0hUTUwoKSB7XG4gICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICBjb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtYW5kLWJ1dHRvbnMtd3JhcHBlclwiPlxuICAgICAgICA8aDEgaWQ9XCJwbGFjZVNoaXBUZXh0XCI+UGxhY2UgWW91ciBTaGlwPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtYW5kLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGFydFwiIGNsYXNzPVwic3RhcnQgZ3JpZFwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJidG5Db250YWluZXJcIiBjbGFzcz1cInNoaXAtbWVudS1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInVuZG9cIj5VbmRvPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJvdGF0aW9uXCI+Um90YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmFuZG9tXCI+UmFuZG9tPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbn1cblxuZnVuY3Rpb24gZ2V0SG92ZXJDb3Jkcyhob3ZlcklEOiBzdHJpbmcpIHtcbiAgICBsZXQgY29yZHM6bnVtYmVyW10gPSBIdW1hbi5ib2FyZC5nZW5lcmF0ZUNvcmRzRnJvbVN0YXJ0aW5nUG9zaXRpb24ocGFyc2VJbnQoaG92ZXJJRCksIGF4aXMsIEh1bWFuLmJvYXJkLnNoaXBzW0h1bWFuLmJvYXJkLnNoaXBzTGVmdF0pO1xuICAgIHJldHVybiBjb3Jkc1xufVxuXG5mdW5jdGlvbiBwbGFjZUhvdmVyZWRTaGlwKGhvdmVySUQ6IHN0cmluZykge1xuICAgIGxldCBjb3JkczpudW1iZXJbXSA9IGdldEhvdmVyQ29yZHMoaG92ZXJJRCk7XG4gICAgdHJ5IHtcbiAgICAgICAgSHVtYW4ucGxhY2VTaGlwKGNvcmRzKTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93U2hpcFBsYWNlbWVudE9uSG92ZXIoaG92ZXJJRDogc3RyaW5nKSB7XG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5jaGlsZHJlbjtcbiAgICBsZXQgY29yZHM6bnVtYmVyW10gPSBnZXRIb3ZlckNvcmRzKGhvdmVySUQpO1xuICAgIGlmKEh1bWFuLmJvYXJkLmNoZWNrVmFsaWRQTGFjZW1lbnQoY29yZHMsIEh1bWFuLmJvYXJkLnNoaXBzW0h1bWFuLmJvYXJkLnNoaXBzTGVmdF0pID09PSB0cnVlKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludChncmlkW2ldLmlkKSA9PT0gY29yZHNbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFtpXS5jbGFzc0xpc3QuYWRkKCdzaGlwLWhvdmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBncmlkW3BhcnNlSW50KGhvdmVySUQpXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFySG92ZXJTdHlsZXMoKSB7XG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5jaGlsZHJlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihncmlkW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1ob3ZlcicpKSB7XG4gICAgICAgICAgICBncmlkW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtaG92ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZihncmlkW2ldLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgZ3JpZFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY2hhbmdlUGxhY2VTaGlwVGV4dCgpIHtcbiAgICBsZXQgcGxhY2VTaGlwVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZVNoaXBUZXh0Jyk7XG4gICAgaWYoaXNQbGF5ZXJCb2FyZHNTZXR1cCgpID09PSB0cnVlKSB7XG4gICAgICAgIHBsYWNlU2hpcFRleHQuaW5uZXJUZXh0ID0gJ0NsaWNrIFJlYWR5IFRvIEJlZ2luISc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwbGFjZVNoaXBUZXh0LmlubmVyVGV4dCA9IGBQbGFjZSBZb3VyICR7SHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XS5uYW1lfSFgO1xuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIG1ha2VSYW5kb21CdG4oKSB7XG4gICAgbGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIEh1bWFuLmJvYXJkLnBsYWNlU2hpcFJhbmRvbWx5KEh1bWFuLmJvYXJkLnNoaXBzW0h1bWFuLmJvYXJkLnNoaXBzTGVmdF0pO1xuICAgICAgICAgICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKEh1bWFuLmJvYXJkLCAnc3RhcnQnKTtcbiAgICAgICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1ha2VSZWFkeWJ0bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VVbmRvQnRuKCkge1xuICAgIGxldCB1bmRvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuZG8nKTtcbiAgICB1bmRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihpc1BsYXllckJvYXJkc1NldHVwKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCByZWFkeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkeScpO1xuICAgICAgICAgICAgcmVhZHlCdG4ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgSHVtYW4uYm9hcmQudW5kb0xhc3RTaGlwUGxhY2UoKTtcbiAgICAgICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xuICAgICAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdzdGFydCcpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlUm90YXRpb25CdG4oKSB7XG4gICAgbGV0IHJvdGF0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uJyk7XG4gICAgcm90YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQXhpcygpIHtcbiAgICBpZihheGlzID09PSAnWCcpIHtcbiAgICAgICAgYXhpcyA9ICdZJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF4aXMgPSAnWCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUmVhZHlidG4oKSB7XG4gICAgbGV0IHJlYWR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVhZHlCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdyZWFkeScpO1xuICAgIHJlYWR5QnRuLmlubmVyVGV4dCA9ICdSZWFkeSc7XG5cbiAgICByZWFkeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgICAgLy8gcHV0IHRoZSBsb2FkIGZ1bmN0aW9uIGhlcmUgZm9yIGdhbWUgZG9tXG4gICAgfSk7XG5cbiAgICBsZXQgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkNvbnRhaW5lcicpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWFkeUJ0bik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xufVxuXG5cblxuZnVuY3Rpb24gcmVuZGVyR2FtZUJvYXJkKGdhbWVib2FyZDogR2FtZWJvYXJkLCBncmlkOiBzdHJpbmcpIHtcbiAgICBsZXQgRE9NYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChncmlkKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV0gPT09ICcnKSB7XG4gICAgICAgICAgICBpZihET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5ib2FyZFtpXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV0uaXNTcG90SGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBQVVQgQSBTUE9UIE9OIFRIRSBCT0FSRCBUSEFUIEhBUyBURVhUIEFGVEVSIEVWRVJZIEFUVEFDSyBUSEFUIFNIT1dTIFdIQVQgSEFQUEVORUQgTEFTVCBUVVJOIVxuXG4vLyBPTiBIT1ZFUiBBREQgQSBDTEFTUyBUTyBHUklEIFRIQVQgQ09MT1JTIElOIFRIRSBTUEFDRVMgSUYgVEhFWSBDSEVDSyBPVVQgUFJPUEVSTFkgSU4gY2hlY2tWYWxpZFBsYWNlbWVudCBBTkQgUkVNT1ZFUyBBTEwgT1RIRVIgSU5TVEFOQ0VTIE9GIEhPVkVSIENMQVNTIEZST00gR1JJRFxuXG4vLyBXSEVOIFlPVSBDTElDSyBBTkQgUExBQ0UgQSBTSElQIEpVU1QgU0VORCBUSEUgQ09SRFMgVE8gVEhFIFBMQUNFIFNISVAgRlVOQ1RJT04hIEFORCBUSEVOIFJVTiBBIFNFUEVSQVRFIEZVTlRJT04gVEhBVCBVUERBVEVTIFRIRSBET00gR1JJRCBSSUdIVCBBRlRFUiFcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9