export default (element, animationDuration) => {
    element.stop().css('height', '').animate({
        opacity: 1,
        height: 'show',
        marginTop: 'show',
        marginBottom: 'show',
        paddingTop: 'show',
        paddingBottom: 'show'
    }, animationDuration, () => {
        element.css('height', '');
    });
};
