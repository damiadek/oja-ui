// spinner loading
function addSpinner($button){
    $button.prop("disabled", true);
    $button.append('<span class="fa fa-circle-o-notch fa-spin btn_spinner pull-right"></span>');
}

function removeSpinner(parent){
    var $spinner_class = '.btn_spinner';
    var $parent = $($spinner_class).parent();
    $parent.prop('disabled', false);
    if (parent == null || $(parent).length !== 1) {
        $('.btn_spinner').remove();
    }else{
        $(parent).find($spinner_class).remove();
    }
}