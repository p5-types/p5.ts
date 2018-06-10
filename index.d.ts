// Type definitions for p5 0.3
// Project: https://github.com/processing/p5.js
// Definitions by: p5-types <https://github.com/p5-types>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This file was auto-generated. Please do not edit it.

export = p5;
type UNKNOWN_P5_CONSTANT = any;
declare class p5 {
  // Properties from p5

  // src/color/creating_reading.js

  /**
   *   Extracts the alpha value from a color or pixel 
   *   array.
   *
   *   @param obj p5.Color object or pixel array
   */
  alpha(obj: object): void;

  /**
   *   Extracts the blue value from a color or a pixel 
   *   array.
   *
   *   @param obj p5.Color object or pixel array
   */
  blue(obj: object): void;

  /**
   *   Extracts the brightness value from a color.
   *
   *   @param color p5.Color object
   */
  brightness(color: object): void;

  /**
   *   Creates colors for storing in variables of the 
   *   color datatype. The parameters are interpreted as 
   *   RGB or HSB values depending on the current 
   *   colorMode(). The default mode is RGB values from 0 
   *   to 255 and, therefore, the function call 
   *   color(255, 204, 0) will return a bright yellow 
   *   color. Note that if only one value is provided to 
   *   color(), it will be interpreted as a grayscale 
   *   value. Add a second value, and it will be used for 
   *   alpha transparency. When three values are 
   *   specified, they are interpreted as either RGB or 
   *   HSB values. Adding a fourth value applies alpha 
   *   transparency. Colors are stored as Numbers or 
   *   Arrays.
   *
   *   @param v1 gray value or red or hue value relative 
   *   to the current color range
   *   @param [v2] gray value or green or saturation 
   *   value relative to the current color range (or 
   *   alpha value if first param is gray value)
   *   @param [v3] gray value or blue or brightness value 
   *   relative to the current color range
   *   @param [alpha] alpha value relative to current 
   *   color range
   *   @return resulting color
   */
  color(v1: number, v2?: number, v3?: number, alpha?: number): any[];

  /**
   *   Extracts the green value from a color or pixel 
   *   array.
   *
   *   @param color p5.Color object
   */
  green(color: object): void;

  /**
   *   Extracts the hue value from a color.
   *
   *   @param color p5.Color object
   */
  hue(color: object): void;

  // TODO: Fix lerpColor() errors in src/color/creating_reading.js, line 233:
  //
  //   param "c1" has invalid type: Array/Number
  //   param "c2" has invalid type: Array/Number
  //   return has invalid type: Array/Number
  //
  // lerpColor(c1: any, c2: any, amt: number): any;

  /**
   *   Extracts the red value from a color or pixel 
   *   array.
   *
   *   @param obj p5.Color object or pixel array
   */
  red(obj: object): void;

  /**
   *   Extracts the saturation value from a color.
   *
   *   @param color p5.Color object
   */
  saturation(color: object): void;

  // src/color/setting.js

  /**
   *   The background() function sets the color used for 
   *   the background of the p5.js canvas. The default 
   *   background is light gray. This function is 
   *   typically used within draw() to clear the display 
   *   window at the beginning of each frame, but it can 
   *   be used inside setup() to set the background on 
   *   the first frame of animation or if the background 
   *   need only be set once.
   *
   *   @param v1 gray value, red or hue value (depending 
   *   on the current color mode), or color or p5.Image
   *   @param [v2] green or saturation value (depending 
   *   on the current color mode)
   *   @param [v3] blue or brightness value (depending on 
   *   the current color mode)
   *   @param [a] opacity of the background
   */
  background(v1: number|Color|p5.Image, v2?: number|any[], v3?: number|any[], a?: number|any[]): void;

  /**
   *   Clears the pixels within a buffer. This function 
   *   only works on p5.Canvas objects created with the 
   *   createCanvas() function; it won't work with the 
   *   main display window. Unlike the main graphics 
   *   context, pixels in additional graphics areas 
   *   created with createGraphics() can be entirely or 
   *   partially transparent. This function clears 
   *   everything to make all of the pixels 100% 
   *   transparent.
   *
   */
  clear(): void;

  /**
   *   Changes the way p5.js interprets color data. By 
   *   default, the parameters for fill(), stroke(), 
   *   background(), and color() are defined by values 
   *   between 0 and 255 using the RGB color model. The 
   *   colorMode() function is used to switch color 
   *   systems.
   *
   *   @param mode either RGB or HSB, corresponding to 
   *   Red/Green/Blue and Hue/Saturation/Brightness
   *   @param max1 range for the red or hue depending on 
   *   the current color mode, or range for all values
   *   @param max2 range for the green or saturation 
   *   depending on the current color mode
   *   @param max3 range for the blue or brightness 
   *   depending on the current color mode
   *   @param maxA range for the alpha
   */
  colorMode(mode: number|COLOR_MODE, max1: number|UNKNOWN_P5_CONSTANT, max2: number|UNKNOWN_P5_CONSTANT, max3: number|UNKNOWN_P5_CONSTANT, maxA: number|UNKNOWN_P5_CONSTANT): void;

  /**
   *   Sets the color used to fill shapes. For example, 
   *   if you run fill(204, 102, 0), all subsequent 
   *   shapes will be filled with orange. This color is 
   *   either specified in terms of the RGB or HSB color 
   *   depending on the current colorMode(). (The default 
   *   color space is RGB, with each value in the range 
   *   from 0 to 255.)
   *
   *   @param v1 gray value, red or hue value (depending 
   *   on the current color mode), or color Array
   *   @param [v2] green or saturation value (depending 
   *   on the current color mode)
   *   @param [v3] blue or brightness value (depending on 
   *   the current color mode)
   *   @param [a] opacity of the background
   */
  fill(v1: number|any[], v2?: number|any[], v3?: number|any[], a?: number|any[]): void;

  /**
   *   Disables filling geometry. If both noStroke() and 
   *   noFill() are called, nothing will be drawn to the 
   *   screen.
   *
   */
  noFill(): void;

  /**
   *   Disables drawing the stroke (outline). If both 
   *   noStroke() and noFill() are called, nothing will 
   *   be drawn to the screen.
   *
   */
  noStroke(): void;

  /**
   *   Sets the color used to draw lines and borders 
   *   around shapes. This color is either specified in 
   *   terms of the RGB or HSB color depending on the 
   *   current colorMode() (the default color space is 
   *   RGB, with each value in the range from 0 to 255).
   *
   *   @param v1 gray value, red or hue value (depending 
   *   on the current color mode), or color Array
   *   @param [v2] green or saturation value (depending 
   *   on the current color mode)
   *   @param [v3] blue or brightness value (depending on 
   *   the current color mode)
   *   @param [a] opacity of the background
   */
  stroke(v1: number|any[], v2?: number|any[], v3?: number|any[], a?: number|any[]): void;

  // src/core/constants.js

  /**
   *   HALF_PI is a mathematical constant with the value 
   *   1.57079632679489661923. It is half the ratio of 
   *   the circumference of a circle to its diameter. It 
   *   is useful in combination with the trigonometric 
   *   functions sin() and cos().
   *
   */
  HALF_PI: any;

  /**
   *   PI is a mathematical constant with the value 
   *   3.14159265358979323846. It is the ratio of the 
   *   circumference of a circle to its diameter. It is 
   *   useful in combination with the trigonometric 
   *   functions sin() and cos().
   *
   */
  PI: any;

  /**
   *   QUARTER_PI is a mathematical constant with the 
   *   value 0.7853982. It is one quarter the ratio of 
   *   the circumference of a circle to its diameter. It 
   *   is useful in combination with the trigonometric 
   *   functions sin() and cos().
   *
   */
  QUARTER_PI: any;

  /**
   *   TAU is an alias for TWO_PI, a mathematical 
   *   constant with the value 6.28318530717958647693. It 
   *   is twice the ratio of the circumference of a 
   *   circle to its diameter. It is useful in 
   *   combination with the trigonometric functions sin() 
   *   and cos().
   *
   */
  TAU: any;

  /**
   *   TWO_PI is a mathematical constant with the value 
   *   6.28318530717958647693. It is twice the ratio of 
   *   the circumference of a circle to its diameter. It 
   *   is useful in combination with the trigonometric 
   *   functions sin() and cos().
   *
   */
  TWO_PI: any;

  // src/core/core.js

  /**
   *   Called directly before setup(), the preload() 
   *   function is used to handle asynchronous loading of 
   *   external files. If a preload function is defined, 
   *   setup() will wait until any load calls within have 
   *   finished. Nothing besides load calls should be 
   *   inside preload (loadImage, loadJSON, loadStrings, 
   *   etc).
   *
   */
  preload(): void;

  /**
   *   The setup() function is called once when the 
   *   program starts. It's used to define initial 
   *   environment properties such as screen size and 
   *   background color and to load media such as images 
   *   and fonts as the program starts. There can only be 
   *   one setup() function for each program and it 
   *   shouldn't be called again after its initial 
   *   execution. Note: Variables declared within setup() 
   *   are not accessible within other functions, 
   *   including draw().
   *
   */
  setup(): void;

  /**
   *   Called directly after setup(), the draw() function 
   *   continuously executes the lines of code contained 
   *   inside its block until the program is stopped or 
   *   noLoop() is called. draw() is called automatically 
   *   and should never be called explicitly. It should 
   *   always be controlled with noLoop(), redraw() and 
   *   loop(). After noLoop() stops the code in draw() 
   *   from executing, redraw() causes the code inside 
   *   draw() to execute once, and loop() will cause the 
   *   code inside draw() to resume executing 
   *   continuously. The number of times draw() executes 
   *   in each second may be controlled with the 
   *   frameRate() function. There can only be one draw() 
   *   function for each sketch, and draw() must exist if 
   *   you want the code to run continuously, or to 
   *   process events such as mousePressed(). Sometimes, 
   *   you might have an empty call to draw() in your 
   *   program, as shown in the above example.
   *
   */
  draw(): void;

  /**
   *   Removes the entire p5 sketch. This will remove the 
   *   canvas and any elements created by p5.js. It will 
   *   also stop the draw loop and unbind any properties 
   *   or methods from the window global scope. It will 
   *   leave a variable p5 in case you wanted to create a 
   *   new p5 sketch. If you like, you can set p5 = null 
   *   to erase it.
   *
   */
  remove(): void;

  // src/data/array_functions.js

  /**
   *   Adds a value to an Array, maps to Array.push.
   *
   *   @param array Array to append
   *   @param value to be added to the Array
   */
  append(array: any[], value: any): void;

  // TODO: Fix arrayCopy() errors in src/data/array_functions.js, line 25:
  //
  //   required param "dst" follows an optional param
  //   param "length" has invalid type: Nimber
  //
  // arrayCopy(src: any[], srcPosition?: number, dst: any[], dstPosition?: number, length?: any): void;

  /**
   *   Concatenates two arrays, maps to Array.concat(). 
   *   For example, concatenating the array { 1, 2, 3 } 
   *   and the array { 4, 5, 6 } yields { 1, 2, 3, 4, 5, 
   *   6 }.
   *
   *   @param a first Array to concatenate
   *   @param b second Array to concatenate
   */
  concat(a: any[], b: any[]): void;

  /**
   *   Reverses the order of an array, maps to 
   *   Array.reverse()
   *
   *   @param list Array to reverse
   */
  reverse(list: any[]): void;

  /**
   *   Decreases an array by one element and returns the 
   *   shortened array, maps to Array.pop().
   *
   *   @param list Array to shorten
   *   @return shortened Array
   */
  shorten(list: any[]): any[];

  /**
   *   Sorts an array of numbers from smallest to 
   *   largest, or puts an array of words in alphabetical 
   *   order. The original array is not modified; a 
   *   re-ordered array is returned. The count parameter 
   *   states the number of elements to sort. For 
   *   example, if there are 12 elements in an array and 
   *   count is set to 5, only the first 5 elements in 
   *   the array will be sorted.
   *
   *   @param list Array to sort
   *   @param [count] number of elements to sort, 
   *   starting from 0
   */
  sort(list: any[], count?: number): void;

  /**
   *   Inserts a value or an array of values into an 
   *   existing array. The first parameter specifies the 
   *   initial array to be modified, and the second 
   *   parameter defines the data to be inserted. The 
   *   third parameter is an index value which specifies 
   *   the array position from which to insert data. 
   *   (Remember that array index numbering starts at 
   *   zero, so the first position is 0, the second 
   *   position is 1, and so on.)
   *
   *   @param list Array to splice into
   *   @param value value to be spliced in
   *   @param position in the array from which to insert 
   *   data
   */
  splice(list: any[], value: any, position: number): void;

  /**
   *   Extracts an array of elements from an existing 
   *   array. The list parameter defines the array from 
   *   which the elements will be copied, and the start 
   *   and count parameters specify which elements to 
   *   extract. If no count is given, elements will be 
   *   extracted from the start to the end of the array. 
   *   When specifying the start, remember that the first 
   *   array element is 0. This function does not change 
   *   the source array.
   *
   *   @param list Array to extract from
   *   @param start position to begin
   *   @param [count] number of values to extract
   *   @return Array of extracted elements
   */
  subset(list: any[], start: number, count?: number): any[];

  // src/data/string_functions.js

  /**
   *   Combines an array of Strings into one String, each 
   *   separated by the character(s) used for the 
   *   separator parameter. To join arrays of ints or 
   *   floats, it's necessary to first convert them to 
   *   Strings using nf() or nfs().
   *
   *   @param list array of Strings to be joined
   *   @param separator String to be placed between each 
   *   item
   *   @return joined String
   */
  join(list: any[], separator: string): string;

  /**
   *   This function is used to apply a regular 
   *   expression to a piece of text, and return matching 
   *   groups (elements found inside parentheses) as a 
   *   String array. If there are no matches, a null 
   *   value will be returned. If no groups are specified 
   *   in the regular expression, but the sequence 
   *   matches, an array of length 1 (with the matched 
   *   text as the first element of the array) will be 
   *   returned. To use the function, first check to see 
   *   if the result is null. If the result is null, then 
   *   the sequence did not match at all. If the sequence 
   *   did match, an array is returned. If there are 
   *   groups (specified by sets of parentheses) in the 
   *   regular expression, then the contents of each will 
   *   be returned in the array. Element [0] of a regular 
   *   expression match returns the entire matching 
   *   string, and the match groups start at element [1] 
   *   (the first group is [1], the second [2], and so 
   *   on).
   *
   *   @param str the String to be searched
   *   @param regexp the regexp to be used for matching
   *   @return Array of Strings found
   */
  match(str: string, regexp: string): any[];

  /**
   *   This function is used to apply a regular 
   *   expression to a piece of text, and return a list 
   *   of matching groups (elements found inside 
   *   parentheses) as a two-dimensional String array. If 
   *   there are no matches, a null value will be 
   *   returned. If no groups are specified in the 
   *   regular expression, but the sequence matches, a 
   *   two dimensional array is still returned, but the 
   *   second dimension is only of length one. To use the 
   *   function, first check to see if the result is 
   *   null. If the result is null, then the sequence did 
   *   not match at all. If the sequence did match, a 2D 
   *   array is returned. If there are groups (specified 
   *   by sets of parentheses) in the regular expression, 
   *   then the contents of each will be returned in the 
   *   array. Assuming a loop with counter variable i, 
   *   element [i][0] of a regular expression match 
   *   returns the entire matching string, and the match 
   *   groups start at element [i][1] (the first group is 
   *   [i][1], the second [i][2], and so on).
   *
   *   @param str the String to be searched
   *   @param regexp the regexp to be used for matching
   *   @return 2d Array of Strings found
   */
  matchAll(str: string, regexp: string): any[];

  /**
   *   Utility function for formatting numbers into 
   *   strings. There are two versions: one for 
   *   formatting floats, and one for formatting ints. 
   *   The values for the digits, left, and right 
   *   parameters should always be positive integers.
   *
   *   @param num the Number to format
   *   @param [digits] number of digits to pad with zero
   *   @param [left] number of digits to the left of the 
   *   decimal point
   *   @param [right] number of digits to the right of 
   *   the decimal point
   *   @return formatted String
   */
  nf(num: number|any[], digits?: number, left?: number, right?: number): string|any[];

  /**
   *   Utility function for formatting numbers into 
   *   strings and placing appropriate commas to mark 
   *   units of 1000. There are two versions: one for 
   *   formatting ints, and one for formatting an array 
   *   of ints. The value for the right parameter should 
   *   always be a positive integer.
   *
   *   @param num the Number to format
   *   @param [right] number of digits to the right of 
   *   the decimal point
   *   @return formatted String
   */
  nfc(num: number|any[], right?: number): string|any[];

  /**
   *   Utility function for formatting numbers into 
   *   strings. Similar to nf() but puts a "+" in front 
   *   of positive numbers and a "-" in front of negative 
   *   numbers. There are two versions: one for 
   *   formatting floats, and one for formatting ints. 
   *   The values for the digits, left, and right 
   *   parameters should always be positive integers.
   *
   *   @param num the Number to format
   *   @param [digits] number of digits to pad with zero
   *   @param [left] number of digits to the left of the 
   *   decimal point
   *   @param [right] number of digits to the right of 
   *   the decimal point
   *   @return formatted String
   */
  nfp(num: number|any[], digits?: number, left?: number, right?: number): string|any[];

  /**
   *   Utility function for formatting numbers into 
   *   strings. Similar to nf() but puts a "+" in front 
   *   of positive numbers and a "-" in front of negative 
   *   numbers. There are two versions: one for 
   *   formatting floats, and one for formatting ints. 
   *   The values for the digits, left, and right 
   *   parameters should always be positive integers.
   *
   *   @param num the Number to format
   *   @param [digits] number of digits to pad with zero
   *   @param [left] number of digits to the left of the 
   *   decimal point
   *   @param [right] number of digits to the right of 
   *   the decimal point
   *   @return formatted String
   */
  nfs(num: number|any[], digits?: number, left?: number, right?: number): string|any[];

  /**
   *   The split() function maps to String.split(), it 
   *   breaks a String into pieces using a character or 
   *   string as the delimiter. The delim parameter 
   *   specifies the character or characters that mark 
   *   the boundaries between each piece. A String[] 
   *   array is returned that contains each of the 
   *   pieces. The splitTokens() function works in a 
   *   similar fashion, except that it splits using a 
   *   range of characters instead of a specific 
   *   character or sequence.
   *
   *   @param value the String to be split
   *   @param delim the String used to separate the data
   *   @return Array of Strings
   */
  split(value: string, delim: string): any[];

  /**
   *   The splitTokens() function splits a String at one 
   *   or many character delimiters or "tokens." The 
   *   delim parameter specifies the character or 
   *   characters to be used as a boundary. If no delim 
   *   characters are specified, any whitespace character 
   *   is used to split. Whitespace characters include 
   *   tab (\t), line feed (\n), carriage return (\r), 
   *   form feed (\f), and space.
   *
   *   @param value the String to be split
   *   @param [delim] list of individual Strings that 
   *   will be used as separators
   *   @return Array of Strings
   */
  splitTokens(value: string, delim?: string): any[];

  /**
   *   Removes whitespace characters from the beginning 
   *   and end of a String. In addition to standard 
   *   whitespace characters such as space, carriage 
   *   return, and tab, this function also removes the 
   *   Unicode "nbsp" character.
   *
   *   @param [str] a String or Array of Strings to be 
   *   trimmed
   *   @return a trimmed String or Array of Strings
   */
  trim(str?: string|any[]): string|any[];

  // src/environment/environment.js

  /**
   *   The system variable frameCount contains the number 
   *   of frames that have been displayed since the 
   *   program started. Inside setup() the value is 0, 
   *   after the first iteration of draw it is 1, etc.
   *
   */
  frameCount: any;

  /**
   *   Confirms if a p5.js program is "focused," meaning 
   *   that it is active and will accept mouse or 
   *   keyboard input. This variable is "true" if it is 
   *   focused and "false" if not.
   *
   */
  focused: any;

  // TODO: Fix cursor() errors in src/environment/environment.js, line 59:
  //
  //   param "type" has invalid type: Number/Constant
  //
  // cursor(type: any, x?: number, y?: number): void;

