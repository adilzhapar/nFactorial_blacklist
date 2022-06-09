$(document).ready(function() {
    $('#example').on('click', 'button' ,function() {
        $(this).parent().toggleClass('highlighted');
    })
});