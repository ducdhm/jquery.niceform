(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("NiceForm", ["jquery"], factory);
	else if(typeof exports === 'object')
		exports["NiceForm"] = factory(require("jquery"));
	else
		root["NiceForm"] = factory(root["$"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jquery.niceform.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/defaults/_showErrorField.js":
/*!*****************************************!*\
  !*** ./src/defaults/_showErrorField.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (form, field, message) {
  var formGroup = field.closest('.form-group');
  var inputGroup = field.closest('.input-group');
  var feedback = formGroup.find('.form-control-feedback');
  field.addClass('is-invalid');
  formGroup.addClass('has-error');
  var errorMessageEl = formGroup.find('.nf-error-message');

  if (errorMessageEl.length === 0) {
    errorMessageEl = $("<div class=\"nf-error-message text-danger small\" style=\"display: none;\"></div>");

    if (inputGroup.length > 0) {
      inputGroup.after(errorMessageEl);
    } else if (feedback.length > 0) {
      feedback.after(errorMessageEl);
    } else {
      field.after(errorMessageEl);
    }
  }

  errorMessageEl.html(message);
  form.niceform('showElement', errorMessageEl);
});

/***/ }),

/***/ "./src/defaults/hideError.js":
/*!***********************************!*\
  !*** ./src/defaults/hideError.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (form, options) {
  form.find('.has-error').removeClass('has-error');
  form.find('.is-invalid').removeClass('is-invalid').attr('data-error-message', '');
  form.niceform('hideElement', form.find('.nf-error-message'));
  form.niceform('hideMessage');
});

/***/ }),

/***/ "./src/defaults/index.js":
/*!*******************************!*\
  !*** ./src/defaults/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showError */ "./src/defaults/showError.js");
/* harmony import */ var _hideError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideError */ "./src/defaults/hideError.js");
/* harmony import */ var _processAjaxResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processAjaxResponse */ "./src/defaults/processAjaxResponse.js");
/* harmony import */ var _onAjaxSuccess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onAjaxSuccess */ "./src/defaults/onAjaxSuccess.js");
/* harmony import */ var _onAjaxError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onAjaxError */ "./src/defaults/onAjaxError.js");
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password */ "./src/defaults/password.js");
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./regex */ "./src/defaults/regex.js");







window.__NICEFORM_DEBUG__ = true;
/* harmony default export */ __webpack_exports__["default"] = ({
  postFormEnabled: true,
  postUrl: null,
  ajax: {
    type: 'POST',
    dataType: 'JSON'
  },
  password: _password__WEBPACK_IMPORTED_MODULE_5__["default"],
  regex: _regex__WEBPACK_IMPORTED_MODULE_6__["default"],
  animationDuration: 200,
  locale: 'en',
  validate: null,
  showError: _showError__WEBPACK_IMPORTED_MODULE_0__["default"],
  hideError: _hideError__WEBPACK_IMPORTED_MODULE_1__["default"],
  processAjaxResponse: _processAjaxResponse__WEBPACK_IMPORTED_MODULE_2__["default"],
  onValid: null,
  onInvalid: null,
  onBeforeSerializeForm: null,
  onBeforePostForm: null,
  onAjaxSuccess: _onAjaxSuccess__WEBPACK_IMPORTED_MODULE_3__["default"],
  onAjaxError: _onAjaxError__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/defaults/onAjaxError.js":
/*!*************************************!*\
  !*** ./src/defaults/onAjaxError.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showErrorField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_showErrorField */ "./src/defaults/_showErrorField.js");

/* harmony default export */ __webpack_exports__["default"] = (function (jqXhr, form, options) {
  if (jqXhr.responseJSON) {
    form.niceform('showErrorMessage', jqXhr.responseJSON.message || options.locale.unknownErrorMessage);
    jqXhr.responseJSON.errorFields && jqXhr.responseJSON.errorFields.forEach(function (error) {
      Object(_showErrorField__WEBPACK_IMPORTED_MODULE_0__["default"])(form, form.find("[name=\"".concat(error.name, "\"]")), error.message);
    });
  } else {
    form.niceform('showErrorMessage', options.locale.unknownErrorMessage);
  }
});

/***/ }),

/***/ "./src/defaults/onAjaxSuccess.js":
/*!***************************************!*\
  !*** ./src/defaults/onAjaxSuccess.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var timer;
/* harmony default export */ __webpack_exports__["default"] = (function (resp, form, options) {
  form.niceform('showSuccessMessage', resp.message || options.locale.successMessage);
  clearTimeout(timer);
  timer = setTimeout(function () {
    return form.niceform('hideMessage');
  }, 5000);
});

/***/ }),

/***/ "./src/defaults/password.js":
/*!**********************************!*\
  !*** ./src/defaults/password.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Minimum length for password field
  min: 6,
  // Maximum length for password field
  max: 32,
  // Number of required special character for password field
  specialLength: 1,
  // Number of required uppercase letter for password field
  uppercaseLength: 1,
  // Number of required number for password field
  numberLength: 1
});

/***/ }),

/***/ "./src/defaults/processAjaxResponse.js":
/*!*********************************************!*\
  !*** ./src/defaults/processAjaxResponse.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (resp, form, options) {
  return resp && resp.status;
});

/***/ }),

/***/ "./src/defaults/regex.js":
/*!*******************************!*\
  !*** ./src/defaults/regex.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Regular expression for ".email" field
  email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  // Regular expression for ".url" field
  url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  // Regular expression for ".simple" field
  simple: /^[a-zA-Z0-9]+(?:[-_\s][a-zA-Z0-9]+)*$/,
  // Regular expression for ".really-simple" field
  reallySimple: /^[a-zA-Z0-9]+$/
});

/***/ }),

/***/ "./src/defaults/showError.js":
/*!***********************************!*\
  !*** ./src/defaults/showError.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showErrorField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_showErrorField */ "./src/defaults/_showErrorField.js");

/* harmony default export */ __webpack_exports__["default"] = (function (form, errorFields, options) {
  form.niceform('showErrorMessage', options.locale.invalidErrorMessage);
  errorFields.forEach(function (field) {
    Object(_showErrorField__WEBPACK_IMPORTED_MODULE_0__["default"])(form, field, field.attr('data-error-message'));
  });
});

/***/ }),

/***/ "./src/form/clearValue.js":
/*!********************************!*\
  !*** ./src/form/clearValue.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*** Clear value of textbox, textarea. Uncheck all radio button and checkbox. And set selected* index of select is -1. NOTE: Not effect with element data-ignore=`clear`* @param {jQuery} form jQuery object of form* @param {String} controlSelector Selector of controls will be clear*/
/* harmony default export */ __webpack_exports__["default"] = (function (form) {
  var controlSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'input, textarea, select';
  form.find(controlSelector).not('[data-ignore="clear"]').each(function () {
    var control = $(this);
    var isSelect = control.is('select');
    var isCheckbox = control.is(':checkbox');
    var isRadio = control.is(':radio');

    if (isSelect) {
      this.selectedIndex = -1;
    } else if (isCheckbox || isRadio) {
      control.prop('checked', false);
    } else {
      control.val('');
    }
  });
});

/***/ }),

/***/ "./src/form/disableForm.js":
/*!*********************************!*\
  !*** ./src/form/disableForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (form) {
  form.find('select, input, textarea').each(function () {
    if (this.readOnly) {
      this.setAttribute('data-origin-readonly', true);
    }

    this.readOnly = true;
  });
  form.find('button').each(function () {
    if (this.disabled) {
      this.setAttribute('data-origin-disabled', true);
    }

    this.disabled = true;
  });
});

/***/ }),

/***/ "./src/form/enableForm.js":
/*!********************************!*\
  !*** ./src/form/enableForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (form) {
  form.find('select, input, textarea').each(function () {
    if (!this.getAttribute('data-origin-readonly')) {
      this.readOnly = false;
    }
  });
  form.find('button').each(function () {
    if (!this.getAttribute('data-origin-disabled')) {
      this.disabled = false;
    }
  });
});

/***/ }),

/***/ "./src/form/hideMessage.js":
/*!*********************************!*\
  !*** ./src/form/hideMessage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_hideElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hideElement */ "./src/utils/hideElement.js");

/* harmony default export */ __webpack_exports__["default"] = (function (form, animationDuration) {
  var formMessage = form.find('.nf-form-message');

  if (formMessage.length === 0) {
    return;
  }

  Object(_utils_hideElement__WEBPACK_IMPORTED_MODULE_0__["default"])(formMessage, animationDuration);
});

/***/ }),

/***/ "./src/form/postForm.js":
/*!******************************!*\
  !*** ./src/form/postForm.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _disableForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disableForm */ "./src/form/disableForm.js");
/* harmony import */ var _enableForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enableForm */ "./src/form/enableForm.js");
var _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (function (form, options) {
  var isFormData = form.attr('enctype') === 'multipart/form-data';
  var postUrl = options.postUrl || form.attr('action') || window.location.pathname;

  if (typeof options.onBeforeSerializeForm === 'function') {
    options.onBeforeSerializeForm.call(_this, form, options);
  }

  var data = isFormData ? form.serializeWithFiles() : form.serialize();

  if (typeof options.onBeforePostForm === 'function') {
    data = options.onBeforePostForm.call(_this, form, options, data) || data;
  }

  try {
    Object(_disableForm__WEBPACK_IMPORTED_MODULE_0__["default"])(form);

    var ajaxOptions = _objectSpread({}, options.ajax, {
      url: postUrl,
      data: data,
      success: function success(resp, textStatus, jqXhr) {
        Object(_enableForm__WEBPACK_IMPORTED_MODULE_1__["default"])(form);
        var isSuccess = false;

        if (typeof options.processAjaxResponse === 'function') {
          isSuccess = options.processAjaxResponse(resp, form, options);
        }

        if (isSuccess) {
          if (typeof options.onAjaxSuccess === 'function') {
            options.onAjaxSuccess.call(this, resp, form, options);
          }
        } else {
          if (typeof options.onAjaxError === 'function') {
            options.onAjaxError.call(this, jqXhr, form, options);
          }
        }
      },
      error: function error(jqXhr) {
        Object(_enableForm__WEBPACK_IMPORTED_MODULE_1__["default"])(form);

        if (typeof options.onAjaxError === 'function') {
          options.onAjaxError.call(this, jqXhr, form, options);
        }
      }
    });

    if (isFormData) {
      ajaxOptions.processData = false;
      ajaxOptions.contentType = false;
    }

    ajaxOptions.beforeSend = function (xhr, options) {
      // et toc !
      options.data = data;
      /*** You can use https://github.com/francois2metz/html5-formdata for a fake FormData object* Only work with Firefox 3.6*/

      if (data.fake) {
        xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + data.boundary); // with fake FormData object, we must use sendAsBinary

        xhr.send = function (data) {
          xhr.sendAsBinary(data.toString());
        };
      }
    };

    $.ajax(ajaxOptions);
  } catch (e) {
    if (typeof options.onAjaxError === 'function') {
      options.onAjaxError.call(_this, null, form, options);
    } else {
      alert(options.unknownErrorMessage);
    }
  }
});

/***/ }),

/***/ "./src/form/showMessage.js":
/*!*********************************!*\
  !*** ./src/form/showMessage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_showElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/showElement */ "./src/utils/showElement.js");


/* harmony default export */ __webpack_exports__["default"] = (function (form, type, title, message, animationDuration) {
  var formMessage = form.find('.nf-form-message');

  if (formMessage.length === 0) {
    formMessage = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<div class=\"nf-form-message alert\" style=\"display: none;\"></div>");
    form.prepend(formMessage);
  }

  formMessage.removeClass('alert-danger alert-info alert-success alert-warning');
  var formContent = "\n<a class=\"close\" data-dismiss=\"message\">&times;</a>\n<b>".concat(title, "</b><br />\n").concat(message, "\n");
  formMessage.addClass(type === 'error' ? 'alert-danger' : "alert-".concat(type));
  formMessage.html(formContent);
  Object(_utils_showElement__WEBPACK_IMPORTED_MODULE_1__["default"])(formMessage, animationDuration);
});

/***/ }),

/***/ "./src/form/validateForm.js":
/*!**********************************!*\
  !*** ./src/form/validateForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rules_checkRequiredFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rules/checkRequiredFields */ "./src/rules/checkRequiredFields.js");
/* harmony import */ var _rules_checkDateTimeFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/checkDateTimeFields */ "./src/rules/checkDateTimeFields.js");
/* harmony import */ var _rules_checkDateFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/checkDateFields */ "./src/rules/checkDateFields.js");
/* harmony import */ var _rules_checkTimeFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rules/checkTimeFields */ "./src/rules/checkTimeFields.js");
/* harmony import */ var _rules_checkEmailFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rules/checkEmailFields */ "./src/rules/checkEmailFields.js");
/* harmony import */ var _rules_checkNumberFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rules/checkNumberFields */ "./src/rules/checkNumberFields.js");
/* harmony import */ var _rules_checkPasswordFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules/checkPasswordFields */ "./src/rules/checkPasswordFields.js");
/* harmony import */ var _rules_checkRePasswordFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rules/checkRePasswordFields */ "./src/rules/checkRePasswordFields.js");
/* harmony import */ var _rules_checkRegexFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rules/checkRegexFields */ "./src/rules/checkRegexFields.js");
/* harmony import */ var _rules_checkUrlFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rules/checkUrlFields */ "./src/rules/checkUrlFields.js");
/* harmony import */ var _rules_checkSimpleFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rules/checkSimpleFields */ "./src/rules/checkSimpleFields.js");
/* harmony import */ var _rules_checkReallySimpleFields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rules/checkReallySimpleFields */ "./src/rules/checkReallySimpleFields.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/log */ "./src/utils/log.js");













