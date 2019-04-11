import $ from 'jquery';

export default (form, errorFields) => {
    // Show error state
    errorFields.forEach(function (field) {
        let formGroup = field.closest('.form-group');
        
        field.addClass('is-invalid');
        formGroup.addClass('has-error');
        
        let errorMessage = formGroup.find('.nf-error-message');
        if (errorMessage.length === 0) {
            errorMessage = $(`<span class="nf-error-message help-block text-danger small"></span>`);
            field.after(errorMessage);
        }
        
        errorMessage.html(field.attr('data-error-message'));
        errorMessage.stop().animate({
            opacity: 1,
            height: 'show'
        }, 200);
    });
};
