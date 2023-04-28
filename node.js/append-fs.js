var a=require("fs"); //file system
var p=require("prompt-sync")();


var name=p("enter your name:-   ");
var rollno=p("enter your rollno.");

var pr="Name : "+name+"\n Rollno.  :"+rollno+"\n";
a.appendFile("record2.txt",pr,function(err){

      if(err)
      {
        throw err;
      }
    else
    {
             console.log("file updated");
    }
});