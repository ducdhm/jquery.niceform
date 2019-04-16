export default (form) => {
    let formMessage = form.find('.nf-form-message');
    if (formMessage.length === 0) {
        return;
    }
    
    formMessage.stop().animate({
        opacity: 0,
        height: 'hide'
    }, 200);
};
