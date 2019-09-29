const express = require('express');
const router = express.Router();
var ObjectID = require('mongodb').ObjectID;
const {jsonHandler} = require('../services/jsonHandler');
const newsCollection = 'news';

module.exports.routeNews = function (db) {

    router.get('/:newsId?', function (req, res) {
        const newsId = req.params.newsId;
        const collection = db.collection(newsCollection);
        const filter = {};

        if (newsId) {
            filter['_id'] = new ObjectID(newsId);
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
