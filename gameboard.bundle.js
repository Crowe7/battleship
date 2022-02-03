/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!**************************!*\
  !*** ./src/gameboard.ts ***!
  \**************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QixXQUFXLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGtFQUFrRTtLQUNyRztJQUNELE9BQU8sS0FBSztBQUNoQixDQUFDO0FBdUJMLGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyLFxuICAgICBoaXQ6IG51bWJlcltdLFxuICAgICBuYW1lPzogc3RyaW5nIC8vIHRoYXRzIGZvciBvcHRpb25hbFxuICAgICBpc1N1bmsoKTogYm9vbGVhblxuICAgICBoaXRTaGlwKGluZGV4OiBudW1iZXIpOiBudW1iZXJbXSBcbiB9XG5cbiBjbGFzcyBTaGlwIGltcGxlbWVudHMgU2hpcEludGVyZmFjZSB7XG4gICAgIGxlbmd0aDogbnVtYmVyXG4gICAgIGhpdDogbnVtYmVyW11cbiAgICAgbmFtZTogc3RyaW5nXG5cbiAgICAgY29uc3RydWN0b3IobGVuZ3RoOiBudW1iZXIsIG5hbWU6IHN0cmluZykge1xuICAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgICB0aGlzLmhpdCA9IFtdO1xuICAgICAgICAgdGhpcy5uYW1lID0gbmFtZSAvLyBtYXliZSBhZGQgYSB3YXkgdG8gdGVsbCB3aGF0IGEgc2hpcCBpcyBiYXNlZCBvbiBsZW5ndGggYXMgYSBtZXRob2QgbWF5YmU/P1xuICAgICB9XG5cbiAgICAgaXNTdW5rKCkge1xuICAgICAgICAgaWYodGhpcy5oaXQubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICB9XG4gICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgIH1cbiAgICAgfVxuXG4gICAgIGhpdFNoaXAoaW5kZXg6IG51bWJlcikge1xuICAgICAgICAgaWYodGhpcy4jY2hlY2tGb3JWYWxpZEhpdChpbmRleCkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdFxuICAgICAgICAgfSBcbiAgICAgICAgIHRoaXMuaGl0LnB1c2goaW5kZXgpO1xuICAgICAgICAgcmV0dXJuIHRoaXMuaGl0XG4gICAgIH1cbiAgICAgI2NoZWNrRm9yVmFsaWRIaXQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5oaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSB0aGlzLmhpdFtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgIH1cbiB9XG4gZXhwb3J0IGRlZmF1bHQgU2hpcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcHNcIjtcbmludGVyZmFjZSBTaGlwSW50ZXJmYWNlIHtcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaXNTdW5rKCk6IGJvb2xlYW4sXG59XG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGJvYXJkOiBhbnkgLy8gaW5kZXggc2lnbml0dXJlIHN0dWZmIGltIG5vdCBzdXJlIGhvdyB0byB0eXBlIGl0IGJ1dCBpdCBoYXMgc29tZXRoaW5nIHRvIGRvIHdpdGggdGhlIG9iamVjdHMgaW5zaWRlIG9mIGl0IDooXG4gICAgc2hpcHM6IFNoaXBJbnRlcmZhY2VbXVxuICAgIHNoaXBzTGVmdDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuI21ha2VCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy4jbWFrZVNoaXBzKCk7XG4gICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gMCAvLyBcblxuICAgIH1cbiAgICAjbWFrZUJvYXJkKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgbGV0IGJvYXJkOiBzdHJpbmdbXSA9IFtdXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGJvYXJkLnB1c2goJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvYXJkXG4gICAgfVxuICAgICNtYWtlU2hpcHMoKTpTaGlwSW50ZXJmYWNlW10ge1xuICAgICAgICBsZXQgc2hpcHM6IFNoaXBJbnRlcmZhY2VbXSA9IFtdXG5cbiAgICAgICAgbGV0IENhcnJpZXIgPSBuZXcgU2hpcCg1LCAnQ2FycmllcicpO1xuICAgICAgICBzaGlwcy5wdXNoKENhcnJpZXIpO1xuICAgICAgICBsZXQgQmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQsICdCYXR0bGVzaGlwJyk7XG4gICAgICAgIHNoaXBzLnB1c2goQmF0dGxlc2hpcCk7XG4gICAgICAgIGxldCBEZXN0cm95ZXIgPSBuZXcgU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gICAgICAgIHNoaXBzLnB1c2goRGVzdHJveWVyKTtcbiAgICAgICAgbGV0IFN1Ym1hcmluZSA9IG5ldyBTaGlwKDMsICdTdWJtYXJpbmUnKTtcbiAgICAgICAgc2hpcHMucHVzaChTdWJtYXJpbmUpXG4gICAgICAgIGxldCBQYXRyb2xCb2F0ID0gbmV3IFNoaXAoMiwgJ1BhdHJvbCBCb2F0Jyk7XG4gICAgICAgIHNoaXBzLnB1c2goUGF0cm9sQm9hdCk7XG4gICAgICAgIHJldHVybiBzaGlwc1xuICAgIH1cbiAgICBwbGFjZVNoaXAobG9jYXRpb246IG51bWJlcltdLCBzaGlwOiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tWYWxpZFBMYWNlbWVudChsb2NhdGlvbiwgc2hpcCkgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQbGFjZW1lbnQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25baV1dID0ge1NoaXA6IHNoaXAsIHBvc2l0aW9uOiBpKzEsIGlzU3BvdEhpdDogZmFsc2UsfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IHRoaXMuc2hpcHNMZWZ0ICsgMTtcbiAgICB9XG5cbiAgICB1bmRvTGFzdFNoaXBQbGFjZSgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKChlbGVtZW50OiBhbnksIGk6IGFueSwgYm9hcmQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYoZWxlbWVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LlNoaXAubmFtZSA9PT0gdGhpcy5zaGlwc1t0aGlzLnNoaXBzTGVmdCAtIDFdLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRbaV0gPSAnJztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID4gMCApIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0IC09IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1ZhbGlkUExhY2VtZW50KGxvY2F0aW9uOiBudW1iZXJbXSwgc2hpcDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICBpZihzaGlwLmxlbmd0aCAhPT0gbG9jYXRpb24ubGVuZ3RoICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2F0aW9uLmxlbmd0aDsgaSsrKSB7IC8vIGNoZWNrcyBpZiBhbm90aGVyIHNoaXAgaXMgaW4gdGhlIHNwb3RcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jYXRpb25baV1dICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYobG9jYXRpb25bMF0gJSAxMCA9PT0gbG9jYXRpb25bMV0gJSAxMCApIHsgLy8gdGhpcyBpcyBhIGhhcmQgY2hlY2sgdG8gdGVzdCBpZiBwbGF5ZXIgY29yZHMgZm9yIHZlcnQgYmVmb3JlIGNoZWNraW5nIGlmIGhvcml6b250YWwgaXMgYmFkXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy4jY2hlY2tIb3Jpem9udGFsQ29yZHMobG9jYXRpb24pLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgICNjaGVja0hvcml6b250YWxDb3JkcyhhcnJheTogbnVtYmVyW10pIHtcbiAgICAgICAgbGV0IGZpcnN0TnVtYmVyQXJyYXk6IG51bWJlcltdID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBpZihhcnJheVswXSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFycmF5WzBdIDwgMTAgJiYgYXJyYXlbaV0gPiA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE51bWJlckFycmF5LnB1c2goMCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdE51bWJlckFycmF5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCAmJiBhcnJheVsxXSA8IDEwKSB7XG4gICAgICAgICAgICBmaXJzdE51bWJlckFycmF5LnB1c2goMCk7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdHJpbmdpZmllZE51bTogc3RyaW5nID0gYXJyYXlbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBmaXJzdE51bSA9IHBhcnNlSW50KHN0cmluZ2lmaWVkTnVtLmNoYXJBdCgwKSk7XG4gICAgICAgICAgICBpZihmaXJzdE51bSAhPT0gZmlyc3ROdW1iZXJBcnJheVswXSkge1xuICAgICAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaChmaXJzdE51bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyQXJyYXlcbiAgICB9XG5cbiAgICB0YWtlQXR0YWNrKGxvY2F0aW9uOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uXSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dID0gJ21pc3MnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbbG9jYXRpb25dXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZih0aGlzLiNjaGVja1ZhbGlkSGl0KGxvY2F0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dLmlzU3BvdEhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcC5oaXRTaGlwKHRoaXMuYm9hcmRbbG9jYXRpb25dLnBvc2l0aW9uKTsgICBcbiAgICAgICAgICAgICAgICBpZih0aGlzLiNjaGVja0lmQm9hdFN1bmsodGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlQm9hdENvdW50ZXJXaGVuU3Vuayh0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3JlcG9ydFN1bmtTaGlwKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdpbnZhbGlkIGF0dGFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2NoZWNrVmFsaWRIaXQobG9jYXRpb246IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5ib2FyZFtsb2NhdGlvbl0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jYXRpb25dLmlzU3BvdEhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgI2NoZWNrSWZCb2F0U3Vuayhib2F0OlNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYoYm9hdC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgI3JlcG9ydFN1bmtTaGlwKGJvYXQ6U2hpcEludGVyZmFjZSkgOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIGAke2JvYXQubmFtZX0gaGFzIFN1bmshYFxuICAgIH1cblxuICAgICN1cGRhdGVCb2F0Q291bnRlcldoZW5TdW5rKGJvYXQ6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gdGhpcy5zaGlwc0xlZnQgLSAxO1xuICAgIH1cblxuICAgIGNoZWNrRm9yV2luKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZih0aGlzLnNoaXBzTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuVmFsaWRSYW5kb21Db3JkcyhsZW5ndGg6IG51bWJlciwgb3JpZW50YXRpb246IHN0cmluZykge1xuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3JhbmRvbScpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gdGhpcy4jZ2VuZXJhdGVSYW5kb21PcmllbnRhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIGhvcml6b250YWxDb3JkcztcbiAgICAgICAgfVxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgbGV0IHZlcnRpY2FsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbFZlcnRpY2FsQ29yZHMobGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbENvcmRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2dlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKSB7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbjogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvcmllbnRhdGlvbiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJ1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgZ2VuZXJhdGVDb3Jkc0Zyb21TdGFydGluZ1Bvc2l0aW9uKHN0YXJ0OiBudW1iZXIsIG9yaWVudGF0aW9uOiBzdHJpbmcsIHNoaXA6IFNoaXBJbnRlcmZhY2UpOiBudW1iZXJbXSB7XG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICdYJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3Jkcy5wdXNoKHN0YXJ0ICsgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29yZHNcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29yZHMucHVzaChzdGFydCArIChpICogMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3Jkc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2dlbmVyYXRlTGVnYWxIb3Jpem9udGFsQ29yZHMobGVuZ3RoOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNvcmRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBsZXQgcmFuZG9tVmVydGljYWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSAqIDEwOyBcbiAgICAgICAgbGV0IHJhbmRvbUhvcml6b250YWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgaWYocmFuZG9tSG9yaXpvbnRhbCArIGxlbmd0aCA+IDkpIHtcbiAgICAgICAgICAgIHJhbmRvbUhvcml6b250YWwgPSByYW5kb21Ib3Jpem9udGFsIC0gbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCByYW5kb21GaW5hbDogbnVtYmVyID0gcmFuZG9tVmVydGljYWwgKyByYW5kb21Ib3Jpem9udGFsO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvcmRzLnB1c2gocmFuZG9tRmluYWwgKyBpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29yZHNcbiAgICB9XG5cbiAgICAjZ2VuZXJhdGVMZWdhbFZlcnRpY2FsQ29yZHMobGVuZ3RoOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGNvcmRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBsZXQgcmFuZG9tVmVydGljYWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgIGxldCByYW5kb21Ib3Jpem9udGFsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGlmKHJhbmRvbVZlcnRpY2FsICsgbGVuZ3RoID4gOSkge1xuICAgICAgICAgICAgcmFuZG9tVmVydGljYWwgPSByYW5kb21WZXJ0aWNhbCAtIGxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByYW5kb21WZXJ0aWNhbCA9IHJhbmRvbVZlcnRpY2FsICogMTA7XG4gICAgICAgIGxldCByYW5kb21GaW5hbDogbnVtYmVyID0gcmFuZG9tVmVydGljYWwgKyByYW5kb21Ib3Jpem9udGFsO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvcmRzLnB1c2gocmFuZG9tRmluYWwpO1xuICAgICAgICAgICAgcmFuZG9tRmluYWwgPSByYW5kb21GaW5hbCArIDEwOyAvLyBhZGRzIHRvIHRvIHRoZSBudW1iZXIgdG8gc2ltdWxhdGUgbW92aW5nIGRvd24gYSByb3cgaW4gdGhlIGdyaWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29yZHNcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBSYW5kb21seShzaGlwOiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcCh0aGlzLnJldHVyblZhbGlkUmFuZG9tQ29yZHMoc2hpcC5sZW5ndGgsICdyYW5kb20nKSwgc2hpcCk7XG4gICAgICAgICAgICBpZih0aGlzLnNoaXBzTGVmdCA+IDUpIHsgLy8gc3RvcHMgb3ZlcnBsYWNpbmcgb2Ygc2hpcHMgb24gYm9hcmRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNoaXBzTGVmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSA1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwUmFuZG9tbHkoc2hpcClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlQWxsU2hpcHNSYW5kb21seSgpIHtcbiAgICAgICAgbGV0IGk6IGtleW9mIHR5cGVvZiB0aGlzLnNoaXBzO1xuICAgICAgICBmb3IoaSBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHRoaXMuc2hpcHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=