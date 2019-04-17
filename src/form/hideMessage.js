import hideElement from '../utils/hideElement';

export default (form, animationDuration) => {
    let formMessage = form.find('.nf-form-message');
    if (formMessage.length === 0) {
        return;
    }
    
    hideElement(formMessage, animationDuration);
};
