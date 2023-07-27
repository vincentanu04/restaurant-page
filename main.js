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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --clr-primary: #941e40;
    --clr-secondary: #f1e2bb;
    --clr-text: #07221a;
    --clr-bg: #eefcf8;
    --clr-accent: #ba2650;
}

* {
    margin: 0;
    padding: 0;
}

*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--clr-bg);
    color: var(--clr-text);
}

header {
    display: flex;
    padding: .5rem;
    position: sticky;
    top: 0;
    background-color: var(--clr-bg);
}

header .icon {
    display: flex;
    align-items: center;
    color: var(--clr-primary);
}

header svg {
    width: 3.5em;
}

nav {
    margin-left: auto;
    padding-right: .5em;
    display: grid;
    place-items: center;
}

nav ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 1.25fr;
    place-items: center;
}

button {
    background-color: var(--clr-accent);
    color: var(--clr-secondary);
    font-weight: bold;
    padding: .5em .75em;
    border-radius: 5rem;
    border: none;
}

button:hover {
    background-color: var(--clr-primary);
}

.hero, .welcome {
    padding: 4em 3em;
}

.hero {
    display: grid;
    place-items: center;


    text-align: center;
    color: var(--clr-text);
    height: calc(100vh - 72px);
}

.hero span {
    color: var(--clr-primary);
}

.hero svg {
    width: 15em;
}

