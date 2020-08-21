import $ from 'jquery';

import './utils/emulateFormData';
import './utils/serializeWithFiles';

import defaults from './defaults/';
import defaultEn from './locales/en';
import defaultVi from './locales/vi';
import validateForm from './form/validateForm';
import postForm from './form/postForm';
import clearValue from './form/clearValue';
import disableForm from './form/disableForm';
import enableForm from './form/enableForm';
import showMessage from './form/showMessage';
import hideMessage from './form/hideMessage';
import showElement from './utils/showElement';
import hideElement from './utils/hideElement';

export default class NiceForm {
    static DEFAULTS = defaults;

    static version = '@{version}';

    static locales = {
        en: defaultEn,
        vi: defaultVi,
    };

    constructor(form, config) {
        if (!form.jquery || form.length === 0) {
            return;
        }

        const options = this.options = $.extend({}, NiceForm.DEFAULTS, config);
        if (typeof options.locale === 'string') {
            options.locale = NiceForm.locales[options.locale];
        } else {
            let customLocale = options.locale;

            options.locale = {
                ...defaultEn,
                ...customLocale,
            };
        }

        this.form = form;

        form.off('submit').on('submit', function (e) {
            e.preventDefault();

            if (typeof options.hideError === 'function') {
                options.hideError(form, options);
            }

            if (typeof options.onBeforeValidate === 'function') {
                options.onBeforeValidate(form, options);
                form.trigger('nf:onBeforeValidate', [form, options]);
            }

            if (validateForm(form, options)) {
                if (typeof options.onValid === 'function') {
                    options.onValid(form, options);
                    form.trigger('nf:onValid', [form, options]);
                }

                if (options.postFormEnabled === true) {
                    postForm(form, options);
                }
            } else {
                if (typeof options.onInvalid === 'function') {
                    options.onInvalid(form, options);
                    form.trigger('nf:onInvalid', [form, options]);
                }
            }
        });

        form.on('click', '[data-dismiss=message]', function (e) {
            e.preventDefault();

            hideMessage(form, options.animationDuration);
        });
    }

    clearValue(controlSelector) {
        clearValue(this.form, controlSelector);
    }

    enableForm() {
        enableForm(this.form);
    }

    disableForm() {
        disableForm(this.form);
    }

    showMessage(type, title, message) {
        showMessage(this.form, type, title, message, this.options.animationDuration);
    }

    showSuccessMessage(message) {
        showMessage(this.form, 'success', this.options.locale.successTitle, message, this.options.animationDuration);
    }

    showErrorMessage(message) {
        showMessage(this.form, 'danger', this.options.locale.errorTitle, message, this.options.animationDuration);
    }

    hideMessage() {
        hideMessage(this.form, this.options.animationDuration);
    }

    getOptions() {
        return $.extend({}, this.options);
    }

    showElement(element) {
        showElement(element, this.options.animationDuration);
    }

    hideElement(element) {
        hideElement(element, this.options.animationDuration);
    }
}
