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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: rgb(249, 249, 249);
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  width: 100%;
  height: 96px;
  font-size: 1.5rem;
}

h1 {
  width: 250px;
  border-bottom: 3px solid black;
  text-align: center;
}

.play-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.gameboards {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.board {
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
}

.row {
  height: 100%;
  display: flex;
  justify-content: center;
}

.cell {
  background-color: white;
  width: 100%;
  margin: 0.5px;
  font-size: 1rem;
  border: 1px solid #000;
  color: blue;
  font-weight: bold;
}

.cell:hover {
  background-color: rgb(232, 232, 232);
}

.cell:active {
  background-color: white;
}

.hit {
  background-color: rgba(240, 128, 128, 0.542);
}

.player2 {
  margin: 16px;
}

.message {
  border: 1px solid #000;
  padding: 16px;
  width: 300px;
  text-align: center;
}

.player1 {
  margin-top: 16px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,2BAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 32px;\n  background-color: rgb(249, 249, 249);\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: lightblue;\n  width: 100%;\n  height: 96px;\n  font-size: 1.5rem;\n}\n\nh1 {\n  width: 250px;\n  border-bottom: 3px solid black;\n  text-align: center;\n}\n\n.play-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n.gameboards {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n\n.board {\n  height: 300px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.cell {\n  background-color: white;\n  width: 100%;\n  margin: 0.5px;\n  font-size: 1rem;\n  border: 1px solid #000;\n  color: blue;\n  font-weight: bold;\n}\n\n.cell:hover {\n  background-color: rgb(232, 232, 232);\n}\n\n.cell:active {\n  background-color: white;\n}\n\n.hit {\n  background-color: rgba(240, 128, 128, 0.542);\n}\n\n.player2 {\n  margin: 16px;\n}\n\n.message {\n  border: 1px solid #000;\n  padding: 16px;\n  width: 300px;\n  text-align: center;\n}\n\n.player1 {\n  margin-top: 16px;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/computerPlaceShips.js":
/*!***********************************!*\
  !*** ./src/computerPlaceShips.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computerPlaceShips)
/* harmony export */ });
function computerPlaceShips(computerGameboard) {
  function randomlyPlaceShip(ship) {
    let horizontalOrVertical = Math.floor(Math.random() * 100);

    if (horizontalOrVertical > 50) {
      horizontalOrVertical = 'horizontal';
    } else {
      horizontalOrVertical = 'vertical';
    }

    const xStart = Math.floor(Math.random() * 9);
    const yStart = Math.floor(Math.random() * 9);
    let xEnd;
    let yEnd;

    if (horizontalOrVertical === 'horizontal') {
      yEnd = yStart;
      xEnd = xStart;
      if (xStart + ship < 9) xEnd -= 1;
      if (xStart + ship > 9) xEnd += 1;
    }

    if (horizontalOrVertical === 'vertical') {
      xEnd = xStart;
      yEnd = yStart;
      if (yStart + ship < 9) yEnd -= 1;
      if (yStart + ship > 9) yEnd += 1;
    }

    if (computerGameboard.placeShip([xStart, yStart, xEnd, yEnd]) === null)
      return null;
  }

  const shipLengths = [2, 3, 3, 4, 5];

  shipLengths.forEach((ship) => {
    let result = randomlyPlaceShip(ship);

    while (result === null) {
      result = randomlyPlaceShip(ship);
    }
  });
}


/***/ }),

/***/ "./src/displayNames.js":
/*!*****************************!*\
  !*** ./src/displayNames.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayNames)
/* harmony export */ });
const domPlayer1 = document.querySelector('.player1');
const domPlayer2 = document.querySelector('.player2');

function displayNames(player1, player2) {
  domPlayer1.textContent = player1.name;
  domPlayer2.textContent = player2.name;
}


/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _renderBoards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoards */ "./src/renderBoards.js");
/* harmony import */ var _renderMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMessage */ "./src/renderMessage.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _displayNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayNames */ "./src/displayNames.js");
/* harmony import */ var _computerPlaceShips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./computerPlaceShips */ "./src/computerPlaceShips.js");
/* harmony import */ var _playerPlaceShips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playerPlaceShips */ "./src/playerPlaceShips.js");








const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])('Player 1');
const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])('Computer', 'computer');

(0,_displayNames__WEBPACK_IMPORTED_MODULE_4__["default"])(player1, player2);

