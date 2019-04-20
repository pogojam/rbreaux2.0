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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poiret+One",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Main-Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "loadingscreen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Splash-Logo animated fadeIn ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Splash-Logo-Letter-Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Splash-Logo-Letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "R")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Splash-Logo-Letter-Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Splash-Logo-Letter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "B"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lds-ring",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_app__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })));
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
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _blocks_projectView_Sectionview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/projectView/Sectionview */ "./src/blocks/projectView/Sectionview.js");
/* harmony import */ var _static_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./static/theme */ "./src/static/theme.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! style-value-types */ "style-value-types");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(style_value_types__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/app.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\ndisplay:flex;\nmin-width:100vw;\nmin-height:100%;\n\nbackground-color:", ";\n\n@media (max-width:800px){\n  flex-direction: column;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Container = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.container.mainBG;
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
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        document.getElementById('loadingscreen').className += " " + 'loadingscreen-out';
      }, 2000);
    }
  }, {
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
        theme: _static_theme__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_11__["CSSTransitionGroup"], {
        transitionName: "section",
        transitionEnterTimeout: 1500,
        transitionLeaveTimeout: 1100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
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
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_blocks_projectView_Sectionview__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          activeSection: activeSection,
          index: val.index
        }, val, _this2.props, {
          handleSectionChange: _this2.handleSectionChange,
          key: val.side,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }));
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./src/blocks/Nav.js":
/*!***************************!*\
  !*** ./src/blocks/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
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
/* harmony import */ var _projectView_SVG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectView/SVG */ "./src/blocks/projectView/SVG.js");
/* harmony import */ var _static_data_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/data.json */ "./src/static/data.json");
var _static_data_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/data.json */ "./src/static/data.json", 1);






var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/blocks/Nav.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    position:absolute;\n    background-color:#00000047;\n    right:0;\n    width:5vw;\n    height:100vh;\n    box-shadow: 5px 4px 10px 2px rgba(0,0,0,0.75);\n    border-bottom-left-radius: 29px;\n    border-bottom-right-radius: 29px;\n    top:-110vh;\n    transform:", ";\n    will-change:transform;\n    transition:transform .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) ;\n    display: flex;\n    justify-content: flex-end;\n    flex-direction: column;\n    padding:.5em;\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\ncursor:pointer;\n  padding-bottom: 15px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ViewSVG = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_projectView_SVG__WEBPACK_IMPORTED_MODULE_8__["default"])(_templateObject());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2(), function (_ref) {
  var isActive = _ref.isActive;
  return isActive ? 'translateX(100%) translateY(25vh)' : 'translateX(50%)';
});
var SectionsNameArray = ['personal', 'client', 'projects'];

