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
  numberErrorMessage: 'Please enter only numbers',
  // Error message for ".url" field
  urlErrorMessage: 'Please enter valid website address',
  // Error message for ".password" field
  passwordErrorMessage: 'Your password must be at least 6 characters and it must contain numbers, letters (lowercase and uppercase) and at least 1 special character',
  // Error message for ".repassword" field
  repasswordErrorMessage: 'Please confirm your password',
  // Error message for ".simple" field
  simpleErrorMessage: 'Please enter only letters, numbers, underscores, dashes and spaces',
  // Error message for ".really-simple" field
  reallySimpleErrorMessage: 'Please enter only letters and numbers, no punctuation, dots, etc',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNlRm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljZUZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvbG9jYWxlLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2xvY2FsZS9lbi1WTi5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS9leHRlcm5hbCBcIk5pY2VGb3JtXCIiXSwibmFtZXMiOlsiZGF0ZSIsInRpbWUiLCJkYXRldGltZSIsInN1Y2Nlc3NUaXRsZSIsInN1Y2Nlc3NNZXNzYWdlIiwiZXJyb3JUaXRsZSIsImludmFsaWRFcnJvck1lc3NhZ2UiLCJyZXF1aXJlZEVycm9yTWVzc2FnZSIsImRhdGVFcnJvck1lc3NhZ2UiLCJ0aW1lRXJyb3JNZXNzYWdlIiwiZGF0ZXRpbWVFcnJvck1lc3NhZ2UiLCJlbWFpbEVycm9yTWVzc2FnZSIsIm51bWJlckVycm9yTWVzc2FnZSIsInVybEVycm9yTWVzc2FnZSIsInBhc3N3b3JkRXJyb3JNZXNzYWdlIiwicmVwYXNzd29yZEVycm9yTWVzc2FnZSIsInNpbXBsZUVycm9yTWVzc2FnZSIsInJlYWxseVNpbXBsZUVycm9yTWVzc2FnZSIsInVua25vd25FcnJvck1lc3NhZ2UiLCJOaWNlRm9ybSIsIkRFRkFVTFRTIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZTtBQUNYO0FBQ0FBLE1BQUksRUFBRSxZQUZLO0FBSVg7QUFDQUMsTUFBSSxFQUFFLE9BTEs7QUFPWDtBQUNBQyxVQUFRLEVBQUUsa0JBUkM7QUFVWDtBQUNBQyxjQUFZLEVBQUUsVUFYSDtBQWFYO0FBQ0FDLGdCQUFjLEVBQUUsMENBZEw7QUFnQlg7QUFDQUMsWUFBVSxFQUFFLFFBakJEO0FBbUJYO0FBQ0FDLHFCQUFtQixFQUFFLHFDQXBCVjtBQXNCWDtBQUNBQyxzQkFBb0IsRUFBRSx3QkF2Qlg7QUF5Qlg7QUFDQUMsa0JBQWdCLEVBQUUsb0VBMUJQO0FBNEJYO0FBQ0FDLGtCQUFnQixFQUFFLCtEQTdCUDtBQStCWDtBQUNBQyxzQkFBb0IsRUFBRSwrRUFoQ1g7QUFrQ1g7QUFDQUMsbUJBQWlCLEVBQUUsMEZBbkNSO0FBcUNYO0FBQ0FDLG9CQUFrQixFQUFFLDJCQXRDVDtBQXdDWDtBQUNBQyxpQkFBZSxFQUFFLG9DQXpDTjtBQTJDWDtBQUNBQyxzQkFBb0IsRUFBRSw2SUE1Q1g7QUE4Q1g7QUFDQUMsd0JBQXNCLEVBQUUsOEJBL0NiO0FBaURYO0FBQ0FDLG9CQUFrQixFQUFFLG9FQWxEVDtBQW9EWDtBQUNBQywwQkFBd0IsRUFBRSxrRUFyRGY7QUF1RFg7QUFDQUMscUJBQW1CLEVBQUU7QUF4RFYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUMsK0NBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsTUFBbEIsR0FBMkJDLHdEQUEzQixDOzs7Ozs7Ozs7OztBQ0hBLHNEIiwiZmlsZSI6ImxvY2FsZS9lbi1WTi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIk5pY2VGb3JtXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiTmljZUZvcm1cIiwgW1wiTmljZUZvcm1cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTmljZUZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJOaWNlRm9ybVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiTmljZUZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJOaWNlRm9ybVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9OaWNlRm9ybV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbG9jYWxlL2VuLVZOLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gVGhlIGZvcm1hdCBvZiBcIi5kYXRlXCIgZmllbGRcclxuICAgIGRhdGU6ICdERC9NTS9ZWVlZJyxcclxuICAgIFxyXG4gICAgLy8gVGhlIGZvcm1hdCBvZiBcIi50aW1lXCIgZmllbGRcclxuICAgIHRpbWU6ICdISDptbScsXHJcbiAgICBcclxuICAgIC8vIFRoZSBmb3JtYXQgb2YgXCIuZGF0ZXRpbWVcIiBmaWVsZFxyXG4gICAgZGF0ZXRpbWU6ICdERC9NTS9ZWVlZIEhIOm1tJyxcclxuICAgIFxyXG4gICAgLy8gVGl0bGUgb2Ygc3VjY2VzcyBtZXNzYWdlIHdoZW4gc3VibWl0dGluZyBmb3JtIHN1Y2Nlc3NmdWxseVxyXG4gICAgc3VjY2Vzc1RpdGxlOiAnU3VjY2VzcyEnLFxyXG4gICAgXHJcbiAgICAvLyBDb250ZW50IG9mIHN1Y2Nlc3MgbWVzc2FnZSB3aGVuIHN1Ym1pdHRpbmcgZm9ybSBzdWNjZXNzZnVsbHlcclxuICAgIHN1Y2Nlc3NNZXNzYWdlOiAnVGhlIGZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCcsXHJcbiAgICBcclxuICAgIC8vIFRpdGxlIG9mIGVycm9yIG1lc3NhZ2Ugd2hlbiBmb3JtIGlzIGludmFsaWQgb3IgZXJyb3IgaW4gc3VibWl0dGluZyBmb3JtXHJcbiAgICBlcnJvclRpdGxlOiAnRXJyb3IhJyxcclxuICAgIFxyXG4gICAgLy8gQ29udGVudCBvZiBlcnJvciBtZXNzYWdlIHdoZW4gZm9ybSBpcyBpbnZhbGlkXHJcbiAgICBpbnZhbGlkRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNvcnJlY3QgeW91ciBpbnZhbGlkIGZpZWxkcyEnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5yZXF1aXJlZFwiIGZpZWxkXHJcbiAgICByZXF1aXJlZEVycm9yTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5kYXRlXCIgZmllbGRcclxuICAgIGRhdGVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIGRhdGUsIGl0IHNob3VsZCBiZSBsaWtlIDE0LzAyLzIwMDAnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi50aW1lXCIgZmllbGRcclxuICAgIHRpbWVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIHRpbWUsIGl0IHNob3VsZCBiZSBsaWtlIDE0OjAyJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIuZGF0ZXRpbWVcIiBmaWVsZFxyXG4gICAgZGF0ZXRpbWVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIGRhdGUgdGltZSwgaXQgc2hvdWxkIGJlIGxpa2UgMTQvMDIvMjAwMCAxNDowMicsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLmVtYWlsXCIgZmllbGRcclxuICAgIGVtYWlsRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHRoZSBmb3JtYXQgb2YgeW91ciBlbWFpbCBhZGRyZXNzLCBpdCBzaG91bGQgcmVhZCBsaWtlIHNvbWVvbmVAc29tZXdoZXJlLmNvbScsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLm51bWJlclwiIGZpZWxkXHJcbiAgICBudW1iZXJFcnJvck1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgb25seSBudW1iZXJzJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIudXJsXCIgZmllbGRcclxuICAgIHVybEVycm9yTWVzc2FnZTogJ1BsZWFzZSBlbnRlciB2YWxpZCB3ZWJzaXRlIGFkZHJlc3MnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5wYXNzd29yZFwiIGZpZWxkXHJcbiAgICBwYXNzd29yZEVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgYW5kIGl0IG11c3QgY29udGFpbiBudW1iZXJzLCBsZXR0ZXJzIChsb3dlcmNhc2UgYW5kIHVwcGVyY2FzZSkgYW5kIGF0IGxlYXN0IDEgc3BlY2lhbCBjaGFyYWN0ZXInLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5yZXBhc3N3b3JkXCIgZmllbGRcclxuICAgIHJlcGFzc3dvcmRFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIuc2ltcGxlXCIgZmllbGRcclxuICAgIHNpbXBsZUVycm9yTWVzc2FnZTogJ1BsZWFzZSBlbnRlciBvbmx5IGxldHRlcnMsIG51bWJlcnMsIHVuZGVyc2NvcmVzLCBkYXNoZXMgYW5kIHNwYWNlcycsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLnJlYWxseS1zaW1wbGVcIiBmaWVsZFxyXG4gICAgcmVhbGx5U2ltcGxlRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGVudGVyIG9ubHkgbGV0dGVycyBhbmQgbnVtYmVycywgbm8gcHVuY3R1YXRpb24sIGRvdHMsIGV0YycsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2Ugd2hlbiB1bmtub3duIGlzc3VlIG9jY3Vyc1xyXG4gICAgdW5rbm93bkVycm9yTWVzc2FnZTogJ1NvcnJ5LCBhbiBlcnJvciBvY2N1cnJlZCBhdHRlbXB0aW5nIHRvIHN1Ym1pdCB0aGUgZm9ybS4gUGxlYXNlIGNvbnRhY3QgdGhlIHNpdGUgYWRtaW5pc3RyYXRvciB0byByZXNvbHZlIScsXHJcbn07XHJcbiIsImltcG9ydCBOaWNlRm9ybSBmcm9tICdOaWNlRm9ybSc7XHJcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4uL2RlZmF1bHRzL2xvY2FsZSc7XHJcblxyXG5OaWNlRm9ybS5ERUZBVUxUUy5sb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfTmljZUZvcm1fXzsiXSwic291cmNlUm9vdCI6IiJ9