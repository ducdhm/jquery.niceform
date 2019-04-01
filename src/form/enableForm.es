export default (form) => {
    form.find('select, input, textarea, button').each(function ()  {
        if (!this.getAttribute('data-origin-disabled')) {
            this.disabled = false;
        }
    });
};
