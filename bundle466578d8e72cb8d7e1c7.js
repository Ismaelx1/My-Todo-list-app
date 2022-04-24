/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Source+Sans+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 0;\n    margin: 0;\n}\n\n.header {\n    width: 100vw;\n    height: 20vh;\n    background-color: #090a23;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header > h1 {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 40px;\n}\n\n\n.container {\n    width: 100vw;\n    height: 80vh;\n\n    display: flex;\n  \n}\n\n.navdiv {\n    width: 18vw;\n    height: 82vh;\n    background-color: #090a23;\n    display: flex;\n    flex-direction: column;\n    border-top-right-radius: 10px;\n\n\n}\n\n.divnav {\n    width: 18vw;\n    height: 40px;\n    background-color: #090a23;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 20px;\n    border-bottom-right-radius: 10px;\n    margin-bottom: 10px;\n\n}\n\n.divnav:hover {\n    background-color: white;\n    color: #090a23;\n}\n\n.divnav:focus {\n    background-color: white;\n    color: #090a23;\n}\n\n\n\n.contentdiv {\n    width: 82vw;\n    height: 80vh;\n    display: flex;\nflex-direction: column;\n\n\n \n}\n.taskdiv {\n    width: 82vw;\n    height: fit-content;\n\n    display: flex;\n    flex-wrap: wrap;\n\n    justify-content: flex-start;\n    row-gap: 10px;\n    column-gap: 10px;\n   \n  \n}\n\n\n.s {\n    height: fit-content;\n    width: 250px;\n    background-color: #090a23;\n    border-radius: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 20px;\n}\n\n.newone {\n    height: fit-content;\n    width: 250px;\n    background: radial-gradient(circle, rgba(181,255,132,1) 0%, rgba(116,222,88,1) 48%, rgba(34,147,44,1) 100%);\n    border-radius: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: flex;\n\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 20px;\n}\n.txtTask {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 10px 0px 10px;\n\n}\n.taskname {\n\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 25px;\n    font-weight: bolder;\n\n}\n\n.taskdes {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 15px;\n\n\n}\n\n.duedate {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 20px;\n    font-weight: bold;\n    margin-top: 5px;\n}\n\n.priotask {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 20px;\n    font-weight: bold;\n    margin-top: 5px;\n    text-decoration:underline;\n    margin-bottom: 5px;\n}\n.btnTask {\n  display: flex;\n    \n}\nbutton {\n    height: 30px;\n    width: 78px;\n}\n.btn {\ndisplay: flex;\nwidth: 60px;\nheight: 60px;\nmargin: 0 auto;\n\n\n\n\n}\n#showBtn {\n   \n \n    cursor: pointer;\n \n}\n\n\n\n\n.form {\n    display: flex;\n    flex-direction: column;\n    z-index: 100;\n    gap: 5px;\n    align-content: center;\n    justify-content: center;\n    height: 400px;\n width: 500px;\n visibility: hidden;\nposition: absolute;\nmargin-top: 20px;\nmargin-left: 550px;\nbackground-color: #090a23;\nbackground-size: cover;\nborder-radius: 10px;\ntext-align: center;\n}\n.form > select {\n    width: 300px;\n    position: relative;\n    margin-left: 100px;\n}\n.form > h1{\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 25px;\n}\n.form > button {\n    width: 100px;\n    height: 30px;\n    border-radius: 8px;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-self: center;\n    display: inline-block;\n    font-size: 15px;\n    font-weight: 900;\n   \n\n    \n\n}\n\n.form > label {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 15px;\n}\n.form > button:hover {\n    background-color: lightslategray;\n}\n.form > input {\n    width: 200px;\n    height: 30px;\n    border: none;\n    cursor: pointer;\n    border-radius: 8px;\n    background-color: white;\n    display: flex;\n    align-self: center;\n    padding-left: 5px;\n \n   \n}\n#taskName {\n    width: 400px;\n}\n#taskDesc {\n    width: 350px;\n    height: 60px;\n}\n\n.btnthis {\nborder: 2px solid #ffffff ;\nbackground-color: #090a23;\ncolor: #ffffff;\ncursor: pointer;\nfont-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\nfont-style: italic;\nfont-size: 20px;\nwidth: 200px;\nheight: fit-content;\n\n\n}\n\n.btnthis:hover {\n   background-color: lightslategray;\n  \n}\n.BTNDIV {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    background-color: #090a23;\n    height: 100%;\n}\n.navcontainer {\n    display: flex;\n    flex-direction: column;\n}\n#projectName {\n    padding: 5px;\n    border-radius: 8px;\n    visibility: hidden;\n}\n.addProject {\n \n    color: #ffffff;\n    font-size: 20px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    visibility: hidden;\n    border: none;\n    cursor: pointer;\n    background-color: #090a23;\n    font-weight: bolder;\n    border: 2px solid #ffffff;\n}\n\n.addProject:hover {\n    background-color: lightslategray;\n}\n\n.proBtn {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    margin-left: 207px;\n    border-bottom-right-radius: 8px;\n    cursor: pointer;\n    border: none;\n    background-color: #090a23;\n    color: #ffffff;\n    font-size: larger;\n    font-weight: bolder;\n}\n\n.proBtn:hover {\n    background-color: crimson;\n}\n\n\n\n.formEdit {\n    display: flex;\n    flex-direction: column;\n    z-index: 100;\n    gap: 5px;\n    align-content: center;\n    justify-content: center;\n    height: 400px;\n width: 500px;\n visibility: hidden;\nposition: absolute;\nmargin-top: 20px;\nmargin-left: 550px;\nbackground-color: #090a23;\nbackground-size: cover;\nborder-radius: 10px;\ntext-align: center;\n}\n.formEdit > select {\n    width: 300px;\n    position: relative;\n    margin-left: 100px;\n}\n.formEdit > h1{\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 25px;\n}\n.formEdit > button {\n    width: 100px;\n    height: 30px;\n    border-radius: 8px;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-self: center;\n    display: inline-block;\n    font-size: 15px;\n    font-weight: 900;\n   \n\n    \n\n}\n\n.formEdit > label {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 15px;\n}\n.formEdit > button:hover {\n    background-color: lightslategray;\n}\n.formEdit > input {\n    width: 200px;\n    height: 30px;\n    border: none;\n    cursor: pointer;\n    border-radius: 8px;\n    background-color: white;\n    display: flex;\n    align-self: center;\n    padding-left: 5px;\n \n   \n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Source+Sans+Pro&display=swap');\n\nbody {\n    padding: 0;\n    margin: 0;\n}\n\n.header {\n    width: 100vw;\n    height: 20vh;\n    background-color: #090a23;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header > h1 {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 40px;\n}\n\n\n.container {\n    width: 100vw;\n    height: 80vh;\n\n    display: flex;\n  \n}\n\n.navdiv {\n    width: 18vw;\n    height: 82vh;\n    background-color: #090a23;\n    display: flex;\n    flex-direction: column;\n    border-top-right-radius: 10px;\n\n\n}\n\n.divnav {\n    width: 18vw;\n    height: 40px;\n    background-color: #090a23;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 20px;\n    border-bottom-right-radius: 10px;\n    margin-bottom: 10px;\n\n}\n\n.divnav:hover {\n    background-color: white;\n    color: #090a23;\n}\n\n.divnav:focus {\n    background-color: white;\n    color: #090a23;\n}\n\n\n\n.contentdiv {\n    width: 82vw;\n    height: 80vh;\n    display: flex;\nflex-direction: column;\n\n\n \n}\n.taskdiv {\n    width: 82vw;\n    height: fit-content;\n\n    display: flex;\n    flex-wrap: wrap;\n\n    justify-content: flex-start;\n    row-gap: 10px;\n    column-gap: 10px;\n   \n  \n}\n\n\n.s {\n    height: fit-content;\n    width: 250px;\n    background-color: #090a23;\n    border-radius: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 20px;\n}\n\n.newone {\n    height: fit-content;\n    width: 250px;\n    background: radial-gradient(circle, rgba(181,255,132,1) 0%, rgba(116,222,88,1) 48%, rgba(34,147,44,1) 100%);\n    border-radius: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: flex;\n\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    margin-left: 20px;\n}\n.txtTask {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 10px 0px 10px;\n\n}\n.taskname {\n\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 25px;\n    font-weight: bolder;\n\n}\n\n.taskdes {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 15px;\n\n\n}\n\n.duedate {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 20px;\n    font-weight: bold;\n    margin-top: 5px;\n}\n\n.priotask {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 20px;\n    font-weight: bold;\n    margin-top: 5px;\n    text-decoration:underline;\n    margin-bottom: 5px;\n}\n.btnTask {\n  display: flex;\n    \n}\nbutton {\n    height: 30px;\n    width: 78px;\n}\n.btn {\ndisplay: flex;\nwidth: 60px;\nheight: 60px;\nmargin: 0 auto;\n\n\n\n\n}\n#showBtn {\n   \n \n    cursor: pointer;\n \n}\n\n\n\n\n.form {\n    display: flex;\n    flex-direction: column;\n    z-index: 100;\n    gap: 5px;\n    align-content: center;\n    justify-content: center;\n    height: 400px;\n width: 500px;\n visibility: hidden;\nposition: absolute;\nmargin-top: 20px;\nmargin-left: 550px;\nbackground-color: #090a23;\nbackground-size: cover;\nborder-radius: 10px;\ntext-align: center;\n}\n.form > select {\n    width: 300px;\n    position: relative;\n    margin-left: 100px;\n}\n.form > h1{\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 25px;\n}\n.form > button {\n    width: 100px;\n    height: 30px;\n    border-radius: 8px;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-self: center;\n    display: inline-block;\n    font-size: 15px;\n    font-weight: 900;\n   \n\n    \n\n}\n\n.form > label {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 15px;\n}\n.form > button:hover {\n    background-color: lightslategray;\n}\n.form > input {\n    width: 200px;\n    height: 30px;\n    border: none;\n    cursor: pointer;\n    border-radius: 8px;\n    background-color: white;\n    display: flex;\n    align-self: center;\n    padding-left: 5px;\n \n   \n}\n#taskName {\n    width: 400px;\n}\n#taskDesc {\n    width: 350px;\n    height: 60px;\n}\n\n.btnthis {\nborder: 2px solid #ffffff ;\nbackground-color: #090a23;\ncolor: #ffffff;\ncursor: pointer;\nfont-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\nfont-style: italic;\nfont-size: 20px;\nwidth: 200px;\nheight: fit-content;\n\n\n}\n\n.btnthis:hover {\n   background-color: lightslategray;\n  \n}\n.BTNDIV {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    background-color: #090a23;\n    height: 100%;\n}\n.navcontainer {\n    display: flex;\n    flex-direction: column;\n}\n#projectName {\n    padding: 5px;\n    border-radius: 8px;\n    visibility: hidden;\n}\n.addProject {\n \n    color: #ffffff;\n    font-size: 20px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    visibility: hidden;\n    border: none;\n    cursor: pointer;\n    background-color: #090a23;\n    font-weight: bolder;\n    border: 2px solid #ffffff;\n}\n\n.addProject:hover {\n    background-color: lightslategray;\n}\n\n.proBtn {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    margin-left: 207px;\n    border-bottom-right-radius: 8px;\n    cursor: pointer;\n    border: none;\n    background-color: #090a23;\n    color: #ffffff;\n    font-size: larger;\n    font-weight: bolder;\n}\n\n.proBtn:hover {\n    background-color: crimson;\n}\n\n\n\n.formEdit {\n    display: flex;\n    flex-direction: column;\n    z-index: 100;\n    gap: 5px;\n    align-content: center;\n    justify-content: center;\n    height: 400px;\n width: 500px;\n visibility: hidden;\nposition: absolute;\nmargin-top: 20px;\nmargin-left: 550px;\nbackground-color: #090a23;\nbackground-size: cover;\nborder-radius: 10px;\ntext-align: center;\n}\n.formEdit > select {\n    width: 300px;\n    position: relative;\n    margin-left: 100px;\n}\n.formEdit > h1{\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 25px;\n}\n.formEdit > button {\n    width: 100px;\n    height: 30px;\n    border-radius: 8px;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-self: center;\n    display: inline-block;\n    font-size: 15px;\n    font-weight: 900;\n   \n\n    \n\n}\n\n.formEdit > label {\n    color: #ffffff;\n    font-family: 'Roboto Mono', 'Source Sans Pro', sans-serif;\n    font-style: italic;\n    font-size: 15px;\n}\n.formEdit > button:hover {\n    background-color: lightslategray;\n}\n.formEdit > input {\n    width: 200px;\n    height: 30px;\n    border: none;\n    cursor: pointer;\n    border-radius: 8px;\n    background-color: white;\n    display: flex;\n    align-self: center;\n    padding-left: 5px;\n \n   \n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myTasks": () => (/* binding */ myTasks),
/* harmony export */   "navFunc": () => (/* binding */ navFunc),
/* harmony export */   "proj0": () => (/* binding */ proj0),
/* harmony export */   "proj1": () => (/* binding */ proj1),
/* harmony export */   "proj2": () => (/* binding */ proj2),
/* harmony export */   "proj3": () => (/* binding */ proj3)
/* harmony export */ });
/* harmony import */ var _visibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visibility.js */ "./src/visibility.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");



