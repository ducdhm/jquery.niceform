// http://stackoverflow.com/questions/5392344/sending-multipart-formdata-with-jquery-ajax
(function ($) {
    $.fn.serializeWithFiles = function () {
        var form = $(this);
        
        // ADD FILE TO PARAM AJAX
        var formData = new FormData();
        form.find('input[type=file]').each(function (index, input) {
            $.each(input.files, function (i, file) {
                formData.append(input.name, file);
            });
        });
        
        var params = form.serializeArray();
        $.each(params, function (i, val) {
            formData.append(val.name, val.value);
        });
        
        return formData;
    };
    
})(jQuery);
