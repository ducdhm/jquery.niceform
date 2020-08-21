export default (form, errorMessage) => {
    let errorFields = [];

    let names = {};
    form.find('.required:radio, .required:checkbox').not('[data-ignore="validate"]').each(function () {
        if (!(this.name in names)) {
            const input = form.find(`input[name="${this.name}"]`);
            const checked = input.filter(':checked');

            if (checked.length === 0) {
                input.attr('data-error-message', input.attr('data-required-message') || errorMessage);
                errorFields.push(input);
            }
            names[this.name] = true;
        }
    });

    form.find('.required').filter('input, select, textarea').not('.tt-hint, :radio, :checkbox, [data-ignore="validate"]').each(function () {
        const input = $(this);
        const val = input.val() || '';
        const placeholder = input.attr('placeholder');

        if (val.length === 0 || val === placeholder) {
            input.attr('data-error-message', input.attr('data-required-message') || errorMessage);
            errorFields.push(input);
        }
    });

    return errorFields;
};
