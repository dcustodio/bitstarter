var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
try{
var content = fs.readFileSync('index.html','utf8');
}catch(e){
response.send(e);
}
console.log(content);
//var buf = new Buffer(256);
//len = buf.write(content,"utf-8");
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
