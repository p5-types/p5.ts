import * as p5 from '../../index'

declare module '../../index' {
    interface p5InstanceExtensions {
    /**
     *   Sets the camera position for a 3D sketch. 
     *   Parameters for this function define the position 
     *   for the camera, the center of the sketch (where 
     *   the camera is pointing), and an up direction (the 
     *   orientation of the camera). When called with no 
     *   arguments, this function creates a default camera 
     *   equivalent to camera(0, 0, (height/2.0) / 
     *   tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0);
     *
     *   @param [x] camera position value on x axis
     *   @param [y] camera position value on y axis
     *   @param [z] camera position value on z axis
     *   @param [centerX] x coordinate representing center 
     *   of the sketch
     *   @param [centerY] y coordinate representing center 
     *   of the sketch
     *   @param [centerZ] z coordinate representing center 
     *   of the sketch
     *   @param [upX] x component of direction 'up' from 
     *   camera
     *   @param [upY] y component of direction 'up' from 
     *   camera
     *   @param [upZ] z component of direction 'up' from 
     *   camera
     *   @chainable
     */
    camera(x?: number, y?: number, z?: number, centerX?: number, centerY?: number, centerZ?: number, upX?: number, upY?: number, upZ?: number): p5;

    /**
     *   Sets a perspective projection for the camera in a 
     *   3D sketch. This projection represents depth 
     *   through foreshortening: objects that are close to 
     *   the camera appear their actual size while those 
     *   that are further away from the camera appear 
     *   smaller. The parameters to this function define 
     *   the viewing frustum (the truncated pyramid within 
     *   which objects are seen by the camera) through 
     *   vertical field of view, aspect ratio (usually 
     *   width/height), and near and far clipping planes. 
     *   When called with no arguments, the defaults 
     *   provided are equivalent to perspective(PI/3.0, 
     *   width/height, cameraZ/10.0, cameraZ10.0), where 
     *   cameraZ is equal to ((height/2.0) / 
     *   tan(PI60.0/360.0));
     *
     *   @param [fovy] camera frustum vertical field of 
     *   view, from bottom to top of view, in angleMode 
     *   units
     *   @param [aspect] camera frustum aspect ratio
     *   @param [near] frustum near plane length
     *   @param [far] frustum far plane length
     *   @chainable
     */
    perspective(fovy?: number, aspect?: number, near?: number, far?: number): p5;

    /**
     *   Sets an orthographic projection for the camera in 
     *   a 3D sketch and defines a box-shaped viewing 
     *   frustum within which objects are seen. In this 
     *   projection, all objects with the same dimension 
     *   appear the same size, regardless of whether they 
     *   are near or far from the camera. The parameters to 
     *   this function specify the viewing frustum where 
     *   left and right are the minimum and maximum x 
     *   values, top and bottom are the minimum and maximum 
     *   y values, and near and far are the minimum and 
     *   maximum z values. If no parameters are given, the 
     *   default is used: ortho(-width/2, width/2, 
     *   -height/2, height/2).
     *
     *   @param [left] camera frustum left plane
     *   @param [right] camera frustum right plane
     *   @param [bottom] camera frustum bottom plane
     *   @param [top] camera frustum top plane
     *   @param [near] camera frustum near plane
     *   @param [far] camera frustum far plane
     *   @chainable
     */
    ortho(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): p5;
  }
}