.hero h1 {
    margin-bottom: 1rem;
    font-size: 4rem;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

.hero .buttons {
    display: grid;
    place-items: center;
    gap: 1em;
}

.hero button {
    font-size: 1rem;
    padding: 1em 2.5em;
    width: fit-content;
}

.hero img {
    display: none;
}

.welcome {
    text-align: center;
    display: grid;
    gap: 2em;
    background-color: var(--clr-secondary);
}

.welcome h2 {
    font-size: 2.1rem;
}

.welcome h3 {
    font-size: 1.5rem;
}

.welcome div p {
    margin-top: .25rem;
    color: gray;
    font-size: .9rem;
}

.welcome p {
    font-size: 1.25rem;
}

.welcome svg {
    margin: 0 auto;
    width: 4em;
}

footer {
    padding: 1em;
    text-align: center;
    display: grid;
    gap: .25rem;
    background-color: var(--clr-accent);
    color: var(--clr-secondary);
}

@media only screen and (min-width: 768px) {
    header {
        padding: 1rem;
    }

    header svg {
        width: 5rem;
    }

    header h1 {
        font-size: 3rem;
    }
    
    header button {
        font-size: 1rem;
        padding: 1em 2.5em;
    }
    
    nav ul {
        font-size: 1.25rem;
    }

    .hero svg {
        width: 20em;
    }

    .hero h1 {
        font-size: 6rem;
    }

    .hero p {
        font-size: 2rem;
    }

    .hero button {
        font-size: 1.5rem;
    }

    .welcome{
        gap: 4em;
    }
    .welcome h2 {
        font-size: 3rem;
    }
    .welcome h3 {
        font-size: 2rem;
    }
    .welcome div p {
        font-size: 1.25rem;
    }
    .welcome p {
        font-size: 1.75rem;
    }
    .welcome svg {
        width: 8em;
    }

    footer {
        padding: 1.5em;
        font-size: 1.25rem;
    }
}

@media only screen and (min-width: 1024px) {
    header, .hero, .welcome, footer {
        padding-inline: 10%;
    }
    header {
        margin: 0 auto;
        z-index: 10;
    } 

    .hero {
        display: flex;
        gap: 3em;
    }

    .hero .hero-left .title {
        display: flex;
        flex-direction:row-reverse;
        justify-content: flex-end;  
        align-items: flex-end;
    }

    .hero svg {
        width: 15em;
    }

    .hero h1, .hero p {
        text-align: left;
    }

    .hero .buttons {
        display: flex;
    }

    .hero img {
        display: block;
        width: clamp(20rem, 50%, 60rem);
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,mJAAmJ;IACnJ,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,MAAM;IACN,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,4CAA4C;IAC5C,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,2BAA2B;IAC3B,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;;;IAGnB,kBAAkB;IAClB,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,sCAAsC;AAC1C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,mCAAmC;IACnC,2BAA2B;AAC/B;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,QAAQ;IACZ;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,UAAU;IACd;;IAEA;QACI,cAAc;QACd,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,cAAc;QACd,WAAW;IACf;;IAEA;QACI,aAAa;QACb,QAAQ;IACZ;;IAEA;QACI,aAAa;QACb,0BAA0B;QAC1B,yBAAyB;QACzB,qBAAqB;IACzB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;QACd,+BAA+B;IACnC;AACJ","sourcesContent":[":root {\n    --clr-primary: #941e40;\n    --clr-secondary: #f1e2bb;\n    --clr-text: #07221a;\n    --clr-bg: #eefcf8;\n    --clr-accent: #ba2650;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    background-color: var(--clr-bg);\n    color: var(--clr-text);\n}\n\nheader {\n    display: flex;\n    padding: .5rem;\n    position: sticky;\n    top: 0;\n    background-color: var(--clr-bg);\n}\n\nheader .icon {\n    display: flex;\n    align-items: center;\n    color: var(--clr-primary);\n}\n\nheader svg {\n    width: 3.5em;\n}\n\nnav {\n    margin-left: auto;\n    padding-right: .5em;\n    display: grid;\n    place-items: center;\n}\n\nnav ul {\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr) 1.25fr;\n    place-items: center;\n}\n\nbutton {\n    background-color: var(--clr-accent);\n    color: var(--clr-secondary);\n    font-weight: bold;\n    padding: .5em .75em;\n    border-radius: 5rem;\n    border: none;\n}\n\nbutton:hover {\n    background-color: var(--clr-primary);\n}\n\n.hero, .welcome {\n    padding: 4em 3em;\n}\n\n.hero {\n    display: grid;\n    place-items: center;\n\n\n    text-align: center;\n    color: var(--clr-text);\n    height: calc(100vh - 72px);\n}\n\n.hero span {\n    color: var(--clr-primary);\n}\n\n.hero svg {\n    width: 15em;\n}\n\n.hero h1 {\n    margin-bottom: 1rem;\n    font-size: 4rem;\n}\n\n.hero p {\n    font-size: 1.25rem;\n    margin-bottom: 2rem;\n}\n\n.hero .buttons {\n    display: grid;\n    place-items: center;\n    gap: 1em;\n}\n\n.hero button {\n    font-size: 1rem;\n    padding: 1em 2.5em;\n    width: fit-content;\n}\n\n.hero img {\n    display: none;\n}\n\n.welcome {\n    text-align: center;\n    display: grid;\n    gap: 2em;\n    background-color: var(--clr-secondary);\n}\n\n.welcome h2 {\n    font-size: 2.1rem;\n}\n\n.welcome h3 {\n    font-size: 1.5rem;\n}\n\n.welcome div p {\n    margin-top: .25rem;\n    color: gray;\n    font-size: .9rem;\n}\n\n.welcome p {\n    font-size: 1.25rem;\n}\n\n.welcome svg {\n    margin: 0 auto;\n    width: 4em;\n}\n\nfooter {\n    padding: 1em;\n    text-align: center;\n    display: grid;\n    gap: .25rem;\n    background-color: var(--clr-accent);\n    color: var(--clr-secondary);\n}\n\n@media only screen and (min-width: 768px) {\n    header {\n        padding: 1rem;\n    }\n\n    header svg {\n        width: 5rem;\n    }\n\n    header h1 {\n        font-size: 3rem;\n    }\n    \n    header button {\n        font-size: 1rem;\n        padding: 1em 2.5em;\n    }\n    \n    nav ul {\n        font-size: 1.25rem;\n    }\n\n    .hero svg {\n        width: 20em;\n    }\n\n    .hero h1 {\n        font-size: 6rem;\n    }\n\n    .hero p {\n        font-size: 2rem;\n    }\n\n    .hero button {\n        font-size: 1.5rem;\n    }\n\n    .welcome{\n        gap: 4em;\n    }\n    .welcome h2 {\n        font-size: 3rem;\n    }\n    .welcome h3 {\n        font-size: 2rem;\n    }\n    .welcome div p {\n        font-size: 1.25rem;\n    }\n    .welcome p {\n        font-size: 1.75rem;\n    }\n    .welcome svg {\n        width: 8em;\n    }\n\n    footer {\n        padding: 1.5em;\n        font-size: 1.25rem;\n    }\n}\n\n@media only screen and (min-width: 1024px) {\n    header, .hero, .welcome, footer {\n        padding-inline: 10%;\n    }\n    header {\n        margin: 0 auto;\n        z-index: 10;\n    } \n\n    .hero {\n        display: flex;\n        gap: 3em;\n    }\n\n    .hero .hero-left .title {\n        display: flex;\n        flex-direction:row-reverse;\n        justify-content: flex-end;  \n        align-items: flex-end;\n    }\n\n    .hero svg {\n        width: 15em;\n    }\n\n    .hero h1, .hero p {\n        text-align: left;\n    }\n\n    .hero .buttons {\n        display: flex;\n    }\n\n    .hero img {\n        display: block;\n        width: clamp(20rem, 50%, 60rem);\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/builders/buttons.js":
/*!*********************************!*\
  !*** ./src/builders/buttons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const newButton = (text) => {
    const button = document.createElement('button');
    button.innerHTML = text;
    return button;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newButton);

/***/ }),

/***/ "./src/builders/navListItem.js":
/*!*************************************!*\
  !*** ./src/builders/navListItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const listItem = (content, datas) => {
    const item = document.createElement('li');
    item.innerHTML = content;
    item.dataset.page = datas;
    return item;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItem);

/***/ }),

/***/ "./src/components/facebookLogo.js":
/*!****************************************!*\
  !*** ./src/components/facebookLogo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const svgString =  '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#000000  "/>\
</svg>';

const parser = new DOMParser();
const facebookLogo = parser.parseFromString(svgString, 'image/svg+xml').querySelector('svg');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (facebookLogo);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footer = document.createElement('footer');

const p1 = document.createElement('p');
p1.innerHTML = 'Copyright &copy; 2023 | Powered by Vincent Tanuwidjaja';
const p2 = document.createElement('p');
p2.innerHTML = 'All rights reserved';

footer.appendChild(p1);
footer.appendChild(p2);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.js */ "./src/components/logo.js");
/* harmony import */ var _builders_navListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builders/navListItem.js */ "./src/builders/navListItem.js");
/* harmony import */ var _builders_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../builders/buttons.js */ "./src/builders/buttons.js");




