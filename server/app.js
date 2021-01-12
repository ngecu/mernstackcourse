// This app starts a server and listens on port 3000 for connections.
// The app responds with “Hello World!” for requests to the root URL (/) or route. 
// For every other path, it will respond with a 404 Not Found.

const express = require('express')
const app = express()
const PORT = 5000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})