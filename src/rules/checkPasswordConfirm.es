export default (form, errorMessage) => {
    let errorFields = [];
    let passwordInputs = form.find('.password');
    
    form.find('.confirm-password, .re-password, .repassword').each(function () {
        const input = $(this);
        if (input.val() !== passwordInputs.val()) {
            input.attr('data-error-message', errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
