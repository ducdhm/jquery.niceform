import shouldBeCheck from '../utils/shouldBeCheck.es';
import validatePassword from '../validate/validatePassword.es';

export default (form, passwordConfig, errorMessage) => {
    let errorFields = [];
    let isValid = (value) => {
        return validatePassword(value, {
            lower: 1,
            upper: passwordConfig.uppercaseLength,
            alpha: 0,
            numeric: passwordConfig.numberLength,
            special: passwordConfig.specialLength,
            length: [passwordConfig.min, passwordConfig.max],
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
