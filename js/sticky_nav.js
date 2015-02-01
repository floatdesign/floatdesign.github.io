function sticky_nav(){
	var stickPoint = document.getElementById('mission').getBoundingClientRect().top; //stick when second section reaches top

	if(stickPoint <= 0){
		dots.classList.add('dots-fixed');
		logo.classList.add('logo-fixed');
	}

	else{
		dots.classList.remove('dots-fixed');
		logo.classList.remove('logo-fixed');
	}
};