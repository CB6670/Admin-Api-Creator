const express = require('express');
const app = express();

const port = process.env.PORT || 'https://prof-acme-user-departments-api.herokuapp.com/';

app.listen(port);

app.use(express.urlencoded());
app.use(express.json());

app.get('/')