### JQuery Notes
* make sure to include jquery in html
* $(function({...})); is the same as jQuery(function(){...});
* jquery start working when dom are loaded and ready for manipulations (at this point, images might not be ready)

### Animations
* fadeOut() would fade out and set display to none
* fadeIn() would set display back to original one and change the opacity
* fadeTo() would only change the opacity but not touch the display
* fadeToggle() would fade in if it's out, and fade out if it's in
* hide() would set display to none
* show() would remove display: none
* toggle() would show if it's hide, and hide if it's show
* slideUp() would slide up and set display to none
* slideDown() would slide down, show the content, and set display back to original one
* slideToggle() would show if it's hide, and hide if it's show
* animate(), we can create customized animation to move element, make sure the passed in object has string in key value pairs
* delay(), animations can be chained and added with delay
* callback function can be used to time the animations, it would be executed when animation is done
