import disableForm from './disableForm';
import enableForm from './enableForm';

export default (form, options) => {
    let isFormData = form.attr('enctype') === 'multipart/form-data';
    let postUrl = options.postUrl || form.attr('action') || window.location.pathname;

    if (typeof options.onBeforeSerializeForm === 'function') {
        options.onBeforeSerializeForm.call(this, form, options);
        form.trigger('nf:onBeforeSerializeForm', [form, options]);
    }
    let data = isFormData ? form.serializeWithFiles() : form.serialize();

    if (typeof options.onBeforePostForm === 'function') {
        options.onBeforePostForm.call(this, form, options, data);
        form.trigger('nf:onBeforePostForm', [form, options, data]);
    }

    try {
        disableForm(form);

        let ajaxOptions = {
            ...options.ajax,
            url: postUrl,
            data: data,
            success: function (resp, textStatus, jqXhr) {
                enableForm(form);

                let isSuccess = false;
                if (typeof options.processAjaxResponse === 'function') {
                    isSuccess = options.processAjaxResponse(resp, form, options);
                }

                if (isSuccess) {
                    if (typeof options.onAjaxSuccess === 'function') {
                        options.onAjaxSuccess.call(this, resp, form, options);
                        form.trigger('nf:onAjaxSuccess', [resp, form, options]);
                    }
                } else {
                    if (typeof options.onAjaxError === 'function') {
                        options.onAjaxError.call(this, jqXhr, form, options);
                        form.trigger('nf:onAjaxError', [jqXhr, form, options]);
                    }
                }
            },
            error: function (jqXhr) {
                enableForm(form);

                if (typeof options.onAjaxError === 'function') {
                    options.onAjaxError.call(this, jqXhr, form, options);
                    form.trigger('nf:onAjaxError', [jqXhr, form, options]);
                }
            }
        };

        if (isFormData) {
            ajaxOptions.processData = false;
            ajaxOptions.contentType = false;
        }
        ajaxOptions.beforeSend = function (xhr, options) { // et toc !
            options.data = data;

            /**
             * You can use https://github.com/francois2metz/html5-formdata for a fake FormData object
             * Only work with Firefox 3.6
             */
            if (data.fake) {
                xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + data.boundary);
                // with fake FormData object, we must use sendAsBinary
                xhr.send = function (data) {
                    xhr.sendAsBinary(data.toString());
                }
            }
        };

        $.ajax(ajaxOptions);
    } catch (e) {
        if (typeof options.onAjaxError === 'function') {
            options.onAjaxError.call(this, null, form, options);
            form.trigger('nf:onAjaxError', [null, form, options]);
        } else {
            alert(options.unknownErrorMessage);
        }
    }
};
