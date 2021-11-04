const express = require('express');
const app = express();

const router = require('./src/pages/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connect = require('./src/database/connection');
connect();

app.use('/api',router);

app.get('/', function (req, res) {
      res.send('Welcome to bantu-marketplace-test');
});

app.listen(5000,()=> console.table('Listen on port 5000'));