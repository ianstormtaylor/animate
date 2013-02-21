module.exports = getAnimationEventTypes();

function camelCaseEventTypes(prefix) {
  prefix = prefix || '';

  return {
    start: prefix + 'AnimationStart',
    end: prefix + 'AnimationEnd',
    iteration: prefix + 'AnimationIteration'
  };
}

function lowerCaseEventTypes(prefix) {
  prefix = prefix || '';

  return {
    start: prefix + 'animationstart',
    end: prefix + 'animationend',
    iteration: prefix + 'animationiteration'
  };
}

/**
 * @return {Object} Animation event types {start, end, iteration}
 */

function getAnimationEventTypes() {
  var prefixes = ['webkit', 'Moz', 'O', ''];
  var style = document.documentElement.style;

  // browser compliant
  if (undefined !== style.animationName) {
    return lowerCaseEventTypes();
  }

  for (var i = 0, len = prefixes.length, prefix; i < len; i++) {
    prefix = prefixes[i];

    if (undefined !== style[prefix + 'AnimationName']) {
      // Webkit
      if (0 === i) {
        return camelCaseEventTypes(prefix.toLowerCase());
      }
      // Mozilla
      else if (1 === i) {
        return lowerCaseEventTypes();
      }
      // Opera
      else if (2 === i) {
        return lowerCaseEventTypes(prefix.toLowerCase());
      }
    }
  }

  return {};
}