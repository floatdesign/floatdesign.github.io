function parallax(){
	[].forEach.call(parallaxContent, function(elem, i, a){
		 var scrollTotal   = (windowHeight - parallaxHeight[i])/2,
			 percentage    = (lastKnownScrollY - parallaxSectionOffset[i]) / windowHeight,
			 translate     = scrollTotal * percentage + 'px';

		if(lastKnownScrollY > parallaxSectionOffset[i] && percentage <= 1){
			elem.style.transform = 'translate3d(0,' + translate + ',0)';
			elem.style.webkitTransform = 'translate3d(0,' + translate + ',0)';
			if(i == 0){
				fadeElemOffset[0] = parallaxElemOffset[0] + parseInt(translate);
				fadeElemOffset[1] = parallaxElemOffset[1] + parseInt(translate);
			}
			else{
				fadeElemOffset[16] = parallaxElemOffset[2] + parseInt(translate);
				fadeElemOffset[17] = parallaxElemOffset[3] + parseInt(translate);	
			}
		}
		else if(lastKnownScrollY <= parallaxSectionOffset[i]){
			elem.removeAttribute('style');
			scrollTotal   = null;
			percentage    = null;
			translate     = null;
		}
	});
};
