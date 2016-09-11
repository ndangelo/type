$(document).ready(function() {

  'use strict';

  // Responsive videos

  $('.wrapper').fitVids();

  // Off Canvas menu

  $('.off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.off-canvas-container').toggleClass('is-active');
  });

  // Images Fade In

  $('.fadein').viewportChecker({
    classToAdd: 'inview',
    offset: 100,
    removeClassAfterAnimation: true
  });
});