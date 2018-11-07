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

### DOM manipulations, insert, replace and remove elements (HTML)
* source.append(target), append (add to the last children) target to the selected source object
* target.appendTo(source), same as source.append(target)
* source.prepend(target), prepend (add to the first children) target to the selected source object
* target.prependTo(source), same as source.prepend(target)
* source.after(target), add target as the next sibling of source
* target.insertAfter(source), same as source.after(target)
* source.before(target), add target as the previous sibling of source
* target.insertBefore(source), same as source.before(target)
* source.replaceWith(target), replace source with target
* target.replaceAll(source), same as source.replaceWith(target)
* remove() would remove the element (and all descendants) and not remember any data or event listener
* detach() would remove the element (and all descendants) but still remember data and event listener, so later on if the element is appended back to the page, all data and event listener would still be remembered
* empty() would remove all descendants and empty the text but not remove itself (make the tag with empty content)
* attr() would set the attribute of first selected element
* prop() would be used to checked the boolean value of properties like checked, selected, and disabled
* val() would be used to get or modify the specified (passed in parameter) value of selected object
* attr(), prop(), val(): these are for html tag

### DOM manipulations, change element data and css
* css() would change the css properties of selected tag
* !important would not work with css()
* addClass() would add a class to selected object
* removeClass() would remove a class from selected object
* data() would be used to save data to html element or retrieve data attribute (data-attr_name) info

### Event, handling mouse and keyboard events
* click() would fire event when mouse click happened
* hover(handlerIn, handlerOut) would fire event when mouse hover happened, so it would be twice, one is when mouse hovers in and the second one would be when mouse hovers out
* mouseenter() would fire event when mouse is moved onto an element
* mouseleave() would fire event when mouse is moved out of an element
* use stop() to stop animations before performing next animation when an event happened, this would prevent event queue
* on() would be a more readable way to attach event listener
* To have dynamically added element that is also expected to be attached to event handler, we would use event delegation. We add event listener to the parent container (that would not disappear later due to handler like remove), and delegate events to be handled by its children (descendants, dynamically added element, pass in as 2nd parameter)
*  when passing data to event, pass an object to .on as 2nd parameter and obtain data from event.data
* keydown() would fire event when a key is pressed, check event.which to know the keycode

### Event, forms
* focus() would fire event when input is selected or active
* blur() would fire event when input is not selected nor active
* For checkbox, radio button and select elements, we use change()
* submit() would fire event when submit input is clicked, we can do input validation here, and use event.preventDefault() to avoid default handler like page reloading or sending info to database when input validation failed
* add() would add more jquery object to the current matched selection

### regex
* reg_pattern.test(str)

### Ajax
* with ajax, we could get data and show it on the page without reloading the page
* $.get(), $.post(), $.ajax(), $.getJSON()
* $.load() would retrieve files from local server
* to read the local file using ajax, try the following on the project terminal to fake it: python -m SimpleHTTPServer, and on the browser open: http://0.0.0.0:8000 to view the project directory
* Need to add "?jsoncallback=?" to the end of api url so that we can send a JSON-P request
* $.each(array, callback) could be used to iterate through an array for showing each data entry we got from api
* done() & fail() could be used to handle successful or failed request, function inside done() would be executed when request is successful, and function inside fail() would be executed when request is failed.
* Function inside always() would always get executed either it's successful or failed
