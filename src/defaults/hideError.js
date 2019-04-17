export default (form, options) => {
    form.find('.has-error').removeClass('has-error');
    form.find('.is-invalid').removeClass('is-invalid').attr('data-error-message', '');
    form.niceform('hideElement', form.find('.nf-error-message'));
    form.niceform('hideMessage');
};
