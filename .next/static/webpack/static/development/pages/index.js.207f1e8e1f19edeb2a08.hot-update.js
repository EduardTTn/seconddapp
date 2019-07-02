webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/web3 */ "./components/web3.js");
/* harmony import */ var _components_verifier__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/verifier */ "./components/verifier.js");
/* harmony import */ var _components_snackbar_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/snackbar.js */ "./components/snackbar.js");











var _jsxFileName = "/home/ed/seconddapp/pages/index.js";








var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleChange", function (event) {
      event.preventDefault();

      _this.setState({
        info: '',
        jobs: [],
        certificates: [],
        email: '',
        address: event.target.value,
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleSecondChange", function (event) {
      event.preventDefault();

      _this.setState({
        info: '',
        jobs: [],
        certificates: [],
        email: event.target.value,
        address: '',
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onEmailClick", function (event) {
      event.preventDefault();

      _this.setState({
        info: '',
        jobs: [],
        certificates: [],
        addressform: false,
        address: '',
        email: '',
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onAddressClick", function (event) {
      event.preventDefault();

      _this.setState({
        info: '',
        jobs: [],
        certificates: [],
        addressform: true,
        address: '',
        email: '',
        errorMessage: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onSecondSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {
        var j, x, y, i, _z, z, _i, r;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                event.preventDefault();
                _context.t0 = _this;
                _context.next = 5;
                return _components_web3__WEBPACK_IMPORTED_MODULE_15__["default"].eth.getAccounts();

              case 5:
                _context.t1 = _context.sent;
                _context.t2 = {
                  accounts: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.next = 11;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getAddress(_this.state.email).call();

              case 11:
                j = _context.sent;
                _context.next = 14;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getBasicInfo(j).call();

              case 14:
                x = _context.sent;

                if (x === null) {
                  _this.setState({
                    errorMessage: 'E-mail not registered'
                  });
                } else {
                  _this.setState({
                    info: x
                  });
                }

                _context.next = 18;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getJobCount(j).call();

              case 18:
                y = _context.sent;
                i = 0;

              case 20:
                if (!(i < y)) {
                  _context.next = 28;
                  break;
                }

                _context.next = 23;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getJob(j, i).call();

              case 23:
                _z = _context.sent;

                _this.setState({
                  jobs: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.jobs), [_z])
                });

              case 25:
                i++;
                _context.next = 20;
                break;

              case 28:
                _context.next = 30;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getCertificateCount(j).call();

              case 30:
                z = _context.sent;
                _i = 0;

              case 32:
                if (!(_i < z)) {
                  _context.next = 40;
                  break;
                }

                _context.next = 35;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getCertificate(j, _i).call();

              case 35:
                r = _context.sent;

                _this.setState({
                  certificates: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.certificates), [r])
                });

              case 37:
                _i++;
                _context.next = 32;
                break;

              case 40:
                _context.next = 45;
                break;

              case 42:
                _context.prev = 42;
                _context.t3 = _context["catch"](0);

                if (_context.t3.message.includes('User denied')) {
                  _this.setState({
                    errorMessage: "Transaction Canceled"
                  });
                }

              case 45:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 42]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event) {
        var x, y, i, _z2, z, _i2, r;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                event.preventDefault();
                _context2.t0 = _this;
                _context2.next = 5;
                return _components_web3__WEBPACK_IMPORTED_MODULE_15__["default"].eth.getAccounts();

              case 5:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  accounts: _context2.t1
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context2.next = 11;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getBasicInfo(_this.state.address).call();

              case 11:
                x = _context2.sent;

                if (x === null) {
                  _this.setState({
                    errorMessage: 'Address not registered'
                  });
                } else {
                  _this.setState({
                    info: x
                  });
                }

                _context2.next = 15;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getJobCount(_this.state.address).call();

              case 15:
                y = _context2.sent;
                i = 0;

              case 17:
                if (!(i < y)) {
                  _context2.next = 25;
                  break;
                }

                _context2.next = 20;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getJob(_this.state.address, i).call();

              case 20:
                _z2 = _context2.sent;

                _this.setState({
                  jobs: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.jobs), [_z2])
                });

              case 22:
                i++;
                _context2.next = 17;
                break;

              case 25:
                _context2.next = 27;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getCertificateCount(_this.state.address).call();

              case 27:
                z = _context2.sent;
                _i2 = 0;

              case 29:
                if (!(_i2 < z)) {
                  _context2.next = 37;
                  break;
                }

                _context2.next = 32;
                return _components_verifier__WEBPACK_IMPORTED_MODULE_16__["default"].methods.getCertificate(_this.state.address, _i2).call();

              case 32:
                r = _context2.sent;

                _this.setState({
                  certificates: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.state.certificates), [r])
                });

              case 34:
                _i2++;
                _context2.next = 29;
                break;

              case 37:
                _context2.next = 43;
                break;

              case 39:
                _context2.prev = 39;
                _context2.t3 = _context2["catch"](0);

                if (_context2.t3.message.includes('User denied')) {
                  _this.setState({
                    errorMessage: "Transaction Canceled"
                  });
                }

                if (_context2.t3.message.includes('invalid address')) _this.setState({
                  errorMessage: 'Invalid Address!'
                });

              case 43:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 39]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.state = {
      loading: false,
      addressform: true,
      accounts: [],
      jobs: [],
      certificates: [],
      info: '',
      address: '',
      email: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadBlockchainData();
    } //loads the accounts present in the metamask

  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = this;
                _context3.next = 3;
                return _components_web3__WEBPACK_IMPORTED_MODULE_15__["default"].eth.getAccounts();

              case 3:
                _context3.t1 = _context3.sent;
                _context3.t2 = {
                  accounts: _context3.t1
                };

                _context3.t0.setState.call(_context3.t0, _context3.t2);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }() //handle methods are changing the states and prevent the default behaviour

  }, {
    key: "renderCertificates",
    //renders the certificates of an user in table rows
    value: function renderCertificates() {
      var x = 'Certificates' + this.state.address;
      var y = 'Unknown';
      var r = this.state.certificates.map(function (certificate) {
        if (certificate[3] === false && certificate[4] === false) {
          y = 'Unknown';
        } else if (certificate[3] === true) {
          y = 'Approved';
        } else if (certificate[4] === true) {
          y = 'Denied';
        }

        return [react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, {
          positive: certificate[3],
          negative: !certificate[3],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
          key: x + '1',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, certificate[1].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
          key: x + '2',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, certificate[0].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
          key: x + '3',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, certificate[2].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
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
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"], {
          celled: true,
          style: tableStyle,
          color: 'blue',
          key: 'blue',
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
          inverted: true,
          color: "blue",
          style: {
            textalign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, "Certificates")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, " Institution"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, "Year "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, "Degree"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "Validity"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, this.renderCertificates()));
      } else return '';
    } //renders the jobs of an user in table rows

  }, {
    key: "renderJobs",
    value: function renderJobs() {
      var x = this.state.address;
      var y = 'Unknown';
      var r = this.state.jobs.map(function (job) {
        if (job[3] === false && job[4] === false) {
          y = 'Unknown';
        } else if (job[3] === true) {
          y = 'Approved';
        } else if (job[4] === true) {
          y = 'Denied';
        }

        return [react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, {
          positive: job[3],
          negative: !job[3],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
          key: x + 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, job[1].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
          key: x + 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, job[0].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
          key: x + 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, job[2].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
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

      if (this.state.jobs.length !== 0) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"], {
          celled: true,
          style: tableStyle,
          color: 'blue',
          key: 'blue',
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
          inverted: true,
          color: "blue",
          style: {
            textalign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, "Jobs")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, " Company"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, "Period Worked"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, "Position"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, "Validity"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, this.renderJobs()));
      } else return '';
    }
  }, {
    key: "render",
    value: function render() {
      var cardStyle = {
        display: 'block',
        width: '28%',
        margin: '7px auto',
        height: 'auto'
      };
      var formStyle = {
        width: '100%'
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "\n        body {\n         background: url(\"https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80\");\n         background-repeat: no-repeat;\n         background-position: center; \n         background-attachment: fixed;\n        }\n      ")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "ed"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          margin: '6%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        primary: true,
        disabled: !this.state.addressform,
        onClick: this.onEmailClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Search by E-mail"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        primary: true,
        disabled: this.state.addressform,
        onClick: this.onAddressClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Search by Address")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        className: "form-inline",
        style: formStyle,
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, this.state.addressform === true ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
        inline: true,
        style: {
          width: '60%',
          margin: '150px auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        style: {
          fontSize: 'x-large'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Search by Address:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        style: {
          width: '90%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
        placeholder: "Ethereum address of user...",
        "aria-placeholder": {
          color: 'blue'
        },
        style: {
          width: '100%',
          height: '75px',
          fontSize: 'large'
        },
        value: this.state.address,
        onChange: this.handleChange,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        onClick: this.onSubmit,
        color: "blue",
        style: {
          width: '150px',
          height: '75px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        color: "white",
        name: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      })))) : null, this.state.addressform === false ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
        inline: true,
        style: {
          width: '60%',
          margin: '150px auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        style: {
          fontSize: 'x-large'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Search by E-mail:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        style: {
          width: '90%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
        placeholder: "E-mail address of user...",
        "aria-placeholder": {
          color: 'blue'
        },
        style: {
          width: '100%',
          height: '75px',
          fontSize: 'large'
        },
        value: this.state.email,
        onChange: this.handleSecondChange,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        onClick: this.onSecondSubmit,
        color: "blue",
        style: {
          width: '150px',
          height: '75px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        color: "white",
        name: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      })))) : null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
        style: {
          width: '15%',
          margin: '30px auto'
        },
        error: true,
        header: "Notice:",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      })), this.state.info.length === 0 ? null : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"], {
        color: "blue",
        style: cardStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          margin: '2%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, "Name:"), " ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, " ", this.state.info[0].toString())), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          margin: '2%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, "Date of birth:"), " ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.info[1]), "/", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.info[2]), "/", _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.info[3]), " ")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          margin: '2%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, "Location:"), " ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, " ", this.state.info[4].toString())), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          margin: '2%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "E-mail:"), " ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h5", {
        style: {
          margin: '1%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, " ", this.state.info[5].toString())))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          margin: '4%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, this.renderJobsTable()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, this.renderCertificateTable())), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, this.state.loading === true ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_snackbar_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }) : null), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.207f1e8e1f19edeb2a08.hot-update.js.map