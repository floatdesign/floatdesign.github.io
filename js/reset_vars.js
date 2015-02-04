function reset_vars(){
	windowHeight = window.innerHeight,

	[].forEach.call(parallaxContent, function(elem, i, a){
		parallaxHeight[i] = elem.clientHeight;
	});

	setTimeout(function(){
		[].forEach.call(fadeElements, function(elem, i, a){
			fadeElemHeight[i] = elem.clientHeight;
			fadeElemOffset[i] = getElemDistance(elem);
		});

		[].forEach.call(parallaxElems, function(elem, i, a){
			parallaxElemOffset[i] = getElemDistance(elem);
		});

		for(var i=0; i<num_sections; i++){
			sectionHeight[i] = sections[i].clientHeight;
			sectionOffset[i] = getElemDistance(sections[i]);
			sectionOffsetBottom[i] = sectionOffset[i] + sectionHeight[i];
		}
		parallaxSectionOffset[0] = sectionOffset[0];
		parallaxSectionOffset[1] = sectionOffset[2];
	}, 200);
}