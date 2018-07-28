import * as p5 from '../../index'

declare module '../../index' {
    interface p5InstanceExtensions {
    readonly P2D: p5.P2D;
    readonly WEBGL: p5.WEBGL;
    readonly ARROW: p5.ARROW;
    readonly CROSS: p5.CROSS;
    readonly HAND: p5.HAND;
    readonly MOVE: p5.MOVE;
    readonly TEXT: p5.TEXT;
    readonly WAIT: p5.WAIT;

    /**
     *   HALF_PI is a mathematical constant with the value 
     *   1.57079632679489661923. It is half the ratio of 
     *   the circumference of a circle to its diameter. It 
     *   is useful in combination with the trigonometric 
     *   functions sin() and cos().
     *
     */
    readonly HALF_PI: number;

    /**
     *   PI is a mathematical constant with the value 
     *   3.14159265358979323846. It is the ratio of the 
     *   circumference of a circle to its diameter. It is 
     *   useful in combination with the trigonometric 
     *   functions sin() and cos().
     *
     */
    readonly PI: number;

    /**
     *   QUARTER_PI is a mathematical constant with the 
     *   value 0.7853982. It is one quarter the ratio of 
     *   the circumference of a circle to its diameter. It 
     *   is useful in combination with the trigonometric 
     *   functions sin() and cos().
     *
     */
    readonly QUARTER_PI: number;

    /**
     *   TAU is an alias for TWO_PI, a mathematical 
     *   constant with the value 6.28318530717958647693. It 
     *   is twice the ratio of the circumference of a 
     *   circle to its diameter. It is useful in 
     *   combination with the trigonometric functions sin() 
     *   and cos().
     *
     */
    readonly TAU: number;

    /**
     *   TWO_PI is a mathematical constant with the value 
     *   6.28318530717958647693. It is twice the ratio of 
     *   the circumference of a circle to its diameter. It 
     *   is useful in combination with the trigonometric 
     *   functions sin() and cos().
     *
     */
    readonly TWO_PI: number;

    /**
     *   Constant to be used with angleMode() function, to 
     *   set the mode which p5.js interprates and 
     *   calculates angles (either DEGREES or RADIANS).
     *
     */
    readonly DEGREES: p5.DEGREES;

    /**
     *   Constant to be used with angleMode() function, to 
     *   set the mode which p5.js interprates and 
     *   calculates angles (either RADIANS or DEGREES).
     *
     */
    readonly RADIANS: p5.RADIANS;
    readonly CORNER: p5.CORNER;
    readonly CORNERS: p5.CORNERS;
    readonly RADIUS: p5.RADIUS;
    readonly RIGHT: p5.RIGHT;
    readonly LEFT: p5.LEFT;
    readonly CENTER: p5.CENTER;
    readonly TOP: p5.TOP;
    readonly BOTTOM: p5.BOTTOM;
    readonly BASELINE: p5.BASELINE;
    readonly POINTS: p5.POINTS;
    readonly LINES: p5.LINES;
    readonly LINE_STRIP: p5.LINE_STRIP;
    readonly LINE_LOOP: p5.LINE_LOOP;
    readonly TRIANGLES: p5.TRIANGLES;
    readonly TRIANGLE_FAN: p5.TRIANGLE_FAN;
    readonly TRIANGLE_STRIP: p5.TRIANGLE_STRIP;
    readonly QUADS: p5.QUADS;
    readonly QUAD_STRIP: p5.QUAD_STRIP;
    readonly CLOSE: p5.CLOSE;
    readonly OPEN: p5.OPEN;
    readonly CHORD: p5.CHORD;
    readonly PIE: p5.PIE;
    readonly PROJECT: p5.PROJECT;
    readonly SQUARE: p5.SQUARE;
    readonly ROUND: p5.ROUND;
    readonly BEVEL: p5.BEVEL;
    readonly MITER: p5.MITER;
    readonly RGB: p5.RGB;
    readonly HSB: p5.HSB;
    readonly HSL: p5.HSL;
    readonly AUTO: p5.AUTO;
    readonly BLEND: p5.BLEND;
    readonly ADD: p5.ADD;
    readonly DARKEST: p5.DARKEST;
    readonly LIGHTEST: p5.LIGHTEST;
    readonly DIFFERENCE: p5.DIFFERENCE;
    readonly EXCLUSION: p5.EXCLUSION;
    readonly MULTIPLY: p5.MULTIPLY;
    readonly SCREEN: p5.SCREEN;
    readonly REPLACE: p5.REPLACE;
    readonly OVERLAY: p5.OVERLAY;
    readonly HARD_LIGHT: p5.HARD_LIGHT;
    readonly SOFT_LIGHT: p5.SOFT_LIGHT;
    readonly DODGE: p5.DODGE;
    readonly BURN: p5.BURN;
    readonly THRESHOLD: p5.THRESHOLD;
    readonly GRAY: p5.GRAY;
    readonly OPAQUE: p5.OPAQUE;
    readonly INVERT: p5.INVERT;
    readonly POSTERIZE: p5.POSTERIZE;
    readonly DILATE: p5.DILATE;
    readonly ERODE: p5.ERODE;
    readonly BLUR: p5.BLUR;
    readonly NORMAL: p5.NORMAL;
    readonly ITALIC: p5.ITALIC;
    readonly BOLD: p5.BOLD;
    readonly LANDSCAPE: p5.LANDSCAPE;
    readonly PORTRAIT: p5.PORTRAIT;
  }
}
