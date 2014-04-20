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
     * Log message with prefix is `[jquery.form - LOG]`
     * @param {String} msg
     */
    var log = $.form.log = function (msg) {
        if (!$.form.debug) {
            return;
        }

        if (console && console.log) {
            console.log(['[jquery.form - LOG] ' + msg]);
        }
    };

    /**
     * Log message list
     */
    var logArray = $.form.logArray = function () {
        if (!$.form.debug) {
            return;
        }

        if (console && console.log) {
            if (navigator.appName == 'Microsoft Internet Explorer') {
                if (arguments.length == 1) {
                    console.log(arguments[0]);
                } else if (arguments.length == 2) {
                    console.log(arguments[0], arguments[1]);
                } else if (arguments.length > 2) {
                    console.log(arguments[0], arguments[1], arguments[2]);
                }
            } else {
                console.log(arguments);
            }
        }
    };

    /**
     * Throw error message with prefix is `[jquery.form - ERROR]`
     * @param {String} msg
     */
    var error = $.form.error = function (msg) {
        if (!$.form.debug) {
            return;
        }

        if (console && console.log) {
            console.log(['[jquery.form - ERROR] ' + msg]);
        }
    };

    // List of validation rules
    $.form.rules = {};

    // Default for rule
    var DEFAULT = {
        validate: null,
        message: null,
        forGroup: false
    };

    /**
     * Add a validation rule
     * @param {String} name Rule name
     * @param {Object} options The configuration of rule
     */
    $.form.addRule = function (name, options) {
        var old = $.form.rules[name] || {};

        $.form.rules[name] = $.extend({}, DEFAULT, old, options);
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
     * Convert dash-case string to camel-case string.
     * Example: `bob-khin` to `bobKhin`
     * @param {String} string
     * @returns {String}
     */
    $.form.dashToCamel = function (string) {
        return string.replace(/(\-[a-z])/g, function ($1) {
            return $1.toUpperCase().replace('-', '');
        });
    };

    /**
     * Convert underscore-case string to camel-case string.
     * Example: `bob_khin` to `bobKhin`
     * @param {String} string
     * @returns {String}
     */
    $.form.underscoreToCamel = function (string) {
        return string.replace(/(\_[a-z])/g, function ($1) {
            return $1.toUpperCase().replace('_','');
        });
    };

    /**
     * Convert camel-case string to dash-case string.
     * Example: `bobKhin` to `bob-khin`
     * @param {String} string
     * @returns {String}
     */
    $.form.camelToDash = function (string) {
        return string.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
        });
    };
    /**
     * Convert camel-case string to underscore-case string.
     * Example: `bobKhin` to `bob_khin`
     * @param {String} string
     * @returns {String}
     */
    $.form.camelToUnderscore = function (string) {
        return string.replace(/([A-Z])/g, function ($1) {
            return '_' + $1.toLowerCase();
        });
    };

    /**
     * Capitalise a string
     * @param {String} string
     * @param {Boolean} all Is capitalise first letter of all words or not
     * @returns {String}
     */
    $.form.capitalise = function (string, all) {
        if (all) {
            return string.replace(/(^|\s)([a-z])/g , function (m, p1, p2) {
                return p1 + p2.toUpperCase();
            });
        } else {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
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
    // Shortcut of log functions
    var log = $.form.log;
    var logArray = $.form.logArray;
    var error = $.form.error;
    var errorArray = $.form.errorArray;

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
        getControlName: function (control, form) {
            console.log(control);
            var label = form.find('label[for=' + control.attr('id') + ']');

            if (label[0]) {
                log('Get control name from label');
                return label.html();
            }

            var name = control.attr('name');

            if(name.indexOf('-') > 0) {
                log('Name attribute is dash-case');
                return $.form.capitalise(name.replace(/\-/g, ' '), true);
            }

            if(name.indexOf('_') > 0) {
                log('Name attribute is underscore-case');
                return $.form.capitalise(name.replace(/\_/g, ' '), true);
            }

            if (name) {
                log('Name attribute is camel-case');
                return $.form.capitalise($.form.camelToDash(name).replace(/\_/g, ' '), true);
            }

            var attrName = control.attr('data-name');
            if(attrName) {
                log('Get control name from data-name');
                return attrName;
            }

            logArray('Can\'t get name of control', control);
            return '';
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

    var methods = {
        init: function (options) {
            var form = $(this);

            // Options
            options = $.extend({}, DEFAULT, options);
            form.data('options', options);

            form.on('submit', function (e) {
                e.preventDefault();

                var results = methods.validate.call(this, options);

                if (options.preventDefault) {
                    e.preventDefault();
                }
            });
        },
        reset: function () {
            this.get(0).reset();

            return this;
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

            form.find('input, button, textarea, select').attr('disabled', isEnable === undefined ? false : !isEnable);

            return form;
        },
        validate: function (options) {
            var form = $(this);
            var controls = methods.getControls.call(form, true);
            var data = {};
            var errorControls = [];
            var errorMessages = [];
            var ignoreHidden = options.ignoreHidden;

            var isIgnored = function (control) {
                return control.is(':disabled') || (options.ignoreHidden && control.is(':hidden'));
            };

            // Validate textboxes
            var textboxes = controls.textboxes;
            textboxes.each(function () {
                var textbox = $(this);
                var isPassword = textbox.is(':password');
                var value = textbox.val();

                if (options.trimValue.enable) {
                    if (isPassword) {
                        value = options.trimValue.ignorePassword ? value : value.trim();
                    } else {
                        value = value.trim();
                    }
                }

                if (isIgnored(textbox)) {
                    return;
                }

                var name = options.getControlName(textbox, form);
                var validType = textbox.attr('data-valid-type');
                var rule =  $.form.rules[validType];

                if (rule) {
                    var isOk = rule.validate(textbox, value, options);

                    if (isOk) {
                        data[name] = value;
                    } else {
                        errorControls.push(textbox);
                        errorMessages.push(rule.message(textbox, name));
                    }
                } else {
                    if (validType === undefined) {
                        errorArray('data-valid-type is undefined!', textbox);
                    } else {
                        error(validType + ' is not exited in rules!');
                    }
                }
            });

            return [data, errorControls, errorMessages];
        },
        getControls: function (groupByName) {
            var form = $(this);

            console.log(form);

            var selects = form.find('select');
            var buttons = form.find('button, input[type=button], input[type=reset], input[type=submit]');
            var checkboxes = form.find(':checkbox');
            var radios = form.find(':radio');
            var textboxes = form.find('input, textarea').not(buttons).not(checkboxes).not(radios);

            if (groupByName) {
                var newCheckboxes = {};
                checkboxes.each(function () {
                    var checkbox = $(this);
                    var name = checkbox.attr('name');

                    if (name in newCheckboxes) {
                        newCheckboxes[name].push(checkbox);
                    } else {
                        newCheckboxes[name] = [checkbox];
                    }
                });
                checkboxes = newCheckboxes;

                var newRadios = {};
                radios.each(function () {
                    var radio = $(this);
                    var name = radio.attr('name');

                    if (name in newRadios) {
                        newRadios[name].push(radio);
                    } else {
                        newRadios[name] = [radio];
                    }
                });
                radios = newRadios;
            }

            return {
                buttons: buttons,
                textboxes: textboxes,
                selects: selects,
                checkboxes: checkboxes,
                radios: radios
            }
        }
    };

    $.fn.form = function (method) {
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            error('Method ' + method + ' does not exist on jquery.form');
        }
    };

})(jQuery);