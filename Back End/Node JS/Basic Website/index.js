const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.setHeader('Content-Type','text/html')
    

    if(req.url == '/')
    {
        res.statusCode = 200;
        const data = fs.readFileSync('C://Users//Newto//Documents//Web Technologies//Back End//Node JS//Basic Website//index.html');
        res.end(data.toString());
    }
    else if(req.url == '/about')
    {
        res.end('<h1>Hello World Test Page working successfully</h1>');
    }

})

server.listen(port,()=>
{
    console.log(`Server is live at localhost:${port}`);
})
