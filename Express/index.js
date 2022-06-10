
const express = require("express")
const app = express()
let path = require("path")

const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

let data = {};
let countClient = 0;

app.get('/', (req, res, next) => {
    res.send('Hello')
    count++;

})
app.get('/add', (req, res, next) => {
    console.log("add get`",req.body);
    res.sendFile(path.join(__dirname,'', 'domExersice.html'))
    
})

app.post('/add', (req, res, next) => {
    console.log("add post",req.body);
    data = req.body;
    res.redirect('/view')
})

app.get('/view', (req, res, next) => {
   let html;
   html += createSpan("FirstName", data["fname"]);
   html += createSpan("About", data["about"]);
   html += createSpan("Gender", data["gender"]); 
   html += createSpan("Course", data["courses"]); 
   html += createSpan("Gadget", data["gadget"]);
   html += '<p> Count Client :' + countClient + '</p>';

res.send(html);
})

function createSpan(label, data){
    return "<span>" + label + " --> " + data + " </span></br>"
}

app.use('/error',(req, res, next) => {
    res.send(error());
    
})
app.use((req, res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname,'', '404.html'))
})
app.use((error,req, res, next) => {
    res.status(500);
    res.sendFile(path.join(__dirname,'', 'error.html'))
})

app.listen(800, () => console.log("this is my port"))