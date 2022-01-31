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
function makeStartingGrid() {
    let start = document.getElementById('start');
    for (let i = 0; i < 100; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.setAttribute('id', i.toString());
        start.appendChild(gridSpace);
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
function initStartBtns() {
    makeRandomBtn();
    makeUndoBtn();
    makeRotationBtn();
}
function makeRandomBtn() {
    let randomBtn = document.getElementById('random');
    randomBtn.addEventListener('click', () => {
        _game__WEBPACK_IMPORTED_MODULE_0__.Human.board.placeShipRandomly(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.ships[_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft]);
        changePlaceShipText();
        renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board, 'start');
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
function initStart() {
    makeStartingGrid();
    changePlaceShipText();
    initStartBtns();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDLENBQUM7YUFDN0M7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQUVELCtGQUErRjtBQUUvRixvS0FBb0s7QUFFcEsseUpBQXlKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllcnNcIjtcblxubGV0IHdoaWNoVHVybjogbnVtYmVyID0gMTsgLy8gc2V0cyB0aGUgc3RhcnRpbmcgdHVybiBhcyBwMSBcblxubGV0IENvbXB1dGVyOiB7Ym9hcmQ6IEdhbWVib2FyZCwgcGxheWVyOiBQbGF5ZXIsIGNwdVBsYWNlU2hpcHM6IEZ1bmN0aW9uLCBjcHVBdHRhY2s6IEZ1bmN0aW9ufSA9IHtcbiAgICBib2FyZDogIG5ldyBHYW1lYm9hcmQsXG4gICAgcGxheWVyOiAgbmV3IFBsYXllcihcIkNvbXB1dGVyXCIpLFxuICAgIGNwdVBsYWNlU2hpcHM6ICgpID0+IHtcbiAgICAgICAgQ29tcHV0ZXIuYm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7IC8vIHJ1biB0aGlzIHdoZW4gcGxheWVyIGJvYXJkIGlzIHNldHVwXG4gICAgfSxcbiAgICBjcHVBdHRhY2s6ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIENvbXB1dGVyLnBsYXllci5yYW5kb21BdHRhY2soSHVtYW4uYm9hcmQpO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBDb21wdXRlci5jcHVBdHRhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5sZXQgSHVtYW46IHtib2FyZDogR2FtZWJvYXJkLCBwbGF5ZXI6IFBsYXllciwgcGxhY2VTaGlwOiBGdW5jdGlvbiwgaHVtYW5BdHRhY2s6IEZ1bmN0aW9uLCBjaGFuZ2VQbGF5ZXJOYW1lOiBGdW5jdGlvbn0gPSB7XG4gICAgYm9hcmQ6IG5ldyBHYW1lYm9hcmQsXG4gICAgcGxheWVyOiBuZXcgUGxheWVyKFwiUGxheWVyXCIpLCAgIFxuICAgIHBsYWNlU2hpcChjb3JkczogbnVtYmVyW10pIHsvLyB0aGVzZSBhcmUgZ290IGZyb20gZXZlbnQgbGlzdGVuZXIsIHB1dCB0aGlzIG9uIGV2ZW50IGxpc3RlbmVyIHByb2JhYmx5XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGxldCBzaGlwTnVtYmVyOiBudW1iZXIgPSBIdW1hbi5ib2FyZC5zaGlwc0xlZnQ7XG4gICAgICAgICAgICBsZXQgc2hpcCA9IEh1bWFuLmJvYXJkLnNoaXBzW3NoaXBOdW1iZXJdO1xuICAgICAgICAgICAgSHVtYW4uYm9hcmQucGxhY2VTaGlwKGNvcmRzLCBzaGlwKTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGh1bWFuQXR0YWNrKGxvY2F0aW9uOiBudW1iZXIpOnN0cmluZyB7IC8vIHNldCBhIHZhcmlhYmxlIHRvIHRoaXMgYW5kIHRoZW4gYXNzaWduIHRoYXQgdG8gdGhlIGRvbSBzbyBpdCBjYW4gcmVwb3J0IHRoYXQgYXR0YWNrXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0OiBzdHJpbmcgPSBIdW1hbi5wbGF5ZXIuYXR0YWNrT3Bwb25lbnQobG9jYXRpb24sIENvbXB1dGVyLmJvYXJkKTtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpO1xuICAgICAgICB9ICAgICAgXG4gICAgfSxcblxuICAgIGNoYW5nZVBsYXllck5hbWUobmFtZTogc3RyaW5nKSB7IC8vIGFwcGVuZCB0aGlzIHRvIGEgbmFtZSB0ZXh0IGJveCBvbiB0aGUgZG9tXG4gICAgICAgIGlmKG5hbWUgPT09IFwiQ29tcHV0ZXJcIiB8fCBuYW1lID09PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnSW52YWxpZCBOYW1lJylcbiAgICAgICAgfVxuICAgICAgICBIdW1hbi5wbGF5ZXIubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1BsYXllckJvYXJkc1NldHVwKCk6IGJvb2xlYW4geyAvLyBhZnRlciBwbGF5ZXIgcGxhY2VzIHNoaXAgY2hlY2sgd2l0aCB0aGlzIGFuZCB3aGVuIGl0cyB0cnVlIGFwcGVuZCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIG9wcG9uZW50cyBib2FyZD9cbiAgICBpZihIdW1hbi5ib2FyZC5zaGlwc0xlZnQgPT09IDUpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUoKTogc3RyaW5nIHwgYm9vbGVhbiB7IC8vIGNoZWNrIHRoaXMgYWZ0ZXIgZXZlcnkgYXR0YWNrIGluIGRvbSBpZiByZXR1cm5zIG5vdCBmYWxzZSBwb3AgYSBtb2RhbCB1cCB3aXRoIHdpbm5lclxuICAgIGlmKEh1bWFuLmJvYXJkLmNoZWNrRm9yV2luKCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIEh1bWFuLnBsYXllci5uYW1lXG4gICAgfVxuICAgIGlmKENvbXB1dGVyLmJvYXJkLmNoZWNrRm9yV2luKCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIENvbXB1dGVyLnBsYXllci5uYW1lXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBhdHRhY2sobG9jYXRpb246IG51bWJlcikgeyAvLyB1c2UgaWYgc3RhdG1lbnQsIGlmIHJldHVybldob3NldHVybigpIGlzIDIgdGhlbiBydW4gYXR0YWNrIGFnYWluIHRvIGRvIGNwdSBhdHRhY2tcbiAgICBpZihyZXR1cm5XaG9zZVR1cm4oKSA9PT0gMSkge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBIdW1hbi5odW1hbkF0dGFjayhsb2NhdGlvbilcbiAgICAgICAgICAgIHdoaWNoVHVybisrXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKHJldHVybldob3NlVHVybigpID09PSAyKSB7XG4gICAgICAgIENvbXB1dGVyLmNwdUF0dGFjaygpO1xuICAgICAgICB3aGljaFR1cm4tLVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmV0dXJuV2hvc2VUdXJuKCk6IG51bWJlciB7XG4gICAgaWYod2hpY2hUdXJuID09PSAxKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGVsc2UgaWYod2hpY2hUdXJuID09PSAyKSB7XG4gICAgICAgIHJldHVybiAyXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgd2hpY2hUdXJuID0gMTtcblxuICAgIEh1bWFuLmJvYXJkID0gbmV3IEdhbWVib2FyZDtcbiAgICBIdW1hbi5wbGF5ZXIgPSBuZXcgUGxheWVyKFwiUGxheWVyXCIpO1xuXG4gICAgQ29tcHV0ZXIuYm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xuICAgIENvbXB1dGVyLnBsYXllciA9IG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiKTtcbn1cblxuZXhwb3J0IHtDb21wdXRlciwgSHVtYW4sIGVuZEdhbWUsIGF0dGFjaywgcmV0dXJuV2hvc2VUdXJuLCBpc1BsYXllckJvYXJkc1NldHVwLCByZXNldEdhbWV9XG5cblxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcHNcIjtcbmludGVyZmFjZSBTaGlwSW50ZXJmYWNlIHtcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaXNTdW5rKCk6IGJvb2xlYW4sXG59XG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGJvYXJkOiBhbnkgLy8gaW5kZXggc2lnbml0dXJlIHN0dWZmIGltIG5vdCBzdXJlIGhvdyB0byB0eXBlIGl0IGJ1dCBpdCBoYXMgc29tZXRoaW5nIHRvIGRvIHdpdGggdGhlIG9iamVjdHMgaW5zaWRlIG9mIGl0IDooXG4gICAgc2hpcHM6IFNoaXBJbnRlcmZhY2VbXVxuICAgIHNoaXBzTGVmdDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuI21ha2VCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy4jbWFrZVNoaXBzKCk7XG4gICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gMCAvLyBcblxuICAgIH1cbiAgICAjbWFrZUJvYXJkKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgbGV0IGJvYXJkOiBzdHJpbmdbXSA9IFtdXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2goJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvYXJkXG4gICAgfVxuICAgICNtYWtlU2hpcHMoKTpTaGlwSW50ZXJmYWNlW10ge1xuICAgICAgICBsZXQgc2hpcHM6IFNoaXBJbnRlcmZhY2VbXSA9IFtdXG5cbiAgICAgICAgbGV0IENhcnJpZXIgPSBuZXcgU2hpcCg1LCAnQ2FycmllcicpO1xuICAgICAgICBzaGlwcy5wdXNoKENhcnJpZXIpO1xuICAgICAgICBsZXQgQmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQsICdCYXR0bGVzaGlwJyk7XG4gICAgICAgIHNoaXBzLnB1c2goQmF0dGxlc2hpcCk7XG4gICAgICAgIGxldCBEZXN0cm95ZXIgPSBuZXcgU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gICAgICAgIHNoaXBzLnB1c2goRGVzdHJveWVyKTtcbiAgICAgICAgbGV0IFN1Ym1hcmluZSA9IG5ldyBTaGlwKDMsICdTdWJtYXJpbmUnKTtcbiAgICAgICAgc2hpcHMucHVzaChTdWJtYXJpbmUpXG4gICAgICAgIGxldCBQYXRyb2xCb2F0ID0gbmV3IFNoaXAoMiwgJ1BhdHJvbCBCb2F0Jyk7XG4gICAgICAgIHNoaXBzLnB1c2goUGF0cm9sQm9hdCk7XG4gICAgICAgIHJldHVybiBzaGlwc1xuICAgIH1cbiAgICBwbGFjZVNoaXAobG9jYXRpb246IG51bWJlcltdLCBzaGlwOiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tWYWxpZFBMYWNlbWVudChsb2NhdGlvbiwgc2hpcCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQbGFjZW1lbnQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25baV1dID0ge1NoaXA6IHNoaXAsIHBvc2l0aW9uOiBpKzEsIGlzU3BvdEhpdDogZmFsc2UsfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IHRoaXMuc2hpcHNMZWZ0ICsgMTtcbiAgICB9XG5cbiAgICB1bmRvTGFzdFNoaXBQbGFjZSgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKChlbGVtZW50OiBhbnksIGk6IGFueSwgYm9hcmQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LlNoaXAubmFtZSA9PT0gdGhpcy5zaGlwc1t0aGlzLnNoaXBzTGVmdCAtIDFdLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV0gPSAnJztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID4gMCApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0IC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1ZhbGlkUExhY2VtZW50KGxvY2F0aW9uOiBudW1iZXJbXSwgc2hpcDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICBpZihzaGlwLmxlbmd0aCAhPT0gbG9jYXRpb24ubGVuZ3RoICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2F0aW9uLmxlbmd0aDsgaSsrKSB7IC8vIGNoZWNrcyBpZiBhbm90aGVyIHNoaXAgaXMgaW4gdGhlIHNwb3RcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jYXRpb25baV1dICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobG9jYXRpb25bMF0gJSAxMCA9PT0gbG9jYXRpb25bMV0gJSAxMCApIHsgLy8gdGhpcyBpcyBhIGhhcmQgY2hlY2sgdG8gdGVzdCBpZiBwbGF5ZXIgY29yZHMgZm9yIHZlcnQgYmVmb3JlIGNoZWNraW5nIGlmIGhvcml6b250YWwgaXMgYmFkXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy4jY2hlY2tIb3Jpem9udGFsQ29yZHMobG9jYXRpb24pLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgICNjaGVja0hvcml6b250YWxDb3JkcyhhcnJheTogbnVtYmVyW10pIHtcbiAgICAgICAgbGV0IGZpcnN0TnVtYmVyQXJyYXk6IG51bWJlcltdID0gW107XG5cbiAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCAmJiBhcnJheVsxXSA8IDEwKSB7XG4gICAgICAgICAgICBmaXJzdE51bWJlckFycmF5LnB1c2goMCk7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdHJpbmdpZmllZE51bTogc3RyaW5nID0gYXJyYXlbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBmaXJzdE51bSA9IHBhcnNlSW50KHN0cmluZ2lmaWVkTnVtLmNoYXJBdCgwKSk7XG4gICAgICAgICAgICBpZihmaXJzdE51bSAhPT0gZmlyc3ROdW1iZXJBcnJheVswXSkge1xuICAgICAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaChmaXJzdE51bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyQXJyYXlcbiAgICB9XG5cbiAgICB0YWtlQXR0YWNrKGxvY2F0aW9uOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uXSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dID0gJ21pc3MnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbbG9jYXRpb25dXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLiNjaGVja1ZhbGlkSGl0KGxvY2F0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dLmlzU3BvdEhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcC5oaXRTaGlwKHRoaXMuYm9hcmRbbG9jYXRpb25dLnBvc2l0aW9uKTsgICBcbiAgICAgICAgICAgICAgICBpZih0aGlzLiNjaGVja0lmQm9hdFN1bmsodGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlQm9hdENvdW50ZXJXaGVuU3Vuayh0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3JlcG9ydFN1bmtTaGlwKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdpbnZhbGlkIGF0dGFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2NoZWNrVmFsaWRIaXQobG9jYXRpb246IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5ib2FyZFtsb2NhdGlvbl0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jYXRpb25dLmlzU3BvdEhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgI2NoZWNrSWZCb2F0U3Vuayhib2F0OlNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYoYm9hdC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgI3JlcG9ydFN1bmtTaGlwKGJvYXQ6U2hpcEludGVyZmFjZSkgOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIGAke2JvYXQubmFtZX0gaGFzIFN1bmshYFxuICAgIH1cblxuICAgICN1cGRhdGVCb2F0Q291bnRlcldoZW5TdW5rKGJvYXQ6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gdGhpcy5zaGlwc0xlZnQgLSAxO1xuICAgIH1cblxuICAgIGNoZWNrRm9yV2luKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aGlzLnNoaXBzTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuVmFsaWRSYW5kb21Db3JkcyhsZW5ndGg6IG51bWJlciwgb3JpZW50YXRpb246IHN0cmluZykge1xuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3JhbmRvbScpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gdGhpcy4jZ2VuZXJhdGVSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIGhvcml6b250YWxDb3JkcztcbiAgICAgICAgfVxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgbGV0IHZlcnRpY2FsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbFZlcnRpY2FsQ29yZHMobGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbENvcmRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2dlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKSB7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbjogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJ1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICNnZW5lcmF0ZUxlZ2FsSG9yaXpvbnRhbENvcmRzKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKiAxMDsgXG4gICAgICAgIGxldCByYW5kb21Ib3Jpem9udGFsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGlmKHJhbmRvbUhvcml6b250YWwgKyBsZW5ndGggPiA5KSB7XG4gICAgICAgICAgICByYW5kb21Ib3Jpem9udGFsID0gcmFuZG9tSG9yaXpvbnRhbCAtIGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3Jkcy5wdXNoKHJhbmRvbUZpbmFsICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgfVxuXG4gICAgI2dlbmVyYXRlTGVnYWxWZXJ0aWNhbENvcmRzKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICBsZXQgcmFuZG9tSG9yaXpvbnRhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBpZihyYW5kb21WZXJ0aWNhbCArIGxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgLSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmFuZG9tVmVydGljYWwgPSByYW5kb21WZXJ0aWNhbCAqIDEwO1xuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3Jkcy5wdXNoKHJhbmRvbUZpbmFsKTtcbiAgICAgICAgICAgIHJhbmRvbUZpbmFsID0gcmFuZG9tRmluYWwgKyAxMDsgLy8gYWRkcyB0byB0byB0aGUgbnVtYmVyIHRvIHNpbXVsYXRlIG1vdmluZyBkb3duIGEgcm93IGluIHRoZSBncmlkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwUmFuZG9tbHkoc2hpcDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAodGhpcy5yZXR1cm5WYWxpZFJhbmRvbUNvcmRzKHNoaXAubGVuZ3RoLCAncmFuZG9tJyksIHNoaXApO1xuICAgICAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPiA1KSB7IC8vIHN0b3BzIG92ZXJwbGFjaW5nIG9mIHNoaXBzIG9uIGJvYXJkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlwc0xlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZUFsbFNoaXBzUmFuZG9tbHkoKSB7XG4gICAgICAgIGxldCBpOiBrZXlvZiB0eXBlb2YgdGhpcy5zaGlwcztcbiAgICAgICAgZm9yKGkgaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seSh0aGlzLnNoaXBzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgYXR0YWNrT3Bwb25lbnQoY29yZGluYXRlczogbnVtYmVyLCBnYW1lYm9hcmQ6IEdhbWVib2FyZCk6c3RyaW5nIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBnYW1lYm9hcmQudGFrZUF0dGFjayhjb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2s7XG5cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21BdHRhY2soZ2FtZWJvYXJkOiBHYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdhbWVib2FyZC50YWtlQXR0YWNrKGxvY2F0aW9uKSBcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXG4iLCJpbnRlcmZhY2UgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICBoaXQ6IG51bWJlcltdLFxuICAgICBuYW1lPzogc3RyaW5nIC8vIHRoYXRzIGZvciBvcHRpb25hbFxuICAgICBpc1N1bmsoKTogYm9vbGVhblxuICAgICBoaXRTaGlwKGluZGV4OiBudW1iZXIpOiBudW1iZXJbXSBcbiB9XG5cbiBjbGFzcyBTaGlwIGltcGxlbWVudHMgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyXG4gICAgIGhpdDogbnVtYmVyW11cbiAgICAgbmFtZTogc3RyaW5nXG5cbiAgICAgY29uc3RydWN0b3IobGVuZ3RoOiBudW1iZXIsIG5hbWU6IHN0cmluZykge1xuICAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgICB0aGlzLmhpdCA9IFtdO1xuICAgICAgICAgdGhpcy5uYW1lID0gbmFtZSAvLyBtYXliZSBhZGQgYSB3YXkgdG8gdGVsbCB3aGF0IGEgc2hpcCBpcyBiYXNlZCBvbiBsZW5ndGggYXMgYSBtZXRob2QgbWF5YmU/P1xuICAgICB9XG5cbiAgICAgaXNTdW5rKCkge1xuICAgICAgICAgaWYodGhpcy5oaXQubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGhpdFNoaXAoaW5kZXg6IG51bWJlcikge1xuICAgICAgICAgaWYodGhpcy4jY2hlY2tGb3JWYWxpZEhpdChpbmRleCkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdFxuICAgICAgICAgfSBcbiAgICAgICAgIHRoaXMuaGl0LnB1c2goaW5kZXgpO1xuICAgICAgICAgcmV0dXJuIHRoaXMuaGl0XG4gICAgIH1cbiAgICAgI2NoZWNrRm9yVmFsaWRIaXQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5oaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSB0aGlzLmhpdFtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgIH1cbiB9XG4gZXhwb3J0IGRlZmF1bHQgU2hpcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtDb21wdXRlciwgSHVtYW4sIGVuZEdhbWUsIGF0dGFjaywgcmV0dXJuV2hvc2VUdXJuLCBpc1BsYXllckJvYXJkc1NldHVwLCByZXNldEdhbWV9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmxldCBheGlzOiBzdHJpbmcgPSAnWCc7IFxuXG5pbml0U3RhcnQoKTtcblxuXG5mdW5jdGlvbiBtYWtlU3RhcnRpbmdHcmlkKCkge1xuICAgIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBsZXQgZ3JpZFNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWRTcGFjZS5zZXRBdHRyaWJ1dGUoJ2lkJywgaS50b1N0cmluZygpKTtcbiAgICAgICAgc3RhcnQuYXBwZW5kQ2hpbGQoZ3JpZFNwYWNlKTtcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlUGxhY2VTaGlwVGV4dCgpIHtcbiAgICBsZXQgcGxhY2VTaGlwVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZVNoaXBUZXh0Jyk7XG4gICAgaWYoSHVtYW4uYm9hcmQuc2hpcHNMZWZ0ID09PSA1KSB7XG4gICAgICAgIHBsYWNlU2hpcFRleHQuaW5uZXJUZXh0ID0gJ0NsaWNrIFJlYWR5IFRvIEJlZ2luISc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwbGFjZVNoaXBUZXh0LmlubmVyVGV4dCA9IGBQbGFjZSBZb3VyICR7SHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XS5uYW1lfSFgO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdFN0YXJ0QnRucygpIHtcbiAgICBtYWtlUmFuZG9tQnRuKCk7XG4gICAgbWFrZVVuZG9CdG4oKTtcbiAgICBtYWtlUm90YXRpb25CdG4oKTtcbn1cblxuZnVuY3Rpb24gbWFrZVJhbmRvbUJ0bigpIHtcbiAgICBsZXQgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgSHVtYW4uYm9hcmQucGxhY2VTaGlwUmFuZG9tbHkoSHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XSk7XG4gICAgICAgIGNoYW5nZVBsYWNlU2hpcFRleHQoKTtcbiAgICAgICAgcmVuZGVyR2FtZUJvYXJkKEh1bWFuLmJvYXJkLCAnc3RhcnQnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZVVuZG9CdG4oKSB7XG4gICAgbGV0IHVuZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5kbycpO1xuICAgIHVuZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIEh1bWFuLmJvYXJkLnVuZG9MYXN0U2hpcFBsYWNlKCk7XG4gICAgICAgIGNoYW5nZVBsYWNlU2hpcFRleHQoKTtcbiAgICAgICAgcmVuZGVyR2FtZUJvYXJkKEh1bWFuLmJvYXJkLCAnc3RhcnQnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZVJvdGF0aW9uQnRuKCkge1xuICAgIGxldCByb3RhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbicpO1xuICAgIHJvdGF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlQXhpcyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUF4aXMoKSB7XG4gICAgaWYoYXhpcyA9PT0gJ1gnKSB7XG4gICAgICAgIGF4aXMgPSAnWSc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBheGlzID0gJ1gnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdFN0YXJ0KCkge1xuICAgIG1ha2VTdGFydGluZ0dyaWQoKTtcbiAgICBjaGFuZ2VQbGFjZVNoaXBUZXh0KCk7XG4gICAgaW5pdFN0YXJ0QnRucygpO1xufVxuXG5cblxuZnVuY3Rpb24gcmVuZGVyR2FtZUJvYXJkKGdhbWVib2FyZDogR2FtZWJvYXJkLCBncmlkOiBzdHJpbmcpIHtcbiAgICBsZXQgRE9NYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChncmlkKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV0gPT09ICcnKSB7XG4gICAgICAgICAgICBpZihET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5ib2FyZFtpXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV0uaXNTcG90SGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBQVVQgQSBTUE9UIE9OIFRIRSBCT0FSRCBUSEFUIEhBUyBURVhUIEFGVEVSIEVWRVJZIEFUVEFDSyBUSEFUIFNIT1dTIFdIQVQgSEFQUEVORUQgTEFTVCBUVVJOIVxuXG4vLyBPTiBIT1ZFUiBBREQgQSBDTEFTUyBUTyBHUklEIFRIQVQgQ09MT1JTIElOIFRIRSBTUEFDRVMgSUYgVEhFWSBDSEVDSyBPVVQgUFJPUEVSTFkgSU4gY2hlY2tWYWxpZFBsYWNlbWVudCBBTkQgUkVNT1ZFUyBBTEwgT1RIRVIgSU5TVEFOQ0VTIE9GIEhPVkVSIENMQVNTIEZST00gR1JJRFxuXG4vLyBXSEVOIFlPVSBDTElDSyBBTkQgUExBQ0UgQSBTSElQIEpVU1QgU0VORCBUSEUgQ09SRFMgVE8gVEhFIFBMQUNFIFNISVAgRlVOQ1RJT04hIEFORCBUSEVOIFJVTiBBIFNFUEVSQVRFIEZVTlRJT04gVEhBVCBVUERBVEVTIFRIRSBET00gR1JJRCBSSUdIVCBBRlRFUiFcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9