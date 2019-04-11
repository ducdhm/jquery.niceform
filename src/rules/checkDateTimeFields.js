import shouldBeCheck from '../utils/shouldBeCheck';

export default (form, format, errorMessage) => {
    let errorFields = [];
    
    if (typeof window.moment === 'undefined') {
        throw new Error('Require moment to validate date time fields');
    }
    
    form.find('.date').each(function () {
        let input = $(this);
        if (shouldBeCheck(input) && moment(this.value, format.date, true).isValid()) {
            input.attr('data-error-message', input.attr('data-date-message') || errorMessage);
            errorFields.push(input);
        }
    });
    
    form.find('.time').each(function () {
        let input = $(this);
        if (shouldBeCheck(input) && moment(this.value, format.time, true).isValid()) {
            input.attr('data-error-message', input.attr('data-time-message') || errorMessage);
            errorFields.push(input);
        }
    });
    
    form.find('.datetime').each(function () {
        let input = $(this);
        if (shouldBeCheck(input) && moment(this.value, format.datetime, true).isValid()) {
            input.attr('data-error-message', input.attr('data-datetime-message') || errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
