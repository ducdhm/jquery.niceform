import $ from 'jquery';
import NiceForm from './niceform';

$.fn.niceform = function (config, ...rest) {
    let form = $(this);
    let niceform = form.data('niceform');

    if (typeof config === 'string') {
        if (niceform && config in NiceForm.prototype) {
            return niceform[config].apply(niceform, rest);
        }
    } else {
        if (!niceform) {
            form.data('niceform', niceform = new NiceForm(form, config));
        }

        return niceform;
    }
};

export default NiceForm;
