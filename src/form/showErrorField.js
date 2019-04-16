import $ from 'jquery';

export default (field, message) => {
    let formGroup = field.closest('.form-group');
    
    field.addClass('is-invalid');
    formGroup.addClass('has-error');
    
    let errorMessage = formGroup.find('.nf-error-message');
    if (errorMessage.length === 0) {
        errorMessage = $(`<span class="nf-error-message help-block text-danger small" style="display: none;"></span>`);
        field.after(errorMessage);
    }
    
    errorMessage.html(message);
    errorMessage.stop().animate({
        opacity: 1,
        height: 'show'
    }, 200);
};
