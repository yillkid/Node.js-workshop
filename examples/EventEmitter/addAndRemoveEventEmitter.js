var events = require('events');
var eventEmitter = new events.EventEmitter();

// Lister #1
var listener1 = function listener1() {
   console.log('listener-1 run');
}

// Lister #2
var listener2 = function listener2() {
  console.log('listener-2 run');
}

// 綁定 connection 事件，處理函式為 listener-1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，處理函式為 listener-2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 個 Lister 連接事件");

// 處理 connection 事件 
eventEmitter.emit('connection');

// 移除綁定的 listener-1 函式
eventEmitter.removeListener('connection', listener1);
console.log("listener-1 不再受監聽");

// 觸發連接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 個 Lister 連接事件");

console.log("程序執行完畢");
