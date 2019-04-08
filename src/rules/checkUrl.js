import shouldBeCheck from '../utils/shouldBeCheck';
import isValidUrl from '../utils/isValidUrl';

export default (form, errorMessage) => {
    let errorFields = [];
    
    form.find('.url, .href').each(function () {
        const input = $(this);
        
        if (shouldBeCheck(input) && !isValidUrl(this.value)) {
            input.attr('data-error-message', errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
