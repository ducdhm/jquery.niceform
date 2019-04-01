export default (form, passwordInputs, errorMessage) => {
    let errorFields = [];
    
    form.find('.confirm-password, .re-password, .repassword').each(function () {
        const input = $(this);
        if (input.val() !== passwordInputs.val()) {
            input.attr('data-error-message', errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
