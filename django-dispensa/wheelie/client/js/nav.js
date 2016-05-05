(function() {
    var stickyOpen = document.querySelector('.sticky-header-navigation-icon');
    var stickyNavigation = document.querySelector('.sticky-header-navigation');
    var stickyNavigationNav = document.querySelector('.sticky-header-navigation-nav');

    stickyOpen.addEventListener('click', openNav);

    function openNav () {
        stickyNavigation.classList.toggle('sticky-header-navigation-open');
        stickyNavigationNav.classList.toggle('sticky-header-navigation-nav-open');
    }
})();
