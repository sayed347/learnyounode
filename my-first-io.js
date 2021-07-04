fs=require('fs');
const data=fs.readFileSync(process.argv[2],'utf-8');
arr=data.toString().split("\n");

res=arr.length-1;
console.log(res)