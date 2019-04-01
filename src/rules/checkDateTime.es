import shouldBeCheck from '../utils/shouldBeCheck.es';

export default (form, format, errorMessage) => {
    let errorFields = [];
    
    if (typeof window.moment === 'undefined') {
        throw new Error('Require moment to validate date time fields');
    }
    
    form.find('.date').each(function () {
        let input = $(this);
        if (shouldBeCheck(input) && moment(this.value, format.date, true).isValid()) {
            input.attr('data-error-message', errorMessage);
            errorFields.push(input);
        }
    });
    
    form.find('.time').each(function () {
        let input = $(this);
        if (shouldBeCheck(input) && moment(this.value, format.time, true).isValid()) {
            input.attr('data-error-message', errorMessage);
            errorFields.push(input);
        }
    });
    
    form.find('.datetime').each(function () {
        let input = $(this);
        if (shouldBeCheck(input) && moment(this.value, format.datetime, true).isValid()) {
            input.attr('data-error-message', errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
