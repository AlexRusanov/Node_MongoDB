const express = require('express');
const payments = require('./modules/payments');
const clients = require('./modules/clients');

const app = express();

app.use('/payments', payments.routerPayments);
app.use('/clients', clients.routerClients);

app.listen('3000');