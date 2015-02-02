'use strict';
var window_width = window.innerWidth,
	fixed = document.getElementById('fixed');

if(window_width > 479){
	parallax(true);
	sticky_nav();
}
else{
	parallax(false);
	fade_at_top(false);
	fixed.style['height'] = window.innerHeight +'px'; //fix for mobile browser resize on scroll
}
works_slider();

window.onscroll = function(){
	if(window_width > 479){
		var t='';
		clearTimeout(t);
		t = setTimeout(function(){
			sticky_nav();
			dot_nav();
			parallax(true);
			fade_at_top(true);
			logo_fill();
		}, 16);
	}
	console.log(window.scrollY);
};

window.onresize = function(){
	setTimeout(function(){
		window_width = window.innerWidth;
	}, 300);
	if(window_width > 479){
		logo_fill();
		parallax(true);
	    fade_at_top(true);
	}
	else{
		fade_at_top(false);
		parallax(false);
	}
};
