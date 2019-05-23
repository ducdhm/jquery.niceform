let timer;

export default (resp, form, options) => {
    form.niceform('showSuccessMessage', resp.message || options.locale.successMessage);
    
    clearTimeout(timer);
    timer = setTimeout(() => form.niceform('hideMessage'), 5000);
};
