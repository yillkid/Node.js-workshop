var events = require('events');
var eventEmitter = new events.EventEmitter();
 
var connectHandler = function connected() {
   console.log('連接成功');
  
   // 觸發 data_received 事件 
   eventEmitter.emit('data_received');
}
 
// 绑定 connection 事件事件程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函數绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('數據接收成功');
});
 
// 觸法 connection 事件 
eventEmitter.emit('connection');
 
console.log("程序執行完畢");