var Nav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Nav, _Component);

  function Nav() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nav);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nav).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          icon = _this$props.icon,
          isActive = _this$props.isActive,
          handleSectionChange = _this$props.handleSectionChange,
          side = _this$props.side;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container, {
        isActive: isActive,
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ViewSVG, {
        action: function action() {
          return handleSectionChange(side);
        },
        color: isActive ? 'white' : null,
        type: icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/blocks/projectView/SVG.js":
/*!***************************************!*\
  !*** ./src/blocks/projectView/SVG.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SVG; });
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







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/blocks/projectView/SVG.js";

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\nopacity:", ";\n\n\n\n\ntransition:opacity .5s cubic-bezier(0.455, 0.03, 0.515, 0.955) ;\nwill-change:opacity;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\nposition: relative;\n    top: 39px;\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n.gear1{\n    transform-origin: 25px 55px;\n    animation:", " 3.5s infinite linear;\n    will-change: transform;\n}\n\n.gear2{\n    transform-origin: 78px 46px;\n    animation:", " 4s infinite linear ;\n    will-change: transform;\n}\n\n.gear3{\n    transform-origin: 53px 29px;\n    animation:", " 5s infinite linear backwards;\n    will-change: transform;\n}\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n        from{\n            transform:rotate(0deg);\n        }to{\n            transform:rotate(-360deg)\n        }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n        from{\n            transform:rotate(0deg);\n        }to{\n            transform:rotate(360deg)\n        }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n   \n\n    transition:opacity .5s linear;\n\n        .cloud1{\n            animation:", " 25s infinite;\n        }\n        .cloud2{\n            animation:", " 35s infinite;\n        }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    55%{\n        opacity:1;\n        transform:translateX(-20px);\n\n    }\n    }100%{\n        opacity:1;\n        transform:translateX(10px);\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    25%{\n        opacity:1;\n        transform:translateX(30px);\n\n    }\n    }100%{\n        opacity:1;\n        transform:translateX(0px);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CloudSVG = function CloudSVG(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
    className: className,
    width: "162px",
    height: "104px",
    viewBox: "0 0 162 104",
    version: "1.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Page-4",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Desktop-HD",
    transform: "translate(-507.000000, -391.000000)",
    stroke: "black",
    "stroke-width": "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Cloud",
    transform: "translate(507.000000, 391.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    d: "M41.7822001,36.6549436 L41.6025322,37.9485981 L33.7757009,37.9485981 C15.9503235,37.9485981 1.5,52.3989216 1.5,70.2242991 C1.5,88.0496765 15.9503235,102.5 33.7757009,102.5 L128.224299,102.5 C146.049676,102.5 160.5,88.0496765 160.5,70.2242991 C160.5,52.3989216 146.049676,37.9485981 128.224299,37.9485981 L122.8299,37.9485981 L122.650232,36.6549436 C119.865802,16.6063457 102.65253,1.5 82.2162162,1.5 C61.7799028,1.5 44.56663,16.6063457 41.7822001,36.6549436 Z",
    id: "Combined-Shape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })))));
};

var GitSVG = function GitSVG(_ref2) {
  var className = _ref2.className;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: "49",
    height: "49",
    viewBox: "0 0 438.549 438.549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

var LinkedInSVG = function LinkedInSVG(_ref3) {
  var className = _ref3.className;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: "49",
    height: "49",
    viewBox: "0 0 49.652 49.652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    d: "M29.35 21.298c-2.125 0-3.074 1.168-3.605 1.988v-1.704h-4.002c.052 1.128 0 12.041 0 12.041h4.002v-6.727c0-.359.023-.72.131-.977.29-.72.948-1.465 2.054-1.465 1.448 0 2.027 1.104 2.027 2.724v6.442h4.003v-6.905c-.002-3.696-1.977-5.417-4.61-5.417zm-3.608 2.03h-.025c.008-.014.02-.027.025-.041v.041zM15.523 21.582h4.002v12.041h-4.002z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    d: "M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zm13.165 36.055c0 1.056-.876 1.91-1.959 1.91H13.451c-1.08 0-1.957-.854-1.957-1.91V13.211c0-1.055.877-1.91 1.957-1.91h22.581c1.082 0 1.959.856 1.959 1.91v22.844z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    d: "M17.551 15.777c-1.368 0-2.264.898-2.264 2.08 0 1.155.869 2.08 2.211 2.08h.026c1.396 0 2.265-.925 2.265-2.08-.027-1.181-.868-2.08-2.238-2.08z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

var MountainSVG = function MountainSVG(_ref4) {
  var className = _ref4.className,
      color = _ref4.color,
      clouds = _ref4.clouds;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
    className: className,
    width: "100%",
    height: "69px",
    viewBox: "0 0 146 69",
    version: "1.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "MountainIcon"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("desc", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Created with Sketch."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "r",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Desktop-HD",
    transform: "translate(-174.000000, -542.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "MountainIcon",
    transform: "translate(174.000000, 543.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Mountains",
    transform: "translate(11.000000, 11.000000)",
    opacity: "0.83140346",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("polygon", {
    id: "Triangle",
    fill: color,
    points: "46 13.8102979 92 56.8102979 0 56.8102979",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("polygon", {
    id: "Triangle",
    fill: color,
    points: "69.5 9.59232693e-14 93 56.8102979 46 56.8102979",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("polygon", {
    id: "Triangle",
    fill: color,
    points: "88 25.8102979 108 56.8102979 68 56.8102979",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Clouds",
    fill: clouds,
    opacity: "0.440964472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    className: "cloud1",
    d: "M8.07334531,11.1053876 C8.02490079,10.7244853 8,10.3370621 8,9.9443518 C8,4.42150431 12.9248678,-0.0556481964 19,-0.0556481964 C24.3244645,-0.0556481964 28.7653648,3.38343184 29.7815415,7.95144703 C29.8791672,7.9467376 29.9758159,7.9443518 30.0714305,7.9443518 C36.0711433,7.9443518 41,12.900353 41,16.3317253 C41,19.7630977 36.1362718,22.5447746 30.1365591,22.5447746 C25.3875676,22.5447746 18.0465379,23.5824432 15.1922411,22.3133846 C13.7801106,22.7171483 12.1864883,22.9443518 10.5,22.9443518 C4.70101013,22.9443518 0,20.2580603 0,16.9443518 C0,14.1079302 3.44432515,11.7312031 8.07334531,11.1053876 Z",
    id: "Combined-Shape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    className: "cloud2",
    d: "M113.997163,8.70307545 C113.997249,8.36405502 114.015257,8.02206419 114.051957,7.67798823 C114.653125,2.04185897 120.879649,1.58736386 126.926225,2.21359526 C131.977084,2.73670222 135.30469,3.84843643 135.913267,7.48549464 C135.991107,7.49044888 136.068144,7.49685715 136.144346,7.50474923 C142.027502,8.11405546 146.339637,13.4988359 145.978936,16.8805134 C145.618235,20.262191 140.556589,22.509642 134.673434,21.9003358 C130.540467,21.4722929 124.319494,21.6424332 121.108948,20.6091159 C119.333742,21.097827 117.234932,21.2734491 115.019641,21.044016 C109.136486,20.4347097 104.659652,17.1993781 105.020353,13.8177006 C105.332349,10.8926452 109.161479,8.81619087 113.997163,8.70307545 Z",
    id: "Combined-Shape-Copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))))));
};

var GearSVG = function GearSVG(_ref5) {
  var className = _ref5.className,
      color = _ref5.color;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
    className: className,
    width: "100%",
    height: "69px",
    viewBox: "0 0 100 79",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "GearSVG"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "r",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    fillOpacity: "0.601879371",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Desktop-HD",
    transform: "translate(-1180.000000, -564.000000)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Group-3",
    transform: "translate(1180.000000, 564.000000)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    className: "gear1",
    d: "M28.008238,34.7376372 C29.2714022,34.9552036 30.4960905,35.285238 31.6716213,35.7170587 L34.4387851,34.1565199 L37.874769,36.1402861 L37.9069539,39.3238348 C38.8767982,40.1341128 39.7726643,41.0299789 40.5829423,41.9998231 L43.7664909,42.032008 L45.7502572,45.467992 L44.1897184,48.2351558 C44.6215391,49.4106866 44.9515735,50.6353749 45.1691399,51.8985391 L47.9067771,53.5162338 L47.9067771,57.4837662 L45.1691399,59.1014609 C44.9515735,60.3646251 44.6215391,61.5893134 44.1897184,62.7648442 L45.7502572,65.532008 L43.7664909,68.967992 L40.5829423,69.0001769 C39.7726643,69.9700211 38.8767982,70.8658872 37.9069539,71.6761652 L37.874769,74.8597139 L34.4387851,76.8434801 L31.6716213,75.2829413 C30.4960905,75.714762 29.2714022,76.0447964 28.008238,76.2623628 L26.3905433,79 L22.4230108,79 L20.8053162,76.2623628 C19.542152,76.0447964 18.3174637,75.714762 17.1419329,75.2829413 L14.374769,76.8434801 L10.9387851,74.8597139 L10.9066002,71.6761652 C9.93675593,70.8658872 9.04088988,69.9700211 8.23061185,69.0001769 L5.0470632,68.967992 L3.06329697,65.532008 L4.62383574,62.7648442 C4.19201504,61.5893134 3.86198068,60.3646251 3.64441423,59.1014609 L0.906777075,57.4837662 L0.906777075,53.5162338 L3.64441423,51.8985391 C3.86198068,50.6353749 4.19201504,49.4106866 4.62383574,48.2351558 L3.06329697,45.467992 L5.0470632,42.032008 L8.23061185,41.9998231 C9.04088988,41.0299789 9.93675593,40.1341128 10.9066002,39.3238348 L10.9387851,36.1402861 L14.374769,34.1565199 L17.1419329,35.7170587 C18.3174637,35.285238 19.542152,34.9552036 20.8053162,34.7376372 L22.4230108,32 L26.3905433,32 L28.008238,34.7376372 Z M24.4067771,71.7068966 C33.3575989,71.7068966 40.6136736,64.4508218 40.6136736,55.5 C40.6136736,46.5491782 33.3575989,39.2931034 24.4067771,39.2931034 C15.4559553,39.2931034 8.19988052,46.5491782 8.19988052,55.5 C8.19988052,64.4508218 15.4559553,71.7068966 24.4067771,71.7068966 Z",
    id: "Combined-Shape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    className: "gear2",
    d: "M90.5452405,30.856356 C91.4531799,31.6149141 92.291863,32.4535972 93.0504211,33.3615365 L96.0307645,33.3916671 L97.8879074,36.6083329 L96.4269775,39.1988693 C96.8312351,40.2993662 97.1402035,41.4458829 97.3438827,42.6284196 L99.9067771,44.1428571 L99.9067771,47.8571429 L97.3438827,49.3715804 C97.1402035,50.5541171 96.8312351,51.7006338 96.4269775,52.8011307 L97.8879074,55.3916671 L96.0307645,58.6083329 L93.0504211,58.6384635 C92.291863,59.5464028 91.4531799,60.3850859 90.5452405,61.143644 L90.51511,64.1239875 L87.2984442,65.9811303 L84.7079078,64.5202004 C83.6074109,64.9244581 82.4608942,65.2334264 81.2783575,65.4371056 L79.7639199,68 L76.0496342,68 L74.5351966,65.4371056 C73.3526599,65.2334264 72.2061433,64.9244581 71.1056463,64.5202004 L68.51511,65.9811303 L65.2984442,64.1239875 L65.2683136,61.143644 C64.3603743,60.3850859 63.5216912,59.5464028 62.763133,58.6384635 L59.7827896,58.6083329 L57.9256468,55.3916671 L59.3865767,52.8011307 C58.982319,51.7006338 58.6733507,50.5541171 58.4696714,49.3715804 L55.9067771,47.8571429 L55.9067771,44.1428571 L58.4696714,42.6284196 C58.6733507,41.4458829 58.982319,40.2993662 59.3865767,39.1988693 L57.9256468,36.6083329 L59.7827896,33.3916671 L62.763133,33.3615365 C63.5216912,32.4535972 64.3603743,31.6149141 65.2683136,30.856356 L65.2984442,27.8760125 L68.51511,26.0188697 L71.1056463,27.4797996 C72.2061433,27.0755419 73.3526599,26.7665736 74.5351966,26.5628944 L76.0496342,24 L79.7639199,24 L81.2783575,26.5628944 C82.4608942,26.7665736 83.6074109,27.0755419 84.7079078,27.4797996 L87.2984442,26.0188697 L90.51511,27.8760125 L90.5452405,30.856356 Z M77.9067771,61.1724138 C86.2862698,61.1724138 93.0791909,54.3794928 93.0791909,46 C93.0791909,37.6205072 86.2862698,30.8275862 77.9067771,30.8275862 C69.5272843,30.8275862 62.7343633,37.6205072 62.7343633,46 C62.7343633,54.3794928 69.5272843,61.1724138 77.9067771,61.1724138 Z",
    id: "Combined-Shape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    className: "gear3",
    d: "M57.3511331,3.37836074 C58.9099315,3.646847 60.4212489,4.05412345 61.8719039,4.58700856 L65.2867019,2.66123732 L69.5268523,5.10928926 L69.5665698,9.03792377 C70.7633989,10.0378413 71.8689357,11.1433782 72.8688533,12.3402073 L76.7974878,12.3799248 L79.2455398,16.6200752 L77.3197685,20.0348731 C77.8526536,21.4855281 78.2599301,22.9968456 78.5284163,24.555644 L81.9067771,26.5519481 L81.9067771,31.4480519 L78.5284163,33.444356 C78.2599301,35.0031544 77.8526536,36.5144719 77.3197685,37.9651269 L79.2455398,41.3799248 L76.7974878,45.6200752 L72.8688533,45.6597927 C71.8689357,46.8566218 70.7633989,47.9621587 69.5665698,48.9620762 L69.5268523,52.8907107 L65.2867019,55.3387627 L61.8719039,53.4129914 C60.4212489,53.9458766 58.9099315,54.353153 57.3511331,54.6216393 L55.354829,58 L50.4587251,58 L48.4624211,54.6216393 C46.9036227,54.353153 45.3923052,53.9458766 43.9416502,53.4129914 L40.5268523,55.3387627 L36.2867019,52.8907107 L36.2469843,48.9620762 C35.0501552,47.9621587 33.9446184,46.8566218 32.9447008,45.6597927 L29.0160663,45.6200752 L26.5680144,41.3799248 L28.4937856,37.9651269 C27.9609005,36.5144719 27.5536241,35.0031544 27.2851378,33.444356 L23.9067771,31.4480519 L23.9067771,26.5519481 L27.2851378,24.555644 C27.5536241,22.9968456 27.9609005,21.4855281 28.4937856,20.0348731 L26.5680144,16.6200752 L29.0160663,12.3799248 L32.9447008,12.3402073 C33.9446184,11.1433782 35.0501552,10.0378413 36.2469843,9.03792377 L36.2867019,5.10928926 L40.5268523,2.66123732 L43.9416502,4.58700856 C45.3923052,4.05412345 46.9036227,3.646847 48.4624211,3.37836074 L50.4587251,0 L55.354829,0 L57.3511331,3.37836074 Z M52.9067771,49 C63.9524721,49 72.9067771,40.045695 72.9067771,29 C72.9067771,17.954305 63.9524721,9 52.9067771,9 C41.8610821,9 32.9067771,17.954305 32.9067771,29 C32.9067771,40.045695 41.8610821,49 52.9067771,49 Z",
    id: "Combined-Shape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })))));
};

var SuitcaseSVG = function SuitcaseSVG(_ref6) {
  var className = _ref6.className,
      color = _ref6.color;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
    className: className,
    width: "100%",
    height: "47px",
    viewBox: "0 0 62 47",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Splash",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    fillOpacity: "0.606807255",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Desktop-HD",
    transform: "translate(-736.000000, -564.000000)",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    d: "M796.220526,576.192962 L757.563394,611 L742.813187,611 C739.050368,611 736,607.989075 736,604.274911 L736,580.725089 C736,577.010925 739.050368,574 742.813187,574 L753,574 C753,568.477153 757.433473,564 762.902439,564 L772.097561,564 C777.566527,564 782,568.477153 782,574 L791.186813,574 C793.180721,574 794.974578,574.845441 796.220526,576.192962 Z M798,582.664513 L798,604.274911 C798,607.989075 794.949632,611 791.186813,611 L766.530253,611 L798,582.664513 Z M756.536585,574 L778.463415,574 C778.463415,570.055109 775.296648,566.857143 771.390244,566.857143 L763.609756,566.857143 C759.703352,566.857143 756.536585,570.055109 756.536585,574 Z",
    id: "Combined-Shape",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))));
};

var MonitorSVG = function MonitorSVG(_ref7) {
  var className = _ref7.className,
      color = _ref7.color;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
    className: className,
    width: "176px",
    height: "131px",
    viewBox: "0 0 176 131",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Monitor",
    stroke: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
    d: "M173.5,100 L2.5,100",
    id: "Line-Copy-2",
    strokeLinecap: "square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle",
    strokeWidth: "2",
    x: "1",
    y: "1",
    width: "174",
    height: "110",
    rx: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle",
    strokeWidth: "2",
    x: "86",
    y: "111",
    width: "4",
    height: "14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle",
    strokeWidth: "2",
    x: "64",
    y: "125",
    width: "48",
    height: "5",
    rx: "2.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))));
};

var IphoneSVG = function IphoneSVG(_ref8) {
  var className = _ref8.className,
      color = _ref8.color;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
    className: className,
    width: "50px",
    height: "94px",
    viewBox: "0 0 50 94",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle",
    stroke: color,
    strokeWidth: "2",
    x: "1",
    y: "1",
    width: "48",
    height: "92",
    rx: "13",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
    id: "Oval",
    fillOpacity: ".0",
    stroke: color,
    fill: "#D8D8D8",
    cx: "25.5",
    cy: "86.5",
    r: "3.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle",
    stroke: color,
    x: "0.5",
    y: "12.5",
    width: "49",
    height: "66",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle",
    fillOpacity: ".0",
    fill: "#D8D8D8",
    x: "12",
    y: "6",
    width: "27",
    height: "3",
    rx: "1.5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })))));
};

var RobotSVG = function RobotSVG(_ref9) {
  var className = _ref9.className,
      color = _ref9.color;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
    className: className,
    width: "75px",
    height: "83px",
    viewBox: "0 0 75 83",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "RobotArm",
    transform: "translate(0.000000, 1.000000)",
    stroke: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "Group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle",
    x: "0.5",
    y: "76.5",
    width: "46",
    height: "5",
    rx: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle",
    x: "21.5",
    y: "40.5",
    width: "6",
    height: "36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle-Copy-2",
    transform: "translate(35.147775, 21.733014) rotate(38.000000) translate(-35.147775, -21.733014) ",
    x: "32.1477749",
    y: "3.73301411",
    width: "6",
    height: "36",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle-Copy-3",
    transform: "translate(57.028009, 14.427141) rotate(140.000000) translate(-57.028009, -14.427141) ",
    x: "54.8793605",
    y: "0.927140737",
    width: "4.2972973",
    height: "27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
    id: "Oval",
    fill: "black",
    cx: "25",
    cy: "36",
    r: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
    id: "Oval-Copy",
    fill: "black",
    cx: "49",
    cy: "5",
    r: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ellipse", {
    id: "Oval-Copy-2",
    fill: "black",
    cx: "64.5",
    cy: "23.5280091",
    rx: "3.5",
    ry: "3.52800911",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
    id: "claw",
    transform: "translate(55.000000, 27.000000)",
    fill: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle",
    x: "0.5",
    y: "0.5",
    width: "19",
    height: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle-Copy-5",
    x: "0.5",
    y: "3.5",
    width: "3",
    height: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("rect", {
    id: "Rectangle-Copy-6",
    x: "16.5",
    y: "3.5",
    width: "3",
    height: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }))))));
}; // Cloud Animations


var cloudLeftAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_templateObject());
var cloudRightAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_templateObject2());
var StyledMountain = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(MountainSVG)(_templateObject3(), cloudLeftAnimation, cloudRightAnimation);
var gearForwardAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_templateObject4());
var gearBackwardAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_templateObject5());
var StyledGear = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(GearSVG)(_templateObject6(), gearBackwardAnimation, gearBackwardAnimation, gearForwardAnimation);
var StyledRobot = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(RobotSVG)(_templateObject7());
var StyledIphone = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(IphoneSVG)(_templateObject8());
var StyledMonitor = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(MonitorSVG)(_templateObject9());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject10(), function (_ref10) {
  var isActive = _ref10.isActive;
  return isActive ? '0' : '1';
});
var MountainCOLOR = "#000000";

var SVG =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SVG, _Component);

  function SVG() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SVG);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SVG).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SVG, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          isActive = _this$props.isActive,
          className = _this$props.className,
          action = _this$props.action;
      var color = this.props.color;

      if (!color) {
        color = '#000000';
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        onClick: action ? function () {
          return action();
        } : null,
        className: className,
        isActive: isActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, type === 'gear' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledGear, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        color: color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      })), type === 'mountains' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledMountain, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        color: MountainCOLOR,
        clouds: color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      })), type === 'suitcase' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SuitcaseSVG, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        color: color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      })), type === 'iphone' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledIphone, {
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }), type === 'monitor' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledMonitor, {
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), type === 'robot' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledRobot, {
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), type === 'git' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GitSVG, {
        className: "animated fadeIn delay-3s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }), type === 'linked' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LinkedInSVG, {
        className: "animated fadeIn delay-3s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }), type === 'cloud' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CloudSVG, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }));
    }
  }]);

  return SVG;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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
/* harmony import */ var _elements_view_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../elements/view/view */ "./src/elements/view/view.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./title */ "./src/blocks/projectView/title.js");







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/blocks/projectView/Sectionview.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n/* @media(max-width:900px){\n      flex-direction: column;\n    }\n\n    @media(min-width:900px){\n\n      height:100%;\n    } */\n\n    width:100%;\n    height:100%;\n    position:relative;\n    will-change:width;\n    display:flex;\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\nz-index:1;\nwidth:calc(100vw/3);\nheight:100%;\nposition:absolute;\ntop:0;\nleft:0;\noverflow:hidden;\ntransform:translateX(", ");\ntransform-origin: ", " 50%;\ntransition:transform .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) .5s ,width .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1.2s;\n\n\n    &:hover{\n      \n      .nav{\n  ", "\n      }\n      .Title-Header{\n        ", "\n      }\n\n      \n\n    }\n\n", "\nwill-change: transform,width,opacity;\n\n&.section-enter{\n  /* transform: translate3d(", ",0,0); */\n  z-index:0;\n  transform:scale(.5)translate3d(", ",0,0);\n  opacity:.01;\n  transition:transform .5s 1.5;\n}\n&.section-enter.section-enter-active{\n  transform:scale(1) translate3d(", ",0,0);\n  opacity:1;\n}\n\n&.section-leave{\n    transform:scale(.5) translate3d(", ",0,0);\n    opacity:.4;\n    z-index:0;\n    transition:transform .8s cubic-bezier(0.455, 0.03, 0.515, 0.955) , opacity .8s linear;\n}\n\n&:hover  {\n  &::after{\n    opacity:", ";\n  }\n  }\n\n  &::before{\n  /* content:'';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\nbackground-image:url(", ");\nbackground-size: 110vh 110vw;\nbackground-attachment: fixed;\nbackground-size: cover;\nfilter: blur(10px);\nopacity:", ";\ntransition:opacity .4s 1s;\nwill-change:opacity; */\n}\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\ntransition:transform .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) .8s ,width .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) .3s;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    transform:translateX(0%); \n    z-index:2;\n    width:100%;\n    \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\nz-index: -1;\nposition:absolute;\nheight:100%;\nwidth:100vw;\n\nbackground-image:url(", ");\nbackground-size:cover;\nbackground-repeat: no-repeat;\n\ntransform:translate3d(", "),0,0);\nfilter:", ";\ntransition: transform ", " , filter .6s;\nwill-change:transform filter;\n\n&::before{\n\ncontent: \"\";\ndisplay:block;\nposition:absolute;\ntop:0;\nwidth: 100%;\nheight: 100%;\nbackground:", ";\nopacity:", ";\ntransition:", ";\nwill-change:opacity;\nz-index: -1;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Background = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
  var splashImg = _ref.splashImg;
  return splashImg;
}, function (_ref2) {
  var index = _ref2.index,
      isActive = _ref2.isActive;
  return isActive ? '0' : 'calc(100vw/3*-1*' + index;
}, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive && ' blur(10px)';
}, function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive ? '0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s' : '0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.8s';
}, function (_ref5) {
  var overlay = _ref5.overlay;
  return overlay;
}, function (_ref6) {
  var isActive = _ref6.isActive;
  return isActive ? '0' : '.75';
}, function (_ref7) {
  var isActive = _ref7.isActive;
  return isActive ? 'opacity .1s' : 'opacity .5s 1.4s';
});
var animateSectionActive = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject2());
var animateSectionNetural = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject3());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject4(), function (_ref8) {
  var index = _ref8.index;
  return index * 100 + "%";
}, function (_ref9) {
  var index = _ref9.index;
  return index * 100 + 50 + "%";
}, function (_ref10) {
  var isActive = _ref10.isActive;
  return isActive ? '' : 'transform:translateX(50%) translateY(25vh);';
}, function (_ref11) {
  var isActive = _ref11.isActive;
  return isActive ? 'transform:translateX(50%) scale(1.1);' : 'transform:translateX(50%) scale(1.1);';
}, function (_ref12) {
  var isActive = _ref12.isActive;

  if (isActive) {
    return animateSectionActive;
  } else {
    return animateSectionNetural;
  }
}, function (_ref13) {
  var index = _ref13.index;
  return index * 100 + "%";
}, function (_ref14) {
  var index = _ref14.index;
  return index * 100 + "%";
}, function (_ref15) {
  var index = _ref15.index;
  return index * 100 + "%";
}, function (_ref16) {
  var index = _ref16.index;
  return index * 100 + "%";
}, function (_ref17) {
  var isActive = _ref17.isActive;
  return isActive ? "" : ".65";
}, function (_ref18) {
  var splashImg = _ref18.splashImg;
  return splashImg;
}, function (_ref19) {
  var isActive = _ref19.isActive;
  return isActive ? '1' : '0';
});
var SecondaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject5());

