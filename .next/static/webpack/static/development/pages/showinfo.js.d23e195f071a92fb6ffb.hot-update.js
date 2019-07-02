webpackHotUpdate("static/development/pages/showinfo.js",{

/***/ "./pages/showinfo.js":
/*!***************************!*\
  !*** ./pages/showinfo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_verifier_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/verifier.js */ "./components/verifier.js");
/* harmony import */ var _components_web3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/web3.js */ "./components/web3.js");









var _jsxFileName = "/home/ed/seconddapp/pages/showinfo.js";







var ShowInfo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ShowInfo, _Component);

  function ShowInfo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ShowInfo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ShowInfo).call(this, props));
    _this.state = {
      loading: false,
      accounts: [],
      jobs: [],
      certificates: [],
      info: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ShowInfo, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadBlockchainData();
    } //calls the contract functions before the page is rendered(getBasicInfo, getJobCount, getJob )

  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var x, y, i, _z, z, _i, r;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return _components_web3_js__WEBPACK_IMPORTED_MODULE_14__["default"].eth.isMining();

              case 3:
                _context.t1 = _context.sent;
                _context.t2 = {
                  loading: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                _context.t3 = this;
                _context.next = 9;
                return _components_web3_js__WEBPACK_IMPORTED_MODULE_14__["default"].eth.getAccounts();

              case 9:
                _context.t4 = _context.sent;
                _context.t5 = {
                  accounts: _context.t4
                };

                _context.t3.setState.call(_context.t3, _context.t5);

                _context.next = 14;
                return _components_verifier_js__WEBPACK_IMPORTED_MODULE_13__["default"].methods.getBasicInfo(this.state.accounts[0]).call();

              case 14:
                x = _context.sent;
                this.setState({
                  info: x
                });
                _context.next = 18;
                return _components_verifier_js__WEBPACK_IMPORTED_MODULE_13__["default"].methods.getJobCount(this.state.accounts[0]).call();

              case 18:
                y = _context.sent;
                i = 0;

              case 20:
                if (!(i < y)) {
                  _context.next = 28;
                  break;
                }

                _context.next = 23;
                return _components_verifier_js__WEBPACK_IMPORTED_MODULE_13__["default"].methods.getJob(this.state.accounts[0], i).call();

              case 23:
                _z = _context.sent;
                this.setState({
                  jobs: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(this.state.jobs), [_z])
                });

              case 25:
                i++;
                _context.next = 20;
                break;

              case 28:
                _context.next = 30;
                return _components_verifier_js__WEBPACK_IMPORTED_MODULE_13__["default"].methods.getCertificateCount(this.state.accounts[0]).call();

              case 30:
                z = _context.sent;
                _i = 0;

              case 32:
                if (!(_i < z)) {
                  _context.next = 40;
                  break;
                }

                _context.next = 35;
                return _components_verifier_js__WEBPACK_IMPORTED_MODULE_13__["default"].methods.getCertificate(this.state.accounts[0], _i).call();

              case 35:
                r = _context.sent;
                this.setState({
                  certificates: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(this.state.certificates), [r])
                });

              case 37:
                _i++;
                _context.next = 32;
                break;

              case 40:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }() //renders the certificates of an user in table rows

  }, {
    key: "renderCertificates",
    value: function renderCertificates() {
      var x = this.state.accounts[0];
      var y = 'Unknown';
      var r = this.state.certificates.map(function (certificate) {
        if (certificate[3] === false && certificate[4] === false) {
          y = 'Unknown';
        } else if (certificate[3] === true) {
          y = 'Approved';
        } else if (certificate[4] === true) {
          y = 'Denied';
        }

        return [react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Row, {
          positive: certificate[3],
          negative: !certificate[3],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, certificate[1].toString()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, certificate[0].toString()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, certificate[2].toString()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, y))];
      });
      return r;
    } //renders the table of certificates

  }, {
    key: "renderCertificateTable",
    value: function renderCertificateTable() {
      var tableStyle = {
        width: '38%',
        margin: '30px auto'
      };

      if (this.state.certificates && this.state.certificates.length) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"], {
          celled: true,
          style: tableStyle,
          color: 'blue',
          key: 'blue',
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
          inverted: true,
          color: "blue",
          style: {
            textalign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "Certificates")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, " Institution"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Year "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Degree"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Validity"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, this.renderCertificates()));
      } else return null;
    } //renders the jobs of an user in table rows

  }, {
    key: "renderJobs",
    value: function renderJobs() {
      var x = this.state.accounts[0];
      var y = 'Unknown';
      var r = this.state.jobs.map(function (job) {
        if (job[3] === false && job[4] === false) {
          y = 'Unknown';
        } else if (job[3] === true) {
          y = 'Approved';
        } else if (job[4] === true) {
          y = 'Denied';
        }

        return [react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Row, {
          positive: job[3],
          negative: !job[3],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, job[1].toString()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, job[0].toString()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, job[2].toString()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, y))];
      });
      return r;
    } //renders the table of jobs

  }, {
    key: "renderJobsTable",
    value: function renderJobsTable() {
      var tableStyle = {
        width: '38%',
        margin: '30px auto'
      };

      if (this.state.jobs && this.state.jobs.length) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"], {
          celled: true,
          style: tableStyle,
          color: 'blue',
          key: 'blue',
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
          inverted: true,
          color: "blue",
          style: {
            textalign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, "Jobs")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, " Company"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, "Period Worked"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "Position"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Validity"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Table"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, this.renderJobs()));
      } else return null;
    }
  }, {
    key: "render",
    value: function render() {
      var cardStyle = {
        width: '15%',
        margin: '100px auto'
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "\n        h1,\n        a {\n          font-family: 'Helvetica';\n        }\n        \n        Card {\n           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n           background-color: #D9499A;\n           }\n         \n        body {\n         background: url(\"https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80\");\n         background-repeat: no-repeat;\n         background-position: center; \n         background-attachment: fixed;\n        }\n      ")), this.state.info === null ? null : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        color: "blue",
        style: cardStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          margin: '2%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Name:"), " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, " ", this.state.info[0].toString())), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          margin: '2%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Date of birth:"), " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.info[1]), "/", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.info[2]), "/", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.info[3]), " ")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          margin: '2%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Location:"), " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, " ", this.state.info[4].toString())), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          margin: '2%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "E-mail:"), " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, " ", this.state.info[5].toString())))), this.renderJobsTable(), this.renderCertificateTable(), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }));
    }
  }]);

  return ShowInfo;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShowInfo);

/***/ })

})
//# sourceMappingURL=showinfo.js.d23e195f071a92fb6ffb.hot-update.js.map