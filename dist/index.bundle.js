/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nbody {\r\n    display: flex;\r\n    font-family: 'Open Sans', sans-serif;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n.header{\r\n    display: flex;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    justify-content:center;\r\n}\r\n.header h1{\r\n    padding-bottom: 10px;\r\n    border-bottom: 5px solid slategray;\r\n}\r\n\r\n.grid-and-buttons-wrapper {\r\n    margin: 30px;\r\n    border: 4px solid steelblue;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.grid-and-buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    padding: 50px;\r\n}\r\n\r\n\r\n.ship-menu-buttons {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 50px;\r\n}\r\n.ship-menu-buttons button {\r\n    font-size: 40px;\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    border: 1px solid rgb(41, 41, 41);\r\n    background-color: rgb(41, 41, 41);\r\n    border-radius: 7px;\r\n    color: white;\r\n    padding: 10px;\r\n}\r\n\r\n.ship-menu-buttons button:hover {\r\n    color: black;\r\n    background-color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.ship-menu-buttons button:active {\r\n    background-color: lightgray;\r\n}\r\n\r\n.start {\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n\r\n.start div {\r\n    border: 1px solid black;\r\n}\r\n\r\n.game-box {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.game-box h1 {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.grids-and-text {\r\n    display: flex;\r\n}\r\n\r\n.gameplay-grid {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 50px;\r\n    align-items: center;\r\n}\r\n\r\n.gameplay-grid h2 {\r\n    padding-top: 20px;\r\n}\r\n\r\n#playerGrid {\r\n    border: 1px solid black;\r\n}\r\n\r\n#computerGrid {\r\n    border: 1px solid black;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n    grid-template:repeat(10, 1fr) / repeat(10, 1fr);\r\n}\r\n\r\n.ship {\r\n    background-color: skyblue;\r\n}\r\n\r\n.hit {\r\n    background-color: tomato !important;\r\n}\r\n\r\n.miss {\r\n    background-color: lightgreen !important;\r\n}\r\n\r\n.hover {\r\n    background-color: lightgray;\r\n}\r\n\r\n\r\n.ship-hover {\r\n    background-color: lightgreen;\r\n}\r\n\r\n\r\n.disabled:hover {\r\n    cursor: not-allowed;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n\r\n.modal-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 30%;\r\n    margin: 15% auto;\r\n    background-color: white;\r\n}\r\n.modal-content p{\r\n    margin-top: 30px;\r\n    font-size: 35px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n#reset {\r\n    font-size: 24px;\r\n    padding: 20px;\r\n    margin-bottom: 20px;\r\n    border: 2px solid rgb(41, 41, 41);\r\n    background-color: rgb(41, 41, 41);\r\n    color: white;\r\n    border-radius: 7px;\r\n}\r\n\r\n#reset:hover {\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n.content-wrapper{\r\n    display: flex;\r\n\r\n}\r\n\r\n.flex-wrapper{\r\n    display: flex;\r\n    flex: 1 0 auto;\r\n    justify-content: center;\r\n}\r\n.footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    background-color: steelblue;\r\n    color: white;\r\n}\r\n@keyframes bounce{\r\n    from {transform: translateY(0px)}\r\n    to {transform: translateY(-5px)}\r\n}\r\n\r\n.footer i{\r\n    padding-left: 5px;\r\n    text-decoration: none;\r\n    color: lightskyblue;\r\n    font-size: 26px;\r\n}\r\n.footer i:hover {\r\n    font-size: 26px;\r\n    animation: bounce .3s infinite alternate;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .start {\r\n        height: 230px;\r\n        width: 230px;\r\n    }\r\n    .ship-menu-buttons button {\r\n        font-size: 20px;\r\n    }\r\n    .grid-and-buttons {\r\n        padding: 0px;\r\n    }\r\n    .grid-and-buttons-wrapper {\r\n        border: none;\r\n    }\r\n    #lastAttack {\r\n        font-size: 22px;\r\n    }\r\n    .gameplay-grid {\r\n\r\n    }\r\n    .grids-and-text {\r\n        flex-direction: column;\r\n    }\r\n    .grids-and-text h2 {\r\n        font-size: 16px;\r\n    }\r\n    .gameplay-grid {\r\n        padding: 30px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,aAAa;IACb,eAAe;IACf,sBAAsB;AAC1B;AACA;IACI,oBAAoB;IACpB,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,iCAAiC;IACjC,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,+CAA+C;AACnD;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,4BAA4B;AAChC;;;AAGA;IACI,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,iCAAiC;AACrC;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,6BAA6B;IAC7B,UAAU;IACV,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,iCAAiC;IACjC,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,2BAA2B;IAC3B,YAAY;AAChB;AACA;IACI,MAAM,0BAA0B;IAChC,IAAI,2BAA2B;AACnC;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,eAAe;IACf,wCAAwC;AAC5C;;AAEA;IACI;QACI,aAAa;QACb,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;;IAEA;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,eAAe;IACnB;IACA;QACI,aAAa;IACjB;AACJ","sourcesContent":["@import url(https://fonts.googleapis.com/css?family=Open+Sans);\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nbody {\r\n    display: flex;\r\n    font-family: 'Open Sans', sans-serif;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n}\r\n.header{\r\n    display: flex;\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    justify-content:center;\r\n}\r\n.header h1{\r\n    padding-bottom: 10px;\r\n    border-bottom: 5px solid slategray;\r\n}\r\n\r\n.grid-and-buttons-wrapper {\r\n    margin: 30px;\r\n    border: 4px solid steelblue;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.grid-and-buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    padding: 50px;\r\n}\r\n\r\n\r\n.ship-menu-buttons {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 50px;\r\n}\r\n.ship-menu-buttons button {\r\n    font-size: 40px;\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    border: 1px solid rgb(41, 41, 41);\r\n    background-color: rgb(41, 41, 41);\r\n    border-radius: 7px;\r\n    color: white;\r\n    padding: 10px;\r\n}\r\n\r\n.ship-menu-buttons button:hover {\r\n    color: black;\r\n    background-color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.ship-menu-buttons button:active {\r\n    background-color: lightgray;\r\n}\r\n\r\n.start {\r\n    width: 500px;\r\n    height: 500px;\r\n}\r\n\r\n.start div {\r\n    border: 1px solid black;\r\n}\r\n\r\n.game-box {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.game-box h1 {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.grids-and-text {\r\n    display: flex;\r\n}\r\n\r\n.gameplay-grid {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 50px;\r\n    align-items: center;\r\n}\r\n\r\n.gameplay-grid h2 {\r\n    padding-top: 20px;\r\n}\r\n\r\n#playerGrid {\r\n    border: 1px solid black;\r\n}\r\n\r\n#computerGrid {\r\n    border: 1px solid black;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n    grid-template:repeat(10, 1fr) / repeat(10, 1fr);\r\n}\r\n\r\n.ship {\r\n    background-color: skyblue;\r\n}\r\n\r\n.hit {\r\n    background-color: tomato !important;\r\n}\r\n\r\n.miss {\r\n    background-color: lightgreen !important;\r\n}\r\n\r\n.hover {\r\n    background-color: lightgray;\r\n}\r\n\r\n\r\n.ship-hover {\r\n    background-color: lightgreen;\r\n}\r\n\r\n\r\n.disabled:hover {\r\n    cursor: not-allowed;\r\n}\r\n\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n\r\n.modal-content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    box-shadow: 4px 4px 8px black;\r\n    width: 30%;\r\n    margin: 15% auto;\r\n    background-color: white;\r\n}\r\n.modal-content p{\r\n    margin-top: 30px;\r\n    font-size: 35px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n#reset {\r\n    font-size: 24px;\r\n    padding: 20px;\r\n    margin-bottom: 20px;\r\n    border: 2px solid rgb(41, 41, 41);\r\n    background-color: rgb(41, 41, 41);\r\n    color: white;\r\n    border-radius: 7px;\r\n}\r\n\r\n#reset:hover {\r\n    background-color: white;\r\n    color: black;\r\n}\r\n\r\n.content-wrapper{\r\n    display: flex;\r\n\r\n}\r\n\r\n.flex-wrapper{\r\n    display: flex;\r\n    flex: 1 0 auto;\r\n    justify-content: center;\r\n}\r\n.footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px;\r\n    background-color: steelblue;\r\n    color: white;\r\n}\r\n@keyframes bounce{\r\n    from {transform: translateY(0px)}\r\n    to {transform: translateY(-5px)}\r\n}\r\n\r\n.footer i{\r\n    padding-left: 5px;\r\n    text-decoration: none;\r\n    color: lightskyblue;\r\n    font-size: 26px;\r\n}\r\n.footer i:hover {\r\n    font-size: 26px;\r\n    animation: bounce .3s infinite alternate;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .start {\r\n        height: 230px;\r\n        width: 230px;\r\n    }\r\n    .ship-menu-buttons button {\r\n        font-size: 20px;\r\n    }\r\n    .grid-and-buttons {\r\n        padding: 0px;\r\n    }\r\n    .grid-and-buttons-wrapper {\r\n        border: none;\r\n    }\r\n    #lastAttack {\r\n        font-size: 22px;\r\n    }\r\n    .gameplay-grid {\r\n\r\n    }\r\n    .grids-and-text {\r\n        flex-direction: column;\r\n    }\r\n    .grids-and-text h2 {\r\n        font-size: 16px;\r\n    }\r\n    .gameplay-grid {\r\n        padding: 30px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


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
    gridSpace.addEventListener('mouseout', () => {
        clearHoverStyles('start');
    });
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
function clearHoverStyles(gridID) {
    let grid = document.getElementById(gridID).children;
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
    <h1 id="lastAttack">This shows status of your last attack!</h1>
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
    playerShipsRemaining.innerText = `Player ships remaining: ${_game__WEBPACK_IMPORTED_MODULE_0__.Human.board.shipsLeft}`;
    computerShipsRemaining.innerText = `Computer ships remaining: ${_game__WEBPACK_IMPORTED_MODULE_0__.Computer.board.shipsLeft}`;
}
function makePlayerGameBoard() {
    makeGrid(playerBoardEvents, 'playerGrid');
    renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board, 'playerGrid');
}
function playerBoardEvents() {
    // make an on hover affect for somthing maybe?
}
function makeComputerGameBoard() {
    _game__WEBPACK_IMPORTED_MODULE_0__.Computer.cpuPlaceShips();
    makeGrid(computerBoardEvents, 'computerGrid');
    renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Computer.board, 'computerGrid');
}
function computerBoardEvents(computerGrid) {
    computerGrid.addEventListener('mouseover', () => {
        computerGrid.classList.add('hover');
    });
    computerGrid.addEventListener('mouseout', () => {
        computerGrid.classList.remove('hover');
    });
    computerGrid.addEventListener('click', () => {
        computerBoardAttacks(computerGrid.id);
        renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Human.board, 'playerGrid');
        renderGameBoard(_game__WEBPACK_IMPORTED_MODULE_0__.Computer.board, 'computerGrid');
        updateRemainingShipsDisplay();
    });
}
function computerBoardAttacks(computerGridID) {
    let attackResult = (0,_game__WEBPACK_IMPORTED_MODULE_0__.attack)(parseInt(computerGridID));
    updateLastAttack(attackResult);
    endGameDOM();
    if ((0,_game__WEBPACK_IMPORTED_MODULE_0__.returnWhoseTurn)() === 2 && (0,_game__WEBPACK_IMPORTED_MODULE_0__.endGame)() === false) {
        (0,_game__WEBPACK_IMPORTED_MODULE_0__.attack)(0);
        endGameDOM();
    }
}
function updateLastAttack(result) {
    let lastAttack = document.getElementById('lastAttack');
    if (result === 'miss' || result === 'hit') {
        lastAttack.innerText = `Your last attack was a ${result}`;
    }
    else {
        lastAttack.innerText = `the ${_game__WEBPACK_IMPORTED_MODULE_0__.Computer.player.name}'s ${result}`;
    }
}
function endGameDOM() {
    if ((0,_game__WEBPACK_IMPORTED_MODULE_0__.endGame)() !== false) {
        let modal = document.getElementById('modalID');
        modal.style.display = 'block';
        let winner = document.getElementById('winner');
        winner.innerText = `${(0,_game__WEBPACK_IMPORTED_MODULE_0__.endGame)()} Wins!`;
        let reset = document.getElementById('reset');
        reset.addEventListener('click', () => {
            (0,_game__WEBPACK_IMPORTED_MODULE_0__.resetGame)();
            initStart();
            modal.style.display = 'none';
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlciBoMXtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBzbGF0ZWdyYXk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWFuZC1idXR0b25zLXdyYXBwZXIge1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHN0ZWVsYmx1ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5ncmlkLWFuZC1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaGlwLW1lbnUtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG59XFxyXFxuLnNoaXAtbWVudS1idXR0b25zIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQxLCA0MSwgNDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1tZW51LWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1tZW51LWJ1dHRvbnMgYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0IHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQgZGl2IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWJveCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5nYW1lLWJveCBoMSB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZHMtYW5kLXRleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZXBsYXktZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lcGxheS1ncmlkIGgyIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXJHcmlkIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNjb21wdXRlckdyaWQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOnJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaGlwLWhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbC1jb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGJsYWNrO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm1vZGFsLWNvbnRlbnQgcHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2V0IHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDEsIDQxLCA0MSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcblxcclxcbiNyZXNldDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5mbGV4LXdyYXBwZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYm91bmNle1xcclxcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KX1cXHJcXG4gICAgdG8ge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KX1cXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBpe1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxufVxcclxcbi5mb290ZXIgaTpob3ZlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuc3RhcnQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2hpcC1tZW51LWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZ3JpZC1hbmQtYnV0dG9ucyB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdyaWQtYW5kLWJ1dHRvbnMtd3JhcHBlciB7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgI2xhc3RBdHRhY2sge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYW1lcGxheS1ncmlkIHtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAuZ3JpZHMtYW5kLXRleHQge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAuZ3JpZHMtYW5kLXRleHQgaDIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYW1lcGxheS1ncmlkIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLDRCQUE0QjtBQUNoQzs7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxNQUFNLDBCQUEwQjtJQUNoQyxJQUFJLDJCQUEyQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O0lBRUE7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1xcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkZXIgaDF7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgc2xhdGVncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1hbmQtYnV0dG9ucy13cmFwcGVyIHtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBzdGVlbGJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZ3JpZC1hbmQtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2hpcC1tZW51LWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxufVxcclxcbi5zaGlwLW1lbnUtYnV0dG9ucyBidXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig0MSwgNDEsIDQxKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0MSwgNDEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbWVudS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbWVudS1idXR0b25zIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydCB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0IGRpdiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1ib3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZ2FtZS1ib3ggaDEge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRzLWFuZC10ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVwbGF5LWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZXBsYXktZ3JpZCBoMiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyR3JpZCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcHV0ZXJHcmlkIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTpyZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0byAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2hpcC1ob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5tb2RhbC1jb250ZW50IHB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNyZXNldCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQxLCA0MSwgNDEpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC13cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZmxleC13cmFwcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxIDAgYXV0bztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGJvdW5jZXtcXHJcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCl9XFxyXFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCl9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgaXtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbn1cXHJcXG4uZm9vdGVyIGk6aG92ZXIge1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIGFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLnN0YXJ0IHtcXHJcXG4gICAgICAgIGhlaWdodDogMjMwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMjMwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNoaXAtbWVudS1idXR0b25zIGJ1dHRvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdyaWQtYW5kLWJ1dHRvbnMge1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5ncmlkLWFuZC1idXR0b25zLXdyYXBwZXIge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICNsYXN0QXR0YWNrIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FtZXBsYXktZ3JpZCB7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLmdyaWRzLWFuZC10ZXh0IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmdyaWRzLWFuZC10ZXh0IGgyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FtZXBsYXktZ3JpZCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJzXCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBzXCI7XHJcblxyXG5sZXQgd2hpY2hUdXJuOiBudW1iZXIgPSAxOyAvLyBzZXRzIHRoZSBzdGFydGluZyB0dXJuIGFzIHAxIFxyXG5cclxubGV0IENvbXB1dGVyOiB7Ym9hcmQ6IEdhbWVib2FyZCwgcGxheWVyOiBQbGF5ZXIsIGNwdVBsYWNlU2hpcHM6IEZ1bmN0aW9uLCBjcHVBdHRhY2s6IEZ1bmN0aW9ufSA9IHtcclxuICAgIGJvYXJkOiAgbmV3IEdhbWVib2FyZCxcclxuICAgIHBsYXllcjogIG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiKSxcclxuICAgIGNwdVBsYWNlU2hpcHM6ICgpID0+IHtcclxuICAgICAgICBDb21wdXRlci5ib2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTsgLy8gcnVuIHRoaXMgd2hlbiBwbGF5ZXIgYm9hcmQgaXMgc2V0dXBcclxuICAgIH0sXHJcbiAgICBjcHVBdHRhY2s6ICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBDb21wdXRlci5wbGF5ZXIucmFuZG9tQXR0YWNrKEh1bWFuLmJvYXJkKTtcclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIENvbXB1dGVyLmNwdUF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBIdW1hbjoge2JvYXJkOiBHYW1lYm9hcmQsIHBsYXllcjogUGxheWVyLCBwbGFjZVNoaXA6IEZ1bmN0aW9uLCBodW1hbkF0dGFjazogRnVuY3Rpb24sIGNoYW5nZVBsYXllck5hbWU6IEZ1bmN0aW9ufSA9IHtcclxuICAgIGJvYXJkOiBuZXcgR2FtZWJvYXJkLFxyXG4gICAgcGxheWVyOiBuZXcgUGxheWVyKFwiUGxheWVyXCIpLCAgIFxyXG4gICAgcGxhY2VTaGlwKGNvcmRzOiBudW1iZXJbXSkgey8vIHRoZXNlIGFyZSBnb3QgZnJvbSBldmVudCBsaXN0ZW5lciwgcHV0IHRoaXMgb24gZXZlbnQgbGlzdGVuZXIgcHJvYmFibHlcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGxldCBzaGlwTnVtYmVyOiBudW1iZXIgPSBIdW1hbi5ib2FyZC5zaGlwc0xlZnQ7XHJcbiAgICAgICAgICAgIGxldCBzaGlwID0gSHVtYW4uYm9hcmQuc2hpcHNbc2hpcE51bWJlcl07XHJcbiAgICAgICAgICAgIEh1bWFuLmJvYXJkLnBsYWNlU2hpcChjb3Jkcywgc2hpcCk7XHJcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHVtYW5BdHRhY2sobG9jYXRpb246IG51bWJlcik6c3RyaW5nIHsgLy8gc2V0IGEgdmFyaWFibGUgdG8gdGhpcyBhbmQgdGhlbiBhc3NpZ24gdGhhdCB0byB0aGUgZG9tIHNvIGl0IGNhbiByZXBvcnQgdGhhdCBhdHRhY2tcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0OiBzdHJpbmcgPSBIdW1hbi5wbGF5ZXIuYXR0YWNrT3Bwb25lbnQobG9jYXRpb24sIENvbXB1dGVyLmJvYXJkKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlUGxheWVyTmFtZShuYW1lOiBzdHJpbmcpIHsgLy8gYXBwZW5kIHRoaXMgdG8gYSBuYW1lIHRleHQgYm94IG9uIHRoZSBkb21cclxuICAgICAgICBpZihuYW1lID09PSBcIkNvbXB1dGVyXCIgfHwgbmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnSW52YWxpZCBOYW1lJylcclxuICAgICAgICB9XHJcbiAgICAgICAgSHVtYW4ucGxheWVyLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1BsYXllckJvYXJkc1NldHVwKCk6IGJvb2xlYW4geyAvLyBhZnRlciBwbGF5ZXIgcGxhY2VzIHNoaXAgY2hlY2sgd2l0aCB0aGlzIGFuZCB3aGVuIGl0cyB0cnVlIGFwcGVuZCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIG9wcG9uZW50cyBib2FyZD9cclxuICAgIGlmKEh1bWFuLmJvYXJkLnNoaXBzTGVmdCA9PT0gNSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gZW5kR2FtZSgpOiBzdHJpbmcgfCBib29sZWFuIHsgLy8gY2hlY2sgdGhpcyBhZnRlciBldmVyeSBhdHRhY2sgaW4gZG9tIGlmIHJldHVybnMgbm90IGZhbHNlIHBvcCBhIG1vZGFsIHVwIHdpdGggd2lubmVyXHJcbiAgICBpZihIdW1hbi5ib2FyZC5jaGVja0ZvcldpbigpID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIENvbXB1dGVyLnBsYXllci5uYW1lXHJcbiAgICB9XHJcbiAgICBpZihDb21wdXRlci5ib2FyZC5jaGVja0ZvcldpbigpID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIEh1bWFuLnBsYXllci5uYW1lXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNrKGxvY2F0aW9uOiBudW1iZXIpIHsgLy8gdXNlIGlmIHN0YXRtZW50LCBpZiByZXR1cm5XaG9zZXR1cm4oKSBpcyAyIHRoZW4gcnVuIGF0dGFjayBhZ2FpbiB0byBkbyBjcHUgYXR0YWNrXHJcbiAgICBpZihyZXR1cm5XaG9zZVR1cm4oKSA9PT0gMSkge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGF0dGFja1Jlc3VsdDogc3RyaW5nID0gSHVtYW4uaHVtYW5BdHRhY2sobG9jYXRpb24pO1xyXG4gICAgICAgICAgICB3aGljaFR1cm4rK1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYocmV0dXJuV2hvc2VUdXJuKCkgPT09IDIpIHtcclxuICAgICAgICBDb21wdXRlci5jcHVBdHRhY2soKTtcclxuICAgICAgICB3aGljaFR1cm4tLVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5XaG9zZVR1cm4oKTogbnVtYmVyIHtcclxuICAgIGlmKHdoaWNoVHVybiA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiAxXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHdoaWNoVHVybiA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiAyXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcclxuICAgIHdoaWNoVHVybiA9IDE7XHJcblxyXG4gICAgSHVtYW4uYm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xyXG4gICAgSHVtYW4ucGxheWVyID0gbmV3IFBsYXllcihcIlBsYXllclwiKTtcclxuXHJcbiAgICBDb21wdXRlci5ib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XHJcbiAgICBDb21wdXRlci5wbGF5ZXIgPSBuZXcgUGxheWVyKFwiQ29tcHV0ZXJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCB7Q29tcHV0ZXIsIEh1bWFuLCBlbmRHYW1lLCBhdHRhY2ssIHJldHVybldob3NlVHVybiwgaXNQbGF5ZXJCb2FyZHNTZXR1cCwgcmVzZXRHYW1lfVxyXG5cclxuXHJcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBzXCI7XHJcbmludGVyZmFjZSBTaGlwSW50ZXJmYWNlIHtcclxuICAgIGxlbmd0aDogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgaXNTdW5rKCk6IGJvb2xlYW4sXHJcbn1cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGJvYXJkOiBhbnkgLy8gaW5kZXggc2lnbml0dXJlIHN0dWZmIGltIG5vdCBzdXJlIGhvdyB0byB0eXBlIGl0IGJ1dCBpdCBoYXMgc29tZXRoaW5nIHRvIGRvIHdpdGggdGhlIG9iamVjdHMgaW5zaWRlIG9mIGl0IDooXHJcbiAgICBzaGlwczogU2hpcEludGVyZmFjZVtdXHJcbiAgICBzaGlwc0xlZnQ6IG51bWJlclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLiNtYWtlQm9hcmQoKTtcclxuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy4jbWFrZVNoaXBzKCk7XHJcbiAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSAwIC8vIFxyXG5cclxuICAgIH1cclxuICAgICNtYWtlQm9hcmQoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBib2FyZDogc3RyaW5nW10gPSBbXVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBib2FyZC5wdXNoKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJvYXJkXHJcbiAgICB9XHJcbiAgICAjbWFrZVNoaXBzKCk6U2hpcEludGVyZmFjZVtdIHtcclxuICAgICAgICBsZXQgc2hpcHM6IFNoaXBJbnRlcmZhY2VbXSA9IFtdXHJcblxyXG4gICAgICAgIGxldCBDYXJyaWVyID0gbmV3IFNoaXAoNSwgJ0NhcnJpZXInKTtcclxuICAgICAgICBzaGlwcy5wdXNoKENhcnJpZXIpO1xyXG4gICAgICAgIGxldCBCYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcclxuICAgICAgICBzaGlwcy5wdXNoKEJhdHRsZXNoaXApO1xyXG4gICAgICAgIGxldCBEZXN0cm95ZXIgPSBuZXcgU2hpcCgzLCAnRGVzdHJveWVyJyk7XHJcbiAgICAgICAgc2hpcHMucHVzaChEZXN0cm95ZXIpO1xyXG4gICAgICAgIGxldCBTdWJtYXJpbmUgPSBuZXcgU2hpcCgzLCAnU3VibWFyaW5lJyk7XHJcbiAgICAgICAgc2hpcHMucHVzaChTdWJtYXJpbmUpXHJcbiAgICAgICAgbGV0IFBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyLCAnUGF0cm9sIEJvYXQnKTtcclxuICAgICAgICBzaGlwcy5wdXNoKFBhdHJvbEJvYXQpO1xyXG4gICAgICAgIHJldHVybiBzaGlwc1xyXG4gICAgfVxyXG4gICAgcGxhY2VTaGlwKGxvY2F0aW9uOiBudW1iZXJbXSwgc2hpcDogU2hpcEludGVyZmFjZSkge1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tWYWxpZFBMYWNlbWVudChsb2NhdGlvbiwgc2hpcCkgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYWNlbWVudCEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gPSB7U2hpcDogc2hpcCwgcG9zaXRpb246IGkrMSwgaXNTcG90SGl0OiBmYWxzZSx9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IHRoaXMuc2hpcHNMZWZ0ICsgMTtcclxuICAgIH1cclxuXHJcbiAgICB1bmRvTGFzdFNoaXBQbGFjZSgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogYW55LCBib2FyZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LlNoaXAubmFtZSA9PT0gdGhpcy5zaGlwc1t0aGlzLnNoaXBzTGVmdCAtIDFdLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID4gMCApIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tWYWxpZFBMYWNlbWVudChsb2NhdGlvbjogbnVtYmVyW10sIHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcclxuICAgICAgICBpZihzaGlwLmxlbmd0aCAhPT0gbG9jYXRpb24ubGVuZ3RoICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2F0aW9uLmxlbmd0aDsgaSsrKSB7IC8vIGNoZWNrcyBpZiBhbm90aGVyIHNoaXAgaXMgaW4gdGhlIHNwb3RcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobG9jYXRpb25bMF0gJSAxMCA9PT0gbG9jYXRpb25bMV0gJSAxMCApIHsgLy8gdGhpcyBpcyBhIGhhcmQgY2hlY2sgdG8gdGVzdCBpZiBwbGF5ZXIgY29yZHMgZm9yIHZlcnQgYmVmb3JlIGNoZWNraW5nIGlmIGhvcml6b250YWwgaXMgYmFkXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLiNjaGVja0hvcml6b250YWxDb3Jkcyhsb2NhdGlvbikubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjY2hlY2tIb3Jpem9udGFsQ29yZHMoYXJyYXk6IG51bWJlcltdKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0TnVtYmVyQXJyYXk6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFycmF5WzBdIDwgMTAgJiYgYXJyYXlbaV0gPiA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaCgwLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCAmJiBhcnJheVsxXSA8IDEwKSB7XHJcbiAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaCgwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyQXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc3RyaW5naWZpZWROdW06IHN0cmluZyA9IGFycmF5W2ldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdE51bSA9IHBhcnNlSW50KHN0cmluZ2lmaWVkTnVtLmNoYXJBdCgwKSk7XHJcbiAgICAgICAgICAgIGlmKGZpcnN0TnVtICE9PSBmaXJzdE51bWJlckFycmF5WzBdKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE51bWJlckFycmF5LnB1c2goZmlyc3ROdW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaXJzdE51bWJlckFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgdGFrZUF0dGFjayhsb2NhdGlvbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLmJvYXJkW2xvY2F0aW9uXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0gPSAnbWlzcyc7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2xvY2F0aW9uXVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy4jY2hlY2tWYWxpZEhpdChsb2NhdGlvbikgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbbG9jYXRpb25dLmlzU3BvdEhpdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwLmhpdFNoaXAodGhpcy5ib2FyZFtsb2NhdGlvbl0ucG9zaXRpb24pOyAgIFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy4jY2hlY2tJZkJvYXRTdW5rKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlQm9hdENvdW50ZXJXaGVuU3Vuayh0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVwb3J0U3Vua1NoaXAodGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdpbnZhbGlkIGF0dGFjaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNjaGVja1ZhbGlkSGl0KGxvY2F0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZih0eXBlb2YgdGhpcy5ib2FyZFtsb2NhdGlvbl0gIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbl0uaXNTcG90SGl0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgICNjaGVja0lmQm9hdFN1bmsoYm9hdDpTaGlwSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgaWYoYm9hdC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgICNyZXBvcnRTdW5rU2hpcChib2F0OlNoaXBJbnRlcmZhY2UpIDogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke2JvYXQubmFtZX0gaGFzIFN1bmshYFxyXG4gICAgfVxyXG5cclxuICAgICN1cGRhdGVCb2F0Q291bnRlcldoZW5TdW5rKGJvYXQ6IFNoaXBJbnRlcmZhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSB0aGlzLnNoaXBzTGVmdCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGb3JXaW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm5WYWxpZFJhbmRvbUNvcmRzKGxlbmd0aDogbnVtYmVyLCBvcmllbnRhdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICdyYW5kb20nKSB7XHJcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gdGhpcy4jZ2VuZXJhdGVSYW5kb21PcmllbnRhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGxldCBob3Jpem9udGFsQ29yZHM6IG51bWJlcltdID0gdGhpcy4jZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbENvcmRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICBsZXQgdmVydGljYWxDb3JkczogbnVtYmVyW10gPSB0aGlzLiNnZW5lcmF0ZUxlZ2FsVmVydGljYWxDb3JkcyhsZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxDb3JkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2dlbmVyYXRlUmFuZG9tT3JpZW50YXRpb24oKSB7XHJcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuXHJcbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihvcmllbnRhdGlvbiA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgZ2VuZXJhdGVDb3Jkc0Zyb21TdGFydGluZ1Bvc2l0aW9uKHN0YXJ0OiBudW1iZXIsIG9yaWVudGF0aW9uOiBzdHJpbmcsIHNoaXA6IFNoaXBJbnRlcmZhY2UpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IGNvcmRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAnWCcpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvcmRzLnB1c2goc3RhcnQgKyBpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29yZHNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb3Jkcy5wdXNoKHN0YXJ0ICsgKGkgKiAxMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb3Jkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjb3JkczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgcmFuZG9tVmVydGljYWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSAqIDEwOyBcclxuICAgICAgICBsZXQgcmFuZG9tSG9yaXpvbnRhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGlmKHJhbmRvbUhvcml6b250YWwgKyBsZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgIHJhbmRvbUhvcml6b250YWwgPSByYW5kb21Ib3Jpem9udGFsIC0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29yZHMucHVzaChyYW5kb21GaW5hbCArIGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29yZHNcclxuICAgIH1cclxuXHJcbiAgICAjZ2VuZXJhdGVMZWdhbFZlcnRpY2FsQ29yZHMobGVuZ3RoOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY29yZHM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IHJhbmRvbVZlcnRpY2FsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxyXG4gICAgICAgIGxldCByYW5kb21Ib3Jpem9udGFsOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgaWYocmFuZG9tVmVydGljYWwgKyBsZW5ndGggPiA5KSB7XHJcbiAgICAgICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgLSBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgKiAxMDtcclxuICAgICAgICBsZXQgcmFuZG9tRmluYWw6IG51bWJlciA9IHJhbmRvbVZlcnRpY2FsICsgcmFuZG9tSG9yaXpvbnRhbDtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29yZHMucHVzaChyYW5kb21GaW5hbCk7XHJcbiAgICAgICAgICAgIHJhbmRvbUZpbmFsID0gcmFuZG9tRmluYWwgKyAxMDsgLy8gYWRkcyB0byB0byB0aGUgbnVtYmVyIHRvIHNpbXVsYXRlIG1vdmluZyBkb3duIGEgcm93IGluIHRoZSBncmlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3Jkc1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlU2hpcCh0aGlzLnJldHVyblZhbGlkUmFuZG9tQ29yZHMoc2hpcC5sZW5ndGgsICdyYW5kb20nKSwgc2hpcCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID4gNSkgeyAvLyBzdG9wcyBvdmVycGxhY2luZyBvZiBzaGlwcyBvbiBib2FyZFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGlwc0xlZnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSA1O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seShzaGlwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGFjZUFsbFNoaXBzUmFuZG9tbHkoKSB7XHJcbiAgICAgICAgbGV0IGk6IGtleW9mIHR5cGVvZiB0aGlzLnNoaXBzO1xyXG4gICAgICAgIGZvcihpIGluIHRoaXMuc2hpcHMpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seSh0aGlzLnNoaXBzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZCIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCJcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2tPcHBvbmVudChjb3JkaW5hdGVzOiBudW1iZXIsIGdhbWVib2FyZDogR2FtZWJvYXJkKTpzdHJpbmcge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBnYW1lYm9hcmQudGFrZUF0dGFjayhjb3JkaW5hdGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dGFjaztcclxuXHJcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tQXR0YWNrKGdhbWVib2FyZDogR2FtZWJvYXJkKSB7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBnYW1lYm9hcmQudGFrZUF0dGFjayhsb2NhdGlvbikgXHJcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXHJcbiIsImludGVyZmFjZSBTaGlwSW50ZXJmYWNlIHtcclxuICAgICBsZW5ndGg6IG51bWJlcixcclxuICAgICBoaXQ6IG51bWJlcltdLFxyXG4gICAgIG5hbWU/OiBzdHJpbmcgLy8gdGhhdHMgZm9yIG9wdGlvbmFsXHJcbiAgICAgaXNTdW5rKCk6IGJvb2xlYW5cclxuICAgICBoaXRTaGlwKGluZGV4OiBudW1iZXIpOiBudW1iZXJbXSBcclxuIH1cclxuXHJcbiBjbGFzcyBTaGlwIGltcGxlbWVudHMgU2hpcEludGVyZmFjZSB7XHJcbiAgICAgbGVuZ3RoOiBudW1iZXJcclxuICAgICBoaXQ6IG51bWJlcltdXHJcbiAgICAgbmFtZTogc3RyaW5nXHJcblxyXG4gICAgIGNvbnN0cnVjdG9yKGxlbmd0aDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgIHRoaXMuaGl0ID0gW107XHJcbiAgICAgICAgIHRoaXMubmFtZSA9IG5hbWUgLy8gbWF5YmUgYWRkIGEgd2F5IHRvIHRlbGwgd2hhdCBhIHNoaXAgaXMgYmFzZWQgb24gbGVuZ3RoIGFzIGEgbWV0aG9kIG1heWJlPz9cclxuICAgICB9XHJcblxyXG4gICAgIGlzU3VuaygpIHtcclxuICAgICAgICAgaWYodGhpcy5oaXQubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBoaXRTaGlwKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICAgaWYodGhpcy4jY2hlY2tGb3JWYWxpZEhpdChpbmRleCkgPT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGl0XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIHRoaXMuaGl0LnB1c2goaW5kZXgpO1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5oaXRcclxuICAgICB9XHJcbiAgICAgI2NoZWNrRm9yVmFsaWRIaXQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmhpdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gdGhpcy5oaXRbaV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgfVxyXG4gfVxyXG4gZXhwb3J0IGRlZmF1bHQgU2hpcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0NvbXB1dGVyLCBIdW1hbiwgZW5kR2FtZSwgYXR0YWNrLCByZXR1cm5XaG9zZVR1cm4sIGlzUGxheWVyQm9hcmRzU2V0dXAsIHJlc2V0R2FtZX0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmxldCBheGlzOiBzdHJpbmcgPSAnWCc7IFxyXG5cclxuaW5pdFN0YXJ0KCk7XHJcbmZ1bmN0aW9uIGluaXRTdGFydCgpIHtcclxuICAgIGluaXRTdGFydGluZ0hUTUwoKTtcclxuICAgIG1ha2VHcmlkKHN0YXJ0aW5nR3JpZEV2ZW50bGlzdG5lcnMsICdzdGFydCcpO1xyXG4gICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xyXG4gICAgaW5pdFN0YXJ0QnRucygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3RhcnRCdG5zKCkge1xyXG4gICAgbWFrZVJhbmRvbUJ0bigpO1xyXG4gICAgbWFrZVVuZG9CdG4oKTtcclxuICAgIG1ha2VSb3RhdGlvbkJ0bigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlR3JpZChldmVudExpc3RlbmVyczogRnVuY3Rpb24sIGFwcGVuZExvY2F0aW9uOiBzdHJpbmcpIHtcclxuICAgIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFwcGVuZExvY2F0aW9uKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgIGxldCBncmlkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBncmlkU3BhY2Uuc2V0QXR0cmlidXRlKCdpZCcsIGkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMoZ3JpZFNwYWNlKTtcclxuICAgICAgICBzdGFydC5hcHBlbmRDaGlsZChncmlkU3BhY2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRpbmdHcmlkRXZlbnRsaXN0bmVycyhncmlkU3BhY2U6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBncmlkU3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc2hvd1NoaXBQbGFjZW1lbnRPbkhvdmVyKGdyaWRTcGFjZS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZ3JpZFNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFySG92ZXJTdHlsZXMoJ3N0YXJ0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBncmlkU3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcGxhY2VIb3ZlcmVkU2hpcChncmlkU3BhY2UuaWQpO1xyXG4gICAgICAgIHJlbmRlckdhbWVCb2FyZChIdW1hbi5ib2FyZCwgJ3N0YXJ0Jyk7XHJcbiAgICAgICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xyXG4gICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBtYWtlUmVhZHlidG4oKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0U3RhcnRpbmdIVE1MKCkge1xyXG4gICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICAgY29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtYW5kLWJ1dHRvbnMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxoMSBpZD1cInBsYWNlU2hpcFRleHRcIj5QbGFjZSBZb3VyIFNoaXA8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWFuZC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGFydFwiIGNsYXNzPVwic3RhcnQgZ3JpZFwiPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJidG5Db250YWluZXJcIiBjbGFzcz1cInNoaXAtbWVudS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidW5kb1wiPlVuZG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyb3RhdGlvblwiPlJvdGF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmFuZG9tXCI+UmFuZG9tPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG92ZXJDb3Jkcyhob3ZlcklEOiBzdHJpbmcpIHtcclxuICAgIGxldCBjb3JkczpudW1iZXJbXSA9IEh1bWFuLmJvYXJkLmdlbmVyYXRlQ29yZHNGcm9tU3RhcnRpbmdQb3NpdGlvbihwYXJzZUludChob3ZlcklEKSwgYXhpcywgSHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XSk7XHJcbiAgICByZXR1cm4gY29yZHNcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VIb3ZlcmVkU2hpcChob3ZlcklEOiBzdHJpbmcpIHtcclxuICAgIGxldCBjb3JkczpudW1iZXJbXSA9IGdldEhvdmVyQ29yZHMoaG92ZXJJRCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIEh1bWFuLnBsYWNlU2hpcChjb3Jkcyk7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NoaXBQbGFjZW1lbnRPbkhvdmVyKGhvdmVySUQ6IHN0cmluZykge1xyXG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5jaGlsZHJlbjtcclxuICAgIGxldCBjb3JkczpudW1iZXJbXSA9IGdldEhvdmVyQ29yZHMoaG92ZXJJRCk7XHJcbiAgICBpZihIdW1hbi5ib2FyZC5jaGVja1ZhbGlkUExhY2VtZW50KGNvcmRzLCBIdW1hbi5ib2FyZC5zaGlwc1tIdW1hbi5ib2FyZC5zaGlwc0xlZnRdKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjb3Jkcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoZ3JpZFtpXS5pZCkgPT09IGNvcmRzW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFtpXS5jbGFzc0xpc3QuYWRkKCdzaGlwLWhvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBncmlkW3BhcnNlSW50KGhvdmVySUQpXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNsZWFySG92ZXJTdHlsZXMoZ3JpZElEOiBzdHJpbmcpIHtcclxuICAgIGxldCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ3JpZElEKS5jaGlsZHJlbjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoZ3JpZFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtaG92ZXInKSkge1xyXG4gICAgICAgICAgICBncmlkW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtaG92ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZ3JpZFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgZ3JpZFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VQbGFjZVNoaXBUZXh0KCkge1xyXG4gICAgbGV0IHBsYWNlU2hpcFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxhY2VTaGlwVGV4dCcpO1xyXG4gICAgaWYoaXNQbGF5ZXJCb2FyZHNTZXR1cCgpID09PSB0cnVlKSB7XHJcbiAgICAgICAgcGxhY2VTaGlwVGV4dC5pbm5lclRleHQgPSAnQ2xpY2sgUmVhZHkgVG8gQmVnaW4hJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHBsYWNlU2hpcFRleHQuaW5uZXJUZXh0ID0gYFBsYWNlIFlvdXIgJHtIdW1hbi5ib2FyZC5zaGlwc1tIdW1hbi5ib2FyZC5zaGlwc0xlZnRdLm5hbWV9IWA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWFrZVJhbmRvbUJ0bigpIHtcclxuICAgIGxldCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tJyk7XHJcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNQbGF5ZXJCb2FyZHNTZXR1cCgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBIdW1hbi5ib2FyZC5wbGFjZVNoaXBSYW5kb21seShIdW1hbi5ib2FyZC5zaGlwc1tIdW1hbi5ib2FyZC5zaGlwc0xlZnRdKTtcclxuICAgICAgICAgICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xyXG4gICAgICAgICAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdzdGFydCcpO1xyXG4gICAgICAgICAgICBpZihpc1BsYXllckJvYXJkc1NldHVwKCkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIG1ha2VSZWFkeWJ0bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VVbmRvQnRuKCkge1xyXG4gICAgbGV0IHVuZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5kbycpO1xyXG4gICAgdW5kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZihpc1BsYXllckJvYXJkc1NldHVwKCkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgbGV0IHJlYWR5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWR5Jyk7XHJcbiAgICAgICAgICAgIHJlYWR5QnRuLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBIdW1hbi5ib2FyZC51bmRvTGFzdFNoaXBQbGFjZSgpO1xyXG4gICAgICAgIGNoYW5nZVBsYWNlU2hpcFRleHQoKTtcclxuICAgICAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdzdGFydCcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VSb3RhdGlvbkJ0bigpIHtcclxuICAgIGxldCByb3RhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbicpO1xyXG4gICAgcm90YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQXhpcygpIHtcclxuICAgIGlmKGF4aXMgPT09ICdYJykge1xyXG4gICAgICAgIGF4aXMgPSAnWSc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBheGlzID0gJ1gnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlUmVhZHlidG4oKSB7XHJcbiAgICBsZXQgcmVhZHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlYWR5QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVhZHknKTtcclxuICAgIHJlYWR5QnRuLmlubmVyVGV4dCA9ICdSZWFkeSc7XHJcblxyXG4gICAgcmVhZHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJET00oKTtcclxuICAgICAgICBtYWtlR2FtZXBsYXlET00oKTtcclxuICAgICAgICBpbml0R2FtZXBsYXkoKTtcclxuICAgICAgICAvLyBwdXQgdGhlIGFib3V2ZSBmdW5jdGlvbiBpbiBhbiBpbml0IGdhbWVwbGF5IGZ1bmN0aW9uIHdyYXBwZXIgXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkNvbnRhaW5lcicpO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlYWR5QnRuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEdhbWVwbGF5KCkge1xyXG4gICAgbWFrZVBsYXllckdhbWVCb2FyZCgpO1xyXG4gICAgbWFrZUNvbXB1dGVyR2FtZUJvYXJkKCk7XHJcbiAgICB1cGRhdGVSZW1haW5pbmdTaGlwc0Rpc3BsYXkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJET00oKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlR2FtZXBsYXlET00oKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFxyXG4gICAgYDxkaXYgY2xhc3M9XCJnYW1lLWJveFwiPlxyXG4gICAgPGgxIGlkPVwibGFzdEF0dGFja1wiPlRoaXMgc2hvd3Mgc3RhdHVzIG9mIHlvdXIgbGFzdCBhdHRhY2shPC9oMT5cclxuICAgIDxkaXYgY2xhc3M9XCJncmlkcy1hbmQtdGV4dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lcGxheS1ncmlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwbGF5ZXJHcmlkXCIgY2xhc3M9XCJncmlkIHN0YXJ0XCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgyIGlkPVwicFJlbWFpbmluZ1wiPlBsYXllciBzaGlwcyByZW1haW5pbmc6IDA8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lcGxheS1ncmlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb21wdXRlckdyaWRcIiBjbGFzcz1cImdyaWQgc3RhcnRcIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDIgaWQ9XCJjUmVtYWluaW5nXCI+Q29tcHV0ZXIgc2hpcHMgcmVtYWluaW5nOiAwPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZVJlbWFpbmluZ1NoaXBzRGlzcGxheSgpIHtcclxuICAgIGxldCBwbGF5ZXJTaGlwc1JlbWFpbmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwUmVtYWluaW5nJyk7XHJcbiAgICBsZXQgY29tcHV0ZXJTaGlwc1JlbWFpbmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjUmVtYWluaW5nJyk7XHJcblxyXG4gICAgcGxheWVyU2hpcHNSZW1haW5pbmcuaW5uZXJUZXh0ID0gYFBsYXllciBzaGlwcyByZW1haW5pbmc6ICR7SHVtYW4uYm9hcmQuc2hpcHNMZWZ0fWA7XHJcbiAgICBjb21wdXRlclNoaXBzUmVtYWluaW5nLmlubmVyVGV4dCA9IGBDb21wdXRlciBzaGlwcyByZW1haW5pbmc6ICR7Q29tcHV0ZXIuYm9hcmQuc2hpcHNMZWZ0fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VQbGF5ZXJHYW1lQm9hcmQoKSB7XHJcbiAgICBtYWtlR3JpZChwbGF5ZXJCb2FyZEV2ZW50cywgJ3BsYXllckdyaWQnKTtcclxuICAgIHJlbmRlckdhbWVCb2FyZChIdW1hbi5ib2FyZCwgJ3BsYXllckdyaWQnKTtcclxufVxyXG5cclxuIGZ1bmN0aW9uIHBsYXllckJvYXJkRXZlbnRzKCkge1xyXG4gICAgLy8gbWFrZSBhbiBvbiBob3ZlciBhZmZlY3QgZm9yIHNvbXRoaW5nIG1heWJlP1xyXG4gfVxyXG5cclxuIGZ1bmN0aW9uIG1ha2VDb21wdXRlckdhbWVCb2FyZCgpIHtcclxuICAgIENvbXB1dGVyLmNwdVBsYWNlU2hpcHMoKTtcclxuICAgIG1ha2VHcmlkKGNvbXB1dGVyQm9hcmRFdmVudHMsICdjb21wdXRlckdyaWQnKTtcclxuICAgIHJlbmRlckdhbWVCb2FyZChDb21wdXRlci5ib2FyZCwgJ2NvbXB1dGVyR3JpZCcpO1xyXG4gfVxyXG5cclxuIGZ1bmN0aW9uIGNvbXB1dGVyQm9hcmRFdmVudHMoY29tcHV0ZXJHcmlkOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29tcHV0ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICBjb21wdXRlckdyaWQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuICAgIH0pO1xyXG4gICAgY29tcHV0ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbXB1dGVyR3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29tcHV0ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmRBdHRhY2tzKGNvbXB1dGVyR3JpZC5pZCk7XHJcblxyXG4gICAgICAgIHJlbmRlckdhbWVCb2FyZChIdW1hbi5ib2FyZCwgJ3BsYXllckdyaWQnKTtcclxuICAgICAgICByZW5kZXJHYW1lQm9hcmQoQ29tcHV0ZXIuYm9hcmQsICdjb21wdXRlckdyaWQnKTtcclxuICAgICAgICB1cGRhdGVSZW1haW5pbmdTaGlwc0Rpc3BsYXkoKTtcclxuICAgIH0pO1xyXG4gfVxyXG5cclxuIGZ1bmN0aW9uIGNvbXB1dGVyQm9hcmRBdHRhY2tzKGNvbXB1dGVyR3JpZElEOiBzdHJpbmcpIHtcclxuICAgIGxldCBhdHRhY2tSZXN1bHQgPSBhdHRhY2socGFyc2VJbnQoY29tcHV0ZXJHcmlkSUQpKTtcclxuICAgIHVwZGF0ZUxhc3RBdHRhY2soYXR0YWNrUmVzdWx0KTtcclxuICAgIGVuZEdhbWVET00oKTtcclxuICAgIGlmKHJldHVybldob3NlVHVybigpID09PSAyICYmIGVuZEdhbWUoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBhdHRhY2soMCk7XHJcbiAgICAgICAgZW5kR2FtZURPTSgpO1xyXG4gICAgfVxyXG4gfSBcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxhc3RBdHRhY2socmVzdWx0OiBzdHJpbmcpIHtcclxuICAgIGxldCBsYXN0QXR0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3RBdHRhY2snKTtcclxuXHJcbiAgICBpZihyZXN1bHQgPT09ICdtaXNzJyB8fCByZXN1bHQgPT09ICdoaXQnKSB7XHJcbiAgICAgICAgbGFzdEF0dGFjay5pbm5lclRleHQgPSBgWW91ciBsYXN0IGF0dGFjayB3YXMgYSAke3Jlc3VsdH1gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGFzdEF0dGFjay5pbm5lclRleHQgPSBgdGhlICR7Q29tcHV0ZXIucGxheWVyLm5hbWV9J3MgJHtyZXN1bHR9YDtcclxuICAgIH1cclxufSBcclxuXHJcbmZ1bmN0aW9uIGVuZEdhbWVET00oKSB7XHJcbiAgICBpZihlbmRHYW1lKCkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsSUQnKTtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgbGV0IHdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXInKTtcclxuICAgICAgICB3aW5uZXIuaW5uZXJUZXh0ID0gYCR7ZW5kR2FtZSgpfSBXaW5zIWA7XHJcblxyXG4gICAgICAgIGxldCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpO1xyXG4gICAgICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgICgpID0+IHtcclxuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XHJcbiAgICAgICAgICAgIGluaXRTdGFydCgpO1xyXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyR2FtZUJvYXJkKGdhbWVib2FyZDogR2FtZWJvYXJkLCBncmlkOiBzdHJpbmcpIHtcclxuICAgIGxldCBET01ib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdyaWQpO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgIGlmKGdhbWVib2FyZC5ib2FyZFtpXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgaWYoRE9NYm9hcmQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcclxuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5ib2FyZFtpXSA9PT0gJ21pc3MnKSB7XHJcbiAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IFxyXG4gICAgICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmRbaV0uaXNTcG90SGl0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoRE9NYm9hcmQuaWQgPT09ICdwbGF5ZXJHcmlkJyB8fCBET01ib2FyZC5pZCA9PT0gJ3N0YXJ0JykgeyAvLyBvbmx5IHNob3dzIHNoaXAgaWYgaXRzIG9uIGEgcGxheWVycyBncmlkIG9yIHN0YXJ0aW5nIGdyaWRcclxuICAgICAgICAgICAgICAgICAgICBET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gUFVUIEEgU1BPVCBPTiBUSEUgQk9BUkQgVEhBVCBIQVMgVEVYVCBBRlRFUiBFVkVSWSBBVFRBQ0sgVEhBVCBTSE9XUyBXSEFUIEhBUFBFTkVEIExBU1QgVFVSTiFcclxuXHJcbi8vIE9OIEhPVkVSIEFERCBBIENMQVNTIFRPIEdSSUQgVEhBVCBDT0xPUlMgSU4gVEhFIFNQQUNFUyBJRiBUSEVZIENIRUNLIE9VVCBQUk9QRVJMWSBJTiBjaGVja1ZhbGlkUGxhY2VtZW50IEFORCBSRU1PVkVTIEFMTCBPVEhFUiBJTlNUQU5DRVMgT0YgSE9WRVIgQ0xBU1MgRlJPTSBHUklEXHJcblxyXG4vLyBXSEVOIFlPVSBDTElDSyBBTkQgUExBQ0UgQSBTSElQIEpVU1QgU0VORCBUSEUgQ09SRFMgVE8gVEhFIFBMQUNFIFNISVAgRlVOQ1RJT04hIEFORCBUSEVOIFJVTiBBIFNFUEVSQVRFIEZVTlRJT04gVEhBVCBVUERBVEVTIFRIRSBET00gR1JJRCBSSUdIVCBBRlRFUiFcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==