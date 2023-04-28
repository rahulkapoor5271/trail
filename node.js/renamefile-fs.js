var a=require("fs"); //file system
var p=require("prompt-sync")();

var file=p("enter  file name you want to change:");


a.rename("arun.txt",file,function(err){


      if(err)
      {
      throw err;
      }


    else
    {
        console.log("file name change");
    }
});