export class BaseSocket {
  constructor(options) {
    options = Object.assign({
      "protocol": "ws",
      "host": "localhost",
      "port": 8000,
      "path": "/"
    }, this.getDefaultOptions(), options || {});

    this.protocol = options.protocol;
    this.host = options.host;
    this.port = options.port;
    this.path = options.path;
  }

  getDefaultOptions() {
    return {};
  }

  start() {
    this.socket = new WebSocket(`${this.protocol}://${this.host}:${this.port}${this.path}`);
    this.socket.onmessage = this.onMessage.bind(this);
  }

  onMessage() {
    // do nothing
  }
}
