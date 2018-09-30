// require the http module of node.js
var http = require('http');
var url = require('url');
// require the dispatcher module
var Router       = require('router')
var finalhandler = require('finalhandler')
var router = Router();


// define the port of access for your server
const PORT = 8082;


router.route('/hello/:name').get(function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ hello: req.params.name }))
})

// We need a function which handles requests and send response
function handleRequest(req, res){
    try {
        // log the request on console
        router(req, res, finalhandler(req, res))
    } catch(err) {
        console.log(err);
    }
}

// Create a server
var myFirstServer = http.createServer(handleRequest);



// Start the server !
myFirstServer.listen(PORT, function(){
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});