  /**
   *   Specifies the number of frames to be displayed 
   *   every second. For example, the function call 
   *   frameRate(30) will attempt to refresh 30 times a 
   *   second. If the processor is not fast enough to 
   *   maintain the specified rate, the frame rate will 
   *   not be achieved. Setting the frame rate within 
   *   setup() is recommended. The default rate is 60 
   *   frames per second. This is the same as 
   *   setFrameRate(val). Calling frameRate() with no 
   *   arguments returns the current framerate. This is 
   *   the same as getFrameRate().
   *
   *   @param [fps] number of frames to be displayed 
   *   every second
   *   @return current frameRate
   */
  frameRate(fps?: number): number;

  /**
   *   Hides the cursor from view.
   *
   */
  noCursor(): void;

  /**
   *   System variable that stores the width of the 
   *   entire screen display. This is used to run a 
   *   full-screen program on any display size.
   *
   */
  displayWidth: any;

  /**
   *   System variable that stores the height of the 
   *   entire screen display. This is used to run a 
   *   full-screen program on any display size.
   *
   */
  displayHeight: any;

  /**
   *   System variable that stores the width of the inner 
   *   window, it maps to window.innerWidth.
   *
   */
  windowWidth: any;

  /**
   *   System variable that stores the height of the 
   *   inner window, it maps to window.innerHeight.
   *
   */
  windowHeight: any;

  /**
   *   The windowResized() function is called once every 
   *   time the browser window is resized. This is a good 
   *   place to resize the canvas or do any other 
   *   adjustements to accomodate the new window size.
   *
   */
  windowResized: any;

  /**
   *   System variable that stores the width of the 
   *   drawing canvas. This value is set by the first 
   *   parameter of the createCanvas() function. For 
   *   example, the function call createCanvas(320, 240) 
   *   sets the width variable to the value 320. The 
   *   value of width defaults to 100 if createCanvas() 
   *   is not used in a program.
   *
   */
  width: any;

  /**
   *   System variable that stores the height of the 
   *   drawing canvas. This value is set by the second 
   *   parameter of the createCanvas() function. For 
   *   example, the function call createCanvas(320, 240) 
   *   sets the height variable to the value 240. The 
   *   value of height defaults to 100 if createCanvas() 
   *   is not used in a program.
   *
   */
  height: any;

  /**
   *   If argument is given, sets the sketch to 
   *   fullscreen or not based on the value of the 
   *   argument. If no argument is given, returns the 
   *   current fullscreen state. Note that due to browser 
   *   restrictions this can only be called on user 
   *   input, for example, on mouse press like the 
   *   example below.
   *
   *   @param [val] whether the sketch should be 
   *   fullscreened or not
   *   @return current fullscreen state
   */
  fullscreen(val?: boolean): boolean;

  // src/image/image.js

  /**
   *   Creates a new p5.Image (the datatype for storing 
   *   images). This provides a fresh buffer of pixels to 
   *   play with. Set the size of the buffer with the 
   *   width and height parameters. .pixels gives access 
   *   to an array containing the values for all the 
   *   pixels in the display window. These values are 
   *   numbers. This array is the size of the display 
   *   window x4, representing the R, G, B, A values in 
   *   order for each pixel, moving from left to right 
   *   across each row, then down each column. See 
   *   .pixels for more info. It may also be simpler to 
   *   use set() or get().  Before accessing the pixels 
   *   of an image, the data must loaded with the 
   *   loadPixels() function. After the array data has 
   *   been modified, the updatePixels() function must be 
   *   run to update the changes.
   *
   *   @param width width in pixels
   *   @param height height in pixels
   *   @return the p5.Image object
   */
  createImage(width: number, height: number): p5.Image;

  // src/image/loading_displaying.js

  /**
   *   Loads an image from a path and creates a p5.Image 
   *   from it. The image may not be immediately 
   *   available for rendering If you want to ensure that 
   *   the image is ready before doing anything with it 
   *   you can do perform those operations in the 
   *   callback, or place the loadImage() call in 
   *   preload().
   *
   *   @param callback Function to be called once the 
   *   image is loaded. Will be passed the p5.Image.
   *   @return the p5.Image object
   */
  loadImage(path: string, callback: Function): p5.Image;

  /**
   *   Draw an image to the main canvas of the p5js 
   *   sketch
   *
   *   @param image the image to display
   *   @param x x-coordinate of the image
   *   @param y y-coordinate of the image
   *   @param [width] width to display the image
   *   @param [height] height to display the image
   */
  image(image: p5.Image, x: number, y: number, width?: number, height?: number): void;

  /**
   *   Sets the fill value for displaying images. Images 
   *   can be tinted to specified colors or made 
   *   transparent by including an alpha value. To apply 
   *   transparency to an image without affecting its 
   *   color, use white as the tint color and specify an 
   *   alpha value. For instance, tint(255, 128) will 
   *   make an image 50% transparent (assuming the 
   *   default alpha range of 0-255, which can be changed 
   *   with colorMode()). The value for the gray 
   *   parameter must be less than or equal to the 
   *   current maximum value as specified by colorMode(). 
   *   The default maximum value is 255.
   *
   *   @param v1 gray value, red or hue value (depending 
   *   on the current color mode), or color Array
   *   @param [v2] green or saturation value (depending 
   *   on the current color mode)
   *   @param [v3] blue or brightness value (depending on 
   *   the current color mode)
   *   @param [a] opacity of the background
   */
  tint(v1: number|any[], v2?: number|any[], v3?: number|any[], a?: number|any[]): void;

  /**
   *   Removes the current fill value for displaying 
   *   images and reverts to displaying images with their 
   *   original hues.
   *
   */
  noTint(): void;

  /**
   *   Set image mode. Modifies the location from which 
   *   images are drawn by changing the way in which 
   *   parameters given to image() are interpreted. The 
   *   default mode is imageMode(CORNER), which 
   *   interprets the second and third parameters of 
   *   image() as the upper-left corner of the image. If 
   *   two additional parameters are specified, they are 
   *   used to set the image's width and height. 
   *   imageMode(CORNERS) interprets the second and third 
   *   parameters of image() as the location of one 
   *   corner, and the fourth and fifth parameters as the 
   *   opposite corner. imageMode(CENTER) interprets the 
   *   second and third parameters of image() as the 
   *   image's center point. If two additional parameters 
   *   are specified, they are used to set the image's 
   *   width and height.
   *
   *   @param m The mode: either CORNER, CORNERS, or 
   *   CENTER.
   */
  imageMode(m: string): void;

  // src/image/pixels.js

  // TODO: Property "pixels[]", defined in src/image/pixels.js, line 15, is not a valid JS symbol name

  /**
   *   Copies a region of pixels from one image to 
   *   another, using a specified blend mode to do the 
   *   operation.
   *
   *   @param srcImage source image
   *   @param sx X coordinate of the source's upper left 
   *   corner
   *   @param sy Y coordinate of the source's upper left 
   *   corner
   *   @param sw source image width
   *   @param sh source image height
   *   @param dx X coordinate of the destination's upper 
   *   left corner
   *   @param dy Y coordinate of the destination's upper 
   *   left corner
   *   @param dw destination image width
   *   @param dh destination image height
   *   @param blendMode the blend mode Available blend 
   *   modes are: normal | multiply | screen | overlay | 
   *   darken | lighten | color-dodge | color-burn | 
   *   hard-light | soft-light | difference | exclusion | 
   *   hue | saturation | color | luminosity 
   *   http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
   */
  blend(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: number): void;

