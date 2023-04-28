// var a=require("fs"); //file system
// a.writeFile("record.txt","first program of node",function(err){

//     if(err)
//     {
//       //  console.log("something went wrong");
//         throw err;

//     }

//     else
//     {
//              console.log("data saved");
//     }
// });

//another method
// 
 // another method
// var a=require("fs"); //file system
// var p=require("prompt-sync")();

// var name=p("enter your name:-   ");
// var rollno=p("enter your rollno.");
// a.writeFile("record.txt","name: "+ name+"\n"+" roll no:"+rollno,function(err){

//     if(err)
//     {
//       //  console.log("something went wrong");
//         throw err;
//     }

//     else
//     {
//              console.log("data saved");
//     }
// });

// another method

var a=require("fs"); //file system
var p=require("prompt-sync")();

var file=p("enter your file name:");
var name=p("enter your name:-   ");
var rollno=p("enter your rollno.");

a.writeFile(file,"name: "+ name+"\n"+" roll no:"+rollno,function(err){


      if(file=="")
      {
        throw err;
      }

      else if(err)
    {
      //  console.log("something went wrong");
        throw err;
    }
    

    else
    {
             console.log("data saved");
    }
});