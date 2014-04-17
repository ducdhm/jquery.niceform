(function ($, undefined) {
    /**
     * Init form plugin
     * @param {String|HTMLElement|jQuery} selector Selector, HTMLElement or jQuery object of form
     * @param {String|Object} options Method name or configuration of form plugin
     */
    $.form = function (selector, options) {
        return $(selector).form(options);
    };

    // Set debug mode of form plugin
    $.form.debug = true;

    /**
     * Log message with prefix is `[jquery.form]`
     * @param {String} msg
     */
    var log = $.form.log = function (msg) {
        if (!$.form.debug) {
            return;
        }

        var msg = '[jquery.form] ' + msg;

        if (console && console.log) {
            console.log(msg);
        }
    };

    /**
     * Log message list with prefix is `[jquery.form]`
     */
    var logArray = $.form.logArray = function () {
        if (!$.form.debug) {
            return;
        }

        if (console && console.log) {
            var args = Array.prototype.slice.call(arguments, 0);

            if (navigator.appName == 'Microsoft Internet Explorer') {
                if (arguments.length == 1) {
                    console.log('[jquery.form]', arguments[0]);
                } else if ('[jquery.form]', arguments.length == 2) {
                    console.log(arguments[0], arguments[1]);
                } else if (arguments.length > 2) {
                    console.log('[jquery.form]', arguments[0], arguments[1], arguments[2]);
                }
            } else {
                console.log(['[jquery.form]'].concat(args));
            }
        }
    };

    /**
     * Throw error message with prefix is `[jquery.form]`
     * @param {String} msg
     */
    var error = $.form.error = function (msg) {
        $.error('[jquery.form] ' + msg);
    };

    // List of validation rules
    $.form.rules = {};

    /**
     * Add a validation rule
     * @param {String} name Rule name
     * @param {Object} options The configuration of rule
     */
    $.form.addRule = function (name, options) {
        var old = $.form.rules[name] || {};

        $.form.rules[name] = $.extend({}, old, options);
    };

    /**
     * Remove a validation rule
     * @param {String} name Name of removed rule
     */
    $.form.removeRule = function (name) {
        delete $.form.rules[name];
    };

    /**
     * Apply a rule for form controls
     * @param {String|HTMLElement|jQuery} selector Selector, HTMLElement or jQuery object of controls
     * @param {String} name Rule name
     * @param {Object} options Addition configuration of rule such as min, max, pattern...
     * @return {jQuery}
     */
    $.form.applyRule = function (selector, name, options) {
        var targets = $(selector);
        var optionName;
        var validType = name;

        if (options.requiredIf === true) {
            validType = 'requiredIf|' + validType;
            delete options.requiredIf;
        }

        targets.attr('data-valid-type', validType);

        for (optionName in options) {
            targets.attr('data-' + optionsName, options[optionName]);
        }

        return targets;
    };

    /**
     * Generate password regex
     * @method generatePasswordRegex
     * @param {Number} min Minimum length of password
     * @param {Number} max Maximum length of password
     * @param {String} specialCharacter List of special characters
     * @param {Number} specialLength Number of required special character in password
     * @param {Number} uppercaseLength Number of required uppercase character in password
     * @param {Number} numberLength Number of digit character in password *
     */
    $.form.generatePasswordRegex = function (options) {
        var regexString = '(?=(?:.*[a-z]){1})';

        if (options.uppercaseLength > 0) {
            regexString += '(?=(?:.*[A-Z]){' + options.uppercaseLength + '})';
        }

        if (options.numberLength > 0) {
            regexString += '(?=(?:.*\\d){' + options.numberLength + '})';
        }

        if (options.specialLength > 0) {
            regexString += '(?=(?:.*[' + options.specialCharacter + ']){' + options.numberLength + '})';
        }

        regexString += '.{' + options.min + ',' + options.max + '}';

        return new RegExp('^' + regexString + '$');
    };

    /**
     * Required rule: Control value must be not blank
     */
    $.form.addRule('required', {
        validate: function (control, value, options) {
            return !!value;
        },
        message: function (controlName) {
            return controlName + ' must be not blank!';
        }
    });

    /**
     * Password rule: Control value must be passed the password regex
     */
    $.form.addRule('password', {
        validate: function (control, value, options) {
            var regex = $.form.generatePasswordRegex(options.password);

            return !!value && regex.test(value);
        },
        message: function (control, controlName) {
            return controlName + ' must be between 8 and 32 characters long; contain a number, an uppercase letter and one of following special characters <b>!@#$%^&*-</b> !';
        }
    });

    /**
     * Repassword rule: Control value must be same with password control
     */
    $.form.addRule('repassword', {
        validate: function (control, value, options) {
            var password = control.closest('form').find(':password').not(control);

            return value === password.val();
        },
        message: function (control, controlName) {
            return 'Confirm password must be matched with password!';
        }
    });

    /**
     * Limited rule: Control value length must be between min and max characters long
     */
    $.form.addRule('limited', {
        validate: function (control, value, options) {
            var min = +control.attr('data-min');
            var max = +control.attr('data-max');

            return !!value && value.length < max && value.length > min;
        },
        message: function (control, controlName) {
            return controlName + ' must be between ' + control.attr('data-min') + ' and ' + control.attr('data-max') + ' characters long!';
        }
    });

    /**
     * Exact rule: Control value length must be matched the specified long
     */
     $.form.addRule('exact', {
        validate: function (control, value, options) {
            var length = +control.attr('data-length');

            return value.length === length;
        },
        message: function (control, controlName) {
            return controlName + ' length must be ' + control.attr('data-length') + ' characters long!';
        }
     });

    /**
     * Integer rule: Control value must be digits. Min and max value are optional.
     */
    $.form.addRule('integer', {
        validate: function (control, value, options) {
            var min = control.attr('data-min');
            var max = control.attr('data-max');

            return !isNaN(value) && (!!min ? +value >= +min : true) && (!!max ? +value <= +max : true);
        },
        message: function (control, controlName) {
            var min = control.attr('data-min');
            var max = control.attr('data-max');

            return controlName + ' must be digits' + (!!min ? ', minimum is ' + min : '') + (!!max ? ', maximum is ' + max : '') + '!';
        }
    });

    /**
     * Email rule: Control value must be valid email
     */
    $.form.addRule('email', {
        validate: function (control, value, options) {
            return options.regex.email.test(value);
        },
        message: function (control, controlName) {
            return controlName + ' is invalid!';
        }
    });

    /**
     * Regexp rule: Control value must be passed with regex
     */
    $.form.addRule('regex', {
        validate: function (control, value, options) {
            var regex = new RegExp(control.attr('data-regex'));

            return regex.test(value);
        },
        message: function (control, controlName) {
            return control.attr('data-message');
        }
    });

    /**
     * Url rule: Control value must be url
     */
    $.form.addRule('url', {
        validate: function (control, value, options) {
            return options.regex.url.test(value);
        },
        message: function (control, controlName) {
            return controlName + ' is invalid!';
        }
    });

    /**
     * IP rule: Control value must be IP address
     */
    $.form.addRule('ip', {
        validate: function (control, value, options) {
            return options.regex.ip.test(value);
        },
        message: function (control, controlName) {
            return controlName + ' is invalid!';
        }
    });

    /**
     * Hex rule: Control value must be hexa value such as #f00 or #ff0000
     */
    $.form.addRule('hex', {
        validate: function (control, value, options) {
            return options.regex.hex.test(value);
        },
        message: function (control, controlName) {
            return controlName + ' is invalid!';
        }
    });

    /**
     * Date rule: Control value must be date format (options.format.date)
     */
     $.form.addRule('date', {
        validate: function (control, value, options) {
            if (moment === undefined) {
                error('Require MomentJs for validating Date');
                return false;
            }

            return moment(value, options.format.date, true).isValid();
        },
        message: function (control, controlName) {
            return controlName + ' is invalid!';
        }
    });

    /**
     * Time rule: Control value must be time format (options.format.time)
     */
     $.form.addRule('time', {
        validate: function (control, value, options) {
            if (moment === undefined) {
                error('Require MomentJs for validating Time');
                return false;
            }

            return moment(value, options.format.time, true).isValid();
        },
        message: function (control, controlName) {
            return controlName + ' is invalid!';
        }
    });

    /**
     * DateTime rule: Control value must be date format (options.format.datetime)
     */
     $.form.addRule('datetime', {
        validate: function (control, value, options) {
            if (moment === undefined) {
                error('Require MomentJs for validating DateTime');
                return false;
            }

            return moment(value, options.format.datetime, true).isValid();
        },
        message: function (control, controlName) {
            return controlName + ' is invalid!';
        }
    });

})(jQuery);

