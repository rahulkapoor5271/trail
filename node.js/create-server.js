var x=require("http");

x.createServer(function(err,res)
{
    res.write("server created by Rahul kapoor");
    res.end();

}).listen(2000)

console.log("goto server: http://127.0.0.1:2000")
