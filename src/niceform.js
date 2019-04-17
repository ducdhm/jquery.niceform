import $ from 'jquery';

require('./utils/emulateFormData');
require('./utils/serializeWithFiles');

import defaults from './defaults/';
import validateForm from './form/validateForm';
import postForm from './form/postForm';
import clearValue from './form/clearValue';
import disableForm from './form/disableForm';
import enableForm from './form/enableForm';
import resetForm from './form/resetForm';
import showMessage from './form/showMessage';
import hideMessage from './form/hideMessage';

import showElement from './utils/showElement';
import hideElement from './utils/hideElement';

export default class NiceForm {
    static DEFAULTS = defaults;
    static version = `${__VERSION__}`;
    
    constructor(form, config) {
        if (!form.jquery || form.length === 0) {
            return;
        }
    
        const options = this.options = $.extend({}, NiceForm.DEFAULTS, config);
        this.form = form;
        
        form.off('submit').on('submit', function (e) {
            e.preventDefault();
            
            if (typeof options.hideError === 'function') {
                options.hideError(form, options);
            }
            
            if (validateForm(form, options)) {
                if (typeof options.onValid === 'function') {
                    options.onValid(form, options);
                }
                
                if (options.postFormEnabled === true) {
                    postForm(form, options);
                }
            } else {
                if (typeof options.onInvalid === 'function') {
                    options.onInvalid(form, options);
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
    
    resetForm() {
        resetForm(this.form);
    }
    
    showMessage(type, title, message) {
        showMessage(this.form, type, title, message, this.options.animationDuration);
    }
    
    showSuccessMessage(message) {
        showMessage(this.form, 'success', 'Success!', message, this.options.animationDuration);
    }
    
    showErrorMessage(message) {
        showMessage(this.form, 'danger', 'Error!', message, this.options.animationDuration);
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