  /**
   *   Copies a region of the canvas to another region of 
   *   the canvas and copies a region of pixels from an 
   *   image used as the srcImg parameter into the canvas 
   *   srcImage is specified this is used as the source. 
   *   If the source and destination regions aren't the 
   *   same size, it will automatically resize source 
   *   pixels to fit the specified target region.
   *
   *   @param srcImage source image
   *   @param sx X coordinate of the source's upper left 
   *   corner
   *   @param sy Y coordinate of the source's upper left 
   *   corner
   *   @param sw source image width
   *   @param sh source image height
   *   @param dx X coordinate of the destination's upper 
   *   left corner
   *   @param dy Y coordinate of the destination's upper 
   *   left corner
   *   @param dw destination image width
   *   @param dh destination image height
   */
  copy(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

  /**
   *   Applies a filter to the canvas
   *
   *   @param operation one of threshold, gray, invert, 
   *   posterize and opaque. see filters.js for docs on 
   *   each available filter
   */
  filter(operation: string, value: number|undefined): void;

  /**
   *   Returns an array of [R,G,B,A] values for any pixel 
   *   or grabs a section of an image. If no parameters 
   *   are specified, the entire image is returned. Use 
   *   the x and y parameters to get the value of one 
   *   pixel. Get a section of the display window by 
   *   specifying additional w and h parameters. When 
   *   getting an image, the x and y parameters define 
   *   the coordinates for the upper-left corner of the 
   *   image, regardless of the current imageMode(). If 
   *   the pixel requested is outside of the image 
   *   window, [0,0,0,255] is returned. To get the 
   *   numbers scaled according to the current color 
   *   ranges and taking into account colorMode, use 
   *   getColor instead of get. Getting the color of a 
   *   single pixel with get(x, y) is easy, but not as 
   *   fast as grabbing the data directly from pixels[]. 
   *   The equivalent statement to get(x, y) using 
   *   pixels[] is [ pixels[y*width+x], 
   *   pixels[y*width+x+1], pixels[y*width+x+2], 
   *   pixels[y*width+3] ]. See the reference for 
   *   pixels[] for more information.
   *
   *   @param [x] x-coordinate of the pixel
   *   @param [y] y-coordinate of the pixel
   *   @param [w] width
   *   @param [h] height
   *   @return values of pixel at x,y in array format [R, 
   *   G, B, A] or p5.Image
   */
  get(x?: number, y?: number, w?: number, h?: number): any[]|p5.Image;

  /**
   *   Loads the pixel data for the display window into 
   *   the pixels[] array. This function must always be 
   *   called before reading from or writing to pixels[].
   *
   */
  loadPixels(): void;

  /**
   *   Changes the color of any pixel, or writes an image 
   *   directly to the display window. The x and y 
   *   parameters specify the pixel to change and the c 
   *   parameter specifies the color value. This can be a 
   *   p5.COlor object, or [R, G, B, A] pixel array. It 
   *   can also be a single grayscale value. When setting 
   *   an image, the x and y parameters define the 
   *   coordinates for the upper-left corner of the 
   *   image, regardless of the current imageMode().  
   * 
   *   Setting the color of a single pixel with set(x, y) 
   *   is easy, but not as fast as putting the data 
   *   directly into pixels[]. The equivalent statement 
   *   to set(x, y, [100, 50, 10, 255]) using pixels[] 
   *   is: 
   * 
   *   pixels[4*(y*width+x)] = 100; 
   *   pixels[4*(y*width+x)+1] = 50; 
   *   pixels[4*(y*width+x)+2] = 10; 
   *   pixels[4*(y*width+x)+3] = 255; 
   * 
   *   See the reference for pixels[] for more 
   *   information.
   *
   *   @param x x-coordinate of the pixel
   *   @param y y-coordinate of the pixel
   *   @param c insert a grayscale value | a pixel array 
   *   | a p5.Color object | a p5.Image to copy
   */
  set(x: number, y: number, c: number|any[]|object): void;

  // TODO: Fix updatePixels() errors in src/image/pixels.js, line 391:
  //
  //   param "w" is defined multiple times
  //
  // updatePixels(x?: number, y?: number, w?: number, w?: number): void;

  // src/input/files.js

  /**
   *   Loads a JSON file from a file or a URL, and 
   *   returns an Object or Array. This method is 
   *   asynchronous, meaning it may not finish before the 
   *   next line in your sketch is executed, either use 
   *   preload() to guarantee the file loads before 
   *   setup() and draw() are called, or supply a 
   *   callback function that is executed when 
   *   loadStrings() completes.
   *
   *   @param path name of the file or url to load
   *   @param [callback] function to be executed after 
   *   loadJSON() completes, Array is passed in as first 
   *   argument
   *   @return JSON data
   */
  loadJSON(path: string, callback?: Function): object|any[];

  /**
   *   Reads the contents of a file and creates a String 
   *   array of its individual lines. If the name of the 
   *   file is used as the parameter, as in the above 
   *   example, the file must be located in the sketch 
   *   directory/folder. Alternatively, the file maybe be 
   *   loaded from anywhere on the local computer using 
   *   an absolute path (something that starts with / on 
   *   Unix and Linux, or a drive letter on Windows), or 
   *   the filename parameter can be a URL for a file 
   *   found on a network. This method is asynchronous, 
   *   meaning it may not finish before the next line in 
   *   your sketch is executed, either use preload() to 
   *   guarantee the file loads before setup() and draw() 
   *   are called, or supply a callback function that is 
   *   executed when loadStrings() completes.
   *
   *   @param filename name of the file or url to load
   *   @param [callback] function to be executed after 
   *   loadStrings() completes, Array is passed in as 
   *   first argument
   *   @return Array of Strings
   */
  loadStrings(filename: string, callback?: Function): any[];

  /**
   *   Reads the contents of a file or URL and creates a 
   *   p5.Table object with its values. If a file is 
   *   specified, it must be located in the sketch's 
   *   "data" folder. The filename parameter can also be 
   *   a URL to a file found online. By default, the file 
   *   is assumed to be comma-separated (in CSV format). 
   *   Table only looks for a header row if the 'header' 
   *   option is included. Possible options include: 
   * 
   *   - csv - parse the table as comma-separated values 
   *   - tsv - parse the table as tab-separated values 
   *   - newlines - this CSV file contains newlines 
   *   inside individual cells 
   *   - header - this table has a header (title) row   
   * 
   *  
   *   All files loaded and saved use UTF-8 encoding.
   *
   *   @param filename name of the file or URL to load
   *   @param [options] "header" "csv" "tsv"
   *   @param [callback] function to be executed after 
   *   loadTable() completes, Table object is passed in 
   *   as first argument
   *   @return Table object containing data
   */
  loadTable(filename: string, options?: string|any, callback?: Function): object;

  /**
   *   Reads the contents of a file and creates an XML 
   *   object with its values. If the name of the file is 
   *   used as the parameter, as in the above example, 
   *   the file must be located in the sketch 
   *   directory/folder. Alternatively, the file maybe be 
   *   loaded from anywhere on the local computer using 
   *   an absolute path (something that starts with / on 
   *   Unix and Linux, or a drive letter on Windows), or 
   *   the filename parameter can be a URL for a file 
   *   found on a network. This method is asynchronous, 
   *   meaning it may not finish before the next line in 
   *   your sketch is executed, either use preload() to 
   *   guarantee the file loads before setup() and draw() 
   *   are called, or supply a callback function that is 
   *   executed when loadXML() completes.
   *
   *   @param filename name of the file or URL to load
   *   @param [callback] function to be executed after 
   *   loadXML() completes, XML object is passed in as 
   *   first argument
   *   @return XML object containing data
   */
  loadXML(filename: string, callback?: Function): object;

  // src/input/keyboard.js

  /**
   *   The boolean system variable keyIsPressed is true 
   *   if any key is pressed and false if no keys are 
   *   pressed.
   *
   */
  keyIsPressed: any;

  /**
   *   The system variable key always contains the value 
   *   of the most recent key on the keyboard that was 
   *   typed. To get the proper capitalization, it is 
   *   best to use it within keyTyped(). For non-ASCII 
   *   keys, use the keyCode variable.
   *
   */
  key: any;

  /**
   *   The variable keyCode is used to detect special 
   *   keys such as BACKSPACE, DELETE, ENTER, RETURN, 
   *   TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, 
   *   UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.
   *
   */
  keyCode: any;

  /**
   *   The keyPressed() function is called once every 
   *   time a key is pressed. The keyCode for the key 
   *   that was pressed is stored in the keyCode 
   *   variable.  For non-ASCII keys, use the keyCode 
   *   variable. You can check if the keyCode equals 
   *   BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, 
   *   SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, 
   *   LEFT_ARROW, RIGHT_ARROW. 
   * 
   *  
   *   For ASCII keys that was pressed is stored in the 
   *   key variable. However, it does not distinguish 
   *   between uppercase and lowercase. For this reason, 
   *   it is recommended to use keyTyped() to read the 
   *   key variable, in which the case of the variable 
   *   will be distinguished. 
   * 
   *  
   *   Because of how operating systems handle key 
   *   repeats, holding down a key may cause multiple 
   *   calls to keyTyped() (and keyReleased() as well). 
   *   The rate of repeat is set by the operating system 
   *   and how each computer is configured.
   *
   */
  keyPressed(): void;

  /**
   *   The keyReleased() function is called once every 
   *   time a key is released. See key and keyCode for 
   *   more information.
   *
   */
  keyReleased(): void;

  /**
   *   The keyTyped() function is called once every time 
   *   a key is pressed, but action keys such as Ctrl, 
   *   Shift, and Alt are ignored. The most recent key 
   *   pressed will be stored in the key variable.  
   *   Because of how operating systems handle key 
   *   repeats, holding down a key will cause multiple 
   *   calls to keyTyped(), the rate is set by the 
   *   operating system and how each computer is 
   *   configured.
   *
   */
  keyTyped(): void;

  // src/input/mouse.js

  /**
   *   The system variable mouseX always contains the 
   *   current horizontal position of the mouse, relative 
   *   to (0, 0) of the canvas.
   *
   */
  mouseX: any;

  /**
   *   The system variable mouseY always contains the 
   *   current vertical position of the mouse, relative 
   *   to (0, 0) of the canvas.
   *
   */
  mouseY: any;

  /**
   *   The system variable pmouseX always contains the 
   *   horizontal position of the mouse in the frame 
   *   previous to the current frame, relative to (0, 0) 
   *   of the canvas.
   *
   */
  pmouseX: any;

  /**
   *   The system variable pmouseY always contains the 
   *   vertical position of the mouse in the frame 
   *   previous to the current frame, relative to (0, 0) 
   *   of the canvas.
   *
   */
  pmouseY: any;

  /**
   *   The system variable pwinMouseY always contains the 
   *   current horizontal position of the mouse, relative 
   *   to (0, 0) of the window.
   *
   */
  winMouseX: any;

  /**
   *   The system variable winMouseY always contains the 
   *   current vertical position of the mouse, relative 
   *   to (0, 0) of the window.
   *
   */
  winMouseY: any;

  /**
   *   The system variable pwinMouseX always contains the 
   *   horizontal position of the mouse in the frame 
   *   previous to the current frame, relative to (0, 0) 
   *   of the window.
   *
   */
  pwinMouseX: any;

  /**
   *   The system variable pwinMouseY always contains the 
   *   vertical position of the mouse in the frame 
   *   previous to the current frame, relative to (0, 0) 
   *   of the window.
   *
   */
  pwinMouseY: any;

  /**
   *   Processing automatically tracks if the mouse 
   *   button is pressed and which button is pressed. The 
   *   value of the system variable mouseButton is either 
   *   LEFT, RIGHT, or CENTER depending on which button 
   *   is pressed. Browsers are weird, USE AT YOUR OWN 
   *   RISK FOR NOW!
   *
   */
  mouseButton: any;

  /**
   *   The boolean system variable mouseIsPressed is true 
   *   if the mouse is pressed and false if not.
   *
   */
  mouseIsPressed: any;

  /**
   *   The mouseMoved() function is called every time the 
   *   mouse moves and a mouse button is not pressed. 
   *   Browsers may have different default behaviors 
   *   attached to various mouse events. To prevent any 
   *   default behavior for this event, add `return 
   *   false` to the end of the method.
   *
   */
  mouseMoved(): void;

  /**
   *   The mouseDragged() function is called once every 
   *   time the mouse moves and a mouse button is 
   *   pressed. If no mouseDragged() function is defined, 
   *   the touchMoved() function will be called instead 
   *   if it is defined. Browsers may have different 
   *   default behaviors attached to various mouse 
   *   events. To prevent any default behavior for this 
   *   event, add `return false` to the end of the 
   *   method.
   *
   */
  mouseDragged(): void;

  /**
   *   The mousePressed() function is called once after 
   *   every time a mouse button is pressed. The 
   *   mouseButton variable (see the related reference 
   *   entry) can be used to determine which button has 
   *   been pressed. If no mousePressed() function is 
   *   defined, the touchStarted() function will be 
   *   called instead if it is defined. Browsers may have 
   *   different default behaviors attached to various 
   *   mouse events. To prevent any default behavior for 
   *   this event, add `return false` to the end of the 
   *   method.
   *
   */
  mousePressed(): void;

  /**
   *   The mouseReleased() function is called every time 
   *   a mouse button is released. If no mouseReleased() 
   *   function is defined, the touchEnded() function 
   *   will be called instead if it is defined. Browsers 
   *   may have different default behaviors attached to 
   *   various mouse events. To prevent any default 
   *   behavior for this event, add `return false` to the 
   *   end of the method.
   *
   */
  mouseReleased(): void;

  /**
   *   The mouseClicked() function is called once after a 
   *   mouse button has been pressed and then released. 
   *   Browsers may have different default behaviors 
   *   attached to various mouse events. To prevent any 
   *   default behavior for this event, add `return 
   *   false` to the end of the method.
   *
   */
  mouseClicked(): void;

  /**
   *   The event.wheelDelta or event.detail property 
   *   returns negative values if the mouse wheel if 
   *   rotated up or away from the user and positive in 
   *   the other direction. On OS X with "natural" 
   *   scrolling enabled, the values are opposite. 
   *   Browsers may have different default behaviors 
   *   attached to various mouse events. To prevent any 
   *   default behavior for this event, add `return 
   *   false` to the end of the method. See  mouse wheel 
   *   event in JS.
   *
   */
  mouseWheel(): void;

  // src/input/time_date.js

  /**
   *   p5.js communicates with the clock on your 
   *   computer. The day() function returns the current 
   *   day as a value from 1 - 31.
   *
   *   @return the current day
   */
  day(): number;

  /**
   *   p5.js communicates with the clock on your 
   *   computer. The hour() function returns the current 
   *   hour as a value from 0 - 23.
   *
   *   @return the current hour
   */
  hour(): number;

  /**
   *   p5.js communicates with the clock on your 
   *   computer. The minute() function returns the 
   *   current minute as a value from 0 - 59.
   *
   *   @return the current minute
   */
  minute(): number;

  /**
   *   Returns the number of milliseconds (thousandths of 
   *   a second) since starting the program. This 
   *   information is often used for timing events and 
   *   animation sequences.
   *
   *   @return the number of milliseconds since starting 
   *   the program
   */
  millis(): number;

  /**
   *   p5.js communicates with the clock on your 
   *   computer. The month() function returns the current 
   *   month as a value from 1 - 12.
   *
   *   @return the current month
   */
  month(): number;

  /**
   *   p5.js communicates with the clock on your 
   *   computer. The second() function returns the 
   *   current second as a value from 0 - 59.
   *
   *   @return the current second
   */
  second(): number;

  /**
   *   p5.js communicates with the clock on your 
   *   computer. The year() function returns the current 
   *   year as an integer (2014, 2015, 2016, etc).
   *
   *   @return the current year
   */
  year(): number;

  // src/input/touch.js

  /**
   *   The system variable touchX always contains the 
   *   horizontal position of one finger, relative to (0, 
   *   0) of the canvas. This is best used for single 
   *   touch interactions. For multi-touch interactions, 
   *   use the touches[] array.
   *
   */
  touchX: any;

  /**
   *   The system variable touchY always contains the 
   *   horizontal position of one finger, relative to (0, 
   *   0) of the canvas in the frame previous to the 
   *   current frame. This is best used for single touch 
   *   interactions. For multi-touch interactions, use 
   *   the touches[] array.
   *
   */
  touchY: any;

  /**
   *   The system variable touchY always contains the 
   *   horizontal position of one finger, relative to (0, 
   *   0) of the canvas in the frame previous to the 
   *   current frame. This is best used for single touch 
   *   interactions. For multi-touch interactions, use 
   *   the touches[] array.
   *
   */
  ptouchX: any;

  /**
   *   The system variable pmouseY always contains the 
   *   vertical position of the mouse in the frame 
   *   previous to the current frame, relative to (0, 0) 
   *   of the canvas.
   *
   */
  ptouchY: any;

  // TODO: Property "touches[]", defined in src/input/touch.js, line 54, is not a valid JS symbol name

  /**
   *   The touchStarted() function is called once after 
   *   every time a touch is registered. If no 
   *   touchStarted() function is defined, the 
   *   mousePressed() function will be called instead if 
   *   it is defined. Browsers may have different default 
   *   behaviors attached to various touch events. To 
   *   prevent any default behavior for this event, add 
   *   `return false` to the end of the method.
   *
   */
  touchStarted(): void;

  /**
   *   The touchMoved() function is called every time a 
   *   touch move is registered. If no touchStarted() 
   *   function is defined, the mouseDragged() function 
   *   will be called instead if it is defined. Browsers 
   *   may have different default behaviors attached to 
   *   various touch events. To prevent any default 
   *   behavior for this event, add `return false` to the 
   *   end of the method.
   *
   */
  touchMoved(): void;

  /**
   *   The touchEnded() function is called every time a 
   *   touch ends. If no touchStarted() function is 
   *   defined, the mouseReleased() function will be 
   *   called instead if it is defined. Browsers may have 
   *   different default behaviors attached to various 
   *   touch events. To prevent any default behavior for 
   *   this event, add `return false` to the end of the 
   *   method.
   *
   */
  touchEnded(): void;

  // src/math/calculation.js

  /**
   *   Calculates the absolute value (magnitude) of a 
   *   number. Maps to Math.abs(). The absolute value of 
   *   a number is always positive.
   *
   *   @param n number to compute
   *   @return absolute value of given number
   */
  abs(n: number): number;

  /**
   *   Calculates the closest int value that is greater 
   *   than or equal to the value of the parameter. Maps 
   *   to Math.ceil(). For example, ceil(9.03) returns 
   *   the value 10.
   *
   *   @param n number to round up
   *   @return rounded up number
   */
  ceil(n: number): number;

  /**
   *   Constrains a value to not exceed a maximum and 
   *   minimum value.
   *
   *   @param n number to constrain
   *   @param low minimum limit
   *   @param high maximum limit
   *   @return constrained number
   */
  constrain(n: number, low: number, high: number): number;

  /**
   *   Calculates the distance between two points.
   *
   *   @param x1 x-coordinate of the first point
   *   @param y1 y-coordinate of the first point
   *   @param x2 x-coordinate of the second point
   *   @param y2 y-coordinate of the second point
   *   @return distance between the two points
   */
  dist(x1: number, y1: number, x2: number, y2: number): number;

  /**
   *   Returns Euler's number e (2.71828...) raised to 
   *   the power of the n parameter. Maps to Math.exp().
   *
   *   @param n exponent to raise
   *   @return e^n
   */
  exp(n: number): number;

  /**
   *   Calculates the closest int value that is less than 
   *   or equal to the value of the parameter. Maps to 
   *   Math.floor().
   *
   *   @param n number to round down
   *   @return rounded down number
   */
  floor(n: number): number;

  /**
   *   Calculates a number between two numbers at a 
   *   specific increment. The amt parameter is the 
   *   amount to interpolate between the two values where 
   *   0.0 equal to the first point, 0.1 is very near the 
   *   first point, 0.5 is half-way in between, etc. The 
   *   lerp function is convenient for creating motion 
   *   along a straight path and for drawing dotted 
   *   lines.
   *
   *   @param start first value
   *   @param stop second value
   *   @param amt number between 0.0 and 1.0
   *   @return lerped value
   */
  lerp(start: number, stop: number, amt: number): number;

  /**
   *   Calculates the natural logarithm (the base-e 
   *   logarithm) of a number. This function expects the 
   *   n parameter to be a value greater than 0.0. Maps 
   *   to Math.log().
   *
   *   @param n number greater than 0
   *   @return natural logarithm of n
   */
  log(n: number): number;

  /**
   *   Calculates the magnitude (or length) of a vector. 
   *   A vector is a direction in space commonly used in 
   *   computer graphics and linear algebra. Because it 
   *   has no "start" position, the magnitude of a vector 
   *   can be thought of as the distance from the 
   *   coordinate 0,0 to its x,y value. Therefore, mag() 
   *   is a shortcut for writing dist(0, 0, x, y).
   *
   *   @param a first value
   *   @param b second value
   *   @return magnitude of vector from (0,0) to (a,b)
   */
  mag(a: number, b: number): number;

  /**
   *   Re-maps a number from one range to another. In the 
   *   first example above, the number 25 is converted 
   *   from a value in the range of 0 to 100 into a value 
   *   that ranges from the left edge of the window (0) 
   *   to the right edge (width).
   *
   *   @param value the incoming value to be converted
   *   @param start1 lower bound of the value's current 
   *   range
   *   @param stop1 upper bound of the value's current 
   *   range
   *   @param start2 lower bound of the value's target 
   *   range
   *   @param stop upper bound of the value's target 
   *   range
   *   @return remapped number
   */
  map(value: number, start1: number, stop1: number, start2: number, stop: number): number;

  /**
   *   Determines the largest value in a sequence of 
   *   numbers, and then returns that value. max() 
   *   accepts any number of Number parameters, or an 
   *   Array of any length.
   *
   *   @param n0 Numbers to compare
   *   @return maximum Number
   */
  max(n0: number|any[]): number;

  /**
   *   Determines the smallest value in a sequence of 
   *   numbers, and then returns that value. min() 
   *   accepts any number of Number parameters, or an 
   *   Array of any length.
   *
   *   @param n0 Numbers to compare
   *   @return minimum Number
   */
  min(n0: number|any[]): number;

  /**
   *   Normalizes a number from another range into a 
   *   value between 0 and 1. Identical to map(value, 
   *   low, high, 0, 1). Numbers outside of the range are 
   *   not clamped to 0 and 1, because out-of-range 
   *   values are often intentional and useful. (See the 
   *   second example above.)
   *
   *   @param value incoming value to be normalized
   *   @param start lower bound of the value's current 
   *   range
   *   @param stop upper bound of the value's current 
   *   range
   *   @return normalized number
   */
  norm(value: number, start: number, stop: number): number;

  /**
   *   Facilitates exponential expressions. The pow() 
   *   function is an efficient way of multiplying 
   *   numbers by themselves (or their reciprocals) in 
   *   large quantities. For example, pow(3, 5) is 
   *   equivalent to the expression 3*3*3*3*3 and pow(3, 
   *   -5) is equivalent to 1 / 3*3*3*3*3. Maps to 
   *   Math.pow().
   *
   *   @param n base of the exponential expression
   *   @param e power by which to raise the base
   *   @return n^e
   */
  pow(n: number, e: number): number;

  /**
   *   Calculates the integer closest to the n parameter. 
   *   For example, round(133.8) returns the value 134. 
   *   Maps to Math.round().
   *
   *   @param n number to round
   *   @return rounded number
   */
  constrain(n: number): number;

  /**
   *   Squares a number (multiplies a number by itself). 
   *   The result is always a positive number, as 
   *   multiplying two negative numbers always yields a 
   *   positive result. For example, -1 * -1 = 1.
   *
   *   @param n number to square
   *   @return squared number
   */
  sq(n: number): number;

  /**
   *   Calculates the square root of a number. The square 
   *   root of a number is always positive, even though 
   *   there may be a valid negative root. The square 
   *   root s of number a is such that s*s = a. It is the 
   *   opposite of squaring. Maps to Math.sqrt().
   *
   *   @param n non-negative number to square root
   *   @return square root of number
   */
  sqrt(n: number): number;

  // src/math/math.js

  /**
   *   Creates a new p5.Vector (the datatype for storing 
   *   vectors). This provides a two or three dimensional 
   *   vector, specifically a Euclidean (also known as 
   *   geometric) vector. A vector is an entity that has 
   *   both magnitude and direction.
   *
   *   @param [x] x component of the vector
   *   @param [y] y component of the vector
   *   @param [z] z component of the vector
   */
  createVector(x?: number, y?: number, z?: number): void;

  // src/math/noise.js

  /**
   *   Returns the Perlin noise value at specified 
   *   coordinates. Perlin noise is a random sequence 
   *   generator producing a more natural ordered, 
   *   harmonic succession of numbers compared to the 
   *   standard random() function. It was invented by Ken 
   *   Perlin in the 1980s and been used since in 
   *   graphical applications to produce procedural 
   *   textures, natural motion, shapes, terrains etc. 
   *   The main difference to the random() function is 
   *   that Perlin noise is defined in an infinite 
   *   n-dimensional space where each pair of coordinates 
   *   corresponds to a fixed semi-random value (fixed 
   *   only for the lifespan of the program). The 
   *   resulting value will always be between 0.0 and 
   *   1.0. p5.js can compute 1D, 2D and 3D noise, 
   *   depending on the number of coordinates given. The 
   *   noise value can be animated by moving through the 
   *   noise space as demonstrated in the example above. 
   *   The 2nd and 3rd dimension can also be interpreted 
   *   as time.
   * 
   *   The actual noise is structured similar to an audio 
   *   signal, in respect to the function's use of 
   *   frequencies. Similar to the concept of harmonics 
   *   in physics, perlin noise is computed over several 
   *   octaves which are added together for the final 
   *   result. 
   * 
   *   Another way to adjust the character of the 
   *   resulting sequence is the scale of the input 
   *   coordinates. As the function works within an 
   *   infinite space the value of the coordinates 
   *   doesn't matter as such, only the distance between 
   *   successive coordinates does (eg. when using 
   *   noise() within a loop). As a general rule the 
   *   smaller the difference between coordinates, the 
   *   smoother the resulting noise sequence will be. 
   *   Steps of 0.005-0.03 work best for most 
   *   applications, but this will differ depending on 
   *   use.
   *
   *   @param x x-coordinate in noise space
   *   @param y y-coordinate in noise space
   *   @param z z-coordinate in noise space
   *   @return Perlin noise value (between 0 and 1) at 
   *   specified coordinates
   */
  noise(x: number, y: number, z: number): number;

  /**
   *   Adjusts the character and level of detail produced 
   *   by the Perlin noise function. Similar to harmonics 
   *   in physics, noise is computed over several 
   *   octaves. Lower octaves contribute more to the 
   *   output signal and as such define the overall 
   *   intensity of the noise, whereas higher octaves 
   *   create finer grained details in the noise 
   *   sequence. By default, noise is computed over 4 
   *   octaves with each octave contributing exactly half 
   *   than its predecessor, starting at 50% strength for 
   *   the 1st octave. This falloff amount can be changed 
   *   by adding an additional function parameter. Eg. a 
   *   falloff factor of 0.75 means each octave will now 
   *   have 75% impact (25% less) of the previous lower 
   *   octave. Any value between 0.0 and 1.0 is valid, 
   *   however note that values greater than 0.5 might 
   *   result in greater than 1.0 values returned by 
   *   noise().By changing these parameters, the signal 
   *   created by the noise() function can be adapted to 
   *   fit very specific needs and characteristics.
   *
   *   @param lod number of octaves to be used by the 
   *   noise
   *   @param falloff falloff factor for each octave
   */
  noiseDetail(lod: number, falloff: number): void;

  /**
   *   Sets the seed value for noise(). By default, 
   *   noise() produces different results each time the 
   *   program is run. Set the value parameter to a 
   *   constant to return the same pseudo-random numbers 
   *   each time the software is run.
   *
   *   @param seed the seed value
   */
  noiseSeed(seed: number): void;

  // src/math/random.js

  /**
   *   Sets the seed value for random(). By default, 
   *   random() produces different results each time the 
   *   program is run. Set the seed parameter to a 
   *   constant to return the same pseudo-random numbers 
   *   each time the software is run.
   *
   *   @param seed the seed value
   */
  randomSeed(seed: number): void;

  /**
   *   Return a random number. Takes either 0, 1 or 2 
   *   arguments. If no argument is given, returns a 
   *   random number between 0 and 1. If one argument is 
   *   given, returns a random number between 0 and the 
   *   number. If two arguments are given, returns a 
   *   random number between them, inclusive.
   *
   *   @param min the lower bound
   *   @param max the upper bound
   *   @return the random number
   */
  random(min: number, max: number): number;

  /**
   *   Returns a random number fitting a Gaussian, or 
   *   normal, distribution. There is theoretically no 
   *   minimum or maximum value that randomGaussian() 
   *   might return. Rather, there is just a very low 
   *   probability that values far from the mean will be 
   *   returned; and a higher probability that numbers 
   *   near the mean will be returned. Takes either 0, 1 
   *   or 2 arguments. If no args, returns a mean of 0 
   *   and standard deviation of 1 If one arg, that arg 
   *   is the mean (standard deviation is 1) If two args, 
   *   first is mean, second is standard deviation
   *
   *   @param mean the mean
   *   @param sd the standard deviation
   *   @return the random number
   */
  randomGaussian(mean: number, sd: number): number;

  // src/math/trigonometry.js

  /**
   *   The inverse of cos(), returns the arc cosine of a 
   *   value. This function expects the values in the 
   *   range of -1 to 1 and values are returned in the 
   *   range 0 to PI (3.1415927).
   *
   *   @param value the value whose arc cosine is to be 
   *   returned
   *   @return the arc cosine of the given value
   */
  acos(value: number): number;

  /**
   *   The inverse of sin(), returns the arc sine of a 
   *   value. This function expects the values in the 
   *   range of -1 to 1 and values are returned in the 
   *   range -PI/2 to PI/2.
   *
   *   @param value the value whose arc sine is to be 
   *   returned
   *   @return the arc sine of the given value
   */
  asin(value: number): number;

  /**
   *   The inverse of tan(), returns the arc tangent of a 
   *   value. This function expects the values in the 
   *   range of -Infinity to Infinity (exclusive) and 
   *   values are returned in the range -PI/2 to PI/2.
   *
   *   @param value the value whose arc tangent is to be 
   *   returned
   *   @return the arc tangent of the given value
   */
  atan(value: number): number;

  /**
   *   Calculates the angle (in radians) from a specified 
   *   point to the coordinate origin as measured from 
   *   the positive x-axis. Values are returned as a 
   *   float in the range from PI to -PI. The atan2() 
   *   function is most often used for orienting geometry 
   *   to the position of the cursor. Note: The 
   *   y-coordinate of the point is the first parameter, 
   *   and the x-coordinate is the second parameter, due 
   *   the the structure of calculating the tangent.
   *
   *   @param y y-coordinate of the point
   *   @param x x-coordinate of the point
   *   @return the arc tangent of the given point
   */
  atan2(y: number, x: number): number;

  /**
   *   Calculates the cosine of an angle. This function 
   *   takes into account the current angleMode. Values 
   *   are returned in the range -1 to 1.
   *
   *   @param angle the angle
   *   @return the cosine of the angle
   */
  cos(angle: number): number;

  /**
   *   Calculates the sine of an angle. This function 
   *   takes into account the current angleMode. Values 
   *   are returned in the range -1 to 1.
   *
   *   @param angle the angle
   *   @return the sine of the angle
   */
  sin(angle: number): number;

  /**
   *   Calculates the tangent of an angle. This function 
   *   takes into account the current angleMode. Values 
   *   are returned in the range -1 to 1.
   *
   *   @param angle the angle
   *   @return the tangent of the angle
   */
  tan(angle: number): number;

  /**
   *   Converts a radian measurement to its corresponding 
   *   value in degrees. Radians and degrees are two ways 
   *   of measuring the same thing. There are 360 degrees 
   *   in a circle and 2*PI radians in a circle. For 
   *   example, 90° = PI/2 = 1.5707964.
   *
   *   @param radians the radians value to convert to 
   *   degrees
   *   @return the converted angle
   */
  degrees(radians: number): number;

  /**
   *   Converts a degree measurement to its corresponding 
   *   value in radians. Radians and degrees are two ways 
   *   of measuring the same thing. There are 360 degrees 
   *   in a circle and 2*PI radians in a circle. For 
   *   example, 90° = PI/2 = 1.5707964.
   *
   *   @param degrees the degree value to convert to 
   *   radians
   *   @return the converted angle
   */
  radians(degrees: number): number;

  // TODO: Fix angleMode() errors in src/math/trigonometry.js, line 167:
  //
  //   param "mode" has invalid type: Number/Constant
  //
  // angleMode(mode: any): void;

  // src/output/files.js

  // TODO: Fix save() errors in src/output/files.js, line 109:
  //
  //   param "filename" has invalid type: [String]
  //   param "options" has invalid type: [Boolean/String]
  //
  // save(objectOrFilename: any|any, filename: any, options: any): void;

  // src/output/text_area.js

  /**
   *   The print() function writes to the console area of 
   *   your browser, it maps to console.log(). This 
   *   function is often helpful for looking at the data 
   *   a program is producing. This function creates a 
   *   new line of text for each call to the function. 
   *   More than one parameter can be passed into the 
   *   function by separating them with commas. 
   *   Alternatively, individual elements can be 
   *   separated with quotes ("") and joined with the 
   *   addition operator (+).
   *
   *   @param contents any combination of Number, String, 
   *   Object, Boolean, Array to print
   */
  print(contents: any): void;

  // src/rendering/rendering.js

  /**
   *   Creates a canvas element in the document, and sets 
   *   the dimensions of it in pixels. This method should 
   *   be called only once at the start of setup. Calling 
   *   createCanvas more than once in a sketch will 
   *   result in very unpredicable behavior. If you want 
   *   more more than one drawing canvas you could use 
   *   createGraphics (hidden by default but it can be 
   *   shown). The system variables width and height are 
   *   set by the parameters passed to this function. If 
   *   createCanvas() is not used, the window will be 
   *   given a default size of 100x100 pixels.
   *
   *   @param w width of the canvas
   *   @param h height of the canvas
   *   @return canvas generated
   */
  createCanvas(w: number, h: number): object;

  /**
   *   Removes the default canvas for a p5 sketch that 
   *   doesn't require a canvas
   *
   */
  noCanvas(): void;

  /**
   *   Creates and returns a new p5.Graphics object. Use 
   *   this class if you need to draw into an off-screen 
   *   graphics buffer. The two parameters define the 
   *   width and height in pixels.
   *
   *   @param w width of the offscreen graphics buffer
   *   @param h height of the offscreen graphics buffer
   *   @return offscreen graphics buffer
   */
  createGraphics(w: number, h: number): object;

  // TODO: Fix blendMode() errors in src/rendering/rendering.js, line 173:
  //
  //   param "mode" has invalid type: String/Constant
  //
  // blendMode(mode: any): void;

  // src/shape/2d_primitives.js

  /**
   *   Draw an arc. If a,b,c,d,start and stop are the 
   *   only params provided, draws an open pie. If mode 
   *   is provided draws the arc either open, chord or 
   *   pie, dependent on the variable provided.
   *
   *   @param a x-coordinate of the arc's ellipse
   *   @param b y-coordinate of the arc's ellipse
   *   @param c width of the arc's ellipse by default
   *   @param d height of the arc's ellipse by default
   *   @param start angle to start the arc, specified in 
   *   radians
   *   @param stop angle to stop the arc, specified in 
   *   radians
   *   @param [mode] optional parameter to determine the 
   *   way of drawing the arc
   *   @return the p5 object
   */
  arc(a: number, b: number, c: number, d: number, start: number, stop: number, mode?: string): object;

  /**
   *   Draws an ellipse (oval) to the screen. An ellipse 
   *   with equal width and height is a circle. By 
   *   default, the first two parameters set the 
   *   location, and the third and fourth parameters set 
   *   the shape's width and height. The origin may be 
   *   changed with the ellipseMode() function.
   *
   *   @param a x-coordinate of the ellipse.
   *   @param b y-coordinate of the ellipse.
   *   @param c width of the ellipse.
   *   @param d height of the ellipse.
   *   @return the p5 object
   */
  ellipse(a: number, b: number, c: number, d: number): p5;

  /**
   *   Draws a line (a direct path between two points) to 
   *   the screen. The version of line() with four 
   *   parameters draws the line in 2D. To color a line, 
   *   use the stroke() function. A line cannot be 
   *   filled, therefore the fill() function will not 
   *   affect the color of a line. 2D lines are drawn 
   *   with a width of one pixel by default, but this can 
   *   be changed with the strokeWeight() function.
   *
   *   @param x1 the x-coordinate of the first point
   *   @param y1 the y-coordinate of the first point
   *   @param x2 the x-coordinate of the second point
   *   @param y2 the y-coordinate of the second point
   *   @return the p5 object
   */
  line(x1: number, y1: number, x2: number, y2: number): p5;

  /**
   *   Draws a point, a coordinate in space at the 
   *   dimension of one pixel. The first parameter is the 
   *   horizontal value for the point, the second value 
   *   is the vertical value for the point.
   *
   *   @param x the x-coordinate
   *   @param y the y-coordinate
   *   @return the p5 object
   */
  point(x: number, y: number): p5;

  // TODO: Fix quad() errors in src/shape/2d_primitives.js, line 287:
  //
  //   param "x1" has invalid type: Type
  //   param "y1" has invalid type: Type
  //   param "x2" has invalid type: Type
  //   param "y2" has invalid type: Type
  //   param "x3" has invalid type: Type
  //   param "y3" has invalid type: Type
  //   param "x4" has invalid type: Type
  //   param "y4" has invalid type: Type
  //
  // quad(x1: any, y1: any, x2: any, y2: any, x3: any, y3: any, x4: any, y4: any): p5;

  /**
   *   Draws a rectangle to the screen. A rectangle is a 
   *   four-sided shape with every angle at ninety 
   *   degrees. By default, the first two parameters set 
   *   the location of the upper-left corner, the third 
   *   sets the width, and the fourth sets the height. 
   *   The way these parameters are interpreted, however, 
   *   may be changed with the rectMode() function.
   *
   *   @param a x-coordinate of the rectangle
   *   @param b y-coordinate of the rectangle
   *   @param c width of the rectangle
   *   @param d height of the rectangle
   *   @return the p5 object
   */
  rect(a: number, b: number, c: number, d: number): p5;

  /**
   *   A triangle is a plane created by connecting three 
   *   points. The first two arguments specify the first 
   *   point, the middle two arguments specify the second 
   *   point, and the last two arguments specify the 
   *   third point.
   *
   *   @param x1 x-coordinate of the first point
   *   @param y1 y-coordinate of the first point
   *   @param x2 x-coordinate of the second point
   *   @param y2 y-coordinate of the second point
   *   @param x3 x-coordinate of the third point
   *   @param y3 y-coordinate of the third point
   *   @return the p5 object
   */
  triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): p5;

