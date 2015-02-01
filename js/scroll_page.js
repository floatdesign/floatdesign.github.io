var elems = document.querySelectorAll('.dots a');
Array.prototype.forEach.call(elems, function(index){
	index.addEventListener('click', function(e){
		e.preventDefault();
        e.stopPropagation();

        var id = this.getAttribute('href'),
            slice = id.slice(1), //remove #
            elem = document.getElementById(slice);
        scrollTo(document.body, elem, 600);
	});
});

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        toElem = to.offsetTop,
        change = toElem - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);                        
        element.scrollTop = val; 
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};



// mobile nav scroll
var links = document.querySelectorAll('.mobile-menu a'),
    mm = document.getElementById('mobile-menu'),
    mc = document.getElementById('mobile-clicker'),
    animationToF  = document.getElementById('x-transform-animation-to-f1'),
    animationToF2 = document.getElementById('x-transform-animation-to-f2');

Array.prototype.forEach.call(links, function(index){
    index.addEventListener('click', function(e){
        setTimeout(function(){
            mm.classList.remove('open');
            mc.classList.remove('rotate');
            animationToF.beginElement();
            animationToF2.beginElement();
            setTimeout(function(){
                transform.setAttribute('xlink:href', '#icon-f-transform');
            }, 150);
        }, 400);
    });
});