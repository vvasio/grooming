$(function() {

    $('label').click(function(){
        let total = 0;

        $('.option:checked').each(function(){

            total += parseInt($(this).val());
            $(this).parent().css({
                'background-color' : '#FFB900',
                'color' : '#35424a'
            });

        });

        $('.option:not(:checked)').each(function(){

            $(this).parent().css({
                'background-color' : '#35424a',
                'color' : '#FFB900'
            });

        });

        $('#total').text(total + "zł")

    });

});