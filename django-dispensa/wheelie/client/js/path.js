var path = document.getElementById('menu-path-line');

var pathLength = path.getTotalLength();

var menu = document.querySelector('.menu');
var menuHeight = menu.offsetHeight;

var referenceTop = menu.offsetTop;

path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", function(e) {

    var scrollPercentage = (document.body.scrollTop - referenceTop) / ((menuHeight - document.documentElement.clientHeight) + 450);
    var drawLength = (pathLength * scrollPercentage);

    path.style.strokeDashoffset = pathLength - drawLength;

    if (scrollPercentage >= 0.99) {
        path.style.strokeDasharray = "none";
    } else {
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
    }
});
