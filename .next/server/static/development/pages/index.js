module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/app */ "./src/app.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_static_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/static/app.css */ "./src/static/app.css");
/* harmony import */ var _src_static_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_static_app_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/pages/index.js";







var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "A Developer Named Ryan "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poiret+One",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_app__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_data_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./static/data.json */ "./src/static/data.json");
var _static_data_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/data.json */ "./src/static/data.json", 1);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _blocks_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/section */ "./src/blocks/section.js");
/* harmony import */ var _blocks_projectView_Sectionview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/projectView/Sectionview */ "./src/blocks/projectView/Sectionview.js");
/* harmony import */ var _static_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./static/theme */ "./src/static/theme.js");








var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/app.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\ndisplay:flex;\nmin-width:100vw;\nmin-height:100vh;\n\nbackground-color:", ";\n\n@media (max-width:800px){\n  flex-direction: column;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Container = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.container.mainBG;
}))({// Animations
});

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.handleSectionChange = _this.handleSectionChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.state = {
      activeSection: "all"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "handleSectionChange",
    value: function handleSectionChange(sec) {
      if (sec === this.state.activeSection) {
        sec = 'all';
      }

      this.setState({
        activeSection: sec
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeSection = this.state.activeSection;
      var isEntered = activeSection !== 'all';
      console.log(activeSection);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
        theme: _static_theme__WEBPACK_IMPORTED_MODULE_14__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_11__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, _static_data_json__WEBPACK_IMPORTED_MODULE_10__.sections.filter(function (val) {
        if (activeSection === 'all') {
          return true;
        }

        if (activeSection === val.side) {
          return true;
        }
      }).map(function (val, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_blocks_projectView_Sectionview__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          activeSection: activeSection,
          index: val.index
        }, val, _this2.props, {
          handleSectionChange: _this2.handleSectionChange,
          key: val.side,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }));
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);


{
  /* <Section  className='section' activeSection={activeSection} handleSectionChange={this.handleSectionChange} key={val.name}   index={i}  {...val} /> */
}

/***/ }),

/***/ "./src/blocks/projectView/Sectionview.js":
/*!***********************************************!*\
  !*** ./src/blocks/projectView/Sectionview.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sectionview; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _elements_view_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../elements/view/view */ "./src/elements/view/view.js");







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/blocks/projectView/Sectionview.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    width:100vw;\n    height:100%;\n    display:flex;\n    top: 0;\n    left: 0;\n    position:absolute;\n    \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\nposition: relative;\ntop: 50vh;\ntext-align: center;\ncolor:white;  \nwidth: calc(100vw/3);\n\n\n&:after{\n  transition: min-width .9s cubic-bezier(0.075, 0.82, 0.165, 1);\n    content: '';\n    position: absolute;\n    left: 50%;\n    top:130%;\n    transform: translateX(-50%);\n    background-color: white;\n    min-width: 0%;\n    height: 1px;\n\n  &:before{\n    \n  }\n\n  }\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    position: absolute;\n    right: 0;\n    opacity:", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\nbackground-image:url(", ");\nbackground-size: auto 100%;\nbackground-repeat: no-repeat;\n\nheight:100%;\n\nposition:absolute;\ntop:0;\nleft:0;\ntransform-origin: center!important;\n\noverflow:hidden;\n\n&:before{\n  content: \"\";\n  display:block;\n  position:absolute;\n  top:0;\n\n  width: 100%;\n  height: 100%;\n  background:", ";\n}\n\nwill-change: width scale ;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Container = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
  var splashImg = _ref.splashImg;
  return splashImg;
}, function (_ref2) {
  var overlay = _ref2.overlay;
  return overlay;
}))({
  enter: {
    x: function x(_ref3) {
      var index = _ref3.index,
          isActive = _ref3.isActive;

      if (isActive) {
        return "0%";
      } else {
        return index * 100 + '%';
      }
    },
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        delay: 300
      },
      x: {},
      width: function width(_ref4) {
        var isActive = _ref4.isActive;
        return isActive ? {
          delay: 300
        } : {
          delay: 0
        };
      }
    },
    width: function width(_ref5) {
      var isActive = _ref5.isActive;

      if (isActive) {
        return "100%";
      } else {
        return "calc(100vw/3)";
      }
    }
  },
  exit: {
    opacity: 0
  }
}); //sdf

var Icon = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.img(_templateObject2(), function (_ref6) {
  var isActive = _ref6.isActive;
  return isActive ? 1 : 0;
}))({});
var Title = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h1(_templateObject3()))({// Animationss
});
var SecondaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject4());

