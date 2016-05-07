(function() {
    var bodyTag = document.querySelector('body');
    var tagButtonContainer = document.querySelector('.blog-tags-search-button');
    var tagButton = document.querySelector('.blog-tags-search-button-container');
    var tagContainer = document.querySelector('.blog-tags-search');
    var tagSelected = document.querySelector('.blog-tags-search-button-tags_selected');
    var iconSwitch = document.querySelector('.blog-tags-search-button-container-icon');

    if (!tagButton) {
        return;
    }

    var tagWidth = tagButton.offsetWidth + 'px';

    if (tagSelected) {
        tagSelected.style.width = tagWidth;
    }

    tagButton.addEventListener('click', tagEvent);

    function tagEvent() {
        tagContainer.classList.toggle('open');
        bodyTag.classList.toggle('viewport-block');
        iconSwitch.classList.toggle('switch');
        tagButtonContainer.classList.toggle('open');
    }
})();
