import * as p5 from '../../index'

declare module '../../index' {
  interface GraphicsInstanceExtensions {
    /**
     *   Removes a Graphics object from the page and frees 
     *   any resources associated with it.
     *
     */
    remove(): void;
  }
}
