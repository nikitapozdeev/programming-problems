/**
 * https://leetcode.com/problems/event-emitter
 */

class EventEmitter {
  constructor() {
    this.subscriptions = {};
  }

  subscribe(event, cb) {
    if (!this.subscriptions[event]) {
      this.subscriptions[event] = [];
    }

    this.subscriptions[event].push(cb);

    return {
      unsubscribe: () => {
        this.subscriptions[event] = this.subscriptions[event].filter(c => c !== cb);
      }
    };
  }

  emit(event, args = []) {
    return (this.subscriptions[event] || []).map(cb => cb(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */