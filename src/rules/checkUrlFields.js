import shouldBeCheck from '../utils/shouldBeCheck';
import testUrl from '../validators/testUrl';

export default (form, format, errorMessage) => {
    let errorFields = [];

    form.find('.url').each(function () {
        const input = $(this);

        if (shouldBeCheck(input) && !testUrl(this.value)) {
            input.attr('data-error-message', input.attr('data-url-message') || errorMessage);
            errorFields.push(input);
        }
    });

    return errorFields;
};
