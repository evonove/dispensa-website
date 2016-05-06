(function() {
    var mobileOpen = document.querySelectorAll('#mobile-header-navigation-icon');
    var mobileNavigation = document.querySelector('#mobile-header-navigation');
    var mobileNavigationNav = document.querySelector('#mobile-header-navigation-nav');

    var stickyOpen = document.querySelectorAll('.header-navigation-icon.mobile-header-navigation-icon.sticky-header-navigation-icon');
    var stickyNavigation = document.querySelector('.header-navigation.mobile-header-navigation.sticky-header-navigation');
    var stickyNavigationNav = document.querySelector('.header-navigation-nav.mobile-header-navigation-nav.sticky-header-navigation-nav');

    for (var i = 0; i < mobileOpen.length; i++) {
        mobileOpen[i].addEventListener('click', openNavMobile);
    }

    for (var i = 0; i < stickyOpen.length; i++) {
        stickyOpen[i].addEventListener('click', openNavSticky);
    }

    function openNavMobile () {
        mobileNavigation.classList.toggle('mobile-header-navigation-open');
        mobileNavigationNav.classList.toggle('mobile-header-navigation-nav-open');
    }

    function openNavSticky () {
        stickyNavigation.classList.toggle('sticky-header-navigation-open');
        stickyNavigationNav.classList.toggle('sticky-header-navigation-nav-open');
    }
})();
