(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("NiceForm"));
	else if(typeof define === 'function' && define.amd)
		define("NiceForm", ["NiceForm"], factory);
	else if(typeof exports === 'object')
		exports["NiceForm"] = factory(require("NiceForm"));
	else
		root["NiceForm"] = factory(root["NiceForm"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_NiceForm__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/locale/en-VN.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/defaults/locale.js":
/*!********************************!*\
  !*** ./src/defaults/locale.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // The format of ".date" field
  date: 'DD/MM/YYYY',
  // The format of ".time" field
  time: 'HH:mm',
  // The format of ".datetime" field
  datetime: 'DD/MM/YYYY HH:mm',
  // Title of success message when submitting form successfully
  successTitle: 'Success!',
  // Content of success message when submitting form successfully
  successMessage: 'The form has been successfully submitted',
  // Title of error message when form is invalid or error in submitting form
  errorTitle: 'Error!',
  // Content of error message when form is invalid
  invalidErrorMessage: 'Please correct your invalid fields!',
  // Error message for ".required" field
  requiredErrorMessage: 'This field is required',
  // Error message for ".date" field
  dateErrorMessage: 'Please check the format of your date, it should be like 14/02/2000',
  // Error message for ".time" field
  timeErrorMessage: 'Please check the format of your time, it should be like 14:02',
  // Error message for ".datetime" field
  datetimeErrorMessage: 'Please check the format of your date time, it should be like 14/02/2000 14:02',
  // Error message for ".email" field
  emailErrorMessage: 'Please check the format of your email address, it should read like someone@somewhere.com',
  // Error message for ".number" field
  numberErrorMessage: 'Please enter digits only',
  // Error message for ".url" field
  urlErrorMessage: 'Please enter valid website address',
  // Error message for ".password" field
  passwordErrorMessage: 'Your password must be at least 6 characters and it must contain numbers, letters (lowercase and uppercase) and at least 1 special character',
  // Error message for ".repassword" field
  repasswordErrorMessage: 'Please confirm your password',
  // Error message when unknown issue occurs
  unknownErrorMessage: 'Sorry, an error occurred attempting to submit the form. Please contact the site administrator to resolve!'
});

/***/ }),

/***/ "./src/locale/en-VN.js":
/*!*****************************!*\
  !*** ./src/locale/en-VN.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var NiceForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! NiceForm */ "NiceForm");
/* harmony import */ var NiceForm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(NiceForm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults/locale */ "./src/defaults/locale.js");


NiceForm__WEBPACK_IMPORTED_MODULE_0___default.a.DEFAULTS.locale = _defaults_locale__WEBPACK_IMPORTED_MODULE_1__["default"];

/***/ }),

