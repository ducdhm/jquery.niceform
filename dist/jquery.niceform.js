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
    url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/log */ "./src/utils/log.js");











/* harmony default export */ __webpack_exports__["default"] = (function (form, options) {
  var errorFields = [];
  var resultRequired = Object(_rules_checkRequiredFields__WEBPACK_IMPORTED_MODULE_0__["default"])(form, options.locale.requiredErrorMessage);

  if (resultRequired.length > 0) {
    errorFields = errorFields.concat(resultRequired);
  }

  if (typeof window.moment === 'undefined') {
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_10__["default"])("WARN :: Can not find \"moment\", ignore \".date\", \".datetime\", \".time\" fields");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OaWNlRm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTmljZUZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvX3Nob3dFcnJvckZpZWxkLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2RlZmF1bHRzL2hpZGVFcnJvci5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvb25BamF4RXJyb3IuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZGVmYXVsdHMvb25BamF4U3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9kZWZhdWx0cy9wcm9jZXNzQWpheFJlc3BvbnNlLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2RlZmF1bHRzL3Nob3dFcnJvci5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9mb3JtL2NsZWFyVmFsdWUuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZm9ybS9kaXNhYmxlRm9ybS5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9mb3JtL2VuYWJsZUZvcm0uanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZm9ybS9oaWRlTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9mb3JtL3Bvc3RGb3JtLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL2Zvcm0vc2hvd01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvZm9ybS92YWxpZGF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvanF1ZXJ5Lm5pY2Vmb3JtLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL25pY2Vmb3JtLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrRGF0ZUZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja0RhdGVUaW1lRmllbGRzLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrRW1haWxGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tOdW1iZXJGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tQYXNzd29yZEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja1JlUGFzc3dvcmRGaWVsZHMuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvcnVsZXMvY2hlY2tSZWdleEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja1JlcXVpcmVkRmllbGRzLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3J1bGVzL2NoZWNrVGltZUZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy9ydWxlcy9jaGVja1VybEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy91dGlscy9lbXVsYXRlRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvdXRpbHMvaGlkZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vLi9zcmMvdXRpbHMvbG9nLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3V0aWxzL3NlcmlhbGl6ZVdpdGhGaWxlcy5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy91dGlscy9zaG91bGRCZUNoZWNrLmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3V0aWxzL3Nob3dFbGVtZW50LmpzIiwid2VicGFjazovL05pY2VGb3JtLy4vc3JjL3ZhbGlkYXRvcnMvdGVzdE51bWJlci5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy92YWxpZGF0b3JzL3Rlc3RSZWdleC5qcyIsIndlYnBhY2s6Ly9OaWNlRm9ybS8uL3NyYy92YWxpZGF0b3JzL3ZhbGlkYXRlUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vTmljZUZvcm0vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJmb3JtIiwiZmllbGQiLCJtZXNzYWdlIiwiZm9ybUdyb3VwIiwiY2xvc2VzdCIsImFkZENsYXNzIiwiZXJyb3JNZXNzYWdlRWwiLCJmaW5kIiwibGVuZ3RoIiwiJCIsImFmdGVyIiwiaHRtbCIsIm5pY2Vmb3JtIiwib3B0aW9ucyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsIndpbmRvdyIsIl9fTklDRUZPUk1fREVCVUdfXyIsInBvc3RGb3JtRW5hYmxlZCIsInBvc3RVcmwiLCJhamF4IiwidHlwZSIsImRhdGFUeXBlIiwicGFzc3dvcmQiLCJyZWdleCIsImVtYWlsIiwidXJsIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJsb2NhbGUiLCJ2YWxpZGF0ZSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInByb2Nlc3NBamF4UmVzcG9uc2UiLCJvblZhbGlkIiwib25JbnZhbGlkIiwib25CZWZvcmVTZXJpYWxpemVGb3JtIiwib25CZWZvcmVQb3N0Rm9ybSIsIm9uQWpheFN1Y2Nlc3MiLCJvbkFqYXhFcnJvciIsImRhdGUiLCJ0aW1lIiwiZGF0ZXRpbWUiLCJzdWNjZXNzVGl0bGUiLCJzdWNjZXNzTWVzc2FnZSIsImVycm9yVGl0bGUiLCJpbnZhbGlkRXJyb3JNZXNzYWdlIiwicmVxdWlyZWRFcnJvck1lc3NhZ2UiLCJkYXRlRXJyb3JNZXNzYWdlIiwidGltZUVycm9yTWVzc2FnZSIsImRhdGV0aW1lRXJyb3JNZXNzYWdlIiwiZW1haWxFcnJvck1lc3NhZ2UiLCJudW1iZXJFcnJvck1lc3NhZ2UiLCJ1cmxFcnJvck1lc3NhZ2UiLCJwYXNzd29yZEVycm9yTWVzc2FnZSIsInJlcGFzc3dvcmRFcnJvck1lc3NhZ2UiLCJ1bmtub3duRXJyb3JNZXNzYWdlIiwianFYaHIiLCJyZXNwb25zZUpTT04iLCJlcnJvckZpZWxkcyIsImZvckVhY2giLCJlcnJvciIsInNob3dFcnJvckZpZWxkIiwibmFtZSIsInRpbWVyIiwicmVzcCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJtaW4iLCJtYXgiLCJzcGVjaWFsTGVuZ3RoIiwidXBwZXJjYXNlTGVuZ3RoIiwibnVtYmVyTGVuZ3RoIiwic3RhdHVzIiwiY29udHJvbFNlbGVjdG9yIiwibm90IiwiZWFjaCIsImNvbnRyb2wiLCJpc1NlbGVjdCIsImlzIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZWxlY3RlZEluZGV4IiwicHJvcCIsInZhbCIsInJlYWRPbmx5Iiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJnZXRBdHRyaWJ1dGUiLCJmb3JtTWVzc2FnZSIsImhpZGVFbGVtZW50IiwiaXNGb3JtRGF0YSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjYWxsIiwiZGF0YSIsInNlcmlhbGl6ZVdpdGhGaWxlcyIsInNlcmlhbGl6ZSIsImRpc2FibGVGb3JtIiwiYWpheE9wdGlvbnMiLCJzdWNjZXNzIiwidGV4dFN0YXR1cyIsImVuYWJsZUZvcm0iLCJpc1N1Y2Nlc3MiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiYmVmb3JlU2VuZCIsInhociIsImZha2UiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYm91bmRhcnkiLCJzZW5kIiwic2VuZEFzQmluYXJ5IiwidG9TdHJpbmciLCJlIiwiYWxlcnQiLCJ0aXRsZSIsInByZXBlbmQiLCJmb3JtQ29udGVudCIsInNob3dFbGVtZW50IiwicmVzdWx0UmVxdWlyZWQiLCJjaGVja1JlcXVpcmVkRmllbGRzIiwiY29uY2F0IiwibW9tZW50IiwibG9nIiwicmVzdWx0RGF0ZVRpbWUiLCJjaGVja0RhdGVUaW1lRmllbGRzIiwicmVzdWx0RGF0ZSIsImNoZWNrRGF0ZUZpZWxkcyIsInJlc3VsdFRpbWUiLCJjaGVja1RpbWVGaWVsZHMiLCJyZXN1bHRFbWFpbCIsImNoZWNrRW1haWxGaWVsZHMiLCJyZXN1bHROdW1iZXIiLCJjaGVja051bWJlckZpZWxkcyIsInJlc3VsdFVybCIsImNoZWNrVXJsRmllbGRzIiwicmVzdWx0UGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkRmllbGRzIiwicmVzdWx0UGFzc3dvcmRDb25maXJtIiwiY2hlY2tSZVBhc3N3b3JkRmllbGRzIiwicmVzdWx0UmVnZXgiLCJjaGVja1JlZ2V4RmllbGRzIiwicmVzdWx0Q3VzdG9tIiwiZm4iLCJjb25maWciLCJOaWNlRm9ybSIsInByb3RvdHlwZSIsInJlc3QiLCJhcHBseSIsInJlcXVpcmUiLCJqcXVlcnkiLCJleHRlbmQiLCJERUZBVUxUUyIsIm9mZiIsIm9uIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUZvcm0iLCJwb3N0Rm9ybSIsImhpZGVNZXNzYWdlIiwiY2xlYXJWYWx1ZSIsInNob3dNZXNzYWdlIiwiZWxlbWVudCIsImRlZmF1bHRzIiwiZm9ybWF0IiwiZXJyb3JNZXNzYWdlIiwiaW5wdXQiLCJzaG91bGRCZUNoZWNrIiwidmFsdWUiLCJpc1ZhbGlkIiwicHVzaCIsInRlc3RSZWdleCIsInRlc3ROdW1iZXIiLCJwYXNzd29yZE9wdGlvbnMiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwibG93ZXIiLCJ1cHBlciIsImFscGhhIiwibnVtZXJpYyIsInNwZWNpYWwiLCJiYWRXb3JkcyIsImJhZFNlcXVlbmNlTGVuZ3RoIiwibm9Rd2VydHlTZXF1ZW5jZXMiLCJub1NlcXVlbnRpYWwiLCJwYXNzd29yZElucHV0cyIsIlJlZ0V4cCIsIm5hbWVzIiwiY2hlY2tlZCIsImZpbHRlciIsInBsYWNlaG9sZGVyIiwidyIsIkZvcm1EYXRhIiwiTWF0aCIsInJhbmRvbSIsIl9maWVsZHMiLCJhcHBlbmQiLCJrZXkiLCJib2R5IiwiZmlsZSIsImdldEFzQmluYXJ5Iiwic3RvcCIsImFuaW1hdGUiLCJvcGFjaXR5IiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJjb25zb2xlIiwiYXJncyIsImZvcm1EYXRhIiwiaW5kZXgiLCJmaWxlcyIsImkiLCJwYXJhbXMiLCJzZXJpYWxpemVBcnJheSIsImpRdWVyeSIsImhhc0NsYXNzIiwiY3NzIiwiaXNOYU4iLCJzdHJpbmciLCJ0ZXN0IiwicHciLCJvIiwiSW5maW5pdHkiLCJjdXN0b20iLCJwcm9wZXJ0eSIsInJlIiwicnVsZSIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwidG9VcHBlckNhc2UiLCJudW1iZXJzIiwicXdlcnR5Iiwic3RhcnQiLCJzZXEiLCJzbGljZSIsImNoYXJBdCIsIkZ1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7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QVlXLFFBQXBCLEVBQThCO0FBQ2pDLFVBQUksQ0FBQ1gsSUFBSSxDQUFDTixFQUFELENBQVQsRUFBZTtBQUNYLGVBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDSixHQXhGa0MsQ0EwRm5DOzs7QUFDQSxTQUFPLElBQVA7QUFDSDs7QUFFY2hELCtFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkdBLG9EIiwiZmlsZSI6ImpxdWVyeS5uaWNlZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk5pY2VGb3JtXCIsIFtcImpRdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJOaWNlRm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiTmljZUZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcXVlcnkubmljZWZvcm0uanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCAoZm9ybSwgZmllbGQsIG1lc3NhZ2UpID0+IHtcclxuICAgIGxldCBmb3JtR3JvdXAgPSBmaWVsZC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpO1xyXG4gICAgXHJcbiAgICBmaWVsZC5hZGRDbGFzcygnaXMtaW52YWxpZCcpO1xyXG4gICAgZm9ybUdyb3VwLmFkZENsYXNzKCdoYXMtZXJyb3InKTtcclxuICAgIFxyXG4gICAgbGV0IGVycm9yTWVzc2FnZUVsID0gZm9ybUdyb3VwLmZpbmQoJy5uZi1lcnJvci1tZXNzYWdlJyk7XHJcbiAgICBpZiAoZXJyb3JNZXNzYWdlRWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlRWwgPSAkKGA8ZGl2IGNsYXNzPVwibmYtZXJyb3ItbWVzc2FnZSB0ZXh0LWRhbmdlciBzbWFsbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2Rpdj5gKTtcclxuICAgICAgICBmaWVsZC5hZnRlcihlcnJvck1lc3NhZ2VFbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVycm9yTWVzc2FnZUVsLmh0bWwobWVzc2FnZSk7XHJcbiAgICBmb3JtLm5pY2Vmb3JtKCdzaG93RWxlbWVudCcsIGVycm9yTWVzc2FnZUVsKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGZvcm0sIG9wdGlvbnMpID0+IHtcclxuICAgIGZvcm0uZmluZCgnLmhhcy1lcnJvcicpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKTtcclxuICAgIGZvcm0uZmluZCgnLmlzLWludmFsaWQnKS5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpLmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsICcnKTtcclxuICAgIGZvcm0ubmljZWZvcm0oJ2hpZGVFbGVtZW50JywgZm9ybS5maW5kKCcubmYtZXJyb3ItbWVzc2FnZScpKTtcclxuICAgIGZvcm0ubmljZWZvcm0oJ2hpZGVNZXNzYWdlJyk7XHJcbn07XHJcbiIsImltcG9ydCBzaG93RXJyb3IgZnJvbSAnLi9zaG93RXJyb3InO1xyXG5pbXBvcnQgaGlkZUVycm9yIGZyb20gJy4vaGlkZUVycm9yJztcclxuaW1wb3J0IHByb2Nlc3NBamF4UmVzcG9uc2UgZnJvbSAnLi9wcm9jZXNzQWpheFJlc3BvbnNlJztcclxuaW1wb3J0IG9uQWpheFN1Y2Nlc3MgZnJvbSAnLi9vbkFqYXhTdWNjZXNzJztcclxuaW1wb3J0IG9uQWpheEVycm9yIGZyb20gJy4vb25BamF4RXJyb3InO1xyXG5pbXBvcnQgbG9jYWxlIGZyb20gJy4vbG9jYWxlJztcclxuaW1wb3J0IHBhc3N3b3JkIGZyb20gJy4vcGFzc3dvcmQnO1xyXG5cclxud2luZG93Ll9fTklDRUZPUk1fREVCVUdfXyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwb3N0Rm9ybUVuYWJsZWQ6IHRydWUsXHJcbiAgICBwb3N0VXJsOiBudWxsLFxyXG4gICAgXHJcbiAgICBhamF4OiB7XHJcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTidcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgXHJcbiAgICByZWdleDoge1xyXG4gICAgICAgIGVtYWlsOiAvXig/OlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldP3xbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pJC8sXHJcbiAgICAgICAgdXJsOiAvXihodHRwcz86XFwvXFwvKT8oW1xcZGEtelxcLi1dKylcXC4oW2EtelxcLl17Miw2fSkoW1xcL1xcdyBcXC4tXSopKlxcLz8kL1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IDIwMCxcclxuICAgIFxyXG4gICAgbG9jYWxlLFxyXG4gICAgXHJcbiAgICB2YWxpZGF0ZTogbnVsbCxcclxuICAgIFxyXG4gICAgc2hvd0Vycm9yLFxyXG4gICAgaGlkZUVycm9yLFxyXG4gICAgXHJcbiAgICBwcm9jZXNzQWpheFJlc3BvbnNlLFxyXG4gICAgXHJcbiAgICBvblZhbGlkOiBudWxsLFxyXG4gICAgb25JbnZhbGlkOiBudWxsLFxyXG4gICAgXHJcbiAgICBvbkJlZm9yZVNlcmlhbGl6ZUZvcm06IG51bGwsXHJcbiAgICBvbkJlZm9yZVBvc3RGb3JtOiBudWxsLFxyXG4gICAgXHJcbiAgICBvbkFqYXhTdWNjZXNzLFxyXG4gICAgb25BamF4RXJyb3JcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLy8gVGhlIGZvcm1hdCBvZiBcIi5kYXRlXCIgZmllbGRcclxuICAgIGRhdGU6ICdERC9NTS9ZWVlZJyxcclxuICAgIFxyXG4gICAgLy8gVGhlIGZvcm1hdCBvZiBcIi50aW1lXCIgZmllbGRcclxuICAgIHRpbWU6ICdISDptbScsXHJcbiAgICBcclxuICAgIC8vIFRoZSBmb3JtYXQgb2YgXCIuZGF0ZXRpbWVcIiBmaWVsZFxyXG4gICAgZGF0ZXRpbWU6ICdERC9NTS9ZWVlZIEhIOm1tJyxcclxuICAgIFxyXG4gICAgLy8gVGl0bGUgb2Ygc3VjY2VzcyBtZXNzYWdlIHdoZW4gc3VibWl0dGluZyBmb3JtIHN1Y2Nlc3NmdWxseVxyXG4gICAgc3VjY2Vzc1RpdGxlOiAnU3VjY2VzcyEnLFxyXG4gICAgXHJcbiAgICAvLyBDb250ZW50IG9mIHN1Y2Nlc3MgbWVzc2FnZSB3aGVuIHN1Ym1pdHRpbmcgZm9ybSBzdWNjZXNzZnVsbHlcclxuICAgIHN1Y2Nlc3NNZXNzYWdlOiAnVGhlIGZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCcsXHJcbiAgICBcclxuICAgIC8vIFRpdGxlIG9mIGVycm9yIG1lc3NhZ2Ugd2hlbiBmb3JtIGlzIGludmFsaWQgb3IgZXJyb3IgaW4gc3VibWl0dGluZyBmb3JtXHJcbiAgICBlcnJvclRpdGxlOiAnRXJyb3IhJyxcclxuICAgIFxyXG4gICAgLy8gQ29udGVudCBvZiBlcnJvciBtZXNzYWdlIHdoZW4gZm9ybSBpcyBpbnZhbGlkXHJcbiAgICBpbnZhbGlkRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNvcnJlY3QgeW91ciBpbnZhbGlkIGZpZWxkcyEnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5yZXF1aXJlZFwiIGZpZWxkXHJcbiAgICByZXF1aXJlZEVycm9yTWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi5kYXRlXCIgZmllbGRcclxuICAgIGRhdGVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIGRhdGUsIGl0IHNob3VsZCBiZSBsaWtlIDE0LzAyLzIwMDAnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi50aW1lXCIgZmllbGRcclxuICAgIHRpbWVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIHRpbWUsIGl0IHNob3VsZCBiZSBsaWtlIDE0OjAyJyxcclxuICAgIFxyXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBmb3IgXCIuZGF0ZXRpbWVcIiBmaWVsZFxyXG4gICAgZGF0ZXRpbWVFcnJvck1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIGRhdGUgdGltZSwgaXQgc2hvdWxkIGJlIGxpa2UgMTQvMDIvMjAwMCAxNDowMicsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLmVtYWlsXCIgZmllbGRcclxuICAgIGVtYWlsRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHRoZSBmb3JtYXQgb2YgeW91ciBlbWFpbCBhZGRyZXNzLCBpdCBzaG91bGQgcmVhZCBsaWtlIHNvbWVvbmVAc29tZXdoZXJlLmNvbScsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLm51bWJlclwiIGZpZWxkXHJcbiAgICBudW1iZXJFcnJvck1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgZGlnaXRzIG9ubHknLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIGZvciBcIi51cmxcIiBmaWVsZFxyXG4gICAgdXJsRXJyb3JNZXNzYWdlOiAnUGxlYXNlIGVudGVyIHZhbGlkIHdlYnNpdGUgYWRkcmVzcycsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLnBhc3N3b3JkXCIgZmllbGRcclxuICAgIHBhc3N3b3JkRXJyb3JNZXNzYWdlOiAnWW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBhbmQgaXQgbXVzdCBjb250YWluIG51bWJlcnMsIGxldHRlcnMgKGxvd2VyY2FzZSBhbmQgdXBwZXJjYXNlKSBhbmQgYXQgbGVhc3QgMSBzcGVjaWFsIGNoYXJhY3RlcicsXHJcbiAgICBcclxuICAgIC8vIEVycm9yIG1lc3NhZ2UgZm9yIFwiLnJlcGFzc3dvcmRcIiBmaWVsZFxyXG4gICAgcmVwYXNzd29yZEVycm9yTWVzc2FnZTogJ1BsZWFzZSBjb25maXJtIHlvdXIgcGFzc3dvcmQnLFxyXG4gICAgXHJcbiAgICAvLyBFcnJvciBtZXNzYWdlIHdoZW4gdW5rbm93biBpc3N1ZSBvY2N1cnNcclxuICAgIHVua25vd25FcnJvck1lc3NhZ2U6ICdTb3JyeSwgYW4gZXJyb3Igb2NjdXJyZWQgYXR0ZW1wdGluZyB0byBzdWJtaXQgdGhlIGZvcm0uIFBsZWFzZSBjb250YWN0IHRoZSBzaXRlIGFkbWluaXN0cmF0b3IgdG8gcmVzb2x2ZSEnLFxyXG59O1xyXG4iLCJpbXBvcnQgc2hvd0Vycm9yRmllbGQgZnJvbSAnLi9fc2hvd0Vycm9yRmllbGQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGpxWGhyLCBmb3JtLCBvcHRpb25zKSA9PiB7XHJcbiAgICBpZiAoanFYaHIucmVzcG9uc2VKU09OKSB7XHJcbiAgICAgICAgZm9ybS5uaWNlZm9ybSgnc2hvd0Vycm9yTWVzc2FnZScsIGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlIHx8IG9wdGlvbnMudW5rbm93bkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAganFYaHIucmVzcG9uc2VKU09OLmVycm9yRmllbGRzICYmIGpxWGhyLnJlc3BvbnNlSlNPTi5lcnJvckZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBzaG93RXJyb3JGaWVsZChmb3JtLCBmb3JtLmZpbmQoYFtuYW1lPVwiJHtlcnJvci5uYW1lfVwiXWApLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybS5uaWNlZm9ybSgnc2hvd0Vycm9yTWVzc2FnZScsIG9wdGlvbnMudW5rbm93bkVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcbn07XHJcbiIsImxldCB0aW1lcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXNwLCBmb3JtLCBvcHRpb25zKSA9PiB7XHJcbiAgICBmb3JtLm5pY2Vmb3JtKCdzaG93U3VjY2Vzc01lc3NhZ2UnLCByZXNwLm1lc3NhZ2UgfHwgb3B0aW9ucy5zdWNjZXNzTWVzc2FnZSk7XHJcbiAgICBcclxuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gZm9ybS5uaWNlZm9ybSgnaGlkZU1lc3NhZ2UnKSwgNTAwMCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8vIE1pbmltdW0gbGVuZ3RoIGZvciBwYXNzd29yZCBmaWVsZFxyXG4gICAgbWluOiA2LFxyXG4gICAgXHJcbiAgICAvLyBNYXhpbXVtIGxlbmd0aCBmb3IgcGFzc3dvcmQgZmllbGRcclxuICAgIG1heDogMzIsXHJcbiAgICBcclxuICAgIC8vIE51bWJlciBvZiByZXF1aXJlZCBzcGVjaWFsIGNoYXJhY3RlciBmb3IgcGFzc3dvcmQgZmllbGRcclxuICAgIHNwZWNpYWxMZW5ndGg6IDEsXHJcbiAgICBcclxuICAgIC8vIE51bWJlciBvZiByZXF1aXJlZCB1cHBlcmNhc2UgbGV0dGVyIGZvciBwYXNzd29yZCBmaWVsZFxyXG4gICAgdXBwZXJjYXNlTGVuZ3RoOiAxLFxyXG4gICAgXHJcbiAgICAvLyBOdW1iZXIgb2YgcmVxdWlyZWQgbnVtYmVyIGZvciBwYXNzd29yZCBmaWVsZFxyXG4gICAgbnVtYmVyTGVuZ3RoOiAxXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChyZXNwLCBmb3JtLCBvcHRpb25zKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcCAmJiByZXNwLnN0YXR1cztcclxufTtcclxuIiwiaW1wb3J0IHNob3dFcnJvckZpZWxkIGZyb20gJy4vX3Nob3dFcnJvckZpZWxkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBlcnJvckZpZWxkcywgb3B0aW9ucykgPT4ge1xyXG4gICAgZm9ybS5uaWNlZm9ybSgnc2hvd0Vycm9yTWVzc2FnZScsIG9wdGlvbnMubG9jYWxlLmludmFsaWRFcnJvck1lc3NhZ2UpO1xyXG4gICAgXHJcbiAgICBlcnJvckZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgIHNob3dFcnJvckZpZWxkKGZvcm0sIGZpZWxkLCBmaWVsZC5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnKSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiLyoqXHJcbiAqIENsZWFyIHZhbHVlIG9mIHRleHRib3gsIHRleHRhcmVhLiBVbmNoZWNrIGFsbCByYWRpbyBidXR0b24gYW5kIGNoZWNrYm94LiBBbmQgc2V0IHNlbGVjdGVkXHJcbiAqIGluZGV4IG9mIHNlbGVjdCBpcyAtMS4gTk9URTogTm90IGVmZmVjdCB3aXRoIGVsZW1lbnQgZGF0YS1pZ25vcmU9YGNsZWFyYFxyXG4gKiBAcGFyYW0ge2pRdWVyeX0gZm9ybSBqUXVlcnkgb2JqZWN0IG9mIGZvcm1cclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRyb2xTZWxlY3RvciBTZWxlY3RvciBvZiBjb250cm9scyB3aWxsIGJlIGNsZWFyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZm9ybSwgY29udHJvbFNlbGVjdG9yID0gJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0JykgPT4ge1xyXG4gICAgZm9ybS5maW5kKGNvbnRyb2xTZWxlY3Rvcikubm90KCdbZGF0YS1pZ25vcmU9XCJjbGVhclwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSAkKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ID0gY29udHJvbC5pcygnc2VsZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgaXNDaGVja2JveCA9IGNvbnRyb2wuaXMoJzpjaGVja2JveCcpO1xyXG4gICAgICAgIGNvbnN0IGlzUmFkaW8gPSBjb250cm9sLmlzKCc6cmFkaW8nKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaXNTZWxlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0NoZWNrYm94IHx8IGlzUmFkaW8pIHtcclxuICAgICAgICAgICAgY29udHJvbC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wudmFsKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGZvcm0pID0+IHtcclxuICAgIGZvcm0uZmluZCgnc2VsZWN0LCBpbnB1dCwgdGV4dGFyZWEnKS5lYWNoKGZ1bmN0aW9uICgpICB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luLXJlYWRvbmx5JywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGZvcm0uZmluZCgnYnV0dG9uJykuZWFjaChmdW5jdGlvbiAoKSAge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbi1kaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChmb3JtKSA9PiB7XHJcbiAgICBmb3JtLmZpbmQoJ3NlbGVjdCwgaW5wdXQsIHRleHRhcmVhJykuZWFjaChmdW5jdGlvbiAoKSAge1xyXG4gICAgICAgIGlmICghdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luLXJlYWRvbmx5JykpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkT25seSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBmb3JtLmZpbmQoJ2J1dHRvbicpLmVhY2goZnVuY3Rpb24gKCkgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbi1kaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IGhpZGVFbGVtZW50IGZyb20gJy4uL3V0aWxzL2hpZGVFbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBhbmltYXRpb25EdXJhdGlvbikgPT4ge1xyXG4gICAgbGV0IGZvcm1NZXNzYWdlID0gZm9ybS5maW5kKCcubmYtZm9ybS1tZXNzYWdlJyk7XHJcbiAgICBpZiAoZm9ybU1lc3NhZ2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlRWxlbWVudChmb3JtTWVzc2FnZSwgYW5pbWF0aW9uRHVyYXRpb24pO1xyXG59O1xyXG4iLCJpbXBvcnQgZGlzYWJsZUZvcm0gZnJvbSAnLi9kaXNhYmxlRm9ybSc7XHJcbmltcG9ydCBlbmFibGVGb3JtIGZyb20gJy4vZW5hYmxlRm9ybSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZm9ybSwgb3B0aW9ucykgPT4ge1xyXG4gICAgbGV0IGlzRm9ybURhdGEgPSBmb3JtLmF0dHIoJ2VuY3R5cGUnKSA9PT0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xyXG4gICAgbGV0IHBvc3RVcmwgPSBvcHRpb25zLnBvc3RVcmwgfHwgZm9ybS5hdHRyKCdhY3Rpb24nKSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZVNlcmlhbGl6ZUZvcm0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBvcHRpb25zLm9uQmVmb3JlU2VyaWFsaXplRm9ybS5jYWxsKHRoaXMsIGZvcm0sIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGEgPSBpc0Zvcm1EYXRhID8gZm9ybS5zZXJpYWxpemVXaXRoRmlsZXMoKSA6IGZvcm0uc2VyaWFsaXplKCk7XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZVBvc3RGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgZGF0YSA9IG9wdGlvbnMub25CZWZvcmVQb3N0Rm9ybS5jYWxsKHRoaXMsIGZvcm0sIG9wdGlvbnMsIGRhdGEpIHx8IGRhdGE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGlzYWJsZUZvcm0oZm9ybSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGFqYXhPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAuLi5vcHRpb25zLmFqYXgsXHJcbiAgICAgICAgICAgIHVybDogcG9zdFVybCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3AsIHRleHRTdGF0dXMsIGpxWGhyKSB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVGb3JtKGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgaXNTdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMucHJvY2Vzc0FqYXhSZXNwb25zZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3VjY2VzcyA9IG9wdGlvbnMucHJvY2Vzc0FqYXhSZXNwb25zZShyZXNwLCBmb3JtLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkFqYXhTdWNjZXNzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25BamF4U3VjY2Vzcy5jYWxsKHRoaXMsIHJlc3AsIGZvcm0sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uQWpheEVycm9yID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25BamF4RXJyb3IuY2FsbCh0aGlzLCBqcVhociwgZm9ybSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWGhyKSB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVGb3JtKGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25BamF4RXJyb3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uQWpheEVycm9yLmNhbGwodGhpcywganFYaHIsIGZvcm0sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaXNGb3JtRGF0YSkge1xyXG4gICAgICAgICAgICBhamF4T3B0aW9ucy5wcm9jZXNzRGF0YSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhamF4T3B0aW9ucy5jb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhamF4T3B0aW9ucy5iZWZvcmVTZW5kID0gZnVuY3Rpb24gKHhociwgb3B0aW9ucykgeyAvLyBldCB0b2MgIVxyXG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFlvdSBjYW4gdXNlIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmFuY29pczJtZXR6L2h0bWw1LWZvcm1kYXRhIGZvciBhIGZha2UgRm9ybURhdGEgb2JqZWN0XHJcbiAgICAgICAgICAgICAqIE9ubHkgd29yayB3aXRoIEZpcmVmb3ggMy42XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5mYWtlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PScgKyBkYXRhLmJvdW5kYXJ5KTtcclxuICAgICAgICAgICAgICAgIC8vIHdpdGggZmFrZSBGb3JtRGF0YSBvYmplY3QsIHdlIG11c3QgdXNlIHNlbmRBc0JpbmFyeVxyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kQXNCaW5hcnkoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgJC5hamF4KGFqYXhPcHRpb25zKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25BamF4RXJyb3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5vbkFqYXhFcnJvci5jYWxsKHRoaXMsIG51bGwsIGZvcm0sIG9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KG9wdGlvbnMudW5rbm93bkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgc2hvd0VsZW1lbnQgZnJvbSAnLi4vdXRpbHMvc2hvd0VsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIHR5cGUsIHRpdGxlLCBtZXNzYWdlLCBhbmltYXRpb25EdXJhdGlvbikgPT4ge1xyXG4gICAgbGV0IGZvcm1NZXNzYWdlID0gZm9ybS5maW5kKCcubmYtZm9ybS1tZXNzYWdlJyk7XHJcbiAgICBpZiAoZm9ybU1lc3NhZ2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZm9ybU1lc3NhZ2UgPSAkKGA8ZGl2IGNsYXNzPVwibmYtZm9ybS1tZXNzYWdlIGFsZXJ0XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvZGl2PmApO1xyXG4gICAgICAgIGZvcm0ucHJlcGVuZChmb3JtTWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBmb3JtTWVzc2FnZS5yZW1vdmVDbGFzcygnYWxlcnQtZGFuZ2VyIGFsZXJ0LWluZm8gYWxlcnQtc3VjY2VzcyBhbGVydC13YXJuaW5nJyk7XHJcbiAgICBcclxuICAgIGxldCBmb3JtQ29udGVudCA9IGBcclxuICAgICAgICA8YSBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibWVzc2FnZVwiPiZ0aW1lczs8L2E+XHJcbiAgICAgICAgPGI+JHt0aXRsZX08L2I+PGJyIC8+XHJcbiAgICAgICAgJHttZXNzYWdlfVxyXG4gICAgYDtcclxuICAgIFxyXG4gICAgZm9ybU1lc3NhZ2UuYWRkQ2xhc3ModHlwZSA9PT0gJ2Vycm9yJyA/ICdhbGVydC1kYW5nZXInIDogYGFsZXJ0LSR7dHlwZX1gKTtcclxuICAgIGZvcm1NZXNzYWdlLmh0bWwoZm9ybUNvbnRlbnQpO1xyXG4gICAgc2hvd0VsZW1lbnQoZm9ybU1lc3NhZ2UsIGFuaW1hdGlvbkR1cmF0aW9uKTtcclxufTtcclxuIiwiaW1wb3J0IGNoZWNrUmVxdWlyZWRGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tSZXF1aXJlZEZpZWxkcyc7XHJcbmltcG9ydCBjaGVja0RhdGVUaW1lRmllbGRzIGZyb20gJy4uL3J1bGVzL2NoZWNrRGF0ZVRpbWVGaWVsZHMnO1xyXG5pbXBvcnQgY2hlY2tEYXRlRmllbGRzIGZyb20gJy4uL3J1bGVzL2NoZWNrRGF0ZUZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1RpbWVGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tUaW1lRmllbGRzJztcclxuaW1wb3J0IGNoZWNrRW1haWxGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tFbWFpbEZpZWxkcyc7XHJcbmltcG9ydCBjaGVja051bWJlckZpZWxkcyBmcm9tICcuLi9ydWxlcy9jaGVja051bWJlckZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1Bhc3N3b3JkRmllbGRzIGZyb20gJy4uL3J1bGVzL2NoZWNrUGFzc3dvcmRGaWVsZHMnO1xyXG5pbXBvcnQgY2hlY2tSZVBhc3N3b3JkRmllbGRzIGZyb20gJy4uL3J1bGVzL2NoZWNrUmVQYXNzd29yZEZpZWxkcyc7XHJcbmltcG9ydCBjaGVja1JlZ2V4RmllbGRzIGZyb20gJy4uL3J1bGVzL2NoZWNrUmVnZXhGaWVsZHMnO1xyXG5pbXBvcnQgY2hlY2tVcmxGaWVsZHMgZnJvbSAnLi4vcnVsZXMvY2hlY2tVcmxGaWVsZHMnO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZm9ybSwgb3B0aW9ucykgPT4ge1xyXG4gICAgbGV0IGVycm9yRmllbGRzID0gW107XHJcbiAgICBsZXQgcmVzdWx0UmVxdWlyZWQgPSBjaGVja1JlcXVpcmVkRmllbGRzKGZvcm0sIG9wdGlvbnMubG9jYWxlLnJlcXVpcmVkRXJyb3JNZXNzYWdlKTtcclxuICAgIGlmIChyZXN1bHRSZXF1aXJlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0UmVxdWlyZWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5tb21lbnQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbG9nKGBXQVJOIDo6IENhbiBub3QgZmluZCBcIm1vbWVudFwiLCBpZ25vcmUgXCIuZGF0ZVwiLCBcIi5kYXRldGltZVwiLCBcIi50aW1lXCIgZmllbGRzYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCByZXN1bHREYXRlVGltZSA9IGNoZWNrRGF0ZVRpbWVGaWVsZHMoZm9ybSwgb3B0aW9ucy5sb2NhbGUuZGF0ZXRpbWUsIG9wdGlvbnMubG9jYWxlLmRhdGV0aW1lRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICBpZiAocmVzdWx0RGF0ZVRpbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHREYXRlVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZXN1bHREYXRlID0gY2hlY2tEYXRlRmllbGRzKGZvcm0sIG9wdGlvbnMubG9jYWxlLmRhdGUsIG9wdGlvbnMubG9jYWxlLmRhdGVFcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChyZXN1bHREYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0RGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZXN1bHRUaW1lID0gY2hlY2tUaW1lRmllbGRzKGZvcm0sIG9wdGlvbnMubG9jYWxlLnRpbWUsIG9wdGlvbnMubG9jYWxlLnRpbWVFcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChyZXN1bHRUaW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgcmVzdWx0RW1haWwgPSBjaGVja0VtYWlsRmllbGRzKGZvcm0sIG9wdGlvbnMucmVnZXguZW1haWwsIG9wdGlvbnMubG9jYWxlLmVtYWlsRXJyb3JNZXNzYWdlKTtcclxuICAgIGlmIChyZXN1bHRFbWFpbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0RW1haWwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgcmVzdWx0TnVtYmVyID0gY2hlY2tOdW1iZXJGaWVsZHMoZm9ybSwgb3B0aW9ucy5sb2NhbGUubnVtYmVyRXJyb3JNZXNzYWdlKTtcclxuICAgIGlmIChyZXN1bHROdW1iZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdE51bWJlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCByZXN1bHRVcmwgPSBjaGVja1VybEZpZWxkcyhmb3JtLCBvcHRpb25zLnJlZ2V4LnVybCwgb3B0aW9ucy5sb2NhbGUudXJsRXJyb3JNZXNzYWdlKTtcclxuICAgIGlmIChyZXN1bHRVcmwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yRmllbGRzID0gZXJyb3JGaWVsZHMuY29uY2F0KHJlc3VsdFVybCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCByZXN1bHRQYXNzd29yZCA9IGNoZWNrUGFzc3dvcmRGaWVsZHMoZm9ybSwgb3B0aW9ucy5wYXNzd29yZCwgb3B0aW9ucy5sb2NhbGUucGFzc3dvcmRFcnJvck1lc3NhZ2UpO1xyXG4gICAgaWYgKHJlc3VsdFBhc3N3b3JkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHRQYXNzd29yZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCByZXN1bHRQYXNzd29yZENvbmZpcm0gPSBjaGVja1JlUGFzc3dvcmRGaWVsZHMoZm9ybSwgb3B0aW9ucy5sb2NhbGUucmVwYXNzd29yZEVycm9yTWVzc2FnZSk7XHJcbiAgICBpZiAocmVzdWx0UGFzc3dvcmRDb25maXJtLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHRQYXNzd29yZENvbmZpcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgcmVzdWx0UmVnZXggPSBjaGVja1JlZ2V4RmllbGRzKGZvcm0pO1xyXG4gICAgaWYgKHJlc3VsdFJlZ2V4Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlcnJvckZpZWxkcyA9IGVycm9yRmllbGRzLmNvbmNhdChyZXN1bHRSZWdleCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy52YWxpZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGxldCByZXN1bHRDdXN0b20gPSBvcHRpb25zLnZhbGlkYXRlKGZvcm0sIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChyZXN1bHRDdXN0b20gJiYgcmVzdWx0Q3VzdG9tLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZXJyb3JGaWVsZHMgPSBlcnJvckZpZWxkcy5jb25jYXQocmVzdWx0Q3VzdG9tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChlcnJvckZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuc2hvd0Vycm9yID09PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMuc2hvd0Vycm9yKGZvcm0sIGVycm9yRmllbGRzLCBvcHRpb25zKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgTmljZUZvcm0gZnJvbSAnLi9uaWNlZm9ybSc7XHJcblxyXG4kLmZuLm5pY2Vmb3JtID0gZnVuY3Rpb24gKGNvbmZpZywgLi4ucmVzdCkge1xyXG4gICAgbGV0IGZvcm0gPSAkKHRoaXMpO1xyXG4gICAgbGV0IG5pY2Vmb3JtID0gZm9ybS5kYXRhKCduaWNlZm9ybScpO1xyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAobmljZWZvcm0gJiYgY29uZmlnIGluIE5pY2VGb3JtLnByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmljZWZvcm1bY29uZmlnXS5hcHBseShuaWNlZm9ybSwgcmVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIW5pY2Vmb3JtKSB7XHJcbiAgICAgICAgICAgIGZvcm0uZGF0YSgnbmljZWZvcm0nLCBuaWNlZm9ybSA9IG5ldyBOaWNlRm9ybShmb3JtLCBjb25maWcpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5pY2Vmb3JtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5pY2VGb3JtO1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxucmVxdWlyZSgnLi91dGlscy9lbXVsYXRlRm9ybURhdGEnKTtcclxucmVxdWlyZSgnLi91dGlscy9zZXJpYWxpemVXaXRoRmlsZXMnKTtcclxuXHJcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzLyc7XHJcbmltcG9ydCB2YWxpZGF0ZUZvcm0gZnJvbSAnLi9mb3JtL3ZhbGlkYXRlRm9ybSc7XHJcbmltcG9ydCBwb3N0Rm9ybSBmcm9tICcuL2Zvcm0vcG9zdEZvcm0nO1xyXG5pbXBvcnQgY2xlYXJWYWx1ZSBmcm9tICcuL2Zvcm0vY2xlYXJWYWx1ZSc7XHJcbmltcG9ydCBkaXNhYmxlRm9ybSBmcm9tICcuL2Zvcm0vZGlzYWJsZUZvcm0nO1xyXG5pbXBvcnQgZW5hYmxlRm9ybSBmcm9tICcuL2Zvcm0vZW5hYmxlRm9ybSc7XHJcbmltcG9ydCBzaG93TWVzc2FnZSBmcm9tICcuL2Zvcm0vc2hvd01lc3NhZ2UnO1xyXG5pbXBvcnQgaGlkZU1lc3NhZ2UgZnJvbSAnLi9mb3JtL2hpZGVNZXNzYWdlJztcclxuXHJcbmltcG9ydCBzaG93RWxlbWVudCBmcm9tICcuL3V0aWxzL3Nob3dFbGVtZW50JztcclxuaW1wb3J0IGhpZGVFbGVtZW50IGZyb20gJy4vdXRpbHMvaGlkZUVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmljZUZvcm0ge1xyXG4gICAgc3RhdGljIERFRkFVTFRTID0gZGVmYXVsdHM7XHJcbiAgICBzdGF0aWMgdmVyc2lvbiA9ICcxLjAuMSc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGZvcm0sIGNvbmZpZykge1xyXG4gICAgICAgIGlmICghZm9ybS5qcXVlcnkgfHwgZm9ybS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTmljZUZvcm0uREVGQVVMVFMsIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcclxuICAgICAgICBcclxuICAgICAgICBmb3JtLm9mZignc3VibWl0Jykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5oaWRlRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuaGlkZUVycm9yKGZvcm0sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVGb3JtKGZvcm0sIG9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25WYWxpZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25WYWxpZChmb3JtLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucG9zdEZvcm1FbmFibGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdEZvcm0oZm9ybSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25JbnZhbGlkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkludmFsaWQoZm9ybSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBmb3JtLm9uKCdjbGljaycsICdbZGF0YS1kaXNtaXNzPW1lc3NhZ2VdJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGlkZU1lc3NhZ2UoZm9ybSwgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsZWFyVmFsdWUoY29udHJvbFNlbGVjdG9yKSB7XHJcbiAgICAgICAgY2xlYXJWYWx1ZSh0aGlzLmZvcm0sIGNvbnRyb2xTZWxlY3Rvcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVuYWJsZUZvcm0oKSB7XHJcbiAgICAgICAgZW5hYmxlRm9ybSh0aGlzLmZvcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXNhYmxlRm9ybSgpIHtcclxuICAgICAgICBkaXNhYmxlRm9ybSh0aGlzLmZvcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG93TWVzc2FnZSh0eXBlLCB0aXRsZSwgbWVzc2FnZSkge1xyXG4gICAgICAgIHNob3dNZXNzYWdlKHRoaXMuZm9ybSwgdHlwZSwgdGl0bGUsIG1lc3NhZ2UsIHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNob3dTdWNjZXNzTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgc2hvd01lc3NhZ2UodGhpcy5mb3JtLCAnc3VjY2VzcycsIHRoaXMub3B0aW9ucy5sb2NhbGUuc3VjY2Vzc1RpdGxlLCBtZXNzYWdlLCB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG93RXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBzaG93TWVzc2FnZSh0aGlzLmZvcm0sICdkYW5nZXInLCB0aGlzLm9wdGlvbnMubG9jYWxlLmVycm9yVGl0bGUsIG1lc3NhZ2UsIHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhpZGVNZXNzYWdlKCkge1xyXG4gICAgICAgIGhpZGVNZXNzYWdlKHRoaXMuZm9ybSwgdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0T3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNob3dFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBzaG93RWxlbWVudChlbGVtZW50LCB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoaWRlRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgaGlkZUVsZW1lbnQoZWxlbWVudCwgdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBmb3JtYXQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yRmllbGRzID0gW107XHJcbiAgICBcclxuICAgIGZvcm0uZmluZCgnLmRhdGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGlmIChzaG91bGRCZUNoZWNrKGlucHV0KSAmJiAhbW9tZW50KHRoaXMudmFsdWUsIGZvcm1hdCwgdHJ1ZSkuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtZGF0ZS1tZXNzYWdlJykgfHwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgZXJyb3JGaWVsZHMucHVzaChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBlcnJvckZpZWxkcztcclxufTtcclxuIiwiaW1wb3J0IHNob3VsZEJlQ2hlY2sgZnJvbSAnLi4vdXRpbHMvc2hvdWxkQmVDaGVjayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZm9ybSwgZm9ybWF0LCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgIGxldCBlcnJvckZpZWxkcyA9IFtdO1xyXG4gICAgXHJcbiAgICBmb3JtLmZpbmQoJy5kYXRldGltZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICFtb21lbnQodGhpcy52YWx1ZSwgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS1kYXRldGltZS1tZXNzYWdlJykgfHwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgZXJyb3JGaWVsZHMucHVzaChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBlcnJvckZpZWxkcztcclxufTtcclxuIiwiaW1wb3J0IHNob3VsZEJlQ2hlY2sgZnJvbSAnLi4vdXRpbHMvc2hvdWxkQmVDaGVjayc7XHJcbmltcG9ydCB0ZXN0UmVnZXggZnJvbSAnLi4vdmFsaWRhdG9ycy90ZXN0UmVnZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZvcm1hdCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JGaWVsZHMgPSBbXTtcclxuICAgIFxyXG4gICAgZm9ybS5maW5kKCcuZW1haWwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICF0ZXN0UmVnZXgoZm9ybWF0LCB0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBpbnB1dC5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCBpbnB1dC5hdHRyKCdkYXRhLWVtYWlsLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHRlc3ROdW1iZXIgZnJvbSAnLi4vdmFsaWRhdG9ycy90ZXN0TnVtYmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgIGxldCBlcnJvckZpZWxkcyA9IFtdO1xyXG4gICAgXHJcbiAgICBmb3JtLmZpbmQoJy5udW1iZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICF0ZXN0TnVtYmVyKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtbnVtYmVyLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHZhbGlkYXRlUGFzc3dvcmQgZnJvbSAnLi4vdmFsaWRhdG9ycy92YWxpZGF0ZVBhc3N3b3JkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmb3JtLCBwYXNzd29yZE9wdGlvbnMsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yRmllbGRzID0gW107XHJcbiAgICBsZXQgaXNWYWxpZCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBhc3N3b3JkKHZhbHVlLCB7XHJcbiAgICAgICAgICAgIGxvd2VyOiAxLFxyXG4gICAgICAgICAgICB1cHBlcjogcGFzc3dvcmRPcHRpb25zLnVwcGVyY2FzZUxlbmd0aCxcclxuICAgICAgICAgICAgYWxwaGE6IDAsXHJcbiAgICAgICAgICAgIG51bWVyaWM6IHBhc3N3b3JkT3B0aW9ucy5udW1iZXJMZW5ndGgsXHJcbiAgICAgICAgICAgIHNwZWNpYWw6IHBhc3N3b3JkT3B0aW9ucy5zcGVjaWFsTGVuZ3RoLFxyXG4gICAgICAgICAgICBsZW5ndGg6IFtwYXNzd29yZE9wdGlvbnMubWluLCBwYXNzd29yZE9wdGlvbnMubWF4XSxcclxuICAgICAgICAgICAgYmFkV29yZHM6IFtdLFxyXG4gICAgICAgICAgICBiYWRTZXF1ZW5jZUxlbmd0aDogMCxcclxuICAgICAgICAgICAgbm9Rd2VydHlTZXF1ZW5jZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBub1NlcXVlbnRpYWw6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmb3JtLmZpbmQoJy5wYXNzd29yZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICBpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIWlzVmFsaWQodGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgICAgaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS1wYXNzd29yZC1tZXNzYWdlJykgfHwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgZXJyb3JGaWVsZHMucHVzaChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBlcnJvckZpZWxkcztcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yRmllbGRzID0gW107XHJcbiAgICBsZXQgcGFzc3dvcmRJbnB1dHMgPSBmb3JtLmZpbmQoJy5wYXNzd29yZCcpO1xyXG4gICAgXHJcbiAgICBmb3JtLmZpbmQoJy5yZXBhc3N3b3JkJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGlmIChpbnB1dC52YWwoKSAhPT0gcGFzc3dvcmRJbnB1dHMudmFsKCkpIHtcclxuICAgICAgICAgICAgaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS1yZXBhc3N3b3JkLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHRlc3RSZWdleCBmcm9tICcuLi92YWxpZGF0b3JzL3Rlc3RSZWdleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZm9ybSkgPT4ge1xyXG4gICAgbGV0IGVycm9yRmllbGRzID0gW107XHJcbiAgICBcclxuICAgIGZvcm0uZmluZCgnLnJlZ2V4JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gaW5wdXQuYXR0cignZGF0YS1yZWdleCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzaG91bGRCZUNoZWNrKGlucHV0KSAmJiAhdGVzdFJlZ2V4KG5ldyBSZWdFeHAocmVnZXgpLCB0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBpbnB1dC5hdHRyKCdkYXRhLWVycm9yLW1lc3NhZ2UnLCBpbnB1dC5hdHRyKCdkYXRhLW1lc3NhZ2UnKSB8fCBpbnB1dC5hdHRyKCdkYXRhLXJlZ2V4LW1lc3NhZ2UnKSk7XHJcbiAgICAgICAgICAgIGVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChmb3JtLCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgIGxldCBlcnJvckZpZWxkcyA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgbmFtZXMgPSB7fTtcclxuICAgIGZvcm0uZmluZCgnLnJlcXVpcmVkOnJhZGlvLCAucmVxdWlyZWQ6Y2hlY2tib3gnKS5ub3QoJ1tkYXRhLWlnbm9yZT1cInZhbGlkYXRlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5hbWUgaW4gbmFtZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBmb3JtLmZpbmQoYGlucHV0W25hbWU9XCIke3RoaXMubmFtZX1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGlucHV0LmZpbHRlcignOmNoZWNrZWQnKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGVycm9yRmllbGRzLmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtcmVxdWlyZWQtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYW1lc1t0aGlzLm5hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZm9ybS5maW5kKCcucmVxdWlyZWQnKS5maWx0ZXIoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykubm90KCcudHQtaGludCwgOnJhZGlvLCA6Y2hlY2tib3gsIFtkYXRhLWlnbm9yZT1cInZhbGlkYXRlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbCgpIHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gaW5wdXQuYXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCB8fCB2YWwgPT09IHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtcmVxdWlyZWQtbWVzc2FnZScpIHx8IGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGVycm9yRmllbGRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZXJyb3JGaWVsZHM7XHJcbn07XHJcbiIsImltcG9ydCBzaG91bGRCZUNoZWNrIGZyb20gJy4uL3V0aWxzL3Nob3VsZEJlQ2hlY2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZvcm0sIGZvcm1hdCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JGaWVsZHMgPSBbXTtcclxuICAgIFxyXG4gICAgZm9ybS5maW5kKCcudGltZScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKHNob3VsZEJlQ2hlY2soaW5wdXQpICYmICFtb21lbnQodGhpcy52YWx1ZSwgZm9ybWF0LCB0cnVlKS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgaW5wdXQuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJywgaW5wdXQuYXR0cignZGF0YS10aW1lLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCJpbXBvcnQgc2hvdWxkQmVDaGVjayBmcm9tICcuLi91dGlscy9zaG91bGRCZUNoZWNrJztcclxuaW1wb3J0IHRlc3RSZWdleCBmcm9tICcuLi92YWxpZGF0b3JzL3Rlc3RSZWdleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZm9ybSwgZm9ybWF0LCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgIGxldCBlcnJvckZpZWxkcyA9IFtdO1xyXG4gICAgXHJcbiAgICBmb3JtLmZpbmQoJy51cmwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2hvdWxkQmVDaGVjayhpbnB1dCkgJiYgIXRlc3RSZWdleChmb3JtYXQsIHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlucHV0LmF0dHIoJ2RhdGEtZXJyb3ItbWVzc2FnZScsIGlucHV0LmF0dHIoJ2RhdGEtdXJsLW1lc3NhZ2UnKSB8fCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlcnJvckZpZWxkcy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVycm9yRmllbGRzO1xyXG59O1xyXG4iLCIvKipcclxuICogRW11bGF0ZSBGb3JtRGF0YSBmb3Igc29tZSBicm93c2Vyc1xyXG4gKiBNSVQgTGljZW5zZVxyXG4gKiAoYykgMjAxMCBGcmFuw6dvaXMgZGUgTWV0elxyXG4gKi9cclxuKGZ1bmN0aW9uICh3KSB7XHJcbiAgICBpZiAody5Gb3JtRGF0YSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gRm9ybURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5mYWtlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5ID0gJy0tLS0tLS0tRm9ybURhdGEnICsgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLl9maWVsZHMgPSBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgRm9ybURhdGEucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZmllbGRzLnB1c2goW2tleSwgdmFsdWVdKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIEZvcm1EYXRhLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYm91bmRhcnkgPSB0aGlzLmJvdW5kYXJ5O1xyXG4gICAgICAgIHZhciBib2R5ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGJvZHkgKz0gJy0tJyArIGJvdW5kYXJ5ICsgJ1xcclxcbic7XHJcbiAgICAgICAgICAgIC8vIGZpbGUgdXBsb2FkXHJcbiAgICAgICAgICAgIGlmIChmaWVsZFsxXS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsZSA9IGZpZWxkWzFdO1xyXG4gICAgICAgICAgICAgICAgYm9keSArPSAnQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVxcJycgKyBmaWVsZFswXSArICdcXCc7IGZpbGVuYW1lPVxcJycgKyBmaWxlLm5hbWUgKyAnXFwnXFxyXFxuJztcclxuICAgICAgICAgICAgICAgIGJvZHkgKz0gJ0NvbnRlbnQtVHlwZTogJyArIGZpbGUudHlwZSArICdcXHJcXG5cXHJcXG4nO1xyXG4gICAgICAgICAgICAgICAgYm9keSArPSBmaWxlLmdldEFzQmluYXJ5KCkgKyAnXFxyXFxuJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvZHkgKz0gJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cXCcnICsgZmllbGRbMF0gKyAnXFwnO1xcclxcblxcclxcbic7XHJcbiAgICAgICAgICAgICAgICBib2R5ICs9IGZpZWxkWzFdICsgJ1xcclxcbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBib2R5ICs9ICctLScgKyBib3VuZGFyeSArICctLSc7XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB3LkZvcm1EYXRhID0gRm9ybURhdGE7XHJcbiAgICBcclxufSkod2luZG93KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQsIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGhlaWdodDogJ2hpZGUnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJ2hpZGUnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ2hpZGUnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICdoaWRlJyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnaGlkZSdcclxuICAgIH0sIGFuaW1hdGlvbkR1cmF0aW9uKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcclxuICAgIGlmICh3aW5kb3cuX19OSUNFRk9STV9ERUJVR19fICYmIGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydbIE5pY2VGb3JtIF0gJywgLi4uYXJnc10pO1xyXG4gICAgfVxyXG59O1xyXG4iLCIvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUzOTIzNDQvc2VuZGluZy1tdWx0aXBhcnQtZm9ybWRhdGEtd2l0aC1qcXVlcnktYWpheFxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgICQuZm4uc2VyaWFsaXplV2l0aEZpbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBREQgRklMRSBUTyBQQVJBTSBBSkFYXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybS5maW5kKCdpbnB1dFt0eXBlPWZpbGVdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGlucHV0KSB7XHJcbiAgICAgICAgICAgICQuZWFjaChpbnB1dC5maWxlcywgZnVuY3Rpb24gKGksIGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChpbnB1dC5uYW1lLCBmaWxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICAgICAkLmVhY2gocGFyYW1zLCBmdW5jdGlvbiAoaSwgdmFsKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCh2YWwubmFtZSwgdmFsLnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgICB9O1xyXG4gICAgXHJcbn0pKGpRdWVyeSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChjb250cm9sKSA9PiB7XHJcbiAgICBpZiAoY29udHJvbC5pcygnW2RhdGEtaWdub3JlPVwidmFsaWRhdGVcIl0nKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGNvbnRyb2wuYXR0cignZGF0YS1lcnJvci1tZXNzYWdlJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChjb250cm9sLmhhc0NsYXNzKCdyZXF1aXJlZCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB2YWwgPSBjb250cm9sLnZhbCgpIHx8ICcnO1xyXG4gICAgICAgIHJldHVybiB2YWwubGVuZ3RoID4gMDtcclxuICAgIH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQsIGFuaW1hdGlvbkR1cmF0aW9uKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0b3AoKS5jc3MoJ2hlaWdodCcsICcnKS5hbmltYXRlKHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGhlaWdodDogJ3Nob3cnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJ3Nob3cnLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ3Nob3cnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICdzaG93JyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnc2hvdydcclxuICAgIH0sIGFuaW1hdGlvbkR1cmF0aW9uLCAoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jc3MoJ2hlaWdodCcsICcnKTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IHtcclxuICAgIHJldHVybiAhaXNOYU4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAocmVnZXgsIHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3Qoc3RyaW5nKTtcclxufTtcclxuIiwiLypcclxuIFBhc3N3b3JkIFZhbGlkYXRvciAwLjFcclxuIChjKSAyMDA3IFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPlxyXG4gTUlUIExpY2Vuc2VcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocHcsIG9wdGlvbnMpIHtcclxuICAgIC8vIGRlZmF1bHQgb3B0aW9ucyAoYWxsb3dzIGFueSBwYXNzd29yZClcclxuICAgIHZhciBvID0ge1xyXG4gICAgICAgIGxvd2VyOiAwLFxyXG4gICAgICAgIHVwcGVyOiAwLFxyXG4gICAgICAgIGFscGhhOiAwLCAvKiBsb3dlciArIHVwcGVyICovXHJcbiAgICAgICAgbnVtZXJpYzogMCxcclxuICAgICAgICBzcGVjaWFsOiAwLFxyXG4gICAgICAgIGxlbmd0aDogWzAsIEluZmluaXR5XSxcclxuICAgICAgICBjdXN0b206IFsvKiByZWdleGVzIGFuZC9vciBmdW5jdGlvbnMgKi9dLFxyXG4gICAgICAgIGJhZFdvcmRzOiBbXSxcclxuICAgICAgICBiYWRTZXF1ZW5jZUxlbmd0aDogMCxcclxuICAgICAgICBub1F3ZXJ0eVNlcXVlbmNlczogZmFsc2UsXHJcbiAgICAgICAgbm9TZXF1ZW50aWFsOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIG9bcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciByZSA9IHtcclxuICAgICAgICBsb3dlcjogL1thLXpdL2csXHJcbiAgICAgICAgdXBwZXI6IC9bQS1aXS9nLFxyXG4gICAgICAgIGFscGhhOiAvW0EtWl0vZ2ksXHJcbiAgICAgICAgbnVtZXJpYzogL1swLTldL2csXHJcbiAgICAgICAgc3BlY2lhbDogL1tcXFdfXS9nXHJcbiAgICB9O1xyXG4gICAgdmFyIHJ1bGU7XHJcbiAgICB2YXIgaTtcclxuICAgIFxyXG4gICAgLy8gZW5mb3JjZSBtaW4vbWF4IGxlbmd0aFxyXG4gICAgaWYgKHB3Lmxlbmd0aCA8IG8ubGVuZ3RoWzBdIHx8IHB3Lmxlbmd0aCA+IG8ubGVuZ3RoWzFdKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBlbmZvcmNlIGxvd2VyL3VwcGVyL2FscGhhL251bWVyaWMvc3BlY2lhbCBydWxlc1xyXG4gICAgZm9yIChydWxlIGluIHJlKSB7XHJcbiAgICAgICAgaWYgKChwdy5tYXRjaChyZVtydWxlXSkgfHwgW10pLmxlbmd0aCA8IG9bcnVsZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gZW5mb3JjZSB3b3JkIGJhbiAoY2FzZSBpbnNlbnNpdGl2ZSlcclxuICAgIGZvciAoaSA9IDA7IGkgPCBvLmJhZFdvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHB3LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihvLmJhZFdvcmRzW2ldLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gZW5mb3JjZSB0aGUgbm8gc2VxdWVudGlhbCwgaWRlbnRpY2FsIGNoYXJhY3RlcnMgcnVsZVxyXG4gICAgaWYgKG8ubm9TZXF1ZW50aWFsICYmIC8oW1xcU1xcc10pXFwxLy50ZXN0KHB3KSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gZW5mb3JjZSBhbHBoYW51bWVyaWMvcXdlcnR5IHNlcXVlbmNlIGJhbiBydWxlc1xyXG4gICAgaWYgKG8uYmFkU2VxdWVuY2VMZW5ndGgpIHtcclxuICAgICAgICB2YXIgbG93ZXIgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xyXG4gICAgICAgIHZhciB1cHBlciA9IGxvd2VyLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIG51bWJlcnMgPSAnMDEyMzQ1Njc4OSc7XHJcbiAgICAgICAgdmFyIHF3ZXJ0eSA9ICdxd2VydHl1aW9wYXNkZmdoamtsenhjdmJubSc7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gby5iYWRTZXF1ZW5jZUxlbmd0aCAtIDE7XHJcbiAgICAgICAgdmFyIHNlcSA9ICdfJyArIHB3LnNsaWNlKDAsIHN0YXJ0KTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGkgPSBzdGFydDsgaSA8IHB3Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNlcSA9IHNlcS5zbGljZSgxKSArIHB3LmNoYXJBdChpKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbG93ZXIuaW5kZXhPZihzZXEpID4gLTEgfHxcclxuICAgICAgICAgICAgICAgIHVwcGVyLmluZGV4T2Yoc2VxKSA+IC0xIHx8XHJcbiAgICAgICAgICAgICAgICBudW1iZXJzLmluZGV4T2Yoc2VxKSA+IC0xIHx8XHJcbiAgICAgICAgICAgICAgICAoby5ub1F3ZXJ0eVNlcXVlbmNlcyAmJiBxd2VydHkuaW5kZXhPZihzZXEpID4gLTEpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBlbmZvcmNlIGN1c3RvbSByZWdleC9mdW5jdGlvbiBydWxlc1xyXG4gICAgZm9yIChpID0gMDsgaSA8IG8uY3VzdG9tLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcnVsZSA9IG8uY3VzdG9tW2ldO1xyXG4gICAgICAgIGlmIChydWxlIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgIGlmICghcnVsZS50ZXN0KHB3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKCFydWxlKHB3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBncmVhdCBzdWNjZXNzIVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlUGFzc3dvcmQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXSwic291cmNlUm9vdCI6IiJ9