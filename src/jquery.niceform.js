import $ from "jquery";
import NiceForm from './niceform';

$.fn.niceform = function (config) {
    return this.each(function () {
        let form = $(this);
        
        if (!form.data('niceform')) {
            let niceform = new NiceForm(form, config);
            form.data('niceform', niceform);
        }
    });
};