/* harmony default export */ __webpack_exports__["default"] = (function (form, options) {
  var errorFields = [];
  var resultRequired = Object(_rules_checkRequiredFields__WEBPACK_IMPORTED_MODULE_0__["default"])(form, options.locale.requiredErrorMessage);

  if (resultRequired.length > 0) {
    errorFields = errorFields.concat(resultRequired);
  }

  if (typeof window.moment === 'undefined') {
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_12__["default"])("WARN :: Can not find \"moment\", ignore \".date\", \".datetime\", \".time\" fields");
  } else {
    var resultDateTime = Object(_rules_checkDateTimeFields__WEBPACK_IMPORTED_MODULE_1__["default"])(form, options.locale.datetime, options.locale.datetimeErrorMessage);

    if (resultDateTime.length > 0) {
      errorFields = errorFields.concat(resultDateTime);
    }

    var resultDate = Object(_rules_checkDateFields__WEBPACK_IMPORTED_MODULE_2__["default"])(form, options.locale.date, options.locale.dateErrorMessage);

    if (resultDate.length > 0) {
      errorFields = errorFields.concat(resultDate);
    }

    var resultTime = Object(_rules_checkTimeFields__WEBPACK_IMPORTED_MODULE_3__["default"])(form, options.locale.time, options.locale.timeErrorMessage);

    if (resultTime.length > 0) {
      errorFields = errorFields.concat(resultTime);
    }
  }

  var resultEmail = Object(_rules_checkEmailFields__WEBPACK_IMPORTED_MODULE_4__["default"])(form, options.regex.email, options.locale.emailErrorMessage);

  if (resultEmail.length > 0) {
    errorFields = errorFields.concat(resultEmail);
  }

  var resultNumber = Object(_rules_checkNumberFields__WEBPACK_IMPORTED_MODULE_5__["default"])(form, options.locale.numberErrorMessage);

  if (resultNumber.length > 0) {
    errorFields = errorFields.concat(resultNumber);
  }

  var resultUrl = Object(_rules_checkUrlFields__WEBPACK_IMPORTED_MODULE_9__["default"])(form, options.regex.url, options.locale.urlErrorMessage);

  if (resultUrl.length > 0) {
    errorFields = errorFields.concat(resultUrl);
  }

  var resultPassword = Object(_rules_checkPasswordFields__WEBPACK_IMPORTED_MODULE_6__["default"])(form, options.password, options.locale.passwordErrorMessage);

  if (resultPassword.length > 0) {
    errorFields = errorFields.concat(resultPassword);
  }

  var resultPasswordConfirm = Object(_rules_checkRePasswordFields__WEBPACK_IMPORTED_MODULE_7__["default"])(form, options.locale.repasswordErrorMessage);

  if (resultPasswordConfirm.length > 0) {
    errorFields = errorFields.concat(resultPasswordConfirm);
  }

  var resultSimple = Object(_rules_checkSimpleFields__WEBPACK_IMPORTED_MODULE_10__["default"])(form, options.regex.simple, options.locale.simpleErrorMessage);

  if (resultSimple.length > 0) {
    errorFields = errorFields.concat(resultSimple);
  }

  var resultReallySimple = Object(_rules_checkReallySimpleFields__WEBPACK_IMPORTED_MODULE_11__["default"])(form, options.regex.reallySimple, options.locale.reallySimpleErrorMessage);

  if (resultReallySimple.length > 0) {
    errorFields = errorFields.concat(resultReallySimple);
  }

  var resultRegex = Object(_rules_checkRegexFields__WEBPACK_IMPORTED_MODULE_8__["default"])(form);

  if (resultRegex.length > 0) {
    errorFields = errorFields.concat(resultRegex);
  }

  if (typeof options.validate === 'function') {
    var resultCustom = options.validate(form, options);

    if (resultCustom && resultCustom.length > 0) {
      errorFields = errorFields.concat(resultCustom);
    }
  }

  if (errorFields.length > 0) {
    typeof options.showError === 'function' && options.showError(form, errorFields, options);
    return false;
  } else {
    return true;
  }
});

/***/ }),

/***/ "./src/jquery.niceform.js":
/*!********************************!*\
  !*** ./src/jquery.niceform.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _niceform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./niceform */ "./src/niceform.js");



jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.niceform = function (config) {
  var form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var niceform = form.data('niceform');

  if (typeof config === 'string') {
    if (niceform && config in _niceform__WEBPACK_IMPORTED_MODULE_1__["default"].prototype) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      return niceform[config].apply(niceform, rest);
    }
  } else {
    if (!niceform) {
      form.data('niceform', niceform = new _niceform__WEBPACK_IMPORTED_MODULE_1__["default"](form, config));
    }

    return niceform;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (_niceform__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/locales/en.js":
/*!***************************!*\
  !*** ./src/locales/en.js ***!
  \***************************/
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
  simpleErrorMessage: 'Please enter only letters, numbers and only 1 underscore or dash or space between letters and numbers',
  // Error message for ".really-simple" field
  reallySimpleErrorMessage: 'Please enter only letters and numbers, no punctuation, dots, etc',
  // Error message when unknown issue occurs
  unknownErrorMessage: 'Sorry, an error occurred attempting to submit the form. Please contact the site administrator to resolve!'
});

/***/ }),

/***/ "./src/locales/vi.js":
/*!***************************!*\
  !*** ./src/locales/vi.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
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
  simpleErrorMessage: 'Xin vui lòng chỉ nhập chữ cái, chữ số và chỉ duy nhất 1 gạch ngang hoặc gạch chân hoặc dấu cách giữa chữ cái và chữ số',
  reallySimpleErrorMessage: 'Xin vui lòng chỉ nhập chữ cái và chữ số',
  unknownErrorMessage: 'Rất tiếc, có lỗi xảy ra khi kết với máy chủ. Xin vui lòng liên hệ với quản trị để xử lý!'
});

/***/ }),

/***/ "./src/niceform.js":
/*!*************************!*\
  !*** ./src/niceform.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NiceForm; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_emulateFormData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/emulateFormData */ "./src/utils/emulateFormData.js");
/* harmony import */ var _utils_emulateFormData__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_emulateFormData__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_serializeWithFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/serializeWithFiles */ "./src/utils/serializeWithFiles.js");
/* harmony import */ var _utils_serializeWithFiles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_serializeWithFiles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaults/ */ "./src/defaults/index.js");
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/en */ "./src/locales/en.js");
/* harmony import */ var _locales_vi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/vi */ "./src/locales/vi.js");
/* harmony import */ var _form_validateForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/validateForm */ "./src/form/validateForm.js");
/* harmony import */ var _form_postForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/postForm */ "./src/form/postForm.js");
/* harmony import */ var _form_clearValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/clearValue */ "./src/form/clearValue.js");
/* harmony import */ var _form_disableForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/disableForm */ "./src/form/disableForm.js");
/* harmony import */ var _form_enableForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/enableForm */ "./src/form/enableForm.js");
/* harmony import */ var _form_showMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form/showMessage */ "./src/form/showMessage.js");
/* harmony import */ var _form_hideMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form/hideMessage */ "./src/form/hideMessage.js");
/* harmony import */ var _utils_showElement__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/showElement */ "./src/utils/showElement.js");
/* harmony import */ var _utils_hideElement__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/hideElement */ "./src/utils/hideElement.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var NiceForm =
/*#__PURE__*/
function () {
  function NiceForm(form, config) {
    _classCallCheck(this, NiceForm);

    if (!form.jquery || form.length === 0) {
      return;
    }

    var options = this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, NiceForm.DEFAULTS, config);

    if (typeof options.locale === 'string') {
      options.locale = NiceForm.locales[options.locale];
    } else {
      var customLocale = options.locale;
      options.locale = _objectSpread({}, _locales_en__WEBPACK_IMPORTED_MODULE_4__["default"], {}, customLocale);
    }

    this.form = form;
    form.off('submit').on('submit', function (e) {
      e.preventDefault();

      if (typeof options.hideError === 'function') {
        options.hideError(form, options);
      }

      if (Object(_form_validateForm__WEBPACK_IMPORTED_MODULE_6__["default"])(form, options)) {
        if (typeof options.onValid === 'function') {
          options.onValid(form, options);
        }

        if (options.postFormEnabled === true) {
          Object(_form_postForm__WEBPACK_IMPORTED_MODULE_7__["default"])(form, options);
        }
      } else {
        if (typeof options.onInvalid === 'function') {
          options.onInvalid(form, options);
        }
      }
    });
    form.on('click', '[data-dismiss=message]', function (e) {
      e.preventDefault();

      Object(_form_hideMessage__WEBPACK_IMPORTED_MODULE_12__["default"])(form, options.animationDuration);
    });
  }

  _createClass(NiceForm, [{
    key: "clearValue",
    value: function clearValue(controlSelector) {
      Object(_form_clearValue__WEBPACK_IMPORTED_MODULE_8__["default"])(this.form, controlSelector);
    }
  }, {
    key: "enableForm",
    value: function enableForm() {
      Object(_form_enableForm__WEBPACK_IMPORTED_MODULE_10__["default"])(this.form);
    }
  }, {
    key: "disableForm",
    value: function disableForm() {
      Object(_form_disableForm__WEBPACK_IMPORTED_MODULE_9__["default"])(this.form);
    }
  }, {
    key: "showMessage",
    value: function showMessage(type, title, message) {
      Object(_form_showMessage__WEBPACK_IMPORTED_MODULE_11__["default"])(this.form, type, title, message, this.options.animationDuration);
    }
  }, {
    key: "showSuccessMessage",
    value: function showSuccessMessage(message) {
      Object(_form_showMessage__WEBPACK_IMPORTED_MODULE_11__["default"])(this.form, 'success', this.options.locale.successTitle, message, this.options.animationDuration);
    }
  }, {
    key: "showErrorMessage",
    value: function showErrorMessage(message) {
      Object(_form_showMessage__WEBPACK_IMPORTED_MODULE_11__["default"])(this.form, 'danger', this.options.locale.errorTitle, message, this.options.animationDuration);
    }
  }, {
    key: "hideMessage",
    value: function hideMessage() {
      Object(_form_hideMessage__WEBPACK_IMPORTED_MODULE_12__["default"])(this.form, this.options.animationDuration);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.options);
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      Object(_utils_showElement__WEBPACK_IMPORTED_MODULE_13__["default"])(element, this.options.animationDuration);
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      Object(_utils_hideElement__WEBPACK_IMPORTED_MODULE_14__["default"])(element, this.options.animationDuration);
    }
  }]);

  return NiceForm;
}();

_defineProperty(NiceForm, "DEFAULTS", _defaults___WEBPACK_IMPORTED_MODULE_3__["default"]);

_defineProperty(NiceForm, "version", '1.0.7');

_defineProperty(NiceForm, "locales", {
  en: _locales_en__WEBPACK_IMPORTED_MODULE_4__["default"],
  vi: _locales_vi__WEBPACK_IMPORTED_MODULE_5__["default"]
});



/***/ }),

