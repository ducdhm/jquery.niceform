export default (value) => {
    return !isNaN(value) && typeof value !== 'boolean';
};
