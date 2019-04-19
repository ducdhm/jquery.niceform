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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/locale/vi-VN.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/locale/vi-VN.js":
/*!*****************************!*\
  !*** ./src/locale/vi-VN.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var NiceForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! NiceForm */ "NiceForm");
/* harmony import */ var NiceForm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(NiceForm__WEBPACK_IMPORTED_MODULE_0__);

NiceForm__WEBPACK_IMPORTED_MODULE_0___default.a.DEFAULTS.locale = {
  date: 'DD/MM/YYYY',
  time: 'HH:mm',
  datetime: 'DD/MM/YYYY HH:mm',
  successTitle: 'Thành công!',
  successMessage: 'Gửi lên máy chủ thành công',
  errorTitle: 'Lỗi!',
  invalidErrorMessage: 'Xin vui lòng sửa các trường lỗi',
  requiredErrorMessage: 'Trường này là bắt buộc',
  dateErrorMessage: 'Xin vui lòng nhập ngày tháng hợp lệ. Ví dụ: 14/02/2000',
  timeErrorMessage: 'Xin vui lòng nhập thời gian hợp lệ. Ví dụ: 14:02',
  datetimeErrorMessage: 'Xin vui lòng nhập ngày tháng và thời gian hợp lệ. Ví dụ 14/02/2000 14:02',
  emailErrorMessage: 'Xin vui lòng nhập địa chỉ email hợp lệ của bạn. Định dạng email nên là  someone@somewhere.com',
  numberErrorMessage: 'Xin vui lòng chỉ nhập chữ số',
  urlErrorMessage: 'Xin vui lòng nhập địa chỉ website hợp lệ',
  passwordErrorMessage: 'Mật khẩu của bạn tối thiểu phải có 6 ký tự bảo gồm chữ cái (hoa và thường), chữ số và tối thiểu 1 kí tự đặc biệt',
  repasswordErrorMessage: 'Xin vui lòng nhập lại mật khẩu',
  unknownErrorMessage: 'Rất tiếc, có lỗi xảy ra khi kết với máy chủ. Xin vui lòng liên hệ với quản trị để xử lý!'
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNlRm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljZUZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvbG9jYWxlL3ZpLVZOLmpzIiwid2VicGFjazovL05pY2VGb3JtL2V4dGVybmFsIFwiTmljZUZvcm1cIiJdLCJuYW1lcyI6WyJOaWNlRm9ybSIsIkRFRkFVTFRTIiwibG9jYWxlIiwiZGF0ZSIsInRpbWUiLCJkYXRldGltZSIsInN1Y2Nlc3NUaXRsZSIsInN1Y2Nlc3NNZXNzYWdlIiwiZXJyb3JUaXRsZSIsImludmFsaWRFcnJvck1lc3NhZ2UiLCJyZXF1aXJlZEVycm9yTWVzc2FnZSIsImRhdGVFcnJvck1lc3NhZ2UiLCJ0aW1lRXJyb3JNZXNzYWdlIiwiZGF0ZXRpbWVFcnJvck1lc3NhZ2UiLCJlbWFpbEVycm9yTWVzc2FnZSIsIm51bWJlckVycm9yTWVzc2FnZSIsInVybEVycm9yTWVzc2FnZSIsInBhc3N3b3JkRXJyb3JNZXNzYWdlIiwicmVwYXNzd29yZEVycm9yTWVzc2FnZSIsInVua25vd25FcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBRUFBLCtDQUFRLENBQUNDLFFBQVQsQ0FBa0JDLE1BQWxCLEdBQTJCO0FBQ3ZCQyxNQUFJLEVBQUUsWUFEaUI7QUFFdkJDLE1BQUksRUFBRSxPQUZpQjtBQUd2QkMsVUFBUSxFQUFFLGtCQUhhO0FBS3ZCQyxjQUFZLEVBQUUsYUFMUztBQU12QkMsZ0JBQWMsRUFBRSw0QkFOTztBQVF2QkMsWUFBVSxFQUFFLE1BUlc7QUFTdkJDLHFCQUFtQixFQUFFLGlDQVRFO0FBV3ZCQyxzQkFBb0IsRUFBRSx3QkFYQztBQVl2QkMsa0JBQWdCLEVBQUUsd0RBWks7QUFhdkJDLGtCQUFnQixFQUFFLGtEQWJLO0FBY3ZCQyxzQkFBb0IsRUFBRSwwRUFkQztBQWV2QkMsbUJBQWlCLEVBQUUsK0ZBZkk7QUFnQnZCQyxvQkFBa0IsRUFBRSw4QkFoQkc7QUFpQnZCQyxpQkFBZSxFQUFFLDBDQWpCTTtBQWtCdkJDLHNCQUFvQixFQUFFLGtIQWxCQztBQW1CdkJDLHdCQUFzQixFQUFFLGdDQW5CRDtBQW9CdkJDLHFCQUFtQixFQUFFO0FBcEJFLENBQTNCLEM7Ozs7Ozs7Ozs7O0FDRkEsc0QiLCJmaWxlIjoibG9jYWxlL3ZpLVZOLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiTmljZUZvcm1cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJOaWNlRm9ybVwiLCBbXCJOaWNlRm9ybVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJOaWNlRm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIk5pY2VGb3JtXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJOaWNlRm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcIk5pY2VGb3JtXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX05pY2VGb3JtX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sb2NhbGUvdmktVk4uanNcIik7XG4iLCJpbXBvcnQgTmljZUZvcm0gZnJvbSAnTmljZUZvcm0nO1xyXG5cclxuTmljZUZvcm0uREVGQVVMVFMubG9jYWxlID0ge1xyXG4gICAgZGF0ZTogJ0REL01NL1lZWVknLFxyXG4gICAgdGltZTogJ0hIOm1tJyxcclxuICAgIGRhdGV0aW1lOiAnREQvTU0vWVlZWSBISDptbScsXHJcbiAgICBcclxuICAgIHN1Y2Nlc3NUaXRsZTogJ1Row6BuaCBjw7RuZyEnLFxyXG4gICAgc3VjY2Vzc01lc3NhZ2U6ICdH4butaSBsw6puIG3DoXkgY2jhu6cgdGjDoG5oIGPDtG5nJyxcclxuICAgIFxyXG4gICAgZXJyb3JUaXRsZTogJ0zhu5dpIScsXHJcbiAgICBpbnZhbGlkRXJyb3JNZXNzYWdlOiAnWGluIHZ1aSBsw7JuZyBz4butYSBjw6FjIHRyxrDhu51uZyBs4buXaScsXHJcbiAgICBcclxuICAgIHJlcXVpcmVkRXJyb3JNZXNzYWdlOiAnVHLGsOG7nW5nIG7DoHkgbMOgIGLhuq90IGJ14buZYycsXHJcbiAgICBkYXRlRXJyb3JNZXNzYWdlOiAnWGluIHZ1aSBsw7JuZyBuaOG6rXAgbmfDoHkgdGjDoW5nIGjhu6NwIGzhu4cuIFbDrSBk4bulOiAxNC8wMi8yMDAwJyxcclxuICAgIHRpbWVFcnJvck1lc3NhZ2U6ICdYaW4gdnVpIGzDsm5nIG5o4bqtcCB0aOG7nWkgZ2lhbiBo4bujcCBs4buHLiBWw60gZOG7pTogMTQ6MDInLFxyXG4gICAgZGF0ZXRpbWVFcnJvck1lc3NhZ2U6ICdYaW4gdnVpIGzDsm5nIG5o4bqtcCBuZ8OgeSB0aMOhbmcgdsOgIHRo4budaSBnaWFuIGjhu6NwIGzhu4cuIFbDrSBk4bulIDE0LzAyLzIwMDAgMTQ6MDInLFxyXG4gICAgZW1haWxFcnJvck1lc3NhZ2U6ICdYaW4gdnVpIGzDsm5nIG5o4bqtcCDEkeG7i2EgY2jhu4kgZW1haWwgaOG7o3AgbOG7hyBj4bunYSBi4bqhbi4gxJDhu4tuaCBk4bqhbmcgZW1haWwgbsOqbiBsw6AgIHNvbWVvbmVAc29tZXdoZXJlLmNvbScsXHJcbiAgICBudW1iZXJFcnJvck1lc3NhZ2U6ICdYaW4gdnVpIGzDsm5nIGNo4buJIG5o4bqtcCBjaOG7ryBz4buRJyxcclxuICAgIHVybEVycm9yTWVzc2FnZTogJ1hpbiB2dWkgbMOybmcgbmjhuq1wIMSR4buLYSBjaOG7iSB3ZWJzaXRlIGjhu6NwIGzhu4cnLFxyXG4gICAgcGFzc3dvcmRFcnJvck1lc3NhZ2U6ICdN4bqtdCBraOG6qXUgY+G7p2EgYuG6oW4gdOG7kWkgdGhp4buDdSBwaOG6o2kgY8OzIDYga8O9IHThu7EgYuG6o28gZ+G7k20gY2jhu68gY8OhaSAoaG9hIHbDoCB0aMaw4budbmcpLCBjaOG7ryBz4buRIHbDoCB04buRaSB0aGnhu4N1IDEga8OtIHThu7EgxJHhurdjIGJp4buHdCcsXHJcbiAgICByZXBhc3N3b3JkRXJyb3JNZXNzYWdlOiAnWGluIHZ1aSBsw7JuZyBuaOG6rXAgbOG6oWkgbeG6rXQga2jhuql1JyxcclxuICAgIHVua25vd25FcnJvck1lc3NhZ2U6ICdS4bqldCB0aeG6v2MsIGPDsyBs4buXaSB44bqjeSByYSBraGkga+G6v3QgduG7m2kgbcOheSBjaOG7py4gWGluIHZ1aSBsw7JuZyBsacOqbiBo4buHIHbhu5tpIHF14bqjbiB0cuG7iyDEkeG7gyB44butIGzDvSEnLFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfTmljZUZvcm1fXzsiXSwic291cmNlUm9vdCI6IiJ9