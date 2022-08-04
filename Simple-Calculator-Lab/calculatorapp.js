const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send(`
    <form action="/operator" method="post">
    <div>Enter two numbers
        <input type="text" name="first" /><br />
        <input type="text" name="second" /><br />
        <label>Select Operator </label>
        <select name="operation" id="operator">
            <option value="add" selected>Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
        </select><br />
        <input type="submit" value="Click" />
    </div>
    </form>
    `);
});

app.use('/operator', express.urlencoded({ extended: true }), (req, res, next) => {
    var answer = 0;
    var first = parseInt(req.body.first);
    var second = parseInt(req.body.second);
    var operation = req.body.operation;
    if (operation === 'add') {
        answer = first + second;
    } else if (operation === 'subtract') {
        answer = first - second;
    } else if (operation === 'multiply') {
        answer = first * second;
    } else if (operation === 'divide') {
        answer = first / second;
    }
    res.send(`
    <!DOCTYPE html>
    <html>
    <head><meta charset=\"utf-8\"/>
    <title>Calculator Web Site</title>
    </head>
    <body>
    <p>The answer is:  ${String(answer)}</p>
    <p><a href="/">Another calculation</a></p>
    </body>
    </html> 
    `);
});

app.use((err, req, res, next) => {
    res.status(500).send(`404 not found`);
});

app.listen(3000);