var Sectionview =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sectionview, _Component);

  function Sectionview() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sectionview);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Sectionview).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sectionview, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleSectionChange = _this$props.handleSectionChange,
          side = _this$props.side,
          activeSection = _this$props.activeSection,
          name = _this$props.name;
      var posedStatus = activeSection === side;
      var isActive = activeSection === side;
      console.log(posedStatus);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        isActive: isActive,
        posedStatus: posedStatus
      }, this.props, {
        onClick: function onClick() {
          return handleSectionChange(side);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SecondaryContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, isActive ? 'Home' : name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_elements_view_view__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        isActive: isActive,
        className: 'animated fadeIn'
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }))));
    }
  }]);

  return Sectionview;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); //sdfds




/***/ }),

/***/ "./src/blocks/projectView/card.js":
/*!****************************************!*\
  !*** ./src/blocks/projectView/card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PortCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/blocks/projectView/card.js";

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\npadding-right:'0px';\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    position:absolute;\n    opacity:1 !important;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\nz-index:999;\n    position:absolute;\n    content:'';\n    min-height:", ";\n    width:1px;\n    top: 50%;\n    transform: translateY(-50%) skew(20deg);\n    left: 50%;\n    background-color:", ";\n\n    @media(max-width:800px){\n      opacity:", "!important;\n    };\n    }\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  &:focus{\n    border:none;\n    outline:none;\n  }\n  \n  border-top-left-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  border-top-right-radius: ", ";\n\n  @media(max-width:900px){\n    background-color:", ";\n  }\n\n  /* border:", "; */\n  border:none;\n  border-width: ", ";\n\nflex-basis:20%;\n  cursor:pointer;\n  order: ", ";\n  width: 5em;\n  color: ", ";\n  font-size: 1em;\n  background: transparent;\n  margin-left: ", ";\n  min-height: 14em;\n  white-space:nowrap;\n  pointer-events:", ";\n\n\n  /* \n    @media (max-width:900px){\n       display:none;\n        } */\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  min-width: 0;\n  max-width: 9vh;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\ndisplay: flex;\n  flex-basis:", ";\n  \n  /* opacity:", "; */\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n      display:grid;\n      grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n\n        a{\n          transition:all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          cursor:pointer;\n          &:hover{\n            transform:scale(1.2);\n          }\n        }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\ngrid-template-columns: 1fr 1fr 1fr;\n  \n  width:80%;\n  display: grid;\n  justify-items: center;\n  align-content: center;\n  height: 100%;\n  padding: 1em 0 1em;\n  grid-row-gap: 1em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n border-top-left-radius:", ";\n    border-top-right-radius:", ";\n    border-bottom-left-radius:", ";\n    border-bottom-right-radius:", ";\n    border: 1px solid;\n    /* border-color:", "; */\nborder:none;\n  display: flex;\n  flex-direction: row;\n  width:100%;\n  overflow:hidden;\n  transform:", ";\n\n  a {\n    text-decoration: none;\n    justify-self:center;\n    color: ", ";\n    font-size: 1.5em;\n    @media(max-width:800px){\n      font-size: 3.5vw;\n    }\n    max-width: 3em;\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\nflex-direction: row;\n  display: flex;\n  background: #0d000d00;\n\n  @media(max-width:900px) {\n  width: 100%;\n  }\n  height:57vh;\n  width:100%;\n\n  will-change: transform;\n\n  p {\n    \n\n  }\n  h2 {\n    opacity:", ";\n    color:", ";\n    font-size:1.2em;\n    transition: opacity .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n  }\n\n  /* &::before{\n    position:absolute;\n    content:'';\n    min-height:", ";\n    width:1px;\n    top: 50%;\n    transform: translateY(-50%) skew(20deg);\n    left: 50%;\n    background-color: white;\n  } */\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Container = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
  var skillsStatus = _ref.skillsStatus;
  return skillsStatus === 'center' ? 1 : 0;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.card.text;
}, function (_ref3) {
  var ShuffleStatus = _ref3.ShuffleStatus;
  return ShuffleStatus === 'shuffleIn' ? '50%' : '100%';
}))({
  // Container Animations
  shuffleIn: {
    delay: 300,
    delayChildren: 600,
    y: "0%",
    opacity: 1
  },
  shuffleOut: {
    delay: 300,
    y: function y(_ref4) {
      var index = _ref4.index;
      return "-" + index * 100 + "%";
    },
    opacity: 1,
    transition: {
      ease: [0.01, 0.64, 0.79, 0.96],
      duration: 600
    }
  }
});
var SubContainer = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject2(), function (_ref5) {
  var side = _ref5.side;
  return side === 'left' ? '82px' : '0px';
}, function (_ref6) {
  var side = _ref6.side;
  return side === 'left' ? '0px' : '82px';
}, function (_ref7) {
  var side = _ref7.side;
  return side === 'left' ? '82px' : '0px';
}, function (_ref8) {
  var side = _ref8.side;
  return side === 'left' ? '0px' : '82px';
}, function (_ref9) {
  var side = _ref9.side;
  return side === 'left' ? '#90d8ce transparent #90d8ce #90d8ce ' : '#90d8ce #90d8ce #90d8ce transparent';
}, function (_ref10) {
  var side = _ref10.side;
  return side === 'left' ? 'translateX(0px)' : 'translateX(1px)';
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.global.color;
}))({
  // SubContainer Animations
  hide: {
    opacity: 0,
    maxWidth: 0,
    transition: {
      duration: 30
    }
  },
  show: {
    opacity: 1,
    transition: {
      opacity: {
        delay: 200
      }
    },
    maxWidth: "100%"
  },
  neutral: {
    opacity: 0,
    maxWidth: 0
  }
});
var Container_Skills = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject3()))({
  // Container_Skills Animations
  hide: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
});
var Container_Info = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject4()))({});
var Box = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject5(), function (_ref12) {
  var shiftDistance = _ref12.shiftDistance;
  return shiftDistance;
}, function (_ref13) {
  var active = _ref13.active;
  return active ? 1 : 0;
}))({
  // Box Animation
  show: {
    minWidth: "100%"
  },
  hide: {
    flexBasis: "0%",
    minWidth: "0%"
  },
  neutral: {
    minWidth: "50%",
    flexBasis: "50%",
    delay: 300
  }
});
var Img = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.img(_templateObject6()))({});
var Button = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.button(_templateObject7(), function (_ref14) {
  var side = _ref14.side;
  return side === "left" ? "82px" : "0px";
}, function (_ref15) {
  var side = _ref15.side;
  return side === "left" ? "82px" : "0x";
}, function (_ref16) {
  var side = _ref16.side;
  return side === "left" ? "0px" : "82px";
}, function (_ref17) {
  var side = _ref17.side;
  return side === "left" ? "0px" : "82px";
}, function (_ref18) {
  var status = _ref18.status,
      theme = _ref18.theme;
  return status === 'show' ? theme.card.modileButton + " !important" : "none";
}, function (_ref19) {
  var status = _ref19.status;
  return status === 'show' ? '1px red solid' : 'none';
}, function (_ref20) {
  var side = _ref20.side;
  return side === "left" ? "1px 1px 1px 0px" : "1px 0px 1px 1px";
}, function (_ref21) {
  var side = _ref21.side;
  return side === "left" ? "" : "-1";
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.global.color;
}, function (_ref23) {
  var side = _ref23.side;
  return side === "left" ? "auto" : "";
}, function (_ref24) {
  var ShuffleStatus = _ref24.ShuffleStatus;
  return ShuffleStatus === 'shuffleOut' ? 'none' : 'auto';
}))({
  // Button Animation
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  },
  neutral: {
    opacity: 1
  },
  shuffleOut: {
    maxWidth: 0
  },
  shuffleIn: {
    maxWidth: "100%"
  }
});
var Line = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.a(_templateObject8(), function (_ref25) {
  var ShuffleStatus = _ref25.ShuffleStatus;
  return ShuffleStatus === 'shuffleIn' ? '50%' : '100%';
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.card.lines;
}, function (_ref27) {
  var status = _ref27.status;
  return status === 'hide' || status === 'show' ? 0 : 1;
}))({
  // Line Animation
  show: {
    opacity: 1,
    y: "-50%",
    x: function x(_ref28) {
      var side = _ref28.side;
      return side === "left" ? "25vw" : "-25vw";
    },
    skew: "0deg"
  },
  hide: {
    x: function x(_ref29) {
      var side = _ref29.side;
      return side === "left" ? "25vw" : "-25vw";
    },
    skew: "0deg",
    opacity: 1,
    minHeight: "30%"
  },
  neutral: {
    x: "0",
    y: "-50%",
    skew: function skew(_ref30) {
      var ShuffleStatus = _ref30.ShuffleStatus;

      if (ShuffleStatus === 'shuffleOut') {
        return '20deg';
      }

      return '30deg';
    }
  },
  shuffleOut: {
    skew: "20deg",
    minHeight: "100%"
  },
  shuffleIn: {
    skew: "30deg",
    minHeight: "30%"
  }
});
var Header = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h2(_templateObject9()))({
  // Header Animation
  shuffleIn: {
    left: "40%"
  },
  shuffleOut: {
    y: function y(_ref31) {
      var index = _ref31.index;
      return "-" + index * 80 + "%";
    },
    left: function left(_ref32) {
      var index = _ref32.index;
      return 40 + "vw";
    }
  }
});
var Paragraph = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.p(_templateObject10()))({
  shuffleIn: {
    opacity: 1
  },
  shuffleOut: {
    opacity: 0
  }
}); // Component Inital State !!!!!!!
// 2 Boxs for each row has three states left right and center 

