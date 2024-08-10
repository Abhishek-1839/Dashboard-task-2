const data = require('./appliances.json');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 9000;

app.use(cors());

app.get('/appliances', (req, res) => {
    res.send(data);
});

app.get('/appliances/:id', (req, res) => {
    const id = req.params.id;
    const appliance = data.find(item => item.id === id);

    if (appliance) {
        res.send(appliance);
    } else {
        res.status(404).send({ error: 'Appliance not found' });  
    }
});

app.listen(port, () => {
    console.log('Server is running on port:' + port);
}); 