/***/ "./src/rules/checkDateFields.js":
/*!**************************************!*\
  !*** ./src/rules/checkDateFields.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");

/* harmony default export */ __webpack_exports__["default"] = (function (form, format, errorMessage) {
  var errorFields = [];
  form.find('.date').each(function () {
    var input = $(this);

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !moment(this.value, format, true).isValid()) {
      input.attr('data-error-message', input.attr('data-date-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkDateTimeFields.js":
/*!******************************************!*\
  !*** ./src/rules/checkDateTimeFields.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");

/* harmony default export */ __webpack_exports__["default"] = (function (form, format, errorMessage) {
  var errorFields = [];
  form.find('.datetime').each(function () {
    var input = $(this);

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !moment(this.value, format, true).isValid()) {
      input.attr('data-error-message', input.attr('data-datetime-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkEmailFields.js":
/*!***************************************!*\
  !*** ./src/rules/checkEmailFields.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");
/* harmony import */ var _validators_testRegex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/testRegex */ "./src/validators/testRegex.js");


/* harmony default export */ __webpack_exports__["default"] = (function (form, format, errorMessage) {
  var errorFields = [];
  form.find('.email').each(function () {
    var input = $(this);

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !Object(_validators_testRegex__WEBPACK_IMPORTED_MODULE_1__["default"])(format, this.value)) {
      input.attr('data-error-message', input.attr('data-email-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkNumberFields.js":
/*!****************************************!*\
  !*** ./src/rules/checkNumberFields.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");
/* harmony import */ var _validators_testNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/testNumber */ "./src/validators/testNumber.js");


/* harmony default export */ __webpack_exports__["default"] = (function (form, errorMessage) {
  var errorFields = [];
  form.find('.number').each(function () {
    var input = $(this);

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !Object(_validators_testNumber__WEBPACK_IMPORTED_MODULE_1__["default"])(this.value)) {
      input.attr('data-error-message', input.attr('data-number-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkPasswordFields.js":
/*!******************************************!*\
  !*** ./src/rules/checkPasswordFields.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");
/* harmony import */ var _validators_validatePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/validatePassword */ "./src/validators/validatePassword.js");


/* harmony default export */ __webpack_exports__["default"] = (function (form, passwordOptions, errorMessage) {
  var errorFields = [];

  var isValid = function isValid(value) {
    return Object(_validators_validatePassword__WEBPACK_IMPORTED_MODULE_1__["default"])(value, {
      lower: 1,
      upper: passwordOptions.uppercaseLength,
      alpha: 0,
      numeric: passwordOptions.numberLength,
      special: passwordOptions.specialLength,
      length: [passwordOptions.min, passwordOptions.max],
      badWords: [],
      badSequenceLength: 0,
      noQwertySequences: false,
      noSequential: false
    });
  };

  form.find('.password').each(function () {
    var input = $(this);

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !isValid(this.value)) {
      input.attr('data-error-message', input.attr('data-password-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkRePasswordFields.js":
/*!********************************************!*\
  !*** ./src/rules/checkRePasswordFields.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (form, errorMessage) {
  var errorFields = [];
  var passwordInputs = form.find('.password');
  form.find('.repassword').each(function () {
    var input = $(this);

    if (input.val() !== passwordInputs.val()) {
      input.attr('data-error-message', input.attr('data-repassword-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkReallySimpleFields.js":
/*!**********************************************!*\
  !*** ./src/rules/checkReallySimpleFields.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");
/* harmony import */ var _validators_testRegex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/testRegex */ "./src/validators/testRegex.js");


/* harmony default export */ __webpack_exports__["default"] = (function (form, format, errorMessage) {
  var errorFields = [];
  form.find('.really-simple').each(function () {
    var input = $(this);

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !Object(_validators_testRegex__WEBPACK_IMPORTED_MODULE_1__["default"])(format, this.value)) {
      input.attr('data-error-message', input.attr('data-really-simple-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkRegexFields.js":
/*!***************************************!*\
  !*** ./src/rules/checkRegexFields.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");
/* harmony import */ var _validators_testRegex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/testRegex */ "./src/validators/testRegex.js");


/* harmony default export */ __webpack_exports__["default"] = (function (form) {
  var errorFields = [];
  form.find('.regex').each(function () {
    var input = $(this);
    var regex = input.attr('data-regex');

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !Object(_validators_testRegex__WEBPACK_IMPORTED_MODULE_1__["default"])(new RegExp(regex), this.value)) {
      input.attr('data-error-message', input.attr('data-message') || input.attr('data-regex-message'));
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkRequiredFields.js":
/*!******************************************!*\
  !*** ./src/rules/checkRequiredFields.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (form, errorMessage) {
  var errorFields = [];
  var names = {};
  form.find('.required:radio, .required:checkbox').not('[data-ignore="validate"]').each(function () {
    if (!this.name in names) {
      var input = form.find("input[name=\"".concat(this.name, "\"]"));
      var checked = input.filter(':checked');

      if (checked.length === 0) {
        errorFields.attr('data-error-message', input.attr('data-required-message') || errorMessage);
        errorFields.push(input);
      }

      names[this.name] = true;
    }
  });
  form.find('.required').filter('input, select, textarea').not('.tt-hint, :radio, :checkbox, [data-ignore="validate"]').each(function () {
    var input = $(this);
    var val = input.val() || '';
    var placeholder = input.attr('placeholder');

    if (val.length === 0 || val === placeholder) {
      input.attr('data-error-message', input.attr('data-required-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkSimpleFields.js":
/*!****************************************!*\
  !*** ./src/rules/checkSimpleFields.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");
/* harmony import */ var _validators_testRegex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/testRegex */ "./src/validators/testRegex.js");


/* harmony default export */ __webpack_exports__["default"] = (function (form, format, errorMessage) {
  var errorFields = [];
  form.find('.simple').each(function () {
    var input = $(this);

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !Object(_validators_testRegex__WEBPACK_IMPORTED_MODULE_1__["default"])(format, this.value)) {
      input.attr('data-error-message', input.attr('data-simple-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkTimeFields.js":
/*!**************************************!*\
  !*** ./src/rules/checkTimeFields.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");

/* harmony default export */ __webpack_exports__["default"] = (function (form, format, errorMessage) {
  var errorFields = [];
  form.find('.time').each(function () {
    var input = $(this);

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !moment(this.value, format, true).isValid()) {
      input.attr('data-error-message', input.attr('data-time-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/rules/checkUrlFields.js":
/*!*************************************!*\
  !*** ./src/rules/checkUrlFields.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/shouldBeCheck */ "./src/utils/shouldBeCheck.js");
/* harmony import */ var _validators_testRegex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validators/testRegex */ "./src/validators/testRegex.js");


/* harmony default export */ __webpack_exports__["default"] = (function (form, format, errorMessage) {
  var errorFields = [];
  form.find('.url').each(function () {
    var input = $(this);

    if (Object(_utils_shouldBeCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && !Object(_validators_testRegex__WEBPACK_IMPORTED_MODULE_1__["default"])(format, this.value)) {
      input.attr('data-error-message', input.attr('data-url-message') || errorMessage);
      errorFields.push(input);
    }
  });
  return errorFields;
});

/***/ }),

/***/ "./src/utils/emulateFormData.js":
/*!**************************************!*\
  !*** ./src/utils/emulateFormData.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** Emulate FormData for some browsers* MIT License* (c) 2010 François de Metz*/
(function (w) {
  if (w.FormData) {
    return;
  }

  function FormData() {
    this.fake = true;
    this.boundary = '--------FormData' + Math.random();
    this._fields = [];
  }

  FormData.prototype.append = function (key, value) {
    this._fields.push([key, value]);
  };

  FormData.prototype.toString = function () {
    var boundary = this.boundary;
    var body = '';

    this._fields.forEach(function (field) {
      body += '--' + boundary + '\r\n'; // file upload

      if (field[1].name) {
        var file = field[1];
        body += 'Content-Disposition: form-data; name=\'' + field[0] + '\'; filename=\'' + file.name + '\'\r\n';
        body += 'Content-Type: ' + file.type + '\r\n\r\n';
        body += file.getAsBinary() + '\r\n';
      } else {
        body += 'Content-Disposition: form-data; name=\'' + field[0] + '\';\r\n\r\n';
        body += field[1] + '\r\n';
      }
    });

    body += '--' + boundary + '--';
    return body;
  };

  w.FormData = FormData;
})(window);

/***/ }),

/***/ "./src/utils/hideElement.js":
/*!**********************************!*\
  !*** ./src/utils/hideElement.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (element, animationDuration) {
  element.stop().animate({
    opacity: 0,
    height: 'hide',
    marginTop: 'hide',
    marginBottom: 'hide',
    paddingTop: 'hide',
    paddingBottom: 'hide'
  }, animationDuration);
});

/***/ }),

/***/ "./src/utils/log.js":
/*!**************************!*\
  !*** ./src/utils/log.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (window.__NICEFORM_DEBUG__ && console && typeof console.log === 'function') {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    console.log.apply(console, ['[ NiceForm ] '].concat(args));
  }
});

/***/ }),

/***/ "./src/utils/serializeWithFiles.js":
/*!*****************************************!*\
  !*** ./src/utils/serializeWithFiles.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// http://stackoverflow.com/questions/5392344/sending-multipart-formdata-with-jquery-ajax
(function ($) {
  $.fn.serializeWithFiles = function () {
    var form = $(this); // ADD FILE TO PARAM AJAX

    var formData = new FormData();
    form.find('input[type=file]').each(function (index, input) {
      $.each(input.files, function (i, file) {
        formData.append(input.name, file);
      });
    });
    var params = form.serializeArray();
    $.each(params, function (i, val) {
      formData.append(val.name, val.value);
    });
    return formData;
  };
})(jQuery);

/***/ }),

/***/ "./src/utils/shouldBeCheck.js":
/*!************************************!*\
  !*** ./src/utils/shouldBeCheck.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (control) {
  if (control.is('[data-ignore="validate"]')) {
    return false;
  }

  if (control.attr('data-error-message')) {
    return false;
  }

  if (control.hasClass('required')) {
    return true;
  } else {
    var val = control.val() || '';
    return val.length > 0;
  }
});

/***/ }),

/***/ "./src/utils/showElement.js":
/*!**********************************!*\
  !*** ./src/utils/showElement.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (element, animationDuration) {
  element.stop().css('height', '').animate({
    opacity: 1,
    height: 'show',
    marginTop: 'show',
    marginBottom: 'show',
    paddingTop: 'show',
    paddingBottom: 'show'
  }, animationDuration, function () {
    element.css('height', '');
  });
});

/***/ }),

/***/ "./src/validators/testNumber.js":
/*!**************************************!*\
  !*** ./src/validators/testNumber.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return !isNaN(value) && typeof value !== 'boolean';
});

/***/ }),

/***/ "./src/validators/testRegex.js":
/*!*************************************!*\
  !*** ./src/validators/testRegex.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (regex, string) {
  return regex.test(string);
});

/***/ }),

/***/ "./src/validators/validatePassword.js":
/*!********************************************!*\
  !*** ./src/validators/validatePassword.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*Password Validator 0.1(c) 2007 Steven Levithan <stevenlevithan.com>MIT License*/
function validatePassword(pw, options) {
  // default options (allows any password)
  var o = {
    lower: 0,
    upper: 0,
    alpha: 0,

    /* lower + upper */
    numeric: 0,
    special: 0,
    length: [0, Infinity],
    custom: [
      /* regexes and/or functions */
    ],
    badWords: [],
    badSequenceLength: 0,
    noQwertySequences: false,
    noSequential: false
  };

  for (var property in options) {
    o[property] = options[property];
  }

  var re = {
    lower: /[a-z]/g,
    upper: /[A-Z]/g,
    alpha: /[A-Z]/gi,
    numeric: /[0-9]/g,
    special: /[\W_]/g
  };
  var rule;
  var i; // enforce min/max length

  if (pw.length < o.length[0] || pw.length > o.length[1]) {
    return false;
  } // enforce lower/upper/alpha/numeric/special rules


  for (rule in re) {
    if ((pw.match(re[rule]) || []).length < o[rule]) {
      return false;
    }
  } // enforce word ban (case insensitive)


  for (i = 0; i < o.badWords.length; i++) {
    if (pw.toLowerCase().indexOf(o.badWords[i].toLowerCase()) > -1) {
      return false;
    }
  } // enforce the no sequential, identical characters rule


  if (o.noSequential && /([\S\s])\1/.test(pw)) {
    return false;
  } // enforce alphanumeric/qwerty sequence ban rules


  if (o.badSequenceLength) {
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = lower.toUpperCase();
    var numbers = '0123456789';
    var qwerty = 'qwertyuiopasdfghjklzxcvbnm';
    var start = o.badSequenceLength - 1;
    var seq = '_' + pw.slice(0, start);

    for (i = start; i < pw.length; i++) {
      seq = seq.slice(1) + pw.charAt(i);

      if (lower.indexOf(seq) > -1 || upper.indexOf(seq) > -1 || numbers.indexOf(seq) > -1 || o.noQwertySequences && qwerty.indexOf(seq) > -1) {
        return false;
      }
    }
  } // enforce custom regex/function rules


  for (i = 0; i < o.custom.length; i++) {
    rule = o.custom[i];

    if (rule instanceof RegExp) {
      if (!rule.test(pw)) {
        return false;
      }
    } else if (rule instanceof Function) {
      if (!rule(pw)) {
        return false;
      }
    }
  } // great success!


  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (validatePassword);

/***/ }),

/***/ "jquery":
/*!*************************************************************************************!*\
  !*** external {"amd":"jquery","root":"$","commonjs":"jquery","commonjs2":"jquery"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNlRm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljZUZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvX3Nob3dFcnJvckZpZWxkLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2RlZmF1bHRzL2hpZGVFcnJvci5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9vbkFqYXhFcnJvci5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9vbkFqYXhTdWNjZXNzLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2RlZmF1bHRzL3Bhc3N3b3JkLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2RlZmF1bHRzL3Byb2Nlc3NBamF4UmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvcmVnZXguanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvc2hvd0Vycm9yLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2Zvcm0vY2xlYXJWYWx1ZS5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9mb3JtL2Rpc2FibGVGb3JtLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2Zvcm0vZW5hYmxlRm9ybS5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9mb3JtL2hpZGVNZXNzYWdlLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2Zvcm0vcG9zdEZvcm0uanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZm9ybS9zaG93TWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9mb3JtL3ZhbGlkYXRlRm9ybS5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9qcXVlcnkubmljZWZvcm0uanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvbG9jYWxlcy9lbi5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9sb2NhbGVzL3ZpLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL25pY2Vmb3JtLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrRGF0ZUZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja0RhdGVUaW1lRmllbGRzLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrRW1haWxGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tOdW1iZXJGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tQYXNzd29yZEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja1JlUGFzc3dvcmRGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tSZWFsbHlTaW1wbGVGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tSZWdleEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja1JlcXVpcmVkRmllbGRzLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrU2ltcGxlRmllbGRzLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrVGltZUZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja1VybEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy91dGlscy9lbXVsYXRlRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvdXRpbHMvaGlkZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvdXRpbHMvbG9nLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3V0aWxzL3NlcmlhbGl6ZVdpdGhGaWxlcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy91dGlscy9zaG91bGRCZUNoZWNrLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3V0aWxzL3Nob3dFbGVtZW50LmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3ZhbGlkYXRvcnMvdGVzdE51bWJlci5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy92YWxpZGF0b3JzL3Rlc3RSZWdleC5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy92YWxpZGF0b3JzL3ZhbGlkYXRlUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vZXh0ZXJuYWwge1wiYW1kXCI6XCJqcXVlcnlcIixcInJvb3RcIjpcIiRcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbImZvcm0iLCJmaWVsZCIsIm1lc3NhZ2UiLCJmb3JtR3JvdXAiLCJjbG9zZXN0IiwiaW5wdXRHcm91cCIsImZlZWRiYWNrIiwiZmluZCIsImFkZENsYXNzIiwiZXJyb3JNZXNzYWdlRWwiLCJsZW5ndGgiLCIkIiwiYWZ0ZXIiLCJodG1sIiwibmljZWZvcm0iLCJvcHRpb25zIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwid2luZG93IiwiX19OSUNFRk9STV9ERUJVR19fIiwicG9zdEZvcm1FbmFibGVkIiwicG9zdFVybCIsImFqYXgiLCJ0eXBlIiwiZGF0YVR5cGUiLCJwYXNzd29yZCIsInJlZ2V4IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJsb2NhbGUiLCJ2YWxpZGF0ZSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInByb2Nlc3NBamF4UmVzcG9uc2UiLCJvblZhbGlkIiwib25JbnZhbGlkIiwib25CZWZvcmVTZXJpYWxpemVGb3JtIiwib25CZWZvcmVQb3N0Rm9ybSIsIm9uQWpheFN1Y2Nlc3MiLCJvbkFqYXhFcnJvciIsImpxWGhyIiwicmVzcG9uc2VKU09OIiwidW5rbm93bkVycm9yTWVzc2FnZSIsImVycm9yRmllbGRzIiwiZm9yRWFjaCIsImVycm9yIiwic2hvd0Vycm9yRmllbGQiLCJuYW1lIiwidGltZXIiLCJyZXNwIiwic3VjY2Vzc01lc3NhZ2UiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibWluIiwibWF4Iiwic3BlY2lhbExlbmd0aCIsInVwcGVyY2FzZUxlbmd0aCIsIm51bWJlckxlbmd0aCIsInN0YXR1cyIsImVtYWlsIiwidXJsIiwic2ltcGxlIiwicmVhbGx5U2ltcGxlIiwiaW52YWxpZEVycm9yTWVzc2FnZSIsImNvbnRyb2xTZWxlY3RvciIsIm5vdCIsImVhY2giLCJjb250cm9sIiwiaXNTZWxlY3QiLCJpcyIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2VsZWN0ZWRJbmRleCIsInByb3AiLCJ2YWwiLCJyZWFkT25seSIsInNldEF0dHJpYnV0ZSIsImRpc2FibGVkIiwiZ2V0QXR0cmlidXRlIiwiZm9ybU1lc3NhZ2UiLCJoaWRlRWxlbWVudCIsImlzRm9ybURhdGEiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY2FsbCIsImRhdGEiLCJzZXJpYWxpemVXaXRoRmlsZXMiLCJzZXJpYWxpemUiLCJkaXNhYmxlRm9ybSIsImFqYXhPcHRpb25zIiwic3VjY2VzcyIsInRleHRTdGF0dXMiLCJlbmFibGVGb3JtIiwiaXNTdWNjZXNzIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImJlZm9yZVNlbmQiLCJ4aHIiLCJmYWtlIiwic2V0UmVxdWVzdEhlYWRlciIsImJvdW5kYXJ5Iiwic2VuZCIsInNlbmRBc0JpbmFyeSIsInRvU3RyaW5nIiwiZSIsImFsZXJ0IiwidGl0bGUiLCJwcmVwZW5kIiwiZm9ybUNvbnRlbnQiLCJzaG93RWxlbWVudCIsInJlc3VsdFJlcXVpcmVkIiwiY2hlY2tSZXF1aXJlZEZpZWxkcyIsInJlcXVpcmVkRXJyb3JNZXNzYWdlIiwiY29uY2F0IiwibW9tZW50IiwibG9nIiwicmVzdWx0RGF0ZVRpbWUiLCJjaGVja0RhdGVUaW1lRmllbGRzIiwiZGF0ZXRpbWUiLCJkYXRldGltZUVycm9yTWVzc2FnZSIsInJlc3VsdERhdGUiLCJjaGVja0RhdGVGaWVsZHMiLCJkYXRlIiwiZGF0ZUVycm9yTWVzc2FnZSIsInJlc3VsdFRpbWUiLCJjaGVja1RpbWVGaWVsZHMiLCJ0aW1lIiwidGltZUVycm9yTWVzc2FnZSIsInJlc3VsdEVtYWlsIiwiY2hlY2tFbWFpbEZpZWxkcyIsImVtYWlsRXJyb3JNZXNzYWdlIiwicmVzdWx0TnVtYmVyIiwiY2hlY2tOdW1iZXJGaWVsZHMiLCJudW1iZXJFcnJvck1lc3NhZ2UiLCJyZXN1bHRVcmwiLCJjaGVja1VybEZpZWxkcyIsInVybEVycm9yTWVzc2FnZSIsInJlc3VsdFBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZEZpZWxkcyIsInBhc3N3b3JkRXJyb3JNZXNzYWdlIiwicmVzdWx0UGFzc3dvcmRDb25maXJtIiwiY2hlY2tSZVBhc3N3b3JkRmllbGRzIiwicmVwYXNzd29yZEVycm9yTWVzc2FnZSIsInJlc3VsdFNpbXBsZSIsImNoZWNrU2ltcGxlRmllbGRzIiwic2ltcGxlRXJyb3JNZXNzYWdlIiwicmVzdWx0UmVhbGx5U2ltcGxlIiwiY2hlY2tSZWFsbHlTaW1wbGVGaWVsZHMiLCJyZWFsbHlTaW1wbGVFcnJvck1lc3NhZ2UiLCJyZXN1bHRSZWdleCIsImNoZWNrUmVnZXhGaWVsZHMiLCJyZXN1bHRDdXN0b20iLCJmbiIsImNvbmZpZyIsIk5pY2VGb3JtIiwicHJvdG90eXBlIiwicmVzdCIsImFwcGx5Iiwic3VjY2Vzc1RpdGxlIiwiZXJyb3JUaXRsZSIsImpxdWVyeSIsImV4dGVuZCIsIkRFRkFVTFRTIiwibG9jYWxlcyIsImN1c3RvbUxvY2FsZSIsImRlZmF1bHRFbiIsIm9mZiIsIm9uIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUZvcm0iLCJwb3N0Rm9ybSIsImhpZGVNZXNzYWdlIiwiY2xlYXJWYWx1ZSIsInNob3dNZXNzYWdlIiwiZWxlbWVudCIsImRlZmF1bHRzIiwiZW4iLCJ2aSIsImRlZmF1bHRWaSIsImZvcm1hdCIsImVycm9yTWVzc2FnZSIsImlucHV0Iiwic2hvdWxkQmVDaGVjayIsInZhbHVlIiwiaXNWYWxpZCIsInB1c2giLCJ0ZXN0UmVnZXgiLCJ0ZXN0TnVtYmVyIiwicGFzc3dvcmRPcHRpb25zIiwidmFsaWRhdGVQYXNzd29yZCIsImxvd2VyIiwidXBwZXIiLCJhbHBoYSIsIm51bWVyaWMiLCJzcGVjaWFsIiwiYmFkV29yZHMiLCJiYWRTZXF1ZW5jZUxlbmd0aCIsIm5vUXdlcnR5U2VxdWVuY2VzIiwibm9TZXF1ZW50aWFsIiwicGFzc3dvcmRJbnB1dHMiLCJSZWdFeHAiLCJuYW1lcyIsImNoZWNrZWQiLCJmaWx0ZXIiLCJwbGFjZWhvbGRlciIsInciLCJGb3JtRGF0YSIsIk1hdGgiLCJyYW5kb20iLCJfZmllbGRzIiwiYXBwZW5kIiwia2V5IiwiYm9keSIsImZpbGUiLCJnZXRBc0JpbmFyeSIsInN0b3AiLCJhbmltYXRlIiwib3BhY2l0eSIsImhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiY29uc29sZSIsImFyZ3MiLCJmb3JtRGF0YSIsImluZGV4IiwiZmlsZXMiLCJpIiwicGFyYW1zIiwic2VyaWFsaXplQXJyYXkiLCJqUXVlcnkiLCJoYXNDbGFzcyIsImNzcyIsImlzTmFOIiwic3RyaW5nIiwidGVzdCIsInB3IiwibyIsIkluZmluaXR5IiwiY3VzdG9tIiwicHJvcGVydHkiLCJyZSIsInJ1bGUiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwibnVtYmVycyIsInF3ZXJ0eSIsInN0YXJ0Iiwic2VxIiwic2xpY2UiLCJjaGFyQXQiLCJGdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7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SyxHQUFoQixJQUF1QixDQUFDLENBRnhCLElBR0NiLENBQUMsQ0FBQ3pDLGlCQUFGLElBQXVCb0QsTUFBTSxDQUFDSCxPQUFQLENBQWVLLEdBQWYsSUFBc0IsQ0FBQyxDQUovQyxFQUtFO0FBQ0YsZUFBTyxLQUFQO0FBQ0M7QUFDQTtBQUNBLEdBbEVzQyxDQW1FdkM7OztBQUNBLE9BQUt2QixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdVLENBQUMsQ0FBQ0UsTUFBRixDQUFTck8sTUFBekIsRUFBaUN5TixDQUFDLEVBQWxDLEVBQXNDO0FBQ3RDZSxRQUFJLEdBQUdMLENBQUMsQ0FBQ0UsTUFBRixDQUFTWixDQUFULENBQVA7O0FBQ0EsUUFBSWUsSUFBSSxZQUFZM0MsTUFBcEIsRUFBNEI7QUFDNUIsVUFBSSxDQUFDMkMsSUFBSSxDQUFDUCxJQUFMLENBQVVDLEVBQVYsQ0FBTCxFQUFvQjtBQUNwQixlQUFPLEtBQVA7QUFDQztBQUNBLEtBSkQsTUFJTyxJQUFJTSxJQUFJLFlBQVlXLFFBQXBCLEVBQThCO0FBQ3JDLFVBQUksQ0FBQ1gsSUFBSSxDQUFDTixFQUFELENBQVQsRUFBZTtBQUNmLGVBQU8sS0FBUDtBQUNDO0FBQ0E7QUFDQSxHQS9Fc0MsQ0FnRnZDOzs7QUFDQSxTQUFPLElBQVA7QUFDQzs7QUFDY2hELCtFQUFmLEU7Ozs7Ozs7Ozs7O0FDeEZBLG9EIiwiZmlsZSI6ImpxdWVyeS5uaWNlZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk5pY2VGb3JtXCIsIFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJOaWNlRm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiTmljZUZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCIkXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanF1ZXJ5Lm5pY2Vmb3JtLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZpZWxkLCBtZXNzYWdlKSA9PiB7XHJsZXQgZm9ybUdyb3VwID0gZmllbGQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKTtccmxldCBpbnB1dEdyb3VwID0gZmllbGQuY2xvc2VzdCgnLmlucHV0LWdyb3VwJyk7XHJsZXQgZmVlZGJhY2sgPSBmb3JtR3JvdXAuZmluZCgnLmZvcm0tY29udHJvbC1mZWVkYmFjaycpO1xyZmllbGQuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtccmZvcm1Hcm91cC5hZGRDbGFzcygnaGFzLWVycm9yJyk7XHJsZXQgZXJyb3JNZXNzYWdlRWwgPSBmb3JtR3JvdXAuZmluZCgnLm5mLWVycm9yLW1lc3NhZ2UnKTtccmlmIChlcnJvck1lc3NhZ2VFbC5sZW5ndGggPT09IDApIHtccmVycm9yTWVzc2FnZUVsID0gJChgPGRpdiBjbGFzcz1cIm5mLWVycm9yLW1lc3NhZ2UgdGV4dC1kYW5nZXIgc21hbGxcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9kaXY+YCk7XHJpZiAoaW5wdXRHcm91cC5sZW5ndGggPiAwKSB7XHJpbnB1dEdyb3VwLmFmdGVyKGVycm9yTWVzc2FnZUVsKTtccn0gZWxzZSBpZiAoZmVlZGJhY2subGVuZ3RoID4gMCkge1xyZmVlZGJhY2suYWZ0ZXIoZXJyb3JNZXNzYWdlRWwpXHJ9IGVsc2Uge1xyZmllbGQuYWZ0ZXIoZXJyb3JNZXNzYWdlRWwpXHJ9XHJ9XHJlcnJvck1lc3NhZ2VFbC5odG1sKG1lc3NhZ2UpO1xyZm9ybS5uaWNlZm9ybSgnc2hvd0VsZW1lbnQnLCBlcnJvck1lc3NhZ2VFbCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChmb3JtLCBvcHRpb25zKSA9PiB7XHJmb3JtLmZpbmQoJy5oYXMtZXJyb3InKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJyk7XHJmb3JtLmZpbmQoJy5pcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCAnJyk7XHJmb3JtLm5pY2Vmb3JtKCdoaWRlRWxlbWVudCcsIGZvcm0uZmluZCgnLm5mLWVycm9yLW1lc3NhZ2UnKSk7XHJmb3JtLm5pY2Vmb3JtKCdoaWRlTWVzc2FnZScpO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvd0Vycm9yIGZyb20gJy4vc2hvd0Vycm9yJztcclxuaW1wb3J0IGhpZGVFcnJvciBmcm9tICcuL2hpZGVFcnJvcic7XHJcbmltcG9ydCBwcm9jZXNzQWpheFJlc3BvbnNlIGZyb20gJy4vcHJvY2Vzc0FqYXhSZXNwb25zZSc7XHJcbmltcG9ydCBvbkFqYXhTdWNjZXNzIGZyb20gJy4vb25BamF4U3VjY2Vzcyc7XHJcbmltcG9ydCBvbkFqYXhFcnJvciBmcm9tICcuL29uQWpheEVycm9yJztcclxuaW1wb3J0IHBhc3N3b3JkIGZyb20gJy4vcGFzc3dvcmQnO1xyXG5pbXBvcnQgcmVnZXggZnJvbSAnLi9yZWdleCc7XHJ3aW5kb3cuX19OSUNFRk9STV9ERUJVR19fID0gdHJ1ZTtccmV4cG9ydCBkZWZhdWx0IHtccnBvc3RGb3JtRW5hYmxlZDogdHJ1ZSxccnBvc3RVcmw6IG51bGwsXHJhamF4OiB7XHJ0eXBlOiAnUE9TVCcsXHJkYXRhVHlwZTogJ0pTT04nXHJ9LFxycGFzc3dvcmQsXHJyZWdleCxccmFuaW1hdGlvbkR1cmF0aW9uOiAyMDAsXHJsb2NhbGU6ICdlbicsXHJ2YWxpZGF0ZTogbnVsbCxccnNob3dFcnJvcixccmhpZGVFcnJvcixccnByb2Nlc3NBamF4UmVzcG9uc2UsXHJvblZhbGlkOiBudWxsLFxyb25JbnZhbGlkOiBudWxsLFxyb25CZWZvcmVTZXJpYWxpemVGb3JtOiBudWxsLFxyb25CZWZvcmVQb3N0Rm9ybTogbnVsbCxccm9uQWpheFN1Y2Nlc3MsXHJvbkFqYXhFcnJvclxyXG59O1xyXG4iLCJpbXBvcnQgc2hvd0Vycm9yRmllbGQgZnJvbSAnLi9fc2hvd0Vycm9yRmllbGQnO1xyZXhwb3J0IGRlZmF1bHQgKGpxWGhyLCBmb3JtLCBvcHRpb25zKSA9PiB7XHJpZiAoanFYaHIucmVzcG9uc2VKU09OKSB7XHJmb3JtLm5pY2Vmb3JtKCdzaG93RXJyb3JNZXNzYWdlJywganFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UgfHwgb3B0aW9ucy5sb2NhbGUudW5rbm93bkVycm9yTWVzc2FnZSk7XHJqcVhoci5yZXNwb25zZUpTT04uZXJyb3JGaWVsZHMgJiYganFYaHIucmVzcG9uc2VKU09OLmVycm9yRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yKSB7XHJzaG93RXJyb3JGaWVsZChmb3JtLCBmb3JtLmZpbmQoYFtuYW1lPVwiJHtlcnJvci5uYW1lfVwiXWApLCBlcnJvci5tZXNzYWdlKTtccn0pO1xyfSBlbHNlIHtccmZvcm0ubmljZWZvcm0oJ3Nob3dFcnJvck1lc3NhZ2UnLCBvcHRpb25zLmxvY2FsZS51bmtub3duRXJyb3JNZXNzYWdlKTtccn1cclxufTtcclxuIiwibGV0IHRpbWVyO1xyZXhwb3J0IGRlZmF1bHQgKHJlc3AsIGZvcm0sIG9wdGlvbnMpID0+IHtccmZvcm0ubmljZWZvcm0oJ3Nob3dTdWNjZXNzTWVzc2FnZScsIHJlc3AubWVzc2FnZSB8fCBvcHRpb25zLmxvY2FsZS5zdWNjZXNzTWVzc2FnZSk7XHJjbGVhclRpbWVvdXQodGltZXIpO1xydGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IGZvcm0ubmljZWZvcm0oJ2hpZGVNZXNzYWdlJyksIDUwMDApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHIvLyBNaW5pbXVtIGxlbmd0aCBmb3IgcGFzc3dvcmQgZmllbGRccm1pbjogNixcci8vIE1heGltdW0gbGVuZ3RoIGZvciBwYXNzd29yZCBmaWVsZFxybWF4OiAzMixcci8vIE51bWJlciBvZiByZXF1aXJlZCBzcGVjaWFsIGNoYXJhY3RlciBmb3IgcGFzc3dvcmQgZmllbGRccnNwZWNpYWxMZW5ndGg6IDEsXHIvLyBOdW1iZXIgb2YgcmVxdWlyZWQgdXBwZXJjYXNlIGxldHRlciBmb3IgcGFzc3dvcmQgZmllbGRccnVwcGVyY2FzZUxlbmd0aDogMSxcci8vIE51bWJlciBvZiByZXF1aXJlZCBudW1iZXIgZm9yIHBhc3N3b3JkIGZpZWxkXHJudW1iZXJMZW5ndGg6IDFcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKHJlc3AsIGZvcm0sIG9wdGlvbnMpID0+IHtccnJldHVybiByZXNwICYmIHJlc3Auc3RhdHVzO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHIvLyBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIFwiLmVtYWlsXCIgZmllbGRccmVtYWlsOiAvXig/OlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldP3xbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pJC8sXHIvLyBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIFwiLnVybFwiIGZpZWxkXHJ1cmw6IC9eKGh0dHBzPzpcXC9cXC8pPyhbXFxkYS16XFwuLV0rKVxcLihbYS16XFwuXXsyLDZ9KShbXFwvXFx3IFxcLi1dKikqXFwvPyQvLFxyLy8gUmVndWxhciBleHByZXNzaW9uIGZvciBcIi5zaW1wbGVcIiBmaWVsZFxyc2ltcGxlOiAvXlthLXpBLVowLTldKyg/OlstX1xcc11bYS16QS1aMC05XSspKiQvLFxyLy8gUmVndWxhciBleHByZXNzaW9uIGZvciBcIi5yZWFsbHktc2ltcGxlXCIgZmllbGRccnJlYWxseVNpbXBsZTogL15bYS16QS1aMC05XSskL1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvd0Vycm9yRmllbGQgZnJvbSAnLi9fc2hvd0Vycm9yRmllbGQnO1xyZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGVycm9yRmllbGRzLCBvcHRpb25zKSA9PiB7XHJmb3JtLm5pY2Vmb3JtKCdzaG93RXJyb3JNZXNzYWdlJywgb3B0aW9ucy5sb2NhbGUuaW52YWxpZEVycm9yTWVzc2FnZSk7XHJlcnJvckZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyc2hvd0Vycm9yRmllbGQoZm9ybSwgZmllbGQsIGZpZWxkLmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScpKTtccn0pO1xyXG59O1xyXG4iLCIvKipcciogQ2xlYXIgdmFsdWUgb2YgdGV4dGJveCwgdGV4dGFyZWEuIFVuY2hlY2sgYWxsIHJhZGlvIGJ1dHRvbiBhbmQgY2hlY2tib3guIEFuZCBzZXQgc2VsZWN0ZWRcciogaW5kZXggb2Ygc2VsZWN0IGlzIC0xLiBOT1RFOiBOb3QgZWZmZWN0IHdpdGggZWxlbWVudCBkYXRhLWlnbm9yZT1gY2xlYXJgXHIqIEBwYXJhbSB7alF1ZXJ5fSBmb3JtIGpRdWVyeSBvYmplY3Qgb2YgZm9ybVxyKiBAcGFyYW0ge1N0cmluZ30gY29udHJvbFNlbGVjdG9yIFNlbGVjdG9yIG9mIGNvbnRyb2xzIHdpbGwgYmUgY2xlYXJcciovXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBjb250cm9sU2VsZWN0b3IgPSAnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKSA9PiB7XHJmb3JtLmZpbmQoY29udHJvbFNlbGVjdG9yKS5ub3QoJ1tkYXRhLWlnbm9yZT1cImNsZWFyXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJjb25zdCBjb250cm9sID0gJCh0aGlzKTtccmNvbnN0IGlzU2VsZWN0ID0gY29udHJvbC5pcygnc2VsZWN0Jyk7XHJjb25zdCBpc0NoZWNrYm94ID0gY29udHJvbC5pcygnOmNoZWNrYm94Jyk7XHJjb25zdCBpc1JhZGlvID0gY29udHJvbC5pcygnOnJhZGlvJyk7XHJpZiAoaXNTZWxlY3QpIHtccnRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyfSBlbHNlIGlmIChpc0NoZWNrYm94IHx8IGlzUmFkaW8pIHtccmNvbnRyb2wucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtccn0gZWxzZSB7XHJjb250cm9sLnZhbCgnJyk7XHJ9XHJ9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGZvcm0pID0+IHtccmZvcm0uZmluZCgnc2VsZWN0LCBpbnB1dCwgdGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uICgpICB7XHJpZiAodGhpcy5yZWFkT25seSkge1xydGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luLXJlYWRvbmx5JywgdHJ1ZSk7XHJ9XHJ0aGlzLnJlYWRPbmx5ID0gdHJ1ZTtccn0pO1xyZm9ybS5maW5kKCdidXR0b24nKS5lYWNoKGZ1bmN0aW9uICgpICB7XHJpZiAodGhpcy5kaXNhYmxlZCkge1xydGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luLWRpc2FibGVkJywgdHJ1ZSk7XHJ9XHJ0aGlzLmRpc2FibGVkID0gdHJ1ZTtccn0pO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZm9ybSkgPT4ge1xyZm9ybS5maW5kKCdzZWxlY3QsIGlucHV0LCB0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkgIHtccmlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luLXJlYWRvbmx5JykpIHtccnRoaXMucmVhZE9ubHkgPSBmYWxzZTtccn1ccn0pO1xyZm9ybS5maW5kKCdidXR0b24nKS5lYWNoKGZ1bmN0aW9uICgpICB7XHJpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbi1kaXNhYmxlZCcpKSB7XHJ0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJ9XHJ9KTtcclxufTtcclxuIiwiaW1wb3J0IGhpZGVFbGVtZW50IGZyb20gJy4uL3V0aWxzL2hpZGVFbGVtZW50JztccmV4cG9ydCBkZWZhdWx0IChmb3JtLCBhbmltYXRpb25EdXJhdGlvbikgPT4ge1xybGV0IGZvcm1NZXNzYWdlID0gZm9ybS5maW5kKCcubmYtZm9ybS1tZXNzYWdlJyk7XHJpZiAoZm9ybU1lc3NhZ2UubGVuZ3RoID09PSAwKSB7XHJyZXR1cm47XHJ9XHJoaWRlRWxlbWVudChmb3JtTWVzc2FnZSwgYW5pbWF0aW9uRHVyYXRpb24pO1xyXG59O1xyXG4iLCJpbXBvcnQgZGlzYWJsZUZvcm0gZnJvbSAnLi9kaXNhYmxlRm9ybSc7XHJcbmltcG9ydCBlbmFibGVGb3JtIGZyb20gJy4vZW5hYmxlRm9ybSc7XHJleHBvcnQgZGVmYXVsdCAoZm9ybSwgb3B0aW9ucykgPT4ge1xybGV0IGlzRm9ybURhdGEgPSBmb3JtLmF0dHIoJ2VuY3R5cGUnKSA9PT0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xybGV0IHBvc3RVcmwgPSBvcHRpb25zLnBvc3RVcmwgfHwgZm9ybS5hdHRyKCdhY3Rpb24nKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVTZXJpYWxpemVGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlU2VyaWFsaXplRm9ybS5jYWxsKHRoaXMsIGZvcm0sIG9wdGlvbnMpO1xyfVxybGV0IGRhdGEgPSBpc0Zvcm1EYXRhID8gZm9ybS5zZXJpYWxpemVXaXRoRmlsZXMoKSA6IGZvcm0uc2VyaWFsaXplKCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVQb3N0Rm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xyZGF0YSA9IG9wdGlvbnMub25CZWZvcmVQb3N0Rm9ybS5jYWxsKHRoaXMsIGZvcm0sIG9wdGlvbnMsIGRhdGEpIHx8IGRhdGE7XHJ9XHJ0cnkge1xyZGlzYWJsZUZvcm0oZm9ybSk7XHJsZXQgYWpheE9wdGlvbnMgPSB7XHIuLi5vcHRpb25zLmFqYXgsXHJ1cmw6IHBvc3RVcmwsXHJkYXRhOiBkYXRhLFxyc3VjY2VzczogZnVuY3Rpb24gKHJlc3AsIHRleHRTdGF0dXMsIGpxWGhyKSB7XHJlbmFibGVGb3JtKGZvcm0pO1xybGV0IGlzU3VjY2VzcyA9IGZhbHNlO1xyaWYgKHR5cGVvZiBvcHRpb25zLnByb2Nlc3NBamF4UmVzcG9uc2UgPT09ICdmdW5jdGlvbicpIHtccmlzU3VjY2VzcyA9IG9wdGlvbnMucHJvY2Vzc0FqYXhSZXNwb25zZShyZXNwLCBmb3JtLCBvcHRpb25zKTtccn1ccmlmIChpc1N1Y2Nlc3MpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkFqYXhTdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQWpheFN1Y2Nlc3MuY2FsbCh0aGlzLCByZXNwLCBmb3JtLCBvcHRpb25zKTtccn1ccn0gZWxzZSB7XHJpZiAodHlwZW9mIG9wdGlvbnMub25BamF4RXJyb3IgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25BamF4RXJyb3IuY2FsbCh0aGlzLCBqcVhociwgZm9ybSwgb3B0aW9ucyk7XHJ9XHJ9XHJ9LFxyZXJyb3I6IGZ1bmN0aW9uIChqcVhocikge1xyZW5hYmxlRm9ybShmb3JtKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkFqYXhFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkFqYXhFcnJvci5jYWxsKHRoaXMsIGpxWGhyLCBmb3JtLCBvcHRpb25zKTtccn1ccn1ccn07XHJpZiAoaXNGb3JtRGF0YSkge1xyYWpheE9wdGlvbnMucHJvY2Vzc0RhdGEgPSBmYWxzZTtccmFqYXhPcHRpb25zLmNvbnRlbnRUeXBlID0gZmFsc2U7XHJ9XHJhamF4T3B0aW9ucy5iZWZvcmVTZW5kID0gZnVuY3Rpb24gKHhociwgb3B0aW9ucykgeyAvLyBldCB0b2MgIVxyb3B0aW9ucy5kYXRhID0gZGF0YTtcci8qKlxyKiBZb3UgY2FuIHVzZSBodHRwczovL2dpdGh1Yi5jb20vZnJhbmNvaXMybWV0ei9odG1sNS1mb3JtZGF0YSBmb3IgYSBmYWtlIEZvcm1EYXRhIG9iamVjdFxyKiBPbmx5IHdvcmsgd2l0aCBGaXJlZm94IDMuNlxyKi9ccmlmIChkYXRhLmZha2UpIHtccnhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JyArIGRhdGEuYm91bmRhcnkpO1xyLy8gd2l0aCBmYWtlIEZvcm1EYXRhIG9iamVjdCwgd2UgbXVzdCB1c2Ugc2VuZEFzQmluYXJ5XHJ4aHIuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJ4aHIuc2VuZEFzQmluYXJ5KGRhdGEudG9TdHJpbmcoKSk7XHJ9XHJ9XHJ9O1xyJC5hamF4KGFqYXhPcHRpb25zKTtccn0gY2F0Y2ggKGUpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkFqYXhFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkFqYXhFcnJvci5jYWxsKHRoaXMsIG51bGwsIGZvcm0sIG9wdGlvbnMpO1xyfSBlbHNlIHtccmFsZXJ0KG9wdGlvbnMudW5rbm93bkVycm9yTWVzc2FnZSk7XHJ9XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBzaG93RWxlbWVudCBmcm9tICcuLi91dGlscy9zaG93RWxlbWVudCc7XHJleHBvcnQgZGVmYXVsdCAoZm9ybSwgdHlwZSwgdGl0bGUsIG1lc3NhZ2UsIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJsZXQgZm9ybU1lc3NhZ2UgPSBmb3JtLmZpbmQoJy5uZi1mb3JtLW1lc3NhZ2UnKTtccmlmIChmb3JtTWVzc2FnZS5sZW5ndGggPT09IDApIHtccmZvcm1NZXNzYWdlID0gJChgPGRpdiBjbGFzcz1cIm5mLWZvcm0tbWVzc2FnZSBhbGVydFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5gKTtccmZvcm0ucHJlcGVuZChmb3JtTWVzc2FnZSk7XHJ9XHJmb3JtTWVzc2FnZS5yZW1vdmVDbGFzcygnYWxlcnQtZGFuZ2VyIGFsZXJ0LWluZm8gYWxlcnQtc3VjY2VzcyBhbGVydC13YXJuaW5nJyk7XHJsZXQgZm9ybUNvbnRlbnQgPSBgXHI8YSBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibWVzc2FnZVwiPiZ0aW1lczs8L2E+XHI8Yj4ke3RpdGxlfTwvYj48YnIgLz5cciR7bWVzc2FnZX1ccmA7XHJmb3JtTWVzc2FnZS5hZGRDbGFzcyh0eXBlID09PSAnZXJyb3InID8gJ2FsZXJ0LWRhbmdlcicgOiBgYWxlcnQtJHt0eXBlfWApO1xyZm9ybU1lc3NhZ2UuaHRtbChmb3JtQ29udGVudCk7XHJzaG93RWxlbWVudChmb3JtTWVzc2FnZSwgYW5pbWF0aW9uRHVyYXRpb24pO1xyXG59O1xyXG4iLCJpbXBvcnQgY2hlY2tSZXF1aXJlZEZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1JlcXVpcmVkRmllbGRzJztcclxuaW1wb3J0IGNoZWNrRGF0ZVRpbWVGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tEYXRlVGltZUZpZWxkcyc7XHJcbmltcG9ydCBjaGVja0RhdGVGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tEYXRlRmllbGRzJztcclxuaW1wb3J0IGNoZWNrVGltZUZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1RpbWVGaWVsZHMnO1xyXG5pbXBvcnQgY2hlY2tFbWFpbEZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja0VtYWlsRmllbGRzJztcclxuaW1wb3J0IGNoZWNrTnVtYmVyRmllbGRzIGZyb20gJy4uL3J1bGVzL2NoZWNrTnVtYmVyRmllbGRzJztcclxuaW1wb3J0IGNoZWNrUGFzc3dvcmRGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tQYXNzd29yZEZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1JlUGFzc3dvcmRGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tSZVBhc3N3b3JkRmllbGRzJztcclxuaW1wb3J0IGNoZWNrUmVnZXhGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tSZWdleEZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1VybEZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1VybEZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1NpbXBsZUZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1NpbXBsZUZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1JlYWxseVNpbXBsZUZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1JlYWxseVNpbXBsZUZpZWxkcyc7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IChmb3JtLCBvcHRpb25zKSA9PiB7XHJsZXQgZXJyb3JGaWVsZHMgPSBbXTtccmxldCByZXN1bHRSZXF1aXJlZCA9IGNoZWNrUmVxdWlyZWRGaWVsZHMoZm9ybSwgb3B0aW9ucy5sb2NhbGUucmVxdWlyZWRFcnJvck1lc3NhZ2UpO1xyaWYgKHJlc3VsdFJlcXVpcmVkLmxlbmd0aCA+IDApIHtccmVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdFJlcXVpcmVkKTtccn1ccmlmICh0eXBlb2Ygd2luZG93Lm1vbWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtccmxvZyhgV0FSTiA6OiBDYW4gbm90IGZpbmQgXCJtb21lbnRcIiwgaWdub3JlIFwiLmRhdGVcIiwgXCIuZGF0ZXRpbWVcIiwgXCIudGltZVwiIGZpZWxkc2ApO1xyfSBlbHNlIHtccmxldCByZXN1bHREYXRlVGltZSA9IGNoZWNrRGF0ZVRpbWVGaWVsZHMoZm9ybSwgb3B0aW9ucy5sb2NhbGUuZGF0ZXRpbWUsIG9wdGlvbnMubG9jYWxlLmRhdGV0aW1lRXJyb3JNZXNzYWdlKTtccmlmIChyZXN1bHREYXRlVGltZS5sZW5ndGggPiAwKSB7XHJlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHREYXRlVGltZSk7XHJ9XHJsZXQgcmVzdWx0RGF0ZSA9IGNoZWNrRGF0ZUZpZWxkcyhmb3JtLCBvcHRpb25zLmxvY2FsZS5kYXRlLCBvcHRpb25zLmxvY2FsZS5kYXRlRXJyb3JNZXNzYWdlKTtccmlmIChyZXN1bHREYXRlLmxlbmd0aCA+IDApIHtccmVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdERhdGUpO1xyfVxybGV0IHJlc3VsdFRpbWUgPSBjaGVja1RpbWVGaWVsZHMoZm9ybSwgb3B0aW9ucy5sb2NhbGUudGltZSwgb3B0aW9ucy5sb2NhbGUudGltZUVycm9yTWVzc2FnZSk7XHJpZiAocmVzdWx0VGltZS5sZW5ndGggPiAwKSB7XHJlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHRUaW1lKTtccn1ccn1ccmxldCByZXN1bHRFbWFpbCA9IGNoZWNrRW1haWxGaWVsZHMoZm9ybSwgb3B0aW9ucy5yZWdleC5lbWFpbCwgb3B0aW9ucy5sb2NhbGUuZW1haWxFcnJvck1lc3NhZ2UpO1xyaWYgKHJlc3VsdEVtYWlsLmxlbmd0aCA+IDApIHtccmVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdEVtYWlsKTtccn1ccmxldCByZXN1bHROdW1iZXIgPSBjaGVja051bWJlckZpZWxkcyhmb3JtLCBvcHRpb25zLmxvY2FsZS5udW1iZXJFcnJvck1lc3NhZ2UpO1xyaWYgKHJlc3VsdE51bWJlci5sZW5ndGggPiAwKSB7XHJlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHROdW1iZXIpO1xyfVxybGV0IHJlc3VsdFVybCA9IGNoZWNrVXJsRmllbGRzKGZvcm0sIG9wdGlvbnMucmVnZXgudXJsLCBvcHRpb25zLmxvY2FsZS51cmxFcnJvck1lc3NhZ2UpO1xyaWYgKHJlc3VsdFVybC5sZW5ndGggPiAwKSB7XHJlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHRVcmwpO1xyfVxybGV0IHJlc3VsdFBhc3N3b3JkID0gY2hlY2tQYXNzd29yZEZpZWxkcyhmb3JtLCBvcHRpb25zLnBhc3N3b3JkLCBvcHRpb25zLmxvY2FsZS5wYXNzd29yZEVycm9yTWVzc2FnZSk7XHJpZiAocmVzdWx0UGFzc3dvcmQubGVuZ3RoID4gMCkge1xyZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0UGFzc3dvcmQpO1xyfVxybGV0IHJlc3VsdFBhc3N3b3JkQ29uZmlybSA9IGNoZWNrUmVQYXNzd29yZEZpZWxkcyhmb3JtLCBvcHRpb25zLmxvY2FsZS5yZXBhc3N3b3JkRXJyb3JNZXNzYWdlKTtccmlmIChyZXN1bHRQYXNzd29yZENvbmZpcm0ubGVuZ3RoID4gMCkge1xyZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0UGFzc3dvcmRDb25maXJtKTtccn1ccmxldCByZXN1bHRTaW1wbGUgPSBjaGVja1NpbXBsZUZpZWxkcyhmb3JtLCBvcHRpb25zLnJlZ2V4LnNpbXBsZSwgb3B0aW9ucy5sb2NhbGUuc2ltcGxlRXJyb3JNZXNzYWdlKTtccmlmIChyZXN1bHRTaW1wbGUubGVuZ3RoID4gMCkge1xyZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0U2ltcGxlKTtccn1ccmxldCByZXN1bHRSZWFsbHlTaW1wbGUgPSBjaGVja1JlYWxseVNpbXBsZUZpZWxkcyhmb3JtLCBvcHRpb25zLnJlZ2V4LnJlYWxseVNpbXBsZSwgb3B0aW9ucy5sb2NhbGUucmVhbGx5U2ltcGxlRXJyb3JNZXNzYWdlKTtccmlmIChyZXN1bHRSZWFsbHlTaW1wbGUubGVuZ3RoID4gMCkge1xyZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0UmVhbGx5U2ltcGxlKTtccn1ccmxldCByZXN1bHRSZWdleCA9IGNoZWNrUmVnZXhGaWVsZHMoZm9ybSk7XHJpZiAocmVzdWx0UmVnZXgubGVuZ3RoID4gMCkge1xyZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0UmVnZXgpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLnZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XHJsZXQgcmVzdWx0Q3VzdG9tID0gb3B0aW9ucy52YWxpZGF0ZShmb3JtLCBvcHRpb25zKTtccmlmIChyZXN1bHRDdXN0b20gJiYgcmVzdWx0Q3VzdG9tLmxlbmd0aCA+IDApIHtccmVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdEN1c3RvbSk7XHJ9XHJ9XHJpZiAoZXJyb3JGaWVsZHMubGVuZ3RoID4gMCkge1xydHlwZW9mIG9wdGlvbnMuc2hvd0Vycm9yID09PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMuc2hvd0Vycm9yKGZvcm0sIGVycm9yRmllbGRzLCBvcHRpb25zKTtccnJldHVybiBmYWxzZTtccn0gZWxzZSB7XHJyZXR1cm4gdHJ1ZTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IE5pY2VGb3JtIGZyb20gJy4vbmljZWZvcm0nO1xyJC5mbi5uaWNlZm9ybSA9IGZ1bmN0aW9uIChjb25maWcsIC4uLnJlc3QpIHtccmxldCBmb3JtID0gJCh0aGlzKTtccmxldCBuaWNlZm9ybSA9IGZvcm0uZGF0YSgnbmljZWZvcm0nKTtccmlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xyaWYgKG5pY2Vmb3JtICYmIGNvbmZpZyBpbiBOaWNlRm9ybS5wcm90b3R5cGUpIHtccnJldHVybiBuaWNlZm9ybVtjb25maWddLmFwcGx5KG5pY2Vmb3JtLCByZXN0KTtccn1ccn0gZWxzZSB7XHJpZiAoIW5pY2Vmb3JtKSB7XHJmb3JtLmRhdGEoJ25pY2Vmb3JtJywgbmljZWZvcm0gPSBuZXcgTmljZUZvcm0oZm9ybSwgY29uZmlnKSk7XHJ9XHJyZXR1cm4gbmljZWZvcm07XHJ9XHJcbn07XHJleHBvcnQgZGVmYXVsdCBOaWNlRm9ybTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyLy8gVGhlIGZvcm1hdCBvZiBcIi5kYXRlXCIgZmllbGRccmRhdGU6ICdERC9NTS9ZWVlZJyxcci8vIFRoZSBmb3JtYXQgb2YgXCIudGltZVwiIGZpZWxkXHJ0aW1lOiAnSEg6bW0nLFxyLy8gVGhlIGZvcm1hdCBvZiBcIi5kYXRldGltZVwiIGZpZWxkXHJkYXRldGltZTogJ0REL01NL1lZWVkgSEg6bW0nLFxyLy8gVGl0bGUgb2Ygc3VjY2VzcyBtZXNzYWdlIHdoZW4gc3VibWl0dGluZyBmb3JtIHN1Y2Nlc3NmdWxseVxyc3VjY2Vzc1RpdGxlOiAnU3VjY2VzcyEnLFxyLy8gQ29udGVudCBvZiBzdWNjZXNzIG1lc3NhZ2Ugd2hlbiBzdWJtaXR0aW5nIGZvcm0gc3VjY2Vzc2Z1bGx5XHJzdWNjZXNzTWVzc2FnZTogJ1RoZSBmb3JtIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQnLFxyLy8gVGl0bGUgb2YgZXJyb3IgbWVzc2FnZSB3aGVuIGZvcm0gaXMgaW52YWxpZCBvciBlcnJvciBpbiBzdWJtaXR0aW5nIGZvcm1ccmVycm9yVGl0bGU6ICdFcnJvciEnLFxyLy8gQ29udGVudCBvZiBlcnJvciBtZXNzYWdlIHdoZW4gZm9ybSBpcyBpbnZhbGlkXHJpbnZhbGlkRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNvcnJlY3QgeW91ciBpbnZhbGlkIGZpZWxkcyEnLFxyLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIucmVxdWlyZWRcIiBmaWVsZFxycmVxdWlyZWRFcnJvck1lc3NhZ2U6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcci8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLmRhdGVcIiBmaWVsZFxyZGF0ZUVycm9yTWVzc2FnZTogJ1BsZWFzZSBjaGVjayB0aGUgZm9ybWF0IG9mIHlvdXIgZGF0ZSwgaXQgc2hvdWxkIGJlIGxpa2UgMTQvMDIvMjAwMCcsXHIvLyBFcnJvciBtZXNzYWdlIGZvciBcIi50aW1lXCIgZmllbGRccnRpbWVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIHRpbWUsIGl0IHNob3VsZCBiZSBsaWtlIDE0OjAyJyxcci8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLmRhdGV0aW1lXCIgZmllbGRccmRhdGV0aW1lRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHRoZSBmb3JtYXQgb2YgeW91ciBkYXRlIHRpbWUsIGl0IHNob3VsZCBiZSBsaWtlIDE0LzAyLzIwMDAgMTQ6MDInLFxyLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIuZW1haWxcIiBmaWVsZFxyZW1haWxFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIGVtYWlsIGFkZHJlc3MsIGl0IHNob3VsZCByZWFkIGxpa2Ugc29tZW9uZUBzb21ld2hlcmUuY29tJyxcci8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLm51bWJlclwiIGZpZWxkXHJudW1iZXJFcnJvck1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgb25seSBudW1iZXJzJyxcci8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLnVybFwiIGZpZWxkXHJ1cmxFcnJvck1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdmFsaWQgd2Vic2l0ZSBhZGRyZXNzJyxcci8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLnBhc3N3b3JkXCIgZmllbGRccnBhc3N3b3JkRXJyb3JNZXNzYWdlOiAnWW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBhbmQgaXQgbXVzdCBjb250YWluIG51bWJlcnMsIGxldHRlcnMgKGxvd2VyY2FzZSBhbmQgdXBwZXJjYXNlKSBhbmQgYXQgbGVhc3QgMSBzcGVjaWFsIGNoYXJhY3RlcicsXHIvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5yZXBhc3N3b3JkXCIgZmllbGRccnJlcGFzc3dvcmRFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkJyxcci8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLnNpbXBsZVwiIGZpZWxkXHJzaW1wbGVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgb25seSBsZXR0ZXJzLCBudW1iZXJzIGFuZCBvbmx5IDEgdW5kZXJzY29yZSBvciBkYXNoIG9yIHNwYWNlIGJldHdlZW4gbGV0dGVycyBhbmQgbnVtYmVycycsXHIvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5yZWFsbHktc2ltcGxlXCIgZmllbGRccnJlYWxseVNpbXBsZUVycm9yTWVzc2FnZTogJ1BsZWFzZSBlbnRlciBvbmx5IGxldHRlcnMgYW5kIG51bWJlcnMsIG5vIHB1bmN0dWF0aW9uLCBkb3RzLCBldGMnLFxyLy8gRXJyb3IgbWVzc2FnZSB3aGVuIHVua25vd24gaXNzdWUgb2NjdXJzXHJ1bmtub3duRXJyb3JNZXNzYWdlOiAnU29ycnksIGFuIGVycm9yIG9jY3VycmVkIGF0dGVtcHRpbmcgdG8gc3VibWl0IHRoZSBmb3JtLiBQbGVhc2UgY29udGFjdCB0aGUgc2l0ZSBhZG1pbmlzdHJhdG9yIHRvIHJlc29sdmUhJyxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyZGF0ZTogJ0REL01NL1lZWVknLFxydGltZTogJ0hIOm1tJyxccmRhdGV0aW1lOiAnREQvTU0vWVlZWSBISDptbScsXHJzdWNjZXNzVGl0bGU6ICdUaMOgbmggY8O0bmchJyxccnN1Y2Nlc3NNZXNzYWdlOiAnR+G7rWkgbMOqbiBtw6F5IGNo4bunIHRow6BuaCBjw7RuZycsXHJlcnJvclRpdGxlOiAnTOG7l2khJyxccmludmFsaWRFcnJvck1lc3NhZ2U6ICdYaW4gdnVpIGzDsm5nIHPhu61hIGPDoWMgdHLGsOG7nW5nIGzhu5dpJyxccnJlcXVpcmVkRXJyb3JNZXNzYWdlOiAnVHLGsOG7nW5nIG7DoHkgbMOgIGLhuq90IGJ14buZYycsXHJkYXRlRXJyb3JNZXNzYWdlOiAnWGluIHZ1aSBsw7JuZyBuaOG6rXAgbmfDoHkgdGjDoW5nIGjhu6NwIGzhu4cuIFbDrSBk4bulOiAxNC8wMi8yMDAwJyxccnRpbWVFcnJvck1lc3NhZ2U6ICdYaW4gdnVpIGzDsm5nIG5o4bqtcCB0aOG7nWkgZ2lhbiBo4bujcCBs4buHLiBWw60gZOG7pTogMTQ6MDInLFxyZGF0ZXRpbWVFcnJvck1lc3NhZ2U6ICdYaW4gdnVpIGzDsm5nIG5o4bqtcCBuZ8OgeSB0aMOhbmcgdsOgIHRo4budaSBnaWFuIGjhu6NwIGzhu4cuIFbDrSBk4bulIDE0LzAyLzIwMDAgMTQ6MDInLFxyZW1haWxFcnJvck1lc3NhZ2U6ICdYaW4gdnVpIGzDsm5nIG5o4bqtcCDEkeG7i2EgY2jhu4kgZW1haWwgaOG7o3AgbOG7hyBj4bunYSBi4bqhbi4gxJDhu4tuaCBk4bqhbmcgZW1haWwgbsOqbiBsw6AgIHNvbWVvbmVAc29tZXdoZXJlLmNvbScsXHJudW1iZXJFcnJvck1lc3NhZ2U6ICdYaW4gdnVpIGzDsm5nIGNo4buJIG5o4bqtcCBjaOG7ryBz4buRJyxccnVybEVycm9yTWVzc2FnZTogJ1hpbiB2dWkgbMOybmcgbmjhuq1wIMSR4buLYSBjaOG7iSB3ZWJzaXRlIGjhu6NwIGzhu4cnLFxycGFzc3dvcmRFcnJvck1lc3NhZ2U6ICdN4bqtdCBraOG6qXUgY+G7p2EgYuG6oW4gdOG7kWkgdGhp4buDdSBwaOG6o2kgY8OzIDYga8O9IHThu7EgYuG6o28gZ+G7k20gY2jhu68gY8OhaSAoaG9hIHbDoCB0aMaw4budbmcpLCBjaOG7ryBz4buRIHbDoCB04buRaSB0aGnhu4N1IDEga8OtIHThu7EgxJHhurdjIGJp4buHdCcsXHJyZXBhc3N3b3JkRXJyb3JNZXNzYWdlOiAnWGluIHZ1aSBsw7JuZyBuaOG6rXAgbOG6oWkgbeG6rXQga2jhuql1JyxccnNpbXBsZUVycm9yTWVzc2FnZTogJ1hpbiB2dWkgbMOybmcgY2jhu4kgbmjhuq1wIGNo4buvIGPDoWksIGNo4buvIHPhu5EgdsOgIGNo4buJIGR1eSBuaOG6pXQgMSBn4bqhY2ggbmdhbmcgaG/hurdjIGfhuqFjaCBjaMOibiBob+G6t2MgZOG6pXUgY8OhY2ggZ2nhu69hIGNo4buvIGPDoWkgdsOgIGNo4buvIHPhu5EnLFxycmVhbGx5U2ltcGxlRXJyb3JNZXNzYWdlOiAnWGluIHZ1aSBsw7JuZyBjaOG7iSBuaOG6rXAgY2jhu68gY8OhaSB2w6AgY2jhu68gc+G7kScsXHJ1bmtub3duRXJyb3JNZXNzYWdlOiAnUuG6pXQgdGnhur9jLCBjw7MgbOG7l2kgeOG6o3kgcmEga2hpIGvhur90IHbhu5tpIG3DoXkgY2jhu6cuIFhpbiB2dWkgbMOybmcgbGnDqm4gaOG7hyB24bubaSBxdeG6o24gdHLhu4sgxJHhu4MgeOG7rSBsw70hJyxcclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztccmltcG9ydCAnLi91dGlscy9lbXVsYXRlRm9ybURhdGEnO1xyXG5pbXBvcnQgJy4vdXRpbHMvc2VyaWFsaXplV2l0aEZpbGVzJztccmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzLyc7XHJcbmltcG9ydCBkZWZhdWx0RW4gZnJvbSAnLi9sb2NhbGVzL2VuJztcclxuaW1wb3J0IGRlZmF1bHRWaSBmcm9tICcuL2xvY2FsZXMvdmknO1xyXG5pbXBvcnQgdmFsaWRhdGVGb3JtIGZyb20gJy4vZm9ybS92YWxpZGF0ZUZvcm0nO1xyXG5pbXBvcnQgcG9zdEZvcm0gZnJvbSAnLi9mb3JtL3Bvc3RGb3JtJztcclxuaW1wb3J0IGNsZWFyVmFsdWUgZnJvbSAnLi9mb3JtL2NsZWFyVmFsdWUnO1xyXG5pbXBvcnQgZGlzYWJsZUZvcm0gZnJvbSAnLi9mb3JtL2Rpc2FibGVGb3JtJztcclxuaW1wb3J0IGVuYWJsZUZvcm0gZnJvbSAnLi9mb3JtL2VuYWJsZUZvcm0nO1xyXG5pbXBvcnQgc2hvd01lc3NhZ2UgZnJvbSAnLi9mb3JtL3Nob3dNZXNzYWdlJztcclxuaW1wb3J0IGhpZGVNZXNzYWdlIGZyb20gJy4vZm9ybS9oaWRlTWVzc2FnZSc7XHJcbmltcG9ydCBzaG93RWxlbWVudCBmcm9tICcuL3V0aWxzL3Nob3dFbGVtZW50JztcclxuaW1wb3J0IGhpZGVFbGVtZW50IGZyb20gJy4vdXRpbHMvaGlkZUVsZW1lbnQnO1xyZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmljZUZvcm0ge1xyc3RhdGljIERFRkFVTFRTID0gZGVmYXVsdHM7XHJzdGF0aWMgdmVyc2lvbiA9ICcxLjAuNyc7XHJzdGF0aWMgbG9jYWxlcyA9IHtccmVuOiBkZWZhdWx0RW4sXHJ2aTogZGVmYXVsdFZpLFxyfTtccmNvbnN0cnVjdG9yKGZvcm0sIGNvbmZpZykge1xyaWYgKCFmb3JtLmpxdWVyeSB8fCBmb3JtLmxlbmd0aCA9PT0gMCkge1xycmV0dXJuO1xyfVxyY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBOaWNlRm9ybS5ERUZBVUxUUywgY29uZmlnKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICdzdHJpbmcnKSB7XHJvcHRpb25zLmxvY2FsZSA9IE5pY2VGb3JtLmxvY2FsZXNbb3B0aW9ucy5sb2NhbGVdO1xyfSBlbHNlIHtccmxldCBjdXN0b21Mb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtccm9wdGlvbnMubG9jYWxlID0ge1xyLi4uZGVmYXVsdEVuLFxyLi4uY3VzdG9tTG9jYWxlLFxyfTtccn1ccnRoaXMuZm9ybSA9IGZvcm07XHJmb3JtLm9mZignc3VibWl0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJpZiAodHlwZW9mIG9wdGlvbnMuaGlkZUVycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLmhpZGVFcnJvcihmb3JtLCBvcHRpb25zKTtccn1ccmlmICh2YWxpZGF0ZUZvcm0oZm9ybSwgb3B0aW9ucykpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5vblZhbGlkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uVmFsaWQoZm9ybSwgb3B0aW9ucyk7XHJ9XHJpZiAob3B0aW9ucy5wb3N0Rm9ybUVuYWJsZWQgPT09IHRydWUpIHtccnBvc3RGb3JtKGZvcm0sIG9wdGlvbnMpO1xyfVxyfSBlbHNlIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkludmFsaWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25JbnZhbGlkKGZvcm0sIG9wdGlvbnMpO1xyfVxyfVxyfSk7XHJmb3JtLm9uKCdjbGljaycsICdbZGF0YS1kaXNtaXNzPW1lc3NhZ2VdJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmhpZGVNZXNzYWdlKGZvcm0sIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xyfSk7XHJ9XHJjbGVhclZhbHVlKGNvbnRyb2xTZWxlY3Rvcikge1xyY2xlYXJWYWx1ZSh0aGlzLmZvcm0sIGNvbnRyb2xTZWxlY3Rvcik7XHJ9XHJlbmFibGVGb3JtKCkge1xyZW5hYmxlRm9ybSh0aGlzLmZvcm0pO1xyfVxyZGlzYWJsZUZvcm0oKSB7XHJkaXNhYmxlRm9ybSh0aGlzLmZvcm0pO1xyfVxyc2hvd01lc3NhZ2UodHlwZSwgdGl0bGUsIG1lc3NhZ2UpIHtccnNob3dNZXNzYWdlKHRoaXMuZm9ybSwgdHlwZSwgdGl0bGUsIG1lc3NhZ2UsIHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XHJ9XHJzaG93U3VjY2Vzc01lc3NhZ2UobWVzc2FnZSkge1xyc2hvd01lc3NhZ2UodGhpcy5mb3JtLCAnc3VjY2VzcycsIHRoaXMub3B0aW9ucy5sb2NhbGUuc3VjY2Vzc1RpdGxlLCBtZXNzYWdlLCB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xyfVxyc2hvd0Vycm9yTWVzc2FnZShtZXNzYWdlKSB7XHJzaG93TWVzc2FnZSh0aGlzLmZvcm0sICdkYW5nZXInLCB0aGlzLm9wdGlvbnMubG9jYWxlLmVycm9yVGl0bGUsIG1lc3NhZ2UsIHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XHJ9XHJoaWRlTWVzc2FnZSgpIHtccmhpZGVNZXNzYWdlKHRoaXMuZm9ybSwgdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtccn1ccmdldE9wdGlvbnMoKSB7XHJyZXR1cm4gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucyk7XHJ9XHJzaG93RWxlbWVudChlbGVtZW50KSB7XHJzaG93RWxlbWVudChlbGVtZW50LCB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xyfVxyaGlkZUVsZW1lbnQoZWxlbWVudCkge1xyaGlkZUVsZW1lbnQoZWxlbWVudCwgdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtccn1cclxufVxyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztccmV4cG9ydCBkZWZhdWx0IChmb3JtLCBmb3JtYXQsIGVycm9yTWVzc2FnZSkgPT4ge1xybGV0IGVycm9yRmllbGRzID0gW107XHJmb3JtLmZpbmQoJy5kYXRlJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgaW5wdXQgPSAkKHRoaXMpO1xyaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICFtb21lbnQodGhpcy52YWx1ZSwgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpIHtccmlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtZGF0ZS1tZXNzYWdlJykgfHwgZXJyb3JNZXNzYWdlKTtccmVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyfVxyfSk7XHJyZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZvcm1hdCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJsZXQgZXJyb3JGaWVsZHMgPSBbXTtccmZvcm0uZmluZCgnLmRhdGV0aW1lJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgaW5wdXQgPSAkKHRoaXMpO1xyaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICFtb21lbnQodGhpcy52YWx1ZSwgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpIHtccmlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtZGF0ZXRpbWUtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtccn1ccn0pO1xycmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHRlc3RSZWdleCBmcm9tICcuLi92YWxpZGF0b3JzL3Rlc3RSZWdleCc7XHJleHBvcnQgZGVmYXVsdCAoZm9ybSwgZm9ybWF0LCBlcnJvck1lc3NhZ2UpID0+IHtccmxldCBlcnJvckZpZWxkcyA9IFtdO1xyZm9ybS5maW5kKCcuZW1haWwnKS5lYWNoKGZ1bmN0aW9uICgpIHtccmNvbnN0IGlucHV0ID0gJCh0aGlzKTtccmlmIChzaG91bGRCZUNoZWNrKGlucHV0KSAmJiAhdGVzdFJlZ2V4KGZvcm1hdCwgdGhpcy52YWx1ZSkpIHtccmlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtZW1haWwtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtccn1ccn0pO1xycmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHRlc3ROdW1iZXIgZnJvbSAnLi4vdmFsaWRhdG9ycy90ZXN0TnVtYmVyJztccmV4cG9ydCBkZWZhdWx0IChmb3JtLCBlcnJvck1lc3NhZ2UpID0+IHtccmxldCBlcnJvckZpZWxkcyA9IFtdO1xyZm9ybS5maW5kKCcubnVtYmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIXRlc3ROdW1iZXIodGhpcy52YWx1ZSkpIHtccmlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtbnVtYmVyLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyZXJyb3JGaWVsZHMucHVzaChpbnB1dCk7XHJ9XHJ9KTtccnJldHVybiBlcnJvckZpZWxkcztcclxufTtcclxuIiwiaW1wb3J0IHNob3VsZEJlQ2hlY2sgZnJvbSAnLi4vdXRpbHMvc2hvdWxkQmVDaGVjayc7XHJcbmltcG9ydCB2YWxpZGF0ZVBhc3N3b3JkIGZyb20gJy4uL3ZhbGlkYXRvcnMvdmFsaWRhdGVQYXNzd29yZCc7XHJleHBvcnQgZGVmYXVsdCAoZm9ybSwgcGFzc3dvcmRPcHRpb25zLCBlcnJvck1lc3NhZ2UpID0+IHtccmxldCBlcnJvckZpZWxkcyA9IFtdO1xybGV0IGlzVmFsaWQgPSAodmFsdWUpID0+IHtccnJldHVybiB2YWxpZGF0ZVBhc3N3b3JkKHZhbHVlLCB7XHJsb3dlcjogMSxccnVwcGVyOiBwYXNzd29yZE9wdGlvbnMudXBwZXJjYXNlTGVuZ3RoLFxyYWxwaGE6IDAsXHJudW1lcmljOiBwYXNzd29yZE9wdGlvbnMubnVtYmVyTGVuZ3RoLFxyc3BlY2lhbDogcGFzc3dvcmRPcHRpb25zLnNwZWNpYWxMZW5ndGgsXHJsZW5ndGg6IFtwYXNzd29yZE9wdGlvbnMubWluLCBwYXNzd29yZE9wdGlvbnMubWF4XSxccmJhZFdvcmRzOiBbXSxccmJhZFNlcXVlbmNlTGVuZ3RoOiAwLFxybm9Rd2VydHlTZXF1ZW5jZXM6IGZhbHNlLFxybm9TZXF1ZW50aWFsOiBmYWxzZVxyfSk7XHJ9O1xyZm9ybS5maW5kKCcucGFzc3dvcmQnKS5lYWNoKGZ1bmN0aW9uICgpIHtccmNvbnN0IGlucHV0ID0gJCh0aGlzKTtccmlmIChzaG91bGRCZUNoZWNrKGlucHV0KSAmJiAhaXNWYWxpZCh0aGlzLnZhbHVlKSkge1xyaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS1wYXNzd29yZC1tZXNzYWdlJykgfHwgZXJyb3JNZXNzYWdlKTtccmVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyfVxyfSk7XHJyZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChmb3JtLCBlcnJvck1lc3NhZ2UpID0+IHtccmxldCBlcnJvckZpZWxkcyA9IFtdO1xybGV0IHBhc3N3b3JkSW5wdXRzID0gZm9ybS5maW5kKCcucGFzc3dvcmQnKTtccmZvcm0uZmluZCgnLnJlcGFzc3dvcmQnKS5lYWNoKGZ1bmN0aW9uICgpIHtccmNvbnN0IGlucHV0ID0gJCh0aGlzKTtccmlmIChpbnB1dC52YWwoKSAhPT0gcGFzc3dvcmRJbnB1dHMudmFsKCkpIHtccmlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtcmVwYXNzd29yZC1tZXNzYWdlJykgfHwgZXJyb3JNZXNzYWdlKTtccmVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyfVxyfSk7XHJyZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyXG5pbXBvcnQgdGVzdFJlZ2V4IGZyb20gJy4uL3ZhbGlkYXRvcnMvdGVzdFJlZ2V4JztccmV4cG9ydCBkZWZhdWx0IChmb3JtLCBmb3JtYXQsIGVycm9yTWVzc2FnZSkgPT4ge1xybGV0IGVycm9yRmllbGRzID0gW107XHJmb3JtLmZpbmQoJy5yZWFsbHktc2ltcGxlJykuZWFjaChmdW5jdGlvbiAoKSB7XHJjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIXRlc3RSZWdleChmb3JtYXQsIHRoaXMudmFsdWUpKSB7XHJpbnB1dC5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCBpbnB1dC5hdHRyKCdkYXRhLXJlYWxseS1zaW1wbGUtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtccn1ccn0pO1xycmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHRlc3RSZWdleCBmcm9tICcuLi92YWxpZGF0b3JzL3Rlc3RSZWdleCc7XHJleHBvcnQgZGVmYXVsdCAoZm9ybSkgPT4ge1xybGV0IGVycm9yRmllbGRzID0gW107XHJmb3JtLmZpbmQoJy5yZWdleCcpLmVhY2goZnVuY3Rpb24gKCkge1xyY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xyY29uc3QgcmVnZXggPSBpbnB1dC5hdHRyKCdkYXRhLXJlZ2V4Jyk7XHJpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIXRlc3RSZWdleChuZXcgUmVnRXhwKHJlZ2V4KSwgdGhpcy52YWx1ZSkpIHtccmlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtbWVzc2FnZScpIHx8IGlucHV0LmF0dHIoJ2RhdGEtcmVnZXgtbWVzc2FnZScpKTtccmVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyfVxyfSk7XHJyZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChmb3JtLCBlcnJvck1lc3NhZ2UpID0+IHtccmxldCBlcnJvckZpZWxkcyA9IFtdO1xybGV0IG5hbWVzID0ge307XHJmb3JtLmZpbmQoJy5yZXF1aXJlZDpyYWRpbywgLnJlcXVpcmVkOmNoZWNrYm94Jykubm90KCdbZGF0YS1pZ25vcmU9XCJ2YWxpZGF0ZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyaWYgKCF0aGlzLm5hbWUgaW4gbmFtZXMpIHtccmNvbnN0IGlucHV0ID0gZm9ybS5maW5kKGBpbnB1dFtuYW1lPVwiJHt0aGlzLm5hbWV9XCJdYCk7XHJjb25zdCBjaGVja2VkID0gaW5wdXQuZmlsdGVyKCc6Y2hlY2tlZCcpO1xyaWYgKGNoZWNrZWQubGVuZ3RoID09PSAwKSB7XHJlcnJvckZpZWxkcy5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCBpbnB1dC5hdHRyKCdkYXRhLXJlcXVpcmVkLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyZXJyb3JGaWVsZHMucHVzaChpbnB1dCk7XHJ9XHJuYW1lc1t0aGlzLm5hbWVdID0gdHJ1ZTtccn1ccn0pO1xyZm9ybS5maW5kKCcucmVxdWlyZWQnKS5maWx0ZXIoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykubm90KCcudHQtaGludCwgOnJhZGlvLCA6Y2hlY2tib3gsIFtkYXRhLWlnbm9yZT1cInZhbGlkYXRlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJjb25zdCB2YWwgPSBpbnB1dC52YWwoKSB8fCAnJztccmNvbnN0IHBsYWNlaG9sZGVyID0gaW5wdXQuYXR0cigncGxhY2Vob2xkZXInKTtccmlmICh2YWwubGVuZ3RoID09PSAwIHx8IHZhbCA9PT0gcGxhY2Vob2xkZXIpIHtccmlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtcmVxdWlyZWQtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtccn1ccn0pO1xycmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHRlc3RSZWdleCBmcm9tICcuLi92YWxpZGF0b3JzL3Rlc3RSZWdleCc7XHJleHBvcnQgZGVmYXVsdCAoZm9ybSwgZm9ybWF0LCBlcnJvck1lc3NhZ2UpID0+IHtccmxldCBlcnJvckZpZWxkcyA9IFtdO1xyZm9ybS5maW5kKCcuc2ltcGxlJykuZWFjaChmdW5jdGlvbiAoKSB7XHJjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIXRlc3RSZWdleChmb3JtYXQsIHRoaXMudmFsdWUpKSB7XHJpbnB1dC5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCBpbnB1dC5hdHRyKCdkYXRhLXNpbXBsZS1tZXNzYWdlJykgfHwgZXJyb3JNZXNzYWdlKTtccmVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyfVxyfSk7XHJyZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZvcm1hdCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJsZXQgZXJyb3JGaWVsZHMgPSBbXTtccmZvcm0uZmluZCgnLnRpbWUnKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBpbnB1dCA9ICQodGhpcyk7XHJpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIW1vbWVudCh0aGlzLnZhbHVlLCBmb3JtYXQsIHRydWUpLmlzVmFsaWQoKSkge1xyaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS10aW1lLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyZXJyb3JGaWVsZHMucHVzaChpbnB1dCk7XHJ9XHJ9KTtccnJldHVybiBlcnJvckZpZWxkcztcclxufTtcclxuIiwiaW1wb3J0IHNob3VsZEJlQ2hlY2sgZnJvbSAnLi4vdXRpbHMvc2hvdWxkQmVDaGVjayc7XHJcbmltcG9ydCB0ZXN0UmVnZXggZnJvbSAnLi4vdmFsaWRhdG9ycy90ZXN0UmVnZXgnO1xyZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZvcm1hdCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJsZXQgZXJyb3JGaWVsZHMgPSBbXTtccmZvcm0uZmluZCgnLnVybCcpLmVhY2goZnVuY3Rpb24gKCkge1xyY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xyaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICF0ZXN0UmVnZXgoZm9ybWF0LCB0aGlzLnZhbHVlKSkge1xyaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS11cmwtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtccn1ccn0pO1xycmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCIvKipcciogRW11bGF0ZSBGb3JtRGF0YSBmb3Igc29tZSBicm93c2Vyc1xyKiBNSVQgTGljZW5zZVxyKiAoYykgMjAxMCBGcmFuw6dvaXMgZGUgTWV0elxyKi9cclxuKGZ1bmN0aW9uICh3KSB7XHJpZiAody5Gb3JtRGF0YSkge1xycmV0dXJuO1xyfVxyZnVuY3Rpb24gRm9ybURhdGEoKSB7XHJ0aGlzLmZha2UgPSB0cnVlO1xydGhpcy5ib3VuZGFyeSA9ICctLS0tLS0tLUZvcm1EYXRhJyArIE1hdGgucmFuZG9tKCk7XHJ0aGlzLl9maWVsZHMgPSBbXTtccn1cckZvcm1EYXRhLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xydGhpcy5fZmllbGRzLnB1c2goW2tleSwgdmFsdWVdKTtccn07XHJGb3JtRGF0YS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJ2YXIgYm91bmRhcnkgPSB0aGlzLmJvdW5kYXJ5O1xydmFyIGJvZHkgPSAnJztccnRoaXMuX2ZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyYm9keSArPSAnLS0nICsgYm91bmRhcnkgKyAnXFxyXFxuJztcci8vIGZpbGUgdXBsb2FkXHJpZiAoZmllbGRbMV0ubmFtZSkge1xydmFyIGZpbGUgPSBmaWVsZFsxXTtccmJvZHkgKz0gJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cXCcnICsgZmllbGRbMF0gKyAnXFwnOyBmaWxlbmFtZT1cXCcnICsgZmlsZS5uYW1lICsgJ1xcJ1xcclxcbic7XHJib2R5ICs9ICdDb250ZW50LVR5cGU6ICcgKyBmaWxlLnR5cGUgKyAnXFxyXFxuXFxyXFxuJztccmJvZHkgKz0gZmlsZS5nZXRBc0JpbmFyeSgpICsgJ1xcclxcbic7XHJ9IGVsc2Uge1xyYm9keSArPSAnQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVxcJycgKyBmaWVsZFswXSArICdcXCc7XFxyXFxuXFxyXFxuJztccmJvZHkgKz0gZmllbGRbMV0gKyAnXFxyXFxuJztccn1ccn0pO1xyYm9keSArPSAnLS0nICsgYm91bmRhcnkgKyAnLS0nO1xycmV0dXJuIGJvZHk7XHJ9O1xydy5Gb3JtRGF0YSA9IEZvcm1EYXRhO1xyfSkod2luZG93KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQsIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJlbGVtZW50LnN0b3AoKS5hbmltYXRlKHtccm9wYWNpdHk6IDAsXHJoZWlnaHQ6ICdoaWRlJyxccm1hcmdpblRvcDogJ2hpZGUnLFxybWFyZ2luQm90dG9tOiAnaGlkZScsXHJwYWRkaW5nVG9wOiAnaGlkZScsXHJwYWRkaW5nQm90dG9tOiAnaGlkZSdccn0sIGFuaW1hdGlvbkR1cmF0aW9uKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtccmlmICh3aW5kb3cuX19OSUNFRk9STV9ERUJVR19fICYmIGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nKSB7XHJjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ1sgTmljZUZvcm0gXSAnLCAuLi5hcmdzXSk7XHJ9XHJcbn07XHJcbiIsIi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTM5MjM0NC9zZW5kaW5nLW11bHRpcGFydC1mb3JtZGF0YS13aXRoLWpxdWVyeS1hamF4XHJcbihmdW5jdGlvbiAoJCkge1xyJC5mbi5zZXJpYWxpemVXaXRoRmlsZXMgPSBmdW5jdGlvbiAoKSB7XHJ2YXIgZm9ybSA9ICQodGhpcyk7XHIvLyBBREQgRklMRSBUTyBQQVJBTSBBSkFYXHJ2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtccmZvcm0uZmluZCgnaW5wdXRbdHlwZT1maWxlXScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpbnB1dCkge1xyJC5lYWNoKGlucHV0LmZpbGVzLCBmdW5jdGlvbiAoaSwgZmlsZSkge1xyZm9ybURhdGEuYXBwZW5kKGlucHV0Lm5hbWUsIGZpbGUpO1xyfSk7XHJ9KTtccnZhciBwYXJhbXMgPSBmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XHIkLmVhY2gocGFyYW1zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJmb3JtRGF0YS5hcHBlbmQodmFsLm5hbWUsIHZhbC52YWx1ZSk7XHJ9KTtccnJldHVybiBmb3JtRGF0YTtccn07XHJ9KShqUXVlcnkpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoY29udHJvbCkgPT4ge1xyaWYgKGNvbnRyb2wuaXMoJ1tkYXRhLWlnbm9yZT1cInZhbGlkYXRlXCJdJykpIHtccnJldHVybiBmYWxzZTtccn1ccmlmIChjb250cm9sLmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScpKSB7XHJyZXR1cm4gZmFsc2U7XHJ9XHJpZiAoY29udHJvbC5oYXNDbGFzcygncmVxdWlyZWQnKSkge1xycmV0dXJuIHRydWU7XHJ9IGVsc2Uge1xybGV0IHZhbCA9IGNvbnRyb2wudmFsKCkgfHwgJyc7XHJyZXR1cm4gdmFsLmxlbmd0aCA+IDA7XHJ9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChlbGVtZW50LCBhbmltYXRpb25EdXJhdGlvbikgPT4ge1xyZWxlbWVudC5zdG9wKCkuY3NzKCdoZWlnaHQnLCAnJykuYW5pbWF0ZSh7XHJvcGFjaXR5OiAxLFxyaGVpZ2h0OiAnc2hvdycsXHJtYXJnaW5Ub3A6ICdzaG93Jyxccm1hcmdpbkJvdHRvbTogJ3Nob3cnLFxycGFkZGluZ1RvcDogJ3Nob3cnLFxycGFkZGluZ0JvdHRvbTogJ3Nob3cnXHJ9LCBhbmltYXRpb25EdXJhdGlvbiwgKCkgPT4ge1xyZWxlbWVudC5jc3MoJ2hlaWdodCcsICcnKTtccn0pO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IHtccnJldHVybiAhaXNOYU4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAocmVnZXgsIHN0cmluZykgPT4ge1xycmV0dXJuIHJlZ2V4LnRlc3Qoc3RyaW5nKTtcclxufTtcclxuIiwiLypcclBhc3N3b3JkIFZhbGlkYXRvciAwLjFccihjKSAyMDA3IFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPlxyTUlUIExpY2Vuc2VcciovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocHcsIG9wdGlvbnMpIHtcci8vIGRlZmF1bHQgb3B0aW9ucyAoYWxsb3dzIGFueSBwYXNzd29yZClccnZhciBvID0ge1xybG93ZXI6IDAsXHJ1cHBlcjogMCxccmFscGhhOiAwLCAvKiBsb3dlciArIHVwcGVyICovXHJudW1lcmljOiAwLFxyc3BlY2lhbDogMCxccmxlbmd0aDogWzAsIEluZmluaXR5XSxccmN1c3RvbTogWy8qIHJlZ2V4ZXMgYW5kL29yIGZ1bmN0aW9ucyAqL10sXHJiYWRXb3JkczogW10sXHJiYWRTZXF1ZW5jZUxlbmd0aDogMCxccm5vUXdlcnR5U2VxdWVuY2VzOiBmYWxzZSxccm5vU2VxdWVudGlhbDogZmFsc2Vccn07XHJmb3IgKHZhciBwcm9wZXJ0eSBpbiBvcHRpb25zKSB7XHJvW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xyfVxydmFyIHJlID0ge1xybG93ZXI6IC9bYS16XS9nLFxydXBwZXI6IC9bQS1aXS9nLFxyYWxwaGE6IC9bQS1aXS9naSxccm51bWVyaWM6IC9bMC05XS9nLFxyc3BlY2lhbDogL1tcXFdfXS9nXHJ9O1xydmFyIHJ1bGU7XHJ2YXIgaTtcci8vIGVuZm9yY2UgbWluL21heCBsZW5ndGhccmlmIChwdy5sZW5ndGggPCBvLmxlbmd0aFswXSB8fCBwdy5sZW5ndGggPiBvLmxlbmd0aFsxXSkge1xycmV0dXJuIGZhbHNlO1xyfVxyLy8gZW5mb3JjZSBsb3dlci91cHBlci9hbHBoYS9udW1lcmljL3NwZWNpYWwgcnVsZXNccmZvciAocnVsZSBpbiByZSkge1xyaWYgKChwdy5tYXRjaChyZVtydWxlXSkgfHwgW10pLmxlbmd0aCA8IG9bcnVsZV0pIHtccnJldHVybiBmYWxzZTtccn1ccn1cci8vIGVuZm9yY2Ugd29yZCBiYW4gKGNhc2UgaW5zZW5zaXRpdmUpXHJmb3IgKGkgPSAwOyBpIDwgby5iYWRXb3Jkcy5sZW5ndGg7IGkrKykge1xyaWYgKHB3LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihvLmJhZFdvcmRzW2ldLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtccnJldHVybiBmYWxzZTtccn1ccn1cci8vIGVuZm9yY2UgdGhlIG5vIHNlcXVlbnRpYWwsIGlkZW50aWNhbCBjaGFyYWN0ZXJzIHJ1bGVccmlmIChvLm5vU2VxdWVudGlhbCAmJiAvKFtcXFNcXHNdKVxcMS8udGVzdChwdykpIHtccnJldHVybiBmYWxzZTtccn1cci8vIGVuZm9yY2UgYWxwaGFudW1lcmljL3F3ZXJ0eSBzZXF1ZW5jZSBiYW4gcnVsZXNccmlmIChvLmJhZFNlcXVlbmNlTGVuZ3RoKSB7XHJ2YXIgbG93ZXIgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xydmFyIHVwcGVyID0gbG93ZXIudG9VcHBlckNhc2UoKTtccnZhciBudW1iZXJzID0gJzAxMjM0NTY3ODknO1xydmFyIHF3ZXJ0eSA9ICdxd2VydHl1aW9wYXNkZmdoamtsenhjdmJubSc7XHJ2YXIgc3RhcnQgPSBvLmJhZFNlcXVlbmNlTGVuZ3RoIC0gMTtccnZhciBzZXEgPSAnXycgKyBwdy5zbGljZSgwLCBzdGFydCk7XHJmb3IgKGkgPSBzdGFydDsgaSA8IHB3Lmxlbmd0aDsgaSsrKSB7XHJzZXEgPSBzZXEuc2xpY2UoMSkgKyBwdy5jaGFyQXQoaSk7XHJpZiAoXHJsb3dlci5pbmRleE9mKHNlcSkgPiAtMSB8fFxydXBwZXIuaW5kZXhPZihzZXEpID4gLTEgfHxccm51bWJlcnMuaW5kZXhPZihzZXEpID4gLTEgfHxccihvLm5vUXdlcnR5U2VxdWVuY2VzICYmIHF3ZXJ0eS5pbmRleE9mKHNlcSkgPiAtMSlccikge1xycmV0dXJuIGZhbHNlO1xyfVxyfVxyfVxyLy8gZW5mb3JjZSBjdXN0b20gcmVnZXgvZnVuY3Rpb24gcnVsZXNccmZvciAoaSA9IDA7IGkgPCBvLmN1c3RvbS5sZW5ndGg7IGkrKykge1xycnVsZSA9IG8uY3VzdG9tW2ldO1xyaWYgKHJ1bGUgaW5zdGFuY2VvZiBSZWdFeHApIHtccmlmICghcnVsZS50ZXN0KHB3KSkge1xycmV0dXJuIGZhbHNlO1xyfVxyfSBlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtccmlmICghcnVsZShwdykpIHtccnJldHVybiBmYWxzZTtccn1ccn1ccn1cci8vIGdyZWF0IHN1Y2Nlc3MhXHJyZXR1cm4gdHJ1ZTtcclxufVxyZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVQYXNzd29yZDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdLCJzb3VyY2VSb290IjoiIn0=