var Sectionview =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sectionview, _Component);

  function Sectionview(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sectionview);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Sectionview).call(this, props));
    _this.state = {
      scale: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sectionview, [{
    key: "handleHover",
    value: function handleHover(state) {
      var background = this.background;
      var viewBackground = this.view.viewContainer;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          icon = _this$props.icon,
          side = _this$props.side,
          activeSection = _this$props.activeSection,
          name = _this$props.name;
      var isActive = activeSection === side;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        isActive: isActive,
        activeSection: activeSection
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SecondaryContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Background, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: function ref(e) {
          return _this2.background = e;
        },
        isActive: isActive
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_title__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        left: true,
        name: name,
        isActive: isActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_elements_view_view__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: function ref(e) {
          return _this2.view = e;
        },
        isActive: isActive
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }))));
    }
  }]);

  return Sectionview;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line */ "./src/blocks/projectView/line.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SVG */ "./src/blocks/projectView/SVG.js");







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/blocks/projectView/card.js";

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n      position:absolute;\n      margin:auto;\n      top:0;\n      left:4.4vw;\n      bottom:0;\n\n      width:9vw;\n      height:9vw;\n      border-radius:50%;\n\n      background-image:url(", ");\n      background-size: cover;\n\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\npadding-right:'0px';\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n@media(max-width:900px){\n    left:50vw;\n}\nfont-size: 1.4em;\n    font-weight: 900;\n    left: 53vw;\n    position:absolute;\n    opacity:1 !important;\n    border:1px ", " rgb(0, 0, 0);\n    border-width: 0px 0px 1px 0px;\n    will-change:opacity;\n    transition:opacity .3s,transform .3s ;\n\n    &.header-enter{\n        opacity:0;\n        transition:opacity .3s .4s;\n    }\n    &.header-enter.header-enter-active{\n        opacity:1;\n    }\n    &.header-leave{\n        opacity:0;\n    }\n    &.header-leave.header-leave-active{\n        \n    }\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  &:focus{\n    border:none;\n    outline:none;\n  }\n  \n  border-top-left-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  border-top-right-radius: ", ";\n\n  @media(max-width:900px){\n    background-color:", ";\n  }\n\n  /* border:", "; */\n  border:none;\n  border-width: ", ";\n\nflex-basis:20%;\n  cursor:pointer;\n  order: ", ";\n  width: 5em;\n  color: ", ";\n  font-size: 1em;\n  background: transparent;\n  margin-left: ", ";\n  min-height: 14em;\n  white-space:nowrap;\n  pointer-events:", ";\n  transition:transform .3s cubic-bezier(0.445, 0.05, 0.55, 0.95) ;\n\n  &:hover{\n    \n    transform:scale(1.2);\n  }\n\n  /* \n    @media (max-width:900px){\n       display:none;\n        } */\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n      position:relative;\n      display:grid;\n      grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n    width: 100%;\n\n\n        a{\n          transition:all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          cursor:pointer;\n          &:hover{\n            transform:scale(1.2);\n          }\n        }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\ngrid-template-columns: 1fr 1fr 1fr;\n\n  \n  width:80%;\n  display: grid;\n  justify-items: center;\n  align-content: center;\n  height: 100%;\n  padding: 1em 0 1em;\n  grid-row-gap: 1em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n border-top-left-radius:", ";\n    border-top-right-radius:", ";\n    border-bottom-left-radius:", ";\n    border-bottom-right-radius:", ";\n    border: 1px solid;\n    /* border-color:", "; */\nborder:none;\n  display: flex;\n  flex-direction: row;\n  width:100%;\n  overflow:hidden;\n  transform:", ";\n\n  a {\n    text-decoration: none;\n    justify-self:center;\n    color: ", ";\n    font-size: 1.5em;\n    @media(max-width:800px){\n      font-size: 3.5vw;\n    }\n    max-width: 3em;\n    &:hover {\n      transform: scale(1.1);\n    }\n    will-change: transform;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\nflex-direction: row;\n  display: flex;\n  background: #0d000d00;\n\n  @media(max-width:900px) {\n  width: 100%;\n  }\n  height:57vh;\n  width:100%;\n\n  will-change: transform;\n\n  h2 {\n\n    opacity:", ";\n    color:", ";\n    font-size:1.2em;\n    transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) ;\n    top:", "\n  }\n"]);

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
  return ShuffleStatus === 'shuffleOut' ? '22vh' : '0';
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
    delay: 1000,
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
  },
  neutral: {
    opacity: 0
  }
});
var Container_Info = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject4()))({
  show: {
    opacity: 1
  },
  hide: {},
  neutral: {
    opacity: 0
  }
});
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
var Header = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h2(_templateObject8(), function (_ref25) {
  var ShuffleStatus = _ref25.ShuffleStatus;
  return ShuffleStatus === 'shuffleIn' ? 'solid' : 'none';
}))({
  // Header Animation
  shuffleIn: {},
  shuffleOut: {
    y: function y(_ref26) {
      var index = _ref26.index;
      return "-" + index * 80 + "%";
    }
  }
});
var Paragraph = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.p(_templateObject9()))({
  shuffleIn: {
    opacity: 1
  },
  shuffleOut: {
    opacity: 0
  }
});
var CirclePreview = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject10(), function (_ref27) {
  var previewImg = _ref27.previewImg;
  return previewImg;
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
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_11__["CSSTransitionGroup"], {
        component: react__WEBPACK_IMPORTED_MODULE_7__["Fragment"],
        transitionName: "header",
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Header, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ShuffleStatus: ShuffleStatus,
        key: name
      }, this.props, {
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }), cardData.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DisplayBox, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ShuffleStatus: ShuffleStatus,
        skillsStatus: skillsStatus,
        side: "left"
      }, this.props, {
        toggle: this.toggle.bind(this),
        name: "Details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
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
          lineNumber: 380
        },
        __self: this
      })));
    }
  }]);

  return PortCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



