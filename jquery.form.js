(function ($) {
    $.form = function (selector, options) {
        $(selector).form(options);
    };

    $.form.rules = {};

    $.form.addRule = function (name, options) {
        $.form.rules[name] = options;
    };

    $.form.removeRule = function (name) {
        delete $.form.rules[name];
    };

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
     * @param {Int} min Minimum length of password
     * @param {Int} max Maximum length of password
     * @param {String} specialCharacter List of special characters
     * @param {Int} specialLength Number of required special character in password
     * @param {Int} uppercaseLength Number of required uppercase character in password
     * @param {Int} numberLength Number of digit character in password * 
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

    $.form.addRule('required', {
        validate: function (value, options) {
            return !!value.trim();
        },
        useTemplate: false,
        message: function (inputName) {
            return inputName + ' must be not blank!';
        }
    });

    $.form.addRule('password', {
        validate: function (value, options) {
            var regex = $.form.generatePasswordRegex(options.password);

            return !!value.trim() && regex.test(value);
        },
        useTemplate: false,
        message: function (inputName) {
            return inputName + ' must be between 8 and 32 characters long; contain a number, an uppercase letter and one of following special characters <b>!@#$%^&*-</b> !';
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
        trimData: true,
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
        emailRegex: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,
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
