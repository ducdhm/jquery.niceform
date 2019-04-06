import shouldBeCheck from '../utils/shouldBeCheck';
import validatePassword from '../utils/validatePassword';

export default (form, passwordOptions, errorMessage) => {
    let errorFields = [];
    let isValid = (value) => {
        return validatePassword(value, {
            lower: 1,
            upper: passwordOptions.uppercaseLength,
            alpha: 0,
            numeric: passwordOptions.numberLength,
            special: passwordOptions.specialLength,
            length: [passwordOptions.min, passwordOptions.max],
            badWords: [],
            badSequenceLength: 0,
            noQwertySequences: false,
            noSequential: false
        });
    };
    
    form.find('.password').each(function () {
        const input = $(this);
        if (shouldBeCheck(input) && !isValid(this.value)) {
            input.attr('data-error-message', errorMessage);
            errorFields.push(input);
        }
    });
    
    return errorFields;
};
