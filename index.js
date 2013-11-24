var $            = require('jquery')
  , animationEnd = require('css-animation-event-types').end;


/*
 * Animate.
 * Some animations aren't "in" or "out", so you'd want to use this one.
 * Otherwise using `animate.in` and `animate.out` is easier.
 */

var animate = module.exports = function animate (element, animation, callback) {
  // Animate.css kicks off animations when you add the `animated` class.
  var className = animation + ' animated';

  // Slides are handled by jQuery, since CSS doesn't have a good way of doing
  // them natively. Not until we can animate to `auto` at least.
  if (animation === 'slide-out') {
    $(element).slideUp('slow', callback);
    return;
  } else if (animation === 'slide-in') {
    $(element).slideDown('slow', callback);
    return;
  }

  $(element)
    .addClass(className)
    .on(animationEnd, function () {
      $(element)
        .off(animationEnd)
        .removeClass(className + ' animated');
      if (callback) callback();
    });

  return this;
};


/*
 * Animate in from invisible.
 */

module.exports.in = function animateIn (element, animation, add, callback) {
  if (callback === undefined && 'function' === typeof add) callback = add;

  animation = animation + '-in';

  // If you've specific to add it, make sure the element is visible, in case it
  // was animated out or `display: none`.
  if (add) {
    $(element)
      .css('visibility', 'visible')
      .slideDown(100);
  }

  animate(element, animation, callback);
};


/*
 * Animate out from invisible.
 */

module.exports.out = function animateOut (element, animation, remove, callback) {
  if (callback === undefined && 'function' === typeof remove) callback = remove;

  animation = animation + '-out';

  // Make sure the element gets hidden, and if you've specified to remove it,
  // that it's height is taken care of smoothly when it's finally invisible.
  animate(element, animation, function () {
    if (remove) {
      $(element)
        .css('visibility', 'hidden')
        .slideUp(100, callback);
    } else {
      if (callback) callback();
    }
  });
};
