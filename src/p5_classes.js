module.exports = {
  ALIASES: [
    'p5',
    // These are supposedly "classes" in our docs, but they don't exist
    // as objects, and their methods are all defined on p5.
    'p5.dom',
    'p5.sound'
  ],
  CLASS_RE: /^p5\.([^.]+)$/
};
