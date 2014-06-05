/*!*
 * Basic rules for jquery.niceform
 * Copyright (c) 2014 Duc Doan Hoang Minh
 *
 * @license https://github.com/bobkhin/jquery.niceform/blob/master/LICENSE
 *
 * Date: Mon, May 19th, 2014 (GTM+7)
 */
(function ($) {
    var niceForm = $.niceForm;

    niceForm.addRule('required', {
        validate: function (control, value, options, groupType) {
            if (groupType) {
                return value.length > 0;
            } else {
                return !!value;
            }
        },
        message: function (control, controlName, options, groupType) {
            if (groupType) {
                if (groupType === 'radio') {
                    return niceForm.formatString('Please select {0}', controlName);
                } else {
                    return niceForm.formatString('Please select at least one of {0}', controlName);
                }
            } else {
                return controlName + ' must be not blank';
            }

        }
    });

    niceForm.addRule('password', {
        validate: function (control, value, options, groupType) {
            var regex = niceForm.generatePasswordRegex(options.password);

            return !!value && regex.test(value);
        },
        message: function (control, controlName, options, groupType) {
            return niceForm.formatString('{0} {1}', controlName, options.password.errorMessage);
        }
    });

    niceForm.addRule('repassword', {
        validate: function (control, value, options, groupType) {
            var txtPassword = control.closest('form').find(':password').not(control);
            var password = txtPassword.val();
            var isRequiredIf = txtPassword.is('[data-niceForm$=requiredIf]');
            
            if (isRequiredIf) {
                if (password) {
                    return !!value && value === password;
                } else {
                    return true;
                }
            } else {
                if (txtPassword.attr('data-success') === 'false') {
                    return false;
                } else {
                    if (password) {
                        return !!value && value === password;
                    }
                }
            }
        },
        message: function (control, controlName, options, groupType) {
            return 'Please re-enter your password for confirmation';
        }
    });

    niceForm.addRule('limited', {
        validate: function (control, value, options, groupType) {
            var min;
            var max;
            if (groupType) {
                var chooseOne = control.filter('[data-niceForm]');
                min = +chooseOne.attr('data-min');
                max = +chooseOne.attr('data-max');
            } else {
                min = +control.attr('data-min');
                max = +control.attr('data-max');
            }

            if (groupType) {
                return value.length > min && value.length < max;
            } else {
                return !!value && value.length < max && value.length > min;
            }
        },
        message: function (control, controlName, options, groupType) {
            var min;
            var max;
            if (groupType) {
                var chooseOne = control.filter('[data-niceForm]');
                min = chooseOne.attr('data-min');
                max = chooseOne.attr('data-max');
            } else {
                min = control.attr('data-min');
                max = control.attr('data-max');
            }

            if (groupType) {
                return niceForm.formatString('You can select {0}-{1} {2}', min, max, controlName);
            } else {
                return niceForm.formatString('{0} must be between {1} and {2} characters long', controlName, min, max);
            }
        }
    });

    niceForm.addRule('minimum', {
        validate: function (control, value, options, groupType) {
            var min;
            if (groupType) {
                var chooseOne = control.filter('[data-niceForm]');
                min = +chooseOne.attr('data-min');
            } else {
                min = +control.attr('data-min');
            }

            if (groupType) {
                return value.length > min;
            } else {
                return !!value && value.length > min;
            }
        },
        message: function (control, controlName, options, groupType) {
            var min;
            if (groupType) {
                var chooseOne = control.filter('[data-niceForm]');
                min = chooseOne.attr('data-min');
            } else {
                min = control.attr('data-min');
            }

            if (groupType) {
                return niceForm.formatString('You must be select at least {0} {1}', min, controlName);
            } else {
                return niceForm.formatString('Must be at least {0} characters long', min);
            }
        }
    });

    niceForm.addRule('maximum', {
        validate: function (control, value, options, groupType) {
            var max;
            if (groupType) {
                var chooseOne = control.filter('[data-niceForm]');
                max = +chooseOne.attr('data-max');
            } else {
                max = +control.attr('data-max');
            }

            if (groupType) {
                return value.length < max;
            } else {
                return !!value && value.length < max;
            }
        },
        message: function (control, controlName, options, groupType) {
            var max;
            if (groupType) {
                var chooseOne = control.filter('[data-niceForm]');
                max = chooseOne.attr('data-max');
            } else {
                max = control.attr('data-max');
            }

            if (groupType) {
                return niceForm.formatString('Please only select {0} {1} at max', max, controlName);
            } else {
                return niceForm.formatString('Maximum length of {0} is {1} characters long', controlName, max);
            }
        }
    });

    niceForm.addRule('exact', {
        validate: function (control, value, options, groupType) {
            var length = +control.attr('data-length');

            return value.length === length;
        },
        message: function (control, controlName, options, groupType) {
            return niceForm.formatString('{0} length must be {1} characters long', controlName, control.attr('data-length'));
        }
    });

    niceForm.addRule('integer', {
        validate: function (control, value, options, groupType) {
            var min = control.attr('data-min');
            var max = control.attr('data-max');

            return !!value && !isNaN(value) && (!!min ? +value >= +min : true) && (!!max ? +value <= +max : true);
        },
        message: function (control, controlName, options, groupType) {
            var min = control.attr('data-min');
            var max = control.attr('data-max');

            return niceForm.formatString('{0} must be digits{1}{2}', controlName, (!!min ? ', minimum is ' + min : ''), (!!max ? ', maximum is ' + max : ''));
        }
    });

    niceForm.addRule('email', {
        validate: function (control, value, options, groupType) {
            return options.regex.email.test(value);
        },
        message: function (control, controlName, options, groupType) {
            return niceForm.formatString('{0} is invalid', controlName);
        }
    });

    niceForm.addRule('regex', {
        validate: function (control, value, options, groupType) {
            var regex = new RegExp(control.attr('data-regex'));

            return regex.test(value);
        },
        message: function (control, controlName, options, groupType) {
            return control.attr('data-message');
        }
    });

    niceForm.addRule('url', {
        validate: function (control, value, options, groupType) {
            return options.regex.url.test(value);
        },
        message: function (control, controlName, options, groupType) {
            return niceForm.formatString('{0} is invalid', controlName);
        }
    });

    niceForm.addRule('ip', {
        validate: function (control, value, options, groupType) {
            return options.regex.ip.test(value);
        },
        message: function (control, controlName, options, groupType) {
            return niceForm.formatString('{0} is invalid', controlName);
        }
    });

    niceForm.addRule('hex', {
        validate: function (control, value, options, groupType) {
            return options.regex.hex.test(value);
        },
        message: function (control, controlName, options, groupType) {
            return niceForm.formatString('{0} is invalid', controlName);
        }
    });

    niceForm.addRule('date', {
        validate: function (control, value, options, groupType) {
            if (moment === undefined) {
                $.error('Require MomentJs for validating Date');
                return false;
            }

            return moment(value, options.format.date, true).isValid();
        },
        message: function (control, controlName, options, groupType) {
            return niceForm.formatString('{0} is invalid', controlName);
        }
    });

    niceForm.addRule('time', {
        validate: function (control, value, options, groupType) {
            if (moment === undefined) {
                $.error('Require MomentJs for validating Time');
                return false;
            }

            return moment(value, options.format.time, true).isValid();
        },
        message: function (control, controlName, options, groupType) {
            return niceForm.formatString('{0} is invalid', controlName);
        }
    });

    niceForm.addRule('datetime', {
        validate: function (control, value, options, groupType) {
            if (moment === undefined) {
                $.error('Require MomentJs for validating DateTime');
                return false;
            }

            return moment(value, options.format.datetime, true).isValid();
        },
        message: function (control, controlName, options, groupType) {
            return niceForm.formatString('{0} is invalid', controlName);
        }
    });

})(jQuery);