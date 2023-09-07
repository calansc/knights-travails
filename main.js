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
    margin:0px;
    padding:0px;
}
.page {
    display:grid;
    grid-template-columns:;
}
.index {
    text-align: center;
    margin: 20px;
}
.title {
    font-weight: bold;
    font-size: 2rem;
}
.instructions {}
.play {}

.board {
    display:grid;
    grid-template-rows: auto auto;
    grid-template-columns:15vw 65vw 15vw;
    justify-content: center;
}
.row {
    grid-area: 1 / 2 / 2 / 3;
    display:grid;
    grid-auto-flow: column;
    text-align: center;
}
.rowHeader {
    width: calc(1/8 * 65vw);
}
.column {
    grid-area: 2 / 1 / 3 / 2;
    display: grid;
    padding-right:4px;
    
}
.columnHeader {
    /* height: calc(1/8 * 65vw); */
    align-self:center;
    text-align: right;
    

}
.squares {
    grid-area: 2/ 2 / 3 / 3;
    display: grid;
    height:auto;
    width: auto ;
    grid-template-columns: max-content max-content max-content max-content max-content max-content max-content max-content;
    gap:0px;
    margin:0px;
    padding:0px;
    border:0px;
    overflow:clip;
}
.whiteSquare {
    background-color: white;
    height: calc(1/8 * 65vw);
    width: calc(1/8 * 65vw);
}
.blackSquare {
    background-color: gray;
    height: calc(1/8 * 65vw);
    width: calc(1/8 * 65vw);
}
.visited {
    display: grid;
    color:red;
    font-weight: bold;
    text-align: center;
    font-size: 2.5rem;
    align-items: center;
}
.results {
    margin:20px;
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,iBAAiB;IACjB,eAAe;AACnB;AACA,eAAe;AACf,OAAO;;AAEP;IACI,YAAY;IACZ,6BAA6B;IAC7B,oCAAoC;IACpC,uBAAuB;AAC3B;AACA;IACI,wBAAwB;IACxB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,iBAAiB;;AAErB;AACA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,iBAAiB;;;AAGrB;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,YAAY;IACZ,sHAAsH;IACtH,OAAO;IACP,UAAU;IACV,WAAW;IACX,UAAU;IACV,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,SAAS;IACT,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,kBAAkB;AACtB","sourcesContent":["* {\n    margin:0px;\n    padding:0px;\n}\n.page {\n    display:grid;\n    grid-template-columns:;\n}\n.index {\n    text-align: center;\n    margin: 20px;\n}\n.title {\n    font-weight: bold;\n    font-size: 2rem;\n}\n.instructions {}\n.play {}\n\n.board {\n    display:grid;\n    grid-template-rows: auto auto;\n    grid-template-columns:15vw 65vw 15vw;\n    justify-content: center;\n}\n.row {\n    grid-area: 1 / 2 / 2 / 3;\n    display:grid;\n    grid-auto-flow: column;\n    text-align: center;\n}\n.rowHeader {\n    width: calc(1/8 * 65vw);\n}\n.column {\n    grid-area: 2 / 1 / 3 / 2;\n    display: grid;\n    padding-right:4px;\n    \n}\n.columnHeader {\n    /* height: calc(1/8 * 65vw); */\n    align-self:center;\n    text-align: right;\n    \n\n}\n.squares {\n    grid-area: 2/ 2 / 3 / 3;\n    display: grid;\n    height:auto;\n    width: auto ;\n    grid-template-columns: max-content max-content max-content max-content max-content max-content max-content max-content;\n    gap:0px;\n    margin:0px;\n    padding:0px;\n    border:0px;\n    overflow:clip;\n}\n.whiteSquare {\n    background-color: white;\n    height: calc(1/8 * 65vw);\n    width: calc(1/8 * 65vw);\n}\n.blackSquare {\n    background-color: gray;\n    height: calc(1/8 * 65vw);\n    width: calc(1/8 * 65vw);\n}\n.visited {\n    display: grid;\n    color:red;\n    font-weight: bold;\n    text-align: center;\n    font-size: 2.5rem;\n    align-items: center;\n}\n.results {\n    margin:20px;\n    text-align: center;\n}"],"sourceRoot":""}]);
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

/***/ "./src/Chess-Knight.svg":
/*!******************************!*\
  !*** ./src/Chess-Knight.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "523bf07d4fda774067f6.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Chess_Knight_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chess-Knight.svg */ "./src/Chess-Knight.svg");



// let knightPos = [0, 0];
//knight can make up to 8 possible moves:
//[+2,+1], [+1,+2], [+2,-1], [+1,-2], [-1,-2], [-2,-1], [-2,+1], [-1,+2]
let possibleMoves = [
  [2, 1],
  [1, 2],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];
