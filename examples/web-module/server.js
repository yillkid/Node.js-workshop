var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// 創建服務器
http.createServer( function (request, response) {  
   // 解析請求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   // 輸出請求的文件名
   console.log("Request for " + pathname + " received.");
   
   // 從文件系统中讀取請求的文件内容
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP 狀態碼: 404 : NOT FOUND
         // Content Type: text/html
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP 狀態碼: 200 : OK
         // Content Type: text/html
         response.writeHead(200, {'Content-Type': 'text/html'});    
         
         // 響應文件内容
         response.write(data.toString());        
      }
      //  發送響應數據
      response.end();
   });   
}).listen(8080);
 
// 控制台會輸出以下信息
console.log('Server running at http://127.0.0.1:8080/');
