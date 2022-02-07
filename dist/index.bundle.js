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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\nbody {\n    display: flex;\n    font-family: 'Open Sans', sans-serif;\n    flex-direction: column;\n    min-height: 100vh;\n}\n.header{\n    display: flex;\n    padding: 10px;\n    font-size: 30px;\n    justify-content:center;\n}\n.header h1{\n    padding-bottom: 10px;\n    border-bottom: 5px solid slategray;\n}\n\n.grid-and-buttons-wrapper {\n    margin: 30px;\n    border: 4px solid steelblue;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.grid-and-buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    padding: 50px;\n}\n\n\n.ship-menu-buttons {\n    display: flex;\n    flex-direction: column;\n    padding-left: 50px;\n}\n.ship-menu-buttons button {\n    font-size: 40px;\n    margin-top: 25px;\n    margin-bottom: 25px;\n    border: 1px solid rgb(41, 41, 41);\n    background-color: rgb(41, 41, 41);\n    border-radius: 7px;\n    color: white;\n    padding: 10px;\n}\n\n.ship-menu-buttons button:hover {\n    color: black;\n    background-color: white;\n    cursor: pointer;\n}\n\n.ship-menu-buttons button:active {\n    background-color: lightgray;\n}\n\n.start {\n    width: 500px;\n    height: 500px;\n}\n\n.start div {\n    border: 1px solid black;\n}\n\n.game-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.game-box h1 {\n    padding-bottom: 20px;\n}\n\n.grids-and-text {\n    display: flex;\n}\n\n.gameplay-grid {\n    display: flex;\n    flex-direction: column;\n    padding: 50px;\n    align-items: center;\n}\n\n.gameplay-grid h2 {\n    padding-top: 20px;\n}\n\n#playerGrid {\n    border: 1px solid black;\n}\n\n#computerGrid {\n    border: 1px solid black;\n}\n\n.grid {\n    display: grid;\n    grid-template:repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.ship {\n    background-color: skyblue;\n}\n\n.hit {\n    background-color: tomato !important;\n}\n\n.miss {\n    background-color: lightgreen !important;\n}\n\n.hover {\n    background-color: lightgray;\n}\n\n\n.ship-hover {\n    background-color: lightgreen;\n}\n\n\n.disabled:hover {\n    cursor: not-allowed;\n}\n\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.4);\n}\n\n\n.modal-content{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    box-shadow: 4px 4px 8px black;\n    width: 30%;\n    margin: 15% auto;\n    background-color: white;\n}\n.modal-content p{\n    margin-top: 30px;\n    font-size: 35px;\n    padding-bottom: 30px;\n}\n\n#reset {\n    font-size: 24px;\n    padding: 20px;\n    margin-bottom: 20px;\n    border: 2px solid rgb(41, 41, 41);\n    background-color: rgb(41, 41, 41);\n    color: white;\n    border-radius: 7px;\n}\n\n#reset:hover {\n    background-color: white;\n    color: black;\n}\n\n.content-wrapper{\n    display: flex;\n\n}\n\n.flex-wrapper{\n    display: flex;\n    flex: 1 0 auto;\n    justify-content: center;\n}\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n    background-color: steelblue;\n    color: white;\n}\n@keyframes bounce{\n    from {transform: translateY(0px)}\n    to {transform: translateY(-5px)}\n}\n\n.footer i{\n    padding-left: 5px;\n    text-decoration: none;\n    color: lightskyblue;\n    font-size: 26px;\n}\n.footer i:hover {\n    font-size: 26px;\n    animation: bounce .3s infinite alternate;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,sBAAsB;IACtB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,aAAa;IACb,eAAe;IACf,sBAAsB;AAC1B;AACA;IACI,oBAAoB;IACpB,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,iCAAiC;IACjC,iCAAiC;IACjC,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,+CAA+C;AACnD;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,4BAA4B;AAChC;;;AAGA;IACI,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,iCAAiC;AACrC;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,6BAA6B;IAC7B,UAAU;IACV,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,iCAAiC;IACjC,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,2BAA2B;IAC3B,YAAY;AAChB;AACA;IACI,MAAM,0BAA0B;IAChC,IAAI,2BAA2B;AACnC;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,eAAe;IACf,wCAAwC;AAC5C","sourcesContent":["@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\nbody {\n    display: flex;\n    font-family: 'Open Sans', sans-serif;\n    flex-direction: column;\n    min-height: 100vh;\n}\n.header{\n    display: flex;\n    padding: 10px;\n    font-size: 30px;\n    justify-content:center;\n}\n.header h1{\n    padding-bottom: 10px;\n    border-bottom: 5px solid slategray;\n}\n\n.grid-and-buttons-wrapper {\n    margin: 30px;\n    border: 4px solid steelblue;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.grid-and-buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    padding: 50px;\n}\n\n\n.ship-menu-buttons {\n    display: flex;\n    flex-direction: column;\n    padding-left: 50px;\n}\n.ship-menu-buttons button {\n    font-size: 40px;\n    margin-top: 25px;\n    margin-bottom: 25px;\n    border: 1px solid rgb(41, 41, 41);\n    background-color: rgb(41, 41, 41);\n    border-radius: 7px;\n    color: white;\n    padding: 10px;\n}\n\n.ship-menu-buttons button:hover {\n    color: black;\n    background-color: white;\n    cursor: pointer;\n}\n\n.ship-menu-buttons button:active {\n    background-color: lightgray;\n}\n\n.start {\n    width: 500px;\n    height: 500px;\n}\n\n.start div {\n    border: 1px solid black;\n}\n\n.game-box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.game-box h1 {\n    padding-bottom: 20px;\n}\n\n.grids-and-text {\n    display: flex;\n}\n\n.gameplay-grid {\n    display: flex;\n    flex-direction: column;\n    padding: 50px;\n    align-items: center;\n}\n\n.gameplay-grid h2 {\n    padding-top: 20px;\n}\n\n#playerGrid {\n    border: 1px solid black;\n}\n\n#computerGrid {\n    border: 1px solid black;\n}\n\n.grid {\n    display: grid;\n    grid-template:repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.ship {\n    background-color: skyblue;\n}\n\n.hit {\n    background-color: tomato !important;\n}\n\n.miss {\n    background-color: lightgreen !important;\n}\n\n.hover {\n    background-color: lightgray;\n}\n\n\n.ship-hover {\n    background-color: lightgreen;\n}\n\n\n.disabled:hover {\n    cursor: not-allowed;\n}\n\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.4);\n}\n\n\n.modal-content{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    box-shadow: 4px 4px 8px black;\n    width: 30%;\n    margin: 15% auto;\n    background-color: white;\n}\n.modal-content p{\n    margin-top: 30px;\n    font-size: 35px;\n    padding-bottom: 30px;\n}\n\n#reset {\n    font-size: 24px;\n    padding: 20px;\n    margin-bottom: 20px;\n    border: 2px solid rgb(41, 41, 41);\n    background-color: rgb(41, 41, 41);\n    color: white;\n    border-radius: 7px;\n}\n\n#reset:hover {\n    background-color: white;\n    color: black;\n}\n\n.content-wrapper{\n    display: flex;\n\n}\n\n.flex-wrapper{\n    display: flex;\n    flex: 1 0 auto;\n    justify-content: center;\n}\n.footer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px;\n    background-color: steelblue;\n    color: white;\n}\n@keyframes bounce{\n    from {transform: translateY(0px)}\n    to {transform: translateY(-5px)}\n}\n\n.footer i{\n    padding-left: 5px;\n    text-decoration: none;\n    color: lightskyblue;\n    font-size: 26px;\n}\n.footer i:hover {\n    font-size: 26px;\n    animation: bounce .3s infinite alternate;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2QyxJQUFHLFFBQVEsQ0FBQyxFQUFFLEtBQUssWUFBWSxJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssT0FBTyxFQUFFLEVBQUUsNERBQTREO29CQUN0SCxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzlDO2FBQ0o7aUJBQ0k7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFFRCwrRkFBK0Y7QUFFL0Ysb0tBQW9LO0FBRXBLLHlKQUF5SiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fucyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcbi5oZWFkZXIgaDF7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgc2xhdGVncmF5O1xcbn1cXG5cXG4uZ3JpZC1hbmQtYnV0dG9ucy13cmFwcGVyIHtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZ3JpZC1hbmQtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG5cXG4uc2hpcC1tZW51LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcbi5zaGlwLW1lbnUtYnV0dG9ucyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig0MSwgNDEsIDQxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0MSwgNDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNoaXAtbWVudS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtbWVudS1idXR0b25zIGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5zdGFydCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLnN0YXJ0IGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZ2FtZS1ib3ggaDEge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmdyaWRzLWFuZC10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdhbWVwbGF5LWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZXBsYXktZ3JpZCBoMiB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4jcGxheWVyR3JpZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29tcHV0ZXJHcmlkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTpyZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG5cXG4uc2hpcC1ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcblxcbi5kaXNhYmxlZDpob3ZlciB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG5cXG4ubW9kYWwtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5tb2RhbC1jb250ZW50IHB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbiNyZXNldCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQxLCA0MSwgNDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4jcmVzZXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4uZmxleC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZXtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCl9XFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCl9XFxufVxcblxcbi5mb290ZXIgaXtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4uZm9vdGVyIGk6aG92ZXIge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSw0QkFBNEI7QUFDaEM7OztBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksTUFBTSwwQkFBMEI7SUFDaEMsSUFBSSwyQkFBMkI7QUFDbkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1xcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcbi5oZWFkZXIgaDF7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgc2xhdGVncmF5O1xcbn1cXG5cXG4uZ3JpZC1hbmQtYnV0dG9ucy13cmFwcGVyIHtcXG4gICAgbWFyZ2luOiAzMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBzdGVlbGJsdWU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uZ3JpZC1hbmQtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG5cXG4uc2hpcC1tZW51LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcbi5zaGlwLW1lbnUtYnV0dG9ucyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig0MSwgNDEsIDQxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0MSwgNDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNoaXAtbWVudS1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtbWVudS1idXR0b25zIGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5zdGFydCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLnN0YXJ0IGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZS1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZ2FtZS1ib3ggaDEge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmdyaWRzLWFuZC10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdhbWVwbGF5LWdyaWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZXBsYXktZ3JpZCBoMiB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4jcGxheWVyR3JpZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29tcHV0ZXJHcmlkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTpyZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG5cXG4uc2hpcC1ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcblxcbi5kaXNhYmxlZDpob3ZlciB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5cXG5cXG4ubW9kYWwtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCBibGFjaztcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5tb2RhbC1jb250ZW50IHB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbiNyZXNldCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQxLCA0MSwgNDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4jcmVzZXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4uZmxleC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZXtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCl9XFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCl9XFxufVxcblxcbi5mb290ZXIgaXtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4uZm9vdGVyIGk6aG92ZXIge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcHNcIjtcblxubGV0IHdoaWNoVHVybjogbnVtYmVyID0gMTsgLy8gc2V0cyB0aGUgc3RhcnRpbmcgdHVybiBhcyBwMSBcblxubGV0IENvbXB1dGVyOiB7Ym9hcmQ6IEdhbWVib2FyZCwgcGxheWVyOiBQbGF5ZXIsIGNwdVBsYWNlU2hpcHM6IEZ1bmN0aW9uLCBjcHVBdHRhY2s6IEZ1bmN0aW9ufSA9IHtcbiAgICBib2FyZDogIG5ldyBHYW1lYm9hcmQsXG4gICAgcGxheWVyOiAgbmV3IFBsYXllcihcIkNvbXB1dGVyXCIpLFxuICAgIGNwdVBsYWNlU2hpcHM6ICgpID0+IHtcbiAgICAgICAgQ29tcHV0ZXIuYm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7IC8vIHJ1biB0aGlzIHdoZW4gcGxheWVyIGJvYXJkIGlzIHNldHVwXG4gICAgfSxcbiAgICBjcHVBdHRhY2s6ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIENvbXB1dGVyLnBsYXllci5yYW5kb21BdHRhY2soSHVtYW4uYm9hcmQpO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBDb21wdXRlci5jcHVBdHRhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5sZXQgSHVtYW46IHtib2FyZDogR2FtZWJvYXJkLCBwbGF5ZXI6IFBsYXllciwgcGxhY2VTaGlwOiBGdW5jdGlvbiwgaHVtYW5BdHRhY2s6IEZ1bmN0aW9uLCBjaGFuZ2VQbGF5ZXJOYW1lOiBGdW5jdGlvbn0gPSB7XG4gICAgYm9hcmQ6IG5ldyBHYW1lYm9hcmQsXG4gICAgcGxheWVyOiBuZXcgUGxheWVyKFwiUGxheWVyXCIpLCAgIFxuICAgIHBsYWNlU2hpcChjb3JkczogbnVtYmVyW10pIHsvLyB0aGVzZSBhcmUgZ290IGZyb20gZXZlbnQgbGlzdGVuZXIsIHB1dCB0aGlzIG9uIGV2ZW50IGxpc3RlbmVyIHByb2JhYmx5XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGxldCBzaGlwTnVtYmVyOiBudW1iZXIgPSBIdW1hbi5ib2FyZC5zaGlwc0xlZnQ7XG4gICAgICAgICAgICBsZXQgc2hpcCA9IEh1bWFuLmJvYXJkLnNoaXBzW3NoaXBOdW1iZXJdO1xuICAgICAgICAgICAgSHVtYW4uYm9hcmQucGxhY2VTaGlwKGNvcmRzLCBzaGlwKTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGh1bWFuQXR0YWNrKGxvY2F0aW9uOiBudW1iZXIpOnN0cmluZyB7IC8vIHNldCBhIHZhcmlhYmxlIHRvIHRoaXMgYW5kIHRoZW4gYXNzaWduIHRoYXQgdG8gdGhlIGRvbSBzbyBpdCBjYW4gcmVwb3J0IHRoYXQgYXR0YWNrXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0OiBzdHJpbmcgPSBIdW1hbi5wbGF5ZXIuYXR0YWNrT3Bwb25lbnQobG9jYXRpb24sIENvbXB1dGVyLmJvYXJkKTtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpO1xuICAgICAgICB9ICAgICAgXG4gICAgfSxcblxuICAgIGNoYW5nZVBsYXllck5hbWUobmFtZTogc3RyaW5nKSB7IC8vIGFwcGVuZCB0aGlzIHRvIGEgbmFtZSB0ZXh0IGJveCBvbiB0aGUgZG9tXG4gICAgICAgIGlmKG5hbWUgPT09IFwiQ29tcHV0ZXJcIiB8fCBuYW1lID09PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnSW52YWxpZCBOYW1lJylcbiAgICAgICAgfVxuICAgICAgICBIdW1hbi5wbGF5ZXIubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1BsYXllckJvYXJkc1NldHVwKCk6IGJvb2xlYW4geyAvLyBhZnRlciBwbGF5ZXIgcGxhY2VzIHNoaXAgY2hlY2sgd2l0aCB0aGlzIGFuZCB3aGVuIGl0cyB0cnVlIGFwcGVuZCB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIG9wcG9uZW50cyBib2FyZD9cbiAgICBpZihIdW1hbi5ib2FyZC5zaGlwc0xlZnQgPT09IDUpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUoKTogc3RyaW5nIHwgYm9vbGVhbiB7IC8vIGNoZWNrIHRoaXMgYWZ0ZXIgZXZlcnkgYXR0YWNrIGluIGRvbSBpZiByZXR1cm5zIG5vdCBmYWxzZSBwb3AgYSBtb2RhbCB1cCB3aXRoIHdpbm5lclxuICAgIGlmKEh1bWFuLmJvYXJkLmNoZWNrRm9yV2luKCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIENvbXB1dGVyLnBsYXllci5uYW1lXG4gICAgfVxuICAgIGlmKENvbXB1dGVyLmJvYXJkLmNoZWNrRm9yV2luKCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIEh1bWFuLnBsYXllci5uYW1lXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBhdHRhY2sobG9jYXRpb246IG51bWJlcikgeyAvLyB1c2UgaWYgc3RhdG1lbnQsIGlmIHJldHVybldob3NldHVybigpIGlzIDIgdGhlbiBydW4gYXR0YWNrIGFnYWluIHRvIGRvIGNwdSBhdHRhY2tcbiAgICBpZihyZXR1cm5XaG9zZVR1cm4oKSA9PT0gMSkge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBsZXQgYXR0YWNrUmVzdWx0OiBzdHJpbmcgPSBIdW1hbi5odW1hbkF0dGFjayhsb2NhdGlvbik7XG4gICAgICAgICAgICB3aGljaFR1cm4rK1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYocmV0dXJuV2hvc2VUdXJuKCkgPT09IDIpIHtcbiAgICAgICAgQ29tcHV0ZXIuY3B1QXR0YWNrKCk7XG4gICAgICAgIHdoaWNoVHVybi0tXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5XaG9zZVR1cm4oKTogbnVtYmVyIHtcbiAgICBpZih3aGljaFR1cm4gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgZWxzZSBpZih3aGljaFR1cm4gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIDJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICB3aGljaFR1cm4gPSAxO1xuXG4gICAgSHVtYW4uYm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xuICAgIEh1bWFuLnBsYXllciA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXJcIik7XG5cbiAgICBDb21wdXRlci5ib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG4gICAgQ29tcHV0ZXIucGxheWVyID0gbmV3IFBsYXllcihcIkNvbXB1dGVyXCIpO1xufVxuXG5leHBvcnQge0NvbXB1dGVyLCBIdW1hbiwgZW5kR2FtZSwgYXR0YWNrLCByZXR1cm5XaG9zZVR1cm4sIGlzUGxheWVyQm9hcmRzU2V0dXAsIHJlc2V0R2FtZX1cblxuXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwc1wiO1xuaW50ZXJmYWNlIFNoaXBJbnRlcmZhY2Uge1xuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpc1N1bmsoKTogYm9vbGVhbixcbn1cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgYm9hcmQ6IGFueSAvLyBpbmRleCBzaWduaXR1cmUgc3R1ZmYgaW0gbm90IHN1cmUgaG93IHRvIHR5cGUgaXQgYnV0IGl0IGhhcyBzb21ldGhpbmcgdG8gZG8gd2l0aCB0aGUgb2JqZWN0cyBpbnNpZGUgb2YgaXQgOihcbiAgICBzaGlwczogU2hpcEludGVyZmFjZVtdXG4gICAgc2hpcHNMZWZ0OiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy4jbWFrZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLiNtYWtlU2hpcHMoKTtcbiAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSAwIC8vIFxuXG4gICAgfVxuICAgICNtYWtlQm9hcmQoKTogc3RyaW5nW10ge1xuICAgICAgICBsZXQgYm9hcmQ6IHN0cmluZ1tdID0gW11cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmQucHVzaCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9hcmRcbiAgICB9XG4gICAgI21ha2VTaGlwcygpOlNoaXBJbnRlcmZhY2VbXSB7XG4gICAgICAgIGxldCBzaGlwczogU2hpcEludGVyZmFjZVtdID0gW11cblxuICAgICAgICBsZXQgQ2FycmllciA9IG5ldyBTaGlwKDUsICdDYXJyaWVyJyk7XG4gICAgICAgIHNoaXBzLnB1c2goQ2Fycmllcik7XG4gICAgICAgIGxldCBCYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcbiAgICAgICAgc2hpcHMucHVzaChCYXR0bGVzaGlwKTtcbiAgICAgICAgbGV0IERlc3Ryb3llciA9IG5ldyBTaGlwKDMsICdEZXN0cm95ZXInKTtcbiAgICAgICAgc2hpcHMucHVzaChEZXN0cm95ZXIpO1xuICAgICAgICBsZXQgU3VibWFyaW5lID0gbmV3IFNoaXAoMywgJ1N1Ym1hcmluZScpO1xuICAgICAgICBzaGlwcy5wdXNoKFN1Ym1hcmluZSlcbiAgICAgICAgbGV0IFBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyLCAnUGF0cm9sIEJvYXQnKTtcbiAgICAgICAgc2hpcHMucHVzaChQYXRyb2xCb2F0KTtcbiAgICAgICAgcmV0dXJuIHNoaXBzXG4gICAgfVxuICAgIHBsYWNlU2hpcChsb2NhdGlvbjogbnVtYmVyW10sIHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYodGhpcy5jaGVja1ZhbGlkUExhY2VtZW50KGxvY2F0aW9uLCBzaGlwKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYWNlbWVudCEnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gPSB7U2hpcDogc2hpcCwgcG9zaXRpb246IGkrMSwgaXNTcG90SGl0OiBmYWxzZSx9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hpcHNMZWZ0ID0gdGhpcy5zaGlwc0xlZnQgKyAxO1xuICAgIH1cblxuICAgIHVuZG9MYXN0U2hpcFBsYWNlKCkge1xuICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogYW55LCBib2FyZDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZihlbGVtZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuU2hpcC5uYW1lID09PSB0aGlzLnNoaXBzW3RoaXMuc2hpcHNMZWZ0IC0gMV0ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtpXSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy5zaGlwc0xlZnQgPiAwICkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrVmFsaWRQTGFjZW1lbnQobG9jYXRpb246IG51bWJlcltdLCBzaGlwOiBTaGlwSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmKHNoaXAubGVuZ3RoICE9PSBsb2NhdGlvbi5sZW5ndGggKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYXRpb24ubGVuZ3RoOyBpKyspIHsgLy8gY2hlY2tzIGlmIGFub3RoZXIgc2hpcCBpcyBpbiB0aGUgc3BvdFxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbltpXV0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihsb2NhdGlvblswXSAlIDEwID09PSBsb2NhdGlvblsxXSAlIDEwICkgeyAvLyB0aGlzIGlzIGEgaGFyZCBjaGVjayB0byB0ZXN0IGlmIHBsYXllciBjb3JkcyBmb3IgdmVydCBiZWZvcmUgY2hlY2tpbmcgaWYgaG9yaXpvbnRhbCBpcyBiYWRcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLiNjaGVja0hvcml6b250YWxDb3Jkcyhsb2NhdGlvbikubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgI2NoZWNrSG9yaXpvbnRhbENvcmRzKGFycmF5OiBudW1iZXJbXSkge1xuICAgICAgICBsZXQgZmlyc3ROdW1iZXJBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGlmKGFycmF5WzBdIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyYXlbMF0gPCAxMCAmJiBhcnJheVtpXSA+IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaCgwLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihhcnJheVswXSA8IDEwICYmIGFycmF5WzFdIDwgMTApIHtcbiAgICAgICAgICAgIGZpcnN0TnVtYmVyQXJyYXkucHVzaCgwKTtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdE51bWJlckFycmF5O1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN0cmluZ2lmaWVkTnVtOiBzdHJpbmcgPSBhcnJheVtpXS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IGZpcnN0TnVtID0gcGFyc2VJbnQoc3RyaW5naWZpZWROdW0uY2hhckF0KDApKTtcbiAgICAgICAgICAgIGlmKGZpcnN0TnVtICE9PSBmaXJzdE51bWJlckFycmF5WzBdKSB7XG4gICAgICAgICAgICAgICAgZmlyc3ROdW1iZXJBcnJheS5wdXNoKGZpcnN0TnVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlyc3ROdW1iZXJBcnJheVxuICAgIH1cblxuICAgIHRha2VBdHRhY2sobG9jYXRpb246IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmKHRoaXMuYm9hcmRbbG9jYXRpb25dID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0gPSAnbWlzcyc7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtsb2NhdGlvbl1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuI2NoZWNrVmFsaWRIaXQobG9jYXRpb24pID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtsb2NhdGlvbl0uaXNTcG90SGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwLmhpdFNoaXAodGhpcy5ib2FyZFtsb2NhdGlvbl0ucG9zaXRpb24pOyAgIFxuICAgICAgICAgICAgICAgIGlmKHRoaXMuI2NoZWNrSWZCb2F0U3Vuayh0aGlzLmJvYXJkW2xvY2F0aW9uXS5TaGlwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVCb2F0Q291bnRlcldoZW5TdW5rKHRoaXMuYm9hcmRbbG9jYXRpb25dLlNoaXApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVwb3J0U3Vua1NoaXAodGhpcy5ib2FyZFtsb2NhdGlvbl0uU2hpcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoJ2ludmFsaWQgYXR0YWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjY2hlY2tWYWxpZEhpdChsb2NhdGlvbjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLmJvYXJkW2xvY2F0aW9uXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtsb2NhdGlvbl0uaXNTcG90SGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAjY2hlY2tJZkJvYXRTdW5rKGJvYXQ6U2hpcEludGVyZmFjZSkge1xuICAgICAgICBpZihib2F0LmlzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICAjcmVwb3J0U3Vua1NoaXAoYm9hdDpTaGlwSW50ZXJmYWNlKSA6IHN0cmluZyB7XG4gICAgICAgICAgICByZXR1cm4gYCR7Ym9hdC5uYW1lfSBoYXMgU3VuayFgXG4gICAgfVxuXG4gICAgI3VwZGF0ZUJvYXRDb3VudGVyV2hlblN1bmsoYm9hdDogU2hpcEludGVyZmFjZSkge1xuICAgICAgICAgICAgdGhpcy5zaGlwc0xlZnQgPSB0aGlzLnNoaXBzTGVmdCAtIDE7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JXaW4oKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm5WYWxpZFJhbmRvbUNvcmRzKGxlbmd0aDogbnVtYmVyLCBvcmllbnRhdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAncmFuZG9tJykge1xuICAgICAgICAgICAgb3JpZW50YXRpb24gPSB0aGlzLiNnZW5lcmF0ZVJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgbGV0IGhvcml6b250YWxDb3JkczogbnVtYmVyW10gPSB0aGlzLiNnZW5lcmF0ZUxlZ2FsSG9yaXpvbnRhbENvcmRzKGxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gaG9yaXpvbnRhbENvcmRzO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBsZXQgdmVydGljYWxDb3JkczogbnVtYmVyW10gPSB0aGlzLiNnZW5lcmF0ZUxlZ2FsVmVydGljYWxDb3JkcyhsZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsQ29yZHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZ2VuZXJhdGVSYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG9yaWVudGF0aW9uID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG5cbiAgICBnZW5lcmF0ZUNvcmRzRnJvbVN0YXJ0aW5nUG9zaXRpb24oc3RhcnQ6IG51bWJlciwgb3JpZW50YXRpb246IHN0cmluZywgc2hpcDogU2hpcEludGVyZmFjZSk6IG51bWJlcltdIHtcbiAgICAgICAgbGV0IGNvcmRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ1gnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvcmRzLnB1c2goc3RhcnQgKyBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3Jkc1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3Jkcy5wdXNoKHN0YXJ0ICsgKGkgKiAxMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcmRzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZ2VuZXJhdGVMZWdhbEhvcml6b250YWxDb3JkcyhsZW5ndGg6IG51bWJlcikge1xuICAgICAgICBsZXQgY29yZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCByYW5kb21WZXJ0aWNhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICogMTA7IFxuICAgICAgICBsZXQgcmFuZG9tSG9yaXpvbnRhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBpZihyYW5kb21Ib3Jpem9udGFsICsgbGVuZ3RoID4gOSkge1xuICAgICAgICAgICAgcmFuZG9tSG9yaXpvbnRhbCA9IHJhbmRvbUhvcml6b250YWwgLSBsZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmRvbUZpbmFsOiBudW1iZXIgPSByYW5kb21WZXJ0aWNhbCArIHJhbmRvbUhvcml6b250YWw7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29yZHMucHVzaChyYW5kb21GaW5hbCArIGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3Jkc1xuICAgIH1cblxuICAgICNnZW5lcmF0ZUxlZ2FsVmVydGljYWxDb3JkcyhsZW5ndGg6IG51bWJlcikge1xuICAgICAgICBsZXQgY29yZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCByYW5kb21WZXJ0aWNhbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgbGV0IHJhbmRvbUhvcml6b250YWw6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgaWYocmFuZG9tVmVydGljYWwgKyBsZW5ndGggPiA5KSB7XG4gICAgICAgICAgICByYW5kb21WZXJ0aWNhbCA9IHJhbmRvbVZlcnRpY2FsIC0gbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJhbmRvbVZlcnRpY2FsID0gcmFuZG9tVmVydGljYWwgKiAxMDtcbiAgICAgICAgbGV0IHJhbmRvbUZpbmFsOiBudW1iZXIgPSByYW5kb21WZXJ0aWNhbCArIHJhbmRvbUhvcml6b250YWw7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29yZHMucHVzaChyYW5kb21GaW5hbCk7XG4gICAgICAgICAgICByYW5kb21GaW5hbCA9IHJhbmRvbUZpbmFsICsgMTA7IC8vIGFkZHMgdG8gdG8gdGhlIG51bWJlciB0byBzaW11bGF0ZSBtb3ZpbmcgZG93biBhIHJvdyBpbiB0aGUgZ3JpZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3Jkc1xuICAgIH1cblxuICAgIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXA6IFNoaXBJbnRlcmZhY2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHRoaXMucmV0dXJuVmFsaWRSYW5kb21Db3JkcyhzaGlwLmxlbmd0aCwgJ3JhbmRvbScpLCBzaGlwKTtcbiAgICAgICAgICAgIGlmKHRoaXMuc2hpcHNMZWZ0ID4gNSkgeyAvLyBzdG9wcyBvdmVycGxhY2luZyBvZiBzaGlwcyBvbiBib2FyZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcHNMZWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzTGVmdCA9IDU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5wbGFjZVNoaXBSYW5kb21seShzaGlwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5KCkge1xuICAgICAgICBsZXQgaToga2V5b2YgdHlwZW9mIHRoaXMuc2hpcHM7XG4gICAgICAgIGZvcihpIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwUmFuZG9tbHkodGhpcy5zaGlwc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZCIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCJcblxuY2xhc3MgUGxheWVyIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGF0dGFja09wcG9uZW50KGNvcmRpbmF0ZXM6IG51bWJlciwgZ2FtZWJvYXJkOiBHYW1lYm9hcmQpOnN0cmluZyB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrID0gZ2FtZWJvYXJkLnRha2VBdHRhY2soY29yZGluYXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrO1xuXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9tQXR0YWNrKGdhbWVib2FyZDogR2FtZWJvYXJkKSB7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBnYW1lYm9hcmQudGFrZUF0dGFjayhsb2NhdGlvbikgXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllclxuIiwiaW50ZXJmYWNlIFNoaXBJbnRlcmZhY2Uge1xuICAgICBsZW5ndGg6IG51bWJlcixcbiAgICAgaGl0OiBudW1iZXJbXSxcbiAgICAgbmFtZT86IHN0cmluZyAvLyB0aGF0cyBmb3Igb3B0aW9uYWxcbiAgICAgaXNTdW5rKCk6IGJvb2xlYW5cbiAgICAgaGl0U2hpcChpbmRleDogbnVtYmVyKTogbnVtYmVyW10gXG4gfVxuXG4gY2xhc3MgU2hpcCBpbXBsZW1lbnRzIFNoaXBJbnRlcmZhY2Uge1xuICAgICBsZW5ndGg6IG51bWJlclxuICAgICBoaXQ6IG51bWJlcltdXG4gICAgIG5hbWU6IHN0cmluZ1xuXG4gICAgIGNvbnN0cnVjdG9yKGxlbmd0aDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICAgdGhpcy5oaXQgPSBbXTtcbiAgICAgICAgIHRoaXMubmFtZSA9IG5hbWUgLy8gbWF5YmUgYWRkIGEgd2F5IHRvIHRlbGwgd2hhdCBhIHNoaXAgaXMgYmFzZWQgb24gbGVuZ3RoIGFzIGEgbWV0aG9kIG1heWJlPz9cbiAgICAgfVxuXG4gICAgIGlzU3VuaygpIHtcbiAgICAgICAgIGlmKHRoaXMuaGl0Lmxlbmd0aCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgfVxuICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICB9XG4gICAgIH1cblxuICAgICBoaXRTaGlwKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgIGlmKHRoaXMuI2NoZWNrRm9yVmFsaWRIaXQoaW5kZXgpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5oaXRcbiAgICAgICAgIH0gXG4gICAgICAgICB0aGlzLmhpdC5wdXNoKGluZGV4KTtcbiAgICAgICAgIHJldHVybiB0aGlzLmhpdFxuICAgICB9XG4gICAgICNjaGVja0ZvclZhbGlkSGl0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaGl0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihpbmRleCA9PT0gdGhpcy5oaXRbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICB9XG4gfVxuIGV4cG9ydCBkZWZhdWx0IFNoaXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtDb21wdXRlciwgSHVtYW4sIGVuZEdhbWUsIGF0dGFjaywgcmV0dXJuV2hvc2VUdXJuLCBpc1BsYXllckJvYXJkc1NldHVwLCByZXNldEdhbWV9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IGF4aXM6IHN0cmluZyA9ICdYJzsgXG5cbmluaXRTdGFydCgpO1xuZnVuY3Rpb24gaW5pdFN0YXJ0KCkge1xuICAgIGluaXRTdGFydGluZ0hUTUwoKTtcbiAgICBtYWtlR3JpZChzdGFydGluZ0dyaWRFdmVudGxpc3RuZXJzLCAnc3RhcnQnKTtcbiAgICBjaGFuZ2VQbGFjZVNoaXBUZXh0KCk7XG4gICAgaW5pdFN0YXJ0QnRucygpO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhcnRCdG5zKCkge1xuICAgIG1ha2VSYW5kb21CdG4oKTtcbiAgICBtYWtlVW5kb0J0bigpO1xuICAgIG1ha2VSb3RhdGlvbkJ0bigpO1xufVxuXG5mdW5jdGlvbiBtYWtlR3JpZChldmVudExpc3RlbmVyczogRnVuY3Rpb24sIGFwcGVuZExvY2F0aW9uOiBzdHJpbmcpIHtcbiAgICBsZXQgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcHBlbmRMb2NhdGlvbik7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgIGxldCBncmlkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ3JpZFNwYWNlLnNldEF0dHJpYnV0ZSgnaWQnLCBpLnRvU3RyaW5nKCkpO1xuICAgICAgICBldmVudExpc3RlbmVycyhncmlkU3BhY2UpO1xuICAgICAgICBzdGFydC5hcHBlbmRDaGlsZChncmlkU3BhY2UpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBzdGFydGluZ0dyaWRFdmVudGxpc3RuZXJzKGdyaWRTcGFjZTogSFRNTEVsZW1lbnQpIHtcbiAgICBncmlkU3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBpZihpc1BsYXllckJvYXJkc1NldHVwKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzaG93U2hpcFBsYWNlbWVudE9uSG92ZXIoZ3JpZFNwYWNlLmlkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZ3JpZFNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBjbGVhckhvdmVyU3R5bGVzKCdzdGFydCcpO1xuICAgIH0pO1xuXG4gICAgZ3JpZFNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwbGFjZUhvdmVyZWRTaGlwKGdyaWRTcGFjZS5pZCk7XG4gICAgICAgIHJlbmRlckdhbWVCb2FyZChIdW1hbi5ib2FyZCwgJ3N0YXJ0Jyk7XG4gICAgICAgIGNoYW5nZVBsYWNlU2hpcFRleHQoKTtcbiAgICAgICAgaWYoaXNQbGF5ZXJCb2FyZHNTZXR1cCgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBtYWtlUmVhZHlidG4oKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59XG5cblxuZnVuY3Rpb24gaW5pdFN0YXJ0aW5nSFRNTCgpIHtcbiAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1hbmQtYnV0dG9ucy13cmFwcGVyXCI+XG4gICAgICAgIDxoMSBpZD1cInBsYWNlU2hpcFRleHRcIj5QbGFjZSBZb3VyIFNoaXA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1hbmQtYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInN0YXJ0XCIgY2xhc3M9XCJzdGFydCBncmlkXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImJ0bkNvbnRhaW5lclwiIGNsYXNzPVwic2hpcC1tZW51LWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidW5kb1wiPlVuZG88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicm90YXRpb25cIj5Sb3RhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyYW5kb21cIj5SYW5kb208L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xufVxuXG5mdW5jdGlvbiBnZXRIb3ZlckNvcmRzKGhvdmVySUQ6IHN0cmluZykge1xuICAgIGxldCBjb3JkczpudW1iZXJbXSA9IEh1bWFuLmJvYXJkLmdlbmVyYXRlQ29yZHNGcm9tU3RhcnRpbmdQb3NpdGlvbihwYXJzZUludChob3ZlcklEKSwgYXhpcywgSHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XSk7XG4gICAgcmV0dXJuIGNvcmRzXG59XG5cbmZ1bmN0aW9uIHBsYWNlSG92ZXJlZFNoaXAoaG92ZXJJRDogc3RyaW5nKSB7XG4gICAgbGV0IGNvcmRzOm51bWJlcltdID0gZ2V0SG92ZXJDb3Jkcyhob3ZlcklEKTtcbiAgICB0cnkge1xuICAgICAgICBIdW1hbi5wbGFjZVNoaXAoY29yZHMpO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dTaGlwUGxhY2VtZW50T25Ib3Zlcihob3ZlcklEOiBzdHJpbmcpIHtcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLmNoaWxkcmVuO1xuICAgIGxldCBjb3JkczpudW1iZXJbXSA9IGdldEhvdmVyQ29yZHMoaG92ZXJJRCk7XG4gICAgaWYoSHVtYW4uYm9hcmQuY2hlY2tWYWxpZFBMYWNlbWVudChjb3JkcywgSHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XSkgPT09IHRydWUpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KGdyaWRbaV0uaWQpID09PSBjb3Jkc1tqXSkge1xuICAgICAgICAgICAgICAgICAgICBncmlkW2ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaG92ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdyaWRbcGFyc2VJbnQoaG92ZXJJRCldLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJIb3ZlclN0eWxlcyhncmlkSUQ6IHN0cmluZykge1xuICAgIGxldCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ3JpZElEKS5jaGlsZHJlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihncmlkW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1ob3ZlcicpKSB7XG4gICAgICAgICAgICBncmlkW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtaG92ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZihncmlkW2ldLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgZ3JpZFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY2hhbmdlUGxhY2VTaGlwVGV4dCgpIHtcbiAgICBsZXQgcGxhY2VTaGlwVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZVNoaXBUZXh0Jyk7XG4gICAgaWYoaXNQbGF5ZXJCb2FyZHNTZXR1cCgpID09PSB0cnVlKSB7XG4gICAgICAgIHBsYWNlU2hpcFRleHQuaW5uZXJUZXh0ID0gJ0NsaWNrIFJlYWR5IFRvIEJlZ2luISc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwbGFjZVNoaXBUZXh0LmlubmVyVGV4dCA9IGBQbGFjZSBZb3VyICR7SHVtYW4uYm9hcmQuc2hpcHNbSHVtYW4uYm9hcmQuc2hpcHNMZWZ0XS5uYW1lfSFgO1xuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIG1ha2VSYW5kb21CdG4oKSB7XG4gICAgbGV0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20nKTtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIEh1bWFuLmJvYXJkLnBsYWNlU2hpcFJhbmRvbWx5KEh1bWFuLmJvYXJkLnNoaXBzW0h1bWFuLmJvYXJkLnNoaXBzTGVmdF0pO1xuICAgICAgICAgICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xuICAgICAgICAgICAgcmVuZGVyR2FtZUJvYXJkKEh1bWFuLmJvYXJkLCAnc3RhcnQnKTtcbiAgICAgICAgICAgIGlmKGlzUGxheWVyQm9hcmRzU2V0dXAoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1ha2VSZWFkeWJ0bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VVbmRvQnRuKCkge1xuICAgIGxldCB1bmRvQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuZG8nKTtcbiAgICB1bmRvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihpc1BsYXllckJvYXJkc1NldHVwKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCByZWFkeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkeScpO1xuICAgICAgICAgICAgcmVhZHlCdG4ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgSHVtYW4uYm9hcmQudW5kb0xhc3RTaGlwUGxhY2UoKTtcbiAgICAgICAgY2hhbmdlUGxhY2VTaGlwVGV4dCgpO1xuICAgICAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdzdGFydCcpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlUm90YXRpb25CdG4oKSB7XG4gICAgbGV0IHJvdGF0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uJyk7XG4gICAgcm90YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VBeGlzKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQXhpcygpIHtcbiAgICBpZihheGlzID09PSAnWCcpIHtcbiAgICAgICAgYXhpcyA9ICdZJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF4aXMgPSAnWCc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUmVhZHlidG4oKSB7XG4gICAgbGV0IHJlYWR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVhZHlCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdyZWFkeScpO1xuICAgIHJlYWR5QnRuLmlubmVyVGV4dCA9ICdSZWFkeSc7XG5cbiAgICByZWFkeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xlYXJET00oKTtcbiAgICAgICAgbWFrZUdhbWVwbGF5RE9NKCk7XG4gICAgICAgIGluaXRHYW1lcGxheSgpO1xuICAgICAgICAvLyBwdXQgdGhlIGFib3V2ZSBmdW5jdGlvbiBpbiBhbiBpbml0IGdhbWVwbGF5IGZ1bmN0aW9uIHdyYXBwZXIgXG4gICAgfSk7XG5cbiAgICBsZXQgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkNvbnRhaW5lcicpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWFkeUJ0bik7XG59XG5cbmZ1bmN0aW9uIGluaXRHYW1lcGxheSgpIHtcbiAgICBtYWtlUGxheWVyR2FtZUJvYXJkKCk7XG4gICAgbWFrZUNvbXB1dGVyR2FtZUJvYXJkKCk7XG4gICAgdXBkYXRlUmVtYWluaW5nU2hpcHNEaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBtYWtlR2FtZXBsYXlET00oKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9XCJnYW1lLWJveFwiPlxuICAgIDxoMSBpZD1cImxhc3RBdHRhY2tcIj5UaGlzIHNob3dzIHN0YXR1cyBvZiB5b3VyIGxhc3QgYXR0YWNrITwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImdyaWRzLWFuZC10ZXh0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lcGxheS1ncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGxheWVyR3JpZFwiIGNsYXNzPVwiZ3JpZCBzdGFydFwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBpZD1cInBSZW1haW5pbmdcIj5QbGF5ZXIgc2hpcHMgcmVtYWluaW5nOiAwPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lcGxheS1ncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29tcHV0ZXJHcmlkXCIgY2xhc3M9XCJncmlkIHN0YXJ0XCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGlkPVwiY1JlbWFpbmluZ1wiPkNvbXB1dGVyIHNoaXBzIHJlbWFpbmluZzogMDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVJlbWFpbmluZ1NoaXBzRGlzcGxheSgpIHtcbiAgICBsZXQgcGxheWVyU2hpcHNSZW1haW5pbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncFJlbWFpbmluZycpO1xuICAgIGxldCBjb21wdXRlclNoaXBzUmVtYWluaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NSZW1haW5pbmcnKTtcblxuICAgIHBsYXllclNoaXBzUmVtYWluaW5nLmlubmVyVGV4dCA9IGBQbGF5ZXIgc2hpcHMgcmVtYWluaW5nOiAke0h1bWFuLmJvYXJkLnNoaXBzTGVmdH1gO1xuICAgIGNvbXB1dGVyU2hpcHNSZW1haW5pbmcuaW5uZXJUZXh0ID0gYENvbXB1dGVyIHNoaXBzIHJlbWFpbmluZzogJHtDb21wdXRlci5ib2FyZC5zaGlwc0xlZnR9YDtcbn1cblxuZnVuY3Rpb24gbWFrZVBsYXllckdhbWVCb2FyZCgpIHtcbiAgICBtYWtlR3JpZChwbGF5ZXJCb2FyZEV2ZW50cywgJ3BsYXllckdyaWQnKTtcbiAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdwbGF5ZXJHcmlkJyk7XG59XG5cbiBmdW5jdGlvbiBwbGF5ZXJCb2FyZEV2ZW50cygpIHtcbiAgICAvLyBtYWtlIGFuIG9uIGhvdmVyIGFmZmVjdCBmb3Igc29tdGhpbmcgbWF5YmU/XG4gfVxuXG4gZnVuY3Rpb24gbWFrZUNvbXB1dGVyR2FtZUJvYXJkKCkge1xuICAgIENvbXB1dGVyLmNwdVBsYWNlU2hpcHMoKTtcbiAgICBtYWtlR3JpZChjb21wdXRlckJvYXJkRXZlbnRzLCAnY29tcHV0ZXJHcmlkJyk7XG4gICAgcmVuZGVyR2FtZUJvYXJkKENvbXB1dGVyLmJvYXJkLCAnY29tcHV0ZXJHcmlkJyk7XG4gfVxuXG4gZnVuY3Rpb24gY29tcHV0ZXJCb2FyZEV2ZW50cyhjb21wdXRlckdyaWQ6IEhUTUxFbGVtZW50KSB7XG4gICAgY29tcHV0ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgY29tcHV0ZXJHcmlkLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgfSk7XG4gICAgY29tcHV0ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBjb21wdXRlckdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICB9KTtcblxuICAgIGNvbXB1dGVyR3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29tcHV0ZXJCb2FyZEF0dGFja3MoY29tcHV0ZXJHcmlkLmlkKTtcblxuICAgICAgICByZW5kZXJHYW1lQm9hcmQoSHVtYW4uYm9hcmQsICdwbGF5ZXJHcmlkJyk7XG4gICAgICAgIHJlbmRlckdhbWVCb2FyZChDb21wdXRlci5ib2FyZCwgJ2NvbXB1dGVyR3JpZCcpO1xuICAgICAgICB1cGRhdGVSZW1haW5pbmdTaGlwc0Rpc3BsYXkoKTtcbiAgICB9KTtcbiB9XG5cbiBmdW5jdGlvbiBjb21wdXRlckJvYXJkQXR0YWNrcyhjb21wdXRlckdyaWRJRDogc3RyaW5nKSB7XG4gICAgbGV0IGF0dGFja1Jlc3VsdCA9IGF0dGFjayhwYXJzZUludChjb21wdXRlckdyaWRJRCkpO1xuICAgIHVwZGF0ZUxhc3RBdHRhY2soYXR0YWNrUmVzdWx0KTtcbiAgICBlbmRHYW1lRE9NKCk7XG4gICAgaWYocmV0dXJuV2hvc2VUdXJuKCkgPT09IDIgJiYgZW5kR2FtZSgpID09PSBmYWxzZSkge1xuICAgICAgICBhdHRhY2soMCk7XG4gICAgICAgIGVuZEdhbWVET00oKTtcbiAgICB9XG4gfSBcblxuZnVuY3Rpb24gdXBkYXRlTGFzdEF0dGFjayhyZXN1bHQ6IHN0cmluZykge1xuICAgIGxldCBsYXN0QXR0YWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3RBdHRhY2snKTtcblxuICAgIGlmKHJlc3VsdCA9PT0gJ21pc3MnIHx8IHJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgbGFzdEF0dGFjay5pbm5lclRleHQgPSBgWW91ciBsYXN0IGF0dGFjayB3YXMgYSAke3Jlc3VsdH1gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGFzdEF0dGFjay5pbm5lclRleHQgPSBgdGhlICR7Q29tcHV0ZXIucGxheWVyLm5hbWV9J3MgJHtyZXN1bHR9YDtcbiAgICB9XG59IFxuXG5mdW5jdGlvbiBlbmRHYW1lRE9NKCkge1xuICAgIGlmKGVuZEdhbWUoKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsSUQnKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgbGV0IHdpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5uZXInKTtcbiAgICAgICAgd2lubmVyLmlubmVyVGV4dCA9IGAke2VuZEdhbWUoKX0gV2lucyFgO1xuXG4gICAgICAgIGxldCByZXNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpO1xuICAgICAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICAoKSA9PiB7XG4gICAgICAgICAgICByZXNldEdhbWUoKTtcbiAgICAgICAgICAgIGluaXRTdGFydCgpO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVCb2FyZChnYW1lYm9hcmQ6IEdhbWVib2FyZCwgZ3JpZDogc3RyaW5nKSB7XG4gICAgbGV0IERPTWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ3JpZCk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgaWYoZ2FtZWJvYXJkLmJvYXJkW2ldID09PSAnJykge1xuICAgICAgICAgICAgaWYoRE9NYm9hcmQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgICAgICAgICAgICBET01ib2FyZC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihnYW1lYm9hcmQuYm9hcmRbaV0gPT09ICdtaXNzJykge1xuICAgICAgICAgICAgRE9NYm9hcmQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyBcbiAgICAgICAgICAgIGlmKGdhbWVib2FyZC5ib2FyZFtpXS5pc1Nwb3RIaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYoRE9NYm9hcmQuaWQgPT09ICdwbGF5ZXJHcmlkJyB8fCBET01ib2FyZC5pZCA9PT0gJ3N0YXJ0JykgeyAvLyBvbmx5IHNob3dzIHNoaXAgaWYgaXRzIG9uIGEgcGxheWVycyBncmlkIG9yIHN0YXJ0aW5nIGdyaWRcbiAgICAgICAgICAgICAgICAgICAgRE9NYm9hcmQuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIERPTWJvYXJkLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBQVVQgQSBTUE9UIE9OIFRIRSBCT0FSRCBUSEFUIEhBUyBURVhUIEFGVEVSIEVWRVJZIEFUVEFDSyBUSEFUIFNIT1dTIFdIQVQgSEFQUEVORUQgTEFTVCBUVVJOIVxuXG4vLyBPTiBIT1ZFUiBBREQgQSBDTEFTUyBUTyBHUklEIFRIQVQgQ09MT1JTIElOIFRIRSBTUEFDRVMgSUYgVEhFWSBDSEVDSyBPVVQgUFJPUEVSTFkgSU4gY2hlY2tWYWxpZFBsYWNlbWVudCBBTkQgUkVNT1ZFUyBBTEwgT1RIRVIgSU5TVEFOQ0VTIE9GIEhPVkVSIENMQVNTIEZST00gR1JJRFxuXG4vLyBXSEVOIFlPVSBDTElDSyBBTkQgUExBQ0UgQSBTSElQIEpVU1QgU0VORCBUSEUgQ09SRFMgVE8gVEhFIFBMQUNFIFNISVAgRlVOQ1RJT04hIEFORCBUSEVOIFJVTiBBIFNFUEVSQVRFIEZVTlRJT04gVEhBVCBVUERBVEVTIFRIRSBET00gR1JJRCBSSUdIVCBBRlRFUiFcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9