const header = document.createElement('header');

const icon = document.createElement('div');
icon.classList.add('icon');
const h1 = document.createElement('h1');
h1.innerHTML = 'Nyam!';
icon.appendChild(_logo_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
icon.appendChild(h1);

const nav = document.createElement('nav');
const list = document.createElement('ul');
list.appendChild((0,_builders_navListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Home', 'Home'));
list.appendChild((0,_builders_navListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Menu', 'Menu'));
list.appendChild((0,_builders_navListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])('About', 'About'));
list.appendChild((0,_builders_navListItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_builders_buttons_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Contact').outerHTML, 'Contact'));
nav.appendChild(list);

header.appendChild(icon);
header.appendChild(nav);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_logo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/logo.js */ "./src/components/logo.js");
/* harmony import */ var _builders_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builders/buttons.js */ "./src/builders/buttons.js");
/* harmony import */ var _img_heroImg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/heroImg.jpg */ "./src/img/heroImg.jpg");




const hero = document.createElement('section');
hero.classList.add('hero');

const heroLeft = document.createElement('div');
heroLeft.classList.add('hero-left');

const title = document.createElement('div');
title.classList.add('title');
title.appendChild(_components_logo_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
const h1 = document.createElement('h1');
h1.innerHTML = 'Nyam<span>!</span>';
title.appendChild(h1);

const p = document.createElement('p');
const heroText = "Indulge in the Taste of Malaysia at Nyam! - A Flavorful Journey of Malaysian Cuisine!";
p.innerHTML = heroText;

const buttons = document.createElement('div');
buttons.classList.add('buttons');
buttons.appendChild((0,_builders_buttons_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Menu'));
buttons.appendChild((0,_builders_buttons_js__WEBPACK_IMPORTED_MODULE_1__["default"])('Contact'));

heroLeft.appendChild(title);
heroLeft.appendChild(p);
heroLeft.appendChild(buttons);

const heroImage = new Image();
heroImage.src = _img_heroImg_jpg__WEBPACK_IMPORTED_MODULE_2__;

hero.appendChild(heroLeft);
hero.appendChild(heroImage);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);

/***/ }),

/***/ "./src/components/instagramLogo.js":
/*!*****************************************!*\
  !*** ./src/components/instagramLogo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const svgString = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#941e40"/>\
<path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#941e40"/>\
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#000000"/>\
</svg>';

const parser = new DOMParser();
const instagramLogo = parser.parseFromString(svgString, 'image/svg+xml').querySelector('svg');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instagramLogo);

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const svgString = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#941e40" d="M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"/></svg>';

// Create an SVG element from the SVG string
const parser = new DOMParser();
const logo = parser.parseFromString(svgString, "image/svg+xml").querySelector("svg");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logo);

/***/ }),

/***/ "./src/components/welcome.js":
/*!***********************************!*\
  !*** ./src/components/welcome.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _facebookLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facebookLogo */ "./src/components/facebookLogo.js");
/* harmony import */ var _instagramLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagramLogo */ "./src/components/instagramLogo.js");




const welcome = document.createElement('section');
welcome.classList.add('welcome');

const h2 = document.createElement('h2');
const welcomeTitle = 'Welcome to Nyam!';
h2.innerHTML = welcomeTitle;

const div = document.createElement('div');
const h3 = document.createElement('h3');
const subTitle = 'Authentic Malaysian foods, serving since 1975.';
h3.innerHTML = subTitle;
const p1 = document.createElement('p');
p1.innerHTML = 'Founded in the deary city of Subang Jaya, Malaysia.';

const p2 = document.createElement('p');
p2.innerHTML = 'Follow our Social Media.'

div.appendChild(h3);
div.appendChild(p1);

welcome.appendChild(h2);
welcome.appendChild(div);
welcome.appendChild(p2);
welcome.appendChild(_instagramLogo__WEBPACK_IMPORTED_MODULE_1__["default"]);
welcome.appendChild(_facebookLogo__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcome);

/***/ }),

/***/ "./src/controllers/pageLoad.js":
/*!*************************************!*\
  !*** ./src/controllers/pageLoad.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header.js */ "./src/components/header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer.js */ "./src/components/footer.js");
/* harmony import */ var _pages_homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/homePage.js */ "./src/pages/homePage.js");




const pageLoad = () => {
    const body = document.querySelector('body');

    body.appendChild(_components_header_js__WEBPACK_IMPORTED_MODULE_0__["default"], body.firstChild);

    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);

    body.appendChild(_components_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

    (0,_pages_homePage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(content);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_hero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/hero.js */ "./src/components/hero.js");
/* harmony import */ var _components_welcome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/welcome.js */ "./src/components/welcome.js");



const renderHomePage = (parent) => {
    parent.appendChild(_components_hero_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    parent.appendChild(_components_welcome_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}   

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomePage);

/***/ }),

