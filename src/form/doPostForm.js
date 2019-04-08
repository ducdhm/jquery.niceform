import disableForm from './disableForm';
import enableForm from './enableForm';

export default (form, options) => {
    let isFormData = form.attr('enctype') === 'multipart/form-data';
    let data = isFormData ? form.serializeWithFiles() : form.serialize();
    let postUrl = options.postUrl || form.attr('action') || window.location.pathname;
    
    if (typeof options.onBeforePostForm === 'function') {
        data = options.onBeforePostForm.call(this, form, options, data) || data;
    }
    
    try {
        disableForm(form);
        
        let ajaxOptions = {
            type: 'POST',
            url: postUrl,
            data: data,
            dataType: 'JSON',
            success: function (resp, textStatus, jqXhr) {
                enableForm(form);
                
                let isSuccess = false;
                if (typeof options.processResponse === 'function') {
                    isSuccess = options.processResponse(resp, form, options);
                }
                
                if (isSuccess) {
                    if (typeof options.onSuccess === 'function') {
                        options.onSuccess.call(this, resp, form, options);
                    }
                } else {
                    if (typeof options.onError === 'function') {
                        options.onError.call(this, jqXhr, form, options);
                    }
                }
            },
            error: function (jqXhr) {
                enableForm(form);
                
                if (typeof options.onError === 'function') {
                    options.onError.call(this, jqXhr, form, options);
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
        if (typeof options.onError === 'function') {
            options.onError.call(this, null, form, options);
        } else {
            alert('Sorry, an error occurred attempting to submit the form. Please contact the site administrator to resolve!');
        }
    }
};
