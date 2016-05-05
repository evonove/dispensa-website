(function() {
    var mobileOpen = document.querySelector('.mobile-header-navigation-icon');
    var mobileNavigation = document.querySelector('.mobile-header-navigation');
    var mobileNavigationNav = document.querySelector('.mobile-header-navigation-nav');

    mobileOpen.addEventListener('click', openNav);

    function openNav () {
        mobileNavigation.classList.toggle('mobile-header-navigation-open');
        mobileNavigationNav.classList.toggle('mobile-header-navigation-nav-open');
    }
})();