let arrayX = [0, 1, 2, 3, 4, 5, 6, 7];
let arrayY = [0, 1, 2, 3, 4, 5, 6, 7];
let alphaX = ["A", "B", "C", "D", "E", "F", "G", "H"];
let boardGraph = {};
let tempDict = {};
let startPoint = null;
let endPoint = null;

// function buildHtmlBoard() {
//   let bw = "whiteSquare";
//   let squares = document.getElementsByClassName("squares");
//   for (let i = 0; i < arrayX.length; i++) {
//     let x = arrayX[i];
//     if (x & 1) {
//       bw = "whiteSquare";
//     } else bw = "blackSquare";
//     for (let j = 0; j < arrayY.length; j++) {
//       let y = arrayY[j];
//       let square = document.createElement("div");
//       square.classList.add(bw);
//       if (bw === "whiteSquare") {
//         bw = "blackSquare";
//       } else bw = "whiteSquare";
//       let squareId = alphaX[x] + y;
//       square.setAttribute("id", squareId);
//       square.addEventListener(
//         "click",
//         function () {
//           boardListener(squareId);
//         },
//         false
//       );
//       squares[0].appendChild(square);
//     }
//   }
// }
function buildHtmlBoard() {
  let bw = "whiteSquare";
  let squares = document.getElementsByClassName("squares");
  for (let i = 0; i < arrayY.length; i++) {
    let y = arrayY[i];
    if (y & 1) {
      bw = "whiteSquare";
    } else bw = "blackSquare";
    for (let j = 0; j < arrayX.length; j++) {
      let x = arrayX[j];
      let square = document.createElement("div");
      square.classList.add(bw);
      if (bw === "whiteSquare") {
        bw = "blackSquare";
      } else bw = "whiteSquare";
      let squareId = alphaX[x] + y;
      square.setAttribute("id", squareId);
      square.addEventListener(
        "click",
        function () {
          boardListener(squareId);
        },
        false
      );
      squares[0].appendChild(square);
    }
  }
  let row = document.getElementsByClassName("row");
  for (let i = 0; i < alphaX.length; i++) {
    let rowHeader = document.createElement("div");
    rowHeader.classList.add("rowHeader");
    rowHeader.textContent = alphaX[i];
    row[0].appendChild(rowHeader);
  }
  let column = document.getElementsByClassName("column");
  for (let i = 0; i < arrayY.length; i++) {
    let columnHeader = document.createElement("div");
    columnHeader.classList.add("columnHeader");
    columnHeader.textContent = arrayY[i];
    column[0].appendChild(columnHeader);
  }
}
buildHtmlBoard();

function boardListener(squareId) {
  if (startPoint === null) {
    boardReset();
    startPoint = squareId;
    let start = document.getElementsByClassName("start");
    start[0].textContent = "Starting Point: " + startPoint;
    let startImage = document.getElementById(startPoint);
    let image = new Image();
    image.src = _Chess_Knight_svg__WEBPACK_IMPORTED_MODULE_1__;
    startImage.appendChild(image);
    // console.log("start" + squareId);
  } else if (endPoint === null) {
    endPoint = squareId;
    let end = document.getElementsByClassName("end");
    end[0].textContent = "Ending Point: " + endPoint;
    // console.log("end" + endPoint);
    let results = findShortestPath(boardGraph, startPoint, endPoint);
    // console.log(results);
    let endImage = document.getElementById(endPoint);
    let image = new Image();
    image.src = _Chess_Knight_svg__WEBPACK_IMPORTED_MODULE_1__;
    endImage.appendChild(image);
    startPoint = null;
    endPoint = null;
    let distance = document.getElementsByClassName("distance");
    let path = document.getElementsByClassName("path");
    distance[0].textContent = "Distance: " + results.distance + " moves";
    path[0].textContent = "Path: " + results.path;
    knightBoardDisplay(results);
  }
}

function knightBoardDisplay(results) {
  // console.log(results.path);
  for (let i = 1; i < results.path.length - 1; i++) {
    // console.log(results.path[i]);
    let square = document.getElementById(results.path[i]);
    square.textContent = i;
    square.classList.add("visited");
  }
}

function boardReset() {
  let whiteSquare = document.getElementsByClassName("whiteSquare");
  let blackSquare = document.getElementsByClassName("blackSquare");
  for (let i = 0; i < whiteSquare.length; i++) {
    whiteSquare.item(i).textContent = "";
    whiteSquare.item(i).classList.remove("visited");
  }
  for (let i = 0; i < blackSquare.length; i++) {
    blackSquare.item(i).textContent = "";
    blackSquare.item(i).classList.remove("visited");
  }
  let end = document.getElementsByClassName("end");
  let distance = document.getElementsByClassName("distance");
  let path = document.getElementsByClassName("path");
  end[0].textContent = "Ending Point:";
  distance[0].textContent = "Distance:";
  path[0].textContent = "Path";
}
// get reference to squares class, appendChildren.
// assign each square a black/white class to alternate
// assign each square an id with its coordinate A0,A1,B0 etc

