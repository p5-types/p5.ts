// Type definitions for p5 0.4
// Project: https://github.com/processing/p5.js
// Definitions by: p5-types <https://github.com/p5-types>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This file was auto-generated. Please do not edit it.

///<reference path="index.d.ts" />


// Properties from p5

// src/3d/3d_primitives.js

/**
 *   Draw a plane with given a width and height
 *
 *   @param width width of the plane
 *   @param height height of the plane
 *   @return the p5 object
 */
declare function plane(width: number, height: number): p5;

/**
 *   Draw a sphere with given raduis
 *
 *   @param radius radius of circle
 *   @param [detail] number of segments, the more 
 *   segments the smoother geometry default is 24. 
 *   Avoid detail number above 150, it may crash the 
 *   browser.
 */
declare function sphere(radius: number, detail?: number): void;

/**
 *   Draw an ellipsoid with given raduis
 *
 *   @param radiusx xradius of circle
 *   @param radiusy yradius of circle
 *   @param radiusz zradius of circle
 *   @param [detail] number of segments, the more 
 *   segments the smoother geometry default is 24. 
 *   Avoid detail number above 150. It may crash the 
 *   browser.
 *   @return the p5 object
 */
declare function ellipsoid(radiusx: number, radiusy: number, radiusz: number, detail?: number): p5;

/**
 *   Draw a cylinder with given radius and height
 *
 *   @param radius radius of the surface
 *   @param height height of the cylinder
 *   @param [detail] number of segments, the more 
 *   segments the smoother geometry default is 24. 
 *   Avoid detail number above 150. It may crash the 
 *   browser.
 *   @return the p5 object
 */
declare function cylinder(radius: number, height: number, detail?: number): p5;

/**
 *   Draw a cone with given radius and height
 *
 *   @param radius radius of the bottom surface
 *   @param height height of the cone
 *   @param [detail] number of segments, the more 
 *   segments the smoother geometry default is 24. 
 *   Avoid detail number above 150. It may crash the 
 *   browser.
 */
declare function cone(radius: number, height: number, detail?: number): void;

/**
 *   Draw a torus with given radius and tube radius
 *
 *   @param radius radius of the whole ring
 *   @param tubeRadius radius of the tube
 *   @param [detail] number of segments, the more 
 *   segments the smoother geometry default is 24. 
 *   Avoid detail number above 150. It may crash the 
 *   browser.
 */
declare function torus(radius: number, tubeRadius: number, detail?: number): void;

/**
 *   Draw a box with given width, height and depth
 *
 *   @param width width of the box
 *   @param height height of the box
 *   @param depth depth of the box
 *   @return the p5 object
 */
declare function box(width: number, height: number, depth: number): p5;

// src/3d/camera.js

/**
 *   Sets camera position
 *
 *   @param x camera postion value on x axis
 *   @param y camera postion value on y axis
 *   @param z camera postion value on z axis
 *   @return the p5 object
 */
declare function camera(x: number, y: number, z: number): p5;

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
declare function perspective(fovy: number, aspect: number, near: number, far: number): p5;

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
declare function ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): p5;

