webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducer.js":
/*!********************!*\
  !*** ./reducer.js ***!
  \********************/
/*! exports provided: exampleInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exampleInitialState", function() { return exampleInitialState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./actions.js");


var exampleInitialState = {
  count: 10,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: action.error
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].INCREMENT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        count: state.count + 1
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].DECREMENT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        count: state.count - 1
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        count: exampleInitialState.count
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOAD_DATA_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        placeholderData: action.data.data.records
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].TICK_CLOCK:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.a8e75135052b5ba69383.hot-update.js.map