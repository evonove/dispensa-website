(function() {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var header = document.querySelector('.sticky-header');
    var initialViewport = document.documentElement.clientHeight;

    window.addEventListener('scroll', function(e) {
        requestAnimationFrame(function() {
            didScroll = true;
        });
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 200);

    function hasScrolled() {
        var scrollTop = window.scrollY;

        if (Math.abs(lastScrollTop - scrollTop) <= delta)
            return;

        if (scrollTop < lastScrollTop && scrollTop > initialViewport){
            // scroll Down
            header.classList.add('sticky-show');
        } else {
            // scroll Up
            header.classList.remove('sticky-show');
        }

        lastScrollTop = scrollTop;
    }
})();
