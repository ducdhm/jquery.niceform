import $ from 'jquery';

export default (form, type, title, message) => {
    let formMessage = form.find('.nf-form-message');
    if (formMessage.length === 0) {
        formMessage = $(`<div class="nf-form-message alert" style="display: none;"></div>`);
        form.prepend(formMessage);
    }
    formMessage.removeClass('alert-danger alert-info alert-success alert-warning');
    
    let formContent = `
        <a class="close" data-dismiss="alert">&times;</a>
        <b>${title}</b><br />
        ${message}
    `;
    
    formMessage.addClass(type === 'error' ? 'alert-danger' : `alert-${type}`);
    formMessage.html(formContent);
    formMessage.stop().animate({
        opacity: 1,
        height: 'show'
    }, 200);
};
