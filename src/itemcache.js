/**
 *
 * @template T item type in cache
 */
module.exports = class ItemCache {
  /**
   *
   * @param {Factory} factory
   * @typedef {(name: string) => T} Factory
   */
  constructor(factory) {
    /**
     * @type Map<string,T>
     */
    this.items = new Map();
    this.factory = factory;
  }

  /**
   *
   * @param {string} name
   */
  get(name) {
    if (!this.items.has(name)) {
      this.items.set(name, this.factory(name));
    }
    return this.items.get(name);
  }
};