  // src/shape/attributes.js

  // TODO: Fix ellipseMode() errors in src/shape/attributes.js, line 18:
  //
  //   param "mode" has invalid type: Number/Constant
  //
  // ellipseMode(mode: any): p5;

  /**
   *   Draws all geometry with jagged (aliased) edges. 
   *   Note that smooth() is active by default, so it is 
   *   necessary to call noSmooth() to disable smoothing 
   *   of geometry, images, and fonts.
   *
   *   @return the p5 object
   */
  noSmooth(): p5;

  // TODO: Fix rectMode() errors in src/shape/attributes.js, line 106:
  //
  //   param "mode" has invalid type: Number/Constant
  //
  // rectMode(mode: any): p5;

  /**
   *   Draws all geometry with smooth (anti-aliased) 
   *   edges. smooth() will also improve image quality of 
   *   resized images. Note that smooth() is active by 
   *   default; noSmooth() can be used to disable 
   *   smoothing of geometry, images, and fonts.
   *
   *   @return the p5 object
   */
  smooth(): p5;

  // TODO: Fix strokeCap() errors in src/shape/attributes.js, line 195:
  //
  //   param "cap" has invalid type: Number/Constant
  //
  // strokeCap(cap: any): p5;

  // TODO: Fix strokeJoin() errors in src/shape/attributes.js, line 226:
  //
  //   param "join" has invalid type: Number/Constant
  //
  // strokeJoin(join: any): p5;

  /**
   *   Sets the width of the stroke used for lines, 
   *   points, and the border around shapes. All widths 
   *   are set in units of pixels.
   *
   *   @param weight the weight (in pixels) of the stroke
   *   @return the p5 object
   */
  strokeWeight(weight: number): p5;

  // src/shape/curves.js

  /**
   *   Draws a Bezier curve on the screen. These curves 
   *   are defined by a series of anchor and control 
   *   points. The first two parameters specify the first 
   *   anchor point and the last two parameters specify 
   *   the other anchor point. The middle parameters 
   *   specify the control points which define the shape 
   *   of the curve. Bezier curves were developed by 
   *   French engineer Pierre Bezier.
   *
   *   @param x1 x-coordinate for the first anchor point
   *   @param y1 y-coordinate for the first anchor point
   *   @param x2 x-coordinate for the first control point
   *   @param y2 y-coordinate for the first control point
   *   @param x3 x-coordinate for the second control 
   *   point
   *   @param y3 y-coordinate for the second control 
   *   point
   *   @param x4 x-coordinate for the second anchor point
   *   @param y4 y-coordinate for the second anchor point
   *   @return the p5 object
   */
  bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): object;

  /**
   *   Sets the resolution at which Beziers display. The 
   *   default value is 20.
   *
   *   @param detail resolution of the curves
   *   @return the p5 object
   */
  bezierDetail(detail: number): object;

  /**
   *   Calculate a point on the Bezier Curve Evaluates 
   *   the Bezier at point t for points a, b, c, d. The 
   *   parameter t varies between 0 and 1, a and d are 
   *   points on the curve, and b and c are the control 
   *   points. This can be done once with the x 
   *   coordinates and a second time with the y 
   *   coordinates to get the location of a bezier curve 
   *   at t.
   *
   *   @param a coordinate of first point on the curve
   *   @param b coordinate of first control point
   *   @param c coordinate of second control point
   *   @param d coordinate of second point on the curve
   *   @param t value between 0 and 1
   *   @return the value of the Bezier at point t
   */
  bezierPoint(a: number, b: number, c: number, d: number, t: number): number;

  /**
   *   Calculates the tangent of a point on a Bezier 
   *   curve Evaluates the tangent at point t for points 
   *   a, b, c, d. The parameter t varies between 0 and 
   *   1, a and d are points on the curve, and b and c 
   *   are the control points
   *
   *   @param a coordinate of first point on the curve
   *   @param b coordinate of first control point
   *   @param c coordinate of second control point
   *   @param d coordinate of second point on the curve
   *   @param t value between 0 and 1
   *   @return the tangent at point t
   */
  bezierTangent(a: number, b: number, c: number, d: number, t: number): number;

  /**
   *   Draws a curved line on the screen. The first and 
   *   second parameters specify the beginning control 
   *   point and the last two parameters specify the 
   *   ending control point. The middle parameters 
   *   specify the start and stop of the curve. Longer 
   *   curves can be created by putting a series of 
   *   curve() functions together or using curveVertex(). 
   *   An additional function called curveTightness() 
   *   provides control for the visual quality of the 
   *   curve. The curve() function is an implementation 
   *   of Catmull-Rom splines.
   *
   *   @param x1 x-coordinate for the beginning control 
   *   point
   *   @param y1 y-coordinate for the beginning control 
   *   point
   *   @param x2 x-coordinate for the first point
   *   @param y2 y-coordinate for the first point
   *   @param x3 x-coordinate for the second point
   *   @param y3 y-coordinate for the second point
   *   @param x4 x-coordinate for the ending control 
   *   point
   *   @param y4 y-coordinate for the ending control 
   *   point
   *   @return the p5 object
   */
  curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): object;

  /**
   *   Sets the resolution at which curves display. The 
   *   default value is 20.
   *
   *   @param resolution of the curves
   *   @return the p5 object
   */
  curveDetail(resolution: number): object;

  /**
   *   Calculate a point on the Curve Evaluates the 
   *   Bezier at point t for points a, b, c, d. The 
   *   parameter t varies between 0 and 1, a and d are 
   *   points on the curve, and b and c are the control 
   *   points. This can be done once with the x 
   *   coordinates and a second time with the y 
   *   coordinates to get the location of a curve at t.
   *
   *   @param a coordinate of first point on the curve
   *   @param b coordinate of first control point
   *   @param c coordinate of second control point
   *   @param d coordinate of second point on the curve
   *   @param t value between 0 and 1
   *   @return bezier value at point t
   */
  curvePoint(a: number, b: number, c: number, d: number, t: number): number;

  /**
   *   Calculates the tangent of a point on a curve 
   *   Evaluates the tangent at point t for points a, b, 
   *   c, d. The parameter t varies between 0 and 1, a 
   *   and d are points on the curve, and b and c are the 
   *   control points
   *
   *   @param a coordinate of first point on the curve
   *   @param b coordinate of first control point
   *   @param c coordinate of second control point
   *   @param d coordinate of second point on the curve
   *   @param t value between 0 and 1
   *   @return the tangent at point t
   */
  curveTangent(a: number, b: number, c: number, d: number, t: number): number;

  // src/shape/vertex.js

  /**
   *   Use the beginContour() and endContour() function 
   *   to create negative shapes within shapes. For 
   *   instance, the center of the letter 'O'. 
   *   beginContour() begins recording vertices for the 
   *   shape and endContour() stops recording. These 
   *   functions can only be within a 
   *   beginShape()/endShape() pair. Transformations such 
   *   as translate(), rotate(), and scale() do not work 
   *   within a beginContour()/endContour() pair. It is 
   *   also not possible to use other shapes, such as 
   *   ellipse() or rect() within.
   *
   *   @return the p5 object
   */
  beginContour(): object;

  // TODO: Fix beginShape() errors in src/shape/vertex.js, line 62:
  //
  //   param "kind" has invalid type: Number/Constant
  //
  // beginShape(kind: any): object;

  /**
   *   Specifies vertex coordinates for Bezier curves. 
   *   Each call to bezierVertex() defines the position 
   *   of two control points and one anchor point of a 
   *   Bezier curve, adding a new segment to a line or 
   *   shape. The first time bezierVertex() is used 
   *   within a beginShape() call, it must be prefaced 
   *   with a call to vertex() to set the first anchor 
   *   point. This function must be used between 
   *   beginShape() and endShape() and only when there is 
   *   no MODE parameter specified to beginShape().
   *
   *   @param x2 x-coordinate for the first control point
   *   @param y2 y-coordinate for the first control point
   *   @param x3 x-coordinate for the second control 
   *   point
   *   @param y3 y-coordinate for the second control 
   *   point
   *   @param x4 x-coordinate for the anchor point
   *   @param y4 y-coordinate for the anchor point
   *   @return the p5 object
   */
  bezierVertex(x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): object;

  /**
   *   Specifies vertex coordinates for curves. This 
   *   function may only be used between beginShape() and 
   *   endShape() and only when there is no MODE 
   *   parameter specified to beginShape(). The first and 
   *   last points in a series of curveVertex() lines 
   *   will be used to guide the beginning and end of a 
   *   the curve. A minimum of four points is required to 
   *   draw a tiny curve between the second and third 
   *   points. Adding a fifth point with curveVertex() 
   *   will draw the curve between the second, third, and 
   *   fourth points. The curveVertex() function is an 
   *   implementation of Catmull-Rom splines.
   *
   *   @param x x-coordinate of the vertex
   *   @param y y-coordinate of the vertex
   *   @return the p5 object
   */
  curveVertex(x: number, y: number): object;

  /**
   *   Use the beginContour() and endContour() function 
   *   to create negative shapes within shapes. For 
   *   instance, the center of the letter 'O'. 
   *   beginContour() begins recording vertices for the 
   *   shape and endContour() stops recording. These 
   *   functions can only be within a 
   *   beginShape()/endShape() pair.
   *
   *   @return the p5 object
   */
  endContour(): object;

  // TODO: Fix endShape() errors in src/shape/vertex.js, line 420:
  //
  //   param "mode" has invalid type: Number/Constant
  //
  // endShape(mode: any): object;

  /**
   *   Specifies vertex coordinates for quadratic Bezier 
   *   curves. Each call to quadraticVertex() defines the 
   *   position of one control points and one anchor 
   *   point of a Bezier curve, adding a new segment to a 
   *   line or shape. The first time quadraticVertex() is 
   *   used within a beginShape() call, it must be 
   *   prefaced with a call to vertex() to set the first 
   *   anchor point. This function must be used between 
   *   beginShape() and endShape() and only when there is 
   *   no MODE parameter specified to beginShape().
   *
   *   @param cx x-coordinate for the control point
   *   @param cy y-coordinate for the control point
   *   @param x3 x-coordinate for the anchor point
   *   @param y3 y-coordinate for the anchor point
   *   @return the p5 object
   */
  quadraticVertex(cx: number, cy: number, x3: number, y3: number): object;

  /**
   *   All shapes are constructed by connecting a series 
   *   of vertices. vertex() is used to specify the 
   *   vertex coordinates for points, lines, triangles, 
   *   quads, and polygons. It is used exclusively within 
   *   the beginShape() and endShape() functions.
   *
   *   @param x x-coordinate of the vertex
   *   @param y y-coordinate of the vertex
   *   @return the p5 object
   */
  vertex(x: number, y: number): object;

  // src/structure/structure.js

  /**
   *   Stops p5.js from continuously executing the code 
   *   within draw(). If loop() is called, the code in 
   *   draw() begins to run continuously again. If using 
   *   noLoop() in setup(), it should be the last line 
   *   inside the block. When noLoop() is used, it's not 
   *   possible to manipulate or access the screen inside 
   *   event handling functions such as mousePressed() or 
   *   keyPressed(). Instead, use those functions to call 
   *   redraw() or loop(), which will run draw(), which 
   *   can update the screen properly. This means that 
   *   when noLoop() has been called, no drawing can 
   *   happen, and functions like saveFrame() or 
   *   loadPixels() may not be used. Note that if the 
   *   sketch is resized, redraw() will be called to 
   *   update the sketch, even after noLoop() has been 
   *   specified. Otherwise, the sketch would enter an 
   *   odd state until loop() was called.
   *
   */
  noLoop(): void;

  /**
   *   By default, p5.js loops through draw() 
   *   continuously, executing the code within it. 
   *   However, the draw() loop may be stopped by calling 
   *   noLoop(). In that case, the draw() loop can be 
   *   resumed with loop().
   *
   */
  loop(): void;

  /**
   *   The push() function saves the current drawing 
   *   style settings and transformations, while pop() 
   *   restores these settings. Note that these functions 
   *   are always used together. They allow you to change 
   *   the style and transformation settings and later 
   *   return to what you had. When a new state is 
   *   started with push(), it builds on the current 
   *   style and transform information. The push() and 
   *   pop() functions can be embedded to provide more 
   *   control. (See the second example for a 
   *   demonstration.)  push() stores information related 
   *   to the current transformation state and style 
   *   settings controlled by the following functions: 
   *   fill(), stroke(), tint(), strokeWeight(), 
   *   strokeCap(), strokeJoin(), imageMode(), 
   *   rectMode(), ellipseMode(), colorMode(), 
   *   textAlign(), textFont(), textMode(), textSize(), 
   *   textLeading().
   *
   */
  push(): void;

  /**
   *   The push() function saves the current drawing 
   *   style settings and transformations, while pop() 
   *   restores these settings. Note that these functions 
   *   are always used together. They allow you to change 
   *   the style and transformation settings and later 
   *   return to what you had. When a new state is 
   *   started with push(), it builds on the current 
   *   style and transform information. The push() and 
   *   pop() functions can be embedded to provide more 
   *   control. (See the second example for a 
   *   demonstration.)  push() stores information related 
   *   to the current transformation state and style 
   *   settings controlled by the following functions: 
   *   fill(), stroke(), tint(), strokeWeight(), 
   *   strokeCap(), strokeJoin(), imageMode(), 
   *   rectMode(), ellipseMode(), colorMode(), 
   *   textAlign(), textFont(), textMode(), textSize(), 
   *   textLeading().
   *
   */
  pop(): void;

  /**
   *   Executes the code within draw() one time. This 
   *   functions allows the program to update the display 
   *   window only when necessary, for example when an 
   *   event registered by mousePressed() or keyPressed() 
   *   occurs. In structuring a program, it only makes 
   *   sense to call redraw() within events such as 
   *   mousePressed(). This is because redraw() does not 
   *   run draw() immediately (it only sets a flag that 
   *   indicates an update is needed). The redraw() 
   *   function does not work properly when called inside 
   *   draw(). To enable/disable animations, use loop() 
   *   and noLoop().
   *
   */
  redraw(): void;

  // src/transform/transform.js

  /**
   *   Multiplies the current matrix by the one specified 
   *   through the parameters. This is very slow because 
   *   it will try to calculate the inverse of the 
   *   transform, so avoid it whenever possible.
   *
   *   @param n00 numbers which define the 3x2 matrix to 
   *   be multiplied
   *   @param n01 numbers which define the 3x2 matrix to 
   *   be multiplied
   *   @param n02 numbers which define the 3x2 matrix to 
   *   be multiplied
   *   @param n10 numbers which define the 3x2 matrix to 
   *   be multiplied
   *   @param n11 numbers which define the 3x2 matrix to 
   *   be multiplied
   *   @param n12 numbers which define the 3x2 matrix to 
   *   be multiplied
   *   @return the p5 object
   */
  applyMatrix(n00: number, n01: number, n02: number, n10: number, n11: number, n12: number): p5;

  /**
   *   Replaces the current matrix with the identity 
   *   matrix.
   *
   *   @return the p5 object
   */
  resetMatrix(): p5;

  /**
   *   Rotates a shape the amount specified by the angle 
   *   parameter. This function accounts for angleMode, 
   *   so angles can be entered in either RADIANS or 
   *   DEGREES. Objects are always rotated around their 
   *   relative position to the origin and positive 
   *   numbers rotate objects in a clockwise direction. 
   *   Transformations apply to everything that happens 
   *   after and subsequent calls to the function 
   *   accumulates the effect. For example, calling 
   *   rotate(HALF_PI) and then rotate(HALF_PI) is the 
   *   same as rotate(PI). All tranformations are reset 
   *   when draw() begins again. Technically, rotate() 
   *   multiplies the current transformation matrix by a 
   *   rotation matrix. This function can be further 
   *   controlled by the push() and pop().
   *
   *   @param angle the angle of rotation, specified in 
   *   radians or degrees, depending on current angleMode
   *   @return the p5 object
   */
  rotate(angle: number): p5;

  /**
   *   Increases or decreases the size of a shape by 
   *   expanding and contracting vertices. Objects always 
   *   scale from their relative origin to the coordinate 
   *   system. Scale values are specified as decimal 
   *   percentages. For example, the function call 
   *   scale(2.0) increases the dimension of a shape by 
   *   200%. Transformations apply to everything that 
   *   happens after and subsequent calls to the function 
   *   multiply the effect. For example, calling 
   *   scale(2.0) and then scale(1.5) is the same as 
   *   scale(3.0). If scale() is called within draw(), 
   *   the transformation is reset when the loop begins 
   *   again. Using this fuction with the z parameter 
   *   requires using P3D as a parameter for size(), as 
   *   shown in the third example above. This function 
   *   can be further controlled with push() and pop().
   *
   *   @param s percentage to scale the object, or 
   *   percentage to scale the object in the x-axis if 
   *   multiple arguments are given
   *   @param [y] percentage to scale the object in the 
   *   y-axis
   *   @return the p5 object
   */
  scale(s: number, y?: number): p5;

  /**
   *   Shears a shape around the x-axis the amount 
   *   specified by the angle parameter. Angles should be 
   *   specified in the current angleMode. Objects are 
   *   always sheared around their relative position to 
   *   the origin and positive numbers shear objects in a 
   *   clockwise direction. Transformations apply to 
   *   everything that happens after and subsequent calls 
   *   to the function accumulates the effect. For 
   *   example, calling shearX(PI/2) and then 
   *   shearX(PI/2) is the same as shearX(PI). If 
   *   shearX() is called within the draw(), the 
   *   transformation is reset when the loop begins 
   *   again. Technically, shearX() multiplies the 
   *   current transformation matrix by a rotation 
   *   matrix. This function can be further controlled by 
   *   the push() and pop() functions.
   *
   *   @param angle angle of shear specified in radians 
   *   or degrees, depending on current angleMode
   *   @return the p5 object
   */
  shearX(angle: number): p5;

  /**
   *   Shears a shape around the y-axis the amount 
   *   specified by the angle parameter. Angles should be 
   *   specified in the current angleMode. Objects are 
   *   always sheared around their relative position to 
   *   the origin and positive numbers shear objects in a 
   *   clockwise direction. Transformations apply to 
   *   everything that happens after and subsequent calls 
   *   to the function accumulates the effect. For 
   *   example, calling shearY(PI/2) and then 
   *   shearY(PI/2) is the same as shearY(PI). If 
   *   shearY() is called within the draw(), the 
   *   transformation is reset when the loop begins 
   *   again. Technically, shearY() multiplies the 
   *   current transformation matrix by a rotation 
   *   matrix. This function can be further controlled by 
   *   the push() and pop() functions.
   *
   *   @param angle angle of shear specified in radians 
   *   or degrees, depending on current angleMode
   *   @return the p5 object
   */
  shearY(angle: number): p5;

  /**
   *   Specifies an amount to displace objects within the 
   *   display window. The x parameter specifies 
   *   left/right translation, the y parameter specifies 
   *   up/down translation. Transformations are 
   *   cumulative and apply to everything that happens 
   *   after and subsequent calls to the function 
   *   accumulates the effect. For example, calling 
   *   translate(50, 0) and then translate(20, 0) is the 
   *   same as translate(70, 0). If translate() is called 
   *   within draw(), the transformation is reset when 
   *   the loop begins again. This function can be 
   *   further controlled by using push() and pop().
   *
   *   @param x left/right translation
   *   @param y up/down translation
   *   @return the p5 object
   */
  translate(x: number, y: number): p5;

  // src/typography/attributes.js

  // TODO: Fix textAlign() errors in src/typography/attributes.js, line 22:
  //
  //   param "a" has invalid type: Number/Constant
  //
  // textAlign(a: any): void;

  /**
   *   Sets the spacing between lines of text in units of 
   *   pixels. This setting will be used in all 
   *   subsequent calls to the text() function.
   *
   *   @param l the size in pixels for spacing between 
   *   lines
   */
  textLeading(l: number): void;

  /**
   *   Sets the current font size. This size will be used 
   *   in all subsequent calls to the text() function. 
   *   Font size is measured in units of pixels.
   *
   *   @param s the size of the letters in units of 
   *   pixels
   */
  textSize(s: number): void;

  // TODO: Fix textStyle() errors in src/typography/attributes.js, line 103:
  //
  //   param "s" has invalid type: Number/Constant
  //
  // textStyle(s: any): void;

  /**
   *   Calculates and returns the width of any character 
   *   or text string.
   *
   *   @param s the String of characters to measure
   */
  textWidth(s: string): void;

  // src/typography/loading_displaying.js

  /**
   *   Draws text to the screen. Displays the information 
   *   specified in the first parameter on the screen in 
   *   the position specified by the additional 
   *   parameters. A default font will be used unless a 
   *   font is set with the textFont() function and a 
   *   default size will be used unless a font is set 
   *   with textSize(). Change the color of the text with 
   *   the fill() function. The text displays in relation 
   *   to the textAlign() function, which gives the 
   *   option to draw to the left, right, and center of 
   *   the coordinates. The x2 and y2 parameters define a 
   *   rectangular area to display within and may only be 
   *   used with string data. When these parameters are 
   *   specified, they are interpreted based on the 
   *   current rectMode() setting. Text that does not fit 
   *   completely within the rectangle specified will not 
   *   be drawn to the screen.
   *
   *   @param str the alphanumeric symbols to be 
   *   displayed
   *   @param x x-coordinate of text
   *   @param y y-coordinate of text
   *   @param x2 by default, the width of the text box, 
   *   see rectMode() for more info
   *   @param y2 by default, the height of the text box, 
   *   see rectMode() for more info
   */
  text(str: string, x: number, y: number, x2: number, y2: number): void;

  /**
   *   Sets the current font that will be drawn with the 
   *   text() function.
   *
   *   @param str name of font
   */
  textFont(str: string): void;

  // Properties from p5.dom

  // lib/addons/p5.dom.js

  /**
   *   Searches the page for an element with given ID and 
   *   returns it as a p5.Element. The DOM node itself 
   *   can be accessed with .elt. Returns null if none 
   *   found.
   *
   *   @param id id of element to search for
   *   @return p5.Element containing node found
   */
  getElement(id: string): any|null;

  /**
   *   Searches the page for elements with given class 
   *   and returns an array of p5.Elements. The DOM nodes 
   *   themselves can be accessed with .elt. Returns an 
   *   empty array if none found.
   *
   *   @param class class name of elements to search for
   *   @return array of p5.Element wrapped nodes found
   */
  getElements(theClass: string): any[];

  /**
   *   Removes all elements created by p5, except any 
   *   canvas / graphics elements created by createCanvas 
   *   or createGraphics. Event handlers are removed, and 
   *   element is removed from the DOM.
   *
   */
  removeElements(): void;

  // TODO: Fix createDiv() errors in lib/addons/p5.dom.js, line 110:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createDiv(html: string): any;

  // TODO: Fix createP() errors in lib/addons/p5.dom.js, line 121:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createP(html: string): any;

  // TODO: Fix createSpan() errors in lib/addons/p5.dom.js, line 133:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createSpan(html: string): any;

  // TODO: Fix createImg() errors in lib/addons/p5.dom.js, line 153:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createImg(src: string, alt: string): any;

  // TODO: Fix createA() errors in lib/addons/p5.dom.js, line 176:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createA(href: string, html: string, target?: string): any;

  // TODO: Fix createSlider() errors in lib/addons/p5.dom.js, line 200:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createSlider(min: number, max: number, value?: number): any;

  // TODO: Fix createButton() errors in lib/addons/p5.dom.js, line 222:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createButton(label: string, value?: string): any;

  // TODO: Fix createInput() errors in lib/addons/p5.dom.js, line 243:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createInput(value?: number): any;

  // TODO: Fix createVideo() errors in lib/addons/p5.dom.js, line 290:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createVideo(src: string|any[], callback?: object): any;

  // TODO: Fix createAudio() errors in lib/addons/p5.dom.js, line 318:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createAudio(src: string|any[], callback?: object): any;

  // TODO: Fix createCapture() errors in lib/addons/p5.dom.js, line 354:
  //
  //   param "type" has invalid type: String/Constant
  //   return has invalid type: Object/p5.Element
  //
  // createCapture(type: any): any;

  // TODO: Fix createElement() errors in lib/addons/p5.dom.js, line 386:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createElement(tag: string, content?: string): any;

  // Properties from p5.sound

  // lib/addons/p5.sound.js

  /**
   *   Returns the Audio Context for this sketch. Useful 
   *   for users who would like to dig deeper into the 
   *   Web Audio API .
   *
   *   @return AudioContext for this sketch
   */
  getAudioContext(): object;

  // TODO: Property "p5.soundOut", defined in lib/addons/p5.sound.js, line 193, is not a valid JS symbol name

  /**
   *   Set the master amplitude (volume) for sound in 
   *   this sketch. Note that values greater than 1.0 may 
   *   lead to digital distortion. 
   * 
   *   How This Works: When you load the p5.sound module, 
   *   it creates a single instance of p5sound. All sound 
   *   objects in this module output to p5sound before 
   *   reaching your computer's output. So if you change 
   *   the amplitude of p5sound, it impacts all of the 
   *   sound in this module.
   *
   *   @param volume Master amplitude (volume) for sound 
   *   in this sketch. Should be between 0.0 (silence) 
   *   and 1.0. Values greater than 1.0 may lead to 
   *   digital distortion.
   */
  masterVolume(volume: number): void;

  /**
   *   Returns a number representing the sample rate, in 
   *   samples per second, of all sound objects in this 
   *   audio context. It is determined by the sampling 
   *   rate of your operating system's sound card, and it 
   *   is not currently possile to change. It is often 
   *   44100, or twice the range of human hearing.
   *
   *   @return samplerate samples per second
   */
  sampleRate(): number;

  /**
   *   Returns the frequency value of a MIDI note value. 
   *   General MIDI treats notes as integers where middle 
   *   C is 60, C# is 61, D is 62 etc. Useful for 
   *   generating musical frequencies with oscillators.
   *
   *   @param midiNote The number of a MIDI note
   *   @return Frequency value of the given MIDI note
   */
  midiToFreq(midiNote: number): number;

  /**
   *   List the SoundFile formats that you will include. 
   *   LoadSound will search your directory for these 
   *   extensions, and will pick a format that is 
   *   compatable with the client's web browser. Here is 
   *   a free online file converter.
   *
   *   @param formats i.e. 'mp3', 'wav', 'ogg'
   */
  soundFormats(formats: string|any): void;
}

