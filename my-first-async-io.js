fs=require('fs');
var res=0;
fs.readFile(process.argv[2],'utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    
    const arr=data.toString().split("\n");

     res=arr.length-1;
     console.log(res)

});


