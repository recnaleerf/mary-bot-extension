import actions from "./background/actions";
import MainSocket from "./background/sockets/Main";
import LiveReloadSocket from "./background/sockets/LiveReload";

const mainSocket = new MainSocket();
const context = {
  sockets: {
    main: mainSocket
  }
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var action = request.action;
  var handler = actions.getHandler(action);
  var options = {context, action, sender};
  sendResponse(handler(request.data, action, options));
});

mainSocket.start();

chrome.management.getSelf((result) => {
  // in unpacked/dev mode, run live-reload
  if (!result.update_url) {
    new LiveReloadSocket().start();
  }
});
