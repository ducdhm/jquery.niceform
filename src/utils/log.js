export default (...args) => {
    if (window.__NICEFORM_DEBUG__ && console && typeof console.log === 'function') {
        console.log.apply(console, ['[ NiceForm ] ', ...args]);
    }
};
