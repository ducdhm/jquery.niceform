import checkRequiredFields from '../rules/checkRequiredFields';
import checkDateTimeFields from '../rules/checkDateTimeFields';
import checkDateFields from '../rules/checkDateFields';
import checkTimeFields from '../rules/checkTimeFields';
import checkEmailFields from '../rules/checkEmailFields';
import checkNumberFields from '../rules/checkNumberFields';
import checkPasswordFields from '../rules/checkPasswordFields';
import checkRePasswordFields from '../rules/checkRePasswordFields';
import checkRegexFields from '../rules/checkRegexFields';
import checkUrlFields from '../rules/checkUrlFields';
import checkSimpleFields from '../rules/checkSimpleFields';
import checkReallySimpleFields from '../rules/checkReallySimpleFields';
import log from '../utils/log';

export default (form, options) => {
    let errorFields = [];
    let resultRequired = checkRequiredFields(form, options.locale.requiredErrorMessage);
    if (resultRequired.length > 0) {
        errorFields = errorFields.concat(resultRequired);
    }
    
    if (typeof window.moment === 'undefined') {
        log(`WARN :: Can not find "moment", ignore ".date", ".datetime", ".time" fields`);
    } else {
        let resultDateTime = checkDateTimeFields(form, options.locale.datetime, options.locale.datetimeErrorMessage);
        if (resultDateTime.length > 0) {
            errorFields = errorFields.concat(resultDateTime);
        }
        
        let resultDate = checkDateFields(form, options.locale.date, options.locale.dateErrorMessage);
        if (resultDate.length > 0) {
            errorFields = errorFields.concat(resultDate);
        }
        
        let resultTime = checkTimeFields(form, options.locale.time, options.locale.timeErrorMessage);
        if (resultTime.length > 0) {
            errorFields = errorFields.concat(resultTime);
        }
    }
    
    let resultEmail = checkEmailFields(form, options.regex.email, options.locale.emailErrorMessage);
    if (resultEmail.length > 0) {
        errorFields = errorFields.concat(resultEmail);
    }
    
    let resultNumber = checkNumberFields(form, options.locale.numberErrorMessage);
    if (resultNumber.length > 0) {
        errorFields = errorFields.concat(resultNumber);
    }
    
    let resultUrl = checkUrlFields(form, options.regex.url, options.locale.urlErrorMessage);
    if (resultUrl.length > 0) {
        errorFields = errorFields.concat(resultUrl);
    }
    
    let resultPassword = checkPasswordFields(form, options.password, options.locale.passwordErrorMessage);
    if (resultPassword.length > 0) {
        errorFields = errorFields.concat(resultPassword);
    }
    
    let resultPasswordConfirm = checkRePasswordFields(form, options.locale.repasswordErrorMessage);
    if (resultPasswordConfirm.length > 0) {
        errorFields = errorFields.concat(resultPasswordConfirm);
    }
    
    let resultSimple = checkSimpleFields(form, options.regex.simple, options.locale.simpleErrorMessage);
    if (resultSimple.length > 0) {
        errorFields = errorFields.concat(resultSimple);
    }
    
    let resultReallySimple = checkReallySimpleFields(form, options.regex.reallySimple, options.locale.reallySimpleErrorMessage);
    if (resultReallySimple.length > 0) {
        errorFields = errorFields.concat(resultReallySimple);
    }
    
    let resultRegex = checkRegexFields(form);
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
        typeof options.showError === 'function' && options.showError(form, errorFields, options);
        
        return false;
    } else {
        return true;
    }
};
