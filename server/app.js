var express = require('express')
var fs = require('fs');
var path = require('path');
var app = express();
app.use("/xuegaogame/", express.static(path.join(__dirname, './xuegaogame/')))
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./xuegaogame/privatekey.pem', 'utf8')
var certificate = fs.readFileSync('./xuegaogame/certificate.pem', 'utf8')
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 18080;
var SSLPORT = 18081;

httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

// Welcome
app.get('/', function(req, res) {
    if(req.protocol === 'https') {
        res.status(200).send('Welcome to Safety Land!');
    }
    else {
        res.status(200).send('Welcome!');
    }
});