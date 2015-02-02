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
			return true;
	    };

	[].forEach.call(sections, function(elem, i, a){
		if(sectionOffset[i] <= logoOffsetBottom && logoOffsetBottom < sectionOffsetBottom[i]){
			sections[i].classList.add('logo-active');
		}
		else{
			sections[i].classList.remove('logo-active');	
		}
		if(sections[i].classList.contains('logo-active')){
			if(sectionOffset[i] <= logoOffsetBottom && sectionOffset[i] >= logoOffsetTop){
				if(i!=0){
					if(i%2 == 0){
						gradientStopColors(white, orange);
					}
					else{
						gradientStopColors(orange, white);
					}
					animateGradient(sectionOffset[i]);
					keepanim = true;
				}
				else{
					keepanim = false;
				}
			}
			
			else if(sectionOffset[i] < logoOffsetBottom && keepanim === true){
				ans = false;
				if(i%2 == 0){
					gradientStopColors(white, orange);
				}
				else{
					gradientStopColors(orange, white);
				}
				var ans = animateGradient(0);
				if(ans === true){
					keepanim = false;
				}
				console.log(ans);
			}
			
		}
	});
};