var DisplayBox = function DisplayBox(_ref28) {
  var cardData = _ref28.cardData,
      skillsData = _ref28.skillsData,
      skillsStatus = _ref28.skillsStatus,
      ShuffleStatus = _ref28.ShuffleStatus,
      toggle = _ref28.toggle,
      side = _ref28.side,
      name = _ref28.name;

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
      lineNumber: 420
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubContainer, {
    side: side,
    pose: status(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, side === "left" ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Info, {
    cardData: cardData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Skills, {
    cardData: cardData.skills,
    skillsData: skillsData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_line__WEBPACK_IMPORTED_MODULE_10__["default"], {
    status: status(),
    ShuffleStatus: ShuffleStatus,
    side: side,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
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
      lineNumber: 429
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, name)));
};

var Info = function Info(_ref29) {
  var cardData = _ref29.cardData;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container_Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: cardData.gitLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SVG__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: "git",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, "Github")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CirclePreview, {
    previewImg: cardData.previewImg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      gridRow: "1 / 3",
      gridColumn: "2/3"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, cardData.discription), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: cardData.pageLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, "Visit"));
};

var Skills = function Skills(_ref30) {
  var skillsData = _ref30.skillsData,
      cardData = _ref30.cardData;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container_Skills, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
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
            lineNumber: 467
          },
          __self: this
        });
      }
    });
    return val;
  }));
};

