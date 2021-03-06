const express = require('express');
var ObjectID = require('mongodb').ObjectID;
const router = express.Router();
const {jsonHandler} = require('../services/jsonHandler');
const clientCollection = 'clients';

module.exports.routeClients = function (db) {

    router.get('/:clientId?', function (req, res) {
        const clientId = req.params.clientId;
        const collection = db.collection(clientCollection);
        const filter = {};

        if (clientId) {
            filter['_id'] = new ObjectID(clientId);
        }

        collection
            .find(filter)
            .toArray((err, docs) => {

                (
                    err
                        ? res.status(403)
                        : res.status(200)
                ).send(
                    jsonHandler.createResponse(() => {
                        if (err) {
                            throw new Error(err);
                        }

                        return docs;
                    })
                );

            });

    });

    return router;
};
