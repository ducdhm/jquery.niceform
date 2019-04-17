import shouldBeCheck from '../utils/shouldBeCheck';
import testNumber from '../validators/testNumber';

export default (form, errorMessage) => {
    let errorFields = [];
    
    form.find('.number').each(function () {
        const input = $(this);
        
        if (shouldBeCheck(input) && !testNumber(this.value)) {
            input.attr('data-error-message', input.attr('data-number-message') || errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
