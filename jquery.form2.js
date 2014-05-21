/*!*
 * jQuery plugin for validate and get/post form data to server (jquery.form2) plugin v0.1
 * Copyright (c) 2014 Duc Doan Hoang Minh
 *
 * @license https://github.com/bobkhin/jquery.form2/blob/master/LICENSE
 *
 * Date: Mon, May 19th, 2014 (GTM+7)
 */
(function ($, undefined) {
    /**
     * Init form plugin
     * @param {String|HTMLElement|jQuery} selector Selector, HTMLElement or jQuery object of form
     * @param {String|Object} options Method name or configuration of form plugin
     */
    $.form2 = function (selector, options) {
        return $(selector).form(options);
    };

    // Set debug mode of form plugin
    $.form2.debug = true;

    /**
     * Log message list
     */
    var log = $.form2.logArray = function () {
        if (!$.form2.debug) {
            return;
        }

        if (console && console.log) {
            if (navigator.appName == 'Microsoft Internet Explorer') {
                if (arguments.length == 1) {
                    console.log(arguments[0]);
                } else if (arguments.length == 2) {
                    console.log(arguments[0], arguments[1]);
                } else if (arguments.length === 3) {
                    console.log(arguments[0], arguments[1], arguments[2]);
                } else {
                    console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
                }
            } else {
                console.log(arguments);
            }
        }
    };

    // List of validation rules
    $.form2.rules = {};

    /**
     * Add a validation rule
     * @param {String} name Rule name
     * @param {Object} options The configuration of rule
     */
    $.form2.addRule = function (name, options) {
        var old = $.form2.rules[name] || {};

        $.form2.rules[name] = $.extend({}, old, options);
    };

    /**
     * Remove a validation rule
     * @param {String} name Name of removed rule
     */
    $.form2.removeRule = function (name) {
        delete $.form2.rules[name];
    };

    /**
     * Apply a rule for form controls
     * @param {String|HTMLElement|jQuery} selector Selector, HTMLElement or jQuery object of controls
     * @param {String} name Rule name
     * @param {Object} options Addition configuration of rule such as min, max, pattern...
     * @return {jQuery}
     */
    $.form2.applyRule = function (selector, name, options) {
        var targets = $(selector);
        
        if (options.requiredIf === true) {
            targets.attr('data-required-if', true);
            delete options.requiredIf;
        }

        targets.attr('data-form2', name);

        for (var optionName in options) {
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
    $.form2.dashToCamel = function (string) {
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
    $.form2.underscoreToCamel = function (string) {
        return string.replace(/(\_[a-z])/g, function ($1) {
            return $1.toUpperCase().replace('_', '');
        });
    };

    /**
     * Convert camel-case string to dash-case string.
     * Example: `bobKhin` to `bob-khin`
     * @param {String} string
     * @returns {String}
     */
    $.form2.camelToDash = function (string) {
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
    $.form2.camelToUnderscore = function (string) {
        return string.replace(/([A-Z])/g, function ($1) {
            return '_' + $1.toLowerCase();
        });
    };

    /**
     * Replace all `-` to space
     * Example: `bob-khin` to `bob khin`
     * @param {String} string
     * @returns {String}
     */
    $.form2.dashToSpace = function (string) {
        return string.replace(/\-/g, ' ');
    };

    /**
     * Replace all `_` to space
     * Example: `bob_khin` to `bob khin`
     * @param {String} string
     * @returns {String}
     */
    $.form2.underscoreToSpace = function (string) {
        return string.replace(/\_/g, ' ');
    };

    /**
     * Capitalise a string
     * @param {String} string
     * @param {Boolean} all Is capitalise first letter of all words or not
     * @returns {String}
     */
    $.form2.capitalise = function (string, all) {
        if (all) {
            return string.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
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
    $.form2.generatePasswordRegex = function (options) {
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
     * Format strings
     * @method format
     * @param {String} string The template string
     * @param {String[]} args Zero or more objects to format, supplied either in a comma-delimited list or as an array
     */
    $.form2.formatString = function (string) {
        var args = arguments;
        var pattern = new RegExp('{([0-' + arguments.length + '])}', 'g');

        return string.replace(pattern, function (match, index) {
            return args[+index + 1];
        });
    };

    // Default configuration of form plugin
    var DEFAULTS = {
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
        ajaxOptions: {
            enable: true,
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
            numberLength: 1,
            errorMessage: 'must be between 8 and 32 characters long; contain a number, an uppercase letter and one of following special characters <b>!@#$%^&*-</b>'
        },
        regex: {
            email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,
            url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
            hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/,
            ip: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:\d{2,5}){0,1}$/
        },
        /**
         * Get control name
         * @param {jQuery} control
         * @param {jQUery} form
         */
        getControlName: function (control, form) {
            var id = control.attr('id') || control.attr('name');
            var label = form.find('label[for=' + id + ']');
            if (label[0]) {
                return label.html().replace(':', '');
            }

            var name = control.attr('name');
            
            if(name) {
                if (name.indexOf('-') > 0) {
                    return $.form2.capitalise($.form2.dashToSpace(name), true);
                }

                if (name.indexOf('_') > 0) {
                    return $.form2.capitalise($.form2.underscoreToSpace(name), true);
                }

                if (name) {
                    return $.form2.capitalise($.form2.dashToSpace($.form2.camelToDash(name)), true);
                }
            }

            return control.attr('data-name') || '';
        },
        errorHandler: function (control, message, form, options) {
            log('Error control', control, message);

            var helpBlock = control.next('.help-block');

            if (helpBlock[0]) {
                helpBlock.show();
            } else {
                control.after(
                    $.form2.formatString('<span class="help-block">{0}</span>', message)
                );
            }
        },
        successHandler: function (control, form, options) {
            log('Success control', control);

            var formGroup = control.closest('.form-group');
            formGroup.removeClass('has-error');
            formGroup.find('.help-block').hide();
        }
    };

    var methods = {
        init: function (options) {
            var form = $(this);

            if ($.isPlainObject(form.data('options'))) {
                return;
            }

            // Options
            options = $.extend(true, {}, DEFAULTS, options);
            form.data('options', options);

            form.on('submit', function (e) {
                // Callback beforeValidate
                if (typeof options.beforeValidate === 'function') {
                    options.beforeValidate.call(this, form, options);
                }

                var results = methods.validate.call(this, options);
                var data = results[0];
                var errorControls = results[1];
                var errorMessages = results[2];
                var successControls = results[3];

                if (typeof options.successHandler === 'function') {
                    for (var i = 0, successControl; successControl = successControls[i]; i++) {
                        options.successHandler.call(successControl, successControl, form, options);
                    }
                }

                // When valid
                if (errorMessages.length === 0) {
                    if (typeof options.whenValid === 'function') {
                        options.whenValid.call(this, options);
                    }

                    // Callback beforeSubmit
                    if (typeof options.beforeSubmit === 'function') {
                        options.beforeSubmit.call(this, data, form, options);
                    }
                    
                    if (options.preventDefault) {
                        e.preventDefault();

                        var ajaxOptions = options.ajaxOptions;
                        
                        if (ajaxOptions.enable) {
                            ajaxOptions.data = $.extend({}, data, options.ajaxOptions.data || {});
                            if (!ajaxOptions.url) {
                                ajaxOptions.url = form.attr('action');
                            }

                            $.ajax(ajaxOptions);
                        }
                    }
                } else {
                    e.preventDefault();

                    if (typeof options.errorHandler === 'function') {
                        for (var i = 0, errorControl; errorControl = errorControls[i]; i++) {
                            options.errorHandler.call(errorControl, errorControl, errorMessages[i], form, options);
                        }
                    }

                    if (typeof options.whenInvalid === 'function') {
                        options.whenInvalid.call(this, options);
                    }
                }
            });

            return form;
        },

        /**
         * Reset form using native event
         * @returns {jQuery} form
         */
        reset: function () {
            var form = $(this);

            form.get(0).reset();

            return form;
        },

        /**
         * Clear value of textbox, textarea. Uncheck all radio button and checkbox. And set selected
         * index of select is -1
         * @param {String} controlSelectors
         * @returns {jQuery} form
         */
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

                if (isSelect) {
                    this.selectedIndex = -1;
                } else if (isCheckbox || isRadio) {
                    control.attr('checked', false);
                } else {
                    control.val('');
                }
            });

            return form;
        },

        /**
         * Disable all control of form
         * @returns {jQuery} form
         */
        disable: function () {
            var form = $(this);
            log('Disable form: ', form);

            form.find('input, button, textarea, select').attr('disabled', true);

            return form;
        },

        /**
         * Enable all control of form
         * @returns {jQuery} form
         */
        enable: function () {
            var form = $(this);
            log('Enable form: ', form);

            form.find('input, button, textarea, select').attr('disabled', false);

            return form;
        },

        /**
         * Validate the form
         * @param options
         * @returns {Array} The data of form, the error controls, the error messages and the success controls
         */
        validate: function (options) {
            var form = $(this);
            var controls = methods.getControls.call(form, true);
            var data = {};
            var errorControls = [];
            var errorMessages = [];
            var succesControls = [];

            log('Validate form: ', form);

            var isIgnored = function (control) {
                var isIgnored = control.is(':disabled');

                if (isIgnored) {
                    log('Is ignored', control);
                }

                return isIgnored;
            };

            var logInfo = function (name, value, ruleName, control) {
                log('Name is: ' + name, 'Value is: ' + ($.isArray(value) ? value.join(', ') : value), 'Rule name is: ' + ruleName, control);
            };

            var checkRule = function (ruleName, control, controlName, value, groupType) {
                if (ruleName !== undefined) {
                    if (options.ignoreHidden && control.is(':hidden')) {
                        log('Control is hidden and will be not validated', control);
                        
                        succesControls.push(control);
                        control.attr('data-success', true);
                    } else {
                        var isRequiredIf = false;
                        if (ruleName.indexOf('|') !== -1) {
                            ruleName = ruleName.split('|');
                            isRequiredIf = ruleName[1] === 'requiredIf';
                            ruleName = ruleName[0];
                        }

                        var rule = $.form2.rules[ruleName];
                        
                        if (rule) {
                            var isOk = rule.validate(control, value, options, groupType);
                            if (isRequiredIf) {
                                isOk = !!value ? isOk : true;
                            }

                            if (isOk) {
                                succesControls.push(control);
                                control.attr('data-success', true);
                            } else {
                                control.attr('data-success', false);
                                errorControls.push(control);
                                errorMessages.push(rule.message(control, controlName, options, groupType));
                            }
                        } else {
                            log(ruleName + ' is not existed in rules!', control);
                        }
                    }
                }
                

                data[control.attr('name')] = value;
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
                var ruleName = textbox.attr('data-form2');

                logInfo(name, value, ruleName, textbox);

                checkRule(ruleName, textbox, name, value);
            });

            // Validate checkboxes
            var checkboxes = controls.checkboxes;
            for (var groupName in checkboxes) {
                var group = checkboxes[groupName];
                if (options.ignoreHidden) {
                    group = group.not(':hidden');
                }
                
                if (group.length > 0) {
                    var choosenOne = group.filter('[data-form2]');
                    choosenOne = choosenOne[0] ? choosenOne.eq(0) : group.eq(0);

                    var name = options.getControlName(choosenOne, form);
                    var ruleName = choosenOne.attr('data-form2');
                    var value = [];

                    group.filter(':checked').each(function () {
                        value.push(this.value);
                    });

                    logInfo(name, value, ruleName, group);

                    checkRule(ruleName, group, name, value, 'checkbox');
                }
            }

            // Validate radios
            var radios = controls.radios;
            for (var groupName in radios) {
                var group = radios[groupName];
                if (options.ignoreHidden) {
                    group = group.not(':hidden');
                }
                
                if (group.length > 0) {
                    var choosenOne = group.filter('[data-form2]');
                    choosenOne = choosenOne[0] ? choosenOne.eq(0) : group.eq(0);
    
                    var name = options.getControlName(choosenOne, form);
                    var ruleName = choosenOne.attr('data-form2');
                    var value = group.filter(':checked').val() || '';
    
                    logInfo(name, value, ruleName, group);
    
                    checkRule(ruleName, group, name, value, 'radio');
                }
            }

            // Validate selects
            var selects = controls.selects;
            selects.each(function () {
                var select = $(this);
                var isMultilple = select.is('[multiple]');
                var value = select.val();
                if (isMultilple) {
                    value = value || [];
                }

                if (isIgnored(select)) {
                    return;
                }

                var name = options.getControlName(select, form);
                var ruleName = select.attr('data-form2');

                logInfo(name, value, ruleName, select);

                checkRule(ruleName, select, name, value, isMultilple ? 'select' : '');
            });

            return [data, errorControls, errorMessages, succesControls];
        },

        /**
         * Get all controls of form with 5 main types is button, textbox, select, checkbox and radio button
         * @param {Boolean} groupByName Will group checkbox, radio button have same name or not.
         * @returns {Object}
         */
        getControls: function (groupByName) {
            var form = $(this);

            log('Get controls of form: ', form);

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
                        newCheckboxes[name] = newCheckboxes[name].add(checkbox);
                    } else {
                        newCheckboxes[name] = checkbox;
                    }
                });
                checkboxes = newCheckboxes;

                var newRadios = {};
                radios.each(function () {
                    var radio = $(this);
                    var name = radio.attr('name');

                    if (name in newRadios) {
                        newRadios[name] = newRadios[name].add(radio);
                    } else {
                        newRadios[name] = radio;
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
            };
        },

        /**
         * Apply data for form
         * @param {Object} data
         * @returns {jQuery} form
         */
        applyData: function (data) {
            var form = $(this);

            log('Apply data for form', data);
            for (var name in data) {
                var control = form.find('[name=' + name + ']');
                var value = data[name];

                if (control.length === 1) {
                    if (control.is(':checkbox')) {
                        if (value === control.val()) {
                            control.prop('checked', true);
                        }
                    } else {
                        control.val(value);
                    }
                } else if (control.length > 1) {
                    if ($.isArray(value)) {
                        for (var i = 0; i < value.length; i++) {
                            control.filter('[value=' + value[i] + ']').prop('checked', true);
                        }
                    } else {
                        control.filter('[value=' + value + ']').prop('checked', true);
                    }
                }
            }

            return form;
        }
    };

    $.fn.form2 = function (method) {
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jquery.form2');
        }
    };

})(jQuery);