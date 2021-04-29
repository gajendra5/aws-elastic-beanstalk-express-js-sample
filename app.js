const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome AWS Cloud Computing! Develop/Maintain/Operate from AnyWhere in the World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
