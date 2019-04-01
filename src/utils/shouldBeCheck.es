export default (control) => {
    if (control.hasClass('required')) {
        return true;
    } else {
        let val = control.val() || '';
        return val.length > 0;
    }
};
