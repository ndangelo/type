$(document).ready(function() {

  'use strict';

  // Responsive videos

  $('.c-content').fitVids();

  // Off Canvas menu

  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-container').toggleClass('is-active');
  });

  // Images Fade In

  $('.js-fadein').viewportChecker({
    classToAdd: 'is-inview',
    offset: 100,
    removeClassAfterAnimation: true
  });
});