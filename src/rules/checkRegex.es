import shouldBeCheck from '../utils/shouldBeCheck';
import testRegex from '../validate/testRegex';

export default (form) => {
    let errorFields = [];
    
    form.find('.number, .digit, .numeric').each(function () {
        const input = $(this);
        const regex = input.attr('data-regex');
        
        if (shouldBeCheck(input) && !testRegex(regex, this.value)) {
            input.attr('data-error-message', input.attr('data-message'));
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
