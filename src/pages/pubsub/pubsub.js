class Pubsub {
  constructor() {
    this.events = {};
  }

  subscribe(type, handler) {
    if (type === undefined) return;
    this.events[type] ? this.events[type].push(handler) : this.events[type] = [handler];
  }

  unSubscribe(type, handler) {
    if (type === undefined) return;
    const idx = this.events[type] ? this.events[type].findIndex(e => e === handler) : -1;
    if (idx !== -1) {
      this.events[type].splice(idx, 1);
    }
    if (this.events[type].length === 0) {
      delete this.events[type];
    }
  }

  publish(type, ...args) {
    if (type === undefined) return;
    const sub = this.events[type];
    sub?.forEach(e => e(...args));
  }

  clean(type) {
    if (type === undefined) return;
    delete this.events[type];
  }
}

export default new Pubsub();