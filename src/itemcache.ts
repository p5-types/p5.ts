export default class ItemCache<T> {
  items: Map<string, T>;
  factory: (name: string) => T;
  constructor(factory: (name: string) => T) {
    this.items = new Map();
    this.factory = factory;
  }

  get(name: string) {
    if (!this.items.has(name)) {
      this.items.set(name, this.factory(name));
    }
    return this.items.get(name);
  }
};
