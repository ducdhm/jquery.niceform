import showError from './form/showError';
import hideError from './form/hideError';
import processResponse from './form/processResponse';

export default {
    postFormEnabled: true,
    postUrl: null,
    
    format: {
        date: 'DD-MM-YYYY',
        time: 'HH:mm',
        datetime: 'DD-MM-YYYY HH:mm'
    },
    
    password: {
        min: 6,
        max: 32,
        specialLength: 1,
        uppercaseLength: 1,
        numberLength: 1
    },
    
    requiredErrorMessage: 'This field is required',
    dateTimeErrorMessage: 'Please enter valid date time',
    emailErrorMessage: 'Please check the format of your email address, it should read like ben@somewhere.com',
    numberErrorMessage: 'Please enter digits only',
    urlErrorMessage: 'Please enter valid website address',
    passwordErrorMessage: 'Your password must be at least 6 characters and it must contain numbers, letters and at least 1 special character',
    repasswordErrorMessage: 'Please confirm your password',
    
    showError,
    hideError,
    
    processResponse,
    
    onValid: null,
    onInvalid: null,
    
    onBeforePostForm: null,
    
    onSuccess: null,
    onError: null
};
