# NiceForm
The jQuery plugin for validation and post form data to server (http://ducdhm.github.io/jquery.niceform/)


## Shortcuts
 * [Dependencies](#dependencies)
 * [Rules](#rules)
 * [Configuration](#configuration)
 * [Methods](#methods)
 * [Custom message](#custom-message)
 * [License](#license)


## Dependencies
 * [jQuery](http://jquery.com/)
 * [MomentJS](https://momentjs.com/)
 * [HTML5 FormData](https://github.com/francois2metz/html5-formdata)
 * [jQuery serializeWithFiles](https://stackoverflow.com/a/12426630/1330990)
 * [Password Validator](http://blog.stevenlevithan.com/archives/javascript-password-validator) 
 
 
## Rules
| Name       | Selector      | Description                                                                                                                                                                             |
|------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Required   | `.required`   | Invalid when value of field is blank or same as `placeholder` attribute                                                                                                                 |
| Date       | `.date`       | Invalid when value of field is not matched with `locale.date` format from configuration                                                                                                 |
| Time       | `.time`       | Invalid when value of field is not matched with `locale.time` format from configuration                                                                                                 |
| DateTime   | `.datetime`   | Invalid when value of field is not matched with `locale.datetime` format from configuration                                                                                             |
| Email      | `.email`      | Invalid when value of field is not matched with `regex.email` regular expression from configuration                                                                                     |
| Number     | `.number`     | Invalid when value of field is not number/digit/numeric                                                                                                                                 |
| Url        | `.url`        | Invalid when value of field is not matched with `regex.url` regular expression from configuration                                                                                       |
| Password   | `.password`   | Invalid when value of field is not matched with `password` from configuration                                                                                                           |
| Repassword | `.repassword` | Invalid when value of field is not matched with `.password` field                                                                                                                       |
| Regex      | `.regex`      | Invalid when value of field is not matched with `data-regex` regular expression from attribute of field. Error message of this rule will be specified in `data-regex-message` attribute |

**Note**:
 * You can ignore validation rules by using `data-ignore=validate` for your fields
 * You can combined `Required` rule with other rules
 * All rules except `Required` will be validated if value of field is not blank

 
## Configuration
| Option                        | Type     | Description                                                                                                                                                                                                                |
|-------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| postFormEnabled               | Boolean  | Allow NiceForm post form data to server by using AJAX or not. <br />Default: `true`                                                                                                                                        |
| postUrl                       | String   | URL to post form data. <br />Default: `null`                                                                                                                                                                               |
| ajax                          | Object   | AJAX options to post form data <br />Default: `{ type: 'POST', dataType: 'JSON' }`                                                                                                                                         |
| password                      | Object   | Password validator options                                                                                                                                                                                                 |
| password.min                  | Number   | Minimum length for password field. <br />Default: `6`                                                                                                                                                                      |
| password.max                  | Number   | Maximum length for password field. <br />Default: `32`                                                                                                                                                                     |
| password.specialLength        | Number   | Number of required special character for password field. <br />Default: `1`                                                                                                                                                |
| password.uppercaseLength      | Number   | Number of required uppercase letter for password field. <br />Default: `1`                                                                                                                                                 |
| password.numberLength         | Number   | Number of required number for password field. <br />Default: `1`                                                                                                                                                           |
| regex                         | Object   | Regular expression options                                                                                                                                                                                                 |
| regex.email                   | RegExp   | Regular expression for email field. <br />Default: [source code](./src/defaults/index.js#L27)                                                                                                                              |
| regex.url                     | RegExp   | Regular expression for url field. <br />Default: [source code](./src/defaults/index.js#L28)                                                                                                                                |
| animationDuration             | Number   | Animation duration in millisecond. <br />Default: `200`                                                                                                                                                                    |
| locale                        | Object   | Locale options                                                                                                                                                                                                             |
| locale.date                   | String   | Date format. <br />Default: `DD/MM/YYYY`                                                                                                                                                                                   |
| locale.time                   | String   | Time format. <br />Default: `HH:mm`                                                                                                                                                                                        |
| locale.datetime               | String   | Date-time format. <br />Default: `DD/MM/YYYY HH:mm`                                                                                                                                                                        |
| locale.successMessage         | String   | Message when submitting form successfully. <br />Default: `The form has been successfully submitted`                                                                                                                       |
| locale.requiredErrorMessage   | String   | Error message for `.required` field. <br />Default: `This field is required`                                                                                                                                               |
| locale.dateErrorMessage       | String   | Error message for `.date` field. <br />Default: `Please check the format of your date, it should be like 14/02/2000`                                                                                                       |
| locale.timeErrorMessage       | String   | Error message for `.time` field. <br />Default: `Please check the format of your time, it should be like 14:02`                                                                                                            |
| locale.datetimeErrorMessage   | String   | Error message for `.datetime` field. <br />Default: `Please check the format of your date time, it should be like 14/02/2000 14:02`                                                                                        |
| locale.emailErrorMessage      | String   | Error message for `.email` field. <br />Default: `Please check the format of your email address, it should read like someone@somewhere.com`                                                                                |
| locale.numberErrorMessage     | String   | Error message for `.number` field. <br />Default: `Please enter digits only`                                                                                                                                               |
| locale.urlErrorMessage        | String   | Error message for `.url` field. <br />Default: `Please enter valid website address`                                                                                                                                        |
| locale.passwordErrorMessage   | String   | Error message for `.password` field. <br />Default: `Your password must be at least 6 characters and it must contain numbers, letters and at least 1 special character`                                                    |
| locale.repasswordErrorMessage | String   | Error message for `.repassword` field. <br />Default: `Please confirm your password`                                                                                                                                       |
| locale.unknownErrorMessage    | String   | Unknown error message. <br />Default: `Sorry, an error occurred attempting to submit the form. Please contact the site administrator to resolve!`                                                                          |
| validate                      | Function | Function to validate the form fields which are not in built-in list. Need to return array of invalid fields or null if valid. <br />Default: `null`. <br />Params: `form` and `options`. <br /> Return: `Array             |
| showError                     | Function | Function to show error states when form is invalid. <br />Default: [source code](./src/defaults/showError.js). <br />Params: `form`, `errorFields` and `options`                                                           |
| hideError                     | Function | Function to hide error states before validating form. <br />Default: [source code](./src/defaults/hideError.js). <br />Params: `form`, `errorFields` and `options`                                                         |
| processAjaxResponse           | Function | Function to process ajax response from server to decide response is success or not. <br />Default: [source code](./src/default/processAjaxResponse). <br />Params: `resp`, `form`, and `options`. <br /> Return: `Boolean` |
| onValid                       | Function | Callback will be called when form is valid. <br />Default: `null`. <br />Params: `form` and `options`                                                                                                                      |
| onInvalid                     | Function | Callback will be called when form is invalid. <br />Default: `null`. <br />Params: `form` and `options`                                                                                                                    |
| onBeforeSerializeForm         | Function | Callback will be called before serializing form. <br />Default: `null`. <br />Params: `form` and `options`                                                                                                                 |
| onBeforePostForm              | Function | Callback will be called before posting form. <br />Default: `null`. <br />Params: `form` and `options`                                                                                                                     |
| onAjaxSuccess                 | Function | Callback will be call if `processAjaxResponse` return `true`. <br />Default: [source code](./src/defaults/onAjaxSuccess.js). <br />Params: `resp`, `form` and `options`                                                    |
| onAjaxError                   | Function | Callback will be call if `processAjaxError` return `false` or `$.ajax` gets error or an unknown issue occurs. <br />Default: [source code](./src/defaults/onAjaxError.js). <br />Params: `jqXhr`, `form` and `options`     |


## Methods
| Name               | Params (ParamType: paramName)                          | Description                                                                                                                                                                                                       |
|--------------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| clearValue         | String: controlSelector                                | Clear value, uncheck and set selected index is `-1` of all text boxes, textareas, select boxes, radio buttons, checkboxes or provided `controlSelector`.<br />NOTE: Not effect with element `data-ignore="clear"` |
| enableForm         |                                                        | Enable all form controls include textbox, textarea, select box, radio button, checkbox and button.<br />NOTE: Set `readonly=false` for all elements which do not contain `data-origin-readonly`                   |
| disableForm        |                                                        | Disable all form controls include textbox, textarea, select box, radio button, checkbox and button.<br />NOTE: Set `readonly=true` and `data-origin-readonly=true` for elements which are readonly as default     |
| showMessage        | String: type <br />String: title <br />String: message | Built-in message method of NiceForm. `type` can be `success`, `info`, `warning`, `error` or `danger`                                                                                                              |
| showSuccessMessage | String: message                                        | Shortcut of `showMessage` with `type` is `success` and `title` is `Success!`                                                                                                                                      |
| showErrorMessage   | String message                                         | Shortcut of `showMessage` with `type` is `error` and `title` is `Error!`                                                                                                                                          |
| hideMessage        |                                                        | Hide built-in message                                                                                                                                                                                             |
| getOptions         |                                                        | Get options/configuration of NiceForm                                                                                                                                                                             |
| showElement        | jQuery: element                                        | Show specified element with fadeIn and slideDown effects                                                                                                                                                          |
| hideElement        | jQuery: element                                        | Hide specified element with fadeOut and slideUp effects                                                                                                                                                           |

**Note**: There are 2 ways to call method
```javascript
$('#form-id').niceform('methodName', param1, param2, ...);
```
or
```javascript
var niceform = $('#form-id').data('niceform');
niceform.methodName(param1, param2, ...);
```


## Custom message
To custom message for a specified field, just need `data-${rule}-message` attribute. Example:

```html
<input type="text" class="required email" name="email" data-required-message="Email address is mandatory!" data-email-message="Email address is invalid!" /> 
```

## License
Please read at [here](LICENSE.md)