let myTasks = [];
let proj0 = [];
let proj1 = [];
let proj2 = [];
let proj3 = [];

function navFunc() {
    const nav = document.querySelector('.navdiv')
     nav.addEventListener('click', () => {
      let e = event.target
       const container = document.getElementById('taskdiv')
        let divIndex = _visibility_js__WEBPACK_IMPORTED_MODULE_0__.navDiv.indexOf(e.textContent, 0)
      
      if (e.textContent === 'Home') {
        container.innerHTML = ''
        ;(0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(myTasks)
      }

    else if (divIndex == 1) {
        container.innerHTML = ''
        
        ;(0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(proj0)
      } else if (divIndex == 2) {
        container.innerHTML = ''
        
        ;(0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(proj1)
      } else if (divIndex == 3) {
        container.innerHTML = ''
        
        ;(0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(proj2)
      } else if (divIndex == 4) {
        container.innerHTML = ''
    
        ;(0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(proj3)
      } else if (divIndex != 1 || divIndex != 2 || divIndex != 3 || divIndex != 4 || divIndex != 0) {
        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(myTasks)
      }
    }) 
    return
}


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDelete": () => (/* binding */ createDelete),
/* harmony export */   "doneEffect": () => (/* binding */ doneEffect),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _visibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visibility.js */ "./src/visibility.js");


function renderTasks(rendArr) {
  const container = document.getElementById('taskdiv');
  const descInput = document.querySelector('#taskDesc');
  const taskInput = document.querySelector('#taskName');

  container.innerHTML = '';
  rendArr.forEach((task, index) => {
    const div = document.createElement('div');
    const divTxt = document.createElement('div');
    const divBtn = document.createElement('div');
    const taskName = document.createElement('div');
    const taskDescrip = document.createElement('div');
    const dueDate = document.createElement('div');
    const prioDiv = document.createElement('div');

    div.classList.add('s');
    divTxt.classList.add('txtTask');
    divBtn.classList.add('btnTask');
    taskName.classList.add('taskname');
    taskDescrip.classList.add('taskdes');
    dueDate.classList.add('duedate');
    prioDiv.classList.add('priotask');

    Object.keys(task).forEach((prop) => {
      if (prop === 'task') {
        taskName.textContent = task[prop];
      } else if (prop === 'desc') {
        taskDescrip.textContent = task[prop];
      } else if (prop === 'date') {
        dueDate.textContent = 'Before:' + ` ${task[prop]}`;
      } else if (prop === 'priority') {
        prioDiv.textContent = 'Priority:' + ` ${task[prop]}`;
      }
    });

    if (task.done) {
      div.classList.add('newone');
    } else if (!task.done) {
      div.classList.add('s');
    }

    container.append(div);
    div.append(divTxt);
    div.append(divBtn);
    divTxt.append(taskName);
    divTxt.append(taskDescrip);
    divTxt.append(dueDate);
    divTxt.append(prioDiv);
    divBtn.appendChild(doneEffect(task, div, rendArr));
    divBtn.append(createDelete(index, rendArr));
    divBtn.append(createEdit(index, rendArr));
    
  });
  taskInput.value = '';
  descInput.value = '';
  (0,_visibility_js__WEBPACK_IMPORTED_MODULE_0__.exitForm)();
}

function createDelete(index, arr) {
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';

  removeBtn.addEventListener('click', () => {
    arr.splice(index, 1);
    renderTasks(arr);
  });
  return removeBtn;
}

function doneEffect(task, had, thisa) {
  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.addEventListener('click', () => {
    if (task.done == false) {
      task.done = true;
      had.classList.add('newone');
    } else if (task.done == true) {
      task.done = false;
      had.classList.add('s');
    }
    renderTasks(thisa);
  });
  return doneBtn;
}

function createEdit(index, rendArr) {
  const editBtn = document.createElement('button');
 

  

  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    
showFormDetails(index, rendArr)
   
  })
  return editBtn
}


function showFormDetails(index, rendArr) {
  const formZShow = document.querySelector('.formEdit');
  formZShow.style.visibility = "visible"

  const addtaskEdits = document.querySelector('#addTaskEd')
  let taskInput = document.querySelector('#taskNameEd');
  let descInput = document.querySelector('#taskDescEd');
  let dueDateInp = document.querySelector('#apptEd')
  let prioInp = document.querySelector('#priorityEd')

  taskInput.value = rendArr[index].task
  descInput.value = rendArr[index].desc
  dueDateInp.value = rendArr[index].date
  prioInp.value = rendArr[index].priority
  
addtaskEdits.addEventListener('click', () => {

  rendArr[index].task = taskInput.value
  rendArr[index].desc = descInput.value 
  rendArr[index].date = dueDateInp.value
  rendArr[index].priority = prioInp.value

  console.log(rendArr) // New form for edit so new button
  renderTasks(rendArr)
  formZShow.style.visibility = "hidden"

})


}




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addtask": () => (/* binding */ addtask),
/* harmony export */   "calSelect": () => (/* binding */ calSelect)
/* harmony export */ });
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _visibility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visibility.js */ "./src/visibility.js");




