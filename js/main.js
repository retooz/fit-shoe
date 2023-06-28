
$(document).ready(function() {
    $('section').css('height', ($('section').css('height')))
    $('.selection').hide();
    $('.selection:first').show();

    $('input[name=feet-width]').change(function(){
        $('.selection:nth-child(2)').show();
    })
    $('input[name=feet-height]').change(function(){
        $('.selection:nth-child(3)').show();
    })
    $('input[name=feet-flat]').change(function(){
        $('.selection:nth-child(4)').show();
    })
    $('input[name=shoe-gender]').change(function(){
        $('.selection:nth-child(5)').show();
    })

    $('input[name=shoe-category]').change(function(){
        $('.selection:nth-child(2)').show();
    })
    $('input[name=shoe-brand]').change(function(){
        $('.selection:nth-child(3)').show();
    })
    $('input[name=shoe-price]').change(function(){
        $('.selection:nth-child(4)').show();
    })
    $('input[name=shoe-color]').change(function(){
        $('.selection:nth-child(5)').show();
    })
    
})