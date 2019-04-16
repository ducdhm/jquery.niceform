import showError from './form/showError';
import showErrorField from './form/showErrorField';
import hideError from './form/hideError';
import hideErrorField from './form/hideErrorField';
import processAjaxResponse from './form/processAjaxResponse';

window.__NICEFORM_DEBUG__ = true;

export default {
    postFormEnabled: true,
    postUrl: null,
    
    ajaxOptions: {
        type: 'POST',
        dataType: 'JSON'
    },
    
    format: {
        date: 'DD/MM/YYYY',
        time: 'HH:mm',
        datetime: 'DD/MM/YYYY HH:mm'
    },
    
    password: {
        min: 6,
        max: 32,
        specialLength: 1,
        uppercaseLength: 1,
        numberLength: 1
    },
    
    requiredErrorMessage: 'This field is required',
    dateErrorMessage: 'Please check the format of your date, it should be like 14/02/2000',
    timeErrorMessage: 'Please check the format of your time, it should be like 14:02',
    datetimeErrorMessage: 'Please check the format of your date time, it should be like 14/02/2000 14:02',
    emailErrorMessage: 'Please check the format of your email address, it should read like someone@somewhere.com',
    numberErrorMessage: 'Please enter digits only',
    urlErrorMessage: 'Please enter valid website address',
    passwordErrorMessage: 'Your password must be at least 6 characters and it must contain numbers, letters and at least 1 special character',
    repasswordErrorMessage: 'Please confirm your password',
    
    showError,
    hideError,
    
    showErrorField,
    hideErrorField,
    
    processAjaxResponse,
    
    onValid: null,
    onInvalid: null,
    
    onBeforeSerializeForm: null,
    onBeforePostForm: null,
    
    onAjaxSuccess: null,
    onAjaxError: null
};
