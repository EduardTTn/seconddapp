webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/verifier.js":
/*!********************************!*\
  !*** ./components/verifier.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3.js */ "./components/web3.js");
 //constant that stores the abi of contract

var abi = [{
  "constant": false,
  "inputs": [{
    "name": "_year",
    "type": "uint256"
  }, {
    "name": "_institutionname",
    "type": "string"
  }, {
    "name": "_name",
    "type": "string"
  }, {
    "name": "_ID",
    "type": "string"
  }],
  "name": "addCertificate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }, {
    "name": "_name",
    "type": "string"
  }],
  "name": "addCompany",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }, {
    "name": "_name",
    "type": "string"
  }],
  "name": "addInstitution",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_monthhired",
    "type": "string"
  }, {
    "name": "_monthleft",
    "type": "string"
  }, {
    "name": "_yearhired",
    "type": "string"
  }, {
    "name": "_yearleft",
    "type": "string"
  }, {
    "name": "_position",
    "type": "string"
  }, {
    "name": "_companyname",
    "type": "string"
  }, {
    "name": "_SSN",
    "type": "uint256"
  }],
  "name": "addJob",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_index",
    "type": "uint256"
  }],
  "name": "approveRequestCertificate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_index",
    "type": "uint256"
  }],
  "name": "approveRequestJob",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_index",
    "type": "uint256"
  }],
  "name": "denyRequestCertificate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_index",
    "type": "uint256"
  }],
  "name": "denyRequestJob",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_name",
    "type": "string"
  }, {
    "name": "_day",
    "type": "int256"
  }, {
    "name": "_month",
    "type": "int256"
  }, {
    "name": "_year",
    "type": "int256"
  }, {
    "name": "_location",
    "type": "string"
  }, {
    "name": "_email",
    "type": "string"
  }],
  "name": "registerUser",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "constructor"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "checkIfOwner",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_email",
    "type": "string"
  }],
  "name": "getAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getBasicInfo",
  "outputs": [{
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "int256"
  }, {
    "name": "",
    "type": "int256"
  }, {
    "name": "",
    "type": "int256"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }, {
    "name": "_index",
    "type": "uint256"
  }],
  "name": "getCertificate",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "bool"
  }, {
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getCertificateCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_index",
    "type": "uint256"
  }],
  "name": "getCertRequest",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "address"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getCertRequestCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }, {
    "name": "_index",
    "type": "uint256"
  }],
  "name": "getJob",
  "outputs": [{
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "bool"
  }, {
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getJobCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }, {
    "name": "_index",
    "type": "uint256"
  }],
  "name": "getJobRequest",
  "outputs": [{
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "address"
  }, {
    "name": "",
    "type": "uint256"
  }, {
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "getJobRequestCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "isCompany",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "isInstitution",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "isRegistered",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}]; //constant that stores the address of the contract

var address = '0x073a2397f6255b27a6b4c2baea05613fcb82ffc3';
var instance = new _web3_js__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, address);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

})
//# sourceMappingURL=index.js.f6ad68b9d9e52d1e27b5.hot-update.js.map