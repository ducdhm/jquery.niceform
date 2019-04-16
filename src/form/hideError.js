export default (form) => {
    const options = form.niceform('getOptions');
    typeof options.hideErrorField ==='function' && options.hideErrorField(form);
    
    form.niceform('hideMessage');
};
