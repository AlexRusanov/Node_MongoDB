const payments = require('../modules/payments');
const clients = require('../modules/clients');
const news = require('../modules/news');

module.exports = function(app, database) {
    app.use((req, res, next )=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });

    app.use('/payments', payments.routePayments(database));
    app.use('/clients', clients.routeClients(database));
    app.use('/news', news.routeNews(database));
};
