# NiceForm
The jQuery plugin for validation and post form data to server

## Shortcuts
 * [Live examples](#live-examples)
 * [Dependencies](#dependencies)
 * [Configuration](#configuration)
 * [Methods](#methods)
 * [License](#license)

## Dependencies
 * [jQuery](http://jquery.com/)
 * [HTML5 FormData](https://github.com/francois2metz/html5-formdata)
 * [jQuery serializeWithFiles](https://stackoverflow.com/a/12426630/1330990)
 * [Password Validator](http://blog.stevenlevithan.com/archives/javascript-password-validator) 
 
## Configuration
| Option                        | Type     | Description                                                                                                                                                                                                                        |
|-------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| postFormEnabled               | Boolean  | Allow NiceForm post form data to server by using AJAX or not. Default: `true`                                                                                                                                                      |
| postUrl                       | String   | URL to post form data. Default: `null`                                                                                                                                                                                             |
| ajax                          | Object   | AJAX options to post form data Default: `{ type: 'POST', dataType: 'JSON' }`                                                                                                                                                       |
| locale                        | Object   | Locale options                                                                                                                                                                                                                     |
| locale.date                   | String   | Date format. Default: `DD/MM/YYYY`                                                                                                                                                                                                 |
| locale.time                   | String   | Time format. Default: `HH:mm`                                                                                                                                                                                                      |
| locale.datetime               | String   | Date-time format. Default: `DD/MM/YYYY HH:mm`                                                                                                                                                                                      |
| locale.successMessage         | String   | Message when submitting form successfully. Default: `The form has been successfully submitted`                                                                                                                                     |
| locale.requiredErrorMessage   | String   | Error message for `.required` field. Default: `This field is required`                                                                                                                                                             |
| locale.dateErrorMessage       | String   | Error message for `.date` field. Default: `Please check the format of your date, it should be like 14/02/2000`                                                                                                                     |
| locale.timeErrorMessage       | String   | Error message for `.time` field. Default: `Please check the format of your time, it should be like 14:02`                                                                                                                          |
| locale.datetimeErrorMessage   | String   | Error message for `.datetime` field. Default: `Please check the format of your date time, it should be like 14/02/2000 14:02`                                                                                                      |
| locale.emailErrorMessage      | String   | Error message for `.email` field. Default: `Please check the format of your email address, it should read like someone@somewhere.com`                                                                                              |
| locale.numberErrorMessage     | String   | Error message for `.number` field. Default: `Please enter digits only`                                                                                                                                                             |
| locale.urlErrorMessage        | String   | Error message for `.url` field. Default: `Please enter valid website address`                                                                                                                                                      |
| locale.passwordErrorMessage   | String   | Error message for `.password` field. Default: `Your password must be at least 6 characters and it must contain numbers, letters and at least 1 special character`                                                                  |
| locale.repasswordErrorMessage | String   | Error message for `.repassword` field. Default: `Please confirm your password`                                                                                                                                                     |
| locale.unknownErrorMessage    | String   | Unknown error message. Default: `Sorry, an error occurred attempting to submit the form. Please contact the site administrator to resolve!`                                                                                        |
| validate                      | Function | Function to validate the form fields which are not in built-in list. Default: `null`. Params: `form` and `options`                                                                                                                 |
| showError                     | Function | Function to show error states when form is invalid. Default: [source code](./src/defaults/showError.js). Params: `form`, `errorFields` and `options`                                                                               |
| hideError                     | Function | Function to hide error states before validating form. Default: [source code](./src/defaults/hideError.js). Params: `form`, `errorFields` and `options`                                                                             |
| processAjaxResponse           | Function | Function to process ajax response from server. Need to return `true` or `false` to decide submitting to server is success or not. Default: [source code](./src/default/processAjaxResponse). Params: `resp`, `form`, and `options` |
| onValid                       | Function | Callback will be called when form is valid. Default: `null`. Params: `form` and `options`                                                                                                                                          |
| onInvalid                     | Function | Callback will be called when form is invalid. Default: `null`. Params: `form` and `options`                                                                                                                                        |
| onBeforeSerializeForm         | Function | Callback will be called before serializing form. Default: `null`. Params: `form` and `options`                                                                                                                                     |
| onBeforePostForm              | Function | Callback will be called before posting form. Default: `null`. Params: `form` and `options`                                                                                                                                         |
| onAjaxSuccess                 | Function | Callback will be call if `processAjaxResponse` return `true`. Default: [source code](./src/defaults/onAjaxSuccess.js). Params: `resp`, `form` and `options`                                                                        |
| onAjaxError                   | Function | Callback will be call if `processAjaxError` return `false` or `$.ajax` gets error or an unknown issue occurs. Default: [source code](./src/defaults/onAjaxError.js). Params: `jqXhr`, `form` and `options`                           |

## Methods

## Live examples
https://rawgit.com/ducdhm/jquery.niceform/master/examples/index.html

## License
Please read at https://github.com/ducdhm/jquery.niceform/blob/master/LICENSE.md