function Task(task, description, date, priority) {
  this.task = task,
  this.desc = description,
  this.date = date,
  this.priority = priority,
  this.done = false
}

function calSelect(newTask) {
  let selectt = document.getElementById('project')

  if (selectt.value === 'Home') {
  _nav_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.push(newTask)
    return _nav_js__WEBPACK_IMPORTED_MODULE_0__.myTasks

  } else if (selectt.value === '1') {
    _nav_js__WEBPACK_IMPORTED_MODULE_0__.proj0.push(newTask)
     return _nav_js__WEBPACK_IMPORTED_MODULE_0__.proj0

  } else if (selectt.value === '2') {
    _nav_js__WEBPACK_IMPORTED_MODULE_0__.proj1.push(newTask)
     return _nav_js__WEBPACK_IMPORTED_MODULE_0__.proj1
   
  } else if (selectt.value === '3') {
    _nav_js__WEBPACK_IMPORTED_MODULE_0__.proj2.push(newTask)
     return _nav_js__WEBPACK_IMPORTED_MODULE_0__.proj2
 
  } else if (selectt.value === '4') {
    _nav_js__WEBPACK_IMPORTED_MODULE_0__.proj3.push(newTask)
     return _nav_js__WEBPACK_IMPORTED_MODULE_0__.proj3

  } else {
   _nav_js__WEBPACK_IMPORTED_MODULE_0__.myTasks.push(newTask)
   return _nav_js__WEBPACK_IMPORTED_MODULE_0__.myTasks
  }
}


