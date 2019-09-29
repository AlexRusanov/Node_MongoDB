const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const db = require('./config/db');

const app = express();

const client = new mongoClient(db.url,
    {useNewUrlParser: true}
);

client.connect((err, connection) => {

    require('./routes/route')(app,
        connection.db('clientdb')
    );

    app.listen('3000', () => {
        console.log('We are live!');
    });

    console.log('Error ->', err, db);

    // perform actions on the collection object
    // client.close();
});
