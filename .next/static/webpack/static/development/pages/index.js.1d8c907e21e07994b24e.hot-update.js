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
    className: "jsx-927708430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-927708430",
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
    className: "jsx-927708430",
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
    className: "jsx-927708430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Navigate: ", NavigateTo))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-927708430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, placeholderData && placeholderData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: item.id,
      className: "jsx-927708430",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-927708430",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-927708430",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-927708430" + " " + "left-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.dataMap.userHeadPortrait,
      className: "jsx-927708430",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-927708430",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, item.dataMap.nickName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-927708430",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, item.updateTime)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-927708430" + " " + "right-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-927708430",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, item.pageviewInt), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-927708430",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.likenumInt))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "927708430",
    __self: this
  }, "li.jsx-927708430{list-style-type :none;}li.jsx-927708430>div.jsx-927708430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.left-box.jsx-927708430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content :start;-ms-flex-pack:start;justify-content :start;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;}.left-box.jsx-927708430 img.jsx-927708430{width:50px;height:50px;border-radius :50%;}.left-box.jsx-927708430 span.jsx-927708430{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nd2VpL0RvY3VtZW50cy9zc3ItcHJvamVjdC9yZWFjdC1uZXh0LXNzci9jb21wb25lbnRzL3BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENrQixBQUdtQyxBQUdWLEFBR0EsQUFLRixBQUtPLFdBSk4sTUFLZixLQWhCQSxDQVl1QixtQkFDdkIsZ0NBVkEsQUFHMkIsaUdBQ0gsaUdBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy93YW5nd2VpL0RvY3VtZW50cy9zc3ItcHJvamVjdC9yZWFjdC1uZXh0LXNzci9jb21wb25lbnRzL3BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvdW50ZXInXG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9jbG9jaydcblxuZnVuY3Rpb24gUGFnZSAoe1xuICBlcnJvcixcbiAgbGFzdFVwZGF0ZSxcbiAgbGlnaHQsXG4gIGxpbmtUbyxcbiAgTmF2aWdhdGVUbyxcbiAgcGxhY2Vob2xkZXJEYXRhLFxuICB0aXRsZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8Q2xvY2sgbGFzdFVwZGF0ZT17bGFzdFVwZGF0ZX0gbGlnaHQ9e2xpZ2h0fSAvPlxuICAgICAgPENvdW50ZXIgLz5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmtUb30+XG4gICAgICAgICAgPGE+TmF2aWdhdGU6IHtOYXZpZ2F0ZVRvfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9uYXY+XG4gICAgICA8dWw+XG4gICAgICAgICAge3BsYWNlaG9sZGVyRGF0YSAmJiAoXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyRGF0YS5tYXAoKGl0ZW0saW5kZXgpPT57XG4gICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmRhdGFNYXAudXNlckhlYWRQb3J0cmFpdH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmRhdGFNYXAubmlja05hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnVwZGF0ZVRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5wYWdldmlld0ludH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmxpa2VudW1JbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGxpe1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlIDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBsaT5kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnQtYm94e1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50IDogc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubGVmdC1ib3ggaW1ne1xuICAgICAgICAgICAgd2lkdGg6NTBweDtcbiAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAubGVmdC1ib3ggc3BhbntcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1ib3h7XG5cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShQYWdlKVxuIl19 */\n/*@ sourceURL=/Users/wangwei/Documents/ssr-project/react-next-ssr/components/page.js */"), error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      color: 'red'
    },
    className: "jsx-927708430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Error: ", error.message));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return state;
})(Page));

/***/ })

})
//# sourceMappingURL=index.js.1d8c907e21e07994b24e.hot-update.js.map