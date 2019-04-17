export default (form, field, message) => {
    let formGroup = field.closest('.form-group');
    
    field.addClass('is-invalid');
    formGroup.addClass('has-error');
    
    let errorMessageEl = formGroup.find('.nf-error-message');
    if (errorMessageEl.length === 0) {
        errorMessageEl = $(`<div class="nf-error-message text-danger small" style="display: none;"></div>`);
        field.after(errorMessageEl);
    }
    
    errorMessageEl.html(message);
    form.niceform('showElement', errorMessageEl);
};
