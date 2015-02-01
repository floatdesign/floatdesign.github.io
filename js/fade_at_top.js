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
				index.style.opacity = (indexToBottom)/(logoBottom + indexHeight);
			}

			else if(indexToTop > logoBottom){
				index.style.opacity = 1;
			}	

			else if(indexToTop < -indexHeight){
				index.style.opacity = 0;
			}
		}
		else{
			index.style.opacity = 1;
		}
	});
};