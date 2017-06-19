$(document).ready(function(){/*lol*/})
$('.trigger').click(function(){
    $('.sidebar').animate({
        right: '0px'
    },300);
    $('blocker').css('display','block');
    $('blocker').click(function(){
        $('.sidebar').animate({
            right: '-257px'
        },300)
        $('blocker').css('display', 'none')
    })
})