var initalState = {
  skillsStatus: "center"
}; // Main Component Export !!!!!!!!!

var PortCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PortCard, _Component);

  function PortCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PortCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PortCard).call(this, props));
    _this.state = initalState;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PortCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        skillsStatus: 'center'
      });
    }
  }, {
    key: "toggle",
    value: function toggle(side) {
      if (side === this.state.skillsStatus) {
        side = 'center';
      }

      this.setState({
        skillsStatus: side
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cardData = _this$props.cardData,
          ShuffleStatus = _this$props.ShuffleStatus,
          index = _this$props.index;
      var skillsStatus = this.state.skillsStatus;

      if (ShuffleStatus === 'shuffleOut' && skillsStatus !== "center") {
        this.reset();
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        ShuffleStatus: ShuffleStatus,
        skillsStatus: skillsStatus,
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Header, {
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, cardData.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DisplayBox, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ShuffleStatus: ShuffleStatus,
        skillsStatus: skillsStatus,
        side: "left"
      }, this.props, {
        toggle: this.toggle.bind(this),
        name: "Details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DisplayBox, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ShuffleStatus: ShuffleStatus,
        skillsStatus: skillsStatus,
        side: "right"
      }, this.props, {
        toggle: this.toggle.bind(this),
        name: "Stack",
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      })));
    }
  }]);

  return PortCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



