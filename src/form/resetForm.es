export default (form, callback) => {
    form.get(0).reset();
    form.find('input, select, textarea').attr('data-error-message', '');
    typeof callback === 'function' && callback();
};
