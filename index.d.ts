// Type definitions for p5 0.2
// Project: https://github.com/processing/p5.js
// Definitions by: p5-types <https://github.com/p5-types>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This file was auto-generated. Please do not edit it.

export = p5;
type UNKNOWN_P5_CONSTANT = any;
type SoundFile = any;
type Amplitude = any;
type FFT = any;
type Oscillator = any;
type Pulse = any;
type Noise = any;
type AudioIn = any;
type Env = any;
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
   *   the first frame of animation or if the backgound 
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
   *   The setup() function is called once when the 
   *   program starts. It's used to define initial 
   *   enviroment properties such as screen size and 
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
   *   intial array to be modified, and the second 
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
  split(value: string, delim?: string): any[];

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
   *   current fullscreen state.
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
   *   width and height parameters.
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
   *   parameters given to image() are intepreted. The 
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
   *   The boolean system variable isKeyPressed is true 
   *   if any key is pressed and false if no keys are 
   *   pressed.
   *
   */
  isKeyPressed: any;

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
   *   The boolean system variable isMousePressed is true 
   *   if the mouse is pressed and false if not.
   *
   */
  isMousePressed: any;

  /**
   *   The mouseMoved() function is called every time the 
   *   mouse moves and a mouse button is not pressed.
   *
   */
  mouseMoved(): void;

  /**
   *   The mouseDragged() function is called once every 
   *   time the mouse moves and a mouse button is 
   *   pressed. If no mouseDragged() function is defined, 
   *   the touchMoved() function will be called instead 
   *   if it is defined.
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
   *   called instead if it is defined.
   *
   */
  mousePressed(): void;

  /**
   *   The mouseReleased() function is called every time 
   *   a mouse button is released. If no mouseReleased() 
   *   function is defined, the touchEnded() function 
   *   will be called instead if it is defined.
   *
   */
  mouseReleased(): void;

  /**
   *   The mouseClicked() function is called once after a 
   *   mouse button has been pressed and then released.
   *
   */
  mouseClicked(): void;

  /**
   *   The event.wheelDelta or event.detail property 
   *   returns negative values if the mouse wheel if 
   *   rotated up or away from the user and positive in 
   *   the other direction. On OS X with "natural" 
   *   scrolling enabled, the values are opposite. See  
   *   mouse wheel event in JS.
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
   *   0) of the canvas. This is best used for single 
   *   touch interactions. For multi-touch interactions, 
   *   use the touches[] array.
   *
   */
  touchY: any;

  // TODO: Property "touches[]", defined in src/input/touch.js, line 39, is not a valid JS symbol name

  /**
   *   The touchStarted() function is called once after 
   *   every time a touch is registered. If no 
   *   touchStarted() function is defined, the 
   *   mousePressed() function will be called instead if 
   *   it is defined.
   *
   */
  touchStarted(): void;

  /**
   *   The touchMoved() function is called every time a 
   *   touch move is registered. If no touchStarted() 
   *   function is defined, the mouseDragged() function 
   *   will be called instead if it is defined.
   *
   */
  touchMoved(): void;

  /**
   *   The touchEnded() function is called every time a 
   *   touch ends. If no touchStarted() function is 
   *   defined, the mouseReleased() function will be 
   *   called instead if it is defined.
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
   *   output signal and as such define the overal 
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
   *   Creates a canvas element in the document.
   *
   *   @param w width of the canvas
   *   @param h height of the canvas
   *   @return canvas generated
   */
  createCanvas(w: number, h: number): object;

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

  // TODO: Fix blendMode() errors in src/rendering/rendering.js, line 120:
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

  // TODO: Fix quad() errors in src/shape/2d_primitives.js, line 280:
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

  // TODO: Fix textAlign() errors in src/typography/attributes.js, line 20:
  //
  //   param "a" has invalid type: Number/Constant
  //
  // textAlign(a: any): void;

  /**
   *   Calculates and returns the height of any character 
   *   or text string.
   *
   *   @param s the String of characters to measure
   */
  textHeight(s: string): void;

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

  // TODO: Fix textStyle() errors in src/typography/attributes.js, line 121:
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
   *   @param str the alphanumberic symbols to be 
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

  // TODO: Fix createDiv() errors in lib/addons/p5.dom.js, line 82:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createDiv(html: string): any;

  // TODO: Fix createP() errors in lib/addons/p5.dom.js, line 93:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createP(html: string): any;

  // TODO: Fix createSpan() errors in lib/addons/p5.dom.js, line 105:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createSpan(html: string): any;

  // TODO: Fix createImg() errors in lib/addons/p5.dom.js, line 125:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createImg(src: string, alt: string): any;

  // TODO: Fix createA() errors in lib/addons/p5.dom.js, line 148:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createA(href: string, html: string, target?: string): any;

  // TODO: Fix createSlider() errors in lib/addons/p5.dom.js, line 172:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createSlider(min: number, max: number, value?: number): any;

  // TODO: Fix createButton() errors in lib/addons/p5.dom.js, line 194:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createButton(label: string, value?: string): any;

  // TODO: Fix createInput() errors in lib/addons/p5.dom.js, line 215:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createInput(value?: number): any;

  // TODO: Fix createVideo() errors in lib/addons/p5.dom.js, line 262:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createVideo(src: string|any[], callback?: object): any;

  // TODO: Fix createAudio() errors in lib/addons/p5.dom.js, line 285:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createAudio(src: string|any[], callback?: object): any;

  // TODO: Fix createCapture() errors in lib/addons/p5.dom.js, line 316:
  //
  //   param "type" has invalid type: String/Constant
  //   return has invalid type: Object/p5.Element
  //
  // createCapture(type: any): any;

  // TODO: Fix createElement() errors in lib/addons/p5.dom.js, line 348:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createElement(tag: string, content?: string): any;

  /**
   *   Adds specified class to the element.
   *
   *   @param class name of class to add
   */
  addClass(theClass: string): void;

  /**
   *   Removes specified class from the element.
   *
   *   @param class name of class to remove
   */
  removeClass(theClass: string): void;

  /**
   *   Attaches the element to the parent specified. A 
   *   way of setting the container for the element. 
   *   Accepts either a string ID or DOM node.
   *
   *   @param child the ID or node to add to the current 
   *   element
   */
  child(child: string|object): void;

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

  /**
   *   Set the master amplitude (volume) for sound in 
   *   this sketch. Note that values greater than 1.0 may 
   *   lead to digital distortion. 
   * 
   *   How This Works: When you load the p5Sound module, 
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
}

declare namespace p5 {
  // src/objects/p5.Color.js

  class Color {
    constructor();

    // TODO: Fix getNormalizedColor() errors in src/objects/p5.Color.js, line 30:
    //
    //   param "args" has invalid type: Array-like
    //
    // getNormalizedColor(args: any): any[];

  }

  // src/objects/p5.Element.js

  class Element {
    /**
     *   A class to describe...
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
     *   Accepts either a string ID or DOM node.
     *
     *   @param parent the ID or node of the parent elt
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
     *   Sets the inner HTML of the element. Replaces any 
     *   existing html.
     *
     *   @param html the HTML to be placed inside the 
     *   element
     */
    html(html: string): void;

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
    position(x: number, y: number): void;

    /**
     *   Sets the given style (css) property of the element 
     *   with the given value. If no value is specified, 
     *   returns the value of the given property, or 
     *   undefined if the property is not.
     *
     *   @param property property to be set
     *   @param value value to assign to property
     *   @return value of property, if no value is 
     *   specified
     */
    style(property: string, value: string): string;

    /**
     *   Adds a new attribute or changes the value of an 
     *   existing attribute on the specified element. If no 
     *   value is specified, returns the value of the given 
     *   attribute, or null if attribute is not set.
     *
     *   @param attr attribute to set
     *   @param [value] value to assign to attribute
     *   @return value of attribute, if no value is 
     *   specified
     */
    attribute(attr: string, value?: string): string;

    /**
     *   Either returns the value of the element if no 
     *   arguments given, or sets the value of the element.
     *
     */
    value(value?: string|number): string|number;

    /**
     *   Shows the current element. Essentially, setting 
     *   display:block for the style.
     *
     */
    show(): void;

    /**
     *   Hides the current element. Essentially, setting 
     *   display:none for the style.
     *
     */
    hide(): void;

    /**
     *   Sets the width and height of the element. AUTO can 
     *   be used to only adjust one dimension.
     *
     *   @param w width of the element
     *   @param h height of the element
     */
    size(w: number, h: number): void;

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

    // TODO: Property "pixels[]", defined in src/objects/p5.Image.js, line 57, is not a valid JS symbol name

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
     *   updatePixels()
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

    // TODO: Fix save() errors in src/objects/p5.Image.js, line 290:
    //
    //   param "extension