const player1GameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
const player2GameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_computerPlaceShips__WEBPACK_IMPORTED_MODULE_5__["default"])(player2GameBoard);
(0,_playerPlaceShips__WEBPACK_IMPORTED_MODULE_6__["default"])(player1GameBoard);

function gameLoop(currentPlayer = player1) {
  (0,_renderBoards__WEBPACK_IMPORTED_MODULE_0__["default"])([player2GameBoard, player1GameBoard]);

  let message = `${currentPlayer.name}'s turn.`;
  (0,_renderMessage__WEBPACK_IMPORTED_MODULE_1__["default"])(message);

  if (currentPlayer === player2GameBoard) {
    message = `${player2.name}'s turn.`;
    (0,_renderMessage__WEBPACK_IMPORTED_MODULE_1__["default"])(message);
    if (player2GameBoard.fleetIsSunk()) {
      message = `${player1.name} wins!`;
      return (0,_renderMessage__WEBPACK_IMPORTED_MODULE_1__["default"])(message);
    }

    setTimeout(() => {
      player2.takeTurn(player1GameBoard);
      gameLoop(player1);
    }, 500);
  }

  if (currentPlayer === player1GameBoard) {
    if (player1GameBoard.fleetIsSunk()) {
      message = `${player2.name} is the Winner`;
      return (0,_renderMessage__WEBPACK_IMPORTED_MODULE_1__["default"])(message);
    }
  }
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function gameboard() {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    const row = [];
    for (let j = 0; j < 10; j += 1) {
      row.push([]);
    }
    board.push(row);
  }

  const ships = [];
  const attacksReceived = [];

  function placeShip(coordinates) {
    const xStart = coordinates[0];
    const yStart = coordinates[1];
    const xEnd = coordinates[2];
    const yEnd = coordinates[3];

    if (xEnd > xStart || yEnd > yStart) {
      for (let yIfOccupied = yStart; yIfOccupied <= yEnd; yIfOccupied += 1) {
        for (let xIfOccupied = xStart; xIfOccupied <= xEnd; xIfOccupied += 1) {
          if (board[yIfOccupied][xIfOccupied][0] !== undefined) return;
        }
      }

      let length = xEnd - xStart + 1;
      if (length === 1) length = yEnd - yStart + 1;

      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
      ships.push(newShip);

      for (let y = yStart; y <= yEnd; y += 1) {
        for (let x = xStart; x <= xEnd; x += 1) {
          board[y][x][0] = newShip;
        }
      }
    }

    if (xEnd < xStart || yEnd < yStart) {
      for (let yIfOccupied = yEnd; yIfOccupied <= yStart; yIfOccupied += 1) {
        for (let xIfOccupied = xEnd; xIfOccupied <= xStart; xIfOccupied += 1) {
          if (board[yIfOccupied][xIfOccupied][0] === undefined) return;
          if (board[yIfOccupied][xIfOccupied][0] !== undefined) return null;
        }
      }

      let length = xStart - xEnd + 1;
      if (length === 1) length = yStart - yEnd + 1;

      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
      ships.push(newShip);

      for (let y = yEnd; y <= yStart; y += 1) {
        for (let x = xEnd; x <= xStart; x += 1) {
          board[y][x][0] = newShip;
        }
      }
    }
  }

  function receiveAttack(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    const attackedCell = board[y][x];

    let newAttack = true;
    attacksReceived.forEach((attack) => {
      if (attack[0] === x && attack[1] === y) newAttack = false;
    });

    if (!newAttack) return null;

    if (newAttack) {
      attacksReceived.push([x, y]);
      if (attackedCell[0] !== undefined) {
        attackedCell[0].hit();
        return 'Hit';
      }
      // do something when an attack misses
      attackedCell[0] = 'X';
      return 'Miss';
    }
  }

  function fleetIsSunk() {
    let numberOfSunkenShips = 0;

    ships.forEach((shipInFleet) => {
      if (shipInFleet.isSunk()) numberOfSunkenShips += 1;
    });

    return numberOfSunkenShips === ships.length;
  }

  return { board, attacksReceived, placeShip, receiveAttack, fleetIsSunk };
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ player)
/* harmony export */ });
function player(name) {
  function getRandomCoordinates() {
    const randomX = Math.floor(Math.random() * 9);
    const randomY = Math.floor(Math.random() * 9);
    const randomCoordinates = [randomX, randomY];
    return randomCoordinates;
  }

  function takeTurn(enemyGameboard, coordinates) {
    let result;

    if (coordinates) result = enemyGameboard.receiveAttack(coordinates);

    if (!coordinates) {
      let randomCoordinates = getRandomCoordinates();
      result = enemyGameboard.receiveAttack(randomCoordinates);
      while (result === null) {
        randomCoordinates = getRandomCoordinates();
        result = enemyGameboard.receiveAttack(randomCoordinates);
      }
      return result;
    }

    return result;
  }

  return { name, takeTurn };
}


