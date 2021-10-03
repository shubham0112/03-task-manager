
//object of this class is an error having message and status code as provided by us
class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message); //invokes constructor of parent class
        this.statusCode=statusCode;
    }
}

//we will call this function whenever we want to create error
//which is in turn calling the constructor of CustomAPIError class
const createCustomError=(msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode);
}

module.exports=(createCustomError,CustomAPIError);