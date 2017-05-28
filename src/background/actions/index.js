import Actions from "lib/actions";

export function makeAction(action, data) {
  return {action, data};
}

const actions = new Actions({
  "init": (data, name, {sender}) => {
    chrome.pageAction.show(sender.tab.id);
  }
});

export default actions;
