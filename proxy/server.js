const express = require('express');
const BodyParser = require('body-parser');
const path = require('path')
const cors = require('cors');
const morgan = require('morgan')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(BodyParser.json());
app.use(morgan('dev'))

app.use(express.static(path.join(`${__dirname}/public/lib`)))

app.listen(port,(err) => {
    if(err) {
        console.error
    } else {
        console.log(`listening on ${port}`)
    }

})