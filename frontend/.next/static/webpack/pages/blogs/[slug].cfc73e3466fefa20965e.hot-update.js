webpackHotUpdate_N_E("pages/blogs/[slug]",{

/***/ "./actions/blog.js":
/*!*************************!*\
  !*** ./actions/blog.js ***!
  \*************************/
/*! exports provided: createBlog, listBlogsWithCategoriesAndTags, singleBlog, list, removeBlog, updateBlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listBlogsWithCategoriesAndTags", function() { return listBlogsWithCategoriesAndTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleBlog", function() { return singleBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBlog", function() { return removeBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlog", function() { return updateBlog; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var createBlog = function createBlog(blog) {
  var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/blog"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: blog
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listBlogsWithCategoriesAndTags = function listBlogsWithCategoriesAndTags(skip, limit) {
  var data = {
    limit: limit,
    skip: skip
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/blogs-categories-tags"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var singleBlog = function singleBlog(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/blog/").concat(slug), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var list = function list(username) {
  var listBlogsEndpoint;

  if (username) {
    listBlogsEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/").concat(username, "/blogs");
  } else {
    listBlogsEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/blogs");
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(listBlogsEndpoint), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeBlog = function removeBlog(slug, token) {
  var deleteBlogEndpoint;

  if (isAuth() && isAuth().role === 1) {
    deleteBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/blog/").concat(slug);
  } else if (isAuth() && isAuth().role === 0) {
    deleteBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/user/blog/").concat(slug);
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(deleteBlogEndpoint), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    handleResponse(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateBlog = function updateBlog(blog, token, slug) {
  var updateBlogEndpoint;

  if (isAuth() && isAuth().role === 1) {
    updateBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/blog/").concat(slug);
  } else if (isAuth() && isAuth().role === 0) {
    updateBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/user/blog/").concat(slug);
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(updateBlogEndpoint), {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: blog
  }).then(function (response) {
    handleResponse(response);
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/blogs/[slug].js":
/*!*******************************!*\
  !*** ./pages/blogs/[slug].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _componenets_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../componenets/Layout */ "./componenets/Layout.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "D:\\project\\Walkover\\frontend\\pages\\blogs\\[slug].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var SingleBlog = function SingleBlog(_ref) {
  _s();

  var blog = _ref.blog,
      query = _ref.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      related = _useState[0],
      setRelated = _useState[1];

  var loadRelated = function loadRelated() {
    listRelated({
      blog: blog
    }).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadRelated();
  }, []);

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, blog.title, " | ", _config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]), __jsx("meta", {
      name: "description",
      content: blog.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/blogs/").concat(query.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(blog.title, "| ").concat(_config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:description",
      content: blog.mdesc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:type",
      content: "webiste",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/blogs/").concat(query.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/blog/photo/").concat(blog.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:image:secure_url",
      ccontent: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["API"], "/blog/photo/").concat(blog.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }), __jsx("meta", {
      property: "fb:app_id",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["FB_APP_ID"]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, head(), __jsx(_componenets_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("article", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, __jsx("h1", {
    className: "display-2 pb-3 pt-3 text-center font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, blog.title), __jsx("p", {
    className: "lead mt-3 mark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, "Written by", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/".concat(blog.postedBy),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 41
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 45
    }
  }, blog.postedBy)), ' ', "| Published ", moment__WEBPACK_IMPORTED_MODULE_7___default()(blog.updatedAt).fromNow())))), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-md-12 lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, react_render_html__WEBPACK_IMPORTED_MODULE_6___default()(blog.body))))))));
};

_s(SingleBlog, "FWRD1Ef/w5AfQgJtp5JTMAZWSAs=");

_c = SingleBlog;

SingleBlog.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["singleBlog"])(query.slug).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return {
        blog: data,
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleBlog);

var _c;

