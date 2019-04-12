export default (form) => {
    form.find('.has-error').removeClass('has-error');
    form.find('.is-invalid').removeClass('is-invalid').attr('data-error-message', '');
    form.find('.nf-error-message').stop().animate({
        opacity: 0,
        height: 'hide'
    }, 200);
};
