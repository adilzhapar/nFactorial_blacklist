$('document').ready(function() {
    $('button').on('click', function(){
        let city = $(this).prev().val();
        console.log(city);

        let htmlToAdd = `<div class="item">` +
        `<div class="remove">X</div>` + city + `</div>`
        $('#places-container').append(htmlToAdd);
        $('input').val('');

        $('.item').on('click', '.remove',  function() {
            $(this).parent().remove();
        })
    });

    $('#container').on('click', function() {
        $(this).empty();
    })
    
})