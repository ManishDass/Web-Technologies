const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Hello HTTP</h1>')
})

// server.listen(1000); //listen on 1000 port localhost:1000 this line will also work
server.listen(port,()=>
{
    console.log(`Server is live at localhost:${port}`);
})

