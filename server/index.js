const products_controller = require('../products_controller');
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Connection String -->>
//postgres://[username]:[password]@[host]:[port]/[database]
massive('postgres://postgres:@localhost:5433/sandbox').then(db => {
    app.set('db', db);
})

app.get('/api/products', products_controller.getAll);

app.get('/api/product/:id', products_controller.getOne);

app.put('/api/product/:id', products_controller.update);

app.post('/api/product', products_controller.create);

app.delete('/api/product/:id', products_controller.delete);



app.listen(3000, () => console.log('You are now listening on port 3000'));