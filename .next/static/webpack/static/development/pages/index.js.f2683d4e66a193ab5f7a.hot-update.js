webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");







var _jsxFileName = "/Users/Sugarbook/Documents/projects/node/rbreaux2.0/src/blocks/section.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\nposition: relative;\ntop: -100vh;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\nposition: relative;\ntop: -21vh;\ntext-align: center;\ncolor:white;\n\n\n&:after{\n  transition:all .9s cubic-bezier(0.075, 0.82, 0.165, 1);\n    content: '';\n    position: absolute;\n    left: 50%;\n    top:130%;\n    transform: translateX(-50%);\n    background-color: white;\n    min-width: 0%;\n    height: 1px;\n\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n\n/* Mobile */\n\n@media (max-width:800px){\n  background-size:100% !important;\n\n  background-position:", ";\n}\n\n/* Desktop */\n\ncursor: pointer;\nbackground-image:url(", ");\nbackground-size: auto 100%;\nbackground-repeat: no-repeat;\n/* background-attachment: fixed; */\ntransition: all .8s cubic-bezier(0.075, 0.82, 0.165, 1);\noverflow:none;\n\nbackground-position:", ";\n\n\n\nbackground-position:", ";\nflex-grow:1;\n\noverflow:hidden;\n\n&:hover{\n  flex-grow:1.3;\n  \n  h1:after{\n    min-width: 80%;\n  }\n\n}\n\n&:before{\n  content: \"\";\n  display:block;\n  width: 100%;\n  height: 100%;\n  background:", ";\n}\n\n&:after{\n  content:\"url(https://res.cloudinary.com/dxjse9tsv/image/upload/v1552591999/Personal-active-icon.png)\"\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 //sdd

var Container = Object(react_pose__WEBPACK_IMPORTED_MODULE_9__["default"])(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject(), function (_ref) {
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
  var activeSection = _ref3.activeSection,
      side = _ref3.side;
  console.log(activeSection, side);
  activeSection === side && 'left !important';
}, function (_ref4) {
  var side = _ref4.side;

  switch (side) {
    case 'left':
      return '';
      break;

    case 'center':
      return 'center';
      break;

    case 'right':
      return 'right';
      break;
  }
}, function (_ref5) {
  var overlay = _ref5.overlay;
  return overlay;
}))({
  // Animations
  sectionIn: {},
  exit: {},
  enter: {}
});
var Title = Object(react_pose__WEBPACK_IMPORTED_MODULE_9__["default"])(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1(_templateObject2()))({// Animations
});
var Icon = Object(react_pose__WEBPACK_IMPORTED_MODULE_9__["default"])(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].img(_templateObject3()))({});

var Section =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Section, _Component);

  function Section() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Section);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Section).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Section, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          handleSectionChange = _this$props.handleSectionChange,
          index = _this$props.index;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onClick: function onClick() {
          return handleSectionChange(index);
        }
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, name));
    }
  }]);

  return Section;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.f2683d4e66a193ab5f7a.hot-update.js.map