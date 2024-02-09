type Callback = (data: unknown) => void;

export class PubSub {
  private subscribers: { [event: string]: Callback[] };

  constructor() {
    this.subscribers = {};
  }

  // 订阅方法
  subscribe(event: string, callback: Callback): void {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  // 发布方法
  publish(event: string, data?: unknown): void {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach((callback) => {
        callback(data);
      });
    }
  }

  // 取消订阅
  unsubscribe(event: string, callback: Callback): void {
    if (this.subscribers[event]) {
      this.subscribers[event] = this.subscribers[event].filter((cb) => cb !== callback);
    }
  }
}
