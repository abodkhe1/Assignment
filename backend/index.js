// require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
require('./config')
const router = require('./router/empRouter');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`server start`);
});
app.use('/api', router);
app.listen(port, () => {
    console.log(`server start on port no ${port}`);
})