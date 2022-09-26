const express = require('express');
const bodyParser = require('body-parser');
const customerRoute  = require('./routes/customer.route');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

customerRoute(app)


app.listen(8080, () => {
       console.log('Server Berjalan di Port : 8080');
});