export default {
    preventDefault: true,
    ignoreHidden: false,
    trimValue: {
        enable: true,
        ignorePassword: true
    },
    ajaxOptions: {
        enable: true,
        type: 'POST',
        dataType: 'JSON',
        data: null
    },
    format: {
        date: 'DD-MM-YYYY',
        time: 'HH:mm',
        datetime: 'DD-MM-YYYY HH:mm'
    },
    password: {
        min: 8,
        max: 32,
        specialCharacter: '!@#$%^&*-',
        specialLength: 1,
        uppercaseLength: 1,
        numberLength: 1,
        errorMessage: 'must be between 8 and 32 characters long; contain a number, an uppercase letter and one of following special characters <b>!@#$%^&*-</b>'
    },
    regex: {
        email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,
        url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/,
        ip: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:\d{2,5}){0,1}$/
    },
};
