import checkRequired from '../rules/checkRequired';
import checkDateTime from '../rules/checkDateTime';
import checkEmail from '../rules/checkEmail';
import checkNumber from '../rules/checkNumber';
import checkPassword from '../rules/checkPassword';
import checkPasswordConfirm from '../rules/checkPasswordConfirm';
import checkRegex from '../rules/checkRegex';
import checkUrl from '../rules/checkUrl';

export default (form, options) => {
    let resultRequired = checkRequired(form, options.requiredErrorFieldMessage);
    if (resultRequired.length > 0) {
        typeof options.showErrorMessage === 'function' && options.showErrorMessage(form, options, options.requiredErrorMessage);
        
        return false;
    } else {
        let errorFields = [];
        let errorMessages = [];
        
        let resultDateTime = checkDateTime(form, options.format, options.dateTimeErrorFieldMessage);
        if (resultDateTime.length > 0) {
            errorFields.push(resultDateTime);
            errorMessages.push(options.dateTimeErrorMessage);
        }
        
        let resultEmail = checkEmail(form, options.emailErrorFieldMessage);
        if (resultEmail.length > 0) {
            errorFields.push(resultEmail);
            errorMessages.push(options.emailErrorMessage);
        }
        
        let resultNumber = checkNumber(form, options.numberErrorFieldMessage);
        if (resultNumber.length > 0) {
            errorFields.push(resultNumber);
            errorMessages.push(options.numberErrorMessage);
        }
        
        let resultUrl = checkUrl(form, options.urlErrorFieldMessage);
        if (resultUrl.length > 0) {
            errorFields.push(resultUrl);
            errorMessages.push(options.urlErrorMessage);
        }
        
        let resultPassword = checkPassword(form, options.password, options.passwordErrorFieldMessage);
        if (resultPassword.length > 0) {
            errorFields.push(resultPassword);
            errorMessages.push(options.passwordErrorMessage);
        }
        
        let resultPasswordConfirm = checkPasswordConfirm(form, options.confirmPasswordErrorFieldMessage);
        if (resultPasswordConfirm.length > 0) {
            errorFields.push(resultPasswordConfirm);
            errorMessages.push(options.confirmPasswordErrorMessage);
        }
        
        let resultRegex = checkRegex(form);
        if (resultRegex.length > 0) {
            errorFields.push(resultRegex);
            resultRegex.forEach(function (field) {
                errorMessages.push(field.attr('data-error-message'));
            });
        }
        
        if (typeof options.validate === 'function') {
            let resultCustom = options.validate(form, options);
            if (resultCustom && resultCustom.errorFields && resultCustom.errorFields.length > 0) {
                errorFields.push(resultCustom.errorFields);
                errorMessages.push(resultCustom.errorMessages);
            }
        }
        
        if (errorFields.length > 0) {
            typeof options.showError === 'function' && options.showError(form, errorFields, errorMessages);
            
            return false;
        } else {
            return true;
        }
    }
};
