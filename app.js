const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hi Aarush Mumma calling you!'))
app.listen(8080);