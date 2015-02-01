function works_slider(){
	var siteNames = [];
    siteNames[0] = 'forge';
    siteNames[1] = 'creek';

    var length = siteNames.length,
	    j = 0,
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

		        phoneOffset       = phone.getBoundingClientRect().left,
		        desktopOffset     = desktop.getBoundingClientRect().left,
		        tabletOffset      = tablet.getBoundingClientRect().left,
		        phoneWidth        = phone.offsetWidth,
		        desktopWidth      = desktop.offsetWidth,
		        tabletWidth       = tablet.offsetWidth,
		        side,
		        oppSide,
		        keepOn = true;

			if(this.classList.contains('right') && j <length - 1){
				++j;
				for(var i=0; i<siteNames.length; i++){
                     document.getElementById(siteNames[i] + '-dot').classList.remove('active');
                }
				var dot = document.getElementById(siteNames[j] + '-dot');
				dot.classList.add('active');

				phone.style['left'] = '-' + (phoneOffset + phoneWidth) + 'px';
				desktop.style['left'] = '-' + (desktopOffset + desktopWidth) + 'px';
				tablet.style['right'] = tabletOffset + tabletWidth + 'px';

				siteTitle.classList.add('fade-out');
				siteDesc.classList.add('fade-out');

				setTimeout(function(){
					for(var i=0; i<all.length; ++i){
						all[i].style.transition = 'none';
						all[i].style.webkitTransition = 'none';
					}

					phone.style['left'] = windowWidth - phoneOffset + 'px';
					desktop.style['left'] = windowWidth - desktopOffset + 'px';
					tablet.style['right'] = '-' + tabletWidth + 'px';
					phoneScreen.setAttribute('xlink:href', 'images/build/' + siteNames[j] + '-phone.jpg');
					desktopScreen.setAttribute('xlink:href', 'images/build/' + siteNames[j] + '-desktop.jpg');
					tabletScreen.setAttribute('xlink:href', 'images/build/' + siteNames[j] + '-tablet.jpg');
					siteTitle.className = siteNames[j] + '-color';
					siteDesc.className = siteNames[j] + '-content';

					setTimeout(function(){
						for(var i=0; i<all.length; ++i){
							all[i].removeAttribute('style');
						}
						siteTitle.classList.remove('fade-out');
						siteDesc.classList.remove('fade-out');
					},10);
				}, 500); 
			}

			if(this.classList.contains('left') && j!=0){
				--j;
				for(var i=0; i<siteNames.length; i++){
                     document.getElementById(siteNames[i] + '-dot').classList.remove('active');
                }
				var dot = document.getElementById(siteNames[j] + '-dot');
				dot.classList.add('active');

				phone.style['left'] = (windowWidth - phoneOffset + phoneWidth) + 'px';
				desktop.style['left'] = windowWidth - desktopOffset + 'px';
				tablet.style['right'] = '-' + (windowWidth - tabletOffset) + 'px';

				siteTitle.classList.add('fade-out');
				siteDesc.classList.add('fade-out');

				setTimeout(function(){
					for(var i=0; i<all.length; ++i){
						all[i].style.transition = 'none';
						all[i].style.webkitTransition = 'none';
					}

					phone.style['left'] = '-' + (phoneOffset + phoneWidth) + 'px';
					desktop.style['left'] = '-' + (desktopOffset + desktopWidth) + 'px';
					tablet.style['right'] = (tabletOffset + tabletWidth) + 'px';
					phoneScreen.setAttribute('xlink:href', 'images/build/' + siteNames[j] + '-phone.jpg');
					desktopScreen.setAttribute('xlink:href', 'images/build/' + siteNames[j] + '-desktop.jpg');
					tabletScreen.setAttribute('xlink:href', 'images/build/' + siteNames[j] + '-tablet.jpg');
					siteTitle.className = siteNames[j] + '-color';
					siteDesc.className = siteNames[j] + '-content';

					setTimeout(function(){
						for(var i=0; i<all.length; ++i){
							all[i].removeAttribute('style');
						}
						siteTitle.classList.remove('fade-out');
						siteDesc.classList.remove('fade-out');
					},10);
				}, 500); 
			}
		});
	});

}