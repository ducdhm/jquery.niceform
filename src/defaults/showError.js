import showErrorField from './_showErrorField';

export default (form, errorFields, options) => {
    form.niceform('showErrorMessage', 'Please correct your invalid fields!');
    
    errorFields.forEach(function (field) {
        showErrorField(form, field, field.attr('data-error-message'));
    });
};