var DisplayBox = function DisplayBox(_ref33) {
  var cardData = _ref33.cardData,
      skillsData = _ref33.skillsData,
      skillsStatus = _ref33.skillsStatus,
      ShuffleStatus = _ref33.ShuffleStatus,
      toggle = _ref33.toggle,
      side = _ref33.side,
      name = _ref33.name;

  // Is Side Active
  var status = function status() {
    if (skillsStatus === "center") {
      return "neutral";
    }

    if (skillsStatus === side) {
      return "show";
    } else {
      return "hide";
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Box, {
    pose: status(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubContainer, {
    side: side,
    pose: status(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, side === "left" ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Info, {
    cardData: cardData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Skills, {
    cardData: cardData.skills,
    skillsData: skillsData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Line, {
    status: status(),
    ShuffleStatus: ShuffleStatus,
    side: side,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Button, {
    ShuffleStatus: ShuffleStatus,
    onClick: function onClick() {
      return toggle(side);
    },
    status: status(),
    side: side,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, name)));
};

var Info = function Info(_ref34) {
  var cardData = _ref34.cardData;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container_Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: cardData.gitLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, "Github"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      gridRow: "1 / 3",
      gridColumn: "2/3"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, cardData.discription), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: cardData.pageLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, "Visit"));
};

var Skills = function Skills(_ref35) {
  var skillsData = _ref35.skillsData,
      cardData = _ref35.cardData;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container_Skills, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, skillsData.map(function (el, i) {
    var url = null;
    var val;
    cardData.map(function (cardskill) {
      if (cardskill === el.name) {
        url = el.img;
        val = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Img, {
          key: i,
          src: url,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 451
          },
          __self: this
        });
      }
    });
    return val;
  }));
};

/***/ }),

