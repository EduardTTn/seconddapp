webpackHotUpdate("static/development/pages/RequestsInstitution.js",{

/***/ "./pages/RequestsInstitution.js":
/*!**************************************!*\
  !*** ./pages/RequestsInstitution.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_verifier_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/verifier.js */ "./components/verifier.js");
/* harmony import */ var _components_web3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/web3.js */ "./components/web3.js");
/* harmony import */ var _components_snackbar_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/snackbar.js */ "./components/snackbar.js");








var _jsxFileName = "/home/ed/seconddapp/pages/RequestsInstitution.js";








var RequestsInstitution =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(RequestsInstitution, _Component);

  function RequestsInstitution(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RequestsInstitution);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(RequestsInstitution).call(this, props));
    _this.state = {
      institutionz: [],
      accounts: [],
      loading: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestsInstitution, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadBlockchainData();
    } //loads the data from the blockchain before the page is fired and executes the following functions from the contract: getJobRequestCount, getJobRequest

  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var x, i, z;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return _components_web3_js__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 3:
                _context.t1 = _context.sent;
                _context.t2 = {
                  accounts: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                _context.t3 = this;
                _context.next = 9;
                return _components_web3_js__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 9:
                _context.t4 = _context.sent;
                _context.t5 = {
                  accounts: _context.t4
                };

                _context.t3.setState.call(_context.t3, _context.t5);

                _context.next = 14;
                return _components_verifier_js__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getCertRequestCount().call();

              case 14:
                x = _context.sent;
                _context.prev = 15;
                i = 0;

              case 17:
                if (!(i < x)) {
                  _context.next = 25;
                  break;
                }

                _context.next = 20;
                return _components_verifier_js__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getCertRequest(i).call();

              case 20:
                z = _context.sent;
                this.setState({
                  institutionz: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.state.institutionz), [z])
                });

              case 22:
                i++;
                _context.next = 17;
                break;

              case 25:
                _context.next = 30;
                break;

              case 27:
                _context.prev = 27;
                _context.t6 = _context["catch"](15);
                this.setState({
                  errorMessage: _context.t6.message
                });

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[15, 27]]);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }() //renders the certificates requests of an institution in table rows

  }, {
    key: "renderCertRequests",
    value: function renderCertRequests() {
      var x = this.state.accounts[0];
      var r = this.state.institutionz.map(function (cert, index) {
        var _this2 = this;

        return [react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, cert[2].toString()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, cert[0].toString()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, cert[1].toString()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, cert[3].toString()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick(e) {
            //calls the approveRequestCertificate function of the contract
            e.preventDefault();
            _components_verifier_js__WEBPACK_IMPORTED_MODULE_12__["default"].methods.approveRequestCertificate(index).send({
              from: x
            });

            _this2.setState({
              loading: true
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          color: "black",
          name: "check",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick(e) {
            //calls the denyRequestCertificate function of the contract
            e.preventDefault();
            _components_verifier_js__WEBPACK_IMPORTED_MODULE_12__["default"].methods.denyRequestCertificate(index).send({
              from: x
            });

            _this2.setState({
              loading: true
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          color: "black",
          name: "close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        })))];
      });
      return r;
    } //renders the certificates requests in a table

  }, {
    key: "renderCertRequestsTables",
    value: function renderCertRequestsTables() {
      var tableStyle = {
        width: '45%',
        margin: '30px auto'
      };
      var cardStyle = {
        width: '35%',
        margin: '100px auto'
      };

      if (this.state.institutionz && this.state.institutionz.length) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"], {
          celled: true,
          style: tableStyle,
          color: 'blue',
          key: 'blue',
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
          inverted: true,
          color: "blue",
          style: {
            textalign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, "Requests")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, " ID"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "Graduation Year"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "Requester"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Degree"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "Validate"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Table"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, this.renderCertRequests()));
      } else return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          margin: '10%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Card"], {
        style: cardStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        style: {
          margin: '4%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "No Requests registered at the moment.")));
    }
  }, {
    key: "render",
    value: function render() {
      console.log('address:', this.state.accounts[0]);
      console.log('company:', this.state.loading);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "\n        body {\n         background: url(\"https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80\");\n         background-repeat: no-repeat;\n         background-position: center; \n         background-attachment: fixed;\n        }\n        Card {\n           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n     \n           }\n          ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          margin: '150px auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, this.renderCertRequestsTables()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, this.state.loading === true ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_snackbar_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }));
    }
  }]);

  return RequestsInstitution;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestsInstitution);

/***/ })

})
//# sourceMappingURL=RequestsInstitution.js.a3f1cd6406664dee4e33.hot-update.js.map