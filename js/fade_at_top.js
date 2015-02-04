function fade_at_top(){
	[].forEach.call(fadeElements, function(elem, i, a){
		if(logoBottom >= fadeElemOffset[i] && lastKnownScrollY < fadeElemOffset[i] + fadeElemHeight[i]){
			fadeElements[i].classList.remove('full-opacity');
			fadeElements[i].classList.remove('zero-opacity');
			fadeElements[i].style.opacity = 1 - ((logoBottom - fadeElemOffset[i])/(fadeElemHeight[i] + 60));
		}

		else if(logoBottom < fadeElemOffset[i]){
			elem.classList.add('full-opacity');
			elem.classList.remove('zero-opacity');
			elem.removeAttribute('style');
		}	

		else if(lastKnownScrollY > fadeElemOffset[i] + fadeElemHeight[i]){
			elem.classList.remove('full-opacity');
			elem.classList.add('zero-opacity');
			elem.removeAttribute('style');
		}
	});
};