function addtask(thisArr) {
  const taskInput = document.querySelector('#taskName')
  const descInput = document.querySelector('#taskDesc')
  const container = document.getElementById('taskdiv')
  const inputDate = document.querySelector('#appt')
  const prioInput = document.getElementById('priority')

    let taskpara = taskInput.value
    let descriptionpara = descInput.value
    let datee = inputDate.value
    let priority = prioInput.value
    let newTask = new Task(taskpara, descriptionpara, datee, priority)

  calSelect(newTask)
    ;(0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(thisArr)
      taskInput.value = ''
        descInput.value = ''
          container.innerHTML = ''
}




/***/ }),

/***/ "./src/visibility.js":
/*!***************************!*\
  !*** ./src/visibility.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectFunc": () => (/* binding */ addProjectFunc),
/* harmony export */   "exitForm": () => (/* binding */ exitForm),
/* harmony export */   "fillSelect": () => (/* binding */ fillSelect),
/* harmony export */   "hidePro": () => (/* binding */ hidePro),
/* harmony export */   "myOptions": () => (/* binding */ myOptions),
/* harmony export */   "navDiv": () => (/* binding */ navDiv),
/* harmony export */   "showForm": () => (/* binding */ showForm),
/* harmony export */   "showPro": () => (/* binding */ showPro)
/* harmony export */ });