TODO:" is not a valid JS symbol name
    //   param "extension

TODO:" has invalid type: [type]
    //
    // save(extension

TODO:: any): void;

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

    // TODO: Fix lerp() errors in src/objects/p5.Vector.js, line 371:
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
     *   A class to describe...
     *
     *   @param elt DOM node that is wrapped
     *   @param [pInst] pointer to p5 instance
     */
    constructor(elt: string, pInst?: object);

    /**
     *   Play an HTML5 media element.
     *
     */
    play(): void;

    /**
     *   Stops an HTML5 media element (sets current time to 
     *   zero).
     *
     */
    stop(): void;

    /**
     *   Pauses an HTML5 media element.
     *
     */
    pause(): void;

    /**
     *   Set 'loop' to true for an HTML5 media element, and 
     *   starts playing.
     *
     */
    loop(): void;

    /**
     *   Set 'loop' to false for an HTML5 media element. 
     *   Element will stop when it reaches the end.
     *
     */
    noLoop(): void;

    /**
     *   Set HTML5 media element to autoplay or not.
     *
     *   @param autoplay whether the element should 
     *   autoplay
     */
    autoplay(autoplay: boolean): void;

    /**
     *   Sets volume for this HTML5 media element. If no 
     *   argument is given, returns the current volume;
     *
     *   @param [val] volume between 0.0 and 1.0
     *   @return current volume
     */
    volume(val?: number): number;

    /**
     *   If no arguments are given, returns the current 
     *   time of the elmeent. If an argument is given the 
     *   current time of the element is set to it.
     *
     *   @param [time] time to jump to (in seconds)
     *   @return current time (in seconds)
     */
    time(time?: number): number;

    /**
     *   Returns the duration of the HTML5 media element.
     *
     *   @return duration
     */
    duration(): number;
  }
}

// Literals 

// Constants 
type COLOR_MODE =
      RGB
    | HSB;

