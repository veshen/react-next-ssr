webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./axios/index.js":
/*!************************!*\
  !*** ./axios/index.js ***!
  \************************/
/*! exports provided: getIndexList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexList", function() { return getIndexList; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ "./axios/tools.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./axios/config.js");



axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
/*
    common
*/

var getIndexList = function getIndexList(data) {
  return Object(_tools__WEBPACK_IMPORTED_MODULE_1__["get"])({
    url: _config__WEBPACK_IMPORTED_MODULE_2__["INDEX_LIST"],
    data: data
  });
}; //首页大盘 豆腐块
// export const deldteEventStatus = (data) => post({url: config.DELDTE_EVENT_STATUS,data});//删除反馈列表
// export const exportOrderQueryList = (data) => postExport({
//     url: config.ORDER_LIST_EXPORT,
//     data
// }); //订单查询查询导出
//
// export const exportOrderQueryInterval = (data) => postExport({
//     url: config.ORDER_INTERVAL_EXPORT,
//     data
// }); //订单查询查询导出

/***/ })

})
//# sourceMappingURL=_app.js.d546dd31216ba854f29f.hot-update.js.map