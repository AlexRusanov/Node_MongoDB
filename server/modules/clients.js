const express = require('express');

const router = express.Router();

const { jsonHandler } = require('../services/jsonHandler');

router.get('/:clientId?', function (req, res) {
    const data = require('../data/clients.json');

    const clientId = req.params.clientId;

    let result = data;

    try {
        if (clientId) {
            result = Array.isArray(data) && data.filter(client => client.clientId === +clientId) || [];
        }

        result = jsonHandler.createResponse(result);
    } catch (err) {
        result = jsonHandler.createResponse([], false, err.message);
    }

    res.send(result);
});

module.exports.routerClients = router;