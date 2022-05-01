webpackHotUpdate_N_E("pages/blogs",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9ibG9nLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUJsb2ciLCJibG9nIiwidG9rZW4iLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibGlzdEJsb2dzV2l0aENhdGVnb3JpZXNBbmRUYWdzIiwic2tpcCIsImxpbWl0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaW5nbGVCbG9nIiwic2x1ZyIsImxpc3QiLCJ1c2VybmFtZSIsImxpc3RCbG9nc0VuZHBvaW50IiwicmVtb3ZlQmxvZyIsImRlbGV0ZUJsb2dFbmRwb2ludCIsImlzQXV0aCIsInJvbGUiLCJoYW5kbGVSZXNwb25zZSIsInVwZGF0ZUJsb2ciLCJ1cGRhdGVCbG9nRW5kcG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQTBCO0FBQUEsTUFBbkJDLEtBQW1CLHVFQUFYLE1BQVc7QUFDaEQsU0FBT0MsdURBQUssV0FBSUMsMkNBQUosWUFBZ0I7QUFDeEJDLFVBQU0sRUFBRSxNQURnQjtBQUV4QkMsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMQyxtQkFBYSxtQkFBWU4sS0FBWjtBQUZSLEtBRmU7QUFNeEJPLFFBQUksRUFBRVI7QUFOa0IsR0FBaEIsQ0FBTCxDQVFGUyxJQVJFLENBUUcsVUFBQUMsUUFBUSxFQUFJO0FBQ2QsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxHQVZFLFdBV0ksVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENB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R0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxHQVpQLENBQVA7QUFhSCxDQXRCTTtBQXdCQSxJQUFNbUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQy9CLElBQUQsRUFBT0MsS0FBUCxFQUFjcUIsSUFBZCxFQUF1QjtBQUM3QyxNQUFJVSxrQkFBSjs7QUFFQSxNQUFJSixNQUFNLE1BQU1BLE1BQU0sR0FBR0MsSUFBVCxLQUFrQixDQUFsQyxFQUFxQztBQUNqQ0csc0JBQWtCLGFBQU03QiwyQ0FBTixtQkFBa0JtQixJQUFsQixDQUFsQjtBQUNILEdBRkQsTUFFTyxJQUFJTSxNQUFNLE1BQU1BLE1BQU0sR0FBR0MsSUFBVCxLQUFrQixDQUFsQyxFQUFxQztBQUN4Q0csc0JBQWtCLGFBQU03QiwyQ0FBTix3QkFBdUJtQixJQUF2QixDQUFsQjtBQUNIOztBQUVELFNBQU9wQix1REFBSyxXQUFJOEIsa0JBQUosR0FBMEI7QUFDbEM1QixVQUFNLEVBQUUsS0FEMEI7QUFFbENDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUUsa0JBREg7QUFFTEMsbUJBQWEsbUJBQVlOLEtBQVo7QUFGUixLQUZ5QjtBQU1sQ08sUUFBSSxFQUFFUjtBQU40QixHQUExQixDQUFMLENBUUZTLElBUkUsQ0FRRyxVQUFBQyxRQUFRLEVBQUk7QUFDZG9CLGtCQUFjLENBQUNwQixRQUFELENBQWQ7QUFDQSxXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNILEdBWEUsV0FZSSxVQUFBQyxHQUFHO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtBQUFBLEdBWlAsQ0FBUDtBQWFILENBdEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzLmNmYzczZTM0NjZmZWZhMjA5NjVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQmxvZyA9IChibG9nLCB0b2tlbiA9IFwidGV4dFwiKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9ibG9nYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBibG9nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdEJsb2dzV2l0aENhdGVnb3JpZXNBbmRUYWdzID0gKHNraXAsIGxpbWl0KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGxpbWl0LFxyXG4gICAgICAgIHNraXBcclxuICAgIH07XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9ibG9ncy1jYXRlZ29yaWVzLXRhZ3NgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaW5nbGVCbG9nID0gc2x1ZyA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9ibG9nLyR7c2x1Z31gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3QgPSB1c2VybmFtZSA9PiB7XHJcbiAgICBsZXQgbGlzdEJsb2dzRW5kcG9pbnQ7XHJcblxyXG4gICAgaWYgKHVzZXJuYW1lKSB7XHJcbiAgICAgICAgbGlzdEJsb2dzRW5kcG9pbnQgPSBgJHtBUEl9LyR7dXNlcm5hbWV9L2Jsb2dzYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdEJsb2dzRW5kcG9pbnQgPSBgJHtBUEl9L2Jsb2dzYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7bGlzdEJsb2dzRW5kcG9pbnR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVCbG9nID0gKHNsdWcsIHRva2VuKSA9PiB7XHJcbiAgICBsZXQgZGVsZXRlQmxvZ0VuZHBvaW50O1xyXG5cclxuICAgIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxKSB7XHJcbiAgICAgICAgZGVsZXRlQmxvZ0VuZHBvaW50ID0gYCR7QVBJfS9ibG9nLyR7c2x1Z31gO1xyXG4gICAgfSBlbHNlIGlmIChpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlQmxvZ0VuZHBvaW50ID0gYCR7QVBJfS91c2VyL2Jsb2cvJHtzbHVnfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGAke2RlbGV0ZUJsb2dFbmRwb2ludH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJsb2cgPSAoYmxvZywgdG9rZW4sIHNsdWcpID0+IHtcclxuICAgIGxldCB1cGRhdGVCbG9nRW5kcG9pbnQ7XHJcblxyXG4gICAgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEpIHtcclxuICAgICAgICB1cGRhdGVCbG9nRW5kcG9pbnQgPSBgJHtBUEl9L2Jsb2cvJHtzbHVnfWA7XHJcbiAgICB9IGVsc2UgaWYgKGlzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDApIHtcclxuICAgICAgICB1cGRhdGVCbG9nRW5kcG9pbnQgPSBgJHtBUEl9L3VzZXIvYmxvZy8ke3NsdWd9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dXBkYXRlQmxvZ0VuZHBvaW50fWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBibG9nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9