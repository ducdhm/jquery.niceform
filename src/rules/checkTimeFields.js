import shouldBeCheck from '../utils/shouldBeCheck';

export default (form, format, errorMessage) => {
    let errorFields = [];
    
    form.find('.time').each(function () {
        let input = $(this);
        if (shouldBeCheck(input) && !moment(this.value, format, true).isValid()) {
            input.attr('data-error-message', input.attr('data-time-message') || errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
