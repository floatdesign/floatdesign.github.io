function logo_fill(){
	var scrollTop           = window.pageYOffset,
		logoOffsetBottom    = scrollTop + 60,
		logoOffsetTop       = scrollTop + 20,
	    
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

	var sections = document.querySelectorAll('.section');
	[].forEach.call(sections, function(elem,i,a){
		var point = a[i].offsetTop;

		if(point <= logoOffsetBottom && point >= logoOffsetTop && i!=0){
			if(i%2 == 0){
				gradientStopColors(white, orange);
			}
			else{
				gradientStopColors(orange, white);
			}
			animateGradient(point);
		}
		else if(point < logoOffsetBottom){
			if(i%2 == 0){
				gradientStopColors(white, orange);
			}
			else{
				gradientStopColors(orange, white);
			}
			animateGradient(0);
		}
	});
};