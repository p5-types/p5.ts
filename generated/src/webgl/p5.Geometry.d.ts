import * as p5 from '../../index'

declare module '../../index' {
  interface GeometryInstanceExtensions {
    computeFaces(): p5.Geometry;

    /**
     *   computes smooth normals per vertex as an average 
     *   of each face.
     *
     *   @chainable
     */
    computeNormals(): p5.Geometry;

    /**
     *   Averages the vertex normals. Used in curved 
     *   surfaces
     *
     *   @chainable
     */
    averageNormals(): p5.Geometry;

    /**
     *   Averages pole normals. Used in spherical 
     *   primitives
     *
     *   @chainable
     */
    averagePoleNormals(): p5.Geometry;

    /**
     *   Modifies all vertices to be centered within the 
     *   range -100 to 100.
     *
     *   @chainable
     */
    normalize(): p5.Geometry;
  }
}
