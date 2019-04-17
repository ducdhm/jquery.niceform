/**
 * Clear value of textbox, textarea. Uncheck all radio button and checkbox. And set selected
 * index of select is -1. NOTE: Not effect with element data-ignore=`clear`
 * @param {jQuery} form jQuery object of form
 * @param {String} controlSelector Selector of controls will be clear
 */
export default (form, controlSelector = 'input, textarea, select') => {
    form.find(controlSelector).not('[data-ignore="clear"]').each(function () {
        const control = $(this);
        const isSelect = control.is('select');
        const isCheckbox = control.is(':checkbox');
        const isRadio = control.is(':radio');
        
        if (isSelect) {
            this.selectedIndex = -1;
        } else if (isCheckbox || isRadio) {
            control.prop('checked', false);
        } else {
            control.val('');
        }
    });
};
