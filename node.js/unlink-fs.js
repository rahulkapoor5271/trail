var a=require("fs"); //file system
var p=require("prompt-sync")();




a.unlink("record123.txt",function(err){


      if(err)
      {
      throw err;
      }
    else
    {
        console.log("file updated");
    }
});