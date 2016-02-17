var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.dir(req.url);

try{

	 var lin = req.url;

	 var link = lin.replace('/','');

     var index = fs.readFileSync(link);

    res.writeHead(200, {'Content-Type': 'text/html'});
}
catch(err){

		index = " error found";

}

    res.end(index);

}).listen(3000);
