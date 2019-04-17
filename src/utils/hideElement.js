export default (element, animationDuration) => {
    element.stop().animate({
        opacity: 0,
        height: 'hide',
        marginTop: 'hide',
        marginBottom: 'hide',
        paddingTop: 'hide',
        paddingBottom: 'hide'
    }, animationDuration);
};
