// const express=require("express")

// const server=express();

// const middleware1=(req,res,next)=>{
//     console.log("hi bapu middleware 1");
//     next()
// }

// const middleware2=(req,res,next)=>{
//     console.log("hi bapu middleware 2");
//     next()
// }

// server.use(middleware1)
// server.use(middleware2)

// server.get("/",(req,res)=>{
//     res.send("middle")
// })

// server.listen(5000)








const express=require("express")

const server=express()

const middleware1=(req,res,next)=>{
    console.log("Middle 1.0");
    // res.send("<h1>Hello</h1>")
    next()
}

const middleware2=(req,res,next)=>{
    console.log("Middle 22.0");
    next()
}

// server.use(middleware1)
// server.use(middleware2)

server.get("/", middleware1,(req,res)=>{
    res.send("NEW MIDDLE")
})

server.get("/app",middleware2,(req,res)=>{
    res.send("NEW MIDDLE  APP")
})

server.listen(4000)








