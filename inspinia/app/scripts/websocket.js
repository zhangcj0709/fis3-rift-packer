module.exports = function() {
  var host = window.location.host;
  var websocket;
  if ('WebSocket' in window) {
    websocket = new WebSocket("ws://" + host + "/webSocketIMServer");
  } else if ('MozWebSocket' in window) {
    websocket = new MozWebSocket("ws://" + host + "/webSocketIMServer");
  } else {
    websocket = new SockJS("http://" + host + "/sockjs/webSocketIMServer");
  }
  websocket.onopen = function(evnt) {
    console.log("websocket连接上");
  };
  websocket.onmessage = function(evnt) {
    messageHandler(evnt.data);
  };
  websocket.onerror = function(evnt) {
    console.log("websocket错误");
  };
  websocket.onclose = function(evnt) {
    console.log("websocket关闭");
  };
};

function messageHandler() {
  console.log("websocket: ", arguments);
}