webpackHotUpdate("static/development/pages/AddJob.js",{

/***/ "./pages/AddJob.js":
/*!*************************!*\
  !*** ./pages/AddJob.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_verifier_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/verifier.js */ "./components/verifier.js");
/* harmony import */ var _components_web3_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/web3.js */ "./components/web3.js");
/* harmony import */ var _components_snackbar_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/snackbar.js */ "./components/snackbar.js");










var _jsxFileName = "/home/ed/seconddapp/pages/AddJob.js";








var AddJob =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(AddJob, _Component);

  function AddJob(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AddJob);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(AddJob).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddCompanyName", function (event) {
      event.preventDefault();

      _this.setState({
        companyname: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddMonthH", function (event) {
      event.preventDefault();

      _this.setState({
        monthhired: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddMonthL", function (event) {
      event.preventDefault();

      _this.setState({
        monthleft: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddYearH", function (event) {
      event.preventDefault();

      _this.setState({
        yearhired: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddYearL", function (event) {
      event.preventDefault();

      _this.setState({
        yearleft: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddMonths", function (event) {
      event.preventDefault();

      _this.setState({
        monthsworked: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddPosition", function (event) {
      event.preventDefault();

      _this.setState({
        position: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAddSSN", function (event) {
      event.preventDefault();

      _this.setState({
        SSN: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                event.preventDefault();

                if (!(_this.state.companyname === '' || _this.state.position === '' || _this.state.monthsworked === 0 || _this.state.SSN === 0)) {
                  _context.next = 6;
                  break;
                }

                _this.setState({
                  errorMessage: "Fields can't be empty"
                });

                _context.next = 20;
                break;

              case 6:
                if (!(_this.state.SSN < 100000000 || _this.state.day > 999999999)) {
                  _context.next = 10;
                  break;
                }

                _this.setState({
                  errorMessage: "Invalid SSN"
                });

                _context.next = 20;
                break;

              case 10:
                if (!(_this.state.errorMessage === '')) {
                  _context.next = 20;
                  break;
                }

                _this.setState({
                  loading: true
                });

                _context.t0 = _this;
                _context.next = 15;
                return _components_web3_js__WEBPACK_IMPORTED_MODULE_15__["default"].eth.getAccounts();

              case 15:
                _context.t1 = _context.sent;
                _context.t2 = {
                  accounts: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                _context.next = 20;
                return _components_verifier_js__WEBPACK_IMPORTED_MODULE_14__["default"].methods.addJob(_this.state.monthhired, _this.state.monthleft, _this.state.yearhired, _this.state.yearleft, _this.state.position, _this.state.companyname, _this.state.SSN).send({
                  from: _this.state.accounts[0]
                });

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t3 = _context["catch"](0);

                if (_context.t3.message.includes('User denied')) {
                  _this.setState({
                    errorMessage: "Transaction Canceled"
                  });
                }

                if (_this.state.monthhired > _this.state.monthleft || _this.state.yearhired > _this.state.yearleft) {
                  _this.setState({
                    errorMessage: "Invalid Period"
                  });
                }

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 22]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      loading: false,
      accounts: [],
      errorMessage: '',
      position: '',
      companyname: '',
      monthhired: 0,
      monthleft: 0,
      yearhired: 0,
      yearleft: 0,
      SSN: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AddJob, [{
    key: "render",
    value: function render() {
      {
        var cardStyle = {
          width: '23%',
          margin: '100px auto'
        };
        var labelStyle = {
          margin: '10px',
          textAlign: 'center'
        };
        var formstyle = {
          opacity: '100%'
        };
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
          rel: "stylesheet",
          href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("style", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "\n        h1,\n        a {\n          font-family: 'Arial';\n        }\n        Card {\n           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n           }\n        body {\n         background: url(\"https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80\");\n         background-repeat: no-repeat;\n         background-position: center; \n         background-attachment: fixed;\n        }\n      ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"], {
          style: cardStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
          style: {
            margin: '4%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, "Add a job to your resume, once submited, the company will validate it or deny it.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"], {
          color: "blue",
          style: cardStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          style: labelStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, "Add Job ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
          className: "form-inline",
          onSubmit: this.onSubmit,
          error: !!this.state.errorMessage,
          style: formstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
          error: true,
          header: "Notice:",
          content: this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
          inline: true,
          style: {
            width: '60%',
            margin: '30px auto'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
          style: {
            width: '90%',
            margin: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          required: true,
          fluid: true,
          label: "Position:",
          style: {
            width: '100%'
          },
          value: this.state.position,
          onChange: this.handleAddPosition,
          error: !!this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          required: true,
          fluid: true,
          label: "Company:",
          style: {
            width: '96.555%'
          },
          value: this.state.companyname,
          onChange: this.handleAddCompanyName,
          error: !!this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          required: true,
          fluid: true,
          label: "SSN:",
          style: {
            width: '80%'
          },
          value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.SSN),
          onChange: this.handleAddSSN,
          type: "number",
          min: 100000000,
          max: 999999999,
          step: 1,
          error: !!this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          style: {
            margin: '4%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, "Period Worked:")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          style: {
            margin: '4%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, "Date hired:"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          required: true,
          fluid: true,
          label: "month:",
          style: {
            width: '100px'
          },
          value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.monthhired),
          onChange: this.handleAddMonthH,
          type: "number",
          min: 1,
          max: 31,
          step: 1,
          error: !!this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          required: true,
          fluid: true,
          label: "year:",
          style: {
            width: '100px'
          },
          value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.yearhired),
          onChange: this.handleAddYearH,
          type: "number",
          min: 1978,
          max: 2028,
          step: 1,
          error: !!this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          style: {
            margin: '4%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, "Date Left:"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          required: true,
          fluid: true,
          label: "month:",
          style: {
            width: '100px'
          },
          value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.monthleft),
          onChange: this.handleAddMonthL,
          type: "number",
          min: 1,
          step: 31,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          required: true,
          fluid: true,
          label: "year:",
          style: {
            width: '100px'
          },
          value: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.yearleft),
          onChange: this.handleAddYearL,
          type: "number",
          min: 1978,
          step: 2028,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
          style: {
            textAlign: 'center',
            margin: '10%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          style: {
            width: '30%',
            height: '50px'
          },
          onClick: this.onSubmit,
          color: "blue",
          disabled: this.state.loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, "Submit")))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, this.state.loading === true ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_snackbar_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }) : null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }));
      }
    }
  }]);

  return AddJob;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddJob);

/***/ })

})
//# sourceMappingURL=AddJob.js.8d6bbb32290785a7b5e5.hot-update.js.map