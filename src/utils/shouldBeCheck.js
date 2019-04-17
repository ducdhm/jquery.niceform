export default (control) => {
    if (control.is('[data-ignore="validate"]')) {
        return false;
    }
    
    if (control.attr('data-error-message')) {
        return false;
    }
    
    if (control.hasClass('required')) {
        return true;
    } else {
        let val = control.val() || '';
        return val.length > 0;
    }
};
