export const ALIASES = [
  'p5',
  // These are supposedly "classes" in our docs, but they don't exist
  // as objects, and their methods are all defined on p5.
  'p5.sound'
];
export const CLASS_RE = /^p5\.([^.]+)$/;