(function ($, undefined) {
    // Default configuration of form plugin
    var DEFAULT = {
        preventDefault: true,
        whenInvalid: null,
        whenValid: null,
        beforeValidate: null,
        beforeSubmit: null,
        ignoreHidden: false,
        trimValue: {
            enable: true,
            ignorePassword: true
        },
        disableFormBeforeSubmit: true,
        clearFormAfterSubmit: true,
        ajaxOptions: {
            type: 'POST',
            dataType: 'JSON',
            data: null
        },
        format: {
            date: 'DD-MM-YYYY',
            time: 'HH:mm',
            datetime: 'DD-MM-YYYY HH:mm'
        },
        password: {
            min: 8,
            max: 32,
            specialCharacter: '!@#$%^&*-',
            specialLength: 1,
            uppercaseLength: 1,
            numberLength: 1
        },
        regex: {
            email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,
            url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
            hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/,
            ip: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:\d{2,5}){0,1}$/
        },
        summaryMessage: {
            enable: false,
            selector: '.jq-form-msg-summary',
            template: 
                '<div class="jq-form-msg-summary">' +
                    'Form is not valid:' +
                    '<ul>' +
                        '<# for (var i = 0, msg; msg = msgs[i]; i++) { #>' +
                            '<li><#= msg #></li>' +
                        '<# } #>' +
                    '</ul>' +
                '</div>'
        },
        inlineMessage: {
            enable: true,
            selector: '.help-block',
            template: '<span class="help-block"><#= msg #></span>',
            wrapperSelector: '.form-group',
            addMethod: 'append',
            classForWrapper: true,
            errorClass: 'has-error',
            successClass: 'has-success'
        },
        templateProcessor: function (template, data) {
            return $.tmpl(template, data);
        }
    };

    // Shortcut of log functions
    var log = $.form.log;
    var logArray = $.form.logArray;
    var error = $.form.error;

    var methods = {
        init: function (options) {
            var form = $(this);

            // Options
            options = $.extend({}, DEFAULT, options);
            form.data('options', options);

            form.on('submit', function (e) {
                var results = method.validate.apply(this, options);

            });
        },
        reset: function () {
            var form = $(this);

            form.reset();

            return form;
        },
        clear: function (controlSelectors) {
            var form = $(this);

            var controls = null;

            if (controlSelectors === undefined) {
                controls = form.find('input, textarea, select');
            } else {
                controls = form.find(controlSelectors);
            }

            controls.each(function () {
                var control = $(this);
                var isSelect = control.is('select');
                var isCheckbox = control.is(':checkbox');
                var isRadio = control.is(':radio');

                if (isCheckbox) {
                    this.selectedIndex = -1;
                } else if (isCheckbox || isRadio) {
                    control.attr('checked', false);
                } else {
                    control.val('');
                }
            });

            return form;
        },
        enable: function (isEnable) {
            var form = $(this);

            form.find('input, button, textarea, select').attr('disabled', isEnable === undefined ? true : isEnable);

            return form;
        },
        validate: function (options) {
            var form = $(this);
        }
    };

    $.fn.form = function (method) {
        log("form", this);
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            error('Method ' + method + ' does not exist on jquery.form');
        }
    };

})(jQuery);