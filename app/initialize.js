const $ = require('jquery');
window.jQuery = $;
window.$ = $;
var preloader = require('preloader-js');
var bootstrap = require('bootstrap-material-design');
var scrollify = require('jquery-scrollify');



document.addEventListener('DOMContentLoaded', function() {

  console.log('Initialized app');
// do your setup here


// // Hides the preloader with a fade out animation.
// preloader.hide();
// // Shows the preloader.
// preloader.show();

  $('[data-toggle="tooltip"]').tooltip();

$.scrollify({
    section: ".section",
    sectionName: "section-name",
    interstitialSection: '.off-height',
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    standardScrollElements: ".off-scroll",
    setHeights: true,
    overflowScroll: false,
    updateHash: true,
    touchScroll: true
});

  $(".off-scrollify", function(){ 
  $.scrollify.disable()
});



});