/***/ }),

/***/ "./src/playerPlaceShips.js":
/*!*********************************!*\
  !*** ./src/playerPlaceShips.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerPlaceShips)
/* harmony export */ });
/* harmony import */ var _renderBoards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoards */ "./src/renderBoards.js");


function playerPlaceShips(playerGameboard) {
  function promptToPlaceShip(ship) {
    const regex = /^\d+(,\d+)*$/;

    let startCoordinate = prompt('Where do you want your ship to start? (x,y)');

    while (regex.test(startCoordinate) === false) {
      startCoordinate = prompt(
        'ERROR : Use correct format for start coordinate. (x,y)'
      );
    }

    let endCoordinate = prompt('Where do you want your ship to end? (x,y)');

    while (regex.test(endCoordinate) !== true) {
      endCoordinate = prompt(
        'ERROR: Use correct format for end coordinate. (x,y)'
      );
    }

    const start = startCoordinate.split(',');
    const end = endCoordinate.split(',');

    const xStart = +start[0];
    const yStart = +start[1];
    const xEnd = +end[0];
    const yEnd = +end[1];

    console.log([xStart, yStart, xEnd, yEnd]);

    return [xStart, yStart, xEnd, yEnd];
  }

  const shipLengths = [2, 3, 3, 4, 5];

  shipLengths.forEach((ship) => {
    let coordinates = promptToPlaceShip(ship);
    let result = playerGameboard.placeShip(coordinates);
    while (result === null) {
      alert('Cannot overlap or place ships on top off each other.');
      coordinates = promptToPlaceShip(ship);
      result = playerGameboard.placeShip(coordinates);
    }
  });
}


/***/ }),

/***/ "./src/renderBoard.js":
/*!****************************!*\
  !*** ./src/renderBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderBoard)
/* harmony export */ });
function renderBoard(gameBoard) {
  const newDOMBoard = document.createElement('div');
  newDOMBoard.classList.toggle('board');

  gameBoard.board.forEach((row) => {
    const domRow = document.createElement('div');
    domRow.classList.toggle('row');

    row.forEach((cell) => {
      const domCell = document.createElement('button');
      domCell.classList.toggle('cell');

      const y = gameBoard.board.indexOf(row);
      const x = gameBoard.board[y].indexOf(cell);

      gameBoard.attacksReceived.forEach((attack) => {
        if (attack[0] === x && attack[1] === y) {
          if (typeof cell[0] === 'object') {
            domCell.textContent = 'X';
            domCell.classList.toggle('hit');
          } else {
            domCell.textContent = 'O';
            domCell.classList.toggle('miss');
          }
        }
      });

      // populate domCells with something to indicate presence of ship
      if (!gameBoard.player.name === 'Computer') {
        if (typeof cell[0] === 'object') domCell.textContent = 'S';
      }

      if (gameBoard.player.name === 'Computer') {
        if (domCell.textContent !== 'O' && domCell.textContent !== 'X') {
          domCell.addEventListener('click', () => {
            gameBoard.receiveAttack([x, y]);
            gameBoard.player.takeTurn();
          });
        }
      }

      domRow.appendChild(domCell);
    });

    newDOMBoard.appendChild(domRow);
  });

  return newDOMBoard;
}


/***/ }),

/***/ "./src/renderBoards.js":
/*!*****************************!*\
  !*** ./src/renderBoards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderBoards)
/* harmony export */ });
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoard */ "./src/renderBoard.js");


const domGameboards = document.querySelector('.gameboards');

function renderBoards(gameboards) {
  domGameboards.innerHTML = '';

  const domComputerBoard = (0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(gameboards[0], 'computer');
  domGameboards.appendChild(domComputerBoard);

  const domPlayerBoard = (0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(gameboards[1]);
  domGameboards.appendChild(domPlayerBoard);
}


/***/ }),

/***/ "./src/renderMessage.js":
/*!******************************!*\
  !*** ./src/renderMessage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMessage)
/* harmony export */ });
const domMessage = document.querySelector('.message');

