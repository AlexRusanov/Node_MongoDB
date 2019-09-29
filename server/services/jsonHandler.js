class JsonHandler {

    static createResponse(callBack){
        const response = {
            status:true,
            message:"",
            data:[]
        };

        try {
            response.data = callBack();
        }catch (e){
            response.status =false;
            response.message = e.message
        }

        return JSON.stringify(response);
    }

}

module.exports.jsonHandler = JsonHandler;
