class JsonHandler {
    static createResponse(data = [], status = true, message = '') {
        return JSON.stringify({
            status,
            data,
            message
        })
    }
}

module.exports.jsonHandler = JsonHandler;