// function component() {
//   const element = document.createElement("div");
//   element.innerText = "Knights Travails Project";
//   const description = document.createElement("div");
//   description.innerText =
//     "Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.";
//   element.appendChild(description);
//   return element;
// }

// document.body.appendChild(component());

function buildBoardGraph() {
  // each loop adds to object
  // validate within 0-7
  for (let i = 0; i < arrayX.length; i++) {
    let x = arrayX[i];
    let alpha = alphaX[x];
    let alpha3;
    for (let j = 0; j < arrayY.length; j++) {
      let y = arrayY[j];
      let xy = [x, y];
      let arrayXY = [];
      for (let k = 0; k < possibleMoves.length; k++) {
        let x1 = x + possibleMoves[k][0];
        let y1 = y + possibleMoves[k][1];

        if (x1 >= 0 && 7 >= x1 && y1 >= 0 && 7 >= y1) {
          let alpha2 = alphaX[x1];
          arrayXY.push(alpha2 + y1);
          // arrayXY.push(alpha2 + y1 + ":1");
          alpha3 = alpha + y;
          tempDict = {};
          for (let l = 0; l < arrayXY.length; l++) {
            tempDict[arrayXY[l]] = 1;
            boardGraph[alpha3] = tempDict;
          }
        }
      }

      // console.log("{" + alpha + y + ": {" + arrayXY + "}}");

      // assign format: graph2 = Object.assign({A0: {C1:1,B2:1}},boardGraph)
      // alerts = Object.assign({3: {app:'helloagain_again',message:'yet another message'}}, alerts)
      // boardGraph = Object.assign({ arrayXY }, boardGraph);
      // console.log(boardGraph);
    }
  }
  // return boardGraph;
}
buildBoardGraph();
console.log(boardGraph);

// let graph = {
//   start: { A: 5, B: 2 },
//   A: { start: 1, C: 4, D: 2 },
//   B: { A: 8, D: 7 },
//   C: { D: 6, finish: 3 },
//   D: { finish: 1 },
//   finish: {},
// };

function shortestDistanceNode(distances, visited) {
  let shortest = null;
  for (let node in distances) {
    let currentIsShortest =
      shortest === null || distances[node] < distances[shortest];
    if (currentIsShortest && !visited.includes(node)) {
      shortest = node;
    }
  }
  return shortest;
}

function findShortestPath(graph, startNode, endNode) {
  let distances = {};
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, graph[startNode]);

  let parents = { endNode: null };
  for (let child in graph[startNode]) {
    parents[child] = startNode;
  }

  let visited = [];

  let node = shortestDistanceNode(distances, visited);

  while (node) {
    let distance = distances[node];
    let children = graph[node];
    for (let child in children) {
      if (String(child) === String(startNode)) {
        continue;
      } else {
        let newDistance = distance + children[child];
        if (!distances[child] || distances[child] > newDistance) {
          distances[child] = newDistance;
          parents[child] = node;
        }
      }
    }
    visited.push(node);
    node = shortestDistanceNode(distances, visited);
  }
  let shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }
  shortestPath.reverse();

  let results = {
    distance: distances[endNode],
    path: shortestPath,
  };
  return results;
}
console.log(findShortestPath(boardGraph, "A0", "A1"));
console.log(findShortestPath(boardGraph, "A7", "H0"));

