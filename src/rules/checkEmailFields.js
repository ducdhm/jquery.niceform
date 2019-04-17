import shouldBeCheck from '../utils/shouldBeCheck';
import testEmail from '../validators/testEmail';

export default (form, errorMessage) => {
    let errorFields = [];
    
    form.find('.email').each(function () {
        const input = $(this);
        
        if (shouldBeCheck(input) && !testEmail(this.value)) {
            input.attr('data-error-message', input.attr('data-email-message') || errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
