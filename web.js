var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var content = fs.readFileSync('index.html');
buf = new Buffer(256);
len = buf.write(content,0);
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
