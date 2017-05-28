export default class Actions {
  constructor(actions) {
    this.actions = Object.assign({
      notFound(message, name) {
        throw new Error(`Action '${name}' not found!`);
      },
      error(message) {
        throw new Error(message);
      },
      noop() {
        // do nothing
      }
    }, actions);
  }

  traverseAction(key) {
    var keys = key.split("/");
    var action = null;
    keys.forEach((key) => {
      action = action ? action[key] : this.actions[key];
      return !!action;
    });
    return action;
  }

  getHandler(name) {
    return this.traverseAction(name) || this.actions.notFound;
  }
}