declare namespace p5 {
  // src/objects/p5.Color.js

  class Color {
    constructor();
  }

  // src/objects/p5.Element.js

  class Element {
    /**
     *   Base class for all elements added to a sketch, 
     *   including canvas, graphics buffers, and other HTML 
     *   elements. Methods in blue are included in the core 
     *   functionality, methods in brown are added with the 
     *   p5.dom library. It is not called directly, but 
     *   p5.Element objects are created by calling 
     *   createCanvas, createGraphics, or in the p5.dom 
     *   library, createDiv, createImg, createInput, etc.
     *
     *   @param elt DOM node that is wrapped
     *   @param [pInst] pointer to p5 instance
     */
    constructor(elt: string, pInst?: object);

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
     *   p5.Element.
     *
     *   @param parent the ID, DOM node, or p5.Element of 
     *   desired parent element
     */
    parent(parent: string|object): void;

    /**
     *   Sets the ID of the element
     *
     *   @param id ID of the element
     */
    id(id: string): void;

    /**
     *   Adds given class to the element
     *
     *   @param class class to add
     */
    class(theClass: string): void;

    /**
     *   The .mousePressed() function is called once after 
     *   every time a mouse button is pressed over the 
     *   element. This can be used to attach element 
     *   specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   pressed over the element.
     */
    mousePressed(fxn: Function): void;

    /**
     *   The .mouseWheel() function is called once after 
     *   every time a mouse wheel is scrolled over the 
     *   element. This can be used to attach element 
     *   specific event listeners. The event.wheelDelta or 
     *   event.detail property returns negative values if 
     *   the mouse wheel if rotated up or away from the 
     *   user and positive in the other direction. On OS X 
     *   with "natural" scrolling enabled, the values are 
     *   opposite.
     *
     *   @param fxn function to be fired when mouse wheel 
     *   is scrolled over the element.
     */
    mouseWheel(fxn: Function): void;

    /**
     *   The .mouseReleased() function is called once after 
     *   every time a mouse button is released over the 
     *   element. This can be used to attach element 
     *   specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   released over the element.
     */
    mouseReleased(fxn: Function): void;

    /**
     *   The .mouseClicked() function is called once after 
     *   a mouse button is pressed and released over the 
     *   element. This can be used to attach element 
     *   specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   clicked over the element.
     */
    mouseClicked(fxn: Function): void;

    /**
     *   The .mouseMoved() function is called once every 
     *   time a mouse moves over the element. This can be 
     *   used to attach an element specific event listener.
     *
     *   @param fxn function to be fired when mouse is 
     *   moved over the element.
     */
    mouseMoved(fxn: Function): void;

    /**
     *   The .mouseOver() function is called once after 
     *   every time a mouse moves onto the element. This 
     *   can be used to attach an element specific event 
     *   listener.
     *
     *   @param fxn function to be fired when mouse is 
     *   moved over the element.
     */
    mouseOver(fxn: Function): void;

    /**
     *   The .mouseOut() function is called once after 
     *   every time a mouse moves off the element. This can 
     *   be used to attach an element specific event 
     *   listener.
     *
     *   @param fxn function to be fired when mouse is 
     *   moved off the element.
     */
    mouseOut(fxn: Function): void;

    // lib/addons/p5.dom.js

    /**
     *   Adds specified class to the element.
     *
     *   @param class name of class to add
     */
    addClass(theClass: string): p5.Element;

    /**
     *   Removes specified class from the element.
     *
     *   @param class name of class to remove
     */
    removeClass(theClass: string): p5.Element;

    /**
     *   Attaches the element as a child to the parent 
     *   specified. Accepts either a string ID, DOM node, 
     *   or p5.Element
     *
     *   @param child the ID, DOM node, or p5.Element to 
     *   add to the current element
     */
    child(child: string|object): p5.Element;

    /**
     *   If an argument is given, sets the inner HTML of 
     *   the element, replacing any existing html. If no 
     *   arguments are given, returns the inner HTML of the 
     *   element.
     *
     *   @param [html] the HTML to be placed inside the 
     *   element
     */
    html(html?: string): p5.Element|string;

    /**
     *   Sets the position of the element relative to (0, 
     *   0) of the window. Essentially, sets 
     *   position:absolute and left and top properties of 
     *   style.
     *
     *   @param x x-position relative to upper left of 
     *   window
     *   @param y y-position relative to upper left of 
     *   window
     */
    position(x: number, y: number): p5.Element;

    /**
     *   Sets the given style (css) property of the element 
     *   with the given value. If no value is specified, 
     *   returns the value of the given property, or 
     *   undefined if the property is not.
     *
     *   @param property property to be set
     *   @param [value] value to assign to property
     *   @return value of property, if no value is 
     *   specified or p5.Element
     */
    style(property: string, value?: string): string|p5.Element;

    /**
     *   Adds a new attribute or changes the value of an 
     *   existing attribute on the specified element. If no 
     *   value is specified, returns the value of the given 
     *   attribute, or null if attribute is not set.
     *
     *   @param attr attribute to set
     *   @param [value] value to assign to attribute
     *   @return value of attribute, if no value is 
     *   specified or p5.Element
     */
    attribute(attr: string, value?: string): string|p5.Element;

    /**
     *   Either returns the value of the element if no 
     *   arguments given, or sets the value of the element.
     *
     *   @return value of element, if no value is specified 
     *   or p5.Element
     */
    value(value?: string|number): string|p5.Element;

    /**
     *   Shows the current element. Essentially, setting 
     *   display:block for the style.
     *
     */
    show(): p5.Element;

    /**
     *   Hides the current element. Essentially, setting 
     *   display:none for the style.
     *
     */
    hide(): p5.Element;

    /**
     *   Sets the width and height of the element. AUTO can 
     *   be used to only adjust one dimension.
     *
     *   @param w width of the element
     *   @param h height of the element
     */
    size(w: number, h: number): p5.Element;

    /**
     *   Removes the element and deregisters all listeners.
     *
     */
    remove(): void;
  }

  // src/objects/p5.Graphics.js

  class Graphics extends p5.Element {
    /**
     *   Main graphics and rendering context, as well as 
     *   the base API implementation for p5.js "core". Use 
     *   this class if you need to draw into an off-screen 
     *   graphics buffer. A p5.Graphics object can be 
     *   constructed with the createGraphics() function. 
     *   The fields and methods for this class are 
     *   extensive, but mirror the normal drawing API for 
     *   p5.
     *
     *   @param elt DOM node that is wrapped
     *   @param [pInst] pointer to p5 instance
     */
    constructor(elt: string, pInst?: object);
  }

  // src/objects/p5.Image.js

  class Image {
    /**
     *   Creates a new p5.Image. A p5.Image is a canvas 
     *   backed representation of an image. p5 can display 
     *   .gif, .jpg and .png images. Images may be 
     *   displayed in 2D and 3D space. Before an image is 
     *   used, it must be loaded with the loadImage() 
     *   function. The p5.Image class contains fields for 
     *   the width and height of the image, as well as an 
     *   array called pixels[] that contains the values for 
     *   every pixel in the image. The methods described 
     *   below allow easy access to the image's pixels and 
     *   alpha channel and simplify the process of 
     *   compositing. Before using the pixels[] array, be 
     *   sure to use the loadPixels() method on the image 
     *   to make sure that the pixel data is properly 
     *   loaded.
     *
     *   @param pInst An instance of a p5 sketch.
     */
    constructor(width: number, height: number, pInst: object);

    /**
     *   Image width.
     *
     */
    width: any;

    /**
     *   Image height.
     *
     */
    height: any;

    // TODO: Property "pixels[]", defined in src/objects/p5.Image.js, line 58, is not a valid JS symbol name

    /**
     *   Loads the pixels data for this image into the 
     *   [pixels] attribute.
     *
     */
    loadPixels(): void;

    /**
     *   Updates the backing canvas for this image with the 
     *   contents of the [pixels] array.
     *
     *   @param x x-offset of the target update area for 
     *   the underlying canvas
     *   @param y y-offset of the target update area for 
     *   the underlying canvas
     *   @param w height of the target update area for the 
     *   underlying canvas
     *   @param h height of the target update area for the 
     *   underlying canvas
     */
    updatePixels(x: number|undefined, y: number|undefined, w: number|undefined, h: number|undefined): void;

    /**
     *   Get a region of pixels from an image. If no params 
     *   are passed, those whole image is returned, if x 
     *   and y are the only params passed a single pixel is 
     *   extracted if all params are passed a rectangle 
     *   region is extracted and a p5.Image is returned. 
     *   Returns undefined if the region is outside the 
     *   bounds of the image
     *
     *   @param [x] x-coordinate of the pixel
     *   @param [y] y-coordinate of the pixel
     *   @param [w] width
     *   @param [h] height
     *   @return color of pixel at x,y in array format [R, 
     *   G, B, A] or p5.Image
     */
    get(x?: number, y?: number, w?: number, h?: number): any|p5.Image;