/***/ "./src/blocks/projectView/portNav.js":
/*!*******************************************!*\
  !*** ./src/blocks/projectView/portNav.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PortNav; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/blocks/projectView/portNav.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\nwidth: 66%;\nheight: 64px;\nborder: 1px solid;\nborder-color: transparent transparent white transparent;\nborder-radius: 0 0 240px 26%/75px;\nmargin: auto;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n        display:flex;\n      min-height:10vh;\n        width:100%;\n        align-items: center;\n        justify-content: space-around;\n        position: absolute;\n        top: 90vh;\n\n        /* position:", ";\n        width:", "; */\n\n        position:fixed;\n        width:70vw;\n\n        @media(max-width:900px){\n            width:100vw\n        }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  border: solid ", ";\n  border-radius: 2px;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  width: 2em;\n  height: 2em;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    position: absolute;\n    position:", ";\n    border-style:none;\n\n        &:focus{\n            border:none;\n            outline:none;\n          }\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Button = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.button(_templateObject(), function (_ref) {
  var ShuffleStatus = _ref.ShuffleStatus;
  return ShuffleStatus === 'shuffleOut' ? 'absolute' : 'fixed';
}))({
  init: {
    scale: 1,
    background: 'rgba(47, 183, 148, 0)'
  },
  hoverable: true,
  hover: {
    scale: 1.2,
    background: 'rgba(47, 183, 148, 0)'
  },
  shuffleIn: {
    color: 'rgb(255, 255, 255);'
  },
  shuffleOut: {
    color: 'rgb(0, 0, 0);'
  }
});
var Arrow = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.i(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.card.lines;
}, function (_ref3) {
  var left = _ref3.left;
  return left ? "transform: rotate(135deg);" : "transform: rotate(-45deg);";
}))({
  init: {
    scale: 1,
    rotate: function rotate(_ref4) {
      var left = _ref4.left;
      return left ? "135deg" : "-45deg";
    }
  },
  hoverable: true,
  hover: {
    scale: 1.2,
    background: 'rgba(47, 183, 148, 0)'
  },
  shuffleIn: {// opacity:0,
    // x:({left})=>left?'-50vw':'50vw'
  },
  shuffleOut: {
    delay: 600,
    opacity: 1 // x:({left})=>left?'0':'0'

  }
});
var Container = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject3(), function (_ref5) {
  var ShuffleStatus = _ref5.ShuffleStatus;
  return ShuffleStatus === 'shuffleOut' ? 'absolute' : 'fixed';
}, function (_ref6) {
  var ShuffleStatus = _ref6.ShuffleStatus;
  return ShuffleStatus === 'shuffleOut' ? 'null' : '70vw';
}))({
  shuffleOut: {
    backgroundColor: "rgba(244, 244, 249, 0)"
  },
  shuffleIn: {
    backgroundColor: "rgb(0, 0, 0)"
  }
}); //s

var Arch = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject4()))({}); // Main Compnent

var PortNav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PortNav, _Component);

  function PortNav() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PortNav);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PortNav).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PortNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleShuffle = _this$props.handleShuffle,
          handleNextPage = _this$props.handleNextPage,
          ShuffleStatus = _this$props.ShuffleStatus;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Arrow, {
        left: true,
        onClick: function onClick() {
          return handleNextPage();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Button, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        onClick: handleShuffle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Explore")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Arrow, {
        onClick: function onClick() {
          return handleNextPage('next');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }));
    }
  }]);

  return PortNav;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/blocks/section.js":
/*!*******************************!*\
  !*** ./src/blocks/section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _elements_view_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/view/view */ "./src/elements/view/view.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/blocks/section.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    width:100vh;\n    display:none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    position: absolute;\n    right: 0;\n    opacity:", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\nposition: relative;\n    top: 50vh;\ntext-align: center;\ncolor:white;  \n\n\n&:after{\n  transition: min-width .9s cubic-bezier(0.075, 0.82, 0.165, 1);\n    content: '';\n    position: absolute;\n    left: 50%;\n    top:130%;\n    transform: translateX(-50%);\n    background-color: white;\n    min-width: 0%;\n    height: 1px;\n\n  &:before{\n    \n  }\n\n  }\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n/* Mobile */\n\n@media (max-width:800px){\n  background-size:100% !important;\n/* \n  background-position:", "; */\n}\n\n/* Desktop */\n\n\n\ncursor: pointer;\nbackground-image:url(", ");\nbackground-size: auto 100%;\nbackground-repeat: no-repeat;\n\n\nwidth:calc(100vw/3);\n\n\n/* background-attachment: fixed; */\n\nwill-change:auto;\noverflow:none;\nposition:relative;\n\n\noverflow:hidden;\n\n&:hover{\n  /* flex-grow:1.3;\n  \n  h1:after{\n    min-width: 80%;\n  } */\n\n}\n\n&:before{\n  content: \"\";\n  display:block;\n  position:absolute;\n  top:0;\n\n  width: 100%;\n  height: 100%;\n  background:", ";\n}\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Container = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
  var side = _ref.side;

  switch (side) {
    case 'left':
      return 'top';
      break;

    case 'center':
      return '';
      break;

    case 'bottom':
      return '';
      break;
  }
}, function (_ref2) {
  var splashImg = _ref2.splashImg;
  return splashImg;
}, function (_ref3) {
  var overlay = _ref3.overlay;
  return overlay;
}))({
  exit: {
    transition: {
      scale: {
        duration: 3000
      }
    },
    scale: .7,
    opacity: 0
  },
  enter: {
    delay: 300,
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        delay: 300
      }
    }
  }
}); //sds

