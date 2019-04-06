(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.emulateFormData = mod.exports;
  }
})(this, function () {
  "use strict";

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
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.serializeWithFiles = mod.exports;
  }
})(this, function () {
  "use strict";

  // http://stackoverflow.com/questions/5392344/sending-multipart-formdata-with-jquery-ajax
  (function ($) {
    $.fn.serializeWithFiles = function () {
      var form = $(this);
      flog('[jquery.forms] Initializing serializeWithFiles...', form); // ADD FILE TO PARAM AJAX

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
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.shouldBeCheck = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(control) {
    if (control.hasClass('required')) {
      return true;
    } else {
      var val = control.val() || '';
      return val.length > 0;
    }
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.isNumber = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(value) {
    return !isNaN(value) && typeof value !== 'boolean';
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.isTime = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(value, timeFormat) {
    return moment(value, timeFormat, true).isValid();
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./testRegex"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./testRegex"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.testRegex);
    global.isValidEmail = mod.exports;
  }
})(this, function (_exports, _testRegex) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _testRegex = _interopRequireDefault(_testRegex);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(value) {
    return (0, _testRegex.default)(value, /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/);
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./testRegex"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./testRegex"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.testRegex);
    global.isValidUrl = mod.exports;
  }
})(this, function (_exports, _testRegex) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _testRegex = _interopRequireDefault(_testRegex);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(value) {
    return (0, _testRegex.default)(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, value);
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.testRegex = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(regex, string) {
    return regex.test(string);
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.validatePassword = mod.exports;
  }
})(this, function () {
  "use strict";

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
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.clearValue = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Clear value of textbox, textarea. Uncheck all radio button and checkbox. And set selected
   * index of select is -1. NOTE: Not effect with element data-ignore=`clear`
   * @param {jQuery} form jQuery object of form
   * @param {String} controlSelector Selector of controls will be clear
   */
  var _default = function _default(form, controlSelector) {
    var controls = form.find(controlSelector || 'input, textarea, select').filter('[data-ignore=clear]');
    controls.each(function () {
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
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.disableForm = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(form) {
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
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./disableForm", "./enableForm"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./disableForm"), require("./enableForm"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.disableForm, global.enableForm);
    global.doPostForm = mod.exports;
  }
})(this, function (_exports, _disableForm, _enableForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _disableForm = _interopRequireDefault(_disableForm);
  _enableForm = _interopRequireDefault(_enableForm);

  var _this = void 0;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(form, options) {
    var isFormData = form.attr('enctype') === 'multipart/form-data';
    var data = isFormData ? form.serializeWithFiles() : form.serialize();
    var postUrl = options.postUrl || form.attr('action') || window.location.pathname;

    if (typeof options.onBeforePostForm === 'function') {
      data = options.onBeforePostForm.call(_this, form, options, data) || data;
    }

    try {
      (0, _disableForm.default)(form);
      var ajaxOptions = {
        type: 'POST',
        url: postUrl,
        data: data,
        dataType: 'JSON',
        success: function success(resp, textStatus, jqXhr) {
          (0, _enableForm.default)(form);
          var isSuccess = false;

          if (typeof options.processResponse === 'function') {
            isSuccess = options.processResponse(resp, form, options);
          }

          if (isSuccess) {
            if (typeof options.onSuccess === 'function') {
              options.onSuccess.call(this, resp, form, options);
            }
          } else {
            if (typeof options.onError === 'function') {
              options.onError.call(this, jqXhr, form, options);
            }
          }
        },
        error: function error(jqXhr) {
          (0, _enableForm.default)(form);

          if (typeof options.onError === 'function') {
            options.onError.call(this, jqXhr, form, options);
          }
        }
      };

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
      if (typeof options.onError === 'function') {
        options.onError.call(_this, null, form, options);
      } else {
        alert('Sorry, an error occurred attempting to submit the form. Please contact the site administrator to resolve!');
      }
    }
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.enableForm = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(form) {
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
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.hideError = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(form) {
    form.find('.has-error').removeClass('has-error');
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.processResponse = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(resp, form, options) {
    return resp && resp.status;
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.resetForm = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(form) {
    form.get(0).reset();
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "jquery"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery);
    global.showError = mod.exports;
  }
})(this, function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _jquery = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(form, errorFields, errorMessages) {
    // Find existing `div.form-error-msg` and create if not
    var formMessage = form.find('.form-error-msg');

    if (formMessage.length === 0) {
      formMessage = (0, _jquery.default)("<div class=\"alert alert-error form-error-msg fade\" style=\"display: none;\">\n                <a class=\"close\" data-dismiss=\"alert\">&times;</a>\n            </div>");
      form.append(formMessage);
    } // Generate error title and details


    var errorHtml = '';
    errorHtml += "<p class=\"form-error-title\"><b>Error</b></p>";
    errorHtml += "<ul class=\"form-error-details\">";
    errorMessages.forEach(function (msg) {
      errorHtml += "<li>".concat(msg, "</li>");
    });
    errorHtml += "</ul>";
    formMessage.html(errorHtml); // Animate if hidden

    if (formMessage.is(':hidden')) {
      formMessage.stop().animate({
        opacity: 1,
        height: 'show'
      }, 200);
    } // Show error state


    errorFields.forEach(function (field) {
      field.addClass('error-field');
      field.closest('.form-group').addClass('has-error');
    }); // Scroll to error messages

    (0, _jquery.default)('body, html').stop().animate({
      scrollTop: formMessage.offset().top - 140
    }, 200);
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../rules/checkRequired", "../rules/checkDateTime", "../rules/checkEmail", "../rules/checkNumber", "../rules/checkPassword", "../rules/checkPasswordConfirm", "../rules/checkRegex", "../rules/checkUrl"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../rules/checkRequired"), require("../rules/checkDateTime"), require("../rules/checkEmail"), require("../rules/checkNumber"), require("../rules/checkPassword"), require("../rules/checkPasswordConfirm"), require("../rules/checkRegex"), require("../rules/checkUrl"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.checkRequired, global.checkDateTime, global.checkEmail, global.checkNumber, global.checkPassword, global.checkPasswordConfirm, global.checkRegex, global.checkUrl);
    global.validateForm = mod.exports;
  }
})(this, function (_exports, _checkRequired, _checkDateTime, _checkEmail, _checkNumber, _checkPassword, _checkPasswordConfirm, _checkRegex, _checkUrl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _checkRequired = _interopRequireDefault(_checkRequired);
  _checkDateTime = _interopRequireDefault(_checkDateTime);
  _checkEmail = _interopRequireDefault(_checkEmail);
  _checkNumber = _interopRequireDefault(_checkNumber);
  _checkPassword = _interopRequireDefault(_checkPassword);
  _checkPasswordConfirm = _interopRequireDefault(_checkPasswordConfirm);
  _checkRegex = _interopRequireDefault(_checkRegex);
  _checkUrl = _interopRequireDefault(_checkUrl);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(form, options) {
    var resultRequired = (0, _checkRequired.default)(form, options.requiredErrorFieldMessage);

    if (resultRequired.length > 0) {
      typeof options.showError === 'function' && options.showError(form, resultRequired, [options.requiredErrorMessage]);
      return false;
    } else {
      var errorFields = [];
      var errorMessages = [];
      var resultDateTime = (0, _checkDateTime.default)(form, options.format, options.dateTimeErrorFieldMessage);

      if (resultDateTime.length > 0) {
        errorFields.push(resultDateTime);
        errorMessages.push(options.dateTimeErrorMessage);
      }

      var resultEmail = (0, _checkEmail.default)(form, options.emailErrorFieldMessage);

      if (resultEmail.length > 0) {
        errorFields.push(resultEmail);
        errorMessages.push(options.emailErrorMessage);
      }

      var resultNumber = (0, _checkNumber.default)(form, options.numberErrorFieldMessage);

      if (resultNumber.length > 0) {
        errorFields.push(resultNumber);
        errorMessages.push(options.numberErrorMessage);
      }

      var resultUrl = (0, _checkUrl.default)(form, options.urlErrorFieldMessage);

      if (resultUrl.length > 0) {
        errorFields.push(resultUrl);
        errorMessages.push(options.urlErrorMessage);
      }

      var resultPassword = (0, _checkPassword.default)(form, options.password, options.passwordErrorFieldMessage);

      if (resultPassword.length > 0) {
        errorFields.push(resultPassword);
        errorMessages.push(options.passwordErrorMessage);
      }

      var resultPasswordConfirm = (0, _checkPasswordConfirm.default)(form, options.confirmPasswordErrorFieldMessage);

      if (resultPasswordConfirm.length > 0) {
        errorFields.push(resultPasswordConfirm);
        errorMessages.push(options.confirmPasswordErrorMessage);
      }

      var resultRegex = (0, _checkRegex.default)(form);

      if (resultRegex.length > 0) {
        errorFields.push(resultRegex);
        resultRegex.forEach(function (field) {
          errorMessages.push(field.attr('data-error-message'));
        });
      }

      if (typeof options.validate === 'function') {
        var resultCustom = options.validate(form, options);

        if (resultCustom && resultCustom.errorFields && resultCustom.errorFields.length > 0) {
          errorFields.push(resultCustom.errorFields);
          errorMessages.push(resultCustom.errorMessages);
        }
      }

      if (errorFields.length > 0) {
        typeof options.showError === 'function' && options.showError(form, errorFields, errorMessages);
        return false;
      } else {
        return true;
      }
    }
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/shouldBeCheck"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/shouldBeCheck"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.shouldBeCheck);
    global.checkDateTime = mod.exports;
  }
})(this, function (_exports, _shouldBeCheck) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _shouldBeCheck = _interopRequireDefault(_shouldBeCheck);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(form, format, errorMessage) {
    var errorFields = [];

    if (typeof window.moment === 'undefined') {
      throw new Error('Require moment to validate date time fields');
    }

    form.find('.date').each(function () {
      var input = $(this);

      if ((0, _shouldBeCheck.default)(input) && moment(this.value, format.date, true).isValid()) {
        input.attr('data-error-message', errorMessage);
        errorFields.push(input);
      }
    });
    form.find('.time').each(function () {
      var input = $(this);

      if ((0, _shouldBeCheck.default)(input) && moment(this.value, format.time, true).isValid()) {
        input.attr('data-error-message', errorMessage);
        errorFields.push(input);
      }
    });
    form.find('.datetime').each(function () {
      var input = $(this);

      if ((0, _shouldBeCheck.default)(input) && moment(this.value, format.datetime, true).isValid()) {
        input.attr('data-error-message', errorMessage);
        errorFields.push(input);
      }
    });
    return errorFields;
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/shouldBeCheck", "../validate/isValidEmail"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/shouldBeCheck"), require("../validate/isValidEmail"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.shouldBeCheck, global.isValidEmail);
    global.checkEmail = mod.exports;
  }
})(this, function (_exports, _shouldBeCheck, _isValidEmail) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _shouldBeCheck = _interopRequireDefault(_shouldBeCheck);
  _isValidEmail = _interopRequireDefault(_isValidEmail);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(form, errorMessage) {
    var errorFields = [];
    form.find('.email').each(function () {
      var input = $(this);

      if ((0, _shouldBeCheck.default)(input) && !(0, _isValidEmail.default)(this.value)) {
        input.attr('data-error-message', errorMessage);
        errorFields.push(input);
      }
    });
    return errorFields;
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/shouldBeCheck", "../validate/isNumber"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/shouldBeCheck"), require("../validate/isNumber"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.shouldBeCheck, global.isNumber);
    global.checkNumber = mod.exports;
  }
})(this, function (_exports, _shouldBeCheck, _isNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _shouldBeCheck = _interopRequireDefault(_shouldBeCheck);
  _isNumber = _interopRequireDefault(_isNumber);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(form, errorMessage) {
    var errorFields = [];
    form.find('.number, .digit, .numeric').each(function () {
      var input = $(this);

      if ((0, _shouldBeCheck.default)(input) && !(0, _isNumber.default)(this.value)) {
        input.attr('data-error-message', errorMessage);
        errorFields.push(input);
      }
    });
    return errorFields;
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/shouldBeCheck", "../validate/validatePassword"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/shouldBeCheck"), require("../validate/validatePassword"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.shouldBeCheck, global.validatePassword);
    global.checkPassword = mod.exports;
  }
})(this, function (_exports, _shouldBeCheck, _validatePassword) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _shouldBeCheck = _interopRequireDefault(_shouldBeCheck);
  _validatePassword = _interopRequireDefault(_validatePassword);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(form, passwordOptions, errorMessage) {
    var errorFields = [];

    var isValid = function isValid(value) {
      return (0, _validatePassword.default)(value, {
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

      if ((0, _shouldBeCheck.default)(input) && !isValid(this.value)) {
        input.attr('data-error-message', errorMessage);
        errorFields.push(input);
      }
    });
    return errorFields;
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.checkPasswordConfirm = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(form, errorMessage) {
    var errorFields = [];
    var passwordInputs = form.find('.password');
    form.find('.confirm-password, .re-password, .repassword').each(function () {
      var input = $(this);

      if (input.val() !== passwordInputs.val()) {
        input.attr('data-error-message', errorMessage);
        errorFields.push(input);
      }
    });
    return errorFields;
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/shouldBeCheck", "../validate/testRegex"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/shouldBeCheck"), require("../validate/testRegex"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.shouldBeCheck, global.testRegex);
    global.checkRegex = mod.exports;
  }
})(this, function (_exports, _shouldBeCheck, _testRegex) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _shouldBeCheck = _interopRequireDefault(_shouldBeCheck);
  _testRegex = _interopRequireDefault(_testRegex);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(form) {
    var errorFields = [];
    form.find('.number, .digit, .numeric').each(function () {
      var input = $(this);
      var regex = input.attr('data-regex');

      if ((0, _shouldBeCheck.default)(input) && !(0, _testRegex.default)(regex, this.value)) {
        input.attr('data-error-message', input.attr('data-message'));
        errorFields.push(input);
      }
    });
    return errorFields;
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.checkRequired = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(form, errorMessage) {
    var errorFields = [];
    var names = {};
    form.find('.required:radio, .required:checkbox').each(function () {
      if (!this.name in names) {
        var input = form.find("input[name=\"".concat(this.name, "\"]"));
        var checked = input.filter(':checked');

        if (checked.length === 0) {
          errorFields.attr('data-error-message', errorMessage);
          errorFields.push(input);
        }

        names[this.name] = true;
      }
    });
    form.find('.required').filter('input, select, textarea').not('.tt-hint, :radio, :checkbox').each(function () {
      var input = $(this);
      var val = input.val() || '';
      var placeholder = input.attr('placeholder');

      if (val.length === 0 || val === placeholder) {
        input.attr('data-error-message', errorMessage);
        errorFields.push(input);
      }
    });
    return errorFields;
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/shouldBeCheck", "../validate/isValidUrl"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/shouldBeCheck"), require("../validate/isValidUrl"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.shouldBeCheck, global.isValidUrl);
    global.checkUrl = mod.exports;
  }
})(this, function (_exports, _shouldBeCheck, _isValidUrl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _shouldBeCheck = _interopRequireDefault(_shouldBeCheck);
  _isValidUrl = _interopRequireDefault(_isValidUrl);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(form, errorMessage) {
    var errorFields = [];
    form.find('.url, .href').each(function () {
      var input = $(this);

      if ((0, _shouldBeCheck.default)(input) && !(0, _isValidUrl.default)(this.value)) {
        input.attr('data-error-message', errorMessage);
        errorFields.push(input);
      }
    });
    return errorFields;
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./form/showError", "./form/hideError", "./form/processResponse"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./form/showError"), require("./form/hideError"), require("./form/processResponse"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.showError, global.hideError, global.processResponse);
    global.defaults = mod.exports;
  }
})(this, function (_exports, _showError, _hideError, _processResponse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _showError = _interopRequireDefault(_showError);
  _hideError = _interopRequireDefault(_hideError);
  _processResponse = _interopRequireDefault(_processResponse);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = {
    postFormEnabled: true,
    postUrl: null,
    format: {
      date: 'DD-MM-YYYY',
      time: 'HH:mm',
      datetime: 'DD-MM-YYYY HH:mm'
    },
    password: {
      min: 6,
      max: 32,
      specialLength: 1,
      uppercaseLength: 1,
      numberLength: 1
    },
    requiredErrorMessage: 'Please enter all required fields',
    requiredErrorFieldMessage: 'This field is required',
    dateTimeErrorMessage: 'Please enter valid date time',
    dateTimeErrorFieldMessage: 'Please enter valid date time',
    emailErrorMessage: 'Please check the format of your email address, it should read like ben@somewhere.com',
    emailErrorFieldMessage: 'Please check the format of your email address, it should read like ben@somewhere.com',
    numberErrorMessage: 'Please enter digits only',
    numberErrorFieldMessage: 'Please enter digits only',
    urlErrorMessage: 'Please enter valid website address',
    urlErrorFieldMessage: 'Please enter valid website address',
    passwordErrorMessage: 'Your password must be at least 6 characters and it must contain numbers and letters',
    passwordErrorFieldMessage: 'Your password must be at least 6 characters and it must contain numbers and letters',
    confirmPasswordErrorMessage: 'Please confirm your password',
    confirmPasswordErrorFieldMessage: 'Please confirm your password',
    showError: _showError.default,
    hideError: _hideError.default,
    processResponse: _processResponse.default,
    onValid: null,
    onInvalid: null,
    onBeforePostForm: null,
    onSuccess: null,
    onError: null
  };
  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "jquery", "./defaults", "./form/validateForm", "./form/doPostForm", "./form/clearValue", "./form/disableForm", "./form/enableForm", "./form/resetForm"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("./defaults"), require("./form/validateForm"), require("./form/doPostForm"), require("./form/clearValue"), require("./form/disableForm"), require("./form/enableForm"), require("./form/resetForm"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.defaults, global.validateForm, global.doPostForm, global.clearValue, global.disableForm, global.enableForm, global.resetForm);
    global.niceform = mod.exports;
  }
})(this, function (_exports, _jquery, _defaults, _validateForm, _doPostForm, _clearValue2, _disableForm2, _enableForm2, _resetForm2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _jquery = _interopRequireDefault(_jquery);
  _defaults = _interopRequireDefault(_defaults);
  _validateForm = _interopRequireDefault(_validateForm);
  _doPostForm = _interopRequireDefault(_doPostForm);
  _clearValue2 = _interopRequireDefault(_clearValue2);
  _disableForm2 = _interopRequireDefault(_disableForm2);
  _enableForm2 = _interopRequireDefault(_enableForm2);
  _resetForm2 = _interopRequireDefault(_resetForm2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var NiceForm =
  /*#__PURE__*/
  function () {
    function NiceForm(form, config) {
      _classCallCheck(this, NiceForm);

      _defineProperty(this, "form", void 0);

      _defineProperty(this, "options", void 0);

      var options = _jquery.default.extend({}, _defaults.default, config);

      form.off('submit').on('submit', function (e) {
        if (typeof options.hideError === 'function') {
          options.hideError(form, options);
        }

        if ((0, _validateForm.default)(form, options)) {
          if (typeof options.onValid === 'function') {
            options.onValid(form, options);
          }

          if (options.postFormEnabled === true) {
            e.preventDefault();
            (0, _doPostForm.default)(form, options);
          }
        } else {
          e.preventDefault();

          if (typeof options.onInvalid === 'function') {
            options.onInvalid(form, options);
          }
        }
      });
      this.form = form;
      this.options = options;
    }

    _createClass(NiceForm, [{
      key: "clearValue",
      value: function clearValue(controlSelector) {
        (0, _clearValue2.default)(this.form, controlSelector);
      }
    }, {
      key: "enableForm",
      value: function enableForm() {
        (0, _enableForm2.default)(this.form);
      }
    }, {
      key: "disableForm",
      value: function disableForm() {
        (0, _disableForm2.default)(this.form);
      }
    }, {
      key: "resetForm",
      value: function resetForm() {
        (0, _resetForm2.default)(this.form);
      }
    }]);

    return NiceForm;
  }();

  _exports.default = NiceForm;

  _defineProperty(NiceForm, "DEFAULTS", _defaults.default);

  _defineProperty(NiceForm, "version", '1.0.0');
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "./niceform.es"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("jquery"), require("./niceform.es"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jQuery, global.niceform);
    global.jqueryNiceform = mod.exports;
  }
})(this, function (_jquery, _niceform) {
  "use strict";

  _jquery = _interopRequireDefault(_jquery);
  _niceform = _interopRequireDefault(_niceform);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _jquery.default.fn.niceform = function (config) {
    return this.each(function () {
      var form = (0, _jquery.default)(this);

      if (!form.data('niceform')) {
        var niceform = new _niceform.default(form, config);
        form.data('niceform', niceform);
      }
    });
  };
});