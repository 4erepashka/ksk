
function uploadFileHandler(el){
    let file = $('<a>');
    $('.form-application__documents__preloader').text('')
    $('.form-application__documents__preloader').append(file)
    file.text($(el)[0].files[0].name)
    file.attr('download', true);
    file.attr('href', '#');
}
$( document ).ready(function() {
    formHandler()
})

$('.doctype-arrow').on('click', function(e){
    console.log('cl')
    $('select#document-type').click()
})

function formHandler(){
    $('input#document-btn').on('change', function(){uploadFileHandler($(this))})
    $('.doctype-field').on('change', function(){
        checkDocType($(this))
    })
    $('#address-checked').on('change', function(){
        checkAddress($(this))
    })
    $('input[name="statement"]').on('change', function(){
        checkPaymentOrganization($(this))
    })
    $('.form-application').find ('button').on('click', function(e){
        e.preventDefault()
        handlerTextArea($(this))
    })
}
function checkDocType(el){
    ($(el).val() === '01') ? $('.series-field').append('<span class="req-indicator">*</span>'):$('.series-field > span').remove()
}
function checkAddress(el){
    $('.form-application').find ('div').filter(function(){return $(this).hasClass('address')}).css('display', $(el).is(':checked')? 'none' : 'flex')
}
function checkPaymentOrganization(el){
    if (  $(el).data('value') === '01'){
        $(el).data('value') === '01' &&  $('.form-application').find ('div').filter(function(){return $(this).hasClass('payment-org')}).css('display', 'flex') 
        $('.form-application').find ('div').filter(function(){return $(this).hasClass('account')}).css('display', 'none')
    }else{
        $('.form-application').find ('div').filter(function(){return $(this).hasClass('payment-org')}).css('display', 'none') 
        $('.form-application').find ('div').filter(function(){return $(this).hasClass('account')}).css('display', 'flex')
    }
   
}

function handlerTextArea(el){
    $(el).parent().prev().children('textarea').val('')
}

