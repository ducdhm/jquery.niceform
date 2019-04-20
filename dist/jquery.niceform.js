(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("NiceForm", ["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["NiceForm"] = factory(require("jQuery"));
	else
		root["NiceForm"] = factory(root["jQuery"]);
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
  field.addClass('is-invalid');
  formGroup.addClass('has-error');
  var errorMessageEl = formGroup.find('.nf-error-message');

  if (errorMessageEl.length === 0) {
    errorMessageEl = $("<div class=\"nf-error-message text-danger small\" style=\"display: none;\"></div>");
    field.after(errorMessageEl);
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
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale */ "./src/defaults/locale.js");
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password */ "./src/defaults/password.js");







window.__NICEFORM_DEBUG__ = true;
/* harmony default export */ __webpack_exports__["default"] = ({
  postFormEnabled: true,
  postUrl: null,
  ajax: {
    type: 'POST',
    dataType: 'JSON'
  },
  password: _password__WEBPACK_IMPORTED_MODULE_6__["default"],
  regex: {
    email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
    url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    simple: /^[a-zA-Z0-9]+(?:[-_\s][a-zA-Z0-9]+)*$/,
    reallySimple: /^[a-zA-Z0-9]+$/
  },
  animationDuration: 200,
  locale: _locale__WEBPACK_IMPORTED_MODULE_5__["default"],
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
    form.niceform('showErrorMessage', jqXhr.responseJSON.message || options.unknownErrorMessage);
    jqXhr.responseJSON.errorFields && jqXhr.responseJSON.errorFields.forEach(function (error) {
      Object(_showErrorField__WEBPACK_IMPORTED_MODULE_0__["default"])(form, form.find("[name=\"".concat(error.name, "\"]")), error.message);
    });
  } else {
    form.niceform('showErrorMessage', options.unknownErrorMessage);
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
  form.niceform('showSuccessMessage', resp.message || options.successMessage);
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
/**
 * Clear value of textbox, textarea. Uncheck all radio button and checkbox. And set selected
 * index of select is -1. NOTE: Not effect with element data-ignore=`clear`
 * @param {jQuery} form jQuery object of form
 * @param {String} controlSelector Selector of controls will be clear
 */
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      /**
       * You can use https://github.com/francois2metz/html5-formdata for a fake FormData object
       * Only work with Firefox 3.6
       */

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
  var formContent = "\n        <a class=\"close\" data-dismiss=\"message\">&times;</a>\n        <b>".concat(title, "</b><br />\n        ").concat(message, "\n    ");
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
      return niceform;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (_niceform__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
/* harmony import */ var _defaults___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults/ */ "./src/defaults/index.js");
/* harmony import */ var _form_validateForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/validateForm */ "./src/form/validateForm.js");
/* harmony import */ var _form_postForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/postForm */ "./src/form/postForm.js");
/* harmony import */ var _form_clearValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/clearValue */ "./src/form/clearValue.js");
/* harmony import */ var _form_disableForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/disableForm */ "./src/form/disableForm.js");
/* harmony import */ var _form_enableForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/enableForm */ "./src/form/enableForm.js");
/* harmony import */ var _form_showMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/showMessage */ "./src/form/showMessage.js");
/* harmony import */ var _form_hideMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/hideMessage */ "./src/form/hideMessage.js");
/* harmony import */ var _utils_showElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/showElement */ "./src/utils/showElement.js");
/* harmony import */ var _utils_hideElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/hideElement */ "./src/utils/hideElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



__webpack_require__(/*! ./utils/emulateFormData */ "./src/utils/emulateFormData.js");

__webpack_require__(/*! ./utils/serializeWithFiles */ "./src/utils/serializeWithFiles.js");












var NiceForm =
/*#__PURE__*/
function () {
  function NiceForm(form, config) {
    _classCallCheck(this, NiceForm);

    if (!form.jquery || form.length === 0) {
      return;
    }

    var options = this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, NiceForm.DEFAULTS, config);
    this.form = form;
    form.off('submit').on('submit', function (e) {
      e.preventDefault();

      if (typeof options.hideError === 'function') {
        options.hideError(form, options);
      }

      if (Object(_form_validateForm__WEBPACK_IMPORTED_MODULE_2__["default"])(form, options)) {
        if (typeof options.onValid === 'function') {
          options.onValid(form, options);
        }

        if (options.postFormEnabled === true) {
          Object(_form_postForm__WEBPACK_IMPORTED_MODULE_3__["default"])(form, options);
        }
      } else {
        if (typeof options.onInvalid === 'function') {
          options.onInvalid(form, options);
        }
      }
    });
    form.on('click', '[data-dismiss=message]', function (e) {
      e.preventDefault();

      Object(_form_hideMessage__WEBPACK_IMPORTED_MODULE_8__["default"])(form, options.animationDuration);
    });
  }

  _createClass(NiceForm, [{
    key: "clearValue",
    value: function clearValue(controlSelector) {
      Object(_form_clearValue__WEBPACK_IMPORTED_MODULE_4__["default"])(this.form, controlSelector);
    }
  }, {
    key: "enableForm",
    value: function enableForm() {
      Object(_form_enableForm__WEBPACK_IMPORTED_MODULE_6__["default"])(this.form);
    }
  }, {
    key: "disableForm",
    value: function disableForm() {
      Object(_form_disableForm__WEBPACK_IMPORTED_MODULE_5__["default"])(this.form);
    }
  }, {
    key: "showMessage",
    value: function showMessage(type, title, message) {
      Object(_form_showMessage__WEBPACK_IMPORTED_MODULE_7__["default"])(this.form, type, title, message, this.options.animationDuration);
    }
  }, {
    key: "showSuccessMessage",
    value: function showSuccessMessage(message) {
      Object(_form_showMessage__WEBPACK_IMPORTED_MODULE_7__["default"])(this.form, 'success', this.options.locale.successTitle, message, this.options.animationDuration);
    }
  }, {
    key: "showErrorMessage",
    value: function showErrorMessage(message) {
      Object(_form_showMessage__WEBPACK_IMPORTED_MODULE_7__["default"])(this.form, 'danger', this.options.locale.errorTitle, message, this.options.animationDuration);
    }
  }, {
    key: "hideMessage",
    value: function hideMessage() {
      Object(_form_hideMessage__WEBPACK_IMPORTED_MODULE_8__["default"])(this.form, this.options.animationDuration);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.options);
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      Object(_utils_showElement__WEBPACK_IMPORTED_MODULE_9__["default"])(element, this.options.animationDuration);
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      Object(_utils_hideElement__WEBPACK_IMPORTED_MODULE_10__["default"])(element, this.options.animationDuration);
    }
  }]);

  return NiceForm;
}();

_defineProperty(NiceForm, "DEFAULTS", _defaults___WEBPACK_IMPORTED_MODULE_1__["default"]);

_defineProperty(NiceForm, "version", '1.0.1');



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