/***/ }),

/***/ "./src/blocks/projectView/line.js":
/*!****************************************!*\
  !*** ./src/blocks/projectView/line.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_4__);



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nz-index:999;\n    position:absolute;\n    content:'';\n    min-height:", ";\n    width:1px;\n    top: 50%;\n\n\n    transform: translateY(-50%) skew(0deg);\n    left: 50%;\n    background-color:", ";    \n\n    @media(max-width:800px){\n      opacity:", "!important;\n    };\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Line = react_pose__WEBPACK_IMPORTED_MODULE_4___default()(styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a(_templateObject(), function (_ref) {
  var ShuffleStatus = _ref.ShuffleStatus;
  return ShuffleStatus === 'shuffleIn' ? '50%' : '100%';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.card.lines;
}, function (_ref3) {
  var status = _ref3.status;
  return status === 'hide' || status === 'show' ? 0 : 1;
}))({
  // Line Animation
  show: {
    opacity: 1,
    y: "-50%",
    x: function x(_ref4) {
      var side = _ref4.side;
      var box = document.querySelector('.portBox');
      var boxComputedStyled = getComputedStyle(box);
      var boxWidth = box.getBoundingClientRect().width - _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(boxComputedStyled.paddingLeft) * 2;
      return side === "left" ? boxWidth / 2 + "px" : "-" + boxWidth / 2 + "px";
    },
    skew: "0deg"
  },
  hide: {
    x: function x(_ref5) {
      var side = _ref5.side;
      return side === "left" ? "40vw" : "-40vw";
    },
    skew: "0deg",
    opacity: 1,
    minHeight: "30%"
  },
  neutral: {
    delay: 200,
    x: "0",
    y: "-50%",
    skew: function skew(_ref6) {
      var ShuffleStatus = _ref6.ShuffleStatus;

      if (ShuffleStatus === 'shuffleOut') {
        return '0deg';
      }

      return '30deg';
    }
  },
  shuffleOut: {
    skew: "0deg",
    minHeight: "100%"
  },
  shuffleIn: {
    skew: "30deg",
    minHeight: "30%"
  }
}); //sd

/* harmony default export */ __webpack_exports__["default"] = (Line);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n@media(max-width:900px){\n    width:100vw\n}\n        /* background-color: #ffffff3b; */\n        bottom: 0;\n        display:flex;\n      min-height:10vh;\n        width:100%;\n        align-items: center;\n        justify-content:center;\n        position: fixed;\n        right: 0;\n        will-change: transform;\n        &.portNav-leave{\n                opacity:0;\n                transition:.3s linear;\n        }        \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n\ncursor: pointer;\nwidth:300px;\nheight: 40px;\nbackground:none;\nborder-style:none;\ndisplay:flex;\nwidth: 96px;\njustify-content: space-evenly;\n\n:focus{\n      outline:none;\n  }\n\n&:hover i{\n        opacity:1;\n    }\n\n\n  ", "  \n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    opacity: .5;\n    border-radius: 50%;\n    background: black;\n    width: 10px;\n    padding: 0;\n    height: 10px;\n    transition:opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1) ", ";\n\n    \n    \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n@media(max-width:900px){\n    border-width: 0 7px 7px 0;\n    width: 2em;\n    height: 2em;\n}\n\n    border: solid ", ";\n  border-radius: 2px;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  width: 2em;\n  height: 2em;\n  transform: ", ";\n  background:none;\n  top: 3em;\n  cursor: pointer;\n  transition:transform .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n\n    &:hover{\n        transform:scale(1.1) ", ";\n    }\n\n  :focus{\n      outline:none;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Arrow = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.card.lines;
}, function (_ref2) {
  var ShuffleStatus = _ref2.ShuffleStatus;
  return ShuffleStatus === 'shuffleIn' ? 'rotate(225deg)' : 'rotate(45deg)';
}, function (_ref3) {
  var ShuffleStatus = _ref3.ShuffleStatus;
  return ShuffleStatus === 'shuffleIn' ? 'rotate(225deg)' : 'rotate(45deg)';
}))({
  initialPose: {},
  shuffleIn: {},
  shuffleOut: {}
});
var Dot = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.i(_templateObject2(), function (_ref4) {
  var index = _ref4.index;
  return index * .1 + "s";
}))({
  init: {}
});
var DotButtonContainer = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.button(_templateObject3(), function (_ref5) {
  var left = _ref5.left;
  return '';
}))({
  initialPose: {
    X: 0
  },
  shuffleIn: {
    x: function x(_ref6) {
      var right = _ref6.right;

      if (right) {
        return '20vw';
      } else {
        return '-20vw';
      }
    }
  },
  shuffleOut: {
    x: 0
  }
});
var Container = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject4()))({
  shuffleOut: {},
  shuffleIn: {}
}); //

