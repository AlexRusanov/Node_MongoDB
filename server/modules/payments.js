const express = require('express');
var ObjectID = require('mongodb').ObjectID;
const router = express.Router();
const {jsonHandler} = require('../services/jsonHandler');
const {collectionHandler} = require('../services/collectionHandler');
const paymentCollection = 'payments';

module.exports.routePayments = function (db) {
    router.get('/:paymentId?', function (req, res) {
        const paymentId = req.params.paymentId;
        const collection = db.collection(paymentCollection);
        const filter = {};

        if (paymentId) {
            filter['_id'] = new ObjectID(paymentId);
        }

        collectionHandler
            .createResponse(collection.find(filter))
            .then(items => {
                res
                    .status(200)
                    .send(
                        jsonHandler.createResponse(() => {
                            return items;
                        })
                    );
            })
            .catch(error => {
                res
                    .status(400)
                    .send(
                        jsonHandler.createResponse(() => {
                            throw new Error(error)
                        })
                    );
            });
    });

    router.get('/clients/:clientId?', function (req, res) {
        const clientId = req.params.clientId;
        const collection = db.collection(paymentCollection);
        const filter = {};

        if (clientId) {
            filter['clientId'] = new ObjectID(clientId);
        }

        collection
            .find(filter)
            .toArray((err, docs) => {

            });
    });

    return router;
};
