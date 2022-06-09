$('document').ready(function() {
    $('button').on('click', function() {
        $('.item-title').fadeToggle();
        $('#pic').toggleClass('rotated')
    })

    
});