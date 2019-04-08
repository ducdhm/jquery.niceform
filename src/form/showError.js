import $ from 'jquery';

export default (form, errorFields, errorMessages) => {
    // Find existing `div.form-error-msg` and create if not
    let formMessage = form.find('.form-error-msg');
    if (formMessage.length === 0) {
        formMessage = $(`<div class="alert alert-danger form-error-msg fade" style="display: none;"></div>`);
        form.prepend(formMessage);
    }
    
    // Generate error title and details
    let errorHtml = '<a class="close" data-dismiss="alert">&times;</a>';
    errorHtml += `<p class="form-error-title"><b>Error</b></p>`;
    errorHtml += `<ul class="form-error-details">`;
    errorMessages.forEach(function (msg) {
        errorHtml += `<li>${msg}</li>`;
    });
    errorHtml += `</ul>`;
    formMessage.html(errorHtml);
    
    // Animate if hidden
    if (formMessage.is(':hidden')) {
        formMessage.stop().animate({
            opacity: 1,
            height: 'show'
        }, 200);
    }
    
    // Show error state
    errorFields.forEach(function (field) {
        field.addClass('error-field');
        field.closest('.form-group').addClass('has-error');
    });
    
    
    // Scroll to error messages
    $('body, html').stop().animate({
        scrollTop: formMessage.offset().top - 140
    }, 200);
};
