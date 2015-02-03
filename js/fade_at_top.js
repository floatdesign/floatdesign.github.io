function fade_at_top($active){
	var elements = document.querySelectorAll('h1, h2, p, .container svg'),
		logoOffsetBottom    = 60; //logo height + margin top, marks the bottom of logo
	Array.prototype.forEach.call(elements, function(index){
		if($active === true){
			var indexToTop    = index.getBoundingClientRect().top,
				indexToBottom = index.getBoundingClientRect().bottom,
				indexHeight   = index.offsetHeight,
				logoBottom    = logoOffsetBottom + 20;

			if(indexToTop <= logoBottom && indexToTop > -indexHeight){
				index.classList.remove('full-opacity');
				index.classList.remove('zero-opacity');
				index.style.opacity = (indexToBottom)/(logoBottom + indexHeight);
			}

			else if(indexToTop > logoBottom){
				index.classList.add('full-opacity');
				index.classList.remove('zero-opacity');
			}	

			else if(indexToTop < -indexHeight){
				index.classList.remove('full-opacity');
				index.classList.add('zero-opacity');
			}
		}
		else{
			index.classList.add('full-opacity');
		}
	});
};