const express = require('express');
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser');
const connection = require('./config');

const server = express();

const port = 3004;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));;
server.use(cors());


connection.connect((err) => {
    if (err) {
        console.error(err);
    }else {
        console.log('connection successful')
    }
});

server.get('/getDes',(req,res) => {
    res.sendFile(path.join(`${__dirname}/../dist/bundle.js`))
})

server.get('/Description/:id', (req, res) => {
    connection.query(`SELECT * FROM information WHERE id = '${req.params.id}';`, (err, results) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).send(results)
        }
    })    
});







server.listen(port, () => {
    console.log(`listening on port${port}`)
})
