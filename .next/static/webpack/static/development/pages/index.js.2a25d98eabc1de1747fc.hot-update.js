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
    className: "jsx-126549621",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-126549621",
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
    className: "jsx-126549621",
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
    className: "jsx-126549621",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Navigate: ", NavigateTo))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-126549621",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, placeholderData && placeholderData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: item.id,
      className: "jsx-126549621",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-126549621",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-126549621",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-126549621" + " " + "left-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.dataMap.userHeadPortrait,
      className: "jsx-126549621",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-126549621",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, item.dataMap.nickName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-126549621",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, item.updateTime)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-126549621" + " " + "right-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-126549621",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, item.pageviewInt), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-126549621",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.likenumInt))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "126549621",
    __self: this
  }, "li.jsx-126549621{list-style-type :none;width :500px;}li.jsx-126549621>div.jsx-126549621{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content :space-between;-ms-flex-pack:justify;justify-content :space-between;}.left-box.jsx-126549621{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content :start;-ms-flex-pack:start;justify-content :start;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;}.left-box.jsx-126549621 img.jsx-126549621{width:50px;height:50px;border-radius :50%;}.left-box.jsx-126549621 span.jsx-126549621{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nd2VpL0RvY3VtZW50cy9zc3ItcHJvamVjdC9yZWFjdC1uZXh0LXNzci9jb21wb25lbnRzL3BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENrQixBQUdtQyxBQUlWLEFBSUEsQUFLRixBQUtPLFdBSk4sTUFLZixLQWxCaUIsQ0FjTSxZQWJ2QixPQWNBLGdDQVhtQyxBQUlSLGlHQUNILG9CQUp4Qiw2RUFLQSIsImZpbGUiOiIvVXNlcnMvd2FuZ3dlaS9Eb2N1bWVudHMvc3NyLXByb2plY3QvcmVhY3QtbmV4dC1zc3IvY29tcG9uZW50cy9wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb3VudGVyJ1xuaW1wb3J0IENsb2NrIGZyb20gJy4vY2xvY2snXG5cbmZ1bmN0aW9uIFBhZ2UgKHtcbiAgZXJyb3IsXG4gIGxhc3RVcGRhdGUsXG4gIGxpZ2h0LFxuICBsaW5rVG8sXG4gIE5hdmlnYXRlVG8sXG4gIHBsYWNlaG9sZGVyRGF0YSxcbiAgdGl0bGVcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPENsb2NrIGxhc3RVcGRhdGU9e2xhc3RVcGRhdGV9IGxpZ2h0PXtsaWdodH0gLz5cbiAgICAgIDxDb3VudGVyIC8+XG4gICAgICA8bmF2PlxuICAgICAgICA8TGluayBocmVmPXtsaW5rVG99PlxuICAgICAgICAgIDxhPk5hdmlnYXRlOiB7TmF2aWdhdGVUb308L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbmF2PlxuICAgICAgPHVsPlxuICAgICAgICAgIHtwbGFjZWhvbGRlckRhdGEgJiYgKFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlckRhdGEubWFwKChpdGVtLGluZGV4KT0+e1xuICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5kYXRhTWFwLnVzZXJIZWFkUG9ydHJhaXR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5kYXRhTWFwLm5pY2tOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS51cGRhdGVUaW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ucGFnZXZpZXdJbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5saWtlbnVtSW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBsaXtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZSA6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aCA6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIGxpPmRpdntcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudCA6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnQtYm94e1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50IDogc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubGVmdC1ib3ggaW1ne1xuICAgICAgICAgICAgd2lkdGg6NTBweDtcbiAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAubGVmdC1ib3ggc3BhbntcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1ib3h7XG5cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShQYWdlKVxuIl19 */\n/*@ sourceURL=/Users/wangwei/Documents/ssr-project/react-next-ssr/components/page.js */"), error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      color: 'red'
    },
    className: "jsx-126549621",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Error: ", error.message));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return state;
})(Page));

/***/ })

})
//# sourceMappingURL=index.js.2a25d98eabc1de1747fc.hot-update.js.map