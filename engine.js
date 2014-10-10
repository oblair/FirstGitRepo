var width, height, next_timer;
var game = {
    score:0,
    increaseScore:function(value){
        console.log('Score: ' + this.score + ' + ' + value + ' = ' + this.score + value);
        this.score += value;
        $('.container h1').html(this.score);
    },
    resetScore:function(){
        console.log('Resetting score.');
        this.score = 0;
        $('.container h1').html(this.score);
        console.log('Resetting score.');
    }
};

$(document).ready(function(){
    console.log('engine.js loaded');
    init();
    //setInterval(changeMode, 2000);
    $(document).click(clickCheck);
});

function clickCheck(){
    next();
}



function next(success){

    window.clearTimeout(next_timer);
    console.log('change');
    var random_num = Math.ceil(Math.random()*255);
    console.log(random_num);
    $('.container').css({'background-color': 'hsla('+random_num+',50%,50%,1)'});
    next_timer = setTimeout(timeout,2000,1);

    if(random_num < 15 || random_num > 345){
        game.resetScore();
    }else{
        game.increaseScore(1);
    }


}

function timeout(){
    console.log('tick');
    next();
}


function init(){
    size();
    $(window).resize(size);
}
function size(){
    width = $(window).width();
    height = $(window).height();
    //console.log(width + ' ' + height);
    $('.container').width(width).height(height);
    $('.container h1').css({'line-height':height+'px'})
}
