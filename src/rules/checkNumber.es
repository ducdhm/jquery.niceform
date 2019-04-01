import shouldBeCheck from '../utils/shouldBeCheck.es';
import isNumber from '../validate/isNumber.es';

export default (form, errorMessage) => {
    let errorFields = [];
    
    form.find('.number, .digit, .numeric').each(function () {
        const input = $(this);
        
        if (shouldBeCheck(input) && !isNumber(this.value)) {
            input.attr('data-error-message', errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
