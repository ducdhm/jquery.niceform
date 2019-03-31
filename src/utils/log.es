export default (...args) => {
    if (console && typeof console.log === 'function') {
        console.log.apply(console, ['[ NiceForm ] ', ...args]);
    }
};