var Title = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h1(_templateObject2()))({// Animations
});
var Icon = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.img(_templateObject3(), function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive ? 1 : 0;
}))({});
var SecondaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject4());

var Section =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Section, _Component);

  function Section() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Section);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Section).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Section, [{
    key: "componentDidEnter",
    value: function componentDidEnter() {}
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          name = _this$props.name,
          activeSection = _this$props.activeSection,
          handleSectionChange = _this$props.handleSectionChange,
          side = _this$props.side;
      var isActive = activeSection === side;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onClick: function onClick() {
          return handleSectionChange(side);
        },
        isActive: isActive
      }, this.props, {
        ref: function ref(e) {
          return _this.container = e;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SecondaryContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Icon, {
        isActive: isActive,
        src: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1552591999/Personal-active-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, isActive ? 'Home' : name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_elements_view_view__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        isActive: isActive
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }))));
    }
  }]);

  return Section;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/elements/SectionHeader.js":
/*!***************************************!*\
  !*** ./src/elements/SectionHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/SectionHeader.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\njustify-self: start;\npadding-left: 1.5em;\nmargin-top: .5em;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\ncolor: ", ";\npadding-bottom: 1em;\nborder-bottom: 1px solid;\n\n\n\n/* &:after{\n    content:'';\n    height:1px;\n    width:3em;\n    \n} */\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Header = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.h2(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.card.text;
});
var HeaderContainer = react_pose__WEBPACK_IMPORTED_MODULE_8___default()(styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2()))({});

var SectionHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SectionHeader, _Component);

  function SectionHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SectionHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SectionHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SectionHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          main = _this$props.main,
          sub = _this$props.sub;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeaderContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, main), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("mata", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, sub));
    }
  }]);

  return SectionHeader;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/elements/view/clientView.js":
/*!*****************************************!*\
  !*** ./src/elements/view/clientView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClientView; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SectionHeader */ "./src/elements/SectionHeader.js");





var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/view/clientView.js";



var ClientView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ClientView, _Component);

  function ClientView() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientView);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ClientView).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        main: "Web/Productivity Solutions",
        sub: "Contractor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }));
    }
  }]);

  return ClientView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/elements/view/index.js":
/*!************************************!*\
  !*** ./src/elements/view/index.js ***!
  \************************************/
/*! exports provided: PersonalView, ClientView, ProjectlView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _personalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personalView */ "./src/elements/view/personalView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonalView", function() { return _personalView__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _clientView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientView */ "./src/elements/view/clientView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientView", function() { return _clientView__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectView */ "./src/elements/view/projectView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectlView", function() { return _projectView__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/elements/view/personalView.js":
/*!*******************************************!*\
  !*** ./src/elements/view/personalView.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalView; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/view/personalView.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    margin-top: 4em;\n    margin-bottom: 4em;\n\n        &:before,&::after{\n            display:inline-block;\n            left: 50%;\n            transform: translateX(-50%);\n            position:relative;\n            content:'';\n            width:30em;\n            height:1px;\n            background-color:black;\n        }\n\n        &:before{\n            top: -20px\n        }\n        &:after{\n            top: 20px\n        }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n        max-width:50%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n        display:flex;\n        text-align:center;\n        height:100%;\n        flex-direction: column;\n        align-items: center;\n  justify-content: center;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject());
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2());
var ParagraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject3());

var PersonalView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PersonalView, _Component);

  function PersonalView() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PersonalView);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PersonalView).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PersonalView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SubContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "The Whole Story"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ParagraphContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "short list of the most helpful Sketch plugins we could find, just for all of you. This one\u2019s about quality, not quantity, folks. Check out the links below and grab them all for free"))));
    }
  }]);

  return PersonalView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/elements/view/projectView.js":
/*!******************************************!*\
  !*** ./src/elements/view/projectView.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _blocks_projectView_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../blocks/projectView/card */ "./src/blocks/projectView/card.js");
/* harmony import */ var _blocks_projectView_portNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../blocks/projectView/portNav */ "./src/blocks/projectView/portNav.js");
/* harmony import */ var _static_section_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../static/section.json */ "./src/static/section.json");
var _static_section_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/section.json */ "./src/static/section.json", 1);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../SectionHeader */ "./src/elements/SectionHeader.js");







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/view/projectView.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\ntransition:opacity .6s linear;\n        opacity:1;\n\n        align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n     justify-items: center;\n     grid-template-rows: .3fr 1fr 1fr 1fr;\n    display: grid;\n    height: 100%;\n    width: 100%;\n    /* grid-gap: 2em; */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







 // Animations

