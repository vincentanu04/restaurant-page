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
    cursor: pointer;
}

header h1:hover, nav li:not(:last-child):hover {
    cursor: pointer;
    opacity: 80%;
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
    border-radius: .25em;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,mJAAmJ;IACnJ,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,MAAM;IACN,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,4CAA4C;IAC5C,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,2BAA2B;IAC3B,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;;;IAGnB,kBAAkB;IAClB,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,sCAAsC;AAC1C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,mCAAmC;IACnC,2BAA2B;AAC/B;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,QAAQ;IACZ;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,UAAU;IACd;;IAEA;QACI,cAAc;QACd,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,cAAc;QACd,WAAW;IACf;;IAEA;QACI,aAAa;QACb,QAAQ;IACZ;;IAEA;QACI,aAAa;QACb,0BAA0B;QAC1B,yBAAyB;QACzB,qBAAqB;IACzB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;QACd,+BAA+B;IACnC;AACJ","sourcesContent":[":root {\n    --clr-primary: #941e40;\n    --clr-secondary: #f1e2bb;\n    --clr-text: #07221a;\n    --clr-bg: #eefcf8;\n    --clr-accent: #ba2650;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n*,\n*::after,\n*::before {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    background-color: var(--clr-bg);\n    color: var(--clr-text);\n}\n\nheader {\n    display: flex;\n    padding: .5rem;\n    position: sticky;\n    top: 0;\n    background-color: var(--clr-bg);\n}\n\nheader .icon {\n    display: flex;\n    align-items: center;\n    color: var(--clr-primary);\n}\n\nheader svg {\n    width: 3.5em;\n}\n\nnav {\n    margin-left: auto;\n    padding-right: .5em;\n    display: grid;\n    place-items: center;\n}\n\nnav ul {\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr) 1.25fr;\n    place-items: center;\n}\n\nbutton {\n    background-color: var(--clr-accent);\n    color: var(--clr-secondary);\n    font-weight: bold;\n    padding: .5em .75em;\n    border-radius: 5rem;\n    border: none;\n}\n\nbutton:hover {\n    background-color: var(--clr-primary);\n    cursor: pointer;\n}\n\nheader h1:hover, nav li:not(:last-child):hover {\n    cursor: pointer;\n    opacity: 80%;\n}\n\n.hero, .welcome {\n    padding: 4em 3em;\n}\n\n.hero {\n    display: grid;\n    place-items: center;\n\n\n    text-align: center;\n    color: var(--clr-text);\n    height: calc(100vh - 72px);\n}\n\n.hero span {\n    color: var(--clr-primary);\n}\n\n.hero svg {\n    width: 15em;\n}\n\n.hero h1 {\n    margin-bottom: 1rem;\n    font-size: 4rem;\n}\n\n.hero p {\n    font-size: 1.25rem;\n    margin-bottom: 2rem;\n}\n\n.hero .buttons {\n    display: grid;\n    place-items: center;\n    gap: 1em;\n}\n\n.hero button {\n    font-size: 1rem;\n    padding: 1em 2.5em;\n    width: fit-content;\n}\n\n.hero img {\n    display: none;\n    border-radius: .25em;\n}\n\n.welcome {\n    text-align: center;\n    display: grid;\n    gap: 2em;\n    background-color: var(--clr-secondary);\n}\n\n.welcome h2 {\n    font-size: 2.1rem;\n}\n\n.welcome h3 {\n    font-size: 1.5rem;\n}\n\n.welcome div p {\n    margin-top: .25rem;\n    color: gray;\n    font-size: .9rem;\n}\n\n.welcome p {\n    font-size: 1.25rem;\n}\n\n.welcome svg {\n    margin: 0 auto;\n    width: 4em;\n}\n\nfooter {\n    padding: 1em;\n    text-align: center;\n    display: grid;\n    gap: .25rem;\n    background-color: var(--clr-accent);\n    color: var(--clr-secondary);\n}\n\n@media only screen and (min-width: 768px) {\n    header {\n        padding: 1rem;\n    }\n\n    header svg {\n        width: 5rem;\n    }\n\n    header h1 {\n        font-size: 3rem;\n    }\n    \n    header button {\n        font-size: 1rem;\n        padding: 1em 2.5em;\n    }\n    \n    nav ul {\n        font-size: 1.25rem;\n    }\n\n    .hero svg {\n        width: 20em;\n    }\n\n    .hero h1 {\n        font-size: 6rem;\n    }\n\n    .hero p {\n        font-size: 2rem;\n    }\n\n    .hero button {\n        font-size: 1.5rem;\n    }\n\n    .welcome{\n        gap: 4em;\n    }\n    .welcome h2 {\n        font-size: 3rem;\n    }\n    .welcome h3 {\n        font-size: 2rem;\n    }\n    .welcome div p {\n        font-size: 1.25rem;\n    }\n    .welcome p {\n        font-size: 1.75rem;\n    }\n    .welcome svg {\n        width: 8em;\n    }\n\n    footer {\n        padding: 1.5em;\n        font-size: 1.25rem;\n    }\n}\n\n@media only screen and (min-width: 1024px) {\n    header, .hero, .welcome, footer {\n        padding-inline: 10%;\n    }\n    header {\n        margin: 0 auto;\n        z-index: 10;\n    } \n\n    .hero {\n        display: flex;\n        gap: 3em;\n    }\n\n    .hero .hero-left .title {\n        display: flex;\n        flex-direction:row-reverse;\n        justify-content: flex-end;  \n        align-items: flex-end;\n    }\n\n    .hero svg {\n        width: 15em;\n    }\n\n    .hero h1, .hero p {\n        text-align: left;\n    }\n\n    .hero .buttons {\n        display: flex;\n    }\n\n    .hero img {\n        display: block;\n        width: clamp(20rem, 50%, 60rem);\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FB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QkFBdUIsOERBQU87QUFDOUI7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztVQ1I3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDMUI7O0FBRXBCLGlFQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2J1aWxkZXJzL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2J1aWxkZXJzL25hdkxpc3RJdGVtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2ZhY2Vib29rTG9nby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2hlcm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaW5zdGFncmFtTG9nby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRyb2xsZXJzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1jbHItcHJpbWFyeTogIzk0MWU0MDtcbiAgICAtLWNsci1zZWNvbmRhcnk6ICNmMWUyYmI7XG4gICAgLS1jbHItdGV4dDogIzA3MjIxYTtcbiAgICAtLWNsci1iZzogI2VlZmNmODtcbiAgICAtLWNsci1hY2NlbnQ6ICNiYTI2NTA7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xuICAgIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xufVxuXG5oZWFkZXIgLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG5oZWFkZXIgc3ZnIHtcbiAgICB3aWR0aDogMy41ZW07XG59XG5cbm5hdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogLjVlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKSAxLjI1ZnI7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogLjVlbSAuNzVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5oZWFkZXIgaDE6aG92ZXIsIG5hdiBsaTpub3QoOmxhc3QtY2hpbGQpOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogODAlO1xufVxuXG4uaGVybywgLndlbGNvbWUge1xuICAgIHBhZGRpbmc6IDRlbSAzZW07XG59XG5cbi5oZXJvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcycHgpO1xufVxuXG4uaGVybyBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG4uaGVybyBzdmcge1xuICAgIHdpZHRoOiAxNWVtO1xufVxuXG4uaGVybyBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6IDRyZW07XG59XG5cbi5oZXJvIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uaGVybyAuYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMWVtO1xufVxuXG4uaGVybyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAxZW0gMi41ZW07XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uaGVybyBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XG59XG5cbi53ZWxjb21lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcbn1cblxuLndlbGNvbWUgaDIge1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xufVxuXG4ud2VsY29tZSBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi53ZWxjb21lIGRpdiBwIHtcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbn1cblxuLndlbGNvbWUgcCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4ud2VsY29tZSBzdmcge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA0ZW07XG59XG5cbmZvb3RlciB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgaGVhZGVyIHN2ZyB7XG4gICAgICAgIHdpZHRoOiA1cmVtO1xuICAgIH1cblxuICAgIGhlYWRlciBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gICAgXG4gICAgaGVhZGVyIGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgcGFkZGluZzogMWVtIDIuNWVtO1xuICAgIH1cbiAgICBcbiAgICBuYXYgdWwge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgLmhlcm8gc3ZnIHtcbiAgICAgICAgd2lkdGg6IDIwZW07XG4gICAgfVxuXG4gICAgLmhlcm8gaDEge1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgfVxuXG4gICAgLmhlcm8gcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICAuaGVybyBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG5cbiAgICAud2VsY29tZXtcbiAgICAgICAgZ2FwOiA0ZW07XG4gICAgfVxuICAgIC53ZWxjb21lIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbiAgICAud2VsY29tZSBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgLndlbGNvbWUgZGl2IHAge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICAgIC53ZWxjb21lIHAge1xuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgfVxuICAgIC53ZWxjb21lIHN2ZyB7XG4gICAgICAgIHdpZHRoOiA4ZW07XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgaGVhZGVyLCAuaGVybywgLndlbGNvbWUsIGZvb3RlciB7XG4gICAgICAgIHBhZGRpbmctaW5saW5lOiAxMCU7XG4gICAgfVxuICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9IFxuXG4gICAgLmhlcm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDNlbTtcbiAgICB9XG5cbiAgICAuaGVybyAuaGVyby1sZWZ0IC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAgXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAuaGVybyBzdmcge1xuICAgICAgICB3aWR0aDogMTVlbTtcbiAgICB9XG5cbiAgICAuaGVybyBoMSwgLmhlcm8gcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmhlcm8gLmJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5oZXJvIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogY2xhbXAoMjByZW0sIDUwJSwgNjByZW0pO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUpBQW1KO0lBQ25KLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7OztJQUduQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixRQUFRO0lBQ1Isc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLG1DQUFtQztJQUNuQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsUUFBUTtJQUNaOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCwrQkFBK0I7SUFDbkM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY2xyLXByaW1hcnk6ICM5NDFlNDA7XFxuICAgIC0tY2xyLXNlY29uZGFyeTogI2YxZTJiYjtcXG4gICAgLS1jbHItdGV4dDogIzA3MjIxYTtcXG4gICAgLS1jbHItYmc6ICNlZWZjZjg7XFxuICAgIC0tY2xyLWFjY2VudDogI2JhMjY1MDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXRleHQpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmcpO1xcbn1cXG5cXG5oZWFkZXIgLmljb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5oZWFkZXIgc3ZnIHtcXG4gICAgd2lkdGg6IDMuNWVtO1xcbn1cXG5cXG5uYXYge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogLjVlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpIDEuMjVmcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IC41ZW0gLjc1ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciBoMTpob3ZlciwgbmF2IGxpOm5vdCg6bGFzdC1jaGlsZCk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG9wYWNpdHk6IDgwJTtcXG59XFxuXFxuLmhlcm8sIC53ZWxjb21lIHtcXG4gICAgcGFkZGluZzogNGVtIDNlbTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItdGV4dCk7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcycHgpO1xcbn1cXG5cXG4uaGVybyBzcGFuIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuLmhlcm8gc3ZnIHtcXG4gICAgd2lkdGg6IDE1ZW07XFxufVxcblxcbi5oZXJvIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uaGVybyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uaGVybyAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG4uaGVybyBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFlbSAyLjVlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4uaGVybyBpbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcXG59XFxuXFxuLndlbGNvbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG59XFxuXFxuLndlbGNvbWUgaDIge1xcbiAgICBmb250LXNpemU6IDIuMXJlbTtcXG59XFxuXFxuLndlbGNvbWUgaDMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLndlbGNvbWUgZGl2IHAge1xcbiAgICBtYXJnaW4tdG9wOiAuMjVyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbn1cXG5cXG4ud2VsY29tZSBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ud2VsY29tZSBzdmcge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDRlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBzdmcge1xcbiAgICAgICAgd2lkdGg6IDVyZW07XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgaGVhZGVyIGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBwYWRkaW5nOiAxZW0gMi41ZW07XFxuICAgIH1cXG4gICAgXFxuICAgIG5hdiB1bCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gc3ZnIHtcXG4gICAgICAgIHdpZHRoOiAyMGVtO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgfVxcblxcbiAgICAuaGVybyBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAuaGVybyBidXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLndlbGNvbWV7XFxuICAgICAgICBnYXA6IDRlbTtcXG4gICAgfVxcbiAgICAud2VsY29tZSBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG4gICAgLndlbGNvbWUgaDMge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICAgIC53ZWxjb21lIGRpdiBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgfVxcbiAgICAud2VsY29tZSBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgfVxcbiAgICAud2VsY29tZSBzdmcge1xcbiAgICAgICAgd2lkdGg6IDhlbTtcXG4gICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgcGFkZGluZzogMS41ZW07XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgaGVhZGVyLCAuaGVybywgLndlbGNvbWUsIGZvb3RlciB7XFxuICAgICAgICBwYWRkaW5nLWlubGluZTogMTAlO1xcbiAgICB9XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICB9IFxcblxcbiAgICAuaGVybyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAzZW07XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gLmhlcm8tbGVmdCAudGl0bGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgIFxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIHN2ZyB7XFxuICAgICAgICB3aWR0aDogMTVlbTtcXG4gICAgfVxcblxcbiAgICAuaGVybyBoMSwgLmhlcm8gcCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIC5idXR0b25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gaW1nIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA1MCUsIDYwcmVtKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgbmV3QnV0dG9uID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdCdXR0b247IiwiY29uc3QgbGlzdEl0ZW0gPSAoY29udGVudCwgZGF0YXMpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBpdGVtLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgaXRlbS5kYXRhc2V0LnBhZ2UgPSBkYXRhcztcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdEl0ZW07IiwiY29uc3Qgc3ZnU3RyaW5nID0gICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cXFxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIwIDFDMjEuNjU2OSAxIDIzIDIuMzQzMTUgMjMgNFYyMEMyMyAyMS42NTY5IDIxLjY1NjkgMjMgMjAgMjNINEMyLjM0MzE1IDIzIDEgMjEuNjU2OSAxIDIwVjRDMSAyLjM0MzE1IDIuMzQzMTUgMSA0IDFIMjBaTTIwIDNDMjAuNTUyMyAzIDIxIDMuNDQ3NzIgMjEgNFYyMEMyMSAyMC41NTIzIDIwLjU1MjMgMjEgMjAgMjFIMTVWMTMuOTk5OUgxNy4wNzYyQzE3LjUwNjYgMTMuOTk5OSAxNy44ODg3IDEzLjcyNDUgMTguMDI0OSAxMy4zMTYxTDE4LjQ2NzkgMTEuOTg3MUMxOC42Mjk4IDExLjUwMTQgMTguMjY4MyAxMC45OTk5IDE3Ljc1NjQgMTAuOTk5OUgxNVY4Ljk5OTkyQzE1IDguNDk5OTIgMTUuNSA3Ljk5OTkyIDE2IDcuOTk5OTJIMThDMTguNTUyMyA3Ljk5OTkyIDE5IDcuNTUyMiAxOSA2Ljk5OTkyVjYuMzEzOTNDMTkgNS45OTA5MSAxOC43OTM3IDUuNzAxMyAxOC40ODEzIDUuNjE4ODdDMTcuMTcwNSA1LjI3Mjk1IDE2IDUuMjcyOTUgMTYgNS4yNzI5NUMxMy41IDUuMjcyOTUgMTIgNi45OTk5MiAxMiA4LjQ5OTkyVjEwLjk5OTlIMTBDOS40NDc3MiAxMC45OTk5IDkgMTEuNDQ3NiA5IDExLjk5OTlWMTIuOTk5OUM5IDEzLjU1MjIgOS40NDc3MSAxMy45OTk5IDEwIDEzLjk5OTlIMTJWMjFINEMzLjQ0NzcyIDIxIDMgMjAuNTUyMyAzIDIwVjRDMyAzLjQ0NzcyIDMuNDQ3NzIgMyA0IDNIMjBaXCIgZmlsbD1cIiMwMDAwMDAgIFwiLz5cXFxuPC9zdmc+JztcblxuY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuY29uc3QgZmFjZWJvb2tMb2dvID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmdTdHJpbmcsICdpbWFnZS9zdmcreG1sJykucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZhY2Vib29rTG9nbzsiLCJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5wMS5pbm5lckhUTUwgPSAnQ29weXJpZ2h0ICZjb3B5OyAyMDIzIHwgUG93ZXJlZCBieSBWaW5jZW50IFRhbnV3aWRqYWphJztcbmNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucDIuaW5uZXJIVE1MID0gJ0FsbCByaWdodHMgcmVzZXJ2ZWQnO1xuXG5mb290ZXIuYXBwZW5kQ2hpbGQocDEpO1xuZm9vdGVyLmFwcGVuZENoaWxkKHAyKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyOyIsImltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5qcyc7XG5pbXBvcnQgbmF2TGlzdEl0ZW0gZnJvbSAnLi4vYnVpbGRlcnMvbmF2TGlzdEl0ZW0uanMnO1xuaW1wb3J0IG5ld0J1dHRvbiBmcm9tICcuLi9idWlsZGVycy9idXR0b25zLmpzJztcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbmNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaDEuaW5uZXJIVE1MID0gJ055YW0hJztcbmljb24uYXBwZW5kQ2hpbGQobG9nbyk7XG5pY29uLmFwcGVuZENoaWxkKGgxKTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5jb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmxpc3QuYXBwZW5kQ2hpbGQobmF2TGlzdEl0ZW0oJ0hvbWUnLCAnSG9tZScpKTtcbmxpc3QuYXBwZW5kQ2hpbGQobmF2TGlzdEl0ZW0oJ01lbnUnLCAnTWVudScpKTtcbmxpc3QuYXBwZW5kQ2hpbGQobmF2TGlzdEl0ZW0oJ0Fib3V0JywgJ0Fib3V0JykpO1xubGlzdC5hcHBlbmRDaGlsZChuYXZMaXN0SXRlbShuZXdCdXR0b24oJ0NvbnRhY3QnKS5vdXRlckhUTUwsICdDb250YWN0JykpO1xubmF2LmFwcGVuZENoaWxkKGxpc3QpO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyOyIsImltcG9ydCBsb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvbG9nby5qcyc7XG5pbXBvcnQgbmV3QnV0dG9uIGZyb20gJy4uL2J1aWxkZXJzL2J1dHRvbnMuanMnO1xuaW1wb3J0IG15SW1hZ2UgZnJvbSAnLi4vaW1nL2hlcm9JbWcuanBnJztcblxuY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuXG5jb25zdCBoZXJvTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGVyb0xlZnQuY2xhc3NMaXN0LmFkZCgnaGVyby1sZWZ0Jyk7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xudGl0bGUuYXBwZW5kQ2hpbGQobG9nbyk7XG5jb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5oMS5pbm5lckhUTUwgPSAnTnlhbTxzcGFuPiE8L3NwYW4+JztcbnRpdGxlLmFwcGVuZENoaWxkKGgxKTtcblxuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IGhlcm9UZXh0ID0gXCJJbmR1bGdlIGluIHRoZSBUYXN0ZSBvZiBNYWxheXNpYSBhdCBOeWFtISAtIEEgRmxhdm9yZnVsIEpvdXJuZXkgb2YgTWFsYXlzaWFuIEN1aXNpbmUhXCI7XG5wLmlubmVySFRNTCA9IGhlcm9UZXh0O1xuXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25zLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcbmJ1dHRvbnMuYXBwZW5kQ2hpbGQobmV3QnV0dG9uKCdNZW51JykpO1xuYnV0dG9ucy5hcHBlbmRDaGlsZChuZXdCdXR0b24oJ0NvbnRhY3QnKSk7XG5cbmhlcm9MZWZ0LmFwcGVuZENoaWxkKHRpdGxlKTtcbmhlcm9MZWZ0LmFwcGVuZENoaWxkKHApO1xuaGVyb0xlZnQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbmNvbnN0IGhlcm9JbWFnZSA9IG5ldyBJbWFnZSgpO1xuaGVyb0ltYWdlLnNyYyA9IG15SW1hZ2U7XG5cbmhlcm8uYXBwZW5kQ2hpbGQoaGVyb0xlZnQpO1xuaGVyby5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBoZXJvOyIsImNvbnN0IHN2Z1N0cmluZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIj5cXFxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyIDE4QzE1LjMxMzcgMTggMTggMTUuMzEzNyAxOCAxMkMxOCA4LjY4NjI5IDE1LjMxMzcgNiAxMiA2QzguNjg2MjkgNiA2IDguNjg2MjkgNiAxMkM2IDE1LjMxMzcgOC42ODYyOSAxOCAxMiAxOFpNMTIgMTZDMTQuMjA5MSAxNiAxNiAxNC4yMDkxIDE2IDEyQzE2IDkuNzkwODYgMTQuMjA5MSA4IDEyIDhDOS43OTA4NiA4IDggOS43OTA4NiA4IDEyQzggMTQuMjA5MSA5Ljc5MDg2IDE2IDEyIDE2WlwiIGZpbGw9XCIjOTQxZTQwXCIvPlxcXG48cGF0aCBkPVwiTTE4IDVDMTcuNDQ3NyA1IDE3IDUuNDQ3NzIgMTcgNkMxNyA2LjU1MjI4IDE3LjQ0NzcgNyAxOCA3QzE4LjU1MjMgNyAxOSA2LjU1MjI4IDE5IDZDMTkgNS40NDc3MiAxOC41NTIzIDUgMTggNVpcIiBmaWxsPVwiIzk0MWU0MFwiLz5cXFxuPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNjUzOTYgNC4yNzYwNkMxIDUuNTU5NTMgMSA3LjIzOTY5IDEgMTAuNlYxMy40QzEgMTYuNzYwMyAxIDE4LjQ0MDUgMS42NTM5NiAxOS43MjM5QzIuMjI5MiAyMC44NTI5IDMuMTQ3MDggMjEuNzcwOCA0LjI3NjA2IDIyLjM0NkM1LjU1OTUzIDIzIDcuMjM5NjkgMjMgMTAuNiAyM0gxMy40QzE2Ljc2MDMgMjMgMTguNDQwNSAyMyAxOS43MjM5IDIyLjM0NkMyMC44NTI5IDIxLjc3MDggMjEuNzcwOCAyMC44NTI5IDIyLjM0NiAxOS43MjM5QzIzIDE4LjQ0MDUgMjMgMTYuNzYwMyAyMyAxMy40VjEwLjZDMjMgNy4yMzk2OSAyMyA1LjU1OTUzIDIyLjM0NiA0LjI3NjA2QzIxLjc3MDggMy4xNDcwOCAyMC44NTI5IDIuMjI5MiAxOS43MjM5IDEuNjUzOTZDMTguNDQwNSAxIDE2Ljc2MDMgMSAxMy40IDFIMTAuNkM3LjIzOTY5IDEgNS41NTk1MyAxIDQuMjc2MDYgMS42NTM5NkMzLjE0NzA4IDIuMjI5MiAyLjIyOTIgMy4xNDcwOCAxLjY1Mzk2IDQuMjc2MDZaTTEzLjQgM0gxMC42QzguODg2ODQgMyA3LjcyMjI1IDMuMDAxNTYgNi44MjIwOCAzLjA3NTFDNS45NDUyNCAzLjE0Njc0IDUuNDk2ODQgMy4yNzY1OSA1LjE4NDA0IDMuNDM1OTdDNC40MzEzOSAzLjgxOTQ3IDMuODE5NDcgNC40MzEzOSAzLjQzNTk3IDUuMTg0MDRDMy4yNzY1OSA1LjQ5Njg0IDMuMTQ2NzQgNS45NDUyNCAzLjA3NTEgNi44MjIwOEMzLjAwMTU2IDcuNzIyMjUgMyA4Ljg4Njg0IDMgMTAuNlYxMy40QzMgMTUuMTEzMiAzLjAwMTU2IDE2LjI3NzcgMy4wNzUxIDE3LjE3NzlDMy4xNDY3NCAxOC4wNTQ4IDMuMjc2NTkgMTguNTAzMiAzLjQzNTk3IDE4LjgxNkMzLjgxOTQ3IDE5LjU2ODYgNC40MzEzOSAyMC4xODA1IDUuMTg0MDQgMjAuNTY0QzUuNDk2ODQgMjAuNzIzNCA1Ljk0NTI0IDIwLjg1MzMgNi44MjIwOCAyMC45MjQ5QzcuNzIyMjUgMjAuOTk4NCA4Ljg4Njg0IDIxIDEwLjYgMjFIMTMuNEMxNS4xMTMyIDIxIDE2LjI3NzcgMjAuOTk4NCAxNy4xNzc5IDIwLjkyNDlDMTguMDU0OCAyMC44NTMzIDE4LjUwMzIgMjAuNzIzNCAxOC44MTYgMjAuNTY0QzE5LjU2ODYgMjAuMTgwNSAyMC4xODA1IDE5LjU2ODYgMjAuNTY0IDE4LjgxNkMyMC43MjM0IDE4LjUwMzIgMjAuODUzMyAxOC4wNTQ4IDIwLjkyNDkgMTcuMTc3OUMyMC45OTg0IDE2LjI3NzcgMjEgMTUuMTEzMiAyMSAxMy40VjEwLjZDMjEgOC44ODY4NCAyMC45OTg0IDcuNzIyMjUgMjAuOTI0OSA2LjgyMjA4QzIwLjg1MzMgNS45NDUyNCAyMC43MjM0IDUuNDk2ODQgMjAuNTY0IDUuMTg0MDRDMjAuMTgwNSA0LjQzMTM5IDE5LjU2ODYgMy44MTk0NyAxOC44MTYgMy40MzU5N0MxOC41MDMyIDMuMjc2NTkgMTguMDU0OCAzLjE0Njc0IDE3LjE3NzkgMy4wNzUxQzE2LjI3NzcgMy4wMDE1NiAxNS4xMTMyIDMgMTMuNCAzWlwiIGZpbGw9XCIjMDAwMDAwXCIvPlxcXG48L3N2Zz4nO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5jb25zdCBpbnN0YWdyYW1Mb2dvID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmdTdHJpbmcsICdpbWFnZS9zdmcreG1sJykucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhZ3JhbUxvZ287IiwiY29uc3Qgc3ZnU3RyaW5nID0gJzxzdmcgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbD1cIiM5NDFlNDBcIiBkPVwiTTEyOCAzNTIuNTc2VjM1MmEyODggMjg4IDAgMCAxIDQ5MS4wNzItMjA0LjIyNCAxOTIgMTkyIDAgMCAxIDI3NC4yNCAyMDQuNDggNjQgNjQgMCAwIDEgNTcuMjE2IDc0LjI0QzkyMS42IDYwMC41MTIgODUwLjA0OCA3MTAuNjU2IDczNiA3NTYuOTkyVjgwMGE5NiA5NiAwIDAgMS05NiA5NkgzODRhOTYgOTYgMCAwIDEtOTYtOTZ2LTQzLjAwOGMtMTE0LjA0OC00Ni4zMzYtMTg1LjYtMTU2LjQ4LTIxNC41MjgtMzMwLjQ5NkE2NCA2NCAwIDAgMSAxMjggMzUyLjY0em02NC0uNTc2aDY0YTE2MCAxNjAgMCAwIDEgMzIwIDBoNjRhMjI0IDIyNCAwIDAgMC00NDggMHptMTI4IDBoMTkyYTk2IDk2IDAgMCAwLTE5MiAwem00MzkuNDI0IDBoNjguNTQ0QTEyOC4yNTYgMTI4LjI1NiAwIDAgMCA3MDQgMTkyYy0xNS4zNiAwLTI5Ljk1MiAyLjY4OC00My41MiA3LjYxNiAxMS4zMjggMTguMTc2IDIwLjY3MiAzNy43NiAyNy44NCA1OC4zMDRBNjQuMTI4IDY0LjEyOCAwIDAgMSA3NTkuNDI0IDM1MnpNNjcyIDc2OEgzNTJ2MzJhMzIgMzIgMCAwIDAgMzIgMzJoMjU2YTMyIDMyIDAgMCAwIDMyLTMydi0zMnptLTM0Mi41MjgtNjRoMzY1LjA1NmMxMDEuNTA0LTMyLjY0IDE2NS43Ni0xMjQuOTI4IDE5Mi44OTYtMjg4SDEzNi41NzZjMjcuMTM2IDE2My4wNzIgOTEuMzkyIDI1NS4zNiAxOTIuODk2IDI4OHpcIi8+PC9zdmc+JztcblxuLy8gQ3JlYXRlIGFuIFNWRyBlbGVtZW50IGZyb20gdGhlIFNWRyBzdHJpbmdcbmNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbmNvbnN0IGxvZ28gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Z1N0cmluZywgXCJpbWFnZS9zdmcreG1sXCIpLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ287IiwiaW1wb3J0IGZhY2Vib29rTG9nbyBmcm9tIFwiLi9mYWNlYm9va0xvZ29cIjtcbmltcG9ydCBpbnN0YWdyYW1Mb2dvIGZyb20gXCIuL2luc3RhZ3JhbUxvZ29cIjtcblxuXG5jb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xud2VsY29tZS5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmNvbnN0IHdlbGNvbWVUaXRsZSA9ICdXZWxjb21lIHRvIE55YW0hJztcbmgyLmlubmVySFRNTCA9IHdlbGNvbWVUaXRsZTtcblxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5jb25zdCBzdWJUaXRsZSA9ICdBdXRoZW50aWMgTWFsYXlzaWFuIGZvb2RzLCBzZXJ2aW5nIHNpbmNlIDE5NzUuJztcbmgzLmlubmVySFRNTCA9IHN1YlRpdGxlO1xuY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5wMS5pbm5lckhUTUwgPSAnRm91bmRlZCBpbiB0aGUgZGVhcnkgY2l0eSBvZiBTdWJhbmcgSmF5YSwgTWFsYXlzaWEuJztcblxuY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5wMi5pbm5lckhUTUwgPSAnRm9sbG93IG91ciBTb2NpYWwgTWVkaWEuJ1xuXG5kaXYuYXBwZW5kQ2hpbGQoaDMpO1xuZGl2LmFwcGVuZENoaWxkKHAxKTtcblxud2VsY29tZS5hcHBlbmRDaGlsZChoMik7XG53ZWxjb21lLmFwcGVuZENoaWxkKGRpdik7XG53ZWxjb21lLmFwcGVuZENoaWxkKHAyKTtcbndlbGNvbWUuYXBwZW5kQ2hpbGQoaW5zdGFncmFtTG9nbyk7XG53ZWxjb21lLmFwcGVuZENoaWxkKGZhY2Vib29rTG9nbyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWU7IiwiaW1wb3J0IGhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci5qcyc7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyLmpzJztcbmltcG9ydCByZW5kZXJIb21lUGFnZSBmcm9tICcuLi9wYWdlcy9ob21lUGFnZS5qcyc7XG5cbmNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlciwgYm9keS5maXJzdENoaWxkKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICByZW5kZXJIb21lUGFnZShjb250ZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkOyIsImltcG9ydCBoZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby5qcyc7XG5pbXBvcnQgd2VsY29tZSBmcm9tICcuLi9jb21wb25lbnRzL3dlbGNvbWUuanMnO1xuXG5jb25zdCByZW5kZXJIb21lUGFnZSA9IChwYXJlbnQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHdlbGNvbWUpO1xufSAgIFxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lUGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9jb250cm9sbGVycy9wYWdlTG9hZFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxucGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=