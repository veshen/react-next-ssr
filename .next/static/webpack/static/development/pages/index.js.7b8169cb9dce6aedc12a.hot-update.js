webpackHotUpdate("static/development/pages/index.js",{

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







function Page(_ref) {
  var error = _ref.error,
      lastUpdate = _ref.lastUpdate,
      light = _ref.light,
      linkTo = _ref.linkTo,
      NavigateTo = _ref.NavigateTo,
      placeholderData = _ref.placeholderData,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3855886691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3855886691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_clock__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lastUpdate: lastUpdate,
    light: light,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_counter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3855886691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: linkTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3855886691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Navigate: ", NavigateTo))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3855886691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, placeholderData && placeholderData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: item.id,
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.dataMap.userHeadPortrait,
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, item.dataMap.nickName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, item.dataMap.updateTime)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, item.pageviewInt), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3855886691",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.likenumInt))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3855886691",
    __self: this
  }, "li.jsx-3855886691{list-style-type :none;}li.jsx-3855886691>div.jsx-3855886691{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nd2VpL0RvY3VtZW50cy9zc3ItcHJvamVjdC9yZWFjdC1uZXh0LXNzci9jb21wb25lbnRzL3BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENrQixBQUdtQyxBQUdWLHNCQUZoQixvREFHQSIsImZpbGUiOiIvVXNlcnMvd2FuZ3dlaS9Eb2N1bWVudHMvc3NyLXByb2plY3QvcmVhY3QtbmV4dC1zc3IvY29tcG9uZW50cy9wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb3VudGVyJ1xuaW1wb3J0IENsb2NrIGZyb20gJy4vY2xvY2snXG5cbmZ1bmN0aW9uIFBhZ2UgKHtcbiAgZXJyb3IsXG4gIGxhc3RVcGRhdGUsXG4gIGxpZ2h0LFxuICBsaW5rVG8sXG4gIE5hdmlnYXRlVG8sXG4gIHBsYWNlaG9sZGVyRGF0YSxcbiAgdGl0bGVcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPENsb2NrIGxhc3RVcGRhdGU9e2xhc3RVcGRhdGV9IGxpZ2h0PXtsaWdodH0gLz5cbiAgICAgIDxDb3VudGVyIC8+XG4gICAgICA8bmF2PlxuICAgICAgICA8TGluayBocmVmPXtsaW5rVG99PlxuICAgICAgICAgIDxhPk5hdmlnYXRlOiB7TmF2aWdhdGVUb308L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbmF2PlxuICAgICAgPHVsPlxuICAgICAgICAgIHtwbGFjZWhvbGRlckRhdGEgJiYgKFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlckRhdGEubWFwKChpdGVtLGluZGV4KT0+e1xuICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uZGF0YU1hcC51c2VySGVhZFBvcnRyYWl0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZGF0YU1hcC5uaWNrTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZGF0YU1hcC51cGRhdGVUaW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ucGFnZXZpZXdJbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5saWtlbnVtSW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsaXtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZSA6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbGk+ZGl2e1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICB7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUpKFBhZ2UpXG4iXX0= */\n/*@ sourceURL=/Users/wangwei/Documents/ssr-project/react-next-ssr/components/page.js */"), error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      color: 'red'
    },
    className: "jsx-3855886691",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Error: ", error.message));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return state;
})(Page));

/***/ })

})
//# sourceMappingURL=index.js.7b8169cb9dce6aedc12a.hot-update.js.map