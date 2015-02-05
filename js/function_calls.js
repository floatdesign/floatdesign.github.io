'use strict';
var window_width = window.innerWidth,
	fixed = document.getElementById('fixed'),
	lastKnownScrollY = window.scrollY;

if(window_width > 479){
	parallax();
	sticky_nav();
}
else{
	fixed.style['height'] = window.innerHeight +'px'; //fix for mobile browser resize on scroll
}
works_slider();

window.onscroll = function(){
	if(window_width > 479){
		lastKnownScrollY = window.scrollY;
		logoBottom = lastKnownScrollY + 60;
		logoTop = lastKnownScrollY + 20;

		requestAnimationFrame(dot_nav);
		requestAnimationFrame(parallax);
		requestAnimationFrame(sticky_nav);
		requestAnimationFrame(fade_at_top);
		requestAnimationFrame(logo_fill);
	}
};

window.onresize = function(){
	setTimeout(function(){
		window_width = window.innerWidth;
	}, 300);
	if(window_width > 479){
		requestAnimationFrame(reset_vars);
		requestAnimationFrame(logo_fill);
		requestAnimationFrame(parallax);
	    requestAnimationFrame(fade_at_top);
	}
};
