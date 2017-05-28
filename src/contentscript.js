import {sendAction} from "./contentscript/actions";

sendAction("init", {
  location: window.location
});
