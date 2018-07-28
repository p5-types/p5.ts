import * as p5 from '../../index'

declare module '../../index' {
  interface ElementInstanceExtensions {
    /**
     *   Underlying HTML element. All normal HTML methods 
     *   can be called on this.
     *
     */
    elt: any;

    /**
     *   Attaches the element to the parent specified. A 
     *   way of setting the container for the element. 
     *   Accepts either a string ID, DOM node, or 
     *   p5.Element. If no arguments given, parent node is 
     *   returned. For more ways to position the canvas, 
     *   see the  positioning the canvas wiki page.
     *
     *   @param parent the ID, DOM node, or p5.Element of 
     *   desired parent element
     *   @chainable
     */
    parent(parent: string|p5.Element|object): p5.Element;

    /**
     *   Attaches the element to the parent specified. A 
     *   way of setting the container for the element. 
     *   Accepts either a string ID, DOM node, or 
     *   p5.Element. If no arguments given, parent node is 
     *   returned. For more ways to position the canvas, 
     *   see the  positioning the canvas wiki page.
     *
     */
    parent(): p5.Element;

    /**
     *   Sets the ID of the element. If no ID argument is 
     *   passed in, it instead returns the current ID of 
     *   the element.
     *
     *   @param id ID of the element
     *   @chainable
     */
    id(id: string): p5.Element;

    /**
     *   Sets the ID of the element. If no ID argument is 
     *   passed in, it instead returns the current ID of 
     *   the element.
     *
     *   @return the id of the element
     */
    id(): string;

    /**
     *   Adds given class to the element. If no class 
     *   argument is passed in, it instead returns a string 
     *   containing the current class(es) of the element.
     *
     *   @param class class to add
     *   @chainable
     */
    class(theClass: string): p5.Element;

    /**
     *   Adds given class to the element. If no class 
     *   argument is passed in, it instead returns a string 
     *   containing the current class(es) of the element.
     *
     *   @return the class of the element
     */
    class(): string;

    /**
     *   The .mousePressed() function is called once after 
     *   every time a mouse button is pressed over the 
     *   element. Some mobile browsers may also trigger 
     *   this event on a touch screen, if the user performs 
     *   a quick tap. This can be used to attach element 
     *   specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   pressed over the element. if false is passed 
     *   instead, the previously firing function will no 
     *   longer fire.
     *   @chainable
     */
    mousePressed(fxn: Function|boolean): p5.Element;

    /**
     *   The .doubleClicked() function is called once after 
     *   every time a mouse button is pressed twice over 
     *   the element. This can be used to attach element 
     *   and action specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   double clicked over the element. if false is 
     *   passed instead, the previously firing function 
     *   will no longer fire.
     */
    doubleClicked(fxn: Function|boolean): p5.Element;

    /**
     *   The .mouseWheel() function is called once after 
     *   every time a mouse wheel is scrolled over the 
     *   element. This can be used to attach element 
     *   specific event listeners.  The function accepts a 
     *   callback function as argument which will be 
     *   executed when the wheel event is triggered on the 
     *   element, the callback function is passed one 
     *   argument event. The event.deltaY property returns 
     *   negative values if the mouse wheel is rotated up 
     *   or away from the user and positive in the other 
     *   direction. The event.deltaX does the same as 
     *   event.deltaY except it reads the horizontal wheel 
     *   scroll of the mouse wheel. 
     * 
     *  
     *   On OS X with "natural" scrolling enabled, the 
     *   event.deltaY values are reversed.
     *
     *   @param fxn function to be fired when mouse is 
     *   scrolled over the element. if false is passed 
     *   instead, the previously firing function will no 
     *   longer fire.
     *   @chainable
     */
    mouseWheel(fxn: Function|boolean): p5.Element;

    /**
     *   The .mouseReleased() function is called once after 
     *   every time a mouse button is released over the 
     *   element. Some mobile browsers may also trigger 
     *   this event on a touch screen, if the user performs 
     *   a quick tap. This can be used to attach element 
     *   specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   released over the element. if false is passed 
     *   instead, the previously firing function will no 
     *   longer fire.
     *   @chainable
     */
    mouseReleased(fxn: Function|boolean): p5.Element;

    /**
     *   The .mouseClicked() function is called once after 
     *   a mouse button is pressed and released over the 
     *   element. Some mobile browsers may also trigger 
     *   this event on a touch screen, if the user performs 
     *   a quick tap. This can be used to attach element 
     *   specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   clicked over the element. if false is passed 
     *   instead, the previously firing function will no 
     *   longer fire.
     *   @chainable
     */
    mouseClicked(fxn: Function|boolean): p5.Element;

