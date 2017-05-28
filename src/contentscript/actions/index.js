import Actions from "lib/actions";

const actions = new Actions({
  "dom": require("./dom"),
  "location": require("./location")
});

const handleResponse = (response) => {
  var action = response.action;
  actions.getHandler(action)(response.data, action);
};

export const sendAction = (action, data) => {
  chrome.runtime.sendMessage({action, data}, handleResponse);
};

export default actions;