/***/ "NiceForm":
/*!***************************!*\
  !*** external "NiceForm" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_NiceForm__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNlRm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljZUZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvbG9jYWxlLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2xvY2FsZS9lbi1WTi5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS9leHRlcm5hbCBcIk5pY2VGb3JtXCIiXSwibmFtZXMiOlsiZGF0ZSIsInRpbWUiLCJkYXRldGltZSIsInN1Y2Nlc3NUaXRsZSIsInN1Y2Nlc3NNZXNzYWdlIiwiZXJyb3JUaXRsZSIsImludmFsaWRFcnJvck1lc3NhZ2UiLCJyZXF1aXJlZEVycm9yTWVzc2FnZSIsImRhdGVFcnJvck1lc3NhZ2UiLCJ0aW1lRXJyb3JNZXNzYWdlIiwiZGF0ZXRpbWVFcnJvck1lc3NhZ2UiLCJlbWFpbEVycm9yTWVzc2FnZSIsIm51bWJlckVycm9yTWVzc2FnZSIsInVybEVycm9yTWVzc2FnZSIsInBhc3N3b3JkRXJyb3JNZXNzYWdlIiwicmVwYXNzd29yZEVycm9yTWVzc2FnZSIsInVua25vd25FcnJvck1lc3NhZ2UiLCJOaWNlRm9ybSIsIkRFRkFVTFRTIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZTtBQUNYO0FBQ0FBLE1BQUksRUFBRSxZQUZLO0FBSVg7QUFDQUMsTUFBSSxFQUFFLE9BTEs7QUFPWDtBQUNBQyxVQUFRLEVBQUUsa0JBUkM7QUFVWDtBQUNBQyxjQUFZLEVBQUUsVUFYSDtBQWFYO0FBQ0FDLGdCQUFjLEVBQUUsMENBZEw7QUFnQlg7QUFDQUMsWUFBVSxFQUFFLFFBakJEO0FBbUJYO0FBQ0FDLHFCQUFtQixFQUFFLHFDQXBCVjtBQXNCWDtBQUNBQyxzQkFBb0IsRUFBRSx3QkF2Qlg7QUF5Qlg7QUFDQUMsa0JBQWdCLEVBQUUsb0VBMUJQO0FBNEJYO0FBQ0FDLGtCQUFnQixFQUFFLCtEQTdCUDtBQStCWDtBQUNBQyxzQkFBb0IsRUFBRSwrRUFoQ1g7QUFrQ1g7QUFDQUMsbUJBQWlCLEVBQUUsMEZBbkNSO0FBcUNYO0FBQ0FDLG9CQUFrQixFQUFFLDBCQXRDVDtBQXdDWDtBQUNBQyxpQkFBZSxFQUFFLG9DQXpDTjtBQTJDWDtBQUNBQyxzQkFBb0IsRUFBRSw2SUE1Q1g7QUE4Q1g7QUFDQUMsd0JBQXNCLEVBQUUsOEJBL0NiO0FBaURYO0FBQ0FDLHFCQUFtQixFQUFFO0FBbERWLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFDLCtDQUFRLENBQUNDLFFBQVQsQ0FBa0JDLE1BQWxCLEdBQTJCQyx3REFBM0IsQzs7Ozs7Ozs7Ozs7QUNIQSxzRCIsImZpbGUiOiJsb2NhbGUvZW4tVk4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJOaWNlRm9ybVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk5pY2VGb3JtXCIsIFtcIk5pY2VGb3JtXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk5pY2VGb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiTmljZUZvcm1cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk5pY2VGb3JtXCJdID0gZmFjdG9yeShyb290W1wiTmljZUZvcm1cIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfTmljZUZvcm1fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xvY2FsZS9lbi1WTi5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vIFRoZSBmb3JtYXQgb2YgXCIuZGF0ZVwiIGZpZWxkXHJcbiAgICBkYXRlOiAnREQvTU0vWVlZWScsXHJcbiAgICBcclxuICAgIC8vIFRoZSBmb3JtYXQgb2YgXCIudGltZVwiIGZpZWxkXHJcbiAgICB0aW1lOiAnSEg6bW0nLFxyXG4gICAgXHJcbiAgICAvLyBUaGUgZm9ybWF0IG9mIFwiLmRhdGV0aW1lXCIgZmllbGRcclxuICAgIGRhdGV0aW1lOiAnREQvTU0vWVlZWSBISDptbScsXHJcbiAgICBcclxuICAgIC8vIFRpdGxlIG9mIHN1Y2Nlc3MgbWVzc2FnZSB3aGVuIHN1Ym1pdHRpbmcgZm9ybSBzdWNjZXNzZnVsbHlcclxuICAgIHN1Y2Nlc3NUaXRsZTogJ1N1Y2Nlc3MhJyxcclxuICAgIFxyXG4gICAgLy8gQ29udGVudCBvZiBzdWNjZXNzIG1lc3NhZ2Ugd2hlbiBzdWJtaXR0aW5nIGZvcm0gc3VjY2Vzc2Z1bGx5XHJcbiAgICBzdWNjZXNzTWVzc2FnZTogJ1RoZSBmb3JtIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQnLFxyXG4gICAgXHJcbiAgICAvLyBUaXRsZSBvZiBlcnJvciBtZXNzYWdlIHdoZW4gZm9ybSBpcyBpbnZhbGlkIG9yIGVycm9yIGluIHN1Ym1pdHRpbmcgZm9ybVxyXG4gICAgZXJyb3JUaXRsZTogJ0Vycm9yIScsXHJcbiAgICBcclxuICAgIC8vIENvbnRlbnQgb2YgZXJyb3IgbWVzc2FnZSB3aGVuIGZvcm0gaXMgaW52YWxpZFxyXG4gICAgaW52YWxpZEVycm9yTWVzc2FnZTogJ1BsZWFzZSBjb3JyZWN0IHlvdXIgaW52YWxpZCBmaWVsZHMhJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIucmVxdWlyZWRcIiBmaWVsZFxyXG4gICAgcmVxdWlyZWRFcnJvck1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIuZGF0ZVwiIGZpZWxkXHJcbiAgICBkYXRlRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHRoZSBmb3JtYXQgb2YgeW91ciBkYXRlLCBpdCBzaG91bGQgYmUgbGlrZSAxNC8wMi8yMDAwJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIudGltZVwiIGZpZWxkXHJcbiAgICB0aW1lRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHRoZSBmb3JtYXQgb2YgeW91ciB0aW1lLCBpdCBzaG91bGQgYmUgbGlrZSAxNDowMicsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLmRhdGV0aW1lXCIgZmllbGRcclxuICAgIGRhdGV0aW1lRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHRoZSBmb3JtYXQgb2YgeW91ciBkYXRlIHRpbWUsIGl0IHNob3VsZCBiZSBsaWtlIDE0LzAyLzIwMDAgMTQ6MDInLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5lbWFpbFwiIGZpZWxkXHJcbiAgICBlbWFpbEVycm9yTWVzc2FnZTogJ1BsZWFzZSBjaGVjayB0aGUgZm9ybWF0IG9mIHlvdXIgZW1haWwgYWRkcmVzcywgaXQgc2hvdWxkIHJlYWQgbGlrZSBzb21lb25lQHNvbWV3aGVyZS5jb20nLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5udW1iZXJcIiBmaWVsZFxyXG4gICAgbnVtYmVyRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGVudGVyIGRpZ2l0cyBvbmx5JyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIudXJsXCIgZmllbGRcclxuICAgIHVybEVycm9yTWVzc2FnZTogJ1BsZWFzZSBlbnRlciB2YWxpZCB3ZWJzaXRlIGFkZHJlc3MnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5wYXNzd29yZFwiIGZpZWxkXHJcbiAgICBwYXNzd29yZEVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgYW5kIGl0IG11c3QgY29udGFpbiBudW1iZXJzLCBsZXR0ZXJzIChsb3dlcmNhc2UgYW5kIHVwcGVyY2FzZSkgYW5kIGF0IGxlYXN0IDEgc3BlY2lhbCBjaGFyYWN0ZXInLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5yZXBhc3N3b3JkXCIgZmllbGRcclxuICAgIHJlcGFzc3dvcmRFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIHVua25vd24gaXNzdWUgb2NjdXJzXHJcbiAgICB1bmtub3duRXJyb3JNZXNzYWdlOiAnU29ycnksIGFuIGVycm9yIG9jY3VycmVkIGF0dGVtcHRpbmcgdG8gc3VibWl0IHRoZSBmb3JtLiBQbGVhc2UgY29udGFjdCB0aGUgc2l0ZSBhZG1pbmlzdHJhdG9yIHRvIHJlc29sdmUhJyxcclxufTtcclxuIiwiaW1wb3J0IE5pY2VGb3JtIGZyb20gJ05pY2VGb3JtJztcclxuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSAnLi4vZGVmYXVsdHMvbG9jYWxlJztcclxuXHJcbk5pY2VGb3JtLkRFRkFVTFRTLmxvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9OaWNlRm9ybV9fOyJdLCJzb3VyY2VSb290IjoiIn0=