    /**
     *   The .mouseMoved() function is called once every 
     *   time a mouse moves over the element. This can be 
     *   used to attach an element specific event listener.
     *
     *   @param fxn function to be fired when a mouse moves 
     *   over the element. if false is passed instead, the 
     *   previously firing function will no longer fire.
     *   @chainable
     */
    mouseMoved(fxn: Function|boolean): p5.Element;

    /**
     *   The .mouseOver() function is called once after 
     *   every time a mouse moves onto the element. This 
     *   can be used to attach an element specific event 
     *   listener.
     *
     *   @param fxn function to be fired when a mouse moves 
     *   onto the element. if false is passed instead, the 
     *   previously firing function will no longer fire.
     *   @chainable
     */
    mouseOver(fxn: Function|boolean): p5.Element;

    /**
     *   The .changed() function is called when the value 
     *   of an element changes. This can be used to attach 
     *   an element specific event listener.
     *
     *   @param fxn function to be fired when the value of 
     *   an element changes. if false is passed instead, 
     *   the previously firing function will no longer 
     *   fire.
     *   @chainable
     */
    changed(fxn: Function|boolean): p5.Element;

    /**
     *   The .input() function is called when any user 
     *   input is detected with an element. The input event 
     *   is often used to detect keystrokes in a input 
     *   element, or changes on a slider element. This can 
     *   be used to attach an element specific event 
     *   listener.
     *
     *   @param fxn function to be fired when any user 
     *   input is detected within the element. if false is 
     *   passed instead, the previously firing function 
     *   will no longer fire.
     *   @chainable
     */
    input(fxn: Function|boolean): p5.Element;

    /**
     *   The .mouseOut() function is called once after 
     *   every time a mouse moves off the element. This can 
     *   be used to attach an element specific event 
     *   listener.
     *
     *   @param fxn function to be fired when a mouse moves 
     *   off of an element. if false is passed instead, the 
     *   previously firing function will no longer fire.
     *   @chainable
     */
    mouseOut(fxn: Function|boolean): p5.Element;

    /**
     *   The .touchStarted() function is called once after 
     *   every time a touch is registered. This can be used 
     *   to attach element specific event listeners.
     *
     *   @param fxn function to be fired when a touch 
     *   starts over the element. if false is passed 
     *   instead, the previously firing function will no 
     *   longer fire.
     *   @chainable
     */
    touchStarted(fxn: Function|boolean): p5.Element;

    /**
     *   The .touchMoved() function is called once after 
     *   every time a touch move is registered. This can be 
     *   used to attach element specific event listeners.
     *
     *   @param fxn function to be fired when a touch moves 
     *   over the element. if false is passed instead, the 
     *   previously firing function will no longer fire.
     *   @chainable
     */
    touchMoved(fxn: Function|boolean): p5.Element;

    /**
     *   The .touchEnded() function is called once after 
     *   every time a touch is registered. This can be used 
     *   to attach element specific event listeners.
     *
     *   @param fxn function to be fired when a touch ends 
     *   over the element. if false is passed instead, the 
     *   previously firing function will no longer fire.
     *   @chainable
     */
    touchEnded(fxn: Function|boolean): p5.Element;

    /**
     *   The .dragOver() function is called once after 
     *   every time a file is dragged over the element. 
     *   This can be used to attach an element specific 
     *   event listener.
     *
     *   @param fxn function to be fired when a file is 
     *   dragged over the element. if false is passed 
     *   instead, the previously firing function will no 
     *   longer fire.
     *   @chainable
     */
    dragOver(fxn: Function|boolean): p5.Element;

    /**
     *   The .dragLeave() function is called once after 
     *   every time a dragged file leaves the element area. 
     *   This can be used to attach an element specific 
     *   event listener.
     *
     *   @param fxn function to be fired when a file is 
     *   dragged off the element. if false is passed 
     *   instead, the previously firing function will no 
     *   longer fire.
     *   @chainable
     */
    dragLeave(fxn: Function|boolean): p5.Element;

    /**
     *   The .drop() function is called for each file 
     *   dropped on the element. It requires a callback 
     *   that is passed a p5.File object. You can 
     *   optionally pass two callbacks, the first one 
     *   (required) is triggered for each file dropped when 
     *   the file is loaded. The second (optional) is 
     *   triggered just once when a file (or files) are 
     *   dropped.
     *
     *   @param callback callback triggered when files are 
     *   dropped.
     *   @param [fxn] callback to receive loaded file.
     *   @chainable
     */
    drop(callback: Function, fxn?: Function): p5.Element;
  }
}
