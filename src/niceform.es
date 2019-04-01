import $ from 'jquery';
import defaults from './defaults.es';
import checkRequired from './rules/checkRequired.es';
import validateForm from './form/validateForm.es';

const makeNiceForm = (form, config) => {
    const options = $.extend({}, defaults, config);
    
    form.on('submit', function (e) {
        if (validateForm(form, config)) {
        
        } else {
        
        }
    });
};