    /**
     *   Set the color of a single pixel or write an image 
     *   into this p5.Image. Note that for a large number 
     *   of pixels this will be slower than directly 
     *   manipulating the pixels array and then calling 
     *   updatePixels().
     *
     *   @param x x-coordinate of the pixel
     *   @param y y-coordinate of the pixel
     *   @param a grayscale value | pixel array | a 
     *   p5.Color | image to copy
     */
    set(x: number, y: number, a: number|any[]|object): void;

    /**
     *   Resize the image to a new width and height. To 
     *   make the image scale proportionally, use 0 as the 
     *   value for the wide or high parameter. For 
     *   instance, to make the width of an image 150 
     *   pixels, and change the height using the same 
     *   proportion, use resize(150, 0).
     *
     *   @param width the resized image width
     *   @param height the resized image height
     */
    resize(width: number, height: number): void;

    /**
     *   Copies a region of pixels from one image to 
     *   another. If no srcImage is specified this is used 
     *   as the source. If the source and destination 
     *   regions aren't the same size, it will 
     *   automatically resize source pixels to fit the 
     *   specified target region.
     *
     *   @param srcImage source image
     *   @param sx X coordinate of the source's upper left 
     *   corner
     *   @param sy Y coordinate of the source's upper left 
     *   corner
     *   @param sw source image width
     *   @param sh source image height
     *   @param dx X coordinate of the destination's upper 
     *   left corner
     *   @param dy Y coordinate of the destination's upper 
     *   left corner
     *   @param dw destination image width
     *   @param dh destination image height
     */
    copy(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

    /**
     *   Masks part of an image from displaying by loading 
     *   another image and using it's alpha channel as an 
     *   alpha channel for this image.
     *
     *   @param srcImage source image TODO: - Accept an 
     *   array of alpha values. - Use other channels of an 
     *   image. p5 uses the blue channel (which feels kind 
     *   of arbitrary). Note: at the moment this method 
     *   does not match native processings original 
     *   functionality exactly. 
     *   http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
     */
    mask(srcImage: p5.Image|undefined): void;

    /**
     *   Applies an image filter to a p5.Image
     *
     *   @param operation one of threshold, gray, invert, 
     *   posterize and opaque see Filters.js for docs on 
     *   each available filter
     */
    filter(operation: string, value: number|undefined): void;

    /**
     *   Copies a region of pixels from one image to 
     *   another, using a specified blend mode to do the 
     *   operation.
     *
     *   @param srcImage source image
     *   @param sx X coordinate of the source's upper left 
     *   corner
     *   @param sy Y coordinate of the source's upper left 
     *   corner
     *   @param sw source image width
     *   @param sh source image height
     *   @param dx X coordinate of the destination's upper 
     *   left corner
     *   @param dy Y coordinate of the destination's upper 
     *   left corner
     *   @param dw destination image width
     *   @param dh destination image height
     *   @param blendMode the blend mode Available blend 
     *   modes are: normal | multiply | screen | overlay | 
     *   darken | lighten | color-dodge | color-burn | 
     *   hard-light | soft-light | difference | exclusion | 
     *   hue | saturation | color | luminosity 
     *   http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
     */
    blend(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: number): void;

    /**
     *   Saves the image to a file and force the browser to 
     *   download it. Accepts two strings for filename and 
     *   file extension Supports png (default) and jpg.
     *
     *   @param filename give your file a name
     *   @param extension 'png' or 'jpg'
     */
    save(filename: string, extension: string): void;
  }

  // src/objects/p5.Table.js

  class Table {
    /**
     *   Table objects store data with multiple rows and 
     *   columns, much like in a traditional spreadsheet. 
     *   Tables can be generated from scratch, dynamically, 
     *   or using data from an existing file.
     *
     *   @param [rows] An array of p5.TableRow objects
     *   @return p5.Table generated
     */
    constructor(rows?: any[]);
    columns: any;
    rows: any;

    /**
     *   Use addRow() to add a new row of data to a 
     *   p5.Table object. By default, an empty row is 
     *   created. Typically, you would store a reference to 
     *   the new row in a TableRow object (see newRow in 
     *   the example above), and then set individual values 
     *   using set(). If a p5.TableRow object is included 
     *   as a parameter, then that row is duplicated and 
     *   added to the table.
     *
     *   @param [row] row to be added to the table
     */
    addRow(row?: p5.TableRow): void;

    /**
     *   Removes a row from the table object.
     *
     *   @param id ID number of the row to remove
     */
    removeRow(id: number): void;

    /**
     *   Returns a reference to the specified p5.TableRow. 
     *   The reference can then be used to get and set 
     *   values of the selected row.
     *
     *   @param rowID ID number of the row to get
     *   @return p5.TableRow object
     */
    getRow(rowID: number): TableRow;

    /**
     *   Gets all rows from the table. Returns an array of 
     *   p5.TableRows.
     *
     *   @return Array of p5.TableRows
     */
    getRows(): any[];

    /**
     *   Finds the first row in the Table that contains the 
     *   value provided, and returns a reference to that 
     *   row. Even if multiple rows are possible matches, 
     *   only the first matching row is returned. The 
     *   column to search may be specified by either its ID 
     *   or title.
     *
     *   @param value The value to match
     *   @param column ID number or title of the column to 
     *   search
     */
    findRow(value: string, column: number|string): TableRow;

    /**
     *   Finds the rows in the Table that contain the value 
     *   provided, and returns references to those rows. 
     *   Returns an Array, so for must be used to iterate 
     *   through all the rows, as shown in the example 
     *   above. The column to search may be specified by 
     *   either its ID or title.
     *
     *   @param value The value to match
     *   @param column ID number or title of the column to 
     *   search
     *   @return An Array of TableRow objects
     */
    findRows(value: string, column: number|string): any[];

    /**
     *   Finds the first row in the Table that matches the 
     *   regular expression provided, and returns a 
     *   reference to that row. Even if multiple rows are 
     *   possible matches, only the first matching row is 
     *   returned. The column to search may be specified by 
     *   either its ID or title.
     *
     *   @param regexp The regular expression to match
     *   @param column The column ID (number) or title 
     *   (string)
     *   @return TableRow object
     */
    matchRow(regexp: string, column: string|number): TableRow;

    /**
     *   Finds the first row in the Table that matches the 
     *   regular expression provided, and returns a 
     *   reference to that row. Even if multiple rows are 
     *   possible matches, only the first matching row is 
     *   returned. The column to search may be specified by 
     *   either its ID or title.
     *
     *   @param regexp The regular expression to match
     *   @param [column] The column ID (number) or title 
     *   (string)
     *   @return An Array of TableRow objects
     */
    matchRows(regexp: string, column?: string|number): any[];

    /**
     *   Retrieves all values in the specified column, and 
     *   returns them as an array. The column may be 
     *   specified by either its ID or title.
     *
     *   @param column String or Number of the column to 
     *   return
     *   @return Array of column values
     */
    getColumn(column: string|number): any[];

    /**
     *   Removes all rows from a Table. While all rows are 
     *   removed, columns and column titles are maintained.
     *
     */
    clearRows(): void;

    /**
     *   Use addColumn() to add a new column to a Table 
     *   object. Typically, you will want to specify a 
     *   title, so the column may be easily referenced 
     *   later by name. (If no title is specified, the new 
     *   column's title will be null.)
     *
     *   @param [title] Title of the given column
     */
    addColumn(title?: string): void;

    /**
     *   Returns the total number of rows in a Table.
     *
     *   @return Number of rows in this table
     */
    getRowCount(): number;

    /**
     *   Removes any of the specified characters (or 
     *   "tokens"). If no column is specified, then the 
     *   values in all columns and rows are processed. A 
     *   specific column may be referenced by either its ID 
     *   or title.
     *
     *   @param chars String listing characters to be 
     *   removed
     *   @param [column] Column ID (number) or name 
     *   (string)
     */
    removeTokens(chars: string, column?: string|number): void;

    /**
     *   Trims leading and trailing whitespace, such as 
     *   spaces and tabs, from String table values. If no 
     *   column is specified, then the values in all 
     *   columns and rows are trimmed. A specific column 
     *   may be referenced by either its ID or title.
     *
     *   @param column Column ID (number) or name (string)
     */
    trim(column: string|number): void;

    /**
     *   Use removeColumn() to remove an existing column 
     *   from a Table object. The column to be removed may 
     *   be identified by either its title (a String) or 
     *   its index value (an int). removeColumn(0) would 
     *   remove the first column, removeColumn(1) would 
     *   remove the second column, and so on.
     *
     *   @param column columnName (string) or ID (number)
     */
    removeColumn(column: string|number): void;
  }

  // src/objects/p5.TableRow.js

  class TableRow {
    /**
     *   A TableRow object represents a single row of data 
     *   values, stored in columns, from a table. A Table 
     *   Row contains both an ordered array, and an 
     *   unordered JSON object.
     *
     *   @param [str] optional: populate the row with a 
     *   string of values, separated by the separator
     *   @param [separator] comma separated values (csv) by 
     *   default
     */
    constructor(str?: string, separator?: string);

    /**
     *   Stores a value in the TableRow's specified column. 
     *   The column may be specified by either its ID or 
     *   title.
     *
     *   @param column Column ID (Number) or Title (String)
     *   @param value The value to be stored
     */
    set(column: string|number, value: string|number): void;

    /**
     *   Stores a Float value in the TableRow's specified 
     *   column. The column may be specified by either its 
     *   ID or title.
     *
     *   @param column Column ID (Number) or Title (String)
     *   @param value The value to be stored as a Float
     */
    setNum(column: string|number, value: number): void;

    /**
     *   Stores a String value in the TableRow's specified 
     *   column. The column may be specified by either its 
     *   ID or title.
     *
     *   @param column Column ID (Number) or Title (String)
     *   @param value The value to be stored as a String
     */
    setString(column: string|number, value: string): void;

    /**
     *   Retrieves a value from the TableRow's specified 
     *   column. The column may be specified by either its 
     *   ID or title.
     *
     *   @param column columnName (string) or ID (number)
     */
    get(column: string|number): string|number;

    /**
     *   Retrieves a Float value from the TableRow's 
     *   specified column. The column may be specified by 
     *   either its ID or title.
     *
     *   @param column columnName (string) or ID (number)
     *   @return Float Floating point number
     */
    getNum(column: string|number): number;

    /**
     *   Retrieves an String value from the TableRow's 
     *   specified column. The column may be specified by 
     *   either its ID or title.
     *
     *   @param column columnName (string) or ID (number)
     *   @return String
     */
    getString(column: string|number): string;
  }

  // src/objects/p5.Vector.js

  class Vector {
    /**
     *   A class to describe a two or three dimensional 
     *   vector, specifically a Euclidean (also known as 
     *   geometric) vector. A vector is an entity that has 
     *   both magnitude and direction. The datatype, 
     *   however, stores the components of the vector (x,y 
     *   for 2D, and x,y,z for 3D). The magnitude and 
     *   direction can be accessed via the methods mag() 
     *   and heading(). In many of the p5.js examples, you 
     *   will see p5.Vector used to describe a position, 
     *   velocity, or acceleration. For example, if you 
     *   consider a rectangle moving across the screen, at 
     *   any given instant it has a position (a vector that 
     *   points from the origin to its location), a 
     *   velocity (the rate at which the object's position 
     *   changes per time unit, expressed as a vector), and 
     *   acceleration (the rate at which the object's 
     *   velocity changes per time unit, expressed as a 
     *   vector). Since vectors represent groupings of 
     *   values, we cannot simply use traditional 
     *   addition/multiplication/etc. Instead, we'll need 
     *   to do some "vector" math, which is made easy by 
     *   the methods inside the p5.Vector class.
     *
     *   @param [x] x component of the vector
     *   @param [y] y component of the vector
     *   @param [z] z component of the vector
     */
    constructor(x?: number, y?: number, z?: number);

    /**
     *   The x component of the vector
     *
     */
    x: any;

    /**
     *   The y component of the vector
     *
     */
    y: any;

    /**
     *   The z component of the vector
     *
     */
    z: any;

    /**
     *   Sets the x, y, and z component of the vector using 
     *   two or three separate variables, the data from a 
     *   p5.Vector, or the values from a float array.
     *
     *   @param [x] the x component of the vector or a 
     *   p5.Vector or an Array
     *   @param [y] the y component of the vector
     *   @param [z] the z component of the vector
     */
    set(x?: number|p5.Vector|any[], y?: number, z?: number): void;

    /**
     *   Gets a copy of the vector, returns a p5.Vector 
     *   object.
     *
     *   @return the copy of the p5.Vector object
     */
    get(): p5.Vector;

    /**
     *   Adds x, y, and z components to a vector, adds one 
     *   vector to another, or adds two independent vectors 
     *   together. The version of the method that adds two 
     *   vectors together is a static method and returns a 
     *   p5.Vector, the others have no return value -- they 
     *   act directly on the vector. See the examples for 
     *   more context.
     *
     *   @param x the x component of the vector to be added 
     *   or a p5.Vector or an Array
     *   @param [y] the y component of the vector to be 
     *   added
     *   @param [z] the z component of the vector to be 
     *   added
     *   @chainable
     */
    add(x: number|p5.Vector|any[], y?: number, z?: number): p5.Vector;

    /**
     *   Subtracts x, y, and z components from a vector, 
     *   subtracts one vector from another, or subtracts 
     *   two independent vectors. The version of the method 
     *   that substracts two vectors is a static method and 
     *   returns a p5.Vector, the others have no return 
     *   value -- they act directly on the vector. See the 
     *   examples for more context.
     *
     *   @param x the x component of the vector or a 
     *   p5.Vector or an Array
     *   @param [y] the y component of the vector
     *   @param [z] the z component of the vector
     *   @chainable
     */
    sub(x: number|p5.Vector|any[], y?: number, z?: number): p5.Vector;

    /**
     *   Multiply the vector by a scalar.
     *
     *   @param n the number to multiply with the vector
     *   @chainable
     */
    mult(n: number): p5.Vector;

    /**
     *   Divide the vector by a scalar.
     *
     *   @param n the number to divide the vector by
     *   @chainable
     */
    div(n: number): p5.Vector;

    /**
     *   Calculates the magnitude (length) of the vector 
     *   and returns the result as a float (this is simply 
     *   the equation sqrt(x*x + y*y + z*z).)
     *
     *   @return magnitude of the vector
     */
    mag(): number;

    /**
     *   Calculates the squared magnitude of the vector and 
     *   returns the result as a float (this is simply the 
     *   equation (x*x + y*y + z*z).) Faster if the real 
     *   length is not required in the case of comparing 
     *   vectors, etc.
     *
     *   @return squared magnitude of the vector
     */
    magSq(): number;

    /**
     *   Calculates the dot product of two vectors.
     *
     *   @param x x component of the vector or a p5.Vector
     *   @param [y] y component of the vector
     *   @param [z] z component of the vector
     *   @return the dot product
     */
    dot(x: number|p5.Vector, y?: number, z?: number): number;

    /**
     *   Calculates and returns a vector composed of the 
     *   cross product between two vectors.
     *
     *   @param v p5.Vector to be crossed
     *   @return p5.Vector composed of cross product
     */
    cross(v: p5.Vector): p5.Vector;

    /**
     *   Calculates the Euclidean distance between two 
     *   points (considering a point as a vector object).
     *
     *   @param v the x, y, and z coordinates of a 
     *   p5.Vector
     *   @return the distance
     */
    dist(v: p5.Vector): number;

    /**
     *   Normalize the vector to length 1 (make it a unit 
     *   vector).
     *
     *   @return normalized p5.Vector
     */
    normalize(): p5.Vector;

    /**
     *   Limit the magnitude of this vector to the value 
     *   used for the max parameter.
     *
     *   @param max the maximum magnitude for the vector
     *   @return the modified p5.Vector
     */
    limit(max: number): p5.Vector;

    /**
     *   Set the magnitude of this vector to the value used 
     *   for the len parameter.
     *
     *   @param len the new length for this vector
     *   @return the modified p5.Vector
     */
    setMag(len: number): p5.Vector;

    /**
     *   Calculate the angle of rotation for this vector 
     *   (only 2D vectors)
     *
     *   @return the angle of rotation
     */
    heading(): number;

    /**
     *   Rotate the vector by an angle (only 2D vectors), 
     *   magnitude remains the same
     *
     *   @param angle the angle of rotation
     *   @return the modified p5.Vector
     */
    rotate(angle: number): p5.Vector;

    // TODO: Fix lerp() errors in src/objects/p5.Vector.js, line 383:
    //
    //   required param "amt" follows an optional param
    //
    // lerp(x: p5.Vector, y?: p5.Vector, z?: p5.Vector, amt: number): p5.Vector;

    /**
     *   Return a representation of this vector as a float 
     *   array. This is only for temporary use. If used in 
     *   any other fashion, the contents should be copied 
     *   by using the p5.Vector.get() method to copy into 
     *   your own array.
     *
     *   @return an Array with the 3 values
     */
    array(): any[];

    /**
     *   Make a new 2D unit vector from an angle
     *
     *   @param angle the desired angle
     *   @return the new p5.Vector object
     */
    static fromAngle(angle: number): p5.Vector;

    /**
     *   Make a new 2D unit vector from a random angle
     *
     *   @return the new p5.Vector object
     */
    static random2D(): p5.Vector;

    /**
     *   Make a new random 3D unit vector.
     *
     *   @return the new p5.Vector object
     */
    static random3D(): p5.Vector;
  }

  // lib/addons/p5.dom.js

  class MediaElement {
    /**
     *   Extends p5.Element to handle audio and video. In 
     *   addition to the methods of p5.Element, it also 
     *   contains methods for controlling media. It is not 
     *   called directly, but p5.MediaElements are created 
     *   by calling createVideo, createAudio, and 
     *   createCapture.
     *
     *   @param elt DOM node that is wrapped
     *   @param [pInst] pointer to p5 instance
     */
    constructor(elt: string, pInst?: object);

    /**
     *   Play an HTML5 media element.
     *
     */
    play(): p5.Element;

    /**
     *   Stops an HTML5 media element (sets current time to 
     *   zero).
     *
     */
    stop(): p5.Element;

    /**
     *   Pauses an HTML5 media element.
     *
     */
    pause(): p5.Element;

    /**
     *   Set 'loop' to true for an HTML5 media element, and 
     *   starts playing.
     *
     */
    loop(): p5.Element;

    /**
     *   Set 'loop' to false for an HTML5 media element. 
     *   Element will stop when it reaches the end.
     *
     */
    noLoop(): p5.Element;

    /**
     *   Set HTML5 media element to autoplay or not.
     *
     *   @param autoplay whether the element should 
     *   autoplay
     */
    autoplay(autoplay: boolean): p5.Element;

    /**
     *   Sets volume for this HTML5 media element. If no 
     *   argument is given, returns the current volume.
     *
     *   @param [val] volume between 0.0 and 1.0
     *   @return current volume or p5.MediaElement
     */
    volume(val?: number): number|p5.MediaElement;

    /**
     *   If no arguments are given, returns the current 
     *   time of the elmeent. If an argument is given the 
     *   current time of the element is set to it.
     *
     *   @param [time] time to jump to (in seconds)
     *   @return current time (in seconds) or 
     *   p5.MediaElement
     */
    time(time?: number): number|p5.MediaElement;

    /**
     *   Returns the duration of the HTML5 media element.
     *
     *   @return duration
     */
    duration(): number;
  }

  // lib/addons/p5.sound.js

  class SoundFile {
    // TODO: Fix p5.SoundFile() errors in lib/addons/p5.sound.js, line 425:
    //
    //   param "path" has invalid type: String/Array
    //
    // constructor(path: any, callback?: Function);

    // TODO: Fix loadSound() errors in lib/addons/p5.sound.js, line 504:
    //
    //   param "path" has invalid type: String/Array
    //
    // loadSound(path: any, callback?: Function): SoundFile;

    /**
     *   Returns true if the sound file finished loading 
     *   successfully.
     *
     */
    isLoaded(): boolean;

