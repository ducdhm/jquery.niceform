import showError from './showError';
import hideError from './hideError';
import processAjaxResponse from './processAjaxResponse';
import onAjaxSuccess from './onAjaxSuccess';
import onAjaxError from './onAjaxError';
import locale from './locale';
import password from './password';

window.__NICEFORM_DEBUG__ = true;

export default {
    postFormEnabled: true,
    postUrl: null,
    
    ajax: {
        type: 'POST',
        dataType: 'JSON'
    },
    
    password,
    
    regex: {
        email: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
        url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        simple: /^[a-zA-Z0-9]+(?:[-_\s][a-zA-Z0-9]+)*$/,
        reallySimple: /^[a-zA-Z0-9]+$/
    },
    
    animationDuration: 200,
    
    locale,
    
    validate: null,
    
    showError,
    hideError,
    
    processAjaxResponse,
    
    onValid: null,
    onInvalid: null,
    
    onBeforeSerializeForm: null,
    onBeforePostForm: null,
    
    onAjaxSuccess,
    onAjaxError
};
