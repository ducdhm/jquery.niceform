import shouldBeCheck from '../utils/shouldBeCheck';
import testRegex from '../validators/testRegex';

export default (form) => {
    let errorFields = [];
    
    form.find('.regex').each(function () {
        const input = $(this);
        const regex = input.attr('data-regex');
        
        if (shouldBeCheck(input) && !testRegex(new RegExp(regex), this.value)) {
            input.attr('data-error-message', input.attr('data-message') || input.attr('data-regex-message'));
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
