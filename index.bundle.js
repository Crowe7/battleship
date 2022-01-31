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
    makeStartingGrid();
    changePlaceShipText();
    initStartBtns();
}
function initStartBtns() {
    makeRandomBtn();
    makeUndoBtn();
    makeRotationBtn();
}
function initStartingHTML() {
    let content = document.getElementById('content');
    content.innerHTML = `
        <div class="grid-and-buttons-wrapper">
        <h1 id="placeShipText">Place Your Ship</h1>
        <div class="grid-and-buttons">
            <div id="start" class="start grid">

            </div>
            <div class="ship-menu-buttons">
                <button id="undo">Undo</button>
                <button id="rotation">Rotation</button>
                <button id="random">Random</button>
                <button id="ready">Ready</button>
            </div>
        </div>
    </div>`;
}
function makeStartingGrid() {
    let start = document.getElementById('start');
    for (let i = 0; i < 100; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.setAttribute('id', i.toString());
        gridSpace.addEventListener('mouseover', () => {
            showShipPlacementOnHover(gridSpace.id);
        });
        gridSpace.addEventListener('mouseout', clearHoverStyles);
        gridSpace.addEventListener('click', () => {
            placeHoveredShip(gridSpace.id);
            renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board, 'start');
            changePlaceShipText();
        });
        start.appendChild(gridSpace);
    }
}
function getHoverCords(hoverID) {
    let cords = _game__WEBPACK_IMPORTED_MODULE_0__.Human.board.generateCordsFromStartingPosition(parseInt(hoverID), axis, _game__WEBPACK_IMPORTED_MODULE_0__.Human.board.ships[_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft]);
    console.log(cords);
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
    if (_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft === 5) {
        placeShipText.innerText = 'Click Ready To Begin!';
    }
    else {
        placeShipText.innerText = `Place Your ${_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.ships[_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft].name}!`;
    }
}
function makeRandomBtn() {
    let randomBtn = document.getElementById('random');
    randomBtn.addEventListener('click', () => {
        if (_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft < 5) {
            _game__WEBPACK_IMPORTED_MODULE_0__.Human.board.placeShipRandomly(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.ships[_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft]);
            changePlaceShipText();
            renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board, 'start');
        }
    });
}
function makeUndoBtn() {
    let undoBtn = document.getElementById('undo');
    undoBtn.addEventListener('click', () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUM7aUJBQ0k7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFFRCwrRkFBK0Y7QUFFL0Ysb0tBQW9LO0FBRXBLLHlKQUF5SiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5cbmxldCB3aGljaFR1cm46IG51bWJlciA9IDE7IC8vIHNldHMgdGhlIHN0YXJ0aW5nIHR1cm4gYXMgcDEgXG5cbmxldCBDb21wdXRlcjoge2JvYXJkOiBHYW1lYm9hcmQsIHBsYXllcjogUGxheWVyLCBjcHVQbGFjZVNoaXBzOiBGdW5jdGlvbiwgY3B1QXR0YWNrOiBGdW5jdGlvbn0gPSB7XG4gICAgYm9hcmQ6ICBuZXcgR2FtZWJvYXJkLFxuICAgIHBsYXllcjogIG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiKSxcbiAgICBjcHVQbGFjZVNoaXBzOiAoKSA9PiB7XG4gICAgICAgIENvbXB1dGVyLmJvYXJkLnBsYWNlQWxsU2hpcHNSYW5kb21seSgpOyAvLyBydW4gdGhpcyB3aGVuIHBsYXllciBib2FyZCBpcyBzZXR1cFxuICAgIH0sXG4gICAgY3B1QXR0YWNrOiAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBDb21wdXRlci5wbGF5ZXIucmFuZG9tQXR0YWNrKEh1bWFuLmJvYXJkKTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgQ29tcHV0ZXIuY3B1QXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxubGV0IEh1bWFuOiB7Ym9hcmQ6IEdhbWVib2FyZCwgcGxheWVyOiBQbGF5ZXIsIHBsYWNlU2hpcDogRnVuY3Rpb24sIGh1bWFuQXR0YWNrOiBGdW5jdGlvbiwgY2hhbmdlUGxheWVyTmFtZTogRnVuY3Rpb259ID0ge1xuICAgIGJvYXJkOiBuZXcgR2FtZWJvYXJkLFxuICAgIHBsYXllcjogbmV3IFBsYXllcihcIlBsYXllclwiKSwgICBcbiAgICBwbGFjZVNoaXAoY29yZHM6IG51bWJlcltdKSB7Ly8gdGhlc2UgYXJlIGdvdCBmcm9tIGV2ZW50IGxpc3RlbmVyLCBwdXQgdGhpcyBvbiBldmVudCBsaXN0ZW5lciBwcm9iYWJseVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBsZXQgc2hpcE51bWJlcjogbnVtYmVyID0gSHVtYW4uYm9hcmQuc2hpcHNMZWZ0O1xuICAgICAgICAgICAgbGV0IHNoaXAgPSBIdW1hbi5ib2FyZC5zaGlwc1tzaGlwTnVtYmVyXTtcbiAgICAgICAgICAgIEh1bWFuLmJvYXJkLnBsYWNlU2hpcChjb3Jkcywgc2hpcCk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBodW1hbkF0dGFjayhsb2NhdGlvbjogbnVtYmVyKTpzdHJpbmcgeyAvLyBzZXQgYSB2YXJpYWJsZSB0byB0aGlzIGFuZCB0aGVuIGFzc2lnbiB0aGF0IHRvIHRoZSBkb20gc28gaXQgY2FuIHJlcG9ydCB0aGF0IGF0dGFja1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGF0dGFja1Jlc3VsdDogc3RyaW5nID0gSHVtYW4ucGxheWVyLmF0dGFja09wcG9uZW50KGxvY2F0aW9uLCBDb21wdXRlci5ib2FyZCk7XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGVycm9yKTtcbiAgICAgICAgfSAgICAgIFxuICAgIH0sXG5cbiAgICBjaGFuZ2VQbGF5ZXJOYW1lKG5hbWU6IHN0cmluZykgeyAvLyBhcHBlbmQgdGhpcyB0byBhIG5hbWUgdGV4dCBib3ggb24gdGhlIGRvbVxuICAgICAgICBpZihuYW1lID09PSBcIkNvbXB1dGVyXCIgfHwgbmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoJ0ludmFsaWQgTmFtZScpXG4gICAgICAgIH1cbiAgICAgICAgSHVtYW4ucGxheWVyLm5hbWUgPSBuYW1lO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNQbGF5ZXJCb2FyZHNTZXR1cCgpOiBib29sZWFuIHsgLy8gYWZ0ZXIgcGxheWVyIHBsYWNlcyBzaGlwIGNoZWNrIHdpdGggdGhpcyBhbmQgd2hlbiBpdHMgdHJ1ZSBhcHBlbmQgdGhlIGV2ZW50IGxpc3RlbmVycyB0byBvcHBvbmVudHMgYm9hcmQ/XG4gICAgaWYoSHVtYW4uYm9hcmQuc2hpcHNMZWZ0ID09PSA1KSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBlbmRHYW1lKCk6IHN0cmluZyB8IGJvb2xlYW4geyAvLyBjaGVjayB0aGlzIGFmdGVyIGV2ZXJ5IGF0dGFjayBpbiBkb20gaWYgcmV0dXJucyBub3QgZmFsc2UgcG9wIGEgbW9kYWwgdXAgd2l0aCB3aW5uZXJcbiAgICBpZihIdW1hbi5ib2FyZC5jaGVja0ZvcldpbigpID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBIdW1hbi5wbGF5ZXIubmFtZVxuICAgIH1cbiAgICBpZihDb21wdXRlci5ib2FyZC5jaGVja0ZvcldpbigpID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBDb21wdXRlci5wbGF5ZXIubmFtZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gYXR0YWNrKGxvY2F0aW9uOiBudW1iZXIpIHsgLy8gdXNlIGlmIHN0YXRtZW50LCBpZiByZXR1cm5XaG9zZXR1cm4oKSBpcyAyIHRoZW4gcnVuIGF0dGFjayBhZ2FpbiB0byBkbyBjcHUgYXR0YWNrXG4gICAgaWYocmV0dXJuV2hvc2VUdXJuKCkgPT09IDEpIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgSHVtYW4uaHVtYW5BdHRhY2sobG9jYXRpb24pXG4gICAgICAgICAgICB3aGljaFR1cm4rK1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihyZXR1cm5XaG9zZVR1cm4oKSA9PT0gMikge1xuICAgICAgICBDb21wdXRlci5jcHVBdHRhY2soKTtcbiAgICAgICAgd2hpY2hUdXJuLS1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJldHVybldob3NlVHVybigpOiBudW1iZXIge1xuICAgIGlmKHdoaWNoVHVybiA9PT0gMSkge1xuICAgICAgICByZXR1cm4gMVxuICAgIH1cbiAgICBlbHNlIGlmKHdoaWNoVHVybiA9PT0gMikge1xuICAgICAgICByZXR1cm4gMlxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAgIHdoaWNoVHVybiA9IDE7XG5cbiAgICBIdW1hbi5ib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG4gICAgSHVtYW4ucGxheWVyID0gbmV3IFBsYXllcihcIlBsYXllclwiKTtcblxuICAgIENvbXB1dGVyLmJvYXJkID0gbmV3IEdhbWVib2FyZDtcbiAgICBDb21wdXRlci5wbGF5ZXIgPSBuZXcgUGxheWVyKFwiQ29tcHV0ZXJcIik7XG59XG5cbmV4cG9ydCB7Q29tcHV0ZXIsIEh1bWFuLCBlbmRHYW1lLCBhdHRhY2ssIHJldHVybldob3NlVHVybiwgaXNQbGF5ZXJCb2FyZHNTZXR1cCwgcmVzZXRHYW1lfVxuXG5cbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBzXCI7XG5pbnRlcmZhY2UgU2hpcEludGVyZmFjZSB7XG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlzU3VuaygpOiBib29sZWFuLFxufVxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBib2FyZDogYW55IC8vIGluZGV4IHNpZ25pdHVyZSBzdHVmZiBpbSBub3Qgc3VyZSBob3cgdG8gdHlwZSBpdCBidXQgaXQgaGFzIHNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSBvYmplY3RzIGluc2lkZSBvZiBpdCA6KFxuICAgIHNoaXBzOiBTaGlwSW50ZXJmYWNlW11cbiAgICBzaGlwc0xlZnQ6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLiNtYWtlQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuI21ha2VTaGlwcygpO1xuICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IDAgLy8gXG5cbiAgICB9XG4gICAgI21ha2VCb2FyZCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIGxldCBib2FyZDogc3RyaW5nW10gPSBbXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2FyZFxuICAgIH1cbiAgICAjbWFrZVNoaXBzKCk6U2hpcEludGVyZmFjZVtdIHtcbiAgICAgICAgbGV0IHNoaXBzOiBTaGlwSW50ZXJmYWNlW10gPSBbXVxuXG4gICAgICAgIGxldCBDYXJyaWVyID0gbmV3IFNoaXAoNSwgJ0NhcnJpZXInKTtcbiAgICAgICAgc2hpcHMucHVzaChDYXJyaWVyKTtcbiAgICAgICAgbGV0IEJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0LCAnQmF0dGxlc2hpcCcpO1xuICAgICAgICBzaGlwcy5wdXNoKEJhdHRsZXNoaXApO1xuICAgICAgICBsZXQgRGVzdHJveWVyID0gbmV3IFNoaXAoMywgJ0Rlc3Ryb3llcicpO1xuICAgICAgICBzaGlwcy5wdXNoKERlc3Ryb3llcik7XG4gICAgICAgIGxldCBTdWJtYXJpbmUgPSBuZXcgU2hpcCgzLCAnU3VibWFyaW5lJyk7XG4gICAgICAgIHNoaXBzLnB1c2goU3VibWFyaW5lKVxuICAgICAgICBsZXQgUGF0cm9sQm9hdCA9IG5ldyBTaGlwKDIsICdQYXRyb2wgQm9hdCcpO1xuICAgICAgICBzaGlwcy5wdXNoKFBhdHJvbEJvYXQpO1xuICAgICAgICByZXR1cm4gc2hpcHNcbiAgICB9XG4gICAgcGxhY2VTaGlwKGxvY2F0aW9uOiBudW1iZXJbXSwgc2hpcDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICBpZih0aGlzLmNoZWNrVmFsaWRQTGFjZW1lbnQobG9jYXRpb24sIHNoaXApICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGxhY2VtZW50IScpO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uW2ldXSA9IHtTaGlwOiBzaGlwLCBwb3NpdGlvbjogaSsxLCBpc1Nwb3RIaXQ6IGZhbHNlLH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSB0aGlzLnNoaXBzTGVmdCArIDE7XG4gICAgfVxuXG4gICAgdW5kb0xhc3RTaGlwUGxhY2UoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaCgoZWxlbWVudDogYW55LCBpOiBhbnksIGJvYXJkOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5TaGlwLm5hbWUgPT09IHRoaXMuc2hpcHNbdGhpcy5zaGlwc0xlZnQgLSAxXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldID0gJyc7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZih0aGlzLnNoaXBzTGVmdCA+IDAgKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzTGVmdCAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tWYWxpZFBMYWNlbWVudChsb2NhdGlvbjogbnVtYmVyW10sIHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYoc2hpcC5sZW5ndGggIT09IGxvY2F0aW9uLmxlbmd0aCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhdGlvbi5sZW5ndGg7IGkrKykgeyAvLyBjaGVja3MgaWYgYW5vdGhlciBzaGlwIGlzIGluIHRoZSBzcG90XG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uW2ldXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxvY2F0aW9uWzBdICUgMTAgPT09IGxvY2F0aW9uWzFdICUgMTAgKSB7IC8vIHRoaXMgaXMgYSBoYXJkIGNoZWNrIHRvIHRlc3QgaWYgcGxheWVyIGNvcmRzIGZvciB2ZXJ0IGJlZm9yZSBjaGVja2luZyBpZiBob3Jpem9udGFsIGlzIGJhZFxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuI2NoZWNrSG9yaXpvbnRhbENvcmRzKGxvY2F0aW9uKS5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICAjY2hlY2tIb3Jpem9udGFsQ29yZHMoYXJyYXk6IG51bWJlcltdKSB7XG4gICAgICAgIGxldCBmaXJzdE51bWJlckFycmF5OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBpZihhcnJheVswXSA8IDEwICYmIGFycmF5W2ldID4gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROdW1iZXJBcnJheS5wdXNoKDAsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGFycmF5WzBdIDwgMTAgJiYgYXJyYXlbMV0gPCAxMCkge1xuICAgICAgICAgICAgZmlyc3ROdW1iZXJBcnJheS5wdXNoKDApO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyQXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RyaW5naWZpZWROdW06IHN0cmluZyA9IGFycmF5W2ldLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgZmlyc3ROdW0gPSBwYXJzZUludChzdHJpbmdpZmllZE51bS5jaGFyQXQoMCkpO1xuICAgICAgICAgICAgaWYoZmlyc3ROdW0gIT09IGZpcnN0TnVtYmVyQXJyYXlbMF0pIHtcbiAgICAgICAgICAgICAgICBmaXJzdE51bWJlckFycmF5LnB1c2goZmlyc3ROdW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaXJzdE51bWJlckFycmF5XG4gICAgfVxuXG4gICAgdGFrZUF0dGFjayhsb2NhdGlvbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbl0gPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uXSA9ICdtaXNzJztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2xvY2F0aW9uXVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy4jY2hlY2tWYWxpZEhpdChsb2NhdGlvbikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uXS5pc1Nwb3RIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXAuaGl0U2hpcCh0aGlzLmJvYXJkW2xvY2F0aW9uXS5wb3NpdGlvbik7ICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy4jY2hlY2tJZkJvYXRTdW5rKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3VwZGF0ZUJvYXRDb3VudGVyV2hlblN1bmsodGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiNyZXBvcnRTdW5rU2hpcCh0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnaW52YWxpZCBhdHRhY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICNjaGVja1ZhbGlkSGl0KGxvY2F0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuYm9hcmRbbG9jYXRpb25dICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uXS5pc1Nwb3RIaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgICNjaGVja0lmQm9hdFN1bmsoYm9hdDpTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmKGJvYXQuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgICNyZXBvcnRTdW5rU2hpcChib2F0OlNoaXBJbnRlcmZhY2UpIDogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtib2F0Lm5hbWV9IGhhcyBTdW5rIWBcbiAgICB9XG5cbiAgICAjdXBkYXRlQm9hdENvdW50ZXJXaGVuU3Vuayhib2F0OiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IHRoaXMuc2hpcHNMZWZ0IC0gMTtcbiAgICB9XG5cbiAgICBjaGVja0ZvcldpbigpOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVyblZhbGlkUmFuZG9tQ29yZHMobGVuZ3RoOiBudW1iZXIsIG9yaWVudGF0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICdyYW5kb20nKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IHRoaXMuI2dlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbENvcmRzOiBudW1iZXJbXSA9IHRoaXMuI2dlbmVyYXRlTGVnYWxIb3Jpem9udGFsQ29yZHMobGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBob3Jpem9udGFsQ29yZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbENvcmRzOiBudW1iZXJbXSA9IHRoaXMuI2dlbmVyYXRlTGVnYWxWZXJ0aWNhbENvcmRzKGxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxDb3JkcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNnZW5lcmF0ZVJhbmRvbU9yaWVudGF0aW9uKCkge1xuICAgICAgICBsZXQgb3JpZW50YXRpb246IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob3JpZW50YXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCdcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIGdlbmVyYXRlQ29yZHNGcm9tU3RhcnRpbmdQb3NpdGlvbihzdGFydDogbnVtYmVyLCBvcmllbnRhdGlvbjogc3RyaW5nLCBzaGlwOiBTaGlwSW50ZXJmYWNlKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgY29yZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAnWCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29yZHMucHVzaChzdGFydCArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvcmRzLnB1c2goc3RhcnQgKyAoaSAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29yZHNcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNnZW5lcmF0ZUxlZ2FsSG9yaXpvbnRhbENvcmRzKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKiAxMDsgXG4gICAgICAgIGxldCByYW5kb21Ib3Jpem9udGFsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGlmKHJhbmRvbUhvcml6b250YWwgKyBsZW5ndGggPiA5KSB7XG4gICAgICAgICAgICByYW5kb21Ib3Jpem9udGFsID0gcmFuZG9tSG9yaXpvbnRhbCAtIGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3Jkcy5wdXNoKHJhbmRvbUZpbmFsICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgfVxuXG4gICAgI2dlbmVyYXRlTGVnYWxWZXJ0aWNhbENvcmRzKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICBsZXQgcmFuZG9tSG9yaXpvbnRhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBpZihyYW5kb21WZXJ0aWNhbCArIGxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgLSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmFuZG9tVmVydGljYWwgPSByYW5kb21WZXJ0aWNhbCAqIDEwO1xuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3Jkcy5wdXNoKHJhbmRvbUZpbmFsKTtcbiAgICAgICAgICAgIHJhbmRvbUZpbmFsID0gcmFuZG9tRmluYWwgKyAxMDsgLy8gYWRkcyB0byB0byB0aGUgbnVtYmVyIHRvIHNpbXVsYXRlIG1vdmluZyBkb3duIGEgcm93IGluIHRoZSBncmlkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwUmFuZG9tbHkoc2hpcDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAodGhpcy5yZXR1cm5WYWxpZFJhbmRvbUNvcmRzKHNoaXAubGVuZ3RoLCAncmFuZG9tJyksIHNoaXApO1xuICAgICAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPiA1KSB7IC8vIHN0b3BzIG92ZXJwbGFjaW5nIG9mIHNoaXBzIG9uIGJvYXJkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlwc0xlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZUFsbFNoaXBzUmFuZG9tbHkoKSB7XG4gICAgICAgIGxldCBpOiBrZXlvZiB0eXBlb2YgdGhpcy5zaGlwcztcbiAgICAgICAgZm9yKGkgaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seSh0aGlzLnNoaXBzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgYXR0YWNrT3Bwb25lbnQoY29yZGluYXRlczogbnVtYmVyLCBnYW1lYm9hcmQ6IEdhbWVib2FyZCk6c3RyaW5nIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBnYW1lYm9hcmQudGFrZUF0dGFjayhjb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2s7XG5cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21BdHRhY2soZ2FtZWJvYXJkOiBHYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdhbWVib2FyZC50YWtlQXR0YWNrKGxvY2F0aW9uKSBcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXG4iLCJpbnRlcmZhY2UgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICBoaXQ6IG51bWJlcltdLFxuICAgICBuYW1lPzogc3RyaW5nIC8vIHRoYXRzIGZvciBvcHRpb25hbFxuICAgICBpc1N1bmsoKTogYm9vbGVhblxuICAgICBoaXRTaGlwKGluZGV4OiBudW1iZXIpOiBudW1iZXJbXSBcbiB9XG5cbiBjbGFzcyBTaGlwIGltcGxlbWVudHMgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyXG4gICAgIGhpdDogbnVtYmVyW11cbiAgICAgbmFtZTogc3RyaW5nXG5cbiAgICAgY29uc3RydWN0b3IobGVuZ3RoOiBudW1iZXIsIG5hbWU6IHN0cmluZykge1xuICAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgICB0aGlzLmhpdCA9IFtdO1xuICAgICAgICAgdGhpcy5uYW1lID0gbmFtZSAvLyBtYXliZSBhZGQgYSB3YXkgdG8gdGVsbCB3aGF0IGEgc2hpcCBpcyBiYXNlZCBvbiBsZW5ndGggYXMgYSBtZXRob2QgbWF5YmU/P1xuICAgICB9XG5cbiAgICAgaXNTdW5rKCkge1xuICAgICAgICAgaWYodGhpcy5oaXQubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGhpdFNoaXAoaW5kZXg6IG51bWJlcikge1xuICAgICAgICAgaWYodGhpcy4jY2hlY2tGb3JWYWxpZEhpdChpbmRleCkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdFxuICAgICAgICAgfSBcbiAgICAgICAgIHRoaXMuaGl0LnB1c2goaW5kZXgpO1xuICAgICAgICAgcmV0dXJuIHRoaXMuaGl0XG4gICAgIH1cbiAgICAgI2NoZWNrRm9yVmFsaWRIaXQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5oaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSB0aGlzLmhpdFtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgIH1cbiB9XG4gZXhwb3J0IGRlZmF1bHQgU2hpcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtDb21wdXRlciwgSHVtYW4sIGVuZEdhbWUsIGF0dGFjaywgcmV0dXJuV2hvc2VUdXJuLCBpc1BsYXllckJvYXJkc1NldHVwLCByZXNldEdhbWV9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmxldCBheGlzOiBzdHJpbmcgPSAnWCc7IFxuXG5pbml0U3RhcnQoKTtcblxuZnVuY3Rpb24gaW5pdFN0YXJ0KCkge1xuICAgIGluaXRTdGFydGluZ0hUTUwoKTtcbiAgICBtYWtlU3RhcnRpbmdHcmlkKCk7XG4gICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xuICAgIGluaXRTdGFydEJ0bnMoKTtcbn1cblxuZnVuY3Rpb24gaW5pdFN0YXJ0QnRucygpIHtcbiAgICBtYWtlUmFuZG9tQnRuKCk7XG4gICAgbWFrZVVuZG9CdG4oKTtcbiAgICBtYWtlUm90YXRpb25CdG4oKTtcbn1cblxuZnVuY3Rpb24gaW5pdFN0YXJ0aW5nSFRNTCgpIHtcbiAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1hbmQtYnV0dG9ucy13cmFwcGVyXCI+XG4gICAgICAgIDxoMSBpZD1cInBsYWNlU2hpcFRleHRcIj5QbGFjZSBZb3VyIFNoaXA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1hbmQtYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInN0YXJ0XCIgY2xhc3M9XCJzdGFydCBncmlkXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXAtbWVudS1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInVuZG9cIj5VbmRvPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJvdGF0aW9uXCI+Um90YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmFuZG9tXCI+UmFuZG9tPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlYWR5XCI+UmVhZHk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xufVxuXG5mdW5jdGlvbiBtYWtlU3RhcnRpbmdHcmlkKCkge1xuICAgIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgZ3JpZFNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWRTcGFjZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaS50b1N0cmluZygpKTtcblxuICAgICAgICBncmlkU3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgc2hvd1NoaXBQbGFjZW1lbnRPbkhvdmVyKGdyaWRTcGFjZS5pZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdyaWRTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNsZWFySG92ZXJTdHlsZXMpO1xuXG4gICAgICAgIGdyaWRTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBsYWNlSG92ZXJlZFNoaXAoZ3JpZFNwYWNlLmlkKTtcbiAgICAgICAgICAgIHJlbmRlckdhbWVCb2FyZChIdW1hbi5ib2FyZCwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgICBjaGFuZ2VQbGFjZVNoaXBUZXh0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YXJ0LmFwcGVuZENoaWxkKGdyaWRTcGFjZSk7XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEhvdmVyQ29yZHMoaG92ZXJJRDogc3RyaW5nKSB7XG4gICAgbGV0IGNvcmRzOm51bWJlcltdID0gSHVtYW4uYm9hcmQuZ2VuZXJhdGVDb3Jkc0Zyb21TdGFydGluZ1Bvc2l0aW9uKHBhcnNlSW50KGhvdmVySUQpLCBheGlzLCBIdW1hbi5ib2FyZC5zaGlwc1tIdW1hbi5ib2FyZC5zaGlwc0xlZnRdKTtcbiAgICBjb25zb2xlLmxvZyhjb3Jkcyk7XG4gICAgcmV0dXJuIGNvcmRzXG59XG5cbmZ1bmN0aW9uIHBsYWNlSG92ZXJlZFNoaXAoaG92ZXJJRDogc3RyaW5nKSB7XG4gICAgbGV0IGNvcmRzOm51bWJlcltdID0gZ2V0SG92ZXJDb3Jkcyhob3ZlcklEKTtcbiAgICB0cnkge1xuICAgICAgICBIdW1hbi5wbGFjZVNoaXAoY29yZHMpO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dTaGlwUGxhY2VtZW50T25Ib3Zlcihob3ZlcklEOiBzdHJpbmcpIHtcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLmNoaWxkcmVuO1xuICAgIGxldCBjb3JkczpudW1iZXJbXSA9IGdldEhvdmVyQ29yZHMoaG92ZXJJRCk7XG4gICAgaWYoSHVtYW4uYm9hcmQuY2hlY2tWYWxpZFBMYWNlbWVudChjb3JkcywgSHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XSkgPT09IHRydWUpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KGdyaWRbaV0uaWQpID09PSBjb3Jkc1tqXSkge1xuICAgICAgICAgICAgICAgICAgICBncmlkW2ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaG92ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdyaWRbcGFyc2VJbnQoaG92ZXJJRCldLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJIb3ZlclN0eWxlcygpIHtcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLmNoaWxkcmVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGdyaWRbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLWhvdmVyJykpIHtcbiAgICAgICAgICAgIGdyaWRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1ob3ZlcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdyaWRbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICBncmlkW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjaGFuZ2VQbGFjZVNoaXBUZXh0KCkge1xuICAgIGxldCBwbGFjZVNoaXBUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNlU2hpcFRleHQnKTtcbiAgICBpZihIdW1hbi5ib2FyZC5zaGlwc0xlZnQgPT09IDUpIHtcbiAgICAgICAgcGxhY2VTaGlwVGV4dC5pbm5lclRleHQgPSAnQ2xpY2sgUmVhZHkgVG8gQmVnaW4hJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBsYWNlU2hpcFRleHQuaW5uZXJUZXh0ID0gYFBsYWNlIFlvdXIgJHtIdW1hbi5ib2FyZC5zaGlwc1tIdW1hbi5ib2FyZC5zaGlwc0xlZnRdLm5hbWV9IWA7XG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gbWFrZVJhbmRvbUJ0bigpIHtcbiAgICBsZXQgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoSHVtYW4uYm9hcmQuc2hpcHNMZWZ0IDwgNSkge1xuICAgICAgICAgICAgSHVtYW4uYm9hcmQucGxhY2VTaGlwUmFuZG9tbHkoSHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XSk7XG4gICAgICAgICAgICBjaGFuZ2VQbGFjZVNoaXBUZXh0KCk7XG4gICAgICAgICAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdzdGFydCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VVbmRvQnRuKCkge1xuICAgIGxldCB1bmRvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuZG8nKTtcbiAgICB1bmRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBIdW1hbi5ib2FyZC51bmRvTGFzdFNoaXBQbGFjZSgpO1xuICAgICAgICBjaGFuZ2VQbGFjZVNoaXBUZXh0KCk7XG4gICAgICAgIHJlbmRlckdhbWVCb2FyZChIdW1hbi5ib2FyZCwgJ3N0YXJ0Jyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VSb3RhdGlvbkJ0bigpIHtcbiAgICBsZXQgcm90YXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24nKTtcbiAgICByb3RhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUF4aXMpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VBeGlzKCkge1xuICAgIGlmKGF4aXMgPT09ICdYJykge1xuICAgICAgICBheGlzID0gJ1knO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXhpcyA9ICdYJztcbiAgICB9XG59XG5cblxuXG5cblxuZnVuY3Rpb24gcmVuZGVyR2FtZUJvYXJkKGdhbWVib2FyZDogR2FtZWJvYXJkLCBncmlkOiBzdHJpbmcpIHtcbiAgICBsZXQgRE9NYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChncmlkKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV0gPT09ICcnKSB7XG4gICAgICAgICAgICBpZihET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5ib2FyZFtpXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV0uaXNTcG90SGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBQVVQgQSBTUE9UIE9OIFRIRSBCT0FSRCBUSEFUIEhBUyBURVhUIEFGVEVSIEVWRVJZIEFUVEFDSyBUSEFUIFNIT1dTIFdIQVQgSEFQUEVORUQgTEFTVCBUVVJOIVxuXG4vLyBPTiBIT1ZFUiBBREQgQSBDTEFTUyBUTyBHUklEIFRIQVQgQ09MT1JTIElOIFRIRSBTUEFDRVMgSUYgVEhFWSBDSEVDSyBPVVQgUFJPUEVSTFkgSU4gY2hlY2tWYWxpZFBsYWNlbWVudCBBTkQgUkVNT1ZFUyBBTEwgT1RIRVIgSU5TVEFOQ0VTIE9GIEhPVkVSIENMQVNTIEZST00gR1JJRFxuXG4vLyBXSEVOIFlPVSBDTElDSyBBTkQgUExBQ0UgQSBTSElQIEpVU1QgU0VORCBUSEUgQ09SRFMgVE8gVEhFIFBMQUNFIFNISVAgRlVOQ1RJT04hIEFORCBUSEVOIFJVTiBBIFNFUEVSQVRFIEZVTlRJT04gVEhBVCBVUERBVEVTIFRIRSBET00gR1JJRCBSSUdIVCBBRlRFUiFcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9