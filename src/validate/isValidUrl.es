import testRegex from './testRegex.es';

export default (value) => {
    return testRegex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, value);
};
