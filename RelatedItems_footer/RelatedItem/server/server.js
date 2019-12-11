const express = require('express');
const axios = require('axios');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
var connection = require('./config');

const app = express();

const port = 3006;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.get('/getApp', (req,res) => {
    res.sendFile(path.join(`${__dirname}/../dist/bundle.js`))
})


app.get('/getItems', (req, res) => {
    connection.query('SELECT * FROM mando', function (error, results) {
        if (error){
            console.error(error)
        }else
            res.send(results)
      });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