var DotButton = function DotButton(_ref7) {
  var dots = _ref7.dots,
      handleNextPage = _ref7.handleNextPage,
      right = _ref7.right;

  var makeDots = function makeDots() {
    var dotArray = [];

    for (var i = 0; i < dots; i++) {
      dotArray.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Dot, {
        key: i,
        index: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }));
    }

    if (!right) {
      dotArray.reverse();
    }

    return dotArray;
  };

  makeDots();
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DotButtonContainer, {
    right: right,
    onClick: function onClick() {
      return handleNextPage(right ? 'next' : null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, makeDots());
}; // Main Compnent


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
          ShuffleStatus = _this$props.ShuffleStatus;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DotButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        dots: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Arrow, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ShuffleStatus: ShuffleStatus
      }, this.props, {
        onClick: handleShuffle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DotButton, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        dots: 3,
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      })));
    }
  }]);

  return PortNav;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/blocks/projectView/title.js":
/*!*****************************************!*\
  !*** ./src/blocks/projectView/title.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
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
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Nav */ "./src/blocks/Nav.js");







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/blocks/projectView/title.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\ncursor:pointer;\ntransform:translateX(50%);\ntransition:.4s;\n&:after{\n  transition: min-width .9s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n    content: '';  \n    position: absolute;\n    left: 50%;\n    top:130%;\n    transform: translateX(-50%);\n    background-color: white;\n    min-width: 0%;\n    height: 1px;\n\n  &:before{\n    \n  }\n\n  }\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\ntransform:", ";\n\nz-index:1;\ndisplay: flex;\ntop:0;\ntext-align: center;\ncolor:", ";  \n/* flex-basis:100%; */\nwidth:calc(100vw/3);\nheight: 100%;\nflex-direction: column;\njustify-content: center;\ntransition:transform 1.4s ;\nwill-change:transform ;\n\n\n\n\n  ", "{\n      transform:rotate(135deg) scale(1.1);\n  }\n}\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n@media(max-width:900px){\nright:0;\n}\n\n\nborder: solid 1px ", ";\n  border-radius: 2px;\n  border-width: 0 6px 6px 0;\n  display: inline-block;\n  padding: 3px;\n  width: 1em;\n  height: 1em;\n  position: absolute;\n  top: calc(50vh+50%);\n  right: 50px;\n  transform: rotate(135deg);\n  opacity:", ";\n  transition:transform .4s,", ";\n  will-change:transform opacity;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\ndisplay:flex;\nwidth:calc(100vw/3);\n\n@media(max-width:900px){\n  width: ", ";\n  height: ", ";\n};\n\nflex-basis:", ";\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // const downAnimation = keyframes`
//     from{
//         transform:translateX(10px) rotate(135deg);
//         opacity:0;
//     }to{
//         transform:translateX(-10px) rotate(135deg);
//         opacity:.6;
//     }
// `

var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
  var isActive = _ref.isActive;
  return isActive ? '100%' : 'calc(100vw/3)';
}, function (_ref2) {
  var isActive = _ref2.isActive;
  return isActive ? '100%' : '100vh';
}, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive ? '20%' : '100%';
});
var BackArrow = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject2(), function (_ref4) {
  var shade = _ref4.shade;
  return shade;
}, function (_ref5) {
  var isActive = _ref5.isActive;
  return isActive ? '1' : '0';
}, function (_ref6) {
  var isActive = _ref6.isActive;
  return isActive ? 'opacity .4s 1.8s' : 'opacity .2s';
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject3(), function (_ref7) {
  var isActive = _ref7.isActive;
  return isActive ? 'translateX(-100%)' : 'translateX(-50%)';
}, function (_ref8) {
  var shade = _ref8.shade;
  shade;
}, BackArrow);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h1(_templateObject4());

var Title =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Title, _Component);

  function Title() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Title);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Title).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Title, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isActive = _this$props.isActive,
          name = _this$props.name,
          side = _this$props.side,
          handleSectionChange = _this$props.handleSectionChange;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      })), this.props.children, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Header, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onClick: function onClick() {
          return handleSectionChange(side);
        },
        className: "Title-Header"
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), isActive ? '' : name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(BackArrow, {
        isActive: isActive,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }));
    }
  }]);

  return Title;
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







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/SectionHeader.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n        margin-top:0px;\n        font-size:1em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    z-index:1;\n    \n\n    position: fixed;\n    top:0;\n    transition:all .3s;\n\n    @media(max-width:900px){\n        right:0;\n        width: calc(100% - 100px);\n        padding-left:5px;\n    }\n\n    @media(min-width:900px){\n        ", "\n    ", "\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    font-size: 2.5em;\nposition:relative;\ncolor: ", ";\nwidth:250px;\nmargin-bottom:0px;\n\n@media(max-width:900px){\n    font-size:initial; \n}\n\n&:after{\n    content: '';\n    height: 1px;\n    background: black;\n    width: 144px;\n    position: absolute;\n    bottom: 0;\n    right:0;\n}\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\njustify-self: end;\ntext-align:left;\nleft:0;\npadding-right: 1.5em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\njustify-self: end;\ntext-align:right;\nright: 30px;\npadding-right: 1.5em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var headerRigthCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject());
var headerLeftCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(_templateObject2());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h2(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.card.text;
});
var HeaderContainer = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject4(), function (_ref2) {
  var left = _ref2.left;
  return left && headerLeftCSS;
}, function (_ref3) {
  var right = _ref3.right;
  return right && headerRigthCSS;
}))({});
var SubHeader = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.h3(_templateObject5());

var SectionHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SectionHeader, _Component);

  function SectionHeader() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SectionHeader);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SectionHeader).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SectionHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          main = _this$props.main,
          sub = _this$props.sub,
          className = _this$props.className;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeaderContainer, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        className: className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, main), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SubHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, sub));
    }
  }]);

  return SectionHeader;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SectionHeader */ "./src/elements/SectionHeader.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blocks_projectView_SVG__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../blocks/projectView/SVG */ "./src/blocks/projectView/SVG.js");
/* harmony import */ var _static_section_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/section.json */ "./src/static/section.json");
var _static_section_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/section.json */ "./src/static/section.json", 1);






