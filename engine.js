var width, height, next_timer;
var game = {
	score:0,
	danger_card:false,
	increaseScore:function(value){
		console.log('Score: ' + this.score + ' + ' + value + ' = ' + this.score + value);
		this.score += value;
		$('.container h1')
			.html(this.score)
			.css({'font-size':((this.score/10)+2)+'em'})
			.animate({
				'font-size':((this.score/10)+1)+'em'
			},{
				queue:false, duration:100
			});
	},
	resetScore:function(){
		console.log('Resetting score.');
		this.score = 0;
		$('.container h1')
			.html(this.score)
			.css({'font-size':((this.score/10)+1)+'em'});
	}
};

$(document).ready(function(){
	console.log('engine.js loaded');
	init();
	//setInterval(changeMode, 2000);
	$(document).click(clickCheck);
});

function clickCheck(){
	//createSection();
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
	console.log('New card: ' + random_num);
	if(random_num < 15 || random_num > 345){
		game.danger_card = true;
	}else{
		game.danger_card = false;
	}
	$('.container').css({'background-color': 'hsla('+random_num+',50%,50%,1)'});
	next_timer = setTimeout(timeout,2000,1);
}

function timeout(){
	//console.log('tick');
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

function createSection(){
	var new_section = $('<section></section>');
	$('.container').append(new_section);
	console.log($('.container section').length);
	var section_size = 100 / $('.container section').length;
	$('.container section').height(section_size + '%');
	$('.container section').each(function(){
		var random_num = Math.ceil(Math.random()*255);
		$(this).css({'background-color': 'hsla('+random_num+',50%,50%,1)'});
	})
}



