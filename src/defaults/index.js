import showError from './showError';
import hideError from './hideError';
import processAjaxResponse from './processAjaxResponse';
import onAjaxSuccess from './onAjaxSuccess';
import onAjaxError from './onAjaxError';
import password from './password';
import regex from './regex';

window.__NICEFORM_DEBUG__ = true;

export default {
    postFormEnabled: true,
    postUrl: null,

    ajax: {
        type: 'POST',
        dataType: 'JSON'
    },

    password,

    regex,

    animationDuration: 200,

    locale: 'en',

    validate: null,

    showError,
    hideError,

    processAjaxResponse,

    onValid: null,
    onInvalid: null,
    onBeforeValidate: null,
    onBeforeSerializeForm: null,
    onBeforePostForm: null,

    onAjaxSuccess,
    onAjaxError
};
