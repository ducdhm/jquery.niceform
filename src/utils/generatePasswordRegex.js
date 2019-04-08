/**
 * Generate password regex
 * @method generatePasswordRegex
 * @param {Number} min Minimum length of password
 * @param {Number} max Maximum length of password
 * @param {String} specialCharacter List of special characters
 * @param {Number} specialLength Number of required special character in password
 * @param {Number} uppercaseLength Number of required uppercase character in password
 * @param {Number} numberLength Number of digit character in password *
 */
export default (min, max, specialCharacter, specialLength, uppercaseLength, numberLength) => {
    var regexString = '(?=(?:.*[a-z]){1})';
    
    if (uppercaseLength > 0) {
        regexString += `(?=(?:.*[A-Z]){${uppercaseLength}})`;
    }
    
    if (numberLength > 0) {
        regexString += `(?=(?:.*\\d){${numberLength}})`;
    }
    
    if (specialLength > 0) {
        regexString += `(?=(?:.*[${specialCharacter}]){${numberLength}})`;
    }
    
    regexString += `.{${min},${max}}`;
    
    return new RegExp(`^${regexString}$`);
};
