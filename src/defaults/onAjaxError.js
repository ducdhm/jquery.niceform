import showErrorField from './_showErrorField';

export default (jqXhr, form, options) => {
    if (jqXhr.responseJSON) {
        form.niceform('showErrorMessage', jqXhr.responseJSON.message || options.locale.unknownErrorMessage);
        
        jqXhr.responseJSON.errorFields && jqXhr.responseJSON.errorFields.forEach(function (error) {
            showErrorField(form, form.find(`[name="${error.name}"]`), error.message);
        });
    } else {
        form.niceform('showErrorMessage', options.locale.unknownErrorMessage);
    }
};
