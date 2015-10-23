var num_sections = 5,
	process = document.getElementById('process'),
	servicesIntro = document.getElementById('services-intro'),
	servicesBody = document.getElementById('services-body'),
	works = document.getElementById('works'),
	contact = document.getElementById('contact'),

	windowHeight = window.innerHeight,
	keepanim = false,
	lastKnownScrollY = window.pageYOffset,
	logoBottom = lastKnownScrollY + 60,
	logoTop = lastKnownScrollY + 20,
	sections = [works, process, servicesIntro, servicesBody, contact],

	sectionOffset = [],
	sectionOffsetBottom = [],
	sectionHeight = [],

	fadeElemHeight = [],
	fadeElemOffset = [],

	parallaxElemOffset = [],
	parallaxHeight = [],
	parallaxSectionOffset = [];


var fadeElements = document.querySelectorAll('.section h1, .section h2, .section p, .svg-wrap');
var parallaxElems = document.querySelectorAll('.parallax h1, .parallax p');
var parallaxContent = document.querySelectorAll('.parallax .parallax-content');


var getElemDistance = function ( elem ) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};

setTimeout(function(){
	[].forEach.call(parallaxContent, function(elem, i, a){
		parallaxHeight[i] = elem.clientHeight;
	});
	
	[].forEach.call(fadeElements, function(elem, i, a){
		fadeElemHeight[i] = elem.clientHeight;
		fadeElemOffset[i] = getElemDistance(elem);
		elem.classList.add('hard-accell');
	});

	[].forEach.call(parallaxElems, function(elem, i, a){
		parallaxElemOffset[i] = getElemDistance(elem);
	});

	for(var i=0; i<num_sections; i++){
		sectionHeight[i] = sections[i].clientHeight;
		sectionOffset[i] = getElemDistance(sections[i]);
		sectionOffsetBottom[i] = sectionOffset[i] + sectionHeight[i];
	}
	parallaxSectionOffset[0] = sectionOffset[2];
}, 200);
