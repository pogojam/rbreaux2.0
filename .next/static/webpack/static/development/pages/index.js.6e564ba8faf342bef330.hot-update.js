webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_data_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./static/data.json */ "./src/static/data.json");
var _static_data_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/data.json */ "./src/static/data.json", 1);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _blocks_section__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/section */ "./src/blocks/section.js");
/* harmony import */ var _elements_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements/view */ "./src/elements/view.js");









var _jsxFileName = "/Users/Sugarbook/Documents/projects/node/rbreaux2.0/src/app.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\ndisplay:flex;\nmin-width:100vw;\nmin-height:100vh;\n\n@media (max-width:800px){\n  flex-direction: column;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Container = Object(react_pose__WEBPACK_IMPORTED_MODULE_12__["default"])(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject()))({// Animations
});

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App).call(this, props));
    _this.handleSectionChange = _this.handleSectionChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.state = {
      activeSection: "all"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "handleSectionChange",
    value: function handleSectionChange(sec) {
      console.log(sec);
      this.setState({
        activeSection: sec
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeSection = this.state.activeSection;
      var isSectionActive = activeSection !== 'all';
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Container, {
        pose: isSectionActive && 'sectionIn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_12__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, [_static_data_json__WEBPACK_IMPORTED_MODULE_11__.sections.map(function (val, i) {
        if (activeSection === 'all') {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_blocks_section__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            activeSection: activeSection,
            handleSectionChange: _this2.handleSectionChange,
            index: val.side,
            key: i
          }, val, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }));
        } else {
          var _extends2;

          return activeSection === val.side && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_blocks_section__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends2 = {
            index: val.side,
            activeSection: activeSection,
            handleSectionChange: _this2.handleSectionChange
          }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "index", i), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends2, "key", i), _extends2), val, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }));
        }
      }), isSectionActive && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_elements_view__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })]));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]); //sd




/***/ })

})
//# sourceMappingURL=index.js.6e564ba8faf342bef330.hot-update.js.map