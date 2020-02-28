var fs = require("fs");

/*fs.readFile("input.txt", function(err, data){
    if (err){
        return console.error(err);
    }
    console.log("1. Asynchronous read: " + data);
});

var data = fs.readFileSync("input.txt");
console.log("2. Synchronous read: " + data );

console.log("3. Program Ended")
*/

/*fs.writeFile("output.txt", "This is so fun!!!", function(err){
    if (err){
        return console.error(err);
    }

    fs.readFile("output.txt", function(err, data){
        if(err){
            return console.error(err);
        }
        console.log( "Asynchchronous read: " + data);
    });
});

fs.readFile("output.txt", function(err, data){
    if(err){
        return console.error(err);
    }
    console.log("Outside read: " + data);
});*/

/*var request = require("request");

request("http://api.umd.io/v0/courses/CMSC132", function(err, response, body){
    if(!err && response.statusCode == 200){
        console.log(response);
    }
});*/

//
//creating a server 
var http = require("http");
const PORT = 8888;

function handleReq(req, res){
    console.log("New Request at " + req.url);

    if(req.url === '/camille'){
        console.log("blab bla bla")
        var camille = {
            age : 21,
            gender : "f",
            majors : ["Computer Science"]
        }
        res.end(JSON.stringify(camille));
    } else if(req.url === '/robert'){
        var robert = {
            age : 21,
            gender : "m",
            majors : ["Computer Science"]
        }
        res.end(JSON.stringify(robert));
    } else if(req.url === '/week4'){
        var zayfav = {
            names: ["Isaiah"],
            foods: ["Chic fil a"]
        };
        res.end(JSON.stringify(zayfav));
    }else{
        res.end("Link hit: " + req.url);
    }

}

var server = http.createServer(handleReq);

server.listen(8888, function(){
    console.log("Server listening on : http://localhost:%s", PORT);
})

//