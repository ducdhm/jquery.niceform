/*!*
 * The jQuery plugin for validate and get/post form data to server (jquery.niceform) plugin v0.1
 * Copyright (c) 2014 Duc Doan Hoang Minh
 *
 * @license https://github.com/bobkhin/jquery.niceform/blob/master/LICENSE
 *
 * Date: Mon, May 19th, 2014 (GTM+7)
 */
(function ($, undefined) {
    /**
     * Init form plugin
     * @param {String|HTMLElement|jQuery} selector Selector, HTMLElement or jQuery object of form
     * @param {String|Object} options Method name or configuration of form plugin
     */
    $.niceform = function (selector, options) {
        return $(selector).form(options);
    };

    /**
     * Apply a rule for form controls
     * @param {String|HTMLElement|jQuery} selector Selector, HTMLElement or jQuery object of controls
     * @param {String} name Rule name
     * @param {Object} options Addition configuration of rule such as min, max, pattern...
     * @return {jQuery}
     */
    $.niceform.applyRule = function (selector, name, options) {
        var targets = $(selector);
        
        if (options.requiredIf === true) {
            targets.attr('data-required-if', true);
            delete options.requiredIf;
        }

        targets.attr('data-niceform', name);

        for (var optionName in options) {
            targets.attr('data-' + optionsName, options[optionName]);
        }

        return targets;
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
                form.trigger('beforeValidate.niceform', options);

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
                    form.trigger('valid.niceform', options);

                    // Callback beforeSubmit
                    form.trigger('beforeSubmit.niceform', options);
                    
                    if (options.preventDefault) {
                        e.preventDefault();

                        var ajaxOptions = options.ajaxOptions;
                        
                        if (ajaxOptions.enable) {
                            ajaxOptions.data = $.extend({}, data, options.ajaxOptions.data || {});
                            if (!ajaxOptions.url) {
                                ajaxOptions.url = form.attr('action');
                            }

                            if(!ajaxOptions.type) {
                                ajaxOptions.type = form.attr('method');
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

                    form.trigger('invalid.niceform', options);
                }
            });

            return form;
        },

        /**
         * Clear value of textbox, textarea. Uncheck all radio button and checkbox. And set selected
         * index of select is -1. NOTE: Not effect with element data-ignore=`clear`
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

            controls.not('[data-ignore=clear]').each(function () {
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

                        var rule = $.niceform.rules[ruleName];
                        
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
                var ruleName = textbox.attr('data-niceform');

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
                    var choosenOne = group.filter('[data-niceform]');
                    choosenOne = choosenOne[0] ? choosenOne.eq(0) : group.eq(0);

                    var name = options.getControlName(choosenOne, form);
                    var ruleName = choosenOne.attr('data-niceform');
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
                    var choosenOne = group.filter('[data-niceform]');
                    choosenOne = choosenOne[0] ? choosenOne.eq(0) : group.eq(0);
    
                    var name = options.getControlName(choosenOne, form);
                    var ruleName = choosenOne.attr('data-niceform');
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
                var ruleName = select.attr('data-niceform');

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

    $.fn.niceform = function (method) {
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jquery.niceform');
        }
    };

})(jQuery);