function knightMoves(start, end) {}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sVUFBVSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxlQUFlLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksNkJBQTZCLGlCQUFpQixrQkFBa0IsR0FBRyxTQUFTLG1CQUFtQiw2QkFBNkIsR0FBRyxVQUFVLHlCQUF5QixtQkFBbUIsR0FBRyxVQUFVLHdCQUF3QixzQkFBc0IsR0FBRyxrQkFBa0IsVUFBVSxZQUFZLG1CQUFtQixvQ0FBb0MsMkNBQTJDLDhCQUE4QixHQUFHLFFBQVEsK0JBQStCLG1CQUFtQiw2QkFBNkIseUJBQXlCLEdBQUcsY0FBYyw4QkFBOEIsR0FBRyxXQUFXLCtCQUErQixvQkFBb0Isd0JBQXdCLFNBQVMsaUJBQWlCLG1DQUFtQywwQkFBMEIsd0JBQXdCLFdBQVcsWUFBWSw4QkFBOEIsb0JBQW9CLGtCQUFrQixtQkFBbUIsNkhBQTZILGNBQWMsaUJBQWlCLGtCQUFrQixpQkFBaUIsb0JBQW9CLEdBQUcsZ0JBQWdCLDhCQUE4QiwrQkFBK0IsOEJBQThCLEdBQUcsZ0JBQWdCLDZCQUE2QiwrQkFBK0IsOEJBQThCLEdBQUcsWUFBWSxvQkFBb0IsZ0JBQWdCLHdCQUF3Qix5QkFBeUIsd0JBQXdCLDBCQUEwQixHQUFHLFlBQVksa0JBQWtCLHlCQUF5QixHQUFHLG1CQUFtQjtBQUNyeUU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN2RjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ1U7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFNO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQkFBb0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsb0JBQW9CLGlCQUFpQjs7QUFFNUQsZ0RBQWdELEtBQUssV0FBVztBQUNoRSxpQ0FBaUMsSUFBSSxzREFBc0Q7QUFDM0Ysc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLFlBQVk7QUFDMUIsVUFBVSxzQkFBc0I7QUFDaEMsVUFBVSxZQUFZO0FBQ3RCLFVBQVUsaUJBQWlCO0FBQzNCLFVBQVUsV0FBVztBQUNyQixlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzowcHg7XG59XG4ucGFnZSB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczo7XG59XG4uaW5kZXgge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG4udGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5pbnN0cnVjdGlvbnMge31cbi5wbGF5IHt9XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczoxNXZ3IDY1dncgMTV2dztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yb3cge1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucm93SGVhZGVyIHtcbiAgICB3aWR0aDogY2FsYygxLzggKiA2NXZ3KTtcbn1cbi5jb2x1bW4ge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmctcmlnaHQ6NHB4O1xuICAgIFxufVxuLmNvbHVtbkhlYWRlciB7XG4gICAgLyogaGVpZ2h0OiBjYWxjKDEvOCAqIDY1dncpOyAqL1xuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIFxuXG59XG4uc3F1YXJlcyB7XG4gICAgZ3JpZC1hcmVhOiAyLyAyIC8gMyAvIDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICB3aWR0aDogYXV0byA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudDtcbiAgICBnYXA6MHB4O1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzowcHg7XG4gICAgYm9yZGVyOjBweDtcbiAgICBvdmVyZmxvdzpjbGlwO1xufVxuLndoaXRlU3F1YXJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMS84ICogNjV2dyk7XG4gICAgd2lkdGg6IGNhbGMoMS84ICogNjV2dyk7XG59XG4uYmxhY2tTcXVhcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgaGVpZ2h0OiBjYWxjKDEvOCAqIDY1dncpO1xuICAgIHdpZHRoOiBjYWxjKDEvOCAqIDY1dncpO1xufVxuLnZpc2l0ZWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sb3I6cmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlc3VsdHMge1xuICAgIG1hcmdpbjoyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQSxlQUFlO0FBQ2YsT0FBTzs7QUFFUDtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixpQkFBaUI7OztBQUdyQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNIQUFzSDtJQUN0SCxPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgcGFkZGluZzowcHg7XFxufVxcbi5wYWdlIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6O1xcbn1cXG4uaW5kZXgge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmluc3RydWN0aW9ucyB7fVxcbi5wbGF5IHt9XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjE1dncgNjV2dyAxNXZ3O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJvdyB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5yb3dIZWFkZXIge1xcbiAgICB3aWR0aDogY2FsYygxLzggKiA2NXZ3KTtcXG59XFxuLmNvbHVtbiB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZy1yaWdodDo0cHg7XFxuICAgIFxcbn1cXG4uY29sdW1uSGVhZGVyIHtcXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEvOCAqIDY1dncpOyAqL1xcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIFxcblxcbn1cXG4uc3F1YXJlcyB7XFxuICAgIGdyaWQtYXJlYTogMi8gMiAvIDMgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgd2lkdGg6IGF1dG8gO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICBnYXA6MHB4O1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBwYWRkaW5nOjBweDtcXG4gICAgYm9yZGVyOjBweDtcXG4gICAgb3ZlcmZsb3c6Y2xpcDtcXG59XFxuLndoaXRlU3F1YXJlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogY2FsYygxLzggKiA2NXZ3KTtcXG4gICAgd2lkdGg6IGNhbGMoMS84ICogNjV2dyk7XFxufVxcbi5ibGFja1NxdWFyZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGhlaWdodDogY2FsYygxLzggKiA2NXZ3KTtcXG4gICAgd2lkdGg6IGNhbGMoMS84ICogNjV2dyk7XFxufVxcbi52aXNpdGVkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sb3I6cmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJlc3VsdHMge1xcbiAgICBtYXJnaW46MjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEtuaWdodCBmcm9tIFwiLi9DaGVzcy1LbmlnaHQuc3ZnXCI7XG5cbi8vIGxldCBrbmlnaHRQb3MgPSBbMCwgMF07XG4vL2tuaWdodCBjYW4gbWFrZSB1cCB0byA4IHBvc3NpYmxlIG1vdmVzOlxuLy9bKzIsKzFdLCBbKzEsKzJdLCBbKzIsLTFdLCBbKzEsLTJdLCBbLTEsLTJdLCBbLTIsLTFdLCBbLTIsKzFdLCBbLTEsKzJdXG5sZXQgcG9zc2libGVNb3ZlcyA9IFtcbiAgWzIsIDFdLFxuICBbMSwgMl0sXG4gIFsyLCAtMV0sXG4gIFsxLCAtMl0sXG4gIFstMSwgLTJdLFxuICBbLTIsIC0xXSxcbiAgWy0yLCAxXSxcbiAgWy0xLCAyXSxcbl07XG5sZXQgYXJyYXlYID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddO1xubGV0IGFycmF5WSA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XTtcbmxldCBhbHBoYVggPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiXTtcbmxldCBib2FyZEdyYXBoID0ge307XG5sZXQgdGVtcERpY3QgPSB7fTtcbmxldCBzdGFydFBvaW50ID0gbnVsbDtcbmxldCBlbmRQb2ludCA9IG51bGw7XG5cbi8vIGZ1bmN0aW9uIGJ1aWxkSHRtbEJvYXJkKCkge1xuLy8gICBsZXQgYncgPSBcIndoaXRlU3F1YXJlXCI7XG4vLyAgIGxldCBzcXVhcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNxdWFyZXNcIik7XG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlYLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgbGV0IHggPSBhcnJheVhbaV07XG4vLyAgICAgaWYgKHggJiAxKSB7XG4vLyAgICAgICBidyA9IFwid2hpdGVTcXVhcmVcIjtcbi8vICAgICB9IGVsc2UgYncgPSBcImJsYWNrU3F1YXJlXCI7XG4vLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVkubGVuZ3RoOyBqKyspIHtcbi8vICAgICAgIGxldCB5ID0gYXJyYXlZW2pdO1xuLy8gICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChidyk7XG4vLyAgICAgICBpZiAoYncgPT09IFwid2hpdGVTcXVhcmVcIikge1xuLy8gICAgICAgICBidyA9IFwiYmxhY2tTcXVhcmVcIjtcbi8vICAgICAgIH0gZWxzZSBidyA9IFwid2hpdGVTcXVhcmVcIjtcbi8vICAgICAgIGxldCBzcXVhcmVJZCA9IGFscGhhWFt4XSArIHk7XG4vLyAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgc3F1YXJlSWQpO1xuLy8gICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXG4vLyAgICAgICAgIFwiY2xpY2tcIixcbi8vICAgICAgICAgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgIGJvYXJkTGlzdGVuZXIoc3F1YXJlSWQpO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBmYWxzZVxuLy8gICAgICAgKTtcbi8vICAgICAgIHNxdWFyZXNbMF0uYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbmZ1bmN0aW9uIGJ1aWxkSHRtbEJvYXJkKCkge1xuICBsZXQgYncgPSBcIndoaXRlU3F1YXJlXCI7XG4gIGxldCBzcXVhcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNxdWFyZXNcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlZLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHkgPSBhcnJheVlbaV07XG4gICAgaWYgKHkgJiAxKSB7XG4gICAgICBidyA9IFwid2hpdGVTcXVhcmVcIjtcbiAgICB9IGVsc2UgYncgPSBcImJsYWNrU3F1YXJlXCI7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVgubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCB4ID0gYXJyYXlYW2pdO1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChidyk7XG4gICAgICBpZiAoYncgPT09IFwid2hpdGVTcXVhcmVcIikge1xuICAgICAgICBidyA9IFwiYmxhY2tTcXVhcmVcIjtcbiAgICAgIH0gZWxzZSBidyA9IFwid2hpdGVTcXVhcmVcIjtcbiAgICAgIGxldCBzcXVhcmVJZCA9IGFscGhhWFt4XSArIHk7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgc3F1YXJlSWQpO1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJvYXJkTGlzdGVuZXIoc3F1YXJlSWQpO1xuICAgICAgICB9LFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICAgIHNxdWFyZXNbMF0uYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cbiAgbGV0IHJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyb3dcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxwaGFYLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHJvd0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJyb3dIZWFkZXJcIik7XG4gICAgcm93SGVhZGVyLnRleHRDb250ZW50ID0gYWxwaGFYW2ldO1xuICAgIHJvd1swXS5hcHBlbmRDaGlsZChyb3dIZWFkZXIpO1xuICB9XG4gIGxldCBjb2x1bW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29sdW1uXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5WS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjb2x1bW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbHVtbkhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29sdW1uSGVhZGVyXCIpO1xuICAgIGNvbHVtbkhlYWRlci50ZXh0Q29udGVudCA9IGFycmF5WVtpXTtcbiAgICBjb2x1bW5bMF0uYXBwZW5kQ2hpbGQoY29sdW1uSGVhZGVyKTtcbiAgfVxufVxuYnVpbGRIdG1sQm9hcmQoKTtcblxuZnVuY3Rpb24gYm9hcmRMaXN0ZW5lcihzcXVhcmVJZCkge1xuICBpZiAoc3RhcnRQb2ludCA9PT0gbnVsbCkge1xuICAgIGJvYXJkUmVzZXQoKTtcbiAgICBzdGFydFBvaW50ID0gc3F1YXJlSWQ7XG4gICAgbGV0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN0YXJ0XCIpO1xuICAgIHN0YXJ0WzBdLnRleHRDb250ZW50ID0gXCJTdGFydGluZyBQb2ludDogXCIgKyBzdGFydFBvaW50O1xuICAgIGxldCBzdGFydEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RhcnRQb2ludCk7XG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gS25pZ2h0O1xuICAgIHN0YXJ0SW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnRcIiArIHNxdWFyZUlkKTtcbiAgfSBlbHNlIGlmIChlbmRQb2ludCA9PT0gbnVsbCkge1xuICAgIGVuZFBvaW50ID0gc3F1YXJlSWQ7XG4gICAgbGV0IGVuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJlbmRcIik7XG4gICAgZW5kWzBdLnRleHRDb250ZW50ID0gXCJFbmRpbmcgUG9pbnQ6IFwiICsgZW5kUG9pbnQ7XG4gICAgLy8gY29uc29sZS5sb2coXCJlbmRcIiArIGVuZFBvaW50KTtcbiAgICBsZXQgcmVzdWx0cyA9IGZpbmRTaG9ydGVzdFBhdGgoYm9hcmRHcmFwaCwgc3RhcnRQb2ludCwgZW5kUG9pbnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgIGxldCBlbmRJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVuZFBvaW50KTtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBLbmlnaHQ7XG4gICAgZW5kSW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIHN0YXJ0UG9pbnQgPSBudWxsO1xuICAgIGVuZFBvaW50ID0gbnVsbDtcbiAgICBsZXQgZGlzdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGlzdGFuY2VcIik7XG4gICAgbGV0IHBhdGggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGF0aFwiKTtcbiAgICBkaXN0YW5jZVswXS50ZXh0Q29udGVudCA9IFwiRGlzdGFuY2U6IFwiICsgcmVzdWx0cy5kaXN0YW5jZSArIFwiIG1vdmVzXCI7XG4gICAgcGF0aFswXS50ZXh0Q29udGVudCA9IFwiUGF0aDogXCIgKyByZXN1bHRzLnBhdGg7XG4gICAga25pZ2h0Qm9hcmREaXNwbGF5KHJlc3VsdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGtuaWdodEJvYXJkRGlzcGxheShyZXN1bHRzKSB7XG4gIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMucGF0aCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5wYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHMucGF0aFtpXSk7XG4gICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlc3VsdHMucGF0aFtpXSk7XG4gICAgc3F1YXJlLnRleHRDb250ZW50ID0gaTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInZpc2l0ZWRcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYm9hcmRSZXNldCgpIHtcbiAgbGV0IHdoaXRlU3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndoaXRlU3F1YXJlXCIpO1xuICBsZXQgYmxhY2tTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxhY2tTcXVhcmVcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2hpdGVTcXVhcmUubGVuZ3RoOyBpKyspIHtcbiAgICB3aGl0ZVNxdWFyZS5pdGVtKGkpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB3aGl0ZVNxdWFyZS5pdGVtKGkpLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpdGVkXCIpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmxhY2tTcXVhcmUubGVuZ3RoOyBpKyspIHtcbiAgICBibGFja1NxdWFyZS5pdGVtKGkpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBibGFja1NxdWFyZS5pdGVtKGkpLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpdGVkXCIpO1xuICB9XG4gIGxldCBlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZW5kXCIpO1xuICBsZXQgZGlzdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGlzdGFuY2VcIik7XG4gIGxldCBwYXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhdGhcIik7XG4gIGVuZFswXS50ZXh0Q29udGVudCA9IFwiRW5kaW5nIFBvaW50OlwiO1xuICBkaXN0YW5jZVswXS50ZXh0Q29udGVudCA9IFwiRGlzdGFuY2U6XCI7XG4gIHBhdGhbMF0udGV4dENvbnRlbnQgPSBcIlBhdGhcIjtcbn1cbi8vIGdldCByZWZlcmVuY2UgdG8gc3F1YXJlcyBjbGFzcywgYXBwZW5kQ2hpbGRyZW4uXG4vLyBhc3NpZ24gZWFjaCBzcXVhcmUgYSBibGFjay93aGl0ZSBjbGFzcyB0byBhbHRlcm5hdGVcbi8vIGFzc2lnbiBlYWNoIHNxdWFyZSBhbiBpZCB3aXRoIGl0cyBjb29yZGluYXRlIEEwLEExLEIwIGV0Y1xuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBlbGVtZW50LmlubmVyVGV4dCA9IFwiS25pZ2h0cyBUcmF2YWlscyBQcm9qZWN0XCI7XG4vLyAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID1cbi8vICAgICBcIllvdXIgdGFzayBpcyB0byBidWlsZCBhIGZ1bmN0aW9uIGtuaWdodE1vdmVzIHRoYXQgc2hvd3MgdGhlIHNob3J0ZXN0IHBvc3NpYmxlIHdheSB0byBnZXQgZnJvbSBvbmUgc3F1YXJlIHRvIGFub3RoZXIgYnkgb3V0cHV0dGluZyBhbGwgc3F1YXJlcyB0aGUga25pZ2h0IHdpbGwgc3RvcCBvbiBhbG9uZyB0aGUgd2F5LlwiO1xuLy8gICBlbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbi8vICAgcmV0dXJuIGVsZW1lbnQ7XG4vLyB9XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5mdW5jdGlvbiBidWlsZEJvYXJkR3JhcGgoKSB7XG4gIC8vIGVhY2ggbG9vcCBhZGRzIHRvIG9iamVjdFxuICAvLyB2YWxpZGF0ZSB3aXRoaW4gMC03XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlYLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHggPSBhcnJheVhbaV07XG4gICAgbGV0IGFscGhhID0gYWxwaGFYW3hdO1xuICAgIGxldCBhbHBoYTM7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJheVkubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCB5ID0gYXJyYXlZW2pdO1xuICAgICAgbGV0IHh5ID0gW3gsIHldO1xuICAgICAgbGV0IGFycmF5WFkgPSBbXTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcG9zc2libGVNb3Zlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICBsZXQgeDEgPSB4ICsgcG9zc2libGVNb3Zlc1trXVswXTtcbiAgICAgICAgbGV0IHkxID0geSArIHBvc3NpYmxlTW92ZXNba11bMV07XG5cbiAgICAgICAgaWYgKHgxID49IDAgJiYgNyA+PSB4MSAmJiB5MSA+PSAwICYmIDcgPj0geTEpIHtcbiAgICAgICAgICBsZXQgYWxwaGEyID0gYWxwaGFYW3gxXTtcbiAgICAgICAgICBhcnJheVhZLnB1c2goYWxwaGEyICsgeTEpO1xuICAgICAgICAgIC8vIGFycmF5WFkucHVzaChhbHBoYTIgKyB5MSArIFwiOjFcIik7XG4gICAgICAgICAgYWxwaGEzID0gYWxwaGEgKyB5O1xuICAgICAgICAgIHRlbXBEaWN0ID0ge307XG4gICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBhcnJheVhZLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICB0ZW1wRGljdFthcnJheVhZW2xdXSA9IDE7XG4gICAgICAgICAgICBib2FyZEdyYXBoW2FscGhhM10gPSB0ZW1wRGljdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coXCJ7XCIgKyBhbHBoYSArIHkgKyBcIjoge1wiICsgYXJyYXlYWSArIFwifX1cIik7XG5cbiAgICAgIC8vIGFzc2lnbiBmb3JtYXQ6IGdyYXBoMiA9IE9iamVjdC5hc3NpZ24oe0EwOiB7QzE6MSxCMjoxfX0sYm9hcmRHcmFwaClcbiAgICAgIC8vIGFsZXJ0cyA9IE9iamVjdC5hc3NpZ24oezM6IHthcHA6J2hlbGxvYWdhaW5fYWdhaW4nLG1lc3NhZ2U6J3lldCBhbm90aGVyIG1lc3NhZ2UnfX0sIGFsZXJ0cylcbiAgICAgIC8vIGJvYXJkR3JhcGggPSBPYmplY3QuYXNzaWduKHsgYXJyYXlYWSB9LCBib2FyZEdyYXBoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGJvYXJkR3JhcGgpO1xuICAgIH1cbiAgfVxuICAvLyByZXR1cm4gYm9hcmRHcmFwaDtcbn1cbmJ1aWxkQm9hcmRHcmFwaCgpO1xuY29uc29sZS5sb2coYm9hcmRHcmFwaCk7XG5cbi8vIGxldCBncmFwaCA9IHtcbi8vICAgc3RhcnQ6IHsgQTogNSwgQjogMiB9LFxuLy8gICBBOiB7IHN0YXJ0OiAxLCBDOiA0LCBEOiAyIH0sXG4vLyAgIEI6IHsgQTogOCwgRDogNyB9LFxuLy8gICBDOiB7IEQ6IDYsIGZpbmlzaDogMyB9LFxuLy8gICBEOiB7IGZpbmlzaDogMSB9LFxuLy8gICBmaW5pc2g6IHt9LFxuLy8gfTtcblxuZnVuY3Rpb24gc2hvcnRlc3REaXN0YW5jZU5vZGUoZGlzdGFuY2VzLCB2aXNpdGVkKSB7XG4gIGxldCBzaG9ydGVzdCA9IG51bGw7XG4gIGZvciAobGV0IG5vZGUgaW4gZGlzdGFuY2VzKSB7XG4gICAgbGV0IGN1cnJlbnRJc1Nob3J0ZXN0ID1cbiAgICAgIHNob3J0ZXN0ID09PSBudWxsIHx8IGRpc3RhbmNlc1tub2RlXSA8IGRpc3RhbmNlc1tzaG9ydGVzdF07XG4gICAgaWYgKGN1cnJlbnRJc1Nob3J0ZXN0ICYmICF2aXNpdGVkLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICBzaG9ydGVzdCA9IG5vZGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBzaG9ydGVzdDtcbn1cblxuZnVuY3Rpb24gZmluZFNob3J0ZXN0UGF0aChncmFwaCwgc3RhcnROb2RlLCBlbmROb2RlKSB7XG4gIGxldCBkaXN0YW5jZXMgPSB7fTtcbiAgZGlzdGFuY2VzW2VuZE5vZGVdID0gXCJJbmZpbml0eVwiO1xuICBkaXN0YW5jZXMgPSBPYmplY3QuYXNzaWduKGRpc3RhbmNlcywgZ3JhcGhbc3RhcnROb2RlXSk7XG5cbiAgbGV0IHBhcmVudHMgPSB7IGVuZE5vZGU6IG51bGwgfTtcbiAgZm9yIChsZXQgY2hpbGQgaW4gZ3JhcGhbc3RhcnROb2RlXSkge1xuICAgIHBhcmVudHNbY2hpbGRdID0gc3RhcnROb2RlO1xuICB9XG5cbiAgbGV0IHZpc2l0ZWQgPSBbXTtcblxuICBsZXQgbm9kZSA9IHNob3J0ZXN0RGlzdGFuY2VOb2RlKGRpc3RhbmNlcywgdmlzaXRlZCk7XG5cbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBsZXQgZGlzdGFuY2UgPSBkaXN0YW5jZXNbbm9kZV07XG4gICAgbGV0IGNoaWxkcmVuID0gZ3JhcGhbbm9kZV07XG4gICAgZm9yIChsZXQgY2hpbGQgaW4gY2hpbGRyZW4pIHtcbiAgICAgIGlmIChTdHJpbmcoY2hpbGQpID09PSBTdHJpbmcoc3RhcnROb2RlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdEaXN0YW5jZSA9IGRpc3RhbmNlICsgY2hpbGRyZW5bY2hpbGRdO1xuICAgICAgICBpZiAoIWRpc3RhbmNlc1tjaGlsZF0gfHwgZGlzdGFuY2VzW2NoaWxkXSA+IG5ld0Rpc3RhbmNlKSB7XG4gICAgICAgICAgZGlzdGFuY2VzW2NoaWxkXSA9IG5ld0Rpc3RhbmNlO1xuICAgICAgICAgIHBhcmVudHNbY2hpbGRdID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2aXNpdGVkLnB1c2gobm9kZSk7XG4gICAgbm9kZSA9IHNob3J0ZXN0RGlzdGFuY2VOb2RlKGRpc3RhbmNlcywgdmlzaXRlZCk7XG4gIH1cbiAgbGV0IHNob3J0ZXN0UGF0aCA9IFtlbmROb2RlXTtcbiAgbGV0IHBhcmVudCA9IHBhcmVudHNbZW5kTm9kZV07XG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICBzaG9ydGVzdFBhdGgucHVzaChwYXJlbnQpO1xuICAgIHBhcmVudCA9IHBhcmVudHNbcGFyZW50XTtcbiAgfVxuICBzaG9ydGVzdFBhdGgucmV2ZXJzZSgpO1xuXG4gIGxldCByZXN1bHRzID0ge1xuICAgIGRpc3RhbmNlOiBkaXN0YW5jZXNbZW5kTm9kZV0sXG4gICAgcGF0aDogc2hvcnRlc3RQYXRoLFxuICB9O1xuICByZXR1cm4gcmVzdWx0cztcbn1cbmNvbnNvbGUubG9nKGZpbmRTaG9ydGVzdFBhdGgoYm9hcmRHcmFwaCwgXCJBMFwiLCBcIkExXCIpKTtcbmNvbnNvbGUubG9nKGZpbmRTaG9ydGVzdFBhdGgoYm9hcmRHcmFwaCwgXCJBN1wiLCBcIkgwXCIpKTtcblxuZnVuY3Rpb24ga25pZ2h0TW92ZXMoc3RhcnQsIGVuZCkge31cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==