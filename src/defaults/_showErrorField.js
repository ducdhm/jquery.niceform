export default (form, field, message) => {
    if (!field.attr('data-hide-message')) {
        let formGroup = field.closest('.form-group');
        let inputGroup = field.closest('.input-group');
        let feedback = formGroup.find('.form-control-feedback');

        field.addClass('is-invalid');
        formGroup.addClass('has-error');

        let errorMessageEl = formGroup.find('.nf-error-message');
        if (errorMessageEl.length === 0) {
            errorMessageEl = $(`<div class="nf-error-message text-danger small" style="display: none;"></div>`);

            if (inputGroup.length > 0) {
                inputGroup.after(errorMessageEl);
            } else if (feedback.length > 0) {
                feedback.after(errorMessageEl)
            } else {
                field.after(errorMessageEl)
            }
        }

        errorMessageEl.html(message);
        form.niceform('showElement', errorMessageEl);
    }
};