// src/3d/light.js

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
declare function ambientLight(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5;

// TODO: Fix directionalLight() errors in src/3d/light.js, line 68:
//
//   required param "x" follows an optional param
//
// declare function directionalLight(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number, x: number|p5.Vector, y?: number, z?: number): p5;

// TODO: Fix pointLight() errors in src/3d/light.js, line 188:
//
//   required param "x" follows an optional param
//
// declare function pointLight(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number, x: number|p5.Vector, y?: number, z?: number): p5;

// src/3d/material.js

/**
 *   Normal material for geometry
 *
 *   @return the p5 object
 */
declare function normalMaterial(): p5;

/**
 *   Texture for geometry
 *
 *   @return the p5 object
 */
declare function texture(): p5;

/**
 *   Basic material for geometry with a given color
 *
 *   @param v1 gray value, red or hue value (depending 
 *   on the current color mode), or color Array, or CSS 
 *   color string
 *   @param [v2] optional: green or saturation value
 *   @param [v3] optional: blue or brightness value
 *   @param [a] optional: opacity
 *   @return the p5 object
 */
declare function basicMaterial(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5;

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
declare function ambientMaterial(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5;

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
declare function specularMaterial(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): p5;

// src/color/creating_reading.js

/**
 *   Extracts the alpha value from a color or pixel 
 *   array.
 *
 *   @param obj p5.Color object or pixel array
 */
declare function alpha(obj: object): void;

/**
 *   Extracts the blue value from a color or pixel 
 *   array.
 *
 *   @param obj p5.Color object or pixel array
 */
declare function blue(obj: object): void;

/**
 *   Extracts the HSB brightness value from a color or 
 *   pixel array.
 *
 *   @param color p5.Color object or pixel array
 */
declare function brightness(color: object): void;

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
 *   CSS-compatible color string. Colors are stored as 
 *   Numbers or Arrays.
 *
 *   @param v1 gray value or red or hue value relative 
 *   to the current color range, or a color string
 *   @param [v2] gray value or green or saturation 
 *   value relative to the current color range (or 
 *   alpha value if first param is gray value)
 *   @param [v3] gray value or blue or brightness value 
 *   relative to the current color range
 *   @param [alpha] alpha value relative to current 
 *   color range
 *   @return resulting color
 */
declare function color(v1: number|string, v2?: number, v3?: number, alpha?: number): any[];

/**
 *   Extracts the green value from a color or pixel 
 *   array.
 *
 *   @param color p5.Color object or pixel array
 */
declare function green(color: object): void;

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
declare function hue(color: object): void;

// TODO: Fix lerpColor() errors in src/color/creating_reading.js, line 315:
//
//   param "c1" has invalid type: Array/Number
//   param "c2" has invalid type: Array/Number
//   return has invalid type: Array/Number
//
// declare function lerpColor(c1: any, c2: any, amt: number): any;

/**
 *   Extracts the HSL lightness value from a color or 
 *   pixel array.
 *
 *   @param color p5.Color object or pixel array
 */
declare function lightness(color: object): void;

/**
 *   Extracts the red value from a color or pixel 
 *   array.
 *
 *   @param obj p5.Color object or pixel array
 */
declare function red(obj: object): void;

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
declare function saturation(color: object): void;

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
 *   on the current color mode), color string, 
 *   p5.Color, or p5.Image
 *   @param [v2] green or saturation value (depending 
 *   on the current color mode)
 *   @param [v3] blue or brightness value (depending on 
 *   the current color mode)
 *   @param [a] opacity of the background
 */
declare function background(v1: number|string|p5.Color|p5.Image, v2?: number, v3?: number, a?: number): void;

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
declare function clear(): void;

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
declare function colorMode(mode: number|COLOR_MODE, max1?: number|UNKNOWN_P5_CONSTANT, max2?: number|UNKNOWN_P5_CONSTANT, max3?: number|UNKNOWN_P5_CONSTANT, maxA?: number|UNKNOWN_P5_CONSTANT): void;

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
declare function fill(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): void;

/**
 *   Disables filling geometry. If both noStroke() and 
 *   noFill() are called, nothing will be drawn to the 
 *   screen.
 *
 */
declare function noFill(): void;

/**
 *   Disables drawing the stroke (outline). If both 
 *   noStroke() and noFill() are called, nothing will 
 *   be drawn to the screen.
 *
 */
declare function noStroke(): void;

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
declare function stroke(v1: number|any[]|string|p5.Color, v2?: number, v3?: number, a?: number): void;

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
declare function arc(a: number, b: number, c: number, d: number, start: number, stop: number, mode?: string): object;

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
declare function ellipse(a: number, b: number, c: number, d: number): p5;

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
declare function line(x1: number, y1: number, x2: number, y2: number): p5;

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
declare function point(x: number, y: number): p5;

// TODO: Fix quad() errors in src/core/2d_primitives.js, line 310:
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
// declare function quad(x1: any, y1: any, x2: any, y2: any, x3: any, y3: any, x4: any, y4: any): p5;

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
 *   @return the p5 object.
 */
declare function rect(x: number, y: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

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
declare function triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): p5;

// src/core/attributes.js

// TODO: Fix ellipseMode() errors in src/core/attributes.js, line 14:
//
//   param "mode" has invalid type: Number/Constant
//
// declare function ellipseMode(mode: any): p5;

/**
 *   Draws all geometry with jagged (aliased) edges. 
 *   Note that smooth() is active by default, so it is 
 *   necessary to call noSmooth() to disable smoothing 
 *   of geometry, images, and fonts.
 *
 *   @return the p5 object
 */
declare function noSmooth(): p5;

// TODO: Fix rectMode() errors in src/core/attributes.js, line 99:
//
//   param "mode" has invalid type: Number/Constant
//
// declare function rectMode(mode: any): p5;

/**
 *   Draws all geometry with smooth (anti-aliased) 
 *   edges. smooth() will also improve image quality of 
 *   resized images. Note that smooth() is active by 
 *   default; noSmooth() can be used to disable 
 *   smoothing of geometry, images, and fonts.
 *
 *   @return the p5 object
 */
declare function smooth(): p5;

// TODO: Fix strokeCap() errors in src/core/attributes.js, line 185:
//
//   param "cap" has invalid type: Number/Constant
//
// declare function strokeCap(cap: any): p5;

// TODO: Fix strokeJoin() errors in src/core/attributes.js, line 215:
//
//   param "join" has invalid type: Number/Constant
//
// declare function strokeJoin(join: any): p5;

/**
 *   Sets the width of the stroke used for lines, 
 *   points, and the border around shapes. All widths 
 *   are set in units of pixels.
 *
 *   @param weight the weight (in pixels) of the stroke
 *   @return the p5 object
 */
declare function strokeWeight(weight: number): p5;

// src/core/constants.js

/**
 *   HALF_PI is a mathematical constant with the value 
 *   1.57079632679489661923. It is half the ratio of 
 *   the circumference of a circle to its diameter. It 
 *   is useful in combination with the trigonometric 
 *   functions sin() and cos().
 *
 */
declare var HALF_PI: any;

/**
 *   PI is a mathematical constant with the value 
 *   3.14159265358979323846. It is the ratio of the 
 *   circumference of a circle to its diameter. It is 
 *   useful in combination with the trigonometric 
 *   functions sin() and cos().
 *
 */
declare var PI: any;

/**
 *   QUARTER_PI is a mathematical constant with the 
 *   value 0.7853982. It is one quarter the ratio of 
 *   the circumference of a circle to its diameter. It 
 *   is useful in combination with the trigonometric 
 *   functions sin() and cos().
 *
 */
declare var QUARTER_PI: any;

/**
 *   TAU is an alias for TWO_PI, a mathematical 
 *   constant with the value 6.28318530717958647693. It 
 *   is twice the ratio of the circumference of a 
 *   circle to its diameter. It is useful in 
 *   combination with the trigonometric functions sin() 
 *   and cos().
 *
 */
declare var TAU: any;

/**
 *   TWO_PI is a mathematical constant with the value 
 *   6.28318530717958647693. It is twice the ratio of 
 *   the circumference of a circle to its diameter. It 
 *   is useful in combination with the trigonometric 
 *   functions sin() and cos().
 *
 */
declare var TWO_PI: any;

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
declare function preload(): void;

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
declare function setup(): void;

/**
 *   Called directly after setup(), the draw() function 
 *   continuously executes the lines of code contained 
 *   inside its block until the program is stopped or 
 *   noLoop() is called. draw() is called automatically 
 *   and should never be called explicitly.  It should 
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
 */
declare function draw(): void;

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
declare function remove(): void;

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
 *   @return the p5 object
 */
declare function bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): object;

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
declare function bezierPoint(a: number, b: number, c: number, d: number, t: number): number;

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
declare function bezierTangent(a: number, b: number, c: number, d: number, t: number): number;

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
 *   @return the p5 object
 */
declare function curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): object;

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
declare function curveTightness(amount: number): object;

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
declare function curvePoint(a: number, b: number, c: number, d: number, t: number): number;

/**
 *   Evaluates the tangent to the curve at position t 
 *   for points a, b, c, d. The parameter t varies 
 *   between 0 and 1, a and d are points on the curve, 
 *   and b and c are the control points
 *
 *   @param a coordinate of first point on the curve
 *   @param b coordinate of first control point
 *   @param c coordinate of second control point
 *   @param d coordinate of second point on the curve
 *   @param t value between 0 and 1
 *   @return the tangent at position t
 */
