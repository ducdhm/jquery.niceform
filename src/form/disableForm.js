export default (form) => {
    form.find('select, input, textarea').each(function ()  {
        if (this.readOnly) {
            this.setAttribute('data-origin-readonly', true);
        }
        
        this.readOnly = true;
    });
    
    form.find('button').each(function ()  {
        if (this.disabled) {
            this.setAttribute('data-origin-disabled', true);
        }
    
        this.disabled = true;
    });
};
