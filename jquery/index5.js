$('document').ready(function() {
    $('select').on('change', function(){
        console.log($(this).val());


        $('#result').text(`Adil in ${$(this).val()} with ${$(this).find(':selected').data('price')}`)

    })

    $('input').on('keyup', function() {
        let letter = $(this).val();

        let resultText = $('#result').val();
        $('#result').text(resultText + letter);
    });

    $('a').on('click', function(e) {
        e.preventDefault();
    });
})