/***/ "./src/img/heroImg.jpg":
/*!*****************************!*\
  !*** ./src/img/heroImg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1775c9cd2de540f7c17.jpg";

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
/* harmony import */ var _controllers_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/pageLoad */ "./src/controllers/pageLoad.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


(0,_controllers_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFL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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQThDO0FBQzFCO0FBQ3BCLGlFQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2J1aWxkZXJzL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2J1aWxkZXJzL25hdkxpc3RJdGVtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2ZhY2Vib29rTG9nby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2hlcm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaW5zdGFncmFtTG9nby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRyb2xsZXJzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1jbHItcHJpbWFyeTogIzk0MWU0MDtcbiAgICAtLWNsci1zZWNvbmRhcnk6ICNmMWUyYmI7XG4gICAgLS1jbHItdGV4dDogIzA3MjIxYTtcbiAgICAtLWNsci1iZzogI2VlZmNmODtcbiAgICAtLWNsci1hY2NlbnQ6ICNiYTI2NTA7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xuICAgIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xufVxuXG5oZWFkZXIgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG5oZWFkZXIgc3ZnIHtcbiAgICB3aWR0aDogMy41ZW07XG59XG5cbm5hdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogLjVlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKSAxLjI1ZnI7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogLjVlbSAuNzVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG59XG5cbi5oZXJvLCAud2VsY29tZSB7XG4gICAgcGFkZGluZzogNGVtIDNlbTtcbn1cblxuLmhlcm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcblxuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzJweCk7XG59XG5cbi5oZXJvIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG59XG5cbi5oZXJvIHN2ZyB7XG4gICAgd2lkdGg6IDE1ZW07XG59XG5cbi5oZXJvIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLmhlcm8gcCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5oZXJvIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxZW07XG59XG5cbi5oZXJvIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFlbSAyLjVlbTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5oZXJvIGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLndlbGNvbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xufVxuXG4ud2VsY29tZSBoMiB7XG4gICAgZm9udC1zaXplOiAyLjFyZW07XG59XG5cbi53ZWxjb21lIGgzIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLndlbGNvbWUgZGl2IHAge1xuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IC45cmVtO1xufVxuXG4ud2VsY29tZSBwIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi53ZWxjb21lIHN2ZyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDRlbTtcbn1cblxuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICBoZWFkZXIgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDVyZW07XG4gICAgfVxuXG4gICAgaGVhZGVyIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbiAgICBcbiAgICBoZWFkZXIgYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBwYWRkaW5nOiAxZW0gMi41ZW07XG4gICAgfVxuICAgIFxuICAgIG5hdiB1bCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAuaGVybyBzdmcge1xuICAgICAgICB3aWR0aDogMjBlbTtcbiAgICB9XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICB9XG5cbiAgICAuaGVybyBwIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cblxuICAgIC5oZXJvIGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIC53ZWxjb21le1xuICAgICAgICBnYXA6IDRlbTtcbiAgICB9XG4gICAgLndlbGNvbWUgaDIge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC53ZWxjb21lIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICAud2VsY29tZSBkaXYgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG4gICAgLndlbGNvbWUgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICB9XG4gICAgLndlbGNvbWUgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDhlbTtcbiAgICB9XG5cbiAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBoZWFkZXIsIC5oZXJvLCAud2VsY29tZSwgZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDEwJTtcbiAgICB9XG4gICAgaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH0gXG5cbiAgICAuaGVybyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogM2VtO1xuICAgIH1cblxuICAgIC5oZXJvIC5oZXJvLWxlZnQgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7ICBcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgIC5oZXJvIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNWVtO1xuICAgIH1cblxuICAgIC5oZXJvIGgxLCAuaGVybyBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICAuaGVybyAuYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmhlcm8gaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiBjbGFtcCgyMHJlbSwgNTAlLCA2MHJlbSk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtSkFBbUo7SUFDbkosK0JBQStCO0lBQy9CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COzs7SUFHbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFFBQVE7SUFDWjs7SUFFQTtRQUNJLGFBQWE7UUFDYiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsK0JBQStCO0lBQ25DO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNsci1wcmltYXJ5OiAjOTQxZTQwO1xcbiAgICAtLWNsci1zZWNvbmRhcnk6ICNmMWUyYmI7XFxuICAgIC0tY2xyLXRleHQ6ICMwNzIyMWE7XFxuICAgIC0tY2xyLWJnOiAjZWVmY2Y4O1xcbiAgICAtLWNsci1hY2NlbnQ6ICNiYTI2NTA7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnKTtcXG4gICAgY29sb3I6IHZhcigtLWNsci10ZXh0KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnKTtcXG59XFxuXFxuaGVhZGVyIC5pY29uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuaGVhZGVyIHN2ZyB7XFxuICAgIHdpZHRoOiAzLjVlbTtcXG59XFxuXFxubmF2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IC41ZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKSAxLjI1ZnI7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAuNWVtIC43NWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuLmhlcm8sIC53ZWxjb21lIHtcXG4gICAgcGFkZGluZzogNGVtIDNlbTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcycHgpO1xcbn1cXG5cXG4uaGVybyBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuLmhlcm8gc3ZnIHtcXG4gICAgd2lkdGg6IDE1ZW07XFxufVxcblxcbi5oZXJvIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uaGVybyAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG4uaGVybyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFlbSAyLjVlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uaGVybyBpbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ud2VsY29tZSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xcbn1cXG5cXG4ud2VsY29tZSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ud2VsY29tZSBkaXYgcCB7XFxuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbi53ZWxjb21lIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi53ZWxjb21lIHN2ZyB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNGVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAuMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHN2ZyB7XFxuICAgICAgICB3aWR0aDogNXJlbTtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICBoZWFkZXIgYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAyLjVlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgbmF2IHVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgfVxcblxcbiAgICAuaGVybyBzdmcge1xcbiAgICAgICAgd2lkdGg6IDIwZW07XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gaDEge1xcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICAud2VsY29tZXtcXG4gICAgICAgIGdhcDogNGVtO1xcbiAgICB9XFxuICAgIC53ZWxjb21lIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcbiAgICAud2VsY29tZSBoMyB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgLndlbGNvbWUgZGl2IHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB9XFxuICAgIC53ZWxjb21lIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB9XFxuICAgIC53ZWxjb21lIHN2ZyB7XFxuICAgICAgICB3aWR0aDogOGVtO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICBoZWFkZXIsIC5oZXJvLCAud2VsY29tZSwgZm9vdGVyIHtcXG4gICAgICAgIHBhZGRpbmctaW5saW5lOiAxMCU7XFxuICAgIH1cXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgei1pbmRleDogMTA7XFxuICAgIH0gXFxuXFxuICAgIC5oZXJvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDNlbTtcXG4gICAgfVxcblxcbiAgICAuaGVybyAuaGVyby1sZWZ0IC50aXRsZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAgXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gc3ZnIHtcXG4gICAgICAgIHdpZHRoOiAxNWVtO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIGgxLCAuaGVybyBwIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gLmJ1dHRvbnMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAuaGVybyBpbWcge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogY2xhbXAoMjByZW0sIDUwJSwgNjByZW0pO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBuZXdCdXR0b24gPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld0J1dHRvbjsiLCJjb25zdCBsaXN0SXRlbSA9IChjb250ZW50LCBkYXRhcykgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGl0ZW0uaW5uZXJIVE1MID0gY29udGVudDtcbiAgICBpdGVtLmRhdGFzZXQucGFnZSA9IGRhdGFzO1xuICAgIHJldHVybiBpdGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0SXRlbTsiLCJjb25zdCBzdmdTdHJpbmcgPSAgJzxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxcXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjAgMUMyMS42NTY5IDEgMjMgMi4zNDMxNSAyMyA0VjIwQzIzIDIxLjY1NjkgMjEuNjU2OSAyMyAyMCAyM0g0QzIuMzQzMTUgMjMgMSAyMS42NTY5IDEgMjBWNEMxIDIuMzQzMTUgMi4zNDMxNSAxIDQgMUgyMFpNMjAgM0MyMC41NTIzIDMgMjEgMy40NDc3MiAyMSA0VjIwQzIxIDIwLjU1MjMgMjAuNTUyMyAyMSAyMCAyMUgxNVYxMy45OTk5SDE3LjA3NjJDMTcuNTA2NiAxMy45OTk5IDE3Ljg4ODcgMTMuNzI0NSAxOC4wMjQ5IDEzLjMxNjFMMTguNDY3OSAxMS45ODcxQzE4LjYyOTggMTEuNTAxNCAxOC4yNjgzIDEwLjk5OTkgMTcuNzU2NCAxMC45OTk5SDE1VjguOTk5OTJDMTUgOC40OTk5MiAxNS41IDcuOTk5OTIgMTYgNy45OTk5MkgxOEMxOC41NTIzIDcuOTk5OTIgMTkgNy41NTIyIDE5IDYuOTk5OTJWNi4zMTM5M0MxOSA1Ljk5MDkxIDE4Ljc5MzcgNS43MDEzIDE4LjQ4MTMgNS42MTg4N0MxNy4xNzA1IDUuMjcyOTUgMTYgNS4yNzI5NSAxNiA1LjI3Mjk1QzEzLjUgNS4yNzI5NSAxMiA2Ljk5OTkyIDEyIDguNDk5OTJWMTAuOTk5OUgxMEM5LjQ0NzcyIDEwLjk5OTkgOSAxMS40NDc2IDkgMTEuOTk5OVYxMi45OTk5QzkgMTMuNTUyMiA5LjQ0NzcxIDEzLjk5OTkgMTAgMTMuOTk5OUgxMlYyMUg0QzMuNDQ3NzIgMjEgMyAyMC41NTIzIDMgMjBWNEMzIDMuNDQ3NzIgMy40NDc3MiAzIDQgM0gyMFpcIiBmaWxsPVwiIzAwMDAwMCAgXCIvPlxcXG48L3N2Zz4nO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5jb25zdCBmYWNlYm9va0xvZ28gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Z1N0cmluZywgJ2ltYWdlL3N2Zyt4bWwnKS5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcblxuZXhwb3J0IGRlZmF1bHQgZmFjZWJvb2tMb2dvOyIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG5jb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnAxLmlubmVySFRNTCA9ICdDb3B5cmlnaHQgJmNvcHk7IDIwMjMgfCBQb3dlcmVkIGJ5IFZpbmNlbnQgVGFudXdpZGphamEnO1xuY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5wMi5pbm5lckhUTUwgPSAnQWxsIHJpZ2h0cyByZXNlcnZlZCc7XG5cbmZvb3Rlci5hcHBlbmRDaGlsZChwMSk7XG5mb290ZXIuYXBwZW5kQ2hpbGQocDIpO1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvLmpzJztcbmltcG9ydCBuYXZMaXN0SXRlbSBmcm9tICcuLi9idWlsZGVycy9uYXZMaXN0SXRlbS5qcyc7XG5pbXBvcnQgbmV3QnV0dG9uIGZyb20gJy4uL2J1aWxkZXJzL2J1dHRvbnMuanMnO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG5jb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5oMS5pbm5lckhUTUwgPSAnTnlhbSEnO1xuaWNvbi5hcHBlbmRDaGlsZChsb2dvKTtcbmljb24uYXBwZW5kQ2hpbGQoaDEpO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xubGlzdC5hcHBlbmRDaGlsZChuYXZMaXN0SXRlbSgnSG9tZScsICdIb21lJykpO1xubGlzdC5hcHBlbmRDaGlsZChuYXZMaXN0SXRlbSgnTWVudScsICdNZW51JykpO1xubGlzdC5hcHBlbmRDaGlsZChuYXZMaXN0SXRlbSgnQWJvdXQnLCAnQWJvdXQnKSk7XG5saXN0LmFwcGVuZENoaWxkKG5hdkxpc3RJdGVtKG5ld0J1dHRvbignQ29udGFjdCcpLm91dGVySFRNTCwgJ0NvbnRhY3QnKSk7XG5uYXYuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbmhlYWRlci5hcHBlbmRDaGlsZChpY29uKTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7IiwiaW1wb3J0IGxvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dvLmpzJztcbmltcG9ydCBuZXdCdXR0b24gZnJvbSAnLi4vYnVpbGRlcnMvYnV0dG9ucy5qcyc7XG5pbXBvcnQgbXlJbWFnZSBmcm9tICcuLi9pbWcvaGVyb0ltZy5qcGcnO1xuXG5jb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbmNvbnN0IGhlcm9MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZXJvTGVmdC5jbGFzc0xpc3QuYWRkKCdoZXJvLWxlZnQnKTtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG50aXRsZS5hcHBlbmRDaGlsZChsb2dvKTtcbmNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmgxLmlubmVySFRNTCA9ICdOeWFtPHNwYW4+ITwvc3Bhbj4nO1xudGl0bGUuYXBwZW5kQ2hpbGQoaDEpO1xuXG5jb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuY29uc3QgaGVyb1RleHQgPSBcIkluZHVsZ2UgaW4gdGhlIFRhc3RlIG9mIE1hbGF5c2lhIGF0IE55YW0hIC0gQSBGbGF2b3JmdWwgSm91cm5leSBvZiBNYWxheXNpYW4gQ3Vpc2luZSFcIjtcbnAuaW5uZXJIVE1MID0gaGVyb1RleHQ7XG5cbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuYnV0dG9ucy5hcHBlbmRDaGlsZChuZXdCdXR0b24oJ01lbnUnKSk7XG5idXR0b25zLmFwcGVuZENoaWxkKG5ld0J1dHRvbignQ29udGFjdCcpKTtcblxuaGVyb0xlZnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuaGVyb0xlZnQuYXBwZW5kQ2hpbGQocCk7XG5oZXJvTGVmdC5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuY29uc3QgaGVyb0ltYWdlID0gbmV3IEltYWdlKCk7XG5oZXJvSW1hZ2Uuc3JjID0gbXlJbWFnZTtcblxuaGVyby5hcHBlbmRDaGlsZChoZXJvTGVmdCk7XG5oZXJvLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhlcm87IiwiY29uc3Qgc3ZnU3RyaW5nID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiPlxcXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIgMThDMTUuMzEzNyAxOCAxOCAxNS4zMTM3IDE4IDEyQzE4IDguNjg2MjkgMTUuMzEzNyA2IDEyIDZDOC42ODYyOSA2IDYgOC42ODYyOSA2IDEyQzYgMTUuMzEzNyA4LjY4NjI5IDE4IDEyIDE4Wk0xMiAxNkMxNC4yMDkxIDE2IDE2IDE0LjIwOTEgMTYgMTJDMTYgOS43OTA4NiAxNC4yMDkxIDggMTIgOEM5Ljc5MDg2IDggOCA5Ljc5MDg2IDggMTJDOCAxNC4yMDkxIDkuNzkwODYgMTYgMTIgMTZaXCIgZmlsbD1cIiM5NDFlNDBcIi8+XFxcbjxwYXRoIGQ9XCJNMTggNUMxNy40NDc3IDUgMTcgNS40NDc3MiAxNyA2QzE3IDYuNTUyMjggMTcuNDQ3NyA3IDE4IDdDMTguNTUyMyA3IDE5IDYuNTUyMjggMTkgNkMxOSA1LjQ0NzcyIDE4LjU1MjMgNSAxOCA1WlwiIGZpbGw9XCIjOTQxZTQwXCIvPlxcXG48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS42NTM5NiA0LjI3NjA2QzEgNS41NTk1MyAxIDcuMjM5NjkgMSAxMC42VjEzLjRDMSAxNi43NjAzIDEgMTguNDQwNSAxLjY1Mzk2IDE5LjcyMzlDMi4yMjkyIDIwLjg1MjkgMy4xNDcwOCAyMS43NzA4IDQuMjc2MDYgMjIuMzQ2QzUuNTU5NTMgMjMgNy4yMzk2OSAyMyAxMC42IDIzSDEzLjRDMTYuNzYwMyAyMyAxOC40NDA1IDIzIDE5LjcyMzkgMjIuMzQ2QzIwLjg1MjkgMjEuNzcwOCAyMS43NzA4IDIwLjg1MjkgMjIuMzQ2IDE5LjcyMzlDMjMgMTguNDQwNSAyMyAxNi43NjAzIDIzIDEzLjRWMTAuNkMyMyA3LjIzOTY5IDIzIDUuNTU5NTMgMjIuMzQ2IDQuMjc2MDZDMjEuNzcwOCAzLjE0NzA4IDIwLjg1MjkgMi4yMjkyIDE5LjcyMzkgMS42NTM5NkMxOC40NDA1IDEgMTYuNzYwMyAxIDEzLjQgMUgxMC42QzcuMjM5NjkgMSA1LjU1OTUzIDEgNC4yNzYwNiAxLjY1Mzk2QzMuMTQ3MDggMi4yMjkyIDIuMjI5MiAzLjE0NzA4IDEuNjUzOTYgNC4yNzYwNlpNMTMuNCAzSDEwLjZDOC44ODY4NCAzIDcuNzIyMjUgMy4wMDE1NiA2LjgyMjA4IDMuMDc1MUM1Ljk0NTI0IDMuMTQ2NzQgNS40OTY4NCAzLjI3NjU5IDUuMTg0MDQgMy40MzU5N0M0LjQzMTM5IDMuODE5NDcgMy44MTk0NyA0LjQzMTM5IDMuNDM1OTcgNS4xODQwNEMzLjI3NjU5IDUuNDk2ODQgMy4xNDY3NCA1Ljk0NTI0IDMuMDc1MSA2LjgyMjA4QzMuMDAxNTYgNy43MjIyNSAzIDguODg2ODQgMyAxMC42VjEzLjRDMyAxNS4xMTMyIDMuMDAxNTYgMTYuMjc3NyAzLjA3NTEgMTcuMTc3OUMzLjE0Njc0IDE4LjA1NDggMy4yNzY1OSAxOC41MDMyIDMuNDM1OTcgMTguODE2QzMuODE5NDcgMTkuNTY4NiA0LjQzMTM5IDIwLjE4MDUgNS4xODQwNCAyMC41NjRDNS40OTY4NCAyMC43MjM0IDUuOTQ1MjQgMjAuODUzMyA2LjgyMjA4IDIwLjkyNDlDNy43MjIyNSAyMC45OTg0IDguODg2ODQgMjEgMTAuNiAyMUgxMy40QzE1LjExMzIgMjEgMTYuMjc3NyAyMC45OTg0IDE3LjE3NzkgMjAuOTI0OUMxOC4wNTQ4IDIwLjg1MzMgMTguNTAzMiAyMC43MjM0IDE4LjgxNiAyMC41NjRDMTkuNTY4NiAyMC4xODA1IDIwLjE4MDUgMTkuNTY4NiAyMC41NjQgMTguODE2QzIwLjcyMzQgMTguNTAzMiAyMC44NTMzIDE4LjA1NDggMjAuOTI0OSAxNy4xNzc5QzIwLjk5ODQgMTYuMjc3NyAyMSAxNS4xMTMyIDIxIDEzLjRWMTAuNkMyMSA4Ljg4Njg0IDIwLjk5ODQgNy43MjIyNSAyMC45MjQ5IDYuODIyMDhDMjAuODUzMyA1Ljk0NTI0IDIwLjcyMzQgNS40OTY4NCAyMC41NjQgNS4xODQwNEMyMC4xODA1IDQuNDMxMzkgMTkuNTY4NiAzLjgxOTQ3IDE4LjgxNiAzLjQzNTk3QzE4LjUwMzIgMy4yNzY1OSAxOC4wNTQ4IDMuMTQ2NzQgMTcuMTc3OSAzLjA3NTFDMTYuMjc3NyAzLjAwMTU2IDE1LjExMzIgMyAxMy40IDNaXCIgZmlsbD1cIiMwMDAwMDBcIi8+XFxcbjwvc3ZnPic7XG5cbmNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbmNvbnN0IGluc3RhZ3JhbUxvZ28gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Z1N0cmluZywgJ2ltYWdlL3N2Zyt4bWwnKS5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFncmFtTG9nbzsiLCJjb25zdCBzdmdTdHJpbmcgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsPVwiIzk0MWU0MFwiIGQ9XCJNMTI4IDM1Mi41NzZWMzUyYTI4OCAyODggMCAwIDEgNDkxLjA3Mi0yMDQuMjI0IDE5MiAxOTIgMCAwIDEgMjc0LjI0IDIwNC40OCA2NCA2NCAwIDAgMSA1Ny4yMTYgNzQuMjRDOTIxLjYgNjAwLjUxMiA4NTAuMDQ4IDcxMC42NTYgNzM2IDc1Ni45OTJWODAwYTk2IDk2IDAgMCAxLTk2IDk2SDM4NGE5NiA5NiAwIDAgMS05Ni05NnYtNDMuMDA4Yy0xMTQuMDQ4LTQ2LjMzNi0xODUuNi0xNTYuNDgtMjE0LjUyOC0zMzAuNDk2QTY0IDY0IDAgMCAxIDEyOCAzNTIuNjR6bTY0LS41NzZoNjRhMTYwIDE2MCAwIDAgMSAzMjAgMGg2NGEyMjQgMjI0IDAgMCAwLTQ0OCAwem0xMjggMGgxOTJhOTYgOTYgMCAwIDAtMTkyIDB6bTQzOS40MjQgMGg2OC41NDRBMTI4LjI1NiAxMjguMjU2IDAgMCAwIDcwNCAxOTJjLTE1LjM2IDAtMjkuOTUyIDIuNjg4LTQzLjUyIDcuNjE2IDExLjMyOCAxOC4xNzYgMjAuNjcyIDM3Ljc2IDI3Ljg0IDU4LjMwNEE2NC4xMjggNjQuMTI4IDAgMCAxIDc1OS40MjQgMzUyek02NzIgNzY4SDM1MnYzMmEzMiAzMiAwIDAgMCAzMiAzMmgyNTZhMzIgMzIgMCAwIDAgMzItMzJ2LTMyem0tMzQyLjUyOC02NGgzNjUuMDU2YzEwMS41MDQtMzIuNjQgMTY1Ljc2LTEyNC45MjggMTkyLjg5Ni0yODhIMTM2LjU3NmMyNy4xMzYgMTYzLjA3MiA5MS4zOTIgMjU1LjM2IDE5Mi44OTYgMjg4elwiLz48L3N2Zz4nO1xuXG4vLyBDcmVhdGUgYW4gU1ZHIGVsZW1lbnQgZnJvbSB0aGUgU1ZHIHN0cmluZ1xuY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuY29uc3QgbG9nbyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnU3RyaW5nLCBcImltYWdlL3N2Zyt4bWxcIikucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nbzsiLCJpbXBvcnQgZmFjZWJvb2tMb2dvIGZyb20gXCIuL2ZhY2Vib29rTG9nb1wiO1xuaW1wb3J0IGluc3RhZ3JhbUxvZ28gZnJvbSBcIi4vaW5zdGFncmFtTG9nb1wiO1xuXG5cbmNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG53ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcblxuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuY29uc3Qgd2VsY29tZVRpdGxlID0gJ1dlbGNvbWUgdG8gTnlhbSEnO1xuaDIuaW5uZXJIVE1MID0gd2VsY29tZVRpdGxlO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmNvbnN0IHN1YlRpdGxlID0gJ0F1dGhlbnRpYyBNYWxheXNpYW4gZm9vZHMsIHNlcnZpbmcgc2luY2UgMTk3NS4nO1xuaDMuaW5uZXJIVE1MID0gc3ViVGl0bGU7XG5jb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnAxLmlubmVySFRNTCA9ICdGb3VuZGVkIGluIHRoZSBkZWFyeSBjaXR5IG9mIFN1YmFuZyBKYXlhLCBNYWxheXNpYS4nO1xuXG5jb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnAyLmlubmVySFRNTCA9ICdGb2xsb3cgb3VyIFNvY2lhbCBNZWRpYS4nXG5cbmRpdi5hcHBlbmRDaGlsZChoMyk7XG5kaXYuYXBwZW5kQ2hpbGQocDEpO1xuXG53ZWxjb21lLmFwcGVuZENoaWxkKGgyKTtcbndlbGNvbWUuYXBwZW5kQ2hpbGQoZGl2KTtcbndlbGNvbWUuYXBwZW5kQ2hpbGQocDIpO1xud2VsY29tZS5hcHBlbmRDaGlsZChpbnN0YWdyYW1Mb2dvKTtcbndlbGNvbWUuYXBwZW5kQ2hpbGQoZmFjZWJvb2tMb2dvKTtcblxuZXhwb3J0IGRlZmF1bHQgd2VsY29tZTsiLCJpbXBvcnQgaGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyLmpzJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXIuanMnO1xuaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gJy4uL3BhZ2VzL2hvbWVQYWdlLmpzJztcblxuY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyLCBib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIHJlbmRlckhvbWVQYWdlKGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZUxvYWQ7IiwiaW1wb3J0IGhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvLmpzJztcbmltcG9ydCB3ZWxjb21lIGZyb20gJy4uL2NvbXBvbmVudHMvd2VsY29tZS5qcyc7XG5cbmNvbnN0IHJlbmRlckhvbWVQYWdlID0gKHBhcmVudCkgPT4ge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZXJvKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG59ICAgXG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL2NvbnRyb2xsZXJzL3BhZ2VMb2FkXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xucGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=