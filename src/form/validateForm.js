import checkRequired from '../rules/checkRequiredFields';
import checkDateTime from '../rules/checkDateTimeFields';
import checkEmail from '../rules/checkEmailFields';
import checkNumber from '../rules/checkNumberFields';
import checkPassword from '../rules/checkPasswordFields';
import checkPasswordConfirm from '../rules/checkRePasswordFields';
import checkRegex from '../rules/checkRegexFields';
import checkUrl from '../rules/checkUrlFields';

export default (form, options) => {
    let errorFields = [];
    let resultRequired = checkRequired(form, options.requiredErrorMessage);
    if (resultRequired.length > 0) {
        errorFields = errorFields.concat(resultRequired);
    }
    
    let resultDateTime = checkDateTime(form, options.format, options.dateTimeErrorMessage);
    if (resultDateTime.length > 0) {
        errorFields = errorFields.concat(resultDateTime);
    }
    
    let resultEmail = checkEmail(form, options.emailErrorMessage);
    if (resultEmail.length > 0) {
        errorFields = errorFields.concat(resultEmail);
    }
    
    let resultNumber = checkNumber(form, options.numberErrorMessage);
    if (resultNumber.length > 0) {
        errorFields = errorFields.concat(resultNumber);
    }
    
    let resultUrl = checkUrl(form, options.urlErrorMessage);
    if (resultUrl.length > 0) {
        errorFields = errorFields.concat(resultUrl);
    }
    
    let resultPassword = checkPassword(form, options.password, options.passwordErrorMessage);
    if (resultPassword.length > 0) {
        errorFields = errorFields.concat(resultPassword);
    }
    
    let resultPasswordConfirm = checkPasswordConfirm(form, options.repasswordErrorMessage);
    if (resultPasswordConfirm.length > 0) {
        errorFields = errorFields.concat(resultPasswordConfirm);
    }
    
    let resultRegex = checkRegex(form);
    if (resultRegex.length > 0) {
        errorFields = errorFields.concat(resultRegex);
    }
    
    if (typeof options.validate === 'function') {
        let resultCustom = options.validate(form, options);
        if (resultCustom && resultCustom.length > 0) {
            errorFields = errorFields.concat(resultCustom);
        }
    }
    
    if (errorFields.length > 0) {
        typeof options.showError === 'function' && options.showError(form, errorFields);
        
        return false;
    } else {
        return true;
    }
};
