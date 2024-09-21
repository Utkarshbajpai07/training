const EventEimtter = require("events");
const http = require("http");
const event = new EventEimtter();

const server = http.createServer((req,res)=>{
    let body=""
    if(req.method==="POST"){
        req.on("data",(chunk)=>{
            body += chunk.toString();
        });

        req.on("end",()=>{
            storedData=JSON.parse(body);
            console.log(storedData);
            res.end("Post Api called");
        })
    }

//     if(req.url=="/"){
//         res.end("Home Page ");
//         event.emit("homePageAssessed")
//     }
// }
// else if(req.url=="/about"){
//      res.end("about Route ");
//      event.emit("homePageAssessed")
//  }
// })
//    else if(req.url==""){
//         res.end("Home Page ");
//         event.emit("homePageAssessed")
//     }
// }))


// event.on("homePageAccessed",()=>{
//     console.log("about route accessed");
// })

// const event = new EventEimtter();

// event.on("myName",(name ,age )=>{
//     console.log(`My name is ${name} and my age is ${age}` );
// });
// event.emit("myName");

// event.emit("myName","Utkarsh",100)


})

server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on 3000 port ")
})