let myOptions = [];
let navDiv = ['Home'];

function fillSelect() {
    let select = document.getElementById('project');
  select.innerHTML = '<option value="home">Home</option>' 
  for (let i = 1; i <= myOptions.length; i++) {
      let option = '<option value="'+ i + '" >' + myOptions[i-1] + '</option>';
      select.insertAdjacentHTML( 'beforeend', option );
  }
}

function exitForm() {
    const formShow = document.querySelector('.form')
    formShow.style.visibility = "hidden"
  }


 function hidePro() {
  const addProject = document.querySelector('.addProject')
    const inputProject = document.querySelector('#projectName')
    let proBtn = document.querySelector('.btnthis')

    inputProject.style.visibility = 'hidden'
    addProject.style.visibility = 'hidden'
    proBtn.style.visibility = 'visible'
  }

  function showPro() {
    let navLen = navDiv.length

   

    if (navLen <= 4) {
      const addProject = document.querySelector('.addProject')
      const inputProject = document.querySelector('#projectName')
      let proBtn = document.querySelector('.btnthis')
  
      proBtn.style.visibility = 'hidden'
      inputProject.style.visibility = 'visible'
      addProject.style.visibility = 'visible'
    } else {
      return
    }
  }

 function showForm() {
    const formShow = document.querySelector('.form')
    formShow.style.visibility = "visible"
  }
  
