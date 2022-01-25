var http = require('http');
var querystring = require('querystring');
var util = require('util');
 
http.createServer(function(req, res){
    // 定義一個 POST 變量，用於暫存 request message
    var post = '';     
 
    // 通過 request 的 data 事件監聽函式，每當接受到請求體的數據，就累加到 post 變量中
    req.on('data', function(chunk){    
        post += chunk;
    });
 
    // 在 end 事件觸發後，聽過 querystring.parse 將 post 解析為真正的 POST 請求格式，然後向客户端返回
    req.on('end', function(){    
        post = querystring.parse(post);
        console.log(post.param1);

        res.end(util.inspect(post));
    });
}).listen(3000);
