import shouldBeCheck from '../utils/shouldBeCheck';
import testRegex from '../validators/testRegex';

export default (form, format, errorMessage) => {
    let errorFields = [];
    
    form.find('.simple').each(function () {
        const input = $(this);
        
        if (shouldBeCheck(input) && !testRegex(format, this.value)) {
            input.attr('data-error-message', input.attr('data-simple-message') || errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
