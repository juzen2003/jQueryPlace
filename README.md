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

### CSS selector
* css() would change the css properties of selected tag
## traverse elements
* find() would select all descendants
* children() would select only the direct descendants (1 level only)
* parents() would select all parents
* parent() would select the only direct parent (1 level up only)
* siblings() would select elements at the same level excluding the itself
* next() would select the next siblings
* prev() would select the previous siblings
## filter the jQuery matched object
* filter() could take either a jQuery selector or function that takes in index as parameter, and would filter out whoever return false and keep index that returns true
* not() is the reverse of filter(), would filter out whoever return true and keep whoever return false
* first() & last() would select first & last of selected object
* eq() would take in index as parameter and select the element at input index

### DOM manipulations, insert, replace and remove elemetns
* source.append(target), append (add to the last children) target to the selected source object
* target.appendTo(source), same as source.append(target)
* source.prepend(target), prepend (add to the first children) target to the selected source object
* target.prependTo(source), same as source.prepend(target)
* source.after(target), add target as the next sibling of source
* target.insertAfter(source), same as source.after(target)
* source.before(target), add target as the previous sibling of source
* target.insertBefore(source), same as source.before(target)
