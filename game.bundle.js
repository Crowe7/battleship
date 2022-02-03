/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
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
        return Computer.player.name;
    }
    if (Computer.board.checkForWin() === true) {
        return Human.player.name;
    }
    return false;
}
function attack(location) {
    if (returnWhoseTurn() === 1) {
        try {
            let attackResult = Human.humanAttack(location);
            whichTurn++;
            return attackResult;
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0tBQ1g7QUFDTCxDQUFDO0FBRUQsU0FBUyxTQUFTO0lBQ2QsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUVkLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxrREFBUyxDQUFDO0lBQzVCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxnREFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXBDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxrREFBUyxDQUFDO0lBQy9CLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxnREFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFeUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBzXCI7XG5pbnRlcmZhY2UgU2hpcEludGVyZmFjZSB7XG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlzU3VuaygpOiBib29sZWFuLFxufVxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBib2FyZDogYW55IC8vIGluZGV4IHNpZ25pdHVyZSBzdHVmZiBpbSBub3Qgc3VyZSBob3cgdG8gdHlwZSBpdCBidXQgaXQgaGFzIHNvbWV0aGluZyB0byBkbyB3aXRoIHRoZSBvYmplY3RzIGluc2lkZSBvZiBpdCA6KFxuICAgIHNoaXBzOiBTaGlwSW50ZXJmYWNlW11cbiAgICBzaGlwc0xlZnQ6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLiNtYWtlQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuI21ha2VTaGlwcygpO1xuICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IDAgLy8gXG5cbiAgICB9XG4gICAgI21ha2VCb2FyZCgpOiBzdHJpbmdbXSB7XG4gICAgICAgIGxldCBib2FyZDogc3RyaW5nW10gPSBbXVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2FyZFxuICAgIH1cbiAgICAjbWFrZVNoaXBzKCk6U2hpcEludGVyZmFjZVtdIHtcbiAgICAgICAgbGV0IHNoaXBzOiBTaGlwSW50ZXJmYWNlW10gPSBbXVxuXG4gICAgICAgIGxldCBDYXJyaWVyID0gbmV3IFNoaXAoNSwgJ0NhcnJpZXInKTtcbiAgICAgICAgc2hpcHMucHVzaChDYXJyaWVyKTtcbiAgICAgICAgbGV0IEJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0LCAnQmF0dGxlc2hpcCcpO1xuICAgICAgICBzaGlwcy5wdXNoKEJhdHRsZXNoaXApO1xuICAgICAgICBsZXQgRGVzdHJveWVyID0gbmV3IFNoaXAoMywgJ0Rlc3Ryb3llcicpO1xuICAgICAgICBzaGlwcy5wdXNoKERlc3Ryb3llcik7XG4gICAgICAgIGxldCBTdWJtYXJpbmUgPSBuZXcgU2hpcCgzLCAnU3VibWFyaW5lJyk7XG4gICAgICAgIHNoaXBzLnB1c2goU3VibWFyaW5lKVxuICAgICAgICBsZXQgUGF0cm9sQm9hdCA9IG5ldyBTaGlwKDIsICdQYXRyb2wgQm9hdCcpO1xuICAgICAgICBzaGlwcy5wdXNoKFBhdHJvbEJvYXQpO1xuICAgICAgICByZXR1cm4gc2hpcHNcbiAgICB9XG4gICAgcGxhY2VTaGlwKGxvY2F0aW9uOiBudW1iZXJbXSwgc2hpcDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICBpZih0aGlzLmNoZWNrVmFsaWRQTGFjZW1lbnQobG9jYXRpb24sIHNoaXApICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGxhY2VtZW50IScpO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uW2ldXSA9IHtTaGlwOiBzaGlwLCBwb3NpdGlvbjogaSsxLCBpc1Nwb3RIaXQ6IGZhbHNlLH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSB0aGlzLnNoaXBzTGVmdCArIDE7XG4gICAgfVxuXG4gICAgdW5kb0xhc3RTaGlwUGxhY2UoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaCgoZWxlbWVudDogYW55LCBpOiBhbnksIGJvYXJkOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5TaGlwLm5hbWUgPT09IHRoaXMuc2hpcHNbdGhpcy5zaGlwc0xlZnQgLSAxXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkW2ldID0gJyc7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZih0aGlzLnNoaXBzTGVmdCA+IDAgKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzTGVmdCAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tWYWxpZFBMYWNlbWVudChsb2NhdGlvbjogbnVtYmVyW10sIHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYoc2hpcC5sZW5ndGggIT09IGxvY2F0aW9uLmxlbmd0aCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhdGlvbi5sZW5ndGg7IGkrKykgeyAvLyBjaGVja3MgaWYgYW5vdGhlciBzaGlwIGlzIGluIHRoZSBzcG90XG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uW2ldXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxvY2F0aW9uWzBdICUgMTAgPT09IGxvY2F0aW9uWzFdICUgMTAgKSB7IC8vIHRoaXMgaXMgYSBoYXJkIGNoZWNrIHRvIHRlc3QgaWYgcGxheWVyIGNvcmRzIGZvciB2ZXJ0IGJlZm9yZSBjaGVja2luZyBpZiBob3Jpem9udGFsIGlzIGJhZFxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuI2NoZWNrSG9yaXpvbnRhbENvcmRzKGxvY2F0aW9uKS5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICAjY2hlY2tIb3Jpem9udGFsQ29yZHMoYXJyYXk6IG51bWJlcltdKSB7XG4gICAgICAgIGxldCBmaXJzdE51bWJlckFycmF5OiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCkge1xuICAgICAgICAgICAgICAgICAgICBpZihhcnJheVswXSA8IDEwICYmIGFycmF5W2ldID4gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROdW1iZXJBcnJheS5wdXNoKDAsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGFycmF5WzBdIDwgMTAgJiYgYXJyYXlbMV0gPCAxMCkge1xuICAgICAgICAgICAgZmlyc3ROdW1iZXJBcnJheS5wdXNoKDApO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyQXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3RyaW5naWZpZWROdW06IHN0cmluZyA9IGFycmF5W2ldLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgZmlyc3ROdW0gPSBwYXJzZUludChzdHJpbmdpZmllZE51bS5jaGFyQXQoMCkpO1xuICAgICAgICAgICAgaWYoZmlyc3ROdW0gIT09IGZpcnN0TnVtYmVyQXJyYXlbMF0pIHtcbiAgICAgICAgICAgICAgICBmaXJzdE51bWJlckFycmF5LnB1c2goZmlyc3ROdW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaXJzdE51bWJlckFycmF5XG4gICAgfVxuXG4gICAgdGFrZUF0dGFjayhsb2NhdGlvbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbl0gPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uXSA9ICdtaXNzJztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2xvY2F0aW9uXVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy4jY2hlY2tWYWxpZEhpdChsb2NhdGlvbikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uXS5pc1Nwb3RIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXAuaGl0U2hpcCh0aGlzLmJvYXJkW2xvY2F0aW9uXS5wb3NpdGlvbik7ICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy4jY2hlY2tJZkJvYXRTdW5rKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3VwZGF0ZUJvYXRDb3VudGVyV2hlblN1bmsodGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiNyZXBvcnRTdW5rU2hpcCh0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnaW52YWxpZCBhdHRhY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICNjaGVja1ZhbGlkSGl0KGxvY2F0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuYm9hcmRbbG9jYXRpb25dICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uXS5pc1Nwb3RIaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgICNjaGVja0lmQm9hdFN1bmsoYm9hdDpTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmKGJvYXQuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSBcblxuICAgICNyZXBvcnRTdW5rU2hpcChib2F0OlNoaXBJbnRlcmZhY2UpIDogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtib2F0Lm5hbWV9IGhhcyBTdW5rIWBcbiAgICB9XG5cbiAgICAjdXBkYXRlQm9hdENvdW50ZXJXaGVuU3Vuayhib2F0OiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IHRoaXMuc2hpcHNMZWZ0IC0gMTtcbiAgICB9XG5cbiAgICBjaGVja0ZvcldpbigpOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVyblZhbGlkUmFuZG9tQ29yZHMobGVuZ3RoOiBudW1iZXIsIG9yaWVudGF0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICdyYW5kb20nKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IHRoaXMuI2dlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbENvcmRzOiBudW1iZXJbXSA9IHRoaXMuI2dlbmVyYXRlTGVnYWxIb3Jpem9udGFsQ29yZHMobGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBob3Jpem9udGFsQ29yZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbENvcmRzOiBudW1iZXJbXSA9IHRoaXMuI2dlbmVyYXRlTGVnYWxWZXJ0aWNhbENvcmRzKGxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxDb3JkcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNnZW5lcmF0ZVJhbmRvbU9yaWVudGF0aW9uKCkge1xuICAgICAgICBsZXQgb3JpZW50YXRpb246IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYob3JpZW50YXRpb24gPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCdcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIGdlbmVyYXRlQ29yZHNGcm9tU3RhcnRpbmdQb3NpdGlvbihzdGFydDogbnVtYmVyLCBvcmllbnRhdGlvbjogc3RyaW5nLCBzaGlwOiBTaGlwSW50ZXJmYWNlKTogbnVtYmVyW10ge1xuICAgICAgICBsZXQgY29yZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAnWCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29yZHMucHVzaChzdGFydCArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvcmRzLnB1c2goc3RhcnQgKyAoaSAqIDEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29yZHNcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNnZW5lcmF0ZUxlZ2FsSG9yaXpvbnRhbENvcmRzKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKiAxMDsgXG4gICAgICAgIGxldCByYW5kb21Ib3Jpem9udGFsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGlmKHJhbmRvbUhvcml6b250YWwgKyBsZW5ndGggPiA5KSB7XG4gICAgICAgICAgICByYW5kb21Ib3Jpem9udGFsID0gcmFuZG9tSG9yaXpvbnRhbCAtIGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3Jkcy5wdXNoKHJhbmRvbUZpbmFsICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgfVxuXG4gICAgI2dlbmVyYXRlTGVnYWxWZXJ0aWNhbENvcmRzKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICBsZXQgcmFuZG9tSG9yaXpvbnRhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBpZihyYW5kb21WZXJ0aWNhbCArIGxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgLSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmFuZG9tVmVydGljYWwgPSByYW5kb21WZXJ0aWNhbCAqIDEwO1xuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3Jkcy5wdXNoKHJhbmRvbUZpbmFsKTtcbiAgICAgICAgICAgIHJhbmRvbUZpbmFsID0gcmFuZG9tRmluYWwgKyAxMDsgLy8gYWRkcyB0byB0byB0aGUgbnVtYmVyIHRvIHNpbXVsYXRlIG1vdmluZyBkb3duIGEgcm93IGluIHRoZSBncmlkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwUmFuZG9tbHkoc2hpcDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAodGhpcy5yZXR1cm5WYWxpZFJhbmRvbUNvcmRzKHNoaXAubGVuZ3RoLCAncmFuZG9tJyksIHNoaXApO1xuICAgICAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPiA1KSB7IC8vIHN0b3BzIG92ZXJwbGFjaW5nIG9mIHNoaXBzIG9uIGJvYXJkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlwc0xlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZUFsbFNoaXBzUmFuZG9tbHkoKSB7XG4gICAgICAgIGxldCBpOiBrZXlvZiB0eXBlb2YgdGhpcy5zaGlwcztcbiAgICAgICAgZm9yKGkgaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seSh0aGlzLnNoaXBzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgYXR0YWNrT3Bwb25lbnQoY29yZGluYXRlczogbnVtYmVyLCBnYW1lYm9hcmQ6IEdhbWVib2FyZCk6c3RyaW5nIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBnYW1lYm9hcmQudGFrZUF0dGFjayhjb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2s7XG5cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21BdHRhY2soZ2FtZWJvYXJkOiBHYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdhbWVib2FyZC50YWtlQXR0YWNrKGxvY2F0aW9uKSBcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXG4iLCJpbnRlcmZhY2UgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICBoaXQ6IG51bWJlcltdLFxuICAgICBuYW1lPzogc3RyaW5nIC8vIHRoYXRzIGZvciBvcHRpb25hbFxuICAgICBpc1N1bmsoKTogYm9vbGVhblxuICAgICBoaXRTaGlwKGluZGV4OiBudW1iZXIpOiBudW1iZXJbXSBcbiB9XG5cbiBjbGFzcyBTaGlwIGltcGxlbWVudHMgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyXG4gICAgIGhpdDogbnVtYmVyW11cbiAgICAgbmFtZTogc3RyaW5nXG5cbiAgICAgY29uc3RydWN0b3IobGVuZ3RoOiBudW1iZXIsIG5hbWU6IHN0cmluZykge1xuICAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgICB0aGlzLmhpdCA9IFtdO1xuICAgICAgICAgdGhpcy5uYW1lID0gbmFtZSAvLyBtYXliZSBhZGQgYSB3YXkgdG8gdGVsbCB3aGF0IGEgc2hpcCBpcyBiYXNlZCBvbiBsZW5ndGggYXMgYSBtZXRob2QgbWF5YmU/P1xuICAgICB9XG5cbiAgICAgaXNTdW5rKCkge1xuICAgICAgICAgaWYodGhpcy5oaXQubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGhpdFNoaXAoaW5kZXg6IG51bWJlcikge1xuICAgICAgICAgaWYodGhpcy4jY2hlY2tGb3JWYWxpZEhpdChpbmRleCkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdFxuICAgICAgICAgfSBcbiAgICAgICAgIHRoaXMuaGl0LnB1c2goaW5kZXgpO1xuICAgICAgICAgcmV0dXJuIHRoaXMuaGl0XG4gICAgIH1cbiAgICAgI2NoZWNrRm9yVmFsaWRIaXQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5oaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSB0aGlzLmhpdFtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgIH1cbiB9XG4gZXhwb3J0IGRlZmF1bHQgU2hpcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5sZXQgd2hpY2hUdXJuOiBudW1iZXIgPSAxOyAvLyBzZXRzIHRoZSBzdGFydGluZyB0dXJuIGFzIHAxIFxuXG5sZXQgQ29tcHV0ZXI6IHtib2FyZDogR2FtZWJvYXJkLCBwbGF5ZXI6IFBsYXllciwgY3B1UGxhY2VTaGlwczogRnVuY3Rpb24sIGNwdUF0dGFjazogRnVuY3Rpb259ID0ge1xuICAgIGJvYXJkOiAgbmV3IEdhbWVib2FyZCxcbiAgICBwbGF5ZXI6ICBuZXcgUGxheWVyKFwiQ29tcHV0ZXJcIiksXG4gICAgY3B1UGxhY2VTaGlwczogKCkgPT4ge1xuICAgICAgICBDb21wdXRlci5ib2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTsgLy8gcnVuIHRoaXMgd2hlbiBwbGF5ZXIgYm9hcmQgaXMgc2V0dXBcbiAgICB9LFxuICAgIGNwdUF0dGFjazogKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgQ29tcHV0ZXIucGxheWVyLnJhbmRvbUF0dGFjayhIdW1hbi5ib2FyZCk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIENvbXB1dGVyLmNwdUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmxldCBIdW1hbjoge2JvYXJkOiBHYW1lYm9hcmQsIHBsYXllcjogUGxheWVyLCBwbGFjZVNoaXA6IEZ1bmN0aW9uLCBodW1hbkF0dGFjazogRnVuY3Rpb24sIGNoYW5nZVBsYXllck5hbWU6IEZ1bmN0aW9ufSA9IHtcbiAgICBib2FyZDogbmV3IEdhbWVib2FyZCxcbiAgICBwbGF5ZXI6IG5ldyBQbGF5ZXIoXCJQbGF5ZXJcIiksICAgXG4gICAgcGxhY2VTaGlwKGNvcmRzOiBudW1iZXJbXSkgey8vIHRoZXNlIGFyZSBnb3QgZnJvbSBldmVudCBsaXN0ZW5lciwgcHV0IHRoaXMgb24gZXZlbnQgbGlzdGVuZXIgcHJvYmFibHlcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgbGV0IHNoaXBOdW1iZXI6IG51bWJlciA9IEh1bWFuLmJvYXJkLnNoaXBzTGVmdDtcbiAgICAgICAgICAgIGxldCBzaGlwID0gSHVtYW4uYm9hcmQuc2hpcHNbc2hpcE51bWJlcl07XG4gICAgICAgICAgICBIdW1hbi5ib2FyZC5wbGFjZVNoaXAoY29yZHMsIHNoaXApO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaHVtYW5BdHRhY2sobG9jYXRpb246IG51bWJlcik6c3RyaW5nIHsgLy8gc2V0IGEgdmFyaWFibGUgdG8gdGhpcyBhbmQgdGhlbiBhc3NpZ24gdGhhdCB0byB0aGUgZG9tIHNvIGl0IGNhbiByZXBvcnQgdGhhdCBhdHRhY2tcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQ6IHN0cmluZyA9IEh1bWFuLnBsYXllci5hdHRhY2tPcHBvbmVudChsb2NhdGlvbiwgQ29tcHV0ZXIuYm9hcmQpO1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH0gICAgICBcbiAgICB9LFxuXG4gICAgY2hhbmdlUGxheWVyTmFtZShuYW1lOiBzdHJpbmcpIHsgLy8gYXBwZW5kIHRoaXMgdG8gYSBuYW1lIHRleHQgYm94IG9uIHRoZSBkb21cbiAgICAgICAgaWYobmFtZSA9PT0gXCJDb21wdXRlclwiIHx8IG5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdJbnZhbGlkIE5hbWUnKVxuICAgICAgICB9XG4gICAgICAgIEh1bWFuLnBsYXllci5uYW1lID0gbmFtZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzUGxheWVyQm9hcmRzU2V0dXAoKTogYm9vbGVhbiB7IC8vIGFmdGVyIHBsYXllciBwbGFjZXMgc2hpcCBjaGVjayB3aXRoIHRoaXMgYW5kIHdoZW4gaXRzIHRydWUgYXBwZW5kIHRoZSBldmVudCBsaXN0ZW5lcnMgdG8gb3Bwb25lbnRzIGJvYXJkP1xuICAgIGlmKEh1bWFuLmJvYXJkLnNoaXBzTGVmdCA9PT0gNSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSgpOiBzdHJpbmcgfCBib29sZWFuIHsgLy8gY2hlY2sgdGhpcyBhZnRlciBldmVyeSBhdHRhY2sgaW4gZG9tIGlmIHJldHVybnMgbm90IGZhbHNlIHBvcCBhIG1vZGFsIHVwIHdpdGggd2lubmVyXG4gICAgaWYoSHVtYW4uYm9hcmQuY2hlY2tGb3JXaW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gQ29tcHV0ZXIucGxheWVyLm5hbWVcbiAgICB9XG4gICAgaWYoQ29tcHV0ZXIuYm9hcmQuY2hlY2tGb3JXaW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gSHVtYW4ucGxheWVyLm5hbWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGF0dGFjayhsb2NhdGlvbjogbnVtYmVyKSB7IC8vIHVzZSBpZiBzdGF0bWVudCwgaWYgcmV0dXJuV2hvc2V0dXJuKCkgaXMgMiB0aGVuIHJ1biBhdHRhY2sgYWdhaW4gdG8gZG8gY3B1IGF0dGFja1xuICAgIGlmKHJldHVybldob3NlVHVybigpID09PSAxKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGxldCBhdHRhY2tSZXN1bHQgPSBIdW1hbi5odW1hbkF0dGFjayhsb2NhdGlvbik7XG4gICAgICAgICAgICB3aGljaFR1cm4rK1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYocmV0dXJuV2hvc2VUdXJuKCkgPT09IDIpIHtcbiAgICAgICAgQ29tcHV0ZXIuY3B1QXR0YWNrKCk7XG4gICAgICAgIHdoaWNoVHVybi0tXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5XaG9zZVR1cm4oKTogbnVtYmVyIHtcbiAgICBpZih3aGljaFR1cm4gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgZWxzZSBpZih3aGljaFR1cm4gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIDJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICB3aGljaFR1cm4gPSAxO1xuXG4gICAgSHVtYW4uYm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xuICAgIEh1bWFuLnBsYXllciA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXJcIik7XG5cbiAgICBDb21wdXRlci5ib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG4gICAgQ29tcHV0ZXIucGxheWVyID0gbmV3IFBsYXllcihcIkNvbXB1dGVyXCIpO1xufVxuXG5leHBvcnQge0NvbXB1dGVyLCBIdW1hbiwgZW5kR2FtZSwgYXR0YWNrLCByZXR1cm5XaG9zZVR1cm4sIGlzUGxheWVyQm9hcmRzU2V0dXAsIHJlc2V0R2FtZX1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=