function logo_fill(){
	var scrollTop           = lastKnownScrollY,
		logoOffsetBottom    = logoBottom,
		logoOffsetTop       = logoTop,
	    
	    white  = '#fafafa',
	    orange = '#ff7d25',


	    gradientPercentage = '',
	    stop1 = document.getElementById('floatgradient-stop1'),
	    stop2 = document.getElementById('floatgradient-stop2'),

	    gradientStopColors = function(colorFrom, colorTo){
			stop1.setAttribute('stop-color', colorFrom);
			stop2.setAttribute('stop-color', colorTo);
	    },

	    animateGradient = function(sectionOffset){
	    	if(sectionOffset == 0){
	    		gradientPercentage = 0;
	    	}
	    	else{
	    		gradientPercentage = 100 - ((logoOffsetBottom - sectionOffset)/40) * 100 +'%';
	    	}
			stop1.setAttribute('offset', gradientPercentage);
			stop2.setAttribute('offset', gradientPercentage);
	    };

	var loc = document.getElementById('services-intro');
	var locOffset = loc.offsetTop;
	if(locOffset <= logoOffsetBottom && locOffset >= logoOffsetTop) {
		gradientStopColors(orange, white);
		animateGradient(locOffset);
	}

	else{
		gradientStopColors(white, orange);
		animateGradient(0);
	}
};