    /**
     *   Play the p5.SoundFile
     *
     *   @param [rate] (optional) playback rate
     *   @param [amp] (optional) amplitude (volume) of 
     *   playback
     *   @param [startTime] (optional) startTime in seconds
     *   @param [endTime] (optional) endTime in seconds
     */
    play(rate?: number, amp?: number, startTime?: number, endTime?: number): void;

    /**
     *   p5.SoundFile has two play modes: restart and 
     *   sustain. Play Mode determines what happens to a 
     *   p5.SoundFile if it is triggered while in the 
     *   middle of playback. In sustain mode, playback will 
     *   continue simultaneous to the new playback. In 
     *   restart mode, play() will stop playback and start 
     *   over. Sustain is the default mode.
     *
     *   @param str 'restart' or 'sustain'
     */
    playMode(str: string): void;

    /**
     *   Pauses a file that is currently playing. If the 
     *   file is not playing, then nothing will happen. 
     *   After pausing, .play() will resume from the paused 
     *   position. If p5.SoundFile had been set to loop 
     *   before it was paused, it will continue to loop 
     *   after it is unpaused with .play().
     *
     */
    pause(): void;

    /**
     *   Loop the p5.SoundFile. Accepts optional parameters 
     *   to set the playback rate, playback volume, 
     *   loopStart, loopEnd.
     *
     *   @param [rate] (optional) playback rate
     *   @param [amp] (optional) playback volume
     *   @param [loopStart] (optional) startTime in seconds
     *   @param [loopEnd] (optional) endTime in seconds
     */
    loop(rate?: number, amp?: number, loopStart?: number, loopEnd?: number): void;

    /**
     *   Returns true if a p5.SoundFile is playing, false 
     *   if not (i.e. paused or stopped).
     *
     */
    isPlaying(): boolean;

    /**
     *   Returns true if a p5.SoundFile is paused, false if 
     *   not (i.e. playing or stopped).
     *
     */
    isPaused(): boolean;

    /**
     *   Stop soundfile playback.
     *
     */
    stop(): void;

    /**
     *   Multiply the output volume (amplitude) of a sound 
     *   file between 0.0 (silence) and 1.0 (full volume). 
     *   1.0 is the maximum amplitude of a digital sound, 
     *   so multiplying by greater than 1.0 may cause 
     *   digital distortion. To fade, provide a rampTime 
     *   parameter. For more complex fades, see the Env 
     *   class.
     *
     *   @param volume Volume (amplitude) between 0.0 and 
     *   1.0
     *   @param [rampTime] Fade for t seconds
     *   @param [timeFromNow] Schedule this event to happen 
     *   at t seconds in the future
     */
    setVolume(volume: number, rampTime?: number, timeFromNow?: number): void;

    /**
     *   Set the stereo panning of a p5.sound object to a 
     *   floating point number between -1.0 (left) and 1.0 
     *   (right). Default is 0.0 (center).
     *
     *   @param [panValue] Set the stereo panner
     */
    pan(panValue?: number): void;

    /**
     *   Set the playback rate of a sound file. Will change 
     *   the speed and the pitch. Values less than zero 
     *   will reverse the audio buffer.
     *
     *   @param [playbackRate] Set the playback rate. 1.0 
     *   is normal, .5 is half-speed, 2.0 is twice as fast. 
     *   Must be greater than zero.
     */
    rate(playbackRate?: number): void;

    /**
     *   Returns the duration of a sound file in seconds.
     *
     *   @return The duration of the soundFile in seconds.
     */
    duration(): number;

    /**
     *   Return the current position of the p5.SoundFile 
     *   playhead, in seconds. Note that if you change the 
     *   playbackRate while the p5.SoundFile is playing, 
     *   the results may not be accurate.
     *
     *   @return currentTime of the soundFile in seconds.
     */
    currentTime(): number;

    /**
     *   Move the playhead of the song to a position, in 
     *   seconds. Start and Stop time. If none are given, 
     *   will reset the file to play entire duration from 
     *   start to finish.
     *
     *   @param cueTime cueTime of the soundFile in 
     *   seconds.
     *   @param endTime endTime of the soundFile in 
     *   seconds.
     */
    jump(cueTime: number, endTime: number): void;

    /**
     *   Return the number of channels in a sound file. For 
     *   example, Mono = 1, Stereo = 2.
     *
     *   @return [channels]
     */
    channels(): number;

    /**
     *   Return the sample rate of the sound file.
     *
     *   @return [sampleRate]
     */
    sampleRate(): number;

    /**
     *   Return the number of samples in a sound file. 
     *   Equal to sampleRate * duration.
     *
     *   @return [sampleCount]
     */
    frames(): number;

    /**
     *   Returns an array of amplitude peaks in a 
     *   p5.SoundFile that can be used to draw a static 
     *   waveform. Scans through the p5.SoundFile's audio 
     *   buffer to find the greatest amplitudes. Accepts 
     *   one parameter, 'length', which determines size of 
     *   the array. Larger arrays result in more precise 
     *   waveform visualizations. Inspired by 
     *   Wavesurfer.js.
     *
     *   @param [length] length is the size of the returned 
     *   array. Larger length results in more precision. 
     *   Defaults to 5*width of the browser window.
     *   @return Array of peaks.
     */
    getPeaks(length?: number): Float32Array;

    /**
     *   Reverses the p5.SoundFile's buffer source. 
     *   Playback must be handled separately (see example).
     *
     */
    reverseBuffer(): void;

    /**
     *   Connects the output of a p5sound object to input 
     *   of another p5.sound object. For example, you may 
     *   connect a p5.SoundFile to an FFT or an Effect. If 
     *   no parameter is given, it will connect to the 
     *   master output. Most p5sound objects connect to the 
     *   master output when they are created.
     *
     *   @param [object] Audio object that accepts an input
     */
    connect(object?: object): void;

    /**
     *   Disconnects the output of this p5sound object.
     *
     */
    disconnect(): void;

    /**
     *   Read the Amplitude (volume level) of a 
     *   p5.SoundFile. The p5.SoundFile class contains its 
     *   own instance of the Amplitude class to help make 
     *   it easy to get a SoundFile's volume level. Accepts 
     *   an optional smoothing value (0.0 < 1.0).
     *
     *   @param [smoothing] Smoothing is 0.0 by default. 
     *   Smooths values based on previous values.
     *   @return Volume level (between 0.0 and 1.0)
     */
    getLevel(smoothing?: number): number;

    /**
     *   Reset the source for this SoundFile to a new path 
     *   (URL).
     *
     *   @param path path to audio file
     *   @param callback Callback
     */
    setPath(path: string, callback: Function): void;
  }
  class Amplitude {
    /**
     *   Amplitude measures volume between 0.0 and 1.0. 
     *   Listens to all p5sound by default, or use 
     *   setInput() to listen to a specific sound source. 
     *   Accepts an optional smoothing value, which 
     *   defaults to 0.
     *
     *   @param [smoothing] between 0.0 and .999 to smooth 
     *   amplitude readings (defaults to 0)
     *   @return Amplitude Object
     */
    constructor(smoothing?: number);

    /**
     *   Connects to the p5sound instance (master output) 
     *   by default. Optionally, you can pass in a specific 
     *   source (i.e. a soundfile).
     *
     *   @param [snd] set the sound source (optional, 
     *   defaults to master output)
     *   @param [smoothing] a range between 0.0 and 1.0 to 
     *   smooth amplitude readings
     */
    setInput(snd?: any, smoothing?: number): void;

    /**
     *   Returns a single Amplitude reading at the moment 
     *   it is called. For continuous readings, run in the 
     *   draw loop.
     *
     *   @return Amplitude as a number between 0.0 and 1.0
     */
    getLevel(): number;

    /**
     *   Determines whether the results of 
     *   Amplitude.process() will be Normalized. To 
     *   normalize, Amplitude finds the difference the 
     *   loudest reading it has processed and the maximum 
     *   amplitude of 1.0. Amplitude adds this difference 
     *   to all values to produce results that will 
     *   reliably map between 0.0 and 1.0. However, if a 
     *   louder moment occurs, the amount that Normalize 
     *   adds to all the values will change. Accepts an 
     *   optional boolean parameter (true or false). 
     *   Normalizing is off by default.
     *
     *   @param [boolean] set normalize to true (1) or 
     *   false (0)
     */
    toggleNormalize(boolean?: boolean): void;

    /**
     *   Smooth Amplitude analysis by averaging with the 
     *   last analysis frame. Off by default.
     *
     *   @param set smoothing from 0.0
     */
    smooth(set: number): void;
  }
  class FFT {
    /**
     *   FFT (Fast Fourier Transform) is an analysis 
     *   algorithm that isolates individual  audio 
     *   frequencies within a waveform. Once instantiated, 
     *   a p5.FFT object can return an array based on two 
     *   types of analyses: 
     *  
     *   • FFT.waveform() computes amplitude values along 
     *   the time domain. The array indices correspond to 
     *   samples across a brief moment in time. Each value 
     *   represents amplitude of the waveform at that 
     *   sample of time.
     *  
     *   • FFT.analyze()  computes amplitude values along 
     *   the frequency domain. The array indices correspond 
     *   to frequencies (i.e. pitches), from the lowest to 
     *   the highest that humans can hear. Each value 
     *   represents amplitude at that slice of the 
     *   frequency spectrum. Use with getEnergy() to 
     *   measure amplitude at specific frequencies, or 
     *   within a range of frequencies.  
     * 
     *   FFT analyzes a very short snapshot of sound called 
     *   a sample buffer. It returns an array of amplitude 
     *   measurements, referred to as bins. The array is 
     *   1024 bins long by default. You can change the bin 
     *   array length, but it must be a power of 2 between 
     *   16 and 1024 in order for the FFT algorithm to 
     *   function correctly. The actual size of the FFT 
     *   buffer is twice the number of bins, so given a 
     *   standard sample rate, the buffer is 2048/44100 
     *   seconds long.
     *
     *   @param [smoothing] Smooth results of Freq 
     *   Spectrum. 0.0 < smoothing < 1.0. Defaults to 0.8.
     *   @param [bins] Length of resulting array. Must be a 
     *   power of two between 16 and 1024. Defaults to 
     *   1024.
     *   @return FFT Object
     */
    constructor(smoothing?: number, bins?: number);

    /**
     *   Set the input source for the FFT analysis. If no 
     *   source is provided, FFT will analyze all sound in 
     *   the sketch.
     *
     *   @param [source] p5.sound object (or web audio API 
     *   source node)
     *   @param [bins] Must be a power of two between 16 
     *   and 1024
     */
    setInput(source?: object, bins?: number): void;

    /**
     *   Returns an array of amplitude values (between 
     *   0-255) that represent a snapshot of amplitude 
     *   readings in a single buffer. Length will be equal 
     *   to bins (defaults to 1024). Can be used to draw 
     *   the waveform of a sound.
     *
     *   @param [bins] Must be a power of two between 16 
     *   and 1024. Defaults to 1024.
     *   @return Array Array of amplitude values (0-255) 
     *   over time. Array length = bins.
     */
    waveform(bins?: number): any[];

    /**
     *   Returns an array of amplitude values (between 0 
     *   and 255) across the frequency spectrum. Length is 
     *   equal to FFT bins (1024 by default). The array 
     *   indices correspond to frequencies (i.e. pitches), 
     *   from the lowest to the highest that humans can 
     *   hear. Each value represents amplitude at that 
     *   slice of the frequency spectrum. Must be called 
     *   prior to using getEnergy().
     *
     *   @param [bins] Must be a power of two between 16 
     *   and 1024. Defaults to 1024.
     *   @return spectrum Array of energy 
     *   (amplitude/volume) values across the frequency 
     *   spectrum. Lowest energy (silence) = 0, highest 
     *   possible is 255.
     */
    analyze(bins?: number): any[];

    /**
     *   Returns the amount of energy (volume) at a 
     *   specific  frequency, or the average amount of 
     *   energy between two frequencies. Accepts Number(s) 
     *   corresponding to frequency (in Hz), or a String 
     *   corresponding to predefined frequency ranges 
     *   ("bass", "lowMid", "mid", "highMid", "treble"). 
     *   Returns a range between 0 (no energy/volume at 
     *   that frequency) and 255 (maximum energy). NOTE: 
     *   analyze() must be called prior to getEnergy(). 
     *   Analyze() tells the FFT to analyze frequency data, 
     *   and getEnergy() uses the results determine the 
     *   value at a specific frequency or range of 
     *   frequencies.
     *
     *   @param frequency1 Will return a value representing 
     *   energy at this frequency. Alternately, the strings 
     *   "bass", "lowMid" "mid", "highMid", and "treble" 
     *   will return predefined frequency ranges.
     *   @param [frequency2] If a second frequency is 
     *   given, will return average amount of energy that 
     *   exists between the two frequencies.
     *   @return Energy Energy (volume/amplitude) from 0 
     *   and 255.
     */
    getEnergy(frequency1: number|string, frequency2?: number): number;

    /**
     *   Smooth FFT analysis by averaging with the last 
     *   analysis frame.
     *
     *   @param smoothing 0.0 < smoothing < 1.0. Defaults 
     *   to 0.8.
     */
    smooth(smoothing: number): void;
  }
  class Signal {
    /**
     *   p5.Signal is a constant audio-rate signal used by 
     *   p5.Oscillator and p5.Envelope for modulation math. 
     *   This is necessary because Web Audio is processed 
     *   on a seprate clock. For example, the p5 draw loop 
     *   runs about 60 times per second. But the audio 
     *   clock must process samples 44100 times per second. 
     *   If we want to add a value to each of those 
     *   samples, we can't do it in the draw loop, but we 
     *   can do it by adding a constant-rate audio 
     *   signal.This class and its children (p5.SignalAdd, 
     *   p5.SignalMultiply, p5.SignalScale) mostly function 
     *   behind the scenes in p5.sound. If you want to work 
     *   directly with audio signals for modular synthesis, 
     *   check out the source of this idea, tone.js.
     *
     */
    constructor();

    /**
     *   Set the value of a signal.
     *
     */
    setValue(value: number): void;

    // TODO: Fix fade() errors in lib/addons/p5.sound.js, line 1970:
    //
    //   param "secondsFromNow" has invalid type: [Number]
    //
    // fade(value: number, secondsFromNow: any): void;

    /**
     *   Connect a p5.sound object or Web Audio node to 
     *   this p5.Signal so that its amplitude values can be 
     *   scaled.
     *
     */
    setInput(input: object): void;

    /**
     *   Connect a p5.Signal to an object, such a 
     *   AudioParam
     *
     *   @param node An object that accepts a signal as 
     *   input such as a Web Audio API AudioParam
     */
    connect(node: object): void;

    /**
     *   Disconnect the signal
     *
     */
    disconnect(): void;

    // TODO: Fix add() errors in lib/addons/p5.sound.js, line 2028:
    //
    //   return has invalid type: p5.SignalAdd
    //
    // add(number: number): any;

    // TODO: Fix mult() errors in lib/addons/p5.sound.js, line 2043:
    //
    //   return has invalid type: p5.SignalMult
    //
    // mult(number: number): any;

    // TODO: Fix scale() errors in lib/addons/p5.sound.js, line 2058:
    //
    //   return has invalid type: p5.SignalScale
    //
    // scale(number: number, inMin: number, inMax: number, outMin: number, outMax: number): any;

    // TODO: Fix signalMult() errors in lib/addons/p5.sound.js, line 2084:
    //
    //   param "num" has invalid type: [type]
    //   param "input" has invalid type: [type]
    //   return has invalid type: p5.SignalMult
    //
    // signalMult(num: any, input: any): any;

  }
  class Oscillator {
    /**
     *   Creates a signal that oscillates between -1.0 and 
     *   1.0. By default, the oscillation takes the form of 
     *   a sinusoidal shape ('sine'). Additional types 
     *   include 'triangle', 'sawtooth' and 'square'. The 
     *   frequency defaults to 440 oscillations per second 
     *   (440Hz, equal to the pitch of an 'A' note). Set 
     *   the type of oscillation with setType(), or by 
     *   creating a specific oscillator. For example: new 
     *   p5.SinOsc(freq) new p5.TriOsc(freq) new 
     *   p5.SqrOsc(freq) new p5.SawOsc(freq).
     *
     *   @param [freq] frequency defaults to 440Hz
     *   @param [type] type of oscillator. Options: 'sine' 
     *   (default), 'triangle', 'sawtooth', 'square'
     *   @return Oscillator object
     */
    constructor(freq?: number, type?: string);

    /**
     *   Start an oscillator. Accepts an optional parameter 
     *   to determine how long (in seconds from now) until 
     *   the oscillator starts.
     *
     *   @param [time] startTime in seconds from now.
     *   @param [frequency] frequency in Hz.
     */
    start(time?: number, frequency?: number): void;

    /**
     *   Stop an oscillator. Accepts an optional parameter 
     *   to determine how long (in seconds from now) until 
     *   the oscillator stops.
     *
     *   @param secondsFromNow Time, in seconds from now.
     */
    stop(secondsFromNow: number): void;

    /**
     *   Set amplitude (volume) of an oscillator between 0 
     *   and 1.0
     *
     *   @param vol between 0 and 1.0
     *   @param [rampTime] create a fade that lasts 
     *   rampTime
     *   @param [timeFromNow] schedule this event to happen 
     *   seconds from now
     *   @return gain If no value is provided, returns the 
     *   Web Audio API AudioParam that controls this 
     *   oscillator's gain/amplitude/volume)
     */
    amp(vol: number, rampTime?: number, timeFromNow?: number): AudioParam;

    /**
     *   Set frequency of an oscillator.
     *
     *   @param Frequency Frequency in Hz
     *   @param [rampTime] Ramp time (in seconds)
     *   @param [timeFromNow] Schedule this event to happen 
     *   at x seconds from now
     *   @return Frequency If no value is provided, returns 
     *   the Web Audio API AudioParam that controls this 
     *   oscillator's frequency
     */
    freq(Frequency: number, rampTime?: number, timeFromNow?: number): AudioParam;

    /**
     *   Set type to 'sine', 'triangle', 'sawtooth' or 
     *   'square'.
     *
     *   @param type 'sine', 'triangle', 'sawtooth' or 
     *   'square'.
     */
    setType(type: string): void;

    /**
     *   Connect to a p5.sound / Web Audio object.
     *
     *   @param unit A p5.sound or Web Audio object
     */
    connect(unit: object): void;

    /**
     *   Disconnect all outputs
     *
     */
    disconnect(): void;

    /**
     *   Pan between Left (-1) and Right (1)
     *
     *   @param panning Number between -1 and 1
     */
    pan(panning: number): void;

    /**
     *   Set the phase of an oscillator between 0.0 and 1.0
     *
     *   @param phase float between 0.0 and 1.0
     */
    phase(phase: number): void;

    /**
     *   Add a value to the p5.Oscillator's output 
     *   amplitude, and return the result in the form of a 
     *   p5.Signal. This method does not add to the 
     *   p5.Oscillator itself, — the returned p5.Signal 
     *   handles the math. This is useful for modulating 
     *   parameters with an oscillating signal. 
     *   p5.Oscillator's amplitude. on this oscillator's 
     *   signal.
     *
     *   @param number Constant number to add
     *   @return p5.Signal a p5.Signal does the math
     */
    add(number: number): p5.Signal;

    // TODO: Fix add() errors in lib/addons/p5.sound.js, line 2459:
    //
    //   return has invalid type: p5.SignalMult
    //
    // add(number: number): any;

    // TODO: Fix scale() errors in lib/addons/p5.sound.js, line 2477:
    //
    //   return has invalid type: p5.SignalScale
    //
    // scale(inMin: number, inMax: number, outMin: number, outMax: number): any;

    // TODO: Fix p5.SinOsc() errors in lib/addons/p5.sound.js, line 2499:
    //
    //   "p5.SinOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.SinOsc(freq: any): void;

    // TODO: Fix p5.TriOsc() errors in lib/addons/p5.sound.js, line 2514:
    //
    //   "p5.TriOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.TriOsc(freq: any): void;

    // TODO: Fix p5.SawOsc() errors in lib/addons/p5.sound.js, line 2529:
    //
    //   "p5.SawOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.SawOsc(freq: any): void;

