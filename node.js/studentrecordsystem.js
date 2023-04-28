var y=require("fs"); //file system
var p=require("prompt-sync")();
console.log("welcome to record system");
console.log("press 1 to create new file for record",'\n',"press 2 to Enter record in existing file  ");
 a=p(console.log());
  if(a==1)
{
 var newfile=p("Enter new file name:-    ");
 var name=p("Enter student name:-   ");
 var rollno=p("Enter student rollno:-    ");
 var Course=p("Enter student course:-    ");
 var fee=p("Enter student fee:-    ");
 var duration=p("Enter course duration:-    ");

 var pr="Enter new file name:-      "+newfile+"\n"+"Enter student name:-   "+name+"\n"+ "Enter student rollno:-    "+rollno+"\n"+"Enter student course:-    "+Course+"\n"+"Enter student fee:-    "+fee+"\n"+"Enter course duration:-    "+duration;

 y.writeFile(newfile,pr,function(err,res){      
    if(newfile=="")
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

}
else if(a==2)
{
    var a=p("enter your input in existing file :record.txt(1),r.txt(2),record2.js.txt(3)");
    
    var c =p("enter your name detail : ");
    var v =p("enter your roll number : ");
    var h =p("enter your course name : ");
    var n =p("enter your course fee : ");
    var m =p("enter the course duration :");
    var f = "name :"+c+"\n roll no :"+v+"\n course name :"+h+"\n course fee :"+n+" \n course duration :"+m;
   
    
}
 if(p=="")
{
    y.readFile("record2.js",f,function(err)
{
    if(p=="")
    {
      throw err;
    }
      else
    {
      console.log("data saved");
    }
});
}
