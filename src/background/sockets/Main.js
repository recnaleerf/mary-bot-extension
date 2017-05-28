import {BaseSocket} from "./index";

export default class MainSocket extends BaseSocket {
  onMessage(evt) {
    var data = evt.data;
    console.log(data);
  }
}
