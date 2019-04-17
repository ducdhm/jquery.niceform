$(function () {
    initForm1();
    initForm2();
});

function initForm1() {
    var form = $('#form1');
    form.niceform({
        ajax: {
            // Because Github page disallows POST
            type: 'GET'
        }
    });
    
    var formAction = form.find('.form-action');
    var formActionHtml = '';
    formActionHtml += '<div class="row">';
    formActionHtml += '    <div class="col-sm-6">';
    formActionHtml += '        <button type="submit" class="btn btn-block btn-success btn-submit-success"><i class="fa fa-check-circle"></i> Submit success</button>';
    formActionHtml += '    </div>';
    formActionHtml += '    <div class="col-sm-6">';
    formActionHtml += '        <button type="submit" class="btn btn-block btn-danger btn-submit-error"><i class="fa fa-times-circle"></i> Submit error</button>';
    formActionHtml += '    </div>';
    formActionHtml += '    <div class="col-sm-6">';
    formActionHtml += '        <button type="button" class="btn btn-block btn-default btn-data-valid"><i class="fa fa-check"></i> Valid data</button>';
    formActionHtml += '    </div>';
    formActionHtml += '    <div class="col-sm-6">';
    formActionHtml += '        <button type="button" class="btn btn-block btn-default btn-data-invalid"><i class="fa fa-exclamation"></i> Invalid data</button>';
    formActionHtml += '    </div>';
    formActionHtml += '</div>';
    formAction.html(formActionHtml);
    
    var btnSubmitSuccess = form.find('.btn-submit-success');
    btnSubmitSuccess.on('click', function () {
        form.attr('action', './json/success.json');
    });
    
    var btnSubmitError = form.find('.btn-submit-error');
    btnSubmitError.on('click', function () {
        form.attr('action', './json/error.json');
    });
    
    var btnDataValid = form.find('.btn-data-valid');
    btnDataValid.on('click', function () {
        showDataValid(form);
    });
    
    var btnDataInvalid = form.find('.btn-data-invalid');
    btnDataInvalid.on('click', function () {
        showDataInvalid(form);
    });
}

function initForm2() {
    var form = $('#form2');
    form.niceform({
        postFormEnabled: false
    });
    
    form.find('.btn-show-success').on('click', function (e) {
        e.preventDefault();
        
        form.niceform('showMessage', 'success', 'Success!', 'This is success message!');
    });
    
    form.find('.btn-show-info').on('click', function (e) {
        e.preventDefault();
        
        form.niceform('showMessage', 'info', 'Info!', 'This is info message!');
    });
    
    form.find('.btn-show-warning').on('click', function (e) {
        e.preventDefault();
        
        form.niceform('showMessage', 'warning', 'Warning!', 'This is warning message!');
    });
    
    form.find('.btn-show-danger').on('click', function (e) {
        e.preventDefault();
        
        form.niceform('showMessage', 'danger', 'Danger!', 'This is danger message!');
    });
    
}

function showDataValid(form) {
    form.find('[name=name]').val('iam');
    form.find('[name=username]').val('username123');
    form.find('[name=password]').val('Password123!');
    form.find('[name=repassword]').val('Password123!');
    form.find('[name=email]').val('hello@iam.here');
    form.find('[name=age]').val('42');
    form.find('[name=dob]').val('14/02/2000');
    form.find('[name=website]').val('http://mywebsite.com');
}

function showDataInvalid(form) {
    form.find('[name=name]').val('');
    form.find('[name=username]').val('I l!ke th!s username');
    form.find('[name=password]').val('Password');
    form.find('[name=password]').val('Password');
    form.find('[name=repassword]').val('Password123!');
    form.find('[name=email]').val('hello@iam');
    form.find('[name=age]').val('four');
    form.find('[name=dob]').val('02/14/2000');
    form.find('[name=website]').val('a.a');
}
