const express = require("express")
//require says, "we installed express and now we want to load it"
//express is now a variable

let  app = express()
//the express server is now named "app"


app.get('/', (req, res) => res.send("Whatever I want"));
app.get('/about',(req,res) => res.send("This is about me"));

//app.get is a function with two arguments. First, a "path". Second, the handler.
//When we hit teh local url, we want to respond by doing a req,res 


app.use(express.static('public'))

app.listen(3000,  () => console.log("Example app listening on port 3000!"));

//app.listen says, "we want our web server to listen on this port number".
//app listen opens up port 3000, making it available for our browser to access. 
//then makes the web server on port 3000 start listening to requests

