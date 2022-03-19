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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QixXQUFXLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGtFQUFrRTtLQUNyRztJQUNELE9BQU8sS0FBSztBQUNoQixDQUFDO0FBdUJMLGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgU2hpcEludGVyZmFjZSB7XHJcbiAgICAgbGVuZ3RoOiBudW1iZXIsXHJcbiAgICAgaGl0OiBudW1iZXJbXSxcclxuICAgICBuYW1lPzogc3RyaW5nIC8vIHRoYXRzIGZvciBvcHRpb25hbFxyXG4gICAgIGlzU3VuaygpOiBib29sZWFuXHJcbiAgICAgaGl0U2hpcChpbmRleDogbnVtYmVyKTogbnVtYmVyW10gXHJcbiB9XHJcblxyXG4gY2xhc3MgU2hpcCBpbXBsZW1lbnRzIFNoaXBJbnRlcmZhY2Uge1xyXG4gICAgIGxlbmd0aDogbnVtYmVyXHJcbiAgICAgaGl0OiBudW1iZXJbXVxyXG4gICAgIG5hbWU6IHN0cmluZ1xyXG5cclxuICAgICBjb25zdHJ1Y3RvcihsZW5ndGg6IG51bWJlciwgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgICB0aGlzLmhpdCA9IFtdO1xyXG4gICAgICAgICB0aGlzLm5hbWUgPSBuYW1lIC8vIG1heWJlIGFkZCBhIHdheSB0byB0ZWxsIHdoYXQgYSBzaGlwIGlzIGJhc2VkIG9uIGxlbmd0aCBhcyBhIG1ldGhvZCBtYXliZT8/XHJcbiAgICAgfVxyXG5cclxuICAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgIGlmKHRoaXMuaGl0Lmxlbmd0aCA9PT0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgaGl0U2hpcChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgIGlmKHRoaXMuI2NoZWNrRm9yVmFsaWRIaXQoaW5kZXgpID09PSBmYWxzZSApIHtcclxuICAgICAgICAgICAgIHJldHVybiB0aGlzLmhpdFxyXG4gICAgICAgICB9IFxyXG4gICAgICAgICB0aGlzLmhpdC5wdXNoKGluZGV4KTtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuaGl0XHJcbiAgICAgfVxyXG4gICAgICNjaGVja0ZvclZhbGlkSGl0KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5oaXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYoaW5kZXggPT09IHRoaXMuaGl0W2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgIH1cclxuIH1cclxuIGV4cG9ydCBkZWZhdWx0IFNoaXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBzXCI7XHJcbmludGVyZmFjZSBTaGlwSW50ZXJmYWNlIHtcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgaXNTdW5rKCk6IGJvb2xlYW4sXHJcbn1cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGJvYXJkOiBhbnkgLy8gaW5kZXggc2lnbml0dXJlIHN0dWZmIGltIG5vdCBzdXJlIGhvdyB0byB0eXBlIGl0IGJ1dCBpdCBoYXMgc29tZXRoaW5nIHRvIGRvIHdpdGggdGhlIG9iamVjdHMgaW5zaWRlIG9mIGl0IDooXHJcbiAgICBzaGlwczogU2hpcEludGVyZmFjZVtdXHJcbiAgICBzaGlwc0xlZnQ6IG51bWJlclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLiNtYWtlQm9hcmQoKTtcclxuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy4jbWFrZVNoaXBzKCk7XHJcbiAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSAwIC8vIFxyXG5cclxuICAgIH1cclxuICAgICNtYWtlQm9hcmQoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBib2FyZDogc3RyaW5nW10gPSBbXVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJvYXJkXHJcbiAgICB9XHJcbiAgICAjbWFrZVNoaXBzKCk6U2hpcEludGVyZmFjZVtdIHtcclxuICAgICAgICBsZXQgc2hpcHM6IFNoaXBJbnRlcmZhY2VbXSA9IFtdXHJcblxyXG4gICAgICAgIGxldCBDYXJyaWVyID0gbmV3IFNoaXAoNSwgJ0NhcnJpZXInKTtcclxuICAgICAgICBzaGlwcy5wdXNoKENhcnJpZXIpO1xyXG4gICAgICAgIGxldCBCYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcclxuICAgICAgICBzaGlwcy5wdXNoKEJhdHRsZXNoaXApO1xyXG4gICAgICAgIGxldCBEZXN0cm95ZXIgPSBuZXcgU2hpcCgzLCAnRGVzdHJveWVyJyk7XHJcbiAgICAgICAgc2hpcHMucHVzaChEZXN0cm95ZXIpO1xyXG4gICAgICAgIGxldCBTdWJtYXJpbmUgPSBuZXcgU2hpcCgzLCAnU3VibWFyaW5lJyk7XHJcbiAgICAgICAgc2hpcHMucHVzaChTdWJtYXJpbmUpXHJcbiAgICAgICAgbGV0IFBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyLCAnUGF0cm9sIEJvYXQnKTtcclxuICAgICAgICBzaGlwcy5wdXNoKFBhdHJvbEJvYXQpO1xyXG4gICAgICAgIHJldHVybiBzaGlwc1xyXG4gICAgfVxyXG4gICAgcGxhY2VTaGlwKGxvY2F0aW9uOiBudW1iZXJbXSwgc2hpcDogU2hpcEludGVyZmFjZSkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tWYWxpZFBMYWNlbWVudChsb2NhdGlvbiwgc2hpcCkgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYWNlbWVudCEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gPSB7U2hpcDogc2hpcCwgcG9zaXRpb246IGkrMSwgaXNTcG90SGl0OiBmYWxzZSx9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IHRoaXMuc2hpcHNMZWZ0ICsgMTtcclxuICAgIH1cclxuXHJcbiAgICB1bmRvTGFzdFNoaXBQbGFjZSgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogYW55LCBib2FyZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LlNoaXAubmFtZSA9PT0gdGhpcy5zaGlwc1t0aGlzLnNoaXBzTGVmdCAtIDFdLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID4gMCApIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tWYWxpZFBMYWNlbWVudChsb2NhdGlvbjogbnVtYmVyW10sIHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcclxuICAgICAgICBpZihzaGlwLmxlbmd0aCAhPT0gbG9jYXRpb24ubGVuZ3RoICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2F0aW9uLmxlbmd0aDsgaSsrKSB7IC8vIGNoZWNrcyBpZiBhbm90aGVyIHNoaXAgaXMgaW4gdGhlIHNwb3RcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobG9jYXRpb25bMF0gJSAxMCA9PT0gbG9jYXRpb25bMV0gJSAxMCApIHsgLy8gdGhpcyBpcyBhIGhhcmQgY2hlY2sgdG8gdGVzdCBpZiBwbGF5ZXIgY29yZHMgZm9yIHZlcnQgYmVmb3JlIGNoZWNraW5nIGlmIGhvcml6b250YWwgaXMgYmFkXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLiNjaGVja0hvcml6b250YWxDb3Jkcyhsb2NhdGlvbikubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjY2hlY2tIb3Jpem9udGFsQ29yZHMoYXJyYXk6IG51bWJlcltdKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0TnVtYmVyQXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFycmF5WzBdIDwgMTAgJiYgYXJyYXlbaV0gPiA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaCgwLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCAmJiBhcnJheVsxXSA8IDEwKSB7XHJcbiAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaCgwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyQXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc3RyaW5naWZpZWROdW06IHN0cmluZyA9IGFycmF5W2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdE51bSA9IHBhcnNlSW50KHN0cmluZ2lmaWVkTnVtLmNoYXJBdCgwKSk7XHJcbiAgICAgICAgICAgIGlmKGZpcnN0TnVtICE9PSBmaXJzdE51bWJlckFycmF5WzBdKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE51bWJlckFycmF5LnB1c2goZmlyc3ROdW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaXJzdE51bWJlckFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgdGFrZUF0dGFjayhsb2NhdGlvbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0gPSAnbWlzcyc7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2xvY2F0aW9uXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy4jY2hlY2tWYWxpZEhpdChsb2NhdGlvbikgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dLmlzU3BvdEhpdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwLmhpdFNoaXAodGhpcy5ib2FyZFtsb2NhdGlvbl0ucG9zaXRpb24pOyAgIFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy4jY2hlY2tJZkJvYXRTdW5rKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlQm9hdENvdW50ZXJXaGVuU3Vuayh0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVwb3J0U3Vua1NoaXAodGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdpbnZhbGlkIGF0dGFjaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNjaGVja1ZhbGlkSGl0KGxvY2F0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZih0eXBlb2YgdGhpcy5ib2FyZFtsb2NhdGlvbl0gIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbl0uaXNTcG90SGl0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgICNjaGVja0lmQm9hdFN1bmsoYm9hdDpTaGlwSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgaWYoYm9hdC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgICNyZXBvcnRTdW5rU2hpcChib2F0OlNoaXBJbnRlcmZhY2UpIDogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke2JvYXQubmFtZX0gaGFzIFN1bmshYFxyXG4gICAgfVxyXG5cclxuICAgICN1cGRhdGVCb2F0Q291bnRlcldoZW5TdW5rKGJvYXQ6IFNoaXBJbnRlcmZhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSB0aGlzLnNoaXBzTGVmdCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGb3JXaW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm5WYWxpZFJhbmRvbUNvcmRzKGxlbmd0aDogbnVtYmVyLCBvcmllbnRhdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICdyYW5kb20nKSB7XHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gdGhpcy4jZ2VuZXJhdGVSYW5kb21PcmllbnRhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbENvcmRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICBsZXQgdmVydGljYWxDb3JkczogbnVtYmVyW10gPSB0aGlzLiNnZW5lcmF0ZUxlZ2FsVmVydGljYWxDb3JkcyhsZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxDb3JkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2dlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKSB7XHJcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuXHJcbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihvcmllbnRhdGlvbiA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgZ2VuZXJhdGVDb3Jkc0Zyb21TdGFydGluZ1Bvc2l0aW9uKHN0YXJ0OiBudW1iZXIsIG9yaWVudGF0aW9uOiBzdHJpbmcsIHNoaXA6IFNoaXBJbnRlcmZhY2UpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IGNvcmRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAnWCcpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvcmRzLnB1c2goc3RhcnQgKyBpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29yZHNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb3Jkcy5wdXNoKHN0YXJ0ICsgKGkgKiAxMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb3Jkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgcmFuZG9tVmVydGljYWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSAqIDEwOyBcclxuICAgICAgICBsZXQgcmFuZG9tSG9yaXpvbnRhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGlmKHJhbmRvbUhvcml6b250YWwgKyBsZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgIHJhbmRvbUhvcml6b250YWwgPSByYW5kb21Ib3Jpem9udGFsIC0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29yZHMucHVzaChyYW5kb21GaW5hbCArIGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29yZHNcclxuICAgIH1cclxuXHJcbiAgICAjZ2VuZXJhdGVMZWdhbFZlcnRpY2FsQ29yZHMobGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY29yZHM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxyXG4gICAgICAgIGxldCByYW5kb21Ib3Jpem9udGFsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgaWYocmFuZG9tVmVydGljYWwgKyBsZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgLSBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgKiAxMDtcclxuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29yZHMucHVzaChyYW5kb21GaW5hbCk7XHJcbiAgICAgICAgICAgIHJhbmRvbUZpbmFsID0gcmFuZG9tRmluYWwgKyAxMDsgLy8gYWRkcyB0byB0byB0aGUgbnVtYmVyIHRvIHNpbXVsYXRlIG1vdmluZyBkb3duIGEgcm93IGluIHRoZSBncmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3Jkc1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcCh0aGlzLnJldHVyblZhbGlkUmFuZG9tQ29yZHMoc2hpcC5sZW5ndGgsICdyYW5kb20nKSwgc2hpcCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID4gNSkgeyAvLyBzdG9wcyBvdmVycGxhY2luZyBvZiBzaGlwcyBvbiBib2FyZFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlwc0xlZnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSA1O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seShzaGlwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGFjZUFsbFNoaXBzUmFuZG9tbHkoKSB7XHJcbiAgICAgICAgbGV0IGk6IGtleW9mIHR5cGVvZiB0aGlzLnNoaXBzO1xyXG4gICAgICAgIGZvcihpIGluIHRoaXMuc2hpcHMpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seSh0aGlzLnNoaXBzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==