var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/view/clientView.js";

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  width:40px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n      flex-basis: 100%;\n      height:10vh;\n      border:none;\n      background:none;\n      \n    :focus{\n      outline:none;\n    }\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\ndisplay:flex;\nflex-direction:column;\nflex-basis:100%;\nalign-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n          grid-template-columns: 1fr 1fr 1fr;\n    width: 48%;\n    min-height:9vh;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    background-color: #808d98e0;\n    border-radius:6px;\n    padding:2em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nposition:relative;\ndisplay:flex;\njustify-content: space-around;\nalign-items: center;\nheight: 19vh;\n\n&::after{\n    content: '';\n    height: 1px;\n    position: absolute;\n    background: black;\n    top: 0;\n    width: 87%;\n    transform-origin: left;\n    animation:", " .5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 3s   forwards;\n    will-change:transform;\n    transform: skewY(3deg);\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    position:absolute;\n    top:0;\n    left:0;\n    display: flex;\n    align-self: center;\n    min-width: 100%;\n    align-items: center;\n    justify-content:center;\n    flex-direction:row;\n    height:100vh;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n        display:flex;\n        text-align:center;\n\n        flex-direction: column;\n        justify-content: center;\n        padding: 3em;\n        padding-left:5em;\n        padding-right:5em;\n        box-sizing: border-box;\n        animation-delay:2s;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    from{\n      transform: skewY(3deg);\n    }to{\n      transform: skewY(0deg);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var enterAnimationLine = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["keyframes"])(_templateObject());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject2());
var SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject3());
var ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject4(), enterAnimationLine);
var ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject5());
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject6());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.button(_templateObject7());
var Img = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.img(_templateObject8());
var FrontEndSkills = ['css', 'react', 'git', 'node', 'webpack', 'apollo', 'styled'];
var FrameWorks = ['meteor', 'gatsby', 'nextjs'];
var BackEndSkills = ['firebase', 'mongoDB', 'express', 'graphql'];

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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container, {
        className: "animated fadeIn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        right: true,
        main: "Web/Productivity Solutions",
        sub: "Contractor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SectionContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SubContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_blocks_projectView_SVG__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "monitor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "FrontEnd"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ImgContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, _static_section_json__WEBPACK_IMPORTED_MODULE_10__.skills.map(function (skill) {
        if (FrontEndSkills.includes(skill.name)) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Img, {
            key: skill.name,
            src: skill.img,
            alt: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            },
            __self: this
          });
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SubContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_blocks_projectView_SVG__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "cloud",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "BackEnd"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ImgContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, _static_section_json__WEBPACK_IMPORTED_MODULE_10__.skills.map(function (skill) {
        if (BackEndSkills.includes(skill.name)) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Img, {
            key: skill.name,
            src: skill.img,
            alt: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          });
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SubContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_blocks_projectView_SVG__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "robot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Site Generator"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ImgContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, _static_section_json__WEBPACK_IMPORTED_MODULE_10__.skills.map(function (skill) {
        if (FrameWorks.includes(skill.name)) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Img, {
            src: skill.img,
            alt: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          });
        }
      })))));
    }
  }]);

  return ClientView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); //sdss




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
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SectionHeader */ "./src/elements/SectionHeader.js");
/* harmony import */ var _blocks_projectView_SVG__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../blocks/projectView/SVG */ "./src/blocks/projectView/SVG.js");






var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/view/personalView.js";

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n        width: 30vw;\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    justify-content: space-evenly;\n    left: 50%;\n    transform: translateX(-50%);\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    margin-top: 4em;\n    margin-bottom: 4em;\n\n    border-top: 1px solid;\n    border-bottom: 1px solid;\n\n        &:before{\n            top: -20px;\n        }\n        &:after{\n            top: 20px;\n        }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n        max-width:50%;\n        position:realitive;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n        display:flex;\n        text-align:center;\n        height:100vh; \n        flex-direction: column;\n        align-items: center;\n  justify-content: center;\n  animation-delay: 1.8s;\n  background-color: #fff7f794;\n  \n  @media(max-width:900px){\n    padding-top:10em;\n  left: 0;\n    background-color: #c5ffefa3;\n    position: absolute;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Container = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject());
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject2());
var ParagraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject3());
var SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject4());

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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container, {
        className: "animated fadeIn ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        right: true,
        main: 'Projects/Works',
        sub: "Originals",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SubContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "The Whole Story"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ParagraphContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Curious  and humble , full stack developer and entrepreneur. Big on design and lightning fast code. Found my love for JS developing on Node , leveraging the power of Non-Blocking I/O and npm\u2019s rich package eco system. Out of necessity I first started  learning web development  in college when I started my first business selling clothing online through an e-commerce website.Since I have had to learn more advanced techniques building tools for lead generation and business productivity. ")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SocialContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://github.com/pogojam",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_blocks_projectView_SVG__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "git",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/ryan-breaux-4603396a/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_blocks_projectView_SVG__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "linked",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }))))));
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
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/view/projectView.js";

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n        opacity:1;\n        align-items: center;\n        background-color: #fff7f794;\n        width:100%;\n        height:100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n    position: absolute;\n    justify-items: center;\n    grid-template-rows: .3fr 1fr 1fr 1fr;\n    display: grid;\n    height: 100vh;\n    width: 100%;\n    left: 0;\n    top: 0;\n    box-sizing: border-box;\n    padding: 6em;\n    padding-top: 10em;\n    will-change: transform;\n\n@media(max-width:900px){\n    padding: 3em;\n    padding-top: 10em;\n\n    }\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n    position:absolute;\n    left: 35vw;\n    top: 57vh;\n    max-width:250px;\n    font-size: 1.8em;\n    will-change:opacity;\n    transition:opacity .3s,transform .3s ;\n    \n    ", "\n\n    @media(max-width:900px){\n    top:0;\n    \n    }\n\n\n\n", "\n\n    transition:transform .5s cubic-bezier(0.445, 0.05, 0.55, 0.95),opacity .5s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n&.header-enter{\n        opacity:0;\n        transition:opacity .3s .4s;\n    }\n    &.header-enter.header-enter-active{\n        opacity:1;\n    }\n    &.header-leave{\n        opacity:0;\n        /* transform:translateX(-50%); */\n    }\n    &.header-leave.header-leave-active{\n        \n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n        opacity:1;\n        transform:translateY(0px);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n        transform:translateY(-40vw);\n        opacity:1;\n"]);

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
var subHeaderShuffleOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject());
var subHeaderShuffleIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject2());
var EnterExitCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject3());
var SectionSubHeader = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.h3(_templateObject4(), function (_ref) {
  var ShuffleStatus = _ref.ShuffleStatus;

  if (ShuffleStatus) {
    return EnterExitCSS;
  }
}, function (_ref2) {
  var ShuffleStatus = _ref2.ShuffleStatus;

  if (ShuffleStatus === 'shuffleIn') {
    return subHeaderShuffleOut;
  } else {
    return subHeaderShuffleIn;
  }
});
var StyledPort = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject5());
var Container = react_pose__WEBPACK_IMPORTED_MODULE_8___default()(styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject6()))({});
var PortfolioSections = ['sites', 'opensource', 'productivity'];
var PortfolioTitles = ['Web Sites', 'Open Source', 'Productivity'];

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
      activePortSection: 0,
      itemPos: {
        start: 0,
        end: 3
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectView, [{
    key: "handleNextPage",
    value: function handleNextPage(page) {
      var section = this.state.activePortSection;

      if (page && section < PortfolioSections.length - 1) {
        section = section + 1;
        return this.setState({
          activePortSection: section
        });
      }

      if (!page && section <= PortfolioSections.length - 1 && section > 0) {
        section = section - 1;
        return this.setState({
          activePortSection: section
        });
      }

      if (!page && section === 0) {
        section = PortfolioSections.length - 1;
        return this.setState({
          activePortSection: section
        });
      } else {
        section = 0;
        return this.setState({
          activePortSection: section
        });
      }
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
        this.port.style.overflowY = 'auto';
      } else {
        this.port.scroll({
          top: 0,
          behavior: 'smooth'
        });
        this.port.style.overflowY = 'hidden';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          ShuffleStatus = _this$state.ShuffleStatus,
          itemPos = _this$state.itemPos,
          activePortSection = _this$state.activePortSection;
      var isActive = this.props.isActive;
      var shownProjects = _static_section_json__WEBPACK_IMPORTED_MODULE_12__[PortfolioSections[activePortSection]];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        className: "animated fadeIn delay-2s",
        pose: ShuffleStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SectionHeader__WEBPACK_IMPORTED_MODULE_13__["default"], {
        right: true,
        main: 'Projects/Works',
        sub: "Originals",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), isActive && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledPort, {
        ref: function ref(e) {
          return _this2.port = e;
        },
        className: "portBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_14__["CSSTransitionGroup"], {
        component: react__WEBPACK_IMPORTED_MODULE_7__["Fragment"],
        transitionName: "header",
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SectionSubHeader, {
        key: PortfolioTitles[activePortSection],
        ShuffleStatus: ShuffleStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, PortfolioTitles[activePortSection])), shownProjects.map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_blocks_projectView_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          ShuffleStatus: ShuffleStatus,
          key: i,
          index: i,
          skillsData: _static_section_json__WEBPACK_IMPORTED_MODULE_12__.skills,
          cardData: el,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_blocks_projectView_portNav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        ShuffleStatus: ShuffleStatus,
        handleNextPage: this.handleNextPage,
        handleShuffle: this.handleShuffle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }));
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ */ "./src/elements/view/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/Sugarbook/Documents/Web-Projects/node/rbreaux2.0/src/elements/view/view.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n&.view-enter{\n  flex-basis:0;\n}\n\n&.view-leave{\n  opacity:0;\n  transition:opacity .4s;\n}\n\nposition: absolute;\nwidth:100vw;\n\nleft: 0;\ntop: 0;\nheight: 100%;\ncolor:", ";\noverflow-x:hidden;\nbox-sizing: border-box;\nflex-basis:100%;\ntransition:opacity .4s .8s;\nwill-change:opacity;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Container = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.card.color;
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

      var _this$props = this.props,
          side = _this$props.side,
          isActive = _this$props.isActive;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_10__["CSSTransitionGroup"], {
        transitionName: "view",
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 1100,
        component: react__WEBPACK_IMPORTED_MODULE_7__["Fragment"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, isActive ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: side,
        ref: function ref(e) {
          return _this.viewContainer = e;
        }
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), side === 'left' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(___WEBPACK_IMPORTED_MODULE_9__["PersonalView"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), side === 'center' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(___WEBPACK_IMPORTED_MODULE_9__["ClientView"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), side === 'right' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(___WEBPACK_IMPORTED_MODULE_9__["ProjectlView"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        refViewContainer: this.viewContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }))) : null);
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

module.exports = {"sections":[{"name":"personal","splashImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1555035590/ryansWebsite/Selfi_B_W.jpg","overlay":"rgb(26, 222, 236)","side":"left","icon":"mountains","shade":"black","index":0},{"name":"tech/stack","splashImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1555699972/architecture_white_room.jpg","overlay":"","side":"center","icon":"suitcase","shade":"black","index":1},{"name":"projects","splashImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1555359126/ryansWebsite/adventure-alone-arid-1123567.jpg","overlay":"","side":"right","icon":"gear","shade":"black","index":2}]};

/***/ }),

