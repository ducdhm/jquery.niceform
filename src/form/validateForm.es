import checkRequired from "../rules/checkRequired.es";

export default (form, config) => {
    let result = checkRequired(form, options.requiredErrorFieldMessage);
    if (result.length > 0) {
        typeof options.showErrorMessage === 'function' && options.showErrorMessage(form, config, option.requiredErrorMessage);
        
        return false;
    } else {
        let errorFields = [];
        let errorMessages = [];
    }
};
