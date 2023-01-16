type Factory<T> = (name: string) => T;

export default class ItemCache<T> {
  items: Map<string,T>;
  constructor(public factory: Factory<T>) {
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
