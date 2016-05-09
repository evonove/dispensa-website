(function() {
    'use strict';

    var facebookShare = document.querySelector('.js-facebook-share');
    if (!facebookShare) {
        return;
    }

    // share the current url
    facebookShare.addEventListener('click', function(e) {
        e.preventDefault();
        FB.ui({
            method: 'share',
            href: window.location.href,
        }, function(response){});
    });
})();