declare function curveTangent(a: number, b: number, c: number, d: number, t: number): number;

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
declare function print(contents: any): void;

/**
 *   The system variable frameCount contains the number 
 *   of frames that have been displayed since the 
 *   program started. Inside setup() the value is 0, 
 *   after the first iteration of draw it is 1, etc.
 *
 */
declare var frameCount: any;

/**
 *   Confirms if the window a p5.js program is in is 
 *   "focused," meaning that the sketch will accept 
 *   mouse or keyboard input. This variable is "true" 
 *   if the window is focused and "false" if not.
 *
 */
declare var focused: any;

// TODO: Fix cursor() errors in src/core/environment.js, line 111:
//
//   param "type" has invalid type: Number/Constant
//
// declare function cursor(type: any, x?: number, y?: number): void;

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
declare function frameRate(fps?: number): number;

/**
 *   Hides the cursor from view.
 *
 */
declare function noCursor(): void;

/**
 *   System variable that stores the width of the 
 *   entire screen display. This is used to run a 
 *   full-screen program on any display size.
 *
 */
declare var displayWidth: any;

/**
 *   System variable that stores the height of the 
 *   entire screen display. This is used to run a 
 *   full-screen program on any display size.
 *
 */
declare var displayHeight: any;

/**
 *   System variable that stores the width of the inner 
 *   window, it maps to window.innerWidth.
 *
 */
declare var windowWidth: any;

/**
 *   System variable that stores the height of the 
 *   inner window, it maps to window.innerHeight.
 *
 */
declare var windowHeight: any;

/**
 *   The windowResized() function is called once every 
 *   time the browser window is resized. This is a good 
 *   place to resize the canvas or do any other 
 *   adjustements to accomodate the new window size.
 *
 */
declare function windowResized(): void;

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
declare var width: any;

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
declare var height: any;

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
declare function fullScreen(val?: boolean): boolean;

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
declare function pixelDensity(val?: number): number;

/**
 *   Returns the pixel density of the current display 
 *   the sketch is running on.
 *
 *   @return current pixel density of the display
 */
declare function displayDensity(): number;

/**
 *   Gets the current URL.
 *
 *   @return url
 */
declare function getURL(): string;

/**
 *   Gets the current URL path as an array.
 *
 *   @return path components
 */
declare function getURLPath(): any[];

/**
 *   Gets the current URL params as an Object.
 *
 *   @return URL params
 */
declare function getURLParams(): object;

// src/core/rendering.js

// TODO: Fix createCanvas() errors in src/core/rendering.js, line 14:
//
//   param "optional:" is not a valid JS symbol name
//
// declare function createCanvas(w: number, h: number, optional:: string): object;

/**
 *   Resizes the canvas to given width and height. The 
 *   canvas will be cleared and draw will be called 
 *   immediately, allowing the sketch to re-render 
 *   itself in the resized canvas.
 *
 */
declare function resizeCanvas(): void;

/**
 *   Removes the default canvas for a p5 sketch that 
 *   doesn't require a canvas
 *
 */
declare function noCanvas(): void;

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
declare function createGraphics(w: number, h: number, renderer: string): object;

// TODO: Fix blendMode() errors in src/core/rendering.js, line 207:
//
//   param "mode" has invalid type: String/Constant
//
// declare function blendMode(mode: any): void;

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
declare function noLoop(): void;

/**
 *   By default, p5.js loops through draw() 
 *   continuously, executing the code within it. 
 *   However, the draw() loop may be stopped by calling 
 *   noLoop(). In that case, the draw() loop can be 
 *   resumed with loop().
 *
 */
declare function loop(): void;

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
declare function push(): void;

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
declare function pop(): void;

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
declare function redraw(): void;

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
declare function applyMatrix(n00: number, n01: number, n02: number, n10: number, n11: number, n12: number): p5;

/**
 *   Replaces the current matrix with the identity 
 *   matrix.
 *
 *   @return the p5 object
 */
declare function resetMatrix(): p5;

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
 *   @return the p5 object
 */
declare function rotate(angle: number): p5;

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
 *   Using this fuction with the z parameter requires 
 *   using P3D as a parameter for size(), as shown in 
 *   the third example above. This function can be 
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
declare function scale(s: number|p5.Vector|any[], y?: number, z?: number): p5;

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
declare function shearX(angle: number): p5;

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
declare function shearY(angle: number): p5;

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
 *   @return the p5 object
 */
declare function translate(x: number, y: number): p5;

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
declare function beginContour(): object;

// TODO: Fix beginShape() errors in src/core/vertex.js, line 65:
//
//   param "kind" has invalid type: Number/Constant
//
// declare function beginShape(kind: any): object;

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
declare function bezierVertex(x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): object;

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
declare function curveVertex(x: number, y: number): object;

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
declare function endContour(): object;

// TODO: Fix endShape() errors in src/core/vertex.js, line 399:
//
//   param "mode" has invalid type: Number/Constant
//
// declare function endShape(mode: any): object;

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
declare function quadraticVertex(cx: number, cy: number, x3: number, y3: number): object;

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
declare function vertex(x: number, y: number): object;

// src/events/acceleration.js

/**
 *   The system variable deviceOrientation always 
 *   contains the orientation of the device. The value 
 *   of this variable will either be set 'landscape' or 
 *   'portrait'. If no data is available it will be set 
 *   to 'undefined'.
 *
 */
declare var deviceOrientation: any;

/**
 *   The system variable accelerationX always contains 
 *   the acceleration of the device along the x axis. 
 *   Value is represented as meters per second squared.
 *
 */
declare var accelerationX: any;

/**
 *   The system variable accelerationY always contains 
 *   the acceleration of the device along the y axis. 
 *   Value is represented as meters per second squared.
 *
 */
declare var accelerationY: any;

/**
 *   The system variable accelerationZ always contains 
 *   the acceleration of the device along the z axis. 
 *   Value is represented as meters per second squared.
 *
 */
declare var accelerationZ: any;

/**
 *   The system variable pAccelerationX always contains 
 *   the acceleration of the device along the x axis in 
 *   the frame previous to the current frame. Value is 
 *   represented as meters per second squared.
 *
 */