    // TODO: Fix p5.SawOsc() errors in lib/addons/p5.sound.js, line 2544:
    //
    //   "p5.SawOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.SawOsc(freq: any): void;

  }
  class Env {
    /**
     *   Envelopes are pre-defined amplitude distribution 
     *   over time. The p5.Env accepts up to four 
     *   time/level pairs, where time determines how long 
     *   of a ramp before value reaches level. Typically, 
     *   envelopes are used to control the output volume of 
     *   an object, a series of fades referred to as 
     *   Attack, Decay, Sustain and Release (ADSR). But 
     *   p5.Env can control any Web Audio Param, for 
     *   example it can be passed to an Oscillator 
     *   frequency like osc.freq(env)
     *
     *   @param aTime Time (in seconds) before level 
     *   reaches attackLevel
     *   @param aLevel Typically an amplitude between 0.0 
     *   and 1.0
     *   @param dTime Time
     *   @param [dLevel] Amplitude (In a standard ADSR 
     *   envelope, decayLevel = sustainLevel)
     *   @param [sTime] Time (in seconds)
     *   @param [sLevel] Amplitude 0.0 to 1.0
     *   @param [rTime] Time (in seconds)
     *   @param [rLevel] Amplitude 0.0 to 1.0
     */
    constructor(aTime: number, aLevel: number, dTime: number, dLevel?: number, sTime?: number, sLevel?: number, rTime?: number, rLevel?: number);
    attackTime: any;
    attackLevel: any;
    decayTime: any;
    decayLevel: any;
    sustainTime: any;
    sustainLevel: any;
    releaseTime: any;
    releaseLevel: any;

    /**
     *   Reset the envelope with a series of time/value 
     *   pairs.
     *
     *   @param aTime Time (in seconds) before level 
     *   reaches attackLevel
     *   @param aLevel Typically an amplitude between 0.0 
     *   and 1.0
     *   @param dTime Time
     *   @param [dLevel] Amplitude (In a standard ADSR 
     *   envelope, decayLevel = sustainLevel)
     *   @param [sTime] Time (in seconds)
     *   @param [sLevel] Amplitude 0.0 to 1.0
     *   @param [rTime] Time (in seconds)
     *   @param [rLevel] Amplitude 0.0 to 1.0
     */
    set(aTime: number, aLevel: number, dTime: number, dLevel?: number, sTime?: number, sLevel?: number, rTime?: number, rLevel?: number): void;

    /**
     *   Play tells the envelope to start acting on a given 
     *   input. If the input is a p5.sound object (i.e. 
     *   AudioIn, Oscillator, SoundFile), then Env will 
     *   control its output volume. Envelopes can also be 
     *   used to control any  Web Audio Audio Param.
     *
     *   @param unit A p5.sound object or Web Audio Param.
     *   @param secondsFromNow time from now (in seconds)
     */
    play(unit: object, secondsFromNow: number): void;

    /**
     *   Trigger the Attack, Decay, and Sustain of the 
     *   Envelope. Similar to holding down a key on a 
     *   piano, but it will hold the sustain level until 
     *   you let go. Input can be any p5.sound object, or a  
     *   Web Audio Param.
     *
     *   @param unit p5.sound Object or Web Audio Param
     *   @param secondsFromNow time from now (in seconds)
     */
    triggerAttack(unit: object, secondsFromNow: number): void;

    /**
     *   Trigger the Release of the Envelope. This is 
     *   similar to releasing the key on a piano and 
     *   letting the sound fade according to the release 
     *   level and release time.
     *
     *   @param unit p5.sound Object or Web Audio Param
     *   @param secondsFromNow time to trigger the release
     */
    triggerRelease(unit: object, secondsFromNow: number): void;
  }
  class Pulse {
    /**
     *   Creates a Pulse object, an oscillator that 
     *   implements Pulse Width Modulation. The pulse is 
     *   created with two oscillators. Accepts a parameter 
     *   for frequency, and to set the width between the 
     *   pulses. See  p5.Oscillator for a full list of 
     *   methods.
     *
     *   @param [freq] Frequency in oscillations per second 
     *   (Hz)
     *   @param [w] Width between the pulses (0 to 1.0, 
     *   defaults to 0)
     */
    constructor(freq?: number, w?: number);

    /**
     *   Set the width of a Pulse object (an oscillator 
     *   that implements Pulse Width Modulation).
     *
     *   @param [width] Width between the pulses (0 to 1.0, 
     *   defaults to 0)
     */
    width(width?: number): void;
  }
  class Noise {
    /**
     *   Noise is a type of oscillator that generates a 
     *   buffer with random values.
     *
     *   @param type Type of noise can be 'white' 
     *   (default), 'brown' or 'pink'.
     *   @return Noise Object
     */
    constructor(type: string);

    /**
     *   Set type of noise to 'white', 'pink' or 'brown'. 
     *   White is the default.
     *
     *   @param [type] 'white', 'pink' or 'brown'
     */
    setType(type?: string): void;

    /**
     *   Start the noise
     *
     */
    start(): void;

    /**
     *   Stop the noise.
     *
     */
    stop(): void;

    /**
     *   Pan the noise.
     *
     *   @param panning Number between -1 (left) and 1 
     *   (right)
     */
    pan(panning: number): void;

    /**
     *   Send output to a p5.sound or web audio object
     *
     */
    connect(unit: object): void;

    /**
     *   Disconnect all output.
     *
     */
    disconnect(): void;
  }
  class AudioIn {
    /**
     *   Get audio from an input, i.e. your computer's 
     *   microphone. Turn the mic on/off with the start() 
     *   and stop() methods. When the mic is on, its volume 
     *   can be measured with getLevel or by connecting an 
     *   FFT object. 
     * 
     *   If you want to hear the AudioIn, use the 
     *   .connect() method. AudioIn does not connect to 
     *   p5.sound output by default to prevent feedback. 
     * 
     *   Note: This uses the getUserMedia/ Stream API, 
     *   which is not supported by certain browsers.
     *
     *   @return AudioIn
     */
    constructor();

    /**
     *   Client must allow browser to access their 
     *   microphone / audioin source. Default: false. Will 
     *   become true when the client enables acces.
     *
     */
    enabled: boolean;

    /**
     *   Start processing audio input. This enables the use 
     *   of other AudioIn methods like getLevel(). Note 
     *   that by default, AudioIn is not connected to 
     *   p5.sound's output. So you won't hear anything 
     *   unless you use the connect() method.
     *
     */
    start(): void;

    /**
     *   Turn the AudioIn off. If the AudioIn is stopped, 
     *   it cannot getLevel().
     *
     */
    stop(): void;

    /**
     *   Connect to an audio unit. If no parameter is 
     *   provided, will connect to the master output (i.e. 
     *   your speakers).
     *
     *   @param [unit] An object that accepts audio input, 
     *   such as an FFT
     */
    connect(unit?: object): void;

    /**
     *   Disconnect the AudioIn from all audio units. For 
     *   example, if connect() had been called, 
     *   disconnect() will stop sending signal to your 
     *   speakers.
     *
     */
    disconnect(): void;

    /**
     *   Read the Amplitude (volume level) of an AudioIn. 
     *   The AudioIn class contains its own instance of the 
     *   Amplitude class to help make it easy to get a 
     *   microphone's volume level. Accepts an optional 
     *   smoothing value (0.0 < 1.0). NOTE: AudioIn must 
     *   .start() before using .getLevel().
     *
     *   @param [smoothing] Smoothing is 0.0 by default. 
     *   Smooths values based on previous values.
     *   @return Volume level (between 0.0 and 1.0)
     */
    getLevel(smoothing?: number): number;

    /**
     *   Set amplitude (volume) of a mic input between 0 
     *   and 1.0.
     *
     *   @param vol between 0 and 1.0
     *   @param [time] ramp time (optional)
     */
    amp(vol: number, time?: number): void;

    /**
     *   Returns a list of available input sources. Some 
     *   browsers give the client the option to set their 
     *   own media source. Others allow JavaScript to 
     *   determine which source, and for this we have 
     *   listSources() and setSource().
     *
     */
    listSources(): any[];

    /**
     *   Set the input source. Accepts a number 
     *   representing a position in the array returned by 
     *   listSources(). This is only available in browsers 
     *   that support MediaStreamTrack.getSources(). 
     *   Instead, some browsers give users the option to 
     *   set their own media source.
     *
     *   @param num position of input source in the array
     */
    setSource(num: number): void;
  }
  class Filter {
    // TODO: Fix p5.Filter() errors in lib/addons/p5.sound.js, line 3533:
    //
    //   param "type" has invalid type: [String]
    //
    // constructor(type: any);

    /**
     *   The p5.Filter is built with a  Web Audio 
     *   BiquadFilter Node.
     *
     */
    biquadFilter: any;

    // TODO: Fix process() errors in lib/addons/p5.sound.js, line 3612:
    //
    //   param "freq" has invalid type: [Number]
    //   param "res" has invalid type: [Number]
    //
    // process(Signal: object, freq: any, res: any): void;

    /**
     *   Set the frequency and the resonance of the filter.
     *
     *   @param freq Frequency in Hz, from 10 to 22050
     *   @param res Resonance (Q) from 0.001 to 1000
     */
    set(freq: number, res: number): void;

    // TODO: Fix freq() errors in lib/addons/p5.sound.js, line 3641:
    //
    //   param "freq" has invalid type: [Number]
    //
    // freq(freq: any): number;

    /**
     *   Controls either width of a bandpass frequency, or 
     *   the resonance of a low/highpass cutoff frequency.
     *
     *   @param res Resonance/Width of filter freq from 
     *   0.001 to 1000
     *   @return value Returns the current res value
     */
    res(res: number): number;

    /**
     *   Set the type of a p5.Filter. Possible types 
     *   include: "lowpass" (default), "highpass", 
     *   "bandpass", "lowshelf", "highshelf", "peaking", 
     *   "notch", "allpass".
     *
     */
    setType(UNKNOWN: string): void;

    /**
     *   Set the output level of the filter.
     *
     *   @param volume amplitude between 0 and 1.0
     *   @param [rampTime] create a fade that lasts 
     *   rampTime
     *   @param [timeFromNow] schedule this event to happen 
     *   seconds from now
     */
    amp(volume: number, rampTime?: number, timeFromNow?: number): void;

    /**
     *   Send output to a p5.sound or web audio object
     *
     */
    connect(unit: object): void;

    /**
     *   Disconnect all output.
     *
     */
    disconnect(): void;

    // TODO: Fix p5.LowPass() errors in lib/addons/p5.sound.js, line 3729:
    //
    //   "p5.LowPass" is not a valid JS symbol name
    //
    // p5.LowPass(): void;

    // TODO: Fix p5.HighPass() errors in lib/addons/p5.sound.js, line 3741:
    //
    //   "p5.HighPass" is not a valid JS symbol name
    //
    // p5.HighPass(): void;

    // TODO: Fix p5.BandPass() errors in lib/addons/p5.sound.js, line 3753:
    //
    //   "p5.BandPass" is not a valid JS symbol name
    //
    // p5.BandPass(): void;

  }
  class Delay {
    /**
     *   Delay is an echo effect. It processes an existing 
     *   sound source, and outputs a delayed version of 
     *   that sound. The p5.Delay can produce different 
     *   effects depending on the delayTime, feedback, 
     *   filter, and type. In the example below, a feedback 
     *   of 0.5 will produce a looping delay that decreases 
     *   in volume by 50% each repeat. A filter will cut 
     *   out the high frequencies so that the delay does 
     *   not sound as piercing as the original source.
     *
     *   @return Returns a p5.Delay object
     */
    constructor();

    /**
     *   The p5.Delay is built with two  Web Audio Delay 
     *   Nodes, one for each stereo channel.
     *
     */
    leftDelay: any;

    /**
     *   The p5.Delay is built with two  Web Audio Delay 
     *   Nodes, one for each stereo channel.
     *
     */
    rightDelay: any;

    /**
     *   Internal filter. Set to lowPass by default, but 
     *   can be accessed directly. See p5.Filter for 
     *   methods. Or use the p5.Delay.filter() method to 
     *   change frequency and q.
     *
     */
    lowPass: any;

    /**
     *   Add delay to an audio signal according to a set of 
     *   delay parameters.
     *
     *   @param Signal An object that outputs audio
     *   @param [delayTime] Time (in seconds) of the 
     *   delay/echo. Some browsers limit delayTime to 1 
     *   second.
     *   @param [feedback] sends the delay back through 
     *   itself in a loop that decreases in volume each 
     *   time.
     *   @param [lowPass] Cutoff frequency. Only 
     *   frequencies below the lowPass will be part of the 
     *   delay.
     */
    process(Signal: object, delayTime?: number, feedback?: number, lowPass?: number): void;

    /**
     *   Set the delay (echo) time, in seconds. Usually 
     *   this value will be a floating point number between 
     *   0.0 and 1.0.
     *
     *   @param delayTime Time (in seconds) of the delay
     */
    delayTime(delayTime: number): void;

    /**
     *   Feedback occurs when Delay sends its signal back 
     *   through its input in a loop. The feedback amount 
     *   determines how much signal to send each time 
     *   through the loop. A feedback greater than 1.0 is 
     *   not desirable because it will increase the overall 
     *   output each time through the loop, creating an 
     *   infinite feedback loop.
     *
     *   @param feedback 0.0 to 1.0, or an object such as 
     *   an Oscillator that can be used to modulate this 
     *   param
     */
    feedback(feedback: number|object): void;

    /**
     *   Set a lowpass filter frequency for the delay. A 
     *   lowpass filter will cut off any frequencies higher 
     *   than the filter frequency.
     *
     *   @param cutoffFreq A lowpass filter will cut off 
     *   any frequencies higher than the filter frequency.
     *   @param res Resonance of the filter frequency 
     *   cutoff, or an object (i.e. a p5.Oscillator) that 
     *   can be used to modulate this parameter. High 
     *   numbers (i.e. 15) will produce a resonance, low 
     *   numbers (i.e. .2) will produce a slope.
     */
    filter(cutoffFreq: number|object, res: number|object): void;

    /**
     *   Choose a preset type of delay. 'pingPong' bounces 
     *   the signal from the left to the right channel to 
     *   produce a stereo effect. Any other parameter will 
     *   revert to the default delay setting.
     *
     *   @param type 'pingPong' (1) or 'default' (0)
     */
    setType(type: string|number): void;

    /**
     *   Set the output level of the delay effect.
     *
     *   @param volume amplitude between 0 and 1.0
     *   @param [rampTime] create a fade that lasts 
     *   rampTime
     *   @param [timeFromNow] schedule this event to happen 
     *   seconds from now
     */
    amp(volume: number, rampTime?: number, timeFromNow?: number): void;

    /**
     *   Send output to a p5.sound or web audio object
     *
     */
    connect(unit: object): void;

    /**
     *   Disconnect all output.
     *
     */
    disconnect(): void;
  }
  class Reverb {
    /**
     *   Reverb adds depth to a sound through a large 
     *   number of decaying echoes. It creates the 
     *   perception that sound is occurring in a physical 
     *   space. The p5.Reverb has paramters for Time (how 
     *   long does the reverb last) and decayRate (how much 
     *   the sound decays with each echo) that can be set 
     *   with the .set() or .process() methods. The 
     *   p5.Convolver extends p5.Reverb allowing you to 
     *   recreate the sound of actual physical spaces 
     *   through convolution.
     *
     */
    constructor();

    // TODO: Fix process() errors in lib/addons/p5.sound.js, line 4076:
    //
    //   param "seconds" has invalid type: [Number]
    //   param "decayRate" has invalid type: [Number]
    //   param "reverse" has invalid type: [Boolean]
    //
    // process(src: object, seconds: any, decayRate: any, reverse: any): void;

    // TODO: Fix set() errors in lib/addons/p5.sound.js, line 4105:
    //
    //   param "seconds" has invalid type: [Number]
    //   param "decayRate" has invalid type: [Number]
    //   param "reverse" has invalid type: [Boolean]
    //
    // set(seconds: any, decayRate: any, reverse: any): void;

    /**
     *   Set the output level of the delay effect.
     *
     *   @param volume amplitude between 0 and 1.0
     *   @param [rampTime] create a fade that lasts 
     *   rampTime
     *   @param [timeFromNow] schedule this event to happen 
     *   seconds from now
     */
    amp(volume: number, rampTime?: number, timeFromNow?: number): void;

    /**
     *   Send output to a p5.sound or web audio object
     *
     */
    connect(unit: object): void;

    /**
     *   Disconnect all output.
     *
     */
    disconnect(): void;
  }
  class Convolver {
    // TODO: Fix p5.Convolver() errors in lib/addons/p5.sound.js, line 4207:
    //
    //   param "callback" has invalid type: [Function]
    //
    // constructor(path: string, callback: any);

    /**
     *   Internally, the p5.Convolver uses the a  Web Audio 
     *   Convolver Node.
     *
     */
    convolverNode: any;

    // TODO: Fix createConvolver() errors in lib/addons/p5.sound.js, line 4287:
    //
    //   param "callback" has invalid type: [Function]
    //
    // createConvolver(path: string, callback: any): p5.Convolver;

    /**
     *   Connect a source to the reverb, and assign reverb 
     *   parameters.
     *
     *   @param src p5.sound / Web Audio object with a 
     *   sound output.
     */
    process(src: object): void;

    /**
     *   If you load multiple impulse files using the 
     *   .addImpulse method, they will be stored as Objects 
     *   in this Array. Toggle between them with the 
     *   toggleImpulse(id) method.
     *
     */
    impulses: any;

    // TODO: Fix addImpulse() errors in lib/addons/p5.sound.js, line 4405:
    //
    //   param "callback" has invalid type: [Function]
    //
    // addImpulse(path: string, callback: any): void;

    // TODO: Fix resetImpulse() errors in lib/addons/p5.sound.js, line 4422:
    //
    //   param "callback" has invalid type: [Function]
    //
    // resetImpulse(path: string, callback: any): void;

    /**
     *   If you have used .addImpulse() to add multiple 
     *   impulses to a p5.Convolver, then you can use this 
     *   method to toggle between the items in the 
     *   .impulses Array. Accepts a parameter to identify 
     *   which impulse you wish to use, identified either 
     *   by its original filename (String) or by its 
     *   position in the .impulses  Array (Number). You can 
     *   access the objects in the .impulses Array 
     *   directly. Each Object has two attributes: an 
     *   .audioBuffer (type: Web Audio  AudioBuffer) and a 
     *   .name, a String that corresponds with the original 
     *   filename.
     *
     *   @param id Identify the impulse by its original 
     *   filename (String), or by its position in the 
     *   .impulses Array (Number).
     */
    toggleImpulse(id: string|number): void;
  }
  class SoundRecorder {
    /**
     *   Record sounds for playback and/or to save as a 
     *   .wav file. The p5.SoundRecorder records all sound 
     *   output from your sketch, or can be assigned a 
     *   specific source with setInput(). The record() 
     *   method accepts a p5.SoundFile as a parameter. When 
     *   playback is stopped (either after the given amount 
     *   of time, or with the stop() method), the 
     *   p5.SoundRecorder will send its recording to that 
     *   p5.SoundFile for playback.
     *
     */
    constructor();

    /**
     *   Connect a specific device to the p5.SoundRecorder. 
     *   If no parameter is given, p5.SoundRecorer will 
     *   record all audible p5.sound from your sketch.
     *
     *   @param [unit] p5.sound object or a web audio unit 
     *   that outputs sound
     */
    setInput(unit?: object): void;

    /**
     *   Start recording. To access the recording, provide 
     *   a p5.SoundFile as the first parameter. The 
     *   p5.SoundRecorder will send its recording to that 
     *   p5.SoundFile for playback once recording is 
     *   complete. Optional parameters include duration (in 
     *   seconds) of the recording, and a callback function 
     *   that will be called once the complete recording 
     *   has been transfered to the p5.SoundFile.
     *
     *   @param soundFile p5.SoundFile
     *   @param [duration] Time (in seconds)
     *   @param [callback] The name of a function that will 
     *   be called once the recording completes
     */
    record(soundFile: p5.SoundFile, duration?: number, callback?: Function): void;

    /**
     *   Stop the recording. Once the recording is stopped, 
     *   the results will be sent to the p5.SoundFile that 
     *   was given on .record(), and if a callback function 
     *   was provided on record, that function will be 
     *   called.
     *
     */
    stop(): void;

    /**
     *   Save a p5.SoundFile as a .wav audio file.
     *
     *   @param soundFile p5.SoundFile that you wish to 
     *   save
     *   @param name name of the resulting .wav file.
     */
    saveSound(soundFile: p5.SoundFile, name: string): void;
  }
}

// Literals 

// Constants 
type COLOR_MODE =
      RGB
    | HSB;

