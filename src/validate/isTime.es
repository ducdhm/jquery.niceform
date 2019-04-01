export default (value, timeFormat) => {
    return moment(value, timeFormat, true).isValid();
};
