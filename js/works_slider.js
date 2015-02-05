function works_slider(){
	var siteNames = [];
    siteNames[0] = 'forge';
    siteNames[1] = 'creek';

    var length = siteNames.length,
	    j = 0, // index for site names
	    arrows = document.querySelectorAll('.arrow-wrap');

	[].forEach.call(arrows, function(index){
		index.addEventListener('click', function(){
			var phone         = document.getElementById('icon-phone'),
		        desktop       = document.getElementById('icon-desktop'),
		        tablet        = document.getElementById('icon-tablet'),
		        phoneScreen   = document.getElementById('iphone-screen'),
		        desktopScreen = document.getElementById('macbook-screen'),
		        tabletScreen  = document.getElementById('ipad-screen'),
		        siteTitle     = document.getElementById('site-name'),
		        siteDesc      = document.getElementById('site-desc'),
		        all           = document.querySelectorAll('.icon-phone, .icon-desktop, .icon-tablet'),
		        windowWidth   = window.innerWidth,

		        // gets distance to left of screen from the element
		        phoneOffset       = phone.getBoundingClientRect().left,
		        desktopOffset     = desktop.getBoundingClientRect().left,
		        tabletOffset      = tablet.getBoundingClientRect().left,

		        // get width of elements for calculations
		        phoneWidth        = all[0].offsetWidth,
		        desktopWidth      = all[1].offsetWidth,
		        tabletWidth       = all[2].offsetWidth,
		        side,
		        oppSide,
		        keepOn = true;

			if(this.classList.contains('right') && j <length - 1){
				++j; // increment index
				// change active dot
				for(var i=0; i<siteNames.length; i++){
                     document.getElementById(siteNames[i] + '-dot').classList.remove('active');
                }
				var dot = document.getElementById(siteNames[j] + '-dot');
				dot.classList.add('active');

				//slide content of the left side of page
				all[0].style.left = -(phoneOffset + phoneWidth) + 'px';
				all[1].style.left = -(desktopOffset + desktopWidth) + 'px';
				all[2].style.right = tabletOffset + tabletWidth + 'px';

				siteTitle.classList.add('fade-out');
				siteDesc.classList.add('fade-out');

				// once content is off screen do all of this
				setTimeout(function(){
					// remove transition so we can move svgs over to the other side to slide back in
					for(var i=0; i<all.length; ++i){
						all[i].style.transition = 'none';
						all[i].style.webkitTransition = 'none';
					}

					// move content off the right side of screen change screenshots
					all[0].style.left = windowWidth - phoneOffset + 'px';
					all[1].style.left = windowWidth - desktopOffset + 'px';
					all[2].style.right = '-' + tabletWidth + 'px';
					phoneScreen.setAttribute('xlink:href', 'images/' + siteNames[j] + '-phone.jpg');
					desktopScreen.setAttribute('xlink:href', 'images/' + siteNames[j] + '-desktop.jpg');
					tabletScreen.setAttribute('xlink:href', 'images/' + siteNames[j] + '-tablet.jpg');
					siteTitle.className = siteNames[j] + '-color';
					siteDesc.className = siteNames[j] + '-content';

					// remove all atrributes. This also makes the content slide back in
					setTimeout(function(){
						for(var i=0; i<all.length; ++i){
							all[i].removeAttribute('style');
						}
						siteTitle.classList.remove('fade-out');
						siteDesc.classList.remove('fade-out');
					},10);
				}, 500); 
			}

			// do the same thing as previous but the opposite
			if(this.classList.contains('left') && j!=0){
				--j;
				for(var i=0; i<siteNames.length; i++){
                     document.getElementById(siteNames[i] + '-dot').classList.remove('active');
                }
				var dot = document.getElementById(siteNames[j] + '-dot');
				dot.classList.add('active');

				all[0].style['left'] = (windowWidth - phoneOffset + phoneWidth) + 'px';
				all[1].style['left'] = (windowWidth - desktopOffset) + 'px';
				all[2].style['right'] = '-' + (windowWidth - tabletOffset) + 'px';

				siteTitle.classList.add('fade-out');
				siteDesc.classList.add('fade-out');

				setTimeout(function(){
					for(var i=0; i<all.length; ++i){
						all[i].style.transition = 'none';
						all[i].style.webkitTransition = 'none';
					}

					all[0].style['left'] = ('-' + (phoneOffset + phoneWidth)) + 'px';
					all[1].style['left'] = ('-' + (desktopOffset + desktopWidth)) + 'px';
					all[2].style['right'] = (tabletOffset + tabletWidth) + 'px';
					phoneScreen.setAttribute('xlink:href', 'images/' + siteNames[j] + '-phone.jpg');
					desktopScreen.setAttribute('xlink:href', 'images/' + siteNames[j] + '-desktop.jpg');
					tabletScreen.setAttribute('xlink:href', 'images/' + siteNames[j] + '-tablet.jpg');
					siteTitle.className = siteNames[j] + '-color';
					siteDesc.className = siteNames[j] + '-content';

					setTimeout(function(){
						for(var i=0; i<all.length; ++i){
							all[i].removeAttribute('style');
						}
						siteTitle.classList.remove('fade-out');
						siteDesc.classList.remove('fade-out');
					},20);
				}, 500); 
			}
		});
	});

}