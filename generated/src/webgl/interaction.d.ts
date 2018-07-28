import * as p5 from '../../index'

declare module '../../index' {
    interface p5InstanceExtensions {
    /**
     *   Allows rotation of a 3D sketch by dragging the 
     *   mouse. As the mouse is dragged away from the 
     *   center of the canvas in the X or Y direction, the 
     *   sketch is rotated about the Y or X axis 
     *   respectively. Note that this rotation only affects 
     *   objects drawn after orbitControl() has been called 
     *   in the draw() loop.
     *
     *   @chainable
     */
    orbitControl(): p5;
  }
}
