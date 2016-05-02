var tagButton = document.querySelector('.blog-tags-search-button-container');
var tagContainer = document.querySelector('.blog-tags-search');
var bodyTag = document.getElementsByTagName('body')[0];
var iconSwitch = document.querySelector('.blog-tags-search-button-container-icon');
var tagSelected = document.querySelector('.blog-tags-search-button-tags_selected');

var tagWidth = tagButton.offsetWidth + 'px';
tagSelected.style.width = tagWidth;

tagButton.addEventListener('click', tagEvent);

function tagEvent () {
    tagContainer.classList.toggle('open');
    bodyTag.classList.toggle('viewport-block');
    iconSwitch.classList.toggle('switch');
}

