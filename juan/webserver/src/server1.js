/*
 * server.js
 * Copyright (C) 2021 juanwilches <juanwilches@VPN-159-136.vpn.usf.edu>
 *
 * Distributed under terms of the MIT license.
 */

/*
let connect = require('connect');
let serveStatic = require('serve-static');

connect()
     .use(serveStatic(__dirname))
     .listen(8080, () => console.log('Server running on 8080...'));
*/

const http = require('http');
const fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
	throw err; 
    }       
    http.createServer(function(request, response) {  
	response.writeHeader(200, {"Content-Type": "text/html"});  
	response.write(html);  
	response.end();  
	}).listen(5000);
});


console.log('Server listening on port 5000!')

/*
const server = http.createServer((request, response) => {
    response.write('index.html')
    response.end('Hello, world!');
});
server.listen(1337);
*/