var Animations = {
  svg: {
    enter: {
      x: 100
    },
    exit: {
      y: 300,
      opacity: 1
    }
  },
  container: {
    enter: {
      rotate: (1, 1, 1, "45deg")
    }
  } // Styled Compnents

};
var StyledPort = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());
var Container = react_pose__WEBPACK_IMPORTED_MODULE_8___default()(styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject2()))({});

var ProjectView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProjectView, _Component);

  function ProjectView(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectView);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectView).call(this, props));
    _this.handleShuffle = _this.handleShuffle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleNextPage = _this.handleNextPage.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      ShuffleStatus: 'shuffleOut',
      itemPos: {
        start: 0,
        end: 3
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectView, [{
    key: "handleNextPage",
    value: function handleNextPage(direction) {
      var max = _static_section_json__WEBPACK_IMPORTED_MODULE_12__.sites.length - 1;
      var start = this.state.itemPos.start;
      var end = this.state.itemPos.end;

      if (direction === 'next' && end <= max) {
        start = start + 3;
        end = end + 3;
      } else if (start === 0) {
        start = max - 2;
        end = max + 1;
      } else {
        start = start - 3;
        end = end - 3;
      }

      this.setState({
        itemPos: {
          start: start,
          end: end
        }
      });
    }
  }, {
    key: "handleShuffle",
    value: function handleShuffle() {
      var ShuffleStatus = this.state.ShuffleStatus;
      var status = ShuffleStatus === 'shuffleIn' ? 'shuffleOut' : 'shuffleIn';
      this.setState({
        ShuffleStatus: status
      });

      if (status === 'shuffleIn') {
        this.props.refViewContainer.style.overflowY = 'auto';
      } else {
        this.props.refViewContainer.scroll({
          top: 0,
          behavior: 'smooth'
        });
        this.props.refViewContainer.style.overflowY = 'hidden';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          ShuffleStatus = _this$state.ShuffleStatus,
          itemPos = _this$state.itemPos;
      var shownSites = _static_section_json__WEBPACK_IMPORTED_MODULE_12__.sites.slice(itemPos.start, itemPos.end);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        pose: ShuffleStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledPort, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        main: "Projects/OpenSource",
        sub: "A Portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), shownSites.map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_blocks_projectView_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          ShuffleStatus: ShuffleStatus,
          key: i,
          index: i,
          skillsData: _static_section_json__WEBPACK_IMPORTED_MODULE_12__.skills,
          cardData: el,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_blocks_projectView_portNav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        ShuffleStatus: ShuffleStatus,
        handleNextPage: this.handleNextPage,
        handleShuffle: this.handleShuffle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })));
    }
  }]);

  return ProjectView;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectView);

/***/ }),

/***/ "./src/elements/view/view.js":
/*!***********************************!*\
  !*** ./src/elements/view/view.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ */ "./src/elements/view/index.js");







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/view/view.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\nflex-basis:70%;\nposition:relative;\noverflow-y:hidden;\nmargin-right:0;\nbackground-color: #ffffff87;\n@media(min-width:900px){\n  opacity:", ";\n  max-width:100%;\n  min-height:100%;\n  max-height:100vh;\n\n}\n@media(max-width:900px){\n  max-height:", ";\n}\n\ntransition: opacity .4s linear .4;\n\noverflow-x:hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Container = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
  var isActive = _ref.isActive;
  return isActive ? '0' : '0';
}, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive ? '100%' : '0px';
}))({
  exit: {},
  enter: {}
});

