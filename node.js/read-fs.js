var r=require("fs");

r.readFile("record2.txt",'utf-8',function(err,data)
    {
     
        if(err)
        {
            console.log("data not found");
        }

        else
        {
            console.log(data);
        }
    }
)