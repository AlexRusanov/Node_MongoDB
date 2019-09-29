class collectionHandler {
    /**
     *
     */
    static createResponse(collection) {
        return new Promise((resolve, reject) => {
            collection.toArray((err, items) => {
                if (err) {
                    reject(err)
                }

                resolve(items);
            });
        });
    }
}

module.exports.collectionHandler = collectionHandler;
