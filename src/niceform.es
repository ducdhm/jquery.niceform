import $ from 'jquery';
import defaults from './defaults';
import validateForm from './form/validateForm';
import doPostForm from './form/doPostForm';
import clearValue from './form/clearValue';
import disableForm from './form/disableForm';
import enableForm from './form/enableForm';
import resetForm from './form/resetForm';

export default class NiceForm {
    static DEFAULTS = defaults;
    static version = '@{version}';
    
    form;
    options;
    
    constructor(form, config) {
        const options = $.extend({}, defaults, config);
    
        form.off('submit').on('submit', function (e) {
            if (typeof options.hideError === 'function') {
                options.hideError(form, options);
            }
        
            if (validateForm(form, options)) {
                if (typeof options.onValid === 'function') {
                    options.onValid(form, options);
                }
            
            
                if (options.postFormEnabled === true) {
                    e.preventDefault();
                
                    doPostForm(form, options);
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
}
