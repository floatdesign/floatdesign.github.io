function dot_nav(){
	var elements = document.querySelectorAll('.section');
	Array.prototype.forEach.call(elements, function(index){
		var id           = index.getAttribute('id'),
			indexRect    = index.getBoundingClientRect(),
			top          = indexRect.top,
			bottom       = indexRect.bottom,
			windowHeight = window.innerHeight,
		    dotId        = document.getElementById(id + '-dot');

		if(top <= windowHeight/2 && bottom > (windowHeight/2)){
			dotId.classList.add('active');
		}

		else{
			dotId.classList.remove('active');
		}
	});
};