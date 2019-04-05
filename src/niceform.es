import $ from 'jquery';
import defaults from './defaults';
import validateForm from './form/validateForm';
import doPostForm from './form/doPostForm';

const makeNiceForm = (form, config) => {
    const options = $.extend({}, defaults, config);
    
    form.off('submit').on('submit', function (e) {
        if (typeof options.hideError === 'function') {
            options.hideError(form, options);
        }
        
        if (validateForm(form, options)) {
            if (typeof options.onValid === 'function') {
                options.onValid(form, options);
            }
    
    
            if (options.allowPostForm === true) {
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
    
    form.data('nfOptions', options);
    
    return form;
};