function renderMessage(message) {
  domMessage.textContent = message;
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ship)
/* harmony export */ });
function ship(length) {
  let hits = 0;

  function hit() {
    hits += 1;
  }

  function isSunk() {
    return hits === length;
  }

  return {
    hit,
    isSunk,
  };
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");
/* harmony import */ var _playerPlaceShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerPlaceShips */ "./src/playerPlaceShips.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// const startGameDialog = document.querySelector('.start-dialog');
// startGameDialog.showModal();

// startGameDialog.addEventListener('click', () => {
//   const startButton = document.createElement('button');
//   startButton.classList.toggle('start-button');
//   startButton.addEventListener('click', () => {
//     gameLoop();
//     playerPlaceShips();
//   });
//   startGameDialog.appendChild(startButton);
//   startGameDialog.close();
// });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9jb21wdXRlclBsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9kaXNwbGF5TmFtZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3BsYXllclBsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9yZW5kZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3JlbmRlckJvYXJkcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3JlbmRlck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NnB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaDEge1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGxheS1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZ2FtZWJvYXJkcyB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMnB4O1xufVxuXG4uYm9hcmQge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBjb2xvcjogYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xufVxuXG4uY2VsbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC41NDIpO1xufVxuXG4ucGxheWVyMiB7XG4gIG1hcmdpbjogMTZweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBsYXllcjEge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOTZweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5oMSB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5LWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnJvdyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAuNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGNvbG9yOiBibHVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzMiwgMjMyKTtcXG59XFxuXFxuLmNlbGw6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxMjgsIDEyOCwgMC41NDIpO1xcbn1cXG5cXG4ucGxheWVyMiB7XFxuICBtYXJnaW46IDE2cHg7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyMSB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZXJQbGFjZVNoaXBzKGNvbXB1dGVyR2FtZWJvYXJkKSB7XG4gIGZ1bmN0aW9uIHJhbmRvbWx5UGxhY2VTaGlwKHNoaXApIHtcbiAgICBsZXQgaG9yaXpvbnRhbE9yVmVydGljYWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuXG4gICAgaWYgKGhvcml6b250YWxPclZlcnRpY2FsID4gNTApIHtcbiAgICAgIGhvcml6b250YWxPclZlcnRpY2FsID0gJ2hvcml6b250YWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBob3Jpem9udGFsT3JWZXJ0aWNhbCA9ICd2ZXJ0aWNhbCc7XG4gICAgfVxuXG4gICAgY29uc3QgeFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgY29uc3QgeVN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgbGV0IHhFbmQ7XG4gICAgbGV0IHlFbmQ7XG5cbiAgICBpZiAoaG9yaXpvbnRhbE9yVmVydGljYWwgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgeUVuZCA9IHlTdGFydDtcbiAgICAgIHhFbmQgPSB4U3RhcnQ7XG4gICAgICBpZiAoeFN0YXJ0ICsgc2hpcCA8IDkpIHhFbmQgLT0gMTtcbiAgICAgIGlmICh4U3RhcnQgKyBzaGlwID4gOSkgeEVuZCArPSAxO1xuICAgIH1cblxuICAgIGlmIChob3Jpem9udGFsT3JWZXJ0aWNhbCA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgeEVuZCA9IHhTdGFydDtcbiAgICAgIHlFbmQgPSB5U3RhcnQ7XG4gICAgICBpZiAoeVN0YXJ0ICsgc2hpcCA8IDkpIHlFbmQgLT0gMTtcbiAgICAgIGlmICh5U3RhcnQgKyBzaGlwID4gOSkgeUVuZCArPSAxO1xuICAgIH1cblxuICAgIGlmIChjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoW3hTdGFydCwgeVN0YXJ0LCB4RW5kLCB5RW5kXSkgPT09IG51bGwpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNoaXBMZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdO1xuXG4gIHNoaXBMZW5ndGhzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gcmFuZG9tbHlQbGFjZVNoaXAoc2hpcCk7XG5cbiAgICB3aGlsZSAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICByZXN1bHQgPSByYW5kb21seVBsYWNlU2hpcChzaGlwKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiY29uc3QgZG9tUGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxJyk7XG5jb25zdCBkb21QbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjInKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU5hbWVzKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgZG9tUGxheWVyMS50ZXh0Q29udGVudCA9IHBsYXllcjEubmFtZTtcbiAgZG9tUGxheWVyMi50ZXh0Q29udGVudCA9IHBsYXllcjIubmFtZTtcbn1cbiIsImltcG9ydCByZW5kZXJCb2FyZHMgZnJvbSAnLi9yZW5kZXJCb2FyZHMnO1xuaW1wb3J0IHJlbmRlck1lc3NhZ2UgZnJvbSAnLi9yZW5kZXJNZXNzYWdlJztcbmltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgZGlzcGxheU5hbWVzIGZyb20gJy4vZGlzcGxheU5hbWVzJztcbmltcG9ydCBjb21wdXRlclBsYWNlU2hpcHMgZnJvbSAnLi9jb21wdXRlclBsYWNlU2hpcHMnO1xuaW1wb3J0IHBsYXllclBsYWNlU2hpcHMgZnJvbSAnLi9wbGF5ZXJQbGFjZVNoaXBzJztcblxuY29uc3QgcGxheWVyMSA9IHBsYXllcignUGxheWVyIDEnKTtcbmNvbnN0IHBsYXllcjIgPSBwbGF5ZXIoJ0NvbXB1dGVyJywgJ2NvbXB1dGVyJyk7XG5cbmRpc3BsYXlOYW1lcyhwbGF5ZXIxLCBwbGF5ZXIyKTtcblxuY29uc3QgcGxheWVyMUdhbWVCb2FyZCA9IGdhbWVib2FyZCgpO1xuY29uc3QgcGxheWVyMkdhbWVCb2FyZCA9IGdhbWVib2FyZCgpO1xuY29tcHV0ZXJQbGFjZVNoaXBzKHBsYXllcjJHYW1lQm9hcmQpO1xucGxheWVyUGxhY2VTaGlwcyhwbGF5ZXIxR2FtZUJvYXJkKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUxvb3AoY3VycmVudFBsYXllciA9IHBsYXllcjEpIHtcbiAgcmVuZGVyQm9hcmRzKFtwbGF5ZXIyR2FtZUJvYXJkLCBwbGF5ZXIxR2FtZUJvYXJkXSk7XG5cbiAgbGV0IG1lc3NhZ2UgPSBgJHtjdXJyZW50UGxheWVyLm5hbWV9J3MgdHVybi5gO1xuICByZW5kZXJNZXNzYWdlKG1lc3NhZ2UpO1xuXG4gIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIyR2FtZUJvYXJkKSB7XG4gICAgbWVzc2FnZSA9IGAke3BsYXllcjIubmFtZX0ncyB0dXJuLmA7XG4gICAgcmVuZGVyTWVzc2FnZShtZXNzYWdlKTtcbiAgICBpZiAocGxheWVyMkdhbWVCb2FyZC5mbGVldElzU3VuaygpKSB7XG4gICAgICBtZXNzYWdlID0gYCR7cGxheWVyMS5uYW1lfSB3aW5zIWA7XG4gICAgICByZXR1cm4gcmVuZGVyTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBsYXllcjIudGFrZVR1cm4ocGxheWVyMUdhbWVCb2FyZCk7XG4gICAgICBnYW1lTG9vcChwbGF5ZXIxKTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjFHYW1lQm9hcmQpIHtcbiAgICBpZiAocGxheWVyMUdhbWVCb2FyZC5mbGVldElzU3VuaygpKSB7XG4gICAgICBtZXNzYWdlID0gYCR7cGxheWVyMi5uYW1lfSBpcyB0aGUgV2lubmVyYDtcbiAgICAgIHJldHVybiByZW5kZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWJvYXJkKCkge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIHJvdy5wdXNoKFtdKTtcbiAgICB9XG4gICAgYm9hcmQucHVzaChyb3cpO1xuICB9XG5cbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgYXR0YWNrc1JlY2VpdmVkID0gW107XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeFN0YXJ0ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeVN0YXJ0ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgY29uc3QgeEVuZCA9IGNvb3JkaW5hdGVzWzJdO1xuICAgIGNvbnN0IHlFbmQgPSBjb29yZGluYXRlc1szXTtcblxuICAgIGlmICh4RW5kID4geFN0YXJ0IHx8IHlFbmQgPiB5U3RhcnQpIHtcbiAgICAgIGZvciAobGV0IHlJZk9jY3VwaWVkID0geVN0YXJ0OyB5SWZPY2N1cGllZCA8PSB5RW5kOyB5SWZPY2N1cGllZCArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHhJZk9jY3VwaWVkID0geFN0YXJ0OyB4SWZPY2N1cGllZCA8PSB4RW5kOyB4SWZPY2N1cGllZCArPSAxKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW3lJZk9jY3VwaWVkXVt4SWZPY2N1cGllZF1bMF0gIT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBsZW5ndGggPSB4RW5kIC0geFN0YXJ0ICsgMTtcbiAgICAgIGlmIChsZW5ndGggPT09IDEpIGxlbmd0aCA9IHlFbmQgLSB5U3RhcnQgKyAxO1xuXG4gICAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW5ndGgpO1xuICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcblxuICAgICAgZm9yIChsZXQgeSA9IHlTdGFydDsgeSA8PSB5RW5kOyB5ICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IHhTdGFydDsgeCA8PSB4RW5kOyB4ICs9IDEpIHtcbiAgICAgICAgICBib2FyZFt5XVt4XVswXSA9IG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeEVuZCA8IHhTdGFydCB8fCB5RW5kIDwgeVN0YXJ0KSB7XG4gICAgICBmb3IgKGxldCB5SWZPY2N1cGllZCA9IHlFbmQ7IHlJZk9jY3VwaWVkIDw9IHlTdGFydDsgeUlmT2NjdXBpZWQgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCB4SWZPY2N1cGllZCA9IHhFbmQ7IHhJZk9jY3VwaWVkIDw9IHhTdGFydDsgeElmT2NjdXBpZWQgKz0gMSkge1xuICAgICAgICAgIGlmIChib2FyZFt5SWZPY2N1cGllZF1beElmT2NjdXBpZWRdWzBdID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoYm9hcmRbeUlmT2NjdXBpZWRdW3hJZk9jY3VwaWVkXVswXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgbGVuZ3RoID0geFN0YXJ0IC0geEVuZCArIDE7XG4gICAgICBpZiAobGVuZ3RoID09PSAxKSBsZW5ndGggPSB5U3RhcnQgLSB5RW5kICsgMTtcblxuICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG5cbiAgICAgIGZvciAobGV0IHkgPSB5RW5kOyB5IDw9IHlTdGFydDsgeSArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IHggPSB4RW5kOyB4IDw9IHhTdGFydDsgeCArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbeV1beF1bMF0gPSBuZXdTaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGNvbnN0IHggPSBjb29yZGluYXRlc1swXTtcbiAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMV07XG5cbiAgICBjb25zdCBhdHRhY2tlZENlbGwgPSBib2FyZFt5XVt4XTtcblxuICAgIGxldCBuZXdBdHRhY2sgPSB0cnVlO1xuICAgIGF0dGFja3NSZWNlaXZlZC5mb3JFYWNoKChhdHRhY2spID0+IHtcbiAgICAgIGlmIChhdHRhY2tbMF0gPT09IHggJiYgYXR0YWNrWzFdID09PSB5KSBuZXdBdHRhY2sgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmICghbmV3QXR0YWNrKSByZXR1cm4gbnVsbDtcblxuICAgIGlmIChuZXdBdHRhY2spIHtcbiAgICAgIGF0dGFja3NSZWNlaXZlZC5wdXNoKFt4LCB5XSk7XG4gICAgICBpZiAoYXR0YWNrZWRDZWxsWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXR0YWNrZWRDZWxsWzBdLmhpdCgpO1xuICAgICAgICByZXR1cm4gJ0hpdCc7XG4gICAgICB9XG4gICAgICAvLyBkbyBzb21ldGhpbmcgd2hlbiBhbiBhdHRhY2sgbWlzc2VzXG4gICAgICBhdHRhY2tlZENlbGxbMF0gPSAnWCc7XG4gICAgICByZXR1cm4gJ01pc3MnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZsZWV0SXNTdW5rKCkge1xuICAgIGxldCBudW1iZXJPZlN1bmtlblNoaXBzID0gMDtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBJbkZsZWV0KSA9PiB7XG4gICAgICBpZiAoc2hpcEluRmxlZXQuaXNTdW5rKCkpIG51bWJlck9mU3Vua2VuU2hpcHMgKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBudW1iZXJPZlN1bmtlblNoaXBzID09PSBzaGlwcy5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4geyBib2FyZCwgYXR0YWNrc1JlY2VpdmVkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGZsZWV0SXNTdW5rIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5ZXIobmFtZSkge1xuICBmdW5jdGlvbiBnZXRSYW5kb21Db29yZGluYXRlcygpIHtcbiAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGVzID0gW3JhbmRvbVgsIHJhbmRvbVldO1xuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRha2VUdXJuKGVuZW15R2FtZWJvYXJkLCBjb29yZGluYXRlcykge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoY29vcmRpbmF0ZXMpIHJlc3VsdCA9IGVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKCFjb29yZGluYXRlcykge1xuICAgICAgbGV0IHJhbmRvbUNvb3JkaW5hdGVzID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgICAgIHJlc3VsdCA9IGVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tQ29vcmRpbmF0ZXMpO1xuICAgICAgd2hpbGUgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICByYW5kb21Db29yZGluYXRlcyA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICAgIHJlc3VsdCA9IGVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tQ29vcmRpbmF0ZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgdGFrZVR1cm4gfTtcbn1cbiIsImltcG9ydCByZW5kZXJCb2FyZHMgZnJvbSAnLi9yZW5kZXJCb2FyZHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5ZXJQbGFjZVNoaXBzKHBsYXllckdhbWVib2FyZCkge1xuICBmdW5jdGlvbiBwcm9tcHRUb1BsYWNlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXlxcZCsoLFxcZCspKiQvO1xuXG4gICAgbGV0IHN0YXJ0Q29vcmRpbmF0ZSA9IHByb21wdCgnV2hlcmUgZG8geW91IHdhbnQgeW91ciBzaGlwIHRvIHN0YXJ0PyAoeCx5KScpO1xuXG4gICAgd2hpbGUgKHJlZ2V4LnRlc3Qoc3RhcnRDb29yZGluYXRlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHN0YXJ0Q29vcmRpbmF0ZSA9IHByb21wdChcbiAgICAgICAgJ0VSUk9SIDogVXNlIGNvcnJlY3QgZm9ybWF0IGZvciBzdGFydCBjb29yZGluYXRlLiAoeCx5KSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGVuZENvb3JkaW5hdGUgPSBwcm9tcHQoJ1doZXJlIGRvIHlvdSB3YW50IHlvdXIgc2hpcCB0byBlbmQ/ICh4LHkpJyk7XG5cbiAgICB3aGlsZSAocmVnZXgudGVzdChlbmRDb29yZGluYXRlKSAhPT0gdHJ1ZSkge1xuICAgICAgZW5kQ29vcmRpbmF0ZSA9IHByb21wdChcbiAgICAgICAgJ0VSUk9SOiBVc2UgY29ycmVjdCBmb3JtYXQgZm9yIGVuZCBjb29yZGluYXRlLiAoeCx5KSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSBzdGFydENvb3JkaW5hdGUuc3BsaXQoJywnKTtcbiAgICBjb25zdCBlbmQgPSBlbmRDb29yZGluYXRlLnNwbGl0KCcsJyk7XG5cbiAgICBjb25zdCB4U3RhcnQgPSArc3RhcnRbMF07XG4gICAgY29uc3QgeVN0YXJ0ID0gK3N0YXJ0WzFdO1xuICAgIGNvbnN0IHhFbmQgPSArZW5kWzBdO1xuICAgIGNvbnN0IHlFbmQgPSArZW5kWzFdO1xuXG4gICAgY29uc29sZS5sb2coW3hTdGFydCwgeVN0YXJ0LCB4RW5kLCB5RW5kXSk7XG5cbiAgICByZXR1cm4gW3hTdGFydCwgeVN0YXJ0LCB4RW5kLCB5RW5kXTtcbiAgfVxuXG4gIGNvbnN0IHNoaXBMZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdO1xuXG4gIHNoaXBMZW5ndGhzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSBwcm9tcHRUb1BsYWNlU2hpcChzaGlwKTtcbiAgICBsZXQgcmVzdWx0ID0gcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcChjb29yZGluYXRlcyk7XG4gICAgd2hpbGUgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgYWxlcnQoJ0Nhbm5vdCBvdmVybGFwIG9yIHBsYWNlIHNoaXBzIG9uIHRvcCBvZmYgZWFjaCBvdGhlci4nKTtcbiAgICAgIGNvb3JkaW5hdGVzID0gcHJvbXB0VG9QbGFjZVNoaXAoc2hpcCk7XG4gICAgICByZXN1bHQgPSBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQm9hcmQoZ2FtZUJvYXJkKSB7XG4gIGNvbnN0IG5ld0RPTUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0RPTUJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2JvYXJkJyk7XG5cbiAgZ2FtZUJvYXJkLmJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGNvbnN0IGRvbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvbVJvdy5jbGFzc0xpc3QudG9nZ2xlKCdyb3cnKTtcblxuICAgIHJvdy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBkb21DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkb21DZWxsLmNsYXNzTGlzdC50b2dnbGUoJ2NlbGwnKTtcblxuICAgICAgY29uc3QgeSA9IGdhbWVCb2FyZC5ib2FyZC5pbmRleE9mKHJvdyk7XG4gICAgICBjb25zdCB4ID0gZ2FtZUJvYXJkLmJvYXJkW3ldLmluZGV4T2YoY2VsbCk7XG5cbiAgICAgIGdhbWVCb2FyZC5hdHRhY2tzUmVjZWl2ZWQuZm9yRWFjaCgoYXR0YWNrKSA9PiB7XG4gICAgICAgIGlmIChhdHRhY2tbMF0gPT09IHggJiYgYXR0YWNrWzFdID09PSB5KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjZWxsWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZG9tQ2VsbC50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGRvbUNlbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaGl0Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbUNlbGwudGV4dENvbnRlbnQgPSAnTyc7XG4gICAgICAgICAgICBkb21DZWxsLmNsYXNzTGlzdC50b2dnbGUoJ21pc3MnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBwb3B1bGF0ZSBkb21DZWxscyB3aXRoIHNvbWV0aGluZyB0byBpbmRpY2F0ZSBwcmVzZW5jZSBvZiBzaGlwXG4gICAgICBpZiAoIWdhbWVCb2FyZC5wbGF5ZXIubmFtZSA9PT0gJ0NvbXB1dGVyJykge1xuICAgICAgICBpZiAodHlwZW9mIGNlbGxbMF0gPT09ICdvYmplY3QnKSBkb21DZWxsLnRleHRDb250ZW50ID0gJ1MnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2FtZUJvYXJkLnBsYXllci5uYW1lID09PSAnQ29tcHV0ZXInKSB7XG4gICAgICAgIGlmIChkb21DZWxsLnRleHRDb250ZW50ICE9PSAnTycgJiYgZG9tQ2VsbC50ZXh0Q29udGVudCAhPT0gJ1gnKSB7XG4gICAgICAgICAgZG9tQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XG4gICAgICAgICAgICBnYW1lQm9hcmQucGxheWVyLnRha2VUdXJuKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZG9tUm93LmFwcGVuZENoaWxkKGRvbUNlbGwpO1xuICAgIH0pO1xuXG4gICAgbmV3RE9NQm9hcmQuYXBwZW5kQ2hpbGQoZG9tUm93KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0RPTUJvYXJkO1xufVxuIiwiaW1wb3J0IHJlbmRlckJvYXJkIGZyb20gJy4vcmVuZGVyQm9hcmQnO1xuXG5jb25zdCBkb21HYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQm9hcmRzKGdhbWVib2FyZHMpIHtcbiAgZG9tR2FtZWJvYXJkcy5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBkb21Db21wdXRlckJvYXJkID0gcmVuZGVyQm9hcmQoZ2FtZWJvYXJkc1swXSwgJ2NvbXB1dGVyJyk7XG4gIGRvbUdhbWVib2FyZHMuYXBwZW5kQ2hpbGQoZG9tQ29tcHV0ZXJCb2FyZCk7XG5cbiAgY29uc3QgZG9tUGxheWVyQm9hcmQgPSByZW5kZXJCb2FyZChnYW1lYm9hcmRzWzFdKTtcbiAgZG9tR2FtZWJvYXJkcy5hcHBlbmRDaGlsZChkb21QbGF5ZXJCb2FyZCk7XG59XG4iLCJjb25zdCBkb21NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVzc2FnZShtZXNzYWdlKSB7XG4gIGRvbU1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcChsZW5ndGgpIHtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICBoaXRzICs9IDE7XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIGhpdHMgPT09IGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnYW1lTG9vcCBmcm9tICcuL2dhbWVMb29wJztcbmltcG9ydCBwbGF5ZXJQbGFjZVNoaXBzIGZyb20gJy4vcGxheWVyUGxhY2VTaGlwcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gY29uc3Qgc3RhcnRHYW1lRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWRpYWxvZycpO1xuLy8gc3RhcnRHYW1lRGlhbG9nLnNob3dNb2RhbCgpO1xuXG4vLyBzdGFydEdhbWVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4vLyAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXJ0LWJ1dHRvbicpO1xuLy8gICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBnYW1lTG9vcCgpO1xuLy8gICAgIHBsYXllclBsYWNlU2hpcHMoKTtcbi8vICAgfSk7XG4vLyAgIHN0YXJ0R2FtZURpYWxvZy5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4vLyAgIHN0YXJ0R2FtZURpYWxvZy5jbG9zZSgpO1xuLy8gfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=