/**
 * Emulate FormData for some browsers
 * MIT License
 * (c) 2010 François de Metz
 */
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
/*
 Password Validator 0.1
 (c) 2007 Steven Levithan <stevenlevithan.com>
 MIT License
 */
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
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNlRm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljZUZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvX3Nob3dFcnJvckZpZWxkLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2RlZmF1bHRzL2hpZGVFcnJvci5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvb25BamF4RXJyb3IuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvb25BamF4U3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9wcm9jZXNzQWpheFJlc3BvbnNlLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2RlZmF1bHRzL3Nob3dFcnJvci5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9mb3JtL2NsZWFyVmFsdWUuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZm9ybS9kaXNhYmxlRm9ybS5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9mb3JtL2VuYWJsZUZvcm0uanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZm9ybS9oaWRlTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9mb3JtL3Bvc3RGb3JtLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2Zvcm0vc2hvd01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZm9ybS92YWxpZGF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvanF1ZXJ5Lm5pY2Vmb3JtLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL25pY2Vmb3JtLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrRGF0ZUZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja0RhdGVUaW1lRmllbGRzLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrRW1haWxGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tOdW1iZXJGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tQYXNzd29yZEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja1JlUGFzc3dvcmRGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tSZWFsbHlTaW1wbGVGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tSZWdleEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja1JlcXVpcmVkRmllbGRzLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrU2ltcGxlRmllbGRzLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrVGltZUZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja1VybEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy91dGlscy9lbXVsYXRlRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvdXRpbHMvaGlkZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvdXRpbHMvbG9nLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3V0aWxzL3NlcmlhbGl6ZVdpdGhGaWxlcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy91dGlscy9zaG91bGRCZUNoZWNrLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3V0aWxzL3Nob3dFbGVtZW50LmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3ZhbGlkYXRvcnMvdGVzdE51bWJlci5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy92YWxpZGF0b3JzL3Rlc3RSZWdleC5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy92YWxpZGF0b3JzL3ZhbGlkYXRlUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJmb3JtIiwiZmllbGQiLCJtZXNzYWdlIiwiZm9ybUdyb3VwIiwiY2xvc2VzdCIsImFkZENsYXNzIiwiZXJyb3JNZXNzYWdlRWwiLCJmaW5kIiwibGVuZ3RoIiwiJCIsImFmdGVyIiwiaHRtbCIsIm5pY2Vmb3JtIiwib3B0aW9ucyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsIndpbmRvdyIsIl9fTklDRUZPUk1fREVCVUdfXyIsInBvc3RGb3JtRW5hYmxlZCIsInBvc3RVcmwiLCJhamF4IiwidHlwZSIsImRhdGFUeXBlIiwicGFzc3dvcmQiLCJyZWdleCIsImVtYWlsIiwidXJsIiwic2ltcGxlIiwicmVhbGx5U2ltcGxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJsb2NhbGUiLCJ2YWxpZGF0ZSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInByb2Nlc3NBamF4UmVzcG9uc2UiLCJvblZhbGlkIiwib25JbnZhbGlkIiwib25CZWZvcmVTZXJpYWxpemVGb3JtIiwib25CZWZvcmVQb3N0Rm9ybSIsIm9uQWpheFN1Y2Nlc3MiLCJvbkFqYXhFcnJvciIsImRhdGUiLCJ0aW1lIiwiZGF0ZXRpbWUiLCJzdWNjZXNzVGl0bGUiLCJzdWNjZXNzTWVzc2FnZSIsImVycm9yVGl0bGUiLCJpbnZhbGlkRXJyb3JNZXNzYWdlIiwicmVxdWlyZWRFcnJvck1lc3NhZ2UiLCJkYXRlRXJyb3JNZXNzYWdlIiwidGltZUVycm9yTWVzc2FnZSIsImRhdGV0aW1lRXJyb3JNZXNzYWdlIiwiZW1haWxFcnJvck1lc3NhZ2UiLCJudW1iZXJFcnJvck1lc3NhZ2UiLCJ1cmxFcnJvck1lc3NhZ2UiLCJwYXNzd29yZEVycm9yTWVzc2FnZSIsInJlcGFzc3dvcmRFcnJvck1lc3NhZ2UiLCJzaW1wbGVFcnJvck1lc3NhZ2UiLCJyZWFsbHlTaW1wbGVFcnJvck1lc3NhZ2UiLCJ1bmtub3duRXJyb3JNZXNzYWdlIiwianFYaHIiLCJyZXNwb25zZUpTT04iLCJlcnJvckZpZWxkcyIsImZvckVhY2giLCJlcnJvciIsInNob3dFcnJvckZpZWxkIiwibmFtZSIsInRpbWVyIiwicmVzcCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJtaW4iLCJtYXgiLCJzcGVjaWFsTGVuZ3RoIiwidXBwZXJjYXNlTGVuZ3RoIiwibnVtYmVyTGVuZ3RoIiwic3RhdHVzIiwiY29udHJvbFNlbGVjdG9yIiwibm90IiwiZWFjaCIsImNvbnRyb2wiLCJpc1NlbGVjdCIsImlzIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZWxlY3RlZEluZGV4IiwicHJvcCIsInZhbCIsInJlYWRPbmx5Iiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJnZXRBdHRyaWJ1dGUiLCJmb3JtTWVzc2FnZSIsImhpZGVFbGVtZW50IiwiaXNGb3JtRGF0YSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjYWxsIiwiZGF0YSIsInNlcmlhbGl6ZVdpdGhGaWxlcyIsInNlcmlhbGl6ZSIsImRpc2FibGVGb3JtIiwiYWpheE9wdGlvbnMiLCJzdWNjZXNzIiwidGV4dFN0YXR1cyIsImVuYWJsZUZvcm0iLCJpc1N1Y2Nlc3MiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiYmVmb3JlU2VuZCIsInhociIsImZha2UiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYm91bmRhcnkiLCJzZW5kIiwic2VuZEFzQmluYXJ5IiwidG9TdHJpbmciLCJlIiwiYWxlcnQiLCJ0aXRsZSIsInByZXBlbmQiLCJmb3JtQ29udGVudCIsInNob3dFbGVtZW50IiwicmVzdWx0UmVxdWlyZWQiLCJjaGVja1JlcXVpcmVkRmllbGRzIiwiY29uY2F0IiwibW9tZW50IiwibG9nIiwicmVzdWx0RGF0ZVRpbWUiLCJjaGVja0RhdGVUaW1lRmllbGRzIiwicmVzdWx0RGF0ZSIsImNoZWNrRGF0ZUZpZWxkcyIsInJlc3VsdFRpbWUiLCJjaGVja1RpbWVGaWVsZHMiLCJyZXN1bHRFbWFpbCIsImNoZWNrRW1haWxGaWVsZHMiLCJyZXN1bHROdW1iZXIiLCJjaGVja051bWJlckZpZWxkcyIsInJlc3VsdFVybCIsImNoZWNrVXJsRmllbGRzIiwicmVzdWx0UGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkRmllbGRzIiwicmVzdWx0UGFzc3dvcmRDb25maXJtIiwiY2hlY2tSZVBhc3N3b3JkRmllbGRzIiwicmVzdWx0U2ltcGxlIiwiY2hlY2tTaW1wbGVGaWVsZHMiLCJyZXN1bHRSZWFsbHlTaW1wbGUiLCJjaGVja1JlYWxseVNpbXBsZUZpZWxkcyIsInJlc3VsdFJlZ2V4IiwiY2hlY2tSZWdleEZpZWxkcyIsInJlc3VsdEN1c3RvbSIsImZuIiwiY29uZmlnIiwiTmljZUZvcm0iLCJwcm90b3R5cGUiLCJyZXN0IiwiYXBwbHkiLCJyZXF1aXJlIiwianF1ZXJ5IiwiZXh0ZW5kIiwiREVGQVVMVFMiLCJvZmYiLCJvbiIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVGb3JtIiwicG9zdEZvcm0iLCJoaWRlTWVzc2FnZSIsImNsZWFyVmFsdWUiLCJzaG93TWVzc2FnZSIsImVsZW1lbnQiLCJkZWZhdWx0cyIsImZvcm1hdCIsImVycm9yTWVzc2FnZSIsImlucHV0Iiwic2hvdWxkQmVDaGVjayIsInZhbHVlIiwiaXNWYWxpZCIsInB1c2giLCJ0ZXN0UmVnZXgiLCJ0ZXN0TnVtYmVyIiwicGFzc3dvcmRPcHRpb25zIiwidmFsaWRhdGVQYXNzd29yZCIsImxvd2VyIiwidXBwZXIiLCJhbHBoYSIsIm51bWVyaWMiLCJzcGVjaWFsIiwiYmFkV29yZHMiLCJiYWRTZXF1ZW5jZUxlbmd0aCIsIm5vUXdlcnR5U2VxdWVuY2VzIiwibm9TZXF1ZW50aWFsIiwicGFzc3dvcmRJbnB1dHMiLCJSZWdFeHAiLCJuYW1lcyIsImNoZWNrZWQiLCJmaWx0ZXIiLCJwbGFjZWhvbGRlciIsInciLCJGb3JtRGF0YSIsIk1hdGgiLCJyYW5kb20iLCJfZmllbGRzIiwiYXBwZW5kIiwia2V5IiwiYm9keSIsImZpbGUiLCJnZXRBc0JpbmFyeSIsInN0b3AiLCJhbmltYXRlIiwib3BhY2l0eSIsImhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiY29uc29sZSIsImFyZ3MiLCJmb3JtRGF0YSIsImluZGV4IiwiZmlsZXMiLCJpIiwicGFyYW1zIiwic2VyaWFsaXplQXJyYXkiLCJqUXVlcnkiLCJoYXNDbGFzcyIsImNzcyIsImlzTmFOIiwic3RyaW5nIiwidGVzdCIsInB3IiwibyIsIkluZmluaXR5IiwiY3VzdG9tIiwicHJvcGVydHkiLCJyZSIsInJ1bGUiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRvVXBwZXJDYXNlIiwibnVtYmVycyIsInF3ZXJ0eSIsInN0YXJ0Iiwic2VxIiwic2xpY2UiLCJjaGFyQXQiLCJGdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtB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QUFDSixLQUpELE1BSU8sSUFBSU0sSUFBSSxZQUFZVyxRQUFwQixFQUE4QjtBQUNqQyxVQUFJLENBQUNYLElBQUksQ0FBQ04sRUFBRCxDQUFULEVBQWU7QUFDWCxlQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0osR0F4RmtDLENBMEZuQzs7O0FBQ0EsU0FBTyxJQUFQO0FBQ0g7O0FBRWNoRCwrRUFBZixFOzs7Ozs7Ozs7OztBQ25HQSxvRCIsImZpbGUiOiJqcXVlcnkubmljZWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJOaWNlRm9ybVwiLCBbXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTmljZUZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk5pY2VGb3JtXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanF1ZXJ5Lm5pY2Vmb3JtLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZpZWxkLCBtZXNzYWdlKSA9PiB7XHJcbiAgICBsZXQgZm9ybUdyb3VwID0gZmllbGQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKTtcclxuICAgIFxyXG4gICAgZmllbGQuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcclxuICAgIGZvcm1Hcm91cC5hZGRDbGFzcygnaGFzLWVycm9yJyk7XHJcbiAgICBcclxuICAgIGxldCBlcnJvck1lc3NhZ2VFbCA9IGZvcm1Hcm91cC5maW5kKCcubmYtZXJyb3ItbWVzc2FnZScpO1xyXG4gICAgaWYgKGVycm9yTWVzc2FnZUVsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZUVsID0gJChgPGRpdiBjbGFzcz1cIm5mLWVycm9yLW1lc3NhZ2UgdGV4dC1kYW5nZXIgc21hbGxcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9kaXY+YCk7XHJcbiAgICAgICAgZmllbGQuYWZ0ZXIoZXJyb3JNZXNzYWdlRWwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlcnJvck1lc3NhZ2VFbC5odG1sKG1lc3NhZ2UpO1xyXG4gICAgZm9ybS5uaWNlZm9ybSgnc2hvd0VsZW1lbnQnLCBlcnJvck1lc3NhZ2VFbCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChmb3JtLCBvcHRpb25zKSA9PiB7XHJcbiAgICBmb3JtLmZpbmQoJy5oYXMtZXJyb3InKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yJyk7XHJcbiAgICBmb3JtLmZpbmQoJy5pcy1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKS5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCAnJyk7XHJcbiAgICBmb3JtLm5pY2Vmb3JtKCdoaWRlRWxlbWVudCcsIGZvcm0uZmluZCgnLm5mLWVycm9yLW1lc3NhZ2UnKSk7XHJcbiAgICBmb3JtLm5pY2Vmb3JtKCdoaWRlTWVzc2FnZScpO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvd0Vycm9yIGZyb20gJy4vc2hvd0Vycm9yJztcclxuaW1wb3J0IGhpZGVFcnJvciBmcm9tICcuL2hpZGVFcnJvcic7XHJcbmltcG9ydCBwcm9jZXNzQWpheFJlc3BvbnNlIGZyb20gJy4vcHJvY2Vzc0FqYXhSZXNwb25zZSc7XHJcbmltcG9ydCBvbkFqYXhTdWNjZXNzIGZyb20gJy4vb25BamF4U3VjY2Vzcyc7XHJcbmltcG9ydCBvbkFqYXhFcnJvciBmcm9tICcuL29uQWpheEVycm9yJztcclxuaW1wb3J0IGxvY2FsZSBmcm9tICcuL2xvY2FsZSc7XHJcbmltcG9ydCBwYXNzd29yZCBmcm9tICcuL3Bhc3N3b3JkJztcclxuXHJcbndpbmRvdy5fX05JQ0VGT1JNX0RFQlVHX18gPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcG9zdEZvcm1FbmFibGVkOiB0cnVlLFxyXG4gICAgcG9zdFVybDogbnVsbCxcclxuICAgIFxyXG4gICAgYWpheDoge1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBwYXNzd29yZCxcclxuICAgIFxyXG4gICAgcmVnZXg6IHtcclxuICAgICAgICBlbWFpbDogL14oPzpbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKSQvLFxyXG4gICAgICAgIHVybDogL14oaHR0cHM/OlxcL1xcLyk/KFtcXGRhLXpcXC4tXSspXFwuKFthLXpcXC5dezIsNn0pKFtcXC9cXHcgXFwuLV0qKSpcXC8/JC8sXHJcbiAgICAgICAgc2ltcGxlOiAvXlthLXpBLVowLTldKyg/OlstX1xcc11bYS16QS1aMC05XSspKiQvLFxyXG4gICAgICAgIHJlYWxseVNpbXBsZTogL15bYS16QS1aMC05XSskL1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IDIwMCxcclxuICAgIFxyXG4gICAgbG9jYWxlLFxyXG4gICAgXHJcbiAgICB2YWxpZGF0ZTogbnVsbCxcclxuICAgIFxyXG4gICAgc2hvd0Vycm9yLFxyXG4gICAgaGlkZUVycm9yLFxyXG4gICAgXHJcbiAgICBwcm9jZXNzQWpheFJlc3BvbnNlLFxyXG4gICAgXHJcbiAgICBvblZhbGlkOiBudWxsLFxyXG4gICAgb25JbnZhbGlkOiBudWxsLFxyXG4gICAgXHJcbiAgICBvbkJlZm9yZVNlcmlhbGl6ZUZvcm06IG51bGwsXHJcbiAgICBvbkJlZm9yZVBvc3RGb3JtOiBudWxsLFxyXG4gICAgXHJcbiAgICBvbkFqYXhTdWNjZXNzLFxyXG4gICAgb25BamF4RXJyb3JcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gVGhlIGZvcm1hdCBvZiBcIi5kYXRlXCIgZmllbGRcclxuICAgIGRhdGU6ICdERC9NTS9ZWVlZJyxcclxuICAgIFxyXG4gICAgLy8gVGhlIGZvcm1hdCBvZiBcIi50aW1lXCIgZmllbGRcclxuICAgIHRpbWU6ICdISDptbScsXHJcbiAgICBcclxuICAgIC8vIFRoZSBmb3JtYXQgb2YgXCIuZGF0ZXRpbWVcIiBmaWVsZFxyXG4gICAgZGF0ZXRpbWU6ICdERC9NTS9ZWVlZIEhIOm1tJyxcclxuICAgIFxyXG4gICAgLy8gVGl0bGUgb2Ygc3VjY2VzcyBtZXNzYWdlIHdoZW4gc3VibWl0dGluZyBmb3JtIHN1Y2Nlc3NmdWxseVxyXG4gICAgc3VjY2Vzc1RpdGxlOiAnU3VjY2VzcyEnLFxyXG4gICAgXHJcbiAgICAvLyBDb250ZW50IG9mIHN1Y2Nlc3MgbWVzc2FnZSB3aGVuIHN1Ym1pdHRpbmcgZm9ybSBzdWNjZXNzZnVsbHlcclxuICAgIHN1Y2Nlc3NNZXNzYWdlOiAnVGhlIGZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCcsXHJcbiAgICBcclxuICAgIC8vIFRpdGxlIG9mIGVycm9yIG1lc3NhZ2Ugd2hlbiBmb3JtIGlzIGludmFsaWQgb3IgZXJyb3IgaW4gc3VibWl0dGluZyBmb3JtXHJcbiAgICBlcnJvclRpdGxlOiAnRXJyb3IhJyxcclxuICAgIFxyXG4gICAgLy8gQ29udGVudCBvZiBlcnJvciBtZXNzYWdlIHdoZW4gZm9ybSBpcyBpbnZhbGlkXHJcbiAgICBpbnZhbGlkRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNvcnJlY3QgeW91ciBpbnZhbGlkIGZpZWxkcyEnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5yZXF1aXJlZFwiIGZpZWxkXHJcbiAgICByZXF1aXJlZEVycm9yTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5kYXRlXCIgZmllbGRcclxuICAgIGRhdGVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIGRhdGUsIGl0IHNob3VsZCBiZSBsaWtlIDE0LzAyLzIwMDAnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi50aW1lXCIgZmllbGRcclxuICAgIHRpbWVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIHRpbWUsIGl0IHNob3VsZCBiZSBsaWtlIDE0OjAyJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIuZGF0ZXRpbWVcIiBmaWVsZFxyXG4gICAgZGF0ZXRpbWVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIGRhdGUgdGltZSwgaXQgc2hvdWxkIGJlIGxpa2UgMTQvMDIvMjAwMCAxNDowMicsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLmVtYWlsXCIgZmllbGRcclxuICAgIGVtYWlsRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHRoZSBmb3JtYXQgb2YgeW91ciBlbWFpbCBhZGRyZXNzLCBpdCBzaG91bGQgcmVhZCBsaWtlIHNvbWVvbmVAc29tZXdoZXJlLmNvbScsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLm51bWJlclwiIGZpZWxkXHJcbiAgICBudW1iZXJFcnJvck1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgb25seSBudW1iZXJzJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIudXJsXCIgZmllbGRcclxuICAgIHVybEVycm9yTWVzc2FnZTogJ1BsZWFzZSBlbnRlciB2YWxpZCB3ZWJzaXRlIGFkZHJlc3MnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5wYXNzd29yZFwiIGZpZWxkXHJcbiAgICBwYXNzd29yZEVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgYW5kIGl0IG11c3QgY29udGFpbiBudW1iZXJzLCBsZXR0ZXJzIChsb3dlcmNhc2UgYW5kIHVwcGVyY2FzZSkgYW5kIGF0IGxlYXN0IDEgc3BlY2lhbCBjaGFyYWN0ZXInLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5yZXBhc3N3b3JkXCIgZmllbGRcclxuICAgIHJlcGFzc3dvcmRFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIuc2ltcGxlXCIgZmllbGRcclxuICAgIHNpbXBsZUVycm9yTWVzc2FnZTogJ1BsZWFzZSBlbnRlciBvbmx5IGxldHRlcnMsIG51bWJlcnMsIHVuZGVyc2NvcmVzLCBkYXNoZXMgYW5kIHNwYWNlcycsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLnJlYWxseS1zaW1wbGVcIiBmaWVsZFxyXG4gICAgcmVhbGx5U2ltcGxlRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGVudGVyIG9ubHkgbGV0dGVycyBhbmQgbnVtYmVycywgbm8gcHVuY3R1YXRpb24sIGRvdHMsIGV0YycsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2Ugd2hlbiB1bmtub3duIGlzc3VlIG9jY3Vyc1xyXG4gICAgdW5rbm93bkVycm9yTWVzc2FnZTogJ1NvcnJ5LCBhbiBlcnJvciBvY2N1cnJlZCBhdHRlbXB0aW5nIHRvIHN1Ym1pdCB0aGUgZm9ybS4gUGxlYXNlIGNvbnRhY3QgdGhlIHNpdGUgYWRtaW5pc3RyYXRvciB0byByZXNvbHZlIScsXHJcbn07XHJcbiIsImltcG9ydCBzaG93RXJyb3JGaWVsZCBmcm9tICcuL19zaG93RXJyb3JGaWVsZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoanFYaHIsIGZvcm0sIG9wdGlvbnMpID0+IHtcclxuICAgIGlmIChqcVhoci5yZXNwb25zZUpTT04pIHtcclxuICAgICAgICBmb3JtLm5pY2Vmb3JtKCdzaG93RXJyb3JNZXNzYWdlJywganFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UgfHwgb3B0aW9ucy51bmtub3duRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICBcclxuICAgICAgICBqcVhoci5yZXNwb25zZUpTT04uZXJyb3JGaWVsZHMgJiYganFYaHIucmVzcG9uc2VKU09OLmVycm9yRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNob3dFcnJvckZpZWxkKGZvcm0sIGZvcm0uZmluZChgW25hbWU9XCIke2Vycm9yLm5hbWV9XCJdYCksIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtLm5pY2Vmb3JtKCdzaG93RXJyb3JNZXNzYWdlJywgb3B0aW9ucy51bmtub3duRXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuIiwibGV0IHRpbWVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlc3AsIGZvcm0sIG9wdGlvbnMpID0+IHtcclxuICAgIGZvcm0ubmljZWZvcm0oJ3Nob3dTdWNjZXNzTWVzc2FnZScsIHJlc3AubWVzc2FnZSB8fCBvcHRpb25zLnN1Y2Nlc3NNZXNzYWdlKTtcclxuICAgIFxyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBmb3JtLm5pY2Vmb3JtKCdoaWRlTWVzc2FnZScpLCA1MDAwKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gTWluaW11bSBsZW5ndGggZm9yIHBhc3N3b3JkIGZpZWxkXHJcbiAgICBtaW46IDYsXHJcbiAgICBcclxuICAgIC8vIE1heGltdW0gbGVuZ3RoIGZvciBwYXNzd29yZCBmaWVsZFxyXG4gICAgbWF4OiAzMixcclxuICAgIFxyXG4gICAgLy8gTnVtYmVyIG9mIHJlcXVpcmVkIHNwZWNpYWwgY2hhcmFjdGVyIGZvciBwYXNzd29yZCBmaWVsZFxyXG4gICAgc3BlY2lhbExlbmd0aDogMSxcclxuICAgIFxyXG4gICAgLy8gTnVtYmVyIG9mIHJlcXVpcmVkIHVwcGVyY2FzZSBsZXR0ZXIgZm9yIHBhc3N3b3JkIGZpZWxkXHJcbiAgICB1cHBlcmNhc2VMZW5ndGg6IDEsXHJcbiAgICBcclxuICAgIC8vIE51bWJlciBvZiByZXF1aXJlZCBudW1iZXIgZm9yIHBhc3N3b3JkIGZpZWxkXHJcbiAgICBudW1iZXJMZW5ndGg6IDFcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKHJlc3AsIGZvcm0sIG9wdGlvbnMpID0+IHtcclxuICAgIHJldHVybiByZXNwICYmIHJlc3Auc3RhdHVzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvd0Vycm9yRmllbGQgZnJvbSAnLi9fc2hvd0Vycm9yRmllbGQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGVycm9yRmllbGRzLCBvcHRpb25zKSA9PiB7XHJcbiAgICBmb3JtLm5pY2Vmb3JtKCdzaG93RXJyb3JNZXNzYWdlJywgb3B0aW9ucy5sb2NhbGUuaW52YWxpZEVycm9yTWVzc2FnZSk7XHJcbiAgICBcclxuICAgIGVycm9yRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgc2hvd0Vycm9yRmllbGQoZm9ybSwgZmllbGQsIGZpZWxkLmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScpKTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCIvKipcclxuICogQ2xlYXIgdmFsdWUgb2YgdGV4dGJveCwgdGV4dGFyZWEuIFVuY2hlY2sgYWxsIHJhZGlvIGJ1dHRvbiBhbmQgY2hlY2tib3guIEFuZCBzZXQgc2VsZWN0ZWRcclxuICogaW5kZXggb2Ygc2VsZWN0IGlzIC0xLiBOT1RFOiBOb3QgZWZmZWN0IHdpdGggZWxlbWVudCBkYXRhLWlnbm9yZT1gY2xlYXJgXHJcbiAqIEBwYXJhbSB7alF1ZXJ5fSBmb3JtIGpRdWVyeSBvYmplY3Qgb2YgZm9ybVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udHJvbFNlbGVjdG9yIFNlbGVjdG9yIG9mIGNvbnRyb2xzIHdpbGwgYmUgY2xlYXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBjb250cm9sU2VsZWN0b3IgPSAnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnKSA9PiB7XHJcbiAgICBmb3JtLmZpbmQoY29udHJvbFNlbGVjdG9yKS5ub3QoJ1tkYXRhLWlnbm9yZT1cImNsZWFyXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbCA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgaXNTZWxlY3QgPSBjb250cm9sLmlzKCdzZWxlY3QnKTtcclxuICAgICAgICBjb25zdCBpc0NoZWNrYm94ID0gY29udHJvbC5pcygnOmNoZWNrYm94Jyk7XHJcbiAgICAgICAgY29uc3QgaXNSYWRpbyA9IGNvbnRyb2wuaXMoJzpyYWRpbycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpc1NlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzQ2hlY2tib3ggfHwgaXNSYWRpbykge1xyXG4gICAgICAgICAgICBjb250cm9sLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udHJvbC52YWwoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZm9ybSkgPT4ge1xyXG4gICAgZm9ybS5maW5kKCdzZWxlY3QsIGlucHV0LCB0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkgIHtcclxuICAgICAgICBpZiAodGhpcy5yZWFkT25seSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW4tcmVhZG9ubHknLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWFkT25seSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZm9ybS5maW5kKCdidXR0b24nKS5lYWNoKGZ1bmN0aW9uICgpICB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luLWRpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGZvcm0pID0+IHtcclxuICAgIGZvcm0uZmluZCgnc2VsZWN0LCBpbnB1dCwgdGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uICgpICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW4tcmVhZG9ubHknKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZvcm0uZmluZCgnYnV0dG9uJykuZWFjaChmdW5jdGlvbiAoKSAge1xyXG4gICAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luLWRpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgaGlkZUVsZW1lbnQgZnJvbSAnLi4vdXRpbHMvaGlkZUVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJcbiAgICBsZXQgZm9ybU1lc3NhZ2UgPSBmb3JtLmZpbmQoJy5uZi1mb3JtLW1lc3NhZ2UnKTtcclxuICAgIGlmIChmb3JtTWVzc2FnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhpZGVFbGVtZW50KGZvcm1NZXNzYWdlLCBhbmltYXRpb25EdXJhdGlvbik7XHJcbn07XHJcbiIsImltcG9ydCBkaXNhYmxlRm9ybSBmcm9tICcuL2Rpc2FibGVGb3JtJztcclxuaW1wb3J0IGVuYWJsZUZvcm0gZnJvbSAnLi9lbmFibGVGb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBvcHRpb25zKSA9PiB7XHJcbiAgICBsZXQgaXNGb3JtRGF0YSA9IGZvcm0uYXR0cignZW5jdHlwZScpID09PSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XHJcbiAgICBsZXQgcG9zdFVybCA9IG9wdGlvbnMucG9zdFVybCB8fCBmb3JtLmF0dHIoJ2FjdGlvbicpIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlU2VyaWFsaXplRm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIG9wdGlvbnMub25CZWZvcmVTZXJpYWxpemVGb3JtLmNhbGwodGhpcywgZm9ybSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0YSA9IGlzRm9ybURhdGEgPyBmb3JtLnNlcmlhbGl6ZVdpdGhGaWxlcygpIDogZm9ybS5zZXJpYWxpemUoKTtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlUG9zdEZvcm0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBkYXRhID0gb3B0aW9ucy5vbkJlZm9yZVBvc3RGb3JtLmNhbGwodGhpcywgZm9ybSwgb3B0aW9ucywgZGF0YSkgfHwgZGF0YTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkaXNhYmxlRm9ybShmb3JtKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYWpheE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuYWpheCxcclxuICAgICAgICAgICAgdXJsOiBwb3N0VXJsLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcCwgdGV4dFN0YXR1cywganFYaHIpIHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZUZvcm0oZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBpc1N1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wcm9jZXNzQWpheFJlc3BvbnNlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTdWNjZXNzID0gb3B0aW9ucy5wcm9jZXNzQWpheFJlc3BvbnNlKHJlc3AsIGZvcm0sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uQWpheFN1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkFqYXhTdWNjZXNzLmNhbGwodGhpcywgcmVzcCwgZm9ybSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25BamF4RXJyb3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkFqYXhFcnJvci5jYWxsKHRoaXMsIGpxWGhyLCBmb3JtLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYaHIpIHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZUZvcm0oZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkFqYXhFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25BamF4RXJyb3IuY2FsbCh0aGlzLCBqcVhociwgZm9ybSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpc0Zvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIGFqYXhPcHRpb25zLnByb2Nlc3NEYXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFqYXhPcHRpb25zLmNvbnRlbnRUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFqYXhPcHRpb25zLmJlZm9yZVNlbmQgPSBmdW5jdGlvbiAoeGhyLCBvcHRpb25zKSB7IC8vIGV0IHRvYyAhXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogWW91IGNhbiB1c2UgaHR0cHM6Ly9naXRodWIuY29tL2ZyYW5jb2lzMm1ldHovaHRtbDUtZm9ybWRhdGEgZm9yIGEgZmFrZSBGb3JtRGF0YSBvYmplY3RcclxuICAgICAgICAgICAgICogT25seSB3b3JrIHdpdGggRmlyZWZveCAzLjZcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmZha2UpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JyArIGRhdGEuYm91bmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gd2l0aCBmYWtlIEZvcm1EYXRhIG9iamVjdCwgd2UgbXVzdCB1c2Ugc2VuZEFzQmluYXJ5XHJcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmRBc0JpbmFyeShkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAkLmFqYXgoYWpheE9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkFqYXhFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uQWpheEVycm9yLmNhbGwodGhpcywgbnVsbCwgZm9ybSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQob3B0aW9ucy51bmtub3duRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBzaG93RWxlbWVudCBmcm9tICcuLi91dGlscy9zaG93RWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZm9ybSwgdHlwZSwgdGl0bGUsIG1lc3NhZ2UsIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJcbiAgICBsZXQgZm9ybU1lc3NhZ2UgPSBmb3JtLmZpbmQoJy5uZi1mb3JtLW1lc3NhZ2UnKTtcclxuICAgIGlmIChmb3JtTWVzc2FnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBmb3JtTWVzc2FnZSA9ICQoYDxkaXYgY2xhc3M9XCJuZi1mb3JtLW1lc3NhZ2UgYWxlcnRcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9kaXY+YCk7XHJcbiAgICAgICAgZm9ybS5wcmVwZW5kKGZvcm1NZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGZvcm1NZXNzYWdlLnJlbW92ZUNsYXNzKCdhbGVydC1kYW5nZXIgYWxlcnQtaW5mbyBhbGVydC1zdWNjZXNzIGFsZXJ0LXdhcm5pbmcnKTtcclxuICAgIFxyXG4gICAgbGV0IGZvcm1Db250ZW50ID0gYFxyXG4gICAgICAgIDxhIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtZXNzYWdlXCI+JnRpbWVzOzwvYT5cclxuICAgICAgICA8Yj4ke3RpdGxlfTwvYj48YnIgLz5cclxuICAgICAgICAke21lc3NhZ2V9XHJcbiAgICBgO1xyXG4gICAgXHJcbiAgICBmb3JtTWVzc2FnZS5hZGRDbGFzcyh0eXBlID09PSAnZXJyb3InID8gJ2FsZXJ0LWRhbmdlcicgOiBgYWxlcnQtJHt0eXBlfWApO1xyXG4gICAgZm9ybU1lc3NhZ2UuaHRtbChmb3JtQ29udGVudCk7XHJcbiAgICBzaG93RWxlbWVudChmb3JtTWVzc2FnZSwgYW5pbWF0aW9uRHVyYXRpb24pO1xyXG59O1xyXG4iLCJpbXBvcnQgY2hlY2tSZXF1aXJlZEZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1JlcXVpcmVkRmllbGRzJztcclxuaW1wb3J0IGNoZWNrRGF0ZVRpbWVGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tEYXRlVGltZUZpZWxkcyc7XHJcbmltcG9ydCBjaGVja0RhdGVGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tEYXRlRmllbGRzJztcclxuaW1wb3J0IGNoZWNrVGltZUZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1RpbWVGaWVsZHMnO1xyXG5pbXBvcnQgY2hlY2tFbWFpbEZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja0VtYWlsRmllbGRzJztcclxuaW1wb3J0IGNoZWNrTnVtYmVyRmllbGRzIGZyb20gJy4uL3J1bGVzL2NoZWNrTnVtYmVyRmllbGRzJztcclxuaW1wb3J0IGNoZWNrUGFzc3dvcmRGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tQYXNzd29yZEZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1JlUGFzc3dvcmRGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tSZVBhc3N3b3JkRmllbGRzJztcclxuaW1wb3J0IGNoZWNrUmVnZXhGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tSZWdleEZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1VybEZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1VybEZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1NpbXBsZUZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1NpbXBsZUZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1JlYWxseVNpbXBsZUZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja1JlYWxseVNpbXBsZUZpZWxkcyc7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBvcHRpb25zKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JGaWVsZHMgPSBbXTtcclxuICAgIGxldCByZXN1bHRSZXF1aXJlZCA9IGNoZWNrUmVxdWlyZWRGaWVsZHMoZm9ybSwgb3B0aW9ucy5sb2NhbGUucmVxdWlyZWRFcnJvck1lc3NhZ2UpO1xyXG4gICAgaWYgKHJlc3VsdFJlcXVpcmVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHRSZXF1aXJlZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm1vbWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBsb2coYFdBUk4gOjogQ2FuIG5vdCBmaW5kIFwibW9tZW50XCIsIGlnbm9yZSBcIi5kYXRlXCIsIFwiLmRhdGV0aW1lXCIsIFwiLnRpbWVcIiBmaWVsZHNgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdERhdGVUaW1lID0gY2hlY2tEYXRlVGltZUZpZWxkcyhmb3JtLCBvcHRpb25zLmxvY2FsZS5kYXRldGltZSwgb3B0aW9ucy5sb2NhbGUuZGF0ZXRpbWVFcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChyZXN1bHREYXRlVGltZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdERhdGVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdERhdGUgPSBjaGVja0RhdGVGaWVsZHMoZm9ybSwgb3B0aW9ucy5sb2NhbGUuZGF0ZSwgb3B0aW9ucy5sb2NhbGUuZGF0ZUVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdERhdGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHREYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdFRpbWUgPSBjaGVja1RpbWVGaWVsZHMoZm9ybSwgb3B0aW9ucy5sb2NhbGUudGltZSwgb3B0aW9ucy5sb2NhbGUudGltZUVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdFRpbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHRUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCByZXN1bHRFbWFpbCA9IGNoZWNrRW1haWxGaWVsZHMoZm9ybSwgb3B0aW9ucy5yZWdleC5lbWFpbCwgb3B0aW9ucy5sb2NhbGUuZW1haWxFcnJvck1lc3NhZ2UpO1xyXG4gICAgaWYgKHJlc3VsdEVtYWlsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHRFbWFpbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCByZXN1bHROdW1iZXIgPSBjaGVja051bWJlckZpZWxkcyhmb3JtLCBvcHRpb25zLmxvY2FsZS5udW1iZXJFcnJvck1lc3NhZ2UpO1xyXG4gICAgaWYgKHJlc3VsdE51bWJlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0TnVtYmVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHJlc3VsdFVybCA9IGNoZWNrVXJsRmllbGRzKGZvcm0sIG9wdGlvbnMucmVnZXgudXJsLCBvcHRpb25zLmxvY2FsZS51cmxFcnJvck1lc3NhZ2UpO1xyXG4gICAgaWYgKHJlc3VsdFVybC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0VXJsKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHJlc3VsdFBhc3N3b3JkID0gY2hlY2tQYXNzd29yZEZpZWxkcyhmb3JtLCBvcHRpb25zLnBhc3N3b3JkLCBvcHRpb25zLmxvY2FsZS5wYXNzd29yZEVycm9yTWVzc2FnZSk7XHJcbiAgICBpZiAocmVzdWx0UGFzc3dvcmQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdFBhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHJlc3VsdFBhc3N3b3JkQ29uZmlybSA9IGNoZWNrUmVQYXNzd29yZEZpZWxkcyhmb3JtLCBvcHRpb25zLmxvY2FsZS5yZXBhc3N3b3JkRXJyb3JNZXNzYWdlKTtcclxuICAgIGlmIChyZXN1bHRQYXNzd29yZENvbmZpcm0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdFBhc3N3b3JkQ29uZmlybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCByZXN1bHRTaW1wbGUgPSBjaGVja1NpbXBsZUZpZWxkcyhmb3JtLCBvcHRpb25zLnJlZ2V4LnNpbXBsZSwgb3B0aW9ucy5sb2NhbGUuc2ltcGxlRXJyb3JNZXNzYWdlKTtcclxuICAgIGlmIChyZXN1bHRTaW1wbGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdFNpbXBsZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCByZXN1bHRSZWFsbHlTaW1wbGUgPSBjaGVja1JlYWxseVNpbXBsZUZpZWxkcyhmb3JtLCBvcHRpb25zLnJlZ2V4LnJlYWxseVNpbXBsZSwgb3B0aW9ucy5sb2NhbGUucmVhbGx5U2ltcGxlRXJyb3JNZXNzYWdlKTtcclxuICAgIGlmIChyZXN1bHRSZWFsbHlTaW1wbGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdFJlYWxseVNpbXBsZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCByZXN1bHRSZWdleCA9IGNoZWNrUmVnZXhGaWVsZHMoZm9ybSk7XHJcbiAgICBpZiAocmVzdWx0UmVnZXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdFJlZ2V4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdEN1c3RvbSA9IG9wdGlvbnMudmFsaWRhdGUoZm9ybSwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdEN1c3RvbSAmJiByZXN1bHRDdXN0b20ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHRDdXN0b20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGVycm9yRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5zaG93RXJyb3IgPT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucy5zaG93RXJyb3IoZm9ybSwgZXJyb3JGaWVsZHMsIG9wdGlvbnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBOaWNlRm9ybSBmcm9tICcuL25pY2Vmb3JtJztcclxuXHJcbiQuZm4ubmljZWZvcm0gPSBmdW5jdGlvbiAoY29uZmlnLCAuLi5yZXN0KSB7XHJcbiAgICBsZXQgZm9ybSA9ICQodGhpcyk7XHJcbiAgICBsZXQgbmljZWZvcm0gPSBmb3JtLmRhdGEoJ25pY2Vmb3JtJyk7XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmIChuaWNlZm9ybSAmJiBjb25maWcgaW4gTmljZUZvcm0ucHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuaWNlZm9ybVtjb25maWddLmFwcGx5KG5pY2Vmb3JtLCByZXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbmljZWZvcm0pIHtcclxuICAgICAgICAgICAgZm9ybS5kYXRhKCduaWNlZm9ybScsIG5pY2Vmb3JtID0gbmV3IE5pY2VGb3JtKGZvcm0sIGNvbmZpZykpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmljZWZvcm07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmljZUZvcm07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5yZXF1aXJlKCcuL3V0aWxzL2VtdWxhdGVGb3JtRGF0YScpO1xyXG5yZXF1aXJlKCcuL3V0aWxzL3NlcmlhbGl6ZVdpdGhGaWxlcycpO1xyXG5cclxuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4vZGVmYXVsdHMvJztcclxuaW1wb3J0IHZhbGlkYXRlRm9ybSBmcm9tICcuL2Zvcm0vdmFsaWRhdGVGb3JtJztcclxuaW1wb3J0IHBvc3RGb3JtIGZyb20gJy4vZm9ybS9wb3N0Rm9ybSc7XHJcbmltcG9ydCBjbGVhclZhbHVlIGZyb20gJy4vZm9ybS9jbGVhclZhbHVlJztcclxuaW1wb3J0IGRpc2FibGVGb3JtIGZyb20gJy4vZm9ybS9kaXNhYmxlRm9ybSc7XHJcbmltcG9ydCBlbmFibGVGb3JtIGZyb20gJy4vZm9ybS9lbmFibGVGb3JtJztcclxuaW1wb3J0IHNob3dNZXNzYWdlIGZyb20gJy4vZm9ybS9zaG93TWVzc2FnZSc7XHJcbmltcG9ydCBoaWRlTWVzc2FnZSBmcm9tICcuL2Zvcm0vaGlkZU1lc3NhZ2UnO1xyXG5cclxuaW1wb3J0IHNob3dFbGVtZW50IGZyb20gJy4vdXRpbHMvc2hvd0VsZW1lbnQnO1xyXG5pbXBvcnQgaGlkZUVsZW1lbnQgZnJvbSAnLi91dGlscy9oaWRlRWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOaWNlRm9ybSB7XHJcbiAgICBzdGF0aWMgREVGQVVMVFMgPSBkZWZhdWx0cztcclxuICAgIHN0YXRpYyB2ZXJzaW9uID0gJzEuMC4xJztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZm9ybSwgY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKCFmb3JtLmpxdWVyeSB8fCBmb3JtLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBOaWNlRm9ybS5ERUZBVUxUUywgY29uZmlnKTtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcm0ub2ZmKCdzdWJtaXQnKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmhpZGVFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oaWRlRXJyb3IoZm9ybSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUZvcm0oZm9ybSwgb3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblZhbGlkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vblZhbGlkKGZvcm0sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wb3N0Rm9ybUVuYWJsZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0Rm9ybShmb3JtLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkludmFsaWQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uSW52YWxpZChmb3JtLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcm0ub24oJ2NsaWNrJywgJ1tkYXRhLWRpc21pc3M9bWVzc2FnZV0nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoaWRlTWVzc2FnZShmb3JtLCBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xlYXJWYWx1ZShjb250cm9sU2VsZWN0b3IpIHtcclxuICAgICAgICBjbGVhclZhbHVlKHRoaXMuZm9ybSwgY29udHJvbFNlbGVjdG9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZW5hYmxlRm9ybSgpIHtcclxuICAgICAgICBlbmFibGVGb3JtKHRoaXMuZm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpc2FibGVGb3JtKCkge1xyXG4gICAgICAgIGRpc2FibGVGb3JtKHRoaXMuZm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNob3dNZXNzYWdlKHR5cGUsIHRpdGxlLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgc2hvd01lc3NhZ2UodGhpcy5mb3JtLCB0eXBlLCB0aXRsZSwgbWVzc2FnZSwgdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvd1N1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBzaG93TWVzc2FnZSh0aGlzLmZvcm0sICdzdWNjZXNzJywgdGhpcy5vcHRpb25zLmxvY2FsZS5zdWNjZXNzVGl0bGUsIG1lc3NhZ2UsIHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNob3dFcnJvck1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIHNob3dNZXNzYWdlKHRoaXMuZm9ybSwgJ2RhbmdlcicsIHRoaXMub3B0aW9ucy5sb2NhbGUuZXJyb3JUaXRsZSwgbWVzc2FnZSwgdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGlkZU1lc3NhZ2UoKSB7XHJcbiAgICAgICAgaGlkZU1lc3NhZ2UodGhpcy5mb3JtLCB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRPcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgIHNob3dFbGVtZW50KGVsZW1lbnQsIHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBoaWRlRWxlbWVudChlbGVtZW50LCB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZvcm1hdCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JGaWVsZHMgPSBbXTtcclxuICAgIFxyXG4gICAgZm9ybS5maW5kKCcuZGF0ZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICFtb21lbnQodGhpcy52YWx1ZSwgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS1kYXRlLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBmb3JtYXQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yRmllbGRzID0gW107XHJcbiAgICBcclxuICAgIGZvcm0uZmluZCgnLmRhdGV0aW1lJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICBpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIW1vbWVudCh0aGlzLnZhbHVlLCBmb3JtYXQsIHRydWUpLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICBpbnB1dC5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCBpbnB1dC5hdHRyKCdkYXRhLWRhdGV0aW1lLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHRlc3RSZWdleCBmcm9tICcuLi92YWxpZGF0b3JzL3Rlc3RSZWdleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZm9ybSwgZm9ybWF0LCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgIGxldCBlcnJvckZpZWxkcyA9IFtdO1xyXG4gICAgXHJcbiAgICBmb3JtLmZpbmQoJy5lbWFpbCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIXRlc3RSZWdleChmb3JtYXQsIHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtZW1haWwtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyXG5pbXBvcnQgdGVzdE51bWJlciBmcm9tICcuLi92YWxpZGF0b3JzL3Rlc3ROdW1iZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yRmllbGRzID0gW107XHJcbiAgICBcclxuICAgIGZvcm0uZmluZCgnLm51bWJlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIXRlc3ROdW1iZXIodGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgICAgaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS1udW1iZXItbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyXG5pbXBvcnQgdmFsaWRhdGVQYXNzd29yZCBmcm9tICcuLi92YWxpZGF0b3JzL3ZhbGlkYXRlUGFzc3dvcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIHBhc3N3b3JkT3B0aW9ucywgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JGaWVsZHMgPSBbXTtcclxuICAgIGxldCBpc1ZhbGlkID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlUGFzc3dvcmQodmFsdWUsIHtcclxuICAgICAgICAgICAgbG93ZXI6IDEsXHJcbiAgICAgICAgICAgIHVwcGVyOiBwYXNzd29yZE9wdGlvbnMudXBwZXJjYXNlTGVuZ3RoLFxyXG4gICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgbnVtZXJpYzogcGFzc3dvcmRPcHRpb25zLm51bWJlckxlbmd0aCxcclxuICAgICAgICAgICAgc3BlY2lhbDogcGFzc3dvcmRPcHRpb25zLnNwZWNpYWxMZW5ndGgsXHJcbiAgICAgICAgICAgIGxlbmd0aDogW3Bhc3N3b3JkT3B0aW9ucy5taW4sIHBhc3N3b3JkT3B0aW9ucy5tYXhdLFxyXG4gICAgICAgICAgICBiYWRXb3JkczogW10sXHJcbiAgICAgICAgICAgIGJhZFNlcXVlbmNlTGVuZ3RoOiAwLFxyXG4gICAgICAgICAgICBub1F3ZXJ0eVNlcXVlbmNlczogZmFsc2UsXHJcbiAgICAgICAgICAgIG5vU2VxdWVudGlhbDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGZvcm0uZmluZCgnLnBhc3N3b3JkJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGlmIChzaG91bGRCZUNoZWNrKGlucHV0KSAmJiAhaXNWYWxpZCh0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBpbnB1dC5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCBpbnB1dC5hdHRyKCdkYXRhLXBhc3N3b3JkLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZm9ybSwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JGaWVsZHMgPSBbXTtcclxuICAgIGxldCBwYXNzd29yZElucHV0cyA9IGZvcm0uZmluZCgnLnBhc3N3b3JkJyk7XHJcbiAgICBcclxuICAgIGZvcm0uZmluZCgnLnJlcGFzc3dvcmQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpICE9PSBwYXNzd29yZElucHV0cy52YWwoKSkge1xyXG4gICAgICAgICAgICBpbnB1dC5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCBpbnB1dC5hdHRyKCdkYXRhLXJlcGFzc3dvcmQtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyXG5pbXBvcnQgdGVzdFJlZ2V4IGZyb20gJy4uL3ZhbGlkYXRvcnMvdGVzdFJlZ2V4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBmb3JtYXQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yRmllbGRzID0gW107XHJcbiAgICBcclxuICAgIGZvcm0uZmluZCgnLnJlYWxseS1zaW1wbGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICF0ZXN0UmVnZXgoZm9ybWF0LCB0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBpbnB1dC5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCBpbnB1dC5hdHRyKCdkYXRhLXJlYWxseS1zaW1wbGUtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyXG5pbXBvcnQgdGVzdFJlZ2V4IGZyb20gJy4uL3ZhbGlkYXRvcnMvdGVzdFJlZ2V4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JGaWVsZHMgPSBbXTtcclxuICAgIFxyXG4gICAgZm9ybS5maW5kKCcucmVnZXgnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBpbnB1dC5hdHRyKCdkYXRhLXJlZ2V4Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICF0ZXN0UmVnZXgobmV3IFJlZ0V4cChyZWdleCksIHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtbWVzc2FnZScpIHx8IGlucHV0LmF0dHIoJ2RhdGEtcmVnZXgtbWVzc2FnZScpKTtcclxuICAgICAgICAgICAgZXJyb3JGaWVsZHMucHVzaChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBlcnJvckZpZWxkcztcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yRmllbGRzID0gW107XHJcbiAgICBcclxuICAgIGxldCBuYW1lcyA9IHt9O1xyXG4gICAgZm9ybS5maW5kKCcucmVxdWlyZWQ6cmFkaW8sIC5yZXF1aXJlZDpjaGVja2JveCcpLm5vdCgnW2RhdGEtaWdub3JlPVwidmFsaWRhdGVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubmFtZSBpbiBuYW1lcykge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGZvcm0uZmluZChgaW5wdXRbbmFtZT1cIiR7dGhpcy5uYW1lfVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gaW5wdXQuZmlsdGVyKCc6Y2hlY2tlZCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JGaWVsZHMuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS1yZXF1aXJlZC1tZXNzYWdlJykgfHwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hbWVzW3RoaXMubmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBmb3JtLmZpbmQoJy5yZXF1aXJlZCcpLmZpbHRlcignaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKS5ub3QoJy50dC1oaW50LCA6cmFkaW8sIDpjaGVja2JveCwgW2RhdGEtaWdub3JlPVwidmFsaWRhdGVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3QgdmFsID0gaW5wdXQudmFsKCkgfHwgJyc7XHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBpbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09PSAwIHx8IHZhbCA9PT0gcGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS1yZXF1aXJlZC1tZXNzYWdlJykgfHwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgZXJyb3JGaWVsZHMucHVzaChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBlcnJvckZpZWxkcztcclxufTtcclxuIiwiaW1wb3J0IHNob3VsZEJlQ2hlY2sgZnJvbSAnLi4vdXRpbHMvc2hvdWxkQmVDaGVjayc7XHJcbmltcG9ydCB0ZXN0UmVnZXggZnJvbSAnLi4vdmFsaWRhdG9ycy90ZXN0UmVnZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZvcm1hdCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JGaWVsZHMgPSBbXTtcclxuICAgIFxyXG4gICAgZm9ybS5maW5kKCcuc2ltcGxlJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzaG91bGRCZUNoZWNrKGlucHV0KSAmJiAhdGVzdFJlZ2V4KGZvcm1hdCwgdGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgICAgaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS1zaW1wbGUtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZvcm1hdCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JGaWVsZHMgPSBbXTtcclxuICAgIFxyXG4gICAgZm9ybS5maW5kKCcudGltZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICFtb21lbnQodGhpcy52YWx1ZSwgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS10aW1lLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHRlc3RSZWdleCBmcm9tICcuLi92YWxpZGF0b3JzL3Rlc3RSZWdleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZm9ybSwgZm9ybWF0LCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgIGxldCBlcnJvckZpZWxkcyA9IFtdO1xyXG4gICAgXHJcbiAgICBmb3JtLmZpbmQoJy51cmwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIXRlc3RSZWdleChmb3JtYXQsIHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtdXJsLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCIvKipcclxuICogRW11bGF0ZSBGb3JtRGF0YSBmb3Igc29tZSBicm93c2Vyc1xyXG4gKiBNSVQgTGljZW5zZVxyXG4gKiAoYykgMjAxMCBGcmFuw6dvaXMgZGUgTWV0elxyXG4gKi9cclxuKGZ1bmN0aW9uICh3KSB7XHJcbiAgICBpZiAody5Gb3JtRGF0YSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gRm9ybURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5mYWtlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5ID0gJy0tLS0tLS0tRm9ybURhdGEnICsgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLl9maWVsZHMgPSBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgRm9ybURhdGEucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZmllbGRzLnB1c2goW2tleSwgdmFsdWVdKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIEZvcm1EYXRhLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYm91bmRhcnkgPSB0aGlzLmJvdW5kYXJ5O1xyXG4gICAgICAgIHZhciBib2R5ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGJvZHkgKz0gJy0tJyArIGJvdW5kYXJ5ICsgJ1xcclxcbic7XHJcbiAgICAgICAgICAgIC8vIGZpbGUgdXBsb2FkXHJcbiAgICAgICAgICAgIGlmIChmaWVsZFsxXS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsZSA9IGZpZWxkWzFdO1xyXG4gICAgICAgICAgICAgICAgYm9keSArPSAnQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVxcJycgKyBmaWVsZFswXSArICdcXCc7IGZpbGVuYW1lPVxcJycgKyBmaWxlLm5hbWUgKyAnXFwnXFxyXFxuJztcclxuICAgICAgICAgICAgICAgIGJvZHkgKz0gJ0NvbnRlbnQtVHlwZTogJyArIGZpbGUudHlwZSArICdcXHJcXG5cXHJcXG4nO1xyXG4gICAgICAgICAgICAgICAgYm9keSArPSBmaWxlLmdldEFzQmluYXJ5KCkgKyAnXFxyXFxuJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvZHkgKz0gJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cXCcnICsgZmllbGRbMF0gKyAnXFwnO1xcclxcblxcclxcbic7XHJcbiAgICAgICAgICAgICAgICBib2R5ICs9IGZpZWxkWzFdICsgJ1xcclxcbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBib2R5ICs9ICctLScgKyBib3VuZGFyeSArICctLSc7XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB3LkZvcm1EYXRhID0gRm9ybURhdGE7XHJcbiAgICBcclxufSkod2luZG93KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQsIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGhlaWdodDogJ2hpZGUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJ2hpZGUnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ2hpZGUnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICdoaWRlJyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnaGlkZSdcclxuICAgIH0sIGFuaW1hdGlvbkR1cmF0aW9uKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcclxuICAgIGlmICh3aW5kb3cuX19OSUNFRk9STV9ERUJVR19fICYmIGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydbIE5pY2VGb3JtIF0gJywgLi4uYXJnc10pO1xyXG4gICAgfVxyXG59O1xyXG4iLCIvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUzOTIzNDQvc2VuZGluZy1tdWx0aXBhcnQtZm9ybWRhdGEtd2l0aC1qcXVlcnktYWpheFxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgICQuZm4uc2VyaWFsaXplV2l0aEZpbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBREQgRklMRSBUTyBQQVJBTSBBSkFYXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybS5maW5kKCdpbnB1dFt0eXBlPWZpbGVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGlucHV0KSB7XHJcbiAgICAgICAgICAgICQuZWFjaChpbnB1dC5maWxlcywgZnVuY3Rpb24gKGksIGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChpbnB1dC5uYW1lLCBmaWxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICAgICAkLmVhY2gocGFyYW1zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgICB9O1xyXG4gICAgXHJcbn0pKGpRdWVyeSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChjb250cm9sKSA9PiB7XHJcbiAgICBpZiAoY29udHJvbC5pcygnW2RhdGEtaWdub3JlPVwidmFsaWRhdGVcIl0nKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGNvbnRyb2wuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChjb250cm9sLmhhc0NsYXNzKCdyZXF1aXJlZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB2YWwgPSBjb250cm9sLnZhbCgpIHx8ICcnO1xyXG4gICAgICAgIHJldHVybiB2YWwubGVuZ3RoID4gMDtcclxuICAgIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQsIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0b3AoKS5jc3MoJ2hlaWdodCcsICcnKS5hbmltYXRlKHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGhlaWdodDogJ3Nob3cnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJ3Nob3cnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ3Nob3cnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICdzaG93JyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnc2hvdydcclxuICAgIH0sIGFuaW1hdGlvbkR1cmF0aW9uLCAoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jc3MoJ2hlaWdodCcsICcnKTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IHtcclxuICAgIHJldHVybiAhaXNOYU4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAocmVnZXgsIHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3Qoc3RyaW5nKTtcclxufTtcclxuIiwiLypcclxuIFBhc3N3b3JkIFZhbGlkYXRvciAwLjFcclxuIChjKSAyMDA3IFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPlxyXG4gTUlUIExpY2Vuc2VcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocHcsIG9wdGlvbnMpIHtcclxuICAgIC8vIGRlZmF1bHQgb3B0aW9ucyAoYWxsb3dzIGFueSBwYXNzd29yZClcclxuICAgIHZhciBvID0ge1xyXG4gICAgICAgIGxvd2VyOiAwLFxyXG4gICAgICAgIHVwcGVyOiAwLFxyXG4gICAgICAgIGFscGhhOiAwLCAvKiBsb3dlciArIHVwcGVyICovXHJcbiAgICAgICAgbnVtZXJpYzogMCxcclxuICAgICAgICBzcGVjaWFsOiAwLFxyXG4gICAgICAgIGxlbmd0aDogWzAsIEluZmluaXR5XSxcclxuICAgICAgICBjdXN0b206IFsvKiByZWdleGVzIGFuZC9vciBmdW5jdGlvbnMgKi9dLFxyXG4gICAgICAgIGJhZFdvcmRzOiBbXSxcclxuICAgICAgICBiYWRTZXF1ZW5jZUxlbmd0aDogMCxcclxuICAgICAgICBub1F3ZXJ0eVNlcXVlbmNlczogZmFsc2UsXHJcbiAgICAgICAgbm9TZXF1ZW50aWFsOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIG9bcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciByZSA9IHtcclxuICAgICAgICBsb3dlcjogL1thLXpdL2csXHJcbiAgICAgICAgdXBwZXI6IC9bQS1aXS9nLFxyXG4gICAgICAgIGFscGhhOiAvW0EtWl0vZ2ksXHJcbiAgICAgICAgbnVtZXJpYzogL1swLTldL2csXHJcbiAgICAgICAgc3BlY2lhbDogL1tcXFdfXS9nXHJcbiAgICB9O1xyXG4gICAgdmFyIHJ1bGU7XHJcbiAgICB2YXIgaTtcclxuICAgIFxyXG4gICAgLy8gZW5mb3JjZSBtaW4vbWF4IGxlbmd0aFxyXG4gICAgaWYgKHB3Lmxlbmd0aCA8IG8ubGVuZ3RoWzBdIHx8IHB3Lmxlbmd0aCA+IG8ubGVuZ3RoWzFdKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBlbmZvcmNlIGxvd2VyL3VwcGVyL2FscGhhL251bWVyaWMvc3BlY2lhbCBydWxlc1xyXG4gICAgZm9yIChydWxlIGluIHJlKSB7XHJcbiAgICAgICAgaWYgKChwdy5tYXRjaChyZVtydWxlXSkgfHwgW10pLmxlbmd0aCA8IG9bcnVsZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gZW5mb3JjZSB3b3JkIGJhbiAoY2FzZSBpbnNlbnNpdGl2ZSlcclxuICAgIGZvciAoaSA9IDA7IGkgPCBvLmJhZFdvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHB3LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihvLmJhZFdvcmRzW2ldLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gZW5mb3JjZSB0aGUgbm8gc2VxdWVudGlhbCwgaWRlbnRpY2FsIGNoYXJhY3RlcnMgcnVsZVxyXG4gICAgaWYgKG8ubm9TZXF1ZW50aWFsICYmIC8oW1xcU1xcc10pXFwxLy50ZXN0KHB3KSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gZW5mb3JjZSBhbHBoYW51bWVyaWMvcXdlcnR5IHNlcXVlbmNlIGJhbiBydWxlc1xyXG4gICAgaWYgKG8uYmFkU2VxdWVuY2VMZW5ndGgpIHtcclxuICAgICAgICB2YXIgbG93ZXIgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xyXG4gICAgICAgIHZhciB1cHBlciA9IGxvd2VyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIG51bWJlcnMgPSAnMDEyMzQ1Njc4OSc7XHJcbiAgICAgICAgdmFyIHF3ZXJ0eSA9ICdxd2VydHl1aW9wYXNkZmdoamtsenhjdmJubSc7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gby5iYWRTZXF1ZW5jZUxlbmd0aCAtIDE7XHJcbiAgICAgICAgdmFyIHNlcSA9ICdfJyArIHB3LnNsaWNlKDAsIHN0YXJ0KTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGkgPSBzdGFydDsgaSA8IHB3Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNlcSA9IHNlcS5zbGljZSgxKSArIHB3LmNoYXJBdChpKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbG93ZXIuaW5kZXhPZihzZXEpID4gLTEgfHxcclxuICAgICAgICAgICAgICAgIHVwcGVyLmluZGV4T2Yoc2VxKSA+IC0xIHx8XHJcbiAgICAgICAgICAgICAgICBudW1iZXJzLmluZGV4T2Yoc2VxKSA+IC0xIHx8XHJcbiAgICAgICAgICAgICAgICAoby5ub1F3ZXJ0eVNlcXVlbmNlcyAmJiBxd2VydHkuaW5kZXhPZihzZXEpID4gLTEpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBlbmZvcmNlIGN1c3RvbSByZWdleC9mdW5jdGlvbiBydWxlc1xyXG4gICAgZm9yIChpID0gMDsgaSA8IG8uY3VzdG9tLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcnVsZSA9IG8uY3VzdG9tW2ldO1xyXG4gICAgICAgIGlmIChydWxlIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgIGlmICghcnVsZS50ZXN0KHB3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKCFydWxlKHB3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBncmVhdCBzdWNjZXNzIVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlUGFzc3dvcmQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXSwic291cmNlUm9vdCI6IiJ9