const data = require('./appliances.json');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 9000;

app.use(cors());

app.get('/appliances', (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log('Server is running on port:' + port);
}); 