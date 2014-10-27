var width, height, next_timer;
var game = {
    score:0,
    danger_card:false,
    increaseScore:function(value){
        //console.log('Score: ' + this.score + ' + ' + value + ' = ' + this.score + value);
        this.score += value;
        $('.container h1')
            .html(this.score)
            .css({'font-size':((this.score/10)+2)+'em'})
            .animate({'font-size':((this.score/10)+1)+'em'},{
                queue:false,
                easing:'swing',
                duration:100

            });
    },
    resetScore:function(){
        //console.log('Resetting score.');
        this.score = 0;
        $('.container h1').html(this.score);
        console.log('Resetting score.');
    }
};

$(document).ready(function(){
    console.log('engine.js loaded');
    init();
    //setInterval(changeMode, 2000);
    //$(document).click(clickCheck);
    $(document).on('touchstart click', function(e){
        e.preventDefault();
        clickCheck();
    })
});

function clickCheck(){
    console.log(jQuery.Color($('.container'),'background-color').hue());
    if(game.danger_card){
        game.resetScore();
        //makeCard();
    }else{
        game.increaseScore(1);
        makeCard();
    }
}

function makeCard(){
    window.clearTimeout(next_timer);
    var random_num = Math.ceil(Math.random()*255);
    var interpolate_to;
    var colour_dist;
    //console.log('New card: ' + random_num);
    // if(random_num < 15 || random_num > 345){
    //     game.danger_card = true;
    // }else{
    //     game.danger_card = false;
    // }



    if(random_num < 180){
        interpolate_to = 0;
        colour_dist = random_num;
    }else{
        interpolate_to = 360;
        colour_dist = 360 - random_num;
    }
    console.log(colour_dist);
    $('.container')
        .css({'background-color': 'hsla('+random_num+',50%,50%,1)'})
        .animate({'background-color': 'hsla('+interpolate_to+',50%,50%,1)'},{
            queue:false,
            easing:'linear',
            duration:colour_dist*50,
            progress:function(animation,progress,remainingMs){
                //console.log(colour_dist);
                // console.log(remainingMs);
            }
        });
    next_timer = setTimeout(timeout,2000,1);
}

function timeout(){
    console.log('tick');
    makeCard();
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
