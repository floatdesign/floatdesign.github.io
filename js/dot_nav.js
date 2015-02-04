function dot_nav(){
	[].forEach.call(sections, function(elem, i, a){
		var id      = elem.getAttribute('id'),
			top     = sectionOffset[i],
			bottom  = sectionOffsetBottom[i],
			halfHeight = windowHeight / 2;
		    dotId   = document.getElementById(id + '-dot');

		if(lastKnownScrollY >= sectionOffset[i] - halfHeight && lastKnownScrollY < bottom - halfHeight){
			dotId.classList.add('active');
		}

		else{
			dotId.classList.remove('active');
			id      = null;
			top     = null;
			bottom  = null;
			halfHeight = null;
		    dotId   = null;
		}
	});
};