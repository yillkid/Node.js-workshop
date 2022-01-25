var http = require("http");
var url = require("url");

function route(pathname) {
  console.log("About to route a request for " + pathname);
}

exports.route = route;
