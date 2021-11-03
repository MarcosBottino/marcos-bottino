$(document).ready(function(){
    $('.boton').mouseover(function(){
        $('audio')[0].play();
    })

    $('.boton').click(function(){
        $('audio')[1].play();
    })
})