$(document).ready(function() {
    $('section').css('height', ($('section').css('height')))
    $('.selection').hide();
    $('.selection:first').fadeIn(500);

    $('input[name=feet-width]').change(function(){
        $('.selection:nth-child(2)').fadeIn(500);
    })
    $('input[name=feet-height]').change(function(){
        $('.selection:nth-child(3)').fadeIn(500);
    })
    $('input[name=feet-flat]').change(function(){
        $('.selection:nth-child(4)').fadeIn(500);
    })
    $('input[name=shoe-gender]').change(function(){
        $('.selection:nth-child(5)').fadeIn(500);
    })

    $('input[name=shoe-category]').change(function(){
        $('.selection:nth-child(2)').fadeIn(500);
    })
    $('input[name=shoe-brand]').change(function(){
        $('.selection:nth-child(3)').fadeIn(500);
    })
    $('input[name=shoe-color]').change(function(){
        $('.selection:nth-child(4)').fadeIn(500);
    })
    
})
