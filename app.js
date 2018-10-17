const fs=require('fs');
fs.readFile('./src/readfile.txt,'utf8', (err,raw)=>{
    if(err){
        throw err;
    }
    console.log(raw);
});