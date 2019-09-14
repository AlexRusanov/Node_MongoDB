const express = require('express');

const router = express.Router();

const { jsonHandler } = require('../services/jsonHandler');

router.get('/', function (req, res) {
    const data = require('../data/payments.json');

    res.send(jsonHandler.createResponse(data));
});

router.get('/clients/:clientId?', function (req, res) {
    const data = require('../data/payments.json');
    const clientId = req.params.clientId;

    let response = {};

    try {
        let result = data;

        if (clientId) {
            result = Array.isArray(result) && result.filter(pay => pay.clientId === +clientId) || [];
        }

        response = jsonHandler.createResponse(result);
    } catch(err) {
        response = jsonHandler.createResponse([], false, err.message);
    }

    res.send(response);
});

module.exports.routerPayments = router;