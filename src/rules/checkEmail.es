import shouldBeCheck from '../utils/shouldBeCheck';
import isValidEmail from '../validate/isValidEmail';

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
