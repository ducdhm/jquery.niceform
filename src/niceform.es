import $ from 'jquery';
import defaults from './defaults';
import validateForm from './form/validateForm';

const makeNiceForm = (form, config) => {
    const options = $.extend({}, defaults, config);
    
    form.on('submit', function (e) {
        if (validateForm(form, config)) {
        
        } else {
        
        }
    });
};
