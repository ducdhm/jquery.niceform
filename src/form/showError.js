export default (form, errorFields) => {
    const options = form.data('niceform').options;
    
    form.niceform('showErrorMessage', 'Please correct your invalid fields!');
    
    // Show error state
    errorFields.forEach(function (field) {
        typeof options.showErrorField === 'function' && options.showErrorField(field, field.attr('data-error-message'));
    });
};
