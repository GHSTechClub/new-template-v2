$(document).ready(function(){/*lol*/})
$('.trigger').click(function(){
    $('.sidebar').animate({
        right: '0px'
    },200);
    $('blocker').css('display','block');
    $('blocker').click(function(){
        $('.sidebar').animate({
            right: '-257px'
        },200)
        $('blocker').css('display', 'none')
    })
})
