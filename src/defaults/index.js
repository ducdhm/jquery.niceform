import showError from './showError';
import hideError from './hideError';
import processAjaxResponse from './processAjaxResponse';
import onAjaxSuccess from './onAjaxSuccess';
import onAjaxError from './onAjaxError';

window.__NICEFORM_DEBUG__ = true;

export default {
    postFormEnabled: true,
    postUrl: null,
    
    ajax: {
        type: 'POST',
        dataType: 'JSON'
    },
    
    password: {
        min: 6,
        max: 32,
        specialLength: 1,
        uppercaseLength: 1,
        numberLength: 1
    },
    
    animationDuration: 200,
    
    locale: {
        date: 'DD/MM/YYYY',
        time: 'HH:mm',
        datetime: 'DD/MM/YYYY HH:mm',
    
        successMessage: 'The form has been successfully submitted',
    
        requiredErrorMessage: 'This field is required',
        dateErrorMessage: 'Please check the format of your date, it should be like 14/02/2000',
        timeErrorMessage: 'Please check the format of your time, it should be like 14:02',
        datetimeErrorMessage: 'Please check the format of your date time, it should be like 14/02/2000 14:02',
        emailErrorMessage: 'Please check the format of your email address, it should read like someone@somewhere.com',
        numberErrorMessage: 'Please enter digits only',
        urlErrorMessage: 'Please enter valid website address',
        passwordErrorMessage: 'Your password must be at least 6 characters and it must contain numbers, letters and at least 1 special character',
        repasswordErrorMessage: 'Please confirm your password',
        unknownErrorMessage: 'Sorry, an error occurred attempting to submit the form. Please contact the site administrator to resolve!',
    },
    
    validate: null,
    
    showError,
    hideError,
    
    processAjaxResponse,
    
    onValid: null,
    onInvalid: null,
    
    onBeforeSerializeForm: null,
    onBeforePostForm: null,
    
    onAjaxSuccess,
    onAjaxError
};