var View =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(View, _Component);

  function View() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, View);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(View).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(View, [{
    key: "render",
    value: function render() {
      var _this = this;

      var side = this.props.side;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: function ref(e) {
          return _this.viewContainer = e;
        }
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), side === 'left' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(___WEBPACK_IMPORTED_MODULE_10__["PersonalView"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), side === 'center' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(___WEBPACK_IMPORTED_MODULE_10__["ClientView"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), side === 'right' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(___WEBPACK_IMPORTED_MODULE_10__["ProjectlView"], {
        refViewContainer: this.viewContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    }
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/static/app.css":
/*!****************************!*\
  !*** ./src/static/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/static/data.json":
/*!******************************!*\
  !*** ./src/static/data.json ***!
  \******************************/
/*! exports provided: sections, default */
/***/ (function(module) {

module.exports = {"sections":[{"name":"personal tidbits","splashImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1552457427/ryansWebsite/IMG_5740.jpg","overlay":"rgba(0,255,255, 0.5)","side":"left","index":0},{"name":"client info","splashImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1554149264/ryansWebsite/StockSnap_C088941D0B.jpg","overlay":"rgba(240,4,4, 0.4)","side":"center","index":1},{"name":"projects","splashImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1554149237/ryansWebsite/StockSnap_TJ20HKB9BY.jpg","overlay":"rgba(0, 0, 0, 0.41)","side":"right","index":2}]};

/***/ }),

/***/ "./src/static/section.json":
/*!*********************************!*\
  !*** ./src/static/section.json ***!
  \*********************************/
/*! exports provided: business, personal, education, skills, sites, default */
/***/ (function(module) {

module.exports = {"business":{"title":"Startups","content":[{"title":"Phantrix","type":"Clothing Company"},{"title":"JackTheHelper","type":"Student Staffing Company"},{"title":"Black Box Group","type":"Real Estate Group"}],"viewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1537298665/Portfolio/Phantrix.jpg"},"personal":{"title":"Personal","content":["Health Nut","Rock Climber","Life Long Learner","Mindful"],"viewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1537298666/Portfolio/glen-canyon.jpg","pageLink":"","gitLink":""},"education":{"title":"Education","content":["NAU","Chemisty/Psychology"],"viewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/e_brightness:-57/v1545683959/autumn-autumn-colours-bright-756903.jpg","pageLink":"","gitLink":""},"skills":[{"name":"react","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540233824/reactLogo.png","level":"90"},{"name":"meteor","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540234749/58480fcfcef1014c0b5e4942.png","level":"85"},{"name":"firebase","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540346207/firebaseLogo.png","level":"20"},{"name":"apollo","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540234062/apolloLogo.png","level":"60"},{"name":"graphql","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540234014/graphql.svg","level":"60"},{"name":"html","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540233628/css3-html5-logo.png"},{"name":"css","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540233588/CSS3_logo_and_wordmark.png"},{"name":"mongoDB","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540235002/MongoDB.png"},{"name":"node","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540233489/if_nodejs-512_339733.png","level":"90"},{"name":"express","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1551337498/expressjs-logo.png.png","level":"60"}],"sites":[{"name":"Bellcaptian","discription":"A tool for distributing cash for Bell and Valet departments. This tool allows employees to log into a dashboard and keep track of all past cash distributions. Managers can input all cash drops and hours worked and the app distributes the cash accordingly using an algorithm and then sends an automated text to all users of their new adjusted cash amount.","pageLink":"https://bellcaptain.herokuapp.com","previewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1548393916/screencapture-bellcaptain-herokuapp-Dash-2019-01-24-22_24_37.png","gitLink":"https://github.com/pogojam/bellcaptain","imgLink":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1545432169/Screen_Shot_2018-12-21_at_3.40.44_PM.png","skills":["react","node","meteor","graphql","react","mongoDB"]},{"name":"Slipgen","previewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1548394165/screencapture-slipgen-herokuapp-2019-01-24-22_26_55.png","gitLink":"https://github.com/pogojam/SlipGen","pageLink":"https://slipgen.herokuapp.com","discription":"Tool used to generate welcome slips for front desk agents. Slipgen excepts an xml document with guests names and generates a printable welcome slips with the companies logo.","url":"","skills":["react","node"]},{"name":"Thegirlimetathifi","discription":"","url":"www.theguyimetathifi.com","skills":["react","node"]},{"name":"CraigslistBot","discription":"This scrapper is build primarily as a tool to automate the buying and selling of products using craigslist. One can simply enter the name of a product and out comes an average selling price on the market a recommendation on a sell and buy price. CraigScraper will monitor Craigslist for any new entries and send an alert if any items match the recommended buy price.","url":"","gitLink":"https://github.com/pogojam/craigScraper","skills":["node","react","express"]},{"name":"AZButler","discription":"A single page website for Arizona Butler Services.","url":"www.azbutler.com","gitLink":"https://github.com/pogojam/AZButler","skills":["node","react","express"]},{"name":"FolderImporter","discription":"Automatically generate imports for new .js files created in your folders","url":"https://github.com/pogojam/folderImporter","gitLink":"https://github.com/pogojam/folderImporter","skills":["node"]}]};

/***/ }),

/***/ "./src/static/theme.js":
/*!*****************************!*\
  !*** ./src/static/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ThemeColor = 'black';
var Theme = {
  global: {
    color: 'black'
  },
  nav: {
    text: '#24ffcd',
    lineActive: '#24ffcd',
    lineHidden: 'black'
  },
  paragraph: {
    color: ThemeColor
  },
  header: {
    color: ThemeColor
  },
  card: {
    lines: ThemeColor,
    text: ThemeColor
  },
  container: {
    mainBG: "black"
  },
  section: {
    color: "blue"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Theme);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map