/***/ "./src/static/section.json":
/*!*********************************!*\
  !*** ./src/static/section.json ***!
  \*********************************/
/*! exports provided: business, personal, education, skills, sites, opensource, productivity, default */
/***/ (function(module) {

module.exports = {"business":{"title":"Startups","content":[{"title":"Phantrix","type":"Clothing Company"},{"title":"JackTheHelper","type":"Student Staffing Company"},{"title":"Black Box Group","type":"Real Estate Group"}],"viewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1537298665/Portfolio/Phantrix.jpg"},"personal":{"title":"Personal","content":["Health Nut","Rock Climber","Life Long Learner","Mindful"],"viewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1537298666/Portfolio/glen-canyon.jpg","pageLink":"","gitLink":""},"education":{"title":"Education","content":["NAU","Chemisty/Psychology"],"viewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/e_brightness:-57/v1545683959/autumn-autumn-colours-bright-756903.jpg","pageLink":"","gitLink":""},"skills":[{"name":"react","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540233824/reactLogo.png","level":"90"},{"name":"meteor","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540234749/58480fcfcef1014c0b5e4942.png","level":"85"},{"name":"firebase","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540346207/firebaseLogo.png","level":"20"},{"name":"apollo","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540234062/apolloLogo.png","level":"60"},{"name":"graphql","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540234014/graphql.svg","level":"60"},{"name":"html","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540233628/css3-html5-logo.png"},{"name":"css","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540233588/CSS3_logo_and_wordmark.png"},{"name":"mongoDB","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540235002/MongoDB.png"},{"name":"node","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1540233489/if_nodejs-512_339733.png","level":"90"},{"name":"express","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1551337498/expressjs-logo.png.png","level":"60"},{"name":"git","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1555309238/Stack_Icons/Git-Icon-1788C.png","level":"60"},{"name":"webpack","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1555311857/Stack_Icons/icon-square-big.png","level":"20"},{"name":"gatsby","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1555719956/undefined.svg","level":"20"},{"name":"nextjs","img":"https://camo.githubusercontent.com/1f8dec51cb01842d7bb7a7cd50ade17c75c5e3bd/68747470733a2f2f6173736574732e7a6569742e636f2f696d6167652f75706c6f61642f76313533383336313039312f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6a732e706e67","level":"20"},{"name":"styled","img":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1555720270/Stack_Icons/logo.png","level":"20"}],"sites":[{"name":"Bellcaptian","discription":"A tool for distributing cash for Bell and Valet departments. This tool allows employees to log into a dashboard and keep track of all past cash distributions. Managers can input all cash drops and hours worked and the app distributes the cash accordingly using an algorithm and then sends an automated text to all users of their new adjusted cash amount.","pageLink":"https://bellcaptain.herokuapp.com","previewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1548393916/screencapture-bellcaptain-herokuapp-Dash-2019-01-24-22_24_37.png","gitLink":"https://github.com/pogojam/bellcaptain","imgLink":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1545432169/Screen_Shot_2018-12-21_at_3.40.44_PM.png","skills":["react","node","meteor","graphql","react","mongoDB"]},{"name":"AZButler","discription":"A single page website for Arizona Butler Services.","pageLink":"https://www.azbutler.com/","previewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1555701058/Screen_Shot_2019-04-19_at_12.09.47_PM.png","gitLink":"https://github.com/pogojam/AZButler","skills":["node","react","express"]},{"name":"Thegirlimetathifi","discription":"","url":"www.theguyimetathifi.com","skills":["react","node"]}],"opensource":[{"name":"FolderImporter","discription":"Automatically generate import statements for all your vital libraries at the top of your js files.Specify which modules should be automatically imported with local settingsRC file.","url":"https://github.com/pogojam/folderImporter","gitLink":"https://github.com/pogojam/folderImporter","previewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1555702059/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f363131383131392f313734393434302f36336632323334342d363531362d313165332d396433372d3339656566333761393139322e706e67.png","skills":["node"]}],"productivity":[{"name":"CraigslistBot","discription":"This scrapper is build primarily as a tool to automate the buying and selling of products using craigslist. One can simply enter the name of a product and out comes an average selling price on the market a recommendation on a sell and buy price. CraigScraper will monitor Craigslist for any new entries and send an alert if any items match the recommended buy price.","url":"","gitLink":"https://github.com/pogojam/craigScraper","skills":["node","react","express"]},{"name":"Slipgen","previewImg":"https://res.cloudinary.com/dxjse9tsv/image/upload/v1548394165/screencapture-slipgen-herokuapp-2019-01-24-22_26_55.png","gitLink":"https://github.com/pogojam/SlipGen","pageLink":"https://slipgen.herokuapp.com","discription":"Tool used to generate welcome slips for front desk agents. Slipgen excepts an xml document with guests names and generates a printable welcome slips with the companies logo.","url":"","skills":["react","node"]}]};

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

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

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

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "style-value-types":
/*!************************************!*\
  !*** external "style-value-types" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("style-value-types");

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