export default (form, errorMessage) => {
    let errorFields = [];
    let passwordInputs = form.find('.password');
    
    form.find('.repassword').each(function () {
        const input = $(this);
        if (input.val() !== passwordInputs.val()) {
            input.attr('data-error-message', input.attr('data-repassword-message') || errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
