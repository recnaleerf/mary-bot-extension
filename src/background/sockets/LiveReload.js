import {BaseSocket} from "./index";

export default class LiveReloadSocket extends BaseSocket {
  getDefaultOptions() {
    return {
      host: "localhost",
      port: 35729,
      path: "/livereload"
    };
  }

  onMessage(evt) {
    var data = JSON.parse(evt.data);
    if (data.command == "reload") {
      console.log("Reloading extension...");
      chrome.runtime.reload();
    }
  }
}