declare var pAccelerationX: any;

/**
 *   The system variable pAccelerationY always contains 
 *   the acceleration of the device along the y axis in 
 *   the frame previous to the current frame. Value is 
 *   represented as meters per second squared.
 *
 */
declare var pAccelerationY: any;

/**
 *   The system variable pAccelerationZ always contains 
 *   the acceleration of the device along the z axis in 
 *   the frame previous to the current frame. Value is 
 *   represented as meters per second squared.
 *
 */
declare var pAccelerationZ: any;

/**
 *   The system variable rotationX always contains the 
 *   rotation of the device along the x axis. Value is 
 *   represented as 0 to +/-180 degrees.
 *
 */
declare var rotationX: any;

/**
 *   The system variable rotationY always contains the 
 *   rotation of the device along the y axis. Value is 
 *   represented as 0 to +/-180 degrees.
 *
 */
declare var rotationY: any;

/**
 *   The system variable rotationZ always contains the 
 *   rotation of the device along the z axis. Value is 
 *   represented as 0 to 359 degrees.  Unlike rotationX 
 *   and rotationY, this variable is available for 
 *   devices with a built-in compass only.
 *
 */
declare var rotationZ: any;

/**
 *   The system variable pRotationX always contains the 
 *   rotation of the device along the x axis in the 
 *   frame previous to the current frame. Value is 
 *   represented as 0 to +/-180 degrees.  pRotationX 
 *   can also be used with rotationX to determine the 
 *   rotate direction of the device along the X-axis.
 *
 */
declare var pRotationX: any;

/**
 *   The system variable pRotationY always contains the 
 *   rotation of the device along the y axis in the 
 *   frame previous to the current frame. Value is 
 *   represented as 0 to +/-180 degrees.  pRotationY 
 *   can also be used with rotationY to determine the 
 *   rotate direction of the device along the Y-axis.
 *
 */
declare var pRotationY: any;

/**
 *   The system variable pRotationZ always contains the 
 *   rotation of the device along the z axis in the 
 *   frame previous to the current frame. Value is 
 *   represented as 0 to 359 degrees.  pRotationZ can 
 *   also be used with rotationZ to determine the 
 *   rotate direction of the device along the Z-axis.
 *
 */
declare var pRotationZ: any;

/**
 *   The setMoveThreshold() function is used to set the 
 *   movement threshold for the deviceMoved() function. 
 *   The default threshold is set to 0.5.
 *
 *   @param value The threshold value
 */
declare function setMoveThreshold(value: number): void;

/**
 *   The setShakeThreshold() function is used to set 
 *   the movement threshold for the deviceShaken() 
 *   function. The default threshold is set to 30.
 *
 *   @param value The threshold value
 */
declare function setShakeThreshold(value: number): void;

/**
 *   The deviceMoved() function is called when the 
 *   device is moved by more than the threshold value 
 *   along X, Y or Z axis. The default threshold is set 
 *   to 0.5.
 *
 */
declare function deviceMoved(): void;

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
declare function deviceTurned(): void;

/**
 *   The deviceShaken() function is called when the 
 *   device total acceleration changes of accelerationX 
 *   and accelerationY values is more than the 
 *   threshold value. The default threshold is set to 
 *   30.
 *
 */
declare function deviceShaken(): void;

// src/events/keyboard.js

/**
 *   The boolean system variable keyIsPressed is true 
 *   if any key is pressed and false if no keys are 
 *   pressed.
 *
 */
declare var keyIsPressed: any;

/**
 *   The system variable key always contains the value 
 *   of the most recent key on the keyboard that was 
 *   typed. To get the proper capitalization, it is 
 *   best to use it within keyTyped(). For non-ASCII 
 *   keys, use the keyCode variable.
 *
 */
declare var key: any;

/**
 *   The variable keyCode is used to detect special 
 *   keys such as BACKSPACE, DELETE, ENTER, RETURN, 
 *   TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, 
 *   UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.
 *
 */
declare var keyCode: any;

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
declare function keyPressed(): void;

/**
 *   The keyReleased() function is called once every 
 *   time a key is released. See key and keyCode for 
 *   more information. Browsers may have different 
 *   default behaviors attached to various key events. 
 *   To prevent any default behavior for this event, 
 *   add "return false" to the end of the method.
 *
 */
declare function keyReleased(): void;

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
declare function keyTyped(): void;

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
declare function keyIsDown(code: number): boolean;

// src/events/mouse.js

/**
 *   The system variable mouseX always contains the 
 *   current horizontal position of the mouse, relative 
 *   to (0, 0) of the canvas.
 *
 */
declare var mouseX: any;

/**
 *   The system variable mouseY always contains the 
 *   current vertical position of the mouse, relative 
 *   to (0, 0) of the canvas.
 *
 */
declare var mouseY: any;

/**
 *   The system variable pmouseX always contains the 
 *   horizontal position of the mouse in the frame 
 *   previous to the current frame, relative to (0, 0) 
 *   of the canvas.
 *
 */
declare var pmouseX: any;

/**
 *   The system variable pmouseY always contains the 
 *   vertical position of the mouse in the frame 
 *   previous to the current frame, relative to (0, 0) 
 *   of the canvas.
 *
 */
declare var pmouseY: any;

/**
 *   The system variable winMouseX always contains the 
 *   current horizontal position of the mouse, relative 
 *   to (0, 0) of the window.
 *
 */
declare var winMouseX: any;

/**
 *   The system variable winMouseY always contains the 
 *   current vertical position of the mouse, relative 
 *   to (0, 0) of the window.
 *
 */
declare var winMouseY: any;

/**
 *   The system variable pwinMouseX always contains the 
 *   horizontal position of the mouse in the frame 
 *   previous to the current frame, relative to (0, 0) 
 *   of the window.
 *
 */
declare var pwinMouseX: any;

/**
 *   The system variable pwinMouseY always contains the 
 *   vertical position of the mouse in the frame 
 *   previous to the current frame, relative to (0, 0) 
 *   of the window.
 *
 */
declare var pwinMouseY: any;

/**
 *   Processing automatically tracks if the mouse 
 *   button is pressed and which button is pressed. The 
 *   value of the system variable mouseButton is either 
 *   LEFT, RIGHT, or CENTER depending on which button 
 *   was pressed last. Warning: different browsers may 
 *   track mouseButton differently.
 *
 */
