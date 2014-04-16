(function ($) {
    /**
     * Init form plugin
     * @param {String|HTMLElement|jQuery} selector Selector, HTMLElement or jQuery object of form
     * @param {String|Object} options Method name or configuration of form plugin
     */
    $.form = function (selector, options) {
        return $(selector).form(options);
    };

    // List of validation rules
    $.form.rules = {};

    // Default rule option
    var DEFAULT = {
        validate: null,
        useTemplate: false,
        message: null
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

        targets.attr('data-valid-type');

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
            return controlName + ' is invalid';
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
        validate: function (control, gvalue, options) {
            return options.regex.url.test(value);
        },
        message: function (control, controlName) {
            return controlName + ' is invalid';
        }
    });

})(jQuery);

(function ($) {
    var DEFAULTS = {
        debug: true,
        preventDefault: true,
        whenInvalid: null,
        whenValid: null,
        beforeValidate: null,
        beforeSubmit: null,
        ignoreHidden: false,
        ignoreDisable: true,
        trimValue: {
            enable: true,
            ignorePassword: true
        },
        clearFormAfterSubmit: true,
        ajaxOptions: {
            type: 'POST',
            dataType: 'JSON',
            data: null
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
            url: /a/
        },
        messages: {
            enable: true,
            summary: true,
            summaryTarget: null,
            summaryTemplate:
                '<div class="jq-form-msg-summary">' +
                    'Form is not valid:' +
                    '<ul>' +
                        '<# for (var i = 0, msg; msg = msgs[i]; i++) { #>' +
                            '<li><#= msg #></li>' +
                        '<# } #>' +
                    '</ul>' +
                '</div>',
            inline: false,
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

    var method = {
        init: function (options) {

        }
    };

    function validate(input) {

    }

    $.fn.form = function (method) {
        log("form", this);
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jquery.form');
        }
    }

})(jQuery);