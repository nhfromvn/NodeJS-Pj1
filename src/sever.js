const express = require('express')
import configViewEngine from './config/viewEngine'

require('dotenv').config();

const app = express();

configViewEngine(app);

const port = process.env.PORT;
console.log('>>> check port: ', port);

const path = require('path');
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})