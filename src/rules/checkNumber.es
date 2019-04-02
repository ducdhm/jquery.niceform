import shouldBeCheck from '../utils/shouldBeCheck';
import isNumber from '../validate/isNumber';

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
