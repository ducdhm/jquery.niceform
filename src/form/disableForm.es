export default (form) => {
    form.find('select, input, textarea, button').each(function ()  {
        if (this.disabled) {
            this.setAttribute('data-origin-disabled', true);
        }
        
        this.disabled = true;
    });
};
