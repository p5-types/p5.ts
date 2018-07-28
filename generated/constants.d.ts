import * as p5 from './index'

declare module './index' {
  type COLOR_MODE =
        RGB
      | HSB
      | HSL;

  type ARC_MODE =
        CHORD
      | PIE
      | OPEN;

  type ELLIPSE_MODE =
        CENTER
      | RADIUS
      | CORNER
      | CORNERS;

  type RECT_MODE =
        CORNER
      | CORNERS
      | CENTER
      | RADIUS;

  type STROKE_CAP =
        SQUARE
      | PROJECT
      | ROUND;

  type STROKE_JOIN =
        MITER
      | BEVEL
      | ROUND;

  type BEGIN_KIND =
        POINTS
      | LINES
      | TRIANGLES
      | TRIANGLE_FAN
      | TRIANGLE_STRIP
      | QUADS
      | QUAD_STRIP;

  type END_MODE =
        CLOSE;

  type CURSOR_TYPE =
        ARROW
      | CROSS
      | HAND
      | MOVE
      | TEXT
      | WAIT;

  type RENDERER =
        P2D
      | WEBGL;

  type BLEND_MODE =
        BLEND
      | DARKEST
      | LIGHTEST
      | DIFFERENCE
      | MULTIPLY
      | EXCLUSION
      | SCREEN
      | REPLACE
      | OVERLAY
      | HARD_LIGHT
      | SOFT_LIGHT
      | DODGE
      | BURN
      | ADD
      | NORMAL;

  type IMAGE_MODE =
        CORNER
      | CORNERS
      | CENTER;

  type FILTER_TYPE =
        THRESHOLD
      | GRAY
      | OPAQUE
      | INVERT
      | POSTERIZE
      | BLUR
      | ERODE
      | DILATE
      | BLUR;

  type ANGLE_MODE =
        RADIANS
      | DEGREES;

  type HORIZ_ALIGN =
        LEFT
      | CENTER
      | RIGHT;

  type VERT_ALIGN =
        TOP
      | BOTTOM
      | CENTER
      | BASELINE;

  type THE_STYLE =
        NORMAL
      | ITALIC
      | BOLD;

  type TYPE =
        VIDEO
      | AUDIO;

  type SIZE_W =
        AUTO;

  type SIZE_H =
        AUTO;
}