declare var mouseButton: any;

/**
 *   The boolean system variable mouseIsPressed is true 
 *   if the mouse is pressed and false if not.
 *
 */
declare var mouseIsPressed: any;

/**
 *   The mouseMoved() function is called every time the 
 *   mouse moves and a mouse button is not pressed. 
 *   Browsers may have different default behaviors 
 *   attached to various mouse events. To prevent any 
 *   default behavior for this event, add "return 
 *   false" to the end of the method.
 *
 */
declare function mouseMoved(): void;

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
declare function mouseDragged(): void;

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
declare function mousePressed(): void;

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
declare function mouseReleased(): void;

/**
 *   The mouseClicked() function is called once after a 
 *   mouse button has been pressed and then released. 
 *   Browsers may have different default behaviors 
 *   attached to various mouse events. To prevent any 
 *   default behavior for this event, add "return 
 *   false" to the end of the method.
 *
 */
declare function mouseClicked(): void;

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
declare function mouseWheel(): void;

// src/events/touch.js

/**
 *   The system variable touchX always contains the 
 *   horizontal position of one finger, relative to (0, 
 *   0) of the canvas. This is best used for single 
 *   touch interactions. For multi-touch interactions, 
 *   use the touches[] array.
 *
 */
declare var touchX: any;

/**
 *   The system variable touchY always contains the 
 *   vertical position of one finger, relative to (0, 
 *   0) of the canvas. This is best used for single 
 *   touch interactions. For multi-touch interactions, 
 *   use the touches[] array.
 *
 */
declare var touchY: any;

/**
 *   The system variable ptouchX always contains the 
 *   horizontal position of one finger, relative to (0, 
 *   0) of the canvas, in the frame previous to the 
 *   current frame.
 *
 */
declare var ptouchX: any;

/**
 *   The system variable ptouchY always contains the 
 *   vertical position of one finger, relative to (0, 
 *   0) of the canvas, in the frame previous to the 
 *   current frame.
 *
 */
declare var ptouchY: any;

// TODO: Property "touches[]", defined in src/events/touch.js, line 61, is not a valid JS symbol name

/**
 *   The boolean system variable touchIsDown is true if 
 *   the screen is touched and false if not.
 *
 */
declare var touchIsDown: any;

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
declare function touchStarted(): void;

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
declare function touchMoved(): void;

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
declare function touchEnded(): void;

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
declare function createImage(width: number, height: number): p5.Image;

// TODO: Fix saveCanvas() errors in src/image/image.js, line 97:
//
//   param "canvas" has invalid type: [selectedCanvas]
//   param "filename" has invalid type: [String]
//   param "extension" has invalid type: [String]
//
// declare function saveCanvas(canvas: any, filename: any, extension: any): void;

// TODO: Fix saveFrames() errors in src/image/image.js, line 215:
//
//   param "filename" has invalid type: [type]
//   param "extension" has invalid type: [type]
//   param "_duration" has invalid type: [type]
//   param "_fps" has invalid type: [type]
//   param "callback" has invalid type: [Function]
//   return has invalid type: [type]
//
// declare function saveFrames(filename: any, extension: any, _duration: any, _fps: any, callback: any): any;

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
declare function loadImage(path: string, successCallback?: (p1: p5.Image) => any, failureCallback?: (p1: Event) => any): p5.Image;

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
declare function image(img: p5.Image, sx?: number, sy?: number, sWidth?: number, sHeight?: number, dx?: number, dy?: number, dWidth?: number, dHeight?: number): void;

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
declare function tint(v1: number|any[], v2?: number|any[], v3?: number|any[], a?: number|any[]): void;

/**
 *   Removes the current fill value for displaying 
 *   images and reverts to displaying images with their 
 *   original hues.
 *
 */
