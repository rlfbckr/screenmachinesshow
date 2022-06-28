/*
   F-L-A-T-L-A-N-D S-E-R-V-E-R
   Ralf Baecker 2021    

   platform fro  collaborative generative practices

*/

const local = 0; // run local
var lands = ['default'];

const https = require('https');
var http = require('http');
const fs = require('fs');
var ip = require("ip");
console.log("FLATLAND server !");
console.log("serverIP : " + ip.address());


var express = require('express');
//var secure = require('express-force-https');
var app = express();

app.use(express.static('public'));
//app.use(secure);
app.enable('trust proxy')
    //var server = http.createServer(app);
    // redirect http -> https
const server = http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
});




if (local == true) {
    console.log("Local Server");
    const privateKey = fs.readFileSync('c:\\local\\etc\\key.pem', 'utf8');
    const certificate = fs.readFileSync('c:\\local\\etc\\cert.pem', 'utf8');
    serverSecure = https.createServer({
        key: privateKey,
        cert: certificate,
    }, app);
        
} else {
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/flatland.earth/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/flatland.earth/cert.pem', 'utf8');
    const ca = fs.readFileSync('/etc/letsencrypt/live/flatland.earth/chain.pem', 'utf8');
    var serverSecure = https.createServer({
        key: privateKey,
        cert: certificate,
        ca: ca
    }, app);
    
}



server.listen(80, () => {
    console.log('HTTP Server running on port 80');
});




serverSecure.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});



var socket = require('socket.io');
var io = socket(serverSecure);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    function sendAllLands() {
        //  console.log("sendAllLands");
        socket.broadcast.emit("lands", lands);
    }
    setInterval(sendAllLands, 5000);
    console.log('new connection ' + socket.id);
    socket.on('disconnet', disconnect);
    socket.on('machine', machineMessage);
    socket.on('removemachine', removeMachine);
    socket.on('registerland', registerLand);
    // socket.on('getAllLands', sendAllLands);

    function disconnect() {
        console.log('disconnect ' + socket.id);
        socket.broadcast.emit("removeclient", { id: socket.id });
    }

    function machineMessage(data) {
        //  console.log(data);
        socket.broadcast.emit("updateremotemachines", data);
    }

    function removeMachine(data) {
        //console.log("removemachine: " + data.machineid);
        socket.broadcast.emit("removemachine", data);
    }

    function registerLand(data) {
        console.log("regsiterland: " + data.land);
        if (lands.indexOf(data.land) == -1) {
            lands.push(data.land);
        }
        console.log(lands);
        //socket.broadcast.emit("removemachine", data);
    }


}