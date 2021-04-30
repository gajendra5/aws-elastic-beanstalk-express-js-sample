const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome To AWS Cloud Computing!!'));  
app.get('/', (req, res) => res.send('==>> Develop/Maintain/Operate Your Computing Environment From AnyWhere in the World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