function addProjectFunc() {
  const nav = document.querySelector('.navdiv')
  const addProject = document.querySelector('.addProject')

addProject.addEventListener('click', () => {
  const inputProject = document.querySelector('#projectName')

  let div = document.createElement('div')
  
 
  if (!inputProject.value) {
 hidePro()
  } else if (inputProject.value) {

    div.classList.add('divnav')
    div.textContent = inputProject.value
    
 
    myOptions.push(inputProject.value)
    navDiv.push(inputProject.value)

 //   const navIndex = navDiv.indexOf(inputProject.value, 0)
 
 //   div.append(deletePro(navIndex))

    nav.append(div)
    inputProject.value = ''
    fillSelect()
    hidePro()
   // console.log(navDiv, myOptions)
//   renderNav()


  }
  return div
}
)

}
/* 
  export function deletePro(index) {

   let deleteBtn = document.createElement('button')
   deleteBtn.classList.add('proBtn')
   deleteBtn.textContent = 'X'

   deleteBtn.addEventListener('click', () => {
     navDiv.splice(index,  1)
     myOptions.splice(index, 1)
     console.log(navDiv, myOptions)
     renderNav()
     fillSelect()
   })
    return deleteBtn
 }



 export function renderNav() {

  const div = document.createElement('div')

  const nav = document.querySelector('.navdiv')

   nav.innerHTML = '<div class="divnav today">Home</div>' 


navDiv.forEach((divN) => {
  const navIndex = navDiv.indexOf(divN, 0)

 
   div.classList.add('divnav');
   div.textContent = divN;
   nav.append(div)
   div.append(deletePro(navIndex))
}
)
}
*/







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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _visibility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visibility.js */ "./src/visibility.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render.js */ "./src/render.js");







(0,_visibility_js__WEBPACK_IMPORTED_MODULE_1__.addProjectFunc)()
;(0,_nav_js__WEBPACK_IMPORTED_MODULE_3__.navFunc)()
 // renderNav()

const addTask = document.querySelector('#addTask')
addTask.addEventListener('click',() => {
  ;(0,_task_js__WEBPACK_IMPORTED_MODULE_2__.addtask)(_nav_js__WEBPACK_IMPORTED_MODULE_3__.myTasks)
})

  const showProject = document.querySelector('.btnthis')
showProject.addEventListener('click', _visibility_js__WEBPACK_IMPORTED_MODULE_1__.showPro)

const btnExit = document.querySelector('#exitform')
btnExit.addEventListener('click', _visibility_js__WEBPACK_IMPORTED_MODULE_1__.exitForm)

const showBtn = document.getElementById('showBtn')
showBtn.addEventListener('click', _visibility_js__WEBPACK_IMPORTED_MODULE_1__.showForm)





})();

/******/ })()
;
//# sourceMappingURL=bundle466578d8e72cb8d7e1c7.js.map