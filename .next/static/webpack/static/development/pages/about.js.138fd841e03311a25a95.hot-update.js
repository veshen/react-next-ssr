webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/page.css":
/*!*****************************!*\
  !*** ./components/page.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/page.js":
/*!****************************!*\
  !*** ./components/page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter */ "./components/counter.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clock */ "./components/clock.js");
var _jsxFileName = "/Users/wangwei/Documents/ssr-project/react-next-ssr/components/page.js";





__webpack_require__(/*! ./page.css */ "./components/page.css");




function Page(_ref) {
  var error = _ref.error,
      lastUpdate = _ref.lastUpdate,
      light = _ref.light,
      linkTo = _ref.linkTo,
      NavigateTo = _ref.NavigateTo,
      placeholderData = _ref.placeholderData,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-762461674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-762461674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_clock__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lastUpdate: lastUpdate,
    light: light,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_counter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-762461674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: linkTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-762461674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Navigate: ", NavigateTo))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-762461674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, placeholderData && placeholderData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: item.id,
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.dataMap.userHeadPortrait,
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, item.dataMap.nickName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, item.dataMap.updateTime)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.pageviewInt), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-762461674",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, item.likenumInt))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "762461674",
    __self: this
  }, "ul.jsx-762461674 li.jsx-762461674{list-type-style :none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nd2VpL0RvY3VtZW50cy9zc3ItcHJvamVjdC9yZWFjdC1uZXh0LXNzci9jb21wb25lbnRzL3BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQU1tQyxzQkFDMUIiLCJmaWxlIjoiL1VzZXJzL3dhbmd3ZWkvRG9jdW1lbnRzL3Nzci1wcm9qZWN0L3JlYWN0LW5leHQtc3NyL2NvbXBvbmVudHMvcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbnJlcXVpcmUoJy4vcGFnZS5jc3MnKTtcbmltcG9ydCBDb3VudGVyIGZyb20gJy4vY291bnRlcidcbmltcG9ydCBDbG9jayBmcm9tICcuL2Nsb2NrJ1xuXG5mdW5jdGlvbiBQYWdlICh7XG4gIGVycm9yLFxuICBsYXN0VXBkYXRlLFxuICBsaWdodCxcbiAgbGlua1RvLFxuICBOYXZpZ2F0ZVRvLFxuICBwbGFjZWhvbGRlckRhdGEsXG4gIHRpdGxlXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDxDbG9jayBsYXN0VXBkYXRlPXtsYXN0VXBkYXRlfSBsaWdodD17bGlnaHR9IC8+XG4gICAgICA8Q291bnRlciAvPlxuICAgICAgPG5hdj5cbiAgICAgICAgPExpbmsgaHJlZj17bGlua1RvfT5cbiAgICAgICAgICA8YT5OYXZpZ2F0ZToge05hdmlnYXRlVG99PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L25hdj5cbiAgICAgIDx1bD5cbiAgICAgICAgICB7cGxhY2Vob2xkZXJEYXRhICYmIChcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJEYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmRhdGFNYXAudXNlckhlYWRQb3J0cmFpdH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmRhdGFNYXAubmlja05hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmRhdGFNYXAudXBkYXRlVGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnBhZ2V2aWV3SW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubGlrZW51bUludH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdWwge1xuXG4gICAgICAgIH1cbiAgICAgICAgdWwgbGkge1xuICAgICAgICAgICAgbGlzdC10eXBlLXN0eWxlIDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShQYWdlKVxuIl19 */\n/*@ sourceURL=/Users/wangwei/Documents/ssr-project/react-next-ssr/components/page.js */"), error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      color: 'red'
    },
    className: "jsx-762461674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Error: ", error.message));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return state;
})(Page));

/***/ })

})
//# sourceMappingURL=about.js.138fd841e03311a25a95.hot-update.js.map