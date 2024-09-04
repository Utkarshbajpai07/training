const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");


// fs.writeFileSync("read.txt","Welcome to techno")



// let data = fs.readFileSync("read.txt");
// console.log(data.toString());

// fs.appendFileSync("read.txt","hi Utkarsh")

// fs.renameSync("read.txt","readWrite.txt")

// fs.writeFile("read.txt", "hello bro",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Created")
//     }
// });


// fs.appendFile("read.txt","hello TR4",(err)=>{
//     console.log("File Updated")
// }
// )


// fs.readFile("read.txt","UTF-8",(err,data)=>{
//     console.log(data);
// }
// )

// fs.unlink("read.txt",(err)=>{
//     console.log("File Deleted")
// })
// fs.mkdir("folder",(erro)=>{
//     console.log("Folder created")
// })

// fs.rmdir("folder",(err)=>{
//     console.log("Folder Deleted")
// })


// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.totalmem()/1024/1024/1024);

// console.log(path.dirname("D:/Training/coding/nodejs/Day-23/index.js"));
// console.log(path.parse("D:/Training/coding/nodejs/Day-23/index.js"));
// console.log(path.join("user","ref","bin"));
// console.log(path.resolve("user","ref","bin"));


const server=http.createServer((req,res)=>{
    if(req.url=="/"){
    res.end("Welcome to http server")
    }else if(req.url=="/about"){
        res.end("About us Page")
    }else{
        res.end("Unknown Page")
    }
})

server.listen(5000,"127.0.0.1",()=>{
    console.log("Server is running on 3000 port ")
})