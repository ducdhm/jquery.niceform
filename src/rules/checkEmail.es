import shouldBeCheck from '../utils/shouldBeCheck.es';
import isValidEmail from '../validate/isValidEmail.es';

export default (form, errorMessage) => {
    let errorFields = [];
    
    form.find('.email').each(function () {
        const input = $(this);
        
        if (shouldBeCheck(input) && !isValidEmail(this.value)) {
            input.attr('data-error-message', errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
