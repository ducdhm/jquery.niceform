export default (form) => {
    form.find('select, input, textarea').each(function ()  {
        if (!this.getAttribute('data-origin-readonly')) {
            this.readOnly = false;
        }
    });
    
    form.find('button').each(function ()  {
        if (!this.getAttribute('data-origin-disabled')) {
            this.disabled = false;
        }
    });
};
