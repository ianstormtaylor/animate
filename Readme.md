# animate

  Component: easily apply [animate.css](http://daneden.me/animate/) animations to elements via Javascript.

## Installation

    $ component install ianstormtaylor/animate

## API

### animate(element, animation, callback)

  Apply an `animation` to an `element`.

  ```js
  var el = document.querySelector('a');
  animate(el, 'shake');
  ```

### animate.in(element, animation, callback)

  Apply an "in" `animation` to an `element` to make it visible. You can leave off the `-in` in the animation name.

  ```js
  var el = document.querySelector('a');
  animate.in(el, 'bounce');
  ```

### animate.out(element, animation, callback)

  Apply an "out" `animation` to an `element` to make it invisible. You can leave off the `-out` in the animation name.

  ```js
  var el = document.querySelector('a');
  animate.out(el, 'flip');
  ```


## Animations

### One-off (not "in" or "out")

  * flash
  * bounce
  * shake
  * tada
  * swing
  * wobble
  * wiggle
  * pulse
  * flip


### "In"s and "Out"s

#### Bounce
  * bounce-in
  * bounce-down-in
  * bounce-up-in
  * bounce-left-in
  * bounce-right-in
  * bounce-out
  * bounce-down-out
  * bounce-up-out
  * bounce-left-out
  * bounce-right-out

#### Fade
  * fade-in
  * fade-up-in
  * fade-down-in
  * fade-left-in
  * fade-right-in
  * fade-up-big-in
  * fade-down-big-in
  * fade-left-big-in
  * fade-right-big-in
  * fade-out
  * fade-up-out
  * fade-down-out
  * fade-left-out
  * fade-right-out
  * fade-up-big-out
  * fade-down-big-out
  * fade-left-big-out
  * fade-right-big-out

#### Flip _(currently Webkit, Firefox + IE10 only)_
  * flip-x-in
  * flip-y-in
  * flip-x-out
  * flip-y-out

#### Fold _(uses overflow: hidden)_
  * fold-in (elements under `height: 1000px`)
  * fold-small-in (elements under `height: 500px`)
  * fold-tiny-in (elements under `height: 100px`)
  * fold-out (elements under `height: 1000px`)
  * fold-small-out (elements under `height: 500px`)
  * fold-tiny-out (elements under `height: 100px`)

#### Grow
  * grow-in
  * grow-out

#### Hinge
  * hinge-out

#### Lightspeed
  * light-speed-in
  * light-speed-out

#### Roll
  * roll-in
  * roll-out

#### Rotate
  * rotate-in
  * rotate-down-left-in
  * rotate-down-right-in
  * rotate-up-left-in
  * rotate-up-right-in
  * rotate-out
  * rotate-down-left-out
  * rotate-down-right-out
  * rotate-up-left-out
  * rotate-up-right-out

#### Shrink
  * shrink-in
  * shrink-out


## License

  MIT