declare function noTint(): void;

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
declare function imageMode(m: string): void;

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
declare function blend(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: number): void;

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
declare function copy(srcImage: p5.Image|undefined, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

/**
 *   Applies a filter to the canvas.  The presets 
 *   options are: 
 * 
 *  
 *   THRESHOLD Converts the image to black and white 
 *   pixels depending if they are above or below the 
 *   threshold defined by the level parameter. The 
 *   parameter must be between 0.0 (black) and 1.0 
 *   (white). If no level is specified, 0.5 is used. 
 * 
 *  
 *   GRAY Converts any colors in the image to grayscale 
 *   equivalents. No parameter is used. 
 * 
 *  
 *   OPAQUE Sets the alpha channel to entirely opaque. 
 *   No parameter is used. 
 * 
 *  
 *   INVERT Sets each pixel to its inverse value. No 
 *   parameter is used. 
 * 
 *  
 *   POSTERIZE Limits each channel of the image to the 
 *   number of colors specified as the parameter. The 
 *   parameter can be set to values between 2 and 255, 
 *   but results are most noticeable in the lower 
 *   ranges. 
 * 
 *  
 *   BLUR Executes a Guassian blur with the level 
 *   parameter specifying the extent of the blurring. 
 *   If no parameter is used, the blur is equivalent to 
 *   Guassian blur of radius 1. Larger values increase 
 *   the blur. 
 * 
 *  
 *   ERODE Reduces the light areas. No parameter is 
 *   used. 
 * 
 *  
 *   DILATE Increases the light areas. No parameter is 
 *   used.
 *
 *   @param filterParam an optional parameter unique to 
 *   each filter, see above
 */
declare function filter(filterType: string, filterParam: number): void;

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
 *   is [pixels[(y*width*d+x)*d], 
 *   pixels[(y*width*d+x)*d+1], 
 *   pixels[(y*width*d+x)*d+2], 
 *   pixels[(y*width*d+x)*d+3]]. 
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
declare function get(x?: number, y?: number, w?: number, h?: number): any[]|p5.Image;

/**
 *   Loads the pixel data for the display window into 
 *   the pixels[] array. This function must always be 
 *   called before reading from or writing to pixels[].
 *
 */
declare function loadPixels(): void;

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
declare function set(x: number, y: number, c: number|any[]|object): void;

// TODO: Fix updatePixels() errors in src/image/pixels.js, line 515:
//
//   param "w" is defined multiple times
//
// declare function updatePixels(x?: number, y?: number, w?: number, w?: number): void;

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
declare function loadFont(path: string, callback?: Function): object;

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
declare function loadJSON(path: string, callback?: Function, errorCallback?: Function, datatype?: string): object|any[];

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
declare function loadStrings(filename: string, callback?: Function, errorCallback?: Function): any[];

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
declare function loadTable(filename: string, options?: string|any, callback?: Function): object;

/**
 *   Reads the contents of a file and creates an XML 
 *   object with its values. If the name of the file is 
 *   used as the parameter, as in the above example, 
 *   the file must be located in the sketch 
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
 *   executed. Calling loadXML() inside preload() 
 *   guarantees to complete the operation before 
 *   setup() and draw() are called. 
 * 
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
declare function loadXML(filename: string, callback?: Function, errorCallback?: Function): object;

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
declare function httpGet(path: string, data?: object, datatype?: string, callback?: Function, errorCallback?: Function): void;

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
declare function httpPost(path: string, data?: object, datatype?: string, callback?: Function, errorCallback?: Function): void;

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
declare function httpDo(path: string, method?: string, data?: object, datatype?: string, callback?: Function, errorCallback?: Function): void;

// TODO: Fix save() errors in src/io/files.js, line 967:
//
//   param "filename" has invalid type: [String]
//   param "options" has invalid type: [Boolean/String]
//
// declare function save(objectOrFilename: any|any, filename: any, options: any): void;

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
declare function saveJSON(json: any[]|object, filename: string, optimize?: boolean): void;

/**
 *   Writes an array of Strings to a text file, one 
 *   line per String. The file saving process and 
 *   location of the saved file will vary between web 
 *   browsers.
 *
 *   @param list string array to be written
 *   @param filename filename for output
 */
declare function saveStrings(list: any[], filename: string): void;

// TODO: Fix saveTable() errors in src/io/files.js, line 1205:
//
//   param "options" has invalid type: [String]
//
// declare function saveTable(Table: p5.Table, filename: string, options: any): void;

// src/math/calculation.js

/**
 *   Calculates the absolute value (magnitude) of a 
 *   number. Maps to Math.abs(). The absolute value of 
 *   a number is always positive.
 *
 *   @param n number to compute
 *   @return absolute value of given number
 */
declare function abs(n: number): number;

/**
 *   Calculates the closest int value that is greater 
 *   than or equal to the value of the parameter. Maps 
 *   to Math.ceil(). For example, ceil(9.03) returns 
 *   the value 10.
 *
 *   @param n number to round up
 *   @return rounded up number
 */
declare function ceil(n: number): number;

/**
 *   Constrains a value between a minimum and maximum 
 *   value.
 *
 *   @param n number to constrain
 *   @param low minimum limit
 *   @param high maximum limit
 *   @return constrained number
 */
declare function constrain(n: number, low: number, high: number): number;

// TODO: Fix dist() errors in src/math/calculation.js, line 108:
//
//   required param "x2" follows an optional param
//   required param "y2" follows an optional param
//
// declare function dist(x1: number, y1: number, z1?: number, x2: number, y2: number, z2?: number): number;

/**
 *   Returns Euler's number e (2.71828...) raised to 
 *   the power of the n parameter. Maps to Math.exp().
 *
 *   @param n exponent to raise
 *   @return e^n
 */
declare function exp(n: number): number;

/**
 *   Calculates the closest int value that is less than 
 *   or equal to the value of the parameter. Maps to 
 *   Math.floor().
 *
 *   @param n number to round down
 *   @return rounded down number
 */
declare function floor(n: number): number;

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
declare function lerp(start: number, stop: number, amt: number): number;

/**
 *   Calculates the natural logarithm (the base-e 
 *   logarithm) of a number. This function expects the 
 *   n parameter to be a value greater than 0.0. Maps 
 *   to Math.log().
 *
 *   @param n number greater than 0
 *   @return natural logarithm of n
 */
declare function log(n: number): number;

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
declare function mag(a: number, b: number): number;

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
 *   @param stop upper bound of the value's target 
 *   range
 *   @return remapped number
 */
declare function map(value: number, start1: number, stop1: number, start2: number, stop: number): number;

/**
 *   Determines the largest value in a sequence of 
 *   numbers, and then returns that value. max() 
 *   accepts any number of Number parameters, or an 
 *   Array of any length.
 *
 *   @param n0 Numbers to compare
 *   @return maximum Number
 */
declare function max(n0: number|any[]): number;

/**
 *   Determines the smallest value in a sequence of 
 *   numbers, and then returns that value. min() 
 *   accepts any number of Number parameters, or an 
 *   Array of any length.
 *
 *   @param n0 Numbers to compare
 *   @return minimum Number
 */
declare function min(n0: number|any[]): number;

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
declare function norm(value: number, start: number, stop: number): number;

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
declare function pow(n: number, e: number): number;

/**
 *   Calculates the integer closest to the n parameter. 
 *   For example, round(133.8) returns the value 134. 
 *   Maps to Math.round().
 *
 *   @param n number to round
 *   @return rounded number
 */
declare function round(n: number): number;

/**
 *   Squares a number (multiplies a number by itself). 
 *   The result is always a positive number, as 
 *   multiplying two negative numbers always yields a 
 *   positive result. For example, -1 * -1 = 1.
 *
 *   @param n number to square
 *   @return squared number
 */
declare function sq(n: number): number;

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
declare function sqrt(n: number): number;

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
declare function createVector(x?: number, y?: number, z?: number): void;

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
declare function noise(x: number, y: number, z: number): number;

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
declare function noiseDetail(lod: number, falloff: number): void;

/**
 *   Sets the seed value for noise(). By default, 
 *   noise() produces different results each time the 
 *   program is run. Set the value parameter to a 
 *   constant to return the same pseudo-random numbers 
 *   each time the software is run.
 *
 *   @param seed the seed value
 */
declare function noiseSeed(seed: number): void;

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
declare function randomSeed(seed: number): void;

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
declare function random(min: number, max: number): number;

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
declare function randomGaussian(mean: number, sd: number): number;

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
declare function acos(value: number): number;

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
declare function asin(value: number): number;

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
declare function atan(value: number): number;

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
declare function atan2(y: number, x: number): number;

/**
 *   Calculates the cosine of an angle. This function 
 *   takes into account the current angleMode. Values 
 *   are returned in the range -1 to 1.
 *
 *   @param angle the angle
 *   @return the cosine of the angle
 */
declare function cos(angle: number): number;

/**
 *   Calculates the sine of an angle. This function 
 *   takes into account the current angleMode. Values 
 *   are returned in the range -1 to 1.
 *
 *   @param angle the angle
 *   @return the sine of the angle
 */
declare function sin(angle: number): number;

/**
 *   Calculates the tangent of an angle. This function 
 *   takes into account the current angleMode. Values 
 *   are returned in the range -1 to 1.
 *
 *   @param angle the angle
 *   @return the tangent of the angle
 */
declare function tan(angle: number): number;

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
declare function degrees(radians: number): number;

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
declare function radians(degrees: number): number;

// TODO: Fix angleMode() errors in src/math/trigonometry.js, line 306:
//
//   param "mode" has invalid type: Number/Constant
//
// declare function angleMode(mode: any): void;

// src/typography/attributes.js

// TODO: Fix textAlign() errors in src/typography/attributes.js, line 13:
//
//   param "horizAlign" has invalid type: Number/Constant
//   param "vertAlign" has invalid type: Number/Constant
//
// declare function textAlign(horizAlign: any, vertAlign: any): number;

/**
 *   Sets/gets the spacing, in pixels, between lines of 
 *   text. This setting will be used in all subsequent 
 *   calls to the text() function.
 *
 *   @param leading the size in pixels for spacing 
 *   between lines
 */
declare function textLeading(leading: number): object|number;

/**
 *   Sets/gets the current font size. This size will be 
 *   used in all subsequent calls to the text() 
 *   function. Font size is measured in pixels.
 *
 *   @param theSize the size of the letters in units of 
 *   pixels
 */
declare function textSize(theSize: number): object|number;

// TODO: Fix textStyle() errors in src/typography/attributes.js, line 93:
//
//   param "theStyle" has invalid type: Number/Constant
//
// declare function textStyle(theStyle: any): object|string;

/**
 *   Calculates and returns the width of any character 
 *   or text string.
 *
 *   @param theText the String of characters to measure
 */
declare function textWidth(theText: string): number;

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
declare function text(str: string, x: number, y: number, x2: number, y2: number): object;

/**
 *   Sets the current font that will be drawn with the 
 *   text() function.
 *
 *   @param f a font loaded via loadFont(), or a String 
 *   representing a browser-based dfault font.
 *   @return this
 */
declare function textFont(f: object|string): object;

// src/utilities/array_functions.js

/**
 *   Adds a value to the end of an array. Extends the 
 *   length of the array by one. Maps to Array.push().
 *
 *   @param array Array to append
 *   @param value to be added to the Array
 */
declare function append(array: any[], value: any): void;

// TODO: Fix arrayCopy() errors in src/utilities/array_functions.js, line 37:
//
//   required param "dst" follows an optional param
//   param "length" has invalid type: Nimber
//
// declare function arrayCopy(src: any[], srcPosition?: number, dst: any[], dstPosition?: number, length?: any): void;

/**
 *   Concatenates two arrays, maps to Array.concat(). 
 *   Does not modify the input arrays.
 *
 *   @param a first Array to concatenate
 *   @param b second Array to concatenate
 *   @return concatenated array
 */
declare function concat(a: any[], b: any[]): any[];

/**
 *   Reverses the order of an array, maps to 
 *   Array.reverse()
 *
 *   @param list Array to reverse
 */
declare function reverse(list: any[]): void;

/**
 *   Decreases an array by one element and returns the 
 *   shortened array, maps to Array.pop().
 *
 *   @param list Array to shorten
 *   @return shortened Array
 */
declare function shorten(list: any[]): any[];

/**
 *   Randomizes the order of the elements of an array. 
 *   Implements  Fisher-Yates Shuffle Algorithm.
 *
 *   @param array Array to shuffle
 *   @param [bool] modify passed array
 *   @return shuffled Array
 */
declare function shuffle(array: any[], bool?: boolean): any[];

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
declare function sort(list: any[], count?: number): void;

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
declare function splice(list: any[], value: any, position: number): void;

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
declare function subset(list: any[], start: number, count?: number): any[];

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
declare function float(str: string): number;

/**
 *   Converts a boolean, string, or float to its 
 *   integer representation. When an array of values is 
 *   passed in, then an int array of the same length is 
 *   returned.
 *
 *   @param n value to parse
 *   @return integer representation of value
 */
declare function int(n: string|boolean|number|any[]): number;

/**
 *   Converts a boolean, string or number to its string 
 *   representation. When an array of values is passed 
 *   in, then an array of strings of the same length is 
 *   returned.
 *
 *   @param n value to parse
 *   @return string representation of value
 */
declare function str(n: string|boolean|number|any[]): string;

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
declare function boolean(n: string|boolean|number|any[]): boolean;

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
declare function byte(n: string|boolean|number|any[]): number;

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
declare function char(n: string|number|any[]): string;

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
declare function unchar(n: string|any[]): number;

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
declare function hex(n: number|any[]): string;

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
declare function unhex(n: string|any[]): number;

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
declare function join(list: any[], separator: string): string;

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
declare function match(str: string, regexp: string): any[];

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
declare function matchAll(str: string, regexp: string): any[];

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
declare function nf(num: number|any[], left?: number, right?: number): string|any[];

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
declare function nfc(num: number|any[], right?: number): string|any[];

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
declare function nfp(num: number|any[], left?: number, right?: number): string|any[];

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
declare function nfs(num: number|any[], left?: number, right?: number): string|any[];

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
declare function split(value: string, delim: string): any[];

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
declare function splitTokens(value: string, delim?: string): any[];

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
declare function trim(str?: string|any[]): string|any[];

// src/utilities/time_date.js

/**
 *   p5.js communicates with the clock on your 
 *   computer. The day() function returns the current 
 *   day as a value from 1 - 31.
 *
 *   @return the current day
 */
declare function day(): number;

/**
 *   p5.js communicates with the clock on your 
 *   computer. The hour() function returns the current 
 *   hour as a value from 0 - 23.
 *
 *   @return the current hour
 */
declare function hour(): number;

/**
 *   p5.js communicates with the clock on your 
 *   computer. The minute() function returns the 
 *   current minute as a value from 0 - 59.
 *
 *   @return the current minute
 */
declare function minute(): number;

/**
 *   Returns the number of milliseconds (thousandths of 
 *   a second) since starting the program. This 
 *   information is often used for timing events and 
 *   animation sequences.
 *
 *   @return the number of milliseconds since starting 
 *   the program
 */
declare function millis(): number;

/**
 *   p5.js communicates with the clock on your 
 *   computer. The month() function returns the current 
 *   month as a value from 1 - 12.
 *
 *   @return the current month
 */
declare function month(): number;

/**
 *   p5.js communicates with the clock on your 
 *   computer. The second() function returns the 
 *   current second as a value from 0 - 59.
 *
 *   @return the current second
 */
declare function second(): number;

/**
 *   p5.js communicates with the clock on your 
 *   computer. The year() function returns the current 
 *   year as an integer (2014, 2015, 2016, etc).
 *
 *   @return the current year
 */
declare function year(): number;

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
declare function select(name: string, container?: string): any|null;

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
declare function selectAll(name: string, container?: string): any[];

/**
 *   Removes all elements created by p5, except any 
 *   canvas / graphics elements created by createCanvas 
 *   or createGraphics. Event handlers are removed, and 
 *   element is removed from the DOM.
 *
 */
declare function removeElements(): void;

// TODO: Fix createDiv() errors in lib/addons/p5.dom.js, line 232:
//
//   return has invalid type: Object/p5.Element
//
// declare function createDiv(html: string): any;

// TODO: Fix createP() errors in lib/addons/p5.dom.js, line 249:
//
//   return has invalid type: Object/p5.Element
//
// declare function createP(html: string): any;

// TODO: Fix createSpan() errors in lib/addons/p5.dom.js, line 267:
//
//   return has invalid type: Object/p5.Element
//
// declare function createSpan(html: string): any;

// TODO: Fix createImg() errors in lib/addons/p5.dom.js, line 293:
//
//   return has invalid type: Object/p5.Element
//
// declare function createImg(src: string, alt?: string, successCallback?: Function): any;

// TODO: Fix createA() errors in lib/addons/p5.dom.js, line 338:
//
//   return has invalid type: Object/p5.Element
//
// declare function createA(href: string, html: string, target?: string): any;

// TODO: Fix createSlider() errors in lib/addons/p5.dom.js, line 368:
//
//   return has invalid type: Object/p5.Element
//
// declare function createSlider(min: number, max: number, value?: number): any;

// TODO: Fix createButton() errors in lib/addons/p5.dom.js, line 404:
//
//   return has invalid type: Object/p5.Element
//
// declare function createButton(label: string, value?: string): any;

// TODO: Fix createCheckbox() errors in lib/addons/p5.dom.js, line 440:
//
//   return has invalid type: Object/p5.Element
//
// declare function createCheckbox(label?: string, value?: boolean): any;

// TODO: Fix createSelect() errors in lib/addons/p5.dom.js, line 500:
//
//   return has invalid type: Object/p5.Element
//
// declare function createSelect(multiple?: boolean): any;

// TODO: Fix createRadio() errors in lib/addons/p5.dom.js, line 565:
//
//   return has invalid type: Object/p5.Element
//
// declare function createRadio(divId?: string): any;

// TODO: Fix createInput() errors in lib/addons/p5.dom.js, line 650:
//
//   return has invalid type: Object/p5.Element
//
// declare function createInput(value?: number): any;

// TODO: Fix createFileInput() errors in lib/addons/p5.dom.js, line 679:
//
//   return has invalid type: Object/p5.Element
//
// declare function createFileInput(callback?: Function, multiple?: string): any;

// TODO: Fix createVideo() errors in lib/addons/p5.dom.js, line 776:
//
//   return has invalid type: Object/p5.Element
//
// declare function createVideo(src: string|any[], callback?: object): any;

// TODO: Fix createAudio() errors in lib/addons/p5.dom.js, line 804:
//
//   return has invalid type: Object/p5.Element
//
// declare function createAudio(src: string|any[], callback?: object): any;

// TODO: Fix createCapture() errors in lib/addons/p5.dom.js, line 840:
//
//   return has invalid type: Object/p5.Element
//
// declare function createCapture(type: string|TYPE|object, callback: Function): any;

// TODO: Fix createElement() errors in lib/addons/p5.dom.js, line 938:
//
//   return has invalid type: Object/p5.Element
//
// declare function createElement(tag: string, content?: string): any;

// Properties from p5.sound

// lib/addons/p5.sound.js

/**
 *   Returns the Audio Context for this sketch. Useful 
 *   for users who would like to dig deeper into the 
 *   Web Audio API .
 *
 *   @return AudioContext for this sketch
 */
declare function getAudioContext(): object;

/**
 *   Returns a number representing the master amplitude 
 *   (volume) for sound in this sketch.
 *
 *   @return Master amplitude (volume) for sound in 
 *   this sketch. Should be between 0.0 (silence) and 
 *   1.0.
 */
declare function getMasterVolume(): number;

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
declare function masterVolume(volume: number|object, rampTime?: number, timeFromNow?: number): void;

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
declare function sampleRate(): number;

/**
 *   Returns the frequency value of a MIDI note value. 
 *   General MIDI treats notes as integers where middle 
 *   C is 60, C# is 61, D is 62 etc. Useful for 
 *   generating musical frequencies with oscillators.
 *
 *   @param midiNote The number of a MIDI note
 *   @return Frequency value of the given MIDI note
 */
declare function midiToFreq(midiNote: number): number;

/**
 *   List the SoundFile formats that you will include. 
 *   LoadSound will search your directory for these 
 *   extensions, and will pick a format that is 
 *   compatable with the client's web browser. Here is 
 *   a free online file converter.
 *
 *   @param formats i.e. 'mp3', 'wav', 'ogg'
 */
declare function soundFormats(formats: string|any): void;

// TODO: Property "{String} failedPath path to the file that failed to load", defined in lib/addons/p5.sound.js, line 599, is not a valid JS symbol name