$RefreshReg$(_c, "SingleBlog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9ibG9nLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9ncy9bc2x1Z10uanMiXSwibmFtZXMiOlsiY3JlYXRlQmxvZyIsImJsb2ciLCJ0b2tlbiIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3MiLCJza2lwIiwibGltaXQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInNpbmdsZUJsb2ciLCJzbHVnIiwibGlzdCIsInVzZXJuYW1lIiwibGlzdEJsb2dzRW5kcG9pbnQiLCJyZW1vdmVCbG9nIiwiZGVsZXRlQmxvZ0VuZHBvaW50IiwiaXNBdXRoIiwicm9sZSIsImhhbmRsZVJlc3BvbnNlIiwidXBkYXRlQmxvZyIsInVwZGF0ZUJsb2dFbmRwb2ludCIsIlNpbmdsZUJsb2ciLCJxdWVyeSIsInVzZVN0YXRlIiwicmVsYXRlZCIsInNldFJlbGF0ZWQiLCJsb2FkUmVsYXRlZCIsImxpc3RSZWxhdGVkIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJoZWFkIiwidGl0bGUiLCJBUFBfTkFNRSIsIm1kZXNjIiwiRE9NQUlOIiwiRkJfQVBQX0lEIiwicG9zdGVkQnkiLCJtb21lbnQiLCJ1cGRhdGVkQXQiLCJmcm9tTm93IiwicmVuZGVySFRNTCIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBMEI7QUFBQSxNQUFuQkMsS0FBbUIsdUVBQVgsTUFBVztBQUNoRCxTQUFPQyx1REFBSyxXQUFJQywy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NWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCbG9nID0gKGJsb2csIHRva2VuID0gXCJ0ZXh0XCIpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2Jsb2dgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IGJsb2dcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0QmxvZ3NXaXRoQ2F0ZWdvcmllc0FuZFRhZ3MgPSAoc2tpcCwgbGltaXQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgbGltaXQsXHJcbiAgICAgICAgc2tpcFxyXG4gICAgfTtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2Jsb2dzLWNhdGVnb3JpZXMtdGFnc2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZUJsb2cgPSBzbHVnID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2Jsb2cvJHtzbHVnfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdCA9IHVzZXJuYW1lID0+IHtcclxuICAgIGxldCBsaXN0QmxvZ3NFbmRwb2ludDtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUpIHtcclxuICAgICAgICBsaXN0QmxvZ3NFbmRwb2ludCA9IGAke0FQSX0vJHt1c2VybmFtZX0vYmxvZ3NgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0QmxvZ3NFbmRwb2ludCA9IGAke0FQSX0vYmxvZ3NgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHtsaXN0QmxvZ3NFbmRwb2ludH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUJsb2cgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuICAgIGxldCBkZWxldGVCbG9nRW5kcG9pbnQ7XHJcblxyXG4gICAgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICBkZWxldGVCbG9nRW5kcG9pbnQgPSBgJHtBUEl9L2Jsb2cvJHtzbHVnfWA7XHJcbiAgICB9IGVsc2UgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDApIHtcclxuICAgICAgICBkZWxldGVCbG9nRW5kcG9pbnQgPSBgJHtBUEl9L3VzZXIvYmxvZy8ke3NsdWd9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7ZGVsZXRlQmxvZ0VuZHBvaW50fWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQmxvZyA9IChibG9nLCB0b2tlbiwgc2x1ZykgPT4ge1xyXG4gICAgbGV0IHVwZGF0ZUJsb2dFbmRwb2ludDtcclxuXHJcbiAgICBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSkge1xyXG4gICAgICAgIHVwZGF0ZUJsb2dFbmRwb2ludCA9IGAke0FQSX0vYmxvZy8ke3NsdWd9YDtcclxuICAgIH0gZWxzZSBpZiAoaXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMCkge1xyXG4gICAgICAgIHVwZGF0ZUJsb2dFbmRwb2ludCA9IGAke0FQSX0vdXNlci9ibG9nLyR7c2x1Z31gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaChgJHt1cGRhdGVCbG9nRW5kcG9pbnR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IGJsb2dcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59OyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW5ldHMvTGF5b3V0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2luZ2xlQmxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZyc7XHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSwgRkJfQVBQX0lEIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtcmVuZGVyLWh0bWwnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuY29uc3QgU2luZ2xlQmxvZyA9ICh7IGJsb2csIHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IFtyZWxhdGVkLCBzZXRSZWxhdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkUmVsYXRlZCA9ICgpID0+IHtcclxuICAgICAgICBsaXN0UmVsYXRlZCh7IGJsb2cgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVsYXRlZChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRSZWxhdGVkKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICAgICAge2Jsb2cudGl0bGV9IHwge0FQUF9OQU1FfVxyXG4gICAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLm1kZXNjfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7YmxvZy50aXRsZX18ICR7QVBQX05BTUV9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jsb2cubWRlc2N9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJpc3RlXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e2Ake0FQUF9OQU1FfWB9IC8+XHJcblxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17YCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGNjb250ZW50PXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtibG9nLnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL2pwZ1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD17YCR7RkJfQVBQX0lEfWB9IC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7aGVhZCgpfVxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0yIHBiLTMgcHQtMyB0ZXh0LWNlbnRlciBmb250LXdlaWdodC1ib2xkXCI+e2Jsb2cudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBtdC0zIG1hcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdyaXR0ZW4gYnl7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7YmxvZy5wb3N0ZWRCeX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57YmxvZy5wb3N0ZWRCeX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUHVibGlzaGVkIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBsZWFkXCI+e3JlbmRlckhUTUwoYmxvZy5ib2R5KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuU2luZ2xlQmxvZy5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICByZXR1cm4gc2luZ2xlQmxvZyhxdWVyeS5zbHVnKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdHRVQgSU5JVElBTCBQUk9QUyBJTiBTSU5HTEUgQkxPRycsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBibG9nOiBkYXRhLCBxdWVyeSB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQmxvZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==