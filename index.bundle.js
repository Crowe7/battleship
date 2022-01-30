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
            Computer.board.takeAttack(location);
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
var _Gameboard_instances, _Gameboard_makeBoard, _Gameboard_makeShips, _Gameboard_checkHorizontalCords, _Gameboard_checkValidHit, _Gameboard_updateBoatCounterWhenSunk, _Gameboard_generateRandomOrientation, _Gameboard_generateLegalHorizontalCords, _Gameboard_generateLegalVerticalCords;

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
                __classPrivateFieldGet(this, _Gameboard_instances, "m", _Gameboard_updateBoatCounterWhenSunk).call(this, this.board[location].Ship);
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
}, _Gameboard_updateBoatCounterWhenSunk = function _Gameboard_updateBoatCounterWhenSunk(boat) {
    if (boat.isSunk() === true) {
        this.shipsLeft = this.shipsLeft - 1;
        return true;
    }
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
            gameboard.takeAttack(cordinates);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.ts");

let message = 'Hello World';
function log(message) {
    console.log(message);
    return message;
}
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
    placeShipText.innerText = `Place Your ${_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.ships[_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft].name}!`;
}
function initStart() {
    makeStartingGrid();
    changePlaceShipText();
}
// ON HOVER ADD A CLASS TO GRID THAT COLORS IN THE SPACES IF THEY CHECK OUT PROPERLY IN checkValidPlacement AND REMOVES ALL OTHER INSTANCES OF HOVER CLASS FROM GRID
// WHEN YOU CLICK AND PLACE A SHIP JUST SEND THE CORDS TO THE PLACE SHIP FUNCTION! AND THEN RUN A SEPERATE FUNTION THAT UPDATES THE DOM GRID RIGHT AFTER!


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxPQUFPLEdBQVcsYUFBYSxDQUFDO0FBQ3BDLFNBQVMsR0FBRyxDQUFDLE9BQWU7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUM7QUFFWixTQUFTLGdCQUFnQjtJQUNyQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekIsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBRWhDO0FBQ0wsQ0FBQztBQUVELFNBQVMsbUJBQW1CO0lBQ3hCLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsYUFBYSxDQUFDLFNBQVMsR0FBRyxjQUFjLG9EQUFpQixDQUFDLHdEQUFxQixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDN0YsQ0FBQztBQUVELFNBQVMsU0FBUztJQUNkLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsbUJBQW1CLEVBQUUsQ0FBQztBQUMxQixDQUFDO0FBRUQsb0tBQW9LO0FBRXBLLHlKQUF5SjtBQUU1SSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5cbmxldCB3aGljaFR1cm46IG51bWJlciA9IDE7IC8vIHNldHMgdGhlIHN0YXJ0aW5nIHR1cm4gYXMgcDEgXG5cbmxldCBDb21wdXRlcjoge2JvYXJkOiBHYW1lYm9hcmQsIHBsYXllcjogUGxheWVyLCBjcHVQbGFjZVNoaXBzOiBGdW5jdGlvbiwgY3B1QXR0YWNrOiBGdW5jdGlvbn0gPSB7XG4gICAgYm9hcmQ6ICBuZXcgR2FtZWJvYXJkLFxuICAgIHBsYXllcjogIG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiKSxcbiAgICBjcHVQbGFjZVNoaXBzOiAoKSA9PiB7XG4gICAgICAgIENvbXB1dGVyLmJvYXJkLnBsYWNlQWxsU2hpcHNSYW5kb21seSgpOyAvLyBydW4gdGhpcyB3aGVuIHBsYXllciBib2FyZCBpcyBzZXR1cFxuICAgIH0sXG4gICAgY3B1QXR0YWNrOiAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBDb21wdXRlci5wbGF5ZXIucmFuZG9tQXR0YWNrKEh1bWFuLmJvYXJkKTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgQ29tcHV0ZXIuY3B1QXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxubGV0IEh1bWFuOiB7Ym9hcmQ6IEdhbWVib2FyZCwgcGxheWVyOiBQbGF5ZXIsIHBsYWNlU2hpcDogRnVuY3Rpb24sIGh1bWFuQXR0YWNrOiBGdW5jdGlvbiwgY2hhbmdlUGxheWVyTmFtZTogRnVuY3Rpb259ID0ge1xuICAgIGJvYXJkOiBuZXcgR2FtZWJvYXJkLFxuICAgIHBsYXllcjogbmV3IFBsYXllcihcIlBsYXllclwiKSwgICBcbiAgICBwbGFjZVNoaXAoY29yZHM6IG51bWJlcltdKSB7Ly8gdGhlc2UgYXJlIGdvdCBmcm9tIGV2ZW50IGxpc3RlbmVyLCBwdXQgdGhpcyBvbiBldmVudCBsaXN0ZW5lciBwcm9iYWJseVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBsZXQgc2hpcE51bWJlcjogbnVtYmVyID0gSHVtYW4uYm9hcmQuc2hpcHNMZWZ0O1xuICAgICAgICAgICAgbGV0IHNoaXAgPSBIdW1hbi5ib2FyZC5zaGlwc1tzaGlwTnVtYmVyXTtcbiAgICAgICAgICAgIEh1bWFuLmJvYXJkLnBsYWNlU2hpcChjb3Jkcywgc2hpcCk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBodW1hbkF0dGFjayhsb2NhdGlvbjogbnVtYmVyKSB7IFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgQ29tcHV0ZXIuYm9hcmQudGFrZUF0dGFjayhsb2NhdGlvbilcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH0gICAgICBcbiAgICB9LFxuXG4gICAgY2hhbmdlUGxheWVyTmFtZShuYW1lOiBzdHJpbmcpIHsgLy8gYXBwZW5kIHRoaXMgdG8gYSBuYW1lIHRleHQgYm94IG9uIHRoZSBkb21cbiAgICAgICAgaWYobmFtZSA9PT0gXCJDb21wdXRlclwiIHx8IG5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdJbnZhbGlkIE5hbWUnKVxuICAgICAgICB9XG4gICAgICAgIEh1bWFuLnBsYXllci5uYW1lID0gbmFtZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzUGxheWVyQm9hcmRzU2V0dXAoKTogYm9vbGVhbiB7IC8vIGFmdGVyIHBsYXllciBwbGFjZXMgc2hpcCBjaGVjayB3aXRoIHRoaXMgYW5kIHdoZW4gaXRzIHRydWUgYXBwZW5kIHRoZSBldmVudCBsaXN0ZW5lcnMgdG8gb3Bwb25lbnRzIGJvYXJkP1xuICAgIGlmKEh1bWFuLmJvYXJkLnNoaXBzTGVmdCA9PT0gNSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSgpOiBzdHJpbmcgfCBib29sZWFuIHsgLy8gY2hlY2sgdGhpcyBhZnRlciBldmVyeSBhdHRhY2sgaW4gZG9tIGlmIHJldHVybnMgbm90IGZhbHNlIHBvcCBhIG1vZGFsIHVwIHdpdGggd2lubmVyXG4gICAgaWYoSHVtYW4uYm9hcmQuY2hlY2tGb3JXaW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gSHVtYW4ucGxheWVyLm5hbWVcbiAgICB9XG4gICAgaWYoQ29tcHV0ZXIuYm9hcmQuY2hlY2tGb3JXaW4oKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gQ29tcHV0ZXIucGxheWVyLm5hbWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGF0dGFjayhsb2NhdGlvbjogbnVtYmVyKSB7IC8vIHVzZSBpZiBzdGF0bWVudCwgaWYgcmV0dXJuV2hvc2V0dXJuKCkgaXMgMiB0aGVuIHJ1biBhdHRhY2sgYWdhaW4gdG8gZG8gY3B1IGF0dGFja1xuICAgIGlmKHJldHVybldob3NlVHVybigpID09PSAxKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIEh1bWFuLmh1bWFuQXR0YWNrKGxvY2F0aW9uKVxuICAgICAgICAgICAgd2hpY2hUdXJuKytcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYocmV0dXJuV2hvc2VUdXJuKCkgPT09IDIpIHtcbiAgICAgICAgQ29tcHV0ZXIuY3B1QXR0YWNrKCk7XG4gICAgICAgIHdoaWNoVHVybi0tXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5XaG9zZVR1cm4oKTogbnVtYmVyIHtcbiAgICBpZih3aGljaFR1cm4gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgZWxzZSBpZih3aGljaFR1cm4gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIDJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICB3aGljaFR1cm4gPSAxO1xuXG4gICAgSHVtYW4uYm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xuICAgIEh1bWFuLnBsYXllciA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXJcIik7XG5cbiAgICBDb21wdXRlci5ib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG4gICAgQ29tcHV0ZXIucGxheWVyID0gbmV3IFBsYXllcihcIkNvbXB1dGVyXCIpO1xufVxuXG5leHBvcnQge0NvbXB1dGVyLCBIdW1hbiwgZW5kR2FtZSwgYXR0YWNrLCByZXR1cm5XaG9zZVR1cm4sIGlzUGxheWVyQm9hcmRzU2V0dXAsIHJlc2V0R2FtZX1cblxuXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwc1wiO1xuaW50ZXJmYWNlIFNoaXBJbnRlcmZhY2Uge1xuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpc1N1bmsoKTogYm9vbGVhbixcbn1cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgYm9hcmQ6IGFueSAvLyBpbmRleCBzaWduaXR1cmUgc3R1ZmYgaW0gbm90IHN1cmUgaG93IHRvIHR5cGUgaXQgYnV0IGl0IGhhcyBzb21ldGhpbmcgdG8gZG8gd2l0aCB0aGUgb2JqZWN0cyBpbnNpZGUgb2YgaXQgOihcbiAgICBzaGlwczogU2hpcEludGVyZmFjZVtdXG4gICAgc2hpcHNMZWZ0OiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy4jbWFrZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLiNtYWtlU2hpcHMoKTtcbiAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSAwIC8vIFxuXG4gICAgfVxuICAgICNtYWtlQm9hcmQoKTogc3RyaW5nW10ge1xuICAgICAgICBsZXQgYm9hcmQ6IHN0cmluZ1tdID0gW11cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmQucHVzaCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG4gICAgI21ha2VTaGlwcygpOlNoaXBJbnRlcmZhY2VbXSB7XG4gICAgICAgIGxldCBzaGlwczogU2hpcEludGVyZmFjZVtdID0gW11cblxuICAgICAgICBsZXQgQ2FycmllciA9IG5ldyBTaGlwKDUsICdDYXJyaWVyJyk7XG4gICAgICAgIHNoaXBzLnB1c2goQ2Fycmllcik7XG4gICAgICAgIGxldCBCYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcbiAgICAgICAgc2hpcHMucHVzaChCYXR0bGVzaGlwKTtcbiAgICAgICAgbGV0IERlc3Ryb3llciA9IG5ldyBTaGlwKDMsICdEZXN0cm95ZXInKTtcbiAgICAgICAgc2hpcHMucHVzaChEZXN0cm95ZXIpO1xuICAgICAgICBsZXQgU3VibWFyaW5lID0gbmV3IFNoaXAoMywgJ1N1Ym1hcmluZScpO1xuICAgICAgICBzaGlwcy5wdXNoKFN1Ym1hcmluZSlcbiAgICAgICAgbGV0IFBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyLCAnUGF0cm9sIEJvYXQnKTtcbiAgICAgICAgc2hpcHMucHVzaChQYXRyb2xCb2F0KTtcbiAgICAgICAgcmV0dXJuIHNoaXBzXG4gICAgfVxuICAgIHBsYWNlU2hpcChsb2NhdGlvbjogbnVtYmVyW10sIHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYodGhpcy5jaGVja1ZhbGlkUExhY2VtZW50KGxvY2F0aW9uLCBzaGlwKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYWNlbWVudCEnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gPSB7U2hpcDogc2hpcCwgcG9zaXRpb246IGkrMSwgaXNTcG90SGl0OiBmYWxzZSx9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gdGhpcy5zaGlwc0xlZnQgKyAxO1xuICAgIH1cblxuICAgIHVuZG9MYXN0U2hpcFBsYWNlKCkge1xuICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogYW55LCBib2FyZDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuU2hpcC5uYW1lID09PSB0aGlzLnNoaXBzW3RoaXMuc2hpcHNMZWZ0IC0gMV0ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPiAwICkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrVmFsaWRQTGFjZW1lbnQobG9jYXRpb246IG51bWJlcltdLCBzaGlwOiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmKHNoaXAubGVuZ3RoICE9PSBsb2NhdGlvbi5sZW5ndGggKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYXRpb24ubGVuZ3RoOyBpKyspIHsgLy8gY2hlY2tzIGlmIGFub3RoZXIgc2hpcCBpcyBpbiB0aGUgc3BvdFxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihsb2NhdGlvblswXSAlIDEwID09PSBsb2NhdGlvblsxXSAlIDEwICkgeyAvLyB0aGlzIGlzIGEgaGFyZCBjaGVjayB0byB0ZXN0IGlmIHBsYXllciBjb3JkcyBmb3IgdmVydCBiZWZvcmUgY2hlY2tpbmcgaWYgaG9yaXpvbnRhbCBpcyBiYWRcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLiNjaGVja0hvcml6b250YWxDb3Jkcyhsb2NhdGlvbikubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgI2NoZWNrSG9yaXpvbnRhbENvcmRzKGFycmF5OiBudW1iZXJbXSkge1xuICAgICAgICBsZXQgZmlyc3ROdW1iZXJBcnJheTogbnVtYmVyW10gPSBbXTtcblxuICAgICAgICBpZihhcnJheVswXSA8IDEwICYmIGFycmF5WzFdIDwgMTApIHtcbiAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaCgwKTtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdE51bWJlckFycmF5O1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN0cmluZ2lmaWVkTnVtOiBzdHJpbmcgPSBhcnJheVtpXS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IGZpcnN0TnVtID0gcGFyc2VJbnQoc3RyaW5naWZpZWROdW0uY2hhckF0KDApKTtcbiAgICAgICAgICAgIGlmKGZpcnN0TnVtICE9PSBmaXJzdE51bWJlckFycmF5WzBdKSB7XG4gICAgICAgICAgICAgICAgZmlyc3ROdW1iZXJBcnJheS5wdXNoKGZpcnN0TnVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheVxuICAgIH1cblxuICAgIHRha2VBdHRhY2sobG9jYXRpb246IG51bWJlcikge1xuICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uXSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dID0gJ21pc3MnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbbG9jYXRpb25dXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLiNjaGVja1ZhbGlkSGl0KGxvY2F0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dLmlzU3BvdEhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcC5oaXRTaGlwKHRoaXMuYm9hcmRbbG9jYXRpb25dLnBvc2l0aW9uKTsgICBcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVCb2F0Q291bnRlcldoZW5TdW5rKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnaW52YWxpZCBhdHRhY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICNjaGVja1ZhbGlkSGl0KGxvY2F0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuYm9hcmRbbG9jYXRpb25dICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uXS5pc1Nwb3RIaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgICN1cGRhdGVCb2F0Q291bnRlcldoZW5TdW5rKGJvYXQ6IFNoaXBJbnRlcmZhY2UpIDogYm9vbGVhbiB7XG4gICAgICAgIGlmKGJvYXQuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gdGhpcy5zaGlwc0xlZnQgLSAxO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrRm9yV2luKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aGlzLnNoaXBzTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuVmFsaWRSYW5kb21Db3JkcyhsZW5ndGg6IG51bWJlciwgb3JpZW50YXRpb246IHN0cmluZykge1xuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3JhbmRvbScpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gdGhpcy4jZ2VuZXJhdGVSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIGhvcml6b250YWxDb3JkcztcbiAgICAgICAgfVxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgbGV0IHZlcnRpY2FsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbFZlcnRpY2FsQ29yZHMobGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbENvcmRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2dlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKSB7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbjogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJ1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICNnZW5lcmF0ZUxlZ2FsSG9yaXpvbnRhbENvcmRzKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKiAxMDsgXG4gICAgICAgIGxldCByYW5kb21Ib3Jpem9udGFsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGlmKHJhbmRvbUhvcml6b250YWwgKyBsZW5ndGggPiA5KSB7XG4gICAgICAgICAgICByYW5kb21Ib3Jpem9udGFsID0gcmFuZG9tSG9yaXpvbnRhbCAtIGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3Jkcy5wdXNoKHJhbmRvbUZpbmFsICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgfVxuXG4gICAgI2dlbmVyYXRlTGVnYWxWZXJ0aWNhbENvcmRzKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICBsZXQgcmFuZG9tSG9yaXpvbnRhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBpZihyYW5kb21WZXJ0aWNhbCArIGxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgLSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmFuZG9tVmVydGljYWwgPSByYW5kb21WZXJ0aWNhbCAqIDEwO1xuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3Jkcy5wdXNoKHJhbmRvbUZpbmFsKTtcbiAgICAgICAgICAgIHJhbmRvbUZpbmFsID0gcmFuZG9tRmluYWwgKyAxMDsgLy8gYWRkcyB0byB0byB0aGUgbnVtYmVyIHRvIHNpbXVsYXRlIG1vdmluZyBkb3duIGEgcm93IGluIHRoZSBncmlkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwUmFuZG9tbHkoc2hpcDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXAodGhpcy5yZXR1cm5WYWxpZFJhbmRvbUNvcmRzKHNoaXAubGVuZ3RoLCAncmFuZG9tJyksIHNoaXApO1xuICAgICAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPiA1KSB7IC8vIHN0b3BzIG92ZXJwbGFjaW5nIG9mIHNoaXBzIG9uIGJvYXJkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlwc0xlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGFjZUFsbFNoaXBzUmFuZG9tbHkoKSB7XG4gICAgICAgIGxldCBpOiBrZXlvZiB0eXBlb2YgdGhpcy5zaGlwcztcbiAgICAgICAgZm9yKGkgaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seSh0aGlzLnNoaXBzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIlxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgYXR0YWNrT3Bwb25lbnQoY29yZGluYXRlczogbnVtYmVyLCBnYW1lYm9hcmQ6IEdhbWVib2FyZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnRha2VBdHRhY2soY29yZGluYXRlcyk7XG5cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21BdHRhY2soZ2FtZWJvYXJkOiBHYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdhbWVib2FyZC50YWtlQXR0YWNrKGxvY2F0aW9uKSBcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXG4iLCJpbnRlcmZhY2UgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICBoaXQ6IG51bWJlcltdLFxuICAgICBuYW1lPzogc3RyaW5nIC8vIHRoYXRzIGZvciBvcHRpb25hbFxuICAgICBpc1N1bmsoKTogYm9vbGVhblxuICAgICBoaXRTaGlwKGluZGV4OiBudW1iZXIpOiBudW1iZXJbXSBcbiB9XG5cbiBjbGFzcyBTaGlwIGltcGxlbWVudHMgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyXG4gICAgIGhpdDogbnVtYmVyW11cbiAgICAgbmFtZTogc3RyaW5nXG5cbiAgICAgY29uc3RydWN0b3IobGVuZ3RoOiBudW1iZXIsIG5hbWU6IHN0cmluZykge1xuICAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgICB0aGlzLmhpdCA9IFtdO1xuICAgICAgICAgdGhpcy5uYW1lID0gbmFtZSAvLyBtYXliZSBhZGQgYSB3YXkgdG8gdGVsbCB3aGF0IGEgc2hpcCBpcyBiYXNlZCBvbiBsZW5ndGggYXMgYSBtZXRob2QgbWF5YmU/P1xuICAgICB9XG5cbiAgICAgaXNTdW5rKCkge1xuICAgICAgICAgaWYodGhpcy5oaXQubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGhpdFNoaXAoaW5kZXg6IG51bWJlcikge1xuICAgICAgICAgaWYodGhpcy4jY2hlY2tGb3JWYWxpZEhpdChpbmRleCkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdFxuICAgICAgICAgfSBcbiAgICAgICAgIHRoaXMuaGl0LnB1c2goaW5kZXgpO1xuICAgICAgICAgcmV0dXJuIHRoaXMuaGl0XG4gICAgIH1cbiAgICAgI2NoZWNrRm9yVmFsaWRIaXQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5oaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSB0aGlzLmhpdFtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgIH1cbiB9XG4gZXhwb3J0IGRlZmF1bHQgU2hpcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtDb21wdXRlciwgSHVtYW4sIGVuZEdhbWUsIGF0dGFjaywgcmV0dXJuV2hvc2VUdXJuLCBpc1BsYXllckJvYXJkc1NldHVwLCByZXNldEdhbWV9IGZyb20gXCIuL2dhbWVcIjtcbmxldCBtZXNzYWdlOiBzdHJpbmcgPSAnSGVsbG8gV29ybGQnO1xuZnVuY3Rpb24gbG9nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIHJldHVybiBtZXNzYWdlO1xufVxuXG5pbml0U3RhcnQoKTtcblxuZnVuY3Rpb24gbWFrZVN0YXJ0aW5nR3JpZCgpIHtcbiAgICBsZXQgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgbGV0IGdyaWRTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkU3BhY2Uuc2V0QXR0cmlidXRlKCdpZCcsIGkudG9TdHJpbmcoKSk7XG4gICAgICAgIHN0YXJ0LmFwcGVuZENoaWxkKGdyaWRTcGFjZSk7XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBsYWNlU2hpcFRleHQoKSB7XG4gICAgbGV0IHBsYWNlU2hpcFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VTaGlwVGV4dCcpO1xuICAgIHBsYWNlU2hpcFRleHQuaW5uZXJUZXh0ID0gYFBsYWNlIFlvdXIgJHtIdW1hbi5ib2FyZC5zaGlwc1tIdW1hbi5ib2FyZC5zaGlwc0xlZnRdLm5hbWV9IWA7XG59XG5cbmZ1bmN0aW9uIGluaXRTdGFydCgpIHtcbiAgICBtYWtlU3RhcnRpbmdHcmlkKCk7XG4gICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xufVxuXG4vLyBPTiBIT1ZFUiBBREQgQSBDTEFTUyBUTyBHUklEIFRIQVQgQ09MT1JTIElOIFRIRSBTUEFDRVMgSUYgVEhFWSBDSEVDSyBPVVQgUFJPUEVSTFkgSU4gY2hlY2tWYWxpZFBsYWNlbWVudCBBTkQgUkVNT1ZFUyBBTEwgT1RIRVIgSU5TVEFOQ0VTIE9GIEhPVkVSIENMQVNTIEZST00gR1JJRFxuXG4vLyBXSEVOIFlPVSBDTElDSyBBTkQgUExBQ0UgQSBTSElQIEpVU1QgU0VORCBUSEUgQ09SRFMgVE8gVEhFIFBMQUNFIFNISVAgRlVOQ1RJT04hIEFORCBUSEVOIFJVTiBBIFNFUEVSQVRFIEZVTlRJT04gVEhBVCBVUERBVEVTIFRIRSBET00gR1JJRCBSSUdIVCBBRlRFUiFcblxuZXhwb3J0IHtsb2d9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==