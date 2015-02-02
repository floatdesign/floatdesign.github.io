var stickPoint = document.getElementById('mission').offsetTop; //stick when second section reaches top
var lastKnownScrollY = window.scrollY;
var triggered = 0;
function sticky_nav(){
	if(stickPoint <= lastKnownScrollY && triggered === 0){
		dots.classList.add('dots-fixed');
		logo.classList.add('logo-fixed');
		triggered = 1;
	}

	else if(stickPoint > lastKnownScrollY){
		dots.classList.remove('dots-fixed');
		logo.classList.remove('logo-fixed');
		triggered = 0;
	}
};