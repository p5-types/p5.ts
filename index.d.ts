// Type definitions for p5 0.0
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
   *   Extracts the blue value from a color or pixel 
   *   array.
   *
   *   @param obj p5.Color object or pixel array
   */
  blue(obj: object): void;

  /**
   *   Extracts the HSB brightness value from a color or 
   *   pixel array.
   *
   *   @param color p5.Color object or pixel array
   */
  brightness(color: object): void;

  /**
   *   Creates colors for storing in variables of the 
   *   color datatype. The parameters are interpreted as 
   *   RGB or HSB values depending on the current 
   *   colorMode(). The default mode is RGB values from 0 
   *   to 255 and, therefore, the function call 
   *   color(255, 204, 0) will return a bright yellow 
   *   color.  Note that if only one value is provided to 
   *   color(), it will be interpreted as a grayscale 
   *   value. Add a second value, and it will be used for 
   *   alpha transparency. When three values are 
   *   specified, they are interpreted as either RGB or 
   *   HSB values. Adding a fourth value applies alpha 
   *   transparency. If a single string parameter is 
   *   provided it will be interpreted as a 
   *   CSS-compatible color string. 
   * 
   *   Colors are stored as Numbers or Arrays.
   *
   *   @param gray number specifying value between white 
   *   and black.
   *   @param [alpha] alpha value relative to current 
   *   color range
   */
  color(gray: number|string, alpha?: number): void;

  /**
   *   Creates colors for storing in variables of the 
   *   color datatype. The parameters are interpreted as 
   *   RGB or HSB values depending on the current 
   *   colorMode(). The default mode is RGB values from 0 
   *   to 255 and, therefore, the function call 
   *   color(255, 204, 0) will return a bright yellow 
   *   color.  Note that if only one value is provided to 
   *   color(), it will be interpreted as a grayscale 
   *   value. Add a second value, and it will be used for 
   *   alpha transparency. When three values are 
   *   specified, they are interpreted as either RGB or 
   *   HSB values. Adding a fourth value applies alpha 
   *   transparency. If a single string parameter is 
   *   provided it will be interpreted as a 
   *   CSS-compatible color string. 
   * 
   *   Colors are stored as Numbers or Arrays.
   *
   *   @param v1 red or hue value relative to the current 
   *   color range, or a color string
   *   @param v2 green or saturation value relative to 
   *   the current color range
   *   @param v3 blue or brightness value relative to the 
   *   current color range
   *   @param [alpha] alpha value relative to current 
   *   color range
   */
  color(v1: number|string, v2: number, v3: number, alpha?: number): void;

  /**
   *   Extracts the green value from a color or pixel 
   *   array.
   *
   *   @param color p5.Color object or pixel array
   */
  green(color: object): void;

  /**
   *   Extracts the hue value from a color or pixel 
   *   array. Hue exists in both HSB and HSL. This 
   *   function will return the HSB-normalized hue when 
   *   supplied with an HSB color object (or when 
   *   supplied with a pixel array while the color mode 
   *   is HSB), but will default to the HSL-normalized 
   *   hue otherwise. (The values will only be different 
   *   if the maximum hue setting for each system is 
   *   different.)
   *
   *   @param color p5.Color object or pixel array
   */
  hue(color: object): void;

  // TODO: Fix lerpColor() errors in src/color/creating_reading.js, line 330:
  //
  //   param "c1" has invalid type: Array/Number
  //   param "c2" has invalid type: Array/Number
  //   return has invalid type: Array/Number
  //
  // lerpColor(c1: any, c2: any, amt: number): any;

  /**
   *   Extracts the HSL lightness value from a color or 
   *   pixel array.
   *
   *   @param color p5.Color object or pixel array
   */
  lightness(color: object): void;

  /**
   *   Extracts the red value from a color or pixel 
   *   array.
   *
   *   @param obj p5.Color object or pixel array
   */
  red(obj: object): void;

  /**
   *   Extracts the saturation value from a color or 
   *   pixel array. Saturation is scaled differently in 
   *   HSB and HSL. This function will return the HSB 
   *   saturation when supplied with an HSB color object 
   *   (or when supplied with a pixel array while the 
   *   color mode is HSB), but will default to the HSL 
   *   saturation otherwise.
   *
   *   @param color p5.Color object or pixel array
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
   *   @param color any value created by the color() 
   *   function
   *   @param [a] opacity of the background
   */
  background(color: p5.Color, a?: number): void;

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
   *   @param colorstring color string, possible formats 
   *   include: integer rgb() or rgba(), percentage rgb() 
   *   or rgba(), 3-digit hex, 6-digit hex
   *   @param [a] opacity of the background
   */
  background(colorstring: string, a?: number): void;

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
   *   @param gray specifies a value between white and 
   *   black
   *   @param [a] opacity of the background
   */
  background(gray: number, a?: number): void;

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
   *   @param v1 red or hue value (depending on the 
   *   current color mode)
   *   @param v2 green or saturation value (depending on 
   *   the current color mode)
   *   @param v3 blue or brightness value (depending on 
   *   the current color mode)
   *   @param [a] opacity of the background
   */
  background(v1: number, v2: number, v3: number, a?: number): void;

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
   *   @param image image created with loadImage() or 
   *   createImage(), to set as background (must be same 
   *   size as the sketch window)
   *   @param [a] opacity of the background
   */
  background(image: p5.Image, a?: number): void;

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
   *   colorMode() changes the way p5.js interprets color 
   *   data. By default, the parameters for fill(), 
   *   stroke(), background(), and color() are defined by 
   *   values between 0 and 255 using the RGB color 
   *   model. This is equivalent to setting 
   *   colorMode(RGB, 255). Setting colorMode(HSB) lets 
   *   you use the HSB system instead. By default, this 
   *   is colorMode(HSB, 360, 100, 100, 1). You can also 
   *   use HSL.  Note: existing color objects remember 
   *   the mode that they were created in, so you can 
   *   change modes as you like without affecting their 
   *   appearance.
   *
   *   @param mode either RGB or HSB, corresponding to 
   *   Red/Green/Blue and Hue/Saturation/Brightness (or 
   *   Lightness)
   *   @param [max1] range for the red or hue depending 
   *   on the current color mode, or range for all values
   *   @param [max2] range for the green or saturation 
   *   depending on the current color mode
   *   @param [max3] range for the blue or 
   *   brightness/lighntess depending on the current 
   *   color mode
   *   @param [maxA] range for the alpha
   */
  colorMode(mode: number|COLOR_MODE, max1?: number|UNKNOWN_P5_CONSTANT, max2?: number|UNKNOWN_P5_CONSTANT, max3?: number|UNKNOWN_P5_CONSTANT, maxA?: number|UNKNOWN_P5_CONSTANT): void;

  /**
   *   Sets the color used to fill shapes. For example, 
   *   if you run fill(204, 102, 0), all subsequent 
   *   shapes will be filled with orange. This color is 
   *   either specified in terms of the RGB or HSB color 
   *   depending on the current colorMode(). (The default 
   *   color space is RGB, with each value in the range 
   *   from 0 to 255).  If a single string argument is 
   *   provided, RGB, RGBA and Hex CSS color strings and 
   *   all named color strings are supported. A p5 Color 
   *   object can also be provided to set the fill color.
   *
   *   @param v1 gray value, red or hue value (depending 
   *   on the current color mode), or color Array, or CSS 
   *   color string
   *   @param [v2] green or saturation value (depending 
   *   on the current color mode)
   *   @param [v3] blue or brightness value (depending on 
   *   the current color mode)
   *   @param [a] opacity of the background
   */
  fill(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): void;

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
   *   If a single string argument is provided, RGB, RGBA 
   *   and Hex CSS color strings and all named color 
   *   strings are supported. A p5 Color object can also 
   *   be provided to set the stroke color.
   *
   *   @param v1 gray value, red or hue value (depending 
   *   on the current color mode), or color Array, or CSS 
   *   color string
   *   @param [v2] green or saturation value (depending 
   *   on the current color mode)
   *   @param [v3] blue or brightness value (depending on 
   *   the current color mode)
   *   @param [a] opacity of the background
   */
  stroke(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): void;

  // src/core/2d_primitives.js

  /**
   *   Draw an arc to the screen. If called with only a, 
   *   b, c, d, start, and stop, the arc will be drawn as 
   *   an open pie. If mode is provided, the arc will be 
   *   drawn either open, as a chord, or as a pie as 
   *   specified. The origin may be changed with the 
   *   ellipseMode() function. Note that drawing a full 
   *   circle (ex: 0 to TWO_PI) will appear blank because 
   *   0 and TWO_PI are the same position on the unit 
   *   circle. The best way to handle this is by using 
   *   the ellipse() function instead to create a closed 
   *   ellipse, and to use the arc() function only to 
   *   draw parts of an ellipse.
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
   *   the shape's width and height. If no height is 
   *   specified, the value of width is used for both the 
   *   width and height. The origin may be changed with 
   *   the ellipseMode() function.
   *
   *   @param x x-coordinate of the ellipse.
   *   @param y y-coordinate of the ellipse.
   *   @param w width of the ellipse.
   *   @param [h] height of the ellipse.
   */
  ellipse(x: number, y: number, w: number, h?: number): void;

  /**
   *   Draws an ellipse (oval) to the screen. An ellipse 
   *   with equal width and height is a circle. By 
   *   default, the first two parameters set the 
   *   location, and the third and fourth parameters set 
   *   the shape's width and height. If no height is 
   *   specified, the value of width is used for both the 
   *   width and height. The origin may be changed with 
   *   the ellipseMode() function.
   *
   *   @param x x-coordinate of the ellipse.
   *   @param y y-coordinate of the ellipse.
   *   @param z z-coordinate of the ellipse
   *   @param w width of the ellipse.
   *   @param [h] height of the ellipse.
   */
  ellipse(x: number, y: number, z: number, w: number, h?: number): void;

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
   *   is the vertical value for the point. The color of 
   *   the point is determined by the current stroke.
   *
   *   @param x the x-coordinate
   *   @param y the y-coordinate
   *   @return the p5 object
   */
  point(x: number, y: number): p5;

  /**
   *   Draw a quad. A quad is a quadrilateral, a four 
   *   sided polygon. It is similar to a rectangle, but 
   *   the angles between its edges are not constrained 
   *   to ninety degrees. The first pair of parameters 
   *   (x1,y1) sets the first vertex and the subsequent 
   *   pairs should proceed clockwise or 
   *   counter-clockwise around the defined shape.
   *
   *   @param x1 the x-coordinate of the first point
   *   @param y1 the y-coordinate of the first point
   *   @param x2 the x-coordinate of the second point
   *   @param y2 the y-coordinate of the second point
   *   @param x3 the x-coordinate of the third point
   *   @param y3 the y-coordinate of the third point
   *   @param x4 the x-coordinate of the fourth point
   *   @param y4 the y-coordinate of the fourth point
   */
  quad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;

  /**
   *   Draw a quad. A quad is a quadrilateral, a four 
   *   sided polygon. It is similar to a rectangle, but 
   *   the angles between its edges are not constrained 
   *   to ninety degrees. The first pair of parameters 
   *   (x1,y1) sets the first vertex and the subsequent 
   *   pairs should proceed clockwise or 
   *   counter-clockwise around the defined shape.
   *
   *   @param x1 the x-coordinate of the first point
   *   @param y1 the y-coordinate of the first point
   *   @param z1 the z-coordinate of the first point
   *   @param x2 the x-coordinate of the second point
   *   @param y2 the y-coordinate of the second point
   *   @param z2 the z-coordinate of the second point
   *   @param x3 the x-coordinate of the third point
   *   @param y3 the y-coordinate of the third point
   *   @param z3 the z-coordinate of the third point
   *   @param x4 the x-coordinate of the fourth point
   *   @param y4 the y-coordinate of the fourth point
   *   @param z4 the z-coordinate of the fourth point
   */
  quad(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;

  /**
   *   Draws a rectangle to the screen. A rectangle is a 
   *   four-sided shape with every angle at ninety 
   *   degrees. By default, the first two parameters set 
   *   the location of the upper-left corner, the third 
   *   sets the width, and the fourth sets the height. 
   *   The way these parameters are interpreted, however, 
   *   may be changed with the rectMode() function.  The 
   *   fifth, sixth, seventh and eighth parameters, if 
   *   specified, determine corner radius for the 
   *   top-right, top-left, lower-right and lower-left 
   *   corners, respectively. An omitted corner radius 
   *   parameter is set to the value of the previously 
   *   specified radius value in the parameter list.
   *
   *   @param x x-coordinate of the rectangle.
   *   @param y y-coordinate of the rectangle.
   *   @param w width of the rectangle.
   *   @param h height of the rectangle.
   *   @param [tl] optional radius of top-left corner.
   *   @param [tr] optional radius of top-right corner.
   *   @param [br] optional radius of bottom-right 
   *   corner.
   *   @param [bl] optional radius of bottom-left corner.
   */
  rect(x: number, y: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): void;

  /**
   *   Draws a rectangle to the screen. A rectangle is a 
   *   four-sided shape with every angle at ninety 
   *   degrees. By default, the first two parameters set 
   *   the location of the upper-left corner, the third 
   *   sets the width, and the fourth sets the height. 
   *   The way these parameters are interpreted, however, 
   *   may be changed with the rectMode() function.  The 
   *   fifth, sixth, seventh and eighth parameters, if 
   *   specified, determine corner radius for the 
   *   top-right, top-left, lower-right and lower-left 
   *   corners, respectively. An omitted corner radius 
   *   parameter is set to the value of the previously 
   *   specified radius value in the parameter list.
   *
   *   @param x x-coordinate of the rectangle.
   *   @param y y-coordinate of the rectangle.
   *   @param z z-coordinate of the rectangle.
   *   @param w width of the rectangle.
   *   @param h height of the rectangle.
   *   @param [tl] optional radius of top-left corner.
   *   @param [tr] optional radius of top-right corner.
   *   @param [br] optional radius of bottom-right 
   *   corner.
   *   @param [bl] optional radius of bottom-left corner.
   */
  rect(x: number, y: number, z: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): void;

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

  // src/core/attributes.js

  // TODO: Fix ellipseMode() errors in src/core/attributes.js, line 14:
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

  // TODO: Fix rectMode() errors in src/core/attributes.js, line 99:
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

  // TODO: Fix strokeCap() errors in src/core/attributes.js, line 185:
  //
  //   param "cap" has invalid type: Number/Constant
  //
  // strokeCap(cap: any): p5;

  // TODO: Fix strokeJoin() errors in src/core/attributes.js, line 215:
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
   *   inside preload (loadImage, loadJSON, loadFont, 
   *   loadStrings, etc).
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
   *   execution.  Note: Variables declared within 
   *   setup() are not accessible within other functions, 
   *   including draw().
   *
   */
  setup(): void;

  /**
   *   Called directly after setup(), the draw() function 
   *   continuously executes the lines of code contained 
   *   inside its block until the program is stopped or 
   *   noLoop() is called. Note if noLoop() is called in 
   *   setup(), draw() will still be executed once before 
   *   stopping. draw() is called automatically and 
   *   should never be called explicitly.  It should 
   *   always be controlled with noLoop(), redraw() and 
   *   loop(). After noLoop() stops the code in draw() 
   *   from executing, redraw() causes the code inside 
   *   draw() to execute once, and loop() will cause the 
   *   code inside draw() to resume executing 
   *   continuously. 
   * 
   *  
   *   The number of times draw() executes in each second 
   *   may be controlled with the frameRate() function. 
   * 
   *  
   *   There can only be one draw() function for each 
   *   sketch, and draw() must exist if you want the code 
   *   to run continuously, or to process events such as 
   *   mousePressed(). Sometimes, you might have an empty 
   *   call to draw() in your program, as shown in the 
   *   above example. 
   * 
   *  
   *   It is important to note that the drawing 
   *   coordinate system will be reset at the beginning 
   *   of each draw() call. If any transformations are 
   *   performed within draw() (ex: scale, rotate, 
   *   translate, their effects will be undone at the 
   *   beginning of draw(), so transformations will not 
   *   accumulate over time. On the other hand, styling 
   *   applied (ex: fill, stroke, etc) will remain in 
   *   effect.
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

  // src/core/curves.js

  /**
   *   Draws a cubic Bezier curve on the screen. These 
   *   curves are defined by a series of anchor and 
   *   control points. The first two parameters specify 
   *   the first anchor point and the last two parameters 
   *   specify the other anchor point, which become the 
   *   first and last points on the curve. The middle 
   *   parameters specify the two control points which 
   *   define the shape of the curve. Approximately 
   *   speaking, control points "pull" the curve towards 
   *   them.Bezier curves were developed by French 
   *   automotive engineer Pierre Bezier, and are 
   *   commonly used in computer graphics to define 
   *   gently sloping curves. See also curve().
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
   */
  bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;

  /**
   *   Draws a cubic Bezier curve on the screen. These 
   *   curves are defined by a series of anchor and 
   *   control points. The first two parameters specify 
   *   the first anchor point and the last two parameters 
   *   specify the other anchor point, which become the 
   *   first and last points on the curve. The middle 
   *   parameters specify the two control points which 
   *   define the shape of the curve. Approximately 
   *   speaking, control points "pull" the curve towards 
   *   them.Bezier curves were developed by French 
   *   automotive engineer Pierre Bezier, and are 
   *   commonly used in computer graphics to define 
   *   gently sloping curves. See also curve().
   *
   *   @param z1 z-coordinate for the first anchor point
   *   @param z2 z-coordinate for the first control point
   *   @param z3 z-coordinate for the first anchor point
   *   @param z4 z-coordinate for the first control point
   */
  bezier(z1: number, z2: number, z3: number, z4: number): void;

  /**
   *   Evaluates the Bezier at position t for points a, 
   *   b, c, d. The parameters a and d are the first and 
   *   last points on the curve, and b and c are the 
   *   control points. The final parameter t varies 
   *   between 0 and 1. This can be done once with the x 
   *   coordinates and a second time with the y 
   *   coordinates to get the location of a bezier curve 
   *   at t.
   *
   *   @param a coordinate of first point on the curve
   *   @param b coordinate of first control point
   *   @param c coordinate of second control point
   *   @param d coordinate of second point on the curve
   *   @param t value between 0 and 1
   *   @return the value of the Bezier at position t
   */
  bezierPoint(a: number, b: number, c: number, d: number, t: number): number;

  /**
   *   Evaluates the tangent to the Bezier at position t 
   *   for points a, b, c, d. The parameters a and d are 
   *   the first and last points on the curve, and b and 
   *   c are the control points. The final parameter t 
   *   varies between 0 and 1.
   *
   *   @param a coordinate of first point on the curve
   *   @param b coordinate of first control point
   *   @param c coordinate of second control point
   *   @param d coordinate of second point on the curve
   *   @param t value between 0 and 1
   *   @return the tangent at position t
   */
  bezierTangent(a: number, b: number, c: number, d: number, t: number): number;

  /**
   *   Draws a curved line on the screen between two 
   *   points, given as the middle four parameters. The 
   *   first two parameters are a control point, as if 
   *   the curve came from this point even though it's 
   *   not drawn. The last two parameters similarly 
   *   describe the other control point.  Longer curves 
   *   can be created by putting a series of curve() 
   *   functions together or using curveVertex(). An 
   *   additional function called curveTightness() 
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
   */
  curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;

  /**
   *   Draws a curved line on the screen between two 
   *   points, given as the middle four parameters. The 
   *   first two parameters are a control point, as if 
   *   the curve came from this point even though it's 
   *   not drawn. The last two parameters similarly 
   *   describe the other control point.  Longer curves 
   *   can be created by putting a series of curve() 
   *   functions together or using curveVertex(). An 
   *   additional function called curveTightness() 
   *   provides control for the visual quality of the 
   *   curve. The curve() function is an implementation 
   *   of Catmull-Rom splines.
   *
   *   @param z1 z-coordinate for the beginning control 
   *   point
   *   @param z2 z-coordinate for the first point
   *   @param z3 z-coordinate for the second point
   *   @param z4 z-coordinate for the ending control 
   *   point
   */
  curve(z1: number, z2: number, z3: number, z4: number): void;

  /**
   *   Modifies the quality of forms created with curve() 
   *   and curveVertex(). The parameter tightness 
   *   determines how the curve fits to the vertex 
   *   points. The value 0.0 is the default value for 
   *   tightness (this value defines the curves to be 
   *   Catmull-Rom splines) and the value 1.0 connects 
   *   all the points with straight lines. Values within 
   *   the range -5.0 and 5.0 will deform the curves but 
   *   will leave them recognizable and as values 
   *   increase in magnitude, they will continue to 
   *   deform.
   *
   *   @param amount of deformation from the original 
   *   vertices
   *   @return the p5 object
   */
  curveTightness(amount: number): object;

  /**
   *   Evaluates the curve at position t for points a, b, 
   *   c, d. The parameter t varies between 0 and 1, a 
   *   and d are points on the curve, and b and c are the 
   *   control points. This can be done once with the x 
   *   coordinates and a second time with the y 
   *   coordinates to get the location of a curve at t.
   *
   *   @param a coordinate of first point on the curve
   *   @param b coordinate of first control point
   *   @param c coordinate of second control point
   *   @param d coordinate of second point on the curve
   *   @param t value between 0 and 1
   *   @return bezier value at position t
   */
  curvePoint(a: number, b: number, c: number, d: number, t: number): number;

  /**
   *   Evaluates the tangent to the curve at position t 
   *   for points a, b, c, d. The parameter t varies 
   *   between 0 and 1, a and d are points on the curve, 
   *   and b and c are the control points.
   *
   *   @param a coordinate of first point on the curve
   *   @param b coordinate of first control point
   *   @param c coordinate of second control point
   *   @param d coordinate of second point on the curve
   *   @param t value between 0 and 1
   *   @return the tangent at position t
   */
  curveTangent(a: number, b: number, c: number, d: number, t: number): number;

  // src/core/environment.js

  /**
   *   The print() function writes to the console area of 
   *   your browser. This function is often helpful for 
   *   looking at the data a program is producing. This 
   *   function creates a new line of text for each call 
   *   to the function. Individual elements can be 
   *   separated with quotes ("") and joined with the 
   *   addition operator (+).  While print() is similar 
   *   to console.log(), it does not directly map to it 
   *   in order to simulate easier to understand behavior 
   *   than console.log(). Due to this, it is slower. For 
   *   fastest results, use console.log().
   *
   *   @param contents any combination of Number, String, 
   *   Object, Boolean, Array to print
   */
  print(contents: any): void;

  /**
   *   The system variable frameCount contains the number 
   *   of frames that have been displayed since the 
   *   program started. Inside setup() the value is 0, 
   *   after the first iteration of draw it is 1, etc.
   *
   */
  frameCount: any;

  /**
   *   Confirms if the window a p5.js program is in is 
   *   "focused," meaning that the sketch will accept 
   *   mouse or keyboard input. This variable is "true" 
   *   if the window is focused and "false" if not.
   *
   */
  focused: any;

  // TODO: Fix cursor() errors in src/core/environment.js, line 111:
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
   *   setFrameRate(val).  Calling frameRate() with no 
   *   arguments returns the current framerate. This is 
   *   the same as getFrameRate(). 
   * 
   *  
   *   Calling frameRate() with arguments that are not of 
   *   the type numbers or are non positive also returns 
   *   current framerate.
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
  windowResized(): void;

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
   *   @param [val] whether the sketch should be in 
   *   fullscreen mode or not
   *   @return current fullscreen state
   */
  fullscreen(val?: boolean): boolean;

  /**
   *   Sets the pixel scaling for high pixel density 
   *   displays. By default pixel density is set to match 
   *   display density, call pixelDensity(1) to turn this 
   *   off. Calling pixelDensity() with no arguments 
   *   returns the current pixel density of the sketch.
   *
   *   @param [val] whether or how much the sketch should 
   *   scale
   *   @return current pixel density of the sketch
   */
  pixelDensity(val?: number): number;

  /**
   *   Returns the pixel density of the current display 
   *   the sketch is running on.
   *
   *   @return current pixel density of the display
   */
  displayDensity(): number;

  /**
   *   Gets the current URL.
   *
   *   @return url
   */
  getURL(): string;

  /**
   *   Gets the current URL path as an array.
   *
   *   @return path components
   */
  getURLPath(): any[];

  /**
   *   Gets the current URL params as an Object.
   *
   *   @return URL params
   */
  getURLParams(): object;

  // src/core/rendering.js

  /**
   *   Creates a canvas element in the document, and sets 
   *   the dimensions of it in pixels. This method should 
   *   be called only once at the start of setup. Calling 
   *   createCanvas more than once in a sketch will 
   *   result in very unpredicable behavior. If you want 
   *   more than one drawing canvas you could use 
   *   createGraphics (hidden by default but it can be 
   *   shown).  The system variables width and height are 
   *   set by the parameters passed to this function. If 
   *   createCanvas() is not used, the window will be 
   *   given a default size of 100x100 pixels. 
   * 
   *  
   *   For more ways to position the canvas, see the  
   *   positioning the canvas wiki page.
   *
   *   @param w width of the canvas
   *   @param h height of the canvas
   *   @param [renderer] 'p2d' | 'webgl'
   *   @return canvas generated
   */
  createCanvas(w: number, h: number, renderer?: string): object;

  /**
   *   Resizes the canvas to given width and height. The 
   *   canvas will be cleared and draw will be called 
   *   immediately, allowing the sketch to re-render 
   *   itself in the resized canvas.
   *
   */
  resizeCanvas(): void;

  /**
   *   Removes the default canvas for a p5 sketch that 
   *   doesn't require a canvas
   *
   */
  noCanvas(): void;

  /**
   *   Creates and returns a new p5.Renderer object. Use 
   *   this class if you need to draw into an off-screen 
   *   graphics buffer. The two parameters define the 
   *   width and height in pixels.
   *
   *   @param w width of the offscreen graphics buffer
   *   @param h height of the offscreen graphics buffer
   *   @param renderer either 'p2d' or 'webgl'. undefined 
   *   defaults to p2d
   *   @return offscreen graphics buffer
   */
  createGraphics(w: number, h: number, renderer: string): object;

  // TODO: Fix blendMode() errors in src/core/rendering.js, line 211:
  //
  //   param "mode" has invalid type: String/Constant
  //
  // blendMode(mode: any): void;

  // src/core/structure.js

  /**
   *   Stops p5.js from continuously executing the code 
   *   within draw(). If loop() is called, the code in 
   *   draw() begins to run continuously again. If using 
   *   noLoop() in setup(), it should be the last line 
   *   inside the block.  When noLoop() is used, it's not 
   *   possible to manipulate or access the screen inside 
   *   event handling functions such as mousePressed() or 
   *   keyPressed(). Instead, use those functions to call 
   *   redraw() or loop(), which will run draw(), which 
   *   can update the screen properly. This means that 
   *   when noLoop() has been called, no drawing can 
   *   happen, and functions like saveFrame() or 
   *   loadPixels() may not be used. 
   * 
   *  
   *   Note that if the sketch is resized, redraw() will 
   *   be called to update the sketch, even after 
   *   noLoop() has been specified. Otherwise, the sketch 
   *   would enter an odd state until loop() was called.
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
   *   occurs.  In structuring a program, it only makes 
   *   sense to call redraw() within events such as 
   *   mousePressed(). This is because redraw() does not 
   *   run draw() immediately (it only sets a flag that 
   *   indicates an update is needed). 
   * 
   *  
   *   The redraw() function does not work properly when 
   *   called inside draw(). To enable/disable 
   *   animations, use loop() and noLoop().
   *
   */
  redraw(): void;

  // src/core/transform.js

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
   *   DEGREES.  Objects are always rotated around their 
   *   relative position to the origin and positive 
   *   numbers rotate objects in a clockwise direction. 
   *   Transformations apply to everything that happens 
   *   after and subsequent calls to the function 
   *   accumulates the effect. For example, calling 
   *   rotate(HALF_PI) and then rotate(HALF_PI) is the 
   *   same as rotate(PI). All tranformations are reset 
   *   when draw() begins again. 
   * 
   *  
   *   Technically, rotate() multiplies the current 
   *   transformation matrix by a rotation matrix. This 
   *   function can be further controlled by the push() 
   *   and pop().
   *
   *   @param angle the angle of rotation, specified in 
   *   radians or degrees, depending on current angleMode
   */
  rotate(angle: number): void;

  /**
   *   Rotates a shape the amount specified by the angle 
   *   parameter. This function accounts for angleMode, 
   *   so angles can be entered in either RADIANS or 
   *   DEGREES.  Objects are always rotated around their 
   *   relative position to the origin and positive 
   *   numbers rotate objects in a clockwise direction. 
   *   Transformations apply to everything that happens 
   *   after and subsequent calls to the function 
   *   accumulates the effect. For example, calling 
   *   rotate(HALF_PI) and then rotate(HALF_PI) is the 
   *   same as rotate(PI). All tranformations are reset 
   *   when draw() begins again. 
   * 
   *  
   *   Technically, rotate() multiplies the current 
   *   transformation matrix by a rotation matrix. This 
   *   function can be further controlled by the push() 
   *   and pop().
   *
   *   @param rad angle in radians
   *   @param axis axis to rotate around
   */
  rotate(rad: number, axis: p5.Vector|any[]): void;

  // TODO: Fix rotateX() errors in src/core/transform.js, line 125:
  //
  //   return has invalid type: [type]
  //
  // rotateX(rad: number): any;

  // TODO: Fix rotateY() errors in src/core/transform.js, line 151:
  //
  //   return has invalid type: [type]
  //
  // rotateY(rad: number): any;

  // TODO: Fix rotateZ() errors in src/core/transform.js, line 177:
  //
  //   return has invalid type: [type]
  //
  // rotateZ(rad: number): any;

  /**
   *   Increases or decreases the size of a shape by 
   *   expanding and contracting vertices. Objects always 
   *   scale from their relative origin to the coordinate 
   *   system. Scale values are specified as decimal 
   *   percentages. For example, the function call 
   *   scale(2.0) increases the dimension of a shape by 
   *   200%.  Transformations apply to everything that 
   *   happens after and subsequent calls to the function 
   *   multiply the effect. For example, calling 
   *   scale(2.0) and then scale(1.5) is the same as 
   *   scale(3.0). If scale() is called within draw(), 
   *   the transformation is reset when the loop begins 
   *   again. 
   * 
   *  
   *   Using this function with the z parameter is only 
   *   available in WEBGL mode. This function can be 
   *   further controlled with push() and pop().
   *
   *   @param s percent to scale the object, or 
   *   percentage to scale the object in the x-axis if 
   *   multiple arguments are given
   *   @param [y] percent to scale the object in the 
   *   y-axis
   *   @param [z] percent to scale the object in the 
   *   z-axis (webgl only)
   *   @return the p5 object
   */
  scale(s: number|p5.Vector|any[], y?: number, z?: number): p5;

  /**
   *   Shears a shape around the x-axis the amount 
   *   specified by the angle parameter. Angles should be 
   *   specified in the current angleMode. Objects are 
   *   always sheared around their relative position to 
   *   the origin and positive numbers shear objects in a 
   *   clockwise direction.  Transformations apply to 
   *   everything that happens after and subsequent calls 
   *   to the function accumulates the effect. For 
   *   example, calling shearX(PI/2) and then 
   *   shearX(PI/2) is the same as shearX(PI). If 
   *   shearX() is called within the draw(), the 
   *   transformation is reset when the loop begins 
   *   again. 
   * 
   *  
   *   Technically, shearX() multiplies the current 
   *   transformation matrix by a rotation matrix. This 
   *   function can be further controlled by the push() 
   *   and pop() functions.
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
   *   clockwise direction.  Transformations apply to 
   *   everything that happens after and subsequent calls 
   *   to the function accumulates the effect. For 
   *   example, calling shearY(PI/2) and then 
   *   shearY(PI/2) is the same as shearY(PI). If 
   *   shearY() is called within the draw(), the 
   *   transformation is reset when the loop begins 
   *   again. 
   * 
   *  
   *   Technically, shearY() multiplies the current 
   *   transformation matrix by a rotation matrix. This 
   *   function can be further controlled by the push() 
   *   and pop() functions.
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
   *   up/down translation.  Transformations are 
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
   *   @param [z] forward/backward translation (webgl 
   *   only)
   *   @return the p5 object
   */
  translate(x: number, y: number, z?: number): p5;

  // src/core/vertex.js

  /**
   *   Use the beginContour() and endContour() functions 
   *   to create negative shapes within shapes such as 
   *   the center of the letter 'O'. beginContour() 
   *   begins recording vertices for the shape and 
   *   endContour() stops recording. The vertices that 
   *   define a negative shape must "wind" in the 
   *   opposite direction from the exterior shape. First 
   *   draw vertices for the exterior clockwise order, 
   *   then for internal shapes, draw vertices shape in 
   *   counter-clockwise.  These functions can only be 
   *   used within a beginShape()/endShape() pair and 
   *   transformations such as translate(), rotate(), and 
   *   scale() do not work within a 
   *   beginContour()/endContour() pair. It is also not 
   *   possible to use other shapes, such as ellipse() or 
   *   rect() within.
   *
   *   @return the p5 object
   */
  beginContour(): object;

  // TODO: Fix beginShape() errors in src/core/vertex.js, line 66:
  //
  //   param "kind" has invalid type: Number/Constant
  //
  // beginShape(kind: any): object;

  /**
   *   Specifies vertex coordinates for Bezier curves. 
   *   Each call to bezierVertex() defines the position 
   *   of two control points and one anchor point of a 
   *   Bezier curve, adding a new segment to a line or 
   *   shape.  The first time bezierVertex() is used 
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
   *   parameter specified to beginShape().  The first 
   *   and last points in a series of curveVertex() lines 
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
   *   Use the beginContour() and endContour() functions 
   *   to create negative shapes within shapes such as 
   *   the center of the letter 'O'. beginContour() 
   *   begins recording vertices for the shape and 
   *   endContour() stops recording. The vertices that 
   *   define a negative shape must "wind" in the 
   *   opposite direction from the exterior shape. First 
   *   draw vertices for the exterior clockwise order, 
   *   then for internal shapes, draw vertices shape in 
   *   counter-clockwise.  These functions can only be 
   *   used within a beginShape()/endShape() pair and 
   *   transformations such as translate(), rotate(), and 
   *   scale() do not work within a 
   *   beginContour()/endContour() pair. It is also not 
   *   possible to use other shapes, such as ellipse() or 
   *   rect() within.
   *
   *   @return the p5 object
   */
  endContour(): object;

  // TODO: Fix endShape() errors in src/core/vertex.js, line 405:
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

  // src/events/acceleration.js

  /**
   *   The system variable deviceOrientation always 
   *   contains the orientation of the device. The value 
   *   of this variable will either be set 'landscape' or 
   *   'portrait'. If no data is available it will be set 
   *   to 'undefined'.
   *
   */
  deviceOrientation: any;

  /**
   *   The system variable accelerationX always contains 
   *   the acceleration of the device along the x axis. 
   *   Value is represented as meters per second squared.
   *
   */
  accelerationX: any;

  /**
   *   The system variable accelerationY always contains 
   *   the acceleration of the device along the y axis. 
   *   Value is represented as meters per second squared.
   *
   */
  accelerationY: any;

  /**
   *   The system variable accelerationZ always contains 
   *   the acceleration of the device along the z axis. 
   *   Value is represented as meters per second squared.
   *
   */
  accelerationZ: any;

  /**
   *   The system variable pAccelerationX always contains 
   *   the acceleration of the device along the x axis in 
   *   the frame previous to the current frame. Value is 
   *   represented as meters per second squared.
   *
   */
  pAccelerationX: any;

  /**
   *   The system variable pAccelerationY always contains 
   *   the acceleration of the device along the y axis in 
   *   the frame previous to the current frame. Value is 
   *   represented as meters per second squared.
   *
   */
  pAccelerationY: any;

  /**
   *   The system variable pAccelerationZ always contains 
   *   the acceleration of the device along the z axis in 
   *   the frame previous to the current frame. Value is 
   *   represented as meters per second squared.
   *
   */
  pAccelerationZ: any;

  /**
   *   The system variable rotationX always contains the 
   *   rotation of the device along the x axis. Value is 
   *   represented as 0 to +/-180 degrees.  Note: The 
   *   order the rotations are called is important, ie. 
   *   if used together, it must be called in the order 
   *   Z-X-Y or there might be unexpected behaviour.
   *
   */
  rotationX: any;

  /**
   *   The system variable rotationY always contains the 
   *   rotation of the device along the y axis. Value is 
   *   represented as 0 to +/-90 degrees.  Note: The 
   *   order the rotations are called is important, ie. 
   *   if used together, it must be called in the order 
   *   Z-X-Y or there might be unexpected behaviour.
   *
   */
  rotationY: any;

  /**
   *   The system variable rotationZ always contains the 
   *   rotation of the device along the z axis. Value is 
   *   represented as 0 to 359 degrees.  Unlike rotationX 
   *   and rotationY, this variable is available for 
   *   devices with a built-in compass only. 
   * 
   *  
   *   Note: The order the rotations are called is 
   *   important, ie. if used together, it must be called 
   *   in the order Z-X-Y or there might be unexpected 
   *   behaviour.
   *
   */
  rotationZ: any;

  /**
   *   The system variable pRotationX always contains the 
   *   rotation of the device along the x axis in the 
   *   frame previous to the current frame. Value is 
   *   represented as 0 to +/-180 degrees.  pRotationX 
   *   can also be used with rotationX to determine the 
   *   rotate direction of the device along the X-axis.
   *
   */
  pRotationX: any;

  /**
   *   The system variable pRotationY always contains the 
   *   rotation of the device along the y axis in the 
   *   frame previous to the current frame. Value is 
   *   represented as 0 to +/-90 degrees.  pRotationY can 
   *   also be used with rotationY to determine the 
   *   rotate direction of the device along the Y-axis.
   *
   */
  pRotationY: any;

  /**
   *   The system variable pRotationZ always contains the 
   *   rotation of the device along the z axis in the 
   *   frame previous to the current frame. Value is 
   *   represented as 0 to 359 degrees.  pRotationZ can 
   *   also be used with rotationZ to determine the 
   *   rotate direction of the device along the Z-axis.
   *
   */
  pRotationZ: any;

  /**
   *   The setMoveThreshold() function is used to set the 
   *   movement threshold for the deviceMoved() function. 
   *   The default threshold is set to 0.5.
   *
   *   @param value The threshold value
   */
  setMoveThreshold(value: number): void;

  /**
   *   The setShakeThreshold() function is used to set 
   *   the movement threshold for the deviceShaken() 
   *   function. The default threshold is set to 30.
   *
   *   @param value The threshold value
   */
  setShakeThreshold(value: number): void;

  /**
   *   The deviceMoved() function is called when the 
   *   device is moved by more than the threshold value 
   *   along X, Y or Z axis. The default threshold is set 
   *   to 0.5.
   *
   */
  deviceMoved(): void;

  /**
   *   The deviceTurned() function is called when the 
   *   device rotates by more than 90 degrees 
   *   continuously.  The axis that triggers the 
   *   deviceTurned() method is stored in the turnAxis 
   *   variable. The deviceTurned() method can be locked 
   *   to trigger on any axis: X, Y or Z by comparing the 
   *   turnAxis variable to 'X', 'Y' or 'Z'.
   *
   */
  deviceTurned(): void;

  /**
   *   The deviceShaken() function is called when the 
   *   device total acceleration changes of accelerationX 
   *   and accelerationY values is more than the 
   *   threshold value. The default threshold is set to 
   *   30.
   *
   */
  deviceShaken(): void;

  // src/events/keyboard.js

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
   *  
   *   Browsers may have different default behaviors 
   *   attached to various key events. To prevent any 
   *   default behavior for this event, add "return 
   *   false" to the end of the method.
   *
   */
  keyPressed(): void;

  /**
   *   The keyReleased() function is called once every 
   *   time a key is released. See key and keyCode for 
   *   more information. Browsers may have different 
   *   default behaviors attached to various key events. 
   *   To prevent any default behavior for this event, 
   *   add "return false" to the end of the method.
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
   *   calls to keyTyped() (and keyReleased() as well). 
   *   The rate of repeat is set by the operating system 
   *   and how each computer is configured.
   * 
   *  
   *   Browsers may have different default behaviors 
   *   attached to various key events. To prevent any 
   *   default behavior for this event, add "return 
   *   false" to the end of the method.
   *
   */
  keyTyped(): void;

  /**
   *   The keyIsDown() function checks if the key is 
   *   currently down, i.e. pressed. It can be used if 
   *   you have an object that moves, and you want 
   *   several keys to be able to affect its behaviour 
   *   simultaneously, such as moving a sprite 
   *   diagonally. You can put in any number representing 
   *   the keyCode of the key, or use any of the variable 
   *   keyCode names listed here.
   *
   *   @param code The key to check for.
   *   @return whether key is down or not
   */
  keyIsDown(code: number): boolean;

  // src/events/mouse.js

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
   *   The system variable winMouseX always contains the 
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
   *   was pressed last. Warning: different browsers may 
   *   track mouseButton differently.
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
   *   default behavior for this event, add "return 
   *   false" to the end of the method.
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
   *   event, add "return false" to the end of the 
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
   *   this event, add "return false" to the end of the 
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
   *   behavior for this event, add "return false" to the 
   *   end of the method.
   *
   */
  mouseReleased(): void;

  /**
   *   The mouseClicked() function is called once after a 
   *   mouse button has been pressed and then released. 
   *   Browsers may have different default behaviors 
   *   attached to various mouse events. To prevent any 
   *   default behavior for this event, add "return 
   *   false" to the end of the method.
   *
   */
  mouseClicked(): void;

  /**
   *   The function mouseWheel() is executed every time a 
   *   vertical mouse wheel event is detected either 
   *   triggered by an actual mouse wheel or by a 
   *   touchpad. The event.delta property returns the 
   *   amount the mouse wheel have scrolled. The values 
   *   can be positive or negative depending on the 
   *   scroll direction (on OS X with "natural" scrolling 
   *   enabled, the signs are inverted).
   * 
   *  
   *   Browsers may have different default behaviors 
   *   attached to various mouse events. To prevent any 
   *   default behavior for this event, add "return 
   *   false" to the end of the method.
   * 
   *  
   *   Due to the current support of the "wheel" event on 
   *   Safari, the function may only work as expected if 
   *   "return false" is included while using Safari.
   *
   */
  mouseWheel(): void;

  // src/events/touch.js

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
   *   vertical position of one finger, relative to (0, 
   *   0) of the canvas. This is best used for single 
   *   touch interactions. For multi-touch interactions, 
   *   use the touches[] array.
   *
   */
  touchY: any;

  /**
   *   The system variable ptouchX always contains the 
   *   horizontal position of one finger, relative to (0, 
   *   0) of the canvas, in the frame previous to the 
   *   current frame.
   *
   */
  ptouchX: any;

  /**
   *   The system variable ptouchY always contains the 
   *   vertical position of one finger, relative to (0, 
   *   0) of the canvas, in the frame previous to the 
   *   current frame.
   *
   */
  ptouchY: any;

  // TODO: Property "touches[]", defined in src/events/touch.js, line 58, is not a valid JS symbol name

  /**
   *   The boolean system variable touchIsDown is true if 
   *   the screen is touched and false if not.
   *
   */
  touchIsDown: any;

  /**
   *   The touchStarted() function is called once after 
   *   every time a touch is registered. If no 
   *   touchStarted() function is defined, the 
   *   mousePressed() function will be called instead if 
   *   it is defined. Browsers may have different default 
   *   behaviors attached to various touch events. To 
   *   prevent any default behavior for this event, add 
   *   "return false" to the end of the method.
   *
   */
  touchStarted(): void;

  /**
   *   The touchMoved() function is called every time a 
   *   touch move is registered. If no touchMoved() 
   *   function is defined, the mouseDragged() function 
   *   will be called instead if it is defined. Browsers 
   *   may have different default behaviors attached to 
   *   various touch events. To prevent any default 
   *   behavior for this event, add "return false" to the 
   *   end of the method.
   *
   */
  touchMoved(): void;

  /**
   *   The touchEnded() function is called every time a 
   *   touch ends. If no touchEnded() function is 
   *   defined, the mouseReleased() function will be 
   *   called instead if it is defined. Browsers may have 
   *   different default behaviors attached to various 
   *   touch events. To prevent any default behavior for 
   *   this event, add "return false" to the end of the 
   *   method.
   *
   */
  touchEnded(): void;

  // src/image/image.js

  /**
   *   Creates a new p5.Image (the datatype for storing 
   *   images). This provides a fresh buffer of pixels to 
   *   play with. Set the size of the buffer with the 
   *   width and height parameters.  .pixels gives access 
   *   to an array containing the values for all the 
   *   pixels in the display window. These values are 
   *   numbers. This array is the size (including an 
   *   appropriate factor for the pixelDensity) of the 
   *   display window x4, representing the R, G, B, A 
   *   values in order for each pixel, moving from left 
   *   to right across each row, then down each column. 
   *   See .pixels for more info. It may also be simpler 
   *   to use set() or get(). 
   * 
   *  
   *   Before accessing the pixels of an image, the data 
   *   must loaded with the loadPixels() function. After 
   *   the array data has been modified, the 
   *   updatePixels() function must be run to update the 
   *   changes.
   *
   *   @param width width in pixels
   *   @param height height in pixels
   *   @return the p5.Image object
   */
  createImage(width: number, height: number): p5.Image;

  // TODO: Fix saveCanvas() errors in src/image/image.js, line 97:
  //
  //   param "canvas" has invalid type: [selectedCanvas]
  //   param "filename" has invalid type: [String]
  //   param "extension" has invalid type: [String]
  //
  // saveCanvas(canvas: any, filename: any, extension: any): void;

  /**
   *   Capture a sequence of frames that can be used to 
   *   create a movie. Accepts a callback. For example, 
   *   you may wish to send the frames to a server where 
   *   they can be stored or converted into a movie. If 
   *   no callback is provided, the browser will pop up 
   *   save dialogues in an attempt to download all of 
   *   the images that have just been created. With the 
   *   callback provided the image data isn't saved by 
   *   default but instead passed as an argument to the 
   *   callback function as an array of objects, with the 
   *   size of array equal to the total number of frames.
   *
   *   @param extension 'jpg' or 'png'
   *   @param duration Duration in seconds to save the 
   *   frames for.
   *   @param framerate Framerate to save the frames in.
   *   @param [callback] A callback function that will be 
   *   executed to handle the image data. This function 
   *   should accept an array as argument. The array will 
   *   contain the specified number of frames of objects. 
   *   Each object has three properties: imageData - an 
   *   image/octet-stream, filename and extension.
   */
  saveFrames(filename: string, extension: string, duration: number, framerate: number, callback?: Function): void;

  // src/image/loading_displaying.js

  /**
   *   Loads an image from a path and creates a p5.Image 
   *   from it.  The image may not be immediately 
   *   available for rendering If you want to ensure that 
   *   the image is ready before doing anything with it, 
   *   place the loadImage() call in preload(). You may 
   *   also supply a callback function to handle the 
   *   image when it's ready. 
   * 
   *  
   *   The path to the image should be relative to the 
   *   HTML file that links in your sketch. Loading an 
   *   from a URL or other remote location may be blocked 
   *   due to your browser's built-in security.
   *
   *   @param path Path of the image to be loaded
   *   @param [successCallback] Function to be called 
   *   once the image is loaded. Will be passed the 
   *   p5.Image.
   *   @param [failureCallback] called with event error 
   *   if the image fails to load.
   *   @return the p5.Image object
   */
  loadImage(path: string, successCallback?: (p1: p5.Image) => any, failureCallback?: (p1: Event) => any): p5.Image;

  /**
   *   Draw an image to the main canvas of the p5js 
   *   sketch
   *
   *   @param img the image to display
   *   @param [sx] The X coordinate of the top left 
   *   corner of the sub-rectangle of the source image to 
   *   draw into the destination canvas.
   *   @param [sy] The Y coordinate of the top left 
   *   corner of the sub-rectangle of the source image to 
   *   draw into the destination canvas.
   *   @param [sWidth] The width of the sub-rectangle of 
   *   the source image to draw into the destination 
   *   canvas.
   *   @param [sHeight] The height of the sub-rectangle 
   *   of the source image to draw into the destination 
   *   context.
   *   @param [dx] The X coordinate in the destination 
   *   canvas at which to place the top-left corner of 
   *   the source image.
   *   @param [dy] The Y coordinate in the destination 
   *   canvas at which to place the top-left corner of 
   *   the source image.
   *   @param [dWidth] The width to draw the image in the 
   *   destination canvas. This allows scaling of the 
   *   drawn image.
   *   @param [dHeight] The height to draw the image in 
   *   the destination canvas. This allows scaling of the 
   *   drawn image.
   */
  image(img: p5.Image, sx?: number, sy?: number, sWidth?: number, sHeight?: number, dx?: number, dy?: number, dWidth?: number, dHeight?: number): void;

  /**
   *   Sets the fill value for displaying images. Images 
   *   can be tinted to specified colors or made 
   *   transparent by including an alpha value.  To apply 
   *   transparency to an image without affecting its 
   *   color, use white as the tint color and specify an 
   *   alpha value. For instance, tint(255, 128) will 
   *   make an image 50% transparent (assuming the 
   *   default alpha range of 0-255, which can be changed 
   *   with colorMode()). 
   * 
   *  
   *   The value for the gray parameter must be less than 
   *   or equal to the current maximum value as specified 
   *   by colorMode(). The default maximum value is 255.
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
   *   opposite corner. 
   * 
   *  
   *   imageMode(CENTER) interprets the second and third 
   *   parameters of image() as the image's center point. 
   *   If two additional parameters are specified, they 
   *   are used to set the image's width and height.
   *
   *   @param m The mode: either CORNER, CORNERS, or 
   *   CENTER.
   */
  imageMode(m: string): void;

  // src/image/pixels.js

  // TODO: Property "pixels[]", defined in src/image/pixels.js, line 14, is not a valid JS symbol name

  /**
   *   Copies a region of pixels from one image to 
   *   another, using a specified blend mode to do the 
   *   operation. Available blend modes are: BLEND | 
   *   DARKEST | LIGHTEST | DIFFERENCE | MULTIPLY| 
   *   EXCLUSION | SCREEN | REPLACE | OVERLAY | 
   *   HARD_LIGHT | SOFT_LIGHT | DODGE | BURN | ADD | 
   *   NORMAL
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
   *   @param blendMode the blend mode
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
   *   Applies a filter to the canvas.  
   * 
   *   The presets options are: 
   * 
   *  
   * 
   *   THRESHOLD Converts the image to black and white 
   *   pixels depending if they are above or below the 
   *   threshold defined by the level parameter. The 
   *   parameter must be between 0.0 (black) and 1.0 
   *   (white). If no level is specified, 0.5 is used. 
   * 
   *  
   * 
   *   GRAY Converts any colors in the image to grayscale 
   *   equivalents. No parameter is used. 
   * 
   *  
   * 
   *   OPAQUE Sets the alpha channel to entirely opaque. 
   *   No parameter is used. 
   * 
   *  
   * 
   *   INVERT Sets each pixel to its inverse value. No 
   *   parameter is used. 
   * 
   *  
   * 
   *   POSTERIZE Limits each channel of the image to the 
   *   number of colors specified as the parameter. The 
   *   parameter can be set to values between 2 and 255, 
   *   but results are most noticeable in the lower 
   *   ranges. 
   * 
   *  
   * 
   *   BLUR Executes a Guassian blur with the level 
   *   parameter specifying the extent of the blurring. 
   *   If no parameter is used, the blur is equivalent to 
   *   Guassian blur of radius 1. Larger values increase 
   *   the blur. 
   * 
   *  
   * 
   *   ERODE Reduces the light areas. No parameter is 
   *   used. 
   * 
   *  
   * 
   *   DILATE Increases the light areas. No parameter is 
   *   used.
   *
   *   @param filterParam an optional parameter unique to 
   *   each filter, see above
   */
  filter(filterType: string, filterParam: number): void;

  /**
   *   Returns an array of [R,G,B,A] values for any pixel 
   *   or grabs a section of an image. If no parameters 
   *   are specified, the entire image is returned. Use 
   *   the x and y parameters to get the value of one 
   *   pixel. Get a section of the display window by 
   *   specifying additional w and h parameters. When 
   *   getting an image, the x and y parameters define 
   *   the coordinates for the upper-left corner of the 
   *   image, regardless of the current imageMode().  If 
   *   the pixel requested is outside of the image 
   *   window, [0,0,0,255] is returned. To get the 
   *   numbers scaled according to the current color 
   *   ranges and taking into account colorMode, use 
   *   getColor instead of get. 
   * 
   *  
   *   Getting the color of a single pixel with get(x, y) 
   *   is easy, but not as fast as grabbing the data 
   *   directly from pixels[]. The equivalent statement 
   *   to get(x, y) using pixels[] with pixel density d 
   *   is  var off = (y  width + x)  d * 4; [pixels[off], 
   *   pixels[off+1], pixels[off+2], pixels[off+3]] 
   * 
   *  
   *   See the reference for pixels[] for more 
   *   information.
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
   *   p5.Color object, or [R, G, B, A] pixel array. It 
   *   can also be a single grayscale value. When setting 
   *   an image, the x and y parameters define the 
   *   coordinates for the upper-left corner of the 
   *   image, regardless of the current imageMode().  
   * 
   *  
   *   After using set(), you must call updatePixels() 
   *   for your changes to appear. This should be called 
   *   once all pixels have been set.  
   * 
   *   Setting the color of a single pixel with set(x, y) 
   *   is easy, but not as fast as putting the data 
   *   directly into pixels[]. Setting the pixels[] 
   *   values directly may be complicated when working 
   *   with a retina display, but will perform better 
   *   when lots of pixels need to be set directly on 
   *   every loop. 
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

  // TODO: Fix updatePixels() errors in src/image/pixels.js, line 521:
  //
  //   param "w" is defined multiple times
  //
  // updatePixels(x?: number, y?: number, w?: number, w?: number): void;

  // src/io/files.js

  /**
   *   Loads an opentype font file (.otf, .ttf) from a 
   *   file or a URL, and returns a PFont Object. This 
   *   method is asynchronous, meaning it may not finish 
   *   before the next line in your sketch is executed.  
   *   The path to the font should be relative to the 
   *   HTML file that links in your sketch. Loading an 
   *   from a URL or other remote location may be blocked 
   *   due to your browser's built-in security.
   *
   *   @param path name of the file or url to load
   *   @param [callback] function to be executed after 
   *   loadFont() completes
   *   @return p5.Font object
   */
  loadFont(path: string, callback?: Function): object;

  /**
   *   Loads a JSON file from a file or a URL, and 
   *   returns an Object or Array. This method is 
   *   asynchronous, meaning it may not finish before the 
   *   next line in your sketch is executed.
   *
   *   @param path name of the file or url to load
   *   @param [callback] function to be executed after 
   *   loadJSON() completes, data is passed in as first 
   *   argument
   *   @param [errorCallback] function to be executed if 
   *   there is an error, response is passed in as first 
   *   argument
   *   @param [datatype] "json" or "jsonp"
   *   @return JSON data
   */
  loadJSON(path: string, callback?: Function, errorCallback?: Function, datatype?: string): object|any[];

  /**
   *   Reads the contents of a file and creates a String 
   *   array of its individual lines. If the name of the 
   *   file is used as the parameter, as in the above 
   *   example, the file must be located in the sketch 
   *   directory/folder.  Alternatively, the file maybe 
   *   be loaded from anywhere on the local computer 
   *   using an absolute path (something that starts with 
   *   / on Unix and Linux, or a drive letter on 
   *   Windows), or the filename parameter can be a URL 
   *   for a file found on a network. 
   * 
   *  
   *   This method is asynchronous, meaning it may not 
   *   finish before the next line in your sketch is 
   *   executed.
   *
   *   @param filename name of the file or url to load
   *   @param [callback] function to be executed after 
   *   loadStrings() completes, Array is passed in as 
   *   first argument
   *   @param [errorCallback] function to be executed if 
   *   there is an error, response is passed in as first 
   *   argument
   *   @return Array of Strings
   */
  loadStrings(filename: string, callback?: Function, errorCallback?: Function): any[];

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
   *   - header - this table has a header (title) row  
   * 
   *   When passing in multiple options, pass them in as 
   *   separate parameters, seperated by commas. For 
   *   example: 
   * 
   *   
   *   loadTable("my_csv_file.csv", "csv", "header")   
   * 
   *  
   *   All files loaded and saved use UTF-8 encoding. 
   * 
   *   This method is asynchronous, meaning it may not 
   *   finish before the next line in your sketch is 
   *   executed. Calling loadTable() inside preload() 
   *   guarantees to complete the operation before 
   *   setup() and draw() are called. 
   * 
   *   Outside of preload(), you may supply a callback 
   *   function to handle the object:
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
   *   found on a network. 
   * 
   *   This method is asynchronous, meaning it may not 
   *   finish before the next line in your sketch is 
   *   executed. Calling loadXML() inside preload() 
   *   guarantees to complete the operation before 
   *   setup() and draw() are called. 
   * 
   *   Outside of preload(), you may supply a callback 
   *   function to handle the object:
   *
   *   @param filename name of the file or URL to load
   *   @param [callback] function to be executed after 
   *   loadXML() completes, XML object is passed in as 
   *   first argument
   *   @param [errorCallback] function to be executed if 
   *   there is an error, response is passed in as first 
   *   argument
   *   @return XML object containing data
   */
  loadXML(filename: string, callback?: Function, errorCallback?: Function): object;

  /**
   *   Method for executing an HTTP GET request. If data 
   *   type is not specified, p5 will try to guess based 
   *   on the URL, defaulting to text.
   *
   *   @param path name of the file or url to load
   *   @param [data] param data passed sent with request
   *   @param [datatype] "json", "jsonp", "xml", or 
   *   "text"
   *   @param [callback] function to be executed after 
   *   httpGet() completes, data is passed in as first 
   *   argument
   *   @param [errorCallback] function to be executed if 
   *   there is an error, response is passed in as first 
   *   argument
   */
  httpGet(path: string, data?: object, datatype?: string, callback?: Function, errorCallback?: Function): void;

  /**
   *   Method for executing an HTTP POST request. If data 
   *   type is not specified, p5 will try to guess based 
   *   on the URL, defaulting to text.
   *
   *   @param path name of the file or url to load
   *   @param [data] param data passed sent with request
   *   @param [datatype] "json", "jsonp", "xml", or 
   *   "text"
   *   @param [callback] function to be executed after 
   *   httpGet() completes, data is passed in as first 
   *   argument
   *   @param [errorCallback] function to be executed if 
   *   there is an error, response is passed in as first 
   *   argument
   */
  httpPost(path: string, data?: object, datatype?: string, callback?: Function, errorCallback?: Function): void;

  /**
   *   Method for executing an HTTP request. If data type 
   *   is not specified, p5 will try to guess based on 
   *   the URL, defaulting to text. You may also pass a 
   *   single object specifying all parameters for the 
   *   request following the examples inside the 
   *   reqwest() calls here:  
   *   https://github.com/ded/reqwest#api
   *
   *   @param path name of the file or url to load
   *   @param [method] either "GET", "POST", or "PUT", 
   *   defaults to "GET"
   *   @param [data] param data passed sent with request
   *   @param [datatype] "json", "jsonp", "xml", or 
   *   "text"
   *   @param [callback] function to be executed after 
   *   httpGet() completes, data is passed in as first 
   *   argument
   *   @param [errorCallback] function to be executed if 
   *   there is an error, response is passed in as first 
   *   argument
   */
  httpDo(path: string, method?: string, data?: object, datatype?: string, callback?: Function, errorCallback?: Function): void;

  // TODO: Fix save() errors in src/io/files.js, line 993:
  //
  //   param "filename" has invalid type: [String]
  //   param "options" has invalid type: [Boolean/String]
  //
  // save(objectOrFilename: any|any, filename: any, options: any): void;

  /**
   *   Writes the contents of an Array or a JSON object 
   *   to a .json file. The file saving process and 
   *   location of the saved file will vary between web 
   *   browsers.
   *
   *   @param [optimize] If true, removes line breaks and 
   *   spaces from the output file to optimize filesize 
   *   (but not readability).
   */
  saveJSON(json: any[]|object, filename: string, optimize?: boolean): void;

  /**
   *   Writes an array of Strings to a text file, one 
   *   line per String. The file saving process and 
   *   location of the saved file will vary between web 
   *   browsers.
   *
   *   @param list string array to be written
   *   @param filename filename for output
   */
  saveStrings(list: any[], filename: string): void;

  /**
   *   Writes the contents of a Table object to a file. 
   *   Defaults to a text file with 
   *   comma-separated-values ('csv') but can also use 
   *   tab separation ('tsv'), or generate an HTML table 
   *   ('html'). The file saving process and location of 
   *   the saved file will vary between web browsers.
   *
   *   @param Table the Table object to save to a file
   *   @param filename the filename to which the Table 
   *   should be saved
   *   @param [options] can be one of "tsv", "csv", or 
   *   "html"
   */
  saveTable(Table: p5.Table, filename: string, options?: string): void;

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
   *   Constrains a value between a minimum and maximum 
   *   value.
   *
   *   @param n number to constrain
   *   @param low minimum limit
   *   @param high maximum limit
   *   @return constrained number
   */
  constrain(n: number, low: number, high: number): number;

  // TODO: Fix dist() errors in src/math/calculation.js, line 108:
  //
  //   required param "x2" follows an optional param
  //   required param "y2" follows an optional param
  //
  // dist(x1: number, y1: number, z1?: number, x2: number, y2: number, z2?: number): number;

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
   *   Re-maps a number from one range to another.  In 
   *   the first example above, the number 25 is 
   *   converted from a value in the range of 0 to 100 
   *   into a value that ranges from the left edge of the 
   *   window (0) to the right edge (width).
   *
   *   @param value the incoming value to be converted
   *   @param start1 lower bound of the value's current 
   *   range
   *   @param stop1 upper bound of the value's current 
   *   range
   *   @param start2 lower bound of the value's target 
   *   range
   *   @param stop2 upper bound of the value's target 
   *   range
   *   @return remapped number
   */
  map(value: number, start1: number, stop1: number, start2: number, stop2: number): number;

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
   *   equivalent to the expression 33333 and pow(3, -5) 
   *   is equivalent to 1 / 33333. Maps to Math.pow().
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
  round(n: number): number;

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
   *   only for the lifespan of the program; see the 
   *   noiseSeed() function). p5.js can compute 1D, 2D 
   *   and 3D noise, depending on the number of 
   *   coordinates given. The resulting value will always 
   *   be between 0.0 and 1.0. The noise value can be 
   *   animated by moving through the noise space as 
   *   demonstrated in the example above. The 2nd and 3rd 
   *   dimension can also be interpreted as time.
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
   *   sequence.  By default, noise is computed over 4 
   *   octaves with each octave contributing exactly half 
   *   than its predecessor, starting at 50% strength for 
   *   the 1st octave. This falloff amount can be changed 
   *   by adding an additional function parameter. Eg. a 
   *   falloff factor of 0.75 means each octave will now 
   *   have 75% impact (25% less) of the previous lower 
   *   octave. Any value between 0.0 and 1.0 is valid, 
   *   however note that values greater than 0.5 might 
   *   result in greater than 1.0 values returned by 
   *   noise(). 
   * 
   *  
   *   By changing these parameters, the signal created 
   *   by the noise() function can be adapted to fit very 
   *   specific needs and characteristics.
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
   *   Return a random floating-point number. Takes 
   *   either 0, 1 or 2 arguments. 
   * 
   *   If no argument is given, returns a random number 
   *   from 0 up to (but not including) 1. 
   * 
   *   If one argument is given and it is a number, 
   *   returns a random number from 0 up to (but not 
   *   including) the number. 
   * 
   *   If one argument is given and it is an array, 
   *   returns a random element from that array. 
   * 
   *   If two arguments are given, returns a random 
   *   number from the first argument up to (but not 
   *   including) the second argument.
   *
   *   @param [min] the lower bound (inclusive)
   *   @param [max] the upper bound (exclusive)
   */
  random(min?: number, max?: number): void;

  /**
   *   Return a random floating-point number. Takes 
   *   either 0, 1 or 2 arguments. 
   * 
   *   If no argument is given, returns a random number 
   *   from 0 up to (but not including) 1. 
   * 
   *   If one argument is given and it is a number, 
   *   returns a random number from 0 up to (but not 
   *   including) the number. 
   * 
   *   If one argument is given and it is an array, 
   *   returns a random element from that array. 
   * 
   *   If two arguments are given, returns a random 
   *   number from the first argument up to (but not 
   *   including) the second argument.
   *
   *   @param choices the array to choose from
   */
  random(choices: any[]): void;

  /**
   *   Returns a random number fitting a Gaussian, or 
   *   normal, distribution. There is theoretically no 
   *   minimum or maximum value that randomGaussian() 
   *   might return. Rather, there is just a very low 
   *   probability that values far from the mean will be 
   *   returned; and a higher probability that numbers 
   *   near the mean will be returned.  Takes either 0, 1 
   *   or 2 arguments.
   *  
   *   If no args, returns a mean of 0 and standard 
   *   deviation of 1.
   *  
   *   If one arg, that arg is the mean (standard 
   *   deviation is 1).
   *  
   *   If two args, first is mean, second is standard 
   *   deviation.
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
   *   to the position of the cursor.  Note: The 
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

  // TODO: Fix angleMode() errors in src/math/trigonometry.js, line 306:
  //
  //   param "mode" has invalid type: Number/Constant
  //
  // angleMode(mode: any): void;

  // src/typography/attributes.js

  // TODO: Fix textAlign() errors in src/typography/attributes.js, line 13:
  //
  //   param "horizAlign" has invalid type: Number/Constant
  //   param "vertAlign" has invalid type: Number/Constant
  //
  // textAlign(horizAlign: any, vertAlign: any): number;

  /**
   *   Sets/gets the spacing, in pixels, between lines of 
   *   text. This setting will be used in all subsequent 
   *   calls to the text() function.
   *
   *   @param leading the size in pixels for spacing 
   *   between lines
   */
  textLeading(leading: number): object|number;

  /**
   *   Sets/gets the current font size. This size will be 
   *   used in all subsequent calls to the text() 
   *   function. Font size is measured in pixels.
   *
   *   @param theSize the size of the letters in units of 
   *   pixels
   */
  textSize(theSize: number): object|number;

  // TODO: Fix textStyle() errors in src/typography/attributes.js, line 103:
  //
  //   param "theStyle" has invalid type: Number/Constant
  //
  // textStyle(theStyle: any): object|string;

  /**
   *   Calculates and returns the width of any character 
   *   or text string.
   *
   *   @param theText the String of characters to measure
   */
  textWidth(theText: string): number;

  // src/typography/loading_displaying.js

  /**
   *   Draws text to the screen. Displays the information 
   *   specified in the first parameter on the screen in 
   *   the position specified by the additional 
   *   parameters. A default font will be used unless a 
   *   font is set with the textFont() function and a 
   *   default size will be used unless a font is set 
   *   with textSize(). Change the color of the text with 
   *   the fill() function. Change the outline of the 
   *   text with the stroke() and strokeWeight() 
   *   functions.  The text displays in relation to the 
   *   textAlign() function, which gives the option to 
   *   draw to the left, right, and center of the 
   *   coordinates. 
   * 
   *  
   *   The x2 and y2 parameters define a rectangular area 
   *   to display within and may only be used with string 
   *   data. When these parameters are specified, they 
   *   are interpreted based on the current rectMode() 
   *   setting. Text that does not fit completely within 
   *   the rectangle specified will not be drawn to the 
   *   screen.
   *
   *   @param str the alphanumeric symbols to be 
   *   displayed
   *   @param x x-coordinate of text
   *   @param y y-coordinate of text
   *   @param x2 by default, the width of the text box, 
   *   see rectMode() for more info
   *   @param y2 by default, the height of the text box, 
   *   see rectMode() for more info
   *   @return this
   */
  text(str: string, x: number, y: number, x2: number, y2: number): object;

  /**
   *   Sets the current font that will be drawn with the 
   *   text() function.
   *
   *   @param f a font loaded via loadFont(), or a String 
   *   representing a browser-based default font.
   *   @return this
   */
  textFont(f: object|string): object;

  // src/utilities/array_functions.js

  /**
   *   Adds a value to the end of an array. Extends the 
   *   length of the array by one. Maps to Array.push().
   *
   *   @param array Array to append
   *   @param value to be added to the Array
   */
  append(array: any[], value: any): void;

  // TODO: Fix arrayCopy() errors in src/utilities/array_functions.js, line 37:
  //
  //   required param "dst" follows an optional param
  //
  // arrayCopy(src: any[], srcPosition?: number, dst: any[], dstPosition?: number, length?: number): void;

  /**
   *   Concatenates two arrays, maps to Array.concat(). 
   *   Does not modify the input arrays.
   *
   *   @param a first Array to concatenate
   *   @param b second Array to concatenate
   *   @return concatenated array
   */
  concat(a: any[], b: any[]): any[];

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
   *   Randomizes the order of the elements of an array. 
   *   Implements  Fisher-Yates Shuffle Algorithm.
   *
   *   @param array Array to shuffle
   *   @param [bool] modify passed array
   *   @return shuffled Array
   */
  shuffle(array: any[], bool?: boolean): any[];

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

  // src/utilities/conversion.js

  /**
   *   Converts a string to its floating point 
   *   representation. The contents of a string must 
   *   resemble a number, or NaN (not a number) will be 
   *   returned. For example, float("1234.56") evaluates 
   *   to 1234.56, but float("giraffe") will return NaN.
   *
   *   @param str float string to parse
   *   @return floating point representation of string
   */
  float(str: string): number;

  /**
   *   Converts a boolean, string, or float to its 
   *   integer representation. When an array of values is 
   *   passed in, then an int array of the same length is 
   *   returned.
   *
   *   @param n value to parse
   *   @return integer representation of value
   */
  int(n: string|boolean|number|any[]): number;

  /**
   *   Converts a boolean, string or number to its string 
   *   representation. When an array of values is passed 
   *   in, then an array of strings of the same length is 
   *   returned.
   *
   *   @param n value to parse
   *   @return string representation of value
   */
  str(n: string|boolean|number|any[]): string;

  /**
   *   Converts a number or string to its boolean 
   *   representation. For a number, any non-zero value 
   *   (positive or negative) evaluates to true, while 
   *   zero evaluates to false. For a string, the value 
   *   "true" evaluates to true, while any other value 
   *   evaluates to false. When an array of number or 
   *   string values is passed in, then a array of 
   *   booleans of the same length is returned.
   *
   *   @param n value to parse
   *   @return boolean representation of value
   */
  boolean(n: string|boolean|number|any[]): boolean;

  /**
   *   Converts a number, string or boolean to its byte 
   *   representation. A byte can be only a whole number 
   *   between -128 and 127, so when a value outside of 
   *   this range is converted, it wraps around to the 
   *   corresponding byte representation. When an array 
   *   of number, string or boolean values is passed in, 
   *   then an array of bytes the same length is 
   *   returned.
   *
   *   @param n value to parse
   *   @return byte representation of value
   */
  byte(n: string|boolean|number|any[]): number;

  /**
   *   Converts a number or string to its corresponding 
   *   single-character string representation. If a 
   *   string parameter is provided, it is first parsed 
   *   as an integer and then translated into a 
   *   single-character string. When an array of number 
   *   or string values is passed in, then an array of 
   *   single-character strings of the same length is 
   *   returned.
   *
   *   @param n value to parse
   *   @return string representation of value
   */
  char(n: string|number|any[]): string;

  /**
   *   Converts a single-character string to its 
   *   corresponding integer representation. When an 
   *   array of single-character string values is passed 
   *   in, then an array of integers of the same length 
   *   is returned.
   *
   *   @param n value to parse
   *   @return integer representation of value
   */
  unchar(n: string|any[]): number;

  /**
   *   Converts a number to a string in its equivalent 
   *   hexadecimal notation. If a second parameter is 
   *   passed, it is used to set the number of characters 
   *   to generate in the hexadecimal notation. When an 
   *   array is passed in, an array of strings in 
   *   hexadecimal notation of the same length is 
   *   returned.
   *
   *   @param n value to parse
   *   @return hexadecimal string representation of value
   */
  hex(n: number|any[]): string;

  /**
   *   Converts a string representation of a hexadecimal 
   *   number to its equivalent integer value. When an 
   *   array of strings in hexadecimal notation is passed 
   *   in, an array of integers of the same length is 
   *   returned.
   *
   *   @param n value to parse
   *   @return integer representation of hexadecimal 
   *   value
   */
  unhex(n: string|any[]): number;

  // src/utilities/string_functions.js

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
   *   returned.  To use the function, first check to see 
   *   if the result is null. If the result is null, then 
   *   the sequence did not match at all. If the sequence 
   *   did match, an array is returned. 
   * 
   *  
   *   If there are groups (specified by sets of 
   *   parentheses) in the regular expression, then the 
   *   contents of each will be returned in the array. 
   *   Element [0] of a regular expression match returns 
   *   the entire matching string, and the match groups 
   *   start at element [1] (the first group is [1], the 
   *   second [2], and so on).
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
   *   second dimension is only of length one.  To use 
   *   the function, first check to see if the result is 
   *   null. If the result is null, then the sequence did 
   *   not match at all. If the sequence did match, a 2D 
   *   array is returned. 
   * 
   *  
   *   If there are groups (specified by sets of 
   *   parentheses) in the regular expression, then the 
   *   contents of each will be returned in the array. 
   *   Assuming a loop with counter variable i, element 
   *   [i][0] of a regular expression match returns the 
   *   entire matching string, and the match groups start 
   *   at element [i][1] (the first group is [i][1], the 
   *   second [i][2], and so on).
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
   *   @param [left] number of digits to the left of the 
   *   decimal point
   *   @param [right] number of digits to the right of 
   *   the decimal point
   *   @return formatted String
   */
  nf(num: number|any[], left?: number, right?: number): string|any[];

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
   *   The values for left, and right parameters should 
   *   always be positive integers.
   *
   *   @param num the Number to format
   *   @param [left] number of digits to the left of the 
   *   decimal point
   *   @param [right] number of digits to the right of 
   *   the decimal point
   *   @return formatted String
   */
  nfp(num: number|any[], left?: number, right?: number): string|any[];

  /**
   *   Utility function for formatting numbers into 
   *   strings. Similar to nf() but puts a " " (space) in 
   *   front of positive numbers and a "-" in front of 
   *   negative numbers. There are two versions: one for 
   *   formatting floats, and one for formatting ints. 
   *   The values for the digits, left, and right 
   *   parameters should always be positive integers.
   *
   *   @param num the Number to format
   *   @param [left] number of digits to the left of the 
   *   decimal point
   *   @param [right] number of digits to the right of 
   *   the decimal point
   *   @return formatted String
   */
  nfs(num: number|any[], left?: number, right?: number): string|any[];

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
   *   characters to be used as a boundary.  If no delim 
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
   *   @param str a String or Array of Strings to be 
   *   trimmed
   *   @return a trimmed String or Array of Strings
   */
  trim(str: string|any[]): string|any[];

  // src/utilities/time_date.js

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

  // src/webgl/camera.js

  /**
   *   Sets camera position
   *
   *   @param x camera position value on x axis
   *   @param y camera position value on y axis
   *   @param z camera position value on z axis
   *   @return the p5 object
   */
  camera(x: number, y: number, z: number): p5;

  /**
   *   Sets perspective camera
   *
   *   @param fovy camera frustum vertical field of view, 
   *   from bottom to top of view, in degrees
   *   @param aspect camera frustum aspect ratio
   *   @param near frustum near plane length
   *   @param far frustum far plane length
   *   @return the p5 object
   */
  perspective(fovy: number, aspect: number, near: number, far: number): p5;

  /**
   *   Setup ortho camera
   *
   *   @param left camera frustum left plane
   *   @param right camera frustum right plane
   *   @param bottom camera frustum bottom plane
   *   @param top camera frustum top plane
   *   @param near camera frustum near plane
   *   @param far camera frustum far plane
   *   @return the p5 object
   */
  ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): p5;

  // src/webgl/light.js

  /**
   *   Creates an ambient light with a color
   *
   *   @param v1 gray value, red or hue value (depending 
   *   on the current color mode), or color Array, or CSS 
   *   color string
   *   @param [v2] optional: green or saturation value
   *   @param [v3] optional: blue or brightness value
   *   @param [a] optional: opacity
   *   @return the p5 object
   */
  ambientLight(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5;

  // TODO: Fix directionalLight() errors in src/webgl/light.js, line 68:
  //
  //   required param "x" follows an optional param
  //
  // directionalLight(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number, x: number|p5.Vector, y?: number, z?: number): p5;

  // TODO: Fix pointLight() errors in src/webgl/light.js, line 192:
  //
  //   required param "x" follows an optional param
  //
  // pointLight(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number, x: number|p5.Vector, y?: number, z?: number): p5;

  // src/webgl/loading.js

  // TODO: Fix loadModel() errors in src/webgl/loading.js, line 14:
  //
  //   return has invalid type: p5.Geometry
  //
  // loadModel(path: string, normalize?: boolean, successCallback?: (p1: any) => any, failureCallback?: (p1: Event) => any): any;

  // TODO: Fix model() errors in src/webgl/loading.js, line 187:
  //
  //   param "model" has invalid type: p5.Geometry
  //
  // model(model: any): void;

  // src/webgl/material.js

  /**
   *   Normal material for geometry
   *
   *   @return the p5 object
   */
  normalMaterial(): p5;

  /**
   *   Texture for geometry
   *
   *   @param tex 2-dimensional graphics to render as 
   *   texture
   *   @return the p5 object
   */
  texture(tex: p5.Image|p5.MediaElement|p5.Graphics): p5;

  /**
   *   Ambient material for geometry with a given color
   *
   *   @param v1 gray value, red or hue value (depending 
   *   on the current color mode), or color Array, or CSS 
   *   color string
   *   @param [v2] optional: green or saturation value
   *   @param [v3] optional: blue or brightness value
   *   @param [a] optional: opacity
   *   @return the p5 object
   */
  ambientMaterial(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5;

  /**
   *   Specular material for geometry with a given color
   *
   *   @param v1 gray value, red or hue value (depending 
   *   on the current color mode), or color Array, or CSS 
   *   color string
   *   @param [v2] optional: green or saturation value
   *   @param [v3] optional: blue or brightness value
   *   @param [a] optional: opacity
   *   @return the p5 object
   */
  specularMaterial(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5;

  // src/webgl/primitives.js

  /**
   *   Draw a plane with given a width and height
   *
   *   @param width width of the plane
   *   @param height height of the plane
   *   @param [detailX] Optional number of triangle 
   *   subdivisions in x-dimension
   *   @param [detailY] Optional number of triangle 
   *   subdivisions in y-dimension
   *   @return the p5 object
   */
  plane(width: number, height: number, detailX?: number, detailY?: number): p5;

  /**
   *   Draw a box with given width, height and depth
   *
   *   @param width width of the box
   *   @param Height height of the box
   *   @param depth depth of the box
   *   @param [detailX] Optional number of triangle 
   *   subdivisions in x-dimension
   *   @param [detailY] Optional number of triangle 
   *   subdivisions in y-dimension
   *   @return the p5 object
   */
  box(width: number, Height: number, depth: number, detailX?: number, detailY?: number): p5;

  /**
   *   Draw a sphere with given radius
   *
   *   @param radius radius of circle
   *   @param [detailX] optional: number of segments, the 
   *   more segments the smoother geometry default is 24
   *   @param [detailY] optional: number of segments, the 
   *   more segments the smoother geometry default is 16
   *   @return the p5 object
   */
  sphere(radius: number, detailX?: number, detailY?: number): p5;

  /**
   *   Draw a cylinder with given radius and height
   *
   *   @param radius radius of the surface
   *   @param height height of the cylinder
   *   @param [detailX] optional: number of segments, the 
   *   more segments the smoother geometry default is 24
   *   @param [detailY] optional: number of segments in 
   *   y-dimension, the more segments the smoother 
   *   geometry default is 16
   *   @return the p5 object
   */
  cylinder(radius: number, height: number, detailX?: number, detailY?: number): p5;

  /**
   *   Draw a cone with given radius and height
   *
   *   @param radius radius of the bottom surface
   *   @param height height of the cone
   *   @param [detailX] optional: number of segments, the 
   *   more segments the smoother geometry default is 24
   *   @param [detailY] optional: number of segments, the 
   *   more segments the smoother geometry default is 16
   *   @return the p5 object
   */
  cone(radius: number, height: number, detailX?: number, detailY?: number): p5;

  /**
   *   Draw an ellipsoid with given raduis
   *
   *   @param radiusx xradius of circle
   *   @param radiusy yradius of circle
   *   @param radiusz zradius of circle
   *   @param [detailX] optional: number of segments, the 
   *   more segments the smoother geometry default is 24. 
   *   Avoid detail number above 150, it may crash the 
   *   browser.
   *   @param [detailY] optional: number of segments, the 
   *   more segments the smoother geometry default is 16. 
   *   Avoid detail number above 150, it may crash the 
   *   browser.
   *   @return the p5 object
   */
  ellipsoid(radiusx: number, radiusy: number, radiusz: number, detailX?: number, detailY?: number): p5;

  /**
   *   Draw a torus with given radius and tube radius
   *
   *   @param radius radius of the whole ring
   *   @param tubeRadius radius of the tube
   *   @param [detailX] optional: number of segments in 
   *   x-dimension, the more segments the smoother 
   *   geometry default is 24
   *   @param [detailY] optional: number of segments in 
   *   y-dimension, the more segments the smoother 
   *   geometry default is 16
   *   @return the p5 object
   */
  torus(radius: number, tubeRadius: number, detailX?: number, detailY?: number): p5;

  // Properties from p5.dom

  // lib/addons/p5.dom.js

  /**
   *   Searches the page for an element with the given 
   *   ID, class, or tag name (using the '#' or '.' 
   *   prefixes to specify an ID or class respectively, 
   *   and none for a tag) and returns it as a 
   *   p5.Element. If a class or tag name is given with 
   *   more than 1 element, only the first element will 
   *   be returned. The DOM node itself can be accessed 
   *   with .elt. Returns null if none found. You can 
   *   also specify a container to search within.
   *
   *   @param name id, class, or tag name of element to 
   *   search for
   *   @param [container] id, p5.Element, or HTML element 
   *   to search within
   *   @return p5.Element containing node found
   */
  select(name: string, container?: string): any|null;

  /**
   *   Searches the page for elements with the given 
   *   class or tag name (using the '.' prefix to specify 
   *   a class and no prefix for a tag) and returns them 
   *   as p5.Elements in an array. The DOM node itself 
   *   can be accessed with .elt. Returns an empty array 
   *   if none found. You can also specify a container to 
   *   search within.
   *
   *   @param name class or tag name of elements to 
   *   search for
   *   @param [container] id, p5.Element, or HTML element 
   *   to search within
   *   @return Array of p5.Elements containing nodes 
   *   found
   */
  selectAll(name: string, container?: string): any[];

  /**
   *   Removes all elements created by p5, except any 
   *   canvas / graphics elements created by createCanvas 
   *   or createGraphics. Event handlers are removed, and 
   *   element is removed from the DOM.
   *
   */
  removeElements(): void;

  // TODO: Fix createDiv() errors in lib/addons/p5.dom.js, line 232:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createDiv(html: string): any;

  // TODO: Fix createP() errors in lib/addons/p5.dom.js, line 249:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createP(html: string): any;

  // TODO: Fix createSpan() errors in lib/addons/p5.dom.js, line 267:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createSpan(html: string): any;

  // TODO: Fix createImg() errors in lib/addons/p5.dom.js, line 293:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createImg(src: string, alt?: string, successCallback?: Function): any;

  // TODO: Fix createA() errors in lib/addons/p5.dom.js, line 338:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createA(href: string, html: string, target?: string): any;

  // TODO: Fix createSlider() errors in lib/addons/p5.dom.js, line 368:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createSlider(min: number, max: number, value?: number, step?: number): any;

  // TODO: Fix createButton() errors in lib/addons/p5.dom.js, line 420:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createButton(label: string, value?: string): any;

  // TODO: Fix createCheckbox() errors in lib/addons/p5.dom.js, line 456:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createCheckbox(label?: string, value?: boolean): any;

  // TODO: Fix createSelect() errors in lib/addons/p5.dom.js, line 521:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createSelect(multiple?: boolean): any;

  // TODO: Fix createRadio() errors in lib/addons/p5.dom.js, line 586:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createRadio(divId?: string): any;

  // TODO: Fix createInput() errors in lib/addons/p5.dom.js, line 713:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createInput(value?: number): any;

  // TODO: Fix createFileInput() errors in lib/addons/p5.dom.js, line 742:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createFileInput(callback?: Function, multiple?: string): any;

  // TODO: Fix createVideo() errors in lib/addons/p5.dom.js, line 842:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createVideo(src: string|any[], callback?: object): any;

  // TODO: Fix createAudio() errors in lib/addons/p5.dom.js, line 870:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createAudio(src: string|any[], callback?: object): any;

  // TODO: Fix createCapture() errors in lib/addons/p5.dom.js, line 906:
  //
  //   return has invalid type: Object/p5.Element
  //
  // createCapture(type: string|TYPE|object, callback: Function): any;

  // TODO: Fix createElement() errors in lib/addons/p5.dom.js, line 1006:
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

  /**
   *   Returns a number representing the master amplitude 
   *   (volume) for sound in this sketch.
   *
   *   @return Master amplitude (volume) for sound in 
   *   this sketch. Should be between 0.0 (silence) and 
   *   1.0.
   */
  getMasterVolume(): number;

  /**
   *   Scale the output of all sound in this sketch 
   *   Scaled between 0.0 (silence) and 1.0 (full 
   *   volume). 1.0 is the maximum amplitude of a digital 
   *   sound, so multiplying by greater than 1.0 may 
   *   cause digital distortion. To fade, provide a 
   *   rampTime parameter. For more complex fades, see 
   *   the Env class. Alternately, you can pass in a 
   *   signal source such as an oscillator to modulate 
   *   the amplitude with an audio signal. How This 
   *   Works: When you load the p5.sound module, it 
   *   creates a single instance of p5sound. All sound 
   *   objects in this module output to p5sound before 
   *   reaching your computer's output. So if you change 
   *   the amplitude of p5sound, it impacts all of the 
   *   sound in this module. 
   * 
   *   If no value is provided, returns a Web Audio API 
   *   Gain Node
   *
   *   @param volume Volume (amplitude) between 0.0 and 
   *   1.0 or modulating signal/oscillator
   *   @param [rampTime] Fade for t seconds
   *   @param [timeFromNow] Schedule this event to happen 
   *   at t seconds in the future
   */
  masterVolume(volume: number|object, rampTime?: number, timeFromNow?: number): void;

  // TODO: Property "p5.soundOut", defined in lib/addons/p5.sound.js, line 376, is not a valid JS symbol name

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

  // TODO: Property "{String} failedPath path to the file that failed to load", defined in lib/addons/p5.sound.js, line 599, is not a valid JS symbol name

}

declare namespace p5 {
  // src/color/p5.Color.js

  class Color {
    /**
     *   We define colors to be immutable objects. Each 
     *   color stores the color mode and level maxes that 
     *   applied at the time of its construction. These are 
     *   used to interpret the input arguments and to 
     *   format the output e.g. when saturation() is 
     *   requested. Internally we store an array 
     *   representing the ideal RGBA values in floating 
     *   point form, normalized from 0 to 1. From this we 
     *   calculate the closest screen color (RGBA levels 
     *   from 0 to 255) and expose this to the renderer. 
     * 
     *   We also cache normalized, floating point 
     *   components of the color in various representations 
     *   as they are calculated. This is done to prevent 
     *   repeating a conversion that has already been 
     *   performed.
     *
     */
    constructor();
  }

  // src/core/p5.Element.js

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
     *   p5.Element. If no arguments given, parent node is 
     *   returned. For more ways to position the canvas, 
     *   see the  positioning the canvas wiki page.
     *
     *   @param parent the ID, DOM node, or p5.Element of 
     *   desired parent element
     */
    parent(parent: string|object): p5.Element;

    /**
     *   Sets the ID of the element
     *
     *   @param id ID of the element
     */
    id(id: string): p5.Element;

    /**
     *   Adds given class to the element
     *
     *   @param class class to add
     */
    class(theClass: string): p5.Element;

    /**
     *   The .mousePressed() function is called once after 
     *   every time a mouse button is pressed over the 
     *   element. This can be used to attach element 
     *   specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   pressed over the element.
     */
    mousePressed(fxn: Function): p5.Element;

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
    mouseWheel(fxn: Function): p5.Element;

    /**
     *   The .mouseReleased() function is called once after 
     *   every time a mouse button is released over the 
     *   element. This can be used to attach element 
     *   specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   released over the element.
     */
    mouseReleased(fxn: Function): p5.Element;

    /**
     *   The .mouseClicked() function is called once after 
     *   a mouse button is pressed and released over the 
     *   element. This can be used to attach element 
     *   specific event listeners.
     *
     *   @param fxn function to be fired when mouse is 
     *   clicked over the element.
     */
    mouseClicked(fxn: Function): p5.Element;

    /**
     *   The .mouseMoved() function is called once every 
     *   time a mouse moves over the element. This can be 
     *   used to attach an element specific event listener.
     *
     *   @param fxn function to be fired when mouse is 
     *   moved over the element.
     */
    mouseMoved(fxn: Function): p5.Element;

    /**
     *   The .mouseOver() function is called once after 
     *   every time a mouse moves onto the element. This 
     *   can be used to attach an element specific event 
     *   listener.
     *
     *   @param fxn function to be fired when mouse is 
     *   moved over the element.
     */
    mouseOver(fxn: Function): p5.Element;

    /**
     *   The .changed() function is called when the value 
     *   of an element is changed. This can be used to 
     *   attach an element specific event listener.
     *
     *   @param fxn function to be fired when the value of 
     *   an element changes.
     */
    changed(fxn: Function): p5.Element;

    /**
     *   The .input() function is called when any user 
     *   input is detected with an element. The input event 
     *   is often used to detect keystrokes in a input 
     *   element, or changes on a slider element. This can 
     *   be used to attach an element specific event 
     *   listener.
     *
     *   @param fxn function to be fired on user input.
     */
    input(fxn: Function): p5.Element;

    /**
     *   The .mouseOut() function is called once after 
     *   every time a mouse moves off the element. This can 
     *   be used to attach an element specific event 
     *   listener.
     *
     *   @param fxn function to be fired when mouse is 
     *   moved off the element.
     */
    mouseOut(fxn: Function): p5.Element;

    /**
     *   The .touchStarted() function is called once after 
     *   every time a touch is registered. This can be used 
     *   to attach element specific event listeners.
     *
     *   @param fxn function to be fired when touch is 
     *   started over the element.
     */
    touchStarted(fxn: Function): p5.Element;

    /**
     *   The .touchMoved() function is called once after 
     *   every time a touch move is registered. This can be 
     *   used to attach element specific event listeners.
     *
     *   @param fxn function to be fired when touch is 
     *   moved over the element.
     */
    touchMoved(fxn: Function): p5.Element;

    /**
     *   The .touchEnded() function is called once after 
     *   every time a touch is registered. This can be used 
     *   to attach element specific event listeners.
     *
     *   @param fxn function to be fired when touch is 
     *   ended over the element.
     */
    touchEnded(fxn: Function): p5.Element;

    /**
     *   The .dragOver() function is called once after 
     *   every time a file is dragged over the element. 
     *   This can be used to attach an element specific 
     *   event listener.
     *
     *   @param fxn function to be fired when mouse is 
     *   dragged over the element.
     */
    dragOver(fxn: Function): p5.Element;

    /**
     *   The .dragLeave() function is called once after 
     *   every time a dragged file leaves the element area. 
     *   This can be used to attach an element specific 
     *   event listener.
     *
     *   @param fxn function to be fired when mouse is 
     *   dragged over the element.
     */
    dragLeave(fxn: Function): p5.Element;

    // TODO: Fix drop() errors in src/core/p5.Element.js, line 695:
    //
    //   param "callback" is defined multiple times
    //
    // drop(callback: Function, callback: Function): p5.Element;

    // lib/addons/p5.dom.js

    // TODO: Fix addClass() errors in lib/addons/p5.dom.js, line 1032:
    //
    //   return has invalid type: Object/p5.Element
    //
    // addClass(theClass: string): any;

    // TODO: Fix removeClass() errors in lib/addons/p5.dom.js, line 1059:
    //
    //   return has invalid type: Object/p5.Element
    //
    // removeClass(theClass: string): any;

    /**
     *   Attaches the element as a child to the parent 
     *   specified. Accepts either a string ID, DOM node, 
     *   or p5.Element. If no argument is specified, an 
     *   array of children DOM nodes is returned.
     *
     *   @param [child] the ID, DOM node, or p5.Element to 
     *   add to the current element
     */
    child(child?: string|object|p5.Element): p5.Element;

    /**
     *   If an argument is given, sets the inner HTML of 
     *   the element, replacing any existing html. If no 
     *   arguments are given, returns the inner HTML of the 
     *   element.
     *
     *   @param [html] the HTML to be placed inside the 
     *   element
     */
    html(html?: string): any|string;

    // TODO: Fix position() errors in lib/addons/p5.dom.js, line 1197:
    //
    //   return has invalid type: Object/p5.Element
    //
    // position(x?: number, y?: number): any;

    // TODO: Fix style() errors in lib/addons/p5.dom.js, line 1278:
    //
    //   param "value" is defined multiple times
    //   param "value" is defined multiple times
    //   param "value" is defined multiple times
    //
    // style(property: string, value?: string|number|p5.Color, value?: string|number, value?: string|number, value?: string|number): string|any;

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
    attribute(attr: string, value?: string): string|any;

    /**
     *   Either returns the value of the element if no 
     *   arguments given, or sets the value of the element.
     *
     *   @return value of element if no value is specified 
     *   or p5.Element
     */
    value(value?: string|number): string|any;

    // TODO: Fix show() errors in lib/addons/p5.dom.js, line 1433:
    //
    //   return has invalid type: Object/p5.Element
    //
    // show(): any;

    // TODO: Fix hide() errors in lib/addons/p5.dom.js, line 1451:
    //
    //   return has invalid type: Object/p5.Element
    //
    // hide(): any;

    // TODO: Fix size() errors in lib/addons/p5.dom.js, line 1467:
    //
    //   return has invalid type: Object/p5.Element
    //
    // size(w?: number, h?: number): any;

    /**
     *   Removes the element and deregisters all listeners.
     *
     */
    remove(): void;
  }

  // src/core/p5.Graphics.js

  class Graphics extends p5.Element {
    // TODO: Fix p5.Graphics() errors in src/core/p5.Graphics.js, line 10:
    //
    //   required param "whether" follows an optional param
    //
    // constructor(elt: string, pInst?: object, whether: boolean);

  }

  // src/core/p5.Renderer.js

  class Renderer extends p5.Element {
    // TODO: Fix p5.Renderer() errors in src/core/p5.Renderer.js, line 10:
    //
    //   required param "whether" follows an optional param
    //
    // constructor(elt: string, pInst?: object, whether: boolean);

  }

  // src/image/p5.Image.js

  class Image {
    /**
     *   Creates a new p5.Image. A p5.Image is a canvas 
     *   backed representation of an image.  p5 can display 
     *   .gif, .jpg and .png images. Images may be 
     *   displayed in 2D and 3D space. Before an image is 
     *   used, it must be loaded with the loadImage() 
     *   function. The p5.Image class contains fields for 
     *   the width and height of the image, as well as an 
     *   array called pixels[] that contains the values for 
     *   every pixel in the image. 
     * 
     *  
     *   The methods described below allow easy access to 
     *   the image's pixels and alpha channel and simplify 
     *   the process of compositing. 
     * 
     *  
     *   Before using the pixels[] array, be sure to use 
     *   the loadPixels() method on the image to make sure 
     *   that the pixel data is properly loaded.
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

    // TODO: Property "pixels[]", defined in src/image/p5.Image.js, line 97, is not a valid JS symbol name

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
     * 
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
     *   another image and using it's blue channel as an 
     *   alpha channel for this image.
     *
     *   @param srcImage source image
     */
    mask(srcImage: p5.Image): void;

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
     *   @param blendMode the blend mode 
     * 
     *   Available blend modes are: normal | multiply | 
     *   screen | overlay | darken | lighten | color-dodge 
     *   | color-burn | hard-light | soft-light | 
     *   difference | exclusion | hue | saturation | color 
     *   | luminosity 
     * 
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

  // src/io/p5.Table.js

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
     *   Finds the rows in the Table that match the regular 
     *   expression provided, and returns references to 
     *   those rows. Returns an array, so for must be used 
     *   to iterate through all the rows, as shown in the 
     *   example. The column to search may be specified by 
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
     *   @param [title] title of the given column
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

    /**
     *   Stores a value in the Table's specified row and 
     *   column. The row is specified by its ID, while the 
     *   column may be specified by either its ID or title.
     *
     *   @param column column ID (Number) or title (String)
     *   @param value value to assign
     */
    set(column: string|number, value: string|number): void;

    /**
     *   Stores a Float value in the Table's specified row 
     *   and column. The row is specified by its ID, while 
     *   the column may be specified by either its ID or 
     *   title.
     *
     *   @param row row ID
     *   @param column column ID (Number) or title (String)
     *   @param value value to assign
     */
    setNum(row: number, column: string|number, value: number): void;

    /**
     *   Stores a String value in the Table's specified row 
     *   and column. The row is specified by its ID, while 
     *   the column may be specified by either its ID or 
     *   title.
     *
     *   @param row row ID
     *   @param column column ID (Number) or title (String)
     *   @param value value to assign
     */
    setString(row: number, column: string|number, value: string): void;

    /**
     *   Retrieves a value from the Table's specified row 
     *   and column. The row is specified by its ID, while 
     *   the column may be specified by either its ID or 
     *   title.
     *
     *   @param row row ID
     *   @param column columnName (string) or ID (number)
     */
    get(row: number, column: string|number): string|number;

    /**
     *   Retrieves a Float value from the Table's specified 
     *   row and column. The row is specified by its ID, 
     *   while the column may be specified by either its ID 
     *   or title.
     *
     *   @param row row ID
     *   @param column columnName (string) or ID (number)
     */
    getNum(row: number, column: string|number): number;

    /**
     *   Retrieves a String value from the Table's 
     *   specified row and column. The row is specified by 
     *   its ID, while the column may be specified by 
     *   either its ID or title.
     *
     *   @param row row ID
     *   @param column columnName (string) or ID (number)
     */
    getString(row: number, column: string|number): string;

    /**
     *   Retrieves all table data and returns as an object. 
     *   If a column name is passed in, each row object 
     *   will be stored with that attribute as its title.
     *
     *   @param headerColumn Name of the column which 
     *   should be used to title each row object (optional)
     */
    getObject(headerColumn: string): object;

    /**
     *   Retrieves all table data and returns it as a 
     *   multidimensional array.
     *
     */
    getArray(): any[];
  }

  // src/io/p5.TableRow.js

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

  // src/io/p5.XML.js

  class XML {
    /**
     *   XML is a representation of an XML object, able to 
     *   parse XML code. Use loadXML() to load external XML 
     *   files and create XML objects.
     *
     *   @return p5.XML object generated
     */
    constructor();

    /**
     *   Gets a copy of the element's parent. Returns the 
     *   parent as another p5.XML object.
     *
     *   @return element parent
     */
    getParent(): object;

    /**
     *   Gets the element's full name, which is returned as 
     *   a String.
     *
     *   @return the name of the node
     */
    getName(): string;

    /**
     *   Sets the element's name, which is specified as a 
     *   String.
     *
     *   @param the new name of the node
     */
    setName(the: string): void;

    /**
     *   Checks whether or not the element has any 
     *   children, and returns the result as a boolean.
     *
     */
    hasChildren(): boolean;

    /**
     *   Get the names of all of the element's children, 
     *   and returns the names as an array of Strings. This 
     *   is the same as looping through and calling 
     *   getName() on each child element individually.
     *
     *   @return names of the children of the element
     */
    listChildren(): any[];

    /**
     *   Returns all of the element's children as an array 
     *   of p5.XML objects. When the name parameter is 
     *   specified, then it will return all children that 
     *   match that name.
     *
     *   @param [name] element name
     *   @return children of the element
     */
    getChildren(name?: string): any[];

    /**
     *   Returns the first of the element's children that 
     *   matches the name parameter or the child of the 
     *   given index.It returns undefined if no matching 
     *   child is found.
     *
     *   @param name element name or index
     */
    getChild(name: string|number): p5.XML;

    /**
     *   Appends a new child to the element. The child can 
     *   be specified with either a String, which will be 
     *   used as the new tag's name, or as a reference to 
     *   an existing p5.XML object. A reference to the 
     *   newly created child is returned as an p5.XML 
     *   object.
     *
     *   @param a p5.XML Object which will be the child to 
     *   be added
     */
    addChild(a: object): void;

    /**
     *   Removes the element specified by name or index.
     *
     *   @param name element name or index
     */
    removeChild(name: string|number): void;

    /**
     *   Counts the specified element's number of 
     *   attributes, returned as an Number.
     *
     */
    getAttributeCount(): number;

    /**
     *   Gets all of the specified element's attributes, 
     *   and returns them as an array of Strings.
     *
     *   @return an array of strings containing the names 
     *   of attributes
     */
    listAttributes(): any[];

    /**
     *   Checks whether or not an element has the specified 
     *   attribute.
     *
     *   @param the attribute to be checked
     *   @return true if attribute found else false
     */
    hasAttribute(the: string): boolean;

    /**
     *   Returns an attribute value of the element as an 
     *   Number. If the defaultValue parameter is specified 
     *   and the attribute doesn't exist, then defaultValue 
     *   is returned. If no defaultValue is specified and 
     *   the attribute doesn't exist, the value 0 is 
     *   returned.
     *
     *   @param name the non-null full name of the 
     *   attribute
     *   @param [defaultValue] the default value of the 
     *   attribute
     */
    getNumber(name: string, defaultValue?: number): number;

    /**
     *   Returns an attribute value of the element as an 
     *   String. If the defaultValue parameter is specified 
     *   and the attribute doesn't exist, then defaultValue 
     *   is returned. If no defaultValue is specified and 
     *   the attribute doesn't exist, null is returned.
     *
     *   @param name the non-null full name of the 
     *   attribute
     *   @param [defaultValue] the default value of the 
     *   attribute
     */
    getString(name: string, defaultValue?: number): number;

    /**
     *   Sets the content of an element's attribute. The 
     *   first parameter specifies the attribute name, 
     *   while the second specifies the new content.
     *
     *   @param name the full name of the attribute
     *   @param value the value of the attribute
     */
    setAttribute(name: string, value: number): void;

    /**
     *   Returns the content of an element. If there is no 
     *   such content, defaultValue is returned if 
     *   specified, otherwise null is returned.
     *
     *   @param [defaultValue] value returned if no content 
     *   is found
     */
    getContent(defaultValue?: string): string;

    /**
     *   Sets the element's content.
     *
     *   @param text the new content
     */
    setContent(text: string): void;
  }

  // src/math/p5.Vector.js

  class Vector {
    /**
     *   A class to describe a two or three dimensional 
     *   vector, specifically a Euclidean (also known as 
     *   geometric) vector. A vector is an entity that has 
     *   both magnitude and direction. The datatype, 
     *   however, stores the components of the vector (x, y 
     *   for 2D, and x, y, z for 3D). The magnitude and 
     *   direction can be accessed via the methods mag() 
     *   and heading().  In many of the p5.js examples, you 
     *   will see p5.Vector used to describe a position, 
     *   velocity, or acceleration. For example, if you 
     *   consider a rectangle moving across the screen, at 
     *   any given instant it has a position (a vector that 
     *   points from the origin to its location), a 
     *   velocity (the rate at which the object's position 
     *   changes per time unit, expressed as a vector), and 
     *   acceleration (the rate at which the object's 
     *   velocity changes per time unit, expressed as a 
     *   vector). 
     * 
     *  
     *   Since vectors represent groupings of values, we 
     *   cannot simply use traditional 
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
     *   Returns a string representation of a vector v by 
     *   calling String(v) or v.toString(). This method is 
     *   useful for logging vectors in the console.
     *
     */
    toString(): void;

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
    copy(): p5.Vector;

    /**
     *   Adds x, y, and z components to a vector, adds one 
     *   vector to another, or adds two independent vectors 
     *   together. The version of the method that adds two 
     *   vectors together is a static method and returns a 
     *   p5.Vector, the others acts directly on the vector. 
     *   See the examples for more context.
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
     *   that subtracts two vectors is a static method and 
     *   returns a p5.Vector, the other acts directly on 
     *   the vector. See the examples for more context.
     *
     *   @param x the x component of the vector or a 
     *   p5.Vector or an Array
     *   @param [y] the y component of the vector
     *   @param [z] the z component of the vector
     *   @chainable
     */
    sub(x: number|p5.Vector|any[], y?: number, z?: number): p5.Vector;

    /**
     *   Multiply the vector by a scalar. The static 
     *   version of this method creates a new p5.Vector 
     *   while the non static version acts on the vector 
     *   directly. See the examples for more context.
     *
     *   @param n the number to multiply with the vector
     *   @chainable
     */
    mult(n: number): p5.Vector;

    /**
     *   Divide the vector by a scalar. The static version 
     *   of this method creates a new p5.Vector while the 
     *   non static version acts on the vector directly. 
     *   See the examples for more context.
     *
     *   @param n the number to divide the vector by
     *   @chainable
     */
    div(n: number): p5.Vector;

    /**
     *   Calculates the magnitude (length) of the vector 
     *   and returns the result as a float (this is simply 
     *   the equation sqrt(xx + yy + z*z).)
     *
     *   @return magnitude of the vector
     */
    mag(): number;

    /**
     *   Calculates the squared magnitude of the vector and 
     *   returns the result as a float (this is simply the 
     *   equation (xx + yy + z*z).) Faster if the real 
     *   length is not required in the case of comparing 
     *   vectors, etc.
     *
     *   @return squared magnitude of the vector
     */
    magSq(): number;

    /**
     *   Calculates the dot product of two vectors. The 
     *   version of the method that computes the dot 
     *   product of two independent vectors is a static 
     *   method. See the examples for more context.
     *
     *   @param x x component of the vector or a p5.Vector
     *   @param [y] y component of the vector
     *   @param [z] z component of the vector
     *   @return the dot product
     */
    dot(x: number|p5.Vector, y?: number, z?: number): number;

    /**
     *   Calculates and returns a vector composed of the 
     *   cross product between two vectors. Both the static 
     *   and non static methods return a new p5.Vector. See 
     *   the examples for more context.
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

    // TODO: Fix lerp() errors in src/math/p5.Vector.js, line 624:
    //
    //   required param "amt" follows an optional param
    //
    // lerp(x: p5.Vector, y?: p5.Vector, z?: p5.Vector, amt: number): p5.Vector;

    /**
     *   Return a representation of this vector as a float 
     *   array. This is only for temporary use. If used in 
     *   any other fashion, the contents should be copied 
     *   by using the p5.Vector.copy() method to copy into 
     *   your own array.
     *
     *   @return an Array with the 3 values
     */
    array(): any[];

    /**
     *   Equality check against a p5.Vector
     *
     *   @param [x] the x component of the vector or a 
     *   p5.Vector or an Array
     *   @param [y] the y component of the vector
     *   @param [z] the z component of the vector
     *   @return whether the vectors are equals
     */
    equals(x?: number|p5.Vector|any[], y?: number, z?: number): boolean;

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

    /**
     *   Calculates and returns the angle (in radians) 
     *   between two vectors.
     *
     *   @param v1 the x, y, and z components of a 
     *   p5.Vector
     *   @param v2 the x, y, and z components of a 
     *   p5.Vector
     *   @return the angle between (in radians)
     */
    static angleBetween(v1: p5.Vector, v2: p5.Vector): number;
  }

  // src/typography/p5.Font.js

  class Font {
    /**
     *   Base class for font handling
     *
     *   @param [pInst] pointer to p5 instance
     */
    constructor(pInst?: object);

    /**
     *   Underlying opentype font implementation
     *
     */
    font: any;

    /**
     *   Returns a tight bounding box for the given text 
     *   string using this font (currently only supports 
     *   single lines)
     *
     *   @param line a line of text
     *   @param x x-position
     *   @param y y-position
     *   @param fontSize font size to use (optional)
     *   @param options opentype options (optional)
     *   @return a rectangle object with properties: x, y, 
     *   w, h
     */
    textBounds(line: string, x: number, y: number, fontSize: number, options: object): object;
  }

  // src/webgl/p5.RendererGL.js

  class RendererGL extends p5.Renderer
3D graphics class. {
    constructor();

    /**
     *   Basic fill material for geometry with a given 
     *   color
     *
     *   @param v1 gray value, red or hue value (depending 
     *   on the current color mode), or color Array, or CSS 
     *   color string
     *   @param [v2] optional: green or saturation value
     *   @param [v3] optional: blue or brightness value
     *   @param [a] optional: opacity
     *   @return the p5 object
     */
    fill(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5;
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
     *   Path to the media element source.
     *
     */
    src: any;

    // TODO: Fix play() errors in lib/addons/p5.dom.js, line 1617:
    //
    //   return has invalid type: Object/p5.Element
    //
    // play(): any;

    // TODO: Fix stop() errors in lib/addons/p5.dom.js, line 1638:
    //
    //   return has invalid type: Object/p5.Element
    //
    // stop(): any;

    // TODO: Fix pause() errors in lib/addons/p5.dom.js, line 1650:
    //
    //   return has invalid type: Object/p5.Element
    //
    // pause(): any;

    // TODO: Fix loop() errors in lib/addons/p5.dom.js, line 1661:
    //
    //   return has invalid type: Object/p5.Element
    //
    // loop(): any;

    // TODO: Fix noLoop() errors in lib/addons/p5.dom.js, line 1672:
    //
    //   return has invalid type: Object/p5.Element
    //
    // noLoop(): any;

    // TODO: Fix autoplay() errors in lib/addons/p5.dom.js, line 1685:
    //
    //   return has invalid type: Object/p5.Element
    //
    // autoplay(autoplay: boolean): any;

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
     *   playback speed of the element. The speed parameter 
     *   sets the speed where 2.0 will play the element 
     *   twice as fast, 0.5 will play at half the speed, 
     *   and -1 will play the element in normal speed in 
     *   reverse.(Note that not all browsers support 
     *   backward playback and even if they do, playback 
     *   might not be smooth.)
     *
     *   @param [speed] speed multiplier for element 
     *   playback
     *   @return current playback speed or p5.MediaElement
     */
    speed(speed?: number): number|any;

    /**
     *   If no arguments are given, returns the current 
     *   time of the element. If an argument is given the 
     *   current time of the element is set to it.
     *
     *   @param [time] time to jump to (in seconds)
     *   @return current time (in seconds) or 
     *   p5.MediaElement
     */
    time(time?: number): number|any;

    /**
     *   Returns the duration of the HTML5 media element.
     *
     *   @return duration
     */
    duration(): number;

    // TODO: Fix onended() errors in lib/addons/p5.dom.js, line 1796:
    //
    //   return has invalid type: Object/p5.MediaElement
    //
    // onended(callback: Function): any;

    /**
     *   Send the audio output of this element to a 
     *   specified audioNode or p5.sound object. If no 
     *   element is provided, connects to p5's master 
     *   output. That connection is established when this 
     *   method is first called. All connections are 
     *   removed by the .disconnect() method. This method 
     *   is meant to be used with the p5.sound.js addon 
     *   library.
     *
     *   @param audioNode AudioNode from the Web Audio API, 
     *   or an object from the p5.sound library
     */
    connect(audioNode: AudioNode|any): void;

    /**
     *   Disconnect all Web Audio routing, including to 
     *   master output. This is useful if you want to 
     *   re-route the output through audio effects, for 
     *   example.
     *
     */
    disconnect(): void;

    /**
     *   Show the default MediaElement controls, as 
     *   determined by the web browser.
     *
     */
    showControls(): void;

    /**
     *   Hide the default mediaElement controls.
     *
     */
    hideControls(): void;

    /**
     *   Schedule events to trigger every time a 
     *   MediaElement (audio/video) reaches a playback cue 
     *   point. Accepts a callback function, a time (in 
     *   seconds) at which to trigger the callback, and an 
     *   optional parameter for the callback. 
     * 
     *   Time will be passed as the first parameter to the 
     *   callback function, and param will be the second 
     *   parameter.
     *
     *   @param time Time in seconds, relative to this 
     *   media element's playback. For example, to trigger 
     *   an event every time playback reaches two seconds, 
     *   pass in the number 2. This will be passed as the 
     *   first parameter to the callback function.
     *   @param callback Name of a function that will be 
     *   called at the given time. The callback will 
     *   receive time and (optionally) param as its two 
     *   parameters.
     *   @param [value] An object to be passed as the 
     *   second parameter to the callback function.
     *   @return id ID of this cue, useful for 
     *   removeCue(id)
     */
    addCue(time: number, callback: Function, value?: object): number;

    /**
     *   Remove a callback based on its ID. The ID is 
     *   returned by the addCue method.
     *
     *   @param id ID of the cue, as returned by addCue
     */
    removeCue(id: number): void;

    /**
     *   Remove all of the callbacks that had originally 
     *   been scheduled via the addCue method.
     *
     */
    clearCues(): void;
  }
  class File {
    /**
     *   Base class for a file Using this for 
     *   createFileInput
     *
     *   @param file File that is wrapped
     *   @param [pInst] pointer to p5 instance
     */
    constructor(file: File, pInst?: object);

    /**
     *   Underlying File object. All normal File methods 
     *   can be called on this.
     *
     */
    file: any;

    /**
     *   File type (image, text, etc.)
     *
     */
    type: any;

    /**
     *   File subtype (usually the file extension jpg, png, 
     *   xml, etc.)
     *
     */
    subtype: any;

    /**
     *   File name
     *
     */
    name: any;

    /**
     *   File size
     *
     */
    size: any;

    /**
     *   URL string containing image data.
     *
     */
    data: any;
  }

  // lib/addons/p5.sound.js

  class SoundFile {
    // TODO: Fix p5.SoundFile() errors in lib/addons/p5.sound.js, line 738:
    //
    //   param "path" has invalid type: String/Array
    //
    // constructor(path: any, successCallback?: Function, errorCallback?: Function, whileLoadingCallback?: Function);

    // TODO: Fix loadSound() errors in lib/addons/p5.sound.js, line 851:
    //
    //   param "path" has invalid type: String/Array
    //
    // loadSound(path: any, successCallback?: Function, errorCallback?: Function, whileLoading?: Function): SoundFile;

    /**
     *   Returns true if the sound file finished loading 
     *   successfully.
     *
     */
    isLoaded(): boolean;

    /**
     *   Play the p5.SoundFile
     *
     *   @param [startTime] (optional) schedule playback to 
     *   start (in seconds from now).
     *   @param [rate] (optional) playback rate
     *   @param [amp] (optional) amplitude (volume) of 
     *   playback
     *   @param [cueStart] (optional) cue start time in 
     *   seconds
     *   @param [duration] (optional) duration of playback 
     *   in seconds
     */
    play(startTime?: number, rate?: number, amp?: number, cueStart?: number, duration?: number): void;

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
     *   @param [startTime] (optional) schedule event to 
     *   occur seconds from now
     */
    pause(startTime?: number): void;

    /**
     *   Loop the p5.SoundFile. Accepts optional parameters 
     *   to set the playback rate, playback volume, 
     *   loopStart, loopEnd.
     *
     *   @param [startTime] (optional) schedule event to 
     *   occur seconds from now
     *   @param [rate] (optional) playback rate
     *   @param [amp] (optional) playback volume
     *   @param [cueLoopStart] startTime in seconds
     *   @param [duration] (optional) loop duration in 
     *   seconds
     */
    loop(startTime?: number, rate?: number, amp?: number, cueLoopStart?: number, duration?: number): void;

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
     *   @param [startTime] (optional) schedule event to 
     *   occur in seconds from now
     */
    stop(startTime?: number): void;

    /**
     *   Multiply the output volume (amplitude) of a sound 
     *   file between 0.0 (silence) and 1.0 (full volume). 
     *   1.0 is the maximum amplitude of a digital sound, 
     *   so multiplying by greater than 1.0 may cause 
     *   digital distortion. To fade, provide a rampTime 
     *   parameter. For more complex fades, see the Env 
     *   class. Alternately, you can pass in a signal 
     *   source such as an oscillator to modulate the 
     *   amplitude with an audio signal.
     *
     *   @param volume Volume (amplitude) between 0.0 and 
     *   1.0 or modulating signal/oscillator
     *   @param [rampTime] Fade for t seconds
     *   @param [timeFromNow] Schedule this event to happen 
     *   at t seconds in the future
     */
    setVolume(volume: number|object, rampTime?: number, timeFromNow?: number): void;

    // TODO: Fix pan() errors in lib/addons/p5.sound.js, line 1365:
    //
    //   required param "timeFromNow" follows an optional param
    //
    // pan(panValue?: number, timeFromNow: number): void;

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
     *   @param uuration duration in seconds.
     */
    jump(cueTime: number, uuration: number): void;

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
     *   Schedule an event to be called when the soundfile 
     *   reaches the end of a buffer. If the soundfile is 
     *   playing through once, this will be called when it 
     *   ends. If it is looping, it will be called when 
     *   stop is called.
     *
     *   @param callback function to call when the 
     *   soundfile has ended.
     */
    onended(callback: Function): void;

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
     *   Reset the source for this SoundFile to a new path 
     *   (URL).
     *
     *   @param path path to audio file
     *   @param callback Callback
     */
    setPath(path: string, callback: Function): void;

    /**
     *   processPeaks returns an array of timestamps where 
     *   it thinks there is a beat. This is an asynchronous 
     *   function that processes the soundfile in an 
     *   offline audio context, and sends the results to 
     *   your callback function. 
     * 
     *   The process involves running the soundfile through 
     *   a lowpass filter, and finding all of the peaks 
     *   above the initial threshold. If the total number 
     *   of peaks are below the minimum number of peaks, it 
     *   decreases the threshold and re-runs the analysis 
     *   until either minPeaks or minThreshold are reached.
     *
     *   @param callback a function to call once this data 
     *   is returned
     *   @param [initThreshold] initial threshold defaults 
     *   to 0.9
     *   @param [minThreshold] minimum threshold defaults 
     *   to 0.22
     *   @param [minPeaks] minimum number of peaks defaults 
     *   to 200
     *   @return Array of timestamped peaks
     */
    processPeaks(callback: Function, initThreshold?: number, minThreshold?: number, minPeaks?: number): any[];

    /**
     *   Schedule events to trigger every time a 
     *   MediaElement (audio/video) reaches a playback cue 
     *   point. Accepts a callback function, a time (in 
     *   seconds) at which to trigger the callback, and an 
     *   optional parameter for the callback. 
     * 
     *   Time will be passed as the first parameter to the 
     *   callback function, and param will be the second 
     *   parameter.
     *
     *   @param time Time in seconds, relative to this 
     *   media element's playback. For example, to trigger 
     *   an event every time playback reaches two seconds, 
     *   pass in the number 2. This will be passed as the 
     *   first parameter to the callback function.
     *   @param callback Name of a function that will be 
     *   called at the given time. The callback will 
     *   receive time and (optionally) param as its two 
     *   parameters.
     *   @param [value] An object to be passed as the 
     *   second parameter to the callback function.
     *   @return id ID of this cue, useful for 
     *   removeCue(id)
     */
    addCue(time: number, callback: Function, value?: object): number;

    /**
     *   Remove a callback based on its ID. The ID is 
     *   returned by the addCue method.
     *
     *   @param id ID of the cue, as returned by addCue
     */
    removeCue(id: number): void;

    /**
     *   Remove all of the callbacks that had originally 
     *   been scheduled via the addCue method.
     *
     */
    clearCues(): void;
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
     *   @param [channel] Optionally return only channel 0 
     *   (left) or 1 (right)
     *   @return Amplitude as a number between 0.0 and 1.0
     */
    getLevel(channel?: number): number;

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
     *   @param set smoothing from 0.0 <= 1
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
     */
    setInput(source?: object): void;

    /**
     *   Returns an array of amplitude values (between -1.0 
     *   and +1.0) that represent a snapshot of amplitude 
     *   readings in a single buffer. Length will be equal 
     *   to bins (defaults to 1024). Can be used to draw 
     *   the waveform of a sound.
     *
     *   @param [bins] Must be a power of two between 16 
     *   and 1024. Defaults to 1024.
     *   @param [precision] If any value is provided, will 
     *   return results in a Float32 Array which is more 
     *   precise than a regular array.
     *   @return Array Array of amplitude values (-1 to 1) 
     *   over time. Array length = bins.
     */
    waveform(bins?: number, precision?: string): any[];

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
     *   @param [scale] If "dB," returns decibel float 
     *   measurements between -140 and 0 (max). Otherwise 
     *   returns integers from 0-255.
     *   @return spectrum Array of energy 
     *   (amplitude/volume) values across the frequency 
     *   spectrum. Lowest energy (silence) = 0, highest 
     *   possible is 255.
     */
    analyze(bins?: number, scale?: number): any[];

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
     *   Returns the  spectral centroid of the input 
     *   signal. NOTE: analyze() must be called prior to 
     *   getCentroid(). Analyze() tells the FFT to analyze 
     *   frequency data, and getCentroid() uses the results 
     *   determine the spectral centroid.
     *
     *   @return Spectral Centroid Frequency Frequency of 
     *   the spectral centroid in Hz.
     */
    getCentroid(): number;

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
     *   signal.</p. 
     * 
     *   This class mostly functions behind the scenes in 
     *   p5.sound, and returns a Tone.Signal from the 
     *   Tone.js library by Yotam Mann. If you want to work 
     *   directly with audio signals for modular synthesis, 
     *   check out tone.js.
     *
     *   @return A Signal object from the Tone.js library
     */
    constructor();

    // TODO: Fix fade() errors in lib/addons/p5.sound.js, line 4206:
    //
    //   param "secondsFromNow" has invalid type: [Number]
    //
    // fade(value: number, secondsFromNow: any): void;

    // TODO: Fix add() errors in lib/addons/p5.sound.js, line 4230:
    //
    //   return has invalid type: p5.SignalAdd
    //
    // add(number: number): any;

    // TODO: Fix mult() errors in lib/addons/p5.sound.js, line 4249:
    //
    //   return has invalid type: Tone.Multiply
    //
    // mult(number: number): any;

    // TODO: Fix scale() errors in lib/addons/p5.sound.js, line 4268:
    //
    //   return has invalid type: p5.SignalScale
    //
    // scale(number: number, inMin: number, inMax: number, outMin: number, outMax: number): any;

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
     *   Set the amplitude between 0 and 1.0. Or, pass in 
     *   an object such as an oscillator to modulate 
     *   amplitude with an audio signal.
     *
     *   @param vol between 0 and 1.0 or a modulating 
     *   signal/oscillator
     *   @param [rampTime] create a fade that lasts 
     *   rampTime
     *   @param [timeFromNow] schedule this event to happen 
     *   seconds from now
     *   @return gain If no value is provided, returns the 
     *   Web Audio API AudioParam that controls this 
     *   oscillator's gain/amplitude/volume)
     */
    amp(vol: number|object, rampTime?: number, timeFromNow?: number): AudioParam;

    /**
     *   Set frequency of an oscillator to a value. Or, 
     *   pass in an object such as an oscillator to 
     *   modulate the frequency with an audio signal.
     *
     *   @param Frequency Frequency in Hz or modulating 
     *   signal/oscillator
     *   @param [rampTime] Ramp time (in seconds)
     *   @param [timeFromNow] Schedule this event to happen 
     *   at x seconds from now
     *   @return Frequency If no value is provided, returns 
     *   the Web Audio API AudioParam that controls this 
     *   oscillator's frequency
     */
    freq(Frequency: number|object, rampTime?: number, timeFromNow?: number): AudioParam;

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
     *   @param timeFromNow schedule this event to happen 
     *   seconds from now
     */
    pan(panning: number, timeFromNow: number): void;

    /**
     *   Set the phase of an oscillator between 0.0 and 
     *   1.0. In this implementation, phase is a delay time 
     *   based on the oscillator's current frequency.
     *
     *   @param phase float between 0.0 and 1.0
     */
    phase(phase: number): void;

    /**
     *   Add a value to the p5.Oscillator's output 
     *   amplitude, and return the oscillator. Calling this 
     *   method again will override the initial add() with 
     *   a new value.
     *
     *   @param number Constant number to add
     *   @return Oscillator Returns this oscillator with 
     *   scaled output
     */
    add(number: number): p5.Oscillator;

    /**
     *   Multiply the p5.Oscillator's output amplitude by a 
     *   fixed value (i.e. turn it up!). Calling this 
     *   method again will override the initial mult() with 
     *   a new value.
     *
     *   @param number Constant number to multiply
     *   @return Oscillator Returns this oscillator with 
     *   multiplied output
     */
    mult(number: number): p5.Oscillator;

    /**
     *   Scale this oscillator's amplitude values to a 
     *   given range, and return the oscillator. Calling 
     *   this method again will override the initial 
     *   scale() with new values.
     *
     *   @param inMin input range minumum
     *   @param inMax input range maximum
     *   @param outMin input range minumum
     *   @param outMax input range maximum
     *   @return Oscillator Returns this oscillator with 
     *   scaled output
     */
    scale(inMin: number, inMax: number, outMin: number, outMax: number): p5.Oscillator;

    // TODO: Fix p5.SinOsc() errors in lib/addons/p5.sound.js, line 4745:
    //
    //   "p5.SinOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.SinOsc(freq: any): void;

    // TODO: Fix p5.TriOsc() errors in lib/addons/p5.sound.js, line 4760:
    //
    //   "p5.TriOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.TriOsc(freq: any): void;

    // TODO: Fix p5.SawOsc() errors in lib/addons/p5.sound.js, line 4775:
    //
    //   "p5.SawOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.SawOsc(freq: any): void;

    // TODO: Fix p5.SqrOsc() errors in lib/addons/p5.sound.js, line 4790:
    //
    //   "p5.SqrOsc" is not a valid JS symbol name
    //   param "freq" has invalid type: [Number]
    //
    // p5.SqrOsc(freq: any): void;

  }
  class Env {
    /**
     *   Envelopes are pre-defined amplitude distribution 
     *   over time. Typically, envelopes are used to 
     *   control the output volume of an object, a series 
     *   of fades referred to as Attack, Decay, Sustain and 
     *   Release ( ADSR ). Envelopes can also control other 
     *   Web Audio Parameters—for example, a p5.Env can 
     *   control an Oscillator's frequency like this: 
     *   osc.freq(env). Use setRange to change the 
     *   attack/release level. Use setADSR to change 
     *   attackTime, decayTime, sustainPercent and 
     *   releaseTime. 
     * 
     *   Use the play method to play the entire envelope, 
     *   the ramp method for a pingable trigger, or 
     *   triggerAttack/ triggerRelease to trigger 
     *   noteOn/noteOff.
     *
     */
    constructor();

    /**
     *   Time until envelope reaches attackLevel
     *
     */
    attackTime: any;

    /**
     *   Level once attack is complete.
     *
     */
    attackLevel: any;

    /**
     *   Time until envelope reaches decayLevel.
     *
     */
    decayTime: any;

    /**
     *   Level after decay. The envelope will sustain here 
     *   until it is released.
     *
     */
    decayLevel: any;

    /**
     *   Duration of the release portion of the envelope.
     *
     */
    releaseTime: any;

    /**
     *   Level at the end of the release.
     *
     */
    releaseLevel: any;

    /**
     *   Reset the envelope with a series of time/value 
     *   pairs.
     *
     *   @param attackTime Time (in seconds) before level 
     *   reaches attackLevel
     *   @param attackLevel Typically an amplitude between 
     *   0.0 and 1.0
     *   @param decayTime Time
     *   @param decayLevel Amplitude (In a standard ADSR 
     *   envelope, decayLevel = sustainLevel)
     *   @param releaseTime Release Time (in seconds)
     *   @param releaseLevel Amplitude
     */
    set(attackTime: number, attackLevel: number, decayTime: number, decayLevel: number, releaseTime: number, releaseLevel: number): void;

    /**
     *   Set values like a traditional  ADSR envelope .
     *
     *   @param attackTime Time (in seconds before envelope 
     *   reaches Attack Level
     *   @param [decayTime] Time (in seconds) before 
     *   envelope reaches Decay/Sustain Level
     *   @param [susRatio] Ratio between attackLevel and 
     *   releaseLevel, on a scale from 0 to 1, where 1.0 = 
     *   attackLevel, 0.0 = releaseLevel. The susRatio 
     *   determines the decayLevel and the level at which 
     *   the sustain portion of the envelope will sustain. 
     *   For example, if attackLevel is 0.4, releaseLevel 
     *   is 0, and susAmt is 0.5, the decayLevel would be 
     *   0.2. If attackLevel is increased to 1.0 (using 
     *   setRange), then decayLevel would increase 
     *   proportionally, to become 0.5.
     *   @param [releaseTime] Time in seconds from now 
     *   (defaults to 0)
     */
    setADSR(attackTime: number, decayTime?: number, susRatio?: number, releaseTime?: number): void;

    /**
     *   Set max (attackLevel) and min (releaseLevel) of 
     *   envelope.
     *
     *   @param aLevel attack level (defaults to 1)
     *   @param rLevel release level (defaults to 0)
     */
    setRange(aLevel: number, rLevel: number): void;

    /**
     *   Assign a parameter to be controlled by this 
     *   envelope. If a p5.Sound object is given, then the 
     *   p5.Env will control its output gain. If multiple 
     *   inputs are provided, the env will control all of 
     *   them.
     *
     *   @param unit A p5.sound object or Web Audio Param.
     */
    setInput(unit: object): void;

    /**
     *   Set whether the envelope ramp is linear (default) 
     *   or exponential. Exponential ramps can be useful 
     *   because we perceive amplitude and frequency 
     *   logarithmically.
     *
     *   @param isExp true is exponential, false is linear
     */
    setExp(isExp: boolean): void;

    /**
     *   Play tells the envelope to start acting on a given 
     *   input. If the input is a p5.sound object (i.e. 
     *   AudioIn, Oscillator, SoundFile), then Env will 
     *   control its output volume. Envelopes can also be 
     *   used to control any  Web Audio Audio Param.
     *
     *   @param unit A p5.sound object or Web Audio Param.
     *   @param [startTime] time from now (in seconds) at 
     *   which to play
     *   @param [sustainTime] time to sustain before 
     *   releasing the envelope
     */
    play(unit: object, startTime?: number, sustainTime?: number): void;

    /**
     *   Trigger the Attack, and Decay portion of the 
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

    /**
     *   Exponentially ramp to a value using the first two 
     *   values from setADSR(attackTime, decayTime) as  
     *   time constants for simple exponential ramps. If 
     *   the value is higher than current value, it uses 
     *   attackTime, while a decrease uses decayTime.
     *
     *   @param unit p5.sound Object or Web Audio Param
     *   @param secondsFromNow When to trigger the ramp
     *   @param v Target value
     *   @param [v2] Second target value (optional)
     */
    ramp(unit: object, secondsFromNow: number, v: number, v2?: number): void;

    /**
     *   Add a value to the p5.Oscillator's output 
     *   amplitude, and return the oscillator. Calling this 
     *   method again will override the initial add() with 
     *   new values.
     *
     *   @param number Constant number to add
     *   @return Envelope Returns this envelope with scaled 
     *   output
     */
    add(number: number): p5.Env;

    /**
     *   Multiply the p5.Env's output amplitude by a fixed 
     *   value. Calling this method again will override the 
     *   initial mult() with new values.
     *
     *   @param number Constant number to multiply
     *   @return Envelope Returns this envelope with scaled 
     *   output
     */
    mult(number: number): p5.Env;

    /**
     *   Scale this envelope's amplitude values to a given 
     *   range, and return the envelope. Calling this 
     *   method again will override the initial scale() 
     *   with new values.
     *
     *   @param inMin input range minumum
     *   @param inMax input range maximum
     *   @param outMin input range minumum
     *   @param outMax input range maximum
     *   @return Envelope Returns this envelope with scaled 
     *   output
     */
    scale(inMin: number, inMax: number, outMin: number, outMax: number): p5.Env;
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
     *   @param timeFromNow schedule this event to happen 
     *   seconds from now
     */
    pan(panning: number, timeFromNow: number): void;

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
     *   @param successCallback Name of a function to call 
     *   on success.
     *   @param errorCallback Name of a function to call if 
     *   there was an error. For example, some browsers do 
     *   not support getUserMedia.
     */
    start(successCallback: Function, errorCallback: Function): void;

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
     *   Chrome only. Returns a list of available input 
     *   sources and allows the user to set the media 
     *   source. Firefox allows the user to choose from 
     *   input sources in the permissions dialogue instead 
     *   of enumerating available sources and selecting 
     *   one. Note: in order to have descriptive media 
     *   names your page must be served over a secure 
     *   (HTTPS) connection and the page should request 
     *   user media before enumerating devices. Otherwise 
     *   device ID will be a long device ID number and does 
     *   not specify device type. For example see 
     *   https://simpl.info/getusermedia/sources/index.html 
     *   vs. 
     *   http://simpl.info/getusermedia/sources/index.html
     *
     *   @param callback a callback to handle the sources 
     *   when they have been enumerated
     */
    getSources(callback: Function): void;

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
    // TODO: Fix p5.Filter() errors in lib/addons/p5.sound.js, line 6593:
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

    // TODO: Fix process() errors in lib/addons/p5.sound.js, line 6685:
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
     *   @param [timeFromNow] schedule this event to happen 
     *   seconds from now
     */
    set(freq: number, res: number, timeFromNow?: number): void;

    /**
     *   Set the filter frequency, in Hz, from 10 to 22050 
     *   (the range of human hearing, although in reality 
     *   most people hear in a narrower range).
     *
     *   @param freq Filter Frequency
     *   @param [timeFromNow] schedule this event to happen 
     *   seconds from now
     *   @return value Returns the current frequency value
     */
    freq(freq: number, timeFromNow?: number): number;

    /**
     *   Controls either width of a bandpass frequency, or 
     *   the resonance of a low/highpass cutoff frequency.
     *
     *   @param res Resonance/Width of filter freq from 
     *   0.001 to 1000
     *   @param [timeFromNow] schedule this event to happen 
     *   seconds from now
     *   @return value Returns the current res value
     */
    res(res: number, timeFromNow?: number): number;

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

    // TODO: Fix p5.LowPass() errors in lib/addons/p5.sound.js, line 6824:
    //
    //   "p5.LowPass" is not a valid JS symbol name
    //
    // p5.LowPass(): void;

    // TODO: Fix p5.HighPass() errors in lib/addons/p5.sound.js, line 6836:
    //
    //   "p5.HighPass" is not a valid JS symbol name
    //
    // p5.HighPass(): void;

    // TODO: Fix p5.BandPass() errors in lib/addons/p5.sound.js, line 6848:
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

    /**
     *   Connect a source to the reverb, and assign reverb 
     *   parameters.
     *
     *   @param src p5.sound / Web Audio object with a 
     *   sound output.
     *   @param [seconds] Duration of the reverb, in 
     *   seconds. Min: 0, Max: 10. Defaults to 3.
     *   @param [decayRate] Percentage of decay with each 
     *   echo. Min: 0, Max: 100. Defaults to 2.
     *   @param [reverse] Play the reverb backwards or 
     *   forwards.
     */
    process(src: object, seconds?: number, decayRate?: number, reverse?: boolean): void;

    /**
     *   Set the reverb settings. Similar to .process(), 
     *   but without assigning a new input.
     *
     *   @param [seconds] Duration of the reverb, in 
     *   seconds. Min: 0, Max: 10. Defaults to 3.
     *   @param [decayRate] Percentage of decay with each 
     *   echo. Min: 0, Max: 100. Defaults to 2.
     *   @param [reverse] Play the reverb backwards or 
     *   forwards.
     */
    set(seconds?: number, decayRate?: number, reverse?: boolean): void;

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
    /**
     *   p5.Convolver extends p5.Reverb. It can emulate the 
     *   sound of real physical spaces through a process 
     *   called  convolution. Convolution multiplies any 
     *   audio input by an "impulse response" to simulate 
     *   the dispersion of sound over time. The impulse 
     *   response is generated from an audio file that you 
     *   provide. One way to generate an impulse response 
     *   is to pop a balloon in a reverberant space and 
     *   record the echo. Convolution can also be used to 
     *   experiment with sound. 
     * 
     *   Use the method createConvolution(path) to 
     *   instantiate a p5.Convolver with a path to your 
     *   impulse response audio file.
     *
     *   @param path path to a sound file
     *   @param [callback] function to call when loading 
     *   succeeds
     *   @param [errorCallback] function to call if loading 
     *   fails. This function will receive an error or 
     *   XMLHttpRequest object with information about what 
     *   went wrong.
     */
    constructor(path: string, callback?: Function, errorCallback?: Function);

    /**
     *   Internally, the p5.Convolver uses the a  Web Audio 
     *   Convolver Node.
     *
     */
    convolverNode: any;

    /**
     *   Create a p5.Convolver. Accepts a path to a 
     *   soundfile that will be used to generate an impulse 
     *   response.
     *
     *   @param path path to a sound file
     *   @param [callback] function to call if loading is 
     *   successful. The object will be passed in as the 
     *   argument to the callback function.
     *   @param [errorCallback] function to call if loading 
     *   is not successful. A custom error will be passed 
     *   in as the argument to the callback function.
     */
    createConvolver(path: string, callback?: Function, errorCallback?: Function): p5.Convolver;

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

    /**
     *   Load and assign a new Impulse Response to the 
     *   p5.Convolver. The impulse is added to the 
     *   .impulses array. Previous impulses can be accessed 
     *   with the .toggleImpulse(id) method.
     *
     *   @param path path to a sound file
     *   @param callback function (optional)
     *   @param errorCallback function (optional)
     */
    addImpulse(path: string, callback: Function, errorCallback: Function): void;

    /**
     *   Similar to .addImpulse, except that the .impulses 
     *   Array is reset to save memory. A new .impulses 
     *   array is created with this impulse as the only 
     *   item.
     *
     *   @param path path to a sound file
     *   @param callback function (optional)
     *   @param errorCallback function (optional)
     */
    resetImpulse(path: string, callback: Function, errorCallback: Function): void;

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
  class Phrase {
    /**
     *   A phrase is a pattern of musical events over time, 
     *   i.e. a series of notes and rests. Phrases must be 
     *   added to a p5.Part for playback, and each part can 
     *   play multiple phrases at the same time. For 
     *   example, one Phrase might be a kick drum, another 
     *   could be a snare, and another could be the 
     *   bassline. 
     * 
     *   The first parameter is a name so that the phrase 
     *   can be modified or deleted later. The callback is 
     *   a a function that this phrase will call at every 
     *   step—for example it might be called 
     *   playNote(value){}. The array determines which 
     *   value is passed into the callback at each step of 
     *   the phrase. It can be numbers, an object with 
     *   multiple numbers, or a zero (0) indicates a rest 
     *   so the callback won't be called).
     *
     *   @param name Name so that you can access the 
     *   Phrase.
     *   @param callback The name of a function that this 
     *   phrase will call. Typically it will play a sound, 
     *   and accept two parameters: a time at which to play 
     *   the sound (in seconds from now), and a value from 
     *   the sequence array. The time should be passed into 
     *   the play() or start() method to ensure precision.
     *   @param sequence Array of values to pass into the 
     *   callback at each step of the phrase.
     */
    constructor(name: string, callback: Function, sequence: any[]);

    /**
     *   Array of values to pass into the callback at each 
     *   step of the phrase. Depending on the callback 
     *   function's requirements, these values may be 
     *   numbers, strings, or an object with multiple 
     *   parameters. Zero (0) indicates a rest.
     *
     */
    sequence: any;
  }
  class Part {
    /**
     *   A p5.Part plays back one or more p5.Phrases. 
     *   Instantiate a part with steps and tatums. By 
     *   default, each step represents 1/16th note. See 
     *   p5.Phrase for more about musical timing.
     *
     *   @param [steps] Steps in the part
     *   @param [tatums] Divisions of a beat (default is 
     *   1/16, a quarter note)
     */
    constructor(steps?: number, tatums?: number);

    /**
     *   Set the tempo of this part, in Beats Per Minute.
     *
     *   @param BPM Beats Per Minute
     *   @param [rampTime] Seconds from now
     */
    setBPM(BPM: number, rampTime?: number): void;

    /**
     *   Returns the Beats Per Minute of this currently 
     *   part.
     *
     */
    getBPM(): number;

    /**
     *   Start playback of this part. It will play through 
     *   all of its phrases at a speed determined by 
     *   setBPM.
     *
     *   @param [time] seconds from now
     */
    start(time?: number): void;

    /**
     *   Loop playback of this part. It will begin looping 
     *   through all of its phrases at a speed determined 
     *   by setBPM.
     *
     *   @param [time] seconds from now
     */
    loop(time?: number): void;

    /**
     *   Tell the part to stop looping.
     *
     */
    noLoop(): void;

    /**
     *   Stop the part and cue it to step 0.
     *
     *   @param [time] seconds from now
     */
    stop(time?: number): void;

    /**
     *   Pause the part. Playback will resume from the 
     *   current step.
     *
     *   @param time seconds from now
     */
    pause(time: number): void;

    /**
     *   Add a p5.Phrase to this Part.
     *
     *   @param phrase reference to a p5.Phrase
     */
    addPhrase(phrase: p5.Phrase): void;

    /**
     *   Remove a phrase from this part, based on the name 
     *   it was given when it was created.
     *
     */
    removePhrase(phraseName: string): void;

    /**
     *   Get a phrase from this part, based on the name it 
     *   was given when it was created. Now you can modify 
     *   its array.
     *
     */
    getPhrase(phraseName: string): void;

    /**
     *   Get a phrase from this part, based on the name it 
     *   was given when it was created. Now you can modify 
     *   its array.
     *
     *   @param sequence Array of values to pass into the 
     *   callback at each step of the phrase.
     */
    replaceSequence(phraseName: string, sequence: any[]): void;

    /**
     *   Fire a callback function at every step.
     *
     *   @param callback The name of the callback you want 
     *   to fire on every beat/tatum.
     */
    onStep(callback: Function): void;
  }
  class Score {
    // TODO: Fix p5.Score() errors in lib/addons/p5.sound.js, line 8267:
    //
    //   param "part(s)" is not a valid JS symbol name
    //
    // constructor(part(s): p5.Part);

    /**
     *   Start playback of the score.
     *
     */
    start(): void;

    /**
     *   Stop playback of the score.
     *
     */
    stop(): void;

    /**
     *   Pause playback of the score.
     *
     */
    pause(): void;

    /**
     *   Loop playback of the score.
     *
     */
    loop(): void;

    /**
     *   Stop looping playback of the score. If it is 
     *   currently playing, this will go into effect after 
     *   the current round of playback completes.
     *
     */
    noLoop(): void;
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
  class PeakDetect {
    /**
     *   PeakDetect works in conjunction with p5.FFT to 
     *   look for onsets in some or all of the frequency 
     *   spectrum.   To use p5.PeakDetect, call update in 
     *   the draw loop and pass in a p5.FFT object.  
     * 
     *  
     *   You can listen for a specific part of the 
     *   frequency spectrum by setting the range between 
     *   freq1 and freq2.  
     * 
     *   threshold is the threshold for detecting a peak, 
     *   scaled between 0 and 1. It is logarithmic, so 0.1 
     *   is half as loud as 1.0. 
     * 
     *  
     *   The update method is meant to be run in the draw 
     *   loop, and frames determines how many loops must 
     *   pass before another peak can be detected. For 
     *   example, if the frameRate() = 60, you could detect 
     *   the beat of a 120 beat-per-minute song with this 
     *   equation:  framesPerPeak = 60 / (estimatedBPM / 60 
     *   );  
     * 
     *  
     *   Based on example contribtued by @b2renger, and a 
     *   simple beat detection explanation by Felix Turner.
     *
     *   @param [freq1] lowFrequency - defaults to 20Hz
     *   @param [freq2] highFrequency - defaults to 20000 
     *   Hz
     *   @param [threshold] Threshold for detecting a beat 
     *   between 0 and 1 scaled logarithmically where 0.1 
     *   is 1/2 the loudness of 1.0. Defaults to 0.35.
     *   @param [framesPerPeak] Defaults to 20.
     */
    constructor(freq1?: number, freq2?: number, threshold?: number, framesPerPeak?: number);
    // TODO: Annotate attribute "isDetected", defined in lib/addons/p5.sound.js, line 8781

    /**
     *   The update method is run in the draw loop. Accepts 
     *   an FFT object. You must call .analyze() on the FFT 
     *   object prior to updating the peakDetect because it 
     *   relies on a completed FFT analysis.
     *
     *   @param fftObject A p5.FFT object
     */
    update(fftObject: p5.FFT): void;

    /**
     *   onPeak accepts two arguments: a function to call 
     *   when a peak is detected. The value of the peak, 
     *   between 0.0 and 1.0, is passed to the callback.
     *
     *   @param callback Name of a function that will be 
     *   called when a peak is detected.
     *   @param [val] Optional value to pass into the 
     *   function when a peak is detected.
     */
    onPeak(callback: Function, val?: object): void;
  }
  class Gain {
    /**
     *   A gain node is usefull to set the relative volume 
     *   of sound. It's typically used to build mixers.
     *
     */
    constructor();

    /**
     *   Connect a source to the gain node.
     *
     *   @param src p5.sound / Web Audio object with a 
     *   sound output.
     */
    setInput(src: object): void;

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

    /**
     *   Set the output level of the gain node.
     *
     *   @param volume amplitude between 0 and 1.0
     *   @param [rampTime] create a fade that lasts 
     *   rampTime
     *   @param [timeFromNow] schedule this event to happen 
     *   seconds from now
     */
    amp(volume: number, rampTime?: number, timeFromNow?: number): void;
  }
}

// Literals 

// Constants 
type COLOR_MODE =
      RGB
    | HSB;

type TYPE =
      VIDEO
    | AUDIO;

