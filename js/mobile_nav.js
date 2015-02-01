function mobile_nav(){
	var to_f1 = document.getElementById('x-transform-animation-to-f1'),
		to_f2 = document.getElementById('x-transform-animation-to-f2'),
		to_x1 = document.getElementById('f-transform-animation-to-x1'),
		to_x2 = document.getElementById('f-transform-animation-to-x2'),
		menu          = document.getElementById('mobile-menu'),
		button        = document.getElementById('mobile-clicker'),
		transform     = document.getElementById('transform');

	if(button.classList.contains('rotate')){
		menu.classList.remove('open');
		button.classList.remove('rotate');

		to_f1.beginElement();
		to_f2.beginElement();
		setTimeout(function(){
			transform.setAttribute('xlink:href', '#icon-f-transform');
		}, 150);
	}

	else{
		menu.classList.add('open');
		button.classList.add('rotate');
		to_x1.beginElement();
		to_x2.beginElement();
		setTimeout(function(){
			transform.setAttribute('xlink:href', '#icon-x-transform');
		}, 150);
	}
};
var button = document.getElementById('mobile-clicker'),
	menu   = document.getElementById('mobile-menu'),
	to_f1 = document.getElementById('x-transform-animation-to-f1'),
	to_f2 = document.getElementById('x-transform-animation-to-f2');

button.addEventListener('mousedown', function(e){e.stopPropagation(); mobile_nav()});
button.addEventListener('touchstart', function(e){e.preventDefault(); mobile_nav()});
menu.addEventListener('touchmove', function(e){
	if(button.classList.contains('rotate')){
		e.preventDefault();
	};
});