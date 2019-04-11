export default (form) => {
    form.find('.has-error').removeClass('has-error');
    form.find('.is-invalid').removeClass('is-invalid');
    form.find('.nf-error-message').hide();
};
